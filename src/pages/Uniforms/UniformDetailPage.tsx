import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Zap, CheckCircle2, MessageCircle } from 'lucide-react';
import { UNIFORMS } from '../../data/uniforms';
import { BRAND_DETAILS } from '../../data/brandData';
import SEO from '../../components/seo/SEO';

const UniformDetailPage = () => {
    const { uniformId } = useParams();
    const navigate = useNavigate();
    const product = UNIFORMS.find(u => u.id === uniformId);

    const images = product ? [
        product.image,
        ...(product.gallery ?? [])
    ] : [];

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [uniformId]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
                <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Uniform Style Not Found</h2>
                <Link to="/uniforms" className="text-cyan-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <ArrowLeft size={16} /> Back to Uniforms
                </Link>
            </div>
        );
    }

    const activeImage = images[activeImageIndex] || product.image;

    const openWhatsApp = () => {
        const message = `Hi! I am interested in the ${product.title} from the ${product.category} section.\n\nSpecs: ${product.specs.Fabric || product.specs.fabric} / ${product.specs.Weight || product.specs.weight}.\n\nPlease provide pricing for a bulk order.`;
        const encoded = encodeURIComponent(message);
        window.open(`${BRAND_DETAILS.contacts.whatsappLink}&text=${encoded}`, '_blank');
    };

    return (
        <div className="bg-white pt-20">
            <SEO 
                title={`${product.title} | ${product.category}`}
                description={`${product.description}. Professional uniform solution by Force Sports India.`}
                image={product.image}
            />
            {/* Breadcrumbs & Back Nav */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-600 transition-colors font-bold uppercase tracking-widest text-[10px]"
                >
                    <ArrowLeft size={14} /> Back to Collection
                </button>
            </div>

            {/* Main Product Section */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="sticky top-32"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-50 aspect-square shadow-2xl p-12 border border-slate-100">
                             <img src={activeImage} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        {images.length > 1 && (
                            <div className="flex gap-3 mt-4">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`flex-1 rounded-2xl overflow-hidden aspect-square border-2 transition-all p-2 bg-slate-50 ${activeImageIndex === idx ? 'border-cyan-500 shadow-lg shadow-cyan-100' : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 font-black uppercase tracking-widest text-[10px] rounded-full">
                                {product.category}
                            </span>
                            {product.subcategory && (
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                                    {product.subcategory}
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-[0.9]">
                            {product.title}
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed mb-10">
                            {product.longDescription || product.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-cyan-500 transition-all">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-500">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="font-bold text-slate-700 uppercase tracking-tight text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={openWhatsApp}
                                className="py-6 bg-[#25D366] text-white rounded-[2rem] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all shadow-2xl shadow-[#25D366]/20 active:scale-95 group"
                            >
                                WhatsApp Quote <MessageCircle className="group-hover:scale-110 transition-transform" />
                            </button>
                            <Link
                                to={`/inquiry?product=${encodeURIComponent(product.title)}`}
                                className="py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-cyan-600 transition-all shadow-2xl shadow-slate-900/20 active:scale-95 group"
                            >
                                Email Inquiry <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Specs & Size Charts Section */}
            <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Specs */}
                        <div className="lg:col-span-1">
                            <div className="mb-10">
                                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Technical Deep Dive</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Specifications</h2>
                            </div>
                            <div className="space-y-3">
                                {Object.entries(product.specs).map(([key, value], idx) => (
                                    <div key={idx} className="flex justify-between items-center p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{key}</span>
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-tight">{value}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center p-5 bg-white rounded-2xl border border-slate-200 shadow-sm mt-3">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Customization</span>
                                    <span className="text-xs font-bold text-slate-900 uppercase tracking-tight text-right text-balance">{product.customization.join(', ')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Size Charts */}
                        {product.sizeCharts && (
                            <div className="lg:col-span-2">
                                <div className="mb-10">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Fit Guide</span>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Size Charts</h2>
                                </div>
                                <div className="space-y-8">
                                    {Object.entries(product.sizeCharts).map(([, chart]: [string, any], idx) => (
                                        <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                                            <div className="px-8 py-4 bg-slate-900 flex justify-between items-center">
                                                <h4 className="text-white font-black uppercase tracking-widest text-[10px]">{chart.label}</h4>
                                                <span className="text-slate-400 text-[10px] font-bold">IN INCHES</span>
                                            </div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="border-b border-slate-100 bg-slate-50">
                                                            {Object.keys(chart.values[0]).map((header, hIdx) => (
                                                                <th key={hIdx} className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">{header}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {chart.values.map((row: any, rIdx: number) => (
                                                            <tr key={rIdx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                                                                {Object.values(row).map((val: any, vIdx) => (
                                                                    <td key={vIdx} className="px-8 py-4 text-xs font-bold text-slate-700 uppercase tracking-tight">{val}</td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {!product.sizeCharts && (
                             <div className="lg:col-span-2">
                                <div className="bg-slate-900 rounded-[3rem] p-12 text-center h-full flex flex-col items-center justify-center">
                                    <Zap size={48} className="text-cyan-500 mb-6" />
                                    <h3 className="text-2xl font-black text-white uppercase mb-4">Custom Sizing Available</h3>
                                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                                        We provide tailored sizing solutions for bulk orders. Contact us to get a specialized size guide for your team or organization.
                                    </p>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Customization Promo */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 -skew-x-12 translate-x-1/4" />

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">Need Your Own Branding?</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Our uniform customization service includes high-precision embroidery, long-lasting sublimation, and specialized logo placement to represent your identity perfectly.
                        </p>
                    </div>

                    <Link
                        to="/inquiry"
                        className="relative z-10 px-10 py-5 bg-cyan-500 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-cyan-500/30 active:scale-95"
                    >
                        Inquire Bulk Pricing
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default UniformDetailPage;
