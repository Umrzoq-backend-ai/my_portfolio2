import { useContext } from 'react';
import { contentCreation as defaultContent, socialLinks as defaultSocials } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const CreatorCard = ({ category, index, dark }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className={`rounded-3xl p-8 transition-all duration-500 group flex flex-col justify-between h-full hover:scale-[1.02] border ${
      dark
        ? 'bg-white/5 backdrop-blur-md border-white/10 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] text-white'
        : 'bg-white border-gray-200 shadow-md shadow-gray-200/50 hover:border-red-400/40 hover:shadow-xl text-gray-900'
    }`}
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className={`text-4xl p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 ${
          dark ? 'bg-white/5 group-hover:bg-[#ff2a2a]/10' : 'bg-gray-100 group-hover:bg-red-50'
        }`}>
          {category.icon}
        </span>
        <span className={`text-xs font-mono font-bold tracking-widest uppercase py-1 px-3 border rounded-full ${
          dark ? 'text-white/40 border-white/10' : 'text-gray-500 border-gray-200 bg-gray-50'
        }`}>
          {category.stats}
        </span>
      </div>
      <h3 className={`text-xl md:text-2xl font-black mb-3 tracking-tight transition-colors ${
        dark ? 'text-white group-hover:text-[#ff2a2a]' : 'text-gray-900 group-hover:text-[#ff2a2a]'
      }`}>
        {category.title}
      </h3>
      <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${
        dark ? 'text-white/60' : 'text-gray-600'
      }`}>
        {category.description}
      </p>
    </div>

    <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono tracking-wider font-bold transition-colors ${
      dark ? 'border-white/5 text-white/50 group-hover:text-white' : 'border-gray-200 text-gray-500 group-hover:text-gray-900'
    }`}>
      <span>Explore Projects</span>
      <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </div>
);

const ContentCreator = () => {
  const { dark } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const contentCreation = portfolioData?.contentCreation || defaultContent;
  const socialLinks = portfolioData?.socialLinks || defaultSocials;

  return (
    <section 
      id="creator" 
      className={`pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans transition-colors duration-300 ${
        dark 
          ? 'bg-[#0a0a0a] text-white bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]' 
          : 'bg-white text-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]'
      }`}
    >
      {/* Visual background lights */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none ${
        dark ? 'bg-red-600/5' : 'bg-red-500/5'
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className={`inline-block border rounded-full px-5 py-1.5 text-sm font-bold mb-6 shadow-sm ${
            dark ? 'border-white/20 text-white/60 bg-white/5 backdrop-blur-sm' : 'border-gray-300 text-gray-600 bg-white'
          }`}>
            {contentCreation.badge}
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            {contentCreation.heading}
          </h2>
          <p className={`text-base md:text-lg max-w-xl font-medium leading-relaxed ${
            dark ? 'text-white/50' : 'text-gray-600'
          }`}>
            {contentCreation.description}
          </p>
        </div>

        {/* Content Creation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <a 
              key={category.title}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <CreatorCard category={category} index={index} dark={dark} />
            </a>
          ))}
        </div>

        {/* GitHub / Community CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff2a2a] text-white font-bold text-base md:text-lg hover:bg-red-600 hover:shadow-[0_0_30px_rgba(255,42,42,0.4)] transition-all duration-500 group shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Explore AI Repositories on GitHub</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ContentCreator;
