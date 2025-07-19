import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="image-container">
        <img 
          src="https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg" 
          alt="Royal Education Background"
          className="background-gif"
          loading="eager"
        />
        <div className="image-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animated-title">
            <span className="gold-text">ابحث</span> عن مستقبلك الأكاديمي
            <span className="highlighted-text">
              مع <span className="glowing-text">رويال</span>
            </span>
          </h1>

          <p className="animated-subtitle">
            شركاؤك في تحقيق حلم الدراسة بالخارج في أفضل الجامعات العالمية
          </p>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            اكتشف البرامج الدراسية
            <FontAwesomeIcon icon={faChevronRight} className="btn-icon" />
          </button>
          <button className="secondary-btn">
            احجز استشارة مجانية
            <FontAwesomeIcon icon={faChevronRight} className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="scrolling-indicator">
        <div className="scroll-line"></div>
        <div className="scroll-text">مرر لأسفل</div>
      </div>
    </section>
  );
};

export default Hero;