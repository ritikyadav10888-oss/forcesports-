import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Check, Briefcase, Activity, MessageCircle, Zap, Shield, Star, X, Info } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { getCDNUrl } from '../../utils/cdnUtils';

const UniformCategories = ['School /colleges', 'Corporate staff', 'Fast Food floor staff', 'Industrial', 'Quick Delivery services'] as const;

interface UniformProduct {
    id: string;
    title: string;
    category: typeof UniformCategories[number];
    description: string;
    image: string;
    features: string[];
    specs: {
        fabric: string;
        weight: string;
        fit: string;
        durability: string;
    };
    customization: string[];
}

const UNIFORMS: UniformProduct[] = [
    // SCHOOL
    {
        id: 'uni-sch-polo',
        title: 'Modern School Polo T-Shirt',
        category: 'School /colleges',
        description: 'Premium pique cotton-blend polo with reinforced collar and vibrant school colors.',
        image: '/uniforms/school_polo.png',
        features: ['Anti-Pilling Fabric', 'Breathable Blend', 'Superior Color Hold'],
        specs: {
            fabric: '60% Cotton, 40% Polyester Pique',
            weight: '220 - 240 GSM',
            fit: 'Regular School Fit',
            durability: 'High - Lab Tested for 50+ Washes'
        },
        customization: ['School Logo Embroidery', 'Pocket Printing', 'House Color Tipping']
    },
    {
        id: 'uni-sch-trackpant',
        title: 'Performance School Trackpant',
        category: 'School /colleges',
        description: 'Durable and flexible trackpants designed for active school days and sports.',
        image: '/uniforms/school_trackpant.png',
        features: ['Reinforced Knees', 'Elasticized Waist', 'Quick-Dry Tech'],
        specs: {
            fabric: 'Super Poly / NS Lycra Blend',
            weight: '200 - 220 GSM',
            fit: 'Athletic Tapered Fit',
            durability: 'Anti-Abrasion Material'
        },
        customization: ['Side Stripe Branding', 'Logo Vinyl Print', 'Zipped Pockets']
    },
    {
        id: 'uni-sch-shorts',
        title: 'Classic School Shorts',
        category: 'School /colleges',
        description: 'Comfortable and rugged school shorts, perfect for summer schedules.',
        image: '/uniforms/school_shorts.png',
        features: ['Tear-Resistant', 'Easy-Iron Fabric', 'Multiple Pockets'],
        specs: {
            fabric: 'Cotton Drill / Twill',
            weight: '180 - 200 GSM',
            fit: 'Relaxed Comfort Fit',
            durability: 'Reinforced Stitching'
        },
        customization: ['School Crest Embroidery', 'Internal Name Tags']
    },
    {
        id: 'uni-sch-cap',
        title: 'School Identity Cap',
        category: 'School /colleges',
        description: 'Structured 6-panel cap featuring school colors and protection from the sun.',
        image: '/uniforms/school_cap.png',
        features: ['Cotton Twill', 'Adjustable Strap', 'UV Shield'],
        specs: {
            fabric: '100% Cotton Twill',
            weight: 'Structured 6-Panel',
            fit: 'One Size (Adjustable)',
            durability: 'Color Fast Material'
        },
        customization: ['3D Logo Embroidery', 'Contrast Sandwich Peak']
    },

    // CORPORATE
    {
        id: 'uni-corp-polo',
        title: 'Executive Style Polo',
        category: 'Corporate staff',
        description: 'Elite corporate polo for a sharp, professional boardroom presence.',
        image: '/uniforms/corporate_polo.png',
        features: ['Premium Mercerized Cotton', 'Wrinkle-Free', 'Tailored Fit'],
        specs: {
            fabric: '100% Mercerized Pique Cotton',
            weight: '240 - 260 GSM',
            fit: 'Slim / Professional Fit',
            durability: 'Anti-Shrink & Anti-Fade'
        },
        customization: ['Subtle Chest Embroidery', 'Nape Branding', 'Logo Engraved Buttons']
    },
    {
        id: 'uni-corp-tshirt',
        title: 'Staff Event T-Shirt',
        category: 'Corporate staff',
        description: 'High-quality cotton t-shirts designed for corporate team-building and events.',
        image: '/uniforms/corporate_tshirt.png',
        features: ['100% Bio-Wash Cotton', 'Pre-Shrunk', 'Vibrant Sublimation'],
        specs: {
            fabric: '100% Combed Cotton (Bio-Washed)',
            weight: '180 GSM',
            fit: 'Modern Unisex Fit',
            durability: 'Soft Touch Feel'
        },
        customization: ['Large Back Printing', 'Sleeve Branding', 'Photo-Realistic Prints']
    },

    // FAST FOOD
    {
        id: 'uni-ff-service-tshirt',
        title: 'Floor Services T-Shirt',
        category: 'Fast Food floor staff',
        description: 'Stain-resistant and comfortable t-shirt designed for high-paced food service environments.',
        image: '/uniforms/fast_food_tshirt.png',
        features: ['Oil-Repellent', 'Ultra-Durable', 'Odor-Control'],
        specs: {
            fabric: 'Teflon-Coated Polyester Blend',
            weight: '190 GSM',
            fit: 'Active Work Fit',
            durability: 'Industrial Wash Grade'
        },
        customization: ['Employee Name Tags', 'Chef Coat Style Printing']
    },
    {
        id: 'uni-ff-cap',
        title: 'Service Crew Cap',
        category: 'Fast Food floor staff',
        description: 'Professional hygiene-focused cap for kitchen and floor staff.',
        image: '/uniforms/fast_food_cap.png',
        features: ['Washable Mesh', 'Hair Control', 'Breathable'],
        specs: {
            fabric: 'Poly-Cotton with Mesh Back',
            weight: 'Lightweight Hygiene Grade',
            fit: 'Velcro Adjustable',
            durability: 'Highly Breathable'
        },
        customization: ['Front Logo Embroidery', 'Side Ventilation']
    },

    // INDUSTRIAL
    {
        id: 'uni-ind-workwear',
        title: 'Industrial Heavy T-Shirt',
        category: 'Industrial',
        description: 'Rugged, high-GSM industrial t-shirt built to withstand factory wear and tear.',
        image: '/uniforms/industrial_tshirt.png',
        features: ['Double-Stitched Seams', 'Industrial Grade Cotton', 'Fade-Proof'],
        specs: {
            fabric: 'Heavy Duty 100% Open-End Cotton',
            weight: '280 - 300 GSM',
            fit: 'Loose / Functional Fit',
            durability: 'Tear-Resistant Construction'
        },
        customization: ['Reflective Tape Stitched', 'Heavy Duty Screen Print']
    },
    {
        id: 'uni-ind-cargo',
        title: 'Industrial Cargo Shorts',
        category: 'Industrial',
        description: 'Heavy-duty cargo shorts with multiple utility pockets for industrial workers.',
        image: '/uniforms/industrial_shorts.png',
        features: ['Reinforced Pockets', 'Tear-Stop Fabric', 'Worker Comfort Fit'],
        specs: {
            fabric: 'Ripstop / Canvas Blend',
            weight: '260 GSM',
            fit: 'Multi-Pocket Utility Fit',
            durability: 'Safety Grade Fabric'
        },
        customization: ['Knee Pad Slots', 'Hammer Loops branding']
    },
    {
        id: 'uni-ind-safecap',
        title: 'Safety Industry Cap',
        category: 'Industrial',
        description: 'High-visibility industrial cap for site safety and staff identification.',
        image: '/uniforms/industrial_cap.png',
        features: ['Sweat-Wicking Band', 'Durable Construction', 'High-Vis Details'],
        specs: {
            fabric: 'Fluorescent Polyester',
            weight: 'Reinforced 5-Panel',
            fit: 'Bumper Cap Option',
            durability: 'Site Safety Compliant'
        },
        customization: ['Reflective Print', 'ID Badge Holder']
    },

    // QUICK DELIVERY
    {
        id: 'uni-qds-rider-jersey',
        title: 'Delivery Rider T-Shirt',
        category: 'Quick Delivery services',
        description: 'Performance jersey with high-visibility accents for delivery professionals.',
        image: '/uniforms/qds_jersey.png',
        features: ['Reflective Tech', 'UV Protection', '4-Way Stretch'],
        specs: {
            fabric: 'Dry-Fit Micro Polyester',
            weight: '150 - 170 GSM',
            fit: 'Tapered Rider Fit',
            durability: 'Sweat-Wicking & Anti-Static'
        },
        customization: ['Full Sublimation Print', 'Night-Reflective Accents']
    },
    {
        id: 'uni-qds-safecap',
        title: 'Rider Safety Cap',
        category: 'Quick Delivery services',
        description: 'Lightweight delivery cap designed for long hours on the road.',
        image: '/uniforms/qds_cap.png',
        features: ['Reflective Trim', 'Airflow Mesh', 'Comfort Lining'],
        specs: {
            fabric: 'Ultralight Ripstop Nylon',
            weight: 'Featherlight',
            fit: 'Draw-String Adjustable',
            durability: 'Water-Resistant'
        },
        customization: ['Brand Logo Print', 'Reflective Side Panels']
    }
];

const UniformsPage = () => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<UniformProduct | null>(null);

    const filteredUniforms = UNIFORMS.filter(u => {
        return selectedCategories.length === 0 || selectedCategories.includes(u.category);
    });

    const openWhatsApp = (product: UniformProduct) => {
        const message = `Hi! I am interested in the ${product.title} from the ${product.category} section.\n\nSpecs: ${product.specs.fabric} / ${product.specs.weight}.\n\nPlease provide pricing for a bulk order.`;
        const encoded = encodeURIComponent(message);
        window.open(`${BRAND_DETAILS.contacts.whatsappLink}&text=${encoded}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter relative z-10"
                >
                    Professional <span className="text-cyan-500">Uniforms</span>
                </motion.h1>
                <p className="text-slate-400 mt-6 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black relative z-10">
                    Schools • Delivery • Corporates • Hospitality
                </p>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Sidebar - Uniform Categories */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="lg:hidden mb-6 flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                <Filter size={16} className="text-cyan-600" /> Filter Uniforms
                            </h3>
                            <button 
                                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
                                title={isMobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
                                className="px-4 py-2 bg-white text-slate-900 rounded-lg text-[9px] font-black uppercase tracking-widest border border-slate-200"
                            >
                                {isMobileFiltersOpen ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        <div className={`sticky top-32 space-y-8 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
                            <div>
                                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Briefcase size={14} className="text-cyan-600" /> Industry Needs
                                </h3>

                                {/* Categories Filter */}
                                <div className="mb-8">
                                    <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Sectors</h4>
                                    <div className="space-y-3">
                                        {UniformCategories.map(cat => (
                                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                                <input 
                                                    type="checkbox" 
                                                    className="hidden" 
                                                    checked={selectedCategories.includes(cat)}
                                                    onChange={() => {
                                                        setSelectedCategories(prev => 
                                                            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
                                                        );
                                                    }}
                                                />
                                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedCategories.includes(cat) ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                    {selectedCategories.includes(cat) && <Check size={10} className="text-white" />}
                                                </div>
                                                <span className={`text-[10px] uppercase font-black tracking-widest transition-colors ${selectedCategories.includes(cat) ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                                    {cat}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-cyan-600 rounded-[2.5rem] text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">Bulk Uniforms?</h4>
                                <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-wider leading-relaxed mb-6 relative z-10 opacity-80">
                                    Get specialized quotes for bulk staff and school uniform orders.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <Link to="/inquiry" className="inline-block px-6 py-3 bg-white text-cyan-600 rounded-xl text-[9px] font-black uppercase tracking-widest relative z-10 hover:scale-105 transition-transform text-center">
                                        Email Inquiry
                                    </Link>
                                    <a 
                                        href={BRAND_DETAILS.contacts.whatsappLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-block px-6 py-3 bg-[#25D366] text-white rounded-xl text-[9px] font-black uppercase tracking-widest relative z-10 hover:bg-[#128C7E] transition-all text-center flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle size={14} /> WhatsApp Booking
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredUniforms.map(uniform => (
                                    <motion.div
                                        key={uniform.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all border border-slate-100 group flex flex-col h-full cursor-pointer"
                                        onClick={() => setSelectedProduct(uniform)}
                                    >
                                        <div className="h-72 bg-slate-100 overflow-hidden relative">
                                            <img
                                                src={getCDNUrl(uniform.image, { width: 800 })}
                                                alt={uniform.title}
                                                loading="lazy"
                                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                                <div className="bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                                                    {uniform.category}
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                                    <Info size={16} className="text-white" />
                                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">View Deep Details</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col flex-1">
                                            <div className="mb-6 flex-1">
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3">{uniform.title}</h3>
                                                <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">{uniform.description}</p>
                                            </div>

                                            <div className="mt-auto flex gap-3">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedProduct(uniform);
                                                    }}
                                                    className="flex-1 py-4 bg-slate-50 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-cyan-600 hover:text-white transition-all border border-slate-100 text-center"
                                                >
                                                    View Specs
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openWhatsApp(uniform);
                                                    }}
                                                    className="px-4 py-4 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20"
                                                >
                                                    <MessageCircle size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredUniforms.length === 0 && (
                            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <Activity size={48} className="mx-auto text-slate-200 mb-6" />
                                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No matching uniform styles found.</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Product Deep Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            className="bg-white w-full max-w-5xl rounded-[2.5rem] overflow-hidden relative z-10 flex flex-col md:flex-row shadow-2xl"
                        >
                            <button 
                                onClick={() => setViewingUniform(null)}
                                title="Close Details"
                                className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-all z-20 shadow-sm"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Image */}
                            <div className="md:w-1/2 bg-slate-100 relative h-[400px] md:h-auto">
                                <img 
                                    src={selectedProduct.image} 
                                    alt={selectedProduct.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-10 left-10">
                                    <div className="bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]">
                                        {selectedProduct.category}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="md:w-1/2 p-8 md:p-14 overflow-y-auto max-h-[80vh]">
                                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">{selectedProduct.title}</h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                                    {selectedProduct.description}
                                </p>

                                {/* Technical Specs Grid */}
                                <div className="grid grid-cols-2 gap-6 mb-12">
                                    <div className="space-y-1">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fabric</h4>
                                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">{selectedProduct.specs.fabric}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Weight / GSM</h4>
                                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">{selectedProduct.specs.weight}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fit Type</h4>
                                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">{selectedProduct.specs.fit}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Durability</h4>
                                        <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">{selectedProduct.specs.durability}</p>
                                    </div>
                                </div>

                                {/* Features & Customization */}
                                <div className="space-y-10 mb-12">
                                    <div>
                                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Shield size={16} className="text-cyan-600" /> Key Features
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProduct.features.map(f => (
                                                <span key={f} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-[9px] font-black uppercase tracking-widest rounded-lg border border-slate-100">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Star size={16} className="text-cyan-600" /> Customization Options
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {selectedProduct.customization.map(c => (
                                                <li key={c} className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                                    {c}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Modal Actions */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => openWhatsApp(selectedProduct)}
                                        className="flex-1 py-5 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/20"
                                    >
                                        WhatsApp Inquiry <MessageCircle size={18} />
                                    </button>
                                    <Link
                                        to={`/inquiry?product=${encodeURIComponent(selectedProduct.title)}`}
                                        className="flex-1 py-5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20"
                                    >
                                        Email Quote <Zap size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UniformsPage;
