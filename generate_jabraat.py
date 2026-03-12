import re
import os

filepath = 'src/data/products.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Generate the 64 Jabraat products
new_products = []
sports = ['Cricket', 'Football', 'Badminton', 'Kabaddi', 'Tennis', 'Pickleball']
usages = ['Practice', 'Travel', 'Coaches', 'Officials', 'General']

# Pair logic:
# 1: (1,2), 2: (3,4), 3: (5,6), 4: (7,8), 5: (9,10)
# 6: (11, 11 back), 7: (12, 12 backed), 8: (13, 13 backed)
# 9-64: (14,15) ... (124,125)

pairs = []
# Products 1-5
for i in range(1, 10, 2):
    pairs.append((f"/T-shirts/{i}.png", f"/T-shirts/{i+1}.png"))

# Products 6-8
pairs.append(("/T-shirts/11.png", "/T-shirts/11 back.png"))
pairs.append(("/T-shirts/12.png", "/T-shirts/12 backed.png"))
pairs.append(("/T-shirts/13.png", "/T-shirts/13 backed.png"))

# Products 9-64
for i in range(14, 126, 2):
    pairs.append((f"/T-shirts/{i}.png", f"/T-shirts/{i+1}.png"))

for idx, (front, back) in enumerate(pairs):
    num = idx + 1
    sport = sports[idx % len(sports)]
    usage = usages[idx % len(usages)]
    
    prod = f"""    {{
        id: 'jabraat-elite-{num:03d}',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: '{sport}',
        usageType: '{usage}',
        productCode: '#JB-{1000 + num}',
        title: 'Jabraat Elite Series #{num:02d}',
        description: 'Professional grade high-performance {sport.lower()} apparel.',
        longDescription: 'Part of the premium Jabraat Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense {sport.lower()} sessions.',
        image: '{front}',
        imageBack: '{back}',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {{
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }},
        availableColors: [
            {{ name: 'Team Color', code: 'MAIN' }}
        ]
    }}"""
    new_products.append(prod)

# Find the PRODUCTS array and replace its content or append.
# To be safe, I'll find the closing bracket of the array and insert there.
# But the user might want to clear the old ones if they are Jabraat?
# I'll append them.

# Append to the list
all_new_code = ",\n".join(new_products)

# Find where to insert (before the last `];`)
if '];' in content:
    # Use rfind to find the last ] before the end of the file
    last_bracket_idx = content.rfind('];')
    if last_bracket_idx != -1:
        updated_content = content[:last_bracket_idx] + ",\n" + all_new_code + "\n" + content[last_bracket_idx:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"Successfully added 64 Jabraat products to {filepath}")
else:
    print("Could not find PRODUCTS array closing bracket")
