import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, Cpu, Layers, Ruler, Printer, Box, 
    ShieldCheck, Microscope, Thermometer, 
    Wind, Droplets, ChevronRight, Binary
} from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const ManufacturingPage = () => {
    return (
        <div className="bg-slate-950 pt-20 overflow-x-hidden">
            {/* Hero Section - High Impact */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-24 px-6 border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/manufacturing_tech_hero.png" 
                        alt="Manufacturing Excellence" 
                        className="w-full h-full object-cover opacity-40 scale-105 animate-[slow-zoom_30s_linear_infinite]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
                    
                    {/* Glowing Grid Background Effect */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-8">
                            <Binary size={14} className="animate-pulse" /> Precision Engineering Facility
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                            Industrial <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-slate-500">
                                Mastery
                            </span>
                        </h1>
                        <p className="text-slate-400 max-w-xl text-lg md:text-xl font-medium mb-12 leading-relaxed">
                            Transforming technical concepts into elite athletic armor within our vertically integrated Mumbai facility.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-8 justify-center md:justify-start">
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-white">100%</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">In-House Production</span>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-white">ISO</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Quality Certified</span>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-black text-white">{BRAND_DETAILS.employeeStrength}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Specialized Staff</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vertical Integration Section */}
            <section className="py-20 md:py-32 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Factory Blueprint</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Vertically Integrated <br /> Ecosystem</h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            From yarn selection to final shipment, our supply chain is strictly managed in-house. This allows us to maintain the <span className="text-white font-bold">extreme durability</span> and color consistency that Force is known for.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                            {[
                                { icon: Microscope, title: 'Lab Tested', desc: 'Pre-production fabric stress testing.' },
                                { icon: Ruler, title: 'CAD Patterns', desc: 'Precision digital drafting for zero-error fits.' }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors group">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="text-white font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse" />
                        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl group">
                            <img 
                                src="/manufacturing-detail.png" 
                                alt="Production Focus" 
                                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-40" />
                            <div className="absolute bottom-8 left-8 p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 max-w-[280px]">
                                <ShieldCheck className="text-cyan-400 mb-2" size={32} />
                                <h4 className="text-white font-black uppercase text-xs tracking-widest mb-1">Standard 001</h4>
                                <p className="text-slate-400 text-[10px] leading-tight font-medium uppercase tracking-[0.1em]">Triple-reinforced seam integrity as a baseline across all categories.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Capability Grid */}
            <section className="py-20 md:py-32 px-6 bg-slate-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Advanced Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">The Force Tech Lab</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            {
                                icon: Printer,
                                title: 'Sublimation Lab',
                                desc: 'High-density ink infusion process ensuring zero-fade prints that last the lifetime of the garment.'
                            },
                            {
                                icon: Layers,
                                title: '3D Prototyping',
                                desc: 'Virtual apparel visualization to optimize logo placement and panel ergonomics before cutting.'
                            },
                            {
                                icon: Thermometer,
                                title: 'Heat Transfer Control',
                                desc: 'Precision thermal application of logos and numbering for industrial-grade adherence.'
                            },
                            {
                                icon: Cpu,
                                title: 'Laser Precision',
                                desc: 'Automated laser-cutting systems for complex ventilation zones and exact panel dimensions.'
                            },
                            {
                                icon: Zap,
                                title: 'Hybrid Weaves',
                                desc: 'Custom fabric blends engineered specifically for high-impact sports like Kabaddi and Cricket.'
                            },
                            {
                                icon: Box,
                                title: 'Logistics Core',
                                desc: 'Advanced inventory management and secure packaging to ensure on-time global delivery.'
                            }
                        ].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:bg-cyan-500 group-hover:scale-110 transition-all">
                                    <tech.icon size={26} />
                                </div>
                                <h4 className="text-xl font-black mb-4 uppercase text-white tracking-tight">{tech.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fabric Innovation Showcase */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -inset-10 bg-cyan-500/10 blur-[80px] rounded-full" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[3rem] overflow-hidden border border-white/10"
                            >
                                <img 
                                    src="/fabric_innovation_tech.png" 
                                    alt="Fabric Tech" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
                            </motion.div>
                        </div>
                        
                        <div className="lg:w-1/2">
                            <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Material Science</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Engineered <br /> Breathability</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                We source and engineer the finest technical yarns to create fabrics that act as a second skin. Our materials are specialized for performance metrics:
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    { icon: Wind, title: 'Aero-Mesh', desc: 'Maximum airflow for temperature regulation.' },
                                    { icon: Droplets, title: 'Hydro-Wick', desc: 'Instant rapid-dry moisture management.' },
                                    { icon: ShieldCheck, title: 'Flex-Lite', desc: '4-way stretch with high abrasion resistance.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-5">
                                        <div className="p-3 rounded-xl bg-white/5 text-cyan-400">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 mb-24">
                <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-cyan-600 to-blue-900 p-12 md:p-20 text-center relative overflow-hidden shadow-3xl shadow-cyan-900/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 italic">Build Your Advantage</h2>
                        <p className="text-white/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
                            Experience the difference of manufacturing precision. Get a quote for your custom teamwear today.
                        </p>
                        <motion.a
                            href="/inquiry"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest text-sm rounded-full shadow-2xl transition-all"
                        >
                            Request Quotation <ChevronRight size={20} strokeWidth={3} />
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManufacturingPage;
