import re
import os

def extract_ids(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Looking for id: '...' or id: "..."
    ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", content)
    return ids

def generate_sitemap():
    base_url = "https://www.forcesportsindia.com"
    products_path = r"c:\Users\ritik\OneDrive\Desktop\force sports\src\data\products.ts"
    uniforms_path = r"c:\Users\ritik\OneDrive\Desktop\force sports\src\data\uniforms.ts"
    sitemap_path = r"c:\Users\ritik\OneDrive\Desktop\force sports\public\sitemap.xml"

    product_ids = extract_ids(products_path)
    uniform_ids = extract_ids(uniforms_path)

    # Static routes
    static_routes = [
        "/", "/products", "/uniforms", "/catalog", "/about", 
        "/manufacturing", "/inquiry", "/terms", "/privacy"
    ]

    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    # Add static routes
    for route in static_routes:
        priority = "1.0" if route == "/" else "0.8"
        xml_content += f'  <url>\n    <loc>{base_url}{route}</loc>\n    <priority>{priority}</priority>\n  </url>\n'

    # Add products
    for pid in product_ids:
        xml_content += f'  <url>\n    <loc>{base_url}/products/{pid}</loc>\n    <priority>0.6</priority>\n  </url>\n'

    # Add uniforms
    for uid in uniform_ids:
        xml_content += f'  <url>\n    <loc>{base_url}/uniforms/{uid}</loc>\n    <priority>0.6</priority>\n  </url>\n'

    xml_content += '</urlset>'

    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(xml_content)
    
    print(f"Sitemap updated: {len(static_routes)} static, {len(product_ids)} products, {len(uniform_ids)} uniforms.")

if __name__ == "__main__":
    generate_sitemap()
