import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import siteInfo from '../../data/siteInfo.json';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Brand Info */}
        <div className={styles.brandSection}>
          <div className={styles.brandInfo}>
            <img src="/logo.jpg" alt="Glorious PCA Logo" className={styles.footerLogo} />
            <h2>{siteInfo.name}</h2>
          </div>
          <p className={styles.tagline}>{siteInfo.tagline}</p>
          <div className={styles.socials}>
            <a href={siteInfo.socials.facebook} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.fbHover}`} aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href={siteInfo.socials.youtube} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.ytHover}`} aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href={siteInfo.socials.whatsapp} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.waHover}`} aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linkSection}>
          <h3>প্রয়োজনীয় লিংক</h3>
          <ul>
            <li><Link to="/about">আমাদের সম্পর্কে</Link></li>
            <li><Link to="/admission">ভর্তি তথ্য</Link></li>
            <li><Link to="/prospectus">প্রসপেক্টাস</Link></li>
            <li><Link to="/notices">নোটিশ রুটিন</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className={styles.linkSection}>
          <h3>তথ্য ও পরিচিতি</h3>
          <ul>
            <li><Link to="/routine">শিফট ও সময়সূচি</Link></li>
            <li><Link to="/faculty">শিক্ষকবৃন্দ</Link></li>
            <li><Link to="/staff">কর্মচারীবৃন্দ</Link></li>
            <li><Link to="/exams">পরীক্ষা পদ্ধতি</Link></li>
            <li><Link to="/students">শিক্ষার্থী সংখ্যা</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactSection}>
          <h3>যোগাযোগ</h3>
          <ul>
            <li>
              <MapPin size={18} className={styles.icon} />
              <span>{siteInfo.contact.address}</span>
            </li>
            <li>
              <Phone size={18} className={styles.icon} />
              <a href={`tel:${siteInfo.contact.phone}`}>{siteInfo.contact.phone}</a>
            </li>
            <li>
              <Mail size={18} className={styles.icon} />
              <a href={`mailto:${siteInfo.contact.email}`}>{siteInfo.contact.email}</a>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Copyright */}
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
