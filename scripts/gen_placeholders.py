"""
Gera imagens placeholder claramente identificadas para o projeto Gordinho Lanches.
Executar uma vez: python3 scripts/gen_placeholders.py
Todas devem ser substituídas por fotografia real antes de publicar o site.
"""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

EMBER = (196, 30, 30)
CHAR = (11, 10, 8)
GOLD = (232, 169, 58)
CREAM = (243, 236, 217)


def font(size):
    paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def make_photo_placeholder(name, w, h, label, sub=""):
    img = Image.new("RGB", (w, h), CHAR)
    d = ImageDraw.Draw(img)
    # borda + diagonal sutil para indicar "placeholder"
    for i in range(0, w + h, 28):
        d.line([(i, 0), (0, i)], fill=(255, 255, 255, 10), width=1)
    d.rectangle([8, 8, w - 8, h - 8], outline=GOLD, width=2)
    f1 = font(max(18, w // 22))
    f2 = font(max(12, w // 40))
    text = label
    bbox = d.textbbox((0, 0), text, font=f1)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, (h - th) / 2 - 10), text, font=f1, fill=CREAM)
    if sub:
        bbox2 = d.textbbox((0, 0), sub, font=f2)
        tw2 = bbox2[2] - bbox2[0]
        d.text(((w - tw2) / 2, (h - th) / 2 + th + 6), sub, font=f2, fill=GOLD)
    img.save(os.path.join(OUT, name), quality=87)


def make_icon_placeholder(name, size, label):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([4, 4, size - 4, size - 4], fill=(*GOLD, 60), outline=GOLD, width=3)
    f = font(size // 7)
    bbox = d.textbbox((0, 0), label, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((size - tw) / 2, (size - th) / 2 - 4), label, font=f, fill=CREAM)
    img.save(os.path.join(OUT, name))


# ---- Fotos grandes ---------------------------------------------------------
make_photo_placeholder("placeholder-og-cover.jpg", 1200, 630, "GORDINHO LANCHES", "PLACEHOLDER — substituir por foto real")
make_photo_placeholder("placeholder-about.jpg", 900, 1125, "FOTO: PREPARO / AMBIENTE", "substituir")
make_photo_placeholder("placeholder-favicon.png", 64, 64, "GL")

for i in range(1, 5):
    make_photo_placeholder(f"placeholder-burger-{i}.jpg", 900, 700, f"FOTO LANCHE {i}", "substituir")

for i in range(1, 7):
    make_photo_placeholder(f"placeholder-gallery-{i}.jpg", 800, 800, f"GALERIA {i}", "substituir")

# ---- Ícones de ingredientes -------------------------------------------------
icon_labels = {
    "bun": "PAO",
    "patty": "CARNE",
    "cheese": "QUEIJO",
    "bacon": "BACON",
    "lettuce": "ALFACE",
    "tomato": "TOMATE",
}
for key, label in icon_labels.items():
    make_icon_placeholder(f"placeholder-ingredient-{key}.png", 200, label)

print("Placeholders gerados em", OUT)
