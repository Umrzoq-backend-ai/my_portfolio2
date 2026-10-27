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
      {/* Top Welcome Banner */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/30 via-indigo-500/20 to-pink-500/20 overflow-hidden">
        <div className="bg-[#0f0f20]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase text-emerald-400 tracking-wider">
                Tizim Faol · Jonli Rejim
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Assalomu alaykum, <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">{personalInfo?.firstName || 'Umrzoq'}</span>!
            </h2>
            <p className="text-sm text-white/60 max-w-xl">
              Bu yerdan portfolio saytingizdagi barcha ma'lumotlarni — loyihalar, texnologiyalar, ko'nikmalar, FAQ chatbot va aloqa ma'lumotlarini to'liq boshqarishingiz mumkin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-all flex items-center gap-2"
            >
              <span>🌐</span>
              <span>Saytni Ko'rish</span>
            </button>
            <button
              onClick={generatePortfolioDataJS}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
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
          className="p-5 rounded-2xl bg-[#0f0f20]/70 border border-white/5 hover:border-purple-500/40 cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-medium">Barcha Loyihalar</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm font-bold">
              🚀
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
            {projects?.length || 0}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            {flagshipCount} ta Flagship loyiha
          </div>
        </div>

        {/* Metric 2 */}
        <div 
          onClick={() => setActiveTab('technicalSkills')}
          className="p-5 rounded-2xl bg-[#0f0f20]/70 border border-white/5 hover:border-purple-500/40 cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-medium">Texnik Ko'nikmalar</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-sm font-bold">
              ⚡
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-indigo-300 transition-colors">
            {totalTechSkills}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            {technicalSkills?.categories?.length || 0} ta toifada
          </div>
        </div>

        {/* Metric 3 */}
        <div 
          onClick={() => setActiveTab('chatbot')}
          className="p-5 rounded-2xl bg-[#0f0f20]/70 border border-white/5 hover:border-purple-500/40 cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-medium">AI ChatBot FAQ</span>
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center text-sm font-bold">
              🤖
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-pink-300 transition-colors">
            {faqCount}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            Aqlli javoblar bazasi
          </div>
        </div>

        {/* Metric 4 */}
        <div 
          onClick={() => setActiveTab('experience')}
          className="p-5 rounded-2xl bg-[#0f0f20]/70 border border-white/5 hover:border-purple-500/40 cursor-pointer transition-all duration-300 group hover:-translate-y-1"
        >
          <div className="flex items-center justify-between text-white/50 mb-3">
            <span className="text-xs font-medium">Tajriba & Ta'lim</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-sm font-bold">
              💼
            </div>
          </div>
          <div className="text-3xl font-black text-white group-hover:text-emerald-300 transition-colors">
            {(internshipsList?.length || 0) + (certificates?.featured?.length || 0)}
          </div>
          <div className="text-[11px] text-white/40 mt-1">
            Tajribalar va sertifikatlar
          </div>
        </div>
      </div>

      {/* Quick Access Actions */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>⚡</span>
          <span>Tezkor Amallar</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveTab('projects')}
            className="p-4 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-purple-500/30 text-left transition-all duration-200 group flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              ➕
            </div>
            <div>
              <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                Yangi Loyiha Qo'shish
              </div>
              <div className="text-xs text-white/50 mt-0.5">
                GitHub, jonli demo, texnologiyalar va tavsiflarni kiritish
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('personal')}
            className="p-4 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-purple-500/30 text-left transition-all duration-200 group flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              👤
            </div>
            <div>
              <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                Profil va Hero Tahrirlash
              </div>
              <div className="text-xs text-white/50 mt-0.5">
                Ism, kasb, telefon, email va bosh sahifa sarlavhalari
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('chatbot')}
            className="p-4 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-purple-500/30 text-left transition-all duration-200 group flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              💬
            </div>
            <div>
              <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">
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
      <div className="p-5 rounded-2xl bg-[#0a0a14] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-white/60">
          <span className="font-mono bg-white/5 px-2.5 py-1 rounded-md text-purple-300 border border-white/5">
            React 19 + Tailwind v4
          </span>
          <span>Oxirgi saqlangan vaqt: <strong className="text-white">{lastSavedTime || 'Hozir'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={exportDataJSON}
            className="text-white/60 hover:text-white underline transition-colors"
          >
            JSON Zaxira Yuklash
          </button>
          <span className="text-white/20">|</span>
          <span className="text-emerald-400 font-medium">Barcha o'zgarishlar darhol saytda aks etadi</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
