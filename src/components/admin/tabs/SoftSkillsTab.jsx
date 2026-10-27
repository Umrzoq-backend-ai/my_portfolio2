import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const EMOJI_OPTIONS = ['🧩', '📚', '🤝', '💬', '🌟', '🎨', '💪', '⏰', '🚀', '🧠', '🎯', '⚡'];

const SoftSkillsTab = ({ onShowToast }) => {
  const { softSkillsList, updateSoftSkillsList } = usePortfolioData();
  const [skills, setSkills] = useState(JSON.parse(JSON.stringify(softSkillsList || [])));
  const [newSkill, setNewSkill] = useState({ name: '', icon: '🧩', desc: '' });

  const handleChange = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const handleDelete = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newSkill.name.trim()) return;
    setSkills([...skills, { ...newSkill }]);
    setNewSkill({ name: '', icon: '🧩', desc: '' });
  };

  const handleSave = (e) => {
    e?.preventDefault();
    updateSoftSkillsList(skills);
    if (onShowToast) onShowToast('Yumshoq ko‘nikmalar muvaffaqiyatli saqlandi!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🌟</span>
            <span>Yumshoq Ko'nikmalar (Soft Skills)</span>
          </h2>
          <p className="text-xs text-white/50">
            Jamoaviy ishlash, muammolarni hal qilish, muloqot va shaxsiy qobiliyatlar kartochkalari
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>💾</span>
          <span>Ko'nikmalarni Saqlash</span>
        </button>
      </div>

      {/* Grid of Soft Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-3 relative group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <select
                  value={skill.icon}
                  onChange={(e) => handleChange(idx, 'icon', e.target.value)}
                  className="bg-[#141428] text-lg rounded-lg px-2 py-1 border border-white/10 text-white"
                >
                  {EMOJI_OPTIONS.map((em, i) => (
                    <option key={i} value={em}>
                      {em}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleChange(idx, 'name', e.target.value)}
                  className="text-xs font-bold text-white bg-transparent border-b border-transparent hover:border-purple-500/50 focus:border-purple-500 focus:outline-none px-1"
                />
              </div>
              <button
                type="button"
                onClick={() => handleDelete(idx)}
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-400 text-xs flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <textarea
              rows={2}
              value={skill.desc}
              onChange={(e) => handleChange(idx, 'desc', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#131326] border border-white/10 text-xs text-white/80 focus:outline-none focus:border-purple-500"
            />
          </div>
        ))}
      </div>

      {/* Add New Soft Skill Card */}
      <form onSubmit={handleAdd} className="p-5 rounded-2xl bg-[#0a0a16] border border-dashed border-white/10 space-y-4">
        <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider font-mono">
          Yangi Yumshoq Ko'nikma Qo'shish
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-2">
            <select
              value={newSkill.icon}
              onChange={(e) => setNewSkill({ ...newSkill, icon: e.target.value })}
              className="w-full bg-[#141428] text-lg rounded-xl px-3 py-2 border border-white/10 text-white"
            >
              {EMOJI_OPTIONS.map((em, i) => (
                <option key={i} value={em}>
                  {em}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-4">
            <input
              type="text"
              required
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              placeholder="Ko'nikma nomi (masalan: Adaptability)"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="sm:col-span-4">
            <input
              type="text"
              required
              value={newSkill.desc}
              onChange={(e) => setNewSkill({ ...newSkill, desc: e.target.value })}
              placeholder="Qisqacha tavsifi"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 text-xs font-semibold border border-purple-500/30 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>➕</span> Qo'shish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SoftSkillsTab;
