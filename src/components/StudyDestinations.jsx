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
      name: "مصر",
      universities: "50+ جامعة",
      description: "تتميز مصر بنظام تعليمي عريق وبأسعار معقولة، خاصة في مجالات الطب والهندسة والدراسات الإسلامية. الجامعات المصرية معترف بها عالميًا وتقدم برامج باللغة العربية والإنجليزية مع فرص منح دراسية متنوعة.",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "سوريا",
      universities: "30+ جامعة",
      description: "سوريا توفر تعليمًا عالي الجودة بتكلفة منخفضة، مع جامعات عريقة مثل جامعة دمشق التي تعتبر من أقدم الجامعات في المنطقة. تقدم الجامعات السورية برامج دراسية متميزة في الطب والصيدلة والهندسة.",
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
    },
    {
      id: 3,
      name: "الصين",
      universities: "3000+ جامعة",
      description: "الصين من أبرز الوجهات التعليمية في العالم مع جامعات مصنفة بين الأفضل عالميًا. تقدم الصين تعليمًا عالي الجودة بتكاليف معقولة وبرامج باللغة الإنجليزية مع فرص تدريب مميزة في شركات عالمية.",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                  <span>{destination.id === 3 ? "الإنجليزية والصينية" : "العربية والإنجليزية"}</span>
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