import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import staffData from '../data/staff.json';
import { UserCog } from 'lucide-react';
import styles from './FacultyStaff.module.css';

const Staff = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="আমাদের কর্মচারীবৃন্দ" 
        subtitle="যাঁদের নিরলস পরিশ্রমে একাডেমীর প্রাত্যহিক কার্যক্রম সুন্দর ও সুষ্ঠুভাবে পরিচালিত হয়" 
      />

      {/* Summary Card */}
      <div className={styles.summaryBox}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>পুরুষ স্টাফ</span>
          <span className={styles.statValue}>{staffData.summary.male} জন</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>মহিলা স্টাফ</span>
          <span className={styles.statValue}>{staffData.summary.female} জন</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>মোট স্টাফ</span>
          <span className={`${styles.statValue} ${styles.highlight}`}>{staffData.summary.total} জন</span>
        </div>
      </div>

      {/* Elegant Text Cards Grid */}
      <div className={styles.grid}>
        {staffData.list.map((staff) => (
          <div key={staff.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <UserCog size={24} />
              </div>
              <div className={styles.nameSection}>
                <h3>{staff.name}</h3>
                <p className={styles.designation}>{staff.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
