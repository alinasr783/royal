import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight,
  faGraduationCap,
  faPassport,
  faUniversity,
  faHandshake,
  faFileAlt,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = ({ services = [] }) => {
  const gridRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // بيانات وهمية للخدمات
  const dummyServices = [
    {
      id: 1,
      name: "الاستشارات الأكاديمية",
      description: "توجيه متخصص لاختيار التخصص والجامعة المناسبة بناءً على مؤهلاتك وطموحاتك",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: faGraduationCap
    },
    {
      id: 2,
      name: "تسهيلات القبول الجامعي",
      description: "مساعدة كاملة في تقديم الطلبات ومتطلبات القبول للجامعات العالمية المرموقة",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: faUniversity
    },
    {
      id: 3,
      name: "خدمات التأشيرات",
      description: "إرشادات وتسهيلات للحصول على تأشيرة الدراسة في مختلف الدول حول العالم",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: faPassport
    },
    {
      id: 4,
      name: "إعداد المستندات",
      description: "مراجعة وتحسين السيرة الذاتية ورسائل التوصية وخطابات النوايا",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: faFileAlt
    },
    {
      id: 5,
      name: "خدمات ما بعد القبول",
      description: "ترتيبات السكن والتأمين الصحي واستقبال المطار بعد الحصول على القبول",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: faHandshake
    },
    {
      id: 6,
      name: "البرامج الصيفية",
      description: "تنظيم برامج تدريبية صيفية في جامعات عالمية لتعزيز السيرة الأكاديمية",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      icon: faGlobe
    }
  ];

  const displayServices = services.length > 0 ? services : dummyServices;

  // كشف حجم الشاشة
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.service-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, [displayServices]);

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>خدماتنا <span className="gold-text">المتميزة</span></h2>
        <p>
          نقدم مجموعة شاملة من الخدمات المصممة خصيصاً لتحقيق أحلامك الأكاديمية
          والمهنية في أرقى الجامعات العالمية
        </p>
      </div>

      <div className={`services-grid ${isMobile ? 'mobile-layout' : ''}`} ref={gridRef}>
        {displayServices.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="gold-border"></div>
            <div 
              className="service-image"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-link">
                اكتشف المزيد
                <span className="link-icon">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {!isMobile && (
        <div className="scroll-controls">
          <button className="scroll-btn" onClick={scrollLeft} aria-label="Scroll left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="scroll-btn" onClick={scrollRight} aria-label="Scroll right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Services;