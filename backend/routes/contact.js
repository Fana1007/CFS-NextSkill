const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('../config/db');


// Create transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/', async (req, res) => {
    const { name, email, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    try {


        // Store in database
        try {
            await db.query(
                'INSERT INTO contacts (name, email, service, message) VALUES ($1, $2, $3, $4)',
                [name, email, service, message]
            );
        } catch (dbError) {
            console.error('Database save error:', dbError);
            // Optionally, we could choose to fail here, but usually we still want to try sending the email
            // or at least return a partial success, but for now we'll log it.
        }

        // If email config is not set, just log the message
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('Mock Email Sent:', { name, email, service, message });
            return res.status(200).json({ success: true, message: 'Message sent successfully (Mock)' });
        }

        // Send email to Admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email, // Allow replying directly to the sender
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Service: ${service || 'Not specified'}
Message: ${message}
            `, // Plain text fallback
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        // Send Auto-Reply to Visitor
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting CFS Nextskill',
            text: 'Thank you for your time.. We will contact you asap',
            html: `
                <h3>Hello ${name},</h3>
                <p>Thank you for your time.. We will contact you asap</p>
                <br>
                <p>Best regards,</p>
                <p>CFS Nextskill Team</p>
            `
        });

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Email send error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

module.exports = router;
