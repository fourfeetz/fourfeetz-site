import "server-only";
import {lookup} from "node:dns/promises";
import {BlogRequestError} from "./security";
import {isPublicIp,validateRemoteImageUrl} from "./imageSecurity";

const MAX_IMAGE_BYTES=8_000_000;
const signatures=[
 {type:"image/jpeg",ext:"jpg",valid:(bytes:Uint8Array)=>bytes[0]===0xff&&bytes[1]===0xd8&&bytes[2]===0xff},
 {type:"image/png",ext:"png",valid:(bytes:Uint8Array)=>bytes[0]===0x89&&bytes[1]===0x50&&bytes[2]===0x4e&&bytes[3]===0x47},
 {type:"image/webp",ext:"webp",valid:(bytes:Uint8Array)=>new TextDecoder().decode(bytes.slice(0,4))==="RIFF"&&new TextDecoder().decode(bytes.slice(8,12))==="WEBP"},
];

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
