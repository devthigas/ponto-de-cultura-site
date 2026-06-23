from bs4 import BeautifulSoup
import json

with open(r"C:\Users\ADM\.gemini\antigravity\brain\e49244bb-cc33-4235-adfb-cd600b5e8723\.system_generated\steps\405\content.md", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Remove scripts and style elements
for script in soup(["script", "style"]):
    script.extract()

# Get all text elements
text_blocks = []
for p in soup.find_all(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']):
    t = p.get_text().strip()
    if t and len(t) > 5 and t not in text_blocks:
        text_blocks.append(t)

print("FOUND TEXT BLOCKS:")
for i, block in enumerate(text_blocks[:100]):
    print(f"{i}: {block}")
