import { GraduationCap, Search, Globe, Smartphone } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: GraduationCap,
        title: 'Online Tech Tutoring',
        description: 'Learn programming, web development, and software skills at your own pace. Perfect for beginners, students, and anyone wanting to start a tech career from home.',
        features: ['Easy-to-understand lessons', 'Flexible timings', 'Learn from basics', 'Career-ready skills']
    },
    {
        icon: Globe,
        title: 'Project Help & Development',
        description: "Stuck with your college project or assignment? I'll guide you step-by-step or create custom solutions that meet your requirements.",
        features: ['College assignments', 'Project guidance', 'Custom development', 'Timely delivery']
    },
    {
        icon: Smartphone,
        title: 'Ready-Made Projects',
        description: 'High-quality projects ready for your coursework—fully functional and easy to customize for your specific needs.',
        features: ['Complete documentation', 'Easy to understand', 'Affordable pricing', 'Instant delivery']
    }
];

const Services = () => {
    return (
        <section id="services" className="services section">
            <div className="container">
                <h2 className="section-title">
                    My <span className="gradient-text">Services</span>
                </h2>
                <p className="section-subtitle">
                    I offer simple, affordable tech solutions to help you learn, grow, and succeed.
                </p>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className="services__card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="services__icon-wrapper">
                                <service.icon className="services__icon" size={32} />
                            </div>

                            <h3 className="services__title">{service.title}</h3>
                            <p className="services__description">{service.description}</p>

                            <ul className="services__features">
                                {service.features.map((feature) => (
                                    <li key={feature} className="services__feature">
                                        <span className="services__feature-dot"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="services__card-glow"></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
