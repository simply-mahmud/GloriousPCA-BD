import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import facultyData from '../data/faculty.json';
import { User, BookOpen } from 'lucide-react';
import styles from './FacultyStaff.module.css';

const Faculty = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="আমাদের সম্মানিত শিক্ষকবৃন্দ" 
        subtitle="যাঁদের অভিজ্ঞ দিকনির্দেশনায় শিক্ষার্থীরা ভবিষ্যৎ সাফল্যের পথে এগিয়ে যাচ্ছে" 
      />

      {/* Summary Card */}
      <div className={styles.summaryBox}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>পুরুষ শিক্ষক</span>
          <span className={styles.statValue}>{facultyData.summary.male} জন</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>মহিলা শিক্ষক</span>
          <span className={styles.statValue}>{facultyData.summary.female} জন</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>মোট শিক্ষক</span>
          <span className={`${styles.statValue} ${styles.highlight}`}>{facultyData.summary.total} জন</span>
        </div>
      </div>

      {/* Elegant Text Cards Grid */}
      <div className={styles.grid}>
        {facultyData.list.map((teacher) => (
          <div key={teacher.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <User size={24} />
              </div>
              <div className={styles.nameSection}>
                <h3>{teacher.name}</h3>
                <p className={styles.designation}>{teacher.designation}</p>
              </div>
            </div>
            
            {teacher.subject && (
              <div className={styles.cardBody}>
                <div className={styles.subjectRow}>
                  <BookOpen size={16} className={styles.subjectIcon} />
                  <span>বিষয়: {teacher.subject}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
