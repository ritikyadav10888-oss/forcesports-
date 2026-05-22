const fs = require('fs');
let content = fs.readFileSync('src/views/Catalog/CatalogPage.tsx', 'utf8');

const oldTabs = `                {/* Catalog Switcher */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {catalogKeys.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCatalog(cat);
                                setCurrentPage(0);
                            }}
                            className={\`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all \${
                                selectedCatalog === cat
                                    ? 'bg-cyan-600 text-white shadow-xl shadow-cyan-900/20'
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                            }\`}
                        >
                            {CATALOG_DATA[cat].title}
                        </button>
                    ))}
                </div>`;

const newTabs = `                {/* Catalog Switcher */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 p-2 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md max-w-fit mx-auto relative z-20">
                    {catalogKeys.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCatalog(cat);
                                setCurrentPage(0);
                            }}
                            className={\`relative px-6 py-3 md:px-8 md:py-4 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all group overflow-hidden \${
                                selectedCatalog === cat
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-white'
                            }\`}
                        >
                            {selectedCatalog === cat && (
                                <motion.div 
                                    layoutId="activeCatalog" 
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2 group-active:scale-95 transition-transform">
                                {CATALOG_DATA[cat].title}
                            </span>
                        </button>
                    ))}
                </div>`;

content = content.replace(oldTabs, newTabs);

const oldReader = `                                <div className="relative group max-w-5xl w-full">
                                    <div className={\`\${is3D ? 'bg-white' : 'bg-slate-800'} rounded-2xl overflow-hidden shadow-2xl relative shadow-cyan-900/10 min-h-[40vh] max-h-[75vh] flex items-center justify-center\`}>
                                        <div className={\`absolute inset-0 \${is3D ? 'bg-slate-100' : 'bg-slate-800/50'} animate-pulse flex items-center justify-center\`}>
                                            <BookOpen className={is3D ? 'text-slate-300' : 'text-slate-700'} size={32} />
                                        </div>
                                        <img
                                            src={getPageSrc(currentCatalog.pages[currentPage], selectedColor)}
                                            alt={\`Page \${currentPage + 1}\`}
                                            className="max-h-[75vh] w-auto h-auto object-contain relative z-10 opacity-0 transition-opacity duration-300 cursor-zoom-in"
                                            onLoad={(e) => {
                                                (e.target as HTMLImageElement).classList.remove('opacity-0');
                                                (e.target as HTMLImageElement).classList.add('opacity-100');
                                            }}
                                            onClick={() => setFullscreenImage(getPageSrc(currentCatalog.pages[currentPage], selectedColor))}
                                        />`;

const newReader = `                                <div className="relative group max-w-5xl w-full perspective-1000">
                                    {/* Ambient Glow */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                    
                                    <motion.div 
                                        initial={{ rotateX: 5, y: 10 }}
                                        animate={{ rotateX: 0, y: 0 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className={\`relative \${is3D ? 'bg-white' : 'bg-slate-900'} rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 min-h-[40vh] max-h-[75vh] flex items-center justify-center group-hover:border-cyan-500/30 transition-colors duration-500\`}
                                    >
                                        <div className={\`absolute inset-0 \${is3D ? 'bg-slate-100/50' : 'bg-slate-800/50'} animate-pulse flex items-center justify-center\`}>
                                            <BookOpen className={is3D ? 'text-slate-300' : 'text-slate-700'} size={48} />
                                        </div>
                                        
                                        <motion.img
                                            key={\`\${selectedCatalog}-\${currentPage}-\${selectedColor}\`}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4 }}
                                            src={getPageSrc(currentCatalog.pages[currentPage], selectedColor)}
                                            alt={\`Page \${currentPage + 1}\`}
                                            className="max-h-[75vh] w-auto h-auto object-contain relative z-10 cursor-zoom-in shadow-2xl"
                                            onClick={() => setFullscreenImage(getPageSrc(currentCatalog.pages[currentPage], selectedColor))}
                                        />`;

content = content.replace(oldReader, newReader);

content = content.replace(/                                    <\/div>\s*<div className="flex gap-2 mt-6 overflow-x-auto/, '                                    </motion.div>\n                                    \n                                    {/* Page Preview/Strip */}\n                                    <div className="flex gap-2 mt-6 overflow-x-auto');

const oldGrid = `                                    <div
                                        key={idx}
                                        className={\`group aspect-[1/1.4] \${is3D ? 'bg-white' : 'bg-slate-800'} rounded-xl overflow-hidden relative cursor-pointer\`}
                                        onClick={() => {
                                            setCurrentPage(idx);
                                            setViewMode('reader');
                                        }}
                                    >
                                        <div className={\`absolute inset-0 \${is3D ? 'bg-slate-100' : 'bg-slate-800'} animate-pulse\`} />
                                        <img 
                                            src={getPageSrc(page)} 
                                            alt="" 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 opacity-0" 
                                            loading="lazy"
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
                                    </div>`;

const newGrid = `                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className={\`group aspect-[1/1.4] \${is3D ? 'bg-white' : 'bg-slate-800'} rounded-2xl overflow-hidden relative cursor-pointer shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30 border border-transparent transition-all duration-300\`}
                                        onClick={() => {
                                            setCurrentPage(idx);
                                            setViewMode('reader');
                                        }}
                                    >
                                        <div className={\`absolute inset-0 \${is3D ? 'bg-slate-100' : 'bg-slate-800'} animate-pulse\`} />
                                        <img 
                                            src={getPageSrc(page)} 
                                            alt="" 
                                            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 opacity-0" 
                                            loading="lazy"
                                            onLoad={(e) => {
                                                (e.target as HTMLImageElement).classList.remove('opacity-0');
                                                (e.target as HTMLImageElement).classList.add('opacity-100');
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-20 pb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/20">
                                                View Page {idx + 1}
                                            </span>
                                        </div>
                                    </motion.div>`;

content = content.replace(oldGrid, newGrid);

fs.writeFileSync('src/views/Catalog/CatalogPage.tsx', content);
