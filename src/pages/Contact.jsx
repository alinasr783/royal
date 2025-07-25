import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faPaperPlane,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import Header from "../components/Header"
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Header />
    <div className="contact-container">
      {/* Banner Section */}
      <section className="banner">
        <h1>تواصل مع <span>رويال ستدي</span></h1>
        <p>نسهل رحلتك التعليمية من البداية حتى التخرج</p>
      </section>

      <div className="contact-content">
        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="form-header">
            <h2>أرسل لنا رسالة</h2>
            <p>سنرد عليك في أسرع وقت ممكن</p>
          </div>

          {isSubmitted ? (
            <div className="success-message">
              <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
              <h3>تم إرسال رسالتك بنجاح!</h3>
              <p>شكرًا لتواصلك معنا، سنرد عليك في أقرب وقت.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">الاسم بالكامل</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك بالكامل"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@domain.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+20XXXXXXXXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">موضوع الرسالة</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="عنوان الرسالة"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>جاري الإرسال...</span>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="info-card">
            <h2>معلومات التواصل</h2>

            <div className="contact-method">
              <div className="icon-container">
                <FontAwesomeIcon icon={faPhone} className="icon" />
              </div>
              <div className="contact-details">
                <h3>الهواتف</h3>
                <p>+996553080522</p>
                <p>+996554010636</p>
                <p>01014838489</p>
                <p>01080439225</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </div>
              <div className="contact-details">
                <h3>البريد الإلكتروني</h3>
                <p>info@futuretostudy.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
              </div>
              <div className="contact-details">
                <h3>العنوان فى مصر</h3>
                <p>محافظه بني سويف مركز ببا ، بجوار محطة القطار</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
              </div>
              <div className="contact-details">
                <h3>العنوان فى قيرغيزستان</h3>
                <p>قيرغيزستان - العاصمة بشكيك - شارع ابي شاه 37</p>
              </div>
            </div>
          </div>

          <div className="social-card">
            <h3>تابعنا على</h3>
            <div className="social-icons">
              <a href="https://wa.me/996553080522" className="social-icon whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.facebook.com/share/1HyFvTq9eX/" className="social-icon facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/royalastudyabroad" className="social-icon instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="http://tiktok.com/@royal.study1" className="social-icon tiktok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.youtube.com/@RoyalStudy0" className="social-icon youtube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Contact;