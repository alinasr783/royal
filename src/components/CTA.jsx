import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./CTA.css";

const CTA = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <section className="cta-section">
      <div className="gold-bar"></div>
      <div className="cta-content">
        <div className="cta-text">
          <h2>
            <span className="gold-text">ابدأ رحلتك الدراسية</span>
            <span className="highlight"> اليوم!</span>
          </h2>
          <p>تواصل معنا للحصول على استشارة مجانية وتقييم فرصك للدراسة بالخارج. فريقنا من الخبراء جاهز لمساعدتك في كل خطوة من رحلتك التعليمية.</p>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">دولة حول العالم</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">نسبة القبول</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">طالب مسجل</div>
            </div>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="cta-btn primary">
            <span className="icon">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            احجز استشارة الآن
          </button>

          <button className="cta-btn secondary">
            <span className="icon">
              <FontAwesomeIcon icon={faArrowLeft} onClick={()=>navigate("/programs")}/>
            </span>
            تصفح البرامج الدراسية
          </button>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default CTA;