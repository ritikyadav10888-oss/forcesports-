import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATALOG_DATA } from '../../data/catalogData';
import { ChevronLeft, ChevronRight, Maximize2, X, Download, BookOpen } from 'lucide-react';

const CatalogPage = () => {
    const [selectedCatalog, setSelectedCatalog] = useState<'jabraat' | 'shatak'>('jabraat');
    const [currentPage, setCurrentPage] = useState(0);
    const [viewMode, setViewMode] = useState<'grid' | 'reader'>('reader');
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    const currentCatalog = CATALOG_DATA[selectedCatalog];
    const totalPages = currentCatalog.pages.length;

    const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
    const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

    return (
        <div className="bg-slate-900 min-h-screen pt-20 text-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Interactive Experience</span>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">
                        Product <span className="text-cyan-500">Catalogs</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
                        Explore our comprehensive range of high-performance athletic wear and custom team kits through our digital lookbooks.
                    </p>
                </motion.div>

                {/* Catalog Switcher */}
                <div className="flex justify-center gap-4 mb-12">
                    {(['jabraat', 'shatak'] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCatalog(cat);
                                setCurrentPage(0);
                            }}
                            className={`px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
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
                <div className="flex items-center justify-between mb-8 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setViewMode('reader')}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors ${viewMode === 'reader' ? 'text-cyan-400' : 'text-slate-500'}`}
                        >
                            <BookOpen size={16} /> Reader View
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors ${viewMode === 'grid' ? 'text-cyan-400' : 'text-slate-500'}`}
                        >
                            <Maximize2 size={16} /> Grid View
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            {currentCatalog.description}
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                            Page {currentPage + 1} / {totalPages}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative min-h-[60vh]">
                    <AnimatePresence mode="wait">
                        {viewMode === 'reader' ? (
                            <motion.div
                                key="reader"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center"
                            >
                                <div className="relative group max-w-4xl w-full">
                                    <div className="aspect-[1/1.4] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
                                        <img
                                            src={currentCatalog.pages[currentPage]}
                                            alt={`Page ${currentPage + 1}`}
                                            className="w-full h-full object-contain"
                                            onClick={() => setFullscreenImage(currentCatalog.pages[currentPage])}
                                        />
                                        
                                        {/* Navigation Overlays */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); prevPage(); }}
                                            aria-label="Previous Page"
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-600"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); nextPage(); }}
                                            aria-label="Next Page"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-cyan-600"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>
                                    
                                    {/* Page Preview/Strip */}
                                    <div className="flex gap-2 mt-8 overflow-x-auto pb-4 px-2 scrollbar-none">
                                        {currentCatalog.pages.map((page, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentPage(idx)}
                                                aria-label={`Go to page ${idx + 1}`}
                                                className={`flex-shrink-0 w-16 aspect-[1/1.4] rounded-lg overflow-hidden border-2 transition-all ${
                                                    currentPage === idx ? 'border-cyan-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                                                }`}
                                            >
                                                <img src={page} alt="" className="w-full h-full object-cover" />
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
                                        <img src={page} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full">
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
