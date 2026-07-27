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
    id: "portfolio",
    number: "01",
    badge: "🌐 Personal Project",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive personal portfolio website built with React and Vite to showcase projects, skills, and experience. Features smooth animations, dark theme, and a clean UI.",
    techTags: ["React", "Vite", "TailwindCSS", "JavaScript"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/my_portfolio2",
    links: {
      github: "https://github.com/Umrzoq-backend-ai/my_portfolio2",
      demo: "https://umrzoq-portfolio.vercel.app",
    },
    isFlagship: true,
  },
  {
    id: "ai-telegram-bot",
    number: "02",
    badge: "🤖 AI Project",
    title: "AI Telegram Bot",
    description:
      "An intelligent Telegram bot powered by AI that can answer questions, process commands, and interact with users. Built with Python and integrated with AI APIs for smart responses.",
    techTags: ["Python", "Telegram API", "AI", "REST API"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/ai-telegram-bot",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "ai-radiologist",
    number: "03",
    badge: "🩻 AI + Healthcare",
    title: "AI Radiologist — X-ray Analysis",
    description:
      "An AI-powered medical imaging application that analyzes chest X-rays using computer vision and deep learning. Helps detect anomalies and assists in radiological diagnosis.",
    techTags: ["Python", "OpenCV", "Deep Learning", "Computer Vision", "FastAPI"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/ai-radiologist",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "uzbekdub-ai",
    number: "04",
    badge: "🎬 AI + NLP",
    title: "UzbekDub AI — YouTube Dubbing",
    description:
      "An AI-based YouTube video dubbing system that automatically translates and dubs video content into Uzbek. Combines speech recognition, translation, and text-to-speech technologies.",
    techTags: ["Python", "NLP", "Speech Recognition", "TTS", "AI"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/uzbekdub-ai",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "virtual-mouse",
    number: "05",
    badge: "🖱️ Computer Vision",
    title: "Virtual Mouse with OpenCV & MediaPipe",
    description:
      "A computer vision project that enables touchless mouse control using hand gestures detected via webcam. Built with OpenCV and MediaPipe for real-time hand tracking.",
    techTags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/virtual-mouse",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "movielens-analytics",
    number: "06",
    badge: "📊 Data Science",
    title: "MovieLens Analytics",
    description:
      "A data analytics project using the MovieLens dataset to explore movie ratings, user preferences, and recommendation patterns. Features detailed visualizations and statistical analysis.",
    techTags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/movielens-analytics",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "ml-projects",
    number: "07",
    badge: "📈 Machine Learning",
    title: "Machine Learning Projects",
    description:
      "A collection of machine learning projects covering classification, regression, clustering, and more. Built using Scikit-learn, Pandas, and NumPy with real-world datasets.",
    techTags: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/ml-projects",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "ds-bootcamp",
    number: "08",
    badge: "🧠 Data Science",
    title: "Data Science Bootcamp Projects",
    description:
      "Projects completed during data science training at School 21 Uzbekistan, covering data preprocessing, visualization, model training, and evaluation across various domains.",
    techTags: ["Python", "Jupyter", "Pandas", "Matplotlib", "Scikit-learn"],
    image: "https://opengraph.githubassets.com/1/Umrzoq-backend-ai/ds-bootcamp",
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
    },
    isFlagship: false,
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
// Chatbot FAQ — multilingual (UZ / RU / EN), keyword-based
// ============================================================
export const chatbotData = {
  greeting: "Salom! / Hello! / Привет! 👋\nMen Umrzoq Yulchiyevning AI assistentiman 🤖\nO'zbek, ingliz yoki rus tilida savol bering!",
  placeholder: "Savol yozing... / Ask me anything...",
  suggestions: [
    "Kim siz?",
    "What do you do?",
    "Чем занимаетесь?",
    "Loyihalar / Projects",
    "Contact info",
  ],
  faqs: [
    // ── KIM / WHO / КТО ──────────────────────────────────────
    {
      keywords: [
        // UZ
        "kim", "kimsan", "o'zingiz", "tanishing", "haqida", "qanday odam",
        // EN
        "who", "who are you", "about you", "introduce", "tell me about",
        // RU
        "кто", "кто ты", "кто вы", "расскажи", "о себе", "познакомьтесь",
      ],
      answer: "Men — Umrzoq Yulchiyev 👨‍💻\n\nJunior Data Scientist va Backend Developer. O'zbekistonning Zomin, Jizzakh shahridan. Hozir School 21 Uzbekistonda o'qiyapman.\n\nI'm Umrzoq Yulchiyev — a Junior Data Scientist & Backend Developer from Uzbekistan, currently studying at School 21.\n\nЯ — Умрзок Юлчиев, Junior Data Scientist и Backend Developer из Узбекистана. Сейчас учусь в School 21 Uzbekistan. 🚀",
    },

    // ── NIMA QILASIZ / WHAT DO YOU DO / ЧЕМ ЗАНИМАЕТЕСЬ ────
    {
      keywords: [
        // UZ
        "nima qilasiz", "nima ishlaysiz", "kasb", "mutaxassis", "soha", "nima bilan shug'ullanasiz",
        // EN
        "what do you do", "your work", "your job", "specialization", "what you do", "occupation",
        // RU
        "чем занимаетесь", "чем занимаешься", "что делаешь", "специализация", "профессия", "работа",
      ],
      answer: "Men quyidagi sohalarda ishlayapman:\n\n🤖 AI / Machine Learning — aqlli modellar yaratish\n⚡ Backend Development — FastAPI, Django bilan API qurilish\n📊 Data Science — ma'lumotlarni tahlil qilish va vizualizatsiya\n🔬 Computer Vision — OpenCV, MediaPipe\n\nI build AI-powered apps, ML models, and backend APIs using Python, FastAPI, Django, and Scikit-learn.\n\nЯ разрабатываю AI-приложения, ML-модели и backend API на Python, FastAPI и Django. 💡",
    },

    // ── LOYIHALAR / PROJECTS / ПРОЕКТЫ ──────────────────────
    {
      keywords: [
        // UZ
        "loyiha", "loyihalar", "ishlar", "nima qilgan", "portfolio", "qanday loyihalar",
        // EN
        "project", "projects", "work", "built", "what have you built", "portfolio",
        // RU
        "проект", "проекты", "что делал", "работы", "портфолио",
      ],
      answer: "Mening asosiy loyihalarim / My Projects / Мои проекты:\n\n🩻 AI Radiologist — Ko'krak X-ray tahlili (Deep Learning)\n🎬 UzbekDub AI — YouTube videolarini o'zbekchaga dubbing\n🖱️ Virtual Mouse — Qo'l harakati bilan kompyuter boshqarish\n🤖 AI Telegram Bot — Aqlli Telegram bot\n📊 MovieLens Analytics — Ma'lumotlar tahlili\n🌐 Portfolio Website — Ushbu sayt (React + Vite)\n\nBatafsil ko'rish uchun ↓ 'Projects' bo'limiga o'ting!",
    },

    // ── TEXNOLOGIYALAR / SKILLS / НАВЫКИ ────────────────────
    {
      keywords: [
        // UZ
        "texnologiya", "texnologiyalar", "ko'nikma", "bilim", "stack", "qanday dasturlash",
        // EN
        "technology", "technologies", "skill", "skills", "tech stack", "programming", "languages", "tools",
        // RU
        "технология", "технологии", "навык", "навыки", "стек", "умения", "языки программирования",
      ],
      answer: "Tech Stack:\n\n🐍 Python — 88%\n⚡ FastAPI — 85%\n🌐 Django — 80%\n🤖 Machine Learning (Scikit-learn) — 83%\n📊 Pandas, NumPy, Matplotlib\n👁️ OpenCV, MediaPipe\n🗄️ PostgreSQL, SQLite, MySQL\n🔧 Git, Linux, Jupyter Notebook\n📝 C++, SQL, JavaScript (basic)",
    },

    // ── BOG'LANISH / CONTACT / КОНТАКТЫ ─────────────────────
    {
      keywords: [
        // UZ
        "bog'lanish", "aloqa", "murojaat", "email", "telefon", "telegram", "linkedin",
        // EN
        "contact", "reach", "email", "phone", "get in touch", "hire", "message",
        // RU
        "контакт", "связь", "написать", "почта", "телефон", "связаться", "нанять",
      ],
      answer: "Bog'lanish / Contact / Контакты:\n\n📧 Email: school21dev@gmail.com\n📱 Telegram: @umrzoq_21\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode\n🐙 GitHub: github.com/Umrzoq-backend-ai\n\nIshga olmoqchimisiz? / Want to hire me?\nHire Me tugmasini bosing yoki email yuboring! 💼",
    },

    // ── RESUME / CV / РЕЗЮМЕ ─────────────────────────────────
    {
      keywords: [
        // UZ
        "resume", "rezyume", "cv", "yuklab", "hujjat",
        // EN
        "resume", "cv", "download", "curriculum vitae",
        // RU
        "резюме", "cv", "скачать", "загрузить",
      ],
      answer: "Resume yuklab olish / Download Resume / Скачать резюме:\n\n📄 Sahifa yuqorisidagi 'Download Resume' tugmasini bosing!\n\nYoki to'g'ridan-to'g'ri:\n🔗 /Umrzoq_Yulchiyev_Resume.pdf",
    },

    // ── TAJRIBA / EXPERIENCE / ОПЫТ ──────────────────────────
    {
      keywords: [
        // UZ
        "tajriba", "ish tajriba", "internship", "ishlagan", "qayerda ishlagan",
        // EN
        "experience", "work experience", "internship", "worked", "jobs",
        // RU
        "опыт", "опыт работы", "стажировка", "где работал", "работал",
      ],
      answer: "Tajriba / Experience / Опыт:\n\n🎓 School 21 Uzbekistan\n   Data Science Student (2024 — hozir)\n\n🏆 AI Hackathon — Samarkand\n   AI Developer, Participant (2024)\n\n💻 Self-Directed Projects\n   Backend & AI Developer (2023 — hozir)\n   FastAPI, Django, OpenCV, ML modellar",
    },

    // ── TA'LIM / EDUCATION / ОБРАЗОВАНИЕ ────────────────────
    {
      keywords: [
        // UZ
        "ta'lim", "o'qish", "maktab", "university", "qayerda o'qiydi", "diplom",
        // EN
        "education", "study", "university", "school", "degree", "where do you study",
        // RU
        "образование", "учёба", "университет", "школа", "где учишься", "диплом",
      ],
      answer: "Ta'lim / Education / Образование:\n\n🏫 School 21 Uzbekistan\n   Data Science Program (hozirgi / current / сейчас)\n   Peer-to-peer, project-based metodologiya\n\n📍 O'rta maktab — Zomin, Jizzakh, O'zbekiston\n\nSchool 21 — kod yozishni amaliy loyihalar orqali o'rgatadigan innovatsion maktab 🚀",
    },

    // ── SERTIFIKAT / CERTIFICATE / СЕРТИФИКАТЫ ──────────────
    {
      keywords: [
        // UZ
        "sertifikat", "sertifikatlar", "guvohnoma", "mukofot", "diplom",
        // EN
        "certificate", "certificates", "certification", "award", "achievement",
        // RU
        "сертификат", "сертификаты", "диплом", "достижения", "награды",
      ],
      answer: "Sertifikatlar / Certificates / Сертификаты:\n\n🎓 Data Science Program — School 21 Uzbekistan\n🤖 Machine Learning — Coursera\n🐍 Python Programming — Online\n🏆 AI Hackathon Participant — Samarkand\n⚡ FastAPI & Django — Self-Study\n📊 Data Analysis with Pandas — Online",
    },

    // ── JOYLASHUV / LOCATION / МЕСТОПОЛОЖЕНИЕ ───────────────
    {
      keywords: [
        // UZ
        "qayerdan", "qayerda", "joylashuv", "shahar", "uzbekiston", "yashaydi",
        // EN
        "location", "where are you", "where from", "country", "city", "based",
        // RU
        "откуда", "где живёт", "город", "страна", "местоположение", "узбекистан",
      ],
      answer: "📍 Zomin, Jizzakh, O'zbekiston 🇺🇿\n\nHozir School 21 Uzbekistonda o'qiyapman va remote ishlashga tayyor!\n\nBased in Uzbekistan, open to remote work worldwide 🌍\n\nНахожусь в Узбекистане, готов к удалённой работе 💻",
    },

    // ── MAQSAD / GOAL / ЦЕЛЬ ─────────────────────────────────
    {
      keywords: [
        // UZ
        "maqsad", "kelajak", "orzu", "rejalar", "nima bo'lmoqchi",
        // EN
        "goal", "future", "dream", "plans", "ambition", "career goal", "vision",
        // RU
        "цель", "мечта", "планы", "будущее", "карьера", "амбиции",
      ],
      answer: "Mening maqsadim / My Goal / Моя цель:\n\n🎯 AI Engineer bo'lish va real muammolarni hal qiladigan aqlli yechimlar yaratish.\n\nMen uchun eng muhimi — Machine Learning va AI sohasida chuqur bilim, kuchli portfolio va xalqaro darajadagi loyihalar.\n\nMy goal is to become an AI Engineer and build intelligent solutions that solve real-world problems.\n\nМоя цель — стать AI Engineer и создавать умные решения, которые решают реальные проблемы. 🚀",
    },

    // ── SALARY / ISH HAQI / ЗАРПЛАТА ─────────────────────────
    {
      keywords: [
        // UZ
        "maosh", "ish haqi", "oylik", "qancha olasiz",
        // EN
        "salary", "pay", "rate", "compensation", "how much",
        // RU
        "зарплата", "оплата", "сколько стоит", "ставка",
      ],
      answer: "Ish haqi bo'yicha to'g'ridan-to'g'ri gaplashaylik:\n\n📧 school21dev@gmail.com ga yozing\n📱 Telegram: @umrzoq_21\n\nFor salary discussion, please reach out directly:\nEmail: school21dev@gmail.com\n\nПо вопросам оплаты пишите напрямую:\n📧 school21dev@gmail.com 💼",
    },

    // ── SALOM / HELLO / ПРИВЕТ ───────────────────────────────
    {
      keywords: [
        // UZ
        "salom", "assalomu alaykum", "hayr", "xayr",
        // EN
        "hello", "hi", "hey", "greetings", "good morning", "good evening",
        // RU
        "привет", "здравствуй", "здравствуйте", "добрый день", "добрый вечер", "пока",
      ],
      answer: "Salom! 👋 Assalomu alaykum!\nHello! Hi there!\nПривет! Здравствуйте!\n\nMen Umrzoq Yulchiyevning AI assistentiman 🤖\nQanday yordam bera olaman? / How can I help? / Чем могу помочь?",
    },

    // ── RAHMAT / THANKS / СПАСИБО ────────────────────────────
    {
      keywords: [
        // UZ
        "rahmat", "tashakkur", "minnatdor",
        // EN
        "thanks", "thank you", "thx", "appreciate", "grateful",
        // RU
        "спасибо", "благодарю", "благодарность", "thanks",
      ],
      answer: "Iltimos! / You're welcome! / Пожалуйста! 😊\n\nBoshqa savollaringiz bo'lsa bemalol so'rang!\nFeel free to ask anything else!\nЗадавайте любые вопросы! 🚀",
    },

    // ── PYTHON / AI / ML ─────────────────────────────────────
    {
      keywords: [
        "python", "fastapi", "django", "machine learning", "deep learning",
        "ai", "artificial intelligence", "ml", "data science", "neural",
        "искусственный интеллект", "машинное обучение",
      ],
      answer: "Python va AI sohasida tajribam:\n\n🐍 Python — asosiy tilim, 3+ yil tajriba\n⚡ FastAPI — tezkor REST API qurilishi\n🌐 Django — to'liq web framework\n🤖 Machine Learning — Scikit-learn, classification, regression, clustering\n📊 Data Analysis — Pandas, NumPy, Matplotlib\n👁️ Computer Vision — OpenCV, MediaPipe\n\nI specialize in Python-based AI and backend development.\n\nСпециализируюсь на Python, AI и backend разработке. 💻",
    },

    // ── ISHGA OLISH / HIRING / НАНЯТЬ ────────────────────────
    {
      keywords: [
        // UZ
        "ishga olmoqchi", "yollash", "freelance", "hamkorlik", "loyiha taklif",
        // EN
        "hire", "hiring", "freelance", "collaboration", "work together", "job offer", "opportunity",
        // RU
        "нанять", "сотрудничество", "фриланс", "предложение", "работа вместе",
      ],
      answer: "Ajoyib! Hamkorlikka tayyor! 🎉\n\nGreat! I'm open to opportunities!\n\nОтлично! Готов к сотрудничеству!\n\n📧 Email: school21dev@gmail.com\n📱 Telegram: @umrzoq_21\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode\n\nYoki sahifadagi 'Hire Me' tugmasini bosing! 👆",
    },
  ],

  fallback: "Tushunmadim, lekin yordam bermoqchiman 🤔\n\nSo'rashingiz mumkin / You can ask about / Можете спросить про:\n• Kim ekanligim / About me / О себе\n• Nima qilaman / What I do / Чем занимаюсь\n• Loyihalarim / Projects / Проекты\n• Texnologiyalar / Tech stack / Технологии\n• Bog'lanish / Contact / Контакты\n• Resume / CV / Резюме\n• Ta'lim / Education / Образование",
};
