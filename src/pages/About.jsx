import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faCircleExclamation,
  faGlobe,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header";
import { 
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        {/* Banner Section */}
        <section className="banner">
          <div className="banner-content">
            <h1>تواصل مع <span>رويال ستدي</span></h1>
            <p>نسهل رحلتك التعليمية من البداية حتى التخرج</p>
            <div className="graduation-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="content-wrapper">
          {/* Official Announcement */}
          <section className="announcement">
            <div className="announcement-header">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
              </div>
              <h2>تنويه رسمي من شركة Royal Study للدراسة بالخارج</h2>
            </div>
            <div className="announcement-content">
              <p className="intro-text">
                حرصًا منا على الشفافية والثقة، نود إعلامكم أن روابط التواصل الرسمية الوحيدة الخاصة بنا هي كالتالي:
              </p>

              <div className="social-grid">
                <div className="social-card">
                  <div className="social-icon-wrapper">
                    <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" />
                  </div>
                  <div className="social-content">
                    <h3>واتساب</h3>
                    <div className="contact-links">
                      <a href="https://wa.me/963968999505">
                        <FontAwesomeIcon icon={faPhone} /> 00963968999505
                      </a>
                      <a href="https://wa.me/963953210552">
                        <FontAwesomeIcon icon={faPhone} /> 00963953210552
                      </a>
                      <a href="https://wa.me/01012696180">
                        <FontAwesomeIcon icon={faPhone} /> 00201012696180
                      </a>
                    </div>
                  </div>
                </div>

                <div className="social-card">
                  <div className="social-icon-wrapper">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
                  </div>
                  <div className="social-content">
                    <h3>فيسبوك</h3>
                    <a href="https://www.facebook.com/share/1BX645JJXN/">
                      <FontAwesomeIcon icon={faGlobe} /> صفحتنا الرسمية
                    </a>
                  </div>
                </div>
              </div>

              <div className="warning-box">
                <FontAwesomeIcon icon={faCircleExclamation} className="warning-icon" />
                <p>
                  نؤكد أنه لا توجد لنا أي صفحات أو روابط أخرى، وأي جهة تدّعي تمثيلنا خارج هذه الروابط 
                  لا تمت لشركة Royal Study بأي صلة.
                </p>
              </div>

              <div className="description-box">
                <p>
                  نحن متخصصون في مساعدة الطلاب للدراسة في الخارج ( 🇪🇬 – مصر 🇸🇾 – سوريا 🇨🇳 – الصين )
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="contact-section">
            <div className="contact-info">
              <div className="contact-card">
                <h2>معلومات التواصل</h2>
                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div>
                      <h3>الهواتف</h3>
                      <div className="contact-details">
                        <p>00963968999505</p>
                        <p>00963953210552</p>
                        <p>00201012696180</p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <h3>البريد الإلكتروني</h3>
                      <div className="contact-details">
                        <a href="mailto:info@futuretostudy.com">dr.mosaabalothman2@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="addresses">
                <div className="address-card">
                  <div className="address-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="address-content">
                    <h3>العنوان فى مصر</h3>
                    <p>المنيا مركز المنيا جانب محطة القطر</p>
                  </div>
                </div>

                <div className="address-card">
                  <div className="address-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="address-content">
                    <h3>العنوان فى سوريا</h3>
                    <p>سوريا إدلب مدينة اطمة مركز الابتسامة السني جانب مشفى الحروق</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialization */}
          {/* <section className="specialization">
            <h2>الدراسة في أفضل الدول</h2>
            <div className="flags">
              <div className="flag">
                <span className="flag-icon">🇷🇺</span>
                <span className="country-name">روسيا</span>
              </div>
              <div className="flag">
                <span className="flag-icon">🇰🇬</span>
                <span className="country-name">قيرغيزستان</span>
              </div>
              <div className="flag">
                <span className="flag-icon">🇺🇿</span>
                <span className="country-name">أوزبكستان</span>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default About;