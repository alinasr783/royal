// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faGraduationCap,
  faGlobeAmericas,
  faBookOpen,
  faUsers,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items with icons
  const navItems = [
    { id: 1, name: 'الرئيسية', path: '/', icon: faGraduationCap },
    { id: 2, name: 'الدورات', path: '/courses', icon: faBookOpen },
    { id: 3, name: 'الدول', path: '/countries', icon: faGlobeAmericas },
    { id: 4, name: 'من نحن', path: '/about', icon: faUsers },
    { id: 5, name: 'اتصل بنا', path: '/contact', icon: faEnvelope },
  ];

  // Handle scroll effect for desktop header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.mobile-nav') && !e.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <div className="logo">
          <div className="logo-icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="logo-text">
            <span className="logo-main">Royal Study</span>
            <span className="logo-sub">الدراسة بالخارج</span>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={item.path} 
              className="nav-item"
            >
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              <span>{item.name}</span>
              <div className="nav-item-hover"></div>
            </a>
          ))}
        </nav>

        <div className="cta-container">
          <button className="cta-button">
            احجز استشارة مجانية
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <div className="mobile-header">
          <div className="logo">
            <div className="logo-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="logo-text">
              <span className="logo-main">Royal Study</span>
            </div>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={item.path} 
                className="mobile-nav-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
                <span>{item.name}</span>
              </a>
            ))}
            <button className="mobile-cta-button">
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;