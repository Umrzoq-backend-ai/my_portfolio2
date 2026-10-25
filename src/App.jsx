import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

export const ThemeContext = React.createContext({ dark: true, toggle: () => {} });

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
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div
        className={dark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}
        style={{ minHeight: '100vh', transition: 'background-color 0.3s ease, color 0.3s ease' }}
      >
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
