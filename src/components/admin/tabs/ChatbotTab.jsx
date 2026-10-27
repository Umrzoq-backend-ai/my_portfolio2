import { useState } from 'react';
import { usePortfolioData } from '../../../context/PortfolioDataContext';

const ChatbotTab = ({ onShowToast }) => {
  const { chatbotData, updateChatbotData } = usePortfolioData();

  const [botData, setBotData] = useState(
    JSON.parse(JSON.stringify(chatbotData || { faqs: [], suggestions: [] }))
  );
  const [editingFaqIdx, setEditingFaqIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [faqForm, setFaqForm] = useState({
    keywords: '',
    answer: '',
    actions: [],
  });

  // Suggestion chips
  const handleSuggestionsChange = (val) => {
    const list = val.split(',').map((s) => s.trim()).filter(Boolean);
    setBotData({ ...botData, suggestions: list });
  };

  // Open Add FAQ Modal
  const handleOpenAdd = () => {
    setEditingFaqIdx(null);
    setFaqForm({
      keywords: '',
      answer: '',
      actions: [{ text: '', url: '' }],
    });
    setModalOpen(true);
  };

  // Open Edit FAQ Modal
  const handleOpenEdit = (idx) => {
    setEditingFaqIdx(idx);
    const item = botData.faqs[idx];
    setFaqForm({
      keywords: Array.isArray(item.keywords) ? item.keywords.join(', ') : item.keywords || '',
      answer: item.answer || '',
      actions: item.actions ? JSON.parse(JSON.stringify(item.actions)) : [],
    });
    setModalOpen(true);
  };

  // Delete FAQ
  const handleDeleteFaq = (idx) => {
    const updated = botData.faqs.filter((_, i) => i !== idx);
    const newBot = { ...botData, faqs: updated };
    setBotData(newBot);
    updateChatbotData(newBot);
    if (onShowToast) onShowToast('FAQ o‘chirildi!');
  };

  // Save Modal
  const handleSaveModal = (e) => {
    e.preventDefault();
    const cleanedKeywords = faqForm.keywords
      .split(',')
      .map((k) => k.trim().toLowerCase())
      .filter(Boolean);

    const cleanedActions = (faqForm.actions || [])
      .filter((a) => a.text && a.text.trim())
      .map((a) => ({ text: a.text.trim(), url: a.url?.trim() || '' }));

    const newFaqItem = {
      keywords: cleanedKeywords,
      answer: faqForm.answer,
      actions: cleanedActions,
    };

    let updatedFaqs = [...(botData.faqs || [])];
    if (editingFaqIdx !== null) {
      updatedFaqs[editingFaqIdx] = newFaqItem;
    } else {
      updatedFaqs.unshift(newFaqItem);
    }

    const updatedBot = { ...botData, faqs: updatedFaqs };
    setBotData(updatedBot);
    updateChatbotData(updatedBot);
    setModalOpen(false);
    if (onShowToast) onShowToast('FAQ muvaffaqiyatli saqlandi!');
  };

  // Save General Chatbot Settings
  const handleSaveGeneral = (e) => {
    e?.preventDefault();
    updateChatbotData(botData);
    if (onShowToast) onShowToast('Chatbot umumiy sozlamalari saqlandi!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🤖</span>
            <span>AI ChatBot Bilim Bazasi & FAQ Boshqaruvi</span>
          </h2>
          <p className="text-xs text-white/50">
            Saytdagi aqlli AI yordamchi savol-javoblarini, kalit so'zlarini va harakat tugmalarini tahrirlash
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenAdd}
            className="px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold border border-purple-500/30 transition-all flex items-center gap-2"
          >
            <span>➕</span>
            <span>Yangi FAQ Qo'shish</span>
          </button>
          <button
            onClick={handleSaveGeneral}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
          >
            <span>💾</span>
            <span>Saqlash</span>
          </button>
        </div>
      </div>

      {/* General Bot Configuration */}
      <div className="p-6 rounded-2xl bg-[#0f0f20]/80 border border-white/5 space-y-4">
        <h3 className="text-sm font-bold text-pink-400 uppercase tracking-wider font-mono">
          Asosiy Assistent Sozlamalari
        </h3>

        <div>
          <label className="block text-xs font-medium text-white/70 mb-1.5">
            Salomlashish Matni (Greeting Message)
          </label>
          <textarea
            rows={3}
            value={botData.greeting || ''}
            onChange={(e) => setBotData({ ...botData, greeting: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500 font-sans leading-relaxed"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-white/70 mb-1.5">
            Tezkor Taklif Tugmalari (Suggestions chips — Vergul bilan ajrating)
          </label>
          <input
            type="text"
            value={botData.suggestions ? botData.suggestions.join(', ') : ''}
            onChange={(e) => handleSuggestionsChange(e.target.value)}
            placeholder="🧠 Tahlilchi AI, 🎙️ INTRA GROUP, 💼 HR & Ishga taklif"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-white/70 mb-1.5">
            Javob topilmaganda beriladigan matn (Fallback Response)
          </label>
          <textarea
            rows={2}
            value={botData.fallback || ''}
            onChange={(e) => setBotData({ ...botData, fallback: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500 font-sans"
          />
        </div>
      </div>

      {/* FAQ Knowledge Base List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider font-mono">
            Bilimlar Bazasi ({botData.faqs?.length || 0} ta FAQ Intent)
          </h3>
          <span className="text-xs text-white/40">Foydalanuvchi yozgan kalit so'zlarga qarab avtomatik mos keladi</span>
        </div>

        <div className="space-y-3.5">
          {botData.faqs?.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#0e0e1c] border border-white/5 hover:border-purple-500/30 transition-all duration-300 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {faq.keywords?.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-white/70 whitespace-pre-line line-clamp-3 pt-1">
                    {faq.answer}
                  </p>
                  {faq.actions?.length > 0 && (
                    <div className="flex items-center gap-2 pt-2 flex-wrap">
                      {faq.actions.map((act, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/5 text-white/80 border border-white/10 flex items-center gap-1"
                        >
                          <span>🔗</span> {act.text}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(idx)}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold"
                  >
                    ✏️ Tahrirlash
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteFaq(idx)}
                    className="px-2.5 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add / Edit FAQ Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0e0e1c] border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl my-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>{editingFaqIdx !== null ? '✏️' : '➕'}</span>
                <span>{editingFaqIdx !== null ? 'FAQ Intentni Tahrirlash' : 'Yangi FAQ Intent Qo‘shish'}</span>
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 text-sm flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">
                  Kalit so'zlar (Keywords — Vergul bilan ajrating) *
                </label>
                <input
                  type="text"
                  required
                  value={faqForm.keywords}
                  onChange={(e) => setFaqForm({ ...faqForm, keywords: e.target.value })}
                  placeholder="masalan: narx, xizmat narxi, budget, qancha turadi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/70 mb-1">
                  Chatbot Javob Matni (Answer) *
                </label>
                <textarea
                  rows={5}
                  required
                  value={faqForm.answer}
                  onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                  placeholder="Foydalanuvchiga beriladigan to'liq, chiroyli va qulay javob matni..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141428] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500 leading-relaxed"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-white/70">
                    Interaktiv Havola Tugmalari (Action Buttons)
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setFaqForm({
                        ...faqForm,
                        actions: [...(faqForm.actions || []), { text: '', url: '' }],
                      })
                    }
                    className="text-xs text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    + Tugma qo'shish
                  </button>
                </div>

                {faqForm.actions?.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={act.text}
                      onChange={(e) => {
                        const newA = [...faqForm.actions];
                        newA[aIdx].text = e.target.value;
                        setFaqForm({ ...faqForm, actions: newA });
                      }}
                      placeholder="Tugma matni (masalan: 🚀 Loyihani ochish)"
                      className="w-1/2 px-3 py-1.5 rounded-lg bg-[#141428] border border-white/10 text-xs text-white"
                    />
                    <input
                      type="text"
                      value={act.url}
                      onChange={(e) => {
                        const newA = [...faqForm.actions];
                        newA[aIdx].url = e.target.value;
                        setFaqForm({ ...faqForm, actions: newA });
                      }}
                      placeholder="Havola (URL)"
                      className="w-1/2 px-3 py-1.5 rounded-lg bg-[#141428] border border-white/10 text-xs text-white font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newA = faqForm.actions.filter((_, i) => i !== aIdx);
                        setFaqForm({ ...faqForm, actions: newA });
                      }}
                      className="text-white/40 hover:text-red-400 text-xs px-2"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-white/70"
                >
                  Bekor qilish
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 text-xs font-semibold text-white shadow-lg shadow-purple-600/30 cursor-pointer"
                >
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotTab;
