// ============================================================
// portfolioData.js — Centralized multilingual configuration
// Full UZ / EN / RU support across all sections, cards, and AI Chatbot.
// ============================================================

export const personalInfo = {
  name: "Umrzoq Yulchiyev",
  firstName: "Umrzoq",
  brandName: "Umrzoq Yulchiyev",
  title: {
    uz: "Junior Data Scientist & Backend Dasturchi",
    en: "Junior Data Scientist & Backend Developer",
    ru: "Junior Data Scientist & Backend Разработчик",
  },
  location: {
    uz: "Zomin, Jizzax, O'zbekiston",
    en: "Zomin, Jizzakh, Uzbekistan",
    ru: "Зомин, Джизак, Узбекистан",
  },
  phone: "+998 91 593 30 18",
  emails: {
    primary: "school21dev@gmail.com",
    secondary: "school21dev@gmail.com",
  },
  resumeUrl: "/Umrzoq_Yulchiyev_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/umrzoq-backend-ai",
  linkedin: "https://linkedin.com/in/umrzoqyulchiyevcode",
  telegram: "https://t.me/umrzoq_21",
};

export const navContent = {
  links: [
    { id: 'home', uz: 'Asosiy', en: 'Home', ru: 'Главная' },
    { id: 'about', uz: 'Men haqimda', en: 'About', ru: 'О себе' },
    { id: 'skills', uz: 'Ko‘nikmalar', en: 'Skills', ru: 'Навыки' },
    { id: 'projects', uz: 'Loyihalar', en: 'Projects', ru: 'Проекты' },
    { id: 'contact', uz: 'Aloqa', en: 'Contact', ru: 'Контакты' },
  ],
  hireMe: {
    uz: "Bog‘lanish",
    en: "Hire Me",
    ru: "Нанять меня",
  },
  resume: {
    uz: "Rezyume",
    en: "Resume",
    ru: "Резюме",
  },
};

export const heroContent = {
  greeting: {
    uz: "Salom, men Umrzoq",
    en: "Hi, I'm Umrzoq",
    ru: "Привет, я Умрзок",
  },
  titleHighlight: {
    uz: "Data Scientist & Backend Dasturchi",
    en: "Data Scientist & Backend Developer",
    ru: "Data Scientist & Backend Разработчик",
  },
  subtitle: {
    uz: "Men Python, FastAPI va zamonaviy Machine Learning yordamida sun'iy intellekt tizimlari, amaliy modellar va mustahkam backend platformalari quraman.",
    en: "I build AI-powered applications, machine learning models, and backend systems using Python, FastAPI, and Django.",
    ru: "Создаю приложения с искусственным интеллектом, модели машинного обучения и надежные бэкенд-системы на Python, FastAPI и Django.",
  },
  ctaPrimary: {
    uz: "Loyihalarim",
    en: "View My Work",
    ru: "Мои проекты",
    href: "#projects",
  },
  ctaSecondary: {
    uz: "Bog‘lanish",
    en: "Contact Me",
    ru: "Связаться",
    href: "#contact",
  },
  ctaResume: {
    uz: "Rezyumeni Yuklab Olish",
    en: "Download Resume",
    ru: "Скачать резюме",
    href: "/Umrzoq_Yulchiyev_Resume.pdf",
  },
  playReel: {
    uz: "Videoni Ko‘rish",
    en: "Play Reel",
    ru: "Смотреть видео",
  },
};

export const aboutContent = {
  heading: {
    uz: "Assalomu alaykum!",
    en: "Hello!",
    ru: "Приветствую!",
  },
  bio: {
    uz: `Mening ismim <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Umrzoq Yulchiyev</span>, O‘zbekistonlik Junior Data Scientist va Backend dasturchiman, hozirda School 21 Uzbekistan'da tahsil olyapman. Men Python yordamida sun’iy intellekt ilovalari, mashinali o‘rganish modellari va mustahkam backend tizimlari qurishga ixtisoslashganman. AI xakatonlarida qatnashganman va real amaliy loyihalar ustida doimiy ishlayman. Maqsadim — xalqaro darajadagi AI Engineer bo‘lib, hayotiy muammolarga aqlli yechimlar yaratish.`,
    en: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Umrzoq Yulchiyev</span>, a Junior Data Scientist and Backend Developer from Uzbekistan, currently studying at School 21 Uzbekistan. I enjoy building AI-powered applications, machine learning models, and backend systems using Python. I have participated in AI hackathons and continuously improve my skills through real-world projects. My goal is to become an AI Engineer and create intelligent solutions that solve real-life problems.`,
    ru: `Меня зовут <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Умрзок Юлчиев</span>, я Junior Data Scientist и Backend-разработчик из Узбекистана, обучаюсь в School 21 Uzbekistan. Создаю ИИ-приложения, модели машинного обучения и надежные бэкенд-системы на Python. Участвовал в ИИ-хакатонах и постоянно совершенствую свои навыки на реальных проектах. Моя цель — стать AI Engineer и создавать интеллектуальные решения для реальных задач.`,
  },
  badgeRole: {
    uz: "Data Scientist & Backend Dasturchi",
    en: "Data Scientist & Backend Dev",
    ru: "Data Scientist & Backend Разработчик",
  },
  techStack: ["Python", "FastAPI", "Machine Learning"],
};

export const skillsContent = {
  badge: {
    uz: "Mening Jarayonim",
    en: "My Process",
    ru: "Мой процесс",
  },
  heading: {
    uz: "G‘oyalarni real sun’iy intellekt yechimlariga aylantirish bosqichlari",
    en: "Here's how I turn ideas into real-world AI solutions",
    ru: "Как я превращаю идеи в работающие ИИ-решения",
  },
  description: {
    uz: "G‘oyalarni mustahkam va ishonchli AI/backend dasturlariga aylantirish uchun ma’lumotlarga asoslangan texnik metodologiyadan foydalanaman.",
    en: "I follow a structured, data-driven, and technical approach to turn ideas into robust AI and backend applications.",
    ru: "Применяю структурированный и дата-ориентированный инженерный подход для создания масштабируемых ИИ и бэкенд решений.",
  },
  cards: [
    {
      number: "01",
      title: { uz: "Tadqiqot", en: "Research", ru: "Исследование" },
      text: {
        uz: "Loyiha poydevorini to‘g‘ri qo‘yish uchun talablar, ma’lumotlar oqimi va texnik cheklovlarni chuqur o‘rganaman.",
        en: "I start by understanding goals, data requirements, and technical constraints to lay a solid foundation for the project.",
        ru: "Анализирую цели, требования к данным и технические ограничения для надежного старта проекта.",
      },
    },
    {
      number: "02",
      title: { uz: "Arxitektura", en: "Design", ru: "Проектирование" },
      text: {
        uz: "Toza arxitektura, qulay ma’lumotlar quvurlari va foydalanuvchiga yoqimli interfeyslarni loyihalashtiraman.",
        en: "Crafting clean architecture, data pipelines, and intuitive interfaces that guarantee an engaging user experience.",
        ru: "Проектирую чистую архитектуру, пайплайны данных и интуитивно понятные интерфейсы.",
      },
    },
    {
      number: "03",
      title: { uz: "Ishlab Chiqish", en: "Develop", ru: "Разработка" },
      text: {
        uz: "Python, FastAPI, Django va zamonaviy Data Science vositalari yordamida tezkor ML modellari va API'lar quraman.",
        en: "Building scalable ML models and robust backend APIs using Python, FastAPI, Django, and modern data science tools.",
        ru: "Разрабатываю масштабируемые ML-модели и надежные REST API на Python, FastAPI, Django и современных библиотеках.",
      },
    },
    {
      number: "04",
      title: { uz: "Deploy & Qo‘llab-quvvatlash", en: "Deploy", ru: "Внедрение" },
      text: {
        uz: "Qat’iy sinovlar, unumdorlikni optimallashtirish va production muhitiga uzluksiz integratsiya (CI/CD).",
        en: "Rigorous testing, performance optimization, and seamless deployment to production environments.",
        ru: "Тщательное тестирование, оптимизация производительности и непрерывное развертывание в продакшн.",
      },
    },
  ],
  endText: {
    uz: "Relizga tayyor!",
    en: "Ready to ship!",
    ru: "Готово к релизу!",
  },
};

export const technicalSkills = {
  badge: {
    uz: "Texnologik Arsenal",
    en: "Technical Stack",
    ru: "Технический стек",
  },
  heading: {
    uz: "Mening Ko‘nikmalarim",
    en: "My Skillset",
    ru: "Мои навыки",
  },
  description: {
    uz: "Dasturlash tillari, freymvorklar, ma’lumotlar bazalari va kompyuter muhandisligi bo‘yicha to‘liq sharh.",
    en: "A comprehensive overview of my programming languages, frameworks, databases, and engineering concepts.",
    ru: "Полный обзор моих языков программирования, фреймворков, баз данных и инженерных концепций.",
  },
  categories: [
    {
      title: {
        uz: "Dasturlash Tillari",
        en: "Programming Languages",
        ru: "Языки Программирования",
      },
      skills: [
        { name: "Python", level: 88 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 82 },
        { name: "JavaScript (Basic)", level: 50 },
      ],
    },
    {
      title: {
        uz: "Backend Dasturlash",
        en: "Backend Development",
        ru: "Бэкенд Разработка",
      },
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Django", level: 80 },
        { name: "REST API", level: 87 },
      ],
    },
    {
      title: {
        uz: "Data Science & Sun’iy Intellekt",
        en: "Data Science & AI",
        ru: "Data Science и ИИ",
      },
      skills: [
        { name: "Machine Learning", level: 83 },
        { name: "Scikit-learn", level: 82 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 86 },
        { name: "Matplotlib", level: 80 },
        { name: "OpenCV", level: 75 },
      ],
    },
    {
      title: {
        uz: "Ma’lumotlar Bazasi",
        en: "Databases",
        ru: "Базы Данных",
      },
      skills: [
        { name: "PostgreSQL", level: 78 },
        { name: "SQLite", level: 82 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      title: {
        uz: "Asboblar & Muhit",
        en: "Tools & Environment",
        ru: "Инструменты и Среда",
      },
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Linux (Ubuntu)", level: 80 },
        { name: "Jupyter Notebook", level: 87 },
        { name: "VS Code", level: 90 },
        { name: "CLion", level: 72 },
      ],
    },
    {
      title: {
        uz: "Kompyuter Fanlari Konseptsiyalari",
        en: "Computer Science Concepts",
        ru: "Компьютерные Науки",
      },
      skills: [
        { name: "Data Structures", level: 82 },
        { name: "Algorithms", level: 80 },
        { name: "OOP", level: 85 },
        { name: "DBMS", level: 78 },
        { name: "Software Engineering", level: 76 },
      ],
    },
  ],
};

export const projectsContent = {
  badge: {
    uz: "Tanlangan Loyihalar & Jonli Dasturlar",
    en: "Featured Projects & Live Apps",
    ru: "Избранные проекты и работающие сервисы",
  },
  heading: {
    uz: "O‘z natijasi bilan gapiruvchi ishlar",
    en: "Work that speaks for itself",
    ru: "Проекты, которые говорят сами за себя",
  },
  description: {
    uz: "Multimodal sun’iy intellekt platformalari, real vaqtli audio oqim, Telegram Mini Apps va kompyuter ko‘rish yo‘nalishidagi ishlab chiqarish darajasidagi loyihalarim.",
    en: "Multimodal AI platforms, real-time audio broadcasting, Telegram Mini Apps, and production-grade machine learning solutions.",
    ru: "Мультимодальные платформы искусственного интеллекта, онлайн аудиотрансляции, Telegram Mini Apps и реальные ML-проекты.",
  },
  filterTabs: [
    { id: 'all', uz: "Barchasi (All)", en: "All Projects", ru: "Все проекты" },
    { id: 'ai', uz: "Sun’iy Intellekt & ML", en: "AI & Machine Learning", ru: "ИИ и Машинное обучение" },
    { id: 'fullstack', uz: "Veb & Mini Apps", en: "Web & Mini Apps", ru: "Веб и Mini Apps" },
    { id: 'tools', uz: "CLI & Asboblar", en: "CLI & Tools", ru: "CLI и Инструменты" },
  ],
  buttons: {
    liveDemo: {
      uz: "Jonli Saytni Ochish (Live Demo)",
      en: "Open Live Demo",
      ru: "Открыть живой сайт (Live Demo)",
    },
    telegramBot: {
      uz: "Botni Ochish",
      en: "Launch Bot",
      ru: "Открыть бота",
    },
    githubCode: {
      uz: "GitHub Manba Kodi",
      en: "GitHub Source Code",
      ru: "Исходный код на GitHub",
    },
    backendApi: {
      uz: "Backend API",
      en: "Backend API",
      ru: "Backend API",
    },
    comingSoon: {
      uz: "Tez kunda",
      en: "Coming Soon",
      ru: "Скоро выйдет",
    },
    viewAllGithub: {
      uz: "GitHub'dagi Barcha Repozitoriylarni Ko‘rish",
      en: "Explore All Repositories on GitHub",
      ru: "Смотреть все репозитории на GitHub",
    },
    keyFeatures: {
      uz: "Asosiy Imkoniyatlar & Funksiyalar",
      en: "Key Features & Architecture",
      ru: "Ключевые возможности и архитектура",
    },
    hrScope: {
      uz: "HR & Recruiter Scope (Asosiy Texnik Xulosa):",
      en: "HR & Recruiter Scope (Key Technical Summary):",
      ru: "HR & Recruiter Scope (Техническое резюме):",
    },
    roleLabel: {
      uz: "Roli:",
      en: "Role:",
      ru: "Роль:",
    },
  },
};

export const projects = [
  {
    id: "tahlilchi-ai",
    number: "01",
    badge: {
      uz: "🔥 Flagship AI Loyihasi",
      en: "🔥 Flagship AI Project",
      ru: "🔥 Флагманский ИИ Проект",
    },
    category: "ai",
    title: {
      uz: "Tahlilchi AI — Milliy Multimodal Sun’iy Intellekt Platformasi",
      en: "Tahlilchi AI — National Multimodal AI Platform",
      ru: "Tahlilchi AI — Национальная мультимодальная ИИ-платформа",
    },
    subtitle: "Google Gemini 2.5 & 3 · Next.js 15 · TypeScript · Vercel",
    role: {
      uz: "Lead AI Muhandis & Full-Stack Dasturchi",
      en: "Lead AI Engineer & Full-Stack Developer",
      ru: "Ведущий ИИ-инженер & Full-Stack разработчик",
    },
    hrHighlights: {
      uz: "Video, audio va PDF materiallardan soniyalar ichida chuqur xulosa, vaqt belgilari (timestamps) hamda to‘liq transkript ajratuvchi milliy multimodal AI platformasi.",
      en: "Multimodal AI platform extracting deep summaries, precise timestamps, and full transcripts from video, audio, and PDF documents within seconds.",
      ru: "Мультимодальная платформа ИИ для мгновенного извлечения аналитических выводов, таймкодов и полных транскриптов из видео, аудио и PDF.",
    },
    description: {
      uz: "Video, audio va PDF materiallardan soniyalar ichida chuqur xulosa, vaqt belgilari (timestamps) hamda to‘liq transkript ajratuvchi zamonaviy multimodal AI platformasi. 7 xil ixtisoslashgan tahlil rejimiga ega (Uchrashuv bayonnomasi, Fakt-chek, Ta'lim & Konspekt, Bolalar xavfsizligi, HR & Intervyu, Notiqlik tahlili, PDF tahlil).",
      en: "Next-gen multimodal AI platform capable of extracting structured summaries, clickable timestamps, and complete Uzbek transcripts from YouTube, audio, and PDF files. Features 7 specialized analysis modes (Meeting Minutes, Fact-checking, Education & Notes, Child Safety, HR & Interview, Public Speaking, and Deep PDF Analysis).",
      ru: "Современная мультимодальная ИИ-платформа для глубокого анализа видео, аудио и PDF. Генерирует таймкоды, транскрипты и поддерживает 7 специализированных режимов (Протокол встречи, Фактчекинг, Обучение, Безопасность детей, HR-анализ, Ораторское мастерство, Анализ PDF).",
    },
    features: {
      uz: [
        "Gemini 2.5 & 3 multimodal modellari integratsiyasi",
        "YouTube va video/audio fayllarni bevosita tahlil qilish",
        "To'liq ravon O'zbekcha transkript va spikerlar diarizatsiyasi",
        "Vaqt belgilari (timestamps) bilan interaktiv AI chat",
        "Ro'yxatdan o'tish va to'lov talab etilmaydi (Bepul API kalit bilan)",
      ],
      en: [
        "Google Gemini 2.5 & 3 multimodal engine integration",
        "Direct analysis of YouTube links and uploaded audio/video files",
        "High-fidelity Uzbek transcription with speaker diarization",
        "Interactive AI chat linked directly to video timestamps",
        "Free and accessible with zero mandatory sign-up walls",
      ],
      ru: [
        "Интеграция передовых мультимодальных моделей Gemini 2.5 & 3",
        "Прямой анализ YouTube ссылок, видео и аудио файлов",
        "Полный узбекский транскрипт с диаризацией спикеров",
        "Интерактивный ИИ-чат с привязкой к временным меткам (timestamps)",
        "Доступно бесплатно без обязательной регистрации",
      ],
    },
    techTags: ["Google Gemini 2.5/3", "Next.js 15", "React 19", "TypeScript", "TailwindCSS", "Audio Transcription", "Multimodal AI"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai",
      demo: "https://tahlilchi-ai-ruddy.vercel.app",
    },
    isFlagship: true,
    stats: {
      uz: "Jonli Production · Vercel",
      en: "Live Production · Vercel",
      ru: "В продакшне · Vercel",
    },
    accent: "from-red-600/30 via-purple-600/20 to-black",
  },
  {
    id: "intra-group",
    number: "02",
    badge: {
      uz: "🎙️ AI Radio & Telegram Mini App",
      en: "🎙️ AI Radio & Telegram Mini App",
      ru: "🎙️ ИИ Радио & Telegram Mini App",
    },
    category: "fullstack",
    title: {
      uz: "INTRA GROUP — AI Radio Platform & Telegram Mini App",
      en: "INTRA GROUP — AI Radio Platform & Telegram Mini App",
      ru: "INTRA GROUP — ИИ Радио & Telegram Mini App",
    },
    subtitle: "FastAPI · React · Telegram Mini App · Icecast · Gemini AI",
    role: {
      uz: "Backend & Telegram Mini App Muhandisi",
      en: "Backend & Telegram Mini App Engineer",
      ru: "Инженер Бэкенда и Telegram Mini App",
    },
    hrHighlights: {
      uz: "Telegram Mini App va veb-platforma orqali ishlovchi jonli AI radio. Gemini AI avtomatik efir olib boradi, tinglovchilar real vaqtda chat qiladi va jonli efirga chiqadi.",
      en: "Live interactive AI radio platform synchronized across Telegram Mini App and web. Gemini AI orchestrates automated radio shows, text-to-speech audio, and live listener interaction.",
      ru: "Онлайн ИИ-радио на базе Telegram Mini App и веба. Gemini AI генерирует эфирный контент, gTTS/Edge TTS озвучивает, пользователи участвуют в живом эфире и чате.",
    },
    description: {
      uz: "Telegram Mini App va mustaqil veb-platforma formatidagi interaktiv AI radio. Google Gemini AI efir matnini yaratadi, gTTS/Edge TTS ovozga aylantiradi va FFmpeg/Icecast orqali real vaqtda jonli efir uzatadi. Tinglovchilar jonli efirda chat qilish, ovozli xabar yuborish va mikrofon orqali efirga chiqish imkoniyatiga ega.",
      en: "Interactive AI radio platform available as a Telegram Mini App and standalone web platform. Google Gemini generates dynamic broadcasting scripts, synthesized via neural TTS, and streamed live through FFmpeg and Icecast. Users can interact in real-time, send voice notes, and participate in live on-air broadcasts.",
      ru: "Интерактивная радиоплатформа в Telegram Mini App и вебе. Gemini AI генерирует эфирный текст, нейросетевой TTS превращает в голос, а FFmpeg/Icecast транслируют онлайн-поток. Слушатели могут общаться в чате, отправлять голосовые и выходить в прямой эфир.",
    },
    features: {
      uz: [
        "AI Radio Host: Gemini AI avtomatik efir matnini yaratadi va olib boradi",
        "Telegram Mini App & Web platforma sinxronizatsiyasi",
        "Real-time audio translyatsiya (Icecast / MediaMTX RTMP)",
        "Jonli chat, ovozli xabarlar va mikrofon orqali efirga chiqish",
        "FastAPI backend va Render server deploy",
      ],
      en: [
        "Automated AI Radio Host driven by Google Gemini generative models",
        "Seamless synchronization between Telegram Mini App & Web client",
        "Real-time low-latency audio streaming (Icecast & MediaMTX RTMP)",
        "Live interactive chat, voice messaging, and microphone on-air participation",
        "FastAPI backend deployed with CI/CD on Render",
      ],
      ru: [
        "ИИ-радиоведущий: Gemini AI автоматически генерирует и ведет эфир",
        "Синхронизация между Telegram Mini App и веб-клиентом",
        "Потоковое вещание аудио в реальном времени (Icecast / MediaMTX RTMP)",
        "Живой чат, голосовые сообщения и подключение микрофона в эфир",
        "Бэкенд на FastAPI развернут на платформе Render",
      ],
    },
    techTags: ["FastAPI", "React", "TypeScript", "Telegram Mini App", "Icecast", "FFmpeg", "Python"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/Intra_group_bot",
      demo: "https://frontend-tau-seven-19.vercel.app",
      backendApi: "https://sphera-backend-edgc.onrender.com",
      telegramBot: "https://t.me/umrzoq_21?start=intra_group_bot",
      botUsername: "@intra_group_bot",
    },
    isFlagship: true,
    stats: {
      uz: "Jonli Platforma · Telegram App",
      en: "Live Platform · Telegram App",
      ru: "Работающий сервис · Telegram App",
    },
    accent: "from-cyan-600/30 via-blue-600/20 to-black",
  },
  {
    id: "telegram-ai-tutor",
    number: "03",
    badge: {
      uz: "🤖 Telegram Mini App & AI Agenti",
      en: "🤖 Telegram Mini App & AI Agent",
      ru: "🤖 Telegram Mini App & ИИ-Агент",
    },
    category: "ai",
    title: {
      uz: "Telegram AI Tutor — Shaxsiy Ta’lim Agenti & Mini App",
      en: "Telegram AI Tutor — Personal Learning Agent & Mini App",
      ru: "Telegram AI Tutor — Персональный ИИ-репетитор & Mini App",
    },
    subtitle: "Python · Telegram Mini App · FastAPI · Gemini AI · RAG",
    role: {
      uz: "AI Agent & Telegram Mini App Dasturchisi",
      en: "AI Agent & Telegram Mini App Developer",
      ru: "Разработчик ИИ-агента и Telegram Mini App",
    },
    hrHighlights: {
      uz: "Dasturlash, Data Science va chet tillarini o‘rganuvchilar uchun moslashuvchan shaxsiy AI repetitor. Telegram Mini App orqali interaktiv testlar va bilim darajasiga moslashuvchi AI suhbat.",
      en: "Adaptive personal learning tutor for programming and Data Science students, operating inside Telegram Bot and Telegram Mini App with personalized learning paths.",
      ru: "Адаптивный персональный репетитор по программированию и Data Science в формате Telegram-бота и Mini App с персональной траекторией обучения.",
    },
    description: {
      uz: "Dasturlash, Data Science va chet tillarini o'rganuvchilar uchun moslashuvchan shaxsiy AI repetitor. Telegram bot va Telegram Mini App ko'rinishida ishlaydi. Foydalanuvchi bilim darajasini test orqali aniqlab, qadamma-qadam shaxsiy ta'lim rejasi tuzadi, kod xatolarini tushuntiradi va interaktiv savol-javob olib boradi.",
      en: "Personalized AI tutor built inside Telegram to empower self-learners in Python, C++, Data Science, and English. Assesses knowledge levels through interactive quizzes, tracks progress in a mobile-optimized Mini App, explains code errors, and leverages RAG for grounded textbook answers.",
      ru: "Персональный ИИ-репетитор в Telegram для изучения Python, C++, Data Science и языков. Определяет уровень с помощью тестов, строит пошаговую программу, анализирует ошибки в коде и применяет RAG для ответов по учебным материалам.",
    },
    features: {
      uz: [
        "Telegram Mini App: Chiroyli mobil interfeys va o'quv progressi nazorati",
        "Shaxsiy ta'lim traektoriyasi (Personalized Adaptive Learning Agent)",
        "Kod tahlili va real vaqtda xatolarni tushuntirib berish",
        "Telegram Bot orqali 24/7 savol-javob va mashg'ulotlar",
        "RAG texnologiyasi: o'quv qo'llanmalari asosida aniq javoblar",
      ],
      en: [
        "Telegram Mini App: Clean mobile UI with real-time learning progress tracking",
        "Adaptive Learning Path customized to individual student skill levels",
        "Code error inspection with instant hints and explanations",
        "24/7 interactive Telegram bot coaching and drills",
        "RAG-powered knowledge retrieval from verified textbooks",
      ],
      ru: [
        "Telegram Mini App: Удобный мобильный интерфейс и трекер прогресса",
        "Индивидуальная адаптивная траектория обучения под уровень знаний",
        "Анализ ошибок в коде с подробными объяснениями в реальном времени",
        "Круглосуточный бот-наставник для практических упражнений",
        "RAG-архитектура для точных ответов на базе проверенных учебников",
      ],
    },
    techTags: ["Python", "Telegram Bot API", "Telegram Mini App", "FastAPI", "Gemini AI", "RAG", "PostgreSQL"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai",
      demo: "https://t.me/umrzoq_21?start=ai_tutor_demo",
      telegramBot: "https://t.me/umrzoq_21?start=ai_tutor",
      botUsername: "@ai_tutor_uzbot",
    },
    isFlagship: true,
    stats: {
      uz: "Telegram Mini App · AI Agenti",
      en: "Telegram Mini App · AI Agent",
      ru: "Telegram Mini App · ИИ Агент",
    },
    accent: "from-amber-600/30 via-orange-600/20 to-black",
  },
  {
    id: "portfolio",
    number: "04",
    badge: {
      uz: "🌐 Full-Stack & 3-Tilli AI Assistent",
      en: "🌐 Full-Stack & 3-Lingual AI Assistant",
      ru: "🌐 Full-Stack & 3-Язычный ИИ-Ассистент",
    },
    category: "fullstack",
    title: {
      uz: "Personal Portfolio Website (my_portfolio2)",
      en: "Personal Portfolio Website (my_portfolio2)",
      ru: "Персональный Портфолио Сайт (my_portfolio2)",
    },
    subtitle: "React 19 · Vite · TailwindCSS · Framer Motion · Multilingual AI",
    role: {
      uz: "Frontend & UI/UX Dasturchi",
      en: "Frontend & UI/UX Developer",
      ru: "Frontend & UI/UX Разработчик",
    },
    hrHighlights: {
      uz: "Video background, 3-tilli (UZ/EN/RU) kontekstli AI yordamchi, to'liq Dark/Light rejim, silliq animatsiyalar va zamonaviy arxitekturaga ega portfolio platformasi.",
      en: "Cinematic video background, 3-lingual context-aware AI assistant, complete Dark/Light themes, silky animations, and modern responsive architecture.",
      ru: "Видео-фон, 3-язычный контекстный ИИ-ассистент, полная поддержка темной и светлой темы, плавные анимации и современный дизайн.",
    },
    description: {
      uz: "Video background, 3-tilli (UZ/EN/RU) aqlli AI assistent, to'liq Dark va Light mavzular, Framer Motion silliq animatsiyalari va responsive arxitekturaga ega bo'lgan zamonaviy shaxsiy portfolio platformasi. HR va texnik mutaxassislar uchun barcha loyihalar va ko'nikmalarni interaktiv namoyish etadi.",
      en: "Modern developer portfolio platform built with React 19, Vite, and TailwindCSS. Features video hero integration, true dark/light mode parity, full trilingual support (UZ/EN/RU), an interactive AI assistant with author avatar, and recruiter-focused project briefs.",
      ru: "Современная платформа-портфолио на React 19, Vite и TailwindCSS. Включает видео-фон, полноценный светлый и темный режимы, поддержку 3 языков (UZ/EN/RU), интерактивного ИИ-бота с реальным фото автора и детальные карточки проектов.",
    },
    features: {
      uz: [
        "3-tilli (UZ/EN/RU) aqlli ChatBot assistent va to'liq sayt tarjimasi",
        "Video fonda ijro va tovushli modal tomosha",
        "Mukammal Dark va Light mavzular almashinuvi",
        "Framer Motion va AOS silliq scroll animatsiyalari",
        "Vercel uzluksiz CI/CD integratsiyasi",
      ],
      en: [
        "Trilingual (UZ/EN/RU) smart AI assistant with instant deep site knowledge",
        "Background video loop with sound-enabled fullscreen Play Reel modal",
        "Complete Dark and Light theme switching without visual clashing",
        "Silky-smooth scroll animations powered by Framer Motion & AOS",
        "Automated CI/CD deployments through Vercel Git integration",
      ],
      ru: [
        "Умный чат-бот ассистент с поддержкой 3 языков (UZ/EN/RU)",
        "Фоновое видео и полноэкранный просмотр видео со звуком",
        "Полноценное переключение между светлой и темной темами",
        "Плавные скролл-анимации на Framer Motion и AOS",
        "Непрерывный деплой через CI/CD на Vercel",
      ],
    },
    techTags: ["React 19", "Vite", "TailwindCSS", "Framer Motion", "AI ChatBot", "i18n"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/my_portfolio2",
      demo: "https://umrzoq-portfolio.vercel.app",
    },
    isFlagship: true,
    stats: {
      uz: "Jonli Production · Vercel",
      en: "Live Production · Vercel",
      ru: "В продакшне · Vercel",
    },
    accent: "from-red-600/30 via-rose-600/20 to-black",
  },
  {
    id: "agychat",
    number: "05",
    badge: {
      uz: "⚡ Dasturchi Asbobi",
      en: "⚡ Developer Tool",
      ru: "⚡ Инструмент разработчика",
    },
    category: "tools",
    title: {
      uz: "AgyChat — Antigravity AI Terminal UI",
      en: "AgyChat — Antigravity AI Terminal UI",
      ru: "AgyChat — Antigravity AI Terminal UI",
    },
    subtitle: "Python · Rich TUI · Multi-Account Management",
    role: {
      uz: "CLI & Backend Dasturchi",
      en: "CLI & Backend Developer",
      ru: "CLI & Backend Разработчик",
    },
    hrHighlights: {
      uz: "Antigravity AI sessiyalari va hisoblarini qulay boshqarish uchun ishlab chiqilgan Terminal User Interface (TUI). Multi-account monitoringi.",
      en: "Terminal User Interface (TUI) designed to seamlessly manage Antigravity AI sessions, quotas, and multiple accounts in terminal.",
      ru: "Терминальный интерфейс (TUI) для комфортного управления сессиями, квотами и несколькими аккаунтами Antigravity AI.",
    },
    description: {
      uz: "Antigravity AI sessiyalari va hisoblarini qulay boshqarish uchun ishlab chiqilgan Terminal User Interface (TUI). Bir nechta akkauntlarni monitoring qilish, jonli kvotalar va limitlarni ko'rib borish, O‘zbek, Rus va Ingliz tillarida to‘liq terminal interfeysi.",
      en: "Rich-based terminal UI for managing AI sessions, switching accounts, and monitoring token quotas directly from Linux/macOS shell.",
      ru: "TUI-интерфейс на базе библиотеки Rich для управления ИИ-сессиями, переключения между аккаунтами и мониторинга квот.",
    },
    features: {
      uz: [
        "Rich kutubxonasi asosidagi zamonaviy Terminal UI",
        "Multi-account AI sessiyalari almashinuvi",
        "Jonli kvotalar va limitlar monitoringi",
        "O'zbek, Rus, Ingliz tillari qo'llab-quvvatlashi",
      ],
      en: [
        "Modern terminal UI built on Python Rich",
        "Multi-account session switching and credential store",
        "Live token quota and model usage metrics",
        "Full support for UZ, EN, and RU languages",
      ],
      ru: [
        "Современный интерфейс в терминале на библиотеке Rich",
        "Переключение между несколькими аккаунтами и сессиями",
        "Мониторинг квот и лимитов в реальном времени",
        "Поддержка узбекского, английского и русского языков",
      ],
    },
    techTags: ["Python", "Terminal UI", "Rich", "AI Session Manager", "CLI Tool"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/agychat",
      demo: null,
    },
    isFlagship: false,
    stats: {
      uz: "GitHub Ochiq Kodli",
      en: "GitHub Open Source",
      ru: "Open Source на GitHub",
    },
    accent: "from-emerald-600/30 via-teal-600/20 to-black",
  },
  {
    id: "ai-radiologist",
    number: "06",
    badge: {
      uz: "🩻 Tibbiy AI & CV",
      en: "🩻 Healthcare AI & CV",
      ru: "🩻 Медицинский ИИ & CV",
    },
    category: "ai",
    title: {
      uz: "AI Radiologist — Chest X-Ray Vision Diagnostic",
      en: "AI Radiologist — Chest X-Ray Vision Diagnostic",
      ru: "AI Radiologist — Диагностика рентгеновских снимков",
    },
    subtitle: "Python · OpenCV · Deep Learning · Computer Vision",
    role: {
      uz: "Computer Vision & ML Muhandisi",
      en: "Computer Vision & ML Engineer",
      ru: "Инженер Computer Vision & ML",
    },
    hrHighlights: {
      uz: "Ko‘krak qafasi rentgen tasvirlarini tahlil qilib, patologiyalarni aniqlovchi kompyuter ko‘rish (Computer Vision) chuqur o‘rganish modeli.",
      en: "Deep Learning computer vision model designed to classify chest X-Ray radiograms and detect anomalies with heatmaps.",
      ru: "Модель глубокого обучения для классификации рентгеновских снимков грудной клетки и выявления патологий.",
    },
    description: {
      uz: "Ko‘krak qafasi rentgen tasvirlarini tahlil qilib, pnevmoniya va boshqa kasallik belgilarini aniqlovchi chuqur o‘rganish modeli. Grad-CAM yordamida model nima uchun shunday xulosa chiqarganini vizual ko'rsatadi.",
      en: "Deep Learning computer vision model designed to analyze chest radiograms for pneumonia and pulmonary anomalies. Features Grad-CAM explainability heatmaps.",
      ru: "Модель глубокого обучения для анализа рентгенограмм легких на предмет пневмонии с визуализацией зон внимания через Grad-CAM.",
    },
    features: {
      uz: [
        "CNN konvolyutsion neyron tarmoqlari arxitekturasi",
        "Grad-CAM vizualizatsiyasi orqali shifokorga tushunarli xulosa",
        "OpenCV orqali tasvirlarni dastlabki qayta ishlash",
        "Scikit-learn va PyTorch integratsiyasi",
      ],
      en: [
        "Convolutional Neural Network (CNN) architecture",
        "Grad-CAM visual heatmap explainability for clinicians",
        "Image preprocessing pipelines built with OpenCV",
        "PyTorch and Scikit-learn evaluation metrics",
      ],
      ru: [
        "Архитектура сверточных нейронных сетей (CNN)",
        "Визуализация тепловых карт Grad-CAM для специалистов",
        "Предобработка медицинских изображений через OpenCV",
        "Оценка качества модели на PyTorch и Scikit-learn",
      ],
    },
    techTags: ["Python", "OpenCV", "Deep Learning", "PyTorch", "Medical AI"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
    stats: {
      uz: "Tadqiqot Loyihasi",
      en: "Research Project",
      ru: "Исследовательский проект",
    },
    accent: "from-blue-600/30 via-indigo-600/20 to-black",
  },
];

export const contentCreation = {
  badge: {
    uz: "AI & Ochiq Kod",
    en: "AI & Open Source",
    ru: "ИИ и Open Source",
  },
  heading: {
    uz: "Haqiqiy Muammolar Uchun Sun’iy Intellekt Yechimlari",
    en: "Building AI Solutions for Real Problems",
    ru: "Создание ИИ-решений для реальных задач",
  },
  description: {
    uz: "Standart loyihalardan tashqari, men ma’lumotlarni tahlil qiluvchi, vazifalarni avtomatlashtiruvchi va aqlli yordamchi bo‘lib xizmat qiluvchi tizimlar quraman.",
    en: "Beyond standard projects, I build AI-driven tools that automate tasks, analyze data, and create intelligent user experiences.",
    ru: "Помимо стандартных проектов, я создаю ИИ-инструменты, автоматизирующие задачи, анализирующие данные и создающие умный опыт.",
  },
  categories: [
    {
      title: { uz: "AI Dasturlar", en: "AI Applications", ru: "ИИ Приложения" },
      description: {
        uz: "Tasvir tahlili, ovozli botlar va multimodal tizimlar yaratish.",
        en: "Building AI-powered apps including image analysis, NLP bots, and computer vision projects.",
        ru: "Создание ИИ-приложений для анализа изображений, NLP-ботов и компьютерного зрения.",
      },
      stats: "5+ AI Projects",
      icon: "🤖",
    },
    {
      title: { uz: "Ma’lumotlar Tahlili", en: "Data Analysis", ru: "Анализ Данных" },
      description: {
        uz: "Katta hajmdagi ma’lumotlarni tozalash, vizualizatsiya va qimmatli biznes xulosalar chiqarish.",
        en: "Exploratory data analysis, visualization, and insight extraction from real-world datasets.",
        ru: "Исследовательский анализ данных, визуализация и извлечение ценных выводов.",
      },
      stats: "10+ Datasets",
      icon: "📊",
    },
    {
      title: { uz: "Xakatonlar", en: "Hackathons", ru: "Хакатоны" },
      description: {
        uz: "Samarqand va Toshkentdagi AI xakatonlarida qatnashib, qisqa vaqtda jamoaviy yechimlar yaratish.",
        en: "Participating in AI hackathons in Samarkand and building solutions under pressure.",
        ru: "Участие в ИИ-хакатонах в Самарканде и оперативное создание прототипов в сжатые сроки.",
      },
      stats: "AI Hackathons",
      icon: "🏆",
    },
    {
      title: { uz: "Ochiq Kod (Open Source)", en: "Open Source", ru: "Открытый Код" },
      description: {
        uz: "Dasturchilar hamjamiyatiga hissa qo‘shish va GitHub'da sifatli kod ulashish.",
        en: "Contributing to open source projects and sharing code on GitHub for the community.",
        ru: "Участие в проектах с открытым исходным кодом и обмен опытом на GitHub.",
      },
      stats: "GitHub Active",
      icon: "🌐",
    },
  ],
};

export const leadershipList = [
  {
    title: {
      uz: "School 21 Uzbekistan",
      en: "School 21 Uzbekistan",
      ru: "School 21 Uzbekistan",
    },
    description: {
      uz: "Tengdosh-tengdoshga (peer-to-peer) intensiv amaliy metodologiya asosida Data Science va kompyuter muhandisligini o‘rganmoqdaman.",
      en: "Currently studying at School 21, a peer-to-peer project-based coding school. Working through intensive programming and data science curriculum.",
      ru: "Обучение в School 21 — практической школе программирования по методологии peer-to-peer по направлению Data Science.",
    },
    role: {
      uz: "Data Science Talabasi",
      en: "Data Science Student",
      ru: "Студент Data Science",
    },
    badge: {
      uz: "Ta’lim",
      en: "Education",
      ru: "Образование",
    },
  },
  {
    title: {
      uz: "AI Hackathon — Samarqand",
      en: "AI Hackathon — Samarkand",
      ru: "AI Hackathon — Самарканд",
    },
    description: {
      uz: "Samarqandda o‘tkazilgan sun’iy intellekt xakatonida kuchli jamoalar bilan raqobatlashib, aqlli dasturiy prototip ishlab chiqqanman.",
      en: "Participated in an AI-focused hackathon in Samarkand, building intelligent solutions and competing with developers across Uzbekistan.",
      ru: "Участие в ИИ-хакатоне в Самарканде, разработка интеллектуальных сервисов в соревновательном режиме.",
    },
    role: {
      uz: "Ishtirokchi & AI Dasturchi",
      en: "Participant & AI Dev",
      ru: "Участник & ИИ-разработчик",
    },
    badge: {
      uz: "Musobaqa",
      en: "Competition",
      ru: "Хакатон",
    },
  },
  {
    title: {
      uz: "Ochiq Kod Hissadori",
      en: "Open Source Contributor",
      ru: "Участник Open Source",
    },
    description: {
      uz: "GitHub platformasida o‘z repozitoriylarimni faol yuritib, sun’iy intellekt va backend yo‘nalishidagi yechimlarimni ochiq ulashaman.",
      en: "Actively maintaining personal repositories on GitHub and sharing AI, CLI, and backend code for the open community.",
      ru: "Активное ведение репозиториев на GitHub с открытыми исходными кодами решений в области ИИ и бэкенда.",
    },
    role: {
      uz: "Dasturchi",
      en: "Developer",
      ru: "Разработчик",
    },
    badge: {
      uz: "Hamjamiyat",
      en: "Open Source",
      ru: "Open Source",
    },
  },
  {
    title: {
      uz: "Mustaqil Izlanuvchi",
      en: "Self-Driven Learner",
      ru: "Самообучение",
    },
    description: {
      uz: "Mashinali o‘rganish, LLM arxitekturalari va bulutli backend texnologiyalarini zamonaviy qo‘llanmalar orqali mustaqil chuqur o‘rganaman.",
      en: "Independently studying Machine Learning and Backend Development through online documentation, papers, and hands-on projects.",
      ru: "Самостоятельное углубленное изучение машинного обучения, LLM и современных бэкенд-технологий.",
    },
    role: {
      uz: "Doimiy Rivojlanuvchi",
      en: "Lifelong Learner",
      ru: "Инженер-исследователь",
    },
    badge: {
      uz: "Rivojlanish",
      en: "Self-Education",
      ru: "Развитие",
    },
  },
];

export const internshipsList = [
  {
    organization: "School 21 Uzbekistan",
    role: {
      uz: "Data Science Yo‘nalishi Talabasi",
      en: "Data Science Student",
      ru: "Студент направления Data Science",
    },
    duration: "2024 — Present",
    skills: ["Data Science", "Machine Learning", "Python", "Peer Learning", "Algorithms"],
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    organization: "AI Hackathon — Samarkand",
    role: {
      uz: "AI Dasturchi (Xakaton Ishtirokchisi)",
      en: "AI Developer (Hackathon Participant)",
      ru: "ИИ-разработчик (Участник хакатона)",
    },
    duration: "2024",
    skills: ["AI Development", "Problem Solving", "Teamwork", "Rapid Prototyping"],
    tech: ["Python", "FastAPI", "Machine Learning"],
  },
  {
    organization: "Mustaqil Loyihalar (Self-Directed)",
    role: {
      uz: "Backend & AI Muhandisi",
      en: "Backend & AI Engineer",
      ru: "Backend & ИИ Инженер",
    },
    duration: "2023 — Present",
    skills: ["Backend Development", "AI Integration", "REST APIs", "Computer Vision"],
    tech: ["FastAPI", "Django", "OpenCV", "Docker", "Gemini AI"],
  },
];

export const softSkillsList = [
  {
    name: { uz: "Muammolarni Yechish", en: "Problem Solving", ru: "Решение проблем" },
    icon: "🧩",
    desc: {
      uz: "Murakkab sun’iy intellekt va muhandislik vazifalarini mantiqiy, toza va modulli bo‘laklarga ajratib hal qilish.",
      en: "Breaking down complex AI and engineering challenges into clean, logical, and modular solutions.",
      ru: "Декомпозиция сложных инженерных и ИИ-задач на логичные, чистые и модульные решения.",
    },
  },
  {
    name: { uz: "Mustaqil O‘rganish", en: "Self-Learning", ru: "Самообучение" },
    icon: "📚",
    desc: {
      uz: "Yangi ML freymvorklari, neyron tarmoq modellari va backend vositalarini tezkor mustaqil o‘zlashtirish.",
      en: "Continuously mastering new ML frameworks, libraries, and backend architectures independently.",
      ru: "Быстрое освоение новых ML-фреймворков, архитектур и инструментов бэкенд-разработки.",
    },
  },
  {
    name: { uz: "Jamoaviy Hamkorlik", en: "Team Collaboration", ru: "Работа в команде" },
    icon: "🤝",
    desc: {
      uz: "School 21 va xakatonlarda tengdoshlar bilan professional muhokama, kod ko‘rigi (code review) va sinergiya.",
      en: "Collaborating with peers on peer-to-peer software engineering projects and competitive hackathons.",
      ru: "Сотрудничество с разработчиками в peer-to-peer проектах и командных хакатонах.",
    },
  },
  {
    name: { uz: "Muloqot Madaniyati", en: "Communication", ru: "Коммуникация" },
    icon: "💬",
    desc: {
      uz: "O‘zbek, Rus va Ingliz tillarida texnik g‘oyalar hamda natijalarni aniq va tushunarli ifodalash.",
      en: "Clear and structured communication in Uzbek, Russian, and developing professional English.",
      ru: "Четкое и структурированное донесение технических мыслей на узбекском, русском и английском языках.",
    },
  },
  {
    name: { uz: "Moslashuvchanlik", en: "Adaptability", ru: "Адаптивность" },
    icon: "🌟",
    desc: {
      uz: "Yangi texnologiyalar, kutubxonalar va o‘zgaruvchan talablarga tezda moslashish qobiliyati.",
      en: "Quick to pick up new tools like OpenCV, MediaPipe, or modern cloud architectures.",
      ru: "Способность оперативно переключаться на новые инструменты, такие как OpenCV, MediaPipe или облачные сервисы.",
    },
  },
  {
    name: { uz: "Kreativlik", en: "Creativity", ru: "Креативность" },
    icon: "🎨",
    desc: {
      uz: "Sun’iy intellekt radio, ovoz sintezi va multimodal chat kabi noodatiy ijodiy loyihalarni amalga oshirish.",
      en: "Building unique AI projects like automated AI radio, smart tutoring, and multimodal vision systems.",
      ru: "Создание нестандартных ИИ-проектов, таких как автономное ИИ-радио, репетиторы и мультимодальные системы.",
    },
  },
  {
    name: { uz: "Matonat va Sabr", en: "Persistence", ru: "Настойчивость" },
    icon: "💪",
    desc: {
      uz: "Qiyin arxitektura va modellar ustida sabr bilan ishlab, yuqori sifatli yakuniy natijaga erishish.",
      en: "Staying relentlessly focused on long-term goals like becoming an elite AI Engineer.",
      ru: "Упорство в решении сложных задач и последовательное движение к цели стать сильным AI Engineer.",
    },
  },
  {
    name: { uz: "Vaqtni Boshqarish", en: "Time Management", ru: "Тайм-менеджмент" },
    icon: "⏰",
    desc: {
      uz: "School 21'dagi intensiv darslar, shaxsiy loyihalar va amaliyotlar o‘rtasida to‘g‘ri muvozanat saqlash.",
      en: "Balancing intensive studies at School 21 with self-directed AI engineering and production projects.",
      ru: "Грамотное совмещение интенсивной учебы в School 21 с разработкой реальных проектов.",
    },
  },
];

export const certificates = {
  badge: {
    uz: "Sertifikatlar",
    en: "Certifications",
    ru: "Сертификаты",
  },
  heading: {
    uz: "Kasbiy Sertifikatlar",
    en: "Certifications",
    ru: "Сертификаты и достижения",
  },
  description: {
    uz: "Texnik bilim va amaliy ko‘nikmalarimni tasdiqlovchi sohaviy sertifikatlar.",
    en: "Industry-recognized certifications that validate my technical expertise.",
    ru: "Сертификаты и курсы, подтверждающие мои технические компетенции.",
  },
  featured: [
    {
      name: { uz: "Python Dasturlash Asoslari", en: "Python Programming", ru: "Программирование на Python" },
      issuer: "School 21",
      icon: "🐍",
    },
    {
      name: { uz: "Mashinali O‘rganish Asoslari", en: "Machine Learning Foundations", ru: "Основы Machine Learning" },
      issuer: "Online Certification",
      icon: "🧠",
    },
    {
      name: { uz: "AI Xakaton Samarqand", en: "AI Hackathon Participant", ru: "Участник AI Hackathon Samarkand" },
      issuer: "Samarkand Hackathon",
      icon: "🏆",
    },
    {
      name: { uz: "FastAPI & Django Backend", en: "FastAPI & Django Backend", ru: "FastAPI & Django Бэкенд" },
      issuer: "Self-Study & Practice",
      icon: "⚡",
    },
    {
      name: { uz: "Pandas bilan Ma’lumotlar Tahlili", en: "Data Analysis with Pandas", ru: "Анализ данных в Pandas" },
      issuer: "Online Certification",
      icon: "📊",
    },
  ],
  viewAllUrl: "https://github.com/umrzoq-backend-ai",
};

export const contactContent = {
  badge: {
    uz: "Muloqot",
    en: "Get In Touch",
    ru: "Связаться",
  },
  heading: {
    uz: "Birgalikda Ajoyib Loyiha Qilamiz",
    en: "Let's Build Something Great",
    ru: "Давайте создадим что-то великое",
  },
  description: {
    uz: "Loyihangiz bormi, hamkorlik qilmoqchimisiz yoki sun’iy intellekt va backend imkoniyatlarini muhokama qilmoqchimisiz? Menga yozing!",
    en: "Have a project in mind, looking to collaborate, or want to discuss machine learning and backend opportunities? Drop a message!",
    ru: "Есть идея проекта, предложение о работе или хотите обсудить машинное обучение и бэкенд? Напишите мне!",
  },
  directLabel: {
    uz: "To‘g‘ridan-to‘g‘ri Aloqa",
    en: "Direct Communication",
    ru: "Прямая связь",
  },
  telegramBtn: {
    uz: "Telegramda Yozish",
    en: "Chat on Telegram",
    ru: "Написать в Telegram",
  },
  form: {
    firstNameLabel: { uz: "Ism *", en: "First Name *", ru: "Имя *" },
    firstNamePlaceholder: { uz: "Ismingizni kiriting", en: "Enter your first name", ru: "Введите ваше имя" },
    lastNameLabel: { uz: "Familiya", en: "Last Name", ru: "Фамилия" },
    lastNamePlaceholder: { uz: "Familiyangiz", en: "Enter your last name", ru: "Ваша фамилия" },
    emailLabel: { uz: "Elektron Pochta *", en: "Email Address *", ru: "Электронная почта *" },
    emailPlaceholder: { uz: "pochta@example.com", en: "email@example.com", ru: "pochta@example.com" },
    messageLabel: { uz: "Xabaringiz *", en: "Your Message *", ru: "Ваше сообщение *" },
    messagePlaceholder: {
      uz: "Loyihangiz, taklifingiz yoki savolingiz haqida yozing...",
      en: "Tell me about your project, idea, or opportunity...",
      ru: "Опишите ваш проект, предложение или вопрос...",
    },
    submitBtn: { uz: "Xabarni Yuborish", en: "Send Message", ru: "Отправить сообщение" },
    sendingBtn: { uz: "Yuborilmoqda...", en: "Sending...", ru: "Отправка..." },
    successMsg: {
      uz: "Rahmat! Xabaringiz muvaffaqiyatli yetkazildi. Tez orada javob qaytaraman.",
      en: "Thank you! Your message was sent successfully. I will get back to you shortly.",
      ru: "Спасибо! Ваше сообщение успешно отправлено. Скоро свяжусь с вами.",
    },
    errorMsg: {
      uz: "Iltimos, barcha majburiy maydonlarni to‘ldiring.",
      en: "Please fill in all required fields.",
      ru: "Пожалуйста, заполните все обязательные поля.",
    },
  },
};

export const footerContent = {
  statusBadge: {
    uz: "Hamkorlik uchun ochiq",
    en: "Available for work",
    ru: "Открыт для предложений",
  },
  subtitle: {
    uz: "Python yordamida yuqori yuklamali sun’iy intellekt va backend platformalari yaratuvchi mutaxassis.",
    en: "Building scalable AI and backend solutions with Python.",
    ru: "Создание масштабируемых ИИ и бэкенд решений на Python.",
  },
  getInTouch: {
    uz: "Menga Yozing",
    en: "Get In Touch",
    ru: "Написать мне",
  },
  exploreGithub: {
    uz: "GitHub Repozitoriylarim",
    en: "Explore My GitHub",
    ru: "Мой GitHub профиль",
  },
  taglines: [
    { uz: "Data Science & Backend Dasturlash", en: "Data Science & Backend Development", ru: "Data Science & Backend Разработка" },
    { uz: "Python · FastAPI · Machine Learning", en: "Python · FastAPI · Machine Learning", ru: "Python · FastAPI · Машинное обучение" },
    { uz: "Sun’iy Intellekt Tizimlari", en: "AI-Powered Applications", ru: "Приложения на основе ИИ" },
  ],
  credential: {
    uz: "School 21 Uzbekistan · Data Science Talabasi",
    en: "School 21 Uzbekistan · Data Science Student",
    ru: "School 21 Uzbekistan · Студент Data Science",
  },
  copyright: {
    uz: `© ${new Date().getFullYear()} Umrzoq Yulchiyev | React & Vite bilan yaratilgan`,
    en: `© ${new Date().getFullYear()} Umrzoq Yulchiyev | Built with React & Vite`,
    ru: `© ${new Date().getFullYear()} Умрзок Юлчиев | Создано на React & Vite`,
  },
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

// ============================================================
// Chatbot Data (Multilingual UZ / EN / RU)
// ============================================================
export const chatbotConfig = {
  uz: {
    greeting: "Assalomu alaykum! Men Umrzoq Yulchiyevning sun’iy intellekt assistentiman 🤖\n\nLoyihalarim, AI tizimlari, texnologiyalar yoki ish takliflari haqida bemalol so‘rashingiz mumkin!",
    placeholder: "Savolingizni yozing...",
    suggestions: [
      "🧠 Tahlilchi AI",
      "🎙️ INTRA GROUP",
      "🤖 Telegram AI Tutor",
      "💼 HR & Ishga taklif",
      "🚀 Barcha Loyihalar",
      "📄 Resume / CV",
      "📞 Bog‘lanish",
    ],
  },
  en: {
    greeting: "Hello! I am Umrzoq Yulchiyev's AI Assistant 🤖\n\nFeel free to ask me about his flagship AI projects, tech stack, experience, or job opportunities!",
    placeholder: "Ask anything about Umrzoq...",
    suggestions: [
      "🧠 Tahlilchi AI",
      "🎙️ INTRA GROUP Radio",
      "🤖 Telegram AI Tutor",
      "💼 HR & Hiring Scope",
      "🚀 All Projects",
      "📄 Download Resume",
      "📞 Contact Details",
    ],
  },
  ru: {
    greeting: "Здравствуйте! Я виртуальный ИИ-ассистент Умрзока Юлчиева 🤖\n\nС удовольствием расскажу о его проектах, стеке технологий, опыте и возможностях сотрудничества!",
    placeholder: "Задайте любой вопрос...",
    suggestions: [
      "🧠 Tahlilchi AI",
      "🎙️ INTRA GROUP Радио",
      "🤖 Telegram AI Tutor",
      "💼 Для HR и рекрутеров",
      "🚀 Все проекты",
      "📄 Резюме / CV",
      "📞 Контакты",
    ],
  },
};

export const chatbotFaqs = [
  // ── TAHLILCHI AI ──
  {
    keywords: ["tahlilchi", "tahlilchi-ai", "tahlilchi ai", "multimodal", "video tahlil", "audio tahlil", "pdf tahlil", "gemini 2.5", "transkript", "transcription"],
    answer: {
      uz: "🧠 Tahlilchi AI — Milliy Multimodal Sun’iy Intellekt Platformasi:\n\n• Video, audio (YouTube, MP4, MP3) va PDF hujjatlardan soniyalar ichida xulosa va to‘liq transkript ajratadi.\n• Google Gemini 2.5 va 3 multimodal modellari asosida ishlaydi.\n• 7 xil ixtisoslashgan rejim (Uchrashuv, Fakt-chek, Ta'lim & Test, Bolalar xavfsizligi, HR bahosi va b.).\n• Ravon O‘zbekcha transkript & vaqt belgilari (timestamps) bilan video-chat.\n\n🌐 Jonli Sayt: https://tahlilchi-ai-ruddy.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai",
      en: "🧠 Tahlilchi AI — National Multimodal AI Platform:\n\n• Extracts structured summaries, clickable timestamps, and complete Uzbek transcripts from YouTube, audio, and PDF files in seconds.\n• Powered by Google Gemini 2.5 & 3 multimodal models.\n• 7 specialized analysis modes (Meeting Minutes, Fact-checking, Education & Notes, HR Assessment, etc.).\n• Interactive AI video chat linked to timestamps.\n\n🌐 Live Demo: https://tahlilchi-ai-ruddy.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai",
      ru: "🧠 Tahlilchi AI — Мультимодальная платформа искусственного интеллекта:\n\n• Мгновенный глубокий анализ видео, аудио (YouTube, MP4, MP3) и PDF с таймкодами и транскриптом.\n• Работает на базе моделей Google Gemini 2.5 и 3.\n• 7 специализированных режимов анализа (Протоколы встреч, Фактчекинг, Обучение, HR-оценка и др.).\n• Интерактивный чат с привязкой к таймкодам.\n\n🌐 Живой сайт: https://tahlilchi-ai-ruddy.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai",
    },
    actions: {
      uz: [
        { text: "🚀 Tahlilchi AI Saytini Ochish", url: "https://tahlilchi-ai-ruddy.vercel.app" },
        { text: "🐙 GitHub Kodi", url: "https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai" },
      ],
      en: [
        { text: "🚀 Open Tahlilchi AI", url: "https://tahlilchi-ai-ruddy.vercel.app" },
        { text: "🐙 GitHub Repository", url: "https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai" },
      ],
      ru: [
        { text: "🚀 Открыть Tahlilchi AI", url: "https://tahlilchi-ai-ruddy.vercel.app" },
        { text: "🐙 Исходный код на GitHub", url: "https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai" },
      ],
    },
  },

  // ── INTRA GROUP (AI RADIO) ──
  {
    keywords: ["intra", "intra group", "intra_group_bot", "radio", "ai radio", "audio streaming", "icecast", "sfera", "радио"],
    answer: {
      uz: "🎙️ INTRA GROUP — AI Radio & Telegram Mini App Platformasi:\n\n• Telegram Mini App va veb-platformada ishlovchi jonli interaktiv AI radio.\n• Google Gemini AI avtomatik efir matnini yaratadi va real vaqtda ovozlashtirib efirga uzatadi.\n• Icecast va MediaMTX orqali audio oqimi, jonli chat va mikrofon orqali efirga chiqish.\n• FastAPI backend va Telegram Bot integratsiyasi.\n\n🌐 Jonli Platforma: https://frontend-tau-seven-19.vercel.app\n📱 Telegram Bot: @intra_group_bot\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Intra_group_bot",
      en: "🎙️ INTRA GROUP — AI Radio & Telegram Mini App Platform:\n\n• Live interactive AI radio operating simultaneously as a Telegram Mini App and web platform.\n• Google Gemini autonomously generates broadcast programs, voiced in real-time via neural TTS.\n• Live audio streaming via Icecast & MediaMTX, interactive listener chat, and on-air microphone support.\n• FastAPI backend deployed on Render.\n\n🌐 Live Platform: https://frontend-tau-seven-19.vercel.app\n📱 Telegram Bot: @intra_group_bot\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Intra_group_bot",
      ru: "🎙️ INTRA GROUP — Платформа ИИ-радио и Telegram Mini App:\n\n• Интерактивное радио на базе искусственного интеллекта в Telegram Mini App и вебе.\n• Gemini AI генерирует сценарий эфира, нейросетевой TTS озвучивает в реальном времени.\n• Потоковое аудио через Icecast и MediaMTX, живой чат слушателей и выход в прямой эфир.\n• Бэкенд на FastAPI.\n\n🌐 Платформа: https://frontend-tau-seven-19.vercel.app\n📱 Telegram бот: @intra_group_bot\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Intra_group_bot",
    },
    actions: {
      uz: [
        { text: "🎙️ Jonli Radio Platforma", url: "https://frontend-tau-seven-19.vercel.app" },
        { text: "📱 Telegram Bot: @intra_group_bot", url: "https://t.me/umrzoq_21?start=intra_group_bot" },
        { text: "🐙 GitHub Kodi", url: "https://github.com/Umrzoq-backend-ai/Intra_group_bot" },
      ],
      en: [
        { text: "🎙️ Live Radio Platform", url: "https://frontend-tau-seven-19.vercel.app" },
        { text: "📱 Telegram Bot: @intra_group_bot", url: "https://t.me/umrzoq_21?start=intra_group_bot" },
        { text: "🐙 GitHub Code", url: "https://github.com/Umrzoq-backend-ai/Intra_group_bot" },
      ],
      ru: [
        { text: "🎙️ Открыть ИИ-радио", url: "https://frontend-tau-seven-19.vercel.app" },
        { text: "📱 Telegram бот: @intra_group_bot", url: "https://t.me/umrzoq_21?start=intra_group_bot" },
        { text: "🐙 Исходный код на GitHub", url: "https://github.com/Umrzoq-backend-ai/Intra_group_bot" },
      ],
    },
  },

  // ── TELEGRAM AI TUTOR ──
  {
    keywords: ["tutor", "ai tutor", "telegram tutor", "telegram-ai-tutor", "repetitor", "dars", "learning agent", "o'qituvchi", "репетитор"],
    answer: {
      uz: "🤖 Telegram AI Tutor — Shaxsiy Ta’lim Agenti & Telegram Mini App:\n\n• Dasturlash (Python, C++), Data Science va ingliz tilini o‘rgatuvchi moslashuvchan AI repetitor.\n• Telegram Mini App orqali foydalanuvchining bilim darajasini test orqali aniqlaydi va shaxsiy o‘quv rejasini tuzadi.\n• Kod xatolarini tushuntirish va RAG texnologiyasi bilan aniq darsliklar asosida javob berish.\n\n📱 Bot: @ai_tutor_uzbot",
      en: "🤖 Telegram AI Tutor — Personal Learning Agent & Telegram Mini App:\n\n• Adaptive AI tutor teaching Python, C++, Data Science, and English.\n• Identifies skill gaps via interactive quizzes in Telegram Mini App and creates tailored learning roadmaps.\n• Real-time code error analysis and RAG-grounded responses from verified study materials.\n\n📱 Bot: @ai_tutor_uzbot",
      ru: "🤖 Telegram AI Tutor — Персональный ИИ-репетитор в Telegram:\n\n• Адаптивный ИИ-тьютор для изучения Python, C++, Data Science и языков.\n• Определяет уровень знаний с помощью тестов в Mini App и строит индивидуальную программу обучения.\n• Разбор ошибок в коде и RAG-ответы по проверенным учебникам.\n\n📱 Бот: @ai_tutor_uzbot",
    },
    actions: {
      uz: [
        { text: "🤖 Telegram Botni Ochish", url: "https://t.me/umrzoq_21?start=ai_tutor" },
        { text: "💬 Muallif bilan bog'lanish", url: "https://t.me/umrzoq_21" },
      ],
      en: [
        { text: "🤖 Launch Telegram Bot", url: "https://t.me/umrzoq_21?start=ai_tutor" },
        { text: "💬 Contact Author", url: "https://t.me/umrzoq_21" },
      ],
      ru: [
        { text: "🤖 Открыть Telegram бота", url: "https://t.me/umrzoq_21?start=ai_tutor" },
        { text: "💬 Связаться с автором", url: "https://t.me/umrzoq_21" },
      ],
    },
  },

  // ── MY_PORTFOLIO ──
  {
    keywords: ["portfolio", "my_portfolio", "my_portfolio2", "sayt", "vebsayt", "assistent sayti", "сайт"],
    answer: {
      uz: "🌐 my_portfolio2 — Umrzoq Yulchiyevning Rasmiy Portfolio Veb-sayti:\n\n• React 19, Vite, TailwindCSS va Framer Motion asosida qurilgan zamonaviy platforma.\n• Video background ijrosi, to'liq Dark/Light mavzular, 3-tilli (UZ/EN/RU) tizim.\n• Muallif surati bilan boyitilgan AI assistent va to'liq loyihalar katalogi.\n\n🌐 Jonli Havola: https://umrzoq-portfolio.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/my_portfolio2",
      en: "🌐 my_portfolio2 — Umrzoq Yulchiyev's Official Portfolio Platform:\n\n• Built with React 19, Vite, TailwindCSS, and Framer Motion.\n• Video hero background, full Dark/Light themes, trilingual support (UZ/EN/RU).\n• Personalized AI Assistant with author's avatar and detailed project showcases.\n\n🌐 Live: https://umrzoq-portfolio.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/my_portfolio2",
      ru: "🌐 my_portfolio2 — Официальный сайт-портфолио Умрзока Юлчиева:\n\n• Создан на React 19, Vite, TailwindCSS и Framer Motion.\n• Фоновое видео, полноценная поддержка темной и светлой тем, 3 языка (UZ/EN/RU).\n• ИИ-ассистент с фото автора и интерактивный каталог проектов.\n\n🌐 Сайт: https://umrzoq-portfolio.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/my_portfolio2",
    },
    actions: {
      uz: [
        { text: "🌐 Jonli Portfolioni Ochish", url: "https://umrzoq-portfolio.vercel.app" },
        { text: "🐙 GitHub Manba Kodi", url: "https://github.com/Umrzoq-backend-ai/my_portfolio2" },
      ],
      en: [
        { text: "🌐 Open Portfolio", url: "https://umrzoq-portfolio.vercel.app" },
        { text: "🐙 GitHub Source Code", url: "https://github.com/Umrzoq-backend-ai/my_portfolio2" },
      ],
      ru: [
        { text: "🌐 Открыть портфолио", url: "https://umrzoq-portfolio.vercel.app" },
        { text: "🐙 Исходный код на GitHub", url: "https://github.com/Umrzoq-backend-ai/my_portfolio2" },
      ],
    },
  },

  // ── HR / HIRING / RECRUITER ──
  {
    keywords: ["hr", "recruiter", "hiring", "rekruter", "vakansiya", "ishga olish", "intervyu", "suhbat", "ish taklif", "ish taklifi", "hamkorlik", "interview", "job offer", "вакансия", "собеседование", "найм", "резюме hr"],
    answer: {
      uz: "💼 HR va Texnik Rekruterlar uchun ma'lumot:\n\n• Mutaxassislik: Junior Data Scientist & Backend Developer (AI Engineer maqsadida)\n• Ta'lim: School 21 Uzbekistan (Data Science yo'nalishi)\n• Asosiy Stack: Python (FastAPI, Django), Google Gemini API, Scikit-learn, OpenCV, React, SQL, Docker, Linux\n• Ish formati: Full-time / Part-time / Remote / Ofis (Toshkent / Jizzax)\n• Asosiy ishlar: Tahlilchi AI (multimodal platforma), INTRA GROUP (AI radio), Telegram AI Tutor\n\n📄 Rezyumeni sahifadan yuklab olishingiz yoki to'g'ridan-to'g'ri bog'lanishingiz mumkin:",
      en: "💼 Summary for HR and Technical Recruiters:\n\n• Target Role: Junior Data Scientist & Backend Developer (Aspiring AI Engineer)\n• Education: School 21 Uzbekistan (Data Science curriculum)\n• Core Stack: Python (FastAPI, Django), Google Gemini API, Scikit-learn, OpenCV, React, SQL, Docker, Linux\n• Availability: Full-time / Part-time / Remote / Hybrid (Tashkent / Jizzakh)\n• Flagship Work: Tahlilchi AI (Multimodal), INTRA GROUP (AI Radio), Telegram AI Tutor\n\n📄 Download CV or get in touch directly:",
      ru: "💼 Информация для HR и технических рекрутеров:\n\n• Направление: Junior Data Scientist & Backend Developer (с целью стать AI Engineer)\n• Обучение: School 21 Uzbekistan (Data Science)\n• Основной стек: Python (FastAPI, Django), Google Gemini API, Scikit-learn, OpenCV, React, SQL, Docker, Linux\n• Формат работы: Full-time / Part-time / Удаленно / Офис (Ташкент / Джизак)\n• Ключевые проекты: Tahlilchi AI, INTRA GROUP, Telegram AI Tutor\n\n📄 Вы можете скачать резюме или написать напрямую:",
    },
    actions: {
      uz: [
        { text: "📄 Resume (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" },
        { text: "📱 Telegram: @umrzoq_21", url: "https://t.me/umrzoq_21" },
        { text: "💼 LinkedIn Profil", url: "https://linkedin.com/in/umrzoqyulchiyevcode" },
      ],
      en: [
        { text: "📄 Resume (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" },
        { text: "📱 Telegram: @umrzoq_21", url: "https://t.me/umrzoq_21" },
        { text: "💼 LinkedIn Profile", url: "https://linkedin.com/in/umrzoqyulchiyevcode" },
      ],
      ru: [
        { text: "📄 Резюме (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" },
        { text: "📱 Telegram: @umrzoq_21", url: "https://t.me/umrzoq_21" },
        { text: "💼 Профиль LinkedIn", url: "https://linkedin.com/in/umrzoqyulchiyevcode" },
      ],
    },
  },

  // ── RESUME / CV ──
  {
    keywords: ["resume", "rezyume", "cv", "yuklab", "hujjat", "резюме", "скачать"],
    answer: {
      uz: "📄 Umrzoq Yulchiyevning Rasmiy Rezyumesi (CV):\n\nRezyumeda barcha ish tajribasi, School 21 loyihalari, texnologiyalar darajasi va sertifikatlar jamlangan.",
      en: "📄 Umrzoq Yulchiyev's Official Resume (CV):\n\nIncludes complete technical background, School 21 milestones, project highlights, and verified skills.",
      ru: "📄 Официальное резюме (CV) Умрзока Юлчиева:\n\nСодержит информацию об опыте, проектах в School 21, технологическом стеке и сертификатах.",
    },
    actions: {
      uz: [{ text: "⬇️ Resumeni Yuklab Olish (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" }],
      en: [{ text: "⬇️ Download Resume (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" }],
      ru: [{ text: "⬇️ Скачать резюме (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" }],
    },
  },

  // ── CONTACT ──
  {
    keywords: ["bog'lanish", "aloqa", "murojaat", "email", "telefon", "telegram", "linkedin", "contact", "reach", "контакт", "связь", "написать"],
    answer: {
      uz: "Menga to‘g‘ridan-to‘g‘ri aloqa kanallari:\n\n📱 Telegram: @umrzoq_21 (Eng tezkor javob)\n📧 Email: school21dev@gmail.com\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode\n🐙 GitHub: github.com/Umrzoq-backend-ai\n📞 Tel: +998 91 593 30 18",
      en: "Direct contact channels:\n\n📱 Telegram: @umrzoq_21 (Fastest response)\n📧 Email: school21dev@gmail.com\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode\n🐙 GitHub: github.com/Umrzoq-backend-ai\n📞 Phone: +998 91 593 30 18",
      ru: "Прямые контакты для связи:\n\n📱 Telegram: @umrzoq_21 (Быстрый ответ)\n📧 Email: school21dev@gmail.com\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode\n🐙 GitHub: github.com/Umrzoq-backend-ai\n📞 Телефон: +998 91 593 30 18",
    },
    actions: {
      uz: [
        { text: "💬 Telegramda Yozish", url: "https://t.me/umrzoq_21" },
        { text: "✉️ Email Yuborish", url: "mailto:school21dev@gmail.com" },
      ],
      en: [
        { text: "💬 Message on Telegram", url: "https://t.me/umrzoq_21" },
        { text: "✉️ Send an Email", url: "mailto:school21dev@gmail.com" },
      ],
      ru: [
        { text: "💬 Написать в Telegram", url: "https://t.me/umrzoq_21" },
        { text: "✉️ Отправить Email", url: "mailto:school21dev@gmail.com" },
      ],
    },
  },
];
