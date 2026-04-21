import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import examsData from '../data/exams.json';
import { ClipboardList, Calculator } from 'lucide-react';
import styles from './Exams.module.css';

const Exams = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="পরীক্ষা পদ্ধতি ও মানবন্টন" 
        subtitle="গ্লোরিয়াস প্রি-ক্যাডেট একাডেমীর স্বচ্ছ ও সুশৃঙ্খল মূল্যায়ন পদ্ধতি" 
      />

      {/* Logic Card */}
      <div className={styles.logicCard}>
        <div className={styles.logicIcon}>
          <Calculator size={32} />
        </div>
        <div className={styles.logicContent}>
          <h3>চূড়ান্ত ফলাফলের নিয়ম</h3>
          <p>{examsData.logic}</p>
        </div>
      </div>

      {/* Terms Grid */}
      <div className={styles.termGrid}>
        {examsData.terms.map((term) => (
          <div key={term.id} className={styles.termCard}>
            <div className={styles.termHeader}>
              <ClipboardList size={24} className={styles.termIcon} />
              <h3>{term.name}</h3>
            </div>
            
            <div className={styles.marksBreakdown}>
              <div className={styles.markItem}>
                <span className={styles.markLabel}>ক্লাস টেস্ট</span>
                <span className={styles.markScore}>{term.marks.classTest}</span>
              </div>
              <div className={styles.markItem}>
                <span className={styles.markLabel}>টিউটোরিয়াল</span>
                <span className={styles.markScore}>{term.marks.tutorial}</span>
              </div>
              <div className={styles.markItem}>
                <span className={styles.markLabel}>টার্মিনাল (লিখিত)</span>
                <span className={styles.markScore}>{term.marks.terminal}</span>
              </div>
            </div>
            
            <div className={styles.termTotal}>
              <span>মোট নম্বর</span>
              <span className={styles.totalScore}>{term.marks.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
