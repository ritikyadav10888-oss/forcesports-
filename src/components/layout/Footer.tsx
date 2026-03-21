import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-3 md:gap-4 mb-8">
                            <img src={BRAND_DETAILS.logo} alt={BRAND_DETAILS.name} className="h-12 md:h-16 w-auto object-contain" />
                            <div className="flex flex-col">
                                <h2 className="text-xl md:text-2xl font-black tracking-tighter leading-none">FORCE SPORTS</h2>
                                <span className="font-serif italic text-amber-500 text-xs md:text-sm mt-1">Wears India</span>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm md:text-base">
                            {BRAND_DETAILS.tagline}. Leading manufacturer and supplier of customized sports apparel since {BRAND_DETAILS.established}.
                        </p>
                        <div className="flex gap-4 mb-10">
                            <a href={BRAND_DETAILS.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all border border-white/5 hover:border-cyan-400 shadow-lg">
                                <Instagram size={18} />
                            </a>
                            <a href={BRAND_DETAILS.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all border border-white/5 hover:border-cyan-400 shadow-lg">
                                <Facebook size={18} />
                            </a>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 opacity-40">
                            <div className="px-3 py-1.5 border border-white/20 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-white/5">
                                ISO 9001:2015
                            </div>
                            <div className="px-3 py-1.5 border border-white/20 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest bg-white/5">
                                Make In India
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/5 pb-2 inline-block">Contact Us</h3>
                        <ul className="space-y-5 text-slate-400 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-cyan-500 group-hover:scale-110 transition-transform" />
                                <a 
                                    href={BRAND_DETAILS.addresses[0].googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors leading-relaxed"
                                >
                                    {BRAND_DETAILS.addresses[0].text}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={18} className="flex-shrink-0 text-cyan-500 group-hover:scale-110 transition-transform" />
                                <a href={`tel:${BRAND_DETAILS.contacts.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                                    {BRAND_DETAILS.contacts.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={18} className="flex-shrink-0 text-cyan-500 group-hover:scale-110 transition-transform" />
                                <a href={`mailto:${BRAND_DETAILS.contacts.email}`} className="hover:text-white transition-colors">
                                    {BRAND_DETAILS.contacts.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/5 pb-2 inline-block">Quick Navigation</h3>
                        <ul className="space-y-4 text-slate-400 text-sm font-medium">
                            <li><a href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-900 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Collections</a></li>
                            <li><a href="/catalog" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-900 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Digital Catalog</a></li>
                            <li><a href="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-900 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Our Story</a></li>
                            <li><a href="/inquiry" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-cyan-900 rounded-full group-hover:bg-cyan-400 transition-colors"></span> Get A Quote</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} {BRAND_DETAILS.name}. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="/terms" className="hover:text-cyan-500 transition-colors">Terms</a>
                        <a href="/privacy" className="hover:text-cyan-500 transition-colors">Privacy</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <p>Hand-crafted in Mumbai, India</p>
                        <span className="hidden md:block w-1 h-1 bg-slate-800 rounded-full"></span>
                        <p className="hidden md:block">ISO Certified</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
