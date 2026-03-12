import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, Product } from '../../data/products';
import { Link } from 'react-router-dom';
import { Filter, X, Check, Activity } from 'lucide-react';

const Categories = ['T-Shirts', 'Track Pants', 'Shorts', 'Jackets', 'Bags', 'Caps'] as const;
const Sports = ['Badminton', 'Cricket', 'Football', 'Volleyball', 'Kabaddi', 'Pickleball', 'Tennis'] as const;
const UsageTypes = ['T20', 'Practice', 'Travel', 'Coaches', 'Officials'] as const;

const ProductPage = () => {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [selectedUsages, setSelectedUsages] = useState<string[]>([]);
    const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
    const [customization, setCustomization] = useState({ logo: '', size: 'Medium', placement: 'Front' });

    const filteredProducts = PRODUCTS.filter(p => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
        const sportMatch = selectedSports.length === 0 || (p.sport && selectedSports.includes(p.sport));
        const usageMatch = selectedUsages.length === 0 || (p.usageType && selectedUsages.includes(p.usageType));
        return categoryMatch && sportMatch && usageMatch;
    });

    const handleCustomizationSubmit = () => {
        console.log('Customization Placed:', {
            product: customizingProduct?.title,
            ...customization
        });
        alert(`Customization request placed for ${customizingProduct?.title}!\nLogo: ${customization.logo}\nSize: ${customization.size}\nPlacement: ${customization.placement}`);
        setCustomizingProduct(null);
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
                    Gear Up <span className="text-cyan-500">Pro</span>
                </motion.h1>
                <p className="text-slate-400 mt-6 max-w-2xl mx-auto uppercase tracking-[0.3em] text-[10px] font-black relative z-10">
                    Premium Sports Apparel & Custom Solutions
                </p>
            </section>

            <div className="max-w-[1600px] mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Sidebar - Product Categories */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="lg:hidden mb-6 flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                <Filter size={16} className="text-cyan-600" /> Filter Products
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
                                    <Filter size={14} className="text-cyan-600" /> Filters
                                </h3>

                                {/* Categories Filter */}
                                <div className="mb-8">
                                    <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Categories</h4>
                                    <div className="space-y-3">
                                        {Categories.map(cat => (
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


                                {/* Sports Filter (with Subcategories) */}
                                <div className="mb-8">
                                    <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest mb-4">Sports</h4>
                                    <div className="space-y-4">
                                        {Sports.map(sport => (
                                            <div key={sport}>
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input 
                                                        type="checkbox" 
                                                        className="hidden" 
                                                        checked={selectedSports.includes(sport)}
                                                        onChange={() => {
                                                            setSelectedSports(prev => 
                                                                prev.includes(sport) ? prev.filter(s => s !== sport) : [...prev, sport]
                                                            );
                                                        }}
                                                    />
                                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedSports.includes(sport) ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                        {selectedSports.includes(sport) && <Check size={10} className="text-white" />}
                                                    </div>
                                                    <span className={`text-[10px] uppercase font-black tracking-widest transition-colors ${selectedSports.includes(sport) ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                                        {sport}
                                                    </span>
                                                </label>
                                                
                                                {/* Subcategories visible when Sport is selected */}
                                                <AnimatePresence>
                                                    {selectedSports.includes(sport) && (
                                                        <motion.div 
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="mt-3 ml-7 space-y-3 border-l-2 border-slate-100 pl-4 overflow-hidden"
                                                        >
                                                            {UsageTypes.filter(usage => {
                                                                if (usage === 'T20' && sport !== 'Cricket') return false;
                                                                return true;
                                                            }).map(usage => (
                                                                <label key={`${sport}-${usage}`} className="flex items-center gap-2 cursor-pointer group">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        className="hidden" 
                                                                        checked={selectedUsages.includes(usage)}
                                                                        onChange={() => {
                                                                            setSelectedUsages(prev => 
                                                                                prev.includes(usage) ? prev.filter(u => u !== usage) : [...prev, usage]
                                                                            );
                                                                        }}
                                                                    />
                                                                    <div className={`w-3 h-3 rounded-[3px] border flex items-center justify-center transition-all ${selectedUsages.includes(usage) ? 'bg-cyan-600 border-cyan-600' : 'bg-white border-slate-300 group-hover:border-cyan-400'}`}>
                                                                        {selectedUsages.includes(usage) && <Check size={8} className="text-white" />}
                                                                    </div>
                                                                    <span className={`text-[9px] uppercase font-black tracking-widest transition-colors ${selectedUsages.includes(usage) ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                                                        {usage}
                                                                    </span>
                                                                </label>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-cyan-600 rounded-[2.5rem] text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">Custom Design?</h4>
                                <p className="text-cyan-100 text-[10px] font-bold uppercase tracking-wider leading-relaxed mb-6 relative z-10 opacity-80">
                                    Create your own unique team identity with our experts.
                                </p>
                                <Link to="/inquiry" className="inline-block px-6 py-3 bg-white text-cyan-600 rounded-xl text-[9px] font-black uppercase tracking-widest relative z-10 hover:scale-105 transition-transform">
                                    Start Now
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">


                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredProducts.map(product => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all border border-slate-100 group flex flex-col h-full"
                                    >
                                        <div className="h-72 bg-slate-100 overflow-hidden relative p-8">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className={`w-full h-full object-contain transition-all duration-700 
                                                    ${product.imageBack ? 'group-hover:opacity-0 group-hover:scale-110' : 'group-hover:scale-110'}`}
                                            />
                                            {product.imageBack && (
                                                <img 
                                                    src={product.imageBack} 
                                                    alt={`${product.title} - Back View`}
                                                    className="absolute inset-0 w-full h-full object-contain p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                                                />
                                            )}
                                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                                {/* Brand badge removed */}
                                                <div className="flex gap-2">
                                                    {product.sport && !['Other', 'Activity', 'General', 'All'].includes(product.sport) && (
                                                        <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl shadow-cyan-900/20">
                                                            {product.sport}
                                                        </div>
                                                    )}
                                                    {product.usageType && product.usageType !== 'General' && (
                                                        <div className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                                                            {product.usageType}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col flex-1">
                                            <div className="mb-6 flex-1">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 block">{product.category}</span>
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3">{product.title}</h3>
                                                <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">{product.description}</p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    onClick={() => setCustomizingProduct(product)}
                                                    className="py-4 bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all"
                                                >
                                                    Customize
                                                </button>
                                                <Link
                                                    to={`/products/${product.id}`}
                                                    className="py-4 bg-slate-50 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all border border-slate-100 text-center flex items-center justify-center"
                                                >
                                                    View
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <Activity size={48} className="mx-auto text-slate-200 mb-6" />
                                        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">No matches found in this configuration</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Customization Modal */}
            <AnimatePresence>
                {customizingProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setCustomizingProduct(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setCustomizingProduct(null)}
                                aria-label="Close modal"
                                className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-all z-20"
                            >
                                <X size={20} />
                            </button>

                             <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-12">
                                <div className="relative group">
                                    <img 
                                        src={customization.placement === 'Back' && customizingProduct.imageBack ? customizingProduct.imageBack : customizingProduct.image} 
                                        alt={customizingProduct.title} 
                                        className="w-full max-w-xs object-contain rounded-3xl" 
                                    />
                                    {/* Placeholder for Logo placement debug */}
                                    <div className={`absolute border-2 border-cyan-500 border-dashed rounded-lg flex items-center justify-center bg-cyan-500/10 transition-all
                                        ${customization.placement === 'Front' ? 'top-1/4 left-1/4 w-16 h-16' :
                                            customization.placement === 'Back' ? 'top-1/4 right-1/4 w-16 h-16 opacity-30 animate-pulse' :
                                                customization.placement === 'Sleeve Left' ? 'top-1/3 left-0 w-10 h-10' :
                                                    'top-1/3 right-0 w-10 h-10'}`}
                                    >
                                        <span className="text-[8px] font-bold text-cyan-600">LOGO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 p-12 flex flex-col overflow-y-auto">
                                <div className="mb-10">
                                    <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-3 block">Customization</span>
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">{customizingProduct.title}</h2>
                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{customizingProduct.productCode}</p>
                                </div>

                                <div className="space-y-8 mb-12">
                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Logo Upload / Details</label>
                                        <input
                                            type="text"
                                            placeholder="Enter logo description or URL"
                                            value={customization.logo}
                                            onChange={(e) => setCustomization({ ...customization, logo: e.target.value })}
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold focus:ring-2 focus:ring-cyan-500 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Logo Placement</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Front', 'Back', 'Sleeve Left', 'Sleeve Right'].map(p => (
                                                <button
                                                    key={p}
                                                    onClick={() => setCustomization({ ...customization, placement: p })}
                                                    className={`px-4 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${customization.placement === p
                                                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                                                        : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                                                        }`}
                                                >
                                                    {p}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 block">Logo Size</label>
                                        <div className="flex gap-3">
                                            {['Small', 'Medium', 'Large', 'Extra Large'].map(s => (
                                                <button
                                                    key={s}
                                                    onClick={() => setCustomization({ ...customization, size: s })}
                                                    className={`flex-1 px-3 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${customization.size === s
                                                        ? 'bg-cyan-600 text-white border-cyan-600 shadow-lg'
                                                        : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCustomizationSubmit}
                                    className="mt-auto w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-900/20 active:scale-95"
                                >
                                    Add to Inquiry
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProductPage;

