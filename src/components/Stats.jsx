import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserGraduate,
  faUniversity,
  faCheckCircle,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './Stats.css';

const Stats = () => {
  const scrollRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState([]);

  // Stats data
  const stats = [
    {
      id: 1,
      value: 500,
      suffix: "+",
      label: "طالب سافروا معنا",
      icon: faUserGraduate,
      color: "#D4AF37"
    },
    {
      id: 2,
      value: 65,
      suffix: "+",
      label: "جامعة شريكة",
      icon: faUniversity,
      color: "#A67C00"
    },
    {
      id: 3,
      value: 98,
      suffix: "%",
      label: "نسبة القبول",
      icon: faCheckCircle,
      color: "#F4D03F"
    },
    {
      id: 4,
      value: 15,
      suffix: "+",
      label: "سنة خبرة",
      icon: faCalendarAlt,
      color: "#B8860B"
    },
    {
      id: 5,
      value: 100,
      suffix: "+",
      label: "دولة وجهة",
      icon: faUniversity,
      color: "#DAA520"
    },
    {
      id: 6,
      value: 10000,
      suffix: "+",
      label: "استشارة سنوية",
      icon: faUserGraduate,
      color: "#CD853F"
    }
  ];

  // Animation for stats
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedStats(stats.map(stat => {
        const animatedValue = Math.floor(progress * stat.value);
        return { ...stat, animatedValue };
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

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

  // تأثير ظهور البطاقات
  useEffect(() => {
    if (!scrollRef.current) return;

    const cards = scrollRef.current.querySelectorAll('.stat-card');
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
  }, [animatedStats]);

  return (
    <section className="stats-section">
      <div className="section-header">
        <h2>أرقامنا <span className="gold-text">تتحدث عنا</span></h2>
        <p>
          إنجازاتنا وأرقامنا التي نفتخر بها تعكس جودة الخدمات التي نقدمها
        </p>
      </div>

      <div className="stats-grid" ref={scrollRef}>
        {animatedStats.map(stat => (
          <div className="stat-card" key={stat.id}>
            <div className="gold-border"></div>
            <div className="stat-icon">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">{stat.animatedValue}{stat.suffix}</h3>
              <p className="stat-label">{stat.label}</p>
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
    </section>
  );
};

export default Stats;