import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import studentsData from '../data/students.json';
import { Users } from 'lucide-react';
import styles from './Students.module.css';

const Students = () => {
  const totalStudents = studentsData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="container section-padding">
      <SectionTitle 
        title="শিক্ষার্থী সংখ্যা" 
        subtitle="শ্রেণিভিত্তিক বর্তমান শিক্ষার্থী সংখ্যা" 
      />

      <div className={styles.totalBox}>
        <Users size={32} />
        <div className={styles.totalContent}>
          <span>সর্বমোট শিক্ষার্থী</span>
          <h2>{totalStudents} জন</h2>
        </div>
      </div>

      <div className={styles.grid}>
        {studentsData.map((data, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.classBadge}>শ্রেণি</div>
            <h3>{data.class}</h3>
            <div className={styles.countBadge}>
              <Users size={16}/> {data.count} জন
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
