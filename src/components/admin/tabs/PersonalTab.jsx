import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const PersonalTab = ({ onShowToast }) => {
  const {
    personalInfo,
    socialLinks,
    heroContent,
    updatePersonalInfo,
    updateSocialLinks,
    updateHeroContent,
  } = usePortfolioData();

  const [personal, setPersonal] = useState({ ...personalInfo });
  const [socials, setSocials] = useState({ ...socialLinks });
  const [hero, setHero] = useState({ ...heroContent });

  const handleSave = (e) => {
    e.preventDefault();
    updatePersonalInfo(personal);
    updateSocialLinks(socials);
    updateHeroContent(hero);
    if (onShowToast) onShowToast('Shaxsiy ma\'lumotlar muvaffaqiyatli saqlandi!');
  };

  return (
    <form onSubmit={handleSave} className="space-y-8">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>👤</span>
            <span>Shaxsiy Ma'lumotlar & Hero Bo'limi</span>
          </h2>
          <p className="text-xs text-white/50">
            Ism-familiya, mutaxassislik, kontaktlar, ijtimoiy tarmoqlar va bosh sahifa matnlarini tahrirlash
          </p>
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>💾</span>
          <span>O'zgarishlarni Saqlash</span>
        </button>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Section 1: Asosiy Ma'lumotlar */}
        <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
          <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider font-mono flex items-center gap-2">
            <span>📝</span> Asosiy Shaxsiy Ma'lumotlar
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">To'liq Ism (Full Name)</label>
              <input
                type="text"
                value={personal.name || ''}
                onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Qisqa Ism (First Name)</label>
              <input
                type="text"
                value={personal.firstName || ''}
                onChange={(e) => setPersonal({ ...personal, firstName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1.5">Brend Nomi (Brand / Logo Text)</label>
            <input
              type="text"
              value={personal.brandName || ''}
              onChange={(e) => setPersonal({ ...personal, brandName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1.5">Kasb / Mutaxassislik (Title)</label>
            <input
              type="text"
              value={personal.title || ''}
              onChange={(e) => setPersonal({ ...personal, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Manzil (Location)</label>
              <input
                type="text"
                value={personal.location || ''}
                onChange={(e) => setPersonal({ ...personal, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Telefon raqam</label>
              <input
                type="text"
                value={personal.phone || ''}
                onChange={(e) => setPersonal({ ...personal, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Asosiy Email</label>
              <input
                type="email"
                value={personal.emails?.primary || ''}
                onChange={(e) =>
                  setPersonal({
                    ...personal,
                    emails: { ...personal.emails, primary: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Rezyume URL / Fayl yo'li</label>
              <input
                type="text"
                value={personal.resumeUrl || ''}
                onChange={(e) => setPersonal({ ...personal, resumeUrl: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1.5">Qisqacha Tavsif (Bio Summary)</label>
            <textarea
              rows={3}
              value={personal.summary || ''}
              onChange={(e) => setPersonal({ ...personal, summary: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Section 2: Ijtimoiy Tarmoqlar */}
        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider font-mono flex items-center gap-2">
              <span>🌐</span> Ijtimoiy Tarmoq Havolalari
            </h3>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">GitHub Profil URL</label>
              <input
                type="url"
                value={socials.github || ''}
                onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">LinkedIn Profil URL</label>
              <input
                type="url"
                value={socials.linkedin || ''}
                onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Telegram Havola</label>
              <input
                type="url"
                value={socials.telegram || ''}
                onChange={(e) => setSocials({ ...socials, telegram: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {/* Section 3: Hero Bo'limi Sozlamalari */}
          <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-pink-400 uppercase tracking-wider font-mono flex items-center gap-2">
              <span>🎬</span> Hero (Bosh Sahifa) Matnlari
            </h3>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Salomlashish (Greeting)</label>
              <input
                type="text"
                value={hero.greeting || ''}
                onChange={(e) => setHero({ ...hero, greeting: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Ajralib turuvchi sarlavha (Title Highlight)</label>
              <input
                type="text"
                value={hero.titleHighlight || ''}
                onChange={(e) => setHero({ ...hero, titleHighlight: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/70 mb-1.5">Hero Quyi Tavsifi (Subtitle)</label>
              <textarea
                rows={2}
                value={hero.subtitle || ''}
                onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">Asosiy CTA Tugma Matni</label>
                <input
                  type="text"
                  value={hero.ctaPrimary?.text || ''}
                  onChange={(e) =>
                    setHero({
                      ...hero,
                      ctaPrimary: { ...hero.ctaPrimary, text: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">Ikkinchi CTA Tugma Matni</label>
                <input
                  type="text"
                  value={hero.ctaSecondary?.text || ''}
                  onChange={(e) =>
                    setHero({
                      ...hero,
                      ctaSecondary: { ...hero.ctaSecondary, text: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#131326] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </form>
  );
};

export default PersonalTab;
