import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import slidersData from '../../data/sliders.json';
import siteInfo from '../../data/siteInfo.json';
import Button from '../ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidersData.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidersData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidersData.length - 1 : prev - 1));
  };

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Left Side: Content */}
        <div className={styles.heroContent}>
          <div className={styles.badge}>{siteInfo.established} সাল থেকে আস্থার প্রতীক</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>{siteInfo.shortName}</span>-এ<br />
            আপনাকে স্বাগতম
          </h1>
          <p className={styles.heroDescription}>
            {siteInfo.tagline}
          </p>
          <div className={styles.actionGroup}>
            <Link to="/admission">
              <Button variant="primary" size="large" icon={<ArrowRight size={20} />}>
                ভর্তি তথ্য দেখুন
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="large">
                যোগাযোগ করুন
              </Button>
            </Link>
          </div>
          
          {/* Quick Info Grid */}
          <div className={styles.quickInfoGrid}>
            <div className={styles.infoCard}>
              <h4>শ্রেণি</h4>
              <p>{siteInfo.classes}</p>
            </div>
            <div className={styles.infoCard}>
              <h4>শিফট</h4>
              <p>{siteInfo.shifts}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Auto Slider */}
        <div className={styles.heroSliderWrap}>
          <div className={styles.sliderContainer}>
            {slidersData.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={styles.slideOverlay}></div>
                <div className={styles.slideContent}>
                  <h3>{slide.caption}</h3>
                  <p className={styles.slideCta}>{slide.cta}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Arrows */}
          <button className={`${styles.sliderArrow} ${styles.leftArrow}`} onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className={`${styles.sliderArrow} ${styles.rightArrow}`} onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>

          {/* Slider Indicators */}
          <div className={styles.sliderIndicators}>
            {slidersData.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
