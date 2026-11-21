"""Generate the 1200x630 og:image in the Manuscript brand. -> public/og.png

Run: python3 scripts/generate-og.py  (needs Pillow)
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "scripts" / "fonts-print"

PAPER = (247, 244, 238)
INK = (26, 23, 20)
INK_SOFT = (95, 89, 79)
HAIRLINE = (226, 220, 207)
SIENNA = (138, 66, 38)

W, H = 1200, 630
M = 72  # margin
PHOTO_W = 400

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)


def newsreader(size: int, italic: bool = False) -> ImageFont.FreeTypeFont:
    name = "Newsreader-Italic-var.ttf" if italic else "Newsreader-var.ttf"
    f = ImageFont.truetype(str(FONTS / name), size)
    try:
        f.set_variation_by_axes([72, 400])
    except OSError:
        pass
    return f


mono = ImageFont.truetype(str(FONTS / "IBMPlexMono-Medium.ttf"), 22)
mono_sm = ImageFont.truetype(str(FONTS / "IBMPlexMono-Regular.ttf"), 20)

# Photo, full height on the right
photo = Image.open(ROOT / "src" / "assets" / "jake-headshot.jpeg").convert("RGB")
photo = ImageOps.fit(photo, (PHOTO_W, H), centering=(0.5, 0.25))
img.paste(photo, (W - PHOTO_W, 0))

text_right = W - PHOTO_W - M

# Masthead mark: JH between two sienna rules
mark = newsreader(30)
mb = d.textbbox((0, 0), "JH", font=mark)
mw = mb[2] - mb[0]
d.line([(M, M), (M + mw, M)], fill=SIENNA, width=2)
d.text((M - mb[0], M + 8 - mb[1]), "JH", font=mark, fill=INK)
d.line([(M, M + 8 + (mb[3] - mb[1]) + 8), (M + mw, M + 8 + (mb[3] - mb[1]) + 8)], fill=SIENNA, width=2)
d.text((M + mw + 18, M + 6), "JAKE HEAPS", font=mono, fill=INK_SOFT)

# Headline
head = newsreader(68)
head_i = newsreader(68, italic=True)
y = 200
d.text((M, y), "I build the AI", font=head, fill=INK)
d.text((M, y + 82), "my coworkers", font=head, fill=INK)
x = M
d.text((x, y + 164), "use", font=head_i, fill=SIENNA)
x += d.textlength("use", font=head_i)
d.text((x, y + 164), " every day.", font=head, fill=INK)

# Footer line
d.line([(M, H - M - 40), (text_right, H - M - 40)], fill=HAIRLINE, width=2)
d.text((M, H - M - 20), "MANAGER, INTERNAL AI PROJECTS · HUCKLEBERRY AI", font=mono_sm, fill=INK_SOFT)

img.save(ROOT / "public" / "og.png", optimize=True)
print("Wrote public/og.png")
