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
import { countriesData } from '../lib/educationData';

const Destinations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  // دمج الدول القديمة مع الدول الجديدة من الملف المركزي
  const destinations = [
    // الدول القديمة
    {
      id: 1,
      name: "مصر",
      universities: "50+ جامعة",
      description: "تتميز مصر بنظام تعليمي عريق وبأسعار معقولة، خاصة في مجالات الطب والهندسة والدراسات الإسلامية. الجامعات المصرية معترف بها عالميًا وتقدم برامج باللغة العربية والإنجليزية مع فرص منح دراسية متنوعة.",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "104 مليون",
      capital: "القاهرة",
      language: "العربية",
      currency: "الجنيه المصري",
      studyCost: "1,500 - 4,000 دولار سنوياً",
      livingCost: "200 - 500 دولار شهرياً",
      visaInfo: "سهلة نسبياً للطلاب مع قبول جامعي",
      climate: "معتدل شتاءً، حار جاف صيفاً",
      educationSystem: "يتميز النظام التعليمي المصري بجذوره التاريخية العريقة وتركيزه على الجودة. تقدم الجامعات الحكومية والخاصة برامج متنوعة معترف بها دولياً، مع وجود نظام الساعات المعتمدة في العديد من الجامعات.",
      culture: "تمتلك مصر تراثاً ثقافياً غنياً يشمل الحضارة الفرعونية والإسلامية. الحياة الطلابية نشطة في المدن الجامعية مع العديد من الفعاليات الثقافية والرياضية. الشعب المصري معروف بحسن الضيافة.",
      advantages: [
        "تعليم عالي الجودة بأسعار معقولة",
        "جامعات عريقة معترف بها عالمياً",
        "تنوع ثقافي وتاريخي كبير",
        "فرص بحثية ممتازة خاصة في الطب والهندسة",
        "حياة طلابية غنية وممتعة"
      ]
    },
    {
      id: 2,
      name: "سوريا",
      universities: "30+ جامعة",
      description: "سوريا توفر تعليمًا عالي الجودة بتكلفة منخفضة، مع جامعات عريقة مثل جامعة دمشق التي تعتبر من أقدم الجامعات في المنطقة. تقدم الجامعات السورية برامج دراسية متميزة في الطب والصيدلة والهندسة.",
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      population: "18 مليون",
      capital: "دمشق",
      language: "العربية",
      currency: "الليرة السورية",
      studyCost: "1,000 - 3,000 دولار سنوياً",
      livingCost: "150 - 400 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "معتدل على الساحل، صحراوي في الداخل",
      educationSystem: "يتبع النظام التعليمي في سوريا النموذج التقليدي مع تركيز قوي على الجوانب النظرية. تشتهر الجامعات السورية بقوة برامجها في الطب والهندسة والآداب. الدرجات العلمية معترف بها في العديد من الدول العربية.",
      culture: "بلد يزخر بالتاريخ والتراث الحضاري العريق. المدن التاريخية مثل دمشق وحلب من أقدم المدن المأهولة في العالم. الشعب السوري معروف بكرمه وحسن ضيافته.",
      advantages: [
        "تكاليف دراسية منخفضة جداً",
        "جامعات عريقة ذات سمعة جيدة",
        "ثقافة وتاريخ عريق",
        "شعب مضياف وودود",
        "درجات علمية معترف بها عربياً"
      ]
    },
    {
      id: 3,
      name: "الصين",
      universities: "3000+ جامعة",
      description: "الصين من أبرز الوجهات التعليمية في العالم مع جامعات مصنفة بين الأفضل عالميًا. تقدم الصين تعليمًا عالي الجودة بتكاليف معقولة وبرامج باللغة الإنجليزية مع فرص تدريب مميزة في شركات عالمية.",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "1.4 مليار",
      capital: "بكين",
      language: "الصينية",
      currency: "اليوان الصيني",
      studyCost: "2,500 - 6,000 دولار سنوياً",
      livingCost: "400 - 800 دولار شهرياً",
      visaInfo: "متوسطة الصعوبة، تتطلب قبول جامعي وفحص طبي",
      climate: "متنوع حسب المنطقة (معتدل، استوائي، صحراوي)",
      educationSystem: "يتميز النظام التعليمي الصيني بصرامته وجودته العالية. تتبنى الجامعات الصينية أحدث الأساليب التعليمية وتستثمر بكثافة في البحث العلمي. العديد من البرامج متاحة باللغة الإنجليزية خاصة في الجامعات الكبرى.",
      culture: "مزيج فريد من التقاليد العريقة والحداثة المتطورة. الحياة الطلابية نشطة مع فرص للتعرف على الثقافة الصينية الغنية. المدن الكبرى مثل بكين وشنغهاي توفر تجربة حيوية ومتعددة الثقافات.",
      advantages: [
        "جودة تعليمية عالمية بأسعار معقولة",
        "جامعات مصنفة بين الأفضل عالمياً",
        "فرص تدريب في شركات عالمية",
        "تعلم اللغة الصينية المطلوبة عالمياً",
        "منح دراسية سخية للطلاب المتميزين"
      ]
    },
    // الدول الجديدة من الملف المركزي
    ...countriesData
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