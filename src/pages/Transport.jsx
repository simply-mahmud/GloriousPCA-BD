import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import transportData from '../data/transport.json';
import { Car, MapPin, Phone } from 'lucide-react';
import styles from './FacultyStaff.module.css';

const Transport = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="পরিবহন ও অটো ড্রাইভার" 
        subtitle="শিক্ষার্থীদের নিরাপদে যাতায়াতের জন্য নিয়োজিত পরিবহন কর্মীদের তালিকা এবং যোগাযোগের তথ্য" 
      />

      <div className={styles.grid} style={{ marginTop: '40px' }}>
        {transportData.map((driver) => (
          <div key={driver.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <Car size={24} />
              </div>
              <div className={styles.nameSection}>
                <h3>{driver.name}</h3>
                <p className={styles.designation}>অটো ড্রাইভার</p>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className={styles.contactRow}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <span>রুট: {driver.route}</span>
                </div>
                <div className={styles.contactRow}>
                  <Phone size={16} className={styles.contactIcon} />
                  <span>ফোন: <a href={`tel:${driver.phone}`}>{driver.phone}</a></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
