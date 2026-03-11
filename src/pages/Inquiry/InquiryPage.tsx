import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BRAND_DETAILS } from '../../data/brandData';

const InquiryPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prefilledProduct = queryParams.get('product');

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-slate-900 py-20 px-6 text-center">
                <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Get A Quote</motion.h1>
                <p className="text-cyan-400 mt-4 uppercase tracking-widest text-xs font-bold">Mumbai Headquarters: {BRAND_DETAILS.headquarters}</p>
            </section>

            <div className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300 overflow-hidden flex flex-col lg:flex-row">
                    {/* Contact Sidebar */}
                    <div className="bg-slate-900 p-12 text-white lg:w-1/3">
                        <h2 className="text-2xl font-black mb-10 border-b border-white/10 pb-6 uppercase tracking-tight">Main HQ</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Address</h4>
                                    <p className="text-sm font-medium leading-relaxed">{BRAND_DETAILS.addresses[0].text}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Call Us</h4>
                                    <p className="text-sm font-medium leading-relaxed">{BRAND_DETAILS.contacts.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Email</h4>
                                    <p className="text-sm font-bold leading-relaxed">{BRAND_DETAILS.contacts.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5">
                            <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest leading-loose">
                                Sole Proprietorship <br />
                                Experience: {BRAND_DETAILS.experience} <br />
                                Manager: {BRAND_DETAILS.proprietor}
                            </p>
                        </div>
                    </div>

                    {/* Form Area */}
                    <div className="p-12 lg:w-2/3">
                        <div className="mb-10">
                            <h3 className="text-3xl font-black text-slate-900 uppercase">Tell us about your order</h3>
                            <p className="text-slate-500 mt-2 font-medium">We specialize in 100% customized team jerseys and gear.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">FullName</label>
                                    <input type="text" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                    <input type="email" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Target Brand</label>
                                    <select aria-label="Target Brand" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all appearance-none cursor-pointer">
                                        <option>Shatak</option>
                                        <option>Jabraat</option>
                                        <option>SportX</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Quantity</label>
                                    <input type="number" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" placeholder="E.g. 50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all resize-none"
                                    placeholder="Details about colors, logos, and sizing..."
                                    defaultValue={prefilledProduct ? `I am interested in inquiring about: ${prefilledProduct}. \n\nPlease provide more details regarding customization options and pricing.` : ''}
                                ></textarea>
                            </div>

                            <button type="button" className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-100 transition-all flex items-center justify-center gap-3 active:scale-95 group">
                                Submit Inquiry <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiryPage;
