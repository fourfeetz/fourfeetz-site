import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";
import { assertSameOrigin, errorResponse, requireAdmin, BlogRequestError } from "@/lib/blog/security";

const signatures = [
  { type: "image/jpeg", ext: "jpg", valid: (b: Uint8Array) => b[0]===0xff&&b[1]===0xd8&&b[2]===0xff },
  { type: "image/png", ext: "png", valid: (b: Uint8Array) => b[0]===0x89&&b[1]===0x50&&b[2]===0x4e&&b[3]===0x47 },
  { type: "image/webp", ext: "webp", valid: (b: Uint8Array) => new TextDecoder().decode(b.slice(0,4))==="RIFF"&&new TextDecoder().decode(b.slice(8,12))==="WEBP" },
];

export async function POST(request: Request) {
  try {
    assertSameOrigin(request); await requireAdmin();
    const token=process.env.BLOG_BLOB_READ_WRITE_TOKEN;
    const storeId=process.env.BLOG_BLOB_STORE_ID;
    if(!token||!storeId) throw new BlogRequestError("IMAGE_STORAGE_NOT_CONFIGURED",503);
    const declared=Number(request.headers.get("content-length")); if(Number.isFinite(declared)&&declared>8_500_000) throw new BlogRequestError("IMAGE_TOO_LARGE",413);
    const form=await request.formData(); const file=form.get("file"); if(!(file instanceof File)||file.size===0||file.size>8_000_000) throw new BlogRequestError("INVALID_IMAGE",400);
    const bytes=new Uint8Array(await file.arrayBuffer()); const kind=signatures.find((s)=>s.type===file.type&&s.valid(bytes)); if(!kind) throw new BlogRequestError("INVALID_IMAGE_CONTENT",415);
    const blob=await put(`insights/${randomUUID()}.${kind.ext}`,Buffer.from(bytes),{access:"public",contentType:kind.type,addRandomSuffix:false,token,storeId});
    return Response.json({url:blob.url});
  } catch(e){return errorResponse(e);}
}
