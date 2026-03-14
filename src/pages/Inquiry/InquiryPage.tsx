import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Upload, X, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BRAND_DETAILS } from '../../data/brandData';

const InquiryPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prefilledProduct = queryParams.get('product');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        quantity: '',
        message: prefilledProduct ? `I am interested in: ${prefilledProduct}` : ''
    });

    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const subject = encodeURIComponent(BRAND_DETAILS.contacts.defaultSubject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Quantity: ${formData.quantity}\n\n` +
            `Message: ${formData.message}\n\n` +
            (image ? "[Image Selected for Attachment]" : "")
        );

        window.location.href = `mailto:${BRAND_DETAILS.contacts.email}?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

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
                                    <a 
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND_DETAILS.addresses[0].text)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium leading-relaxed hover:text-cyan-400 transition-colors"
                                    >
                                        {BRAND_DETAILS.addresses[0].text}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Call Us</h4>
                                    <a href={`tel:${BRAND_DETAILS.contacts.phone.replace(/\s+/g, '')}`} className="text-sm font-medium leading-relaxed hover:text-cyan-400 transition-colors">
                                        {BRAND_DETAILS.contacts.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">WhatsApp Inquiry</h4>
                                    <div className="space-y-1">
                                        <a href={BRAND_DETAILS.contacts.whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-sm font-bold leading-relaxed text-green-400 hover:text-green-300 transition-colors">
                                            {BRAND_DETAILS.contacts.whatsapp}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Email</h4>
                                    <a href={`mailto:${BRAND_DETAILS.contacts.email}`} className="text-sm font-bold leading-relaxed hover:text-cyan-400 transition-colors">
                                        {BRAND_DETAILS.contacts.email}
                                    </a>
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
                        <AnimatePresence>
                            {isSubmitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-black text-slate-900 uppercase">Opening Email Client</h3>
                                        <p className="text-slate-500 mt-2 font-medium">Please attach your selected image in the email before sending!</p>
                                    </div>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-cyan-600 font-bold uppercase tracking-widest text-sm hover:underline"
                                    >
                                        Back to Form
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <div className="mb-10">
                                        <h3 className="text-3xl font-black text-slate-900 uppercase">Tell us about your order</h3>
                                        <p className="text-slate-500 mt-2 font-medium">We specialize in 100% customized team jerseys and gear.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">FullName</label>
                                                <input 
                                                    required 
                                                    type="text" 
                                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                                <input 
                                                    required 
                                                    type="email" 
                                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                                                <input 
                                                    required 
                                                    type="tel" 
                                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                                    placeholder="+91 00000 00000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Quantity</label>
                                                <input 
                                                    required 
                                                    type="number" 
                                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                                    placeholder="E.g. 50"
                                                    value={formData.quantity}
                                                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Reference Product Design (Optional)</label>
                                            <div className="relative group">
                                                <div className={`w-full p-10 border-2 border-dashed rounded-3xl transition-all flex flex-col items-center justify-center gap-4 ${imagePreview ? 'border-cyan-500 bg-cyan-50/10' : 'border-slate-200 hover:border-cyan-400 bg-slate-50'}`}>
                                                    {imagePreview ? (
                                                        <div className="relative">
                                                            <img src={imagePreview} alt="Preview" className="h-32 w-auto object-contain rounded-xl shadow-lg" />
                                                            <button 
                                                                type="button"
                                                                onClick={() => {setImage(null); setImagePreview(null);}}
                                                                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                                                                aria-label="Remove image"
                                                                title="Remove image"
                                                            >
                                                                <X size={16} />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:scale-110 transition-all">
                                                                <Upload size={32} />
                                                            </div>
                                                            <div className="text-center">
                                                                <p className="text-sm font-bold text-slate-900">Click to upload your design</p>
                                                                <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 10MB</p>
                                                            </div>
                                                        </>
                                                    )}
                                                    <input 
                                                        type="file" 
                                                        accept="image/*" 
                                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                                        onChange={handleImageChange}
                                                        aria-label="Upload design image"
                                                        title="Upload design image"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all resize-none"
                                                placeholder="Details about colors, logos, and sizing..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="w-full py-5 bg-slate-900 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-100 transition-all flex items-center justify-center gap-3 active:scale-95 group">
                                            Submit Inquiry <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiryPage;
