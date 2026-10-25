from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, KeepTogether

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "free-pet-video-prompt-v1.pdf"
FONT = Path("C:/Windows/Fonts/malgun.ttf")
FONT_BOLD = Path("C:/Windows/Fonts/malgunbd.ttf")

if not FONT.exists() or not FONT_BOLD.exists():
    raise SystemExit("Malgun Gothic fonts are required to render Korean text.")

pdfmetrics.registerFont(TTFont("Malgun", str(FONT)))
pdfmetrics.registerFont(TTFont("MalgunBold", str(FONT_BOLD)))

PAGE_W, PAGE_H = A4
BROWN = colors.HexColor("#6F4E37")
DARK = colors.HexColor("#2B2119")
MUTED = colors.HexColor("#76685D")
CREAM = colors.HexColor("#FBF7F0")
GOLD = colors.HexColor("#A67C52")

styles = getSampleStyleSheet()
title = ParagraphStyle("TitleFF", parent=styles["Title"], fontName="MalgunBold", fontSize=24, leading=31, textColor=DARK, alignment=TA_CENTER, spaceAfter=10)
subtitle = ParagraphStyle("SubtitleFF", parent=styles["Normal"], fontName="Malgun", fontSize=9.5, leading=15, textColor=MUTED, alignment=TA_CENTER, spaceAfter=18)
heading = ParagraphStyle("HeadingFF", parent=styles["Heading2"], fontName="MalgunBold", fontSize=14, leading=20, textColor=BROWN, spaceBefore=10, spaceAfter=7)
body = ParagraphStyle("BodyFF", parent=styles["BodyText"], fontName="Malgun", fontSize=9.3, leading=15.5, textColor=DARK, spaceAfter=6)
prompt = ParagraphStyle("PromptFF", parent=body, fontName="Malgun", fontSize=9.1, leading=15.5, backColor=CREAM, borderColor=colors.HexColor("#EAD8C5"), borderWidth=0.7, borderPadding=10, spaceAfter=10)

def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(CREAM)
    canvas.rect(0, PAGE_H - 18 * mm, PAGE_W, 18 * mm, fill=1, stroke=0)
    canvas.setFont("MalgunBold", 8)
    canvas.setFillColor(BROWN)
    canvas.drawString(18 * mm, PAGE_H - 11.5 * mm, "FOURFEETZ CREATOR STORE")
    canvas.setFont("Malgun", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(PAGE_W - 18 * mm, PAGE_H - 11.5 * mm, "FREE PROMPT · VERSION 1.0")
    canvas.setStrokeColor(colors.HexColor("#EAD8C5"))
    canvas.line(18 * mm, 16 * mm, PAGE_W - 18 * mm, 16 * mm)
    canvas.setFont("Malgun", 7)
    canvas.drawString(18 * mm, 10 * mm, "© 2026 FourFeetz Studios")
    canvas.drawRightString(PAGE_W - 18 * mm, 10 * mm, f"{doc.page}")
    canvas.restoreState()

def bullets(items):
    return [Paragraph(f"• {item}", body) for item in items]

story = [
    Spacer(1, 8 * mm),
    Paragraph("Free Pet Video Prompt", title),
    Paragraph("반려동물의 편안한 일상 동작을 위한 범용 AI 영상 입문 프롬프트", subtitle),
    Paragraph("한국어 설명", heading),
    Paragraph("반려동물이 집 안에서 자연스럽게 주변을 살피고 편안히 자리를 잡는 짧은 일상 장면을 위한 범용 입문 프롬프트입니다. FourFeetz 캐릭터, HARU 마스터 프롬프트, 캐릭터 바이블, 내부 제작 워크플로 및 고급 캐릭터 일관성 기술을 포함하지 않습니다.", body),
    Paragraph("English prompt", heading),
    Paragraph("A natural everyday video of a beloved pet in a quiet, comfortable room. The pet gently looks around, takes two or three relaxed steps, then settles into a comfortable resting pose. Soft daylight from a nearby window, calm atmosphere, realistic fur movement, subtle breathing, stable camera at the pet's eye level, medium shot, natural timing, simple background, no sudden motion, no costume, no text, no logos.", prompt),
    Paragraph("초보자 사용 방법", heading),
    *bullets([
        "본인이 사용 권한을 가진 반려동물 사진을 준비합니다.",
        "이미지-투-비디오 기능이 있는 AI 영상 도구에 사진을 넣습니다.",
        "위 영문 프롬프트를 붙여 넣고 기본 결과를 먼저 확인합니다.",
        "움직임이 과하면 'takes two or three relaxed steps'를 'makes one small natural movement'로 바꿉니다.",
    ]),
    KeepTogether([
        Paragraph("권장 설정 예시", heading),
        *bullets(["화면비: 가로 16:9 또는 세로 9:16", "영상 길이: 5-8초 예시", "카메라: 고정 또는 매우 약한 움직임", "검증 상태: 실제 생성 모델 미검증"]),
    ]),
    Paragraph("중요 안내", heading),
    *bullets([
        "생성 결과는 입력 사진, 모델, 버전, 설정과 무작위성에 따라 달라질 수 있습니다.",
        "외부 AI 도구의 구독료 또는 생성 크레딧은 별도로 발생할 수 있습니다.",
        "이 자료의 프롬프트로 제작된 것으로 확인된 기존 FourFeetz 영상은 없습니다.",
    ]),
    Paragraph("이용 범위 초안", heading),
    Paragraph("이 프롬프트를 사용해 직접 만든 최종 영상은 개인적 및 상업적 목적으로 사용할 수 있습니다. 단, 입력 사진, 음악, 폰트, 모델 및 외부 도구의 약관과 제3자 권리를 별도로 확인해야 합니다.", body),
    Paragraph("프롬프트 원문, 이 PDF 또는 이를 일부 수정한 파일을 상품·번들·멤버십 자료로 재판매하거나 그대로 재배포할 수 없습니다. 최종 정책은 정식 출시 전 법률 및 사업자 검토 후 확정됩니다.", body),
]

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc = BaseDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=22 * mm, bottomMargin=20 * mm, title="Free Pet Video Prompt", author="FourFeetz Studios", subject="Beginner AI pet video prompt")
doc.addPageTemplates(PageTemplate(id="FourFeetz", frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")], onPage=header_footer))
doc.build(story)
print(OUTPUT)
