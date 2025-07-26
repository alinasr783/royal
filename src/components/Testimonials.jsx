import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faStar
} from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      country: "روسيا",
      university: "جامعة موسكو الحكومية",
      text: "بفضل رويال حصلت على قبول في الطب البشري بجامعة موسكو الحكومية. فريق الدعم ساعدني في كل خطوة من تقديم الأوراق حتى الوصول والإقامة. تجربة ممتازة!",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 2,
      name: "سارة عبدالله",
      country: "تركيا",
      university: "جامعة الشرق الأوسط التقنية",
      text: "رويال ساعدتني في الحصول على منحة هندسة الطيران في تركيا. استشاراتهم المهنية كانت حاسمة في اختياري للجامعة والتخصص المناسب لمهاراتي.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 3,
      name: "خالد محمود",
      country: "مصر",
      university: "الجامعة الأمريكية بالقاهرة",
      text: "من خلال رويال استطعت الالتحاق ببرنامج علوم الحاسب في الجامعة الأمريكية. فريقهم وفر لي كل المعلومات الدقيقة عن متطلبات القبول والمنح المتاحة.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 4,
      name: "نورا أحمد",
      country: "بيلاروسيا",
      university: "الجامعة الطبية الحكومية",
      text: "تجربة متميزة مع رويال! ساعدوني في الحصول على قبول لدراسة طب الأسنان في بيلاروسيا وتجهيز كل المستندات المطلوبة باحترافية عالية.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 5,
      name: "يوسف عمر",
      country: "الصين",
      university: "جامعة تشينغهوا",
      text: "بفضل الله ثم رويال، أنا الآن أدرس هندسة الذكاء الاصطناعي في واحدة من أفضل جامعات العالم. الدعم المستمر من الفريق جعل العملية سهلة وخالية من التعقيدات.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 6,
      name: "لمياء حسن",
      country: "طاجيكستان",
      university: "الجامعة الطبية الحكومية",
      text: "رويال وفرت لي كل المعلومات الدقيقة عن دراسة الطب في طاجيكستان وساعدتني في إجراءات التسجيل والسفر. شكرًا لفريقكم المحترف!",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={i < rating ? "star filled" : "star"} 
      />
    ));
  };

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2>آراء <span className="gold-text">طلابنا</span></h2>
        <p>قصص نجاح من طلاب حققوا حلمهم بالدراسة بالخارج</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-content">
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
            <div className="testimonial-author">
              <div 
                className="author-image" 
                style={{ backgroundImage: `url(${testimonial.image})` }}
              ></div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>الدراسة في {testimonial.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;