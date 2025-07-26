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
import { countriesData } from '../lib/educationData';

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

  // دمج الدول القديمة مع الدول الجديدة من الملف المركزي
  const destinations = [
    {
      id: 1,
      name: "مصر",
      universities: "50+ جامعة",
      description: "تتميز مصر بنظام تعليمي عريق وبأسعار معقولة، خاصة في مجالات الطب والهندسة والدراسات الإسلامية. الجامعات المصرية معترف بها عالميًا وتقدم برامج باللغة العربية والإنجليزية مع فرص منح دراسية متنوعة.",
      image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "104 مليون",
      capital: "القاهرة",
      language: "العربية و الانجليزية ",
      currency: "الجنيه المصري",
      studyCost: "1,500-8,000 دولار سنويا",
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
      studyCost: "1,000 - 5,000 دولار سنوياً",
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
    {
      id: 4,
      name: "روسيا",
      universities: "700+ جامعة",
      description: "روسيا توفر تعليماً عالي الجودة في مجالات الطب والهندسة والعلوم بأسعار تنافسية. تشتهر جامعاتها بقوة البرامج العلمية والبحثية مع اعتراف دولي واسع.",
      image: "https://images.unsplash.com/photo-1620052581237-2d1d7f5b8c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "144 مليون",
      capital: "موسكو",
      language: "الروسية",
      currency: "الروبل الروسي",
      studyCost: "2,000 - 8,000 دولار سنوياً",
      livingCost: "300 - 600 دولار شهرياً",
      visaInfo: "متوسطة الصعوبة، تتطلب قبول جامعي وفحص طبي",
      climate: "قاري (شتاء بارد، صيف معتدل)",
      educationSystem: "يتميز النظام التعليمي الروسي بقوة في المجالات العلمية والتقنية. تتبع الجامعات معايير تعليمية صارمة وتوفر مرافق بحثية متطورة. البرامج الطبية والهندسية معترف بها عالمياً.",
      culture: "مزيج فريد من التراث الثقافي الغني والحداثة. الحياة الطلابية نشطة مع أنشطة ثقافية متنوعة. المدن الكبرى توفر تجربة حيوية للطلاب الدوليين.",
      advantages: [
        "جودة تعليمية عالية بأسعار معقولة",
        "برامج طبية وهندسية مرموقة",
        "ثقافة غنية وتاريخ عريق",
        "اعتراف دولي بالشهادات",
        "فرص بحثية مميزة"
      ]
    },
    {
      id: 5,
      name: "بيلاروسيا",
      universities: "50+ جامعة",
      description: "بيلاروسيا وجهة مميزة للطلاب العرب خاصة في المجالات الطبية والهندسية. تشتهر بجودة التعليم وانخفاض التكاليف مقارنة بالدول الأوروبية.",
      image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "9.5 مليون",
      capital: "مينسك",
      language: "الروسية والبيلاروسية",
      currency: "الروبل البيلاروسي",
      studyCost: "2,500 - 5,000 دولار سنوياً",
      livingCost: "200 - 400 دولار شهرياً",
      visaInfo: "سهلة نسبياً مع قبول جامعي",
      climate: "قاري (شتاء طويل بارد، صيف قصير معتدل)",
      educationSystem: "يقدم نظام تعليمي قوي مع تركيز على الجانب العملي. الجامعات البيلاروسية معترف بها عالمياً خاصة في التخصصات الطبية والهندسية.",
      culture: "ثقافة سلافية مميزة مع تراث غني في الأدب والموسيقى. الحياة الطلابية نشطة في العاصمة مينسك التي تضم العديد من الطلاب الدوليين.",
      advantages: [
        "تكاليف دراسية ومعيشية منخفضة",
        "جودة تعليمية ممتازة في الطب والهندسة",
        "بيئة آمنة ومنظمة",
        "اعتراف واسع بالشهادات الطبية",
        "سهولة الحصول على التأشيرة"
      ]
    },
    {
      id: 6,
      name: "طاجيكستان",
      universities: "30+ جامعة",
      description: "طاجيكستان وجهة اقتصادية للطلاب الراغبين في دراسة الطب واللغات. تتميز بتكاليف منخفضة وجودة تعليمية مناسبة مع فرص لتعلم اللغة الروسية.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      population: "9.5 مليون",
      capital: "دوشنبه",
      language: "الطاجيكية والروسية",
      currency: "السوموني الطاجيكي",
      studyCost: "1,500 - 3,500 دولار سنوياً",
      livingCost: "100 - 300 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "قاري جبلي (شتاء بارد، صيف معتدل)",
      educationSystem: "نظام تعليمي متطور مع تأثر بالمنظومة التعليمية السوفياتية السابقة. الجامعات الطاجيكية معترف بها في دول آسيا الوسطى والاتحاد الروسي.",
      culture: "ثقافة فارسية إسلامية مميزة مع تأثيرات تركية وروسية. الشعب الطاجيكي معروف بحسن الضيافة والود تجاه الطلاب العرب.",
      advantages: [
        "أقل تكاليف دراسية في آسيا الوسطى",
        "بيئة آمنة وهادئة للدراسة",
        "فرصة لتعلم اللغة الروسية",
        "قرب ثقافي من العالم العربي",
        "سهولة الإجراءات والتأشيرة"
      ]
    },
    {
      id: 7,
      name: "تركيا",
      universities: "200+ جامعة",
      description: "تركيا جسر بين الشرق والغرب وتقدم تعليماً عالي الجودة بأسعار معقولة. تشتهر جامعاتها ببرامج الهندسة والطب وإدارة الأعمال مع بيئة طلابية دولية غنية.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      population: "84 مليون",
      capital: "أنقرة",
      language: "التركية",
      currency: "الليرة التركية",
      studyCost: "1,000 - 5,000 دولار سنوياً",
      livingCost: "300 - 600 دولار شهرياً",
      visaInfo: "سهلة للطلاب مع قبول جامعي",
      climate: "متنوع (متوسطي على السواحل، قاري في الداخل)",
      educationSystem: "نظام تعليمي حديث يتوافق مع المعايير الأوروبية (بولونيا). تقدم الجامعات التركية برامج متنوعة باللغتين التركية والإنجليزية مع فرص تبادل طلابي.",
      culture: "مزيج فريد من الثقافة العثمانية الإسلامية والحداثة الأوروبية. الحياة الطلابية نشطة مع العديد من الفعاليات الثقافية والترفيهية.",
      advantages: [
        "جودة تعليمية عالية بأسعار تنافسية",
        "بيئة طلابية دولية غنية",
        "قرب جغرافي وثقافي من العالم العربي",
        "فرص عمل أثناء الدراسة",
        "شهادات معترف بها عالمياً"
      ]
    }
  ];

  // الجامعات: دمج الجامعات القديمة مع جامعات الدول الجديدة
  const allUniversities = [
    // مصر
    {
      id: 1,
      nationId: 1,
      name: "جامعة القاهرة",
      image: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80",
      ranking: "#1 في مصر",
      established: "1908",
      students: "250,000+",
      programs: "300+ برنامج",
      features: ["حرم جامعي تاريخي", "سكن طلابي", "منح دراسية", "برامج دولية", "مراكز أبحاث"],
      worldRanking: "561-570 عالمياً",
      popularMajors: ["الطب", "الهندسة", "الصيدلة", "العلوم السياسية", "الآداب"]
    },
    {
      id: 2,
      nationId: 1,
      name: "الجامعة الأمريكية بالقاهرة",
      image: "https://images.unsplash.com/photo-1584735428934-9f8ce8ffbf97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في مصر",
      established: "1919",
      students: "6,500+",
      programs: "100+ برنامج",
      features: ["تعليم أمريكي", "برامج باللغة الإنجليزية", "تعاون مع جامعات أمريكية", "منح كاملة", "بحث علمي مكثف"],
      worldRanking: "411 عالمياً",
      popularMajors: ["إدارة الأعمال", "علوم الحاسب", "الهندسة", "العلوم السياسية", "الفنون"]
    },

    // سوريا
    {
      id: 3,
      nationId: 2,
      name: "جامعة دمشق",
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      ranking: "#1 في سوريا",
      established: "1923",
      students: "210,000+",
      programs: "200+ برنامج",
      features: ["حرم جامعي تاريخي", "سكن طلابي", "منح دراسية", "برامج متنوعة", "مراكز أبحاث"],
      worldRanking: "1200+ عالمياً",
      popularMajors: ["الطب", "طب الأسنان", "الصيدلة", "الهندسة", "الآداب"]
    },
    {
      id: 4,
      nationId: 2,
      name: "جامعة حلب",
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      ranking: "#2 في سوريا",
      established: "1958",
      students: "150,000+",
      programs: "150+ برنامج",
      features: ["مرافق حديثة", "برامج هندسية قوية", "سكن طلابي", "تعاون مع صناعات محلية", "مكتبة ضخمة"],
      worldRanking: "1500+ عالمياً",
      popularMajors: ["الهندسة المدنية", "الهندسة المعمارية", "الطب", "الزراعة", "الاقتصاد"]
    },

    // الصين
    {
      id: 5,
      nationId: 3,
      name: "جامعة بكين",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#1 في الصين",
      established: "1898",
      students: "40,000+",
      programs: "400+ برنامج",
      features: ["مرافق حديثة", "سكن طلابي", "منح دراسية", "برامج دولية", "مراكز أبحاث متطورة"],
      worldRanking: "16 عالمياً",
      popularMajors: ["علوم الحاسب", "الهندسة", "الطب", "الأعمال", "العلوم السياسية"]
    },
    {
      id: 6,
      nationId: 3,
      name: "جامعة تشينغهوا",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#2 في الصين",
      established: "1911",
      students: "36,000+",
      programs: "350+ برنامج",
      features: ["حرم جامعي حديث", "برامج باللغة الإنجليزية", "تعاون مع شركات عالمية", "منح كاملة", "بحث علمي مكثف"],
      worldRanking: "17 عالمياً",
      popularMajors: ["هندسة الحاسب", "الهندسة الميكانيكية", "العلوم الطبيعية", "إدارة الأعمال", "الفنون"]
    },

    // روسيا
    {
      id: 7,
      nationId: 4,
      name: "جامعة موسكو الحكومية",
      image: "https://images.unsplash.com/photo-1620052581237-2d1d7f5b8c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#1 في روسيا",
      established: "1755",
      students: "47,000+",
      programs: "380+ برنامج",
      features: ["حرم تاريخي ضخم", "مكتبة ضخمة", "مراكز أبحاث متطورة", "سكن طلابي", "برامج دولية"],
      worldRanking: "74 عالمياً",
      popularMajors: ["الطب", "الفيزياء", "الرياضيات", "العلوم السياسية", "اللغات"]
    },
    {
      id: 8,
      nationId: 4,
      name: "جامعة سانت بطرسبرغ التقنية",
      image: "https://images.unsplash.com/photo-1612428978260-8b2a342b9e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#3 في روسيا للهندسة",
      established: "1899",
      students: "33,000+",
      programs: "200+ برنامج",
      features: ["مرافق بحثية متطورة", "شراكات صناعية", "برامج باللغة الإنجليزية", "سكن طلابي", "مختبرات حديثة"],
      worldRanking: "401-410 عالمياً",
      popularMajors: ["هندسة البترول", "هندسة الحاسوب", "الهندسة النووية", "الهندسة المدنية", "الروبوتات"]
    },

    // بيلاروسيا
    {
      id: 9,
      nationId: 5,
      name: "الجامعة الطبية الحكومية البيلاروسية",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      ranking: "#1 طبي في بيلاروسيا",
      established: "1921",
      students: "7,000+",
      programs: "12 برنامج طبي",
      features: ["مستشفى تعليمي", "برامج باللغة الإنجليزية", "شهادات معترف بها عالمياً", "سكن طلابي", "تدريب عملي مكثف"],
      worldRanking: "751-800 عالمياً",
      popularMajors: ["الطب العام", "طب الأسنان", "الصيدلة", "التمريض", "الطب الوقائي"]
    },
    {
      id: 10,
      nationId: 5,
      name: "الجامعة التقنية الوطنية البيلاروسية",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#1 هندسي في بيلاروسيا",
      established: "1920",
      students: "35,000+",
      programs: "100+ برنامج",
      features: ["حديقة تكنولوجية", "مراكز ابتكار", "شراكات صناعية", "مختبرات متطورة", "برامج تبادل دولي"],
      worldRanking: "801-1000 عالمياً",
      popularMajors: ["هندسة الميكانيكا", "هندسة الحاسوب", "الهندسة المعمارية", "هندسة الطاقة", "التكنولوجيا الحيوية"]
    },

    // طاجيكستان
    {
      id: 11,
      nationId: 6,
      name: "الجامعة الطبية الحكومية الطاجيكية",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ranking: "#1 طبي في طاجيكستان",
      established: "1939",
      students: "5,000+",
      programs: "8 برامج طبية",
      features: ["مستشفيات تعليمية", "برامج باللغة الروسية", "تدريب عملي", "سكن طلابي", "شهادات معترف بها"],
      worldRanking: "غير مصنفة عالمياً",
      popularMajors: ["الطب العام", "طب الأطفال", "الجراحة", "طب الأسنان", "الصحة العامة"]
    },
    {
      id: 12,
      nationId: 6,
      name: "الجامعة الوطنية الطاجيكية",
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      ranking: "#1 عام في طاجيكستان",
      established: "1948",
      students: "22,000+",
      programs: "120+ برنامج",
      features: ["حرم جامعي مركزي", "مكتبة ضخمة", "برامج تبادل", "مركز ثقافي", "سكن طلابي"],
      worldRanking: "غير مصنفة عالمياً",
      popularMajors: ["اللغة الروسية", "اللغة الطاجيكية", "التاريخ", "الاقتصاد", "العلوم السياسية"]
    },

    // تركيا
    {
      id: 13,
      nationId: 7,
      name: "جامعة إسطنبول",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      ranking: "#5 في تركيا",
      established: "1453",
      students: "76,000+",
      programs: "250+ برنامج",
      features: ["حرم تاريخي", "مكتبات عريقة", "مراكز بحثية", "سكن طلابي", "برامج دولية"],
      worldRanking: "801-1000 عالمياً",
      popularMajors: ["الهندسة المعمارية", "التاريخ", "الآداب", "الطب", "القانون"]
    },
    {
      id: 14,
      nationId: 7,
      name: "جامعة الشرق الأوسط التقنية",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80",
      ranking: "#1 هندسي في تركيا",
      established: "1956",
      students: "31,000+",
      programs: "120+ برنامج",
      features: ["حرم جامعي حديث", "مراكز أبحاث متطورة", "برامج باللغة الإنجليزية", "سكن طلابي", "حديقة تكنولوجية"],
      worldRanking: "601-650 عالمياً",
      popularMajors: ["هندسة الطيران", "هندسة الحاسوب", "الهندسة الكهربائية", "الهندسة الميكانيكية", "هندسة المواد"]
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
                      <p>{nation.id === 1 ? "القاهرة، الإسكندرية، أسيوط" : 
                         nation.id === 2 ? "دمشق، حلب، اللاذقية" : 
                         "بكين، شنغهاي، قوانغتشو"}</p>
                    </div>

                    <div className="highlight">
                      <div className="highlight-icon">
                        <FontAwesomeIcon icon={faUsers} />
                      </div>
                      <h4>الحياة الاجتماعية</h4>
                      <p>{nation.id === 1 ? "مهرجانات طلابية، نوادي ثقافية، فعاليات رياضية متنوعة" : 
                         nation.id === 2 ? "ندوات ثقافية، معارض فنية، أنشطة طلابية تقليدية" : 
                         "نوادي طلابية، فعاليات ثقافية صينية، أنشطة رياضية"}</p>
                    </div>

                    <div className="highlight">
                      <div className="highlight-icon">
                        <FontAwesomeIcon icon={faHome} />
                      </div>
                      <h4>الإقامة</h4>
                      <p>{nation.id === 1 ? "سكن جامعي بأسعار مناسبة، شقق مشتركة، عائلات مضيفة" : 
                         nation.id === 2 ? "سكن جامعي محدود، شقق مشتركة بأسعار منخفضة" : 
                         "سكن جامعي حديث، شقق طلابية، مساكن مشتركة"}</p>
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