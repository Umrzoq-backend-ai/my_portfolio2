import React, { useContext } from 'react';
import { leadershipList } from '../data/portfolioData';
import { ThemeContext } from '../App';

const LeadershipItem = ({ item, index, dark }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 w-full group">
      {/* Timeline line dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff2a2a] rounded-full border-4 border-black z-30 shadow-[0_0_15px_#ff2a2a] group-hover:scale-125 transition-transform duration-300" />

      {/* Card Content Side */}
      <div 
        data-aos={isEven ? "fade-right" : "fade-left"}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'
        }`}
      >
        <div className={`rounded-2xl p-6 transition-all duration-500 hover:scale-[1.01] border ${
          dark 
            ? 'bg-white/5 backdrop-blur-md border-white/10 hover:border-red-500/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.1)] text-white' 
            : 'bg-white border-gray-200 shadow-md shadow-gray-200/50 hover:border-red-400/40 hover:shadow-xl text-gray-900'
        }`}>
          <div className={`flex flex-wrap gap-2 items-center mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className={`text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border ${
              dark
                ? 'bg-[#ff2a2a]/20 text-[#ff2a2a] border-[#ff2a2a]/30'
                : 'bg-red-50 text-[#ff2a2a] border-red-200 shadow-sm'
            }`}>
              {item.badge}
            </span>
          </div>
          
          <h3 className={`text-xl font-black mb-1 tracking-tight transition-colors ${
            dark ? 'text-white group-hover:text-[#ff2a2a]' : 'text-gray-900 group-hover:text-[#ff2a2a]'
          }`}>
            {item.title}
          </h3>
          <p className="text-[#ff2a2a] text-xs font-bold font-mono tracking-wider uppercase mb-4">
            {item.role}
          </p>
          <p className={`text-sm leading-relaxed font-medium ${
            dark ? 'text-white/60' : 'text-gray-600'
          }`}>
            {item.description}
          </p>
        </div>
      </div>

      {/* Spacing spacer for desktop */}
      <div className="hidden md:block w-[45%] order-2" />
    </div>
  );
};

const Leadership = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <section 
      className={`pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans transition-colors duration-300 ${
        dark 
          ? 'bg-[#0a0a0a] text-white bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]' 
          : 'bg-gray-50 text-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]'
      }`}
    >
      {/* Torn paper divider at top — transition from red Internships */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className={`inline-block border rounded-full px-5 py-1.5 text-sm font-bold mb-6 shadow-sm ${
            dark ? 'border-white/20 text-white/60 bg-white/5 backdrop-blur-sm' : 'border-gray-300 text-gray-600 bg-white'
          }`}>
            Activities
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            Leadership & Engagement
          </h2>
          <p className={`text-base md:text-lg max-w-lg mx-auto leading-relaxed ${
            dark ? 'text-white/50' : 'text-gray-600'
          }`}>
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-transparent" />

          {/* Timeline Items */}
          <div className="w-full">
            {leadershipList.map((item, index) => (
              <LeadershipItem 
                key={item.title} 
                item={item} 
                index={index} 
                dark={dark} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
