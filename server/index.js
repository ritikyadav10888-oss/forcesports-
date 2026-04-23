const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) : true,
}));
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
    },
});

// Simple in-memory rate limit (per IP)
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const rateLimitBuckets = new Map();
function basicRateLimit(req, res, next) {
    const ip = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const bucket = rateLimitBuckets.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    if (now > bucket.resetAt) {
        bucket.count = 0;
        bucket.resetAt = now + RATE_LIMIT_WINDOW_MS;
    }
    bucket.count += 1;
    rateLimitBuckets.set(ip, bucket);
    if (bucket.count > RATE_LIMIT_MAX) {
        return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
    }
    next();
}

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verification of connection
transporter.verify((error, success) => {
    if (error) {
        console.log('Transporter Error:', error);
    } else {
        console.log('Server is ready to take messages');
    }
});

// Route to handle inquiry
app.post('/api/send-inquiry', basicRateLimit, upload.single('image'), async (req, res) => {
    const { fullName, email, phone, quantity, message } = req.body || {};

    if (!fullName || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    const attachments = [];
    if (req.file) {
        attachments.push({
            filename: req.file.originalname || 'reference-image',
            content: req.file.buffer,
            contentType: req.file.mimetype,
        });
    }

    const mailOptions = {
        from: `Force Sports Inquiry <${process.env.SMTP_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Inquiry from ${fullName}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 10px;">
                <h2 style="color: #0f172a; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Website Inquiry</h2>
                <div style="margin: 20px 0;">
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
                    <p><strong>Quantity:</strong> ${quantity || 'Not specified'}</p>
                </div>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
                <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
                    This inquiry was sent from the Force Sports contact form.
                </p>
            </div>
        `,
        replyTo: email,
        attachments,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Inquiry sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send inquiry. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
