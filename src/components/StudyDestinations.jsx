import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGraduationCap, faLanguage, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import './StudyDestinations.css';

const StudyDestinations = () => {
  const navigate = useNavigate()
  const destinations = [
    {
      id: 1,
      name: "روسيا",
      universities: "500+ جامعة",
      description: "تتميز روسيا بنظام تعليمي عالي الجودة وبأسعار معقولة، خاصة في مجالات الطب والهندسة. الجامعات الروسية معترف بها عالميًا وتقدم برامج باللغة الإنجليزية والروسية مع فرص منح دراسية متنوعة.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "كازاخستان",
      universities: "120+ جامعة",
      description: "كازاخستان توفر تعليمًا عالي الجودة بتكلفة منخفضة، مع جامعات حديثة وبرامج دراسية معترف بها دوليًا. البيئة الدراسية متعددة الثقافات وتوفر فرصًا مميزة للطلاب الدوليين.",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "قيرغيزستان",
      universities: "80+ جامعة",
      description: "التعليم الجامعي في قيرغيزستان يوفر فرصًا مميزة للطلاب الأجانب، مع برامج دراسية معتمدة عالميًا وتكاليف معيشة ودراسة منخفضة. تقدم الجامعات تخصصات متنوعة باللغة الإنجليزية أو الروسية، خاصة في مجالات الطب والهندسة، في بيئة متعددة الثقافات وداعمة للطلاب الدوليين.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      name: "أوزبكستان",
      universities: "150+ جامعة",
      description: "أوزبكستان تفتح أبوابها للطلاب الدوليين بتكاليف دراسية ومعيشية منخفضة وجودة تعليم عالية. الجامعات الأوزبكية معترف بها دوليًا وتقدم برامج دراسية متنوعة في بيئة آمنة ومرافق حديثة.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      name: "أذربيجان",
      universities: "60+ جامعة",
      description: "تشتهر أذربيجان بجودة التعليم وبالجامعات الحديثة التي توفر برامج دراسية باللغة الإنجليزية والروسية والأذرية. تكاليف الدراسة والمعيشة معقولة مع بيئة طلابية دولية غنية بالثقافات.",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      name: "بيلاروسيا",
      universities: "45+ جامعة",
      description: "بيلاروسيا توفر تعليمًا عاليًا متميزًا في مجالات الطب والهندسة والتكنولوجيا. الجامعات البيلاروسية معترف بها عالميًا وتتميز بأسعار دراسية معقولة وجودة تعليم عالية في بيئة آمنة وودية.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const handleBrowseUniversities = (id)=>{
    navigate(`/nation/${id}`)
  }
  return (
    <section className="destinations-section">
      <div className="section-header">
        <h2>الوجهات <span className="gold-text">الدراسية المتميزة</span></h2>
        <p>اكتشف أفضل الدول للدراسة بالخارج التي نقدمها لطلابنا</p>
      </div>

      <div className="destinations-grid">
        {destinations.map(destination => (
          <div className="destination-card" key={destination.id}>
            <div className="destination-image-container">
              <div 
                className="destination-image"
                style={{ backgroundImage: `url(${destination.image})` }}
              ></div>
              <div className="destination-overlay"></div>
              <div className="destination-badge">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>{destination.universities}</span>
              </div>
            </div>

            <div className="destination-content">
              <h3 className="destination-name">{destination.name}</h3>
              <p className="destination-description">{destination.description}</p>

              <div className="destination-features">
                <div className="feature">
                  <FontAwesomeIcon icon={faLanguage} className="feature-icon" />
                  <span>الإنجليزية والروسية</span>
                </div>
                <div className="feature">
                  <FontAwesomeIcon icon={faDollarSign} className="feature-icon" />
                  <span>تكاليف منخفضة</span>
                </div>
              </div>

              <button className="destination-button" onClick={()=>handleBrowseUniversities(destination.id)}>
                <FontAwesomeIcon icon={faChevronRight} className="button-icon" />
                تصفح الجامعات
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-footer">
        <button className="view-all-button" onClick={()=>navigate("/destination")}>
          <FontAwesomeIcon icon={faChevronRight} className="button-icon" />
          استكشف جميع الوجهات
        </button>
      </div>
    </section>
  );
};

export default StudyDestinations;