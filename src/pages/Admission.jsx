import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import siteInfo from '../data/siteInfo.json';
import { PhoneCall, FileText, CheckCircle } from 'lucide-react';

const Admission = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="ভর্তি তথ্য" 
        subtitle="নতুন শিক্ষাবর্ষে প্লে থেকে নবম শ্রেণি পর্যন্ত ভর্তি চলছে" 
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
        
        <div style={{ background: 'var(--bg-white)', padding: '30px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{color: 'var(--accent-red)'}}><CheckCircle /></span>
            প্রয়োজনীয় কাগজপত্র
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#4B5563' }}>
            <li>• শিক্ষার্থীর ২ কপি পাসপোর্ট সাইজ ছবি</li>
            <li>• জন্ম নিবন্ধনের ফটোকপি</li>
            <li>• পিতা ও মাতার জাতীয় পরিচয়পত্রের ফটোকপি</li>
            <li>• পূর্ববর্তী বিদ্যালয়ের ছাড়পত্র (যদি থাকে)</li>
            <li>• পূর্ববর্তী পরীক্ষার ফলাফল (যদি থাকে)</li>
          </ul>
        </div>

        <div style={{ background: 'var(--bg-white)', padding: '30px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ color: 'var(--primary-blue)', fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{color: 'var(--accent-gold)'}}><FileText /></span>
            ভর্তির প্রক্রিয়া
          </h3>
          <p style={{ color: '#4B5563', lineHeight: '1.6', marginBottom: '20px' }}>
            ভর্তি ফর্ম বিদ্যালয়ের অফিস থেকে সংগ্রহ করতে হবে অথবা ওয়েবসাইট থেকে ডাউনলোড করে পূরণপূর্বক অফিসে জমা দিতে হবে। 
            নতুন ভর্তিকৃত শিক্ষার্থীদের ক্ষেত্রে একটি সাধারণ সিলেকশন ইন্টারভিউ নেওয়া হতে পারে।
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
             <Button variant="outline">ভর্তি ফর্ম ডাউনলোড</Button>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, var(--primary-blue), #1e205e)', color: 'white', padding: '30px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}>
          <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '20px' }}>যোগাযোগ</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য আমাদের অফিসে সরাসরি যোগাযোগ করুন অথবা কল করুন।</p>
          <a href={`tel:${siteInfo.contact.phone.replace(/\D/g, '')}`}>
            <Button variant="primary" icon={<PhoneCall size={18}/>}>কল করুন: {siteInfo.contact.phoneDisplay}</Button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Admission;
