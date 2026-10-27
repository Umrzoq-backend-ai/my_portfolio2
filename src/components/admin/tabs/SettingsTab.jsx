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
  const [footer, setFooter] = useState({ ...footerContent });
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
      passForm.newUsername || 'admin',
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>⚙️</span>
            <span>Tizim Sozlamalari, Zaxira & Eksport</span>
          </h2>
          <p className="text-xs text-white/50">
            portfolioData.js faylini yuklab olish, to'liq JSON zaxira yaratish va admin xavfsizligini boshqarish
          </p>
        </div>
      </div>

      {/* Grid of Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: One-Click Production Code Generator */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#15122b] to-[#0c0c18] border border-purple-500/30 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">💾</span>
            <div>
              <h3 className="text-base font-bold text-white">portfolioData.js Faylini Yuklab Olish</h3>
              <p className="text-xs text-purple-300/80">GitHub va Vercel uchun tayyor kod fayli</p>
            </div>
          </div>
          <p className="text-xs text-white/70 leading-relaxed">
            Admin paneldagi barcha kiritilgan o'zgarishlar (loyihalar, ko'nikmalar, matnlar, chatbot bilimlari) bilan to'ldirilgan haqiqiy <code>portfolioData.js</code> faylini 1 klik bilan yuklab oling. Bu faylni loyihangizdagi <code>src/data/portfolioData.js</code> o'rniga joylashtirib, GitHub ga commit qilsangiz, barcha o'zgarishlar Vercel'da doimiy saqlanib qoladi!
          </p>
          <button
            type="button"
            onClick={generatePortfolioDataJS}
            className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>⬇️</span>
            <span>portfolioData.js faylini yuklab olish</span>
          </button>
        </div>

        {/* Card 2: JSON Backup & Restore */}
        <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📦</span>
            <div>
              <h3 className="text-base font-bold text-white">JSON Zaxira (Backup & Restore)</h3>
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
              className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <span>📥</span>
              <span>JSON Eksport Qilish</span>
            </button>

            <label className="py-2.5 px-4 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-semibold text-xs border border-purple-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer">
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
        <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🔐</span>
            <div>
              <h3 className="text-base font-bold text-white">Admin Kirish Parolini O'zgartirish</h3>
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
              <label className="block text-xs font-medium text-white/70 mb-1">Amaldagi Parol *</label>
              <input
                type="password"
                required
                value={passForm.oldPassword}
                onChange={(e) => setPassForm({ ...passForm, oldPassword: e.target.value })}
                placeholder="Standart: admin123"
                className="w-full px-3.5 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">Yangi Login nomi</label>
                <input
                  type="text"
                  value={passForm.newUsername}
                  onChange={(e) => setPassForm({ ...passForm, newUsername: e.target.value })}
                  placeholder="admin"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">Yangi Parol *</label>
                <input
                  type="password"
                  required
                  value={passForm.newPassword}
                  onChange={(e) => setPassForm({ ...passForm, newPassword: e.target.value })}
                  placeholder="Yangi kuchli parol"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">Yangi Parolni Takrorlang *</label>
              <input
                type="password"
                required
                value={passForm.confirmPassword}
                onChange={(e) => setPassForm({ ...passForm, confirmPassword: e.target.value })}
                placeholder="Takrorlang"
                className="w-full px-3.5 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 text-xs font-semibold border border-purple-500/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🔑</span>
              <span>Parolni Yangilash</span>
            </button>
          </form>
        </div>

        {/* Card 4: EmailJS & Factory Reset */}
        <div className="space-y-6">
          {/* EmailJS form */}
          <form onSubmit={handleSaveEmailAndFooter} className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="text-base font-bold text-white">EmailJS & Footer Sozlamalari</h3>
                <p className="text-xs text-white/50">Bog'lanish shakli uchun API kalitlar</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">EmailJS Service ID</label>
                <input
                  type="text"
                  value={emailConfig.serviceId || ''}
                  onChange={(e) => setEmailConfig({ ...emailConfig, serviceId: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">EmailJS Template ID</label>
                <input
                  type="text"
                  value={emailConfig.templateId || ''}
                  onChange={(e) => setEmailConfig({ ...emailConfig, templateId: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">EmailJS Public Key</label>
                <input
                  type="text"
                  value={emailConfig.publicKey || ''}
                  onChange={(e) => setEmailConfig({ ...emailConfig, publicKey: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">Footer Taglines (Vergul bilan)</label>
                <input
                  type="text"
                  value={taglinesInput}
                  onChange={(e) => setTaglinesInput(e.target.value)}
                  placeholder="Data Science, Python, FastAPI"
                  className="w-full px-3 py-1.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              Saqlash
            </button>
          </form>

          {/* Reset Factory Defaults */}
          <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-3">
            <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider font-mono flex items-center gap-2">
              <span>⚠️</span> Dastlabki Zavod Holatiga Qaytarish
            </h4>
            <p className="text-xs text-white/60">
              Admin panelda kiritilgan barcha o'zgarishlar tozalanadi va sayt boshlang'ich portfolio holatiga qaytadi.
            </p>
            <button
              type="button"
              onClick={() => setIsResetConfirmOpen(true)}
              className="py-2 px-4 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 font-semibold text-xs border border-red-500/30 transition-colors"
            >
              Zavod Holatiga Qaytarish
            </button>
          </div>
        </div>

      </div>

      {/* Reset Confirmation Modal */}
      {isResetConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#101020] border border-red-500/40 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
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
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/70 transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={handleResetConfirm}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-semibold text-white shadow-lg shadow-red-600/30 transition-colors"
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
