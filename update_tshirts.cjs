const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

if (!content.includes('imageBack?: string;')) {
    content = content.replace('image: string;', 'image: string;\n    imageBack?: string;');
}

const replacements = [
    {
        id: "'shatak-tn-5111'",
        front: "image: '/T-shirts/11.png'",
        back: "imageBack: '/T-shirts/11 back.png'"
    },
    {
        id: "'shatak-tn-5112'",
        front: "image: '/T-shirts/12.png'",
        back: "imageBack: '/T-shirts/12 backed.png'"
    },
    {
        id: "'jabraat-pro-kit'",
        front: "image: '/T-shirts/13.png'",
        back: "imageBack: '/T-shirts/13 backed.png'"
    },
    {
        id: "'sportx-aero-tee'",
        front: "image: '/T-shirts/1.png'",
        back: "imageBack: '/T-shirts/2.png'"
    },
    {
        id: "'jabraat-compression-tee'",
        front: "image: '/T-shirts/3.png'",
        back: "imageBack: '/T-shirts/4.png'"
    },
    {
        id: "'force-travel-polo'",
        front: "image: '/T-shirts/5.png'",
        back: "imageBack: '/T-shirts/6.png'"
    },
    {
        id: "'force-coach-tee'",
        front: "image: '/T-shirts/22.png'",
        back: "imageBack: '/T-shirts/23.png'"
    },
    {
        id: "'force-official-shirt'",
        front: "image: '/T-shirts/24.png'",
        back: "imageBack: '/T-shirts/25.png'"
    },
    {
        id: "'force-activity-t20'",
        front: "image: '/T-shirts/26.png'",
        back: "imageBack: '/T-shirts/27.png'"
    },
    {
        id: "'force-activity-practice'",
        front: "image: '/T-shirts/28.png'",
        back: "imageBack: '/T-shirts/29.png'"
    },
    {
        id: "'force-badminton-pro'",
        front: "image: '/T-shirts/30.png'",
        back: "imageBack: '/T-shirts/31.png'"
    },
    {
        id: "'force-football-travel'",
        front: "image: '/T-shirts/32.png'",
        back: "imageBack: '/T-shirts/33.png'"
    },
    {
        id: "'force-volleyball-coach'",
        front: "image: '/T-shirts/34.png'",
        back: "imageBack: '/T-shirts/35.png'"
    },
    {
        id: "'force-kabaddi-official'",
        front: "image: '/T-shirts/36.png'",
        back: "imageBack: '/T-shirts/37.png'"
    }
];

// Instead of pure regex, split file by `id: `, or we can use regex to match the item until `image: `
for (const rep of replacements) {
    const regex = new RegExp(`(id:\\s*${rep.id}[\\s\\S]*?image:\\s*)'[^']+'(.*?)`, 'm');
    content = content.replace(regex, `$1${rep.front.replace("image: ", "")},\n        ${rep.back}$2`);
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Script updated with static mapping.');
