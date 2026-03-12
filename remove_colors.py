import re

filepath = 'src/data/products.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove availableColors blocks
# Pattern: availableColors: [ ... ], or availableColors: [ ... ] as const
# This can be multi-line.
# Using a regex that finds the key and the balancing array.
# Since the formatting is quite standard, a non-greedy multi-line match should work.
content = re.sub(r'availableColors:\s*\[[\s\S]*?\],?', '', content)

# Clean up any resulting double commas or empty lines in objects
content = re.sub(r',\s*\n\s*\}', '\n    }', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed availableColors from all products in data.")
