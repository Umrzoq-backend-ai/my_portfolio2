import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const ExperienceTab = ({ onShowToast }) => {
  const {
    internshipsList,
    leadershipList,
    updateInternshipsList,
    updateLeadershipList,
  } = usePortfolioData();

  const [internships, setInternships] = useState(
    JSON.parse(JSON.stringify(internshipsList || []))
  );
  const [leadership, setLeadership] = useState(
    JSON.parse(JSON.stringify(leadershipList || []))
  );

  // Internships handlers
  const handleInternshipChange = (idx, field, value) => {
    const updated = [...internships];
    if (field === 'skills' || field === 'tech') {
      updated[idx][field] = typeof value === 'string' ? value.split(',').map((s) => s.trim()) : value;
    } else {
      updated[idx][field] = value;
    }
    setInternships(updated);
  };

  const handleAddInternship = () => {
    setInternships([
      ...internships,
      {
        organization: 'Yangi Tashkilot / Maktab',
        role: 'Developer',
        duration: '2024 — Present',
        skills: ['Python', 'FastAPI'],
        tech: ['Git', 'Linux'],
      },
    ]);
  };

  const handleDeleteInternship = (idx) => {
    setInternships(internships.filter((_, i) => i !== idx));
  };

  // Leadership handlers
  const handleLeadershipChange = (idx, field, value) => {
    const updated = [...leadership];
    updated[idx][field] = value;
    setLeadership(updated);
  };

  const handleAddLeadership = () => {
    setLeadership([
      ...leadership,
      {
        title: 'Yangi Faoliyat / Hackathon',
        role: 'Ishtirokchi',
        badge: 'Tashabbus',
        description: 'Faoliyat haqida batafsil tavsif...',
      },
    ]);
  };

  const handleDeleteLeadership = (idx) => {
    setLeadership(leadership.filter((_, i) => i !== idx));
  };

  const handleSave = (e) => {
    e?.preventDefault();
    updateInternshipsList(internships);
    updateLeadershipList(leadership);
    if (onShowToast) onShowToast('Tajriba va Liderlik bo‘limi muvaffaqiyatli saqlandi!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
            <span className="text-[#ff2a2a]">💼</span>
            <span>Tajriba (Experience) & Liderlik (Leadership)</span>
          </h2>
          <p className="text-xs text-white/50">
            School 21 o'quv dasturi, hackathonlar, stajirovkalar va shaxsiy loyihalar tajribasi
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-[#ff2a2a] hover:bg-red-600 text-white text-xs font-black shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>💾</span>
          <span>O'zgarishlarni Saqlash</span>
        </button>
      </div>

      {/* Internships List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black text-[#ff2a2a] uppercase tracking-wider font-mono">
            Amaliyot & Ish Tajribasi ({internships.length})
          </h3>
          <button
            type="button"
            onClick={handleAddInternship}
            className="px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-300 text-xs font-bold border border-red-500/30 cursor-pointer"
          >
            + Tajriba Qo'shish
          </button>
        </div>

        <div className="space-y-4">
          {internships.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-[#ff2a2a]">Tajriba #{idx + 1}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteInternship(idx)}
                  className="text-white/40 hover:text-red-400 text-xs px-2 py-1 cursor-pointer"
                >
                  O'chirish ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Tashkilot / Loyiha</label>
                  <input
                    type="text"
                    value={item.organization || ''}
                    onChange={(e) => handleInternshipChange(idx, 'organization', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Lavozim / Rol</label>
                  <input
                    type="text"
                    value={item.role || ''}
                    onChange={(e) => handleInternshipChange(idx, 'role', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Davomiyligi (Duration)</label>
                  <input
                    type="text"
                    value={item.duration || ''}
                    onChange={(e) => handleInternshipChange(idx, 'duration', e.target.value)}
                    placeholder="2024 — Present"
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Gained Skills (Vergul bilan)</label>
                  <input
                    type="text"
                    value={Array.isArray(item.skills) ? item.skills.join(', ') : item.skills || ''}
                    onChange={(e) => handleInternshipChange(idx, 'skills', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1">Tech Stack (Vergul bilan)</label>
                  <input
                    type="text"
                    value={Array.isArray(item.tech) ? item.tech.join(', ') : item.tech || ''}
                    onChange={(e) => handleInternshipChange(idx, 'tech', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs text-white focus:outline-none focus:border-[#ff2a2a]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership List */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-black text-[#ff2a2a] uppercase tracking-wider font-mono">
            Liderlik & Tashabbuslar ({leadership.length})
          </h3>
          <button
            type="button"
            onClick={handleAddLeadership}
            className="px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-300 text-xs font-bold border border-red-500/30 cursor-pointer"
          >
            + Liderlik Qo'shish
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadership.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#121212]/90 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-[#ff2a2a]">#{idx + 1}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteLeadership(idx)}
                  className="text-white/40 hover:text-red-400 text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  value={item.title || ''}
                  onChange={(e) => handleLeadershipChange(idx, 'title', e.target.value)}
                  placeholder="Sarlavha (masalan: AI Hackathon)"
                  className="px-3 py-1.5 rounded-lg bg-[#181818] border border-white/10 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  value={item.badge || ''}
                  onChange={(e) => handleLeadershipChange(idx, 'badge', e.target.value)}
                  placeholder="Badge (masalan: Competition)"
                  className="px-3 py-1.5 rounded-lg bg-[#181818] border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <input
                  type="text"
                  value={item.role || ''}
                  onChange={(e) => handleLeadershipChange(idx, 'role', e.target.value)}
                  placeholder="Rol (masalan: Participant)"
                  className="w-full px-3 py-1.5 rounded-lg bg-[#181818] border border-white/10 text-xs text-red-300"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  value={item.description || ''}
                  onChange={(e) => handleLeadershipChange(idx, 'description', e.target.value)}
                  placeholder="Batafsil tavsif..."
                  className="w-full px-3 py-1.5 rounded-lg bg-[#181818] border border-white/10 text-xs text-white/80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
