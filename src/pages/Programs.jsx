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
import { countriesData } from '../lib/educationData';

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
        duration: programName.includes('طب') ? '6 سنوات' : '4 سنوات',
        degreeType: programName.includes('دكتوراه') ? 'دكتوراه' : programName.includes('ماجستير') ? 'ماجستير' : 'بكالوريوس',
        tuitionFee: country.studyCost,
        language: country.language,
        startDate: 'سبتمبر 2024',
        applicationDeadline: '1 يوليو 2024',
        image: uni.image,
        rating: 4.7
      }))
    )
  );

  // دمج البرامج القديمة مع البرامج الجديدة
  const programs = [
    // مصر
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

    // سوريا
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

    // الصين
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

    // روسيا
    {
      id: 7,
      universityId: 7,
      universityName: "جامعة موسكو الحكومية",
      name: "الطب العام (MBBS)",
      description: "برنامج الطب العام باللغة الإنجليزية معترف به عالمياً",
      longDescription: "يقدم برنامج الطب العام (MBBS) بجامعة موسكو الحكومية تعليماً طبياً وفق المعايير الدولية. البرنامج معترف به من قبل منظمة الصحة العالمية والهيئات الطبية العربية. يشمل تدريباً عملياً في مستشفيات الجامعة الحديثة.",
      duration: "6 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "6,000 - 8,000 دولار سنوياً",
      language: "الإنجليزية والروسية",
      startDate: "سبتمبر",
      applicationDeadline: "15 يوليو",
      requirements: [
        "شهادة ثانوية بمعدل 50-60 % فما فوق",
        "إجادة اللغة الإنجليزية (IELTS 6.0 أو TOEFL 80)",
        "شهادة صحية",
        "جواز سفر ساري"
      ],
      careerOpportunities: [
        "طبيب عام",
        "متخصص في المجالات الطبية",
        "باحث في المؤسسات الطبية",
        "أكاديمي في كليات الطب"
      ],
      image: "https://images.unsplash.com/photo-1620052581237-2d1d7f5b8c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      universityId: 8,
      universityName: "جامعة سانت بطرسبرغ التقنية",
      name: "هندسة البترول والغاز",
      description: "برنامج متقدم في هندسة البترول والغاز",
      longDescription: "يقدم برنامج هندسة البترول والغاز تدريباً متخصصاً في استكشاف واستخراج الموارد النفطية والغازية. يشمل مناهج عملية في الجيولوجيا الهندسية وتقنيات الحفر الحديثة.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "4,500 - 6,500 دولار سنوياً",
      language: "الإنجليزية والروسية",
      startDate: "سبتمبر",
      applicationDeadline: "1 أغسطس",
      requirements: [
        "شهادة ثانوية بمعدل 50-60 % فما فوق",
        "إجادة اللغة الإنجليزية",
        "خلفية قوية في الرياضيات والفيزياء"
      ],
      careerOpportunities: [
        "مهندس بترول",
        "مهندس حفر",
        "مهندس إنتاج",
        "باحث في مجال الطاقة"
      ],
      image: "https://images.unsplash.com/photo-1612428978260-8b2a342b9e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },

    // بيلاروسيا
    {
      id: 9,
      universityId: 9,
      universityName: "الجامعة الطبية الحكومية البيلاروسية",
      name: "طب الأسنان",
      description: "برنامج طب الأسنان باللغة الإنجليزية",
      longDescription: "برنامج متكامل لطب الأسنان مع تدريب سريري مكثف في عيادات الجامعة. يشمل جميع تخصصات طب الأسنان مع تطبيقات عملية باستخدام أحدث التقنيات.",
      duration: "5 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "4,000 - 6,000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر",
      applicationDeadline: "31 يوليو",
      requirements: [
        " 50%-شهادة ثانوية (علمي) بمعدل 60%",
        "إجادة اللغة الإنجليزية",
        "شهادة صحية"
      ],
      careerOpportunities: [
        "طبيب أسنان عام",
        "أخصائي تقويم أسنان",
        "أخصائي جراحة الفم",
        "باحث في طب الأسنان"
      ],
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 10,
      universityId: 10,
      universityName: "الجامعة التقنية الوطنية البيلاروسية",
      name: "هندسة المعلوماتية",
      description: "برنامج هندسة البرمجيات وتقنية المعلومات",
      longDescription: "برنامج متكامل في هندسة البرمجيات يشمل تطوير الأنظمة، قواعد البيانات، وأمن المعلومات. يتميز بشراكات مع شركات تقنية عالمية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3,500 - 5,000 دولار سنوياً",
      language: "الإنجليزية والروسية",
      startDate: "سبتمبر",
      applicationDeadline: "15 أغسطس",
      requirements: [
        "شهادة ثانوية بمعدل 50-60 % فما فوق",
        "خلفية في الرياضيات والحاسوب",
        "إجادة اللغة الإنجليزية"
      ],
      careerOpportunities: [
        "مهندس برمجيات",
        "مطور تطبيقات",
        "محلل نظم",
        "متخصص أمن معلومات"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },

    // طاجيكستان
    {
      id: 11,
      universityId: 11,
      universityName: "الجامعة الطبية الحكومية الطاجيكية",
      name: "الطب البشري",
      description: "برنامج الطب العام باللغة الروسية",
      longDescription: "برنامج طبي شامل يؤهل الطلاب لممارسة المهنة وفق المعايير الدولية. يشمل تدريباً عملياً في مستشفيات العاصمة دوشنبه.",
      duration: "6 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3,000 - 4,500 دولار سنوياً",
      language: "الروسية",
      startDate: "سبتمبر",
      applicationDeadline: "1 سبتمبر",
      requirements: [
        "شهادة ثانوية (علمي) بمعدل 80%",
        "إجادة اللغة الروسية",
        "فحص طبي"
      ],
      careerOpportunities: [
        "طبيب عام",
        "التخصص في المجالات الطبية",
        "العمل في المستشفيات الحكومية والخاصة"
      ],
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 12,
      universityId: 12,
      universityName: "الجامعة الوطنية الطاجيكية",
      name: "اللغة والأدب الروسي",
      description: "برنامج متخصص في اللغة الروسية وآدابها",
      longDescription: "برنامج أكاديمي متكامل لدراسة اللغة الروسية وآدابها وتاريخها الثقافي. يشمل تدريبات عملية في الترجمة والتدريس.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "1,500 - 2,500 دولار سنوياً",
      language: "الروسية",
      startDate: "سبتمبر",
      applicationDeadline: "1 سبتمبر",
      requirements: [
        "شهادة ثانوية",
        "معرفة أساسية باللغة الروسية"
      ],
      careerOpportunities: [
        "مدرس لغة روسية",
        "مترجم",
        "دبلوماسي",
        "باحث لغوي"
      ],
      image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },

    // تركيا
    {
      id: 13,
      universityId: 13,
      universityName: "جامعة إسطنبول",
      name: "الهندسة المعمارية",
      description: "برنامج متكامل في العمارة والتصميم الحضري",
      longDescription: "برنامج يجمع بين الأصالة المعمارية العثمانية والحديثة مع التركيز على التصميم المستدام. يشمل زيارات ميدانية للمواقع التاريخية في إسطنبول.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "2,000 - 4,000 دولار سنوياً",
      language: "التركية والإنجليزية",
      startDate: "سبتمبر",
      applicationDeadline: "15 يوليو",
      requirements: [
        "شهادة ثانوية بمعدل 75%",
        "اختبار قدرات في الرسم",
        "إجادة اللغة التركية أو الإنجليزية"
      ],
      careerOpportunities: [
        "مهندس معماري",
        "مصمم حضري",
        "مخطط مدن",
        "باحث في العمارة الإسلامية"
      ],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 14,
      universityId: 14,
      universityName: "جامعة الشرق الأوسط التقنية",
      name: "هندسة الطيران",
      description: "برنامج متقدم في هندسة الطيران والفضاء",
      longDescription: "برنامج رائد في مجال هندسة الطيران يشمل تصميم الطائرات، أنظمة الدفع، وتقنيات الفضاء. يتميز بشراكات مع شركات طيران عالمية.",
      duration: "4 سنوات",
      degreeType: "بكالوريوس",
      tuitionFee: "3,000 - 5,000 دولار سنوياً",
      language: "الإنجليزية",
      startDate: "سبتمبر",
      applicationDeadline: "31 مايو",
      requirements: [
        "شهادة ثانوية (علمي) بمعدل 90%",
        "خلفية قوية في الرياضيات والفيزياء",
        "إجادة اللغة الإنجليزية (TOEFL 80)"
      ],
      careerOpportunities: [
        "مهندس طيران",
        "مصمم أنظمة طيران",
        "باحث في مجال الفضاء",
        "مهندس صيانة طائرات"
      ],
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80"
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