from PIL import Image

im = Image.open('public/assets/kombi_sketch.jpg')
rgb_im = im.convert('RGB')
r, g, b = rgb_im.getpixel((10, 10))
print(f"Background RGB: ({r}, {g}, {b}), HEX: #{r:02x}{g:02x}{b:02x}")
