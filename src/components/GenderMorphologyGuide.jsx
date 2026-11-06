import React, { useState } from 'react';
import { 
  Bookmark, Sparkles, Volume2, Search, CheckCircle2, 
  HelpCircle, ShieldCheck, Filter, Lightbulb, BookOpen, ChevronRight
} from 'lucide-react';

export const genderSuffixesData = {
  die: {
    gender: 'DIE • Femininum',
    article: 'die',
    color: 'rose',
    accentBorder: 'border-rose-200',
    accentBg: 'bg-rose-50/70',
    accentText: 'text-rose-900',
    pillBg: 'bg-rose-100 text-rose-900 border-rose-300',
    badge: '100% o 95%+ Femenino',
    description: 'Sufijos abstractos germánicos y de origen latino/griego. Si un sustantivo termina en alguno de estos sufijos, es femenino prácticamente sin excepciones.',
    suffixes: [
      {
        suffix: '-ung',
        reliability: '100%',
        meaning: 'Sustantivación de verbos (acción o resultado del proceso).',
        examples: [
          { de: 'die Wohnung', es: 'el apartamento / la vivienda' },
          { de: 'die Prüfung', es: 'el examen' },
          { de: 'die Bedeutung', es: 'el significado' },
          { de: 'die Hoffnung', es: 'la esperanza' }
        ]
      },
      {
        suffix: '-heit',
        reliability: '100%',
        meaning: 'Cualidad, estado o condición abstracta.',
        examples: [
          { de: 'die Gesundheit', es: 'la salud' },
          { de: 'die Freiheit', es: 'la libertad' },
          { de: 'die Wahrheit', es: 'la verdad' },
          { de: 'die Schönheit', es: 'la belleza' }
        ]
      },
      {
        suffix: '-keit',
        reliability: '100%',
        meaning: 'Cualidad de adjetivos terminados en -bar, -ig, -lich, -sam.',
        examples: [
          { de: 'die Merkwürdigkeit', es: 'la rareza / lo curioso (del adj. merkwürdig)' },
          { de: 'die Ungewöhnlichkeit', es: 'lo inusual / la singularidad (del adj. ungewöhnlich)' },
          { de: 'die Möglichkeit', es: 'la posibilidad' },
          { de: 'die Pünktlichkeit', es: 'la puntualidad' },
          { de: 'die Einsamkeit', es: 'la soledad' },
          { de: 'die Fähigkeit', es: 'la habilidad / capacidad' }
        ]
      },
      {
        suffix: '-schaft',
        reliability: '100%',
        meaning: 'Colectividad, vínculo social, estado o profesión.',
        examples: [
          { de: 'die Freundschaft', es: 'la amistad' },
          { de: 'die Mannschaft', es: 'el equipo deportivo' },
          { de: 'die Gesellschaft', es: 'la sociedad' },
          { de: 'die Landschaft', es: 'el paisaje' }
        ]
      },
      {
        suffix: '-tät',
        reliability: '100%',
        meaning: 'Cognado directo de los términos en "-dad" o "-ty" en inglés.',
        examples: [
          { de: 'die Universität', es: 'la universidad' },
          { de: 'die Realität', es: 'la realidad' },
          { de: 'die Qualität', es: 'la calidad' },
          { de: 'die Aktivität', es: 'la actividad' }
        ]
      },
      {
        suffix: '-tion / -sion',
        reliability: '100%',
        meaning: 'Préstamos cultos latinos equivalentes al español "-ción / -sión".',
        examples: [
          { de: 'die Situation', es: 'la situación' },
          { de: 'die Information', es: 'la información' },
          { de: 'die Diskussion', es: 'la discusión' },
          { de: 'die Station', es: 'la estación / parada' }
        ]
      },
      {
        suffix: '-ik',
        reliability: '98%',
        meaning: 'Disciplinas académicas, técnicas o doctrinas.',
        examples: [
          { de: 'die Musik', es: 'la música' },
          { de: 'die Politik', es: 'la política' },
          { de: 'die Grammatik', es: 'la gramática' },
          { de: 'die Kritik', es: 'la crítica' }
        ]
      },
      {
        suffix: '-ie',
        reliability: '100%',
        meaning: 'Ciencias y conceptos abstractos acentuados en la última sílaba.',
        examples: [
          { de: 'die Familie', es: 'la familia' },
          { de: 'die Energie', es: 'la energía' },
          { de: 'die Philosophie', es: 'la filosofía' },
          { de: 'die Biografie', es: 'la biografía' }
        ]
      },
      {
        suffix: '-in',
        reliability: '100%',
        meaning: 'Morfema flexivo femenino de profesión o rol de persona.',
        examples: [
          { de: 'die Freundin', es: 'la amiga' },
          { de: 'die Ärztin', es: 'la médica' },
          { de: 'die Lehrerin', es: 'la profesora' },
          { de: 'die Studentin', es: 'la estudiante' }
        ]
      },
      {
        suffix: '-ei',
        reliability: '95%',
        meaning: 'Lugares de trabajo, talleres o tiendas artesanales.',
        examples: [
          { de: 'die Bäckerei', es: 'la panadería' },
          { de: 'die Bücherei', es: 'la biblioteca' },
          { de: 'die Polizei', es: 'la policía' },
          { de: 'die Metzgerei', es: 'la carnicería' }
        ]
      },
      {
        suffix: '-ur',
        reliability: '95%',
        meaning: 'Conceptos de creación, estructura o estado físico.',
        examples: [
          { de: 'die Natur', es: 'la naturaleza' },
          { de: 'die Kultur', es: 'la cultura' },
          { de: 'die Struktur', es: 'la estructura' },
          { de: 'die Figur', es: 'la figura' }
        ]
      },
      {
        suffix: '-anz / -enz',
        reliability: '100%',
        meaning: 'Equivalente al español "-ancia / -encia".',
        examples: [
          { de: 'die Existenz', es: 'la existencia' },
          { de: 'die Konferenz', es: 'la conferencia' },
          { de: 'die Distanz', es: 'la distancia' },
          { de: 'die Toleranz', es: 'la tolerancia' }
        ]
      }
    ],
    semanticRules: [
      'Árboles y flores: die Eiche (roble), die Tanne (abeto), die Rose (rosa).',
      'Frutas en su mayoría: die Banane, die Orange, die Zitrone, die Erdbeere (Excepción: der Apfel).',
      'La mayoría de bisílabos terminados en "-e" (75-80%): die Lampe, die Straße, die Tasche, die Reise, die Sonne, die Frage.'
    ]
  },
  der: {
    gender: 'DER • Maskulinum',
    article: 'der',
    color: 'blue',
    accentBorder: 'border-blue-200',
    accentBg: 'bg-blue-50/70',
    accentText: 'text-blue-900',
    pillBg: 'bg-blue-100 text-blue-900 border-blue-300',
    badge: 'Sufijos y Categorías Fijas',
    description: 'Sufijos que designan agentes masculinos, personas que profesan una doctrina o sustantivos vinculados a ciclos naturales y temporales.',
    suffixes: [
      {
        suffix: '-or',
        reliability: '100%',
        meaning: 'Sujetos, aparatos o títulos de origen latino con acento final.',
        examples: [
          { de: 'der Motor', es: 'el motor' },
          { de: 'der Professor', es: 'el profesor catedrático' },
          { de: 'der Reaktor', es: 'el reactor' },
          { de: 'der Faktor', es: 'el factor' }
        ]
      },
      {
        suffix: '-ling',
        reliability: '100%',
        meaning: 'Personas o seres caracterizados por un rasgo particular.',
        examples: [
          { de: 'der Frühling', es: 'la primavera' },
          { de: 'der Schmetterling', es: 'la mariposa' },
          { de: 'der Lehrling', es: 'el aprendiz' },
          { de: 'der Flüchtling', es: 'el refugiado' }
        ]
      },
      {
        suffix: '-ist',
        reliability: '100%',
        meaning: 'Profesiones, roles o partidarios de una corriente ideológica.',
        examples: [
          { de: 'der Polizist', es: 'el policía' },
          { de: 'der Tourist', es: 'el turista' },
          { de: 'der Spezialist', es: 'el especialista' },
          { de: 'der Journalist', es: 'el periodista' }
        ]
      },
      {
        suffix: '-ismus',
        reliability: '100%',
        meaning: 'Doctrinas, ideologías, movimientos o tendencias.',
        examples: [
          { de: 'der Tourismus', es: 'el turismo' },
          { de: 'der Optimismus', es: 'el optimismo' },
          { de: 'der Realismus', es: 'el realismo' },
          { de: 'der Mechanismus', es: 'el mecanismo' }
        ]
      },
      {
        suffix: '-er',
        reliability: '90%',
        meaning: 'Agente que realiza la acción verbal o gentilicio masculino.',
        examples: [
          { de: 'der Lehrer', es: 'el profesor' },
          { de: 'der Fahrer', es: 'el conductor' },
          { de: 'der Bäcker', es: 'el panadero' },
          { de: 'der Berliner', es: 'el berlinés' }
        ]
      },
      {
        suffix: '-ant / -ent',
        reliability: '95%',
        meaning: 'Personas en formación o ejecutantes de una función.',
        examples: [
          { de: 'der Student', es: 'el estudiante' },
          { de: 'der Assistent', es: 'el asistente' },
          { de: 'der Demonstrant', es: 'el manifestante' },
          { de: 'der Patient', es: 'el paciente' }
        ]
      }
    ],
    semanticRules: [
      'Días de la semana (100%): der Montag, der Dienstag, der Mittwoch, der Donnerstag, der Freitag, der Samstag, der Sonntag.',
      'Meses del año (100%): der Januar, der Februar, der März, der April, der Mai, der Juni...',
      'Estaciones del año (100%): der Frühling, der Sommer, der Herbst, der Winter.',
      'Puntos cardinales (100%): der Norden, der Süden, der Osten, der Westen.',
      'Fenómenos meteorológicos y precipitaciones: der Regen (la lluvia), der Schnee (la nieve), der Wind (el viento), der Nebel (la niebla).',
      'Marcas de automóviles: der BMW, der Mercedes, der Volkswagen, der Audi, der Porsche.',
      'Bebidas alcohólicas (casi todas): der Wein, der Wodka, der Tequila, der Gin, der Rum (Gran excepción: das Bier).'
    ]
  },
  das: {
    gender: 'DAS • Neutrum',
    article: 'das',
    color: 'emerald',
    accentBorder: 'border-emerald-200',
    accentBg: 'bg-emerald-50/70',
    accentText: 'text-emerald-900',
    pillBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    badge: 'Diminutivos y Sustantivaciones',
    description: 'En alemán, la neutralidad abarca diminutivos morfológicos (anulando cualquier género biológico), verbos convertidos en sustantivos y préstamos técnicos.',
    suffixes: [
      {
        suffix: '-chen / -lein',
        reliability: '100% Absoluto',
        meaning: 'Diminutivo germánico inquebrantable. Convierte CUALQUIER sustantivo en neutro.',
        examples: [
          { de: 'das Mädchen', es: 'la chica / la niña (biológicamente femenina, gramaticalmente neutra)' },
          { de: 'das Brötchen', es: 'el panecillo' },
          { de: 'das Hähnchen', es: 'el pollo asado' },
          { de: 'das Fräulein', es: 'la señorita' }
        ]
      },
      {
        suffix: 'Infinitivo Verbal Sustantivado',
        reliability: '100% Absoluto',
        meaning: 'Cualquier infinitivo con mayúscula que designa el acto de hacer la acción.',
        examples: [
          { de: 'das Essen', es: 'la comida (del verbo essen)' },
          { de: 'das Trinken', es: 'la bebida (del verbo trinken)' },
          { de: 'das Lernen', es: 'el aprendizaje / el estudiar' },
          { de: 'das Leben', es: 'la vida (del verbo leben)' }
        ]
      },
      {
        suffix: 'Adjetivo Sustantivado Abstracto',
        reliability: '100% Absoluto',
        meaning: 'Conceptos abstractos formados a partir de un adjetivo (equivalente al "lo + adjetivo" en español).',
        examples: [
          { de: 'das Merkwürdige', es: 'lo curioso / lo extraño (del adj. merkwürdig)' },
          { de: 'das Ungewöhnliche', es: 'lo inusual / lo insólito (del adj. ungewöhnlich)' },
          { de: 'das Gute', es: 'lo bueno' },
          { de: 'das Neue', es: 'lo nuevo' }
        ]
      },
      {
        suffix: '-ment',
        reliability: '100%',
        meaning: 'Instrumentos, documentos y procesos de raíz latina.',
        examples: [
          { de: 'das Dokument', es: 'el documento' },
          { de: 'das Instrument', es: 'el instrumento' },
          { de: 'das Experiment', es: 'el experimento' },
          { de: 'das Medikament', es: 'el medicamento' }
        ]
      },
      {
        suffix: '-um',
        reliability: '100%',
        meaning: 'Instituciones, espacios culturales o términos científicos latinos.',
        examples: [
          { de: 'das Museum', es: 'el museo' },
          { de: 'das Zentrum', es: 'el centro' },
          { de: 'das Datum', es: 'la fecha' },
          { de: 'das Forum', es: 'el foro' }
        ]
      },
      {
        suffix: '-tum',
        reliability: '95%',
        meaning: 'Condición, estado general o posesión.',
        examples: [
          { de: 'das Eigentum', es: 'la propiedad' },
          { de: 'das Wachstum', es: 'el crecimiento' },
          { de: 'das Bürgertum', es: 'la burguesía' }
        ]
      },
      {
        suffix: '-ma',
        reliability: '95%',
        meaning: 'Términos conceptuales de origen griego clásico.',
        examples: [
          { de: 'das Thema', es: 'el tema' },
          { de: 'das Problem', es: 'el problema' },
          { de: 'das Drama', es: 'el drama' },
          { de: 'das Klima', es: 'el clima' }
        ]
      }
    ],
    semanticRules: [
      'Prefijo colectivo "Ge-" (la gran mayoría neutros): das Gebäude (edificio), das Gespräch (conversación), das Getränk (bebida), das Gebirge (cordillera), das Gemälde (cuadro).',
      'Metales y elementos químicos: das Gold (oro), das Silber (plata), das Eisen (hierro), das Kupfer (cobre), das Aluminium.',
      'Fracciones numéricas: das Drittel (el tercio), das Viertel (el cuarto).'
    ]
  }
};

export default function GenderMorphologyGuide() {
  const [selectedGenderFilter, setSelectedGenderFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const gendersList = selectedGenderFilter === 'all' 
    ? ['die', 'der', 'das'] 
    : [selectedGenderFilter];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Philological Clarification Box */}
      <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-300/80 text-amber-950 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center text-xl shrink-0 shadow-2xs">
            💡
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                Distinción Epistemológica Fundamental
              </span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 font-semibold px-2 py-0.5 rounded">
                Morfología ≠ Sintaxis
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
              ¿Por qué el género del sustantivo es independiente de los casos gramaticales?
            </h3>
            <p className="text-xs text-stone-700 mt-1.5 leading-relaxed font-serif">
              <strong>El género es intrínseco e inmutable:</strong> Una palabra como <em>die Wohnung</em> (el piso) o <em>das Mädchen</em> (la chica) tiene un género propio que jamás cambia; se aprende por su <strong>sufijo morfológico</strong>. Por el contrario, los <strong>casos</strong> (Nominativo, Acusativo, Dativo, Genitivo) indican el <em>rol sintáctico</em> que cumple en una frase específica (si actúa de sujeto, objeto directo o beneficiario).
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
              <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-stone-800">
                <span className="font-bold text-amber-900 block mb-0.5">1. Género (Determinación):</span>
                <em>die Wohnung</em> termina en <strong>-ung</strong> → ¡Siempre femenino (die)!
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-stone-800">
                <span className="font-bold text-amber-900 block mb-0.5">2. Caso (Declinación según función):</span>
                "Ich sehe <strong>die</strong> Wohnung" (Akk) • "In <strong>der</strong> Wohnung" (Dat).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'all', label: 'Todos los Géneros' },
            { id: 'die', label: 'DIE (Femininum)' },
            { id: 'der', label: 'DER (Maskulinum)' },
            { id: 'das', label: 'DAS (Neutrum)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedGenderFilter(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedGenderFilter === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-56">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar sufijo (ej: -ung, -heit)..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white font-mono"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-mono"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Gender Dossiers */}
      <div className="space-y-10">
        {gendersList.map((gKey) => {
          const gData = genderSuffixesData[gKey];
          
          // Filter suffixes by search term if present
          const filteredSuffixes = gData.suffixes.filter((item) => {
            if (!searchTerm) return true;
            const term = searchTerm.toLowerCase().replace(/^-/, '');
            const cleanSuffix = item.suffix.toLowerCase().replace(/^-/, '');
            const matchSuffix = cleanSuffix.includes(term);
            const matchExamples = item.examples.some(ex => 
              ex.de.toLowerCase().includes(term) || ex.es.toLowerCase().includes(term)
            );
            return matchSuffix || matchExamples;
          });

          if (searchTerm && filteredSuffixes.length === 0) return null;

          return (
            <div 
              key={gKey} 
              className={`p-7 sm:p-9 rounded-3xl bg-white border ${gData.accentBorder} shadow-sm space-y-6`}
            >
              {/* Gender Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider ${gData.pillBg}`}>
                      {gData.gender}
                    </span>
                    <span className="text-xs font-mono font-semibold text-stone-500">
                      {gData.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 font-serif leading-relaxed max-w-2xl">
                    {gData.description}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl font-serif font-extrabold text-stone-900 block leading-none uppercase">
                    {gData.article}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                    {filteredSuffixes.length} Sufijos Clave
                  </span>
                </div>
              </div>

              {/* Suffix Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSuffixes.map((suf, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/90 hover:border-stone-400 hover:bg-stone-50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-base font-bold text-stone-900 bg-white px-2.5 py-1 rounded-xl border border-stone-200 shadow-2xs">
                          {suf.suffix}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          {suf.reliability}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-600 font-sans leading-relaxed mb-3">
                        {suf.meaning}
                      </p>
                    </div>

                    {/* Word Examples List */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-200/60">
                      {suf.examples.map((ex, exIdx) => (
                        <div 
                          key={exIdx}
                          className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-white transition-colors"
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="font-serif font-bold text-stone-900">{ex.de}</span>
                            <span className="text-[10px] font-serif italic text-stone-400 truncate">({ex.es})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => speak(ex.de)}
                            className="p-1 rounded text-stone-400 hover:text-stone-900 hover:bg-stone-100 cursor-pointer shrink-0 transition-colors"
                            title={`Escuchar "${ex.de}" en alemán`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Semantic Rules Box */}
              {gData.semanticRules && (
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 text-xs">
                  <div className="flex items-center gap-2 font-mono font-bold text-stone-800 uppercase text-[11px] mb-2.5">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>Reglas Semánticas Globales para {gData.gender}:</span>
                  </div>
                  <ul className="space-y-1.5 text-stone-600 font-serif text-xs list-disc list-inside">
                    {gData.semanticRules.map((rule, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">{rule}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
