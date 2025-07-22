import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faChevronRight, 
  faGlobe, 
  faGraduationCap, 
  faDollarSign, 
  faMapMarkerAlt,
  faStar,
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header'
import './Destination.css';

const Destinations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // بيانات الدول
  const destinations = [
    {
      id: 1,
      name: "روسيا",
      universities: "500+ جامعة",
      description: "تتميز روسيا بنظام تعليمي عالي الجودة وبأسعار معقولة، خاصة في مجالات الطب والهندسة.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "144 مليون",
      capital: "موسكو",
      language: "الروسية",
      currency: "الروبل الروسي",
      studyCost: "2,000 - 5,000 دولار سنوياً",
      livingCost: "300 - 600 دولار شهرياً",
      rating: 4.8
    },
    {
      id: 2,
      name: "كازاخستان",
      universities: "120+ جامعة",
      description: "كازاخستان توفر تعليمًا عالي الجودة بتكلفة منخفضة، مع جامعات حديثة وبرامج دراسية معترف بها دوليًا.",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "19 مليون",
      capital: "أستانا",
      language: "الكازاخية، الروسية",
      currency: "التنغ الكازاخستاني",
      studyCost: "2,500 - 4,500 دولار سنوياً",
      livingCost: "250 - 500 دولار شهرياً",
      rating: 4.5
    },
    {
      id: 3,
      name: "قيرغيزستان",
      universities: "80+ جامعة",
      description: "التعليم الجامعي في قيرغيزستان يوفر فرصًا مميزة للطلاب الأجانب بتكاليف معيشة ودراسة منخفضة.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "6.5 مليون",
      capital: "بيشكيك",
      language: "القيرغيزية، الروسية",
      currency: "السوم القيرغيزستاني",
      studyCost: "1,800 - 3,500 دولار سنوياً",
      livingCost: "200 - 400 دولار شهرياً",
      rating: 4.3
    },
    {
      id: 4,
      name: "أوزبكستان",
      universities: "150+ جامعة",
      description: "أوزبكستان تفتح أبوابها للطلاب الدوليين بتكاليف دراسية ومعيشية منخفضة وجودة تعليم عالية.",
      image: "https://images.unsplash.com/photo-1623743572561-1f0ea36359e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "34 مليون",
      capital: "طشقند",
      language: "الأوزبكية",
      currency: "السوم الأوزبكي",
      studyCost: "2,000 - 4,000 دولار سنوياً",
      livingCost: "250 - 450 دولار شهرياً",
      rating: 4.4
    },
    {
      id: 5,
      name: "أذربيجان",
      universities: "60+ جامعة",
      description: "تشتهر أذربيجان بجودة التعليم وبالجامعات الحديثة التي توفر برامج دراسية متعددة اللغات.",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "10 مليون",
      capital: "باكو",
      language: "الأذرية",
      currency: "مانات أذربيجاني",
      studyCost: "2,500 - 5,500 دولار سنوياً",
      livingCost: "300 - 600 دولار شهرياً",
      rating: 4.6
    },
    {
      id: 6,
      name: "بيلاروسيا",
      universities: "45+ جامعة",
      description: "بيلاروسيا توفر تعليمًا عاليًا متميزًا في مجالات الطب والهندسة والتكنولوجيا.",
      image: "https://images.unsplash.com/photo-1562320331-55d25c6c4e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "9.4 مليون",
      capital: "مينسك",
      language: "البيلاروسية، الروسية",
      currency: "الروبل البيلاروسي",
      studyCost: "2,500 - 4,500 دولار سنوياً",
      livingCost: "250 - 500 دولار شهرياً",
      rating: 4.7
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل البيانات
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === '') {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(destination => 
        destination.name.toLowerCase().includes(term.toLowerCase()) ||
        destination.description.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  };

  return (
    <>
      <Header/>
    <div className="destinations-page">
      {/* القسم العلوي */}
      <div className="destinations-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>اكتشف الوجهات الدراسية</h1>
          <p>اختر الوجهة المثالية لمستقبلك التعليمي من بين أفضل الدول</p>

          <div className="search-box">
            <div className="search-input">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input 
                type="text" 
                placeholder="ابحث عن دولة أو مجال دراسي..." 
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="search-button">
              بحث
            </button>
          </div>
        </div>
      </div>

      {/* قسم الدول */}
      <div className="destinations-section">
        <div className="container">
          <div className="section-header">
            <h2>الوجهات <span className="gold-text">الدراسية</span></h2>
            <p>اكتشف أفضل الدول للدراسة في الخارج</p>
          </div>

          {isLoading ? (
            <div className="loading-grid">
              {[...Array(6)].map((_, index) => (
                <div className="destination-card loading" key={index}>
                  <div className="card-image shimmer"></div>
                  <div className="card-details">
                    <div className="detail-item shimmer"></div>
                    <div className="detail-item shimmer"></div>
                    <div className="detail-item shimmer"></div>
                    <div className="card-button shimmer"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="destinations-grid">
              {filteredDestinations.map(destination => (
                <div className="destination-card" key={destination.id} onClick={()=>navigate(`/nation/${destination.id}`)}>
                  <div 
                    className="card-image"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  >
                    <div className="card-overlay"></div>
                    <div className="card-content">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <span>{destination.rating}</span>
                      </div>
                      <h3>{destination.name}</h3>
                      <p>{destination.description}</p>
                    </div>
                  </div>

                  <div className="card-details">
                    <div className="detail-item">
                      <FontAwesomeIcon icon={faGraduationCap} />
                      <span>{destination.universities}</span>
                    </div>

                    <div className="detail-item">
                      <FontAwesomeIcon icon={faDollarSign} />
                      <span>{destination.studyCost}</span>
                    </div>

                    <div className="detail-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{destination.capital}</span>
                    </div>

                    <button to={`/nation/${destination.id}`} onClick={()=>navigate(`/nation/${destination.id}`)} className="card-button">
                      اكتشف المزيد
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* إحصائيات */}
      {/* <div className="destinations-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <FontAwesomeIcon icon={faGlobe} />
              <h3>6+</h3>
              <p>دول حول العالم</p>
            </div>

            <div className="stat-card">
              <FontAwesomeIcon icon={faGraduationCap} />
              <h3>955+</h3>
              <p>جامعة معتمدة</p>
            </div>

            <div className="stat-card">
              <FontAwesomeIcon icon={faUserGraduate} />
              <h3>50,000+</h3>
              <p>طالب دولي</p>
            </div>

            <div className="stat-card">
              <FontAwesomeIcon icon={faDollarSign} />
              <h3>توفير 40%</h3>
              <p>متوسط توفير التكاليف</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* قسم الاستشارة */}
      <div className="consultation-section">
        <div className="container">
          <div className="consultation-content">
            <h2>هل تحتاج مساعدة في اختيار وجهتك الدراسية؟</h2>
            <p>استشر خبرائنا التعليميين للحصول على التوجيه المناسب</p>
            <button className="consultation-button">
              احجز استشارة مجانية
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
      </>
      );
};

export default Destinations;