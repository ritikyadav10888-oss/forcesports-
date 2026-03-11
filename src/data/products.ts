export interface Product {
    id: string;
    title: string;
    brand?: 'Shatak' | 'Jabraat' | 'SportX';
    category: 'T-Shirts' | 'Track Pants' | 'Shorts' | 'Jackets' | 'Bags' | 'Caps';
    sport?: 'Badminton' | 'Cricket' | 'Football' | 'Volleyball' | 'Kabaddi' | 'Activity' | 'All';
    usageType?: 'T20' | 'Practice' | 'Travel' | 'Coaches' | 'Officials' | 'General';
    productCode?: string;
    description: string;
    longDescription: string;
    image: string;
    gallery?: string[];
    features: string[];
    specs: Record<string, string>;
    customizationOptions?: string[];
    availableColors?: { name: string; hex?: string; code: string }[];
    sizeCharts?: Record<string, { label: string; values: Record<string, string>[] }>;
}

export const PRODUCTS: Product[] = [
    // Shatak Brands
    {
        id: 'shatak-tn-5111',
        brand: 'Shatak',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'T20',
        productCode: '#TN 5111',
        title: 'Shatak T20 Pro Polo',
        description: 'Elite "Softy" fabric polo available in 8 vibrant dual-tone colors.',
        longDescription: 'The Shatak #TN 5111 is a pinnacle of activewear engineering. Featuring our proprietary "Softy" fabric type, this polo is crafted with an interlock knit that provides unparalleled comfort while allowing completely free movement. Integrated moisture-wicking technology ensures you stay dry and sweat-free even during the most intense athletic sessions.',
        image: '/shatak-5111-front.jpg',
        gallery: ['/shatak-5111-front.jpg', '/shatak-5111-back.jpg'],
        features: [
            'Proprietary "Softy" Fabric Type',
            'Interlock Knit for Free Movement',
            'Moisture Wicking Technology',
            'Reinforced Contrast Collar',
            'Athletic Regular Fit',
            'Machine Washable / Easy Care'
        ],
        specs: {
            'Material': '100% High-Grade Polyester',
            'Fit': 'Regular Athletic Fit',
            'Fabric Tech': 'Interlock Knit / Softy',
            'Usage': 'Multipurpose Athletic / Lifestyle',
            'Origin': 'Proudly Made in India'
        },
        availableColors: [
            { name: 'Red', code: 'A' },
            { name: 'Turquoise', code: 'B' },
            { name: 'Gold Yellow', code: 'C' },
            { name: 'Sky Blue', code: 'D' },
            { name: 'Lemon', code: 'E' },
            { name: 'Parrot', code: 'F' },
            { name: 'India', code: 'G' },
            { name: 'Orange', code: 'H' }
        ],
        sizeCharts: {
            tshirt: {
                label: 'T-Shirt Sizes (In Inches)',
                values: [
                    { size: 'Small', chest: '38', length: '27' },
                    { size: 'Medium', chest: '40', length: '28' },
                    { size: 'Large', chest: '42', length: '29' },
                    { size: 'Extra Large', chest: '44', length: '30' },
                    { size: '2X Large', chest: '46', length: '31' }
                ]
            },
            trackpant: {
                label: 'Track Pant Sizes (In Inches)',
                values: [
                    { size: 'Medium', waist: '30-32', length: '39' },
                    { size: 'Large', waist: '32-34', length: '40' },
                    { size: 'Extra Large', waist: '34-36', length: '41' },
                    { size: '2X Large', waist: '36-38', length: '42' }
                ]
            }
        }
    },
    {
        id: 'shatak-tn-5112',
        brand: 'Shatak',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Practice',
        productCode: '#TN 5112',
        title: 'Shatak Training Practice Tee',
        description: 'Dynamic "Speed-Stream" design in premium Softy fabric.',
        longDescription: 'The Shatak #TN 5112 "Speed-Stream" series combines aggressive aesthetic lines with our signature performance. The specialized gradient-stripe pattern is sublimated using high-definition tech that won\'t crack or fade. Like the 5111, it utilizes our interlock "Softy" fabric for maximum comfort and moisture management.',
        image: 'https://images.unsplash.com/photo-1574015974293-817f0efebb1a?w=800&q=80', // Placeholder
        features: [
            'High-Definition "Speed-Stream" Sublimation',
            'Proprietary "Softy" Fabric Type',
            'Interlock Knit for Free Movement',
            'Moisture Wicking Technology',
            'Athletic Regular Fit',
            'Made in India'
        ],
        specs: {
            'Material': '100% High-Grade Polyester',
            'Fit': 'Regular Athletic Fit',
            'Fabric Tech': 'Interlock Knit / Softy',
            'Design': 'Linear Streamline Gradient',
            'Origin': 'Proudly Made in India'
        },
        availableColors: [
            { name: 'Red', code: 'A' },
            { name: 'Turquoise', code: 'B' },
            { name: 'Gold Yellow', code: 'C' },
            { name: 'Sky Blue', code: 'D' },
            { name: 'Lemon', code: 'E' },
            { name: 'Parrot', code: 'F' },
            { name: 'India', code: 'G' },
            { name: 'Orange', code: 'H' }
        ],
        sizeCharts: {
            tshirt: {
                label: 'T-Shirt Sizes (In Inches)',
                values: [
                    { size: 'Small', chest: '38', length: '27' },
                    { size: 'Medium', chest: '40', length: '28' },
                    { size: 'Large', chest: '42', length: '29' },
                    { size: 'Extra Large', chest: '44', length: '30' },
                    { size: '2X Large', chest: '46', length: '31' }
                ]
            },
            trackpant: {
                label: 'Track Pant Sizes (In Inches)',
                values: [
                    { size: 'Medium', waist: '30-32', length: '39' },
                    { size: 'Large', waist: '32-34', length: '40' },
                    { size: 'Extra Large', waist: '34-36', length: '41' },
                    { size: '2X Large', waist: '36-38', length: '42' }
                ]
            }
        }
    },
    {
        id: 'jabraat-pro-kit',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: 'Football',
        productCode: '#JB 101',
        title: 'Jabraat Pro Performance Kit',
        description: 'Elite performance gear tailored for high intensity sports.',
        longDescription: 'The Jabraat Pro Performance Kit is designed to withstand the toughest conditions. Using reinforced stitching and advanced hyper-wicking materials, this kit provides durability without compromising on flexibility or breathability.',
        image: 'https://images.unsplash.com/photo-1544601284-cd9744c68270?w=800&q=80',
        features: [
            'Hyper-Wicking Technology',
            'Reinforced Stress Points',
            'Pro-Athletic Fit',
            'Made in India'
        ],
        specs: {
            'Material': '100% Micro-Honeycomb Polyester',
            'Fit': 'Pro Athletic',
            'Durability': 'Maximum Strength Rating'
        }
    },
    {
        id: 'sportx-aero-tee',
        brand: 'SportX',
        category: 'T-Shirts',
        sport: 'Activity',
        productCode: '#SX 500',
        title: 'SportX Aero Training Tee',
        description: 'Ultra-lightweight aerodynamic training apparel.',
        longDescription: 'Engineered for speed and agility, the SportX Aero Training Tee is practically weightless. With strategic laser-cut ventilation zones, it offers supreme airflow for endurance athletes who demand the very best.',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80',
        features: [
            'Ultra-Lightweight Material',
            'Laser-Cut Ventilation',
            'Aerodynamic Cut',
            'Quick-Dry Technology'
        ],
        specs: {
            'Material': '90% Recycled Poly, 10% Elastane',
            'Fit': 'Aerodynamic Slim Fit',
            'Weight': 'Featherlight 120 GSM'
        }
    },
    {
        id: 'shatak-pro-flow-cap',
        brand: 'Shatak',
        category: 'Caps',
        sport: 'Cricket',
        productCode: '#CP 701',
        title: 'Shatak Pro-Flow Cap',
        description: 'Advanced moisture-wicking sports cap for maximum performance.',
        longDescription: 'The Shatak Pro-Flow Cap features a multi-panel construction with laser-cut ventilation for superior breathability. The moisture-wicking sweatband keeps you dry, while the adjustable strap ensures a perfect fit for any head size.',
        image: '/cap-pro-flow.png',
        features: ['Laser-Cut Ventilation', 'Moisture-Wicking Sweatband', 'Adjustable Fit', 'Durable Fabric'],
        specs: {
            'Material': 'Performance Polyester Mesh',
            'Fit': 'Adjustable One-Size',
            'Tech': 'Aero-Vent'
        }
    },
    {
        id: 'jabraat-compression-tee',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        productCode: '#JB 202',
        title: 'Jabraat Elite Compression Tee',
        description: 'Second-skin compression for muscle support and improved recovery.',
        longDescription: 'The Jabraat Elite Compression Tee provides targeted muscle support, reducing fatigue and accelerating recovery. The 4-way stretch fabric allows for unrestricted movement, while flat-lock seams prevent chafing.',
        image: '/tshirt-compression.png',
        features: ['4-Way Stretch', 'Flat-lock Seams', 'Muscle Support', 'Breathable Panels'],
        specs: {
            'Material': '85% Nylon, 15% Spandex',
            'Fit': 'Skin-Tight Compression',
            'Tech': 'Recovery-Plus'
        }
    },
    {
        id: 'sportx-stealth-joggers',
        brand: 'SportX',
        category: 'Track Pants',
        sport: 'Activity',
        productCode: '#SX 808',
        title: 'SportX Stealth Tech Joggers',
        description: 'Tapered athletic joggers designed for style and mobility.',
        longDescription: 'The SportX Stealth Tech Joggers combine a modern tapered fit with technical fabrics. Featuring zippered pockets for secure storage and an elasticated waistband with drawcord for a custom fit.',
        image: '/trackpant-stealth.png',
        features: ['Zippered Pockets', 'Tapered Fit', 'Tech-Fleece Fabric', 'Drawcord Waist'],
        specs: {
            'Material': 'Polyester/Cotton Blend',
            'Fit': 'Slim Tapered',
            'Pockets': '3 Secure Storage Points'
        }
    },
    {
        id: 'shatak-flex-shorts',
        brand: 'Shatak',
        category: 'Shorts',
        sport: 'Volleyball',
        productCode: '#SH 303',
        title: 'Shatak Flex Training Shorts',
        description: 'Lightweight and durable training shorts for all-day comfort.',
        longDescription: 'Engineered for variety, the Shatak Flex Training Shorts are perfect for the gym, turf, or casual wear. The reinforced stitching ensures longevity, while the side slits allow for maximum range of motion.',
        image: '/short-flex.png',
        features: ['Lightweight Fabric', 'Side Slits', 'Reinforced Stitching', 'Elastic Waist'],
        specs: {
            'Material': '100% Performance Poly',
            'Length': '7-inch Inseam',
            'Stretch': 'Standard Flex'
        }
    },
    {
        id: 'jabraat-element-jacket',
        brand: 'Jabraat',
        category: 'Jackets',
        sport: 'Activity',
        productCode: '#JK 909',
        title: 'Jabraat Element Windbreaker',
        description: 'Water-resistant and windproof jacket for outdoor athletes.',
        longDescription: 'The Jabraat Element Windbreaker is your go-to for unpredictable weather. It features a lightweight, water-resistant shell and a mesh lining for breathability. The packable design makes it easy to carry anywhere.',
        image: '/jacket-element.png',
        features: ['Water-Resistant', 'Windproof', 'Packable Design', 'Reflective Accents'],
        specs: {
            'Material': 'Micro-Ripstop Poly',
            'Fit': 'Regular Fit',
            'Protection': 'All-Weather Shield'
        }
    },
    {
        id: 'sportx-apex-duffel',
        brand: 'SportX',
        category: 'Bags',
        sport: 'Activity',
        productCode: '#BG 404',
        title: 'SportX Apex Pro Duffel',
        description: 'Premium sports bag with dedicated compartments for any gear.',
        longDescription: 'The SportX Apex Pro Duffel is designed for the serious athlete. It features a ventilated shoe compartment, padded shoulder strap, and multiple internal pockets for organized storage of your essentials.',
        image: '/bag-apex.png',
        features: ['Ventilated Shoe Pocket', 'Padded Straps', 'Heavy-Duty Fabric', '50L Capacity'],
        specs: {
            'Material': 'Matt Finish 900D Poly',
            'Dimensions': '24" x 12" x 12"',
            'Durability': 'Extreme Wear Rating'
        }
    },
    {
        id: 'force-travel-polo',
        brand: 'SportX',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Travel',
        productCode: '#TR 900',
        title: 'Elite Travel Team Polo',
        description: 'Premium travel apparel for teams and staff.',
        longDescription: 'The Elite Travel Team Polo is designed for comfort during transit. Made with breathable, wrinkle-resistant fabric to keep you looking sharp from the airport to the hotel.',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80',
        features: ['Wrinkle-Resistant', 'Soft Touch Fabric', 'Breathable', 'Staff Standard Fit'],
        specs: { 'Material': 'Cotton/Poly Blend', 'Usage': 'Travel / Casual' }
    },
    {
        id: 'force-coach-tee',
        brand: 'Shatak',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Coaches',
        productCode: '#CH 101',
        title: 'Shatak Coach Performance Tee',
        description: 'Dedicated apparel for coaching staff.',
        longDescription: 'High-visibility and professional design for coaches on the field. Features extra ventilation and a professional aesthetic.',
        image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80',
        features: ['Extra Ventilation', 'Professional Look', 'Anti-Odor', 'UV Protection'],
        specs: { 'Material': '100% Performance Poly', 'Usage': 'Coaching' }
    },
    {
        id: 'force-official-shirt',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Officials',
        productCode: '#OF 202',
        title: 'Jabraat Official Referee Shirt',
        description: 'Pro-grade officials and referee apparel.',
        longDescription: 'Designed for officials who need to stay cool and focused. Features specific pocket placements and a streamlined athletic cut.',
        image: 'https://images.unsplash.com/photo-1493723843671-1d655e7d7722?w=800&q=80',
        features: ['Dual Pocket Setup', 'Quick Dry', 'Streamlined Fit', 'Durable Stitching'],
        specs: { 'Material': 'Structured Micro-Mesh', 'Usage': 'Officiating' }
    },
    {
        id: 'force-activity-t20',
        brand: 'SportX',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'T20',
        productCode: '#ACT-T20',
        title: 'SportX Activity T20 Jersey',
        description: 'Lightweight jersey for fast-paced T20 activity.',
        longDescription: 'Engineered for high-intensity T20 sessions, this jersey offers maximum breathability and a modern athletic fit.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
        features: ['Breathable Mesh', 'Quick-Dry', 'Athletic Fit'],
        specs: { 'Material': 'Aero-Poly', 'Usage': 'T20 Practice' }
    },
    {
        id: 'force-activity-practice',
        brand: 'Shatak',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Practice',
        productCode: '#ACT-PRAC',
        title: 'Shatak Everyday Practice Tee',
        description: 'Durable training tee for daily practice sessions.',
        longDescription: 'The Shatak Everyday Practice Tee is built to withstand repeated washes and intense training while maintaining its shape and comfort.',
        image: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?w=800&q=80',
        features: ['Durable Stitching', 'Comfort Fit', 'Soft Touch'],
        specs: { 'Material': 'Performance Cotton-Poly', 'Usage': 'Practice' }
    },
    // Badminton Variants
    {
        id: 'force-badminton-pro',
        brand: 'Shatak',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Practice',
        productCode: '#BD-501',
        title: 'Shatak Smash-Pro Tee',
        description: 'Ultra-flexible T-shirt for rapid badminton movements.',
        longDescription: 'Featuring side-ventilation and a darted back for maximum overhead reach, the Smash-Pro is built for the badminton court.',
        image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
        features: ['Racket-Reach Shoulders', 'Cool-Mesh Back', 'Anti-Static'],
        specs: { 'Material': 'Pro-Flex Poly', 'Usage': 'Tournament Practice' }
    },
    // Football Variants
    {
        id: 'force-football-travel',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Travel',
        productCode: '#FB-TR-01',
        title: 'Jabraat Pitch-Side Travel Polo',
        description: 'Elegant travel polo for football teams.',
        longDescription: 'Crafted with premium cotton-rich fabric, this polo keeps the squad looking cohesive and professional during tours.',
        image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&q=80',
        features: ['Embroidered Crest Space', 'Cohesive Design', 'Comfort Rib'],
        specs: { 'Material': 'Cotton/Poly Pique', 'Usage': 'Team Travel' }
    },
    // Volleyball Variants
    {
        id: 'force-volleyball-coach',
        brand: 'SportX',
        category: 'T-Shirts',
        sport: 'Volleyball',
        usageType: 'Coaches',
        productCode: '#VB-CH-99',
        title: 'SportX Spike-Master Coach Tee',
        description: 'Breathable coach apparel for the volleyball court.',
        longDescription: 'Designed with a high collar for sun protection and a relaxed fit for long hours of court-side instruction.',
        image: 'https://images.unsplash.com/photo-1592653310459-b591b52109bc?w=800&q=80',
        features: ['Sun Protection', 'Relaxed Cut', 'Stain Resistant'],
        specs: { 'Material': 'Micro-Honeycomb Poly', 'Usage': 'Coaching' }
    },
    // Kabaddi Variants
    {
        id: 'force-kabaddi-official',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Officials',
        productCode: '#KB-OF-77',
        title: 'Jabraat Pro-Mat Official Shirt',
        description: 'High-visibility officials shirt for intense Kabaddi matches.',
        longDescription: 'Stretchable yet durable to keep up with the fast-paced movements of kabaddi officiating.',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
        features: ['Mat-Grip Seams', 'Signal Visibility', 'Breathable'],
        specs: { 'Material': 'Reinforced Mesh', 'Usage': 'Officiating' }
    },
    // Activity / General Variants
    {
        id: 'force-travel-polo',
        brand: 'SportX',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Travel',
        productCode: '#TR 900',
        title: 'Elite Travel Team Polo',
        description: 'Premium travel apparel for teams and staff.',
        longDescription: 'The Elite Travel Team Polo is designed for comfort during transit. Made with breathable, wrinkle-resistant fabric to keep you looking sharp from the airport to the hotel.',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80',
        features: ['Wrinkle-Resistant', 'Soft Touch Fabric', 'Breathable', 'Staff Standard Fit'],
        specs: { 'Material': 'Cotton/Poly Blend', 'Usage': 'Travel / Casual' }
    },
    {
        id: 'force-coach-tee',
        brand: 'Shatak',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Coaches',
        productCode: '#CH 101',
        title: 'Shatak Coach Performance Tee',
        description: 'Dedicated apparel for coaching staff.',
        longDescription: 'High-visibility and professional design for coaches on the field. Features extra ventilation and a professional aesthetic.',
        image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80',
        features: ['Extra Ventilation', 'Professional Look', 'Anti-Odor', 'UV Protection'],
        specs: { 'Material': '100% Performance Poly', 'Usage': 'Coaching' }
    },
    {
        id: 'force-official-shirt',
        brand: 'Jabraat',
        category: 'T-Shirts',
        sport: 'Activity',
        usageType: 'Officials',
        productCode: '#OF 202',
        title: 'Jabraat Official Referee Shirt',
        description: 'Pro-grade officials and referee apparel.',
        longDescription: 'Designed for officials who need to stay cool and focused. Features specific pocket placements and a streamlined athletic cut.',
        image: 'https://images.unsplash.com/photo-1493723843671-1d655e7d7722?w=800&q=80',
        features: ['Dual Pocket Setup', 'Quick Dry', 'Streamlined Fit', 'Durable Stitching'],
        specs: { 'Material': 'Structured Micro-Mesh', 'Usage': 'Officiating' }
    }
];
