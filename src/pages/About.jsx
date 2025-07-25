import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header"
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
        <h1>تواصل مع <span>رويال ستدي</span></h1>
        <p>نسهل رحلتك التعليمية من البداية حتى التخرج</p>
      </section>

      {/* Official Announcement */}
      <section className="announcement">
        <div className="announcement-header">
          <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
          <h2>تنويه رسمي من شركة Royal Study للدراسة بالخارج</h2>
        </div>
        <div className="announcement-content">
          <p>حرصًا منا على الشفافية والثقة، نود إعلامكم أن روابط التواصل الرسمية الوحيدة الخاصة بنا هي كالتالي:</p>

          <div className="social-grid">
            <div className="social-card">
              <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp" />
              <div>
                <h3>واتساب</h3>
                <a href="https://wa.me/996553080522">996553080522+</a>
                <a href="https://wa.me/996554010636">996554010636+</a>
              </div>
            </div>

            <div className="social-card">
              <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
              <div>
                <h3>فيسبوك</h3>
                <a href="https://www.facebook.com/share/1HyFvTq9eX/">صفحتنا الرسمية</a>
              </div>
            </div>

            <div className="social-card">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
              <div>
                <h3>إنستجرام</h3>
                <a href="https://www.instagram.com/royalastudyabroad">royalastudyabroad</a>
              </div>
            </div>

            <div className="social-card">
              <FontAwesomeIcon icon={faTiktok} className="social-icon tiktok" />
              <div>
                <h3>تيك توك</h3>
                <a href="http://tiktok.com/@royal.study1">royal.study1</a>
              </div>
            </div>

            <div className="social-card">
              <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" />
              <div>
                <h3>يوتيوب</h3>
                <a href="https://www.youtube.com/@RoyalStudy0">RoyalStudy0</a>
              </div>
            </div>
          </div>

          <p className="warning">
            📌 نؤكد أنه لا توجد لنا أي صفحات أو روابط أخرى، وأي جهة تدّعي تمثيلنا خارج هذه الروابط 
            لا تمت لشركة Royal Study بأي صلة.
          </p>

          <p className="description">
            🎓 نحن متخصصون في مساعدة الطلاب للدراسة في الخارج (روسيا 🇷🇺 – قيرغيزستان 🇰🇬 – أوزبكستان 🇺🇿)
            ونوفر الدعم الكامل من أول التقديم حتى التخرج.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="contact-card">
          <h2>معلومات التواصل</h2>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              <h3>الهواتف</h3>
              <p>+996553080522</p>
              <p>+996554010636</p>
              <p>01014838489</p>
              <p>01080439225</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div>
              <h3>البريد الإلكتروني</h3>
              <p>info@futuretostudy.com</p>
            </div>
          </div>
        </div>

        <div className="addresses">
          <div className="address-card">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <div>
              <h3>العنوان فى مصر</h3>
              <p>محافظه بني سويف مركز ببا ، بجوار محطة القطار</p>
            </div>
          </div>

          <div className="address-card">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <div>
              <h3>العنوان فى قيرغيزستان</h3>
              <p>قيرغيزستان - العاصمة بشكيك - شارع ابي شاه 37</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section className="specialization">
        <h2>الدراسة في أفضل الدول</h2>
        <div className="flags">
          <div className="flag">روسيا 🇷🇺</div>
          <div className="flag">قيرغيزستان 🇰🇬</div>
          <div className="flag">أوزبكستان 🇺🇿</div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;