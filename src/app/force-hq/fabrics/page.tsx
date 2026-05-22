"use client";

import React, { useEffect, useState, useRef } from 'react';
import { db, storage } from '../../../lib/firebase';
import { collection, query, onSnapshot, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loader2, Plus, Edit2, Trash2, Image as ImageIcon, X, Save, ArrowLeft, UploadCloud, Database } from 'lucide-react';
import imageCompression from 'browser-image-compression';
import { SPORTEX_FABRICS } from '../../../data/sportexFabrics';

interface Fabric {
    id: string;
    name: string;
    gsm: string;
    desc: string;
    use: string;
    printing?: string;
    file: string; // URL of image
    createdAt?: any;
}

const PRINTING_METHODS = ['Sublimation', 'Screen Print', 'DTF', 'Embroidery', 'Vinyl', 'Digital', 'Discharge'];
const BEST_USES = ['Jerseys', 'Training Tees', 'Practice Kits', 'Match-day Kits', 'Corporate Polos', 'Winter Layers', 'Tracksuits', 'Compression Wear', 'Shorts', 'Jackets', 'Pants', 'Base Layers'];

export default function FabricsManager() {
    const [fabrics, setFabrics] = useState<Fabric[]>([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'list' | 'form'>('list');
    const [saving, setSaving] = useState(false);
    
    // Form State
    const [currentId, setCurrentId] = useState('');
    const [formData, setFormData] = useState<Partial<Fabric>>({});
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const q = query(collection(db, 'fabrics'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Fabric[];
            setFabrics(data);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const resetForm = () => {
        setCurrentId('');
        setFormData({});
        setImageFile(null);
        setImagePreview('');
        setView('list');
    };

    const handleEdit = (fabric: Fabric) => {
        setCurrentId(fabric.id);
        setFormData(fabric);
        setImagePreview(fabric.file || '');
        setImageFile(null);
        setView('form');
    };

    const handleDelete = async (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (confirm('Delete this fabric permanently?')) {
            await deleteDoc(doc(db, 'fabrics', id));
        }
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert('File is too large! Please select an image under 5MB.');
            return;
        }

        try {
            const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1200, useWebWorker: true };
            const compressedFile = await imageCompression(file, options);
            setImageFile(compressedFile);
            
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(compressedFile);
        } catch (error) {
            console.error('Compression error:', error);
            alert('Failed to compress image.');
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            let imageUrl = formData.file || '';

            if (imageFile) {
                const imageRef = ref(storage, `fabrics/${Date.now()}_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(imageRef);
            }

            const docId = currentId || `fab-${Date.now()}`;
            await setDoc(doc(db, 'fabrics', docId), {
                ...formData,
                file: imageUrl,
                createdAt: currentId ? formData.createdAt : serverTimestamp()
            });

            resetForm();
        } catch (error) {
            console.error('Error saving:', error);
            alert('Error saving fabric.');
        } finally {
            setSaving(false);
        }
    };

    const migrateExistingFabrics = async () => {
        if (!confirm('This will copy the static SPORTEX_FABRICS into Firebase. Are you sure?')) return;
        setSaving(true);
        try {
            for (const fabric of SPORTEX_FABRICS) {
                const docId = `fab-${fabric.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                const payload = {
                    name: fabric.name,
                    gsm: fabric.gsm,
                    desc: fabric.desc,
                    use: fabric.use || '',
                    printing: fabric.printing || '',
                    file: fabric.file.startsWith('/') ? fabric.file : `/Sportex Fabrics/${fabric.file}`,
                    createdAt: serverTimestamp()
                };
                await setDoc(doc(db, 'fabrics', docId), payload);
            }
            alert('Migration complete!');
        } catch (error) {
            console.error('Migration error:', error);
            alert('Migration failed.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-cyan-600" /></div>;

    if (view === 'form') {
        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <button onClick={resetForm} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Back to Fabrics
                    </button>
                    <h1 className="text-2xl font-black uppercase text-slate-900">{currentId ? 'Edit Fabric' : 'Add New Fabric'}</h1>
                </div>

                <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Fabric Name *</label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g., Polyester" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">GSM *</label>
                            <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900" value={formData.gsm || ''} onChange={e => setFormData({...formData, gsm: e.target.value})} placeholder="e.g., 180" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Short Description *</label>
                            <textarea required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-cyan-500 text-slate-900 h-24" value={formData.desc || ''} onChange={e => setFormData({...formData, desc: e.target.value})} placeholder="Brief overview..." />
                        </div>
                        <div className="space-y-2 relative">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Best Uses *</label>
                            <div className="relative group/uses">
                                <div className="w-full min-h-[56px] p-4 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-cyan-500 text-slate-900 cursor-pointer flex flex-wrap gap-2 items-center">
                                    {formData.use ? formData.use.split(', ').filter(Boolean).map(usage => (
                                        <span key={usage} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                            {usage}
                                            <X className="w-3 h-3 hover:text-amber-900 cursor-pointer" onClick={(e) => {
                                                e.stopPropagation();
                                                const current = formData.use ? formData.use.split(', ').filter(Boolean) : [];
                                                setFormData({ ...formData, use: current.filter(m => m !== usage).join(', ') });
                                            }}/>
                                        </span>
                                    )) : <span className="text-slate-400">Select uses...</span>}
                                </div>
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 opacity-0 invisible group-hover/uses:opacity-100 group-hover/uses:visible transition-all p-2 flex flex-col gap-1 max-h-48 overflow-y-auto">
                                    {BEST_USES.map(usage => {
                                        const isSelected = (formData.use || '').includes(usage);
                                        return (
                                            <label key={usage} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => {
                                                        const current = formData.use ? formData.use.split(', ').filter(Boolean) : [];
                                                        let next;
                                                        if (isSelected) {
                                                            next = current.filter(m => m !== usage);
                                                        } else {
                                                            next = [...current, usage];
                                                        }
                                                        setFormData({ ...formData, use: next.join(', ') });
                                                    }}
                                                    className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-500"
                                                />
                                                <span className="text-sm font-bold text-slate-700">{usage}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 md:col-span-2 relative">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Supported Printing Methods</label>
                            <div className="relative group">
                                <div className="w-full min-h-[56px] p-4 bg-slate-50 border border-slate-200 rounded-xl focus-within:border-cyan-500 text-slate-900 cursor-pointer flex flex-wrap gap-2 items-center">
                                    {formData.printing ? formData.printing.split(', ').filter(Boolean).map(method => (
                                        <span key={method} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                                            {method}
                                            <X className="w-3 h-3 hover:text-cyan-900 cursor-pointer" onClick={(e) => {
                                                e.stopPropagation();
                                                const current = formData.printing ? formData.printing.split(', ').filter(Boolean) : [];
                                                setFormData({ ...formData, printing: current.filter(m => m !== method).join(', ') });
                                            }}/>
                                        </span>
                                    )) : <span className="text-slate-400">Select methods...</span>}
                                </div>
                                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 flex flex-col gap-1 max-h-48 overflow-y-auto">
                                    {PRINTING_METHODS.map(method => {
                                        const isSelected = (formData.printing || '').includes(method);
                                        return (
                                            <label key={method} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => {
                                                        const current = formData.printing ? formData.printing.split(', ').filter(Boolean) : [];
                                                        let next;
                                                        if (isSelected) {
                                                            next = current.filter(m => m !== method);
                                                        } else {
                                                            next = [...current, method];
                                                        }
                                                        setFormData({ ...formData, printing: next.join(', ') });
                                                    }}
                                                    className="w-4 h-4 text-cyan-500 rounded border-slate-300 focus:ring-cyan-500"
                                                />
                                                <span className="text-sm font-bold text-slate-700">{method}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex justify-between">
                            <span>Swatch Image *</span>
                            <span className="text-amber-600">Auto-Compresses files up to 5MB</span>
                        </label>
                        <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-all flex flex-col items-center justify-center min-h-[200px]">
                            {imagePreview ? <img src={imagePreview} alt="Preview" className="h-48 object-cover rounded-lg shadow-sm" /> : <>
                                <UploadCloud className="w-12 h-12 text-slate-300 mb-4" />
                                <p className="text-sm font-bold text-slate-600">Click to upload swatch</p>
                                <p className="text-xs text-slate-400 mt-1">JPEG, PNG up to 5MB</p>
                            </>}
                            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex justify-end">
                        <button type="submit" disabled={saving || (!imagePreview && !formData.file)} className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-slate-800 disabled:opacity-50">
                            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />} {saving ? 'Saving...' : 'Save Fabric'}
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Fabrics Manager</h1>
                    <p className="text-slate-500 mt-1">Manage textile swatches and technical data</p>
                </div>
                <div className="flex gap-4">
                    {fabrics.length === 0 && (
                        <button onClick={migrateExistingFabrics} disabled={saving} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <Database className="w-4 h-4" /> Migrate Data
                        </button>
                    )}
                    <button onClick={() => setView('form')} className="bg-amber-500 text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-amber-600 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Add Fabric
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                {fabrics.length === 0 ? (
                    <div className="p-12 text-center text-slate-400">
                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2">No fabrics found</h3>
                        <p className="text-sm">Click the Add Fabric button to create your first item.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {fabrics.map(fab => (
                            <div key={fab.id} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group bg-slate-50">
                                <div className="h-48 bg-slate-200 relative">
                                    {fab.file ? (
                                        <img src={fab.file} alt={fab.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400"><ImageIcon className="w-8 h-8" /></div>
                                    )}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <button onClick={() => handleEdit(fab)} className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"><Edit2 className="w-4 h-4" /></button>
                                        <button onClick={(e) => handleDelete(fab.id, e)} className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-black text-slate-900 uppercase tracking-widest">{fab.name}</h4>
                                        <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-200">{fab.gsm} GSM</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium mb-3">{fab.desc}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-t border-slate-200 pt-3">
                                        <span className="text-cyan-600">Uses:</span> {fab.use}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
