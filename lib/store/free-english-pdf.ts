const pages = [
  ["FOURFEETZ / DIGITAL EDUCATION","FREE START GUIDE","AI Pet Video Starter Guide","Concepts and a hands-on path for your first creation","Concepts - First prompt - Step-by-step creation - Checklist","FourFeetz Studios","November 2026 - English Edition - Brand-independent educational material"],
  ["FREE 01 / GETTING STARTED","What you will learn","This short beginner guide helps you understand how AI video creation works and generate your first clip yourself.","It is not a replacement for the complete paid Starter Pack. It provides the essential concepts and a prompt example so you can experience the workflow without a purchase.","WHAT YOU WILL MAKE","Photo -> Video generation -> Editing -> Export","Prepare one photo you have permission to use, an image-to-video AI tool, and a video editor that supports a 9:16 canvas.","Estimated working time: allow about 30-60 minutes for planning and editing, excluding sign-up, generation queues and retries.","FREE 02 / CONCEPTS","Text-to-video vs. image-to-video","Image-to-video uses a reference photo plus a motion description and is the best starting point when you want to animate a real pet photo.","Text-to-video uses written descriptions of appearance, place and action and is useful for practicing with an imaginary animal character.","Before you start: confirm image rights and owner permission; choose a clear photo; remember that generated results vary by model and source material.","Even with a real photo, the generated scene may not represent an event that actually happened. Check each tool's terms and commercial-use conditions."],
  ["FREE 03 / STORY","Describe a 15-second video in one sentence","For your first video, one animal, one location and one action are enough.","0-3 sec: Who is where?   3-10 sec: One small action   10-15 sec: Finish on an expression","Example: A cat sits on a cushion by the window, gently turns its head, and looks toward the camera.","COMMON MISTAKES","Avoid too many actions in one clip, complex object exchanges between several animals, repeated location changes, and fast camera movement.","A good first-video result: if the intended action is mostly clear and there is no severe distortion of the face or paws, your first step is a success.","FREE 04 / PHOTO","A simple checklist for choosing a good photo","Prefer a clear face, eyes and ears; one pet as the main subject; a simple background; framing similar to the desired video; and natural lighting.","Avoid tiny or blurry faces, overlapping animals, heavily cropped bodies or ears, strong filters and harsh backlighting.","Write down 2-3 features to preserve, such as gray stripes, round eyes or a light-blue collar. Check the service's upload and training policies before using a photo.","For a first attempt, use small face-centered motion rather than asking a face-only close-up to become a full-body running scene."],
  ["FREE 05 / PROMPT","Enter your first prompt","Start in image-to-video mode with a reference image. Let the image provide the appearance while the text describes the motion.","FREE BEGINNER PROMPT","The pet in the reference image sits comfortably. It slowly tilts its head once and looks toward the camera. The camera remains fixed at eye level and natural lighting is maintained. Keep the face and coat color as consistent with the reference image as possible.","Easy variations: replace the head tilt with one blink; let the reference image define the species; keep the camera fixed for easier stabilization.","The prompt focuses on action and camera behavior instead of repeating appearance and background already present in the photo.","FREE 06 / GENERATION","Six-step workflow","1. Open a new project or Video creation. 2. Choose image-to-video and upload the photo. 3. Paste the example prompt. 4. If supported, choose 9:16 and a short duration. 5. Generate and inspect face, motion and camera. 6. Save the file and move to an editor.","9:16 is a vertical aspect ratio. Duration, aspect ratio, output count and resolution depend on the service, model and plan."],
  ["FREE 07 / EDITING","Turn your first clip into a short video","If the generated clip is shorter than 15 seconds, combine a still image, the generated clip and a simple end card.","0-2 sec: Photo / one-line intro   2-9 sec: Generated action clip   9-15 sec: Short end card","EDITING ORDER","Create a 9:16 canvas; place the source photo and clip in order; trim unnatural opening or ending frames; add captions during editing instead of generation; check music and sound-effect rights; play the exported file full-screen on your phone.","Strict appearance continuity across many scenes is outside the scope of this beginner guide.","FREE 08 / CHECKLIST","Troubleshooting, practical tips and final check","If the face changes, fix the camera, simplify motion and consider another photo. If paws or legs look wrong, use face-centered motion. If the background moves, simplify background instructions and keep the camera fixed. If text is broken, add it during editing.","FINAL CHECK","Is the main subject visible in the first two seconds? Is there one clear movement? Is there severe appearance distortion? Is the face safely inside the 9:16 frame? Have you checked photo and music rights?"],
  ["PRACTICAL TIP","If a result works well, save the photo, prompt and settings together. On the next video, change only the location or one action so you can compare the difference.","Want to go further?","The Starter Pack goes deeper with three reusable general-purpose prompts, Korean and English prompt versions, starting settings, failure-to-fix examples, complete hands-on cases and worksheets. It extends this free introduction rather than simply repeating it."],
  ["FREE 09 / SOURCES","Tool documentation and usage notes","This free guide is general educational material. Interfaces, features and pricing may change.","Official references: Google Flow Help - support.google.com/flow/answer/16353334 | Runway Image-to-Video Prompting Guide - help.runwayml.com | CapCut vertical video guide - capcut.com/resource/vertical-format-in-videos","Updated: November 2026. If this PDF differs from a service provider's current documentation, follow the provider's latest official guidance.","USAGE SCOPE","This free guide is provided for personal learning and creative practice. Unauthorized resale, redistribution or upload of the original PDF to a public repository is not permitted. Commercial use of final work depends on the licenses for the AI tools, photos, music and other materials you use.","FourFeetz Studios - fourfeetz.com"]
];

function esc(s: string) { return s.replaceAll("\\","\\\\").replaceAll("(","\\(").replaceAll(")","\\)"); }
function jpegSize(data: Buffer) {
  let i = 2;
  while (i + 9 < data.length) {
    if (data[i] !== 0xff) { i++; continue; }
    const marker = data[i + 1];
    if (marker === 0xd8 || marker === 0xd9) { i += 2; continue; }
    const len = data.readUInt16BE(i + 2);
    if ([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker)) {
      return { height: data.readUInt16BE(i + 5), width: data.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  throw new Error("Unsupported JPEG");
}
export async function createEnglishFreeGuidePdf() {
  const { readFile } = await import("node:fs/promises");
  const path = await import("node:path");
  const coverImage = await readFile(path.join(process.cwd(), "public", "images", "shorts", "dog-and-cat", "dog-and-cat-0907-eng-poster.jpg"));
  const imageSize = jpegSize(coverImage);
  const objects: string[] = [];
  const add=(s:string)=>{objects.push(s); return objects.length;};
  const font=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const bold=add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");\n  const image=add(`<< /Type /XObject /Subtype /Image /Width ${imageSize.width} /Height ${imageSize.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${coverImage.byteLength} >>\\nstream\\n${coverImage.toString("binary")}\\nendstream`);
  const pageRefs:number[]=[];
  const streamRefs:number[]=[];
  for (const lines of pages) {
    let y=790; let body="BT\n";
    lines.forEach((line,i)=>{
      const isHead = i===0 || /^[A-Z0-9 /-]+$/.test(line) || line.endsWith("?") || ["What you will learn","Text-to-video vs. image-to-video","Describe a 15-second video in one sentence","A simple checklist for choosing a good photo","Enter your first prompt","Six-step workflow","Turn your first clip into a short video","Troubleshooting, practical tips and final check","Want to go further?","Tool documentation and usage notes"].includes(line);
      const size = i===2 && lines===pages[0] ? 25 : isHead ? 13 : 9.5;
      const leading = size>=20 ? 34 : isHead ? 20 : 15;
      const fontName = isHead || (lines===pages[0] && i<=4) ? "F2" : "F1";
      const max= size>=20 ? 38 : isHead ? 70 : 92;
      const words=line.split(" "); let rows:string[]=[]; let row="";
      for(const word of words){ if((row+" "+word).trim().length>max){rows.push(row);row=word}else row=(row+" "+word).trim(); } if(row)rows.push(row);
      for(const r of rows){ body += `/${fontName} ${size} Tf 54 ${y} Td (${esc(r)}) Tj -54 -${y} Td\n`; y-=leading; }
      y-= isHead ? 5 : 3;
    });
    body += "ET";
    const sr=add(`<< /Length ${Buffer.byteLength(body)} >>\nstream\n${body}\nendstream`); streamRefs.push(sr);
    pageRefs.push(0);
  }
  const pagesObjIndex=objects.length+1+pages.length;
  for(let i=0;i<pages.length;i++){ pageRefs[i]=add(`<< /Type /Page /Parent ${pagesObjIndex} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${font} 0 R /F2 ${bold} 0 R >> /XObject << /Im1 ${image} 0 R >> >> /Contents ${streamRefs[i]} 0 R >>`); }
  const pagesObj=add(`<< /Type /Pages /Kids [${pageRefs.map(r=>r+" 0 R").join(" ")}] /Count ${pageRefs.length} >>`);
  const catalog=add(`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`);
  let pdf="%PDF-1.4\n"; const offsets=[0];
  objects.forEach((o,i)=>{offsets.push(Buffer.byteLength(pdf)); pdf += `${i+1} 0 obj\n${o}\nendobj\n`;});
  const xref=Buffer.byteLength(pdf); pdf += `xref\n0 ${objects.length+1}\n0000000000 65535 f \n`; for(let i=1;i<=objects.length;i++) pdf += String(offsets[i]).padStart(10,"0")+" 00000 n \n";
  pdf += `trailer\n<< /Size ${objects.length+1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf);
}