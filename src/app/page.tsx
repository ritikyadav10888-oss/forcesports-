import type { Metadata } from 'next';
import HomePage from '../views/Home/HomePage';

export const metadata: Metadata = {
    title: 'Force Sports & Wears India | Custom Sports Uniforms & Apparel Mumbai',
    description: 'Premium custom sports uniforms, jerseys, and teamwear manufacturer based in Mumbai. Bulk B2B orders for schools, cricket, football, kabaddi and corporate teams. Sportex fabric, pan-India delivery.',
    keywords: 'custom sports uniforms, sports apparel manufacturer Mumbai, bulk jersey orders, cricket uniform, football jersey, kabaddi uniform, custom teamwear India',
    openGraph: {
        title: 'Force Sports & Wears India | Custom Sports Uniforms',
        description: 'Premium custom sports uniforms & teamwear manufacturer. Bulk B2B orders for schools, cricket, football, and corporates. Mumbai-based, pan-India delivery.',
        type: 'website',
        locale: 'en_IN',
        siteName: 'Force Sports & Wears India',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Force Sports & Wears India | Custom Sports Uniforms',
        description: 'Premium custom sports uniforms & teamwear manufacturer. Bulk B2B orders for schools, cricket, football, and corporates.',
    },
};

export default function Page() { return <HomePage />; }