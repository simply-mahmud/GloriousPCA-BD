import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import NoticeCard from '../components/ui/NoticeCard';
import noticesData from '../data/notices.json';
import videosData from '../data/videos.json';
import { ArrowRight, BookOpen, Clock, Users, Award, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videosData.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === videosData.length - 1 ? 0 : prev + 1));
  };

  const activeVideo = videosData[currentVideo];

  return (
    <div className="home-page">
      <Hero />
      
      {/* About Preview Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <SectionTitle title="আমাদের সম্পর্কে" subtitle="যে কারণে গ্লোরিয়াস প্রি-ক্যাডেট একাডেমী আপনার সন্তানের জন্য সেরা" />
          
          <div className={styles.aboutSection}>
            <div>
              <p className={styles.aboutText}>
                আমাদের লক্ষ্য শুধুমাত্র পুঁথিগত বিদ্যায় নয়, বরং নৈতিকতা, শৃঙ্খলাবোধ 
                এবং মানবিক মূল্যবোধ জাগ্রত করে একজন পরিপূর্ণ মানুষ হিসেবে শিক্ষার্থীদের 
                গড়ে তোলা।
              </p>
              
              <ul className={styles.featureList}>
                <li><span className={styles.featureIcon}><BookOpen size={20}/></span> আধুনিক ও বিজ্ঞানসম্মত শিক্ষা পদ্ধতি</li>
                <li><span className={styles.featureIcon}><Clock size={20}/></span> প্রি-ক্যাডেট নিয়মে সুশৃঙ্খল প্রাত্যহিক রুটিন</li>
                <li><span className={styles.featureIcon}><Award size={20}/></span> দক্ষ, অভিজ্ঞ ও প্রশিক্ষণপ্রাপ্ত শিক্ষক মন্ডলী</li>
                <li><span className={styles.featureIcon}><Users size={20}/></span> খেলাধুলা ও সাংস্কৃতিক চর্চার চমৎকার পরিবেশ</li>
              </ul>
            </div>
            
            <div className={styles.aboutImageGrid}>
              <div className={`${styles.imageWrapper} ${styles.img1}`}>
                <span className={styles.imagePlaceholder}>Classroom</span>
              </div>
              <div className={`${styles.imageWrapper} ${styles.img2}`}>
                <span className={styles.imagePlaceholder}>Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section - 2nd Pattern */}
      <section className={`section-padding ${styles.bgCreamDark}`}>
        <div className="container">
          <SectionTitle title="এক নজরে আমাদের কার্যক্রম" subtitle="একাডেমীর সহশিক্ষা ও সাংস্কৃতিক কার্যক্রমের চুম্বকাংশ" />
          
          <div className={styles.singleVideoSlider}>
            
            <div className={styles.videoMainBox}>
              <div className={styles.videoThumbnail} style={{ backgroundImage: `url(${activeVideo.thumbnail})` }}>
                <div className={styles.playIconWrapper}>
                  <PlayCircle size={64} className={styles.playIcon} />
                </div>
                {/* YouTube iframe overlay */}
                <iframe 
                  className={styles.videoIframe}
                  src={`https://www.youtube.com/embed/${activeVideo.embedId}`} 
                  title={activeVideo.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className={styles.videoNavRow}>
              <button className={styles.videoNavBtn} onClick={prevVideo} aria-label="Previous Video">
                <ChevronLeft size={24} />
              </button>
              
              <h4 className={styles.activeVideoTitle}>{activeVideo.title}</h4>
              
              <button className={styles.videoNavBtn} onClick={nextVideo} aria-label="Next Video">
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Notices Section */}
      <section className={`section-padding ${styles.bgLightBlue}`}>
        <div className="container">
          <SectionTitle title="সাম্প্রতিক নোটিশ" subtitle="একাডেমীর সকল সর্বশেষ খবর ও ইভেন্ট" />
          
          <div className={styles.noticesGrid}>
            {noticesData.slice(0, 4).map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>

          <div className={styles.centerAction}>
            <Button variant="outline" onClick={() => window.location.href = '/notices'}>
              সকল নোটিশ দেখুন <ArrowRight size={18} style={{marginLeft: '8px'}} />
            </Button>
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className={styles.admissionSection}>
        <div className="container">
          <div className={styles.admissionCard}>
            <div className={styles.admissionContent}>
              <h2>আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ নিশ্চিত করুন</h2>
              <p>আগামীর যোগ্য নাগরিক হিসেবে গড়ে তুলতে আজই গ্লোরিয়াস প্রি-ক্যাডেট একাডেমীতে ভর্তি করুন। প্লে থেকে নবম শ্রেণি পর্যন্ত ভর্তি চলছে।</p>
              <div className={styles.admissionBtns}>
                <Button variant="primary" onClick={() => window.location.href = '/admission'}>ভর্তি তথ্য</Button>
                <Button variant="outline" className={styles.whiteOutlineBtn} onClick={() => window.location.href = '/contact'}>যোগাযোগ করুন</Button>
              </div>
            </div>
            <Award size={180} className={styles.admissionIcon} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
