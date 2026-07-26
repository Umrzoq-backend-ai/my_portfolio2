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
    links: {
      github: "https://github.com/umrzoq-backend-ai",
      demo: null,
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
// Chatbot FAQ — keyword-based matching, no API needed
// ============================================================
export const chatbotData = {
  greeting: "Salom! Men Umrzoq Yulchiyevning AI assistentiman 🤖\nSavol bering, javob berishga harakat qilaman!",
  placeholder: "Savol yozing...",
  suggestions: [
    "Kim siz?",
    "Qanday bog'lanish?",
    "Loyihalaringiz?",
    "Qanday texnologiyalar?",
    "Resume yuklash",
  ],
  faqs: [
    {
      keywords: ["kim", "who", "umrzoq", "tanishing", "introduce", "haqida", "about"],
      answer: "Men Umrzoq Yulchiyev — Junior Data Scientist va Backend Developer. Uzbekistondan, hozir School 21 Uzbekistonda o'qiyapman. Python, FastAPI, Django va Machine Learning bilan ishlayapman. 🚀",
    },
    {
      keywords: ["bog'lanish", "contact", "email", "telefon", "phone", "telegram", "reach", "murojaat"],
      answer: "Menga quyidagilar orqali murojaat qilishingiz mumkin:\n📧 Email: school21dev@gmail.com\n📱 Telegram: @umrzoq_21\n💼 LinkedIn: linkedin.com/in/umrzoqyulchiyevcode",
    },
    {
      keywords: ["loyiha", "project", "ishlar", "portfolio", "nima qilgan", "work"],
      answer: "Mening asosiy loyihalarim:\n🩻 AI Radiologist — X-ray tahlili\n🎬 UzbekDub AI — YouTube dubbing\n🖱️ Virtual Mouse — qo'l harakati bilan boshqarish\n🤖 AI Telegram Bot\n📊 MovieLens Analytics\n\nBatafsil 'Projects' bo'limida ko'ring!",
    },
    {
      keywords: ["texnologiya", "technology", "skill", "python", "tech", "stack", "ko'nikma", "bilim"],
      answer: "Men ishlatadigan texnologiyalar:\n🐍 Python (88%)\n⚡ FastAPI (85%)\n🌐 Django (80%)\n🤖 Machine Learning (83%)\n📊 Pandas, NumPy, Scikit-learn\n🗄️ PostgreSQL, SQLite\n🔧 Git, Linux, Jupyter",
    },
    {
      keywords: ["resume", "cv", "yuklab", "download", "rezyume"],
      answer: "Mening resume ni yuklab olish uchun sahifaning yuqorisidagi 'Download Resume' tugmasini bosing yoki to'g'ridan-to'g'ri:\n📄 /Umrzoq_Yulchiyev_Resume.pdf",
    },
    {
      keywords: ["tajriba", "experience", "ish", "internship", "ishlagan"],
      answer: "Tajribam:\n🎓 School 21 Uzbekistan — Data Science (2024–hozir)\n🏆 AI Hackathon Samarkand — AI Developer\n💻 Self-Directed Projects — Backend & AI Developer (2023–hozir)",
    },
    {
      keywords: ["ta'lim", "education", "o'qish", "university", "maktab", "school"],
      answer: "Ta'limim:\n🏫 School 21 Uzbekistan — Data Science Program (hozirgi)\n📍 O'rta maktab — Zomin, Jizzakh\n\nSchool 21 — peer-to-peer metodologiya asosida dasturlash o'rgatadigan innovatsion maktab.",
    },
    {
      keywords: ["sertifikat", "certificate", "award", "mukofot"],
      answer: "Sertifikatlarim:\n🎓 Data Science Program — School 21\n🤖 Machine Learning — Coursera\n🐍 Python Programming\n🏆 AI Hackathon Participant — Samarkand\n⚡ FastAPI & Django\n📊 Data Analysis with Pandas",
    },
    {
      keywords: ["yosh", "age", "qayerdan", "location", "joylashuv", "uzbekiston", "qayerda"],
      answer: "Men Zomin, Jizzakh, O'zbekistondan. Hozir School 21 Uzbekistonda o'qiyapman va AI hamda Backend development bilan shug'ullanaman. 🇺🇿",
    },
    {
      keywords: ["maqsad", "goal", "kelajak", "future", "dream", "orzu"],
      answer: "Mening asosiy maqsadim — AI Engineer bo'lish va real hayotdagi muammolarni hal qiladigan aqlli yechimlar yaratish. Machine Learning va AI sohasida chuqur bilim olish ustida ishlayapman. 🎯",
    },
  ],
  fallback: "Kechirasiz, bu savolni tushunmadim 🤔\nQuyidagi mavzular haqida so'rashingiz mumkin:\n• Kim ekanligim\n• Loyihalarim\n• Texnologiyalar\n• Bog'lanish\n• Resume\n• Ta'lim & Tajriba",
};
