import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopNav = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly or instantly scroll to the absolute top of the page frame whenever the navigation path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopNav;
