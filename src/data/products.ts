export interface Product {
    id: string;
    title: string;
    brand?: string;
    category: 'T-Shirts' | 'Track Pants' | 'Shorts' | 'Jackets' | 'Bags' | 'Caps';
    sport?: 'Badminton' | 'Cricket' | 'Football' | 'Volleyball' | 'Kabaddi' | 'Pickleball' | 'Tennis' | 'Other' | 'All';
    usageType?: 'T20' | 'Practice' | 'Travel' | 'Coaches' | 'Officials' | 'General';
    productCode?: string;
    description: string;
    longDescription: string;
    image: string;
    imageBack?: string;
    gallery?: string[];
    features: string[];
    specs: Record<string, string>;
    customizationOptions?: string[];

    sizeCharts?: Record<string, { label: string; values: Record<string, string>[] }>;
}

export const PRODUCTS: Product[] = [
    // Brands
    {
        id: 'force-tn-5111',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'T20',
        productCode: '#TN 5111',
        title: 'T20 Pro Polo',
        description: 'Elite "Softy" fabric polo available in 8 vibrant dual-tone colors.',
        longDescription: 'The #TN 5111 is a pinnacle of activewear engineering. Featuring our proprietary "Softy" fabric type, this polo is crafted with an interlock knit that provides unparalleled comfort while allowing completely free movement. Integrated moisture-wicking technology ensures you stay dry and sweat-free even during the most intense athletic sessions.',
        image: '/T-shirts/11.png',
        imageBack: '/T-shirts/11 back.png',
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
        id: 'force-tn-5112',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Practice',
        productCode: '#TN 5112',
        title: 'Training Practice Tee',
        description: 'Dynamic "Speed-Stream" design in premium Softy fabric.',
        longDescription: 'The #TN 5112 "Speed-Stream" series combines aggressive aesthetic lines with our signature performance. The specialized gradient-stripe pattern is sublimated using high-definition tech that won\'t crack or fade. Like the 5111, it utilizes our interlock "Softy" fabric for maximum comfort and moisture management.',
        image: '/T-shirts/12.png',
        imageBack: '/T-shirts/12 backed.png', // Placeholder
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
        id: 'force-pro-kit',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        productCode: '#JB 101',
        title: 'Pro Performance Kit',
        description: 'Elite performance gear tailored for high intensity sports.',
        longDescription: 'The Pro Performance Kit is designed to withstand the toughest conditions. Using reinforced stitching and advanced hyper-wicking materials, this kit provides durability without compromising on flexibility or breathability.',
        image: '/T-shirts/13.png',
        imageBack: '/T-shirts/13 backed.png',
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
        id: 'force-aero-tee',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Other',
        productCode: '#SX 500',
        title: 'Aero Training Tee',
        description: 'Ultra-lightweight aerodynamic training apparel.',
        longDescription: 'Engineered for speed and agility, the Aero Training Tee is practically weightless. With strategic laser-cut ventilation zones, it offers supreme airflow for endurance athletes who demand the very best.',
        image: '/T-shirts/1.png',
        imageBack: '/T-shirts/2.png',
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
        id: 'force-pro-flow-cap',
        brand: 'Force',
        category: 'Caps',
        sport: 'Cricket',
        productCode: '#CP 701',
        title: 'Pro-Flow Cap',
        description: 'Advanced moisture-wicking sports cap for maximum performance.',
        longDescription: 'The Pro-Flow Cap features a multi-panel construction with laser-cut ventilation for superior breathability. The moisture-wicking sweatband keeps you dry, while the adjustable strap ensures a perfect fit for any head size.',
        image: '/cap-pro-flow.png',
        features: ['Laser-Cut Ventilation', 'Moisture-Wicking Sweatband', 'Adjustable Fit', 'Durable Fabric'],
        specs: {
            'Material': 'Performance Polyester Mesh',
            'Fit': 'Adjustable One-Size',
            'Tech': 'Aero-Vent'
        }
    },
    {
        id: 'force-pickleball-performance-cap',
        brand: 'Force',
        category: 'Caps',
        sport: 'Pickleball',
        productCode: '#CP 801',
        title: 'Pickleball Performance Cap',
        description: 'Lightweight, ultra-breathable cap designed for the speed of Pickleball.',
        longDescription: 'Engineered for the court, the Pickleball Performance Cap features advanced cooling technology and a non-glare undervisor to keep your focus on the ball. The quick-dry fabric ensures comfort during high-intensity rallies.',
        image: '/caps/yellow-cap.png',
        features: ['Non-Glare Undervisor', 'Cooling Tech', 'Quick-Dry Fabric', 'Featherlight'],
        specs: {
            'Material': '90% Poly, 10% Spandex',
            'Fit': 'Athletic Low-Profile',
            'Usage': 'Pickleball / Outdoor Sports'
        }
    },
    {
        id: 'force-tennis-court-pro-cap',
        brand: 'Force',
        category: 'Caps',
        sport: 'Tennis',
        productCode: '#CP 901',
        title: 'Tennis Court Pro Cap',
        description: 'Professional-grade tennis cap with superior moisture management.',
        longDescription: 'The Tennis Court Pro Cap is built for champions. With a curved brim and structured front panels, it maintains its shape even after heavy use. The integrated sweatband pulls moisture away from the brow to keep your vision clear.',
        image: '/caps/blue-cap.png',
        features: ['Structured Profile', 'Moisture-Wicking Brow Band', 'Breathable Mesh Panels', 'UV Protection'],
        specs: {
            'Material': 'Performance Twill',
            'Fit': 'Structured Classic',
            'Protection': 'UPF 50+'
        }
    },
    {
        id: 'force-cricket-elite-white-cap',
        brand: 'Force',
        category: 'Caps',
        sport: 'Cricket',
        productCode: '#CP 702',
        title: 'Cricket Elite White Cap',
        description: 'Classic white cricket cap for professional matches and long days on the field.',
        longDescription: 'The Cricket Elite White Cap combines traditional aesthetics with modern performance. Designed for day-long comfort under the sun, it features maximum UV protection and a wide brim to reduce glare.',
        image: '/caps/white-cap.png',
        features: ['Wide Glare-Reduction Brim', 'Max UV Protection', 'Traditional Match Design', 'Premium Breathable Poly'],
        specs: {
            'Material': 'High-Density Breathable Poly',
            'Fit': 'Full Coverage',
            'Usage': 'Test / Match Cricket'
        }
    },
    {
        id: 'force-compression-tee',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        productCode: '#JB 202',
        title: 'Elite Compression Tee',
        description: 'Second-skin compression for muscle support and improved recovery.',
        longDescription: 'The Elite Compression Tee provides targeted muscle support, reducing fatigue and accelerating recovery. The 4-way stretch fabric allows for unrestricted movement, while flat-lock seams prevent chafing.',
        image: '/T-shirts/3.png',
        imageBack: '/T-shirts/4.png',
        features: ['4-Way Stretch', 'Flat-lock Seams', 'Muscle Support', 'Breathable Panels'],
        specs: {
            'Material': '85% Nylon, 15% Spandex',
            'Fit': 'Skin-Tight Compression',
            'Tech': 'Recovery-Plus'
        }
    },
    {
        id: 'force-stealth-joggers',
        brand: 'Force',
        category: 'Track Pants',
        sport: 'Other',
        productCode: '#SX 808',
        title: 'Stealth Tech Joggers',
        description: 'Tapered athletic joggers designed for style and mobility.',
        longDescription: 'The Stealth Tech Joggers combine a modern tapered fit with technical fabrics. Featuring zippered pockets for secure storage and an elasticated waistband with drawcord for a custom fit.',
        image: '/trackpant-stealth.png',
        features: ['Zippered Pockets', 'Tapered Fit', 'Tech-Fleece Fabric', 'Drawcord Waist'],
        specs: {
            'Material': 'Polyester/Cotton Blend',
            'Fit': 'Slim Tapered',
            'Pockets': '3 Secure Storage Points'
        }
    },
    {
        id: 'force-flex-shorts',
        brand: 'Force',
        category: 'Shorts',
        sport: 'Volleyball',
        productCode: '#SH 303',
        title: 'Flex Training Shorts',
        description: 'Lightweight and durable training shorts for all-day comfort.',
        longDescription: 'Engineered for variety, the Flex Training Shorts are perfect for the gym, turf, or casual wear. The reinforced stitching ensures longevity, while the side slits allow for maximum range of motion.',
        image: '/short-flex.png',
        features: ['Lightweight Fabric', 'Side Slits', 'Reinforced Stitching', 'Elastic Waist'],
        specs: {
            'Material': '100% Performance Poly',
            'Length': '7-inch Inseam',
            'Stretch': 'Standard Flex'
        }
    },
    {
        id: 'force-element-jacket',
        brand: 'Force',
        category: 'Jackets',
        sport: 'Other',
        productCode: '#JK 909',
        title: 'Element Windbreaker',
        description: 'Water-resistant and windproof jacket for outdoor athletes.',
        longDescription: 'The Element Windbreaker is your go-to for unpredictable weather. It features a lightweight, water-resistant shell and a mesh lining for breathability. The packable design makes it easy to carry anywhere.',
        image: '/jacket-element.png',
        features: ['Water-Resistant', 'Windproof', 'Packable Design', 'Reflective Accents'],
        specs: {
            'Material': 'Micro-Ripstop Poly',
            'Fit': 'Regular Fit',
            'Protection': 'All-Weather Shield'
        }
    },
    {
        id: 'force-apex-duffel',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#BG 404',
        title: 'Apex Pro Duffel',
        description: 'Premium sports bag with dedicated compartments for any gear.',
        longDescription: 'The Apex Pro Duffel is designed for the serious athlete. It features a ventilated shoe compartment, padded shoulder strap, and multiple internal pockets for organized storage of your essentials.',
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
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Other',
        usageType: 'Travel',
        productCode: '#TR 900',
        title: 'Elite Travel Team Polo',
        description: 'Premium travel apparel for teams and staff.',
        longDescription: 'The Elite Travel Team Polo is designed for comfort during transit. Made with breathable, wrinkle-resistant fabric to keep you looking sharp from the airport to the hotel.',
        image: '/T-shirts/5.png',
        imageBack: '/T-shirts/6.png',
        features: ['Wrinkle-Resistant', 'Soft Touch Fabric', 'Breathable', 'Staff Standard Fit'],
        specs: { 'Material': 'Cotton/Poly Blend', 'Usage': 'Travel / Casual' }
    },
    {
        id: 'force-coach-tee',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Other',
        usageType: 'Coaches',
        productCode: '#CH 101',
        title: 'Coach Performance Tee',
        description: 'Dedicated apparel for coaching staff.',
        longDescription: 'High-visibility and professional design for coaches on the field. Features extra ventilation and a professional aesthetic.',
        image: '/T-shirts/22.png',
        imageBack: '/T-shirts/23.png',
        features: ['Extra Ventilation', 'Professional Look', 'Anti-Odor', 'UV Protection'],
        specs: { 'Material': '100% Performance Poly', 'Usage': 'Coaching' }
    },
    {
        id: 'force-official-shirt',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Other',
        usageType: 'Officials',
        productCode: '#OF 202',
        title: 'Official Referee Shirt',
        description: 'Pro-grade officials and referee apparel.',
        longDescription: 'Designed for officials who need to stay cool and focused. Features specific pocket placements and a streamlined athletic cut.',
        image: '/T-shirts/24.png',
        imageBack: '/T-shirts/25.png',
        features: ['Dual Pocket Setup', 'Quick Dry', 'Streamlined Fit', 'Durable Stitching'],
        specs: { 'Material': 'Structured Micro-Mesh', 'Usage': 'Officiating' }
    },
    {
        id: 'force-activity-t20',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Other',
        usageType: 'T20',
        productCode: '#ACT-T20',
        title: 'Activity T20 Jersey',
        description: 'Lightweight jersey for fast-paced T20 activity.',
        longDescription: 'Engineered for high-intensity T20 sessions, this jersey offers maximum breathability and a modern athletic fit.',
        image: '/T-shirts/26.png',
        imageBack: '/T-shirts/27.png',
        features: ['Breathable Mesh', 'Quick-Dry', 'Athletic Fit'],
        specs: { 'Material': 'Aero-Poly', 'Usage': 'T20 Practice' }
    },
    {
        id: 'force-activity-practice',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Other',
        usageType: 'Practice',
        productCode: '#ACT-PRAC',
        title: 'Everyday Practice Tee',
        description: 'Durable training tee for daily practice sessions.',
        longDescription: 'The Everyday Practice Tee is built to withstand repeated washes and intense training while maintaining its shape and comfort.',
        image: '/T-shirts/28.png',
        imageBack: '/T-shirts/29.png',
        features: ['Durable Stitching', 'Comfort Fit', 'Soft Touch'],
        specs: { 'Material': 'Performance Cotton-Poly', 'Usage': 'Practice' }
    },
    // Badminton Variants
    {
        id: 'force-badminton-pro',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Practice',
        productCode: '#BD-501',
        title: 'Smash-Pro Tee',
        description: 'Ultra-flexible T-shirt for rapid badminton movements.',
        longDescription: 'Featuring side-ventilation and a darted back for maximum overhead reach, the Smash-Pro is built for the badminton court.',
        image: '/T-shirts/30.png',
        imageBack: '/T-shirts/31.png',
        features: ['Racket-Reach Shoulders', 'Cool-Mesh Back', 'Anti-Static'],
        specs: { 'Material': 'Pro-Flex Poly', 'Usage': 'Tournament Practice' }
    },
    // Football Variants
    {
        id: 'force-football-travel',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Travel',
        productCode: '#FB-TR-01',
        title: 'Pitch-Side Travel Polo',
        description: 'Elegant travel polo for football teams.',
        longDescription: 'Crafted with premium cotton-rich fabric, this polo keeps the squad looking cohesive and professional during tours.',
        image: '/T-shirts/32.png',
        imageBack: '/T-shirts/33.png',
        features: ['Embroidered Crest Space', 'Cohesive Design', 'Comfort Rib'],
        specs: { 'Material': 'Cotton/Poly Pique', 'Usage': 'Team Travel' }
    },
    // Volleyball Variants
    {
        id: 'force-volleyball-coach',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Volleyball',
        usageType: 'Coaches',
        productCode: '#VB-CH-99',
        title: 'Spike-Master Coach Tee',
        description: 'Breathable coach apparel for the volleyball court.',
        longDescription: 'Designed with a high collar for sun protection and a relaxed fit for long hours of court-side instruction.',
        image: '/T-shirts/34.png',
        imageBack: '/T-shirts/35.png',
        features: ['Sun Protection', 'Relaxed Cut', 'Stain Resistant'],
        specs: { 'Material': 'Micro-Honeycomb Poly', 'Usage': 'Coaching' }
    },
    // Kabaddi Variants
    {
        id: 'force-kabaddi-official',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Officials',
        productCode: '#KB-OF-77',
        title: 'Pro-Mat Official Shirt',
        description: 'High-visibility officials shirt for intense Kabaddi matches.',
        longDescription: 'Stretchable yet durable to keep up with the fast-paced movements of kabaddi officiating.',
        image: '/T-shirts/36.png',
        imageBack: '/T-shirts/37.png',
        features: ['Mat-Grip Seams', 'Signal Visibility', 'Breathable'],
        specs: { 'Material': 'Reinforced Mesh', 'Usage': 'Officiating' }
    },
    {
        id: 'force-elite-001',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Practice',
        productCode: '#JB-1001',
        title: 'Elite Series #01',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/1.png',
        imageBack: '/T-shirts/2.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-002',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Travel',
        productCode: '#JB-1002',
        title: 'Elite Series #02',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/3.png',
        imageBack: '/T-shirts/4.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-003',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Coaches',
        productCode: '#JB-1003',
        title: 'Elite Series #03',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/5.png',
        imageBack: '/T-shirts/6.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-004',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Officials',
        productCode: '#JB-1004',
        title: 'Elite Series #04',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/7.png',
        imageBack: '/T-shirts/8.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-005',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'General',
        productCode: '#JB-1005',
        title: 'Elite Series #05',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/9.png',
        imageBack: '/T-shirts/10.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-006',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Practice',
        productCode: '#JB-1006',
        title: 'Elite Series #06',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/11.png',
        imageBack: '/T-shirts/11 back.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-007',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Travel',
        productCode: '#JB-1007',
        title: 'Elite Series #07',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/12.png',
        imageBack: '/T-shirts/12 backed.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-008',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Coaches',
        productCode: '#JB-1008',
        title: 'Elite Series #08',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/13.png',
        imageBack: '/T-shirts/13 backed.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-009',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Officials',
        productCode: '#JB-1009',
        title: 'Elite Series #09',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/14.png',
        imageBack: '/T-shirts/15.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-010',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'General',
        productCode: '#JB-1010',
        title: 'Elite Series #10',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/16.png',
        imageBack: '/T-shirts/17.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-011',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Practice',
        productCode: '#JB-1011',
        title: 'Elite Series #11',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/18.png',
        imageBack: '/T-shirts/19.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-012',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Travel',
        productCode: '#JB-1012',
        title: 'Elite Series #12',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/20.png',
        imageBack: '/T-shirts/21.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-013',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Coaches',
        productCode: '#JB-1013',
        title: 'Elite Series #13',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/22.png',
        imageBack: '/T-shirts/23.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-014',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Officials',
        productCode: '#JB-1014',
        title: 'Elite Series #14',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/24.png',
        imageBack: '/T-shirts/25.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-015',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'General',
        productCode: '#JB-1015',
        title: 'Elite Series #15',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/26.png',
        imageBack: '/T-shirts/27.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-016',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Practice',
        productCode: '#JB-1016',
        title: 'Elite Series #16',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/28.png',
        imageBack: '/T-shirts/29.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-017',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Travel',
        productCode: '#JB-1017',
        title: 'Elite Series #17',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/30.png',
        imageBack: '/T-shirts/31.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-018',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Coaches',
        productCode: '#JB-1018',
        title: 'Elite Series #18',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/32.png',
        imageBack: '/T-shirts/33.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-019',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Officials',
        productCode: '#JB-1019',
        title: 'Elite Series #19',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/34.png',
        imageBack: '/T-shirts/35.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-020',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'General',
        productCode: '#JB-1020',
        title: 'Elite Series #20',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/36.png',
        imageBack: '/T-shirts/37.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-021',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Practice',
        productCode: '#JB-1021',
        title: 'Elite Series #21',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/38.png',
        imageBack: '/T-shirts/39.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-022',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Travel',
        productCode: '#JB-1022',
        title: 'Elite Series #22',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/40.png',
        imageBack: '/T-shirts/41.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-023',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Coaches',
        productCode: '#JB-1023',
        title: 'Elite Series #23',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/42.png',
        imageBack: '/T-shirts/43.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-024',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Officials',
        productCode: '#JB-1024',
        title: 'Elite Series #24',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/44.png',
        imageBack: '/T-shirts/45.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-025',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'General',
        productCode: '#JB-1025',
        title: 'Elite Series #25',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/46.png',
        imageBack: '/T-shirts/47.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-026',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Practice',
        productCode: '#JB-1026',
        title: 'Elite Series #26',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/48.png',
        imageBack: '/T-shirts/49.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-027',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Travel',
        productCode: '#JB-1027',
        title: 'Elite Series #27',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/50.png',
        imageBack: '/T-shirts/51.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-028',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Coaches',
        productCode: '#JB-1028',
        title: 'Elite Series #28',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/52.png',
        imageBack: '/T-shirts/53.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-029',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Officials',
        productCode: '#JB-1029',
        title: 'Elite Series #29',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/54.png',
        imageBack: '/T-shirts/55.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-030',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'General',
        productCode: '#JB-1030',
        title: 'Elite Series #30',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/56.png',
        imageBack: '/T-shirts/57.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-031',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Practice',
        productCode: '#JB-1031',
        title: 'Elite Series #31',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/58.png',
        imageBack: '/T-shirts/59.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-032',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Travel',
        productCode: '#JB-1032',
        title: 'Elite Series #32',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/60.png',
        imageBack: '/T-shirts/61.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-033',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Coaches',
        productCode: '#JB-1033',
        title: 'Elite Series #33',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/62.png',
        imageBack: '/T-shirts/63.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-034',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Officials',
        productCode: '#JB-1034',
        title: 'Elite Series #34',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/64.png',
        imageBack: '/T-shirts/65.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-035',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'General',
        productCode: '#JB-1035',
        title: 'Elite Series #35',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/66.png',
        imageBack: '/T-shirts/67.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-036',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Practice',
        productCode: '#JB-1036',
        title: 'Elite Series #36',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/68.png',
        imageBack: '/T-shirts/69.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-037',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Travel',
        productCode: '#JB-1037',
        title: 'Elite Series #37',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/70.png',
        imageBack: '/T-shirts/71.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-038',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Coaches',
        productCode: '#JB-1038',
        title: 'Elite Series #38',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/72.png',
        imageBack: '/T-shirts/73.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-039',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Officials',
        productCode: '#JB-1039',
        title: 'Elite Series #39',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/74.png',
        imageBack: '/T-shirts/75.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-040',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'General',
        productCode: '#JB-1040',
        title: 'Elite Series #40',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/76.png',
        imageBack: '/T-shirts/77.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-041',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Practice',
        productCode: '#JB-1041',
        title: 'Elite Series #41',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/78.png',
        imageBack: '/T-shirts/79.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-042',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Travel',
        productCode: '#JB-1042',
        title: 'Elite Series #42',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/80.png',
        imageBack: '/T-shirts/81.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-043',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Coaches',
        productCode: '#JB-1043',
        title: 'Elite Series #43',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/82.png',
        imageBack: '/T-shirts/83.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-044',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Officials',
        productCode: '#JB-1044',
        title: 'Elite Series #44',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/84.png',
        imageBack: '/T-shirts/85.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-045',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'General',
        productCode: '#JB-1045',
        title: 'Elite Series #45',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/86.png',
        imageBack: '/T-shirts/87.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-046',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Practice',
        productCode: '#JB-1046',
        title: 'Elite Series #46',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/88.png',
        imageBack: '/T-shirts/89.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-047',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Travel',
        productCode: '#JB-1047',
        title: 'Elite Series #47',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/90.png',
        imageBack: '/T-shirts/91.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-048',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Coaches',
        productCode: '#JB-1048',
        title: 'Elite Series #48',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/92.png',
        imageBack: '/T-shirts/93.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-049',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Officials',
        productCode: '#JB-1049',
        title: 'Elite Series #49',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/94.png',
        imageBack: '/T-shirts/95.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-050',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'General',
        productCode: '#JB-1050',
        title: 'Elite Series #50',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/96.png',
        imageBack: '/T-shirts/97.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-051',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Practice',
        productCode: '#JB-1051',
        title: 'Elite Series #51',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/98.png',
        imageBack: '/T-shirts/99.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-052',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Travel',
        productCode: '#JB-1052',
        title: 'Elite Series #52',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/100.png',
        imageBack: '/T-shirts/101.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-053',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Coaches',
        productCode: '#JB-1053',
        title: 'Elite Series #53',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/102.png',
        imageBack: '/T-shirts/103.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-054',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'Officials',
        productCode: '#JB-1054',
        title: 'Elite Series #54',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/104.png',
        imageBack: '/T-shirts/105.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-055',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'General',
        productCode: '#JB-1055',
        title: 'Elite Series #55',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/106.png',
        imageBack: '/T-shirts/107.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-056',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Practice',
        productCode: '#JB-1056',
        title: 'Elite Series #56',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/108.png',
        imageBack: '/T-shirts/109.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-057',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Travel',
        productCode: '#JB-1057',
        title: 'Elite Series #57',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/110.png',
        imageBack: '/T-shirts/111.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-058',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Coaches',
        productCode: '#JB-1058',
        title: 'Elite Series #58',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/112.png',
        imageBack: '/T-shirts/113.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-059',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Tennis',
        usageType: 'Officials',
        productCode: '#JB-1059',
        title: 'Elite Series #59',
        description: 'Professional grade high-performance tennis apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense tennis sessions.',
        image: '/T-shirts/114.png',
        imageBack: '/T-shirts/115.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-060',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        usageType: 'General',
        productCode: '#JB-1060',
        title: 'Elite Series #60',
        description: 'Professional grade high-performance pickleball apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense pickleball sessions.',
        image: '/T-shirts/116.png',
        imageBack: '/T-shirts/117.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-061',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Cricket',
        usageType: 'Practice',
        productCode: '#JB-1061',
        title: 'Elite Series #61',
        description: 'Professional grade high-performance cricket apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense cricket sessions.',
        image: '/T-shirts/118.png',
        imageBack: '/T-shirts/119.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-062',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Football',
        usageType: 'Travel',
        productCode: '#JB-1062',
        title: 'Elite Series #62',
        description: 'Professional grade high-performance football apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense football sessions.',
        image: '/T-shirts/120.png',
        imageBack: '/T-shirts/121.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-063',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Badminton',
        usageType: 'Coaches',
        productCode: '#JB-1063',
        title: 'Elite Series #63',
        description: 'Professional grade high-performance badminton apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense badminton sessions.',
        image: '/T-shirts/122.png',
        imageBack: '/T-shirts/123.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    {
        id: 'force-elite-064',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Kabaddi',
        usageType: 'Officials',
        productCode: '#JB-1064',
        title: 'Elite Series #64',
        description: 'Professional grade high-performance kabaddi apparel.',
        longDescription: 'Part of the premium Elite Collection, this shirt is engineered for maximum performance. Featuring our advanced moisture-wicking fabric and ergonomic stitch lines, it provides the perfect balance of comfort and durability for intense kabaddi sessions.',
        image: '/T-shirts/124.png',
        imageBack: '/T-shirts/125.png',
        features: [
            'Moisture-Wicking Fabric',
            'Ergonomic Performance Cut',
            'Reinforced Stitching',
            'Sublimated Graphic Print',
            'Breathable Side Panels'
        ],
        specs: {
            'Material': '100% Performance Polyester',
            'Fit': 'Athletic Fit',
            'Weight': '160 GSM',
            'Origin': 'Made in India'
        }
    },
    // New Caps Collection
    // New Caps Collection - Color Specific
    {
        id: 'force-pro-cap-red',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-RED',
        title: 'Pro Cap - Crimson Red',
        description: 'Vibrant crimson red performance cap with moisture-wicking technology.',
        longDescription: 'The Pro Cap in Crimson Red is a high-impact accessory for any athlete. Built with breathable performance polyester and a reinforced brim, it stays comfortable even during peak activity.',
        image: '/caps/red-cap.png',
        features: ['Breathable mesh', 'Adjustable slider', 'Reinforced brim'],
        specs: { 'Color': 'Crimson Red', 'Material': 'Performance Poly' }
    },
    {
        id: 'force-pro-cap-blue',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-BLUE',
        title: 'Pro Cap - Royal Blue',
        description: 'Elite royal blue athletic cap designed for maximum focus.',
        longDescription: 'The Pro Cap in Royal Blue offers a professional look with top-tier athletic performance. Featuring a stay-dry inner headband and lightweight construction.',
        image: '/caps/blue-cap.png',
        features: ['Stay-dry headband', '6-panel construction', 'Curved visor'],
        specs: { 'Color': 'Royal Blue', 'Material': 'Micro-Fiber Poly' }
    },
    {
        id: 'force-stealth-cap-black',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-BLACK',
        title: 'Stealth Cap - Carbon Black',
        description: 'Matte carbon black cap with a sleek, aerodynamic profile.',
        longDescription: 'The Stealth Cap is for the athlete who demands a low-profile, high-performance aesthetic. Made with durable ripstop fabric and laser-fused seams.',
        image: '/caps/black-cap.png',
        features: ['Matte finish', 'Laser-fused seams', 'Reflective detail'],
        specs: { 'Color': 'Carbon Black', 'Material': 'Durable Ripstop' }
    },
    {
        id: 'force-pro-cap-white',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-WHITE',
        title: 'Pro Cap - Arctic White',
        description: 'Clean arctic white cap with superior heat-reflective cooling.',
        longDescription: 'Ideal for outdoor play, the Arctic White cap reflects heat while the technical mesh crown allows for massive airflow to keep your head cool.',
        image: '/caps/white-cap.png',
        features: ['Heat-reflective', 'Max airflow mesh', 'Soft touch'],
        specs: { 'Color': 'Arctic White', 'Material': 'Technical Mesh' }
    },
    {
        id: 'force-elite-cap-navy',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-NAVY',
        title: 'Elite Cap - Midnight Navy',
        description: 'Professional midnight navy cap with a premium structured fit.',
        longDescription: 'The Elite Cap in Midnight Navy is the standard for team coaches and staff. It maintains its shape and color through intense sun exposure and heavy use.',
        image: '/caps/navy-cap.png',
        features: ['UV resistance', 'Structured crown', 'Premium feel'],
        specs: { 'Color': 'Midnight Navy', 'Material': 'Heavy-Duty Twill' }
    },
    {
        id: 'force-aero-cap-grey',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-GREY',
        title: 'Aero Cap - Heather Grey',
        description: 'Modern heather grey melange cap with ultra-light flex-fit.',
        longDescription: 'The Aero Cap in Heather Grey combines lifestyle aesthetics with professional sports utility. The melange fabric is treated for quick-dry performance.',
        image: '/caps/grey-cap.png',
        features: ['Melange texture', 'Quick-dry treatment', 'Flex-fit band'],
        specs: { 'Color': 'Heather Grey', 'Material': 'Melange Tech Fabric' }
    },
    {
        id: 'force-pro-cap-orange',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-ORANGE',
        title: 'Pro Cap - Blaze Orange',
        description: 'Vibrant blaze orange athletic cap for high visibility.',
        longDescription: 'Stay visible and focused with the Blaze Orange Pro Cap. Engineered for high-intensity training with maximum breathability.',
        image: '/caps/orange-cap.png',
        features: ['High visibility', 'Breathable knit', 'Adjustable strap'],
        specs: { 'Color': 'Blaze Orange', 'Material': 'Performance Poly' }
    },
    {
        id: 'force-pro-cap-green',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-GREEN',
        title: 'Pro Cap - Forest Green',
        description: 'Professional forest green cap with a classic athletic look.',
        longDescription: 'The Forest Green Pro Cap offers a deep, professional aesthetic suitable for both on-field play and casual wear.',
        image: '/caps/green-cap.png',
        features: ['Classic 6-panel', 'Reinforced seams', 'Stay-dry tech'],
        specs: { 'Color': 'Forest Green', 'Material': 'Premium Twill' }
    },
    {
        id: 'force-elite-cap-yellow',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-YELLOW',
        title: 'Elite Cap - Electric Yellow',
        description: 'Daring electric yellow cap for the modern athlete.',
        longDescription: 'Stand out from the crowd with the Electric Yellow Elite Cap. Lightweight, moisture-wicking and ultra-durable.',
        image: '/caps/yellow-cap.png',
        features: ['Ultra-lightweight', 'Moisture-wicking', 'Modern fit'],
        specs: { 'Color': 'Electric Yellow', 'Material': 'Technical Mesh' }
    },
    {
        id: 'force-elite-cap-maroon',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-MAROON',
        title: 'Elite Cap - Deep Maroon',
        description: 'Premium deep maroon cap with a professional structured fit.',
        longDescription: 'The Deep Maroon Elite Cap provides a sophisticated team aesthetic. Built to last with high-density fabric.',
        image: '/caps/maroon-cap.png',
        features: ['Structured crown', 'Durable fabric', 'Adjustable buckle'],
        specs: { 'Color': 'Deep Maroon', 'Material': 'High-Density Poly-Twill' }
    },
    {
        id: 'force-pro-cap-purple',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PURPLE',
        title: 'Pro Cap - Royal Purple',
        description: 'Deep royal purple athletic cap with a premium aesthetic.',
        longDescription: 'The Royal Purple cap is designed for teams looking for a unique, standout identity. Features a soft-touch finish and excellent moisture management.',
        image: '/caps/purple-cap.png',
        features: ['Soft-touch finish', 'Moisture-wicking', 'Adjustable strap'],
        specs: { 'Color': 'Royal Purple', 'Material': 'Technical Poly' }
    },
    {
        id: 'force-aero-cap-teal',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-TEAL',
        title: 'Aero Cap - Dynamic Teal',
        description: 'Modern teal athletic cap with technical mesh ventilation.',
        longDescription: 'The Dynamic Teal cap uses advanced fabric tech to maximize airflow while providing a striking modern look.',
        image: '/caps/teal-cap.png',
        features: ['Technical mesh', 'Ultra-lightweight', 'Reflective branding'],
        specs: { 'Color': 'Dynamic Teal', 'Material': 'Aero-Mesh Poly' }
    },
    {
        id: 'force-pro-mesh-black',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-MESH-BLK',
        title: 'Pro Mesh Cap - Stealth Black',
        description: 'Premium mesh-back cap for maximum ventilation and style.',
        longDescription: 'The Pro Mesh Cap features a high-density foam front and breathable mesh back. Perfect for long training sessions in the sun.',
        image: '/caps/black-cap.png',
        features: ['Mesh back', 'Padded front', 'Snapback closure'],
        specs: { 'Color': 'Stealth Black', 'Material': 'Poly-Mesh Mix' }
    },
    {
        id: 'force-pro-mesh-white',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-MESH-WHT',
        title: 'Pro Mesh Cap - Arctic White',
        description: 'Clean arctic white mesh cap with a crisp, professional finish.',
        longDescription: 'Stay cool and look sharp with the Arctic White Pro Mesh Cap. Designed for coaches and players alike.',
        image: '/caps/white-cap.png',
        features: ['Reflective logo', 'Breathable mesh', 'Adjustable fit'],
        specs: { 'Color': 'Arctic White', 'Material': 'Breathable Poly' }
    },
    {
        id: 'force-pro-mesh-red',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-MESH-RED',
        title: 'Pro Mesh Cap - Racing Red',
        description: 'Energetic racing red cap with technical mesh back panels.',
        longDescription: 'The Racing Red Pro Mesh Cap is built for speed and durability. High-impact color with elite-level comfort.',
        image: '/caps/red-cap.png',
        features: ['High-visibility red', 'Ventilated back', 'Stay-dry sweatband'],
        specs: { 'Color': 'Racing Red', 'Material': 'Technical Mesh' }
    },
    {
        id: 'force-pro-mesh-blue',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-MESH-BLU',
        title: 'Pro Mesh Cap - Electric Blue',
        description: 'Vibrant electric blue cap with structured front and mesh back.',
        longDescription: 'Command attention on the field with the Electric Blue Pro Mesh Cap. Engineered for durability and maximum airflow.',
        image: '/caps/blue-cap.png',
        features: ['Structured crown', 'Airflow mesh', 'Premium stitching'],
        specs: { 'Color': 'Electric Blue', 'Material': 'High-Performance Synth' }
    },
    {
        id: 'force-vanguard-cap-navy',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-VANG-NVY',
        title: 'Vanguard Cap - Navy Elite',
        description: 'Low-profile navy cap with a tactical sports design.',
        longDescription: 'The Vanguard series represents the cutting edge of sports headwear. Low-profile design with high-performance fabric.',
        image: '/caps/navy-cap.png',
        features: ['Low profile', 'Tactical design', 'Moisture-wicking'],
        specs: { 'Color': 'Navy Blue', 'Material': 'Ripstop Poly' }
    },
    {
        id: 'force-vanguard-cap-charcoal',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-VANG-CHR',
        title: 'Vanguard Cap - Charcoal Grey',
        description: 'Sleek charcoal grey cap with a minimalist technical aesthetic.',
        longDescription: 'Focused performance meets minimalist design. The Charcoal Vanguard cap is lightweight and exceptionally durable.',
        image: '/caps/grey-cap.png',
        features: ['Minimalist aesthetic', 'Lightweight build', 'Quick-dry fabric'],
        specs: { 'Color': 'Charcoal Grey', 'Material': 'Poly-Elastane Blend' }
    }
];

