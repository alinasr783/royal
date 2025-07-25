import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faPaperPlane,
  faCheckCircle,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import Header from "../components/Header";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('egypt');
  const [activeFaq, setActiveFaq] = useState(null);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('البريد الإلكتروني غير صحيح');
      setIsLoading(false);
      return;
    }

    try {
      // إرسال البيانات إلى الخادم
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_4y4s1y8',
          template_id: 'template_1q3b6jo',
          user_id: 'Kk9R2vqFvF8d9vDdJ',
          template_params: {
            to_email: 'dr.mosaabalothman2@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
          }
        })
      });

      if (!response.ok) {
        throw new Error('فشل في إرسال الرسالة');
      }

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
    } catch (err) {
      setIsLoading(false);
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      console.error('Error sending email:', err);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: 'ما هي مدة الرد على استفساراتي؟',
      answer: 'نحن نرد على جميع الاستفسارات خلال 24 ساعة عمل. في حالات الطوارئ، يمكنك التواصل معنا عبر الواتساب للحصول على رد فوري.'
    },
    {
      question: 'هل تقدمون استشارات مجانية؟',
      answer: 'نعم، نقدم استشارات مجانية أولية لجميع الطلاب المهتمين بالدراسة في الخارج. يمكنك حجز موعد عبر الموقع أو الاتصال بنا مباشرة.'
    },
    {
      question: 'ما هي الدول التي تقدمون خدماتكم فيها؟',
      answer: ' الدراسة في مصر ولكن نقدم خدمات استشارية في العديد من الدول الأخرى مثل سوريا والصين. '
    },
    {
      question: 'هل لديكم فروع أخرى؟',
      answer: ' نعمل عمل اضافة فرع جديد في القاهرة  '
    }
  ];

  return (
    <>
      <Header />
      <div className="contact-container">
        {/* Banner Section */}
        <section className="banner">
          <div className="banner-content">
            <h1>تواصل مع <span>رويال ستدي</span></h1>
            <p>نسهل رحلتك التعليمية من البداية حتى التخرج</p>
            <div className="gold-line"></div>
          </div>
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
              <form onSubmit={handleSubmit} className="contact-form" ref={formRef}>
                {error && <div className="error-message">{error}</div>}

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
                  <p>00963953210552</p>
                  <p>00963968999505</p>
                  <p>00201012696180</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon-container">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </div>
                <div className="contact-details">
                  <h3>البريد الإلكتروني</h3>
                  <p>dr.mosaabalothman2@gmail.com</p>
                </div>
              </div>

              <div className="location-tabs">
                <button 
                  className={`tab-btn ${activeTab === 'egypt' ? 'active' : ''}`}
                  onClick={() => setActiveTab('egypt')}
                >
                  العنوان فى مصر
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'kyrgyzstan' ? 'active' : ''}`}
                  onClick={() => setActiveTab('kyrgyzstan')}
                >
                  العنوان فى سوريا
                </button>
              </div>

              <div className="location-details">
                {activeTab === 'egypt' ? (
                  <div className="contact-method">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    </div>
                    <div className="contact-details">
                      <h3>العنوان فى مصر</h3>
                      <p> المنيا - مركز المنيا - جانب محطة القطر </p>
                      <div className="map-placeholder">
                        <div className="map-overlay">
                          <p>خريطة تفاعلية للموقع في مصر</p>
                          <button className="view-map-btn">عرض الخريطة</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="contact-method">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    </div>
                    <div className="contact-details">
                      <h3>العنوان في سوريا</h3>
                      <p>سوريا - ادلب - مدينة اطمة - مركز الابتسامة السني - جانب مشفى الحروق</p>
                      <div className="map-placeholder">
                        <div className="map-overlay">
                          <p>خريطة تفاعلية للموقع في سوريا</p>
                          <button className="view-map-btn">عرض الخريطة</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="social-card">
              <div className="social-header">
                <h3>تواصل معنا عبر</h3>
                <p>تابعنا على منصات التواصل الاجتماعي</p>
              </div>

              <div className="social-icons-grid">
                <a 
                  href="https://wa.me/996553080522" 
                  className="social-icon whatsapp"
                  aria-label="واتساب"
                >
                  <div className="social-icon-inner">
                    <FontAwesomeIcon icon={faWhatsapp} className="social-icon-svg" />
                    <span className="social-tooltip">تواصل عبر واتساب</span>
                  </div>
                </a>

                <a 
                  href="https://www.facebook.com/share/1BX645JJXN/" 
                  className="social-icon facebook"
                  aria-label="فيسبوك"
                >
                  <div className="social-icon-inner">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon-svg" />
                    <span className="social-tooltip">تابعنا على فيسبوك</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="section-header">
            <h2>أسئلة شائعة</h2>
            <p>إجابات على أكثر الأسئلة شيوعًا</p>
          </div>

          <div className="faq-container">
            {faqItems.map((item, index) => (
              <div 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`faq-icon ${activeFaq === index ? 'active' : ''}`} 
                  />
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>مستعد لبدء رحلتك التعليمية؟</h2>
            <p>اتصل بنا الآن واحصل على استشارة مجانية</p>
            <div className="cta-buttons">
              <a href="tel:+963953210552" className="cta-btn phone-btn">
                <FontAwesomeIcon icon={faPhone} />
                <span>اتصل بنا</span>
              </a>
              <a href="https://wa.me/963953210552" className="cta-btn whatsapp-btn2">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>واتساب الآن</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;