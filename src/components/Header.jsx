import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faBookOpen,
  faGlobeAmericas,
  faUsers,
  faEnvelope,
  faGraduationCap,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: faHome, label: 'الرئيسية', path: '/' },
    { id: 'courses', icon: faBookOpen, label: 'البرامج الدراسية', path: '/programs' },
    { id: 'articles', icon: faGlobeAmericas, label: 'المقالات', path: '/articles' },
    { id: 'about', icon: faUsers, label: 'من نحن', path: '/about' },
    { id: 'contact', icon: faEnvelope, label: 'اتصل بنا', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const DesktopHeader = () => (
    <header className={`desktop-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="desktop-nav">

        <nav className="nav-links">
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </nav>
        <div className="logo" onClick={() => navigate('/')}>
          <div className="logo-icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="logo-text">
            <span className="logo-main">Royal Study</span>
            <span className="logo-sub">الدراسة بالخارج</span>
          </div>
        </div>


        <div className="cta-container">
          <button className="cta-button">
            احجز استشارة مجانية
          </button>
        </div>
      </div>
    </header>
  );

  const MobileHeader = () => (
    <header className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="mobile-nav">

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-items">
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <div
                  key={item.id}
                  className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="mobile-nav-icon" />
                  <span className="mobile-nav-label">{item.label}</span>
                </div>
              );
            })}

            <button className="mobile-cta-button" onClick={()=>navigate("/contact")}>
              احجز استشارة مجانية
            </button>
          </div>
        </div>
        <div className="mobile-logo-container">
          
          <div className="logo" onClick={() => navigate('/')}>
            <div className="logo-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="logo-text">
              <span className="logo-main">Royal Study</span>
            </div>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
          
        </div>

      </div>
    </header>
  );

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;