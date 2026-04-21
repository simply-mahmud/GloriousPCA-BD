import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import siteInfo from '../data/siteInfo.json';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container section-padding">
      <SectionTitle 
        title="যোগাযোগ করুন" 
        subtitle="যেকোনো তথ্য জানতে বা একাডেমী ভিজিট করতে যোগাযোগ করুন" 
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
        
        {/* Contact Information */}
        <div>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '24px' }}>অফিসের ঠিকানা ও সময়সূচি</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-red)', marginTop: '4px' }}><MapPin size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '4px' }}>ঠিকানা</h4>
                <p style={{ color: '#4B5563' }}>{siteInfo.contact.address}</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}><Clock size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '4px' }}>অফিস সময়</h4>
                <p style={{ color: '#4B5563' }}>{siteInfo.contact.officeHours}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--sky-blue)', marginTop: '4px' }}><Phone size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '4px' }}>যোগাযোগ নম্বর</h4>
                <p style={{ color: '#4B5563' }}><a href={`tel:${siteInfo.contact.phone.replace(/\D/g, '')}`}>{siteInfo.contact.phoneDisplay}</a></p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--primary-blue)', marginTop: '4px' }}><Mail size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '4px' }}>ইমেইল</h4>
                <p style={{ color: '#4B5563' }}><a href={`mailto:${siteInfo.contact.email}`}>{siteInfo.contact.email}</a></p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '30px', flexWrap: 'wrap' }}>
            <Button variant="primary" icon={<Phone size={18}/>} onClick={() => window.location.href = `tel:${siteInfo.contact.phone.replace(/\D/g, '')}`}>
              কল করুন
            </Button>
            <Button variant="secondary" icon={<MessageCircle size={18}/>} onClick={() => window.open(`https://wa.me/${siteInfo.contact.whatsapp}`, '_blank')}>
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Google Map Embed */}
        <div style={{ 
          borderRadius: 'var(--radius-md)', 
          minHeight: '400px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-soft)'
        }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.380825293438!2d88.62858437589753!3d23.769449588043795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f947e32b8d4453%3A0x8acd36a3db56d581!2sGlorious%20Precadet%20%26%20Kindergarten!5e0!3m2!1sen!2sbd!4v1776728628064!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
