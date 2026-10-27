import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const CertificatesTab = ({ onShowToast }) => {
  const {
    certificates,
    education,
    contentCreation,
    updateCertificates,
    updateEducation,
    updateContentCreation,
  } = usePortfolioData();

  const [certs, setCerts] = useState(JSON.parse(JSON.stringify(certificates || { featured: [] })));
  const [edu, setEdu] = useState(JSON.parse(JSON.stringify(education || {})));
  const [content, setContent] = useState(JSON.parse(JSON.stringify(contentCreation || { categories: [] })));

  // Cert handlers
  const handleCertChange = (idx, field, val) => {
    const updated = [...(certs.featured || [])];
    updated[idx][field] = val;
    setCerts({ ...certs, featured: updated });
  };

  const handleAddCert = () => {
    const updated = [...(certs.featured || []), { name: 'Yangi Sertifikat', issuer: 'Tashkilot', icon: '🎓' }];
    setCerts({ ...certs, featured: updated });
  };

  const handleDeleteCert = (idx) => {
    const updated = certs.featured.filter((_, i) => i !== idx);
    setCerts({ ...certs, featured: updated });
  };

  // Content creation handlers
  const handleContentCatChange = (idx, field, val) => {
    const updated = [...(content.categories || [])];
    updated[idx][field] = val;
    setContent({ ...content, categories: updated });
  };

  const handleSave = (e) => {
    e?.preventDefault();
    updateCertificates(certs);
    updateEducation(edu);
    updateContentCreation(content);
    if (onShowToast) onShowToast('Sertifikatlar va Ta\'lim bo‘limi muvaffaqiyatli saqlandi!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🎓</span>
            <span>Sertifikatlar, Ta'lim & Sun'iy Intellekt Kontenti</span>
          </h2>
          <p className="text-xs text-white/50">
            Sertifikatlar, diplomlar, School 21 ma'lumotlari va AI kontent kartochkalari
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
        >
          <span>💾</span>
          <span>O'zgarishlarni Saqlash</span>
        </button>
      </div>

      {/* Certificates Section */}
      <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider font-mono">
            Sertifikatlar ({certs.featured?.length || 0})
          </h3>
          <button
            type="button"
            onClick={handleAddCert}
            className="px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold"
          >
            + Sertifikat Qo'shish
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.featured?.map((c, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-[#141428] border border-white/5 space-y-2 relative">
              <div className="flex items-center justify-between gap-2">
                <input
                  type="text"
                  value={c.icon || '🎓'}
                  onChange={(e) => handleCertChange(idx, 'icon', e.target.value)}
                  className="w-8 text-center text-base rounded bg-black/40 border border-white/10"
                />
                <input
                  type="text"
                  value={c.name}
                  onChange={(e) => handleCertChange(idx, 'name', e.target.value)}
                  placeholder="Sertifikat nomi"
                  className="flex-1 px-2.5 py-1 rounded bg-transparent border border-white/10 text-xs text-white font-semibold"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteCert(idx)}
                  className="text-white/40 hover:text-red-400 text-xs"
                >
                  ✕
                </button>
              </div>
              <input
                type="text"
                value={c.issuer}
                onChange={(e) => handleCertChange(idx, 'issuer', e.target.value)}
                placeholder="Beruvchi tashkilot (Issuer)"
                className="w-full px-2.5 py-1 rounded bg-transparent border border-white/10 text-xs text-white/60"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
        <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider font-mono">
          Ta'lim Ma'lumotlari (Education)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">Dastur / Daraja</label>
            <input
              type="text"
              value={edu.degree || ''}
              onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">Ta'lim Maskani</label>
            <input
              type="text"
              value={edu.institution || ''}
              onChange={(e) => setEdu({ ...edu, institution: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">Status / CGPA</label>
            <input
              type="text"
              value={edu.cgpa || ''}
              onChange={(e) => setEdu({ ...edu, cgpa: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-white/70 mb-1">Bitiruv yili</label>
            <input
              type="text"
              value={edu.graduation || ''}
              onChange={(e) => setEdu({ ...edu, graduation: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-[#141428] border border-white/10 text-xs text-white"
            />
          </div>
        </div>
      </div>

      {/* AI Content Creation Cards */}
      <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
        <h3 className="text-sm font-bold text-pink-400 uppercase tracking-wider font-mono">
          AI & Ochiq Manba Kartochkalari (Content Creator)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.categories?.map((cat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#141428] border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={cat.icon || '🤖'}
                  onChange={(e) => handleContentCatChange(idx, 'icon', e.target.value)}
                  className="w-8 text-center text-base rounded bg-black/40 border border-white/10"
                />
                <input
                  type="text"
                  value={cat.title}
                  onChange={(e) => handleContentCatChange(idx, 'title', e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-transparent border border-white/10 text-xs text-white font-bold"
                />
                <input
                  type="text"
                  value={cat.stats}
                  onChange={(e) => handleContentCatChange(idx, 'stats', e.target.value)}
                  placeholder="5+ Projects"
                  className="w-28 px-2 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-purple-300 font-mono"
                />
              </div>
              <textarea
                rows={2}
                value={cat.description}
                onChange={(e) => handleContentCatChange(idx, 'description', e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-transparent border border-white/10 text-xs text-white/70"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesTab;
