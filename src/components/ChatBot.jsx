import React, { useState, useEffect, useRef, useContext } from 'react';
import { chatbotData } from '../data/portfolioData';
import { ThemeContext } from '../App';

// ── keyword matching engine ──────────────────────────────────
const getAnswer = (input) => {
  const text = input.toLowerCase().trim();
  if (!text) return null;
  for (const faq of chatbotData.faqs) {
    if (faq.keywords.some((kw) => text.includes(kw))) {
      return faq.answer;
    }
  }
  return chatbotData.fallback;
};

// ── single message bubble ────────────────────────────────────
const MessageBubble = ({ msg, dark }) => {
  const isBot = msg.role === 'bot';
  return (
    <div className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white text-xs font-bold shrink-0 mb-1">
          U
        </div>
      )}
      <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm ${
        isBot
          ? dark
            ? 'bg-[#1a1a1a] text-white rounded-bl-none border border-white/10'
            : 'bg-gray-100 text-gray-900 rounded-bl-none border border-gray-200'
          : 'bg-[#ff2a2a] text-white rounded-br-none'
      }`}>
        {msg.text}
      </div>
    </div>
  );
};

// ── suggestion pill ──────────────────────────────────────────
const SuggestionPill = ({ text, onClick, dark }) => (
  <button
    onClick={() => onClick(text)}
    className={`px-3 py-1.5 rounded-full border text-xs transition-all duration-200 whitespace-nowrap hover:border-[#ff2a2a] hover:text-[#ff2a2a] ${
      dark ? 'border-white/20 text-white/70' : 'border-gray-300 text-gray-600'
    }`}
  >
    {text}
  </button>
);

// ── main component ───────────────────────────────────────────
const ChatBot = () => {
  const { dark } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Navbar AI icon bosganda ochish
  useEffect(() => {
    const handler = () => { setIsOpen(true); setUnread(0); };
    window.addEventListener('openChatBot', handler);
    return () => window.removeEventListener('openChatBot', handler);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([{ role: 'bot', text: chatbotData.greeting, id: Date.now() }]);
        setHasGreeted(true);
      }, 800);
      return () => clearTimeout(timer);
    }
    if (isOpen) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (!hasGreeted) {
      const timer = setTimeout(() => { if (!isOpen) setUnread(1); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasGreeted, isOpen]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText, id: Date.now() }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: getAnswer(userText), id: Date.now() + 1 }]);
    }, 600 + Math.random() * 400);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <button
        onClick={() => { setIsOpen((o) => !o); setUnread(0); }}
        aria-label="Open chat assistant"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300
          ${isOpen
            ? dark ? 'bg-[#1a1a1a] border border-white/20' : 'bg-white border border-gray-200 shadow-md'
            : 'bg-[#ff2a2a] hover:scale-110'
          }`}
      >
        {!isOpen && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#ff2a2a] text-[10px] font-bold rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
        {isOpen ? (
          <svg className={`w-5 h-5 ${dark ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* ── CHAT WINDOW ── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl flex flex-col overflow-hidden
          transition-all duration-300 origin-bottom-right border
          ${dark ? 'bg-black border-white/10' : 'bg-white border-gray-200'}
          ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        style={{ maxHeight: '520px' }}
      >
        {/* header */}
        <div className={`flex items-center gap-3 px-4 py-3 border-b ${dark ? 'bg-[#111] border-white/10' : 'bg-gray-50 border-gray-200'}`}>
          <div className="w-9 h-9 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white font-bold text-sm shrink-0">
            U
          </div>
          <div className="flex-1">
            <p className={`text-sm font-semibold leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}>Umrzoq's Assistant</p>
            <p className="text-green-500 text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
              Online
            </p>
          </div>
          <button onClick={() => setIsOpen(false)} className={`transition-colors ${dark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-700'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* messages */}
        <div className={`flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 ${dark ? '' : 'bg-gray-50/50'}`}
          style={{ minHeight: '200px', maxHeight: '320px' }}>
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} dark={dark} />
          ))}
          {isTyping && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white text-xs font-bold shrink-0 mb-1">U</div>
              <div className={`px-4 py-3 rounded-2xl rounded-bl-none border ${dark ? 'bg-[#1a1a1a] border-white/10' : 'bg-gray-100 border-gray-200'}`}>
                <div className="flex gap-1 items-center h-4">
                  <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${dark ? 'bg-white/50' : 'bg-gray-400'}`} style={{ animationDelay: '0ms' }} />
                  <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${dark ? 'bg-white/50' : 'bg-gray-400'}`} style={{ animationDelay: '150ms' }} />
                  <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${dark ? 'bg-white/50' : 'bg-gray-400'}`} style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* suggestions */}
        {messages.length <= 1 && !isTyping && (
          <div className={`px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none ${dark ? '' : 'bg-gray-50/50'}`}>
            {chatbotData.suggestions.map((s) => (
              <SuggestionPill key={s} text={s} onClick={sendMessage} dark={dark} />
            ))}
          </div>
        )}

        {/* input */}
        <div className={`px-4 py-3 border-t flex gap-2 items-center ${dark ? 'border-white/10 bg-[#0d0d0d]' : 'border-gray-200 bg-white'}`}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={chatbotData.placeholder}
            className={`flex-1 rounded-full px-4 py-2 text-sm outline-none border transition-colors focus:border-[#ff2a2a] ${
              dark
                ? 'bg-[#1a1a1a] border-white/10 text-white placeholder-white/30'
                : 'bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-[#ff2a2a] flex items-center justify-center shrink-0 hover:bg-red-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
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
