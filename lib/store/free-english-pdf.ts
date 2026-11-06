const pages: string[][] = [
  ["FOURFEETZ / DIGITAL EDUCATION","FREE START GUIDE","AI Pet Video Starter Guide","Concepts and a hands-on path for your first creation","Concepts - First prompt - Step-by-step creation - Checklist","FourFeetz Studios","November 2026 - English Edition"],
  ["FREE 01 / GETTING STARTED","What you will learn","This short beginner guide helps you understand how AI video creation works and generate your first clip yourself.","WHAT YOU WILL MAKE","Photo -> Video generation -> Editing -> Export","Prepare one clear pet photo you have permission to use, an image-to-video AI tool, and a video editor that supports a 9:16 canvas.","Estimated working time: allow about 30-60 minutes for planning and editing, excluding sign-up, queues and retries.","FREE 02 / CONCEPTS","Text-to-video vs. image-to-video","Image-to-video uses a reference photo plus a motion description. It is a good starting point when you want to animate a real pet photo.","Text-to-video uses written descriptions of appearance, place and action and is useful for practicing with an imaginary animal character.","Before you start: confirm image rights and owner permission, choose a clear photo, and remember that results vary by model and source material."],
  ["FREE 03 / STORY","Describe a 15-second video in one sentence","For your first video, one animal, one location and one action are enough.","0-3 sec: Who is where?  3-10 sec: One small action  10-15 sec: Finish on an expression","Example: A cat sits on a cushion by the window, gently turns its head, and looks toward the camera.","COMMON MISTAKES","Avoid too many actions in one clip, complex object exchanges, repeated location changes and fast camera movement.","FREE 04 / PHOTO","Choose a clear photo","Prefer a clear face, eyes and ears; one pet as the main subject; a simple background; and natural lighting.","Write down 2-3 features to preserve, such as coat markings, eye shape or collar color."],
  ["FREE 05 / PROMPT","Enter your first prompt","Start in image-to-video mode with a reference image. Let the image provide the appearance while the text describes motion.","FREE BEGINNER PROMPT","The pet in the reference image sits comfortably. It slowly tilts its head once and looks toward the camera. The camera remains fixed at eye level and natural lighting is maintained. Keep the face and coat color as consistent with the reference image as possible.","Easy variations: replace the head tilt with one blink, or change only one small action.","FREE 06 / GENERATION","Six-step workflow","1. Open video creation. 2. Choose image-to-video. 3. Upload the photo. 4. Paste the prompt. 5. Generate and inspect the face, motion and camera. 6. Save the file for editing.","Use 9:16 for vertical shorts when the selected tool supports it."],
  ["FREE 07 / EDITING","Turn your first clip into a short video","A simple short can combine the original photo, the generated clip and a clean end card.","0-2 sec: Photo / intro  2-9 sec: Generated clip  9-15 sec: End card","EDITING ORDER","Create a 9:16 canvas, place the source photo and clip in order, trim unnatural frames, add captions during editing, check music rights, and preview the export on your phone.","FREE 08 / TROUBLESHOOTING","Fix the biggest errors first","If the face changes, simplify motion and keep the camera fixed. If paws look wrong, use face-centered motion. If text is broken, add it during editing."],
  ["FREE 09 / CHECKLIST","Final check before export","Is the main subject visible in the first two seconds? Is there one clear movement? Is there severe appearance distortion? Is the face safely inside the 9:16 frame? Have you checked photo and music rights?","PRACTICAL TIP","When a result works, save the photo, prompt and settings together. Next time, change only one variable so you can compare the difference.","Want to go further?","The paid Starter Pack goes deeper with reusable prompts, settings guidance, troubleshooting patterns, hands-on examples and worksheets."],
  ["FREE 10 / SOURCES","Official references and usage notes","This guide is general educational material. Interfaces, features and pricing may change.","Google Flow Help: support.google.com/flow/answer/16353334","Runway Image-to-Video Prompting Guide: help.runwayml.com","CapCut vertical video guide: capcut.com/resource/vertical-format-in-videos","USAGE SCOPE","Unauthorized resale, redistribution or public-repository upload of the original PDF is not permitted. Commercial use of final work depends on the licenses for the AI tools, photos, music and other materials you use.","FourFeetz Studios - fourfeetz.com"]
];

function escapePdfText(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function wrapText(value: string, maxChars: number) {
  const words = value.split(/\\s+/);
  const rows: string[] = [];
  let row = "";
  for (const word of words) {
    const next = row ? row + " " + word : word;
    if (next.length > maxChars && row) {
      rows.push(row);
      row = word;
    } else {
      row = next;
    }
  }
  if (row) rows.push(row);
  return rows;
}

export function createEnglishFreeGuidePdf() {
  const objects: string[] = [];
  const add = (value: string) => {
    objects.push(value);
    return objects.length;
  };

  const regularFont = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const boldFont = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const contentRefs: number[] = [];

  for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
    const lines = pages[pageIndex];
    let y = 786;
    const commands: string[] = [
      "0.08 0.18 0.39 rg",
      "0 838 595 4 re f",
      "0.15 0.20 0.31 rg",
      "BT"
    ];

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      const heading = index === 0 || /^[A-Z0-9 /-]+$/.test(line) || line.endsWith("?") ||
        ["What you will learn","Text-to-video vs. image-to-video","Describe a 15-second video in one sentence","Choose a clear photo","Enter your first prompt","Six-step workflow","Turn your first clip into a short video","Fix the biggest errors first","Final check before export","Want to go further?","Official references and usage notes"].includes(line);
      const title = pageIndex === 0 && index === 2;
      const size = title ? 25 : heading ? 13 : 9.5;
      const leading = title ? 34 : heading ? 20 : 15;
      const font = heading || (pageIndex === 0 && index <= 4) ? "F2" : "F1";
      const maxChars = title ? 38 : heading ? 70 : 92;

      for (const row of wrapText(line, maxChars)) {
        commands.push("/" + font + " " + size + " Tf");
        commands.push("1 0 0 1 54 " + y + " Tm");
        commands.push("(" + escapePdfText(row) + ") Tj");
        y -= leading;
      }
      y -= heading ? 5 : 3;
    }
    commands.push("ET");
    const body = commands.join("\n");
    contentRefs.push(add("<< /Length " + Buffer.byteLength(body, "utf8") + " >>\nstream\n" + body + "\nendstream"));
  }

  const pageRefs: number[] = [];
  const pagesObjectNumber = objects.length + pages.length + 1;

  for (const contentRef of contentRefs) {
    pageRefs.push(add(
      "<< /Type /Page /Parent " + pagesObjectNumber + " 0 R /MediaBox [0 0 595 842] " +
      "/Resources << /Font << /F1 " + regularFont + " 0 R /F2 " + boldFont + " 0 R >> >> " +
      "/Contents " + contentRef + " 0 R >>"
    ));
  }

  const pagesRef = add("<< /Type /Pages /Kids [" + pageRefs.map((ref) => ref + " 0 R").join(" ") + "] /Count " + pageRefs.length + " >>");
  const catalogRef = add("<< /Type /Catalog /Pages " + pagesRef + " 0 R >>");

  const chunks: Buffer[] = [Buffer.from("%PDF-1.4\n", "binary")];
  const offsets: number[] = [0];
  let byteOffset = chunks[0].length;

  objects.forEach((object, index) => {
    offsets.push(byteOffset);
    const chunk = Buffer.from((index + 1) + " 0 obj\n" + object + "\nendobj\n", "binary");
    chunks.push(chunk);
    byteOffset += chunk.length;
  });

  const xrefOffset = byteOffset;
  let xref = "xref\n0 " + (objects.length + 1) + "\n0000000000 65535 f \n";
  for (let index = 1; index <= objects.length; index++) {
    xref += String(offsets[index]).padStart(10, "0") + " 00000 n \n";
  }
  xref += "trailer\n<< /Size " + (objects.length + 1) + " /Root " + catalogRef + " 0 R >>\n";
  xref += "startxref\n" + xrefOffset + "\n%%EOF";

  chunks.push(Buffer.from(xref, "binary"));
  return Buffer.concat(chunks);
}
