import React, { useState, useEffect, useRef, useContext } from 'react';
import { technicalSkills as defaultTechSkills } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const SkillProgress = ({ name, level, isVisible, dark }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className={`text-sm font-semibold tracking-wide ${dark ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </span>
      <span className="text-red-500 text-xs font-bold font-mono transition-all duration-700">
        {isVisible ? `${level}%` : '0%'}
      </span>
    </div>
    <div className={`w-full h-1.5 rounded-full overflow-hidden border ${dark ? 'bg-white/5 border-white/5' : 'bg-gray-200 border-gray-200'}`}>
      <div 
        className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const SkillCard = ({ category, index, isVisible, dark }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className={`rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] ${
      dark
        ? 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)]'
        : 'bg-white border border-gray-200 shadow-md shadow-gray-200/50 hover:border-red-400/40 hover:shadow-[0_15px_35px_rgba(255,42,42,0.08)]'
    }`}
  >
    <h3 className={`text-lg font-black tracking-tight mb-6 pb-2 border-b uppercase ${
      dark ? 'text-white border-white/10' : 'text-gray-900 border-gray-200'
    }`}>
      {category.title}
    </h3>
    <div>
      {category.skills.map((skill) => (
        <SkillProgress 
          key={skill.name} 
          name={skill.name} 
          level={skill.level} 
          isVisible={isVisible} 
          dark={dark} 
        />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  const { dark } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const technicalSkills = portfolioData?.technicalSkills || defaultTechSkills;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans transition-colors duration-300 ${
        dark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background visual elements */}
      <div className={`absolute top-1/4 left-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${
        dark ? 'bg-red-600/10' : 'bg-red-500/5'
      }`} />
      <div className={`absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-[120px] pointer-events-none ${
        dark ? 'bg-red-500/10' : 'bg-red-400/5'
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className={`inline-block rounded-full px-5 py-1.5 text-sm font-bold mb-6 shadow-sm border ${
            dark 
              ? 'border-white/20 text-white/60 bg-white/5 backdrop-blur-sm' 
              : 'border-gray-200 text-gray-600 bg-white'
          }`}>
            Technical Stack
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            My Skillset
          </h2>
          <p className={`text-base md:text-lg max-w-xl mx-auto leading-relaxed ${
            dark ? 'text-white/60' : 'text-gray-600'
          }`}>
            A comprehensive overview of my programming languages, frameworks, databases, and engineering concepts.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index} 
              isVisible={isVisible} 
              dark={dark} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
