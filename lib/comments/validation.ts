import { randomBytes } from "node:crypto";
import { BlogRequestError } from "../blog/errors.ts";

const URL=/https?:\/\/|www\./gi;
export function validateComment(value:Record<string,unknown>){
 const nickname=typeof value.nickname==="string"?value.nickname.trim():"";const body=typeof value.body==="string"?value.body.trim():"";
 if(nickname.length<1||nickname.length>40)throw new BlogRequestError("INVALID_NICKNAME",400);
 if(body.length<2||body.length>1500)throw new BlogRequestError("INVALID_COMMENT_LENGTH",400);
 if((body.match(URL)??[]).length>2)throw new BlogRequestError("TOO_MANY_LINKS",400);
 if(/[<>]/.test(body)||/[<>]/.test(nickname))throw new BlogRequestError("HTML_NOT_ALLOWED",400);
 const articlePath=typeof value.articlePath==="string"?value.articlePath:"";
 if(!/^\/(?:ko\/)?insights\/[a-z0-9-]+$/.test(articlePath))throw new BlogRequestError("INVALID_ARTICLE",400);
 return{nickname,body,articlePath};
}
export const newDeleteToken=()=>randomBytes(32).toString("base64url");
