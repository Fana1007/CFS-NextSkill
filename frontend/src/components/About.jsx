import { CheckCircle, Users, Lightbulb, Target } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: CheckCircle,
            title: 'Beginner-Friendly',
            description: 'I explain concepts in simple, easy-to-understand language'
        },
        {
            icon: Users,
            title: 'Flexible Schedule',
            description: 'Classes and support available at times that work for you'
        },
        {
            icon: Lightbulb,
            title: 'Affordable & Reliable',
            description: 'Quality education and services at student-friendly rates'
        },
        {
            icon: Target,
            title: 'Real Results',
            description: 'Practical skills you can use immediately in your studies or career'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__grid">
                    <div className="about__content">
                        <h2 className="about__title">
                            Why Choose <span className="gradient-text">Me?</span>
                        </h2>

                        <p className="about__text">
                            Whether you want to learn a new skill, complete a project, or explore tech opportunities,
                            I'm here to support you every step of the way.
                        </p>

                        <div className="about__cta">
                            <a href="#contact" className="btn btn-primary">Start Learning</a>
                        </div>
                    </div>

                    <div className="about__highlights">
                        {highlights.map((item, index) => (
                            <div
                                key={item.title}
                                className="about__highlight-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="about__highlight-icon">
                                    <item.icon size={24} />
                                </div>
                                <div className="about__highlight-content">
                                    <h4 className="about__highlight-title">{item.title}</h4>
                                    <p className="about__highlight-text">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
