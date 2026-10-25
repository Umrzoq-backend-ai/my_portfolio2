import React, { useState, useEffect, useRef, useContext } from 'react';
import { chatbotData } from '../data/portfolioData';
import { ThemeContext } from '../App';
import umrzoqAvatar from '../assets/about/umrzoq-developer.jpg';

// ── Smart Multi-turn Intent & Keyword Engine ──────────────────
const findBestFaq = (input) => {
  const clean = input.toLowerCase().replace(/[?!.,;:#@$%^&*()_+=~`[\]{}|\\/<>]/g, ' ').trim();
  if (!clean) return null;

  const words = clean.split(/\s+/).filter(Boolean);

  let bestFaq = null;
  let highestScore = 0;

  for (const faq of chatbotData.faqs) {
    let score = 0;
    for (const kw of faq.keywords) {
      const lowerKw = kw.toLowerCase();
      // Exact phrase match gives highest weight
      if (clean.includes(lowerKw)) {
        score += lowerKw.length * 2.5;
      } else {
        // Individual word match
        const kwWords = lowerKw.split(/\s+/);
        for (const kwWord of kwWords) {
          if (words.includes(kwWord)) {
            score += kwWord.length;
          }
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestFaq = faq;
    }
  }

  if (highestScore > 0 && bestFaq) {
    return {
      text: bestFaq.answer,
      actions: bestFaq.actions || [],
    };
  }

  return {
    text: chatbotData.fallback,
    actions: [
      { text: "🧠 Tahlilchi AI", url: "https://tahlilchi-ai-ruddy.vercel.app" },
      { text: "🎙️ INTRA GROUP Radio", url: "https://frontend-tau-seven-19.vercel.app" },
      { text: "🤖 Telegram AI Tutor", url: "https://t.me/umrzoq_21?start=ai_tutor" },
      { text: "📄 Resume (PDF)", url: "/Umrzoq_Yulchiyev_Resume.pdf" },
      { text: "💬 Telegramda Bog'lanish", url: "https://t.me/umrzoq_21" },
    ],
  };
};

// ── Message Bubble Component ─────────────────────────────────
const MessageBubble = ({ msg, dark, onSelectPrompt }) => {
  const isBot = msg.role === 'bot';

  return (
    <div className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'} group`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#ff2a2a]/60 shrink-0 shadow-md shadow-red-500/20 mt-1 bg-black">
          <img
            src={umrzoqAvatar}
            alt="Umrzoq"
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[80%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm transition-all ${
          isBot
            ? dark
              ? 'bg-[#161616] text-white/95 rounded-tl-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
              : 'bg-white text-gray-900 rounded-tl-sm border border-gray-200 shadow-sm'
            : 'bg-[#ff2a2a] text-white rounded-tr-sm shadow-[0_4px_15px_rgba(255,42,42,0.3)]'
        }`}
      >
        {/* Message Text with Clean Formatting */}
        <div className="whitespace-pre-line font-normal selection:bg-red-500 selection:text-white">
          {msg.text}
        </div>

        {/* Clickable High-Tech Action Buttons */}
        {isBot && msg.actions && msg.actions.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
            {msg.actions.map((action, idx) => (
              action.url ? (
                <a
                  key={idx}
                  href={action.url}
                  target={action.url.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-[#ff2a2a]/15 hover:bg-[#ff2a2a] text-red-300 hover:text-white border border-[#ff2a2a]/30 transition-all duration-200 transform hover:scale-[1.03] active:scale-95 shadow-sm"
                >
                  <span>{action.text}</span>
                  {action.url.startsWith('http') && (
                    <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              ) : (
                <button
                  key={idx}
                  onClick={() => onSelectPrompt && onSelectPrompt(action.text)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 transition-all duration-200"
                >
                  <span>{action.text}</span>
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── Suggestion Pill ──────────────────────────────────────────
const SuggestionPill = ({ text, onClick, dark }) => (
  <button
    type="button"
    onClick={() => onClick(text)}
    className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 whitespace-nowrap shrink-0 border transform active:scale-95 ${
      dark
        ? 'bg-white/5 border-white/15 text-white/80 hover:bg-[#ff2a2a]/20 hover:text-red-300 hover:border-[#ff2a2a]/40'
        : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-red-50 hover:text-[#ff2a2a] hover:border-red-200'
    }`}
  >
    {text}
  </button>
);

// ── Main ChatBot Component ───────────────────────────────────
const ChatBot = () => {
  const { dark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [unread, setUnread] = useState(0);
  
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  // Navbar AI icon or external custom event trigger
  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setUnread(0);
    };
    window.addEventListener('openChatBot', handler);
    return () => window.removeEventListener('openChatBot', handler);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Smooth scroll logic that preserves header visibility for long messages
  const scrollToSmart = () => {
    if (!messagesContainerRef.current) return;
    const container = messagesContainerRef.current;
    
    // Slight delay to allow DOM render
    setTimeout(() => {
      const items = container.querySelectorAll('.group');
      if (items.length > 0) {
        const lastItem = items[items.length - 1];
        // If message is taller than 60% of visible container, scroll to start of it
        if (lastItem.offsetHeight > container.clientHeight * 0.6) {
          container.scrollTo({
            top: lastItem.offsetTop - 12,
            behavior: 'smooth',
          });
          return;
        }
      }
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }, 60);
  };

  useEffect(() => {
    scrollToSmart();
  }, [messages, isTyping]);

  // Auto-greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            role: 'bot',
            text: chatbotData.greeting,
            actions: [
              { text: "🧠 Tahlilchi AI Haqida", url: "https://tahlilchi-ai-ruddy.vercel.app" },
              { text: "🎙️ INTRA GROUP Demoni", url: "https://frontend-tau-seven-19.vercel.app" },
              { text: "🤖 Telegram AI Tutor", url: "https://t.me/umrzoq_21?start=ai_tutor" },
              { text: "💼 HR & Ish Taklifi", url: "https://t.me/umrzoq_21" },
            ],
            id: Date.now(),
          },
        ]);
        setHasGreeted(true);
      }, 600);
      return () => clearTimeout(timer);
    }
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, hasGreeted]);

  // Initial nudge notification after 3.5s
  useEffect(() => {
    if (!hasGreeted) {
      const timer = setTimeout(() => {
        if (!isOpen) setUnread(1);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [hasGreeted, isOpen]);

  const sendMessage = (textToSend) => {
    const userText = (textToSend || input).trim();
    if (!userText) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText, id: Date.now() }]);
    setIsTyping(true);

    const thinkingTime = Math.min(800, 450 + Math.random() * 300);

    setTimeout(() => {
      setIsTyping(false);
      const res = findBestFaq(userText);
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: res.text,
          actions: res.actions,
          id: Date.now() + 1,
        },
      ]);
    }, thinkingTime);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON (Hidden when open to eliminate duplicate close button) ── */}
      <button
        onClick={() => {
          setIsOpen(true);
          setUnread(0);
        }}
        aria-label="Open AI Assistant"
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(255,42,42,0.4)] flex items-center justify-center transition-all duration-300 transform ${
          isOpen
            ? 'scale-0 opacity-0 pointer-events-none'
            : 'scale-100 opacity-100 pointer-events-auto hover:scale-110 active:scale-95'
        }`}
      >
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-[#ff2a2a] text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-md animate-bounce border-2 border-black">
            {unread}
          </span>
        )}
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff2a2a] shadow-lg bg-black">
          <img
            src={umrzoqAvatar}
            alt="Umrzoq AI Assistant"
            className="w-full h-full object-cover object-top"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full" />
        </div>
      </button>

      {/* ── HIGH-TECH CHAT MODAL WINDOW ── */}
      <div
        className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] max-h-[85vh] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right border ${
          dark
            ? 'bg-[#0f0f0f]/98 border-white/10 text-white backdrop-blur-2xl'
            : 'bg-white/98 border-gray-200 text-gray-900 backdrop-blur-2xl'
        } ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-5 py-3.5 border-b select-none ${
            dark ? 'bg-[#151515] border-white/10' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ff2a2a] flex items-center justify-center shadow-md shadow-red-500/30 bg-black">
                <img
                  src={umrzoqAvatar}
                  alt="Umrzoq Yulchiyev"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#151515] rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold tracking-tight">Umrzoq's AI Assistant</h4>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-[#ff2a2a]/20 text-red-300 border border-[#ff2a2a]/30">
                  v2.5
                </span>
              </div>
              <p className="text-[11px] text-green-500 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Online · Tayyor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Yopish (Close)"
              className={`p-2 rounded-full transition-colors ${
                dark ? 'text-white/50 hover:text-white hover:bg-white/10' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages Body */}
        <div
          ref={messagesContainerRef}
          className={`flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3.5 custom-scrollbar ${
            dark ? 'bg-[#0a0a0a]' : 'bg-gray-50/40'
          }`}
        >
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              msg={msg}
              dark={dark}
              onSelectPrompt={(text) => sendMessage(text)}
            />
          ))}

          {isTyping && (
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#ff2a2a]/60 shrink-0 shadow-md bg-black">
                <img
                  src={umrzoqAvatar}
                  alt="Umrzoq"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className={`px-4 py-3 rounded-2xl rounded-tl-sm border ${
                  dark ? 'bg-[#161616] border-white/10' : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex gap-1.5 items-center h-4">
                  <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips (Always accessible at bottom) */}
        <div
          className={`px-3 py-2 border-t flex gap-1.5 overflow-x-auto custom-scrollbar select-none ${
            dark ? 'border-white/10 bg-[#111111]' : 'border-gray-200 bg-gray-50'
          }`}
        >
          {chatbotData.suggestions.map((suggestion) => (
            <SuggestionPill
              key={suggestion}
              text={suggestion}
              onClick={(prompt) => sendMessage(prompt)}
              dark={dark}
            />
          ))}
        </div>

        {/* Chat Input Field */}
        <div
          className={`px-3 py-3 border-t flex gap-2 items-center ${
            dark ? 'border-white/10 bg-[#141414]' : 'border-gray-200 bg-white'
          }`}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={chatbotData.placeholder}
            className={`flex-1 rounded-full px-4 py-2.5 text-xs sm:text-sm outline-none border transition-colors focus:border-[#ff2a2a] ${
              dark
                ? 'bg-[#1f1f1f] border-white/10 text-white placeholder-white/30'
                : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Xabar yuborish"
            className="w-10 h-10 rounded-full bg-[#ff2a2a] hover:bg-red-600 active:scale-95 flex items-center justify-center shrink-0 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,42,42,0.4)]"
          >
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
