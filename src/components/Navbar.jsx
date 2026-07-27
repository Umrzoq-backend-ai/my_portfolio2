import React, { useState, useEffect, useContext } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hireModal, setHireModal] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = hireModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [hireModal]);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // mailto fallback — opens default email client
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
    ? isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    : isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur-sm';

  const textColor = dark ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white';
  const subTextColor = dark ? 'text-white/70' : isScrolled ? 'text-gray-600' : 'text-white/80';

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isOpen ? (dark ? 'bg-[#111]' : 'bg-white') : navBg} py-4`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className={`text-2xl font-black tracking-tight whitespace-nowrap ${textColor}`}>
            {personalInfo.brandName}<span className="text-[#ff2a2a]">.</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-medium relative group transition-colors duration-300 ${subTextColor} hover:${dark ? 'text-white' : 'text-gray-900'}`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: dark toggle + AI icon + Hire Me */}
          <div className="hidden md:flex items-center gap-3">

            {/* Dark / Light toggle */}
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

            {/* AI Chat icon */}
            <button
              onClick={() => {
                // ChatBot floating button trigger — dispatch custom event
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

            {/* Hire Me button */}
            <button
              onClick={() => setHireModal(true)}
              className="px-6 py-2.5 rounded-full bg-[#ff2a2a] text-white font-semibold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
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
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${textColor}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen
            ? `max-h-96 py-4 opacity-100 shadow-2xl ${dark ? 'bg-[#111]' : 'bg-white'}`
            : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg border-b pb-2 transition-colors ${
                  dark ? 'text-white border-white/20 hover:text-[#ff2a2a]' : 'text-gray-800 border-gray-200 hover:text-[#ff2a2a]'
                }`}
              >
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-2 pb-4">
              <button
                onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('openChatBot')); }}
                className={`flex-1 py-2.5 rounded-full border font-semibold text-sm transition-all ${
                  dark ? 'border-white/30 text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                🤖 AI Chat
              </button>
              <button
                onClick={() => { setIsOpen(false); setHireModal(true); }}
                className="flex-1 py-2.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm hover:bg-red-600 transition-all"
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
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setHireModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transition-all ${
              dark ? 'bg-[#111] border border-white/10' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Modal header */}
            <div className="bg-[#ff2a2a] px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl font-black">Hire Me 🚀</h2>
                <p className="text-white/80 text-sm mt-0.5">Let's work together!</p>
              </div>
              <button
                onClick={() => setHireModal(false)}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-6">
              {sent ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <p className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    Email client ochildi!
                  </p>
                  <p className={`text-sm mt-1 ${dark ? 'text-white/60' : 'text-gray-500'}`}>
                    Xabaringizni yuboring — tez orada javob beraman.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                      Ismingiz / Your Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      required
                      placeholder="John Smith"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:border-[#ff2a2a] ${
                        dark
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/30'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleFormChange}
                      required
                      placeholder="you@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:border-[#ff2a2a] ${
                        dark
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/30'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-1.5 ${dark ? 'text-white/80' : 'text-gray-700'}`}>
                      Xabar / Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      placeholder="Loyiha haqida, ish taklifi yoki boshqa..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:border-[#ff2a2a] resize-none ${
                        dark
                          ? 'bg-white/5 border-white/10 text-white placeholder-white/30'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>

                  {/* Quick contact links */}
                  <div className={`flex gap-3 pt-1 pb-1 border-t ${dark ? 'border-white/10' : 'border-gray-100'}`}>
                    <a
                      href="https://t.me/umrzoq_21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#ff2a2a] hover:underline"
                    >
                      📱 Telegram
                    </a>
                    <a
                      href="https://linkedin.com/in/umrzoqyulchiyevcode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#ff2a2a] hover:underline"
                    >
                      💼 LinkedIn
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#ff2a2a] text-white font-bold text-sm hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
                  >
                    📨 Xabar yuborish / Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
