import { useState } from 'react';
import { usePortfolioData } from '../../context/PortfolioDataContext';

const AdminLogin = ({ onNavigateHome, onLoginSuccess }) => {
  const { login } = usePortfolioData();
  const [username, setUsername] = useState('admin');
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
    <div className="min-h-screen bg-[#07070e] text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Background Cyber Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-violet-700/10 rounded-full blur-[180px]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-3">
        <div className="bg-[#0f0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl shadow-purple-950/20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-600/30 p-[1px]">
              <div className="w-full h-full bg-[#0c0c16] rounded-[11px] flex items-center justify-center">
                <span className="font-mono text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                  ⚡
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-white">Admin</span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-mono font-bold text-purple-400">
                CONTROL PANEL
              </span>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 transition-all duration-200"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 w-fit">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-semibold text-purple-300 tracking-wide font-mono">
                Admin Control Center
              </span>
            </div>

            {/* Giant Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15]">
                <span className="text-white block">Boshqaruv</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 bg-clip-text text-transparent block">
                  Markaziga
                </span>
                <span className="text-white block">Xush kelibsiz</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed">
              Platformani to'liq nazorat qiling. Loyihalar, texnik va yumshoq ko'nikmalar, ish tajribasi va AI assistent bilim bazasini real vaqtda boshqaring.
            </p>

            {/* 4 Feature Items */}
            <div className="space-y-3.5 pt-2 max-w-lg">
              {/* Feature 1 */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0f0f1f]/60 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center font-mono text-purple-400 text-sm font-bold flex-shrink-0">
                  &gt;_
                </div>
                <div className="text-sm font-medium text-white/90">
                  Profil va shaxsiy ma'lumotlarni tahrirlash
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0f0f1f]/60 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white/90">
                  Loyihalar, darslar va sertifikatlarni boshqarish
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0f0f1f]/60 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white/90">
                  Ko'nikmalar darajasi va statistikalarni boshqarish
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0f0f1f]/60 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm font-medium text-white/90">
                  AI ChatBot bilim bazasi va tizim zaxiralari
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admin Login Card */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-transparent shadow-[0_20px_60px_rgba(112,26,242,0.15)]">
              <div className="bg-[#0c0c18]/95 backdrop-blur-2xl rounded-3xl p-7 sm:p-9 border border-white/10 space-y-6">
                
                {/* Header of Form */}
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black tracking-tight text-white">
                    Admin <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Kirish</span>
                  </h2>
                  <p className="text-xs text-white/50">
                    Boshqaruv paneliga kirish
                  </p>

                  {/* 3 Cyber Badges */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-purple-300 border border-white/5">
                      <span>&gt;_</span> CLI
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-purple-300 border border-white/5">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      API
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 text-purple-300 border border-white/5">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <label className="block text-xs font-medium text-white/70">
                      Foydalanuvchi nomi
                    </label>
                    <div className="relative rounded-xl bg-[#121224] border border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
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
                        placeholder="admin"
                        className="w-full pl-10 pr-4 py-3 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-white/70">
                      Parol
                    </label>
                    <div className="relative rounded-xl bg-[#121224] border border-white/10 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
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
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-3 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white/80 transition-colors"
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
                    className="w-full mt-2 py-3.5 px-5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Admin Panelga kirish</span>
                        <span className="text-base">→</span>
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
                  <div className="text-[11px] font-mono text-purple-400/60 bg-purple-950/20 py-1.5 px-3 rounded-lg border border-purple-500/10">
                    Standart hisob: <span className="text-purple-300 font-bold">admin</span> / <span className="text-purple-300 font-bold">admin123</span>
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
