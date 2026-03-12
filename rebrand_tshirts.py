import re

filepath = 'src/data/products.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

updated_lines = []
in_tshirt = False
current_id = None

for line in lines:
    # Detect start of a product object
    if '{' in line:
        in_tshirt = False
        current_id = None
    
    # Check if it's a T-Shirt category
    if "category: 'T-Shirts'" in line:
        in_tshirt = True
    
    # Check for brand
    if in_tshirt and "brand:" in line:
        # Check if the product uses a T-shirt image
        # We need to look ahead or keep track. This is simple line processing.
        # Let's try a better approach by regexing the whole product blocks.
        pass

# Second attempt: Process the whole file content
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find product objects
import re

def rebrand_product(match):
    block = match.group(0)
    # Check if it's a T-Shirt and uses /T-shirts/ images
    if "category: 'T-Shirts'" in block and "/T-shirts/" in block:
        # Change brand to Jabraat
        block = re.sub(r"brand:\s*['\"]([^'\"]+)['\"]", "brand: 'Jabraat'", block)
        # Change title (replace Shatak or SportX with Jabraat)
        block = re.sub(r"title:\s*['\"]Shatak\s+([^'\"]+)['\"]", r"title: 'Jabraat \1'", block)
        block = re.sub(r"title:\s*['\"]SportX\s+([^'\"]+)['\"]", r"title: 'Jabraat \1'", block)
        # Change ID if it starts with shatak or sportx
        block = re.sub(r"id:\s*['\"]shatak-([^'\"]+)['\"]", r"id: 'jabraat-\1'", block)
        block = re.sub(r"id:\s*['\"]sportx-([^'\"]+)['\"]", r"id: 'jabraat-\1'", block)
        # Update longDescription references too
        block = block.replace("The Shatak", "The Jabraat").replace("Shatak #", "Jabraat #").replace("SportX ", "Jabraat ")
    return block

# Find all objects starting with { and ending with } followed by , or ]
# This is tricky with nested objects (specs, sizeCharts).
# Let's use a simpler approach: regex for product blocks assuming standard formatting.
# Products start with { and end with }, or }, at the end of a line.

# Find all blocks that look like a product entry.
# We'll look for: { [newline] ... brand: ... category: ... } followed by a comma and newline.
product_pattern = re.compile(r"\{\s*id:[\s\S]*?\},", re.MULTILINE)

updated_content = product_pattern.sub(rebrand_product, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Finished rebranding all T-shirts to Jabraat.")
