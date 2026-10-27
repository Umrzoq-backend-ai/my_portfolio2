import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const EMPTY_PROJECT = {
  id: '',
  number: '01',
  badge: '🚀 New Project',
  category: 'ai',
  title: '',
  subtitle: '',
  role: 'Developer',
  hrHighlights: '',
  description: '',
  features: [''],
  techTags: ['Python', 'FastAPI'],
  links: {
    github: '',
    demo: '',
    telegramBot: '',
  },
  isFlagship: false,
  stats: 'Live Demo',
  accent: 'from-purple-600/30 via-indigo-600/20 to-black',
};

const ACCENT_PRESETS = [
  { label: 'Qizil / Binafsha', value: 'from-red-600/30 via-purple-600/20 to-black' },
  { label: 'Moviy / Cyan', value: 'from-cyan-600/30 via-blue-600/20 to-black' },
  { label: 'To‘q Sariq / Amber', value: 'from-amber-600/30 via-orange-600/20 to-black' },
  { label: 'Yashil / Zumrad', value: 'from-emerald-600/30 via-teal-600/20 to-black' },
  { label: 'Binafsha / Pushti', value: 'from-purple-600/30 via-pink-600/20 to-black' },
];

const ProjectsTab = ({ onShowToast }) => {
  const { projects, updateProjects } = usePortfolioData();

  const [projectList, setProjectList] = useState([...(projects || [])]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirmIndex, setDeleteConfirmIndex] = useState(null);

  // Sync state helper
  const syncAndSave = (newList) => {
    // re-number projects sequentially
    const renumbered = newList.map((p, idx) => ({
      ...p,
      number: String(idx + 1).padStart(2, '0'),
    }));
    setProjectList(renumbered);
    updateProjects(renumbered);
  };

  // Open Create
  const handleAddNew = () => {
    setEditingIndex(null);
    setFormData({
      ...EMPTY_PROJECT,
      id: 'project-' + Date.now(),
      number: String((projectList?.length || 0) + 1).padStart(2, '0'),
    });
    setIsModalOpen(true);
  };

  // Open Edit
  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(JSON.parse(JSON.stringify(projectList[index])));
    setIsModalOpen(true);
  };

  // Delete
  const handleDelete = (index) => {
    const updated = projectList.filter((_, idx) => idx !== index);
    syncAndSave(updated);
    setDeleteConfirmIndex(null);
    if (onShowToast) onShowToast('Loyiha muvaffaqiyatli o‘chirildi!');
  };

  // Move Up / Down
  const handleMove = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= projectList.length) return;
    const updated = [...projectList];
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    syncAndSave(updated);
    if (onShowToast) onShowToast('Loyiha o‘rni yangilandi!');
  };

  // Save Modal Form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert('Loyiha sarlavhasi kiritilishi shart!');
      return;
    }

    const cleanedData = {
      ...formData,
      id: formData.id || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      features: (formData.features || []).filter((f) => f && f.trim()),
      techTags: Array.isArray(formData.techTags)
        ? formData.techTags
        : String(formData.techTags || '')
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean),
    };

    let updatedList;
    if (editingIndex !== null) {
      updatedList = [...projectList];
      updatedList[editingIndex] = cleanedData;
    } else {
      updatedList = [...projectList, cleanedData];
    }

    syncAndSave(updatedList);
    setIsModalOpen(false);
    if (onShowToast) {
      onShowToast(
        editingIndex !== null
          ? 'Loyiha ma\'lumotlari yangilandi!'
          : 'Yangi loyiha muvaffaqiyatli qo‘shildi!'
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🚀</span>
            <span>Loyihalar Boshqaruvi (Projects CRUD)</span>
          </h2>
          <p className="text-xs text-white/50">
            Jami {projectList.length} ta loyiha mavjud. Loyiha tartibini o'zgartirish, tahrirlash yoki yangi loyiha qo'shishingiz mumkin.
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>➕</span>
          <span>Yangi Loyiha Qo'shish</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-3.5">
        {projectList.map((project, idx) => (
          <div
            key={project.id || idx}
            className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              project.isFlagship
                ? 'bg-[#121024] border-purple-500/40 shadow-lg shadow-purple-950/20'
                : 'bg-[#0e0e1c] border-white/5 hover:border-white/20'
            }`}
          >
            {/* Left: Info */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-purple-400 flex-shrink-0">
                {project.number || String(idx + 1).padStart(2, '0')}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold text-white">
                    {project.title}
                  </h3>
                  {project.isFlagship && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <span>★</span> Flagship
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase bg-white/5 text-purple-300 border border-white/10">
                    {project.category || 'ai'}
                  </span>
                </div>

                <p className="text-xs text-white/60 line-clamp-1 max-w-2xl">
                  {project.hrHighlights || project.description}
                </p>

                {/* Tech tags preview */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  {project.techTags?.slice(0, 5).map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-white/70 border border-white/5">
                      {t}
                    </span>
                  ))}
                  {(project.techTags?.length || 0) > 5 && (
                    <span className="text-[10px] text-white/40">
                      +{project.techTags.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 self-end md:self-center">
              {/* Move Up */}
              <button
                type="button"
                disabled={idx === 0}
                onClick={() => handleMove(idx, -1)}
                title="Yuqoriga surish"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white/70 flex items-center justify-center text-xs transition-colors"
              >
                ▲
              </button>

              {/* Move Down */}
              <button
                type="button"
                disabled={idx === projectList.length - 1}
                onClick={() => handleMove(idx, 1)}
                title="Pastga surish"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white/70 flex items-center justify-center text-xs transition-colors"
              >
                ▼
              </button>

              {/* Edit */}
              <button
                type="button"
                onClick={() => handleEdit(idx)}
                className="px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold border border-purple-500/30 transition-colors flex items-center gap-1"
              >
                <span>✏️</span>
                <span>Tahrirlash</span>
              </button>

              {/* Delete */}
              <button
                type="button"
                onClick={() => setDeleteConfirmIndex(idx)}
                className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/25 text-red-400 text-xs font-semibold border border-red-500/20 transition-colors"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#101020] border border-red-500/30 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-red-400">⚠️</span> Loyihani o'chirishni tasdiqlaysizmi?
            </h3>
            <p className="text-xs text-white/60">
              "<strong className="text-white">{projectList[deleteConfirmIndex]?.title}</strong>" loyihasi saytdan butunlay o'chiriladi.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setDeleteConfirmIndex(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/70 transition-colors"
              >
                Bekor qilish
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteConfirmIndex)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-semibold text-white shadow-lg shadow-red-600/30 transition-colors"
              >
                Ha, o'chirilsin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit Modal Form */}
      {isModalOpen && formData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="bg-[#0e0e1c] border border-white/10 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{editingIndex !== null ? '✏️' : '➕'}</span>
                <span>{editingIndex !== null ? 'Loyihani Tahrirlash' : 'Yangi Loyiha Qo‘shish'}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Loyiha Nomi (Title) *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Qisqa Sarlavha / Tech Subtitle</label>
                  <input
                    type="text"
                    value={formData.subtitle || ''}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="FastAPI · React · Gemini AI"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Nishon (Badge)</label>
                  <input
                    type="text"
                    value={formData.badge || ''}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="🔥 Flagship AI Project"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Toifa (Category)</label>
                  <select
                    value={formData.category || 'ai'}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="ai">AI / Data Science (ai)</option>
                    <option value="fullstack">Full-Stack / Backend (fullstack)</option>
                    <option value="tools">Tools / CLI / CV (tools)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Rol / Vazifa</label>
                  <input
                    type="text"
                    value={formData.role || ''}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Lead AI & Full-Stack Developer"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Flagship Toggle & Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4 rounded-xl bg-[#131326] border border-white/5">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="flagship_toggle"
                    checked={formData.isFlagship || false}
                    onChange={(e) => setFormData({ ...formData, isFlagship: e.target.checked })}
                    className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="flagship_toggle" className="text-xs font-bold text-white cursor-pointer select-none">
                    ★ Flagship Loyiha (Katta maxsus karta sifatida ko'rsatish)
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">Status nishoni</label>
                  <input
                    type="text"
                    value={formData.stats || ''}
                    onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
                    placeholder="Live Production · Vercel"
                    className="w-full px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white"
                  />
                </div>
              </div>

              {/* HR Highlights */}
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">
                  HR & Texnik Highlight (Qisqa jozibador xulosa)
                </label>
                <textarea
                  rows={2}
                  value={formData.hrHighlights || ''}
                  onChange={(e) => setFormData({ ...formData, hrHighlights: e.target.value })}
                  placeholder="Video va audio materiallardan soniyalar ichida chuqur xulosa ajratuvchi platforma..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">To'liq Tavsif (Description)</label>
                <textarea
                  rows={3}
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-white/70">
                    Xususiyatlar va Imkoniyatlar (Features bullet points)
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, features: [...(formData.features || []), ''] })}
                    className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    + Qator qo'shish
                  </button>
                </div>
                {formData.features?.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <span className="text-xs text-white/30 font-mono">•</span>
                    <input
                      type="text"
                      value={f}
                      onChange={(e) => {
                        const newF = [...formData.features];
                        newF[fIdx] = e.target.value;
                        setFormData({ ...formData, features: newF });
                      }}
                      placeholder={`Xususiyat #${fIdx + 1}`}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newF = formData.features.filter((_, idx) => idx !== fIdx);
                        setFormData({ ...formData, features: newF });
                      }}
                      className="text-white/40 hover:text-red-400 text-xs px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">
                  Texnologiyalar (Vergul bilan ajrating)
                </label>
                <input
                  type="text"
                  value={Array.isArray(formData.techTags) ? formData.techTags.join(', ') : formData.techTags}
                  onChange={(e) => setFormData({ ...formData, techTags: e.target.value.split(',').map((s) => s.trim()) })}
                  placeholder="Python, FastAPI, Google Gemini, React, TailwindCSS"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">GitHub Havola</label>
                  <input
                    type="url"
                    value={formData.links?.github || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        links: { ...formData.links, github: e.target.value },
                      })
                    }
                    placeholder="https://github.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">Jonli Demo Havola (Vercel / Web)</label>
                  <input
                    type="url"
                    value={formData.links?.demo || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        links: { ...formData.links, demo: e.target.value },
                      })
                    }
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Accent Color Preset */}
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1.5">Karta Gradient Rangi (Accent)</label>
                <select
                  value={formData.accent || ACCENT_PRESETS[0].value}
                  onChange={(e) => setFormData({ ...formData, accent: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  {ACCENT_PRESETS.map((p, i) => (
                    <option key={i} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/70 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-semibold text-white shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
                >
                  {editingIndex !== null ? 'Yangilashni Saqlash' : 'Loyihani Qo‘shish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsTab;
