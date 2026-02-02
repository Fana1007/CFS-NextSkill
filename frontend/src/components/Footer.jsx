import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        services: [
            { label: 'Online Tech Tutoring', href: '#services' },
            { label: 'Project Help & Development', href: '#services' },
            { label: 'Ready-Made Projects', href: '#services' }
        ],
        legal: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Cookie Policy', href: '#' }
        ]
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Mock subscription logic
        alert('Thank you for subscribing! (Newsletter feature coming soon)');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-text">CFS</span>
                            <span className="footer__logo-accent">Nextskill</span>
                        </a>
                        <p className="footer__description">
                            Empowering businesses through quality, innovation, and expertise.
                            Your partner in digital transformation.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__links-title">Services</h4>
                        <ul className="footer__links-list">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="footer__link">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__newsletter">
                        <h4 className="footer__links-title">Newsletter</h4>
                        <p className="footer__newsletter-text">
                            Subscribe to get the latest tech insights and training updates.
                        </p>
                        <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="footer__newsletter-input"
                                required
                            />
                            <button type="submit" className="footer__newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="footer__links">
                        <h4 className="footer__links-title">Legal</h4>
                        <ul className="footer__links-list">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="footer__link">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} CFS Nextskill. All rights reserved.
                    </p>
                    <button
                        className="footer__back-to-top"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
