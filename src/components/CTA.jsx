import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "./CTA.css"

const CTA = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!ctaRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(ctaRef.current);

    return () => {
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <section className="cta-section" ref={ctaRef}>
      <div className="cta-overlay"></div>

      <div className="floating-icons">
        <div className="floating-icon icon-1">
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <div className="floating-icon icon-2">
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <div className="floating-icon icon-3">
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
      </div>

      <div className="cta-content">
        <h2>ابدأ رحلتك الدراسية <span className="highlight">اليوم!</span></h2>
        <p>تواصل معنا للحصول على استشارة مجانية وتقييم فرصك للدراسة بالخارج</p>

        <div className="cta-buttons">
          <button className="cta-btn primary">
            احجز استشارة الآن
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>

          <button className="cta-btn secondary">
            تصفح البرامج الدراسية
            <span className="icon">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;