import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faFileAlt, 
  faHandshake, 
  faPlane,
  faQuoteLeft,
  faStar,
  faChevronRight,
  faChevronLeft,
  faUserGraduate,
  faUniversity,
  faCheckCircle,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: faGraduationCap,
      title: "استشارات أكاديمية",
      description: "نقدم استشارات متخصصة لاختيار البرنامج والجامعة الأنسب لمستقبلك الأكاديمي",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFTQe2r-ReDwFmd_BDTCArSs0AJQ4_mGecElJ9k1JlHMupfidhZ-jIffxh9oSZ8kaRE-UPr_fkn3bSa-Y5a9wlUWl8oDGpdn9OFrmIRi-N0P7UbsMbQCgRUo7VGDnshcmVxxygv_pxEoy1pYacRQaUikOKX9FOm4tsWFkPmE32IoXKcG6Rz3wNFVgTiN-XLNnz2L_kdHmXOltEuotRNhvS2_tLI_9JUKHjwrx4QT2Vvo_0oZgp_8D6qJAbHF2QjLwhmtdcHC_SYGk"
    },
    {
      id: 2,
      icon: faFileAlt,
      title: "تجهيز المستندات",
      description: "نساعدك في إعداد جميع المستندات المطلوبة للتقديم والفيزا بدقة وسرعة",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      icon: faHandshake,
      title: "تسهيل القبول",
      description: "ضمان الحصول على القبول الجامعي من أفضل الجامعات في الدول المستهدفة",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      icon: faPlane,
      title: "دعم السفر",
      description: "نساعدك في ترتيبات السفر والإقامة والاستقبال في البلد المضيف",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Stats data
  const stats = [
    {
      id: 1,
      value: 500,
      suffix: "+",
      label: "طالب سافروا معنا",
      icon: faUserGraduate,
      color: "#D4AF37"
    },
    {
      id: 2,
      value: 65,
      suffix: "+",
      label: "جامعة شريكة",
      icon: faUniversity,
      color: "#A67C00"
    },
    {
      id: 3,
      value: 98,
      suffix: "%",
      label: "نسبة القبول",
      icon: faCheckCircle,
      color: "#F4D03F"
    },
    {
      id: 4,
      value: 15,
      suffix: "+",
      label: "سنة خبرة",
      icon: faCalendarAlt,
      color: "#B8860B"
    }
  ];

  // Countries data
  const countries = [
    {
      id: 1,
      name: "روسيا",
      flag: "🇷🇺",
      universities: "أكثر من 30 جامعة",
      specialties: "الطب، الهندسة، علوم الحاسب"
    },
    {
      id: 2,
      name: "قيرغيزستان",
      flag: "🇰🇬",
      universities: "أكثر من 15 جامعة",
      specialties: "طب الأسنان، الصيدلة، إدارة الأعمال"
    },
    {
      id: 3,
      name: "أوزبكستان",
      flag: "🇺🇿",
      universities: "أكثر من 20 جامعة",
      specialties: "العلوم الطبية، الهندسة، اللغات"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "محمد أحمد",
      country: "روسيا",
      text: "رويال غيرت حياتي! ساعدوني في الحصول على منحة دراسية في أفضل جامعة طبية في روسيا",
      rating: 5
    },
    {
      id: 2,
      name: "سارة خالد",
      country: "أوزبكستان",
      text: "من خلال رويال استطعت تحقيق حلم الدراسة بالخارج بسهولة ويسر، فريق محترف وداعم في كل الخطوات",
      rating: 5
    },
    {
      id: 3,
      name: "عمر يوسف",
      country: "قيرغيزستان",
      text: "تجربة رائعة مع رويال، ساعدوني في كل التفاصيل من الأوراق حتى السكن والاستقبال في المطار",
      rating: 4
    }
  ];

  // State for animated stats
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({
    ...stat,
    animatedValue: 0
  })));

  // Render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={i < rating ? "star filled" : "star"} 
      />
    ));
  };

  // Animation for stats
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedStats(prevStats => 
        prevStats.map(stat => {
          const animatedValue = Math.floor(progress * stat.value);
          return { ...stat, animatedValue };
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>ابحث عن مستقبلك الأكاديمي مع رويال</h1>
            <p>شركاؤك في تحقيق حلم الدراسة بالخارج في أفضل الجامعات العالمية</p>
          </div>
          <div className="hero-buttons">
            <button className="primary-btn">
              اكتشف البرامج الدراسية
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button className="secondary-btn">
              احجز استشارة مجانية
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">خدماتنا المتكاملة</h2>

        <div className="services-scroll-container">
          <div className="services-cards-wrapper">
            {services.map(service => (
              <div className="service-card" key={service.id}>
                <div 
                  className="service-image" 
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                <h3 className="service-name">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Horizontal Scrolling Cards */}
      <section className="stats-section">
        <h2 className="stats-title">أرقامنا تتحدث عنا</h2>

        <div className="stats-scroll-container">
          <div className="stats-cards-wrapper">
            {stats.map(stat => (
              <div className="stat-card" key={stat.id}>
                <div className="stat-icon">
                  <FontAwesomeIcon icon={stat.icon} style={{ color: "#D4AF37" }} />
                </div>
                <div className="stat-info">
                  <h3 className="stat-value">{stat.value}{stat.suffix}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Countries Section */}
      {/* <section className="modern-countries">
        <div className="section-header">
          <h2>وجهاتنا الدراسية المميزة</h2>
          <p>اكتشف أفضل الدول التي نقدم خدماتنا فيها مع جامعاتها وتخصصاتها</p>
        </div>

        <div className="countries-cards-container">
          <div className="countries-cards-wrapper">
            {countries.map(country => (
              <div className="country-card" key={country.id}>
                <div className="country-header">
                  <div className="country-flag">{country.flag}</div>
                  <h3 className="country-name">{country.name}</h3>
                </div>

                <div className="country-image-container">
                  <div 
                    className="country-image" 
                    style={{ 
                      backgroundImage: `url(https://source.unsplash.com/random/800x600/?${country.name})` 
                    }}
                  ></div>
                </div>

                <div className="country-details">
                  <div className="detail-item">
                    <FontAwesomeIcon icon={faUniversity} className="detail-icon" />
                    <p>{country.universities}</p>
                  </div>
                  <div className="detail-item">
                    <FontAwesomeIcon icon={faGraduationCap} className="detail-icon" />
                    <p>{country.specialties}</p>
                  </div>
                </div>

                <button className="country-btn">
                  استكشف الجامعات
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-pattern"></div>
      </section> */}
      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>آراء طلابنا</h2>
          <p>قصص نجاح من طلاب حققوا حلمهم بالدراسة بالخارج</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-wrapper">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-image" style={{ backgroundImage: `url(https://i.ibb.co/7xsc14zZ/IMG-20250718-WA0011.jpghttps://i.ibb.co/0ykxHWnd/premium-photo-1689568126014-06fea9d5d341.jpg)` }}></div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>الدراسة في {testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-pattern"></div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>ابدأ رحلتك الدراسية اليوم!</h2>
          <p>تواصل معنا للحصول على استشارة مجانية وتقييم فرصك للدراسة بالخارج</p>
          <button className="cta-btn">
            احجز استشارة الآن
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;