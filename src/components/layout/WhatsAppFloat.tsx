"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from '../../data/brandData';

const WhatsAppFloat = () => {
    return (
        <motion.a
            href={BRAND_DETAILS.contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer group"
            title="Chat on WhatsApp"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:animate-none"></div>
            <MessageCircle size={24} className="md:w-8 md:h-8 relative z-10 stroke-[2.5px]" />
            
            <div className="absolute right-20 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                Bulk Booking
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
        </motion.a>
    );
};

export default WhatsAppFloat;
