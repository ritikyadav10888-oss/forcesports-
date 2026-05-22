const fs = require('fs');

function fix(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    if (!content.includes('"use client"')) {
        content = '"use client";\n' + content;
    }
    
    content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]react-router-dom['"];?/g, (match, importsStr) => {
        let imports = importsStr.split(',').map(s => s.trim());
        let res = '';
        if (imports.includes('Link')) {
            res += "import Link from 'next/link';\n";
        }
        let nav = [];
        if (imports.includes('useParams')) nav.push('useParams');
        if (imports.includes('useNavigate') || imports.includes('useLocation')) {
            if (imports.includes('useLocation')) nav.push('usePathname');
            if (imports.includes('useNavigate')) nav.push('useRouter');
        }
        if (nav.length > 0) {
            res += "import { " + nav.join(', ') + " } from 'next/navigation';\n";
        }
        return res;
    });

    content = content.replace(/\bnavigate\(/g, 'router.push(');
    content = content.replace(/const navigate = useNavigate\(\);/g, 'const router = useRouter();');
    
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    
    fs.writeFileSync(file, content);
}

fix('src/pages/Products/ProductDetailPage.tsx');
fix('src/pages/Uniforms/UniformDetailPage.tsx');
fix('src/pages/Uniforms/UniformsPage.tsx');
