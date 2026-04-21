import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AdminAuth from '../../components/admin/AdminAuth';
import AdminLayoutWrapper from '../../components/admin/AdminLayoutWrapper';
import AdminDashboard from './AdminDashboard';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/admin/faculty');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return <AdminAuth onLogin={handleLogin} />;
  }

  return (
    <AdminLayoutWrapper onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/faculty" replace />} />
        <Route path="/:type" element={<AdminDashboard />} />
      </Routes>
    </AdminLayoutWrapper>
  );
};

export default AdminPanel;
