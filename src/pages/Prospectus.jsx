import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Download, Eye } from 'lucide-react';

const Prospectus = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="একাডেমীর প্রসপেক্টাস" 
        subtitle="গ্লোরিয়াস প্রি-ক্যাডেট একাডেমীর বিস্তারিত তথ্য, নিয়মকানুন এবং পাঠদান পদ্ধতি সম্বলিত প্রসপেক্টাস" 
      />

      <div style={{ 
        maxWidth: '700px', 
        margin: '40px auto 0', 
        background: 'var(--bg-white)', 
        borderRadius: 'var(--radius-md)', 
        boxShadow: 'var(--shadow-soft)',
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          background: 'var(--primary-blue)', 
          padding: '40px 30px', 
          color: 'var(--bg-white)', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative shapes */}
          <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-40px', right: '-20px', width: '150px', height: '150px', background: 'rgba(91, 197, 242, 0.2)', borderRadius: '50%' }}></div>
          
          <h2 style={{ fontSize: '1.8rem', position: 'relative', zIndex: 1 }}>গ্লোরিয়াস প্রি-ক্যাডেট একাডেমী</h2>
          <p style={{ color: 'var(--sky-blue)', marginTop: '10px', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>প্রসপেক্টাস - ২০২৪</p>
        </div>
        
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4B5563', lineHeight: '1.7', marginBottom: '30px', fontSize: '1.05rem' }}>
            আমাদের একাডেমীর শৃঙ্খলা, শিক্ষার পরিবেশ, ড্রেস কোড, টিউশন ফি, এবং অন্যান্য 
            প্রয়োজনীয় দিকনির্দেশনা বিস্তারিতভাবে জানতে প্রসপেক্টাসটি ডাউনলোড করুন 
            অথবা অনলাইনে দেখুন।
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" icon={<Download size={18} />}>
              ডাউনলোড করুন (PDF)
            </Button>
            <Button variant="outline" icon={<Eye size={18} />}>
              অনলাইনে দেখুন
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prospectus;
