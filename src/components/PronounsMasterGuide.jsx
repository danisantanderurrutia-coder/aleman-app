import React, { useState } from 'react';
import { speechService } from '../utils/speech';
import { Volume2, Sparkles, HelpCircle, CheckCircle2, ChevronRight, Layers, ArrowRight } from 'lucide-react';

export const pronounsData = [
  {
    person: '1ª pers. singular',
    nom: 'ich',
    nomEs: 'yo',
    akk: 'mich',
    akkEs: 'a mí / me (objeto directo)',
    dat: 'mir',
    datEs: 'a mí / me / para mí (objeto indirecto)',
    poss: 'mein',
    possEs: 'mi / mío',
    refl: 'mich (Akk) / mir (Dat)',
    exampleNom: 'Ich lerne fleißig Deutsch.',
    exampleNomEs: 'Yo aprendo alemán con dedicación. (Sujeto: ¿quién realiza la acción?)',
    exampleAkk: 'Clara sieht mich im Café.',
    exampleAkkEs: 'Clara me ve (a mí) en el café. (Objeto directo: ¿a quién ve?)',
    exampleDat: 'Kannst du mir bitte helfen?',
    exampleDatEs: '¿Puedes ayudarme (a mí)? (Objeto indirecto: helfen exige Dativ).',
    ruleTip: '⭐ "mir" es obligatorio con verbos de Dativo (helfen, danken, gefallen) y tras preposiciones como "mit mir", "bei mir", "zu mir".'
  },
  {
    person: '2ª pers. singular',
    nom: 'du',
    nomEs: 'tú',
    akk: 'dich',
    akkEs: 'a ti / te (objeto directo)',
    dat: 'dir',
    datEs: 'a ti / te / para ti (objeto indirecto)',
    poss: 'dein',
    possEs: 'tu / tuyo',
    refl: 'dich (Akk) / dir (Dat)',
    exampleNom: 'Du wohnst in Berlin.',
    exampleNomEs: 'Tú vives en Berlín. (Sujeto)',
    exampleAkk: 'Ich liebe dich über alles.',
    exampleAkkEs: 'Te amo a ti con locura. (Objeto directo)',
    exampleDat: 'Wie geht es dir heute?',
    exampleDatEs: '¿Cómo te va a ti hoy? (Dativ)',
    ruleTip: '⭐ "Wie geht es dir?" lleva "dir" porque el sujeto formal es "es" y tú eres quien recibe el estado.'
  },
  {
    person: '3ª pers. masc. (él)',
    nom: 'er',
    nomEs: 'él',
    akk: 'ihn',
    akkEs: 'a él / lo (objeto directo)',
    dat: 'ihm',
    datEs: 'a él / le (objeto indirecto)',
    poss: 'sein',
    possEs: 'su / suyo (de él)',
    refl: 'sich',
    exampleNom: 'Er trinkt einen Espresso.',
    exampleNomEs: 'Él bebe un espresso. (Sujeto)',
    exampleAkk: 'Ich kenne ihn seit vielen Jahren.',
    exampleAkkEs: 'Lo conozco a él desde hace muchos años. (Akkusativ: ihn)',
    exampleDat: 'Ich antworte ihm sofort.',
    exampleDatEs: 'Le respondo a él de inmediato. (Dativ: antworten exige ihm)',
    ruleTip: '⚠️ ¡Cuidado con el cambio der → den / er → ihn en acusativo!'
  },
  {
    person: '3ª pers. fem. (ella)',
    nom: 'sie',
    nomEs: 'ella',
    akk: 'sie',
    akkEs: 'a ella / la (objeto directo)',
    dat: 'ihr',
    datEs: 'a ella / le (objeto indirecto)',
    poss: 'ihr',
    possEs: 'su / suyo (de ella)',
    refl: 'sich',
    exampleNom: 'Sie arbeitet an der Universität.',
    exampleNomEs: 'Ella trabaja en la universidad. (Sujeto)',
    exampleAkk: 'Wir laden sie zur Party ein.',
    exampleAkkEs: 'La invitamos a ella a la fiesta. (Akkusativ: sie no cambia)',
    exampleDat: 'Ich schenke ihr eine Blume.',
    exampleDatEs: 'Le regalo a ella una flor. (Dativ: ihr)',
    ruleTip: '⭐ "ihr" como pronombre dativo significa "a ella" (Ich gebe ihr das Buch). No confundir con "ihr" vosotros.'
  },
  {
    person: '3ª pers. neutro (ello)',
    nom: 'es',
    nomEs: 'ello / él / ella (neutro)',
    akk: 'es',
    akkEs: 'a ello / lo (objeto directo)',
    dat: 'ihm',
    datEs: 'a ello / le (objeto indirecto)',
    poss: 'sein',
    possEs: 'su / suyo (de ello)',
    refl: 'sich',
    exampleNom: 'Das Kind lacht, es ist glücklich.',
    exampleNomEs: 'El niño ríe, (él) está feliz. (Sujeto neutro)',
    exampleAkk: 'Ich nehme es mit nach Hause.',
    exampleAkkEs: 'Me lo llevo (a ello) a casa. (Akkusativ)',
    exampleDat: 'Das Essen schmeckt ihm gut.',
    exampleDatEs: 'La comida le sabe bien (al niño). (Dativ: ihm)',
    ruleTip: 'Comparte la forma dativo "ihm" con el masculino (er/es → ihm).'
  },
  {
    person: '1ª pers. plural (nosotros)',
    nom: 'wir',
    nomEs: 'nosotros / nosotras',
    akk: 'uns',
    akkEs: 'a nosotros / nos (objeto directo)',
    dat: 'uns',
    datEs: 'a nosotros / nos / para nosotros (objeto indirecto)',
    poss: 'unser',
    possEs: 'nuestro / nuestra',
    refl: 'uns',
    exampleNom: 'Wir kochen heute Abend zusammen.',
    exampleNomEs: 'Nosotros cocinamos juntos hoy por la tarde. (Sujeto: ¿Quién cocina? → wir)',
    exampleAkk: 'Der Reiseleiter sucht uns am Bahnhof.',
    exampleAkkEs: 'El guía nos busca a nosotros en la estación. (Objeto directo: ¿A quién busca? → uns)',
    exampleDat: 'Der Professor erklärt uns die Grammatik.',
    exampleDatEs: 'El profesor nos explica la gramática a nosotros. (Objeto indirecto: ¿A quién le explica? → uns)',
    ruleTip: '⭐ ¡LA GRAN DISTINCIÓN WIR vs UNS!: "wir" SIEMPRE hace el verbo ("Wir gehen"). "uns" NUNCA hace el verbo; lo recibe ("Er sieht uns" / "Er hilft uns"). "unser" acompaña a una cosa ("unser Haus").'
  },
  {
    person: '2ª pers. plural (vosotros)',
    nom: 'ihr',
    nomEs: 'vosotros / vosotras',
    akk: 'euch',
    akkEs: 'a vosotros / os (objeto directo)',
    dat: 'euch',
    datEs: 'a vosotros / os / para vosotros (objeto indirecto)',
    poss: 'euer (eure)',
    possEs: 'vuestro / de ustedes (informal)',
    refl: 'euch',
    exampleNom: 'Ihr kommt immer pünktlich.',
    exampleNomEs: 'Vosotros venís siempre puntuales. (Sujeto: ¿quién viene?)',
    exampleAkk: 'Ich höre euch sehr gut.',
    exampleAkkEs: 'Os escucho a vosotros muy bien. (Objeto directo: ¿a quién escucho? → euch)',
    exampleDat: 'Ich wünsche euch einen schönen Tag!',
    exampleDatEs: '¡Os deseo a vosotros un buen día! (Objeto indirecto: ¿a quién le deseo? → euch)',
    ruleTip: '⭐ Igual que "uns", "euch" sirve tanto para Acusativo como para Dativo. "ihr" es el sujeto ("Ihr lernt").'
  },
  {
    person: '3ª pers. plural (ellos)',
    nom: 'sie (minúscula)',
    nomEs: 'ellos / ellas',
    akk: 'sie',
    akkEs: 'a ellos / a ellas / los / las',
    dat: 'ihnen',
    datEs: 'a ellos / a ellas / les',
    poss: 'ihr',
    possEs: 'su / de ellos',
    refl: 'sich',
    exampleNom: 'Sie schlafen noch tief.',
    exampleNomEs: 'Ellos todavía duermen profundamente. (Sujeto plural)',
    exampleAkk: 'Ich habe sie im Park getroffen.',
    exampleAkkEs: 'Los encontré a ellos en el parque. (Akkusativ: sie)',
    exampleDat: 'Ich bringe ihnen das Frühstück.',
    exampleDatEs: 'Les llevo a ellos el desayuno. (Dativ plural: ihnen)',
    ruleTip: 'En Dativo se transforma en "ihnen" con -n final (igual que la marca de dativo plural den Kindern).'
  },
  {
    person: 'Formal (Usted / Ustedes)',
    nom: 'Sie (mayúscula)',
    nomEs: 'Usted / Ustedes',
    akk: 'Sie',
    akkEs: 'a Usted / a Ustedes / lo / la / los / las',
    dat: 'Ihnen',
    datEs: 'a Usted / a Ustedes / le / les',
    poss: 'Ihr',
    possEs: 'su / de Usted / de Ustedes',
    refl: 'sich',
    exampleNom: 'Können Sie das bitte wiederholen?',
    exampleNomEs: '¿Puede Usted repetir eso por favor? (Sujeto de cortesía)',
    exampleAkk: 'Wir erwarten Sie um 15 Uhr.',
    exampleAkkEs: 'Lo esperamos a Usted a las 15 horas. (Akkusativ de cortesía)',
    exampleDat: 'Wie kann ich Ihnen helfen?',
    exampleDatEs: '¿Cómo puedo ayudarle a Usted? (Dativ formal: Ihnen con mayúscula)',
    ruleTip: '⭐ En cartas, correos y trato formal: "Sie" e "Ihnen" SIEMPRE con "S" o "I" mayúscula obligatoria.'
  }
];

export default function PronounsMasterGuide() {
  const [selectedIdx, setSelectedIdx] = useState(5); // Default to 'wir / uns'
  const current = pronounsData[selectedIdx];

  return (
    <div className="space-y-6">
      {/* Banner Teórico Principal */}
      <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/90 border border-amber-200/90 shadow-2xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-amber-200/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-200/70 text-amber-950 uppercase tracking-wider">
                Gramática Esencial A2 • Declinación de Pronombres
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              ¿Cuándo usar "wir" y cuándo usar "uns"? (El Sistema Completo de Pronombres)
            </h3>
            <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
              En español usamos "nosotros" para todo ("Nosotros vamos" vs "Él nos ve a nosotros"). En alemán, la función gramatical cambia la palabra de forma tajante: <strong>wir</strong> hace la acción, <strong>uns</strong> la recibe y <strong>unser</strong> posee un objeto.
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-950 font-mono text-xs font-bold shadow-2xs shrink-0">
            Sujeto vs Objeto
          </span>
        </div>

        {/* Las 4 Funciones Card */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4">
          <div className="p-3.5 rounded-2xl bg-white border border-amber-200">
            <span className="text-[10px] font-mono font-bold text-blue-700 uppercase block mb-1">
              1. Nominativ (Sujeto)
            </span>
            <span className="font-serif font-bold text-sm text-stone-900 block">wir • ich • du</span>
            <p className="text-[11px] text-stone-600 mt-1 leading-snug">
              Responde a: <strong>¿Quién hace la acción?</strong> Va con el verbo conjugado.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-amber-200">
            <span className="text-[10px] font-mono font-bold text-rose-700 uppercase block mb-1">
              2. Akkusativ (Objeto Directo)
            </span>
            <span className="font-serif font-bold text-sm text-stone-900 block">uns • mich • dich</span>
            <p className="text-[11px] text-stone-600 mt-1 leading-snug">
              Responde a: <strong>¿A quién o qué afecta directamente?</strong> (Er sieht uns).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-amber-200">
            <span className="text-[10px] font-mono font-bold text-purple-700 uppercase block mb-1">
              3. Dativ (Objeto Indirecto)
            </span>
            <span className="font-serif font-bold text-sm text-stone-900 block">uns • mir • dir</span>
            <p className="text-[11px] text-stone-600 mt-1 leading-snug">
              Responde a: <strong>¿A quién le beneficia / perjudica?</strong> (Er hilft uns).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-amber-200">
            <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block mb-1">
              4. Posesivo (Determinante)
            </span>
            <span className="font-serif font-bold text-sm text-stone-900 block">unser • mein • dein</span>
            <p className="text-[11px] text-stone-600 mt-1 leading-snug">
              Responde a: <strong>¿De quién es?</strong> Acompaña a un sustantivo (unser Tisch).
            </p>
          </div>
        </div>
      </div>

      {/* Selector de Persona */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider block">
          Selecciona una persona para comparar todas sus formas y ejemplos:
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1.5">
          {pronounsData.map((p, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400'
                    : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                }`}
              >
                <div className="font-serif font-bold text-xs">{p.nom}</div>
                <div className={`text-[10px] font-mono mt-0.5 truncate ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                  {p.akk}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ficha Comparativa Detallada de la Persona Activa */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif font-bold text-xl text-stone-900">
                Persona: <span className="text-amber-800">{current.person} ({current.nom})</span>
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                Español: {current.nomEs}
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Observa cómo cambia la raíz según la función gramatical dentro de la oración.
            </p>
          </div>

          <button
            type="button"
            onClick={() => speechService.speak(`${current.nom}. ${current.akk}. ${current.dat}. ${current.poss}`)}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-mono flex items-center gap-2 border border-stone-200 cursor-pointer shadow-2xs transition-colors"
          >
            <Volume2 className="w-4 h-4 text-stone-600" />
            <span>Escuchar las 4 formas</span>
          </button>
        </div>

        {/* Las 4 Formas en Paralelo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Nominativo */}
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase block mb-1">
                Nominativ (Sujeto)
              </span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-blue-950">{current.nom}</span>
                <button
                  type="button"
                  onClick={() => speechService.speak(current.nom)}
                  className="p-1 hover:text-blue-700 cursor-pointer text-blue-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-blue-900 mt-1 font-sans">{current.nomEs}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200/60 text-[11px] text-blue-950 font-serif italic">
              "{current.exampleNom}"
            </div>
          </div>

          {/* Acusativo */}
          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-rose-800 uppercase block mb-1">
                Akkusativ (Obj. Directo)
              </span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-rose-950">{current.akk}</span>
                <button
                  type="button"
                  onClick={() => speechService.speak(current.akk)}
                  className="p-1 hover:text-rose-700 cursor-pointer text-rose-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-rose-900 mt-1 font-sans">{current.akkEs}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-rose-200/60 text-[11px] text-rose-950 font-serif italic">
              "{current.exampleAkk}"
            </div>
          </div>

          {/* Dativo */}
          <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-purple-800 uppercase block mb-1">
                Dativ (Obj. Indirecto)
              </span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-purple-950">{current.dat}</span>
                <button
                  type="button"
                  onClick={() => speechService.speak(current.dat)}
                  className="p-1 hover:text-purple-700 cursor-pointer text-purple-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-purple-900 mt-1 font-sans">{current.datEs}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-purple-200/60 text-[11px] text-purple-950 font-serif italic">
              "{current.exampleDat}"
            </div>
          </div>

          {/* Posesivo */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block mb-1">
                Posesivo (Raíz)
              </span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold text-emerald-950">{current.poss}</span>
                <button
                  type="button"
                  onClick={() => speechService.speak(current.poss)}
                  className="p-1 hover:text-emerald-700 cursor-pointer text-emerald-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-emerald-900 mt-1 font-sans">{current.possEs}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-emerald-200/60 text-[11px] text-emerald-950 font-serif italic">
              "Das ist {current.poss} Buch."
            </div>
          </div>
        </div>

        {/* Tip / Nota pedagógica */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Regla Clave:</strong> {current.ruleTip}
          </div>
        </div>

        {/* Rayos X de Frases de Ejemplo */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">
            Ejemplos en acción con audio nativo:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: 'Nominativo (Sujeto)', de: current.exampleNom, es: current.exampleNomEs, color: 'border-blue-200 bg-blue-50/30' },
              { label: 'Acusativo (Directo)', de: current.exampleAkk, es: current.exampleAkkEs, color: 'border-rose-200 bg-rose-50/30' },
              { label: 'Dativo (Indirecto)', de: current.exampleDat, es: current.exampleDatEs, color: 'border-purple-200 bg-purple-50/30' },
            ].map((ex, i) => (
              <div key={i} className={`p-3.5 rounded-xl border ${ex.color} flex flex-col justify-between gap-2`}>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block mb-1">
                    {ex.label}
                  </span>
                  <p className="font-serif font-bold text-xs text-stone-900">"{ex.de}"</p>
                  <p className="text-[11px] text-stone-600 mt-0.5 italic">{ex.es}</p>
                </div>
                <button
                  type="button"
                  onClick={() => speechService.speak(ex.de)}
                  className="self-end px-2.5 py-1 rounded bg-white hover:bg-stone-100 text-stone-700 text-[11px] font-mono flex items-center gap-1 border border-stone-200 cursor-pointer shadow-2xs"
                >
                  <Volume2 className="w-3 h-3 text-stone-500" />
                  <span>Escuchar</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
