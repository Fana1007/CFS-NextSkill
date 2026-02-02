import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const serviceCategories = {
    'For Complete Beginners': [
        'Basic Computer Skills & Internet',
        'Introduction to Programming Concepts',
        'HTML & CSS (Website Basics)',
        'Microsoft Office (Word, Excel, PowerPoint)'
    ],
    'Web Development': [
        'HTML, CSS, JavaScript',
        'Bootstrap & Responsive Design',
        'WordPress Website Creation',
        'PHP & MySQL',
        'React.js Basics',
        'Frontend Development'
    ],
    'Programming Languages': [
        'Python (Great for beginners)',
        'Java',
        'C/C++ (For college students)',
        'JavaScript',
        'SQL & Database Management'
    ],
    'AI & Modern Tools': [
        'Understanding AI & LLMs',
        'ChatGPT, Claude & AI Tools',
        'Building AI Agents & Chatbots',
        'Prompt Engineering',
        'AI Pipelines & Workflows',
        'Automating Tasks with AI',
        'AI for Project Development'
    ],
    'Mobile App Development': [
        'Android App Development (Java)',
        'Basic Flutter',
        'React Native Basics'
    ],
    'Manual Testing': [
        'Test Case Writing & Execution',
        'Bug Reporting & Tracking',
        'Testing Documentation'
    ],
    'Automation Testing': [
        'Selenium WebDriver',
        'Playwright',
        'RestAssured (API Testing)',
        'Postman',
        'Appium',
        'Database Testing',
        'JMeter',
        'TestNG & JUnit',
        'Cucumber (BDD)'
    ],
    'Cloud & DevOps (AWS)': [
        'AWS Basics',
        'EC2, S3, RDS',
        'Lambda',
        'Deploying Projects',
        'AWS for Beginners'
    ],
    'Project-Based Skills': [
        'Portfolio Websites',
        'E-commerce Websites',
        'Management Systems',
        'AI-Powered Chatbots',
        'Automation Frameworks'
    ],
    'Career & Freelancing': [
        'How to Start Freelancing',
        'Building Your Portfolio',
        'Finding Clients Online',
        'Work-from-Home Opportunities',
        'QA Career Path'
    ],
    'For Housewives': [
        'Learn to Code from Home',
        'Freelancing as a Career',
        'Websites for Small Businesses',
        'Data Entry & Excel Skills',
        'AI Tools to Work Smarter',
        'Start Tech Career in QA'
    ]
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeMobileCategory, setActiveMobileCategory] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services', isDropdown: true },
        { href: '#about', label: 'About' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#process', label: 'Process' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contact' }
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
            setIsDropdownOpen(false);
        }
    };

    const toggleMobileCategory = (category) => {
        setActiveMobileCategory(activeMobileCategory === category ? null : category);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__container">
                <a href="#home" className="header__logo" onClick={(e) => scrollToSection(e, '#home')}>
                    <span className="header__logo-text">CFS</span>
                    <span className="header__logo-accent">Nextskill</span>
                </a>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li
                                key={link.href}
                                className={`header__nav-item ${link.isDropdown ? 'header__nav-item--dropdown' : ''}`}
                                onMouseEnter={() => link.isDropdown && !isMobileMenuOpen && setIsDropdownOpen(true)}
                                onMouseLeave={() => link.isDropdown && !isMobileMenuOpen && setIsDropdownOpen(false)}
                            >
                                <a
                                    href={link.href}
                                    className="header__nav-link"
                                    onClick={(e) => !link.isDropdown && scrollToSection(e, link.href)}
                                >
                                    {link.label}
                                    {link.isDropdown && <ChevronDown size={16} className={`dropdown-icon ${isDropdownOpen ? 'dropdown-icon--open' : ''}`} />}
                                </a>

                                {link.isDropdown && (
                                    <div className={`mega-menu ${isDropdownOpen ? 'mega-menu--open' : ''}`}>
                                        <div className="mega-menu__container">
                                            {Object.entries(serviceCategories).map(([category, items]) => (
                                                <div key={category} className="mega-menu__column">
                                                    <h4 className="mega-menu__title" onClick={() => isMobileMenuOpen && toggleMobileCategory(category)}>
                                                        {category}
                                                        {isMobileMenuOpen && <ChevronDown size={14} className={`mobile-chevron ${activeMobileCategory === category ? 'mobile-chevron--open' : ''}`} />}
                                                    </h4>
                                                    <ul className={`mega-menu__list ${isMobileMenuOpen && activeMobileCategory !== category ? 'mega-menu__list--hidden' : ''}`}>
                                                        {items.map((item) => (
                                                            <li key={item} className="mega-menu__item">
                                                                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>{item}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    className="header__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
