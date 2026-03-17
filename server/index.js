const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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
app.post('/api/send-inquiry', async (req, res) => {
    const { fullName, email, quantity, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
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
        replyTo: email
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
