import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import siteInfo from '../data/siteInfo.json';
import { Target, Shield, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="আমাদের সম্পর্কে" 
        subtitle="শৃঙ্খলা, মানসম্মত শিক্ষা ও নৈতিকতার এক অনন্য শিক্ষালয়" 
      />
      
      <div style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center', lineHeight: '1.8', fontSize: '1.1rem', color: '#4B5563' }}>
        <p>
          {siteInfo.name} {siteInfo.established} সাল থেকে মেহেরপুর সদরে শিক্ষার আলো ছড়িয়ে দিচ্ছে। 
          আমাদের মূল লক্ষ্য হলো শিক্ষার্থীদের মধ্যে শুধু পুঁথিগত বিদ্যা নয়, বরং নৈতিকতা, শৃঙ্খলাবোধ 
          এবং মানবিক মূল্যবোধ জাগ্রত করা। আমরা বিশ্বাস করি, আজকের শিশুরাই আগামী দিনের ভবিষ্যৎ, 
          তাই তাদের সঠিক দিকনির্দেশনা ও যত্নশীল শিক্ষার মাধ্যমে আমরা গড়ে তুলি এক আদর্শ সমাজ।
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {[
          { icon: <Target size={32} />, title: "প্রতিষ্ঠানের লক্ষ্য", desc: "আন্তর্জাতিক মানের শিক্ষা প্রদান এবং সুনাগরিক হিসেবে গড়ে তোলা।" },
          { icon: <Shield size={32} />, title: "শৃঙ্খলাভিত্তিক শিক্ষা", desc: "প্রি-ক্যাডেট পদ্ধতিতে নিয়মানুবর্তিতা ও সুশৃঙ্খল জীবনযাপনের অনুশীলন।" },
          { icon: <Heart size={32} />, title: "শিক্ষার্থী বান্ধব পরিবেশ", desc: "ভয় নয়, বরং আনন্দদায়ক পরিবেশে পাঠদান নিশ্চিত করা।" },
          { icon: <Award size={32} />, title: "অভিভাবকদের আস্থা", desc: "পিতা-মাতার মতোই যত্নশীল থেকে শিক্ষকগণ পাঠদান করেন।" }
        ].map((item, i) => (
          <div key={i} style={{
            background: 'var(--bg-white)',
            padding: '30px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)',
            textAlign: 'center',
            borderBottom: '4px solid var(--accent-red)'
          }}>
            <div style={{ color: 'var(--primary-blue)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              {item.icon}
            </div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '12px', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
