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
      name: "محمد أحمد",
      country: "روسيا",
      text: "رويال غيرت حياتي! ساعدوني في الحصول على منحة دراسية في أفضل جامعة طبية في روسيا. فريق الدعم كان متاحًا على مدار الساعة للإجابة على جميع استفساراتي.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 2,
      name: "سارة خالد",
      country: "أوزبكستان",
      text: "من خلال رويال استطعت تحقيق حلم الدراسة بالخارج بسهولة ويسر، فريق محترف وداعم في كل الخطوات. ساعدوني في اختيار التخصص المناسب والجامعة المثالية.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 3,
      name: "عمر يوسف",
      country: "قيرغيزستان",
      text: "تجربة رائعة مع رويال، ساعدوني في كل التفاصيل من الأوراق حتى السكن والاستقبال في المطار. استشاراتهم كانت دقيقة ومفيدة جدًا في اتخاذ القرارات الصحيحة.",
      rating: 5,
      image: "https://i.ibb.co/mr2GMcqS/IMG-20250719-WA0018.jpg"
    },
    {
      id: 4,
      name: "فاطمة محمود",
      country: "كازاخستان",
      text: "بفضل رويال حصلت على قبول في جامعة رائدة في كازاخستان مع منحة جزئية. عملية تقديم الأوراق كانت منظمة وسريعة، وفريقهم كان دائمًا متجاوبًا.",
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