import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Layers, Ruler, Printer, Box } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const ManufacturingPage = () => {
    return (
        <div className="bg-white pt-20">
            {/* Header */}
            <section className="bg-slate-900 py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-4 block">Mumbai-Based Production</span>
                        <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                            Manufacturing <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">Excellence</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Scale & Unit */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">In-House Precision</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Managing everything from digital design to final stitching in our <span className="text-slate-900 font-bold">{BRAND_DETAILS.headquarters}</span> facility, we maintain a standard of quality control that few can match.
                        </p>
                        <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <Cpu className="text-cyan-400" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold uppercase tracking-tight">Vertically Integrated</h4>
                                    <p className="text-slate-400 text-sm">Full control over the entire production cycle.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <span className="block text-4xl font-black text-white">{BRAND_DETAILS.employeeStrength}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Expert Staff</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-black text-white">100%</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">In-house Production</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-12 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1558444479-c84824d4858e?w=800&q=80"
                            alt="Production Line"
                            className="rounded-[2.5rem] md:rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-cyan-500 rounded-full flex items-center justify-center p-4 md:p-6 text-center text-white font-black uppercase text-[8px] md:text-xs tracking-widest animate-pulse">
                            Certified Technical Standards
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="bg-slate-50 py-32 px-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Technical Capabilities</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto uppercase text-xs tracking-[0.2em] font-bold">Cutting-edge technology meets traditional craftsmanship</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Printer,
                                title: 'Sublimation Printing',
                                desc: 'High-resolution digital printing where ink is fused into the fabric for everlasting colors.'
                            },
                            {
                                icon: Zap,
                                title: 'Screen Printing',
                                desc: 'Classic industrial-grade printing for bold, vibrant graphics on leisure and training gear.'
                            },
                            {
                                icon: Layers,
                                title: 'Digital Design',
                                desc: 'Proprietary patterns and 3D visualization to ensure perfect logo placement and fit.'
                            },
                            {
                                icon: Ruler,
                                title: 'Precision Stitching',
                                desc: 'Reinforced seams and sport-specific cuts designed for the unique movements of athletes.'
                            },
                            {
                                icon: Box,
                                title: 'Quality Assurance',
                                desc: 'Rigorous multi-stage inspection to ensure every garment meets the Force Sports standard.'
                            },
                            {
                                icon: Cpu,
                                title: 'Fabric Engineering',
                                desc: 'Utilization of breathable, anti-microbial fabrics like Dri-Fit and Dot Knit.'
                            }
                        ].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 group hover:bg-slate-900 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-900 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <tech.icon size={30} />
                                </div>
                                <h4 className="text-xl font-black mb-4 uppercase text-slate-900 group-hover:text-white transition-colors">{tech.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fabrics Showcase */}
            <section className="py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Technical Fabrics</h2>
                            <p className="text-slate-500 leading-relaxed mb-12">
                                We utilize advanced moisture-wicking and breathable technical fabrics designed to keep athletes cool under pressure.
                            </p>
                            <div className="space-y-4">
                                {BRAND_DETAILS.manufacturing.fabrics.map((fabric, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-slate-900 font-bold uppercase tracking-widest text-sm">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                        {fabric}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="h-48 bg-slate-100 rounded-3xl overflow-hidden relative group"
                                >
                                    <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                                    <img
                                        src={`https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80&sig=${i}`}
                                        alt="Fabric Texture"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManufacturingPage;
