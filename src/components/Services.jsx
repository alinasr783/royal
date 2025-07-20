import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
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

  // بيانات الخدمات
  const dummyServices = [
    {
      id: 1,
      name: "الاستشارات الأكاديمية",
      description: "توجيه متخصص لاختيار التخصص والجامعة المناسبة بناءً على مؤهلاتك وطموحاتك",
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg",
      icon: faGraduationCap
    },
    {
      id: 2,
      name: "تسهيلات القبول الجامعي",
      description: "تنظيم برامج تدريبية صيفية في جامعات عالمية لتعزيز السيرة الأكاديمية",
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg",
      icon: faUniversity
    },
    {
      id: 3,
      name: "خدمات التأشيرات",
      description: "إرشادات وتسهيلات للحصول على تأشيرة الدراسة في مختلف الدول حول العالم",
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg",
      icon: faPassport
    },
    {
      id: 4,
      name: "إعداد المستندات",
      description: "مراجعة وتحسين السيرة الذاتية ورسائل التوصية وخطابات النوايا",
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg",
      icon: faFileAlt
    },
    {
      id: 5,
      name: "خدمات ما بعد القبول",
      description: "ترتيبات السكن والتأمين الصحي واستقبال المطار بعد الحصول على القبول",
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg",
      icon: faHandshake
    },
    {
      id: 6,
      name: "البرامج الصيفية",
      description: "تنظيم برامج تدريبية صيفية في جامعات عالمية لتعزيز السيرة الأكاديمية",
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg",
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
            <div className="service-image-container">
              <div 
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
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
    </section>
  );
};

export default Services;