import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Check, Briefcase, Activity, MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const UniformCategories = ['School', 'Quick Delivery Services', 'Corporate Staff', 'Fast Food Staff', 'Industrial'] as const;

interface UniformProduct {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    features: string[];
}

const UNIFORMS: UniformProduct[] = [
    // SCHOOL
    {
        id: 'uni-sch-round-neck',
        title: 'Basic Round Neck School Tee',
        category: 'School',
        description: 'Simple, heavy-duty 100% cotton round neck t-shirt. Ideal for daily classroom wear.',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
        features: ['100% Bio-Wash Cotton', 'Pre-Shrunk', 'Standard Fit']
    },
    {
        id: 'uni-sch-polo-classic',
        title: 'Classic School Polo',
        category: 'School',
        description: 'Traditional pique polo shirt with ribbed collar. Perfect for formal school attendance.',
        image: 'https://images.unsplash.com/photo-1598522338214-29532fb30b32?w=800&q=80',
        features: ['Breathable Pique Fabric', 'Reinforced Collar', 'Color Fastness']
    },
    {
        id: 'uni-sch-jersey-simple',
        title: 'Simple PE Jersey',
        category: 'School',
        description: 'Lightweight and airy jersey for physical education classes.',
        image: 'https://images.unsplash.com/photo-1580087433295-ab2600c1030e?w=800&q=80',
        features: ['Sweat Absorbent', 'Easy Stretch', 'Contrast Stitching']
    },
    {
        id: 'uni-sch-trackpant-basic',
        title: 'Classic School Trackpant',
        category: 'School',
        description: 'Standard navy/black trackpants with comfortable elastic grip.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
        features: ['Durable Interlock Fabric', 'Elasticated Hem', 'Internal Drawcord']
    },
    {
        id: 'uni-sch-shorts-classic',
        title: 'School Cotton Shorts',
        category: 'School',
        description: 'Simple cotton shorts designed for warm weather school days.',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
        features: ['Twin Needle Stitching', 'Strong Elastic', 'Breathable']
    },
    {
        id: 'uni-sch-cap-classic',
        title: 'Simple School Cap',
        category: 'School',
        description: 'Classic 6-panel cotton cap for house colors and sun protection.',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
        features: ['Curved Visor', 'Velcro Closure', 'Fade Resistant']
    },
    
    // QDS
    {
        id: 'uni-qds-tshirt',
        title: 'QDS T-Shirt',
        category: 'Quick Delivery Services',
        description: 'Highly visible, moisture-wicking t-shirt for delivery personnel.',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80',
        features: ['High-Visibility', 'Quick-Dry', 'Anti-Odor']
    },
    {
        id: 'uni-qds-jersey',
        title: 'QDS Jersey',
        category: 'Quick Delivery Services',
        description: 'Performance jersey designed for long hours of riding and swift movement.',
        image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=800&q=80',
        features: ['Lightweight', 'Reflective Details', 'Stretchable']
    },
    {
        id: 'uni-qds-cap',
        title: 'QDS Delivery Cap',
        category: 'Quick Delivery Services',
        description: 'Breathable cap featuring reflective materials for safe nighttime deliveries.',
        image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80',
        features: ['Reflective Trim', 'Mesh Back', 'UV Protection']
    },

    // CORPORATE STAFF
    {
        id: 'uni-corp-tshirt',
        title: 'Corporate Polo T-Shirt',
        category: 'Corporate Staff',
        description: 'Premium polo t-shirt for a smart, modern corporate look.',
        image: 'https://images.unsplash.com/photo-1586363104862-3a5e222ee5bb?w=800&q=80',
        features: ['Wrinkle-Free', 'Smart Fit', 'Premium Blend']
    },
    {
        id: 'uni-corp-jersey',
        title: 'Corporate Event Jersey',
        category: 'Corporate Staff',
        description: 'Custom corporate jersey for company sports events and team building.',
        image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&q=80',
        features: ['Cool-Max Tech', 'Custom Branding Area', 'Comfort Fit']
    },
    {
        id: 'uni-corp-cap',
        title: 'Corporate Cap',
        category: 'Corporate Staff',
        description: 'Minimalist, branded premium cap for outdoor corporate events.',
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
        features: ['Premium Fabric', 'Sleek Design', 'Adjustable Fit']
    },
    {
        id: 'uni-corp-shorts',
        title: 'Corporate Retreat Shorts',
        category: 'Corporate Staff',
        description: 'Casual yet smart shorts for corporate retreats and outdoor activities.',
        image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&q=80',
        features: ['Chino Style', 'Stretch Cotton', 'Knee Length']
    },
    {
        id: 'uni-corp-trackpant',
        title: 'Corporate Wellness Trackpant',
        category: 'Corporate Staff',
        description: 'Comfortable performance trackpants ideal for company wellness programs.',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
        features: ['Four-Way Stretch', 'Zipper Pockets', 'Tapered Fit']
    },

    // INDUSTRIAL / FACTORY
    {
        id: 'uni-ind-tshirt',
        title: 'Industrial Work T-Shirt',
        category: 'Industrial',
        description: 'Heavy-duty poly-cotton t-shirt built to withstand tough environments.',
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
        features: ['Industrial Washable', 'Tear Resistant', 'Breathable']
    },
    {
        id: 'uni-ind-jersey',
        title: 'Factory Worker Jersey',
        category: 'Industrial',
        description: 'Durable and breathable jersey designed for active factory floor staff.',
        image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80',
        features: ['Stain Repellent', ' Reinforced Seams', 'Comfort Fit']
    },
    {
        id: 'uni-ind-cap',
        title: 'Industrial Safety Cap',
        category: 'Industrial',
        description: 'Durable cap with inner protection and high-visibility elements.',
        image: 'https://images.unsplash.com/photo-1534260933201-689fe91e7e40?w=800&q=80',
        features: ['Bump Protection', 'High-Vis Color', 'Dust Resistant']
    },
    {
        id: 'uni-ind-shorts',
        title: 'Cargo Work Shorts',
        category: 'Industrial',
        description: 'Heavy-duty cargo shorts featuring multiple tool pockets.',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
        features: ['Multiple Pockets', 'Reinforced Stitching', 'Durable Canvas']
    },
    {
        id: 'uni-ind-trackpant',
        title: 'Factory Utility Trackpant',
        category: 'Industrial',
        description: 'Tough, flexible trackpants suited for factory mobility and comfort.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
        features: ['Knee Protection Compatible', 'Industrial Grade Flex', 'Secure Pockets']
    },

    // FAST FOOD
    {
        id: 'uni-ff-tshirt',
        title: 'Fast Food Staff T-Shirt',
        category: 'Fast Food Staff',
        description: 'Easy-care, comfortable t-shirt that resists stains and holds its shape.',
        image: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80',
        features: ['Stain Repellent', 'Colorfast', 'Easy Iron']
    },
    {
        id: 'uni-ff-cap',
        title: 'Service Staff Cap',
        category: 'Fast Food Staff',
        description: 'Classic visor cap that keeps hair secure and maintains a hygienic look.',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
        features: ['Hair Control', 'Hygienic Design', 'Washable']
    }
];

const UniformsPage = () => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const filteredUniforms = UNIFORMS.filter(u => {
        return selectedCategories.length === 0 || selectedCategories.includes(u.category);
    });

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
                                className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase tracking-widest"
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
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all border border-slate-100 group flex flex-col h-full"
                                    >
                                        <div className="h-72 bg-slate-100 overflow-hidden relative">
                                            <img
                                                src={uniform.image}
                                                alt={uniform.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                                <div className="bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black text-white uppercase tracking-widest">
                                                    {uniform.category}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col flex-1">
                                            <div className="mb-6 flex-1">
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3">{uniform.title}</h3>
                                                <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">{uniform.description}</p>
                                            </div>

                                            <div className="mt-auto">
                                                <Link
                                                    to="/inquiry"
                                                    className="w-full block py-4 bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-600 hover:text-white transition-all border border-slate-100 text-center"
                                                >
                                                    Inquire for Bulk
                                                </Link>
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
        </div>
    );
};

export default UniformsPage;
