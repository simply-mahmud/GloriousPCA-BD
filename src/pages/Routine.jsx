import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import routinesData from '../data/routines.json';
import { Clock, Sun, Snowflake } from 'lucide-react';

const Routine = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="শিফট ও সময়সূচি" 
        subtitle="গ্রীষ্মকালীন এবং শীতকালীন সময়ের জন্য একাডেমীর প্রাত্যহিক শিফট" 
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
        {routinesData.map((routine, idx) => (
          <div key={idx} style={{
            background: 'var(--bg-white)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            padding: '30px',
            borderTop: '4px solid var(--accent-gold)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', background: 'rgba(91, 197, 242, 0.1)', borderRadius: '50%', color: 'var(--primary-blue)' }}>
                <Clock size={28} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-blue)', margin: 0 }}>{routine.shift}</h3>
            </div>
            
            <p style={{ fontWeight: '600', color: '#4B5563', marginBottom: '24px', fontSize: '1.1rem' }}>
              {routine.classes}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#FFFBEB', borderRadius: '8px' }}>
                <Sun size={20} color="#B88A3B" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#6B7280' }}>গ্রীষ্মকাল</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{routine.summer}</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#F3F4F6', borderRadius: '8px' }}>
                <Snowflake size={20} color="#5BC5F2" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.85rem', color: '#6B7280' }}>শীতকাল</span>
                  <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{routine.winter}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;
