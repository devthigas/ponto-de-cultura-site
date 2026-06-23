from bs4 import BeautifulSoup

def clean_and_save(input_path, output_path):
    with open(input_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    for script in soup(["script", "style"]):
        script.extract()
        
    text_blocks = []
    # Try to find elements with text
    for p in soup.find_all(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li']):
        t = p.get_text().strip()
        if t and len(t) > 5:
            # Clean spaces
            t = " ".join(t.split())
            if t not in text_blocks:
                text_blocks.append(t)
                
    with open(output_path, "w", encoding="utf-8") as out:
        out.write("\n".join(text_blocks))
    print(f"Saved cleaned text to {output_path}")

clean_and_save(
    r"C:\Users\ADM\.gemini\antigravity\brain\e49244bb-cc33-4235-adfb-cd600b5e8723\.system_generated\steps\405\content.md",
    r"C:\Users\ADM\.gemini\antigravity\brain\e49244bb-cc33-4235-adfb-cd600b5e8723\scratch\kaiu_da_kombi_content.txt"
)

clean_and_save(
    r"C:\Users\ADM\.gemini\antigravity\brain\e49244bb-cc33-4235-adfb-cd600b5e8723\.system_generated\steps\413\content.md",
    r"C:\Users\ADM\.gemini\antigravity\brain\e49244bb-cc33-4235-adfb-cd600b5e8723\scratch\musica_e_movimento_content.txt"
)
