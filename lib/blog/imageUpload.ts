import "server-only";
import {lookup} from "node:dns/promises";
import {isIP} from "node:net";
import {BlogRequestError} from "./security";

const MAX_IMAGE_BYTES=8_000_000;
const signatures=[
 {type:"image/jpeg",ext:"jpg",valid:(bytes:Uint8Array)=>bytes[0]===0xff&&bytes[1]===0xd8&&bytes[2]===0xff},
 {type:"image/png",ext:"png",valid:(bytes:Uint8Array)=>bytes[0]===0x89&&bytes[1]===0x50&&bytes[2]===0x4e&&bytes[3]===0x47},
 {type:"image/webp",ext:"webp",valid:(bytes:Uint8Array)=>new TextDecoder().decode(bytes.slice(0,4))==="RIFF"&&new TextDecoder().decode(bytes.slice(8,12))==="WEBP"},
];

export function isPublicImageHost(hostname:string){
 const host=hostname.toLowerCase().replace(/\.$/,"");
 if(!host||host==="localhost"||host.endsWith(".localhost")||host.endsWith(".local")||host.endsWith(".internal"))return false;
 return true;
}

export function isPublicIp(address:string):boolean{
 if(isIP(address)===4){const parts=address.split(".").map(Number);const [a,b]=parts;return !(a===0||a===10||a===127||a>=224||(a===169&&b===254)||(a===172&&b>=16&&b<=31)||(a===192&&b===168)||(a===100&&b>=64&&b<=127)||(a===198&&(b===18||b===19)))}
 if(isIP(address)===6){const normalized=address.toLowerCase();if(normalized==="::"||normalized==="::1"||normalized.startsWith("fc")||normalized.startsWith("fd")||/^fe[89ab]/.test(normalized)||normalized.startsWith("ff"))return false;const mapped=normalized.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/);return mapped?isPublicIp(mapped[1]):true}
 return false;
}

export function validateRemoteImageUrl(value:unknown){
 if(typeof value!=="string"||value.length>2000)throw new BlogRequestError("INVALID_REMOTE_IMAGE_URL",400);
 let url:URL;try{url=new URL(value)}catch{throw new BlogRequestError("INVALID_REMOTE_IMAGE_URL",400)}
 if(url.protocol!=="https:"||url.username||url.password||url.port||!isPublicImageHost(url.hostname))throw new BlogRequestError("UNSAFE_REMOTE_IMAGE_URL",400);
 return url;
}

async function assertPublicDns(url:URL){const addresses=await lookup(url.hostname,{all:true,verbatim:true});if(!addresses.length||addresses.some(({address})=>!isPublicIp(address)))throw new BlogRequestError("UNSAFE_REMOTE_IMAGE_HOST",400)}

async function readLimited(response:Response){
 const declared=Number(response.headers.get("content-length"));if(Number.isFinite(declared)&&declared>MAX_IMAGE_BYTES)throw new BlogRequestError("IMAGE_TOO_LARGE",413);
 if(!response.body)throw new BlogRequestError("REMOTE_IMAGE_UNAVAILABLE",422);
 const reader=response.body.getReader(),chunks:Uint8Array[]=[];let size=0;
 while(true){const {done,value}=await reader.read();if(done)break;if(value){size+=value.byteLength;if(size>MAX_IMAGE_BYTES){await reader.cancel();throw new BlogRequestError("IMAGE_TOO_LARGE",413)}chunks.push(value)}}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength}return bytes;
}

export function validateImageBytes(bytes:Uint8Array,declaredType?:string){const kind=signatures.find(item=>(!declaredType||declaredType.split(";")[0]===item.type)&&item.valid(bytes));if(!kind)throw new BlogRequestError("INVALID_IMAGE_CONTENT",415);return{bytes,type:kind.type,ext:kind.ext}}

export async function downloadRemoteImage(source:unknown){
 let url=validateRemoteImageUrl(source);
 for(let redirects=0;redirects<=3;redirects++){
  await assertPublicDns(url);
  let response:Response;try{response=await fetch(url,{redirect:"manual",signal:AbortSignal.timeout(8_000),headers:{accept:"image/jpeg,image/png,image/webp","user-agent":"FourFeetz-Insights-Image-Importer/1.0"}})}catch{throw new BlogRequestError("REMOTE_IMAGE_UNAVAILABLE",422)}
  if(response.status>=300&&response.status<400){const location=response.headers.get("location");if(!location||redirects===3)throw new BlogRequestError("REMOTE_IMAGE_REDIRECT_REJECTED",422);url=validateRemoteImageUrl(new URL(location,url).toString());continue}
  if(!response.ok)throw new BlogRequestError("REMOTE_IMAGE_UNAVAILABLE",422);
  return validateImageBytes(await readLimited(response),response.headers.get("content-type")??undefined);
 }
 throw new BlogRequestError("REMOTE_IMAGE_UNAVAILABLE",422);
}
