import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioDataProvider, usePortfolioData } from './context/PortfolioDataContext';
import { ThemeContext } from './context/ThemeContext';

export { ThemeContext };
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import ContentCreator from './components/ContentCreator';
import Internships from './components/Internships';
import Leadership from './components/Leadership';
import Certificates from './components/Certificates';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

// Helper to check if current URL points to admin
const checkIsAdminRoute = () => {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path.startsWith('/admin') || hash.startsWith('#/admin') || hash.startsWith('#admin');
};

const PortfolioAppContent = () => {
  const { isAuthenticated } = usePortfolioData();
  const [isAdminRoute, setIsAdminRoute] = useState(checkIsAdminRoute);

  const navigateToHome = useCallback(() => {
    window.history.pushState(null, '', '/#home');
    setIsAdminRoute(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToAdmin = useCallback(() => {
    window.history.pushState(null, '', '#/admin');
    setIsAdminRoute(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Synchronize route state on URL change (popstate & hashchange)
  useEffect(() => {
    const handleRouteChange = () => {
      setIsAdminRoute(checkIsAdminRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  // Keyboard shortcut: Ctrl + Shift + A (or Cmd + Shift + A) to toggle Admin
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        if (checkIsAdminRoute()) {
          navigateToHome();
        } else {
          navigateToAdmin();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateToHome, navigateToAdmin]);

  // ── ADMIN VIEW ──
  if (isAdminRoute) {
    if (isAuthenticated) {
      return <AdminDashboard onNavigateHome={navigateToHome} />;
    }
    return (
      <AdminLogin
        onNavigateHome={navigateToHome}
        onLoginSuccess={() => {
          setIsAdminRoute(true);
        }}
      />
    );
  }

  // ── PUBLIC PORTFOLIO VIEW ──
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <ContentCreator />
      <Internships />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
};

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    AOS.refresh();
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <PortfolioDataProvider>
      <ThemeContext.Provider value={{ dark, toggle }}>
        <div
          className={dark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}
          style={{ minHeight: '100vh', transition: 'background-color 0.3s ease, color 0.3s ease' }}
        >
          <PortfolioAppContent />
        </div>
      </ThemeContext.Provider>
    </PortfolioDataProvider>
  );
}

export default App;
