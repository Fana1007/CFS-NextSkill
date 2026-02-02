import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, Instagram, Youtube, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const API_URL = 'http://localhost:5000/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (status.type === 'error') {
            setStatus({ type: '', message: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus({
                    type: 'success',
                    message: data.message || 'Thank you for your message! We will get back to you soon.'
                });
                setFormData({ name: '', email: '', service: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: data.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({
                type: 'error',
                message: 'Unable to connect to server. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        { value: '', label: 'Select a service' },
        { value: 'teaching', label: 'Teaching & Training' },
        { value: 'qa', label: 'QA Shadow Work' },
        { value: 'web', label: 'Website Development' },
        { value: 'app', label: 'App Development' }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">
                    Get in <span className="gradient-text">Touch</span>
                </h2>
                <p className="section-subtitle">
                    Ready to start your next project? Have questions about our services?
                    We'd love to hear from you.
                </p>

                <div className="contact__grid">
                    <div className="contact__info">
                        <div className="contact__info-card">
                            <h3 className="contact__info-title">Let's Talk</h3>
                            <p className="contact__info-text">
                                Whether you have a project in mind or just want to explore possibilities,
                                we're here to help. Reach out and let's start a conversation.
                            </p>

                            <div className="contact__details">
                                <a href="mailto:aliana020723@gmail.com" className="contact__detail">
                                    <Mail size={20} />
                                    <span>aliana020723@gmail.com</span>
                                </a>
                                <a href="tel:+919573621746" className="contact__detail">
                                    <Phone size={20} />
                                    <span>+91 9573621746</span>
                                </a>
                                <div className="contact__detail">
                                    <MapPin size={20} />
                                    <span>Remote First, Worldwide</span>
                                </div>
                            </div>

                            <div className="contact__social">
                                <a href="#" className="contact__social-link" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="contact__social-link" aria-label="GitHub" onClick={(e) => e.preventDefault()}>
                                    <Github size={20} />
                                </a>
                                <a href="#" className="contact__social-link" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="contact__social-link" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="contact__social-link" aria-label="YouTube" onClick={(e) => e.preventDefault()}>
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service" className="form-label">Service Interest</label>
                            <select
                                id="service"
                                name="service"
                                className="form-select"
                                value={formData.service}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            >
                                {services.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell us about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        {status.message && (
                            <div className={`contact__status contact__status--${status.type}`}>
                                {status.type === 'success' ? (
                                    <CheckCircle size={20} />
                                ) : (
                                    <AlertCircle size={20} />
                                )}
                                <span>{status.message}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary contact__submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="contact__spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
