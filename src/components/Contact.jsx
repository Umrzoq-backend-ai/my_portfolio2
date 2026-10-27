import React, { useRef, useState, useContext } from 'react';
import { emailjsConfig as defaultEmailjs, personalInfo as defaultPersonal, socialLinks as defaultSocials } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const Contact = () => {
  const { dark } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const emailjsConfig = portfolioData?.emailjsConfig || defaultEmailjs;
  const personalInfo = portfolioData?.personalInfo || defaultPersonal;
  const socialLinks = portfolioData?.socialLinks || defaultSocials;
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // Validate inputs
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // Check if EmailJS is configured
    const isConfigured = 
      emailjsConfig.serviceId && 
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId && 
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey && 
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // EmailJS fallback to prefilled mailto
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    // EmailJS integration
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section 
      id="contact" 
      className={`w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center pt-24 pb-28 px-6 md:px-12 border-t transition-colors duration-300 ${
        dark ? 'bg-[#0a0a0a] text-white border-white/10' : 'bg-gray-100 text-gray-900 border-gray-200'
      }`}
    >
      {/* Background watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none select-none z-0"
      >
        <span 
          className="text-[14vw] font-black uppercase tracking-tighter text-transparent select-none"
          style={{ 
            WebkitTextStroke: dark ? '1.5px rgba(255, 255, 255, 0.04)' : '1.5px rgba(0, 0, 0, 0.04)',
            fontFamily: "'Impact', 'Arial Black', sans-serif" 
          }}
        >
          CONTACT
        </span>
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <div className={`inline-block border rounded-full px-5 py-1.5 text-sm font-bold mb-4 shadow-sm ${
            dark ? 'border-white/20 text-white/70 bg-white/5 backdrop-blur-sm' : 'border-gray-300 text-gray-600 bg-white'
          }`}>
            Get In Touch
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight uppercase mb-4 ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Build Something Great
          </h2>
          <p className={`text-base md:text-lg max-w-xl mx-auto leading-relaxed ${
            dark ? 'text-white/60' : 'text-gray-600'
          }`}>
            Have a project in mind, looking to collaborate, or want to discuss machine learning and backend opportunities? Drop a message!
          </p>
        </div>

        {/* Form Card */}
        <div 
          data-aos="fade-up"
          data-aos-delay="150"
          className="bg-gradient-to-br from-[#ff2a2a] to-[#d61e1e] rounded-3xl p-8 md:p-14 text-white shadow-[0_25px_60px_rgba(255,42,42,0.25)] border border-red-400/20"
        >
          {/* Card Top Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-white/20">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80 block mb-1">
                Direct Communication
              </span>
              <p className="text-white text-base font-bold">
                Email: <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-black transition-colors">{personalInfo.emails.primary}</a>
              </p>
            </div>

            {/* Telegram Quick Link */}
            <a 
              href={socialLinks.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-wider bg-black/25 hover:bg-white hover:text-[#ff2a2a] border border-white/30 px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.012 9.482c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.514 14.43l-2.948-.924c-.64-.203-.653-.64.136-.949l11.51-4.435c.534-.194 1.001.13.35.126z"/>
              </svg>
              Chat on Telegram
            </a>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              
              {/* Left Column: Inputs */}
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-2 font-bold">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="first_name"
                    placeholder="Enter your first name" 
                    required
                    className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/30 focus:border-white rounded-xl px-4 py-3.5 text-base focus:outline-none transition-all placeholder-white/50 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-2 font-bold">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="last_name"
                    placeholder="Enter your last name" 
                    className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/30 focus:border-white rounded-xl px-4 py-3.5 text-base focus:outline-none transition-all placeholder-white/50 font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-2 font-bold">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    placeholder="name@example.com" 
                    required
                    className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/30 focus:border-white rounded-xl px-4 py-3.5 text-base focus:outline-none transition-all placeholder-white/50 font-medium"
                  />
                </div>
              </div>

              {/* Right Column: Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-2 font-bold">
                  Your Message *
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell me about your project, idea, or opportunity..." 
                  required
                  rows={6}
                  className="w-full flex-1 min-h-[160px] bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/30 focus:border-white rounded-xl p-4 text-base focus:outline-none transition-all placeholder-white/50 font-medium resize-none"
                ></textarea>
              </div>

            </div>

            {/* Bottom Actions Row */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-white/20">
              <p className="text-xs text-white/80 font-medium max-w-sm text-center sm:text-left">
                Typically respond within 24 hours. Messages reach my primary inbox directly.
              </p>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full sm:w-auto px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
                  status === 'sending' 
                    ? 'opacity-60 cursor-not-allowed bg-black/40 text-white' 
                    : status === 'success'
                    ? 'bg-green-600 text-white shadow-[0_0_20px_rgba(22,163,74,0.5)]'
                    : status === 'error'
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-zinc-100 hover:scale-105 hover:shadow-2xl'
                }`}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center gap-2">
                    Sent Successfully ✓
                  </span>
                ) : status === 'error' ? (
                  <span className="flex items-center gap-2">
                    Failed — Try Again
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
