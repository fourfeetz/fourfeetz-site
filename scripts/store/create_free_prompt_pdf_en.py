from io import BytesIO
from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "output" / "pdf" / "free-pet-video-prompt-v1.pdf"
OUTPUT = ROOT / "output" / "pdf" / "free-pet-video-prompt-en-v1.pdf"
FONT = Path("C:/Windows/Fonts/arial.ttf")
FONT_BOLD = Path("C:/Windows/Fonts/arialbd.ttf")

if not FONT.exists() or not FONT_BOLD.exists():
    raise SystemExit("Arial fonts are required to render the English guide.")

pdfmetrics.registerFont(TTFont("ArialFF", str(FONT)))
pdfmetrics.registerFont(TTFont("ArialFFBold", str(FONT_BOLD)))

PAGE_W, PAGE_H = A4
NAVY = colors.HexColor("#19315F")
PURPLE = colors.HexColor("#6B55D9")
TEAL = colors.HexColor("#238A84")
BROWN = colors.HexColor("#76523D")
TEXT = colors.HexColor("#34343B")
MUTED = colors.HexColor("#77747C")
RULE = colors.HexColor("#DFD1C2")
LAVENDER = colors.HexColor("#F0EDFF")
CREAM = colors.HexColor("#F8F1E8")
MINT = colors.HexColor("#EAF5F3")
WHITE = colors.white
LEFT = 18 * mm
RIGHT = PAGE_W - 18 * mm
CONTENT_W = RIGHT - LEFT

body = ParagraphStyle("Body", fontName="ArialFF", fontSize=9.1, leading=13.3, textColor=TEXT)
small = ParagraphStyle("Small", fontName="ArialFF", fontSize=7.9, leading=11.2, textColor=MUTED)
table_text = ParagraphStyle("Table", fontName="ArialFF", fontSize=7.7, leading=10.2, textColor=TEXT)
table_head = ParagraphStyle("TableHead", fontName="ArialFF", fontSize=7.8, leading=10.2, textColor=TEXT)
box_title = ParagraphStyle("BoxTitle", fontName="ArialFFBold", fontSize=10.2, leading=13, textColor=NAVY)
box_body = ParagraphStyle("BoxBody", fontName="ArialFF", fontSize=8.5, leading=12.3, textColor=TEXT)


def para(text, style=body):
    return Paragraph(text, style)


def draw_paragraph(c, text, x, y_top, width, style=body):
    p = para(text, style)
    _, height = p.wrap(width, PAGE_H)
    p.drawOn(c, x, y_top - height)
    return y_top - height


def draw_label(c, text, y):
    c.setFillColor(PURPLE)
    c.setFont("ArialFFBold", 7.6)
    c.drawString(LEFT, y, text.upper())
    return y - 15


def draw_title(c, text, y, size=19):
    c.setFillColor(NAVY)
    c.setFont("ArialFFBold", size)
    c.drawString(LEFT, y, text)
    return y - size - 9


def draw_rule(c, y):
    c.setStrokeColor(RULE)
    c.setLineWidth(0.7)
    c.line(LEFT, y, RIGHT, y)
    return y - 10


def draw_bullets(c, items, x, y, width, gap=4, size=8.8):
    style = ParagraphStyle("Bullet", parent=body, fontSize=size, leading=size + 4, leftIndent=10, firstLineIndent=-8)
    for item in items:
        y = draw_paragraph(c, f"&#8226;&nbsp; {item}", x, y, width, style) - gap
    return y


def draw_box(c, x, y_top, width, title, text, fill=MINT, border=RULE, pad=16):
    title_p = para(title, box_title)
    body_p = para(text, box_body)
    _, th = title_p.wrap(width - 2 * pad, PAGE_H)
    _, bh = body_p.wrap(width - 2 * pad, PAGE_H)
    height = th + bh + 2 * pad + 4
    c.setFillColor(fill)
    c.setStrokeColor(border)
    c.rect(x, y_top - height, width, height, fill=1, stroke=1)
    title_p.drawOn(c, x + pad, y_top - pad - th)
    body_p.drawOn(c, x + pad, y_top - pad - th - 4 - bh)
    return y_top - height


def draw_table(c, data, x, y_top, widths, row_heights=None, header=True, font_size=7.7):
    styled = []
    for r, row in enumerate(data):
        row_style = table_head if r == 0 and header else ParagraphStyle(
            f"Table{r}", parent=table_text, fontSize=font_size, leading=font_size + 2.8
        )
        styled.append([para(cell, row_style) for cell in row])
    table = Table(styled, colWidths=widths, rowHeights=row_heights, repeatRows=1 if header else 0)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), LAVENDER),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, colors.HexColor("#FBF8F4")]),
        ("TEXTCOLOR", (0, 0), (-1, -1), TEXT),
        ("GRID", (0, 0), (-1, -1), 0.45, RULE),
        ("LINEBELOW", (0, 0), (-1, 0), 0.8, PURPLE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    _, height = table.wrap(sum(widths), PAGE_H)
    table.drawOn(c, x, y_top - height)
    return y_top - height


def draw_flow(c, labels, subtitles, y_top, colors_list):
    gap = 10
    width = (CONTENT_W - gap * (len(labels) - 1)) / len(labels)
    height = 58
    for i, (label, subtitle, fill) in enumerate(zip(labels, subtitles, colors_list)):
        x = LEFT + i * (width + gap)
        c.setFillColor(fill)
        c.roundRect(x, y_top - height, width, height, 10, fill=1, stroke=0)
        c.setFillColor(NAVY if i % 2 == 0 else TEAL)
        c.setFont("ArialFFBold", 9.3)
        c.drawCentredString(x + width / 2, y_top - 23, label)
        c.setFillColor(MUTED)
        c.setFont("ArialFF", 7.2)
        c.drawCentredString(x + width / 2, y_top - 40, subtitle)
        if i < len(labels) - 1:
            arrow_x = x + width + 2
            arrow_y = y_top - height / 2
            c.setStrokeColor(PURPLE)
            c.line(arrow_x, arrow_y, arrow_x + 6, arrow_y)
            c.line(arrow_x + 3, arrow_y + 3, arrow_x + 6, arrow_y)
            c.line(arrow_x + 3, arrow_y - 3, arrow_x + 6, arrow_y)
    return y_top - height


def footer(c, page_number):
    c.setStrokeColor(RULE)
    c.line(LEFT, 16 * mm, RIGHT, 16 * mm)
    c.setFont("ArialFF", 7)
    c.setFillColor(MUTED)
    c.drawString(LEFT, 10 * mm, "FOURFEETZ  /  FREE GUIDE")
    c.drawRightString(RIGHT, 10 * mm, str(page_number))


def new_page(c, page_number, top_bar=True):
    if top_bar:
        c.setFillColor(NAVY)
        c.rect(0, PAGE_H - 10, PAGE_W, 10, fill=1, stroke=0)
    if page_number > 1:
        footer(c, page_number)


def cover_image():
    reader = PdfReader(SOURCE)
    images = reader.pages[0].images
    if len(images) != 1:
        raise RuntimeError("Expected exactly one cover image in the Korean source PDF")
    return ImageReader(BytesIO(images[0].data))


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=A4)
    c.setTitle("AI Pet Video Starter Guide")
    c.setAuthor("FourFeetz Studios")
    c.setSubject("A beginner's guide to creating a first AI pet video")

    # Page 1 - cover
    new_page(c, 1)
    c.setFillColor(PURPLE)
    c.setFont("ArialFF", 7.5)
    c.drawString(LEFT + 6, PAGE_H - 72, "FOURFEETZ / DIGITAL EDUCATION")
    card_x, card_y, card_w, card_h = LEFT + 6, 158, CONTENT_W - 12, 588
    c.setFillColor(colors.HexColor("#FBF8F4"))
    c.roundRect(card_x, card_y, card_w, card_h, 16, fill=1, stroke=0)
    c.setFillColor(TEAL)
    c.roundRect(card_x + 20, card_y + card_h - 52, 160, 26, 13, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("ArialFFBold", 8)
    c.drawCentredString(card_x + 100, card_y + card_h - 43, "FREE START GUIDE")
    c.setFillColor(NAVY)
    c.setFont("ArialFFBold", 26)
    c.drawString(card_x + 20, card_y + card_h - 112, "AI Pet Video")
    c.drawString(card_x + 20, card_y + card_h - 145, "Starter Guide")
    c.setFillColor(MUTED)
    c.setFont("ArialFF", 9)
    c.drawString(card_x + 20, card_y + card_h - 171, "A Beginner's Guide to Creating Your First AI Pet Video")
    image_x, image_y, image_w, image_h = card_x + 20, card_y + 124, card_w - 40, 226
    c.drawImage(cover_image(), image_x, image_y, image_w, image_h, preserveAspectRatio=False, mask="auto")
    c.setFillColor(NAVY)
    c.setFont("ArialFFBold", 8.5)
    c.drawString(card_x + 24, card_y + 98, "Concepts  ·  First Prompt  ·  Step-by-Step Workflow  ·  Checklist")
    c.setStrokeColor(RULE)
    c.line(card_x + 22, card_y + 74, card_x + card_w - 22, card_y + 74)
    c.setFillColor(BROWN)
    c.setFont("ArialFFBold", 10.5)
    c.drawString(card_x + 22, card_y + 48, "FourFeetz Studios")
    c.setFillColor(MUTED)
    c.setFont("ArialFF", 7.3)
    c.drawString(card_x + 22, card_y + 29, "November 2026 · English Edition · Brand-Independent Educational Material")
    c.showPage()

    # Page 2 - Getting started + concepts
    new_page(c, 2)
    y = PAGE_H - 42
    y = draw_label(c, "FREE 01 / Getting Started", y)
    y = draw_title(c, "What You'll Learn", y)
    y = draw_paragraph(c, "This short beginner guide explains how AI video is made and helps you generate your first clip yourself.", LEFT, y, CONTENT_W, ParagraphStyle("Lead", parent=body, fontSize=10, leading=15, textColor=MUTED)) - 10
    y = draw_rule(c, y)
    y = draw_paragraph(c, "This guide is not a complete workbook that replaces the paid Starter Pack. Instead, it gives you the essential concepts and one prompt example so you can experience the production flow without making a separate purchase.", LEFT, y, CONTENT_W) - 8
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 11); c.drawString(LEFT, y, "What You'll Make"); y -= 22
    y = draw_flow(c, ["Photo", "Video Generation", "Editing", "Export"], ["face · coat", "motion · duration", "captions · music", "9:16 file"], y, [LAVENDER, MINT, LAVENDER, MINT]) - 18
    y = draw_table(c, [
        ["What you need", "Reason", "Recommendation"],
        ["One photo", "Defines the main pet's face and coat", "Use a photo you have permission to use"],
        ["AI video generation tool", "Turns a still image into movement", "Choose a tool that supports Image-to-Video"],
        ["Video editing tool", "Trims clips and adds captions", "Use one with a 9:16 canvas"],
    ], LEFT - 6, y, [94, 210, 184], font_size=7.4) - 8
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Estimated Working Time", "For a first attempt, allow about 30-60 minutes for planning and editing, excluding account setup, generation queues, and retries.") - 28
    y = draw_label(c, "FREE 02 / Concepts", y)
    y = draw_title(c, "Text-to-Video vs. Image-to-Video", y, 18)
    y = draw_paragraph(c, "If you want to preserve the appearance of a real pet, Image-to-Video is usually the clearest place to begin.", LEFT, y, CONTENT_W, ParagraphStyle("Lead2", parent=body, fontSize=9.5, leading=14, textColor=MUTED)) - 8
    y = draw_rule(c, y)
    y = draw_table(c, [
        ["Method", "What do you provide?", "When should you use it?"],
        ["Image-to-Video (I2V)", "Reference photo + motion description", "When you want to animate a real pet photo"],
        ["Text-to-Video (T2V)", "Written appearance, place, and action", "When staging an imaginary animal character"],
    ], LEFT - 6, y, [120, 170, 198], font_size=7.2) - 8
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 10.5); c.drawString(LEFT, y, "Common Preparation"); y -= 15
    draw_bullets(c, [
        "Confirm image copyright, portrait rights, and the pet guardian's consent.",
        "Choose a high-resolution photo with a clear face.",
        "Results are not guaranteed and vary by model and source material.",
    ], LEFT, y, CONTENT_W, gap=1, size=7.8)
    c.showPage()

    # Page 3 - caution + story + photo
    new_page(c, 3)
    y = PAGE_H - 52
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Important", "AI-generated scenes based on a real photo may not be actual footage. Explain this clearly to avoid misleading viewers, and check the commercial-use terms for every tool you use.", fill=CREAM) - 34
    y = draw_label(c, "FREE 03 / Story", y)
    y = draw_title(c, "Describe a 15-Second Video in One Sentence", y, 18)
    y = draw_paragraph(c, "For your first video, one animal, one place, and one action are enough.", LEFT, y, CONTENT_W, ParagraphStyle("Lead3", parent=body, fontSize=9.6, leading=14, textColor=MUTED)) - 10
    y = draw_rule(c, y)
    y = draw_flow(c, ["0-3 sec", "3-10 sec", "10-15 sec"], ["Who and where?", "One small action", "Finish with an expression"], y, [CREAM, MINT, LAVENDER]) - 18
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "One-Sentence Plan Example", "A cat sits on a cushion by the window, gently tilts its head, and looks toward the camera.", fill=colors.HexColor("#FAF8FF"), border=colors.HexColor("#CBC0F1")) - 4
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 10.5); c.drawString(LEFT, y, "Common Mistakes"); y -= 16
    y = draw_bullets(c, [
        "Packing jumps, turns, and running into one clip.",
        "Asking the animal to exchange several objects in sequence.",
        "Changing locations repeatedly or adding fast camera movement.",
    ], LEFT, y, CONTENT_W, gap=2, size=8.2) - 4
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "A Good First-Video Result", "Your first attempt is successful when the intended action is mostly clear and the face and paws are not severely distorted.") - 30
    y = draw_label(c, "FREE 04 / Photo", y)
    y = draw_title(c, "Simple Guidelines for Choosing a Good Photo", y, 18)
    y = draw_paragraph(c, "Composition and clarity matter more than writing a long prompt.", LEFT, y, CONTENT_W, ParagraphStyle("Lead4", parent=body, fontSize=9.5, leading=14, textColor=MUTED)) - 8
    y = draw_rule(c, y)
    draw_table(c, [
        ["Good", "Avoid"],
        ["Clear face, eyes, and ears", "Face is very small or blurred"],
        ["One main pet and a simple background", "Several animals overlap"],
    ], LEFT - 6, y, [244, 244], font_size=7.6)
    c.showPage()

    # Page 4 - photo continued + prompt
    new_page(c, 4)
    y = PAGE_H - 42
    y = draw_table(c, [
        ["Good", "Avoid"],
        ["Framing similar to the desired output", "Body or ears are heavily cropped"],
        ["Natural lighting", "Strong filters or harsh backlighting"],
    ], LEFT - 6, y, [244, 244], font_size=7.6) - 4
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 10.5); c.drawString(LEFT, y, "Preparation Order"); y -= 16
    y = draw_bullets(c, [
        "Select one photo and keep the original file separately.",
        "Write down 2-3 features to preserve, such as coat pattern, round eyes, or a white collar.",
        "Choose a tool that supports reference-image upload.",
        "Check the service policy before uploading; files may be used for automated training depending on the service.",
    ], LEFT, y, CONTENT_W, gap=2, size=8.2) - 6
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "When Choosing a Photo", "For a full-body running shot, avoid starting with an extreme face close-up. The model may invent a new body shape and increase distortion. Face-centered, small movements are safer for a first attempt.", fill=CREAM) - 32
    y = draw_label(c, "FREE 05 / Prompt", y)
    y = draw_title(c, "Enter Your First Prompt", y, 18)
    y = draw_paragraph(c, "Start in Image-to-Video mode with a reference image. Let the image define appearance while the text describes movement.", LEFT, y, CONTENT_W, ParagraphStyle("Lead5", parent=body, fontSize=9.2, leading=14, textColor=MUTED)) - 8
    y = draw_rule(c, y)
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Free Beginner Prompt", "The pet in the reference image sits comfortably. It slowly tilts its head once and looks toward the camera. The camera remains fixed at eye level, with natural lighting maintained. Keep the pet's face and coat color as consistent with the reference image as possible.", fill=colors.HexColor("#FAF8FF"), border=colors.HexColor("#CBC0F1")) - 4
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 10.5); c.drawString(LEFT, y, "Easy Variations"); y -= 16
    y = draw_bullets(c, [
        "Dog to cat: describe from the reference photo rather than relying only on an animal label.",
        "Head tilt to one blink: replace just one core action.",
        "Fixed camera: the safest stabilizing choice for beginners.",
    ], LEFT, y, CONTENT_W, gap=1, size=8.1) - 4
    draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Why Is It Written This Way?", "The image already supplies appearance and background, so the prompt focuses on action and camera behavior instead of repeating visual details. Available settings and output quality differ by model.")
    c.showPage()

    # Page 5 - generation + editing
    new_page(c, 5)
    y = PAGE_H - 42
    y = draw_label(c, "FREE 06 / Generation", y)
    y = draw_title(c, "Six-Step Generation Workflow", y, 18)
    y = draw_paragraph(c, "Whichever tool you use, find the items below and work through them in order.", LEFT, y, CONTENT_W, ParagraphStyle("Lead6", parent=body, fontSize=9.2, leading=14, textColor=MUTED)) - 8
    y = draw_rule(c, y)
    y = draw_table(c, [
        ["Step", "What to do", "Check"],
        ["1", "Open a new project or Video Generation", "Confirm that you are in video mode"],
        ["2", "Select Image-to-Video and upload the photo", "The photo appears as the first frame"],
        ["3", "Paste the example prompt", "Only one action is requested"],
        ["4", "Select 9:16 and a short duration if supported", "The options exist in your tool"],
        ["5", "Generate and check face / movement / camera", "There is no severe distortion"],
        ["6", "Save the file and move to the editor", "Confirm the file type and resolution"],
    ], LEFT - 6, y, [52, 292, 144], font_size=6.9) - 8
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "What the Settings Mean", "9:16 is a vertical screen ratio. Duration, aspect ratio, output count, and resolution options vary by service, model, and plan.", fill=CREAM) - 30
    y = draw_label(c, "FREE 07 / Editing", y)
    y = draw_title(c, "Turn Your First Clip into a Short Video", y, 18)
    y = draw_paragraph(c, "If the generated clip is shorter than 15 seconds, combine it with a still image and a simple ending card.", LEFT, y, CONTENT_W, ParagraphStyle("Lead7", parent=body, fontSize=9.1, leading=14, textColor=MUTED)) - 8
    y = draw_rule(c, y)
    y = draw_flow(c, ["0-2 sec", "2-9 sec", "9-15 sec"], ["Photo / short intro", "Generated action clip", "Short ending card"], y, [CREAM, MINT, LAVENDER]) - 18
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 10.5); c.drawString(LEFT, y, "Editing Steps"); y -= 16
    draw_bullets(c, [
        "Create a 9:16 vertical canvas in the editor.",
        "Arrange the source photo and generated clip in chronological order.",
        "Trim unnatural opening and ending frames.",
        "Add captions during editing rather than inside AI generation.",
        "Verify music and sound-effect usage rights and keep audio at a comfortable level.",
    ], LEFT, y, CONTENT_W, gap=1, size=7.7)
    c.showPage()

    # Page 6 - editing continuation + checklist
    new_page(c, 6)
    y = PAGE_H - 42
    y = draw_bullets(c, ["Preview the exported video full-screen on a phone."], LEFT, y, CONTENT_W, size=8.4) - 5
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Scope", "A still image and ending card work well for a first project. Connecting several scenes with strict continuity is outside the scope of this beginner guide.") - 32
    y = draw_label(c, "FREE 08 / Checklist", y)
    y = draw_title(c, "Troubleshooting · Tips · Final Check", y, 18)
    y = draw_paragraph(c, "Fix the largest error first to reduce generation cost and repeated attempts.", LEFT, y, CONTENT_W, ParagraphStyle("Lead8", parent=body, fontSize=9.3, leading=14, textColor=MUTED)) - 8
    y = draw_rule(c, y)
    y = draw_table(c, [
        ["Problem", "First Fix"],
        ["Face changes into another animal", "Fix the camera, simplify movement, and reconsider the source photo"],
        ["Paws or legs look unnatural", "Use face-centered movement instead of full-body action"],
        ["Background moves", "Simplify the background instruction and keep the camera fixed"],
        ["Generated text is broken", "Remove text from generation and add it in the editor"],
    ], LEFT - 6, y, [170, 318], font_size=7.3) - 4
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 10.5); c.drawString(LEFT, y, "Final Check"); y -= 16
    y = draw_bullets(c, [
        "Is the main subject visible in the first two seconds?",
        "Is there one clear action?",
        "Is there severe appearance distortion?",
        "Is the face safely inside the 9:16 frame?",
        "Have photo and music usage rights been checked?",
    ], LEFT, y, CONTENT_W, gap=1, size=8.1) - 6
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Tip", "When a result works, save the photo, prompt, and settings together. In the next video, change only the location or one action so differences are easier to compare.")
    draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Further Learning", "The Starter Pack includes three reusable prompts in Korean and English, tool-specific starting settings, failure-and-fix examples, hands-on cases, and worksheets from beginning to end. It goes deeper into practical execution without repeating this free guide's basic explanations.", fill=LAVENDER, border=colors.HexColor("#CBC0F1"))
    c.showPage()

    # Page 7 - sources
    new_page(c, 7)
    y = PAGE_H - 42
    y = draw_label(c, "FREE 09 / Sources", y)
    y = draw_title(c, "Official References and Usage Notes", y, 18)
    y = draw_paragraph(c, "This free guide is brand-independent educational material. Interfaces, features, and pricing may change.", LEFT, y, CONTENT_W, ParagraphStyle("Lead9", parent=body, fontSize=9.4, leading=14, textColor=MUTED)) - 10
    y = draw_rule(c, y)
    c.setFillColor(NAVY); c.setFont("ArialFFBold", 11); c.drawString(LEFT, y, "Official References"); y -= 20
    reference_style = ParagraphStyle("Reference", parent=small, fontSize=7.8, leading=11.4, textColor=MUTED)
    refs = [
        ("Google Flow Help", "https://support.google.com/flow/answer/16353334"),
        ("Runway Image-to-Video Prompting Guide", "https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide"),
        ("CapCut vertical video guide", "https://www.capcut.com/resource/vertical-format-in-videos"),
    ]
    for name, url in refs:
        y = draw_paragraph(c, f"<b>{name}</b>: {url}", LEFT, y, CONTENT_W, reference_style) - 7
    y = draw_paragraph(c, "Editorial reference date: November 2026. If the website PDF differs from another version, follow the latest notice on the official production site.", LEFT, y, CONTENT_W, reference_style) - 28
    y = draw_box(c, LEFT + 12, y, CONTENT_W - 24, "Usage Scope", "This free guide is for personal learning and creative practice. Unauthorized resale, redistribution, or upload of the original PDF to a public repository is not permitted. Whether your final work can be used commercially depends on the licenses for the AI tools, photos, music, and other materials you use.", fill=CREAM) - 8
    c.setFillColor(TEAL); c.setFont("ArialFFBold", 7.7); c.drawString(LEFT, y, "FourFeetz Studios · fourfeetz.com")
    c.showPage()

    c.save()
    print(OUTPUT)


if __name__ == "__main__":
    build()
