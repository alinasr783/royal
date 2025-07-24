import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CTA from '../components/CTA'
import { 
  faChevronLeft, 
  faGraduationCap, 
  faLanguage, 
  faDollarSign,
  faMapMarkerAlt,
  faUsers,
  faCalendarAlt,
  faBook,
  faArrowLeft,
  faChevronRight,
  faGlobe,
  faBuilding,
  faHome,
  faUserTie
} from '@fortawesome/free-solid-svg-icons';
import './Nation.css';

const Nation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nation, setNation] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destinations = [
    {
      id: 1,
      name: "روسيا",
      universities: "500+ جامعة",
      description: "تتميز روسيا بنظام تعليمي عالي الجودة وبأسعار معقولة، خاصة في مجالات الطب والهندسة. الجامعات الروسية معترف بها عالميًا وتقدم برامج باللغة الإنجليزية والروسية مع فرص منح دراسية متنوعة.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "144 مليون",
      capital: "موسكو",
      language: "الروسية",
      currency: "الروبل الروسي",
      studyCost: "2,000 - 5,000 دولار سنوياً",
      livingCost: "300 - 600 دولار شهرياً",
      visaInfo: "سهلة نسبياً للطلاب مع قبول جامعي",
      climate: "بارد معظم أيام السنة",
      educationSystem: "يتميز النظام التعليمي الروسي بجودته العالية وتركيزه على البحث العلمي. تتبع الجامعات الروسية نظام بولونيا الأوروبي (البكالوريوس، الماجستير، الدكتوراه).",
      culture: "تمتلك روسيا تراثاً ثقافياً غنياً يشمل الأدب الكلاسيكي، الموسيقى، والباليه. الحياة الطلابية نشطة مع العديد من الفعاليات الثقافية والرياضية.",
      advantages: [
        "تعليم عالي الجودة بأسعار معقولة",
        "جامعات معترف بها عالمياً",
        "تنوع ثقافي كبير",
        "فرص بحثية ممتازة",
        "منح دراسية متنوعة"
      ]
    },
    {
      id: 2,
      name: "كازاخستان",
      universities: "120+ جامعة",
      description: "كازاخستان توفر تعليمًا عالي الجودة بتكلفة منخفضة، مع جامعات حديثة وبرامج دراسية معترف بها دوليًا. البيئة الدراسية متعددة الثقافات وتوفر فرصًا مميزة للطلاب الدوليين.",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "19 مليون",
      capital: "أستانا",
      language: "الكازاخية، الروسية",
      currency: "التنغ الكازاخستاني",
      studyCost: "2,500 - 4,500 دولار سنوياً",
      livingCost: "250 - 500 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "قاري (صيف حار وشتاء بارد)",
      educationSystem: "يتبع النظام التعليمي في كازاخستان نظام بولونيا الأوروبي. التركيز على الجودة والبحث العلمي، مع تطور سريع في البنية التحتية التعليمية.",
      culture: "مزيج فريد من الثقافات الآسيوية والأوروبية. الحياة الطلابية نشطة مع العديد من الفعاليات الثقافية والرياضية. الشعب ودود ومضياف.",
      advantages: [
        "تعليم عالي الجودة بتكلفة منخفضة",
        "بيئة آمنة ومستقرة",
        "ثقافة غنية وتنوع كبير",
        "برامج دراسية باللغة الإنجليزية",
        "فرص منح دراسية متنوعة"
      ]
    },
    {
      id: 3,
      name: "قيرغيزستان",
      universities: "80+ جامعة",
      description: "التعليم الجامعي في قيرغيزستان يوفر فرصًا مميزة للطلاب الأجانب، مع برامج دراسية معتمدة عالميًا وتكاليف معيشة ودراسة منخفضة. تقدم الجامعات تخصصات متنوعة باللغة الإنجليزية أو الروسية، خاصة في مجالات الطب والهندسة، في بيئة متعددة الثقافات وداعمة للطلاب الدوليين.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "6.5 مليون",
      capital: "بيشكيك",
      language: "القيرغيزية، الروسية",
      currency: "السوم القيرغيزستاني",
      studyCost: "1,800 - 3,500 دولار سنوياً",
      livingCost: "200 - 400 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "قاري معتدل",
      educationSystem: "نظام تعليمي متطور مع التركيز على الجودة وتلبية احتياجات سوق العمل. العديد من البرامج باللغة الإنجليزية والروسية.",
      culture: "بلد جبلي جميل مع ثقافة بدوية غنية. الشعب ودود ومضياف. الحياة الطلابية نشطة مع تكاليف معيشة منخفضة.",
      advantages: [
        "أقل تكلفة للدراسة والمعيشة",
        "برامج دراسية معترف بها عالمياً",
        "طبيعة خلابة وبيئة آمنة",
        "ثقافة فريدة وتنوع",
        "سهولة الحصول على التأشيرة"
      ]
    },
    {
      id: 4,
      name: "أوزبكستان",
      universities: "150+ جامعة",
      description: "أوزبكستان تفتح أبوابها للطلاب الدوليين بتكاليف دراسية ومعيشية منخفضة وجودة تعليم عالية. الجامعات الأوزبكية معترف بها دوليًا وتقدم برامج دراسية متنوعة في بيئة آمنة ومرافق حديثة.",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "34 مليون",
      capital: "طشقند",
      language: "الأوزبكية",
      currency: "السوم الأوزبكي",
      studyCost: "2,000 - 4,000 دولار سنوياً",
      livingCost: "250 - 450 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "قاري (صيف حار وشتاء بارد)",
      educationSystem: "نظام تعليمي حديث يواكب المعايير الدولية. التركيز على التخصصات التقليدية والحديثة مع وجود برامج باللغة الإنجليزية.",
      culture: "بلد يزخر بالتاريخ والتراث الإسلامي العريق. المدن التاريخية مثل سمرقند وبخارى تجذب السياح من كل أنحاء العالم. الشعب مضياف والثقافة غنية.",
      advantages: [
        "تكاليف دراسية منخفضة",
        "ثقافة وتاريخ عريق",
        "جامعات معترف بها عالمياً",
        "بيئة آمنة للطلاب",
        "تسهيلات للسكن الطلابي"
      ]
    },
    {
      id: 5,
      name: "أذربيجان",
      universities: "60+ جامعة",
      description: "تشتهر أذربيجان بجودة التعليم وبالجامعات الحديثة التي توفر برامج دراسية باللغة الإنجليزية والروسية والأذرية. تكاليف الدراسة والمعيشة معقولة مع بيئة طلابية دولية غنية بالثقافات.",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "10 مليون",
      capital: "باكو",
      language: "الأذرية",
      currency: "مانات أذربيجاني",
      studyCost: "2,500 - 5,500 دولار سنوياً",
      livingCost: "300 - 600 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "معتدل على ساحل بحر قزوين، جبلي في الداخل",
      educationSystem: "نظام تعليمي حديث ومتطور، مع تركيز على مجالات النفط والغاز والهندسة والتكنولوجيا. العديد من البرامج باللغة الإنجليزية.",
      culture: "مزيج رائع من الثقافة الأوروبية والآسيوية. العاصمة باكو مدينة عصرية مع تراث تاريخي غني. الشعب ودود ومتحضر.",
      advantages: [
        "جودة تعليم عالية",
        "بيئة طلابية دولية",
        "تكاليف معقولة",
        "بلد غني بالموارد الطبيعية",
        "فرص عمل بعد التخرج"
      ]
    },
    {
      id: 6,
      name: "بيلاروسيا",
      universities: "45+ جامعة",
      description: "بيلاروسيا توفر تعليمًا عاليًا متميزًا في مجالات الطب والهندسة والتكنولوجيا. الجامعات البيلاروسية معترف بها عالميًا وتتميز بأسعار دراسية معقولة وجودة تعليم عالية في بيئة آمنة وودية.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "9.4 مليون",
      capital: "مينسك",
      language: "البيلاروسية، الروسية",
      currency: "الروبل البيلاروسي",
      studyCost: "2,500 - 4,500 دولار سنوياً",
      livingCost: "250 - 500 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "قاري مع شتاء بارد وصيف معتدل",
      educationSystem: "نظام تعليمي قوي ومرموق، خاصة في المجالات التقنية والطبية. الجامعات تتبع المعايير الأوروبية وتوفر برامج باللغة الإنجليزية والروسية.",
      culture: "بلد أوروبي شرقي يتميز بطبيعته الخلابة وهدوئه. الثقافة غنية بالفنون والموسيقى. الشعب مضياف والمدن نظيفة وآمنة.",
      advantages: [
        "تعليم عالي الجودة",
        "تكاليف دراسية منخفضة",
        "بيئة آمنة ونظيفة",
        "تخصصات قوية في الطب والهندسة",
        "اعتراف دولي بالشهادات"
      ]
    }
  ];

  const allUniversities = [
    // روسيا
    {
      id: 1,
      nationId: 1,
      name: "جامعة موسكو الحكومية",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
      ranking: "#1 في روسيا",
      established: "1755",
      students: "47,000+",
      programs: "400+ برنامج",
      features: ["مرافق حديثة", "سكن طلابي", "منح دراسية", "برامج دولية", "مراكز أبحاث"],
      worldRanking: "74 عالمياً",
      popularMajors: ["الطب", "الهندسة", "علوم الحاسب", "الفيزياء", "الأعمال"]
    },
    {
      id: 2,
      nationId: 1,
      name: "جامعة سانت بطرسبرغ",
      image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في روسيا",
      established: "1724",
      students: "32,000+",
      programs: "300+ برنامج",
      features: ["مركز أبحاث متطور", "برامج دولية", "تعاون مع شركات عالمية", "سكن فاخر", "مركز رياضي"],
      worldRanking: "225 عالمياً",
      popularMajors: ["العلوم السياسية", "اللغات", "التاريخ", "الكيمياء", "الاقتصاد"]
    },

    // كازاخستان
    {
      id: 3,
      nationId: 2,
      name: "جامعة الفارابي الوطنية",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      ranking: "#1 في كازاخستان",
      established: "1934",
      students: "20,000+",
      programs: "200+ برنامج",
      features: ["مرافق حديثة", "سكن طلابي", "منح دراسية", "برامج دولية", "مراكز أبحاث"],
      worldRanking: "207 عالمياً",
      popularMajors: ["الهندسة", "الطب", "العلوم الطبيعية", "الاقتصاد", "العلوم الإنسانية"]
    },
    {
      id: 4,
      nationId: 2,
      name: "جامعة نزارباييف",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
      ranking: "#2 في كازاخستان",
      established: "2010",
      students: "5,000+",
      programs: "50+ برنامج",
      features: ["حرم جامعي حديث", "برامج باللغة الإنجليزية", "تعاون مع جامعات عالمية", "منح كاملة", "بحث علمي مكثف"],
      worldRanking: "350 عالمياً",
      popularMajors: ["علوم الحاسب", "الأعمال", "الهندسة", "العلوم السياسية", "الطاقة"]
    },

    // قيرغيزستان
    {
      id: 5,
      nationId: 3,
      name: "الجامعة الدولية في قيرغيزستان",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#1 في قيرغيزستان",
      established: "1993",
      students: "10,000+",
      programs: "100+ برنامج",
      features: ["برامج باللغة الإنجليزية", "سكن طلابي", "منح دراسية", "مرافق رياضية", "تعليم متميز"],
      worldRanking: "1200+ عالمياً",
      popularMajors: ["الطب", "طب الأسنان", "الهندسة", "العلوم الإدارية", "اللغات"]
    },
    {
      id: 6,
      nationId: 3,
      name: "جامعة آسيا الوسطى",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في قيرغيزستان",
      established: "1997",
      students: "1,200+",
      programs: "30+ برنامج",
      features: ["حرم جامعي جبلي", "برامج أمريكية", "سكن فاخر", "فصول صغيرة", "تعليم متميز"],
      worldRanking: "1500+ عالمياً",
      popularMajors: ["علوم الحاسب", "الأعمال", "الهندسة", "العلوم البيئية", "التنمية الدولية"]
    },

    // أوزبكستان
    {
      id: 7,
      nationId: 4,
      name: "الجامعة الوطنية في أوزبكستان",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
      ranking: "#1 في أوزبكستان",
      established: "1918",
      students: "25,000+",
      programs: "150+ برنامج",
      features: ["حرم تاريخي", "مرافق حديثة", "سكن طلابي", "منح دراسية", "برامج دولية"],
      worldRanking: "800 عالمياً",
      popularMajors: ["الطب", "الهندسة", "العلوم الاجتماعية", "اللغات", "الفنون"]
    },
    {
      id: 8,
      nationId: 4,
      name: "جامعة طشقند التقنية",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في أوزبكستان",
      established: "1920",
      students: "15,000+",
      programs: "80+ برنامج",
      features: ["مركز أبحاث متطور", "تعاون صناعي", "برامج باللغة الإنجليزية", "سكن حديث", "مرافق رياضية"],
      worldRanking: "1000 عالمياً",
      popularMajors: ["الهندسة الكهربائية", "هندسة الحاسب", "الميكانيكا", "الهندسة المدنية", "الطاقة"]
    },

    // أذربيجان
    {
      id: 9,
      nationId: 5,
      name: "جامعة باكو الحكومية",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
      ranking: "#1 في أذربيجان",
      established: "1919",
      students: "18,000+",
      programs: "120+ برنامج",
      features: ["موقع مركزي في العاصمة", "مرافق حديثة", "سكن طلابي", "برامج دولية", "مراكز أبحاث"],
      worldRanking: "500 عالمياً",
      popularMajors: ["النفط والغاز", "الهندسة", "الطب", "العلوم السياسية", "الاقتصاد"]
    },
    {
      id: 10,
      nationId: 5,
      name: "جامعة أذربيجان للنفط والصناعة",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في أذربيجان",
      established: "1920",
      students: "10,000+",
      programs: "70+ برنامج",
      features: ["تخصص في النفط والغاز", "تعاون مع شركات الطاقة", "مختبرات متطورة", "برامج باللغة الإنجليزية", "منح دراسية"],
      worldRanking: "800 عالمياً",
      popularMajors: ["هندسة النفط", "هندسة الكيمياء", "الهندسة الميكانيكية", "هندسة البيئة", "إدارة الأعمال"]
    },

    // بيلاروسيا
    {
      id: 11,
      nationId: 6,
      name: "الجامعة البيلاروسية الحكومية",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
      ranking: "#1 في بيلاروسيا",
      established: "1921",
      students: "30,000+",
      programs: "200+ برنامج",
      features: ["حرم جامعي كبير", "مرافق حديثة", "سكن طلابي", "برامج دولية", "تعليم متميز"],
      worldRanking: "317 عالمياً",
      popularMajors: ["الطب", "الهندسة", "الفيزياء", "الرياضيات", "اللغات"]
    },
    {
      id: 12,
      nationId: 6,
      name: "الجامعة التقنية الوطنية البيلاروسية",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في بيلاروسيا",
      established: "1920",
      students: "25,000+",
      programs: "150+ برنامج",
      features: ["تخصص في الهندسة", "تعاون مع الصناعة", "مختبرات متطورة", "برامج باللغة الإنجليزية", "سكن حديث"],
      worldRanking: "800 عالمياً",
      popularMajors: ["الهندسة الميكانيكية", "الهندسة المدنية", "هندسة الحاسب", "الهندسة الكهربائية", "العمارة"]
    }
  ];

  useEffect(() => {
    // محاكاة جلب البيانات من API
    setTimeout(() => {
      const selectedNation = destinations.find(dest => dest.id === parseInt(id));
      const nationUniversities = allUniversities.filter(uni => uni.nationId === parseInt(id));

      if (selectedNation) {
        setNation(selectedNation);
        setUniversities(nationUniversities);
      }
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="nation-loading">
        <div className="spinner"></div>
        <p>جاري تحميل معلومات الدولة...</p>
      </div>
    );
  }

  if (!nation) {
    return (
      <div className="nation-not-found">
        <h2>الدولة غير موجودة</h2>
        <button onClick={() => navigate('/destinations')} className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> العودة إلى الوجهات الدراسية
        </button>
      </div>
    );
  }

  return (
    <div className="nation-page">
      {/* القسم العلوي مع صورة الدولة */}
      <div className="nation-hero">
        <div 
          className="nation-hero-image"
          style={{ backgroundImage: `url(${nation.image})` }}
        >
          <div className="overlay"></div>
          <div className="hero-content">
            <button onClick={() => navigate('/')} className="back-button">
              <FontAwesomeIcon icon={faChevronLeft} /> العودة
            </button>
            <h1>الدراسة في {nation.name}</h1>
            <p>اكتشف أفضل الجامعات والبرامج الدراسية</p>
            <div className="hero-breadcrumbs">
              <span onClick={() => navigate('/')}>الرئيسية</span>
              <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-icon" />
              <span onClick={() => navigate('/destination')}>افضل الوجهات</span>
              <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-icon" />
              <span className="active">{nation.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* معلومات الدولة */}
      <div className="nation-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3>الجامعات</h3>
              <p>{nation.universities}</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <h3>التكلفة الدراسية</h3>
              <p>{nation.studyCost}</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faLanguage} />
              </div>
              <h3>لغة الدراسة</h3>
              <p>{nation.language}</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>العاصمة</h3>
              <p>{nation.capital}</p>
            </div>
          </div>
        </div>
      </div>

      {/* تفاصيل الدولة */}
      <div className="nation-details">
        <div className="container">
          <div className="details-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('overview');

                window.scrollBy({
                                        top: 450,
                                        behavior: 'smooth'
                                      })
                             }}
            >
              نظرة عامة
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('education')

                window.scrollBy({
                                        top: 450,
                                        behavior: 'smooth'
                                      })
              }}
            >
              النظام التعليمي
            </button>
            <button 
              className={`tab-btn ${activeTab === 'culture' ? 'active' : ''}`}
              onClick={() => {setActiveTab('culture')

                              window.scrollBy({
                                                      top: 450,
                                                      behavior: 'smooth'
                                                    })
                             }}
            >
              الحياة والثقافة
            </button>
            <button 
              className={`tab-btn ${activeTab === 'advantages' ? 'active' : ''}`}
              onClick={() => {setActiveTab('advantages')

                              window.scrollBy({
                                                      top: 450,
                                                      behavior: 'smooth'
                                                    })
                             }}
            >
              المميزات
            </button>
          </div>

          <div className="details-content">
            <div className="details-text">
              {activeTab === 'overview' && (
                <>
                  <h2>معلومات عن الدراسة في {nation.name}</h2>
                  <p>{nation.description}</p>

                  <div className="features-grid">
                    <div className="feature">
                      <FontAwesomeIcon icon={faUsers} />
                      <div>
                        <h4>السكان</h4>
                        <p>{nation.population}</p>
                      </div>
                    </div>

                    <div className="feature" >
                      <FontAwesomeIcon icon={faHome} />
                      <div>
                        <h4>تكاليف المعيشة</h4>
                        <p>{nation.livingCost}</p>
                      </div>
                    </div>

                    <div className="feature">
                      <FontAwesomeIcon icon={faGlobe} />
                      <div>
                        <h4>المناخ</h4>
                        <p>{nation.climate}</p>
                      </div>
                    </div>

                    <div className="feature">
                      <FontAwesomeIcon icon={faUserTie} />
                      <div>
                        <h4>متطلبات التأشيرة</h4>
                        <p>{nation.visaInfo}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'education' && (
                <>
                  <h2>النظام التعليمي في {nation.name}</h2>
                  <p>{nation.educationSystem}</p>

                  <div className="education-steps">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>البكالوريوس</h4>
                        <p>4 سنوات دراسية مع تدريب عملي في السنة الأخيرة</p>
                      </div>
                    </div>

                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>الماجستير</h4>
                        <p>سنتين دراسيتين مع مشروع بحثي في السنة الثانية</p>
                      </div>
                    </div>

                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>الدكتوراه</h4>
                        <p>3-4 سنوات بحثية مع نشر أوراق علمية</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'culture' && (
                <>
                  <h2>الحياة والثقافة في {nation.name}</h2>
                  <p>{nation.culture}</p>

                  <div className="culture-highlights">
                    <div className="highlight">
                      <div className="highlight-icon">
                        <FontAwesomeIcon icon={faBuilding} />
                      </div>
                      <h4>المدن الطلابية</h4>
                      <p>موسكو، سانت بطرسبرغ، كازان، نوفوسيبيرسك</p>
                    </div>

                    <div className="highlight">
                      <div className="highlight-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <h4>الحياة الاجتماعية</h4>
                      <p>مهرجانات طلابية، نوادي ثقافية، فعاليات رياضية متنوعة</p>
                    </div>

                    <div className="highlight">
                      <div className="highlight-icon">
                        <FontAwesomeIcon icon={faHome} />
                      </div>
                      <h4>الإقامة</h4>
                      <p>سكن جامعي بأسعار مناسبة، شقق مشتركة، عائلات مضيفة</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'advantages' && (
                <>
                  <h2>مميزات الدراسة في {nation.name}</h2>

                  <div className="advantages-grid">
                    {nation.advantages.map((advantage, index) => (
                      <div className="advantage-card" key={index}>
                        <div className="advantage-number">{index + 1}</div>
                        <p>{advantage}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="details-image">
              <img 
                src={nation.image} 
                alt={`مشهد من ${nation.name}`} 
              />
              <div className="image-overlay">
                <h3>لماذا {nation.name}؟</h3>
                <ul>
                  <li>جودة تعليمية عالمية</li>
                  <li>تكاليف دراسية تنافسية</li>
                  <li>بيئة طلابية متعددة الثقافات</li>
                  <li>فرص عمل ممتازة بعد التخرج</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الجامعات المتاحة */}
      <div className="nation-universities">
        <div className="container">
          <div className="section-header">
            <h2>الجامعات في <span className="gold-text">{nation.name}</span></h2>
            <p>أفضل الجامعات المعترف بها دولياً</p>
          </div>

          <div className="universities-grid">
            {universities.map(university => (
              <div className="university-card" key={university.id}>
                <div 
                  className="university-image"
                  style={{ backgroundImage: `url(${university.image})` }}
                >
                  <div className="university-badge">
                    <span>{university.ranking}</span>
                    <span>التصنيف العالمي: {university.worldRanking}</span>
                  </div>
                </div>

                <div className="university-content">
                  <h3>{university.name}</h3>
                  <div className="university-meta">
                    <span><FontAwesomeIcon icon={faCalendarAlt} /> تأسست عام {university.established}</span>
                    <span><FontAwesomeIcon icon={faUsers} /> {university.students}</span>
                  </div>

                  <div className="university-stats">
                    <div>
                      <FontAwesomeIcon icon={faBook} />
                      <span>{university.programs}</span>
                    </div>
                  </div>

                  <div className="university-features">
                    {university.features.map((feature, index) => (
                      <span key={index}>{feature}</span>
                    ))}
                  </div>

                  <div className="popular-majors">
                    <h4>التخصصات الشائعة:</h4>
                    <div className="majors-list">
                      {university.popularMajors.map((major, idx) => (
                        <span key={idx}>{major}</span>
                      ))}
                    </div>
                  </div>

                  <button className="university-button" onClick={()=>navigate(`/program/${university.id}`)} >
                    تصفح البرامج الدراسية
                    <FontAwesomeIcon icon={faChevronRight} className="button-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA/>
    </div>
  );
};

export default Nation;