import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <img src={BRAND_DETAILS.logo} alt={BRAND_DETAILS.name} className="h-16 w-auto object-contain" />
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-black tracking-tighter leading-none">FORCE SPORTS</h2>
                                <span className="font-serif italic text-amber-500 text-sm mt-1">Wears India</span>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                            {BRAND_DETAILS.tagline}. Leading manufacturer and supplier of customized sports apparel since {BRAND_DETAILS.established}.
                        </p>
                        <div className="flex gap-4">
                            <a href={BRAND_DETAILS.social.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href={BRAND_DETAILS.social.facebook} target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 cursor-pointer transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-cyan-400">Contact</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>{BRAND_DETAILS.addresses[0].text}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0" />
                                <span>{BRAND_DETAILS.contacts.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0" />
                                <span>{BRAND_DETAILS.contacts.email}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-cyan-400">Quick Links</h3>
                        <ul className="space-y-4 text-slate-400 text-sm font-medium">
                            <li><a href="/products" className="hover:text-white transition-colors">Collections</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="/manufacturing" className="hover:text-white transition-colors">Manufacturing</a></li>
                            <li><a href="/inquiry" className="hover:text-white transition-colors">Get A Quote</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} {BRAND_DETAILS.name}. All Rights Reserved.</p>
                    <p>Hand-crafted in Mumbai, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
