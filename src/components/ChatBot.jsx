import React, { useState, useEffect, useRef } from 'react';
import { chatbotData } from '../data/portfolioData';

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
const MessageBubble = ({ msg }) => {
  const isBot = msg.role === 'bot';
  return (
    <div className={`flex items-end gap-2 ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white text-xs font-bold shrink-0 mb-1">
          U
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm
          ${isBot
            ? 'bg-[#1a1a1a] text-white rounded-bl-none border border-white/10'
            : 'bg-[#ff2a2a] text-white rounded-br-none'
          }`}
      >
        {msg.text}
      </div>
    </div>
  );
};

// ── suggestion pill ──────────────────────────────────────────
const SuggestionPill = ({ text, onClick }) => (
  <button
    onClick={() => onClick(text)}
    className="px-3 py-1.5 rounded-full border border-white/20 text-white/70 text-xs hover:border-[#ff2a2a] hover:text-white transition-all duration-200 whitespace-nowrap"
  >
    {text}
  </button>
);

// ── main component ───────────────────────────────────────────
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // greeting when first opened
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

  // show unread badge after 3s if closed
  useEffect(() => {
    if (!hasGreeted) {
      const timer = setTimeout(() => {
        if (!isOpen) setUnread(1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasGreeted, isOpen]);

  const sendMessage = (text) => {
    const userText = text || input.trim();
    if (!userText) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText, id: Date.now() }]);
    setIsTyping(true);

    const delay = 600 + Math.random() * 400;
    setTimeout(() => {
      const answer = getAnswer(userText);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: answer, id: Date.now() + 1 },
      ]);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <button
        onClick={() => { setIsOpen((o) => !o); setUnread(0); }}
        aria-label="Open chat assistant"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300
          ${isOpen ? 'bg-[#1a1a1a] border border-white/20 rotate-0' : 'bg-[#ff2a2a] hover:scale-110'}
        `}
      >
        {/* unread badge */}
        {!isOpen && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-[#ff2a2a] text-[10px] font-bold rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
        {isOpen ? (
          /* X icon */
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* chat icon */
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* ── CHAT WINDOW ── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl border border-white/10 bg-black flex flex-col overflow-hidden
          transition-all duration-300 origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        style={{ maxHeight: '520px' }}
      >
        {/* header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#111] border-b border-white/10">
          <div className="w-9 h-9 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white font-bold text-sm shrink-0">
            U
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold leading-tight">Umrzoq's Assistant</p>
            <p className="text-green-400 text-[11px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
              Online
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          style={{ minHeight: '200px', maxHeight: '320px' }}>
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}

          {/* typing indicator */}
          {isTyping && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-[#ff2a2a] flex items-center justify-center text-white text-xs font-bold shrink-0 mb-1">
                U
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-2xl rounded-bl-none">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* suggestions */}
        {messages.length <= 1 && !isTyping && (
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
            {chatbotData.suggestions.map((s) => (
              <SuggestionPill key={s} text={s} onClick={sendMessage} />
            ))}
          </div>
        )}

        {/* input */}
        <div className="px-4 py-3 border-t border-white/10 bg-[#0d0d0d] flex gap-2 items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={chatbotData.placeholder}
            className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#ff2a2a]/60 transition-colors"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send message"
            className="w-9 h-9 rounded-full bg-[#ff2a2a] flex items-center justify-center shrink-0 hover:bg-red-600 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
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
