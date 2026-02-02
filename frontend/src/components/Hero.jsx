import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            {/* Animated Background */}
            <div className="hero__bg">
                <div className="hero__bg-gradient"></div>
                <div className="hero__bg-grid"></div>
                <div className="hero__bg-glow hero__bg-glow--1"></div>
                <div className="hero__bg-glow hero__bg-glow--2"></div>
                <div className="hero__bg-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="hero__particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__badge animate-fade-in-up">
                        <span className="hero__badge-dot"></span>
                        Empowering Excellence
                    </div>

                    <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Learn Tech Skills &{' '}
                        <span className="gradient-text">Build Your Future</span>
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Hi! I'm a tech professional with 6 years of experience, and I'm here to help you learn
                        programming, build projects, and achieve your goals—whether you're starting from zero
                        or looking to advance your skills.
                    </p>

                    <div className="hero__cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('#services')}
                        >
                            View Services
                            <ArrowRight size={18} />
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('#contact')}
                        >
                            Get in Touch
                        </button>
                    </div>


                </div>
            </div>

            <button
                className="hero__scroll-indicator"
                onClick={() => scrollToSection('#services')}
                aria-label="Scroll to services"
            >
                <ChevronDown size={24} />
            </button>
        </section>
    );
};

export default Hero;
