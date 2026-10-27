/**
 * Compresses an image file to a lightweight data URL
 * to avoid exceeding browser storage limits while maintaining high visual quality.
 *
 * @param {File} file
 * @param {number} maxWidth
 * @param {number} quality
 * @returns {Promise<string>}
 */
export const compressImageFile = (file, maxWidth = 1000, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Faqat rasm fayllari (JPG, PNG, WEBP) qabul qilinadi!'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Rasmni yuklashda xatolik yuz berdi!'));
      img.src = readerEvent.target?.result;
    };
    reader.onerror = () => reject(new Error('Faylni o‘qishda xatolik yuz berdi!'));
    reader.readAsDataURL(file);
  });
};
