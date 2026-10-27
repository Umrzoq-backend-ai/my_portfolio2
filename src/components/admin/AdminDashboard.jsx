import { useState } from 'react';
import { usePortfolioData } from '../../context/PortfolioDataContext';
import OverviewTab from './tabs/OverviewTab';
import PersonalTab from './tabs/PersonalTab';
import AboutTab from './tabs/AboutTab';
import ProjectsTab from './tabs/ProjectsTab';
import TechnicalSkillsTab from './tabs/TechnicalSkillsTab';
import SoftSkillsTab from './tabs/SoftSkillsTab';
import ExperienceTab from './tabs/ExperienceTab';
import CertificatesTab from './tabs/CertificatesTab';
import ChatbotTab from './tabs/ChatbotTab';
import SettingsTab from './tabs/SettingsTab';

const NAV_ITEMS = [
  { id: 'overview', label: 'Boshqaruv Paneli', icon: '📊' },
  { id: 'personal', label: 'Shaxsiy & Hero', icon: '👤' },
  { id: 'about', label: 'Haqimda & Jarayon', icon: '📝' },
  { id: 'projects', label: 'Loyihalar (Projects)', icon: '🚀' },
  { id: 'technicalSkills', label: 'Texnik Ko\'nikmalar', icon: '⚡' },
  { id: 'softSkills', label: 'Yumshoq Ko\'nikmalar', icon: '🌟' },
  { id: 'experience', label: 'Tajriba & Liderlik', icon: '💼' },
  { id: 'education', label: 'Sertifikatlar & Ta\'lim', icon: '🎓' },
  { id: 'chatbot', label: 'AI ChatBot FAQ', icon: '🤖' },
  { id: 'settings', label: 'Zaxira & Sozlamalar', icon: '⚙️' },
];

const AdminDashboard = ({ onNavigateHome }) => {
  const { logout, personalInfo, generatePortfolioDataJS } = usePortfolioData();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-[#ff2a2a] selection:text-white">
      {/* Background ambient red glow matching Portfolio */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#ff2a2a]/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[160px]" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-3 shadow-lg shadow-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Mobile menu toggle + Brand matching Portfolio */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70"
            >
              ☰
            </button>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff2a2a] via-red-600 to-rose-500 flex items-center justify-center shadow-md shadow-red-600/30 p-[1px]">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono text-base font-black text-white">
                    ⚡
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-black tracking-tight text-white uppercase">
                    {personalInfo?.firstName || 'Umrzoq'}<span className="text-[#ff2a2a]">.</span>
                  </span>
                  <span className="hidden sm:inline-block text-[9px] tracking-wider uppercase font-mono font-bold text-[#ff2a2a] bg-red-500/10 border border-red-500/30 px-1.5 py-0.5 rounded">
                    CONTROL PANEL
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-white/50 font-mono">
                    Admin: <strong className="text-white/80">zoltanma</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={generatePortfolioDataJS}
              title="portfolioData.js faylini yuklab olish"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 border border-red-500/30 text-xs font-bold transition-all shadow-sm hover:shadow-[0_0_15px_rgba(255,42,42,0.3)]"
            >
              <span>⬇️</span>
              <span>portfolioData.js</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3.5 py-1.5 transition-all cursor-pointer"
            >
              <span>🌐</span>
              <span className="hidden sm:inline">Saytni Ko'rish</span>
            </button>

            <button
              onClick={logout}
              title="Chiqish"
              className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl px-3.5 py-1.5 transition-colors cursor-pointer"
            >
              <span>🚪</span>
              <span className="hidden sm:inline">Chiqish</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Layout (Sidebar + Content) */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Navigation */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 lg:w-60 bg-[#0e0e0e] lg:bg-transparent p-4 lg:p-0 flex flex-col gap-1 border-r lg:border-r-0 border-white/10 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="lg:hidden flex items-center justify-between pb-3 mb-2 border-b border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Bo'limlar Menyu
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white/60 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600/25 via-red-600/15 to-transparent text-white border-l-2 border-[#ff2a2a] shadow-lg shadow-red-950/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Info Widget in Sidebar */}
          <div className="mt-auto pt-6">
            <div className="p-3.5 rounded-2xl bg-[#111111] border border-white/5 text-[11px] text-white/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#ff2a2a] font-bold font-mono">
                <span>🛡️</span>
                <span>Portfolio Control</span>
              </div>
              <div>Barcha o'zgarishlar darhol saytda real vaqtda yangilanadi.</div>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-20 bg-black/70 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Tab Content Container */}
        <main className="flex-1 min-w-0">
          <div className="bg-[#101010]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-8 shadow-2xl">
            {activeTab === 'overview' && (
              <OverviewTab setActiveTab={setActiveTab} onNavigateHome={onNavigateHome} />
            )}
            {activeTab === 'personal' && <PersonalTab onShowToast={showToast} />}
            {activeTab === 'about' && <AboutTab onShowToast={showToast} />}
            {activeTab === 'projects' && <ProjectsTab onShowToast={showToast} />}
            {activeTab === 'technicalSkills' && (
              <TechnicalSkillsTab onShowToast={showToast} />
            )}
            {activeTab === 'softSkills' && <SoftSkillsTab onShowToast={showToast} />}
            {activeTab === 'experience' && <ExperienceTab onShowToast={showToast} />}
            {activeTab === 'education' && <CertificatesTab onShowToast={showToast} />}
            {activeTab === 'chatbot' && <ChatbotTab onShowToast={showToast} />}
            {activeTab === 'settings' && <SettingsTab onShowToast={showToast} />}
          </div>
        </main>

      </div>

      {/* Floating Success Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#141414] text-white font-bold text-xs shadow-2xl shadow-red-950/60 backdrop-blur-md border border-[#ff2a2a]/60 animate-bounce">
          <span className="text-base text-[#ff2a2a]">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
