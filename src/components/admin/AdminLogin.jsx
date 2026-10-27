import { useState } from 'react';
import { usePortfolioData } from '../../context/PortfolioDataContext';

const AdminLogin = ({ onNavigateHome, onLoginSuccess }) => {
  const { login, personalInfo } = usePortfolioData();
  const [username, setUsername] = useState('zoltanma');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const res = login(username, password);
      setIsLoading(false);
      if (res.success) {
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setErrorMsg(res.message || 'Foydalanuvchi nomi yoki parol xato!');
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-[#ff2a2a] selection:text-white">
      {/* Background Ambient Red Cyber Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2a2a]/15 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-red-900/15 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-[#ff2a2a]/10 rounded-full blur-[200px]" />
        {/* Subtle grid pattern matching portfolio */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ff2a2a 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-3">
        <div className="bg-[#101010]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl shadow-black/80">
          {/* Logo & Brand matching Portfolio */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff2a2a] via-red-600 to-rose-500 flex items-center justify-center shadow-lg shadow-red-600/30 p-[1px]">
              <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-lg font-black text-white">
                  ⚡
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-black tracking-tight text-white uppercase">
                  {personalInfo?.firstName || 'Umrzoq'}<span className="text-[#ff2a2a]">.</span>
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-[#ff2a2a]">
                ADMIN CONTROL CENTER
              </span>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 transition-all duration-200 cursor-pointer"
            >
              <span>←</span>
              <span>Bosh sahifa</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Login Screen Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Admin Control Center Showcase */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-7">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
              <span className="text-xs font-bold text-red-300 tracking-wider uppercase font-mono">
                Admin Control Center
              </span>
            </div>

            {/* Giant Heading matching Portfolio typography */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12]">
                <span className="text-white block">Boshqaruv</span>
                <span className="bg-gradient-to-r from-[#ff2a2a] via-red-500 to-rose-400 bg-clip-text text-transparent block">
                  Markaziga
                </span>
                <span className="text-white block">Xush kelibsiz</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed">
              Portfolio platformangizni to'liq nazorat qiling. Loyihalar, texnik va yumshoq ko'nikmalar, tajriba, sertifikatlar hamda AI assistent bilimlar bazasini real vaqtda boshqaring.
            </p>

            {/* 4 Feature Items */}
            <div className="space-y-3.5 pt-2 max-w-lg">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center font-mono text-[#ff2a2a] text-sm font-black flex-shrink-0">
                  &gt;_
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Profil va Shaxsiy Ma'lumotlar
                  </div>
                  <div className="text-xs text-white/50">
                    Hero sarlavhalari, kontaktlar va ijtimoiy tarmoqlar
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ff2a2a] text-base flex-shrink-0">
                  🚀
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Loyihalar Boshqaruvi (Full CRUD)
                  </div>
                  <div className="text-xs text-white/50">
                    Tahlilchi AI, INTRA GROUP, Telegram AI Tutor va b.
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ff2a2a] text-base flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Ko'nikmalar va Tajriba
                  </div>
                  <div className="text-xs text-white/50">
                    6 toifadagi texnik bilimlar foizi va School 21 tajribasi
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111111]/80 border border-white/5 hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[#ff2a2a] text-base flex-shrink-0">
                  🤖
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    AI ChatBot FAQ & Zaxira
                  </div>
                  <div className="text-xs text-white/50">
                    Aqlli javoblar bazasi va portfolioData.js generatori
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admin Login Card matching Portfolio Mockup style */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#ff2a2a]/50 via-red-900/20 to-black shadow-[0_20px_60px_rgba(255,42,42,0.15)]">
              <div className="bg-[#0e0e0e]/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 space-y-6">
                
                {/* Window Header with Mac dots */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                    <span className="text-[11px] text-white/50 ml-2">portfolio-admin.auth</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#ff2a2a] bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                    Secure Session
                  </span>
                </div>

                <div className="p-6 sm:p-8 pt-2 space-y-6">
                  {/* Header of Form */}
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-black tracking-tight text-white uppercase">
                      Admin <span className="text-[#ff2a2a]">Kirish</span>
                    </h2>
                    <p className="text-xs text-white/50">
                      Boshqaruv paneliga kirish
                    </p>

                    {/* 3 Cyber Badges */}
                    <div className="flex items-center justify-center gap-2 pt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-red-300 border border-white/5">
                        <span>&gt;_</span> CLI
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-red-300 border border-white/5">
                        <svg className="w-3 h-3 text-[#ff2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        API
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-red-300 border border-white/5">
                        <svg className="w-3 h-3 text-[#ff2a2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zm0 5c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3" />
                        </svg>
                        DB
                      </span>
                    </div>
                  </div>

                  {/* Error Banner */}
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2.5 animate-shake">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-white/70">
                        Foydalanuvchi nomi
                      </label>
                      <div className="relative rounded-xl bg-[#141414] border border-white/10 focus-within:border-[#ff2a2a] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="zoltanma"
                          className="w-full pl-10 pr-4 py-3 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-white/70">
                        Parol
                      </label>
                      <div className="relative rounded-xl bg-[#141414] border border-white/10 focus-within:border-[#ff2a2a] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full pl-10 pr-10 py-3 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
                        >
                          {showPassword ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-2 py-3.5 px-5 rounded-xl font-black text-sm text-white bg-[#ff2a2a] hover:bg-red-600 shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Admin Panelga kirish</span>
                          <span className="text-base font-bold">→</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Secure Badge & Hint */}
                  <div className="pt-2 text-center space-y-2 border-t border-white/5">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-white/50">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Xavfsiz kirish</span>
                    </div>
                    <div className="text-[11px] font-mono text-red-400/80 bg-red-950/20 py-1.5 px-3 rounded-lg border border-red-500/20">
                      Login: <span className="text-white font-bold">zoltanma</span> | Parol: <span className="text-white font-bold">pdp.university</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-xs text-white/40 border-t border-white/5">
        <span>© {new Date().getFullYear()} Umrzoq Yulchiyev Portfolio · Admin System</span>
      </footer>
    </div>
  );
};

export default AdminLogin;
