export interface Product {
    id: string;
    title: string;
    brand?: string;
    category: 'T-Shirts' | 'Track Pants' | 'Shorts' | 'Jackets' | 'Bags' | 'Caps' | '3D Innovations';
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
    /** Admin / Firestore fabric assignments */
    fabrics?: string[];
    gsms?: string[];

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
    },
    // Plain Performance Caps Collection
    {
        id: 'force-plain-cap-black',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-BLK',
        title: 'Plain Performance Cap - Black',
        description: 'Elite unbranded black performance cap for a clean, minimalist look.',
        longDescription: 'The Plain Performance Cap is designed for athletes who prefer a minimalist, unbranded aesthetic. Built with breathable performance polyester and a reinforced brim, it offers the same high quality as our branded gear without any logos.',
        image: '/caps/plain-black-cap.png',
        features: ['No logos or branding', 'Breathable performance fabric', 'Adjustable slider', 'Reinforced brim'],
        specs: { 'Color': 'Black', 'Material': 'Performance Poly', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-navy',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-NVY',
        title: 'Plain Performance Cap - Midnight Navy',
        description: 'Minimalist midnight navy cap with a premium structured fit and no logos.',
        longDescription: 'A clean, unbranded midnight navy cap designed for coaching staff and players who value a professional, understated look.',
        image: '/caps/plain-navy-cap.png',
        features: ['Unbranded clean design', 'UV resistance', 'Structured crown', 'Premium feel'],
        specs: { 'Color': 'Midnight Navy', 'Material': 'Heavy-Duty Twill', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-red',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-RED',
        title: 'Plain Performance Cap - Crimson Red',
        description: 'Vibrant crimson red performance cap with a completely plain finish.',
        longDescription: 'The Plain Performance Cap in Crimson Red offers a high-impact color without any distracting logos or text. Perfect for customization or a clean aesthetic.',
        image: '/caps/plain-red-cap.png',
        features: ['Plain unbranded finish', 'Breathable mesh', 'Adjustable slider', 'Reinforced brim'],
        specs: { 'Color': 'Crimson Red', 'Material': 'Performance Poly', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-white',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-WHT',
        title: 'Plain Performance Cap - Arctic White',
        description: 'Clean arctic white cap with superior cooling and zero branding.',
        longDescription: 'Ideal for outdoor play in the sun, this unbranded white cap reflects heat and maintains a crisp, professional look without logos.',
        image: '/caps/plain-white-cap.png',
        features: ['No branding', 'Heat-reflective', 'Max airflow mesh', 'Soft touch'],
        specs: { 'Color': 'Arctic White', 'Material': 'Technical Mesh', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-grey',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-GRY',
        title: 'Plain Performance Cap - Charcoal Grey',
        description: 'Sleek, unbranded charcoal grey cap with a technical aesthetic.',
        longDescription: 'A minimalist charcoal grey cap for a professional sports utility look. Lightweight, durable, and completely plain.',
        image: '/caps/plain-grey-cap.png',
        features: ['Unbranded technical look', 'Lightweight build', 'Quick-dry fabric', 'Curved visor'],
        specs: { 'Color': 'Charcoal Grey', 'Material': 'Poly-Elastane Blend', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-royal-blue',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-RBLU',
        title: 'Plain Performance Cap - Royal Blue',
        description: 'Deep royal blue athletic cap with zero logos or text.',
        longDescription: 'The Royal Blue Plain Cap is perfect for teams looking for a clean identity. Features a soft-touch finish and excellent moisture management.',
        image: '/caps/plain-royal-blue-cap.png',
        features: ['Completely plain', 'Soft-touch finish', 'Moisture-wicking', 'Adjustable strap'],
        specs: { 'Color': 'Royal Blue', 'Material': 'Technical Poly', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-forest-green',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-FGRN',
        title: 'Plain Performance Cap - Forest Green',
        description: 'Professional forest green cap with a classic athletic look and no branding.',
        longDescription: 'The Forest Green Plain Cap offers a deep, professional aesthetic. Built to last with high-density fabric and zero external logos.',
        image: '/caps/plain-forest-green-cap.png',
        features: ['Unbranded classic design', 'Classic 6-panel', 'Reinforced seams', 'Stay-dry tech'],
        specs: { 'Color': 'Forest Green', 'Material': 'Premium Twill', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-maroon',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-MRN',
        title: 'Plain Performance Cap - Deep Maroon',
        description: 'Premium deep maroon cap with a professional structured fit and zero logos.',
        longDescription: 'Sophisticated deep maroon aesthetic with a clean, unbranded finish. High-density fabric ensures durability and shape retention.',
        image: '/caps/plain-maroon-cap.png',
        features: ['No branding', 'Structured crown', 'Durable fabric', 'Adjustable buckle'],
        specs: { 'Color': 'Deep Maroon', 'Material': 'High-Density Poly-Twill', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-beige',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-BGE',
        title: 'Plain Performance Cap - Sand Beige',
        description: 'Classic sand beige cap for a clean, natural look with no branding.',
        longDescription: 'A versatile, unbranded beige cap that pairs well with any team gear. Traditional fit with high-quality stitching.',
        image: '/caps/plain-beige-cap.png',
        features: ['Unbranded neutral design', 'Breathable mesh', 'Adjustable slider', 'Reinforced brim'],
        specs: { 'Color': 'Sand Beige', 'Material': 'Performance Poly', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-olive',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-OLV',
        title: 'Plain Performance Cap - Olive Green',
        description: 'Tactical olive green cap with a minimalist, unbranded finish.',
        longDescription: 'The Olive Green Plain Cap is designed for a rugged yet clean aesthetic. Featuring technical fabric and zero external logos.',
        image: '/caps/plain-olive-cap.png',
        features: ['Plain tactical look', 'Matte finish', 'Laser-fused seams', 'Reflective detail'],
        specs: { 'Color': 'Olive Green', 'Material': 'Durable Ripstop', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-teal',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-TEL',
        title: 'Plain Performance Cap - Dynamic Teal',
        description: 'Modern teal athletic cap with technical mesh ventilation and no branding.',
        longDescription: 'The Dynamic Teal Plain Cap uses advanced fabric tech to maximize airflow while providing a striking modern look without logos.',
        image: '/caps/plain-teal-cap.png',
        features: ['Completely plain', 'Technical mesh', 'Ultra-lightweight', 'Perfect for customization'],
        specs: { 'Color': 'Dynamic Teal', 'Material': 'Aero-Mesh Poly', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-purple',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-PUR',
        title: 'Plain Performance Cap - Royal Purple',
        description: 'Deep royal purple athletic cap with a premium aesthetic and zero branding.',
        longDescription: 'The Royal Purple Plain Cap is designed for a unique identity. Features a soft-touch finish and excellent moisture management without logos.',
        image: '/caps/plain-purple-cap.png',
        features: ['Completely plain', 'Soft-touch finish', 'Moisture-wicking', 'Adjustable strap'],
        specs: { 'Color': 'Royal Purple', 'Material': 'Technical Poly', 'Branding': 'None' }
    },
    {
        id: 'force-plain-cap-yellow',
        brand: 'Force',
        category: 'Caps',
        sport: 'All',
        productCode: '#CP-PLAIN-YEL',
        title: 'Plain Performance Cap - Electric Yellow',
        description: 'High-visibility electric yellow cap with zero branding.',
        longDescription: 'The Electric Yellow Plain Cap is lightweight, moisture-wicking and ultra-durable, providing a bold look with a clean, unbranded finish.',
        image: '/caps/plain-yellow-cap.png',
        features: ['No logos', 'Ultra-lightweight', 'Moisture-wicking', 'Modern fit'],
        specs: { 'Color': 'Electric Yellow', 'Material': 'Technical Mesh', 'Branding': 'None' }
    },
    // --- PICKLEBALL COLLECTION #PB105 ---
    {
        id: 'force-pb-105-sky',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB105-SKY',
        title: 'Pickleball Apex Tee - Sky Blue',
        description: 'Elite performance tee with topographic geometric detailing.',
        longDescription: 'The #PB105 Series is engineered for the fast-paced nature of Pickleball. Featuring a distinctive topographic geometric pattern and crafted from premium Softy Dot Knit fabric.',
        image: '/T-shirts/118.png',
        imageBack: '/T-shirts/119.png',
        features: ['Softy Dot Knit Fabric', 'Geometric chest detailing', 'Pickleball specialized fit', 'Pro-moisture wicking'],
        specs: { 'Series': '#PB105', 'Material': 'Technical Dot Knit', 'Fit': 'Athletic' }
    },
    {
        id: 'force-pb-105-peacock',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB105-PEA',
        title: 'Pickleball Apex Tee - Peacock',
        description: 'Technical Pickleball jersey in a striking Peacock & Navy pattern.',
        longDescription: 'A premium performance jersey designed specifically for Pickleball. Features the #PB105 signature geometric overlay on the shoulders and chest.',
        image: '/T-shirts/120.png',
        imageBack: '/T-shirts/121.png',
        features: ['Softy Dot Knit Fabric', 'Vibrant sublimation', 'Technical mesh panels', 'Stretch-lite tech'],
        specs: { 'Series': '#PB105', 'Material': 'Premium Poly-Dot', 'Fit': 'True to Size' }
    },
    {
        id: 'force-pb-105-navy',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB105-NVY',
        title: 'Pickleball Apex Tee - Deep Navy',
        description: 'Professional grade Navy Pickleball jersey with tech patterns.',
        longDescription: 'Built for competitive play, this Navy edition of the #PB105 series offers a professional look with technical performance features.',
        image: '/T-shirts/122.png',
        imageBack: '/T-shirts/123.png',
        features: ['Signature #PB105 Pattern', 'High-density sublimation', 'Quick-dry technology', 'Anti-odor finish'],
        specs: { 'Series': '#PB105', 'Material': 'Technical Mesh', 'Fit': 'Performance' }
    },
    {
        id: 'force-pb-105-bisleri',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB105-BIS',
        title: 'Pickleball Apex Tee - Bisleri',
        description: 'Modern Bisleri green Pickleball jersey with geometric accents.',
        longDescription: 'The Bisleri edition of the #PB105 series combines a fresh color palette with our most advanced Pickleball-specific cut.',
        image: '/T-shirts/124.png',
        imageBack: '/T-shirts/125.png',
        features: ['Geometric Tech Pattern', 'Ultra-breathable knit', 'Reinforced stitching', 'Vibrant mint finish'],
        specs: { 'Series': '#PB105', 'Material': 'Technical Dot Knit', 'Fit': 'Athletic' }
    },
    // --- PICKLEBALL COLLECTION #PB104 ---
    {
        id: 'force-pb-104-royal',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB104-RYL',
        title: 'Pickleball Shield Tee - Royal Blue',
        description: 'Artistic brush-stroke design with modern geometric overlays.',
        longDescription: 'The #PB104 series features a bold, artistic brush-stroke effect across the body, paired with clean geometric shoulder detailing.',
        image: '/T-shirts/104.png',
        imageBack: '/T-shirts/105.png',
        features: ['Artistic Brush Pattern', 'Geometric Shoulder Accent', '4-way stretch fabric', 'Flatlock seams'],
        specs: { 'Series': '#PB104', 'Color': 'Royal Blue', 'Material': 'Performance Poly' }
    },
    {
        id: 'force-pb-104-parrot',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB104-PAR',
        title: 'Pickleball Shield Tee - Parrot Green',
        description: 'Vibrant Parrot Green Pickelball jersey with #PB104 graphics.',
        longDescription: 'Stand out on the court with the Parrot Green #PB104 jersey. Lightweight design for maximum speed and agility.',
        image: '/T-shirts/102.png',
        imageBack: '/T-shirts/103.png',
        features: ['High-viz graphics', 'Moisture-wicking tech', 'Ultra-light build', 'Sublimated finish'],
        specs: { 'Series': '#PB104', 'Color': 'Parrot Green', 'Material': 'Technical Poly' }
    },
    {
        id: 'force-pb-104-india',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB104-IND',
        title: 'Pickleball Shield Tee - India Blue',
        description: 'Classic India Blue performance jersey with technical graphics.',
        longDescription: 'A core part of our Pickleball range, the India Blue #PB104 series offers timeless style with modern tech features.',
        image: '/T-shirts/106.png',
        imageBack: '/T-shirts/107.png',
        features: ['Sublimated technical art', 'Breathable side mesh', 'Contoured fit', 'Durable print'],
        specs: { 'Series': '#PB104', 'Color': 'India Blue', 'Material': 'Performance Mesh' }
    },
    {
        id: 'force-pb-104-peach',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB104-PCH',
        title: 'Pickleball Shield Tee - Peach',
        description: 'Sophisticated Peach Pickleball jersey with #PB104 tech art.',
        longDescription: 'The Peach edition of #PB104 brings a fresh aesthetic to the court without compromising on performance.',
        image: '/T-shirts/108.png',
        imageBack: '/T-shirts/109.png',
        features: ['Fresh Peach colorway', 'Technical graphics', 'Soft-touch fabric', 'Quick-dry tech'],
        specs: { 'Series': '#PB104', 'Color': 'Peach', 'Material': 'Premium Poly' }
    },
    // --- PICKLEBALL COLLECTION GRADIENT ---
    {
        id: 'force-pb-grad-parrot',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB-GRAD-PAR',
        title: 'Pickleball Horizon Tee - Parrot',
        description: 'Dynamic horizontal stripes over a deep gradient body.',
        longDescription: 'The Horizon Series uses a sophisticated multi-stage gradient process and bold horizontal stripes to create a truly modern Pickleball jersey.',
        image: '/T-shirts/110.png',
        imageBack: '/T-shirts/111.png',
        features: ['Horizon Stripe Design', 'Full-body Gradient', 'Technical mesh back', 'Reflective detailing'],
        specs: { 'Style': 'Gradient', 'Material': 'Aero-Mesh Poly', 'Fit': 'Modern' }
    },
    {
        id: 'force-pb-grad-india',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB-GRAD-IND',
        title: 'Pickleball Horizon Tee - India Blue',
        description: 'India Blue gradient jersey with bold horizontal accents.',
        longDescription: 'High-performance Pickleball tee featuring a deep blue gradient. Engineered for maximum airflow during intense rallies.',
        image: '/T-shirts/112.png',
        imageBack: '/T-shirts/113.png',
        features: ['Deep Blue Gradient', 'Technical Striping', 'Pro-cool technology', 'Stay-dry fabric'],
        specs: { 'Style': 'Gradient', 'Material': 'Max-Air Poly', 'Fit': 'Modern' }
    },
    {
        id: 'force-pb-grad-red',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB-GRAD-RED',
        title: 'Pickleball Horizon Tee - Blaze Red',
        description: 'Striking red and orange gradient Pickleball performance jersey.',
        longDescription: 'The Blaze Red Horizon jersey is designed for the bold. High-density sublimation ensures colors stay vibrant through every match.',
        image: '/T-shirts/114.png',
        imageBack: '/T-shirts/115.png',
        features: ['Blaze Red Gradient', 'Striped chest detailing', 'High-stretch poly', 'Cooling knit'],
        specs: { 'Style': 'Gradient', 'Material': 'Technical Poly', 'Fit': 'Modern' }
    },
    {
        id: 'force-pb-grad-lemon',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'Pickleball',
        productCode: '#PB-GRAD-LEM',
        title: 'Pickleball Horizon Tee - Lemon',
        description: 'Electric lemon and yellow gradient Pickleball jersey.',
        longDescription: 'Maximum visibility meets maximum performance. The Lemon Horizon jersey uses ultra-breathable technical fabric to keep you cool under pressure.',
        image: '/T-shirts/116.png',
        imageBack: '/T-shirts/117.png',
        features: ['Electric Lemon Gradient', 'Modern technical fit', 'Anti-cling tech', 'Lightweight build'],
        specs: { 'Style': 'Gradient', 'Material': 'Technical Poly', 'Fit': 'Modern' }
    },
    // --- 3D INNOVATIONS COLLECTION ---
    {
        id: 'force-3d-innov-01',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-01',
        title: '3D Innovation Design #1',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #1 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 1/326.png',
        gallery: [
            '/New folder/ppt 1/326.png',
            '/New folder/ppt 1/327.png',
            '/New folder/ppt 1/firozi.png',
            '/New folder/ppt 1/india blue.png',
            '/New folder/ppt 1/L grey.png',
            '/New folder/ppt 1/lemon.png',
            '/New folder/ppt 1/orange.png',
            '/New folder/ppt 1/parrot.png',
            '/New folder/ppt 1/peach.png',
            '/New folder/ppt 1/pink.png',
            '/New folder/ppt 1/red.png',
            '/New folder/ppt 1/sky.png',
            '/New folder/ppt 1/turquoise.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-02',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-02',
        title: '3D Innovation Design #2',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #2 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 2/339.png',
        gallery: [
            '/New folder/ppt 2/339.png',
            '/New folder/ppt 2/340.png',
            '/New folder/ppt 2/beige.png',
            '/New folder/ppt 2/bisleri.png',
            '/New folder/ppt 2/d grey.png',
            '/New folder/ppt 2/firozi.png',
            '/New folder/ppt 2/l grey.png',
            '/New folder/ppt 2/orange.png',
            '/New folder/ppt 2/parrot.png',
            '/New folder/ppt 2/peach.png',
            '/New folder/ppt 2/peacock.png',
            '/New folder/ppt 2/pink.png',
            '/New folder/ppt 2/red.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-03',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-03',
        title: '3D Innovation Design #3',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #3 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 3/352.png',
        gallery: [
            '/New folder/ppt 3/352.png',
            '/New folder/ppt 3/353.png',
            '/New folder/ppt 3/bisleri.png',
            '/New folder/ppt 3/dark grey.png',
            '/New folder/ppt 3/firozi.png',
            '/New folder/ppt 3/green.png',
            '/New folder/ppt 3/light grey.png',
            '/New folder/ppt 3/navy blue.png',
            '/New folder/ppt 3/orange.png',
            '/New folder/ppt 3/pink.png',
            '/New folder/ppt 3/red.png',
            '/New folder/ppt 3/skyblue.png',
            '/New folder/ppt 3/turquoise.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-04',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-04',
        title: '3D Innovation Design #4',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #4 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 4/365.png',
        gallery: [
            '/New folder/ppt 4/365.png',
            '/New folder/ppt 4/366.png',
            '/New folder/ppt 4/bisleri.png',
            '/New folder/ppt 4/dark grey.png',
            '/New folder/ppt 4/green.png',
            '/New folder/ppt 4/inidia bule.png',
            '/New folder/ppt 4/Light grey.png',
            '/New folder/ppt 4/maroon.png',
            '/New folder/ppt 4/orange.png',
            '/New folder/ppt 4/peach.png',
            '/New folder/ppt 4/peacock.png',
            '/New folder/ppt 4/red.png',
            '/New folder/ppt 4/sky bule.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-05',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-05',
        title: '3D Innovation Design #5',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #5 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 5/379.png',
        gallery: [
            '/New folder/ppt 5/379.png',
            '/New folder/ppt 5/380.png',
            '/New folder/ppt 5/bisleri.png',
            '/New folder/ppt 5/firozi.png',
            '/New folder/ppt 5/india blue.png',
            '/New folder/ppt 5/lemon.png',
            '/New folder/ppt 5/maroon.png',
            '/New folder/ppt 5/navy blue.png',
            '/New folder/ppt 5/orange.png',
            '/New folder/ppt 5/pink.png',
            '/New folder/ppt 5/red.png',
            '/New folder/ppt 5/royal bule.png',
            '/New folder/ppt 5/sky bule.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-06',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-06',
        title: '3D Innovation Design #6',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #6 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 6/392.png',
        gallery: [
            '/New folder/ppt 6/392.png',
            '/New folder/ppt 6/393.png',
            '/New folder/ppt 6/bisleri.png',
            '/New folder/ppt 6/firozi.png',
            '/New folder/ppt 6/golden.png',
            '/New folder/ppt 6/india blue.png',
            '/New folder/ppt 6/lemon.png',
            '/New folder/ppt 6/light grey.png',
            '/New folder/ppt 6/navy blue.png',
            '/New folder/ppt 6/porrot.png',
            '/New folder/ppt 6/red.png',
            '/New folder/ppt 6/royal blue.png',
            '/New folder/ppt 6/sky blue.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-07',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-07',
        title: '3D Innovation Design #7',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #7 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 7/1.png',
        gallery: [
            '/New folder/ppt 7/1.png',
            '/New folder/ppt 7/2.png',
            '/New folder/ppt 7/bisleri.png',
            '/New folder/ppt 7/Dark grey.png',
            '/New folder/ppt 7/firozi.png',
            '/New folder/ppt 7/leomen.png',
            '/New folder/ppt 7/Light purple.png',
            '/New folder/ppt 7/navyblue.png',
            '/New folder/ppt 7/orange.png',
            '/New folder/ppt 7/peacock.png',
            '/New folder/ppt 7/red.png',
            '/New folder/ppt 7/royal bule.png',
            '/New folder/ppt 7/sky blue.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-08',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-08',
        title: '3D Innovation Design #8',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #8 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 8/14.png',
        gallery: [
            '/New folder/ppt 8/14.png',
            '/New folder/ppt 8/15.png',
            '/New folder/ppt 8/firozi.png',
            '/New folder/ppt 8/golden.png',
            '/New folder/ppt 8/indian blue.png',
            '/New folder/ppt 8/lemon.png',
            '/New folder/ppt 8/light grey.png',
            '/New folder/ppt 8/navy blue.png',
            '/New folder/ppt 8/orange.png',
            '/New folder/ppt 8/parrot.png',
            '/New folder/ppt 8/peach.png',
            '/New folder/ppt 8/peacock.png',
            '/New folder/ppt 8/Red pink.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-09',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-09',
        title: '3D Innovation Design #9',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #9 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 9/27.png',
        gallery: [
            '/New folder/ppt 9/27.png',
            '/New folder/ppt 9/28.png',
            '/New folder/ppt 9/bisleri.png',
            '/New folder/ppt 9/firozi.png',
            '/New folder/ppt 9/golden (2).png',
            '/New folder/ppt 9/golden.png',
            '/New folder/ppt 9/green.png',
            '/New folder/ppt 9/indian blue.png',
            '/New folder/ppt 9/light purple.png',
            '/New folder/ppt 9/maroon.png',
            '/New folder/ppt 9/orange.png',
            '/New folder/ppt 9/peacock.png',
            '/New folder/ppt 9/skyblue.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-10',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-10',
        title: '3D Innovation Design #10',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #10 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 10/40.png',
        gallery: [
            '/New folder/ppt 10/40.png',
            '/New folder/ppt 10/41.png',
            '/New folder/ppt 10/beight.png',
            '/New folder/ppt 10/bisleri.png',
            '/New folder/ppt 10/india blue.png',
            '/New folder/ppt 10/lemon.png',
            '/New folder/ppt 10/light grey.png',
            '/New folder/ppt 10/maroon.png',
            '/New folder/ppt 10/orange.png',
            '/New folder/ppt 10/parrot.png',
            '/New folder/ppt 10/red pink.png',
            '/New folder/ppt 10/red.png',
            '/New folder/ppt 10/sky blue.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-11',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-11',
        title: '3D Innovation Design #11',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #11 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 11/53.png',
        gallery: [
            '/New folder/ppt 11/53.png',
            '/New folder/ppt 11/54.png',
            '/New folder/ppt 11/61.png',
            '/New folder/ppt 11/bisleri.png',
            '/New folder/ppt 11/dark grey.png',
            '/New folder/ppt 11/green.png',
            '/New folder/ppt 11/india blue.png',
            '/New folder/ppt 11/light pink.png',
            '/New folder/ppt 11/light purple.png',
            '/New folder/ppt 11/maroon.png',
            '/New folder/ppt 11/orange.png',
            '/New folder/ppt 11/purple.png',
            '/New folder/ppt 11/red.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-12',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-12',
        title: '3D Innovation Design #12',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #12 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 12/66.png',
        gallery: [
            '/New folder/ppt 12/66.png',
            '/New folder/ppt 12/67.png',
            '/New folder/ppt 12/beige.png',
            '/New folder/ppt 12/golden yellow.png',
            '/New folder/ppt 12/green.png',
            '/New folder/ppt 12/lemon.png',
            '/New folder/ppt 12/light grey.png',
            '/New folder/ppt 12/light purple.png',
            '/New folder/ppt 12/navy blue.png',
            '/New folder/ppt 12/peacock.png',
            '/New folder/ppt 12/red pink.png',
            '/New folder/ppt 12/red.png',
            '/New folder/ppt 12/turquoise.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-13',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-13',
        title: '3D Innovation Design #13',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #13 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 13/79.png',
        gallery: [
            '/New folder/ppt 13/79.png',
            '/New folder/ppt 13/80.png',
            '/New folder/ppt 13/golden.png',
            '/New folder/ppt 13/india blue.png',
            '/New folder/ppt 13/maroon.png',
            '/New folder/ppt 13/orange.png',
            '/New folder/ppt 13/parrot.png',
            '/New folder/ppt 13/peacock.png',
            '/New folder/ppt 13/pink.png',
            '/New folder/ppt 13/purple.png',
            '/New folder/ppt 13/red.png',
            '/New folder/ppt 13/sky bule.png',
            '/New folder/ppt 13/yellow.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-14',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-14',
        title: '3D Innovation Design #14',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #14 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 14/92.png',
        gallery: [
            '/New folder/ppt 14/92.png',
            '/New folder/ppt 14/93.png',
            '/New folder/ppt 14/94.png',
            '/New folder/ppt 14/95.png',
            '/New folder/ppt 14/96.png',
            '/New folder/ppt 14/97.png',
            '/New folder/ppt 14/98.png',
            '/New folder/ppt 14/99.png',
            '/New folder/ppt 14/100.png',
            '/New folder/ppt 14/101.png',
            '/New folder/ppt 14/102.png',
            '/New folder/ppt 14/103.png',
            '/New folder/ppt 14/104.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-15',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-15',
        title: '3D Innovation Design #15',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #15 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 15/105.png',
        gallery: [
            '/New folder/ppt 15/105.png',
            '/New folder/ppt 15/106.png',
            '/New folder/ppt 15/107.png',
            '/New folder/ppt 15/108.png',
            '/New folder/ppt 15/109.png',
            '/New folder/ppt 15/110.png',
            '/New folder/ppt 15/111.png',
            '/New folder/ppt 15/112.png',
            '/New folder/ppt 15/113.png',
            '/New folder/ppt 15/114.png',
            '/New folder/ppt 15/115.png',
            '/New folder/ppt 15/116.png',
            '/New folder/ppt 15/117.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-16',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-16',
        title: '3D Innovation Design #16',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #16 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 16/118.png',
        gallery: [
            '/New folder/ppt 16/118.png',
            '/New folder/ppt 16/119.png',
            '/New folder/ppt 16/120.png',
            '/New folder/ppt 16/121.png',
            '/New folder/ppt 16/122.png',
            '/New folder/ppt 16/123.png',
            '/New folder/ppt 16/124.png',
            '/New folder/ppt 16/125.png',
            '/New folder/ppt 16/126.png',
            '/New folder/ppt 16/127.png',
            '/New folder/ppt 16/128.png',
            '/New folder/ppt 16/129.png',
            '/New folder/ppt 16/130.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-17',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-17',
        title: '3D Innovation Design #17',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #17 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 17/144.png',
        gallery: [
            '/New folder/ppt 17/144.png',
            '/New folder/ppt 17/145.png',
            '/New folder/ppt 17/146.png',
            '/New folder/ppt 17/147.png',
            '/New folder/ppt 17/148.png',
            '/New folder/ppt 17/149.png',
            '/New folder/ppt 17/150.png',
            '/New folder/ppt 17/151.png',
            '/New folder/ppt 17/152.png',
            '/New folder/ppt 17/153.png',
            '/New folder/ppt 17/154.png',
            '/New folder/ppt 17/155.png',
            '/New folder/ppt 17/156.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-18',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-18',
        title: '3D Innovation Design #18',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #18 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 18/131.png',
        gallery: [
            '/New folder/ppt 18/131.png',
            '/New folder/ppt 18/132.png',
            '/New folder/ppt 18/133.png',
            '/New folder/ppt 18/134.png',
            '/New folder/ppt 18/135.png',
            '/New folder/ppt 18/136.png',
            '/New folder/ppt 18/137.png',
            '/New folder/ppt 18/138.png',
            '/New folder/ppt 18/139.png',
            '/New folder/ppt 18/140.png',
            '/New folder/ppt 18/141.png',
            '/New folder/ppt 18/142.png',
            '/New folder/ppt 18/143.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-19',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-19',
        title: '3D Innovation Design #19',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #19 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 19/183.png',
        gallery: [
            '/New folder/ppt 19/183.png',
            '/New folder/ppt 19/184.png',
            '/New folder/ppt 19/185.png',
            '/New folder/ppt 19/186.png',
            '/New folder/ppt 19/187.png',
            '/New folder/ppt 19/188.png',
            '/New folder/ppt 19/189.png',
            '/New folder/ppt 19/190.png',
            '/New folder/ppt 19/191.png',
            '/New folder/ppt 19/192.png',
            '/New folder/ppt 19/193.png',
            '/New folder/ppt 19/194.png',
            '/New folder/ppt 19/195.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-20',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-20',
        title: '3D Innovation Design #20',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #20 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 20/196.png',
        gallery: [
            '/New folder/ppt 20/196.png',
            '/New folder/ppt 20/197.png',
            '/New folder/ppt 20/198.png',
            '/New folder/ppt 20/199.png',
            '/New folder/ppt 20/200.png',
            '/New folder/ppt 20/201.png',
            '/New folder/ppt 20/202.png',
            '/New folder/ppt 20/203.png',
            '/New folder/ppt 20/204.png',
            '/New folder/ppt 20/205.png',
            '/New folder/ppt 20/206.png',
            '/New folder/ppt 20/207.png',
            '/New folder/ppt 20/208.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-21',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-21',
        title: '3D Innovation Design #21',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #21 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 21/209.png',
        gallery: [
            '/New folder/ppt 21/209.png',
            '/New folder/ppt 21/210.png',
            '/New folder/ppt 21/211.png',
            '/New folder/ppt 21/212.png',
            '/New folder/ppt 21/213.png',
            '/New folder/ppt 21/214.png',
            '/New folder/ppt 21/215.png',
            '/New folder/ppt 21/216.png',
            '/New folder/ppt 21/217.png',
            '/New folder/ppt 21/218.png',
            '/New folder/ppt 21/219.png',
            '/New folder/ppt 21/220.png',
            '/New folder/ppt 21/221.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-22',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-22',
        title: '3D Innovation Design #22',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #22 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 22/222.png',
        gallery: [
            '/New folder/ppt 22/222.png',
            '/New folder/ppt 22/223.png',
            '/New folder/ppt 22/224.png',
            '/New folder/ppt 22/225.png',
            '/New folder/ppt 22/226.png',
            '/New folder/ppt 22/227.png',
            '/New folder/ppt 22/228.png',
            '/New folder/ppt 22/229.png',
            '/New folder/ppt 22/230.png',
            '/New folder/ppt 22/231.png',
            '/New folder/ppt 22/232.png',
            '/New folder/ppt 22/233.png',
            '/New folder/ppt 22/234.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-23',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-23',
        title: '3D Innovation Design #23',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #23 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 23/274.png',
        gallery: [
            '/New folder/ppt 23/274.png',
            '/New folder/ppt 23/275.png',
            '/New folder/ppt 23/276.png',
            '/New folder/ppt 23/277.png',
            '/New folder/ppt 23/278.png',
            '/New folder/ppt 23/279.png',
            '/New folder/ppt 23/280.png',
            '/New folder/ppt 23/281.png',
            '/New folder/ppt 23/282.png',
            '/New folder/ppt 23/283.png',
            '/New folder/ppt 23/284.png',
            '/New folder/ppt 23/285.png',
            '/New folder/ppt 23/286.png',
            '/New folder/ppt 23/285 (2).png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-24',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-24',
        title: '3D Innovation Design #24',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #24 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 24/287.png',
        gallery: [
            '/New folder/ppt 24/287.png',
            '/New folder/ppt 24/288.png',
            '/New folder/ppt 24/289.png',
            '/New folder/ppt 24/290.png',
            '/New folder/ppt 24/291.png',
            '/New folder/ppt 24/292.png',
            '/New folder/ppt 24/293.png',
            '/New folder/ppt 24/294.png',
            '/New folder/ppt 24/295.png',
            '/New folder/ppt 24/296.png',
            '/New folder/ppt 24/297.png',
            '/New folder/ppt 24/298.png',
            '/New folder/ppt 24/299.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-25',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-25',
        title: '3D Innovation Design #25',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #25 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 25/235.png',
        gallery: [
            '/New folder/ppt 25/235.png',
            '/New folder/ppt 25/236.png',
            '/New folder/ppt 25/237.png',
            '/New folder/ppt 25/238.png',
            '/New folder/ppt 25/239.png',
            '/New folder/ppt 25/240.png',
            '/New folder/ppt 25/241.png',
            '/New folder/ppt 25/242.png',
            '/New folder/ppt 25/243.png',
            '/New folder/ppt 25/244.png',
            '/New folder/ppt 25/245.png',
            '/New folder/ppt 25/246.png',
            '/New folder/ppt 25/247.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-26',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-26',
        title: '3D Innovation Design #26',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #26 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 26/248.png',
        gallery: [
            '/New folder/ppt 26/248.png',
            '/New folder/ppt 26/249.png',
            '/New folder/ppt 26/250.png',
            '/New folder/ppt 26/251.png',
            '/New folder/ppt 26/252.png',
            '/New folder/ppt 26/253.png',
            '/New folder/ppt 26/254.png',
            '/New folder/ppt 26/255.png',
            '/New folder/ppt 26/256.png',
            '/New folder/ppt 26/257.png',
            '/New folder/ppt 26/258.png',
            '/New folder/ppt 26/259.png',
            '/New folder/ppt 26/260.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-27',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-27',
        title: '3D Innovation Design #27',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #27 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 27/300.png',
        gallery: [
            '/New folder/ppt 27/300.png',
            '/New folder/ppt 27/301.png',
            '/New folder/ppt 27/302.png',
            '/New folder/ppt 27/303.png',
            '/New folder/ppt 27/304.png',
            '/New folder/ppt 27/305.png',
            '/New folder/ppt 27/306.png',
            '/New folder/ppt 27/307.png',
            '/New folder/ppt 27/308.png',
            '/New folder/ppt 27/309.png',
            '/New folder/ppt 27/310.png',
            '/New folder/ppt 27/311.png',
            '/New folder/ppt 27/312.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-28',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-28',
        title: '3D Innovation Design #28',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #28 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 28/313.png',
        gallery: [
            '/New folder/ppt 28/313.png',
            '/New folder/ppt 28/314.png',
            '/New folder/ppt 28/315.png',
            '/New folder/ppt 28/316.png',
            '/New folder/ppt 28/317.png',
            '/New folder/ppt 28/318.png',
            '/New folder/ppt 28/319.png',
            '/New folder/ppt 28/320.png',
            '/New folder/ppt 28/321.png',
            '/New folder/ppt 28/322.png',
            '/New folder/ppt 28/323.png',
            '/New folder/ppt 28/324.png',
            '/New folder/ppt 28/325.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-29',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-29',
        title: '3D Innovation Design #29',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #29 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 29/157.png',
        gallery: [
            '/New folder/ppt 29/157.png',
            '/New folder/ppt 29/158.png',
            '/New folder/ppt 29/159.png',
            '/New folder/ppt 29/160.png',
            '/New folder/ppt 29/161.png',
            '/New folder/ppt 29/162.png',
            '/New folder/ppt 29/163.png',
            '/New folder/ppt 29/164.png',
            '/New folder/ppt 29/165.png',
            '/New folder/ppt 29/166.png',
            '/New folder/ppt 29/167.png',
            '/New folder/ppt 29/168.png',
            '/New folder/ppt 29/169.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-30',
        brand: 'Force',
        category: '3D Innovations',
        sport: 'All',
        productCode: '#3D-INV-30',
        title: '3D Innovation Design #30',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #30 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 30/170.png',
        gallery: [
            '/New folder/ppt 30/170.png',
            '/New folder/ppt 30/171.png',
            '/New folder/ppt 30/172.png',
            '/New folder/ppt 30/173.png',
            '/New folder/ppt 30/174.png',
            '/New folder/ppt 30/175.png',
            '/New folder/ppt 30/176.png',
            '/New folder/ppt 30/177.png',
            '/New folder/ppt 30/178.png',
            '/New folder/ppt 30/179.png',
            '/New folder/ppt 30/180.png',
            '/New folder/ppt 30/181.png',
            '/New folder/ppt 30/182.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-3d-innov-31',
        brand: 'Force',
        category: 'T-Shirts',
        sport: 'All',
        productCode: '#3D-INV-31',
        title: '3D Innovation Design #31',
        description: 'Advanced technical 3D sublimated design with multiple color variants.',
        longDescription: 'Part of our cutting-edge 3D Innovations series, Design #31 offers a range of professional color variants. Engineered for elite performance and high-definition sublimation.',
        image: '/New folder/ppt 31/261.png',
        gallery: [
            '/New folder/ppt 31/261.png',
            '/New folder/ppt 31/262.png',
            '/New folder/ppt 31/263.png',
            '/New folder/ppt 31/264.png',
            '/New folder/ppt 31/265.png',
            '/New folder/ppt 31/266.png',
            '/New folder/ppt 31/267.png',
            '/New folder/ppt 31/268.png',
            '/New folder/ppt 31/269.png',
            '/New folder/ppt 31/270.png',
            '/New folder/ppt 31/271.png',
            '/New folder/ppt 31/272.png',
            '/New folder/ppt 31/273.png'
        ],
        features: [
            'Multiple Color Variants',
            '3D Sublimated Graphics',
            'High-Performance Technical Fabric',
            'Moisture-Wicking Technology'
        ],
        specs: {
            'Series': '3D Innovations',
            'Material': 'Performance Polyester',
            'Design': '3D Technical'
        }
    },
    {
        id: 'force-bag-cricket-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Cricket',
        productCode: '#FB-CRK-01',
        title: 'Professional Cricket Kit Bag',
        description: 'Heavy-duty wheelie kit bag with specialized compartments for bats and gear.',
        longDescription: 'The Elite Force Cricket Kit Bag is designed for the serious cricketer. Featuring rugged all-terrain wheels, padded internal bat sleeves, and a ventilated shoe compartment, it offers maximum protection and organization for all your match-day essentials.',
        image: '/Bags/professional_cricket_kit_bag_1773738848299.png',
        features: [
            'Heavy-Duty All-Terrain Wheels',
            'Internal Padded Bat Sleeves',
            'Ventilated Separate Shoe Compartment',
            'Industrial Grade Zippers',
            'Reinforced Base & Handles'
        ],
        specs: {
            'Material': '1680D Ballistic Nylon',
            'Capacity': '120 Liters',
            'Wheels': 'Triple-Wheel System',
            'Type': 'Professional Kit Bag'
        }
    },
    {
        id: 'force-bag-duffel-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-TDUF-01',
        title: 'Tactical Sports Duffel Bag',
        description: 'Water-resistant tactical duffel with multiple utility pockets.',
        longDescription: 'Built for durability and versatility, the Tactical Sports Duffel features a rugged water-resistant exterior. With its tactical modular design and multiple quick-access pockets, it is perfect for transitions between the gym, field, and travel.',
        image: '/Bags/tactical_sports_duffel_bag_1773738867037.png',
        features: [
            'Water-Resistant Coating',
            'Tactical Molle Webbing',
            'Integrated Wet/Dry Pocket',
            'Padded Adjustable Strap',
            'Reflective Safety Piping'
        ],
        specs: {
            'Material': 'Ripstop Technical Fabric',
            'Dimensions': '60 x 30 x 28 cm',
            'Weight': '850 grams',
            'Type': 'All-Purpose Duffel'
        }
    },
    {
        id: 'force-bag-back-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-EBP-01',
        title: 'Elite Gym Backpack',
        description: 'Ergonomic performance backpack with laptop and shoe storage.',
        longDescription: 'The Elite Gym Backpack combines style with technical function. Designed with an ergonomic ventilated back panel and specialized compartments for tech and training gear, it is the ultimate bag for the active professional.',
        image: '/Bags/elite_gym_backpack_1773738892671.png',
        features: [
            'Padded 15.6" Laptop Sleeve',
            'Ventilated Air-Mesh Back',
            'Bottom Shoe Access',
            'Sternum Support Strap',
            'Carbon Fiber Texture Accents'
        ],
        specs: {
            'Material': 'Reinforced Polyester / Carbon Vinyl',
            'Capacity': '35 Liters',
            'Ventilation': 'Air-Flow System',
            'Type': 'Performance Backpack'
        }
    },
    {
        id: 'force-bag-boot-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Football',
        productCode: '#FB-CBB-01',
        title: 'Compact Sports Boot Bag',
        description: 'Minimalist ventilated bag for sports footwear.',
        longDescription: 'Keep your gear clean with the Force Compact Boot Bag. Designed specifically for sports shoes, it features large mesh side panels for maximum ventilation and a durable ripstop exterior to handle post-match grit.',
        image: '/Bags/compact_sports_boot_bag_1773738913964.png',
        features: [
            'Dual Mesh Air Vents',
            'Easy-Carry Top Handle',
            'Wipe-Clean Internal Lining',
            'Compact Foldable Design',
            'Heavy-Duty Zipper'
        ],
        specs: {
            'Material': '420D Ripstop Nylon',
            'Size': 'Universal Shoe Size',
            'Breathability': 'High-Flow Mesh',
            'Type': 'Footwear Storage'
        }
    },
    {
        id: 'force-bag-holdall-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-TTH-01',
        title: 'Team Training Holdall (Large)',
        description: 'Spacious team bag with reinforced base and handles.',
        longDescription: 'The Team Training Holdall is built for volume and resilience. Capable of carrying full sets of uniforms or equipment, it features a heavy-duty reinforced base and industrial stitching to support significant weight during team travel.',
        image: '/Bags/team_training_holdall_large_bag_1773738933752.png',
        features: [
            'Ultra-Large Main Cavity',
            'Reinforced Load-Bearing Straps',
            'Internal Mesh Organizers',
            'Identification Name Slot',
            'Weather-Shield Base'
        ],
        specs: {
            'Material': 'Heavy-Duty 900D Canvas',
            'Capacity': '90 Liters',
            'Durability': 'Extreme Load Grade',
            'Type': 'Equipment Holdall'
        }
    },
    {
        id: 'force-bag-mesh-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-MME-01',
        title: 'Versatile Mesh Equipment Bag',
        description: 'Durable mesh bag for sports ball and equipment storage.',
        longDescription: 'A essential for coaches and teams, this heavy-duty mesh bag allows for easy drying and transport of sports balls. The high-tension drawstring ensures gear stays secure during transport.',
        image: '/Bags/mesh_equipment_sports_bag_equipment_1773738951652.png',
        features: [
            'High-Tension Mesh Weave',
            'Reinforced Drawstring Closure',
            'Holds up to 12 Footballs',
            'Anti-Mold Technical Mesh',
            'Compact Storage When Empty'
        ],
        specs: {
            'Material': 'Polyester Technical Mesh',
            'Size': 'Standard Multi-Ball',
            'Maintenance': 'Washable',
            'Type': 'Equipment Net'
        }
    },
    {
        id: 'force-bag-roll-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-RKC-01',
        title: 'Premium Rolling Kit Case',
        description: 'Hard-shell rolling gear case with technical design.',
        longDescription: 'Combining travel elegance with sports utility, this premium rolling case features a semi-rigid technical shell to protect high-value gear. Perfect for international athletes and frequent travelers.',
        image: '/Bags/premium_rolling_kit_case_kit_1773738969285.png',
        features: [
            'Impact-Resistant Hard Shell',
            'Retractable Telescopic Handle',
            'Silent-Glide Spin Wheels',
            'Padded Internal Dividers',
            'Integrated Security Lock'
        ],
        specs: {
            'Material': 'Polycarbonate / Technical Fabric',
            'Size': 'International Carry-on Compliant',
            'Security': 'TSA Approved Lock System',
            'Type': 'Rolling Travel Case'
        }
    },
    {
        id: 'force-bag-hyb-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-LGH-01',
        title: 'Slim Laptop/Gym Hybrid Bag',
        description: 'Modern minimalist hybrid for office and gym use.',
        longDescription: 'The Force Hybrid is designed for the modern lifestyle transition. Its slim profile hides a specialized laptop compartment alongside a dedicated space for gym apparel, ensuring you stay professional and active.',
        image: '/Bags/slim_laptop_gym_hybrid_bag_gym_1773738988004.png',
        features: [
            'Invisible Waterproof Zippers',
            'Dual-Purpose Compartments',
            'Minimalist Sleek Profile',
            'Scratch-Resistant Surface',
            'Internal Accessory Tech-Pouch'
        ],
        specs: {
            'Material': 'Matte Technical PU / Nylon',
            'Style': 'Hybrid Professional',
            'Fit': 'Slim Vertical',
            'Type': 'Utility Work-Bag'
        }
    },
    {
        id: 'force-bag-cross-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-CAA-01',
        title: 'Crossbody Active Bag',
        description: 'Lightweight essentials bag for active lifestyle.',
        longDescription: 'Keep your essentials secure and accessible with the Crossbody Active Bag. Built with ultralight ripstop fabric and featuring a technical multi-point strap, it is the perfect companion for cycling, running, or quick travel.',
        image: '/Bags/crossbody_active_sports_bag_active_1773739009916.png',
        features: [
            'Ultralight Ripstop Construction',
            'Technical 3-Point Strap',
            'Quick-Access Security Pocket',
            'Sweat-Resistant Backing',
            'Vibrant Technical Design'
        ],
        specs: {
            'Material': 'Featherweight Ripstop Nylon',
            'Strap': 'Adjustable Tech-Webbing',
            'Weight': '110 grams',
            'Type': 'Essentials Carrier'
        }
    },
    {
        id: 'force-bag-ball-01',
        brand: 'Force',
        category: 'Bags',
        sport: 'Other',
        productCode: '#FB-HBC-01',
        title: 'Heavy-Duty Ball Carrier',
        description: 'Rugged canvas and mesh bag for team ball storage.',
        longDescription: 'Designed for the rigors of the training field, the Heavy-Duty Ball Carrier features a reinforced canvas bottom and breathable mesh top. It is built to last through seasons of intense team use.',
        image: '/Bags/heavy_duty_ball_carrier_bag_ball_1773739029492.png',
        features: [
            'Reinforced 900D Canvas Base',
            'Air-Flow Mesh Top Section',
            'Heavy-Duty Shoulder Carry Strap',
            'Industrial Toggle Closure',
            'Holds 10-12 Regulation Balls'
        ],
        specs: {
            'Material': 'Canvas / High-Density Mesh',
            'Capacity': '12 Full-Size Balls',
            'Durability': 'Club Grade Resilience',
            'Type': 'Team Equipment Bag'
        }
    }
];

