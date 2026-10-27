import { useContext } from 'react';
import { softSkillsList as defaultSoftSkills } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const SoftSkillCard = ({ skill, index, dark }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className={`rounded-3xl p-6 hover:scale-[1.03] transition-all duration-500 group flex flex-col items-center text-center justify-between min-h-[220px] ${
      dark
        ? 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#ff2a2a]/40 hover:shadow-[0_20px_45px_rgba(255,42,42,0.15)]'
        : 'bg-white border border-gray-200 shadow-md shadow-gray-200/50 hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-xl'
    }`}
  >
    <div className="flex flex-col items-center">
      <div className={`text-4xl mb-4 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 ${
        dark ? 'bg-white/10 group-hover:bg-[#ff2a2a]/20' : 'bg-gray-100 group-hover:bg-[#ff2a2a]/10'
      }`}>
        {skill.icon}
      </div>
      <h3 className={`text-lg font-black tracking-tight mb-2 uppercase ${
        dark ? 'text-white' : 'text-gray-900'
      }`}>
        {skill.name}
      </h3>
      <p className={`text-sm font-medium leading-relaxed ${
        dark ? 'text-white/60' : 'text-gray-600'
      }`}>
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  const { dark } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const softSkillsList = portfolioData?.softSkillsList || defaultSoftSkills;

  return (
    <section className={`pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans transition-colors duration-300 ${
      dark 
        ? 'bg-[#0a0a0a] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]'
        : 'bg-gray-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]'
    }`}>
      
      {/* Top paper divider (torn SVG transition from red Certificates section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className={`inline-block border rounded-full px-5 py-1.5 text-sm font-bold mb-6 shadow-sm ${
            dark ? 'border-white/20 text-white/70 bg-white/5' : 'border-gray-300 text-gray-600 bg-white'
          }`}>
            Core Competencies
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Soft Skills
          </h2>
          <p className={`text-base md:text-lg max-w-lg mx-auto leading-relaxed ${
            dark ? 'text-white/60' : 'text-gray-600'
          }`}>
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard 
              key={skill.name} 
              skill={skill} 
              index={index} 
              dark={dark} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
