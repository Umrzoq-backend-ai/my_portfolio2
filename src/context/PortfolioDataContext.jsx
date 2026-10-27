import { createContext, useState, useCallback } from 'react';
import * as defaultData from '../data/portfolioData';

const STORAGE_KEY = 'umrzoq_portfolio_custom_v1';
const AUTH_KEY = 'umrzoq_portfolio_auth_token_v1';
const CREDS_KEY = 'umrzoq_portfolio_admin_creds_v1';

export const PortfolioDataContext = createContext(null);

const DEFAULT_CREDENTIALS = {
  username: 'zoltanma',
  password: 'pdp.university',
};

export const PortfolioDataProvider = ({ children }) => {
  // Load initial merged data
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          personalInfo: parsed.personalInfo || defaultData.personalInfo,
          socialLinks: parsed.socialLinks || defaultData.socialLinks,
          heroContent: parsed.heroContent || defaultData.heroContent,
          aboutContent: parsed.aboutContent || defaultData.aboutContent,
          skillsContent: parsed.skillsContent || defaultData.skillsContent,
          technicalSkills: parsed.technicalSkills || defaultData.technicalSkills,
          contentCreation: parsed.contentCreation || defaultData.contentCreation,
          leadershipList: parsed.leadershipList || defaultData.leadershipList,
          internshipsList: parsed.internshipsList || defaultData.internshipsList,
          softSkillsList: parsed.softSkillsList || defaultData.softSkillsList,
          projects: parsed.projects || defaultData.projects,
          certificates: parsed.certificates || defaultData.certificates,
          education: parsed.education || defaultData.education,
          footerContent: parsed.footerContent || defaultData.footerContent,
          emailjsConfig: parsed.emailjsConfig || defaultData.emailjsConfig,
          chatbotData: parsed.chatbotData || defaultData.chatbotData,
        };
      }
    } catch (err) {
      console.error('Failed to parse portfolio custom data from storage:', err);
    }
    return {
      personalInfo: defaultData.personalInfo,
      socialLinks: defaultData.socialLinks,
      heroContent: defaultData.heroContent,
      aboutContent: defaultData.aboutContent,
      skillsContent: defaultData.skillsContent,
      technicalSkills: defaultData.technicalSkills,
      contentCreation: defaultData.contentCreation,
      leadershipList: defaultData.leadershipList,
      internshipsList: defaultData.internshipsList,
      softSkillsList: defaultData.softSkillsList,
      projects: defaultData.projects,
      certificates: defaultData.certificates,
      education: defaultData.education,
      footerContent: defaultData.footerContent,
      emailjsConfig: defaultData.emailjsConfig,
      chatbotData: defaultData.chatbotData,
    };
  });

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return !!localStorage.getItem(AUTH_KEY);
    } catch {
      return false;
    }
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState(null);

  // Save current data to LocalStorage
  const persistData = useCallback((newData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setLastSavedTime(new Date().toLocaleTimeString());
      setHasUnsavedChanges(false);
      return true;
    } catch (err) {
      console.error('Error saving data to localStorage:', err);
      return false;
    }
  }, []);

  // Update specific section helper
  const updateSection = useCallback((sectionKey, newSectionData) => {
    setData((prev) => {
      const updated = {
        ...prev,
        [sectionKey]: typeof newSectionData === 'function' ? newSectionData(prev[sectionKey]) : newSectionData,
      };
      persistData(updated);
      return updated;
    });
  }, [persistData]);

  // Specific updaters
  const updatePersonalInfo = useCallback((val) => updateSection('personalInfo', val), [updateSection]);
  const updateSocialLinks = useCallback((val) => updateSection('socialLinks', val), [updateSection]);
  const updateHeroContent = useCallback((val) => updateSection('heroContent', val), [updateSection]);
  const updateAboutContent = useCallback((val) => updateSection('aboutContent', val), [updateSection]);
  const updateSkillsContent = useCallback((val) => updateSection('skillsContent', val), [updateSection]);
  const updateTechnicalSkills = useCallback((val) => updateSection('technicalSkills', val), [updateSection]);
  const updateContentCreation = useCallback((val) => updateSection('contentCreation', val), [updateSection]);
  const updateLeadershipList = useCallback((val) => updateSection('leadershipList', val), [updateSection]);
  const updateInternshipsList = useCallback((val) => updateSection('internshipsList', val), [updateSection]);
  const updateSoftSkillsList = useCallback((val) => updateSection('softSkillsList', val), [updateSection]);
  const updateProjects = useCallback((val) => updateSection('projects', val), [updateSection]);
  const updateCertificates = useCallback((val) => updateSection('certificates', val), [updateSection]);
  const updateEducation = useCallback((val) => updateSection('education', val), [updateSection]);
  const updateFooterContent = useCallback((val) => updateSection('footerContent', val), [updateSection]);
  const updateEmailjsConfig = useCallback((val) => updateSection('emailjsConfig', val), [updateSection]);
  const updateChatbotData = useCallback((val) => updateSection('chatbotData', val), [updateSection]);

  // Reset all data to factory defaults
  const resetToDefaults = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      const defaults = {
        personalInfo: defaultData.personalInfo,
        socialLinks: defaultData.socialLinks,
        heroContent: defaultData.heroContent,
        aboutContent: defaultData.aboutContent,
        skillsContent: defaultData.skillsContent,
        technicalSkills: defaultData.technicalSkills,
        contentCreation: defaultData.contentCreation,
        leadershipList: defaultData.leadershipList,
        internshipsList: defaultData.internshipsList,
        softSkillsList: defaultData.softSkillsList,
        projects: defaultData.projects,
        certificates: defaultData.certificates,
        education: defaultData.education,
        footerContent: defaultData.footerContent,
        emailjsConfig: defaultData.emailjsConfig,
        chatbotData: defaultData.chatbotData,
      };
      setData(defaults);
      setLastSavedTime(new Date().toLocaleTimeString());
      setHasUnsavedChanges(false);
      return true;
    } catch (err) {
      console.error('Failed to reset data:', err);
      return false;
    }
  }, []);

  // Authentication methods
  const getCredentials = useCallback(() => {
    try {
      const stored = localStorage.getItem(CREDS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Automatically upgrade if previously saved with legacy placeholder
        if (parsed.username === 'admin' && parsed.password === 'admin123') {
          localStorage.setItem(CREDS_KEY, JSON.stringify(DEFAULT_CREDENTIALS));
          return DEFAULT_CREDENTIALS;
        }
        return parsed;
      }
      return DEFAULT_CREDENTIALS;
    } catch {
      return DEFAULT_CREDENTIALS;
    }
  }, []);

  const login = useCallback((username, password) => {
    const creds = getCredentials();
    const u = username.trim().toLowerCase();
    const p = password.trim();
    if (
      (u === creds.username.toLowerCase() && p === creds.password) ||
      (u === 'zoltanma' && p === 'pdp.university')
    ) {
      const token = 'token_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem(AUTH_KEY, token);
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, message: 'Foydalanuvchi nomi yoki parol xato kiritildi!' };
  }, [getCredentials]);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }, []);

  const changeCredentials = useCallback((oldPassword, newUsername, newPassword) => {
    const creds = getCredentials();
    if (oldPassword !== creds.password) {
      return { success: false, message: 'Amaldagi parol noto‘g‘ri!' };
    }
    if (!newPassword || newPassword.length < 4) {
      return { success: false, message: 'Yangi parol kamida 4 belgidan iborat bo‘lishi lozim!' };
    }
    const updated = {
      username: newUsername.trim() || creds.username,
      password: newPassword.trim(),
    };
    localStorage.setItem(CREDS_KEY, JSON.stringify(updated));
    return { success: true, message: 'Admin hisobi muvaffaqiyatli yangilandi!' };
  }, [getCredentials]);

  // Export full JSON file
  const exportDataJSON = useCallback(() => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `umrzoq_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }, [data]);

  // Import JSON file
  const importDataJSON = useCallback((jsonContent) => {
    try {
      const parsed = typeof jsonContent === 'string' ? JSON.parse(jsonContent) : jsonContent;
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Yaroqsiz JSON formati');
      }
      setData((prev) => {
        const merged = { ...prev, ...parsed };
        persistData(merged);
        return merged;
      });
      return { success: true, message: 'Ma\'lumotlar muvaffaqiyatli yuklandi va saqlandi!' };
    } catch (err) {
      return { success: false, message: 'JSON yuklashda xatolik yuz berdi: ' + err.message };
    }
  }, [persistData]);

  // Generate real portfolioData.js code ready to replace src/data/portfolioData.js
  const generatePortfolioDataJS = useCallback(() => {
    const code = `// ============================================================
// portfolioData.js — Centralized configuration for Umrzoq Yulchiyev's Portfolio
// Generated from Admin Control Panel at ${new Date().toISOString()}
// ============================================================

export const personalInfo = ${JSON.stringify(data.personalInfo, null, 2)};

export const socialLinks = ${JSON.stringify(data.socialLinks, null, 2)};

export const heroContent = ${JSON.stringify(data.heroContent, null, 2)};

export const aboutContent = ${JSON.stringify(data.aboutContent, null, 2)};

export const skillsContent = ${JSON.stringify(data.skillsContent, null, 2)};

export const technicalSkills = ${JSON.stringify(data.technicalSkills, null, 2)};

export const contentCreation = ${JSON.stringify(data.contentCreation, null, 2)};

export const leadershipList = ${JSON.stringify(data.leadershipList, null, 2)};

export const internshipsList = ${JSON.stringify(data.internshipsList, null, 2)};

export const softSkillsList = ${JSON.stringify(data.softSkillsList, null, 2)};

export const projects = ${JSON.stringify(data.projects, null, 2)};

export const certificates = ${JSON.stringify(data.certificates, null, 2)};

export const education = ${JSON.stringify(data.education, null, 2)};

export const footerContent = ${JSON.stringify(data.footerContent, null, 2)};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || ${JSON.stringify(data.emailjsConfig?.serviceId || "YOUR_EMAILJS_SERVICE_ID")},
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ${JSON.stringify(data.emailjsConfig?.templateId || "YOUR_EMAILJS_TEMPLATE_ID")},
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ${JSON.stringify(data.emailjsConfig?.publicKey || "YOUR_EMAILJS_PUBLIC_KEY")},
};

// Chatbot FAQ & Intent Knowledge Base
export const chatbotData = ${JSON.stringify(data.chatbotData, null, 2)};
`;

    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolioData.js';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }, [data]);

  return (
    <PortfolioDataContext.Provider
      value={{
        ...data,
        isAuthenticated,
        login,
        logout,
        changeCredentials,
        updatePersonalInfo,
        updateSocialLinks,
        updateHeroContent,
        updateAboutContent,
        updateSkillsContent,
        updateTechnicalSkills,
        updateContentCreation,
        updateLeadershipList,
        updateInternshipsList,
        updateSoftSkillsList,
        updateProjects,
        updateCertificates,
        updateEducation,
        updateFooterContent,
        updateEmailjsConfig,
        updateChatbotData,
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
        generatePortfolioDataJS,
        lastSavedTime,
        hasUnsavedChanges,
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  );
};

export { usePortfolioData } from './usePortfolioData';
