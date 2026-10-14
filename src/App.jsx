import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DailyCheckInPanel from './components/DailyCheckInPanel';
import ProgressionRoadmap from './components/ProgressionRoadmap';
import GrammarTrainer from './components/GrammarTrainer';
import FlashcardsTrainer from './components/FlashcardsTrainer';
import ArticleGame from './components/ArticleGame';
import SentenceTrainer from './components/SentenceTrainer';
import DialoguesTrainer from './components/DialoguesTrainer';
import DailySprintTrainer from './components/DailySprintTrainer';
import CognatesTrainer from './components/CognatesTrainer';
import PixelGame from './components/PixelGame';
import DatingGameTrainer from './components/DatingGameTrainer';
import SelfTest from './components/SelfTest';
import PedagogyLibrary from './components/PedagogyLibrary';
import ProgressDashboard from './components/ProgressDashboard';
import AppGuideModal from './components/AppGuideModal';
import ProgressCalendarModal from './components/ProgressCalendarModal';
import IndieKaraokeTrainer from './components/IndieKaraokeTrainer';
import TopMusicPlayer from './components/TopMusicPlayer';
import { indieSongs } from './data/indieSongs';
import { getProgress } from './utils/storage';

export default function App() {
  const [activeTab, setActiveTab] = useState('checkin');
  const [progress, setProgress] = useState(getProgress());
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Global Indie Music State
  const [activeSong, setActiveSong] = useState(indieSongs[0]);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar with sparkle button linked to App Guide and Calendar button */}
      <Header 
        progress={progress} 
        onOpenGuide={() => setIsGuideOpen(true)} 
        onOpenCalendar={() => setIsCalendarOpen(true)}
      />

      {/* Top Indie Music Player Bar */}
      <TopMusicPlayer
        activeSong={activeSong}
        setActiveSong={setActiveSong}
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
        playbackTime={playbackTime}
        setPlaybackTime={setPlaybackTime}
        onOpenKaraoke={() => setActiveTab('karaoke')}
      />

      {/* Main Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic View Workspace */}
      <main className="flex-1 pb-20">
        {activeTab === 'checkin' && (
          <DailyCheckInPanel 
            progress={progress} 
            setProgress={setProgress} 
            setActiveTab={setActiveTab} 
            onOpenCalendar={() => setIsCalendarOpen(true)}
          />
        )}
        {activeTab === 'roadmap' && (
          <ProgressionRoadmap progress={progress} setProgress={setProgress} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'karaoke' && (
          <IndieKaraokeTrainer 
            progress={progress} 
            setProgress={setProgress}
            currentSong={activeSong}
            setCurrentSong={setActiveSong}
            isPlaying={isPlayingMusic}
            setIsPlaying={setIsPlayingMusic}
            playbackTime={playbackTime}
            setPlaybackTime={setPlaybackTime}
          />
        )}
        {activeTab === 'dating' && (
          <DatingGameTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'sprint' && (
          <DailySprintTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'grammar' && (
          <GrammarTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'flashcards' && (
          <FlashcardsTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'articles' && (
          <ArticleGame progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'sentences' && (
          <SentenceTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'dialogues' && (
          <DialoguesTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'cognates' && (
          <CognatesTrainer />
        )}
        {activeTab === 'pixel' && (
          <PixelGame progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'test' && (
          <SelfTest progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'pedagogy' && (
          <PedagogyLibrary setActiveTab={setActiveTab} />
        )}
        {activeTab === 'dashboard' && (
          <ProgressDashboard progress={progress} setActiveTab={setActiveTab} />
        )}
      </main>

      {/* App Guide Modal triggered by Sparkle Button */}
      <AppGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        setActiveTab={setActiveTab}
      />

      {/* Progress Calendar Modal triggered by 📅 Button */}
      <ProgressCalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        progress={progress}
        setProgress={setProgress}
        setActiveTab={setActiveTab}
      />

      {/* Colophon */}
      <footer className="border-t border-stone-200 bg-white py-8 px-6 text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-800">DeutschMeister</span>
            <span className="text-stone-300">•</span>
            <span>Gemeinsamer europäischer Referenzrahmen für Sprachen (GeR / MCER A2-B2)</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400 font-mono text-[11px]">
            <span>13 Módulos Didácticos Integrados</span>
            <span>•</span>
            <span>Fonética Web Speech de-DE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
