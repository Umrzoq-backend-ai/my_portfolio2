// ============================================================
// portfolioData.js — Centralized configuration for Umrzoq Yulchiyev's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Umrzoq Yulchiyev",
  firstName: "Umrzoq",
  brandName: "Umrzoq Yulchiyev",
  title: "Junior Data Scientist & Backend Developer",
  location: "Zomin, Jizzakh, Uzbekistan",
  phone: "+998 91 593 30 18",
  emails: {
    primary: "school21dev@gmail.com",
    secondary: "school21dev@gmail.com",
  },
  summary:
    "Junior Data Scientist and Backend Developer from Uzbekistan, currently studying at School 21 Uzbekistan. Building AI-powered applications, machine learning models, and backend systems using Python.",
  resumeUrl: "/Umrzoq_Yulchiyev_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/umrzoq-backend-ai",
  linkedin: "https://linkedin.com/in/umrzoqyulchiyevcode",
  telegram: "https://t.me/umrzoq_21",
};

export const heroContent = {
  greeting: "Hi, I'm Umrzoq",
  titleHighlight: "Data Scientist & Backend Developer",
  subtitle:
    "I build AI-powered applications, machine learning models, and backend systems using Python, FastAPI, and Django.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:school21dev@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Umrzoq,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Umrzoq_Yulchiyev_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Umrzoq Yulchiyev</span>, a Junior Data Scientist and Backend Developer from Uzbekistan, currently studying at School 21 Uzbekistan. I enjoy building AI-powered applications, machine learning models, and backend systems using Python. I have participated in AI hackathons and continuously improve my skills through real-world projects. My goal is to become an AI Engineer and create intelligent solutions that solve real-life problems.`,
  techStack: ["Python", "FastAPI", "Machine Learning"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world AI solutions",
  description:
    "I follow a structured, data-driven, and technical approach to turn ideas into robust AI and backend applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, data requirements, and technical constraints to lay a solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, data pipelines, and intuitive interfaces that guarantee an engaging user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable ML models and robust backend APIs using Python, FastAPI, Django, and modern data science tools.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to production environments.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 88 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 82 },
        { name: "JavaScript (Basic)", level: 50 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Django", level: 80 },
        { name: "REST API", level: 87 },
      ],
    },
    {
      title: "Data Science & AI",
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
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 78 },
        { name: "SQLite", level: 82 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Linux (Ubuntu)", level: 80 },
        { name: "Jupyter Notebook", level: 87 },
        { name: "VS Code", level: 90 },
        { name: "CLion", level: 72 },
      ],
    },
    {
      title: "Computer Science Concepts",
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

export const contentCreation = {
  badge: "AI & Open Source",
  heading: "Building AI Solutions for Real Problems",
  description:
    "Beyond standard projects, I build AI-driven tools that automate tasks, analyze data, and create intelligent user experiences.",
  categories: [
    {
      title: "AI Applications",
      description: "Building AI-powered apps including image analysis, NLP bots, and computer vision projects.",
      stats: "5+ AI Projects",
      icon: "🤖",
    },
    {
      title: "Data Analysis",
      description: "Exploratory data analysis, visualization, and insight extraction from real-world datasets.",
      stats: "10+ Datasets",
      icon: "📊",
    },
    {
      title: "Hackathons",
      description: "Participating in AI hackathons in Samarkand and building solutions under pressure.",
      stats: "AI Hackathons",
      icon: "🏆",
    },
    {
      title: "Open Source",
      description: "Contributing to open source projects and sharing code on GitHub for the community.",
      stats: "GitHub Active",
      icon: "🌐",
    },
  ],
};

export const leadershipList = [
  {
    title: "School 21 Uzbekistan",
    description: "Currently studying at School 21, a peer-to-peer project-based coding school. Working through intensive programming and data science curriculum.",
    role: "Data Science Student",
    badge: "Education",
  },
  {
    title: "AI Hackathon — Samarkand",
    description: "Participated in AI-focused hackathon in Samarkand, building intelligent solutions and competing with other developers across Uzbekistan.",
    role: "Participant",
    badge: "Competition",
  },
  {
    title: "Open Source Contributor",
    description: "Actively contributing to open source projects and maintaining personal repositories on GitHub with AI and backend projects.",
    role: "Developer",
    badge: "Open Source",
  },
  {
    title: "Self-Driven Learner",
    description: "Independently studying Machine Learning and Backend Development through online courses, books, and hands-on projects.",
    role: "Independent Learner",
    badge: "Self-Education",
  },
];

export const internshipsList = [
  {
    organization: "School 21 Uzbekistan",
    role: "Data Science Student",
    duration: "2024 — Present",
    skills: ["Data Science", "Machine Learning", "Python", "Peer Learning"],
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    organization: "AI Hackathon — Samarkand",
    role: "AI Developer (Participant)",
    duration: "2024",
    skills: ["AI Development", "Problem Solving", "Teamwork", "Rapid Prototyping"],
    tech: ["Python", "FastAPI", "Machine Learning"],
  },
  {
    organization: "Self-Directed Projects",
    role: "Backend & AI Developer",
    duration: "2023 — Present",
    skills: ["Backend Development", "AI Integration", "REST APIs", "Computer Vision"],
    tech: ["Django", "FastAPI", "OpenCV", "MediaPipe"],
  },
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex AI and engineering tasks into clean, logical, and modular solutions." },
  { name: "Self-Learning", icon: "📚", desc: "Continuously learning new ML frameworks, libraries, and backend tools independently." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working with peers at School 21 on peer-to-peer projects and hackathons." },
  { name: "Communication", icon: "💬", desc: "Clear and structured communication in Uzbek, Russian, and developing English skills." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new tools like OpenCV, MediaPipe, or new Python libraries." },
  { name: "Creativity", icon: "🎨", desc: "Building unique AI projects like AI dubbing and virtual mouse with creative approaches." },
  { name: "Persistence", icon: "💪", desc: "Staying focused on long-term goals like becoming an AI Engineer despite challenges." },
  { name: "Time Management", icon: "⏰", desc: "Balancing studies at School 21 with self-directed AI and backend projects." },
];

export const projects = [
  {
    id: "tahlilchi-ai",
    number: "01",
    badge: "🔥 Flagship AI Project",
    category: "ai",
    title: "Tahlilchi AI — Milliy Multimodal Sun’iy Intellekt Platformasi",
    subtitle: "Google Gemini 2.5 & 3 · Next.js 15 · TypeScript",
    role: "Lead AI Engineer & Full-Stack Developer",
    hrHighlights: "Video, audio va PDF materiallardan soniyalar ichida chuqur xulosa, vaqt belgilari (timestamps) hamda to‘liq transkript ajratuvchi multimodal AI platformasi.",
    description:
      "Video, audio va PDF materiallardan soniyalar ichida chuqur xulosa, vaqt belgilari (timestamps) hamda to‘liq transkript ajratuvchi zamonaviy multimodal AI platformasi. 7 xil ixtisoslashgan tahlil rejimiga ega (Uchrashuv bayonnomasi, Fakt-chek, Ta'lim & Konspekt, Bolalar xavfsizligi, HR & Intervyu, Notiqlik tahlili, PDF tahlil).",
    features: [
      "Gemini 2.5 & 3 multimodal modellari integratsiyasi",
      "YouTube va video/audio fayllarni bevosita tahlil qilish",
      "To'liq ravon O'zbekcha transkript va spikerlar diarizatsiyasi",
      "Vaqt belgilari (timestamps) bilan interaktiv AI chat",
      "Ro'yxatdan o'tish va to'lov talab etilmaydi (Bepul API kalit bilan)"
    ],
    techTags: ["Google Gemini 2.5/3", "Next.js 15", "React 19", "TypeScript", "TailwindCSS", "Audio Transcription", "Multimodal AI"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai",
      demo: "https://tahlilchi-ai-ruddy.vercel.app",
    },
    isFlagship: true,
    stats: "Live Production · Vercel",
    accent: "from-red-600/30 via-purple-600/20 to-black",
  },
  {
    id: "intra-group",
    number: "02",
    badge: "🎙️ AI Radio & Telegram Mini App",
    category: "fullstack",
    title: "INTRA GROUP — AI Radio Platform & Telegram Mini App",
    subtitle: "FastAPI · React · Telegram Mini App · Icecast · Gemini AI",
    role: "Backend & Telegram Mini App Engineer",
    hrHighlights: "Telegram Mini App va veb-platforma orqali ishlovchi jonli AI radio. Gemini AI avtomatik efir olib boradi, foydalanuvchilar real vaqtda chat qiladi va jonli efirga ulanadi.",
    description:
      "Telegram Mini App va mustaqil veb-platforma formatidagi interaktiv AI radio. Google Gemini AI efir matnini yaratadi, gTTS/Edge TTS ovozga aylantiradi va FFmpeg/Icecast orqali real vaqtda jonli efir uzatadi. Tinglovchilar jonli efirda chat qilish, ovozli xabar yuborish va mikrofon orqali efirga chiqish imkoniyatiga ega.",
    features: [
      "AI Radio Host: Gemini AI avtomatik efir matnini yaratadi va olib boradi",
      "Telegram Mini App & Web platforma sinxronizatsiyasi",
      "Real-time audio translyatsiya (Icecast / MediaMTX RTMP)",
      "Jonli chat, ovozli xabarlar va mikrofon orqali efirga chiqish",
      "FastAPI backend va Render server deploy"
    ],
    techTags: ["FastAPI", "React", "TypeScript", "Telegram Mini App", "Icecast", "FFmpeg", "Python"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/Intra_group_bot",
      demo: "https://frontend-tau-seven-19.vercel.app",
      backendApi: "https://sphera-backend-edgc.onrender.com",
      telegramBot: "https://t.me/umrzoq_21?start=intra_group_bot",
      botUsername: "@intra_group_bot",
    },
    isFlagship: true,
    stats: "Live Platform · Telegram App",
    accent: "from-cyan-600/30 via-blue-600/20 to-black",
  },
  {
    id: "telegram-ai-tutor",
    number: "03",
    badge: "🤖 Telegram Mini App & AI Agent",
    category: "ai",
    title: "Telegram AI Tutor — Personal Learning Agent & Mini App",
    subtitle: "Python · Telegram Mini App · FastAPI · Gemini AI · RAG",
    role: "AI Agent & Telegram Mini App Developer",
    hrHighlights: "Dasturlash, Data Science va chet tillarini o'rganuvchilar uchun moslashuvchan shaxsiy AI repetitor. Telegram Mini App orqali interaktiv testlar, bilim darajasiga moslashuvchi AI suhbat.",
    description:
      "Dasturlash, Data Science va chet tillarini o'rganuvchilar uchun moslashuvchan shaxsiy AI repetitor. Telegram bot va Telegram Mini App ko'rinishida ishlaydi. Foydalanuvchi bilim darajasini test orqali aniqlab, qadamma-qadam shaxsiy ta'lim rejasi tuzadi, kod xatolarini tushuntiradi va interaktiv savol-javob olib boradi.",
    features: [
      "Telegram Mini App: Chiroyli mobil interfeys va o'quv progressi nazorati",
      "Shaxsiy ta'lim traektoriyasi (Personalized Adaptive Learning Agent)",
      "Kod tahlili va real vaqtda xatolarni tushuntirib berish",
      "Telegram Bot orqali 24/7 savol-javob va mashg'ulotlar",
      "RAG texnologiyasi: o'quv qo'llanmalari asosida aniq javoblar"
    ],
    techTags: ["Python", "Telegram Bot API", "Telegram Mini App", "FastAPI", "Gemini AI", "RAG", "PostgreSQL"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai",
      demo: "https://t.me/umrzoq_21?start=ai_tutor_demo",
      telegramBot: "https://t.me/umrzoq_21?start=ai_tutor",
      botUsername: "@ai_tutor_uzbot",
    },
    isFlagship: true,
    stats: "Telegram Mini App · AI Agent",
    accent: "from-amber-600/30 via-orange-600/20 to-black",
  },
  {
    id: "portfolio",
    number: "04",
    badge: "🌐 Full-Stack & AI Assistant",
    category: "fullstack",
    title: "Personal Portfolio Website (my_portfolio2)",
    subtitle: "React 19 · Vite · TailwindCSS · Framer Motion · AI Chatbot",
    role: "Frontend & UI/UX Developer",
    hrHighlights: "Video background, 3-tilli kontekstli AI yordamchi, Dark/Light rejim, silliq animatsiyalar va zamonaviy arxitekturaga ega portfolio platformasi.",
    description:
      "Video background, 3-tilli (UZ/EN/RU) aqlli AI assistent, Dark/Light rejim, Framer Motion silliq animatsiyalari va responsive arxitekturaga ega bo'lgan zamonaviy shaxsiy portfolio platformasi. HR va texnik mutaxassislar uchun barcha loyihalar va ko'nikmalarni interaktiv namoyish etadi.",
    features: [
      "3-tilli (UZ/EN/RU) aqlli ChatBot assistent",
      "Video fonda ijro va tovushli modal tomosha",
      "Dark va Light mavzular almashinuvi",
      "Framer Motion va AOS silliq scroll animatsiyalari"
    ],
    techTags: ["React 19", "Vite", "TailwindCSS", "Framer Motion", "AI ChatBot"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/my_portfolio2",
      demo: "https://umrzoq-portfolio.vercel.app",
    },
    isFlagship: true,
    stats: "Live Production · Vercel",
    accent: "from-red-600/30 via-rose-600/20 to-black",
  },
  {
    id: "agychat",
    number: "05",
    badge: "⚡ Developer Tool",
    category: "tools",
    title: "AgyChat — Antigravity AI Terminal UI",
    subtitle: "Python · Rich TUI · Multi-Account Management",
    role: "CLI & Backend Developer",
    hrHighlights: "Antigravity AI sessiyalari va hisoblarini qulay boshqarish uchun ishlab chiqilgan Terminal User Interface (TUI). Multi-account monitoringi va O'zbekcha interfeys.",
    description:
      "Antigravity AI sessiyalari va hisoblarini qulay boshqarish uchun ishlab chiqilgan Terminal User Interface (TUI). Bir nechta akkauntlarni monitoring qilish, jonli kvotalar va limitlarni ko'rib borish, O‘zbek, Rus va Ingliz tillarida to‘liq terminal interfeysi.",
    features: [
      "Rich kutubxonasi asosidagi zamonaviy Terminal UI",
      "Multi-account AI sessiyalari almashinuvi",
      "Jonli kvotalar va limitlar monitoringi",
      "O'zbek, Rus, Ingliz tillari qo'llab-quvvatlashi"
    ],
    techTags: ["Python", "Terminal UI", "Rich", "AI Session Manager", "CLI Tool"],
    links: {
      github: "https://github.com/Umrzoq-backend-ai/agychat",
      demo: null,
    },
    isFlagship: false,
    stats: "GitHub Open Source",
    accent: "from-emerald-600/30 via-teal-600/20 to-black",
  },
  {
    id: "ai-radiologist",
    number: "06",
    badge: "🩻 Healthcare AI",
    category: "ai",
    title: "AI Radiologist — Chest X-Ray Vision Diagnostic",
    subtitle: "Python · OpenCV · Deep Learning · Computer Vision",
    role: "Computer Vision & ML Developer",
    hrHighlights: "Tibbiy ko‘krak qafasi rentgen tasvirlarini chuqur neyron tarmoqlar (CNN) yordamida tahlil qilib, kasalliklarni erta aniqlovchi kompyuter ko'rish modeli.",
    description:
      "Tibbiy ko‘krak qafasi rentgen tasvirlarini chuqur neyron tarmoqlar (CNN) yordamida tahlil qilib, patologik anomaliyalarni erta bosqichda aniqlashga ko‘maklashuvchi kompyuter ko‘rish tizimi.",
    features: [
      "Rentgen tasvirlarini avtomatik segmentatsiya qilish",
      "Chuqur o'rganish (CNN) orqali patologiyalar klassifikatsiyasi",
      "FastAPI orqali tibbiy tahlil API taqdim etish"
    ],
    techTags: ["Python", "OpenCV", "Deep Learning", "FastAPI", "Computer Vision"],
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
    stats: "Computer Vision Model",
    accent: "from-blue-600/30 via-indigo-600/20 to-black",
  },
  {
    id: "uzbekdub-ai",
    number: "07",
    badge: "🎬 Speech & NLP",
    category: "ai",
    title: "UzbekDub AI — Automated YouTube Localization",
    subtitle: "Python · Whisper STT · Neural TTS · NLP",
    role: "Speech & NLP Engineer",
    hrHighlights: "Xorijiy YouTube videolarni avtomatik nutqni aniqlash (Whisper STT), tarjima va neyron ovozlashtirish (Neural TTS) orqali o‘zbek tiliga dublyaj qiluvchi sun’iy intellekt tizimi.",
    description:
      "Xorijiy YouTube videolarni avtomatik nutqni aniqlash (Whisper STT), kontekstual tarjima va neyron ovozlashtirish (Neural TTS) orqali o‘zbek tiliga dublyaj qiluvchi sun’iy intellekt tizimi.",
    features: [
      "OpenAI Whisper orqali aniq nutq ajratish (STT)",
      "Neyron nutq sintezi (TTS) bilan tabiiy o'zbekcha ovoz",
      "Audio va video kadrlarni avtomatik sinxronlash"
    ],
    techTags: ["Python", "Whisper STT", "Neural TTS", "NLP", "Translation", "FFmpeg"],
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
    stats: "Audio & Speech AI",
    accent: "from-purple-600/30 via-pink-600/20 to-black",
  },
  {
    id: "virtual-mouse",
    number: "08",
    badge: "🖱️ Computer Vision",
    category: "tools",
    title: "Virtual Mouse with Gesture Control",
    subtitle: "Python · OpenCV · MediaPipe Hand Tracking",
    role: "Computer Vision Developer",
    hrHighlights: "Veb-kamera orqali qo‘l harakatlari va barmoq imo-ishoralarini real vaqtda aniqlab, sichqonchani kontaktsiz boshqarish tizimi.",
    description:
      "Veb-kamera orqali qo‘l harakatlari va barmoq imo-ishoralarini real vaqtda aniqlab, kompyuter sichqonchasini kontaktsiz boshqarish imkonini beruvchi tizim.",
    features: [
      "MediaPipe yordamida 21 ta qo'l nuqtasini real-vaqtda kuzatish",
      "Klik, surish va skroll imo-ishoralarini aniqlash",
      "Kechikishlarsiz (low latency) kursor boshqaruvi"
    ],
    techTags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
    stats: "Real-time CV",
    accent: "from-amber-600/30 via-yellow-600/20 to-black",
  },
];

export const certificates = {
  featured: [
    {
      name: "Data Science Program",
      issuer: "School 21 Uzbekistan",
      icon: "🎓",
    },
    {
      name: "Machine Learning",
      issuer: "Self-Study / Coursera",
      icon: "🤖",
    },
    {
      name: "Python Programming",
      issuer: "Online Certification",
      icon: "🐍",
    },
    {
      name: "AI Hackathon Participant",
      issuer: "Samarkand, Uzbekistan",
      icon: "🏆",
    },
    {
      name: "FastAPI & Django",
      issuer: "Self-Study",
      icon: "⚡",
    },
    {
      name: "Data Analysis with Pandas",
      issuer: "Online Certification",
      icon: "📊",
    },
  ],
  viewAllUrl: "https://github.com/umrzoq-backend-ai",
};

export const education = {
  degree: "Data Science Program",
  institution: "School 21 Uzbekistan",
  cgpa: "Active Student",
  graduation: "Present",
  twelfth: "Secondary School — Zomin, Jizzakh",
  tenth: "Uzbekistan National Education System",
};

export const footerContent = {
  taglines: [
    "Data Science & Backend Development",
    "Python · FastAPI · Machine Learning",
    "AI-Powered Applications",
  ],
  credential: "School 21 Uzbekistan · Data Science Student",
  copyright: `© ${new Date().getFullYear()} Umrzoq Yulchiyev | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

// ============================================================
// Chatbot FAQ — intelligent, language-aware, with direct action links
// ============================================================
export const chatbotData = {
  greeting: "Assalomu alaykum! / Hello! 👋\nMen Umrzoq Yulchiyevning sun'iy intellekt assistentiman 🤖\nLoyihalar, AI tizimlari, texnologiyalar yoki ish takliflari haqida bemalol so'rashingiz mumkin!",
  placeholder: "Savolingizni yozing / Ask anything...",
  suggestions: [
    "🧠 Tahlilchi AI",
    "🎙️ INTRA GROUP",
    "🤖 Telegram AI Tutor",
    "💼 HR & Ishga taklif",
    "🚀 Barcha Loyihalar",
    "📄 Resume / CV",
    "📞 Bog'lanish",
  ],
  faqs: [
    // ── TAHLILCHI AI (FLAGSHIP) ──────────────────────────────
    {
      keywords: [
        "tahlilchi", "tahlilchi-ai", "tahlilchi ai", "multimodal", "video tahlil", "audio tahlil", "pdf tahlil", "gemini 2.5", "transkript"
      ],
      answer: "🧠 Tahlilchi AI — Milliy Multimodal Sun’iy Intellekt Platformasi:\n\n• Video, audio (YouTube, MP4, MP3) va PDF hujjatlardan soniyalar ichida xulosa va to‘liq transkript ajratadi.\n• Google Gemini 2.5 va 3 multimodal modellari asosida ishlaydi.\n• 7 xil ixtisoslashgan rejim (Uchrashuv, Fakt-chek, Ta'lim & Test, Bolalar xavfsizligi, HR bahosi va b.).\n• Ravon O'zbekcha transkript & vaqt belgilari (timestamps) bilan video-chat.\n\n🌐 Jonli Sayt: https://tahlilchi-ai-ruddy.vercel.app\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai",
      actions: [
        { text: "🚀 Tahlilchi AI Saytini Ochish", url: "https://tahlilchi-ai-ruddy.vercel.app" },
        { text: "🐙 GitHub Kodi", url: "https://github.com/Umrzoq-backend-ai/Tahlilchi-Ai" }
      ]
    },

    // ── INTRA GROUP (AI RADIO) ───────────────────────────────
    {
      keywords: [
        "intra", "intra group", "intra_group_bot", "radio", "ai radio", "audio streaming", "icecast", "sfera"
      ],
      answer: "🎙️ INTRA GROUP — AI Radio & Telegram Mini App Platformasi:\n\n• Telegram Mini App va mustaqil veb-platformada ishlovchi jonli interaktiv AI radio.\n• Google Gemini AI avtomatik efir matnini yaratadi va real vaqtda ovozlashtirib efirga uzatadi.\n• Icecast va MediaMTX orqali audio oqimi, jonli chat va mikrofon orqali efirga chiqish.\n• FastAPI backend (Render'da) va Telegram Bot integratsiyasi.\n\n🌐 Jonli Platforma: https://frontend-tau-seven-19.vercel.app\n📱 Telegram Bot: @intra_group_bot\n🐙 GitHub: https://github.com/Umrzoq-backend-ai/Intra_group_bot",
      actions: [
        { text: "🎙️ Jonli Radio Platforma", url: "https://frontend-tau-seven-19.vercel.app" },
        { text: "📱 Telegram Bot: @intra_group_bot", url: "https://t.me/umrzoq_21?start=intra_group_bot" },
        { text: "🐙 GitHub Kodi", url: "https://github.com/Umrzoq-backend-ai/Intra_group_bot" }
      ]
    },

    // ── TELEGRAM AI TUTOR ────────────────────────────────────
    {
      keywords: [
        "tutor", "ai tutor", "telegram tutor", "telegram-ai-tutor", "repetitor", "dars", "learning agent", "o'qituvchi"
      ],
      answer: "🤖 Telegram AI Tutor — Shaxsiy Ta'lim Agenti & Telegram Mini App:\n\n• Dasturlash (Python, C++), Data Science va ingliz tilini o'rgatuvchi moslashuvchan AI repetitor.\n• Telegram Mini App orqali foydalanuvchining bilim darajasini test orqali aniqlaydi va shaxsiy o'quv rejasini tuzadi.\n• Kod xatolarini tushuntirish, amaliy mashg'ulotlar va RAG texnologiyasi bilan aniq darsliklar asosida javob berish.\n• 24/7 rejimida ishlovchi Telegram bot.\n\n📱 Bot: @ai_tutor_uzbot (Telegram orqali ochish)",
      actions: [
        { text: "🤖 Telegram Botni Ochish", url: "https://t.me/umrzoq_21?start=ai_tutor" },
        { text: "💬 Muallif bilan bog'lanish", url: "https://t.me/umrzoq_21" }
      ]
    },

    // ── MY_PORTFOLIO / PORTFOLIO SAYTI ───────────────────────
    {
      keywords: [
        "portfolio", "my_portfolio", "my_portfolio2", "sayt", "vebsayt", "assistent sayti", "ushbu sayt", "сайт"
      ],
      answer: "🌐 my_portfolio2 — Umrzoq Yulchiyevning Rasmiy Portfolio Veb-sayti:\n\n• React 19, Vite, TailwindCSS va Framer Motion asosida qurilgan zamonaviy platforma.\n• Video background ijrosi, Dark/Light mavzular, silliq animatsiyalar.\n• 3-tilli (UZ/EN/RU) aqlli ChatBot assistent va to'liq loyihalar katalogi.\n• Vercel'da uzluksiz CI/CD bilan jonli production rejimida ishlaydi.\n\n🌐 Jonli Havola: https://umrzoq-portfolio.vercel.app\n🐙 GitHub Kodi: https://github.com/Umrzoq-backend-ai/my_portfolio2",
      actions: [
        { text: "🌐 Jonli Portfolioni Ochish", url: "https://umrzoq-portfolio.vercel.app" },
        { text: "🐙 GitHub Manba Kodi", url: "https://github.com/Umrzoq-backend-ai/my_portfolio2" }
      ]
    },

    // ── HR / HIRING / RECRUITER / ISH TAKLIFI ────────────────
    {
      keywords: [
        "hr", "recruiter", "hiring", "rekruter", "vakansiya", "ishga olish", "intervyu", "suhbat", "ish taklif", "ish taklifi", "hamkorlik", "interview", "job offer", "вакансия", "собеседование", "найм", "резюме hr"
      ],
      answer: "💼 HR va Texnik Rekruterlar uchun ma'lumot:\n\n• Mutaxassislik: Junior Data Scientist & Backend Developer (AI Engineer maqsadida)\n• Ta'lim: School 21 Uzbekistan (Data Science yo'nalishi)\n• Asosiy Stack: Python (FastAPI, Django), Google Gemini API, Scikit-learn, OpenCV, React, SQL, Docker, Linux\n• Ish formati: Full-time / Part-time / Remote / Ofis (Toshkent / Jizzax)\n• Portfoliodagi asosiy ishlar: Tahlilchi AI (multimodal platforma), INTRA GROUP (AI radio), Telegram AI Tutor\n\n📄 Rezyumeni sahifadan yuklab olishingiz yoki to'g'ridan-to'g'ri bog'lanishingiz mumkin:",
      actions: [
        { text: "📄 Resume (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" },
        { text: "📱 Telegram: @umrzoq_21", url: "https://t.me/umrzoq_21" },
        { text: "💼 LinkedIn Profil", url: "https://linkedin.com/in/umrzoqyulchiyevcode" }
      ]
    },

    // ── LOYIHALAR / PROJECTS / ПРОЕКТЫ ──────────────────────
    {
      keywords: [
        "loyiha", "loyihalar", "ishlar", "nima qilgan", "proyekt", "portfolio", "projects", "work", "built", "проекты", "работы"
      ],
      answer: "🚀 Umrzoq Yulchiyevning Top Loyihalari:\n\n1. 🧠 Tahlilchi AI — Video/Audio/PDF tahlil qiluvchi multimodal AI platformasi (Gemini 2.5/3, Live Vercel)\n2. 🎙️ INTRA GROUP — Jonli AI radio va Telegram Mini App (Live platforma)\n3. 🤖 Telegram AI Tutor — Shaxsiy ta'lim repetitori va Mini App\n4. 🌐 Shaxsiy Portfolio — Video bg, 3-tilli AI assistent (React 19 + Vite)\n5. 🩻 AI Radiologist — Rentgen tasvirlari tahlili (Deep Learning CNN)\n6. ⚡ AgyChat — Antigravity AI sessiya menejeri (Python Rich TUI)\n\nBarcha loyihalarni sahifaning 'Featured Projects' bo'limida jonli sinab ko'rishingiz mumkin!",
      actions: [
        { text: "🧠 Tahlilchi AI Demoni", url: "https://tahlilchi-ai-ruddy.vercel.app" },
        { text: "🎙️ INTRA GROUP Demoni", url: "https://frontend-tau-seven-19.vercel.app" },
        { text: "🐙 Barcha Repozitoriylar", url: "https://github.com/Umrzoq-backend-ai" }
      ]
    },

    // ── KIM / WHO / КТО ──────────────────────────────────────
    {
      keywords: [
        "kim", "kimsan", "o'zingiz", "tanishing", "qanday odam", "who", "who are you", "about you", "кто ты", "кто вы", "о себе"
      ],
      answer: "Men — Umrzoq Yulchiyev 👨‍💻\n\nJunior Data Scientist va Backend Developer. Hozir School 21 O'zbekistonda chuqur dasturlash va ma'lumotlar tahlilini o'rganmoqdaman.\n\nAsosiy yo'nalishim: Sun'iy intellekt integratsiyasi (Google Gemini, LLM, Computer Vision), FastAPI/Django yordamida tezkor backend arxitektura va Telegram Mini App platformalari yaratish.\n\nMaqsadim — xalqaro darajadagi AI Engineer bo'lib, insonlar hayotini yengillashtiruvchi aqlli tizimlar qurish.",
      actions: [
        { text: "📄 Resumeni Ko'rish", url: "/Umrzoq_Yulchiyev_Resume.pdf" },
        { text: "📱 Telegram: @umrzoq_21", url: "https://t.me/umrzoq_21" }
      ]
    },

    // ── NIMA QILASIZ / WHAT DO YOU DO / ЧЕМ ЗАНИМАЕТЕСЬ ────
    {
      keywords: [
        "nima qilasiz", "nima ishlaysiz", "kasb", "mutaxassis", "soha", "nima bilan shug'ullanasiz", "what do you do", "your work", "чем занимаетесь", "что делаешь"
      ],
      answer: "Men quyidagi yo'nalishlarda yechimlar yarataman:\n\n🤖 Multimodal AI — Matn, audio va videolarni tahlil qiluvchi Gemini va LLM ilovalari\n⚡ Backend Development — FastAPI va Django asosida yuqori yuklamali REST API'lar\n📱 Telegram Mini Apps — Bot va veb-interfeysni birlashtiruvchi interaktiv ilovalar\n📊 Data Science & ML — Ma'lumotlarni tahlil qilish (Pandas, NumPy, Scikit-learn)\n👁️ Computer Vision — OpenCV va MediaPipe orqali tasvir va imo-ishoralar tahlili",
      actions: [
        { text: "🚀 Loyihalarni ko'rish", url: "#projects" }
      ]
    },

    // ── TEXNOLOGIYALAR / SKILLS / НАВЫКИ ────────────────────
    {
      keywords: [
        "texnologiya", "texnologiyalar", "ko'nikma", "bilim", "stack", "python", "fastapi", "django", "gemini", "technology", "skills", "tech stack", "технологии", "стек"
      ],
      answer: "Texnologik Arsenal (Tech Stack):\n\n🐍 Python — Asosiy til (FastAPI, Django, Pandas, NumPy, Scikit-learn, OpenCV)\n🧠 AI & LLM — Google Gemini 2.5/3 API, Whisper STT, Neural TTS, RAG\n🌐 Frontend — React 19, TypeScript, TailwindCSS, Next.js 15, Vite\n📱 Telegram — Telegram Bot API, Telegram WebApp / Mini App\n🗄️ Ma'lumotlar bazasi — PostgreSQL, SQLite, MySQL, Redis\n🔧 Asboblar — Git & GitHub, Docker, Linux (Ubuntu), Jupyter Notebook, Icecast/FFmpeg",
      actions: [
        { text: "🐙 GitHub Profil", url: "https://github.com/Umrzoq-backend-ai" }
      ]
    },

    // ── BOG'LANISH / CONTACT / КОНТАКТЫ ─────────────────────
    {
      keywords: [
        "bog'lanish", "aloqa", "murojaat", "email", "telefon", "telegram", "linkedin", "contact", "reach", "контакт", "связь", "написать"
      ],
      answer: "Menga to'g'ridan-to'g'ri aloqa kanallari:\n\n📱 Telegram: @umrzoq_21 (Eng tezkor javob)\n📧 Email: school21dev@gmail.com\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode\n🐙 GitHub: github.com/Umrzoq-backend-ai\n📞 Tel: +998 91 593 30 18\n\nSavolingiz yoki hamkorlik taklifingiz bo'lsa, xursand bo'laman!",
      actions: [
        { text: "💬 Telegramda Yozish", url: "https://t.me/umrzoq_21" },
        { text: "✉️ Email Yuborish", url: "mailto:school21dev@gmail.com" }
      ]
    },

    // ── RESUME / CV / РЕЗЮМЕ ─────────────────────────────────
    {
      keywords: [
        "resume", "rezyume", "cv", "yuklab", "hujjat", "curriculum vitae", "резюме", "скачать"
      ],
      answer: "📄 Umrzoq Yulchiyevning Rasmiy Rezyumesi (CV):\n\nRezyumeda barcha ish tajribasi, School 21 loyihalari, texnologiyalar darajasi va sertifikatlar jamlangan.",
      actions: [
        { text: "⬇️ Resumeni Yuklab Olish (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" }
      ]
    },

    // ── TA'LIM / EDUCATION / ОБРАЗОВАНИЕ ────────────────────
    {
      keywords: [
        "ta'lim", "o'qish", "maktab", "university", "qayerda o'qiydi", "school 21", "education", "study", "образование", "учёба"
      ],
      answer: "Ta'lim:\n\n🏫 School 21 Uzbekistan (2024 — hozir)\nYo'nalish: Data Science & Software Engineering.\nO'qituvchisiz, 100% amaliy va peer-to-peer (tengdosh-tengdoshga) loyihalar asosida o'qitiladigan intensiv maktab.\n\n🏆 AI Hackathon Samarkand (2024) ishtirokchisi.",
      actions: [
        { text: "💼 LinkedIn Profil", url: "https://linkedin.com/in/umrzoqyulchiyevcode" }
      ]
    },

    // ── SALOM / HELLO / ПРИВЕТ ───────────────────────────────
    {
      keywords: [
        "salom", "assalomu alaykum", "hayr", "xayr", "hello", "hi", "hey", "привет", "здравствуй", "здравствуйте"
      ],
      answer: "Assalomu alaykum! Xush kelibsiz! 👋\n\nMen Umrzoq Yulchiyevning AI assistentiman. Sizga qanday yordam bera olaman?\n\nQuyidagi tugmalardan birini tanlashingiz yoki to'g'ridan-to'g'ri savol yozishingiz mumkin:",
      actions: [
        { text: "🧠 Tahlilchi AI Haqida", url: "https://tahlilchi-ai-ruddy.vercel.app" },
        { text: "🚀 Asosiy Loyihalar", url: "#projects" },
        { text: "💼 HR & Hamkorlik", url: "https://t.me/umrzoq_21" }
      ]
    },

    // ── RAHMAT / THANKS / СПАСИБО ────────────────────────────
    {
      keywords: [
        "rahmat", "tashakkur", "minnatdor", "thanks", "thank you", "спасибо", "благодарю"
      ],
      answer: "Arzimaydi! Sizga foydali bo'lganidan xursandman 😊\n\nBoshqa savollaringiz bo'lsa yoki loyihalar bo'yicha gaplashmoqchi bo'lsangiz, bemalol yozing!",
      actions: [
        { text: "💬 Telegramda bog'lanish", url: "https://t.me/umrzoq_21" }
      ]
    },
  ],

  fallback: "Ushbu mavzu bo'yicha aniq ma'lumot topilmadi, lekin sizga quyidagilar haqida to'liq aytib bera olaman:\n\n• 🧠 Tahlilchi AI (Multimodal AI platformasi)\n• 🎙️ INTRA GROUP (AI Radio va Telegram Mini App)\n• 🤖 Telegram AI Tutor (Shaxsiy ta'lim boti)\n• 🚀 Loyihalar va jonli demolar\n• 💼 HR va ish takliflari bo'yicha aloqa\n• 📄 Rezyume yuklab olish\n\nQuyidagi tugmalardan birini bosing yoki bemalol so'rang:",
};
