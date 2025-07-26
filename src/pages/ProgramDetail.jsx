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
  faCheckCircle,
  faBook,
  faBriefcase,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
// استيراد أيقونة واتساب من الحزمة الصحيحة
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ProgramDetail.css';
import { countriesData } from '../lib/educationData';

const ProgramDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWhatsappSending, setIsWhatsappSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
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

  // استخراج جميع البرامج من الجامعات في الدول الجديدة
  const newPrograms = countriesData.flatMap(country =>
    country.universities.flatMap(uni =>
      uni.programs.map(programName => ({
        id: `${country.id}${uni.id}${programName.length}`,
        universityId: uni.id,
        universityName: uni.name,
        countryName: country.name,
        name: programName,
        description: `برنامج ${programName} في ${uni.name} (${country.name})`,
        longDescription: `برنامج ${programName} في ${uni.name} (${country.name}) معتمد دولياً ويؤهل الطلاب لسوق العمل العالمي.`,
        duration: programName.includes('طب') ? '6 سنوات' : '4 سنوات',
        degreeType: programName.includes('دكتوراه') ? 'دكتوراه' : programName.includes('ماجستير') ? 'ماجستير' : 'بكالوريوس',
        tuitionFee: country.studyCost,
        language: country.language,
        startDate: 'سبتمبر 2024',
        applicationDeadline: '1 يوليو 2024',
        requirements: [
          'شهادة الثانوية العامة أو ما يعادلها',
          'صورة جواز السفر',
          'صور شخصية',
          'شهادة صحية',
        ],
        careerOpportunities: [
          'العمل في المجال الأكاديمي أو المهني المتخصص',
          'فرص بحثية أو دراسات عليا',
          'العمل في شركات دولية أو محلية'
        ],
        image: uni.image
      })
    )
  );

  // دمج البرامج القديمة مع البرامج الجديدة
  const programs = [
    // Egypt Programs
    {
      id: 1,
      universityId: 1,
      universityName: "جامعة القاهرة",
      name: "الطب البشري",
      description: "برنامج الطب البشري المعتمد من المجلس الأعلى للجامعات المصرية",
      longDescription: "يقدم برنامج الطب البشري بجامعة القاهرة تعليماً طبياً متكاملاً وفقاً لمعايير الجودة المصرية والعربية. تمتد الدراسة لست سنوات تشمل العلوم الأساسية والسريرية، مع تدريب عملي في مستشفيات جامعة القاهرة التابعة. يحصل الخريجون على درجة البكالوريوس في الطب والجراحة المعترف بها في مصر والدول العربية.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "4000-8000 دولار سنويا ",
      language: "العربية و الانجليزية",
      startDate: "سبتمبر من كل عام",
      applicationDeadline: "31 يوليو",
      requirements: [
        "شهادة الثانوية العامة (علمي علوم) بمجموع لا يقل عن 90%",
        "اجتياز اختبار القبول الذي تعقده الجامعة",
        "شهادة ميلاد حديثة",
        "عدد 6 صور شخصية",
        "بطاقة صحية من المستشفى الجامعي"
      ],
      careerOpportunities: [
        "طبيب امتياز في المستشفيات الجامعية",
        "التخصص في مختلف المجالات الطبية",
        "العمل في المستشفيات الحكومية والخاصة",
        "البحث العلمي في المراكز البحثية"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      universityId: 2,
      universityName: "الجامعة الأمريكية بالقاهرة",
      name: "هندسة الحاسبات",
      description: "برنامج هندسة الحاسبات المعتمد من ABET",
      longDescription: "يقدم قسم هندسة الحاسبات بالجامعة الأمريكية بالقاهرة برنامجاً دراسياً متكاملاً في مجال هندسة الحاسبات مع التركيز على الجوانب النظرية والعملية. يتميز البرنامج بوجود مختبرات متطورة وشراكات مع شركات التكنولوجيا العالمية. يحصل الخريجون على درجة معتمدة دولياً تؤهلهم للعمل في كبرى الشركات التكنولوجية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3,000-4,000 دولار سنويا",
      language: "الإنجليزية",
      startDate: "سبتمبر/يناير",
      applicationDeadline: "1 مارس للفصل الخريفي، 1 أكتوبر للفصل الربيعي",
      requirements: [
        "شهادة الثانوية العامة أو ما يعادلها بمعدل لا يقل عن 85%",
        "إجادة اللغة الإنجليزية (TOEFL iBT 80 أو IELTS 6.5)",
        "اجتياز اختبار SAT I بحد أدنى 1100",
        "خطاب توصية",
        "مقال شخصي"
      ],
      careerOpportunities: [
        "مهندس برمجيات",
        "مهندس أنظمة حاسوب",
        "متخصص أمن معلومات",
        "باحث في مجال الحوسبة"
      ],
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },

    // Syria Programs
    {
      id: 3,
      universityId: 3,
      universityName: "جامعة دمشق",
      name: "طب الأسنان",
      description: "برنامج طب الأسنان المعتمد من وزارة التعليم العالي السورية",
      longDescription: "يقدم برنامج طب الأسنان بجامعة دمشق تعليماً متكاملاً في مجال طب وجراحة الفم والأسنان. تشمل الدراسة خمس سنوات من التعليم النظري والعملي، مع تدريب سريري في المستشفيات الجامعية. يحصل الخريجون على درجة دكتور في طب الأسنان المعترف بها في سوريا والدول العربية.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "5000-2500 دولار سنويا ",
      language: "العربية",
      startDate: "سبتمبر",
      applicationDeadline: "31 أغسطس",
      requirements: [
        "شهادة الثانوية العامة (علمي) بمعدل لا يقل عن 90%",
        "اجتياز اختبار القبول",
        "شهادة صحية",
        "صور شخصية",
        "وثيقة عدم محكومية"
      ],
      careerOpportunities: [
        "طبيب أسنان عام",
        "أخصائي في أحد تخصصات طب الأسنان",
        "باحث في مجال صحة الفم والأسنان",
        "أستاذ في كليات طب الأسنان"
      ],
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 4,
      universityId: 4,
      universityName: "جامعة حلب",
      name: "الهندسة المدنية",
      description: "برنامج الهندسة المدنية المعتمد من وزارة التعليم العالي السورية",
      longDescription: "يقدم قسم الهندسة المدنية بجامعة حلب برنامجاً دراسياً شاملاً في مجال الهندسة المدنية، مع التركيز على التصميم الإنشائي ومواد البناء وإدارة المشاريع. تشمل الدراسة خمس سنوات من التعليم النظري والعملي، مع تدريب ميداني في مواقع الإنشاءات. يحصل الخريجون على درجة مهندس مدني معترف بها في سوريا.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2000 دولار سنويا ",
      language: "العربية",
      startDate: "سبتمبر",
      applicationDeadline: "31 أغسطس",
      requirements: [
        "شهادة الثانوية العامة (علمي) بمعدل لا يقل عن 80%",
        "اجتياز اختبار القبول",
        "شهادة صحية",
        "صور شخصية",
        "وثيقة عدم محكومية"
      ],
      careerOpportunities: [
        "مهندس تصميم إنشائي",
        "مهندس موقع",
        "مهندس مراقبة جودة",
        "باحث في مجال مواد البناء"
      ],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },

    // China Programs
    {
      id: 5,
      universityId: 5,
      universityName: "جامعة بكين",
      name: "الطب البشري (MBBS)",
      description: "برنامج الطب البشري باللغة الإنجليزية المعتمد من WHO",
      longDescription: "يقدم برنامج الطب البشري (MBBS) بجامعة بكين تعليماً طبياً باللغة الإنجليزية وفقاً للمعايير الدولية. تمتد الدراسة لست سنوات تشمل العلوم الطبية الأساسية والسريرية، مع تدريب عملي في المستشفيات الجامعية. يحصل الخريجون على درجة معترف بها عالمياً وتؤهلهم لمزاولة الطب بعد اجتياز الامتحانات المهنية في بلدانهم.",
      duration: "6 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "45,000 يوان صيني سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر",
      applicationDeadline: "30 يونيو",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 85%",
        "إجادة اللغة الإنجليزية (TOEFL 80 أو IELTS 6.0)",
        "شهادة صحية",
        "جواز سفر ساري المفعول",
        "صور شخصية"
      ],
      careerOpportunities: [
        "طبيب عام",
        "متخصص في مختلف المجالات الطبية",
        "باحث طبي",
        "أستاذ في كليات الطب"
      ],
      image: "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
    },
    {
      id: 6,
      universityId: 6,
      universityName: "جامعة تشينغهوا",
      name: "هندسة الحاسوب والذكاء الاصطناعي",
      description: "برنامج متقدم في هندسة الحاسوب والذكاء الاصطناعي",
      longDescription: "يقدم برنامج هندسة الحاسوب والذكاء الاصطناعي بجامعة تشينغهوا تعليماً متقدماً في مجال الحوسبة وتقنيات الذكاء الاصطناعي. يشمل المنهج دراسة متعمقة في خوارزميات الذكاء الاصطناعي، تعلم الآلة، ومعالجة البيانات الكبيرة. يتميز البرنامج بشراكات مع كبرى شركات التكنولوجيا الصينية مثل Huawei وTencent.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "40,000 يوان صيني سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر",
      applicationDeadline: "31 مايو",
      requirements: [
        "شهادة الثانوية العامة بمعدل لا يقل عن 90%",
        "إجادة اللغة الإنجليزية (TOEFL 90 أو IELTS 6.5)",
        "خلفية قوية في الرياضيات والفيزياء",
        "جواز سفر ساري المفعول",
        "صور شخصية"
      ],
      careerOpportunities: [
        "مهندس برمجيات",
        "متخصص في الذكاء الاصطناعي",
        "باحث في علوم الحاسوب",
        "مطور أنظمة ذكية"
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    ...newPrograms
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

  const sendWhatsappMessage = () => {
    if (!formData.name.trim()) {
      alert("يرجى إدخال اسمك قبل الإرسال");
      return;
    }

    setIsWhatsappSending(true);

    // بناء رسالة واتساب
    const message = `طلب التحاق بالبرنامج الدراسي:

البرنامج: ${program.name}
الجامعة: ${program.universityName}

اسم الطالب: ${formData.name}

الرسالة: ${formData.message || 'لا توجد رسالة إضافية'}`;

    // ترميز الرسالة لاستخدامها في رابط واتساب
    const encodedMessage = encodeURIComponent(message);

    // إنشاء رابط واتساب
    const whatsappUrl = `https://wa.me/201012696180?text=${encodedMessage}`;

    // فتح واتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');

    // إعادة تعيين الحقول وإظهار رسالة النجاح
    setTimeout(() => {
      setIsWhatsappSending(false);
      setIsSubmitted(true);
      setFormData({ name: '', message: '' });

      // إخفاء رسالة النجاح بعد 5 ثوان
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
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
                  <h3>تم إرسال طلبك بنجاح!</h3>
                  <p>سيتم التواصل معك قريباً عبر واتساب لتأكيد تفاصيل طلبك</p>
                </div>
              ) : (
                <form onSubmit={(e) => e.preventDefault()}>
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
                    <p>بعد تقديم الطلب، سيتصل بك مستشارنا التعليمي عبر واتساب لتأكيد تفاصيل طلبك والخطوات التالية.</p>
                  </div>

                  <button 
                    type="button" 
                    className={`submit-button whatsapp-button ${isWhatsappSending ? 'sending' : ''}`}
                    onClick={sendWhatsappMessage}
                    disabled={isWhatsappSending}
                  >
                    {isWhatsappSending ? (
                      <>
                        <span className="spinner"></span>
                        جارٍ الإرسال...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        إرسال الطلب عبر واتساب
                      </>
                    )}
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