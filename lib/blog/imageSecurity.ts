import {isIP} from "node:net";
import {BlogRequestError} from "./errors.ts";

export function isPublicImageHost(hostname:string){
 const host=hostname.toLowerCase().replace(/\.$/,"");
 return Boolean(host)&&host!=="localhost"&&!host.endsWith(".localhost")&&!host.endsWith(".local")&&!host.endsWith(".internal");
}

export function isPublicIp(address:string):boolean{
 if(isIP(address)===4){const [a,b]=address.split(".").map(Number);return !(a===0||a===10||a===127||a>=224||(a===169&&b===254)||(a===172&&b>=16&&b<=31)||(a===192&&b===168)||(a===100&&b>=64&&b<=127)||(a===198&&(b===18||b===19)))}
 if(isIP(address)===6){const normalized=address.toLowerCase();if(normalized==="::"||normalized==="::1"||normalized.startsWith("fc")||normalized.startsWith("fd")||/^fe[89ab]/.test(normalized)||normalized.startsWith("ff"))return false;const mapped=normalized.match(/::ffff:(\d+\.\d+\.\d+\.\d+)$/);return mapped?isPublicIp(mapped[1]):true}
 return false;
}

export function validateRemoteImageUrl(value:unknown){
 if(typeof value!=="string"||value.length>2000)throw new BlogRequestError("INVALID_REMOTE_IMAGE_URL",400);
 let url:URL;try{url=new URL(value)}catch{throw new BlogRequestError("INVALID_REMOTE_IMAGE_URL",400)}
 if(url.protocol!=="https:"||url.username||url.password||url.port||!isPublicImageHost(url.hostname))throw new BlogRequestError("UNSAFE_REMOTE_IMAGE_URL",400);
 return url;
}
