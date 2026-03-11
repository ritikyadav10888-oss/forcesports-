import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Award, Users, ChevronRight } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556740734-7f95626903fb?w=1600&q=80"
                        alt="Manufacturing Excellence"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4 block"
                    >
                        {BRAND_DETAILS.tagline}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter"
                    >
                        About <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">Force Sports</span>
                    </motion.h1>
                </div>
            </section>

            {/* Core Story */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black mb-8 border-l-4 border-cyan-500 pl-6 uppercase tracking-tighter">Fueling Champions <br /> Since 2007</h2>
                        <p className="text-slate-600 leading-relaxed mb-8 text-xl">
                            At {BRAND_DETAILS.name}, we don't just make apparel; we engineer performance. Based in the heart of Mumbai, we have spent over {BRAND_DETAILS.experience} perfecting the art of sports manufacturing.
                        </p>
                        <p className="text-slate-500 leading-relaxed mb-10">
                            From local clubs to international arenas, our mission has always been clear: to provide athletes with high-quality, customized gear that empowers them to push past their limits.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <span className="block text-3xl md:text-4xl font-black text-slate-900">{BRAND_DETAILS.established}</span>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Founded Year</span>
                            </div>
                            <div>
                                <span className="block text-3xl md:text-4xl font-black text-slate-900">{BRAND_DETAILS.employeeStrength}</span>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Staff Members</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-cyan-500/10 rounded-[2rem] blur-2xl" />
                        <div className="relative bg-slate-900 rounded-[2rem] p-12 overflow-hidden">
                            <h3 className="text-2xl font-black mb-8 text-white uppercase">Our Heritage</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                Founded in 2007 by Mr. Anand Sanghai, Force Sports began as a vision to bridge the gap between premium quality and accessible sportswear in India.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                What started as a focused manufacturing unit in Goregaon has grown into a vertically integrated powerhouse, trusted by schools, corporate teams, and professional sports organizations across the country.
                            </p>
                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                    <Shield className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <span className="block text-white font-bold uppercase tracking-widest text-xs">Proprietor</span>
                                    <span className="text-slate-400 text-sm">{BRAND_DETAILS.proprietor}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Alpha Section */}
            <section className="bg-slate-50 py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">What Sets Us Alpha?</h2>
                        <div className="w-20 h-1 bg-cyan-500 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Target,
                                title: 'Total Customization',
                                desc: '100% customized sublimation printing. Your identity is integrated directly into the fabric.'
                            },
                            {
                                icon: Award,
                                title: 'Technical Fabrics',
                                desc: 'Advanced moisture-wicking and breathable fabrics (Dri-Fit, Dot Knit).'
                            },
                            {
                                icon: Users,
                                title: 'In-House Precision',
                                desc: 'Managing everything from digital design to final stitching in our Mumbai facility.'
                            },
                            {
                                icon: Shield,
                                title: 'Sport-Specific',
                                desc: 'Tailored movement movement analysis for specific cuts like Kabaddi or Cricket.'
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <feature.icon size={28} />
                                </div>
                                <h4 className="text-lg font-black mb-4 uppercase text-slate-900">{feature.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Powerhouse Section */}
            <section className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 skew-x-12 translate-x-1/4" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 block">Manufacturing Excellence</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">A Vertically <br /> Integrated Powerhouse</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                Based in the heart of Mumbai, our {BRAND_DETAILS.manufacturing.unitLocation} facility manages the entire production cycle. From digital layout to final hand-stitching, we ensure every jersey meets the "Force" standard.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {BRAND_DETAILS.manufacturing.capabilities.slice(0, 4).map((cap, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                        <span className="text-sm font-bold uppercase tracking-wide">{cap}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link to="/manufacturing" className="text-cyan-400 font-black uppercase tracking-[0.2em] text-xs flex items-center gap-2 hover:text-white transition-colors group">
                                    Explore Manufacturing Specs <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1558444479-c84824d4858e?w=800&q=80"
                                alt="Production Line"
                                className="rounded-[2.5rem] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Product Ecosystem Preview */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Our Product Ecosystem</h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900 hover:border-cyan-500 transition-all cursor-default group">
                                    <h4 className="text-lg font-black mb-2 uppercase group-hover:text-cyan-600 transition-colors">Shatak</h4>
                                    <p className="text-slate-500 text-sm">Premium activewear, Softy polos, and performance athletic apparel.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900 hover:border-cyan-500 transition-all cursor-default group">
                                    <h4 className="text-lg font-black mb-2 uppercase group-hover:text-cyan-600 transition-colors">Jabraat</h4>
                                    <p className="text-slate-500 text-sm">Pro performance team kits and high-intensity, heavy-duty sporting gear.</p>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900 hover:border-cyan-500 transition-all cursor-default group">
                                    <h4 className="text-lg font-black mb-2 uppercase group-hover:text-cyan-600 transition-colors">SportX</h4>
                                    <p className="text-slate-500 text-sm">Ultralight training tees, compression wear, and everyday athletic essentials.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&q=80" alt="Apparel" className="rounded-2xl w-full aspect-[3/4] object-cover" />
                                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80" alt="Apparel" className="rounded-2xl w-full aspect-square object-cover" />
                            </div>
                            <div className="space-y-4">
                                <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&q=80" alt="Apparel" className="rounded-2xl w-full aspect-square object-cover" />
                                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&q=80" alt="Apparel" className="rounded-2xl w-full aspect-[3/4] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment CTA */}
            <section className="bg-slate-900 py-32 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-white to-amber-500" />
                <div className="relative z-10 max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">Our Commitment</h2>
                    <p className="text-slate-400 text-xl leading-relaxed mb-12">
                        At Force Sports & Wears India, we combine traditional craftsmanship with modern technology to deliver <span className="text-white font-bold">"The Force"</span> behind your performance. Every athlete deserves to feel like a pro.
                    </p>
                    <Link
                        to="/inquiry"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all group shadow-2xl shadow-cyan-500/20"
                    >
                        Start Your Custom Design <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
