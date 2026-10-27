import { useState, useRef } from 'react';
import { compressImageFile } from '../../utils/imageCompressor';

const ImageUploadField = ({
  value = '',
  onChange,
  label = 'Rasm (Yutuq, Sertifikat, Diplom)',
  placeholder = 'https://... yoki faylni tanlang',
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [mode, setMode] = useState(value && !value.startsWith('data:') ? 'url' : 'upload');
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setErrorMsg('');
    setIsProcessing(true);

    try {
      const compressedDataUrl = await compressImageFile(file, 1000, 0.82);
      onChange(compressedDataUrl);
    } catch (err) {
      setErrorMsg(err.message || 'Rasmni yuklashda xatolik yuz berdi');
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    setErrorMsg('');
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-[11px] font-semibold text-white/70">
          {label}
        </label>
        {value && (
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            ✓ Rasm biriktirilgan
          </span>
        )}
      </div>

      {/* If Image exists - Preview Mode */}
      {value ? (
        <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2 flex items-center gap-3">
          <div className="w-20 h-16 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10">
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={() => setErrorMsg('Rasm manzili noto‘g‘ri yoki ochilmadi!')}
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-mono text-white/70 truncate">
              {value.startsWith('data:') ? '📁 Qurilmadan yuklangan rasm' : value}
            </p>
            <div className="flex items-center gap-2 mt-1.5">
              <label className="text-[10px] font-bold text-[#ff2a2a] hover:text-red-400 cursor-pointer transition-colors">
                Almashtirish
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-white/20 text-[10px]">•</span>
              <button
                type="button"
                onClick={handleRemove}
                className="text-[10px] font-bold text-red-400/80 hover:text-red-300 cursor-pointer transition-colors"
              >
                O‘chirish
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty state - Upload or URL tabs */
        <div className="p-3 rounded-xl bg-[#151515] border border-white/10 space-y-2.5">
          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
            <button
              type="button"
              onClick={() => setMode('upload')}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                mode === 'upload'
                  ? 'bg-[#ff2a2a]/20 text-[#ff2a2a] border border-[#ff2a2a]/30'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              📁 Fayl yuklash
            </button>
            <button
              type="button"
              onClick={() => setMode('url')}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                mode === 'url'
                  ? 'bg-[#ff2a2a]/20 text-[#ff2a2a] border border-[#ff2a2a]/30'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              🔗 Havola (URL)
            </button>
          </div>

          {mode === 'upload' ? (
            <div>
              <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-white/10 hover:border-[#ff2a2a]/50 rounded-xl cursor-pointer bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                <span className="text-xl mb-1 group-hover:scale-110 transition-transform">📷</span>
                <span className="text-xs font-semibold text-white/80 group-hover:text-white">
                  {isProcessing ? 'Yuklanmoqda va siqilmoqda...' : 'Kompyuterdan rasm tanlash'}
                </span>
                <span className="text-[10px] text-white/40 mt-0.5">
                  JPG, PNG, WEBP (Avtomatik optimizatsiya qilinadi)
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={isProcessing}
                  className="hidden"
                />
              </label>
            </div>
          ) : (
            <div>
              <input
                type="url"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a2a]"
              />
            </div>
          )}
        </div>
      )}

      {errorMsg && (
        <p className="text-[10px] text-red-400 flex items-center gap-1">
          <span>⚠️</span>
          <span>{errorMsg}</span>
        </p>
      )}
    </div>
  );
};

export default ImageUploadField;
