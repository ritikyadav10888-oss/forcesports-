import ProductDetailPage from '../../../views/Products/ProductDetailPage';
import ProductPage from '../../../views/Products/ProductPage';

const SPORTS = ['badminton', 'cricket', 'football', 'volleyball', 'kabaddi', 'pickleball', 'tennis'];

export default async function Page({ params }: { params: Promise<{ productId: string }> | { productId: string } }) {
    // Await params if it's a promise (Next.js 15) or just use it directly
    const resolvedParams = await Promise.resolve(params);
    const productId = resolvedParams?.productId || '';
    
    const isSport = SPORTS.includes(productId.toLowerCase());
    
    if (isSport) {
        return <ProductPage initialSport={productId} />;
    }

    return <ProductDetailPage />;
}