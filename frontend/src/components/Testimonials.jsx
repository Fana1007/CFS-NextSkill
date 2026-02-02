import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        role: "CEO",
        content: "The quality of work delivered exceeded our expectations. The attention to detail in both development and QA was remarkable. Our platform is now running smoother than ever.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
        id: 2,
        name: "Michael Chen",
        company: "DataFlow Solutions",
        role: "CTO",
        content: "Their training sessions transformed our team's capabilities. The hands-on approach made complex concepts accessible. We've seen a 60% improvement in our development efficiency.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        company: "Creative Labs",
        role: "Product Manager",
        content: "From concept to launch, the app development process was seamless. They truly understood our vision and delivered a product that our users love.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
        id: 4,
        name: "David Park",
        company: "Innovate Corp",
        role: "Director of Engineering",
        content: "The QA shadow work identified issues we had missed for months. Invaluable expertise and professionalism. Our bug rate dropped by 80% after their intervention.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section id="blog" className="testimonials section">
            <div className="container">
                <h2 className="section-title">
                    My <span className="gradient-text">Blog</span>
                </h2>
                <p className="section-subtitle">
                    Don't just take our word for it — hear what our clients have to say
                    about their experience working with us.
                </p>

                <div className="testimonials__carousel">
                    <button
                        className="testimonials__nav testimonials__nav--prev"
                        onClick={goToPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonials__content">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonials__card ${index === currentIndex ? 'testimonials__card--active' : ''}`}
                            >
                                <div className="testimonials__quote-icon">
                                    <Quote size={40} />
                                </div>
                                <p className="testimonials__text">{testimonial.content}</p>
                                <div className="testimonials__author">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="testimonials__avatar"
                                        loading="lazy"
                                    />
                                    <div className="testimonials__author-info">
                                        <h4 className="testimonials__name">{testimonial.name}</h4>
                                        <p className="testimonials__role">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="testimonials__nav testimonials__nav--next"
                        onClick={goToNext}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="testimonials__dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonials__dot ${index === currentIndex ? 'testimonials__dot--active' : ''}`}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentIndex(index);
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
