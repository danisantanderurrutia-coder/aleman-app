import React from 'react';
import { X, BookOpen, Layers, Dices, Puzzle, MessageSquare, Calendar, Ghost, Palette, Heart, Award, Library, Sparkles, Check } from 'lucide-react';

export default function AppGuideModal({ isOpen, onClose, setActiveTab }) {
  if (!isOpen) return null;

  const features = [
    {
      id: 'grammar',
      name: '📚 Gramática A2',
      desc: 'Wechselpräpositionen (Akkusativ vs. Dativ), oraciones subordinadas con verbo al final (weil, dass), Perfekt con haben/sein, declinación de adjetivos y modales.',
      tab: 'grammar'
    },
    {
      id: 'flashcards',
      name: '🗂️ Léxico SRS (Fichas)',
      desc: 'Vocabulario A2 con código cromático (Azul Der, Rojo Die, Verde Das), audio nativo en alemán, ejemplos contextuales y algoritmo de repetición espaciada.',
      tab: 'flashcards'
    },
    {
      id: 'articles',
      name: '🎯 Der • Die • Das',
      desc: 'Minijuego de reflejos para automatizar el género nominal al instante mediante reglas de sufijos morfológicos (-ung, -heit, -chen, etc.).',
      tab: 'articles'
    },
    {
      id: 'sentences',
      name: '🧩 Sintaxis (Satzbau)',
      desc: 'Ensamblaje guiado de constituyentes oracionales para dominar la regla del verbo en posición 2 y la inversión temporal.',
      tab: 'sentences'
    },
    {
      id: 'dialogues',
      name: '💬 Situaciones Reales',
      desc: 'Transcripciones cotidianas con audio nativo (en el médico, restaurante, alquiler de piso, estación de tren) y notas sociolingüísticas.',
      tab: 'dialogues'
    },
    {
      id: 'sprint',
      name: '📅 7 Palabras Diarias',
      desc: 'El hack de microaprendizaje: dominar exactamente 7 palabras al día por áreas vitales (ropa, supermercado, casa) sin saturar tu cerebro.',
      tab: 'sprint'
    },
    {
      id: 'cognates',
      name: '👻 Cognados & Falsos Amigos',
      desc: 'Aprovecha las palabras idénticas al inglés y español, y esquiva las trampas mortales (Falsche Freunde) señalizadas con el logo fantasma 👻.',
      tab: 'cognates'
    },
    {
      id: 'dating',
      name: '❤️ Flirt & Date A2 (Simulador)',
      desc: 'Simulador conversacional tipo Duolingo con corazones y medidor de encanto en citas reales en Berlín, Múnich y Hamburgo usando objetos clave.',
      tab: 'dating'
    },
    {
      id: 'pixel',
      name: '🎨 Píxel 8×8 (Ludificación Visual)',
      desc: 'Codificación dual: asocia conceptos alemanes con pictogramas en grillas de 8×8 píxeles y dibuja tus propias mnemotecnias.',
      tab: 'pixel'
    },
    {
      id: 'test',
      name: '🏆 Test Diagnóstico A2',
      desc: 'Batería de 10 reactivos calibrados para medir tu porcentaje de retención y dictaminar si tienes nivel A2 consolidado.',
      tab: 'test'
    },
    {
      id: 'pedagogy',
      name: '📖 Biblioteca Pedagógica',
      desc: 'Fundamentos de lingüística aplicada: Comprehensible Input (Krashen), Enfoque Léxico (Chunking), TBLT, Shadowing y Curva del Olvido.',
      tab: 'pedagogy'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-stone-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-serif font-bold text-lg">
            D
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-stone-500">
              Guía Oficial de la Plataforma
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Cómo Funciona DeutschMeister A2
            </h2>
          </div>
        </div>

        <p className="text-stone-600 text-sm leading-relaxed mb-6 font-sans">
          Bienvenido al <em>Institut für deutsche Sprache</em>. Esta aplicación fue diseñada específicamente para hispanohablantes en nivel A2 que buscan una metodología rigurosa, didáctica y estimulante sin la frialdad de las apps genéricas.
        </p>

        {/* Suggested 15-Minute Daily Routine */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mb-8">
          <h4 className="font-serif font-bold text-stone-900 text-sm mb-1">
            ⏱️ Rutina de Estudio Recomendada (15 minutos al día):
          </h4>
          <ol className="text-xs text-stone-700 space-y-1 list-decimal list-inside font-sans leading-relaxed">
            <li><strong>3 min:</strong> Completa tu meta del <em>Sprint de 7 Palabras</em> del día.</li>
            <li><strong>4 min:</strong> Lee 1 regla de <em>Gramática</em> y haz 2 ejercicios prácticos.</li>
            <li><strong>4 min:</strong> Juega una ronda en <em>Der • Die • Das</em> o <em>Cognados Fantasma 👻</em>.</li>
            <li><strong>4 min:</strong> Practica una conversación en <em>Flirt & Date A2</em> o en <em>Situaciones Reales</em>.</li>
          </ol>
        </div>

        {/* Modules Directory */}
        <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest mb-4">
          Directorio de los 11 Módulos Didácticos:
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {features.map((feat) => (
            <div
              key={feat.id}
              onClick={() => {
                setActiveTab(feat.tab);
                onClose();
              }}
              className="p-4 rounded-2xl border border-stone-200 hover:border-stone-800 hover:bg-stone-50 transition-all cursor-pointer group text-left"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <h5 className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-900">
                  {feat.name}
                </h5>
                <span className="text-[10px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ir al módulo →
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans leading-normal">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs cursor-pointer shadow-xs"
          >
            Entendido, ¡empecemos a estudiar!
          </button>
        </div>
      </div>
    </div>
  );
}
