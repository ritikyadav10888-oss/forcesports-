import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/seo/SEO';
import { Mail, Phone, MapPin, Send, MessageCircle, Upload, X, CheckCircle, Loader2, CheckCircle2, AlertCircle, Clock, ChevronRight, MessageSquare, Building2, User2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { BRAND_DETAILS } from '../../data/brandData';

const InquiryPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prefilledProduct = queryParams.get('product');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        quantity: '',
        message: prefilledProduct ? `I am interested in: ${prefilledProduct}` : ''
    });

    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMsg, setStatusMsg] = useState('');

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.fullName || !formData.email || !formData.message) {
            setStatus('error');
            setStatusMsg('Please fill in all required fields.');
            return;
        }

        setStatus('sending');
        setStatusMsg('Sending your inquiry...');

        try {
            // Note: In a real production app, we would use FormData to send the image file.
            // For now, we follow the existing pattern of sending JSON for fields.
            const response = await fetch('http://localhost:5000/api/send-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMsg('Thank you! Your inquiry has been sent successfully.');
                setFormData({ fullName: '', email: '', phone: '', quantity: '', message: '' });
                setImage(null);
                setImagePreview(null);
            } else {
                setStatus('error');
                setStatusMsg(data.error || 'Failed to send inquiry.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setStatusMsg('Could not connect to the server. Please try again later.');
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO 
                title="Get a Quote | Custom Teamwear Manufacturing"
                description="Contact Force Sports & Wears India for a custom quote on sports jerseys, uniforms, and athletic gear. Premium quality, best prices, manufactured in Mumbai."
            />
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
                                        href={BRAND_DETAILS.addresses[0].googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium leading-relaxed hover:text-cyan-400 transition-colors"
                                    >
                                        <span className="block font-black text-white mb-1 uppercase tracking-tight">Force Sports and Wears India</span>
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
                            <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest">
                                Sole Proprietorship <br />
                                Experience: {BRAND_DETAILS.experience} <br />
                                Manager: {BRAND_DETAILS.proprietor}
                            </p>
                        </div>
                    </div>

                    {/* Form Area */}
                    <div className="p-12 lg:w-2/3">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">FullName</label>
                                    <input 
                                        required 
                                        type="text" 
                                        name="fullName"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                    <input 
                                        required 
                                        type="email" 
                                        name="email"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                                    <input 
                                        required 
                                        type="tel" 
                                        name="phone"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="+91 00000 00000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Quantity</label>
                                    <input 
                                        required 
                                        type="number" 
                                        name="quantity"
                                        className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" 
                                        placeholder="E.g. 50"
                                        value={formData.quantity}
                                        onChange={handleChange}
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
                                    name="message"
                                    rows={4}
                                    className="w-full p-4 bg-slate-50 text-slate-900 rounded-2xl border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all resize-none"
                                    placeholder="Details about colors, logos, and sizing..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <AnimatePresence>
                                {status !== 'idle' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl text-sm font-bold ${
                                            status === 'success' ? 'bg-green-50 text-green-700' : 
                                            status === 'error' ? 'bg-red-50 text-red-700' : 
                                            'bg-cyan-50 text-cyan-700'
                                        }`}
                                    >
                                        {status === 'success' && <CheckCircle2 size={18} />}
                                        {status === 'error' && <AlertCircle size={18} />}
                                        {status === 'sending' && <Loader2 size={18} className="animate-spin" />}
                                        {statusMsg}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button 
                                type="submit" 
                                disabled={status === 'sending'}
                                className={`w-full py-5 bg-slate-900 text-white font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 active:scale-95 group ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-100'}`}
                            >
                                {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                                <Send size={20} className={status === 'sending' ? '' : 'group-hover:translate-x-1 transition-transform'} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiryPage;
