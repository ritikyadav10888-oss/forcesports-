export const UniformCategories = ['School /colleges', 'Corporate staff', 'Fast Food floor staff', 'Industrial', 'Quick Delivery services'] as const;

export interface UniformProduct {
    id: string;
    title: string;
    category: typeof UniformCategories[number];
    subcategory?: 'T-shirt' | 'Trackpant' | 'Shorts' | 'Caps' | 'Shirt' | 'Blazer' | 'Trouser' | 'Apron' | 'Safety Gear' | 'Jacket';
    description: string;
    longDescription?: string;
    image: string;
    gallery?: string[];
    features: string[];
    specs: Record<string, string>;
    customization: string[];
    sizeCharts?: Record<string, { label: string; values: Record<string, string>[] }>;
}

export const UNIFORMS: UniformProduct[] = [
    // SCHOOL
    {
        id: 'uni-sch-polo',
        title: 'Modern School Polo T-Shirt',
        category: 'School /colleges',
        subcategory: 'T-shirt',
        description: 'Premium pique cotton-blend polo with reinforced collar and vibrant school colors.',
        longDescription: 'Our Modern School Polo is engineered for the rigorous demands of daily school life. Crafted from a high-quality pique cotton blend, it offers the perfect balance of breathability and structure. The reinforced collar and cuffs maintain their shape wash after wash, while our double-dye process ensures school colors remain vibrant through the entire academic year.',
        image: '/uniforms/school_polo.png',
        features: ['Anti-Pilling Fabric', 'Breathable Blend', 'Superior Color Hold', 'Reinforced Side Slits'],
        specs: {
            'Fabric': '60% Cotton, 40% Polyester Pique',
            'Weight': '220 - 240 GSM',
            'Fit': 'Regular School Fit',
            'Durability': 'High - Lab Tested for 50+ Washes',
            'Ironing': 'Low-crease technology'
        },
        customization: ['School Logo Embroidery', 'Pocket Printing', 'House Color Tipping'],
        sizeCharts: {
            unifrom: {
                label: 'Uniform Sizes (In Inches)',
                values: [
                    { size: '24', chest: '26', length: '18' },
                    { size: '26', chest: '28', length: '19' },
                    { size: '28', chest: '30', length: '20' },
                    { size: '30', chest: '32', length: '22' },
                    { size: '32', chest: '34', length: '24' },
                    { size: '34', chest: '36', length: '25' },
                    { size: '36', chest: '38', length: '26' }
                ]
            }
        }
    },
    {
        id: 'uni-sch-raglan',
        title: 'Sporty Raglan School T-Shirt',
        category: 'School /colleges',
        subcategory: 'T-shirt',
        description: 'Dynamic raglan-style t-shirt with contrasting sleeves, perfect for a modern school look.',
        longDescription: 'The Sporty Raglan is a favorite for schools looking for a contemporary athletic aesthetic. The raglan sleeve construction eliminates shoulder seams, allowing for maximum arm movement during sports and play. Made with ultra-soft combed cotton, it provides "all-day comfort" that students love.',
        image: '/uniforms/school_raglan_tshirt.png',
        features: ['Contrasting Raglan Sleeves', 'Soft-Touch Cotton', 'Reinforced Neckline', 'Tagless for Comfort'],
        specs: {
            'Fabric': '100% Combed Cotton / Poly-Cotton',
            'Weight': '180 - 200 GSM',
            'Fit': 'Modern Athletic Fit',
            'Durability': 'High Color Retention'
        },
        customization: ['Sleeve Logo Printing', 'Chest Graphic', 'ID Label Stitching'],
        sizeCharts: {
            tshirt: {
                label: 'T-Shirt Sizes (In Inches)',
                values: [
                    { size: '28', chest: '30', length: '20' },
                    { size: '30', chest: '32', length: '22' },
                    { size: '32', chest: '34', length: '24' },
                    { size: '34', chest: '36', length: '25' },
                    { size: '36', chest: '38', length: '26' }
                ]
            }
        }
    },
    {
        id: 'uni-sch-house',
        title: 'Vibrant House Sports T-Shirt',
        category: 'School /colleges',
        subcategory: 'T-shirt',
        description: 'Breathable and moisture-wicking t-shirts designed for school sports houses and team events.',
        longDescription: 'Designed specifically for Inter-House competitions, our Sports T-Shirts utilize advanced moisture-wicking technology. The interlock knit polyester is incredibly lightweight and dries almost instantly. Available in all standard house colors (Red, Blue, Green, Yellow) with high-definition sublimation options.',
        image: '/uniforms/school_house_tshirt.png',
        features: ['Moisture-Wicking Tech', 'Vibrant Sublimation', 'Interlock Knit', 'Quick-Dry Finish'],
        specs: {
            'Fabric': '100% Micro Polyester (Dry-Fit)',
            'Weight': '160 GSM',
            'Fit': 'Athletic Performance Fit',
            'Durability': 'Snag-Resistant'
        },
        customization: ['House Name Printing', 'Student Numbering', 'Sponsor Logo Area'],
        sizeCharts: {
            tshirt: {
                label: 'Sports Tee Sizes (In Inches)',
                values: [
                    { size: '28', chest: '30', length: '20' },
                    { size: '30', chest: '32', length: '22' },
                    { size: '32', chest: '34', length: '24' },
                    { size: '34', chest: '36', length: '25' },
                    { size: '36', chest: '38', length: '26' }
                ]
            }
        }
    },
    {
        id: 'uni-sch-event',
        title: 'Custom School Event T-Shirt',
        category: 'School /colleges',
        subcategory: 'T-shirt',
        description: 'Premium quality cotton t-shirts designed for school anniversaries, trips, and special events.',
        longDescription: 'Our Event T-Shirts are crafted from the highest quality bio-washed cotton to provide a premium feel for those special milestones. Whether it is a batch trip or a 50th-anniversary celebration, these shirts are designed to be kept as cherished souvenirs for years to come.',
        image: '/uniforms/school_event_tshirt.png',
        features: ['Bio-Washed Cotton', 'Eco-Friendly Inks', 'Seamless Side Stitch', 'Premium Hand-feel'],
        specs: {
            'Fabric': '100% Organic / Bio-Wash Cotton',
            'Weight': '180 GSM',
            'Fit': 'Regular Comfort Fit',
            'Durability': 'Safe for Multiple Event Washes'
        },
        customization: ['Commemorative Logo', 'Event Date Printing', 'Bulk Packaging'],
        sizeCharts: {
            tshirt: {
                label: 'Event Tee Sizes (In Inches)',
                values: [
                    { size: 'S', chest: '38', length: '27' },
                    { size: 'M', chest: '40', length: '28' },
                    { size: 'L', chest: '42', length: '29' },
                    { size: 'XL', chest: '44', length: '30' }
                ]
            }
        }
    },
    {
        id: 'uni-sch-trackpant',
        title: 'Performance School Trackpant',
        category: 'School /colleges',
        subcategory: 'Trackpant',
        description: 'Durable and flexible trackpants designed for active school days and sports.',
        longDescription: 'Our school trackpants are built for endless movement. Using a specialized Super Poly blend with NS Lycra, we achieve 4-way stretch that does not lose its shape. Reinforced knees ensure longevity through active playground sessions.',
        image: '/uniforms/school_trackpant.png',
        features: ['Reinforced Knees', 'Elasticized Waist', 'Quick-Dry Tech', 'Deep Side Pockets'],
        specs: {
            'Fabric': 'Super Poly / NS Lycra Blend',
            'Weight': '200 - 220 GSM',
            'Fit': 'Athletic Tapered Fit',
            'Durability': 'Anti-Abrasion Material'
        },
        customization: ['Side Stripe Branding', 'Logo Vinyl Print', 'Zipped Pockets'],
        sizeCharts: {
            trackpant: {
                label: 'Trackpant Sizes (In Inches)',
                values: [
                    { size: '24', waist: '22-24', length: '30' },
                    { size: '26', waist: '24-26', length: '32' },
                    { size: '28', waist: '26-28', length: '34' },
                    { size: '30', waist: '28-30', length: '36' },
                    { size: '32', waist: '30-32', length: '38' }
                ]
            }
        }
    },
    {
        id: 'uni-sch-shorts',
        title: 'Classic School Shorts',
        category: 'School /colleges',
        subcategory: 'Shorts',
        description: 'Comfortable and rugged school shorts, perfect for summer schedules.',
        longDescription: 'Our classic school shorts are made from heavy-duty cotton drill, designed specifically for comfort in warmer climates. Featuring traditional multi-pocket styling and double-stitched seams for extra durability.',
        image: '/uniforms/school_shorts.png',
        features: ['Tear-Resistant', 'Easy-Iron Fabric', 'Multiple Pockets', 'Bartack Reinforcement'],
        specs: {
            'Fabric': 'Cotton Drill / Twill',
            'Weight': '180 - 200 GSM',
            'Fit': 'Relaxed Comfort Fit',
            'Durability': 'Reinforced Stitching'
        },
        customization: ['School Crest Embroidery', 'Internal Name Tags']
    },
    {
        id: 'uni-sch-cap',
        title: 'School Identity Cap',
        category: 'School /colleges',
        subcategory: 'Caps',
        description: 'Structured 6-panel cap featuring school colors and protection from the sun.',
        longDescription: 'Complete the school uniform with our identity series caps. These structured 6-panel caps provide excellent sun protection while maintaining a unified school brand. The adjustable strap ensures a one-size-fits-all solution for growing students.',
        image: '/uniforms/school_cap.png',
        features: ['Cotton Twill', 'Adjustable Strap', 'UV Shield', 'Ventilation Eyelets'],
        specs: {
            'Fabric': '100% Cotton Twill',
            'Weight': 'Structured 6-Panel',
            'Fit': 'One Size (Adjustable)',
            'Durability': 'Color Fast Material'
        },
        customization: ['3D Logo Embroidery', 'Contrast Sandwich Peak']
    },

    // CORPORATE
    {
        id: 'uni-corp-polo',
        title: 'Executive Style Polo',
        category: 'Corporate staff',
        subcategory: 'T-shirt',
        description: 'Elite corporate polo for a sharp, professional boardroom presence.',
        longDescription: 'Our Executive Polo uses the highest grade of mercerized cotton to provide a subtle silken sheen and unparalleled softness. Designed for the modern professional, it maintains a crisp look all day, making it perfect for office-to-dinner transitions.',
        image: '/uniforms/corporate_polo.png',
        features: ['Premium Mercerized Cotton', 'Wrinkle-Free', 'Tailored Fit', 'Silky Handfeel'],
        specs: {
            'Fabric': '100% Mercerized Pique Cotton',
            'Weight': '240 - 260 GSM',
            'Fit': 'Slim / Professional Fit',
            'Durability': 'Anti-Shrink & Anti-Fade'
        },
        customization: ['Subtle Chest Embroidery', 'Nape Branding', 'Logo Engraved Buttons'],
        sizeCharts: {
            polo: {
                label: 'Executive Polo Sizes (In Inches)',
                values: [
                    { size: 'S', chest: '38', length: '27' },
                    { size: 'M', chest: '40', length: '28' },
                    { size: 'L', chest: '42', length: '29' },
                    { size: 'XL', chest: '44', length: '30' },
                    { size: '2XL', chest: '46', length: '31' }
                ]
            }
        }
    },
    {
        id: 'uni-corp-tshirt',
        title: 'Staff Event T-Shirt',
        category: 'Corporate staff',
        subcategory: 'T-shirt',
        description: 'High-quality cotton t-shirts designed for corporate team-building and events.',
        longDescription: 'Boost team morale with our premium event t-shirts. We use bio-washed 100% combed cotton to ensure comfort during long activities. Our high-definition printing processes can handle complex corporate logos and event graphics with precision.',
        image: '/uniforms/corporate_tshirt.png',
        features: ['100% Bio-Wash Cotton', 'Pre-Shrunk', 'Vibrant Sublimation', 'Interlock Stitching'],
        specs: {
            'Fabric': '100% Combed Cotton (Bio-Washed)',
            'Weight': '180 GSM',
            'Fit': 'Modern Unisex Fit',
            'Durability': 'Soft Touch Feel'
        },
        customization: ['Large Back Printing', 'Sleeve Branding', 'Photo-Realistic Prints']
    },
    // PERFORMANCE CORPORATE
    {
        id: 'uni-corp-polo-perf',
        title: 'Performance Pique Corporate Polo',
        category: 'Corporate staff',
        subcategory: 'T-shirt',
        description: 'Advanced moisture-wicking polo for active corporate staff and sales teams.',
        longDescription: 'For staff who are constantly on the move, our Performance Polo is a game-changer. Using advanced moisture-wicking technology, it moves sweat away from the body to keep the wearer cool and dry. The anti-microbial finish prevents odors, ensuring freshness all day.',
        image: '/uniforms/corporate_performance_polo.png',
        features: ['Moisture-Wicking Fabric', 'Anti-Microbial Finish', 'UPF 30+ Protection', 'Stay-Flat Collar'],
        specs: {
            'Fabric': '100% Performance Micro-Pique',
            'Weight': '170 GSM',
            'Fit': 'Professional Athletic Fit',
            'Durability': 'No-Fade Vivid Colors'
        },
        customization: ['Cool-Max Branded Sleeves', 'Digital Sublimation Logo', 'Silicon Grip Hem'],
        sizeCharts: {
            polo: {
                label: 'Performance Polo Sizes (In Inches)',
                values: [
                    { size: 'S', chest: '38', length: '27' },
                    { size: 'M', chest: '40', length: '28' },
                    { size: 'L', chest: '42', length: '29' },
                    { size: 'XL', chest: '44', length: '30' }
                ]
            }
        }
    },
    {
        id: 'uni-corp-crew-tee',
        title: 'Premium Combed Cotton Crew Tee',
        category: 'Corporate staff',
        subcategory: 'T-shirt',
        description: 'The ultimate luxury base layer or smart-casual basic for the modern office.',
        longDescription: 'Not all t-shirts are created equal. Our Premium Crew is crafted from ultra-fine combed cotton with a bio-wash finish for a silk-like handfeel. Designed with a structured neckline that does not sag, it is the perfect undercover layer or a clean standalone piece.',
        image: '/uniforms/corporate_premium_tee.png',
        features: ['Super-Fine Combed Cotton', 'Bio-Washed Finish', 'Lycra-Reinforced Neck', 'Side-Seamed Construction'],
        specs: {
            'Fabric': '100% Luxury Combed Cotton',
            'Weight': '190 GSM',
            'Fit': 'Tailored Luxury Fit',
            'Durability': 'Zero-Torque Stability'
        },
        customization: ['High-Density Print', 'Suede-Touch Branded Neck Tape', 'Custom Hem Tags']
    },
    {
        id: 'uni-corp-trackpant',
        title: 'Staff Performance Trackpant',
        category: 'Corporate staff',
        subcategory: 'Trackpant',
        description: 'Premium technical trackpants for corporate sports events and staff travel.',
        longDescription: 'Our Staff Performance Trackpants are designed for ultimate comfort and professional team appearance. Featuring high-stretch technical fabric, moisture-wicking properties, and a sleek modern fit that complements our corporate polo range.',
        image: '/uniforms/corporate_trackpant.png',
        features: ['4-Way Stretch Tech', 'Zippered Pockets', 'Tapered Modern Fit', 'Moisture-Wicking'],
        specs: {
            'Fabric': 'NS Lycra Premium Blend',
            'Fit': 'Modern Tapered',
            'Usage': 'Travel / Sports Event'
        },
        customization: ['Team Logo Embroidery', 'Side Stripe Printing'],
        sizeCharts: {
            trackpant: {
                label: 'Staff Trackpant Sizes (In Inches)',
                values: [
                    { size: 'M', waist: '30-32', length: '39' },
                    { size: 'L', waist: '32-34', length: '40' },
                    { size: 'XL', waist: '34-36', length: '41' }
                ]
            }
        }
    },
    {
        id: 'uni-corp-shorts',
        title: 'Corporate Team Shorts',
        category: 'Corporate staff',
        subcategory: 'Shorts',
        description: 'Technical sports shorts for corporate team-building activities.',
        longDescription: 'Lightweight and durable, these shorts are perfect for corporate tournaments and recreational staff use. Breathable side panels and a comfort-first waistband ensure performance on the field.',
        image: '/uniforms/corporate_shorts.png',
        features: ['Breathable Mesh Panels', 'Reinforced Stitching', 'Adjustable Drawcord', 'Quick-Dry'],
        specs: {
            'Fabric': 'Dobby Polyester',
            'Fit': 'Athletic Relaxed',
            'Length': '7" Inseam'
        },
        customization: ['Logo Vinyl Print', 'Squad Numbering']
    },
    {
        id: 'uni-corp-cap',
        title: 'Executive Branding Cap',
        category: 'Corporate staff',
        subcategory: 'Caps',
        description: 'Premium 6-panel structured cap for corporate identity and summer events.',
        longDescription: 'A high-profile structured cap that provides a premium canvas for your corporate logo. Made with breathable heavy cotton and a comfortable moisture-wicking sweatband.',
        image: '/uniforms/corporate_cap.png',
        features: ['Structured 6-Panel', 'Anti-Sweat Band', 'Premium Metal Buckle', 'Breathable Twill'],
        specs: {
            'Material': 'Heavy Cotton Twill',
            'Style': 'Executive Structured'
        },
        customization: ['3D Embroidery', 'Sandwich Peak Branding']
    },

    // FAST FOOD
    {
        id: 'uni-ff-service-tshirt',
        title: 'Floor Services T-Shirt',
        category: 'Fast Food floor staff',
        subcategory: 'T-shirt',
        description: 'Stain-resistant and comfortable t-shirt designed for high-paced food service environments.',
        longDescription: 'Engineered for the heat and rush of the food industry. Our floor service shirts feature a specialized Teflon coating that repels oils and spills, keeping staff looking clean throughout their shift. Built-in odor control keeps the team fresh through long hours.',
        image: '/uniforms/fast_food_tshirt.png',
        features: ['Oil-Repellent', 'Ultra-Durable', 'Odor-Control', 'Sweat-Absorption'],
        specs: {
            'Fabric': 'Teflon-Coated Polyester Blend',
            'Weight': '190 GSM',
            'Fit': 'Active Work Fit',
            'Durability': 'Industrial Wash Grade'
        },
        customization: ['Employee Name Tags', 'Chef Coat Style Printing']
    },
    {
        id: 'uni-ff-cap',
        title: 'Service Crew Cap',
        category: 'Fast Food floor staff',
        subcategory: 'Caps',
        description: 'Professional hygiene-focused cap for kitchen and floor staff.',
        longDescription: 'Ensure maximum hygiene without sacrificing comfort. Our service caps feature a mesh-back design for maximum ventilation in hot kitchen environments. The washable fabric makes it easy to maintain high professional standards.',
        image: '/uniforms/fast_food_cap.png',
        features: ['Washable Mesh', 'Hair Control', 'Breathable', 'Lightweight'],
        specs: {
            'Fabric': 'Poly-Cotton with Mesh Back',
            'Weight': 'Lightweight Hygiene Grade',
            'Fit': 'Velcro Adjustable',
            'Durability': 'Highly Breathable'
        },
        customization: ['Front Logo Embroidery', 'Side Ventilation']
    },

    // INDUSTRIAL
    {
        id: 'uni-ind-workwear',
        title: 'Industrial Heavy T-Shirt',
        category: 'Industrial',
        subcategory: 'T-shirt',
        description: 'Rugged, high-GSM industrial t-shirt built to withstand factory wear and tear.',
        longDescription: 'Built for the toughest job sites, our Industrial Heavy T-Shirt uses 300 GSM open-end cotton for maximum abrasion resistance. Double-stitched seams and reinforced stress points ensure this shirt survives the most demanding shifts.',
        image: '/uniforms/industrial_tshirt.png',
        features: ['Double-Stitched Seams', 'Industrial Grade Cotton', 'Fade-Proof', 'Heavyweight Construction'],
        specs: {
            'Fabric': 'Heavy Duty 100% Open-End Cotton',
            'Weight': '280 - 300 GSM',
            'Fit': 'Loose / Functional Fit',
            'Durability': 'Tear-Resistant Construction'
        },
        customization: ['Reflective Tape Stitched', 'Heavy Duty Screen Print']
    },
    {
        id: 'uni-ind-cargo',
        title: 'Industrial Cargo Shorts',
        category: 'Industrial',
        subcategory: 'Shorts',
        description: 'Heavy-duty cargo shorts with multiple utility pockets for industrial workers.',
        longDescription: 'Our industrial cargo shorts provide the ultimate utility in the field. Using a Ripstop canvas blend, they are virtually tear-proof. Multiple reinforced pockets and hammer loops provide essential storage for tools and equipment.',
        image: '/uniforms/industrial_shorts.png',
        features: ['Reinforced Pockets', 'Tear-Stop Fabric', 'Worker Comfort Fit', 'High-Stress Bartacking'],
        specs: {
            'Fabric': 'Ripstop / Canvas Blend',
            'Weight': '260 GSM',
            'Fit': 'Multi-Pocket Utility Fit',
            'Durability': 'Safety Grade Fabric'
        },
        customization: ['Knee Pad Slots', 'Hammer Loops branding']
    },
    {
        id: 'uni-ind-safecap',
        title: 'Safety Industry Cap',
        category: 'Industrial',
        subcategory: 'Caps',
        description: 'High-visibility industrial cap for site safety and staff identification.',
        longDescription: 'Maximize site safety with our high-visibility identity series. These caps feature fluorescent fabrics and reflective details to ensure staff remain visible in all lighting conditions. Built-in sweat-wicking bands keep workers comfortable during physically demanding work.',
        image: '/uniforms/industrial_cap.png',
        features: ['Sweat-Wicking Band', 'Durable Construction', 'High-Vis Details', 'Reflective Accents'],
        specs: {
            'Fabric': 'Fluorescent Polyester',
            'Weight': 'Reinforced 5-Panel',
            'Fit': 'Bumper Cap Option',
            'Durability': 'Site Safety Compliant'
        },
        customization: ['Reflective Print', 'ID Badge Holder']
    },

    // QUICK DELIVERY
    {
        id: 'uni-qds-rider-jersey',
        title: 'Delivery Rider T-Shirt',
        category: 'Quick Delivery services',
        subcategory: 'T-shirt',
        description: 'Performance jersey with high-visibility accents for delivery professionals.',
        longDescription: 'Engineered for those who spend their day on the move. Our rider jerseys use a specialized 4-way stretch micro-polyester that provides maximum mobility. Integrated UV protection and moisture-wicking technology keep riders cool and protected during long hours on the road.',
        image: '/uniforms/qds_jersey.png',
        features: ['Reflective Tech', 'UV Protection', '4-Way Stretch', 'Hyper-Breathable'],
        specs: {
            'Fabric': 'Dry-Fit Micro Polyester',
            'Weight': '150 - 170 GSM',
            'Fit': 'Tapered Rider Fit',
            'Durability': 'Sweat-Wicking & Anti-Static'
        },
        customization: ['Full Sublimation Print', 'Night-Reflective Accents']
    },
    {
        id: 'uni-qds-safecap',
        title: 'Rider Safety Cap',
        category: 'Quick Delivery services',
        subcategory: 'Caps',
        description: 'Lightweight delivery cap designed for long hours on the road.',
        longDescription: 'Designed to fit comfortably under helmets or as a standalone piece. Our rider safety caps use ultralight ripstop nylon that is water-resistant. Reflective side panels and trims ensure 360-degree visibility for nighttime deliveries.',
        image: '/uniforms/qds_cap.png',
        features: ['Reflective Trim', 'Airflow Mesh', 'Comfort Lining', 'Water-Resistant Shell'],
        specs: {
            'Fabric': 'Ultralight Ripstop Nylon',
            'Weight': 'Featherlight',
            'Fit': 'Draw-String Adjustable',
            'Durability': 'Water-Resistant'
        },
        customization: ['Brand Logo Print', 'Reflective Side Panels']
    }
];
