import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

export const ThemeContext = React.createContext({ dark: true, toggle: () => {} });

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? 'bg-[#0a0a0a]' : 'bg-white'} style={{ minHeight: '100vh', transition: 'background 0.3s' }}>
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
  )
}

export default App
