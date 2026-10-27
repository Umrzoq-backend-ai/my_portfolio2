import { useContext } from 'react';
import { personalInfo as defaultPersonal, socialLinks as defaultSocials, footerContent as defaultFooter } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const { dark } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const personalInfo = portfolioData?.personalInfo || defaultPersonal;
  const socialLinks = portfolioData?.socialLinks || defaultSocials;
  const footerContent = portfolioData?.footerContent || defaultFooter;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t relative overflow-hidden font-sans transition-colors duration-300 ${
      dark ? 'bg-[#0c0c0c] text-white border-white/10' : 'bg-white text-gray-900 border-gray-200'
    }`}>
      {/* Background decorative watermark */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]"
      >
        <span className={`text-[20vw] font-black uppercase tracking-tighter ${dark ? 'text-white' : 'text-black'}`}>
          UMRZOQ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pb-16 relative z-10">
        
        {/* Top Section: Brand + Call to Action Banner */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center pb-12 mb-12 border-b gap-8 ${
          dark ? 'border-white/10' : 'border-gray-200'
        }`}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className={`text-3xl md:text-4xl font-black tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
                {personalInfo.brandName}<span className="text-[#ff2a2a]">.</span>
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-emerald-600 dark:text-green-400 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
            </div>
            <p className={`text-sm md:text-base font-medium max-w-md ${dark ? 'text-white/60' : 'text-gray-600'}`}>
              {personalInfo.title} · Building scalable AI and backend solutions with Python.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry`}
              className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white font-semibold text-sm hover:bg-red-600 hover:shadow-[0_0_25px_rgba(255,42,42,0.4)] transition-all duration-300 shadow-md"
            >
              Get In Touch
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 group ${
                dark 
                  ? 'border-white/20 bg-white/5 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10' 
                  : 'border-gray-300 bg-gray-100 text-gray-700 hover:text-black hover:border-gray-400 hover:bg-gray-200'
              }`}
            >
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Middle Grid: 4 Balanced Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Column 1: About & Education */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 font-mono text-[#ff2a2a]">
              Education & Focus
            </h3>
            <p className={`text-sm font-semibold mb-2 ${dark ? 'text-white/80' : 'text-gray-800'}`}>
              {footerContent.credential}
            </p>
            <p className={`text-xs leading-relaxed mb-4 ${dark ? 'text-white/50' : 'text-gray-600'}`}>
              Studying data science, algorithms, machine learning models, and modern backend architectures.
            </p>
            <div className={`text-xs font-mono ${dark ? 'text-white/40' : 'text-gray-500'}`}>
              📍 {personalInfo.location}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 font-mono text-[#ff2a2a]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-200 flex items-center gap-2 group ${
                      dark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      dark ? 'bg-white/20 group-hover:bg-[#ff2a2a]' : 'bg-gray-300 group-hover:bg-[#ff2a2a]'
                    }`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 font-mono text-[#ff2a2a]">
              Contact Directly
            </h3>
            <div className="space-y-3 text-sm font-medium">
              <div>
                <span className={`text-xs block font-mono ${dark ? 'text-white/40' : 'text-gray-500'}`}>Email:</span>
                <a 
                  href={`mailto:${personalInfo.emails.primary}`}
                  className={`hover:text-[#ff2a2a] transition-colors break-all ${dark ? 'text-white/80' : 'text-gray-700'}`}
                >
                  {personalInfo.emails.primary}
                </a>
              </div>
              <div>
                <span className={`text-xs block font-mono ${dark ? 'text-white/40' : 'text-gray-500'}`}>Telegram:</span>
                <a 
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-[#ff2a2a] transition-colors ${dark ? 'text-white/80' : 'text-gray-700'}`}
                >
                  @umrzoq_21
                </a>
              </div>
              <div>
                <span className={`text-xs block font-mono ${dark ? 'text-white/40' : 'text-gray-500'}`}>Phone:</span>
                <span className={dark ? 'text-white/70' : 'text-gray-700'}>
                  {personalInfo.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Connect */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4 font-mono text-[#ff2a2a]">
              Social Profiles
            </h3>
            <p className={`text-xs leading-relaxed mb-4 ${dark ? 'text-white/50' : 'text-gray-600'}`}>
              Explore my open-source code and professional networks:
            </p>
            <div className="flex flex-col gap-2.5">
              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border text-xs font-semibold transition-all group ${
                  dark
                    ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800'
                }`}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>umrzoq-backend-ai</span>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border text-xs font-semibold transition-all group ${
                  dark
                    ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800'
                }`}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              {/* Telegram */}
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border text-xs font-semibold transition-all group ${
                  dark
                    ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/80 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-800'
                }`}
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.012 9.482c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.514 14.43l-2.948-.924c-.64-.203-.653-.64.136-.949l11.51-4.435c.534-.194 1.001.13.35.126z" />
                </svg>
                <span>Telegram DM</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Tech Credit */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono pr-0 md:pr-20 ${
          dark ? 'border-white/10 text-white/50' : 'border-gray-200 text-gray-500'
        }`}>
          <p>
            {footerContent.copyright}
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>Built with React 19 & TailwindCSS</span>
            <a 
              href="#/admin"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all ${
                dark ? 'bg-white/5 border-white/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40' : 'bg-gray-100 border-gray-300 text-purple-700 hover:bg-purple-100'
              }`}
            >
              <span>⚡</span>
              <span>Admin Panel</span>
            </a>
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline underline-offset-4 transition-colors ${
                dark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              GitHub Repo
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
