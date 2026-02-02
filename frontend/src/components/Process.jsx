import { MessageSquare, FileSearch, Code, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
    {
        number: '01',
        icon: MessageSquare,
        title: "Let's Talk About Your Goals",
        description: "We'll have a friendly chat about what you want to learn or achieve. No technical jargon—just a simple conversation about your needs."
    },
    {
        number: '02',
        icon: FileSearch,
        title: 'Create Your Learning Plan',
        description: "I'll design a clear, step-by-step plan tailored just for you. Whether it's learning a skill or completing a project, you'll know exactly what to expect."
    },
    {
        number: '03',
        icon: Code,
        title: 'Learn & Build Together',
        description: "We'll work at your pace with easy-to-follow lessons and hands-on practice. You'll get regular guidance and support throughout the journey."
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Achieve Your Goal',
        description: "Whether you've completed your project, mastered a new skill, or are ready for the next level, I'll be here to support your continued growth."
    }
];

const Process = () => {
    return (
        <section id="process" className="process section">
            <div className="container">
                <h2 className="section-title">
                    How I <span className="gradient-text">Work</span>
                </h2>
                <p className="section-subtitle">
                    Getting started is simple! Here's how we'll work together to help you succeed.
                </p>

                <div className="process__timeline">
                    {steps.map((step, index) => (
                        <div key={step.number} className="process__step">
                            <div className="process__step-header">
                                <div className="process__step-number">{step.number}</div>
                                <div className="process__step-icon">
                                    <step.icon size={28} />
                                </div>
                            </div>
                            <div className="process__step-content">
                                <h3 className="process__step-title">{step.title}</h3>
                                <p className="process__step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="process__connector"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
