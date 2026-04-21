import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', onClick, type = 'button', icon, style, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      type={type}
      style={style}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
