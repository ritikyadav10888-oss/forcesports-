import { Product, PRODUCTS } from '../data/products';

const SPEC_HIGHLIGHT_KEYS = ['Material', 'Fabric Tech', 'Fabric', 'GSM', 'Fit', 'Usage'] as const;

/** Normalize arrays and text so UI never breaks on partial Firestore docs */
export function normalizeProduct(product: Product): Product {
    return {
        ...product,
        description: product.description?.trim() || '',
        longDescription: product.longDescription?.trim() || product.description?.trim() || '',
        features: Array.isArray(product.features) ? product.features.filter(Boolean) : [],
        specs: product.specs && typeof product.specs === 'object' ? product.specs : {},
        customizationOptions: Array.isArray(product.customizationOptions)
            ? product.customizationOptions.filter(Boolean)
            : undefined,
        fabrics: Array.isArray(product.fabrics) ? product.fabrics.filter(Boolean) : undefined,
        gsms: Array.isArray(product.gsms) ? product.gsms.filter(Boolean) : undefined,
        gallery: Array.isArray(product.gallery) ? product.gallery.filter(Boolean) : undefined,
    };
}

/** Prefer Firestore overrides but keep rich static catalog fields when admin data is sparse */
export function mergeProductWithLocal(remote: Product): Product {
    const local = PRODUCTS.find((p) => p.id === remote.id);
    const base = local ? { ...local, ...remote } : remote;

    const merged: Product = {
        ...base,
        title: remote.title || local?.title || base.title,
        description: remote.description || local?.description || '',
        longDescription: remote.longDescription || local?.longDescription || remote.description || local?.description || '',
        image: remote.image || local?.image || '',
        imageBack: remote.imageBack ?? local?.imageBack,
        productCode: remote.productCode || local?.productCode,
        brand: remote.brand || local?.brand,
        category: remote.category || local?.category || 'T-Shirts',
        sport: remote.sport || local?.sport,
        usageType: remote.usageType || local?.usageType,
        features:
            remote.features?.length ? remote.features : local?.features ?? [],
        specs: { ...(local?.specs ?? {}), ...(remote.specs ?? {}) },
        sizeCharts: remote.sizeCharts ?? local?.sizeCharts,
        customizationOptions: remote.customizationOptions?.length
            ? remote.customizationOptions
            : local?.customizationOptions,
        gallery: remote.gallery?.length ? remote.gallery : local?.gallery,
        fabrics: remote.fabrics?.length ? remote.fabrics : local?.fabrics,
        gsms: remote.gsms?.length ? remote.gsms : local?.gsms,
    };

    return normalizeProduct(merged);
}

export function getSpecHighlights(specs: Record<string, string>, limit = 4): [string, string][] {
    const entries = Object.entries(specs || {}).filter(([, v]) => v?.trim());
    const ordered: [string, string][] = [];

    for (const key of SPEC_HIGHLIGHT_KEYS) {
        const val = specs[key];
        if (val?.trim()) ordered.push([key, val]);
    }
    for (const [k, v] of entries) {
        if (!ordered.some(([ok]) => ok === k)) ordered.push([k, v]);
    }
    return ordered.slice(0, limit);
}
