import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const background = document.querySelector('.background-image');
    if (background) {
      background.style.animation = 'panImage 30s linear infinite';
    }

    return () => {
      if (background) {
        background.style.animation = '';
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="image-container">
        <div 
          className="background-image"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="image-overlay"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="text-container">
          <div className="hero-text">
            <h1 className="animated-title">
              <span className="gold-text">ابحث</span> عن مستقبلك الأكاديمي
              <span className="highlighted-text">
                 مع 
               <span className="glowing-text">رويال </span>
              </span>
            </h1>

            <p className="animated-subtitle">
              شركاؤك في تحقيق حلم الدراسة بالخارج في أفضل الجامعات العالمية
            </p>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={()=> navigate("programs")}>
              اكتشف البرامج الدراسية
              <FontAwesomeIcon icon={faChevronRight} className="btn-icon" />
            </button>
            <button className="secondary-btn">
              احجز استشارة مجانية
              <FontAwesomeIcon icon={faChevronRight} className="btn-icon" />
            </button>
          </div>
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