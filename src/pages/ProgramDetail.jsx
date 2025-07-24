import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import { 
  faChevronLeft, 
  faGraduationCap, 
  faClock, 
  faDollarSign, 
  faLanguage,
  faCalendarAlt,
  faUser,
  faEnvelope,
  faPhone,
  faCheckCircle,
  faBook,
  faBriefcase,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import './ProgramDetail.css';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const programs = [
    {
      id: 1,
      universityId: 1,
      universityName: "جامعة موسكو الحكومية",
      name: "الطب البشري",
      description: "برنامج متكامل في الطب البشري لمدة 6 سنوات، يقدم تعليماً طبياً عالي الجودة وفق المعايير الدولية.",
      longDescription: "يعد برنامج الطب البشري في جامعة موسكو الحكومية من أقدم وأعرق البرامج الطبية في روسيا. يمتد البرنامج لمدة 6 سنوات دراسية، حيث يغطي السنوات الأولى العلوم الطبية الأساسية، بينما تركز السنوات الأخيرة على التخصصات السريرية المختلفة. يتميز البرنامج بتدريب عملي مكثف في مستشفيات الجامعة التابعة، مع فرص للتدريب الدولي والتبادل الطلابي. يحصل الخريجون على شهادة معترف بها عالمياً تمكنهم من ممارسة الطب في مختلف دول العالم.",
      duration: "6 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3500 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "31 يوليو 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 85%",
        "إجادة اللغة الإنجليزية (TOEFL 80 أو IELTS 6.0)",
        "اجتياز المقابلة الشخصية",
        "شهادة صحية"
      ],
      careerOpportunities: [
        "طبيب عام في المستشفيات والعيادات",
        "التخصص في مختلف المجالات الطبية",
        "البحث العلمي في المؤسسات البحثية",
        "العمل في المنظمات الصحية الدولية"
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
    },
    {
      id: 2,
      universityId: 1,
      universityName: "جامعة موسكو الحكومية",
      name: "هندسة الحاسوب",
      description: "برنامج متقدم في هندسة الحاسوب يركز على الذكاء الاصطناعي وأمن المعلومات وتطوير البرمجيات.",
      longDescription: "يقدم هذا البرنامج تعليماً شاملاً في مجال هندسة الحاسوب مع تركيز خاص على التقنيات الحديثة مثل الذكاء الاصطناعي، تعلم الآلة، وأمن الشبكات. يتضمن المنهج تدريباً عملياً مكثفاً في مختبرات الجامعة المجهزة بأحدث الأجهزة، بالإضافة إلى فرص للتدريب في شركات التكنولوجيا الرائدة. البرنامج معتمد دولياً ويمنح الخريجين مهارات تنافسية في سوق العمل العالمي.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3200 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "31 يوليو 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 80%",
        "خلفية قوية في الرياضيات والفيزياء",
        "إجادة اللغة الإنجليزية (TOEFL 78 أو IELTS 5.5)",
        "اجتياز اختبار القبول التقني"
      ],
      careerOpportunities: [
        "مهندس برمجيات في الشركات التقنية",
        "متخصص أمن المعلومات",
        "مطور أنظمة ذكاء اصطناعي",
        "باحث في مراكز التطوير التكنولوجي"
      ],
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      universityId: 2,
      universityName: "جامعة سانت بطرسبرغ",
      name: "إدارة الأعمال الدولية",
      description: "برنامج متخصص في إدارة الأعمال الدولية مع التركيز على الأسواق العالمية والاستراتيجيات الدولية.",
      longDescription: "تم تصميم هذا البرنامج لإعداد قادة الأعمال المستقبليين للعمل في البيئات الدولية المعقدة. يغطي المنهج موضوعات متقدمة في التسويق العالمي، التمويل الدولي، إدارة سلسلة التوريد، والاستراتيجيات عبر الثقافات. يتضمن البرنامج زيارات ميدانية لشركات متعددة الجنسيات وفرص تبادل مع جامعات شريكة في أوروبا وآسيا.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "15 أغسطس 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 75%",
        "إجادة اللغة الإنجليزية (TOEFL 75 أو IELTS 5.5)",
        "خطاب تحفيزي يوضح اهتمام الطالب بالأعمال الدولية",
        "مقابلة شخصية"
      ],
      careerOpportunities: [
        "مدير مشاريع دولية",
        "محلل أسواق عالمية",
        "مستشار أعمال دولي",
        "مدير تطوير أعمال في الشركات متعددة الجنسيات"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      universityId: 3,
      universityName: "جامعة الفارابي الوطنية",
      name: "الصيدلة السريرية",
      description: "برنامج متقدم في الصيدلة السريرية يعد الطلاب لمهنة الصيدلة في المؤسسات الصحية المختلفة.",
      longDescription: "يركز هذا البرنامج على الجوانب العملية والعلمية للصيدلة السريرية، مع تركيز خاص على التفاعلات الدوائية، الرعاية الصيدلانية، وإدارة الأدوية. يتضمن تدريباً عملياً في مستشفيات الجامعة وصيدليات المجتمع، مع فرص للبحث في تطوير الأدوية. البرنامج معتمد من قبل المجلس الدولي للصيدلة ويؤهل الخريجين للحصول على تراخيص الممارسة في العديد من الدول.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2800 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "20 أغسطس 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 80%",
        "خلفية قوية في الكيمياء والأحياء",
        "إجادة اللغة الإنجليزية (TOEFL 76 أو IELTS 6.0)",
        "شهادة صحية"
      ],
      careerOpportunities: [
        "صيدلي سريري في المستشفيات",
        "باحث في تطوير الأدوية",
        "مراجع أدوية في وكالات الرقابة الصحية",
        "استشاري صيدلاني في شركات الأدوية"
      ],
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 5,
      universityId: 4,
      universityName: "جامعة نزارباييف",
      name: "الهندسة الميكانيكية",
      description: "برنامج شامل في الهندسة الميكانيكية مع التركيز على التصميم والتصنيع والروبوتات.",
      longDescription: "يجمع هذا البرنامج بين الأسس النظرية القوية والتطبيقات العملية في مجال الهندسة الميكانيكية. يركز على التصميم الميكانيكي المتقدم، أنظمة التصنيع الآلي، والروبوتات الصناعية. يتضمن البرنامج مشاريع تصميم سنوية وفرص تدريب في شركات صناعية رائدة، مع إمكانية التخصص في مجال الروبوتات أو الطاقة المتجددة في السنوات الأخيرة.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3400 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "10 أغسطس 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 80%",
        "خلفية قوية في الرياضيات والفيزياء",
        "إجادة اللغة الإنجليزية (TOEFL 80 أو IELTS 6.0)",
        "اجتياز اختبار القبول الهندسي"
      ],
      careerOpportunities: [
        "مهندس تصميم ميكانيكي",
        "مهندس تصنيع وإنتاج",
        "متخصص في أنظمة الروبوتات الصناعية",
        "مهندس صيانة في المصانع الكبرى"
      ],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      universityId: 5,
      universityName: "الجامعة الدولية في قيرغيزستان",
      name: "طب الأسنان",
      description: "برنامج متكامل في طب الأسنان مع تدريب عملي مكثف في عيادات الجامعة والمستشفيات.",
      longDescription: "يوفر هذا البرنامج تعليماً شاملاً في طب الأسنان مع تركيز قوي على المهارات السريرية. يتدرج الطلاب من دراسة العلوم الأساسية إلى الممارسة السريرية الكاملة تحت إشراف أساتذة متخصصين. تشمل المرافق الحديثة عيادات مجهزة بأحدث التقنيات ومختبرات محاكاة متطورة. البرنامج معترف به من قبل المنظمات الدولية لطب الأسنان.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2900 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "25 يوليو 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 85%",
        "خلفية قوية في الأحياء والكيمياء",
        "إجادة اللغة الإنجليزية (TOEFL 80 أو IELTS 6.0)",
        "اجتياز المقابلة العملية"
      ],
      careerOpportunities: [
        "طبيب أسنان عام",
        "أخصائي تقويم الأسنان",
        "طبيب أسنان تجميلي",
        "باحث في مجال صحة الفم والأسنان"
      ],
      image: "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
    },
    {
      id: 7,
      universityId: 6,
      universityName: "جامعة آسيا الوسطى",
      name: "الاقتصاد والتمويل",
      description: "برنامج متخصص في الاقتصاد والتمويل يغطي الأسواق المالية والاستثمارات والاقتصاد العالمي.",
      longDescription: "يجمع هذا البرنامج بين النظرية الاقتصادية المتقدمة والتطبيقات العملية في الأسواق المالية. يركز على تحليل الاقتصاد الكلي، إدارة المحافظ الاستثمارية، تقييم المخاطر المالية، والاقتصاد السلوكي. يتضمن البرنامج استخدام برامج محاكاة الأسواق المالية وفرص تدريب في مؤسسات مالية رائدة، مع اهتمام خاص باقتصاديات منطقة آسيا الوسطى.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3100 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "5 أغسطس 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 75%",
        "خلفية قوية في الرياضيات",
        "إجادة اللغة الإنجليزية (TOEFL 75 أو IELTS 5.5)",
        "كتابة مقال حول اتجاهات الاقتصاد العالمي"
      ],
      careerOpportunities: [
        "محلل مالي في البنوك",
        "مدير محافظ استثمارية",
        "باحث اقتصادي",
        "مستشار استثماري"
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      universityId: 7,
      universityName: "الجامعة الوطنية في أوزبكستان",
      name: "الهندسة الكهربائية",
      description: "برنامج متقدم في الهندسة الكهربائية مع التركيز على أنظمة الطاقة المتجددة والشبكات الذكية.",
      longDescription: "يركز هذا البرنامج على التقنيات الحديثة في مجال الهندسة الكهربائية، خاصة أنظمة الطاقة الخضراء، الشبكات الذكية، وأنظمة التحكم الآلي. يتضمن المنهج تدريباً عملياً في مختبرات متقدمة وشراكات مع شركات الطاقة المحلية والعالمية. يكتسب الطلاب خبرة في تصميم أنظمة الطاقة المستدامة وإدارة الشبكات الكهربائية الذكية، مع إمكانية التخصص في مجال الطاقة المتجددة.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3300 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "15 أغسطس 2024",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 80%",
        "خلفية قوية في الرياضيات والفيزياء",
        "إجادة اللغة الإنجليزية (TOEFL 78 أو IELTS 6.0)",
        "اجتياز اختبار القدرات الهندسية"
      ],
      careerOpportunities: [
        "مهندس أنظمة طاقة متجددة",
        "متخصص في الشبكات الكهربائية الذكية",
        "مهندس تحكم آلي",
        "باحث في تطوير أنظمة الطاقة المستدامة"
      ],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // العثور على البرنامج المحدد
  const program = programs.find(p => p.id === parseInt(id));

  if (!program) {
    return (
      <div className="program-not-found">
        <h2>البرنامج الدراسي غير موجود</h2>
        <button onClick={() => navigate('/programs')} className="back-button">
          العودة إلى البرامج الدراسية
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <>
      <Header/>
      <div className="program-detail-page">
        <button onClick={() => navigate('/programs')} className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} /> العودة
        </button>

        <div className="program-header">
          <div className="container">
            <div className="program-title">
              <h1>{program.name}</h1>
              <p>{program.universityName}</p>
            </div>

            <div className="program-meta">
              <div className="meta-item">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>{program.degreeType}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faClock} />
                <span>{program.duration}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faDollarSign} />
                <span>{program.tuitionFee}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faLanguage} />
                <span>{program.language}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="program-content">
            <div className="program-details">
              <div className="program-image-container">
                <div 
                  className="program-image"
                  style={{ backgroundImage: `url(${program.image})` }}
                ></div>
              </div>

              <div className="program-info">
                <h2>نظرة عامة على البرنامج</h2>
                <p>{program.longDescription}</p>

                <div className="info-sections-grid">
                  <div className="info-section">
                    <h3>
                      <FontAwesomeIcon icon={faBook} className="section-icon" />
                      متطلبات القبول
                    </h3>
                    <ul>
                      {program.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="info-section">
                    <h3>
                      <FontAwesomeIcon icon={faBriefcase} className="section-icon" />
                      فرص العمل بعد التخرج
                    </h3>
                    <ul>
                      {program.careerOpportunities.map((opp, index) => (
                        <li key={index}>{opp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="program-dates">
                  <div className="date-card">
                    <FontAwesomeIcon icon={faCalendarAlt} className="date-icon" />
                    <div>
                      <h4>بداية الدراسة</h4>
                      <p>{program.startDate}</p>
                    </div>
                  </div>
                  <div className="date-card">
                    <FontAwesomeIcon icon={faCalendarCheck} className="date-icon" />
                    <div>
                      <h4>آخر موعد للتقديم</h4>
                      <p>{program.applicationDeadline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* نموذج التقديم */}
            <div className="application-form">
              <h2>تقديم طلب الالتحاق</h2>
              <p>املأ النموذج التالي لتقديم طلب الالتحاق بهذا البرنامج</p>

              {isSubmitted ? (
                <div className="success-message">
                  <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                  <h3>تم استلام طلبك بنجاح!</h3>
                  <p>سيتصل بك مستشارنا التعليمي خلال 24 ساعة لتأكيد تفاصيل طلبك</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faUser} />
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faEnvelope} />
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <FontAwesomeIcon icon={faPhone} />
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>

                  <div className="form-group">
                    <label>رسالة إضافية (اختياري)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="أضف أي معلومات إضافية تريد مشاركتها معنا"
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="form-note">
                    <p>بعد تقديم الطلب، سيتصل بك مستشارنا التعليمي خلال 24 ساعة لتأكيد تفاصيل طلبك والخطوات التالية.</p>
                  </div>

                  <button type="submit" className="submit-button">
                    تقديم الطلب الآن
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetail;