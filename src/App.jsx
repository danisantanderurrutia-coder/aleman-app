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
import ClaraMentorModal from './components/ClaraMentorModal';
import IndieKaraokeTrainer from './components/IndieKaraokeTrainer';
import TopMusicPlayer from './components/TopMusicPlayer';
import { indieSongs } from './data/indieSongs';
import { getProgress, saveProgress, addXP } from './utils/storage';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState('checkin');
  const [progress, setProgress] = useState(getProgress());
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isClaraMentorOpen, setIsClaraMentorOpen] = useState(false);

  // Global Indie Music State
  const [activeSong, setActiveSong] = useState(indieSongs[0]);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  // Añadir día consecutivo, celebrar con confeti y abrir calendario
  const handleAddConsecutiveDay = () => {
    const todayDate = new Date().toISOString().split('T')[0];
    const checkInKey = `daily_checkin_${todayDate}`;
    const isCheckedInToday = !!progress[checkInKey];

    const currentStreak = progress.streak || 1;
    const newStreak = isCheckedInToday ? currentStreak : currentStreak + 1;
    if (!isCheckedInToday) {
      addXP(50);
    }

    const currentCurriculumDay = progress.curriculumDay || 1;
    const completedDays = progress.completedCurriculumDays || [];
    const newCompletedDays = completedDays.includes(currentCurriculumDay)
      ? completedDays
      : [...completedDays, currentCurriculumDay];

    const calendarLogs = progress.calendarLogs || {};
    const existingLog = calendarLogs[todayDate] || {};

    const updated = saveProgress({
      [checkInKey]: true,
      streak: newStreak,
      lastActiveDate: todayDate,
      completedCurriculumDays: newCompletedDays,
      calendarLogs: {
        ...calendarLogs,
        [todayDate]: {
          ...existingLog,
          date: todayDate,
          completed: true,
          syllabusDay: currentCurriculumDay,
          studyMinutes: existingLog.studyMinutes || 20,
          updatedAt: new Date().toISOString()
        }
      }
    });

    setProgress(updated);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsCalendarOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar with sparkle button linked to App Guide and Calendar button */}
      <Header 
        progress={progress} 
        onOpenGuide={() => setIsGuideOpen(true)} 
        onOpenCalendar={() => setIsCalendarOpen(true)}
        onGoToDaily={() => setActiveTab('checkin')}
        onOpenClaraMentor={() => setIsClaraMentorOpen(true)}
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
            onAddConsecutiveDay={handleAddConsecutiveDay}
            onOpenClaraMentor={() => setIsClaraMentorOpen(true)}
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
          <DatingGameTrainer 
            progress={progress} 
            setProgress={setProgress} 
            setActiveTab={setActiveTab}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onAddConsecutiveDay={handleAddConsecutiveDay}
          />
        )}
        {activeTab === 'sprint' && (
          <DailySprintTrainer 
            progress={progress} 
            setProgress={setProgress} 
            setActiveTab={setActiveTab}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onAddConsecutiveDay={handleAddConsecutiveDay}
          />
        )}
        {activeTab === 'grammar' && (
          <GrammarTrainer 
            progress={progress} 
            setProgress={setProgress} 
            setActiveTab={setActiveTab}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onAddConsecutiveDay={handleAddConsecutiveDay}
          />
        )}
        {activeTab === 'flashcards' && (
          <FlashcardsTrainer progress={progress} setProgress={setProgress} />
        )}
        {activeTab === 'articles' && (
          <ArticleGame 
            progress={progress} 
            setProgress={setProgress} 
            setActiveTab={setActiveTab}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onAddConsecutiveDay={handleAddConsecutiveDay}
          />
        )}
        {activeTab === 'sentences' && (
          <SentenceTrainer 
            progress={progress} 
            setProgress={setProgress} 
            setActiveTab={setActiveTab}
            onOpenCalendar={() => setIsCalendarOpen(true)}
            onAddConsecutiveDay={handleAddConsecutiveDay}
          />
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
          <ProgressDashboard 
            progress={progress} 
            setActiveTab={setActiveTab} 
            onOpenClaraMentor={() => setIsClaraMentorOpen(true)}
          />
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

      {/* Clara Mentor Notebook Modal */}
      <ClaraMentorModal
        isOpen={isClaraMentorOpen}
        onClose={() => setIsClaraMentorOpen(false)}
        progress={progress}
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
