from PIL import Image
import math

def distance(color1, color2):
    return math.sqrt(sum((c1 - c2) ** 2 for c1, c2 in zip(color1, color2)))

# Open the sketch image
im = Image.open('public/assets/kombi_sketch.jpg')
rgba_im = im.convert('RGBA')
datas = rgba_im.getdata()

bg_color = (249, 249, 241)
new_data = []

for item in datas:
    r, g, b, a = item
    d = distance((r, g, b), bg_color)
    
    if d < 15:
        # Fully transparent
        new_data.append((r, g, b, 0))
    elif d < 35:
        # Smooth transition
        factor = (d - 15) / (35 - 15)
        alpha = int(255 * factor)
        new_data.append((r, g, b, alpha))
    else:
        new_data.append((r, g, b, 255))

rgba_im.putdata(new_data)
# Save as PNG
rgba_im.save('public/assets/kombi_sketch.png', 'PNG')
print("Successfully generated kombi_sketch.png with smooth transparency!")
