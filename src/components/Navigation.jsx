import React from 'react';
import { 
  Sun, Compass, BookOpen, Layers, Dices, Puzzle, MessageSquare, 
  Ghost, Calendar, Palette, Award, Library, BarChart3, Heart, Music 
} from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'checkin', label: 'Día & Misiones ☀️', icon: Sun, tag: 'Check-In' },
    { id: 'roadmap', label: 'Ruta B1/B2 🗺️', icon: Compass, tag: 'Progresión' },
    { id: 'karaoke', label: 'Indie Karaoke 🎸', icon: Music, tag: 'Música' },
    { id: 'dating', label: 'Flirt & Date ❤️', icon: Heart, tag: 'Simulador' },
    { id: 'sprint', label: '7 Palabras', icon: Calendar, tag: 'Sprint Diario' },
    { id: 'grammar', label: 'Gramática A2', icon: BookOpen, tag: 'Doctrina' },
    { id: 'flashcards', label: 'Léxico SRS', icon: Layers, tag: 'Fichas' },
    { id: 'articles', label: 'Der • Die • Das', icon: Dices, tag: 'Género' },
    { id: 'sentences', label: 'Sintaxis', icon: Puzzle, tag: 'Satzbau' },
    { id: 'dialogues', label: 'Situaciones', icon: MessageSquare, tag: 'Vida Real' },
    { id: 'cognates', label: 'Cognados 👻', icon: Ghost, tag: 'Falsos Amigos' },
    { id: 'pixel', label: 'Píxel 8×8', icon: Palette, tag: 'Visual' },
    { id: 'test', label: 'Test A2', icon: Award, tag: 'Diagnóstico' },
    { id: 'pedagogy', label: 'Biblioteca', icon: Library, tag: 'Didáctica' },
    { id: 'dashboard', label: 'Expediente', icon: BarChart3, tag: 'Métricas' },
  ];

  return (
    <nav className="bg-white/90 border-b border-stone-200 px-6 py-2 sticky top-[69px] z-40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-start overflow-x-auto gap-1.5 py-1 no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-stone-900 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-medium'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
              <span>{tab.label}</span>
              {tab.tag && (
                <span
                  className={`hidden xl:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-stone-800 text-stone-300' : 'text-stone-400'
                  }`}
                >
                  {tab.tag}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
