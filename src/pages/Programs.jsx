// src/pages/Programs.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from '../components/CTA'
import Header from '../components/Header';
import { 
  faSearch, 
  faGraduationCap, 
  faClock, 
  faDollarSign, 
  faLanguage,
  faCalendarAlt,
  faChevronRight,
  faFilter,
  faTimes,
  faStar,
  faBookOpen,
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import './Programs.css';

const Programs = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // كشف حجم الشاشة
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const programs = [
    // برامج مصر
    {
      id: 1,
      universityId: 1,
      universityName: "جامعة القاهرة",
      name: "الطب البشري",
      description: "برنامج متكامل في الطب البشري لمدة 6 سنوات، يقدم تعليماً طبياً عالي الجودة وفق المعايير الدولية.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "4000-8000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "31 يوليو 2024",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8
    },
    {
      id: 2,
      universityId: 1,
      universityName: "جامعة القاهرة",
      name: "هندسة الحاسوب",
      description: "برنامج متقدم في هندسة الحاسوب يركز على الذكاء الاصطناعي وأمن المعلومات وتطوير البرمجيات.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2,000-6,000 دولار سنوياً",
      language: "العربية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "31 يوليو 2024",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      rating: 4.6
    },
    {
      id: 3,
      universityId: 2,
      universityName: "الجامعة الأمريكية بالقاهرة",
      name: "إدارة الأعمال الدولية",
      description: "برنامج متخصص في إدارة الأعمال الدولية مع التركيز على الأسواق العالمية والاستراتيجيات الدولية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2000 - 5000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "15 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7
    },

    // برامج سوريا
    {
      id: 4,
      universityId: 3,
      universityName: "جامعة دمشق",
      name: "الصيدلة السريرية",
      description: "برنامج متقدم في الصيدلة السريرية يعد الطلاب لمهنة الصيدلة في المؤسسات الصحية المختلفة.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2,000 - 6,000 دولار سنوياً",
      language: "العربية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "20 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      rating: 4.5
    },
    {
      id: 5,
      universityId: 4,
      universityName: "جامعة حلب",
      name: "الهندسة المدنية",
      description: "برنامج شامل في الهندسة المدنية مع التركيز على التصميم والإنشاءات وإدارة المشاريع.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2,000 - 5,000 دولار سنوياً",
      language: "العربية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "10 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.4
    },

    // برامج الصين
    {
      id: 6,
      universityId: 5,
      universityName: "جامعة بكين",
      name: "طب الأسنان",
      description: "برنامج متكامل في طب الأسنان مع تدريب عملي مكثف في عيادات الجامعة والمستشفيات.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2,000 - 8,000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "25 يوليو 2024",
      image: "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      rating: 4.9
    },
    {
      id: 7,
      universityId: 6,
      universityName: "جامعة تشينغهوا",
      name: "هندسة الذكاء الاصطناعي",
      description: "برنامج رائد في هندسة الذكاء الاصطناعي مع التركيز على التعلم الآلي ومعالجة اللغات الطبيعية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2,000 - 6,000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "30 يونيو 2024",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8
    },
    {
      id: 8,
      universityId: 6,
      universityName: "جامعة تشينغهوا",
      name: "إدارة الأعمال العالمية",
      description: "برنامج متكامل في إدارة الأعمال العالمية مع دراسة حالات من الأسواق الصينية والدولية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "1,000 - 5,000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "30 يونيو 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7
    }
  ];

  // تصفية البرامج الدراسية
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDegree = selectedDegree === 'all' || program.degreeType === selectedDegree;
    const matchesLanguage = selectedLanguage === 'all' || program.language === selectedLanguage;
    const matchesDuration = selectedDuration === 'all' || program.duration.includes(selectedDuration);

    return matchesSearch && matchesDegree && matchesLanguage && matchesDuration;
  });

  return (
    <>
      <Header />
      <div className="programs-page">
        {/* قسم البحث والتصفية */}
        <div className="programs-hero">
          <div className="hero-content">
            <div className="hero-titles">
              <h1>اكتشف البرامج الدراسية</h1>
              <p>ابحث عن البرنامج المثالي لمستقبلك الأكاديمي والمهني</p>
            </div>

            <div className="search-container">
              <div className="search-input">
                <FontAwesomeIcon icon={faSearch} />
                <input
                  type="text"
                  placeholder="ابحث عن برنامج دراسي أو جامعة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="clear-btn"
                    onClick={() => setSearchTerm('')}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                )}
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <FontAwesomeIcon icon={faBookOpen} />
                <span>{programs.length}+ برامج دراسية</span>
              </div>
              <div className="stat-item">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>6+ جامعات</span>
              </div>
              <div className="stat-item">
                <FontAwesomeIcon icon={faUserGraduate} />
                <span>5000+ طالب</span>
              </div>
            </div>
          </div>
        </div>

        {/* قسم التصفية */}
        <div className="filter-section">
          <div className="container">
            <div className="filter-header">
              <h2>تصفية البرامج</h2>
              <button 
                className="mobile-filter-btn"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <FontAwesomeIcon icon={showMobileFilters ? faTimes : faFilter} />
                {showMobileFilters ? 'إغلاق الفلاتر' : 'عرض الفلاتر'}
              </button>
            </div>

            <div className={`filter-grid ${showMobileFilters ? 'mobile-active' : ''}`}>
              <div className="filter-group">
                <label>نوع الدرجة:</label>
                <select 
                  value={selectedDegree} 
                  onChange={(e) => setSelectedDegree(e.target.value)}
                >
                  <option value="all">جميع الدرجات</option>
                  <option value="بكالوريوس">بكالوريوس</option>
                  <option value="ماجستير">ماجستير</option>
                  <option value="دكتوراه">دكتوراه</option>
                </select>
              </div>

              <div className="filter-group">
                <label>لغة الدراسة:</label>
                <select 
                  value={selectedLanguage} 
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="all">جميع اللغات</option>
                  <option value="الإنجليزية">الإنجليزية</option>
                  <option value="العربية">العربية</option>
                  <option value="الصينية">الصينية</option>
                </select>
              </div>

              <div className="filter-group">
                <label>مدة الدراسة:</label>
                <select 
                  value={selectedDuration} 
                  onChange={(e) => setSelectedDuration(e.target.value)}
                >
                  <option value="all">جميع المدد</option>
                  <option value="4">4 سنوات</option>
                  <option value="5">5 سنوات</option>
                  <option value="6">6 سنوات</option>
                </select>
              </div>

              <button 
                className="close-modal"
                onClick={() => setShowMobileFilters(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
                إغلاق
              </button>
            </div>
          </div>
        </div>

        {/* قائمة البرامج الدراسية */}
        <div className="programs-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title">
                <h2>البرامج <span className="gold-text">الدراسية</span></h2>
                <p>تصفح مجموعة متنوعة من البرامج الأكاديمية المقدمة من أفضل الجامعات</p>
              </div>
              <div className="results-count">
                <span>عرض <strong>{filteredPrograms.length}</strong> من أصل <strong>{programs.length}</strong> برنامج</span>
              </div>
            </div>

            {filteredPrograms.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <h3>لم يتم العثور على برامج دراسية</h3>
                <p>جرب تغيير معايير البحث أو إعادة تعيين الفلاتر</p>
                <button 
                  className="reset-filters-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDegree('all');
                    setSelectedLanguage('all');
                    setSelectedDuration('all');
                  }}
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            ) : (
              <div className="programs-grid">
                {filteredPrograms.map(program => (
                  <div className="program-card" key={program.id}>
                    <div 
                      className="program-image"
                      style={{ backgroundImage: `url(${program.image})` }}
                    >
                      <div className="program-badge">
                        {program.degreeType}
                      </div>
                      <div className="program-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <span>{program.rating}</span>
                      </div>
                    </div>

                    <div className="program-content">
                      <div className="program-header">
                        <h3>{program.name}</h3>
                        <div className="university-badge">
                          <FontAwesomeIcon icon={faGraduationCap} />
                          <span>{program.universityName}</span>
                        </div>
                      </div>

                      <p className="program-description">{program.description}</p>

                      <div className="program-details">
                        <div className="detail">
                          <FontAwesomeIcon icon={faClock} />
                          <span>{program.duration}</span>
                        </div>
                        <div className="detail">
                          <FontAwesomeIcon icon={faDollarSign} />
                          <span>{program.tuitionFee}</span>
                        </div>
                        <div className="detail">
                          <FontAwesomeIcon icon={faLanguage} />
                          <span>{program.language}</span>
                        </div>
                        <div className="detail">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>يبدأ: {program.startDate}</span>
                        </div>
                      </div>

                      <div className="program-footer">
                        <div className="deadline">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>آخر موعد: {program.applicationDeadline}</span>
                        </div>
                        <Link to={`/program/${program.id}`} className="program-button">
                          {isMobile ? "التقديم" : "التفاصيل والتقديم"}
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* دعوة للاتصال */}
        {/* <div className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h3>هل تحتاج مساعدة في اختيار البرنامج الدراسي المناسب؟</h3>
              <p>فريقنا من المستشارين التعليميين متاح لمساعدتك في اتخاذ القرار الأنسب لمستقبلك الأكاديمي</p>
              <button className="cta-button">
                تواصل مع مستشار تعليمي
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>*/}
        <CTA />
      </div> 
    </>
  );
};

export default Programs;