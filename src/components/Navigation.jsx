import React from 'react';
import { 
  Sun, Compass, BookOpen, Layers, Dices, Puzzle, MessageSquare, 
  Ghost, Calendar, Palette, Award, Library, BarChart3, Heart, Music 
} from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab }) {
  // Botones limpios: solo título entre emojis, sin subtítulos
  const tabs = [
    { id: 'checkin', label: '☀️ Día y Misiones ☀️', icon: Sun },
    { id: 'roadmap', label: '🗺️ Ruta B1/B2 🗺️', icon: Compass },
    { id: 'karaoke', label: '🎸 Indie Karaoke 🎸', icon: Music },
    { id: 'dating', label: '❤️ Flirt & Date ❤️', icon: Heart },
    { id: 'sprint', label: '⚡ 7 Palabras ⚡', icon: Calendar },
    { id: 'grammar', label: '📖 Gramática A2 📖', icon: BookOpen },
    { id: 'flashcards', label: '🗂️ Léxico SRS 🗂️', icon: Layers },
    { id: 'articles', label: '🎲 Der • Die • Das 🎲', icon: Dices },
    { id: 'sentences', label: '🧱 Sintaxis 🧱', icon: Puzzle },
    { id: 'dialogues', label: '🎙️ Situaciones 🎙️', icon: MessageSquare },
    { id: 'cognates', label: '👻 Falsos Amigos 👻', icon: Ghost },
    { id: 'pixel', label: '🎨 Píxel 8×8 🎨', icon: Palette },
    { id: 'test', label: '🏆 Test A2 🏆', icon: Award },
    { id: 'pedagogy', label: '📚 Biblioteca 📚', icon: Library },
    { id: 'dashboard', label: '📊 Expediente 📊', icon: BarChart3 },
  ];

  return (
    <nav className="bg-white/90 border-b border-stone-200 px-6 py-2 sticky top-[69px] z-40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-start overflow-x-auto gap-2 py-1 no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-stone-900 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-medium border border-transparent'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
