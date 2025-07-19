// src/pages/Home.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faFileAlt, 
  faHandshake, 
  faPlane,
  faQuoteLeft,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header/Header';
import './Home.css';

const Home = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: faGraduationCap,
      title: "استشارات أكاديمية",
      description: "نقدم استشارات متخصصة لاختيار البرنامج والجامعة الأنسب لمستقبلك الأكاديمي"
    },
    {
      id: 2,
      icon: faFileAlt,
      title: "تجهيز المستندات",
      description: "نساعدك في إعداد جميع المستندات المطلوبة للتقديم والفيزا بدقة وسرعة"
    },
    {
      id: 3,
      icon: faHandshake,
      title: "تسهيل القبول",
      description: "ضمان الحصول على القبول الجامعي من أفضل الجامعات في الدول المستهدفة"
    },
    {
      id: 4,
      icon: faPlane,
      title: "دعم السفر",
      description: "نساعدك في ترتيبات السفر والإقامة والاستقبال في البلد المضيف"
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

  return (
    <div className="home-page">
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>اختر مستقبلك الأكاديمي بثقة</h1>
          <p>شركاؤك في تحقيق حلم الدراسة بالخارج في روسيا، قيرغيزستان وأوزبكستان</p>
          <div className="hero-buttons">
            <button className="primary-btn">اكتشف البرامج الدراسية</button>
            <button className="secondary-btn">احجز استشارة مجانية</button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-header">
          <h2>خدماتنا المتكاملة</h2>
          <p>نقدم لك حزمة متكاملة من الخدمات لضمان رحلتك الدراسية الناجحة</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Countries Section */}
      <section className="countries">
        <div className="section-header">
          <h2>وجهاتنا الدراسية</h2>
          <p>اختر من بين أفضل الدول التي نقدم خدماتنا فيها</p>
        </div>

        <div className="countries-grid">
          {countries.map(country => (
            <div className="country-card" key={country.id}>
              <div className="country-flag">{country.flag}</div>
              <h3>{country.name}</h3>
              <div className="country-details">
                <p><strong>الجامعات:</strong> {country.universities}</p>
                <p><strong>التخصصات:</strong> {country.specialties}</p>
              </div>
              <button className="country-btn">استكشف الجامعات</button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>طالب سافروا معنا</p>
        </div>
        <div className="stat-item">
          <h3>65+</h3>
          <p>جامعة شريكة</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>نسبة القبول</p>
        </div>
        <div className="stat-item">
          <h3>15+</h3>
          <p>سنة خبرة</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>آراء طلابنا</h2>
          <p>قصص نجاح من طلاب حققوا حلمهم بالدراسة بالخارج</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>الدراسة في {testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>ابدأ رحلتك الدراسية اليوم!</h2>
          <p>تواصل معنا للحصول على استشارة مجانية وتقييم فرصك للدراسة بالخارج</p>
          <button className="cta-btn">احجز استشارة الآن</button>
        </div>
        <div className="cta-overlay"></div>
      </section>
    </div>
  );
};

export default Home;