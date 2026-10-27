import React, { useState, useContext } from 'react';
import { projects as defaultProjects, socialLinks as defaultSocials } from '../data/portfolioData';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { ThemeContext } from '../App';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.95-1.28 4.92-2.13 5.92-2.54 2.82-1.17 3.4-1.38 3.79-1.38.08 0 .28.02.4.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

// High-Tech Mockup Card Window Header
const WindowHeader = ({ url, hasLiveDemo, isTelegram, dark }) => (
  <div className={`flex items-center justify-between px-4 py-3 border-b text-xs font-mono select-none ${
    dark ? 'bg-black/40 border-white/10 text-white/40' : 'bg-gray-100 border-gray-200 text-gray-500'
  }`}>
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
      </div>
      <span className="hidden sm:inline-block text-[11px] ml-2 truncate max-w-[200px] md:max-w-xs opacity-75">
        {url ? url.replace('https://', '') : 'github.com/Umrzoq-backend-ai'}
      </span>
    </div>
    
    <div className="flex items-center gap-2">
      {isTelegram && (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#229ED9]/15 text-[#0284c7] dark:text-[#38bdf8] border border-[#229ED9]/30">
          TELEGRAM APP
        </span>
      )}
      {hasLiveDemo ? (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-emerald-600 dark:text-green-400 border border-green-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          LIVE DEMO
        </span>
      ) : (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
          dark ? 'bg-white/5 text-white/50 border-white/10' : 'bg-gray-200 text-gray-600 border-gray-300'
        }`}>
          SOURCE CODE
        </span>
      )}
    </div>
  </div>
);

// Flagship Featured Card (Tahlilchi AI, Intra Group, Telegram AI Tutor, Portfolio)
const FlagshipCard = ({ project, aosDelay, dark }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`relative rounded-3xl p-[1px] transition-all duration-500 group mb-8 ${
        dark
          ? 'bg-gradient-to-br from-[#ff2a2a]/60 via-purple-600/30 to-[#ff2a2a]/40 hover:from-[#ff2a2a] hover:via-purple-500/50 hover:to-[#ff2a2a] shadow-[0_20px_50px_rgba(255,42,42,0.15)] hover:shadow-[0_25px_60px_rgba(255,42,42,0.3)]'
          : 'bg-gradient-to-br from-[#ff2a2a]/30 via-red-200 to-gray-200 shadow-xl shadow-gray-200/60 hover:shadow-2xl'
      }`}
    >
      <div className={`rounded-3xl overflow-hidden h-full flex flex-col justify-between transition-colors ${
        dark ? 'bg-[#0e0e0e]/95 backdrop-blur-xl text-white' : 'bg-white text-gray-900 border border-gray-200'
      }`}>
        {/* Top Window Bar */}
        <WindowHeader 
          url={project.links.demo || project.links.telegramBot || project.links.github} 
          hasLiveDemo={Boolean(project.links.demo)} 
          isTelegram={Boolean(project.links.telegramBot)}
          dark={dark}
        />

        {/* Ambient Gradient Header Banner */}
        <div className={`p-6 sm:p-8 md:p-10 border-b relative overflow-hidden ${
          dark
            ? `${project.accent || 'from-red-600/20 to-black'} bg-gradient-to-br border-white/10`
            : 'bg-gradient-to-br from-red-50/80 via-white to-gray-50 border-gray-200'
        }`}>
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none ${
            dark ? 'bg-red-600/10' : 'bg-red-500/5'
          }`} />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border ${
                dark
                  ? 'bg-[#ff2a2a]/20 text-red-300 border-[#ff2a2a]/40'
                  : 'bg-red-50 text-[#ff2a2a] border-red-200 shadow-sm'
              }`}>
                {project.badge}
              </span>
              {project.role && (
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                  dark ? 'bg-white/10 text-white/80 border-white/15' : 'bg-gray-100 text-gray-700 border-gray-200'
                }`}>
                  <span className="text-[#ff2a2a] font-bold">Role:</span> {project.role}
                </span>
              )}
              {project.stats && (
                <span className={`text-xs font-mono font-medium hidden sm:inline ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                  • {project.stats}
                </span>
              )}
            </div>
            <span className={`text-4xl md:text-5xl font-black font-serif italic ${dark ? 'text-white/15' : 'text-gray-200'}`}>
              {project.number}
            </span>
          </div>

          <h3 className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 transition-colors ${
            dark ? 'text-white group-hover:text-red-100' : 'text-gray-900 group-hover:text-[#ff2a2a]'
          }`}>
            {project.title}
          </h3>
          
          {project.subtitle && (
            <p className="text-[#ff2a2a] font-mono text-xs md:text-sm font-bold tracking-wide">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Main Body */}
        <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between">
          <div>
            {/* HR & Recruiter Scope Spotlight */}
            {project.hrHighlights && (
              <div className={`mb-6 p-4 rounded-2xl border flex items-start gap-3 shadow-inner ${
                dark
                  ? 'bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/20 border-blue-500/30 text-white/90'
                  : 'bg-blue-50/80 border-blue-200 text-blue-950'
              }`}>
                <span className="text-xl shrink-0 mt-0.5">💼</span>
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wider text-[11px] block mb-1">
                    HR & Recruiter Scope (Key Technical Summary):
                  </span>
                  <span className="leading-relaxed font-medium">
                    {project.hrHighlights}
                  </span>
                </div>
              </div>
            )}

            <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium ${
              dark ? 'text-white/70' : 'text-gray-600'
            }`}>
              {project.description}
            </p>

            {/* Key Features Checklist */}
            {project.features && project.features.length > 0 && (
              <div className={`mb-6 rounded-2xl p-4 sm:p-5 border ${
                dark ? 'bg-white/[0.03] border-white/10' : 'bg-gray-50 border-gray-200'
              }`}>
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider mb-3 text-[#ff2a2a] flex items-center gap-2">
                  <span>⚡</span> Key Features & Architecture
                </h4>
                <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium ${
                  dark ? 'text-white/80' : 'text-gray-700'
                }`}>
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-full border transition-all cursor-default ${
                    dark
                      ? 'bg-white/5 border-white/10 text-white/80 hover:border-red-500/40 hover:text-red-200'
                      : 'bg-gray-100 border-gray-200 text-gray-700 hover:border-red-400 hover:text-[#ff2a2a]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons: Live Demo, Telegram Bot, GitHub, Backend API */}
          <div className={`flex flex-wrap items-center gap-3 pt-5 border-t ${
            dark ? 'border-white/10' : 'border-gray-200'
          }`}>
            {/* Live Demo */}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(255,42,42,0.4)] group/demo"
              >
                <ExternalLinkIcon />
                <span>Open Live Demo</span>
                <span className="w-2 h-2 rounded-full bg-white animate-ping ml-1" />
              </a>
            )}

            {/* Telegram Bot Link */}
            {project.links.telegramBot && (
              <a
                href={project.links.telegramBot}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full border font-bold text-sm transition-all duration-300 transform hover:scale-105 group/tg ${
                  dark
                    ? 'bg-[#229ED9]/20 hover:bg-[#229ED9] text-[#38bdf8] hover:text-white border-[#229ED9]/50 shadow-[0_0_20px_rgba(34,158,217,0.25)]'
                    : 'bg-[#229ED9] hover:bg-[#1b82b3] text-white border-transparent shadow-md'
                }`}
              >
                <TelegramIcon />
                <span>Bot: {project.links.botUsername || '@bot'}</span>
                <span className="text-[10px] font-mono uppercase bg-white/20 text-white px-2 py-0.5 rounded-full">
                  Telegram
                </span>
              </a>
            )}

            {/* GitHub Source Code */}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border font-semibold text-sm transition-all duration-300 ${
                  dark
                    ? 'bg-white/10 hover:bg-white hover:text-black border-white/20 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300 shadow-sm'
                }`}
              >
                <GitHubIcon />
                <span>GitHub Code</span>
              </a>
            )}

            {/* Backend API */}
            {project.links.backendApi && (
              <a
                href={project.links.backendApi}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-full border font-mono text-xs transition-all duration-300 ${
                  dark
                    ? 'bg-white/5 hover:bg-white/15 border-white/10 text-white/70 hover:text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
                }`}
              >
                <ExternalLinkIcon />
                <span>Backend API</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Standard Project Card
const StandardCard = ({ project, aosDelay, dark }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-2xl p-[1px] transition-all duration-500 group flex flex-col justify-between h-full ${
      dark
        ? 'bg-white/10 hover:bg-gradient-to-br hover:from-red-500/40 hover:to-white/20 shadow-lg'
        : 'bg-gray-200 hover:bg-gradient-to-br hover:from-red-400/40 hover:to-gray-300 shadow-md shadow-gray-200/50'
    }`}
  >
    <div className={`rounded-2xl overflow-hidden h-full flex flex-col justify-between transition-colors ${
      dark ? 'bg-[#111111]/90 backdrop-blur-md text-white' : 'bg-white text-gray-900 border border-gray-200'
    }`}>
      {/* Top Window Bar */}
      <WindowHeader 
        url={project.links.demo || project.links.telegramBot || project.links.github} 
        hasLiveDemo={Boolean(project.links.demo)} 
        isTelegram={Boolean(project.links.telegramBot)}
        dark={dark}
      />

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Badge & Number */}
          <div className="flex items-center justify-between mb-3">
            <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
              dark
                ? 'text-red-400 bg-red-500/10 border-red-500/20'
                : 'text-[#ff2a2a] bg-red-50 border-red-200 shadow-sm'
            }`}>
              {project.badge}
            </span>
            <span className={`text-3xl font-black font-serif italic ${dark ? 'text-white/15' : 'text-gray-200'}`}>
              {project.number}
            </span>
          </div>

          <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-1 transition-colors ${
            dark ? 'text-white group-hover:text-red-300' : 'text-gray-900 group-hover:text-[#ff2a2a]'
          }`}>
            {project.title}
          </h3>

          {project.subtitle && (
            <p className={`font-mono text-xs mb-3 ${dark ? 'text-white/40' : 'text-gray-500'}`}>
              {project.subtitle}
            </p>
          )}

          <p className={`text-sm leading-relaxed mb-6 font-medium ${
            dark ? 'text-white/60' : 'text-gray-600'
          }`}>
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techTags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-0.5 text-xs font-mono font-medium rounded-full border ${
                  dark ? 'text-white/70 bg-white/5 border-white/10' : 'text-gray-700 bg-gray-100 border-gray-200'
                }`}
              >
                {tag}
              </span>
            ))}
            {project.techTags.length > 4 && (
              <span className={`px-2 py-0.5 text-[10px] font-mono ${dark ? 'text-white/40' : 'text-gray-400'}`}>
                +{project.techTags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className={`flex flex-wrap items-center gap-2.5 pt-4 border-t ${
          dark ? 'border-white/10' : 'border-gray-200'
        }`}>
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-bold text-xs transition-all shadow-[0_0_15px_rgba(255,42,42,0.3)]"
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </a>
          ) : project.links.telegramBot ? (
            <a
              href={project.links.telegramBot}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all border ${
                dark
                  ? 'bg-[#229ED9]/20 hover:bg-[#229ED9] text-[#38bdf8] hover:text-white border-[#229ED9]/40'
                  : 'bg-[#229ED9] text-white hover:bg-sky-600 border-transparent shadow-sm'
              }`}
            >
              <TelegramIcon />
              <span>{project.links.botUsername || 'Telegram Bot'}</span>
            </a>
          ) : (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border ${
              dark ? 'bg-white/5 text-white/30 border-white/10' : 'bg-gray-100 text-gray-400 border-gray-200'
            }`}>
              Source Code Only
            </span>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all ${
                dark
                  ? 'bg-white/5 hover:bg-white hover:text-black border-white/15 text-white/80'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'
              }`}
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const filterTabs = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Web & Mini Apps' },
  { id: 'tools', label: 'CLI & Tools' },
];

const Projects = () => {
  const { dark } = useContext(ThemeContext);
  const portfolioData = usePortfolioData();
  const projects = portfolioData?.projects || defaultProjects;
  const socialLinks = portfolioData?.socialLinks || defaultSocials;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const flagshipProjects = filteredProjects.filter((p) => p.isFlagship);
  const otherProjects = filteredProjects.filter((p) => !p.isFlagship);

  return (
    <section 
      id="projects" 
      className={`pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans transition-colors duration-300 ${
        dark 
          ? 'bg-[#0a0a0a] text-white bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]'
          : 'bg-gray-100/70 text-gray-900 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:80px_80px]'
      }`}
    >
      {/* Background ambient lighting */}
      <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        dark ? 'bg-red-600/10' : 'bg-red-500/5'
      }`} />
      <div className={`absolute bottom-1/3 -right-32 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        dark ? 'bg-purple-600/10' : 'bg-purple-500/5'
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <div className={`inline-block border rounded-full px-5 py-1.5 text-sm font-bold mb-6 shadow-sm ${
            dark ? 'border-white/20 text-white/60 bg-white/5 backdrop-blur-sm' : 'border-gray-300 text-gray-600 bg-white'
          }`}>
            Featured Projects & Live Apps
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight ${
            dark ? 'text-white' : 'text-gray-900'
          }`}>
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className={`text-base md:text-lg max-w-xl font-medium leading-relaxed ${
            dark ? 'text-white/60' : 'text-gray-600'
          }`}>
            Multimodal AI platforms, real-time audio broadcasting, Telegram Mini Apps, and production-grade machine learning solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                  : dark
                    ? 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10 hover:text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 shadow-sm hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Flagship Projects Spotlight (Large Cards) */}
        {flagshipProjects.length > 0 && (
          <div className="mb-8">
            {flagshipProjects.map((project, index) => (
              <FlagshipCard 
                key={project.id} 
                project={project} 
                aosDelay={String((index + 1) * 100)} 
                dark={dark}
              />
            ))}
          </div>
        )}

        {/* Other Projects Grid (2-Column Responsive Layout) */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {otherProjects.map((project, index) => (
              <StandardCard 
                key={project.id} 
                project={project} 
                aosDelay={String((index + 1) * 100)} 
                dark={dark}
              />
            ))}
          </div>
        )}

        {/* GitHub Repositories Link CTA */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-12 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-8 py-4 rounded-full border font-bold text-base transition-all duration-500 group shadow-md ${
              dark
                ? 'border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-xl'
            }`}
          >
            <GitHubIcon />
            <span>Explore All Repositories on GitHub</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
