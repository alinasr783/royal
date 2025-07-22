import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
} from '@fortawesome/free-solid-svg-icons';
import './Programs.css';

const Programs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // بيانات البرامج الدراسية
  const programs = [
    {
      id: 1,
      universityId: 1,
      universityName: "جامعة موسكو الحكومية",
      name: "الطب البشري",
      description: "برنامج متكامل في الطب البشري لمدة 6 سنوات، يقدم تعليماً طبياً عالي الجودة وفق المعايير الدولية.",
      duration: "6 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3500 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "31 يوليو 2024",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
    },
    {
      id: 2,
      universityId: 1,
      universityName: "جامعة موسكو الحكومية",
      name: "هندسة الحاسوب",
      description: "برنامج متقدم في هندسة الحاسوب يركز على الذكاء الاصطناعي وأمن المعلومات وتطوير البرمجيات.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3200 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "31 يوليو 2024",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      universityId: 2,
      universityName: "جامعة سانت بطرسبرغ",
      name: "إدارة الأعمال الدولية",
      description: "برنامج متخصص في إدارة الأعمال الدولية مع التركيز على الأسواق العالمية والاستراتيجيات الدولية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "15 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      universityId: 3,
      universityName: "جامعة الفارابي الوطنية",
      name: "الصيدلة السريرية",
      description: "برنامج متقدم في الصيدلة السريرية يعد الطلاب لمهنة الصيدلة في المؤسسات الصحية المختلفة.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2800 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "20 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 5,
      universityId: 4,
      universityName: "جامعة نزارباييف",
      name: "الهندسة الميكانيكية",
      description: "برنامج شامل في الهندسة الميكانيكية مع التركيز على التصميم والتصنيع والروبوتات.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3400 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "10 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      universityId: 5,
      universityName: "الجامعة الدولية في قيرغيزستان",
      name: "طب الأسنان",
      description: "برنامج متكامل في طب الأسنان مع تدريب عملي مكثف في عيادات الجامعة والمستشفيات.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2900 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "25 يوليو 2024",
      image: "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
    },
    {
      id: 7,
      universityId: 6,
      universityName: "جامعة آسيا الوسطى",
      name: "الاقتصاد والتمويل",
      description: "برنامج متخصص في الاقتصاد والتمويل يغطي الأسواق المالية والاستثمارات والاقتصاد العالمي.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3100 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "5 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      universityId: 7,
      universityName: "الجامعة الوطنية في أوزبكستان",
      name: "الهندسة الكهربائية",
      description: "برنامج متقدم في الهندسة الكهربائية مع التركيز على أنظمة الطاقة المتجددة والشبكات الذكية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3300 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر 2024",
      applicationDeadline: "15 أغسطس 2024",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // تصفية البرامج الدراسية
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDegree = selectedDegree === 'all' || program.degreeType === selectedDegree;
    const matchesLanguage = selectedLanguage === 'all' || program.language === selectedLanguage;

    return matchesSearch && matchesDegree && matchesLanguage;
  });

  return (
    <>
      <Header />
      <div className="programs-page">
        {/* قسم البحث والتصفية */}
        <div className="programs-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>اكتشف البرامج الدراسية</h1>
            <p>ابحث عن البرنامج المثالي لمستقبلك الأكاديمي والمهني</p>

            <div className="search-container">
              <div className="search-input">
                <FontAwesomeIcon icon={faSearch} />
                <input
                  type="text"
                  placeholder="ابحث عن برنامج دراسي..."
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
                  <option value="الروسية">الروسية</option>
                  <option value="العربية">العربية</option>
                </select>
              </div>

              <button 
                className="close-modal"
                onClick={() => setShowMobileFilters(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        </div>

        {/* قائمة البرامج الدراسية */}
        <div className="programs-section">
          <div className="container">
            <div className="section-header">
              <h2>البرامج <span className="gold-text">الدراسية</span></h2>
              <p>تصفح مجموعة متنوعة من البرامج الأكاديمية المقدمة من أفضل الجامعات</p>
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
                          <FontAwesomeIcon icon={faGraduationCap} />
                          <span>{program.universityName}</span>
                        </div>
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
                          التفاصيل والتقديم
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
      </div>
    </>
  );
};

export default Programs;