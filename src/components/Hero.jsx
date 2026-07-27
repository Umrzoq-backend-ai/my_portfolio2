import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, socialLinks } from '../data/portfolioData';
import heroVideo from '../assets/hero video/Self-introduction_video_Junior_D…_202607260839.mp4';

const HERO_IMAGE = null;
const HERO_VIDEO = heroVideo;

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* ── BACKGROUND LAYER ── */}
      {HERO_VIDEO ? (
        /* Video background */
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : HERO_IMAGE ? (
        /* Image background */
        <img
          src={HERO_IMAGE}
          alt="Umrzoq Yulchiyev"
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        />
      ) : (
        /* Fallback animated gradient */
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2a2a] via-[#8b0000] to-black" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-black/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#ff2a2a]/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      )}

      {/* Dark overlay — makes text readable over any background */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

      {/* ── SOUND TOGGLE BUTTON ── */}
      {HERO_VIDEO && (
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-black/50 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#ff2a2a] transition-all duration-300"
        >
          {isMuted ? (
            /* muted icon */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            /* unmuted icon */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536A5 5 0 005.929 12a5 5 0 002.535 4.464M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      )}

      {/* ── LEFT FLOATING SOCIAL BAR ── */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125" aria-label="GitHub">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer"
          className="text-white/60 hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125" aria-label="Telegram">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.012 9.482c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.514 14.43l-2.948-.924c-.64-.203-.653-.64.136-.949l11.51-4.435c.534-.194 1.001.13.35.126z" />
          </svg>
        </a>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        {/* Left: Text & Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">

          {/* Mobile socials */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-4 mb-4 lg:hidden">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#ff2a2a]" aria-label="Telegram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.012 9.482c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.514 14.43l-2.948-.924c-.64-.203-.653-.64.136-.949l11.51-4.435c.534-.194 1.001.13.35.126z" /></svg>
            </a>
          </div>

          {/* Heading */}
          <h1 data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
            {heroContent.greeting}, <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p data-aos="fade-up" data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md">
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div data-aos="fade-up" data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full">
            <a href={heroContent.ctaPrimary.href}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              {heroContent.ctaPrimary.text}
            </a>
            <a href={heroContent.ctaSecondary.href}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
              {heroContent.ctaSecondary.text}
            </a>
            <a href={heroContent.ctaResume.href} download
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right: Play Reel button (works with video, decorative with image) */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
          onClick={HERO_VIDEO ? toggleVideo : undefined}
        >
          <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)] ${HERO_VIDEO ? 'group-hover:scale-110 group-hover:bg-[#ff2a2a]' : 'group-hover:scale-110 group-hover:bg-[#ff2a2a]'}`}>
            {isPlaying ? (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div data-aos="fade-up" data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
            viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
