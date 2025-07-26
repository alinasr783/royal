import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot,
  faPaperPlane,
  faCheckCircle,
  faChevronDown,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faFacebook,
  faGoogle
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
  const [activeTab, setActiveTab] = useState('egypt');
  const [activeFaq, setActiveFaq] = useState(null);
  const [error, setError] = useState('');
  const [showEmailInfo, setShowEmailInfo] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('البريد الإلكتروني غير صحيح');
      return;
    }

    // بناء نص الرسالة بشكل منظم
    const bodyText = `
اسم المرسل: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}

موضوع الرسالة:
${formData.subject}

نص الرسالة:
${formData.message}
    `;

    // بناء رابط Gmail
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dr.mosaabalothman2@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(bodyText)}`;

    // إظهار رسالة توضيحية قبل فتح Gmail
    setShowEmailInfo(true);

    // تأخير فتح نافذة Gmail لرؤية الرسالة التوضيحية
    setTimeout(() => {
      // فتح نافذة جديدة لـ Gmail
      window.open(gmailUrl, '_blank');
      setShowEmailInfo(false);

      // إظهار رسالة نجاح
      setIsSubmitted(true);

      // إعادة تعيين النموذج
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // إخفاء رسالة النجاح بعد 5 ثوان
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
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
                <h3>تم إعداد رسالتك بنجاح!</h3>
                <p>تم فتح نافذة Gmail لتتمكن من إرسال رسالتك مباشرةً.</p>
                <p className="success-tip">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  <span>يرجى الضغط على زر الإرسال في نافذة Gmail لإكمال العملية</span>
                </p>
              </div>
            ) : showEmailInfo ? (
              <div className="gmail-info">
                <div className="gmail-icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </div>
                <h3>جاري فتح تطبيق Gmail...</h3>
                <p>سيتم فتح نافذة جديدة لتطبيق Gmail لإكمال عملية إرسال رسالتك</p>
                <div className="loading-spinner"></div>
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
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>إرسال الرسالة عبر Gmail</span>
                </button>

                <div className="form-note">
                  <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                  <span>سيتم فتح نافذة Gmail لإكمال عملية الإرسال</span>
                </div>
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
                  href="https://wa.me/201012696180" 
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