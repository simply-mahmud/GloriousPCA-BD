import React from 'react';
import { Calendar, FileDown, ArrowRight } from 'lucide-react';
import styles from './NoticeCard.module.css';

const NoticeCard = ({ notice }) => {
  return (
    <div className={styles.noticeCard}>
      <div className={styles.dateBadge}>
        <Calendar size={16} />
        <span>{notice.date}</span>
      </div>
      <h3 className={styles.title}>{notice.title}</h3>
      <p className={styles.summary}>{notice.summary}</p>
      
      <div className={styles.actions}>
        {notice.pdfLink ? (
          <a href={notice.pdfLink} target="_blank" rel="noreferrer" className={styles.downloadBtn}>
            <FileDown size={18} />
            <span>ডাউনলোড করুন</span>
          </a>
        ) : (
          <button className={styles.viewBtn}>
            <span>বিস্তারিত দেখুন</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NoticeCard;
