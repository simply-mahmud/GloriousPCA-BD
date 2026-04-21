import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTopNav from './components/ui/ScrollToTopNav';
import AdminPanel from './pages/admin/AdminPanel';

import Home from './pages/Home';
import Faculty from './pages/Faculty';
import Staff from './pages/Staff';
import Transport from './pages/Transport';
import Exams from './pages/Exams';
import Students from './pages/Students';
import Notices from './pages/Notices';
import About from './pages/About';
import Admission from './pages/Admission';
import Prospectus from './pages/Prospectus';
import Routine from './pages/Routine';
import Contact from './pages/Contact';

const PublicLayoutWrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  return (
    <Router>
      <ScrollToTopNav />
      <Routes>
        <Route element={<PublicLayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/prospectus" element={<Prospectus />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
        {/* Hidden Admin Routes */}
        <Route path="/admin/*" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
