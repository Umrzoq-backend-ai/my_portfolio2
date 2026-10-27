import { useState, useEffect, useContext } from 'react';
import { personalInfo as defaultPersonal } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const personalInfo = portfolioData?.personalInfo || defaultPersonal;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hireModal, setHireModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = hireModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [hireModal]);

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hiring Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hello Umrzoq,\n\nMy name is ${form.name}.\nEmail: ${form.email}\n\n${form.message}\n\nBest Regards,\n${form.name}`
    );
    window.open(`mailto:school21dev@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setHireModal(false);
      setForm({ name: '', email: '', message: '' });
    }, 2500);
  };

  const navBg = dark
    ? isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    : isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-transparent';

  const textColor = dark ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white';
  const subTextColor = dark ? 'text-white/70' : isScrolled ? 'text-gray-600' : 'text-white/90';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isOpen ? (dark ? 'bg-[#111]' : 'bg-white') : navBg} py-3.5 sm:py-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">

          {/* Brand Logo */}
          <a href="#" className={`text-xl sm:text-2xl font-black tracking-tight whitespace-nowrap ${textColor}`}>
            {personalInfo.brandName}<span className="text-[#ff2a2a]">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm relative group transition-colors duration-300 ${subTextColor} hover:text-[#ff2a2a]`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Controls: Theme Toggle + AI Chat + Hire Me */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark/light mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
                dark
                  ? 'border-white/20 bg-white/10 text-yellow-300 hover:bg-white/20'
                  : 'border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {dark ? (
                /* Sun icon */
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-7a1 1 0 110 2h-1a1 1 0 110-2h1zM4 12a1 1 0 110 2H3a1 1 0 110-2h1zm14.95-6.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.172 16.828a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.636 5.636a1 1 0 011.414 0l.707.707A1 1 0 016.343 7.757l-.707-.707a1 1 0 010-1.414zM12 6a6 6 0 100 12A6 6 0 0012 6z"/>
                </svg>
              ) : (
                /* Moon icon */
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                </svg>
              )}
            </button>

            {/* AI Chat trigger */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openChatBot'));
              }}
              aria-label="Open AI Assistant"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
                dark
                  ? 'border-white/20 bg-white/10 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a]'
                  : 'border-gray-300 bg-gray-100 text-gray-700 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>

            {/* Hire Me CTA Button */}
            <button
              onClick={() => setHireModal(true)}
              className="px-5 py-2 rounded-full bg-[#ff2a2a] text-white font-bold text-xs sm:text-sm hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300 active:scale-95 shadow-md"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Right Controls: Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                dark ? 'border-white/20 bg-white/10 text-yellow-300' : 'border-gray-300 bg-gray-100 text-gray-700'
              }`}
            >
              {dark ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-7a1 1 0 110 2h-1a1 1 0 110-2h1zM4 12a1 1 0 110 2H3a1 1 0 110-2h1zm14.95-6.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.172 16.828a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.636 5.636a1 1 0 011.414 0l.707.707A1 1 0 016.343 7.757l-.707-.707a1 1 0 010-1.414zM12 6a6 6 0 100 12A6 6 0 0012 6z"/>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${dark ? 'text-white' : 'text-gray-900'}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
            isOpen
              ? `max-h-[380px] py-4 opacity-100 shadow-2xl border-b ${
                  dark ? 'bg-[#111111] border-white/10' : 'bg-white border-gray-200'
                }`
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-base py-2 border-b transition-colors ${
                  dark ? 'text-white border-white/10 hover:text-[#ff2a2a]' : 'text-gray-800 border-gray-100 hover:text-[#ff2a2a]'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-3 pt-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent('openChatBot'));
                }}
                className={`flex-1 py-2.5 rounded-full border font-bold text-xs transition-all ${
                  dark ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                🤖 AI Assistant
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setHireModal(true);
                }}
                className="flex-1 py-2.5 rounded-full bg-[#ff2a2a] text-white font-bold text-xs hover:bg-red-600 transition-all shadow-md"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HIRE ME MODAL ── */}
      {hireModal && (
        <div
          className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setHireModal(false)}
        >
          <div
            className={`w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all ${
              dark ? 'bg-[#141414] border-white/15 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-1">
                  Let's Work Together
                </h3>
                <p className="text-xs sm:text-sm opacity-60">
                  Fill out the form or reach out directly on Telegram
                </p>
              </div>
              <button
                onClick={() => setHireModal(false)}
                className="w-8 h-8 rounded-full border flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>

            {sent ? (
              <div className="py-8 text-center text-green-500 font-bold text-base flex flex-col items-center gap-2">
                <span className="text-3xl">✓</span>
                Message sent successfully!
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="e.g. Alex Smith"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      dark
                        ? 'bg-[#1a1a1a] border-white/10 text-white focus:border-[#ff2a2a]'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff2a2a]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleFormChange}
                    placeholder="example@gmail.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors ${
                      dark
                        ? 'bg-[#1a1a1a] border-white/10 text-white focus:border-[#ff2a2a]'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff2a2a]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={form.message}
                    onChange={handleFormChange}
                    placeholder="Tell me about the role or project..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-colors resize-none ${
                      dark
                        ? 'bg-[#1a1a1a] border-white/10 text-white focus:border-[#ff2a2a]'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ff2a2a]'
                    }`}
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setHireModal(false)}
                    className={`flex-1 py-2.5 rounded-xl font-bold text-xs border ${
                      dark ? 'border-white/20 text-white/70 hover:bg-white/10' : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-[#ff2a2a] text-white hover:bg-red-600 transition-colors shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
