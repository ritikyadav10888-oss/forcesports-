import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Manufacturing', path: '/manufacturing' }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
                    <img
                        src={BRAND_DETAILS.logo}
                        alt={BRAND_DETAILS.name}
                        className="h-12 w-auto object-contain transition-transform group-hover:scale-110"
                    />
                    <div className="flex flex-col">
                        <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">FORCE SPORTS</span>
                        <span className="text-[10px] font-black text-cyan-600 tracking-widest uppercase mt-0.5">Wears India</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-cyan-500 relative ${location.pathname === link.path ? 'text-cyan-600' : 'text-slate-600'
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-underline"
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-600"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        to="/inquiry"
                        className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-200 transition-all active:scale-95"
                    >
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-black uppercase tracking-tighter transition-all ${location.pathname === link.path ? 'text-cyan-600' : 'text-slate-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/inquiry"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 bg-slate-900 text-white text-center text-sm font-black uppercase tracking-widest rounded-2xl"
                            >
                                Get A Free Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
