import { usePortfolioData } from '../../../context/PortfolioDataContext';

const OverviewTab = ({ setActiveTab, onNavigateHome }) => {
  const {
    personalInfo,
    projects,
    technicalSkills,
    internshipsList,
    chatbotData,
    certificates,
    lastSavedTime,
    generatePortfolioDataJS,
    exportDataJSON,
  } = usePortfolioData();

  const totalTechSkills = technicalSkills?.categories?.reduce(
    (acc, cat) => acc + (cat.skills?.length || 0),
    0
  ) || 0;

  const flagshipCount = projects?.filter((p) => p.isFlagship)?.length || 0;
  const faqCount = chatbotData?.faqs?.length || 0;

  return (
    <div className="space-y-8">
      {/* Top Welcome Banner matching Portfolio Style */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#ff2a2a]/40 via-red-800/20 to-black overflow-hidden shadow-xl">
        <div className="bg-[#121212]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase text-red-400 tracking-wider">
                Tizim Faol · Jonli Portfolio Rejimi
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Assalomu alaykum, <span className="bg-gradient-to-r from-[#ff2a2a] via-red-500 to-rose-400 bg-clip-text text-transparent">{personalInfo?.firstName || 'Umrzoq'}</span>!
            </h2>
            <p className="text-sm text-white/60 max-w-xl">
              Bu yerdan portfolio saytingizdagi barcha ma'lumotlarni — loyihalar, texnologiyalar, ko'nikmalar, FAQ chatbot va aloqa ma'lumotlarini to'liq boshqarishingiz mumkin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>🌐</span>
              <span>Saytni Ko'rish</span>
            </button>
            <button
              onClick={generatePortfolioDataJS}
              className="px-5 py-2.5 rounded-xl bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-black shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>💾</span>
              <span>portfolioData.js Yuklab Olish</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Metric 1 */}
        <div 
          onClick={() => setActiveTab('projects')}
          className="p-5 rounded-2xl bg-[#121212]/80 border border-white/5 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Barcha Loyihalar</span>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-sm font-bold">
              🚀
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">
            {projects?.length || 0}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            {flagshipCount} ta Flagship loyiha
          </div>
        </div>

        {/* Metric 2 */}
        <div 
          onClick={() => setActiveTab('technicalSkills')}
          className="p-5 rounded-2xl bg-[#121212]/80 border border-white/5 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Texnik Ko'nikmalar</span>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-sm font-bold">
              ⚡
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">
            {totalTechSkills}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            {technicalSkills?.categories?.length || 0} ta toifada
          </div>
        </div>

        {/* Metric 3 */}
        <div 
          onClick={() => setActiveTab('chatbot')}
          className="p-5 rounded-2xl bg-[#121212]/80 border border-white/5 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">AI ChatBot FAQ</span>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-sm font-bold">
              🤖
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">
            {faqCount}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            Aqlli javoblar bazasi
          </div>
        </div>

        {/* Metric 4 */}
        <div 
          onClick={() => setActiveTab('experience')}
          className="p-5 rounded-2xl bg-[#121212]/80 border border-white/5 hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider">Tajriba & Ta'lim</span>
            <div className="w-8 h-8 rounded-lg bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-sm font-bold">
              💼
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-red-400 transition-colors">
            {(internshipsList?.length || 0) + (certificates?.featured?.length || 0)}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            Tajribalar va sertifikatlar
          </div>
        </div>
      </div>

      {/* Quick Access Actions */}
      <div className="space-y-4">
        <h3 className="text-base font-black text-white uppercase tracking-tight flex items-center gap-2">
          <span className="text-[#ff2a2a]">⚡</span>
          <span>Tezkor Amallar</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab('projects')}
            className="p-4 rounded-2xl bg-[#121212] border border-white/5 hover:border-red-500/40 text-left transition-all duration-200 group flex items-start gap-4 cursor-pointer hover:shadow-[0_10px_25px_rgba(255,42,42,0.1)]"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              ➕
            </div>
            <div>
              <div className="text-sm font-black text-white group-hover:text-red-400 transition-colors">
                Yangi Loyiha Qo'shish
              </div>
              <div className="text-xs text-white/50 mt-0.5">
                GitHub, jonli demo, texnologiyalar va tavsiflarni kiritish
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('personal')}
            className="p-4 rounded-2xl bg-[#121212] border border-white/5 hover:border-red-500/40 text-left transition-all duration-200 group flex items-start gap-4 cursor-pointer hover:shadow-[0_10px_25px_rgba(255,42,42,0.1)]"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              👤
            </div>
            <div>
              <div className="text-sm font-black text-white group-hover:text-red-400 transition-colors">
                Profil va Hero Tahrirlash
              </div>
              <div className="text-xs text-white/50 mt-0.5">
                Ism, kasb, telefon, email va bosh sahifa sarlavhalari
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('chatbot')}
            className="p-4 rounded-2xl bg-[#121212] border border-white/5 hover:border-red-500/40 text-left transition-all duration-200 group flex items-start gap-4 cursor-pointer hover:shadow-[0_10px_25px_rgba(255,42,42,0.1)]"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-[#ff2a2a] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              💬
            </div>
            <div>
              <div className="text-sm font-black text-white group-hover:text-red-400 transition-colors">
                AI ChatBot FAQ Qo'shish
              </div>
              <div className="text-xs text-white/50 mt-0.5">
                Yangi savol-javoblar va yo'naltiruvchi tugmalarni kiritish
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* System Status and Info Bar */}
      <div className="p-5 rounded-2xl bg-[#111111] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3 text-white/60">
          <span className="bg-red-500/10 px-2.5 py-1 rounded-md text-red-400 border border-red-500/20 font-bold">
            React 19 · Tailwind v4
          </span>
          <span>Oxirgi saqlangan vaqt: <strong className="text-white">{lastSavedTime || 'Hozir'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={exportDataJSON}
            className="text-white/60 hover:text-white underline transition-colors cursor-pointer"
          >
            JSON Zaxira Yuklash
          </button>
          <span className="text-white/20">|</span>
          <span className="text-red-400 font-bold">Barcha o'zgarishlar darhol saytda aks etadi</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
