import { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        description: "Complete UI/UX overhaul for a major retail client, resulting in 40% increase in conversions.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        tags: ["React", "Node.js", "UI/UX"],
        color: "#00d4ff"
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "app",
        description: "Secure, user-friendly banking application with biometric authentication.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        tags: ["React Native", "Security", "Fintech"],
        color: "#ffb347"
    },
    {
        id: 3,
        title: "QA Automation Suite",
        category: "qa",
        description: "Reduced bug escape rate by 75% through comprehensive testing automation.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["Selenium", "Jest", "CI/CD"],
        color: "#10b981"
    },
    {
        id: 4,
        title: "Training Platform",
        category: "teaching",
        description: "Interactive learning system with progress tracking and certification.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
        tags: ["LMS", "Video", "Analytics"],
        color: "#8b5cf6"
    },
    {
        id: 5,
        title: "Healthcare Dashboard",
        category: "web",
        description: "Real-time patient monitoring dashboard with HIPAA compliance.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        tags: ["Vue.js", "D3.js", "Healthcare"],
        color: "#ef4444"
    },
    {
        id: 6,
        title: "Fitness App",
        category: "app",
        description: "Cross-platform fitness app with workout plans and nutrition tracking.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
        tags: ["Flutter", "Firebase", "Health"],
        color: "#f59e0b"
    }
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'app', label: 'Mobile' },
    { id: 'qa', label: 'QA' },
    { id: 'teaching', label: 'Training' }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredId, setHoveredId] = useState(null);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                <div className="portfolio__header">
                    <div className="portfolio__header-content">
                        <span className="portfolio__label">Portfolio</span>
                        <h2 className="portfolio__title">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="portfolio__subtitle">
                            A showcase of our best work across different service areas
                        </p>
                    </div>

                    <div className="portfolio__filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`portfolio__filter ${activeCategory === cat.id ? 'portfolio__filter--active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="portfolio__grid">
                    {filteredProjects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`portfolio__card ${index === 0 ? 'portfolio__card--featured' : ''}`}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{ '--accent-color': project.color }}
                        >
                            <div className="portfolio__image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="portfolio__image"
                                    loading="lazy"
                                />
                                <div className="portfolio__image-overlay"></div>

                                <div className="portfolio__actions">
                                    <button className="portfolio__action-btn" aria-label="View Live">
                                        <ExternalLink size={18} />
                                    </button>
                                    <button className="portfolio__action-btn" aria-label="View Code">
                                        <Github size={18} />
                                    </button>
                                </div>

                                <div className="portfolio__category-badge">
                                    {categories.find(c => c.id === project.category)?.label}
                                </div>
                            </div>

                            <div className="portfolio__content">
                                <div className="portfolio__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="portfolio__tag">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="portfolio__card-title">
                                    {project.title}
                                    <ArrowUpRight
                                        size={20}
                                        className={`portfolio__arrow ${hoveredId === project.id ? 'portfolio__arrow--visible' : ''}`}
                                    />
                                </h3>

                                <p className="portfolio__description">{project.description}</p>
                            </div>

                            <div className="portfolio__glow" style={{ background: project.color }}></div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
