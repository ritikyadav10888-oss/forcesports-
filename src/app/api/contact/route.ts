import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BRAND_DETAILS } from '../../../data/brandData';

export async function POST(req: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');
        const body = await req.json();
        const {
            fullName, email, phone, quantity, productType, message, source,
            // Customize context fields
            product, productCode, fabric, placement, logoSize
        } = body;

        if (!fullName || !email) {
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
        }

        const isFromCustomize = source === 'Customize Button';
        const emailSubject = isFromCustomize
            ? `🎽 Customize Request: ${product || productType || 'Product'} — ${fullName}`
            : `📋 New Lead: ${productType || 'General Inquiry'} from ${fullName}`;

        // Build the customize context block (only shown if from Customize button)
        const customizeContextBlock = isFromCustomize ? `
            <div style="margin-top: 20px; background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%); padding: 20px; border-radius: 12px; color: white;">
                <p style="margin: 0 0 12px 0; font-weight: 900; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.8;">🎨 Product Customization Details</p>
                <table style="width: 100%; border-collapse: collapse;">
                    ${product ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Product</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${product}</td>
                    </tr>` : ''}
                    ${productCode ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Product Code</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold; font-family: monospace;">${productCode}</td>
                    </tr>` : ''}
                    ${fabric ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Fabric</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${fabric}</td>
                    </tr>` : ''}
                    ${placement ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Logo Placement</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${placement}</td>
                    </tr>` : ''}
                    ${logoSize ? `
                    <tr>
                        <td style="padding: 6px 10px 6px 0; font-size: 12px; opacity: 0.8; white-space: nowrap;">Logo Size</td>
                        <td style="padding: 6px 0; font-size: 14px; font-weight: bold;">${logoSize}</td>
                    </tr>` : ''}
                </table>
            </div>
        ` : '';

        const htmlContent = `
            <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 620px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">

                <!-- Header -->
                <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 32px 24px; text-align: center;">
                    <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: 900; letter-spacing: 3px; color: #06b6d4; text-transform: uppercase;">Force Sports & Wears India</p>
                    <h1 style="margin: 0; font-size: 26px; font-weight: 900; color: white; letter-spacing: -0.5px;">
                        ${isFromCustomize ? '🎽 New Customize Request' : '📋 New Inquiry Received'}
                    </h1>
                    <p style="margin: 10px 0 0; font-size: 13px; color: #94a3b8;">
                        Via: <strong style="color: #e2e8f0;">${source || 'Website Contact Form'}</strong>
                    </p>
                </div>

                <!-- Body -->
                <div style="padding: 32px;">

                    <!-- Customize Context (shown only for Customize button leads) -->
                    ${customizeContextBlock}

                    <!-- Customer Details -->
                    <div style="margin-top: ${isFromCustomize ? '20px' : '0'}; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
                        <div style="padding: 14px 20px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; color: #64748b;">👤 Customer Information</p>
                        </div>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; width: 35%; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 15px; font-weight: 700; color: #0f172a;">${fullName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9;">
                                    <a href="mailto:${email}" style="color: #0891b2; font-weight: 700; text-decoration: none; font-size: 14px;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9;">
                                    <a href="tel:${phone}" style="color: #16a34a; font-weight: 700; text-decoration: none; font-size: 14px;">${phone || 'Not provided'}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Category</td>
                                <td style="padding: 12px 20px; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #334155;">${productType || 'Not specified'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px; font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Quantity</td>
                                <td style="padding: 12px 20px; font-size: 14px; font-weight: 600; color: #334155;">${quantity || 'Not specified'}</td>
                            </tr>
                        </table>
                    </div>

                    <!-- Message -->
                    <div style="margin-top: 16px; background: white; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
                        <div style="padding: 14px 20px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
                            <p style="margin: 0; font-size: 11px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; color: #64748b;">💬 Customer Message</p>
                        </div>
                        <div style="padding: 20px;">
                            <p style="margin: 0; color: #334155; line-height: 1.8; font-size: 14px; white-space: pre-wrap;">${message || 'No message provided.'}</p>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
                        <a href="mailto:${email}?subject=Re: Your Inquiry at Force Sports India" 
                           style="display: inline-block; padding: 12px 24px; background: #0f172a; color: white; border-radius: 8px; font-size: 12px; font-weight: 900; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; margin-right: 10px;">
                            ✉️ Reply to Customer
                        </a>
                        <a href="https://wa.me/91${(phone || '').replace(/\D/g, '').slice(-10)}" 
                           style="display: inline-block; padding: 12px 24px; background: #16a34a; color: white; border-radius: 8px; font-size: 12px; font-weight: 900; text-decoration: none; text-transform: uppercase; letter-spacing: 1px;">
                            📱 WhatsApp Customer
                        </a>
                    </div>

                    <!-- Footer -->
                    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                        <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                            This lead has been saved to your 
                            <a href="https://forcesportswearsindia.com/force-hq" style="color: #0891b2;">Firebase Leads Dashboard</a>.
                        </p>
                        <p style="margin: 6px 0 0; font-size: 11px; color: #cbd5e1;">Force Sports & Wears India · ${BRAND_DETAILS.headquarters}</p>
                    </div>
                </div>
            </div>
        `;

        const data = await resend.emails.send({
            from: 'Force Sports Leads <onboarding@resend.dev>',
            to: BRAND_DETAILS.contacts.inquiryEmail,
            subject: emailSubject,
            html: htmlContent,
            replyTo: email
        });

        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('Error sending email via Resend:', error);
        return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }
}
