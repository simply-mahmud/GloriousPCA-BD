import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import siteInfo from '../../data/siteInfo.json';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navStructure = [
    { name: 'হোম', path: '/' },
    { 
      name: 'স্কুল', 
      isDropdown: true,
      items: [
        { name: 'আমাদের সম্পর্কে', path: '/about' },
        { name: 'শিক্ষকবৃন্দ', path: '/faculty' },
        { name: 'কর্মচারীবৃন্দ', path: '/staff' },
        { name: 'পরিবহন', path: '/transport' },
        { name: 'শিক্ষার্থী সংখ্যা', path: '/students' }
      ]
    },
    { 
      name: 'একাডেমিক', 
      isDropdown: true,
      items: [
        { name: 'ভর্তি তথ্য', path: '/admission' },
        { name: 'প্রসপেক্টাস', path: '/prospectus' },
        { name: 'শিফট ও সময়সূচি', path: '/routine' },
        { name: 'পরীক্ষা পদ্ধতি', path: '/exams' }
      ]
    },
    { name: 'নোটিশ', path: '/notices' },
    { name: 'যোগাযোগ', path: '/contact' }
  ];

  const handleDropdownClick = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navWrapper}`}>
        
        {/* Full Width Brand Logo */}
        <div className={styles.brandContainer}>
          <Link to="/" className={styles.brand}>
            <img src="/logo.jpg" alt="Glorious PCA Logo" className={styles.logoImage} />
            <div className={styles.brandText}>
              <h1>গ্লোরিয়াস প্রি-ক্যাডেট একাডেমী</h1>
              <p className={styles.brandAddress}>{siteInfo.contact.address} • যোগাযোগ: {siteInfo.contact.phoneDisplay}</p>
            </div>
          </Link>

          {/* Mobile Right Edge toggle */}
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navbar Menu */}
        <div className={styles.desktopMenuWrapper}>
          <div className={styles.desktopMenu}>
            {navStructure.map((nav, idx) => (
              nav.isDropdown ? (
                <div key={idx} className={styles.dropdownContainer}>
                  <button className={styles.navLink} onClick={() => handleDropdownClick(nav.name)}>
                    {nav.name} <ChevronDown size={14} className={styles.chevron} />
                  </button>
                  <div className={`${styles.dropdownMenu} ${activeDropdown === nav.name ? styles.showDropdown : ''}`}>
                    {nav.items.map(subItem => (
                      <NavLink 
                        key={subItem.path} 
                        to={subItem.path} 
                        className={({ isActive }) => isActive ? `${styles.dropdownItem} ${styles.active}` : styles.dropdownItem}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink 
                  key={nav.path} 
                  to={nav.path} 
                  className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                >
                  {nav.name}
                </NavLink>
              )
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {navStructure.map((nav, idx) => (
          nav.isDropdown ? (
            <div key={idx} className={styles.mobileDropdownContainer}>
              <button 
                className={styles.mobileDropdownToggle} 
                onClick={() => handleDropdownClick(nav.name)}
              >
                {nav.name} <ChevronDown size={18} style={{ transform: activeDropdown === nav.name ? 'rotate(180deg)' : 'rotate(0)' }}/>
              </button>
              <div className={`${styles.mobileDropdownItems} ${activeDropdown === nav.name ? styles.mobileDropdownOpen : ''}`}>
                {nav.items.map(subItem => (
                  <NavLink 
                    key={subItem.path} 
                    to={subItem.path} 
                    className={({ isActive }) => isActive ? `${styles.mobileSubLink} ${styles.active}` : styles.mobileSubLink}
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink 
              key={nav.path} 
              to={nav.path} 
              className={({ isActive }) => isActive ? `${styles.mobileLink} ${styles.active}` : styles.mobileLink}
            >
              {nav.name}
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
