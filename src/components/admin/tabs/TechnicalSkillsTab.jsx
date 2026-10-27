import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const TechnicalSkillsTab = ({ onShowToast }) => {
  const { technicalSkills, updateTechnicalSkills } = usePortfolioData();
  const [categories, setCategories] = useState(
    JSON.parse(JSON.stringify(technicalSkills?.categories || []))
  );
  const [newCategoryTitle, setNewCategoryTitle] = useState('');

  const handleSkillChange = (catIdx, skillIdx, field, value) => {
    const updated = [...categories];
    updated[catIdx].skills[skillIdx][field] = field === 'level' ? Number(value) : value;
    setCategories(updated);
  };

  const handleAddSkill = (catIdx) => {
    const updated = [...categories];
    updated[catIdx].skills.push({ name: 'Yangi Ko‘nikma', level: 80 });
    setCategories(updated);
  };

  const handleDeleteSkill = (catIdx, skillIdx) => {
    const updated = [...categories];
    updated[catIdx].skills = updated[catIdx].skills.filter((_, i) => i !== skillIdx);
    setCategories(updated);
  };

  const handleCategoryTitleChange = (catIdx, title) => {
    const updated = [...categories];
    updated[catIdx].title = title;
    setCategories(updated);
  };

  const handleDeleteCategory = (catIdx) => {
    if (confirm('Ushbu ko‘nikmalar guruhini butunlay o‘chirishni xohlaysizmi?')) {
      const updated = categories.filter((_, i) => i !== catIdx);
      setCategories(updated);
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategoryTitle.trim()) return;
    setCategories([...categories, { title: newCategoryTitle.trim(), skills: [] }]);
    setNewCategoryTitle('');
  };

  const handleSave = (e) => {
    e?.preventDefault();
    updateTechnicalSkills({ categories });
    if (onShowToast) onShowToast('Texnik ko‘nikmalar muvaffaqiyatli saqlandi!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#ff2a2a]">⚡</span>
            <span>Texnik Ko'nikmalar Boshqaruvi (Technical Skills)</span>
          </h2>
          <p className="text-xs text-white/50">
            Dasturlash tillari, backend, AI/ML va ma'lumotlar bazalari darajalarini slayder orqali boshqaring
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-black shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>💾</span>
          <span>Ko'nikmalarni Saqlash</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((cat, catIdx) => (
          <div
            key={catIdx}
            className="p-6 rounded-2xl bg-[#121212]/90 border border-white/5 hover:border-red-500/30 transition-all space-y-4 shadow-md"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <input
                type="text"
                value={cat.title}
                onChange={(e) => handleCategoryTitleChange(catIdx, e.target.value)}
                className="text-sm font-black text-white bg-transparent border-b border-transparent hover:border-[#ff2a2a]/50 focus:border-[#ff2a2a] focus:outline-none px-1 py-0.5"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleAddSkill(catIdx)}
                  className="px-2.5 py-1 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-300 text-xs font-bold border border-red-500/30 cursor-pointer"
                >
                  + Ko'nikma
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(catIdx)}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 text-xs flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-3.5">
              {cat.skills?.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5 p-3 rounded-xl bg-[#181818] border border-white/5">
                  <div className="flex items-center justify-between gap-3">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(catIdx, sIdx, 'name', e.target.value)}
                      className="text-xs font-bold text-white bg-transparent border-none focus:outline-none flex-1"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black text-[#ff2a2a] w-10 text-right">
                        {skill.level}%
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteSkill(catIdx, sIdx)}
                        className="text-white/30 hover:text-red-400 text-xs ml-1 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Level Slider matching portfolio theme */}
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={skill.level}
                      onChange={(e) => handleSkillChange(catIdx, sIdx, 'level', e.target.value)}
                      className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-[#ff2a2a]"
                    />
                  </div>
                </div>
              ))}

              {(!cat.skills || cat.skills.length === 0) && (
                <div className="text-xs text-white/40 text-center py-3 italic">
                  Ushbu toifada hali ko'nikmalar yo'q. "+ Ko'nikma" tugmasini bosing.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Category Card */}
      <form onSubmit={handleAddCategory} className="p-5 rounded-2xl bg-[#111111] border border-dashed border-white/10 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <input
            type="text"
            value={newCategoryTitle}
            onChange={(e) => setNewCategoryTitle(e.target.value)}
            placeholder="Yangi ko'nikmalar guruhi nomi (masalan: Cloud & DevOps)"
            className="w-full px-4 py-2.5 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600/20 hover:bg-red-600/40 text-red-300 text-xs font-bold border border-red-500/30 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>➕</span>
          <span>Yangi Guruh Qo'shish</span>
        </button>
      </form>
    </div>
  );
};

export default TechnicalSkillsTab;
