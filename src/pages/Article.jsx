import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "../components/Header";
import { 
  faCalendarAlt, 
  faClock, 
  faBookReader,
  faArrowLeft,
  faShareAlt,
  faBookmark
} from '@fortawesome/free-solid-svg-icons';
import './Article.css';

// Sample articles data - replace with your actual content
const articles = [
  {
    id: 1,
    title: "دليل الدراسة في روسيا للطلاب الدوليين",
    excerpt: "كل ما تحتاج معرفته عن الدراسة في روسيا من متطلبات القبول والتكاليف وأفضل الجامعات. تعرف على تجارب الطلاب العرب في الجامعات الروسية.",
    content: `
      <p>روسيا واحدة من أهم الوجهات الدراسية للطلاب الدوليين حول العالم، وتتميز بجامعاتها العريقة التي تحتل مراكز متقدمة في التصنيفات العالمية. في هذا المقال، سنستعرض أهم المعلومات التي تحتاجها للدراسة في روسيا.</p>

      <h3>لماذا الدراسة في روسيا؟</h3>
      <p>تقدم روسيا تعليمًا عالي الجودة بتكاليف معقولة مقارنة بالدول الغربية. كما أن الشهادات الروسية معترف بها عالميًا، خاصة في مجالات الطب والهندسة والعلوم.</p>

      <h3>أفضل الجامعات الروسية</h3>
      <ul>
        <li>جامعة موسكو الحكومية</li>
        <li>جامعة سانت بطرسبرغ الحكومية</li>
        <li>جامعة نوفوسيبيرسك الحكومية</li>
        <li>الجامعة الروسية لصداقة الشعوب</li>
      </ul>

      <h3>متطلبات القبول</h3>
      <p>تختلف متطلبات القبول حسب الجامعة والتخصص، ولكنها تشمل بشكل عام:</p>
      <ol>
        <li>شهادة الثانوية العامة أو ما يعادلها</li>
        <li>كشف درجات مترجم للروسية أو الإنجليزية</li>
        <li>جواز سفر ساري المفعول</li>
        <li>شهادة طبية</li>
        <li>اجتياز امتحانات القبول في بعض التخصصات</li>
      </ol>

      <h3>تكاليف الدراسة والمعيشة</h3>
      <p>تتراوح تكاليف الدراسة السنوية بين 2000 إلى 8000 دولار أمريكي حسب الجامعة والتخصص. أما تكاليف المعيشة فتبدأ من 300 دولار شهريًا في المدن الصغيرة وقد تصل إلى 800 دولار في موسكو وسانت بطرسبرغ.</p>

      <h3>نصائح للطلاب الجدد</h3>
      <p>ننصح الطلاب الراغبين في الدراسة في روسيا بالبدء في إجراءات التقديم مبكرًا، ودراسة اللغة الروسية قبل السفر، والتعرف على الثقافة الروسية لتسهيل عملية التأقلم.</p>
    `,
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "15 مايو 2024",
    readTime: "8 دقائق",
    category: "دليل الدراسة",
    author: "فريق رويال ستدي"
  },
  {
    id: 2,
    title: "الدراسة في قيرغيزستان: فرص وتحديات",
    excerpt: "استكشف مميزات الدراسة في قيرغيزستان وتكاليف المعيشة والدراسة. دليل شامل عن الجامعات الطبية والتقنية في هذا البلد الآسيوي الواعد.",
    content: `
      <p>قيرغيزستان أصبحت وجهة جذابة للطلاب العرب الراغبين في الدراسة بالخارج، خاصة في المجالات الطبية. في هذا المقال سنستعرض أهم الفرص والتحديات التي تواجه الطلاب في هذا البلد.</p>

      <h3>مميزات الدراسة في قيرغيزستان</h3>
      <ul>
        <li>تكاليف دراسية منخفضة</li>
        <li>برامج دراسية باللغة الإنجليزية</li>
        <li>إجراءات تأشيرة سهلة</li>
        <li>بيئة آمنة ومناسبة للطلاب</li>
        <li>اعتراف دولي بالشهادات</li>
      </ul>

      <h3>أفضل الجامعات</h3>
      <p>تتميز الجامعات القيرغيزية بجودة التعليم خاصة في المجال الطبي:</p>
      <ol>
        <li>الجامعة الدولية في قيرغيزستان</li>
        <li>جامعة جالال أباد الحكومية</li>
        <li>جامعة بشكيك للعلوم الطبية</li>
        <li>جامعة آسيا الوسطى الدولية</li>
      </ol>

      <h3>التحديات وكيفية التغلب عليها</h3>
      <p>يواجه الطلاب العرب بعض التحديات مثل اختلاف الثقافة والمناخ واللغة. ننصح بالتواصل مع الطلاب القدامى، ودراسة اللغة الروسية الأساسية، والمشاركة في الفعاليات الطلابية لتسهيل التأقلم.</p>

      <h3>تكاليف المعيشة</h3>
      <p>تعتبر تكاليف المعيشة في قيرغيزستان من الأقل في آسيا الوسطى، حيث يمكن للطالب العيش بميزانية تتراوح بين 250-400 دولار شهريًا تشمل السكن والطعام والمواصلات.</p>
    `,
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "8 أبريل 2024",
    readTime: "6 دقائق",
    category: "دليل الدراسة",
    author: "فريق رويال ستدي"
  },
  {
    id: 3,
    title: "أوزبكستان وجهة جديدة للطلاب العرب",
    excerpt: "لماذا أصبحت أوزبكستان وجهة جذابة للطلاب العرب؟ تعرف على نظام التعليم العالي والتخصصات المتاحة والمنح الدراسية في هذا البلد.",
    content: `
      <p>أوزبكستان، قلب آسيا الوسطى، بدأت تجذب أنظار الطلاب العرب بفضل نظامها التعليمي المتميز وتكاليفها المعقولة. في هذا المقال سنستكشف معًا فرص الدراسة في هذا البلد الغني بالتاريخ والثقافة.</p>

      <h3>نظام التعليم في أوزبكستان</h3>
      <p>يتبع نظام التعليم العالي في أوزبكستان النظام الأوروبي (بولونيا) ويتكون من:</p>
      <ul>
        <li>مرحلة البكالوريوس (4 سنوات)</li>
        <li>مرحلة الماجستير (2 سنوات)</li>
        <li>مرحلة الدكتوراه (3 سنوات)</li>
      </ul>

      <h3>التخصصات المتاحة</h3>
      <p>تقدم الجامعات الأوزبكية مجموعة واسعة من التخصصات، أهمها:</p>
      <ol>
        <li>الطب البشري وطب الأسنان</li>
        <li>الهندسة بأنواعها</li>
        <li>علوم الحاسوب وتكنولوجيا المعلومات</li>
        <li>إدارة الأعمال والاقتصاد</li>
        <li>العلوم الإنسانية واللغات</li>
      </ol>

      <h3>المنح الدراسية</h3>
      <p>تقدم الحكومة الأوزبكية منحًا دراسية للطلاب الدوليين تشمل:</p>
      <ul>
        <li>إعفاء كامل أو جزئي من الرسوم الدراسية</li>
        <li>سكن جامعي مدعوم</li>
        <li>رعاية صحية</li>
        <li>دورات لغة مجانية</li>
      </ul>

      <h3>خطوات التقديم</h3>
      <p>للتقديم للدراسة في أوزبكستان:</p>
      <ol>
        <li>اختيار الجامعة والتخصص</li>
        <li>إعداد الأوراق المطلوبة (شهادة الثانوية، جواز سفر، صور شخصية)</li>
        <li>ملء استمارة التقديم عبر الموقع الرسمي</li>
        <li>انتظار خطاب القبول</li>
        <li>استخراج التأشيرة الدراسية</li>
      </ol>
    `,
    image: "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "22 مارس 2024",
    readTime: "7 دقائق",
    category: "دليل الدراسة",
    author: "فريق رويال ستدي"
  }
];

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Find the current article
    const foundArticle = articles.find(art => art.id === parseInt(id));
    setArticle(foundArticle);

    // Find related articles (excluding current article)
    if (foundArticle) {
      const related = articles
        .filter(art => art.id !== parseInt(id) && art.category === foundArticle.category)
        .slice(0, 3);
      setRelatedArticles(related);
    }

    // Check if article is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(parseInt(id)));
  }, [id]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const articleId = parseInt(id);

    if (isBookmarked) {
      const newBookmarks = bookmarks.filter(b => b !== articleId);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    } else {
      localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, articleId]));
    }

    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط المقال إلى الحافظة');
    }
  };

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>المقال غير موجود</h2>
        <Link to="/articles" className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} />
          العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      {/* Article Header */}
      <Header/>

      {/* Article Hero */}
      <div className="article-hero">
        <div className="hero-content">
          <div className="category-badge">{article.category}</div>
          <h1 className='title-art'>{article.title}</h1>

          <div className="article-meta">
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} /> {article.date}
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} /> {article.readTime}
            </span>
            <span>بواسطة {article.author}</span>
          </div>
        </div>

        <div className="hero-image">
          <img src={article.image} alt={article.title} />
        </div>
      </div>

      {/* Article Content */}
      <div className="article-content-container">
        <div className="article-content">
          <div 
            className="article-body" 
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          <div className="article-tags">
            <span>وسوم:</span>
            <a href="#">الدراسة بالخارج</a>
            <a href="#">{article.category}</a>
            <a href="#">{article.title.includes('روسيا') ? 'روسيا' : 
                          article.title.includes('قيرغيزستان') ? 'قيرغيزستان' : 
                          article.title.includes('أوزبكستان') ? 'أوزبكستان' : 'الدراسة'}</a>
          </div>
        </div>

        {/* Sidebar */}
        {/* <div className="article-sidebar">
          <div className="related-articles">
            <h3>مقالات ذات صلة</h3>

            {relatedArticles.map(art => (
              <Link to={`/articles/${art.id}`} key={art.id} className="related-article">
                <div className="related-image">
                  <img src={art.image} alt={art.title} />
                </div>
                <div className="related-content">
                  <h4>{art.title}</h4>
                  <p>{art.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="newsletter-card">
            <h3>اشترك في نشرتنا البريدية</h3>
            <p>كن أول من يعرف عن المقالات الجديدة والعروض الخاصة والمنح الدراسية</p>
            <div className="subscribe-form">
              <input type="email" placeholder="بريدك الإلكتروني" />
              <button>اشتراك</button>
            </div>
          </div>
        </div> */}
      </div>


      {/* Back to Articles */}
      <div className="back-to-articles">
        <Link to="/articles" className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} />
          العودة إلى جميع المقالات
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;