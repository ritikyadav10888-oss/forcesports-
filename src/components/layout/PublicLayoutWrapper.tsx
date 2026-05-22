"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Layout from './Layout';
import LeadCaptureForm from '../forms/LeadCaptureForm';

export default function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/force-hq');
    const hideLeadForm = pathname === '/inquiry';

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <Layout>
            {children}
            {!hideLeadForm && <LeadCaptureForm />}
        </Layout>
    );
}
