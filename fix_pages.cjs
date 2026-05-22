const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            // Fix pages -> views imports
            if (content.match(/['"](\.\.\/)+pages\//)) {
                content = content.replace(/(['"](?:\.\.\/)+)pages\//g, '$1views/');
                changed = true;
            }
            
            // Fix import.meta.env
            if (content.includes('import.meta.env?.DEV')) {
                content = content.replace(/import\.meta\.env\?\.DEV/g, "process.env.NODE_ENV === 'development'");
                changed = true;
            }
            if (content.includes('(import.meta as any).env?.VITE_API_BASE_URL')) {
                content = content.replace(/\(import\.meta as any\)\.env\?\.VITE_API_BASE_URL/g, "process.env.NEXT_PUBLIC_API_BASE_URL");
                changed = true;
            }

            if (changed) {
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

if (fs.existsSync('src/pages')) {
    fs.renameSync('src/pages', 'src/views');
}
replaceInDir('src');
