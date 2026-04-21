import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Admin.module.css';

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const navItems = [
  { to: '/admin/students', label: 'Students' },
  { to: '/admin/faculty',  label: 'Faculty' },
  { to: '/admin/staff',    label: 'Staff' },
  { to: '/admin/transport',label: 'Transport' },
  { to: '/admin/sliders',  label: 'Sliders' },
  { to: '/admin/videos',   label: 'Videos' },
];

const AdminLayoutWrapper = ({ children, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={styles.layout}>

      {/* Mobile top bar */}
      <div className={styles.mobileBar}>
        <button className={styles.menuToggle} onClick={() => setSidebarOpen(o => !o)}>
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <span className={styles.mobileTitle}>GPCA Admin</span>
        <button onClick={onLogout} className={styles.logoutBtn}>Logout</button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        {/* Desktop header (hidden on mobile — mobile uses mobileBar) */}
        <h2 className={styles.sidebarHeader}>
          <span>GPCA Admin</span>
          <button onClick={onLogout} className={styles.logoutBtn}>Logout</button>
        </h2>
        <nav>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => isActive ? styles.activeTab : styles.tab}
              onClick={closeSidebar}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayoutWrapper;
