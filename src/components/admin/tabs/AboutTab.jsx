import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const AboutTab = ({ onShowToast }) => {
  const {
    aboutContent,
    skillsContent,
    updateAboutContent,
    updateSkillsContent,
  } = usePortfolioData();

  const [about, setAbout] = useState({ ...aboutContent });
  const [techStackInput, setTechStackInput] = useState(
    aboutContent?.techStack ? aboutContent.techStack.join(', ') : ''
  );
  const [process, setProcess] = useState({ ...skillsContent });

  const handleCardChange = (index, field, value) => {
    const updatedCards = [...(process.cards || [])];
    updatedCards[index] = { ...updatedCards[index], [field]: value };
    setProcess({ ...process, cards: updatedCards });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const stackArray = techStackInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    updateAboutContent({ ...about, techStack: stackArray });
    updateSkillsContent(process);
    if (onShowToast) onShowToast('Haqimda va Ish Jarayoni bo‘limi muvaffaqiyatli saqlandi!');
  };

  return (
    <form onSubmit={handleSave} className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#ff2a2a]">📝</span>
            <span>Haqimda (About) & Ish Jarayoni (My Process)</span>
          </h2>
          <p className="text-xs text-white/50">
            Biografiya, asosiy texnologiya teglari va 4 bosqichli ish jarayoni kartochkalari
          </p>
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-black shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>💾</span>
          <span>O'zgarishlarni Saqlash</span>
        </button>
      </div>

      {/* About Section */}
      <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-4">
        <h3 className="text-xs font-black text-[#ff2a2a] uppercase tracking-wider font-mono flex items-center gap-2">
          <span>ℹ️</span> "Haqimda" Bo'limi
        </h3>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">Sarlavha (Heading)</label>
          <input
            type="text"
            value={about.heading || ''}
            onChange={(e) => setAbout({ ...about, heading: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">
            Biografiya matni (HTML format qo'llab-quvvatlanadi)
          </label>
          <textarea
            rows={5}
            value={about.bio || ''}
            onChange={(e) => setAbout({ ...about, bio: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-[#ff2a2a] leading-relaxed"
          />
          <span className="text-[11px] text-white/40 block mt-1">
            Masalan: Ismingizni qora yoki rangli ajratish uchun &lt;span class="text-black font-black"&gt;Umrzoq&lt;/span&gt; ishlatishingiz mumkin.
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">
            Asosiy Texnologiyalar (Vergul bilan ajrating)
          </label>
          <input
            type="text"
            value={techStackInput}
            onChange={(e) => setTechStackInput(e.target.value)}
            placeholder="Python, FastAPI, Machine Learning"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
          />
        </div>
      </div>

      {/* Process Section */}
      <div className="p-6 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-5">
        <h3 className="text-xs font-black text-[#ff2a2a] uppercase tracking-wider font-mono flex items-center gap-2">
          <span>🔄</span> "My Process" (Ish Jarayoni)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">Nishon (Badge)</label>
            <input
              type="text"
              value={process.badge || ''}
              onChange={(e) => setProcess({ ...process, badge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">Yakuniy Matn (End Text)</label>
            <input
              type="text"
              value={process.endText || ''}
              onChange={(e) => setProcess({ ...process, endText: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">Asosiy Sarlavha (Heading)</label>
          <input
            type="text"
            value={process.heading || ''}
            onChange={(e) => setProcess({ ...process, heading: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1.5">Qisqacha Tavsif (Description)</label>
          <textarea
            rows={2}
            value={process.description || ''}
            onChange={(e) => setProcess({ ...process, description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
          />
        </div>

        {/* 4 Process Cards */}
        <div className="space-y-4 pt-2">
          <label className="block text-xs font-semibold text-white/80">4 Bosqich Kartochkalari</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {process.cards?.map((card, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#181818] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-[#ff2a2a]">Bosqich #{idx + 1}</span>
                  <input
                    type="text"
                    value={card.number || ''}
                    onChange={(e) => handleCardChange(idx, 'number', e.target.value)}
                    placeholder="01"
                    className="w-14 px-2 py-1 text-center rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-white font-bold"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={card.title || ''}
                    onChange={(e) => handleCardChange(idx, 'title', e.target.value)}
                    placeholder="Bosqich nomi"
                    className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white font-bold"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    value={card.text || ''}
                    onChange={(e) => handleCardChange(idx, 'text', e.target.value)}
                    placeholder="Bosqich tavsifi"
                    className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white/80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </form>
  );
};

export default AboutTab;
