import React, { useState } from 'react';
import styles from './Admin.module.css';

const AdminAuth = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      sessionStorage.setItem('adminToken', 'true');
      onLogin();
    } else {
      setError('ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>GPCA অ্যাডমিন</h2>
        <p>লগইন করতে পাসওয়ার্ড দিন</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="পাসওয়ার্ড"
            autoFocus
          />
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit">লগইন</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;
