import React from 'react';
import { motion } from 'framer-motion';
import { 
    ChevronRight, Sparkles, Zap, Shield, 
    Truck, Award, Trophy, Building2, 
    Building, Landmark, Factory, Bike, 
    Signal, Palette, ShieldCheck, Globe2, 
    ShoppingCart,
    CarFront, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { getCDNUrl } from '../../utils/cdnUtils';
import SEO from '../../components/seo/SEO';

const ClientMarqueeItem = ({ client, size = "large" }: { client: any, size?: "small" | "large" | "medium" }) => {
    const [imageError, setImageError] = React.useState(false);

    const boxSize = size === "large" ? "w-14 h-14" : size === "medium" ? "w-12 h-12" : "w-10 h-10";
    const iconSize = size === "large" ? 28 : size === "medium" ? 22 : 18;
    const padding = size === "large" ? "p-2" : size === "medium" ? "p-1.5" : "p-1";
    const textStyle = size === "large"
        ? "text-2xl md:text-3xl font-black text-slate-900 opacity-80 group-hover/item:opacity-100 group-hover/item:text-cyan-600"
        : size === "medium"
            ? "text-xl md:text-2xl font-black text-slate-400 group-hover/item:text-orange-600"
            : "text-lg md:text-xl font-black text-slate-300 group-hover/item:text-slate-900";

    return (
        <div className={`${size === "medium" ? "mx-10" : "mx-12"} flex items-center gap-5 group/item cursor-default`}>
            <div className={`${boxSize} ${imageError || !client.logo ? client.color : 'bg-white'} rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover/item:scale-110 group-hover/item:rotate-6 border border-white/50 overflow-hidden`}>
                {client.logo && !imageError ? (
                    <img
                        src={getCDNUrl(client.logo, { width: 100 })}
                        alt={client.name}
                        loading="lazy"
                        className={`w-full h-full object-contain ${padding}`}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <client.icon size={iconSize} strokeWidth={2.5} />
                )}
            </div>
            <span className={`${textStyle} transition-colors uppercase tracking-tighter`}>
                {client.name}
            </span>
        </div>
    );
};

const HomePage = () => {
    // Select a few premium products to feature
    const featuredProducts = PRODUCTS.filter(p => 
        p.id === 'force-3d-innov-01' || 
        p.id === 'force-stealth-joggers' || 
        p.id === 'force-plain-cap-black'
    );

    return (
        <div className="bg-white overflow-x-hidden">
            <SEO 
                title="Custom Sports Jersey Manufacturer Mumbai"
                description="Force Sports & Wears India - Premium manufacturer of customized sports jerseys, athletic apparel, and technical gear based in Mumbai since 2007. Specializing in sublimation and technical fabrics."
            />
            {/* Single High-Impact Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={getCDNUrl('/force_sports.png', { width: 1920 })}
                        alt="Force Sports Athlete"
                        className="w-full h-full object-cover opacity-50 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
                    />
                    {/* Dark Premium Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6">
                            Fueling Champions Since 2007
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]"
                    >
                        FORCE SPORTS
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-slate-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl md:leading-relaxed font-medium"
                    >
                        Custom athletic jerseys and technical apparel engineered for peak performance and relentless durability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-4"
                    >
                        <Link
                            to="/products"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Products <ChevronRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </Link>

                        <Link
                            to="/catalog"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-slate-700/50"
                        >
                            <BookOpen size={18} /> View Digital Catalog
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </section>

            {/* Featured Products Showcase */}
            <section className="py-10 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div>
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Masterpieces</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Featured Products</h2>
                        </div>
                        <Link to="/products" className="text-slate-900 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
                            View Full Catalog <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-cyan-500" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {product.brand && (
                                        <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                                            {product.brand} {product.productCode}
                                        </div>
                                    )}
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <h3 className="text-white font-bold text-xl mb-1">{product.title}</h3>
                                        <p className="text-slate-300 text-sm line-clamp-2">{product.description}</p>
                                    </div>
                                </div>
                                <Link to={`/products/${product.id}`} className="absolute inset-0 z-30">
                                    <span className="sr-only">View {product.title}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Spotlight */}
            <section className="py-14 md:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-luminosity" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">The Force Sports Family</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { 
                                name: 'Elite', 
                                segment: 'Professional Kits',
                                desc: 'High-performance teamwear engineered for top-tier competitive sporting organizations.',
                                icon: Award
                            },
                            { 
                                name: 'Pro', 
                                segment: 'Technical Apparel',
                                desc: 'Advanced moisture-wicking gear for athletes who demand precision and durability.',
                                icon: Shield
                            },
                            { 
                                name: 'Vanguard', 
                                segment: 'Institutional Supply',
                                desc: 'Premium uniform solutions for leading schools and corporate wellness initiatives.',
                                icon: Trophy
                            }
                        ].map((brand, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                    <brand.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 italic">
                                    {brand.name}
                                </h3>
                                <span className="block text-cyan-500 text-[10px] font-black uppercase tracking-widest mb-6 px-3 py-1 bg-cyan-500/10 rounded-full w-fit">
                                    {brand.segment}
                                </span>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    {brand.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Process Section */}
            <section className="py-14 md:py-24 bg-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="absolute top-1/4 -right-64 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-32 -left-64 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-10">
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3 block">The Journey</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">How We Craft Perfection</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Sparkles, title: 'Consultation', desc: 'Discuss your specific vision and technical requirements.' },
                            { icon: Zap, title: 'Design Lab', desc: 'Cutting-edge 3D apparel visualization and prototyping.' },
                            { icon: Shield, title: 'Master Tailoring', desc: 'Precision craftsmanship with rigorous quality control.' },
                            { icon: Truck, title: 'Global Delivery', desc: 'Securely packaged and shipped worldwide, on time.' }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group text-center p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] hover:-translate-y-2 transition-all duration-300"
                            >
                                {/* Step Number Indicator */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center font-black text-slate-200 text-xl border-4 border-white group-hover:text-cyan-100 group-hover:bg-cyan-600 transition-colors">
                                    0{idx + 1}
                                </div>

                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-900 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                                    <step.icon size={28} />
                                </div>
                                <h4 className="text-base font-black text-slate-900 uppercase tracking-widest mb-3">{step.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Esteemed Clients Section */}
            <section className="py-10 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
                    <div className="text-center">
                        <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Trusted by Industry Leaders</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">OUR TOP ESTEEMED CLIENTS</h2>
                        <div className="w-16 h-1 bg-orange-600 mx-auto mt-4 rounded-full" />
                    </div>
                </div>

                <div className="flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap py-4 [animation-duration:40s]">
                        {[
                            { name: "HDFC BANK", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo_2023.svg/512px-HDFC_Bank_Logo_2023.svg.png", icon: Building2, color: "bg-blue-700" },
                            { name: "Goregaon Sports Club", logo: "https://gsc.in/wp-content/uploads/2016/11/logo.png", icon: Trophy, color: "bg-slate-900" },
                            { name: "KOTAK MAHINDRA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kotak_Mahindra_Bank_logo.svg/512px-Kotak_Mahindra_Bank_logo.svg.png", icon: Building, color: "bg-red-600" },
                            { name: "J.P.MORGAN", logo: null, icon: Landmark, color: "bg-slate-800" },
                            { name: "RELIANCE INDUSTRIES", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png", icon: Factory, color: "bg-blue-800" },
                            { name: "TOYOTA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Toyota_Eu_Logo.svg/512px-Toyota_Eu_Logo.svg.png", icon: CarFront, color: "bg-red-700" },
                            { name: "DECATHLON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.svg/512px-Decathlon_Logo.svg.png", icon: Bike, color: "bg-cyan-600" },
                            { name: "AIRTEL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Airtel_logo.svg/512px-Airtel_logo.svg.png", icon: Signal, color: "bg-red-600" },
                            { name: "ASIAN PAINTS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Asian_Paints_logo.svg/512px-Asian_Paints_logo.svg.png", icon: Palette, color: "bg-yellow-500" },
                            { name: "BAJAJ ALLIANZ", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bajaj_Allianz_logo.svg/512px-Bajaj_Allianz_logo.svg.png", icon: ShieldCheck, color: "bg-blue-600" },
                            { name: "GM SWITCHES", logo: "https://gmmodular.com/assets/img/logo.png", icon: Zap, color: "bg-red-700" },
                            { name: "ROTARY", logo: null, icon: Globe2, color: "bg-yellow-600" },
                            { name: "DMART", logo: null, icon: ShoppingCart, color: "bg-green-700" }
                        ].map((client, idx) => (
                            <ClientMarqueeItem key={idx} client={client} size="medium" />
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[
                            { name: "HDFC BANK", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo_2023.svg/512px-HDFC_Bank_Logo_2023.svg.png", icon: Building2, color: "bg-blue-700" },
                            { name: "Goregaon Sports Club", logo: "https://gsc.in/wp-content/uploads/2016/11/logo.png", icon: Trophy, color: "bg-slate-900" },
                            { name: "KOTAK MAHINDRA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kotak_Mahindra_Bank_logo.svg/512px-Kotak_Mahindra_Bank_logo.svg.png", icon: Building, color: "bg-red-600" },
                            { name: "J.P.MORGAN", logo: null, icon: Landmark, color: "bg-slate-800" },
                            { name: "RELIANCE INDUSTRIES", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Reliance_Industries_Logo.svg/512px-Reliance_Industries_Logo.svg.png", icon: Factory, color: "bg-blue-800" },
                            { name: "TOYOTA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Toyota_Eu_Logo.svg/512px-Toyota_Eu_Logo.svg.png", icon: CarFront, color: "bg-red-700" },
                            { name: "DECATHLON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Decathlon_Logo.svg/512px-Decathlon_Logo.svg.png", icon: Bike, color: "bg-cyan-600" },
                            { name: "AIRTEL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Airtel_logo.svg/512px-Airtel_logo.svg.png", icon: Signal, color: "bg-red-600" },
                            { name: "ASIAN PAINTS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Asian_Paints_logo.svg/512px-Asian_Paints_logo.svg.png", icon: Palette, color: "bg-yellow-500" },
                            { name: "BAJAJ ALLIANZ", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bajaj_Allianz_logo.svg/512px-Bajaj_Allianz_logo.svg.png", icon: ShieldCheck, color: "bg-blue-600" },
                            { name: "GM SWITCHES", logo: "https://gmmodular.com/assets/img/logo.png", icon: Zap, color: "bg-red-700" },
                            { name: "ROTARY", logo: null, icon: Globe2, color: "bg-yellow-600" },
                            { name: "DMART", logo: null, icon: ShoppingCart, color: "bg-green-700" }
                        ].map((client, idx) => (
                            <ClientMarqueeItem key={`dup-${idx}`} client={client} size="medium" />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
