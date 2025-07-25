import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faCalendarAlt, faClock, faBookReader } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header"
import './Articles.css';

// Sample articles data - replace with your actual content
const articles = [
  {
    id: 1,
    title: "دليل الدراسة في روسيا للطلاب الدوليين",
    excerpt: "كل ما تحتاج معرفته عن الدراسة في روسيا من متطلبات القبول والتكاليف وأفضل الجامعات. تعرف على تجارب الطلاب العرب في الجامعات الروسية.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "15 مايو 2024",
    readTime: "8 دقائق"
  },
  {
    id: 2,
    title: "الدراسة في قيرغيزستان: فرص وتحديات",
    excerpt: "استكشف مميزات الدراسة في قيرغيزستان وتكاليف المعيشة والدراسة. دليل شامل عن الجامعات الطبية والتقنية في هذا البلد الآسيوي الواعد.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "8 أبريل 2024",
    readTime: "6 دقائق"
  },
  {
    id: 3,
    title: "أوزبكستان وجهة جديدة للطلاب العرب",
    excerpt: "لماذا أصبحت أوزبكستان وجهة جذابة للطلاب العرب؟ تعرف على نظام التعليم العالي والتخصصات المتاحة والمنح الدراسية في هذا البلد.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "22 مارس 2024",
    readTime: "7 دقائق"
  },
  {
    id: 4,
    title: "كيف تختار التخصص المناسب للدراسة بالخارج؟",
    excerpt: "دليل عملي يساعدك على اختيار التخصص الدراسي المناسب لشخصيتك ومهاراتك واحتياجات سوق العمل. نصائح من خبراء التعليم الدولي.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "12 فبراير 2024",
    readTime: "10 دقائق"
  },
  {
    id: 5,
    title: "المنح الدراسية المتاحة للطلاب العرب",
    excerpt: "أهم المنح الدراسية الممولة بالكامل للطلاب العرب الراغبين في الدراسة بالخارج. شروط التقديم ومواعيد التقديم ونصائح لزيادة فرص القبول.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "30 يناير 2024",
    readTime: "9 دقائق"
  },
  {
    id: 6,
    title: "تحديات التأقلم الثقافي للطلاب بالخارج",
    excerpt: "كيف تتغلب على صدمة الثقافة وتتكيف مع الحياة الجديدة؟ نصائح عملية من طلاب عرب مروا بنفس التجربة ونجحوا في التأقلم مع مجتمعاتهم الجديدة.",
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "18 ديسمبر 2023",
    readTime: "5 دقائق"
  }
];

const Articles = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header />
    <div className="articles-container">
      {/* Hero Section */}
      <section className="articles-hero">
        <div className="hero-content">
          <h1>المكتبة المعرفية</h1>
          <p>استكشف مقالاتنا الشاملة حول الدراسة بالخارج واستفد من خبراتنا ونصائحنا</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
              <div className="article-meta">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {article.date}
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} /> {article.readTime}
                </span>
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <button 
                className="read-more-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/articles/${article.id}`);
                }}
              >
              اقرأ المزيد
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>اشترك في نشرتنا البريدية</h2>
          <p>كن أول من يعرف عن المقالات الجديدة والعروض الخاصة والمنح الدراسية</p>
          <div className="subscribe-form">
            <input type="email" placeholder="بريدك الإلكتروني" />
            <button>اشتراك</button>
          </div>
        </div>
      </section>
    </div>
      </>
      );
};

export default Articles;