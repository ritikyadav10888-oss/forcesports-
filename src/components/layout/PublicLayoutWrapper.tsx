"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Layout from './Layout';

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/force-hq');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <Layout>
            {children}
        </Layout>
    );
}
