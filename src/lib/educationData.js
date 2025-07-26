// بيانات الدول والجامعات والبرامج الدراسية (بيانات حقيقية)

export const countriesData = [
  // روسيا
  {
    id: 4,
    name: "روسيا",
    universities: [
      {
        id: 401,
        name: "جامعة موسكو الحكومية (MSU)",
        image: "https://www.msu.ru/images/msu.jpg",
        worldRanking: "#87 QS 2024",
        city: "موسكو",
        programs: [
          "الطب البشري",
          "الهندسة (الميكانيكية، الكهربائية، المدنية)",
          "علوم الحاسب",
          "الفيزياء والرياضيات",
          "اللغة الروسية وآدابها"
        ]
      },
      {
        id: 402,
        name: "معهد موسكو للفيزياء والتكنولوجيا (MIPT)",
        image: "https://eng.mipt.ru/upload/medialibrary/2b2/2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e.jpg",
        worldRanking: "#285 QS 2024",
        city: "موسكو",
        programs: [
          "الفيزياء النظرية والتطبيقية",
          "علوم الحاسب والذكاء الاصطناعي",
          "هندسة الطيران والفضاء",
          "الرياضيات التطبيقية"
        ]
      },
      {
        id: 403,
        name: "جامعة سانت بطرسبرغ الحكومية",
        image: "https://english.spbu.ru/images/2020/11/10/spbu.jpg",
        worldRanking: "#235 QS 2024",
        city: "سانت بطرسبرغ",
        programs: [
          "الطب البشري",
          "القانون الدولي",
          "الاقتصاد وإدارة الأعمال",
          "اللغات والترجمة"
        ]
      }
    ],
    language: "الروسية والإنجليزية",
    studyCost: "2,000 - 7,000 دولار سنوياً",
    livingCost: "300 - 700 دولار شهرياً",
    description: "روسيا تضم جامعات عريقة مصنفة عالمياً وتقدم برامج قوية في الطب والهندسة والعلوم. شهاداتها معترف بها دولياً وتتوفر برامج بالروسية والإنجليزية.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  // بلاروسيا
  {
    id: 5,
    name: "بلاروسيا",
    universities: [
      {
        id: 501,
        name: "جامعة بيلاروسيا الحكومية (BSU)",
        image: "https://www.bsu.by/images/bsu.jpg",
        worldRanking: "#382 QS 2024",
        city: "مينسك",
        programs: [
          "الطب البشري",
          "الصيدلة",
          "الهندسة الكيميائية",
          "الاقتصاد وإدارة الأعمال"
        ]
      },
      {
        id: 502,
        name: "جامعة الطب الحكومية في مينسك",
        image: "https://www.bsmu.by/images/bsmu.jpg",
        worldRanking: "#801-1000 QS 2024",
        city: "مينسك",
        programs: [
          "الطب البشري",
          "طب الأسنان",
          "الصيدلة"
        ]
      }
    ],
    language: "الروسية والإنجليزية",
    studyCost: "2,000 - 4,000 دولار سنوياً",
    livingCost: "200 - 400 دولار شهرياً",
    description: "بلاروسيا وجهة مميزة لدراسة الطب والهندسة بتكاليف منخفضة وجودة تعليمية عالية. جامعاتها معترف بها في أوروبا وآسيا.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
  },
  // طاجيكستان
  {
    id: 6,
    name: "طاجيكستان",
    universities: [
      {
        id: 601,
        name: "جامعة طاجيكستان الطبية الحكومية",
        image: "https://www.tajmedun.tj/uploads/posts/2019-10/1571049642_1.jpg",
        worldRanking: "غير مصنفة عالمياً",
        city: "دوشنبه",
        programs: [
          "الطب البشري",
          "طب الأسنان",
          "الصيدلة"
        ]
      },
      {
        id: 602,
        name: "جامعة طاجيكستان الوطنية",
        image: "https://tsu.tj/images/tsu.jpg",
        worldRanking: "غير مصنفة عالمياً",
        city: "دوشنبه",
        programs: [
          "الهندسة",
          "الاقتصاد",
          "القانون"
        ]
      }
    ],
    language: "الطاجيكية والروسية",
    studyCost: "1,200 - 2,500 دولار سنوياً",
    livingCost: "100 - 250 دولار شهرياً",
    description: "تشتهر طاجيكستان بجامعاتها الطبية وبرامجها المعترف بها عربياً ودولياً، مع تكاليف معيشة ودراسة منخفضة.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
  },
  // تركيا
  {
    id: 7,
    name: "تركيا",
    universities: [
      {
        id: 701,
        name: "جامعة إسطنبول",
        image: "https://cdn.istanbul.edu.tr/FileHandler2.ashx?f=istanbul-universitesi.jpg",
        worldRanking: "#801-1000 QS 2024",
        city: "إسطنبول",
        programs: [
          "الطب البشري",
          "الهندسة المدنية والمعمارية",
          "القانون",
          "العلوم السياسية"
        ]
      },
      {
        id: 702,
        name: "جامعة الشرق الأوسط التقنية (METU)",
        image: "https://www.metu.edu.tr/sites/default/files/metu_campus.jpg",
        worldRanking: "#336 QS 2024",
        city: "أنقرة",
        programs: [
          "الهندسة (الميكانيكية، الكهربائية، الكيميائية)",
          "علوم الحاسب",
          "إدارة الأعمال"
        ]
      },
      {
        id: 703,
        name: "جامعة بوغازيتشي",
        image: "https://www.boun.edu.tr/sites/default/files/boun.jpg",
        worldRanking: "#477 QS 2024",
        city: "إسطنبول",
        programs: [
          "الهندسة",
          "الاقتصاد",
          "العلوم الاجتماعية"
        ]
      }
    ],
    language: "التركية والإنجليزية",
    studyCost: "2,000 - 8,000 دولار سنوياً",
    livingCost: "300 - 600 دولار شهرياً",
    description: "تركيا تجمع بين جودة التعليم وتنوع البرامج وتكاليف مناسبة. جامعاتها معترف بها أوروبياً وعربياً وتقدم برامج بالتركية والإنجليزية.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
  }
];