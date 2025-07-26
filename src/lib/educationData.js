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
        image: "https://mipt.ru/upload/medialibrary/2c2/mipt_main.jpg",
        worldRanking: "#281 QS 2024",
        city: "موسكو",
        programs: [
          "الهندسة الفيزيائية",
          "علوم الحاسب والذكاء الاصطناعي",
          "الرياضيات التطبيقية",
          "الفيزياء النظرية",
          "الهندسة الطبية الحيوية"
        ]
      },
      {
        id: 403,
        name: "جامعة سانت بطرسبرغ الحكومية",
        image: "https://spbu.ru/sites/default/files/styles/og_image/public/2023-01/spbu_main.jpg",
        worldRanking: "#242 QS 2024",
        city: "سانت بطرسبرغ",
        programs: [
          "الطب البشري",
          "الهندسة المدنية",
          "الاقتصاد وإدارة الأعمال",
          "العلوم السياسية",
          "اللغات الأجنبية"
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
        name: "جامعة بيلاروسيا الحكومية",
        image: "https://bsu.by/images/bsu_main.jpg",
        worldRanking: "#801-1000 QS 2024",
        city: "مينسك",
        programs: [
          "الطب البشري",
          "الهندسة الميكانيكية",
          "علوم الحاسب",
          "الاقتصاد",
          "اللغات الأجنبية"
        ]
      },
      {
        id: 502,
        name: "جامعة الطب الحكومية في مينسك",
        image: "https://bsmu.by/images/bsmu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "مينسك",
        programs: [
          "الطب البشري",
          "طب الأسنان",
          "الصيدلة",
          "التمريض",
          "الطب البيطري"
        ]
      },
      {
        id: 503,
        name: "جامعة بيلاروسيا التقنية الوطنية",
        image: "https://bstu.by/images/bstu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "مينسك",
        programs: [
          "الهندسة المدنية",
          "الهندسة الكهربائية",
          "الهندسة الميكانيكية",
          "الهندسة المعمارية",
          "إدارة البناء"
        ]
      }
    ],
    language: "الروسية والإنجليزية",
    studyCost: "1,500 - 4,000 دولار سنوياً",
    livingCost: "200 - 500 دولار شهرياً",
    description: "بلاروسيا وجهة مميزة لدراسة الطب والهندسة بتكاليف منخفضة وجودة تعليم عالية. الجامعات معترف بها دولياً وتقدم برامج بالروسية والإنجليزية.",
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
        image: "https://tajmedun.tj/images/tajmed_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "دوشنبه",
        programs: [
          "الطب البشري",
          "طب الأسنان",
          "الصيدلة",
          "التمريض",
          "الصحة العامة"
        ]
      },
      {
        id: 602,
        name: "جامعة طاجيكستان الوطنية",
        image: "https://nu.tj/images/nu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "دوشنبه",
        programs: [
          "الهندسة المدنية",
          "الاقتصاد",
          "العلوم السياسية",
          "اللغات الأجنبية",
          "الرياضيات"
        ]
      },
      {
        id: 603,
        name: "جامعة طاجيكستان التقنية",
        image: "https://tstu.tj/images/tstu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "دوشنبه",
        programs: [
          "الهندسة الكهربائية",
          "الهندسة الميكانيكية",
          "علوم الحاسب",
          "الهندسة الكيميائية",
          "إدارة المشاريع"
        ]
      }
    ],
    language: "الطاجيكية والروسية",
    studyCost: "1,000 - 3,000 دولار سنوياً",
    livingCost: "150 - 400 دولار شهرياً",
    description: "طاجيكستان وجهة اقتصادية لدراسة الطب والهندسة. التكاليف منخفضة جداً والجامعات معترف بها في المنطقة.",
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
        image: "https://istanbul.edu.tr/images/istanbul_uni_main.jpg",
        worldRanking: "#801-1000 QS 2024",
        city: "إسطنبول",
        programs: [
          "الطب البشري",
          "الهندسة المدنية",
          "الاقتصاد وإدارة الأعمال",
          "العلوم السياسية",
          "اللغات الأجنبية"
        ]
      },
      {
        id: 702,
        name: "جامعة الشرق الأوسط التقنية (METU)",
        image: "https://metu.edu.tr/images/metu_main.jpg",
        worldRanking: "#651-700 QS 2024",
        city: "أنقرة",
        programs: [
          "الهندسة الكهربائية والإلكترونية",
          "علوم الحاسب",
          "الهندسة الميكانيكية",
          "الهندسة المدنية",
          "الرياضيات"
        ]
      },
      {
        id: 703,
        name: "جامعة بيلكنت",
        image: "https://bilkent.edu.tr/images/bilkent_main.jpg",
        worldRanking: "#801-1000 QS 2024",
        city: "أنقرة",
        programs: [
          "الهندسة الكهربائية",
          "علوم الحاسب",
          "الاقتصاد",
          "إدارة الأعمال",
          "العلوم السياسية"
        ]
      }
    ],
    language: "التركية والإنجليزية",
    studyCost: "3,000 - 8,000 دولار سنوياً",
    livingCost: "400 - 800 دولار شهرياً",
    description: "تركيا تضم جامعات مرموقة مصنفة عالمياً وتقدم برامج قوية في الطب والهندسة وإدارة الأعمال. البيئة الطلابية متنوعة والثقافة غنية.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80"
  },
  // باكستان
  {
    id: 8,
    name: "باكستان",
    universities: [
      {
        id: 801,
        name: "جامعة قائد أعظم (QAU)",
        image: "https://qau.edu.pk/images/qau_main.jpg",
        worldRanking: "#801-1000 QS 2024",
        city: "إسلام آباد",
        programs: [
          "الطب البشري",
          "الهندسة الكهربائية",
          "علوم الحاسب",
          "الاقتصاد",
          "العلوم السياسية"
        ]
      },
      {
        id: 802,
        name: "جامعة لاهور للعلوم الإدارية (LUMS)",
        image: "https://lums.edu.pk/images/lums_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "لاهور",
        programs: [
          "إدارة الأعمال",
          "الاقتصاد",
          "علوم الحاسب",
          "الهندسة الكهربائية",
          "العلوم الاجتماعية"
        ]
      },
      {
        id: 803,
        name: "جامعة كراتشي",
        image: "https://uok.edu.pk/images/uok_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "كراتشي",
        programs: [
          "الطب البشري",
          "الهندسة المدنية",
          "علوم الحاسب",
          "الاقتصاد",
          "اللغات الأجنبية"
        ]
      },
      {
        id: 804,
        name: "جامعة البنجاب",
        image: "https://pu.edu.pk/images/pu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "لاهور",
        programs: [
          "الطب البشري",
          "الهندسة الميكانيكية",
          "علوم الحاسب",
          "الاقتصاد",
          "العلوم الزراعية"
        ]
      }
    ],
    language: "الأردية والإنجليزية",
    studyCost: "1,000 - 3,000 دولار سنوياً",
    livingCost: "200 - 500 دولار شهرياً",
    description: "باكستان تضم جامعات عريقة معترف بها دولياً وتقدم برامج قوية في الطب والهندسة والعلوم. التكاليف منخفضة والجودة عالية.",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=800&q=80"
  },
  // أوزباكستان
  {
    id: 9,
    name: "أوزباكستان",
    universities: [
      {
        id: 901,
        name: "جامعة طشقند الوطنية",
        image: "https://nuu.uz/images/nuu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "طشقند",
        programs: [
          "الطب البشري",
          "الهندسة المدنية",
          "علوم الحاسب",
          "الاقتصاد",
          "اللغات الأجنبية"
        ]
      },
      {
        id: 902,
        name: "جامعة طشقند الطبية",
        image: "https://tashmi.uz/images/tashmi_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "طشقند",
        programs: [
          "الطب البشري",
          "طب الأسنان",
          "الصيدلة",
          "التمريض",
          "الصحة العامة"
        ]
      },
      {
        id: 903,
        name: "جامعة طشقند التقنية",
        image: "https://tstu.uz/images/tstu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "طشقند",
        programs: [
          "الهندسة الكهربائية",
          "الهندسة الميكانيكية",
          "علوم الحاسب",
          "الهندسة الكيميائية",
          "الهندسة المدنية"
        ]
      },
      {
        id: 904,
        name: "جامعة سمرقند الحكومية",
        image: "https://samdu.uz/images/samdu_main.jpg",
        worldRanking: "#1001+ QS 2024",
        city: "سمرقند",
        programs: [
          "الطب البشري",
          "الهندسة المدنية",
          "الاقتصاد",
          "العلوم السياسية",
          "اللغات الأجنبية"
        ]
      }
    ],
    language: "الأوزبكية والروسية",
    studyCost: "800 - 2,500 دولار سنوياً",
    livingCost: "150 - 400 دولار شهرياً",
    description: "أوزباكستان وجهة اقتصادية مميزة لدراسة الطب والهندسة. التكاليف منخفضة جداً والجامعات معترف بها في المنطقة.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
  }
];