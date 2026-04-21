import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import NoticeCard from '../components/ui/NoticeCard';
import noticesData from '../data/notices.json';

const Notices = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="সকল নোটিশসমূহ" 
        subtitle="একাডেমীর সাম্প্রতিক ও অতীত সকল নোটিশ এবং ইভেন্ট আপডেট" 
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
        marginTop: '30px'
      }}>
        {noticesData.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  );
};

export default Notices;
