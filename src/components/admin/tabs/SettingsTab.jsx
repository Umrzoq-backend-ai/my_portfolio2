import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const SettingsTab = ({ onShowToast }) => {
  const {
    emailjsConfig,
    footerContent,
    updateEmailjsConfig,
    updateFooterContent,
    generatePortfolioDataJS,
    exportDataJSON,
    importDataJSON,
    resetToDefaults,
    changeCredentials,
  } = usePortfolioData();

  const [emailConfig, setEmailConfig] = useState({ ...emailjsConfig });
  const footer = footerContent || {};
  const [taglinesInput, setTaglinesInput] = useState(
    footerContent?.taglines ? footerContent.taglines.join(', ') : ''
  );

  // Password state
  const [passForm, setPassForm] = useState({
    oldPassword: '',
    newUsername: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passMsg, setPassMsg] = useState({ text: '', isError: false });

  // Reset modal state
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  // File import state
  const handleFileImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const res = importDataJSON(event.target?.result);
      if (res.success) {
        if (onShowToast) onShowToast(res.message);
      } else {
        alert(res.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleSaveEmailAndFooter = (e) => {
    e.preventDefault();
    updateEmailjsConfig(emailConfig);
    updateFooterContent({
      ...footer,
      taglines: taglinesInput.split(',').map((s) => s.trim()).filter(Boolean),
    });
    if (onShowToast) onShowToast('EmailJS va Footer sozlamalari saqlandi!');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassMsg({ text: '', isError: false });

    if (passForm.newPassword !== passForm.confirmPassword) {
      setPassMsg({ text: 'Yangi parollar bir-biriga mos kelmadi!', isError: true });
      return;
    }

    const res = changeCredentials(
      passForm.oldPassword,
      passForm.newUsername || 'zoltanma',
      passForm.newPassword
    );

    if (res.success) {
      setPassMsg({ text: res.message, isError: false });
      setPassForm({ oldPassword: '', newUsername: '', newPassword: '', confirmPassword: '' });
      if (onShowToast) onShowToast('Admin paroli muvaffaqiyatli o‘zgartirildi!');
    } else {
      setPassMsg({ text: res.message, isError: true });
    }
  };

  const handleResetConfirm = () => {
    resetToDefaults();
    setIsResetConfirmOpen(false);
    if (onShowToast) onShowToast('Barcha ma\'lumotlar zavod holatiga qaytarildi!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#ff2a2a]">⚙️</span>
            <span>Tizim Sozlamalari, Zaxira & Eksport</span>
          </h2>
          <p className="text-xs text-white/50">
            portfolioData.js faylini yuklab olish, to'liq JSON zaxira yaratish va admin xavfsizligini boshqarish
          </p>
        </div>
      </div>

      {/* Grid of Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: One-Click Production Code Generator matching Portfolio style */}
        <div className="p-6 rounded-2xl bg-[#121212]/95 border border-red-500/30 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl text-[#ff2a2a]">💾</span>
            <div>
              <h3 className="text-base font-black text-white">portfolioData.js Faylini Yuklab Olish</h3>
              <p className="text-xs text-red-300 font-mono">GitHub va Vercel uchun doimiy kod fayli</p>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Admin paneldagi barcha kiritilgan o'zgarishlar bilan to'ldirilgan haqiqiy <code>portfolioData.js</code> faylini 1 klik bilan yuklab oling. Bu faylni loyihangizdagi <code>src/data/portfolioData.js</code> o'rniga joylashtirib, GitHub ga commit qilsangiz, barcha o'zgarishlar Vercel'da doimiy saqlanib qoladi!
          </p>
          <button
            type="button"
            onClick={generatePortfolioDataJS}
            className="w-full py-3.5 px-5 rounded-xl bg-[#ff2a2a] hover:bg-red-600 text-white font-black text-xs shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⬇️</span>
            <span>portfolioData.js faylini yuklab olish</span>
          </button>
        </div>

        {/* Card 2: JSON Backup & Restore */}
        <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📦</span>
            <div>
              <h3 className="text-base font-black text-white">JSON Zaxira (Backup & Restore)</h3>
              <p className="text-xs text-white/50">Ma'lumotlarni saqlash yoki boshqa qurilmaga ko'chirish</p>
            </div>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Barcha ma'lumotlaringizni to'liq JSON formatida eksport qilib kompyuteringizga saqlab qo'yishingiz yoki avval saqlangan faylni qayta yuklashingiz mumkin.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={exportDataJSON}
              className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>📥</span>
              <span>JSON Eksport Qilish</span>
            </button>

            <label className="py-2.5 px-4 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 font-bold text-xs border border-red-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>📤</span>
              <span>JSON Import Qilish</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Card 3: Change Admin Credentials */}
        <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl text-[#ff2a2a]">🔐</span>
            <div>
              <h3 className="text-base font-black text-white">Admin Kirish Parolini O'zgartirish</h3>
              <p className="text-xs text-white/50">Admin panelga kirish xavfsizligini ta'minlash</p>
            </div>
          </div>

          {passMsg.text && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                passMsg.isError
                  ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                  : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
              }`}
            >
              <span>{passMsg.isError ? '⚠️' : '✅'}</span>
              <span>{passMsg.text}</span>
            </div>
          )}

          <form onSubmit={handleChangePassword} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1">Amaldagi Parol *</label>
              <input
                type="password"
                required
                value={passForm.oldPassword}
                onChange={(e) => setPassForm({ ...passForm, oldPassword: e.target.value })}
                placeholder="Amaldagi parolni kiriting"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">Yangi Login nomi</label>
                <input
                  type="text"
                  value={passForm.newUsername}
                  onChange={(e) => setPassForm({ ...passForm, newUsername: e.target.value })}
                  placeholder="Yangi login kiriting"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">Yangi Parol *</label>
                <input
                  type="password"
                  required
                  value={passForm.newPassword}
                  onChange={(e) => setPassForm({ ...passForm, newPassword: e.target.value })}
                  placeholder="Yangi kuchli parol"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 mb-1">Yangi Parolni Takrorlang *</label>
              <input
                type="password"
                required
                value={passForm.confirmPassword}
                onChange={(e) => setPassForm({ ...passForm, confirmPassword: e.target.value })}
                placeholder="Takrorlang"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-red-600/20 hover:bg-red-600/40 text-red-200 text-xs font-bold border border-red-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🔑</span>
              <span>Parolni Yangilash</span>
            </button>
          </form>
        </div>

        {/* Card 4: EmailJS & Factory Reset */}
        <div className="space-y-6">
          {/* EmailJS form */}
          <form onSubmit={handleSaveEmailAndFooter} className="p-6 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="text-base font-black text-white">EmailJS & Footer Sozlamalari</h3>
                <p className="text-xs text-white/50">Bog'lanish shakli uchun API kalitlar</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">EmailJS Service ID</label>
                <input
                  type="text"
                  value={emailConfig.serviceId || ''}
                  onChange={(e) => setEmailConfig({ ...emailConfig, serviceId: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-[#ff2a2a]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">EmailJS Template ID</label>
                <input
                  type="text"
                  value={emailConfig.templateId || ''}
                  onChange={(e) => setEmailConfig({ ...emailConfig, templateId: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-[#ff2a2a]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">EmailJS Public Key</label>
                <input
                  type="text"
                  value={emailConfig.publicKey || ''}
                  onChange={(e) => setEmailConfig({ ...emailConfig, publicKey: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-[#ff2a2a]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">Footer Taglines (Vergul bilan)</label>
                <input
                  type="text"
                  value={taglinesInput}
                  onChange={(e) => setTaglinesInput(e.target.value)}
                  placeholder="Data Science, Python, FastAPI"
                  className="w-full px-3 py-1.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors cursor-pointer"
            >
              Saqlash
            </button>
          </form>

          {/* Reset Factory Defaults */}
          <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-3">
            <h4 className="text-xs font-black text-red-400 uppercase tracking-wider font-mono flex items-center gap-2">
              <span>⚠️</span> Dastlabki Zavod Holatiga Qaytarish
            </h4>
            <p className="text-xs text-white/60">
              Admin panelda kiritilgan barcha o'zgarishlar tozalanadi va sayt boshlang'ich portfolio holatiga qaytadi.
            </p>
            <button
              type="button"
              onClick={() => setIsResetConfirmOpen(true)}
              className="py-2 px-4 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 font-bold text-xs border border-red-500/30 transition-colors cursor-pointer"
            >
              Zavod Holatiga Qaytarish
            </button>
          </div>
        </div>

      </div>

      {/* Reset Confirmation Modal */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#121212] border border-red-500/40 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-red-400">⚠️</span> Qayta tiklashni tasdiqlaysizmi?
            </h3>
            <p className="text-xs text-white/60">
              Ushbu amal barcha o'zgarishlarni o'chirib, boshlang'ich dastlabki holatga qaytaradi.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsResetConfirmOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/70 transition-colors cursor-pointer"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={handleResetConfirm}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white shadow-lg shadow-red-600/30 transition-colors cursor-pointer"
              >
                Ha, qaytarilsin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsTab;
