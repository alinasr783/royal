import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faStar,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  const scrollRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "محمد أحمد",
      country: "روسيا",
      text: "رويال غيرت حياتي! ساعدوني في الحصول على منحة دراسية في أفضل جامعة طبية في روسيا. فريق الدعم كان متاحًا على مدار الساعة للإجابة على جميع استفساراتي.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "سارة خالد",
      country: "أوزبكستان",
      text: "من خلال رويال استطعت تحقيق حلم الدراسة بالخارج بسهولة ويسر، فريق محترف وداعم في كل الخطوات. ساعدوني في اختيار التخصص المناسب والجامعة المثالية.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "عمر يوسف",
      country: "قيرغيزستان",
      text: "تجربة رائعة مع رويال، ساعدوني في كل التفاصيل من الأوراق حتى السكن والاستقبال في المطار. استشاراتهم كانت دقيقة ومفيدة جدًا في اتخاذ القرارات الصحيحة.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "فاطمة محمود",
      country: "كازاخستان",
      text: "بفضل رويال حصلت على قبول في جامعة رائدة في كازاخستان مع منحة جزئية. عملية تقديم الأوراق كانت منظمة وسريعة، وفريقهم كان دائمًا متجاوبًا.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: "خالد سعد",
      country: "أذربيجان",
      text: "ما يميز رويال هو المتابعة المستمرة حتى بعد السفر. ساعدوني في حل أي تحديات واجهتها في بداية دراستي. حقًا يهتمون بمصلحة الطالب.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  // تأثير ظهور البطاقات
  useEffect(() => {
    if (!scrollRef.current) return;

    const cards = scrollRef.current.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  // تأثير السحب بالماوس
  useEffect(() => {
    const grid = scrollRef.current;
    if (!grid) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - grid.offsetLeft;
      scrollLeft = grid.scrollLeft;
      grid.style.cursor = 'grabbing';
      grid.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
      isDown = false;
      grid.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      grid.style.cursor = 'grab';
      grid.style.scrollBehavior = 'smooth';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - grid.offsetLeft;
      const walk = (x - startX) * 1.5;
      grid.scrollLeft = scrollLeft - walk;
    };

    grid.addEventListener('mousedown', handleMouseDown);
    grid.addEventListener('mouseleave', handleMouseLeave);
    grid.addEventListener('mouseup', handleMouseUp);
    grid.addEventListener('mousemove', handleMouseMove);

    return () => {
      grid.removeEventListener('mousedown', handleMouseDown);
      grid.removeEventListener('mouseleave', handleMouseLeave);
      grid.removeEventListener('mouseup', handleMouseUp);
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="testimonials">
      <div className="section-header">
        <h2>آراء <span className="gold-text">طلابنا</span></h2>
        <p>قصص نجاح من طلاب حققوا حلمهم بالدراسة بالخارج</p>
      </div>

      <div className="testimonials-grid" ref={scrollRef}>
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="gold-border"></div>
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

      <div className="scroll-controls">
        <button className="scroll-btn" onClick={scrollLeft} aria-label="Scroll left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="scroll-btn" onClick={scrollRight} aria-label="Scroll right">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="gold-pattern"></div>
    </section>
  );
};

export default Testimonials;