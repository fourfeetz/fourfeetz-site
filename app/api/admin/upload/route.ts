import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";
import { assertSameOrigin, errorResponse, requireAdmin, BlogRequestError } from "@/lib/blog/security";
import {downloadRemoteImage,validateImageBytes} from "@/lib/blog/imageUpload";

export async function POST(request: Request) {
  try {
    assertSameOrigin(request); await requireAdmin();
    const token=process.env.BLOG_BLOB_READ_WRITE_TOKEN;
    const storeId=process.env.BLOG_BLOB_STORE_ID;
    if(!token||!storeId) throw new BlogRequestError("IMAGE_STORAGE_NOT_CONFIGURED",503);
    const declared=Number(request.headers.get("content-length")); if(Number.isFinite(declared)&&declared>8_500_000) throw new BlogRequestError("IMAGE_TOO_LARGE",413);
    let image:{bytes:Uint8Array;type:string;ext:string};
    if(request.headers.get("content-type")?.startsWith("application/json")){
      const body=await request.json() as {sourceUrl?:unknown};image=await downloadRemoteImage(body.sourceUrl);
    }else{
      const form=await request.formData();const file=form.get("file");if(!(file instanceof File)||file.size===0||file.size>8_000_000)throw new BlogRequestError("INVALID_IMAGE",400);image=validateImageBytes(new Uint8Array(await file.arrayBuffer()),file.type);
    }
    const blob=await put(`insights/${randomUUID()}.${image.ext}`,Buffer.from(image.bytes),{access:"public",contentType:image.type,addRandomSuffix:false,token,storeId});
    return Response.json({url:blob.url});
  } catch(e){return errorResponse(e);}
}
