import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./CTA.css"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="gold-bar"></div>
      <div className="cta-content rtl-support">
        <h2>ابدأ رحلتك الدراسية <span className="highlight">اليوم!</span></h2>
        <p>تواصل معنا للحصول على استشارة مجانية وتقييم فرصك للدراسة بالخارج. فريقنا من الخبراء جاهز لمساعدتك في كل خطوة من رحلتك التعليمية.</p>

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