import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATALOG_DATA } from '../../data/catalogData';
import { PRODUCTS } from '../../data/products';
import { ChevronLeft, ChevronRight, Maximize2, X, Download, BookOpen } from 'lucide-react';

const INTERACTIVE_COLORS = [
    { name: 'Sky Blue', hex: '#7dd3fc', files: ['sky blue.png', 'sky bule.png', 'sky.png'] },
    { name: 'Red', hex: '#ef4444', files: ['red.png'] },
    { name: 'Lemon', hex: '#fde047', files: ['lemon.png'] },
    { name: 'Bisleri', hex: '#22d3ee', files: ['bisleri.png'] },
    { name: 'India Blue', hex: '#1e40af', files: ['india blue.png', 'inidia bule.png'] },
    { name: 'Maroon', hex: '#7f1d1d', files: ['maroon.png'] },
    { name: 'Navy Blue', hex: '#1e3a8a', files: ['navy blue.png'] },
    { name: 'Pink', hex: '#f472b6', files: ['pink.png'] },
    { name: 'Royal Blue', hex: '#2563eb', files: ['royal blue.png', 'royal bule.png'] },
    { name: 'Orange', hex: '#f97316', files: ['orange.png'] },
    { name: 'Firozi', hex: '#0d9488', files: ['firozi.png'] },
];

const VariantDot = ({ color, folder, selectedColor, onSelect }: any) => {
    const [exists, setExists] = useState<boolean | null>(null);
    const [actualFile, setActualFile] = useState<string | null>(null);

    useEffect(() => {
        const checkFiles = async () => {
            for (const file of color.files) {
                const img = new Image();
                img.src = `${folder}/${file}`;
                const success = await new Promise((resolve) => {
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(false);
                });
                if (success) {
                    setExists(true);
                    setActualFile(file);
                    return;
                }
            }
            setExists(false);
        };
        checkFiles();
    }, [folder, color.files]);

    if (exists === false) return null;

    return (
        <button
            onClick={() => onSelect(actualFile)}
            className={`w-4 h-4 rounded-full border-2 transition-transform hover:scale-125 ${selectedColor === actualFile ? 'border-cyan-400' : 'border-white/20'}`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
        />
    );
};

const CatalogPage = () => {
    const catalogKeys = Object.keys(CATALOG_DATA) as (keyof typeof CATALOG_DATA)[];
    const [selectedCatalog, setSelectedCatalog] = useState<keyof typeof CATALOG_DATA>(catalogKeys[0]);
    const [currentPage, setCurrentPage] = useState(0);
    const [viewMode, setViewMode] = useState<'grid' | 'reader'>('reader');
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const currentCatalog = CATALOG_DATA[selectedCatalog];
    const totalPages = currentCatalog.pages.length;

    const getPageSrc = (page: any, colorFile?: string | null) => {
        if (typeof page === 'string') return page;
        if (colorFile) return `${page.folder}/${colorFile}`;
        return page.master;
    };

    const nextPage = useCallback(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setSelectedColor(null);
    }, [totalPages]);
    const prevPage = useCallback(() => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
        setSelectedColor(null);
    }, [totalPages]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (fullscreenImage) return; // Don't flip pages if viewing fullscreen
            if (e.key === 'ArrowRight') nextPage();
            if (e.key === 'ArrowLeft') prevPage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextPage, prevPage, fullscreenImage]);

    return (
        <div className="bg-slate-900 min-h-screen pt-16 text-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Interactive Experience</span>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
                        Product <span className="text-cyan-500">Catalogs</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
                        Explore our comprehensive range of high-performance athletic wear and custom team kits through our digital lookbooks.
                    </p>
                </motion.div>

                {/* Catalog Switcher */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {catalogKeys.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCatalog(cat);
                                setCurrentPage(0);
                            }}
                            className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                selectedCatalog === cat
                                    ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-900/20'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                            }`}
                        >
                            {CATALOG_DATA[cat].title}
                        </button>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setViewMode('reader')}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors ${viewMode === 'reader' ? 'text-cyan-400' : 'text-slate-500'}`}
                        >
                            <BookOpen size={14} /> Reader View
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors ${viewMode === 'grid' ? 'text-cyan-400' : 'text-slate-500'}`}
                        >
                            <Maximize2 size={14} /> Grid View
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            {currentCatalog.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 pr-4">
                            <button 
                                onClick={prevPage}
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-600 transition-colors text-white"
                                aria-label="Previous Page"
                            >
                                <ChevronLeft size={14} />
                            </button>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                Page {currentPage + 1} / {totalPages}
                            </span>
                            <button 
                                onClick={nextPage}
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-600 transition-colors text-white"
                                aria-label="Next Page"
                            >
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {viewMode === 'reader' ? (
                            <motion.div
                                key="reader"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative group max-w-5xl w-full">
                                    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl relative shadow-cyan-900/10 min-h-[40vh] max-h-[75vh] flex items-center justify-center">
                                        <div className="absolute inset-0 bg-slate-800/50 animate-pulse flex items-center justify-center">
                                            <BookOpen className="text-slate-700" size={32} />
                                        </div>
                                        <img
                                            src={getPageSrc(currentCatalog.pages[currentPage], selectedColor)}
                                            alt={`Page ${currentPage + 1}`}
                                            className="max-h-[75vh] w-auto h-auto object-contain relative z-10 opacity-0 transition-opacity duration-300 cursor-zoom-in"
                                            onLoad={(e) => {
                                                (e.target as HTMLImageElement).classList.remove('opacity-0');
                                                (e.target as HTMLImageElement).classList.add('opacity-100');
                                            }}
                                            onClick={() => setFullscreenImage(getPageSrc(currentCatalog.pages[currentPage], selectedColor))}
                                        />
                                        
                                        {/* Navigation Overlays */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); prevPage(); }}
                                            aria-label="Previous Page"
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white opacity-40 group-hover:opacity-100 transition-opacity hover:bg-cyan-600 z-20"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); nextPage(); }}
                                            aria-label="Next Page"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white opacity-40 group-hover:opacity-100 transition-opacity hover:bg-cyan-600 z-20"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        {/* Color Switcher Overlay */}
                                        {(currentCatalog as any).isInteractive && (
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 justify-center z-30 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 group-hover:bg-black/60 transition-all w-max max-w-[90%]">
                                                <button
                                                    onClick={() => setSelectedColor(null)}
                                                    className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 transition-transform hover:scale-125 flex-shrink-0 ${!selectedColor ? 'border-cyan-400' : 'border-white/20'}`}
                                                    style={{ backgroundColor: '#fff' }}
                                                    title="Master View"
                                                />
                                                {(() => {
                                                    const prod = PRODUCTS.find((p: any) => p.productCode === `#3D-INV-${(currentPage + 1).toString().padStart(2, '0')}`);
                                                    const gallery = prod?.gallery || [];
                                                    return gallery.map((item: string, idx: number) => {
                                                        const filename = item.split('/').pop() || '';
                                                        return (
                                                            <button
                                                                key={filename}
                                                                onClick={() => setSelectedColor(filename)}
                                                                className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 transition-transform hover:scale-125 flex-shrink-0 overflow-hidden ${selectedColor === filename ? 'border-cyan-400' : 'border-white/20'}`}
                                                                title={`Variant ${idx + 1}`}
                                                            >
                                                                <img src={item} alt={`Variant ${idx + 1}`} className="w-full h-full object-cover object-top" />
                                                            </button>
                                                        );
                                                    });
                                                })()}
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Page Preview/Strip */}
                                    <div className="flex gap-2 mt-6 overflow-x-auto pb-4 px-2 scrollbar-none">
                                        {currentCatalog.pages.map((page, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentPage(idx)}
                                                aria-label={`Go to page ${idx + 1}`}
                                                className={`flex-shrink-0 w-16 aspect-[1/1.4] rounded-lg overflow-hidden border-2 transition-all ${
                                                    currentPage === idx ? 'border-cyan-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                                                }`}
                                            >
                                                <img src={getPageSrc(page)} alt="" className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
                            >
                                {currentCatalog.pages.map((page, idx) => (
                                    <div
                                        key={idx}
                                        className="group aspect-[1/1.4] bg-slate-800 rounded-xl overflow-hidden relative cursor-pointer"
                                        onClick={() => {
                                            setCurrentPage(idx);
                                            setViewMode('reader');
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                                        <img 
                                            src={getPageSrc(page)} 
                                            alt="" 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 opacity-0" 
                                            onLoad={(e) => {
                                                (e.target as HTMLImageElement).classList.remove('opacity-0');
                                                (e.target as HTMLImageElement).classList.add('opacity-100');
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full text-white">
                                                Page {idx + 1}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {fullscreenImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setFullscreenImage(null)}
                            aria-label="Close fullscreen"
                            className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-white"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={fullscreenImage}
                            alt="Fullscreen view"
                            className="max-w-full max-h-full object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CatalogPage;
