import os
from PIL import Image

def compress_image(file_path):
    try:
        size_before = os.path.getsize(file_path)
        ext = os.path.splitext(file_path)[1].lower()
        
        if ext not in ['.jpg', '.jpeg', '.png']:
            return
            
        with Image.open(file_path) as img:
            width, height = img.size
            max_dim = 1000
            
            # Resize if dimensions are very large
            if width > max_dim or height > max_dim:
                if width > height:
                    new_width = max_dim
                    new_height = int(height * (max_dim / width))
                else:
                    new_height = max_dim
                    new_width = int(width * (max_dim / height))
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {file_path} from {width}x{height} to {new_width}x{new_height}")
            
            # Save compressed
            if ext in ['.jpg', '.jpeg']:
                img.save(file_path, 'JPEG', quality=75, optimize=True)
            elif ext == '.png':
                # If PNG is RGB (no alpha), we can save it with optimization
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    # Keep transparency
                    img.save(file_path, 'PNG', optimize=True)
                else:
                    # Convert to RGB and save with optimization
                    img.convert('RGB').save(file_path, 'PNG', optimize=True)
                    
        size_after = os.path.getsize(file_path)
        reduction = (size_before - size_after) / 1024
        if reduction > 0:
            print(f"Compressed {file_path}: {size_before/1024:.1f} KB -> {size_after/1024:.1f} KB (Saved {reduction:.1f} KB)")
    except Exception as e:
        print(f"Error compressing {file_path}: {e}")

def walk_and_compress(directory):
    for root, dirs, files in os.walk(directory):
        # Skip some folders if necessary (e.g. .git, node_modules etc are already avoided because we pass public/)
        for file in files:
            file_path = os.path.join(root, file)
            compress_image(file_path)

if __name__ == '__main__':
    public_dir = os.path.join(os.path.dirname(__file__), '..', 'public')
    print(f"Starting image compression in: {public_dir}")
    walk_and_compress(public_dir)
    print("Image compression completed successfully!")
