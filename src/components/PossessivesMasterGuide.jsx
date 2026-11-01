import React, { useState } from 'react';
import { speechService } from '../utils/speech';
import { Volume2, Sparkles, AlertTriangle, Lightbulb, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const possessivesMasterData = [
  {
    pronoun: 'ich',
    base: 'mein',
    meaningEs: 'mi / mío',
    exampleNomMasc: 'mein Vater',
    exampleAkkMasc: 'meinen Vater',
    exampleDat: 'mit meinem Vater',
    trapNote: 'Traducción directa. Solo cambia a "meinen" si actúa como objeto directo masculino.'
  },
  {
    pronoun: 'du',
    base: 'dein',
    meaningEs: 'tu / tuyo (informal)',
    exampleNomMasc: 'dein Freund',
    exampleAkkMasc: 'deinen Freund',
    exampleDat: 'mit deinem Freund',
    trapNote: 'Para hablar de tú por tú con amigos, pareja o compañeros de confianza.'
  },
  {
    pronoun: 'er',
    base: 'sein',
    meaningEs: 'su / suyo (de él)',
    exampleNomMasc: 'sein Bruder',
    exampleAkkMasc: 'seinen Bruder',
    exampleDat: 'mit seinem Bruder',
    trapNote: '⚠️ Exclusivo para poseedor masculino ("de él", Carlos, der Mann).'
  },
  {
    pronoun: 'sie (ella)',
    base: 'ihr',
    meaningEs: 'su / suyo (de ella)',
    exampleNomMasc: 'ihr Kollege',
    exampleAkkMasc: 'ihren Kollegen',
    exampleDat: 'mit ihrem Kollegen',
    trapNote: '⚠️ Exclusivo para poseedora femenina ("de ella", Maria, die Frau).'
  },
  {
    pronoun: 'es',
    base: 'sein',
    meaningEs: 'su / suyo (de ello / neutro)',
    exampleNomMasc: 'sein Spielzeug',
    exampleAkkMasc: 'seinen Ball',
    exampleDat: 'mit seinem Ball',
    trapNote: '⚠️ Comparte la misma raíz "sein" que er (el niño / das Kind → sein Spielzeug).'
  },
  {
    pronoun: 'wir',
    base: 'unser',
    meaningEs: 'nuestro / nuestra',
    exampleNomMasc: 'unser Chef',
    exampleAkkMasc: 'unseren Chef',
    exampleDat: 'mit unserem Chef',
    trapNote: 'Femenino y plural añaden -e regular: unsere Mutter, unsere Freunde.'
  },
  {
    pronoun: 'ihr (vosotros)',
    base: 'euer',
    meaningEs: 'vuestro / de ustedes (informal pl.)',
    exampleNomMasc: 'euer Termin',
    exampleAkkMasc: 'euren Termin',
    exampleDat: 'mit eurem Termin',
    trapNote: '⭐ ¡Gran regla fonética! Al añadir terminación pierde la -e- interior: eure, euren, eurem (¡nunca "eueren"!).'
  },
  {
    pronoun: 'sie (ellos/ellas)',
    base: 'ihr',
    meaningEs: 'su / de ellos / de ellas',
    exampleNomMasc: 'ihr Haus',
    exampleAkkMasc: 'ihren Wagen',
    exampleDat: 'mit ihren Eltern',
    trapNote: 'Se escribe con minúscula (ihr). Comparte forma con el femenino singular.'
  },
  {
    pronoun: 'Sie (usted / ustedes)',
    base: 'Ihr',
    meaningEs: 'su / de usted / de ustedes (formal)',
    exampleNomMasc: 'Ihr Schlüssel',
    exampleAkkMasc: 'Ihren Schlüssel',
    exampleDat: 'mit Ihrem Schlüssel',
    trapNote: '⭐ ¡MAYÚSCULA OBLIGATORIA! En cartas, correos, contratos y trato de cortesía siempre con "I" mayúscula: Ihr Name, Ihre Adresse.'
  }
];

export default function PossessivesMasterGuide() {
  const [selectedPerson, setSelectedPerson] = useState('ich');

  const activeItem = possessivesMasterData.find(p => p.pronoun.startsWith(selectedPerson)) || possessivesMasterData[0];

  return (
    <div className="space-y-6">
      {/* Banner Introductorio */}
      <div className="p-6 rounded-3xl bg-amber-50/90 border border-amber-200/90 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
                Compendio Oficial de Posesivos (Possessivartikel)
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Guía Rápida de Significados y Distinciones
            </h3>
            <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
              En español la palabra "su" es ambigua (¿de él, de ella, de usted, de ellos?). En alemán cada persona tiene su propia raíz inequívoca.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-950 font-mono text-xs font-bold shadow-2xs">
              9 Personas • Regla ein/eine
            </span>
          </div>
        </div>
      </div>

      {/* Tabla Maestra Comparativa Persona por Persona */}
      <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-xs overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
          <div>
            <h4 className="font-serif font-bold text-base text-stone-900">
              Tabla Comparativa Completa (Raíces, Traducción & Ejemplos)
            </h4>
            <p className="text-xs text-stone-500 mt-0.5">
              Haz clic en el botón de audio de cualquier posesivo para escuchar su pronunciación nativa.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50/80 text-stone-600 font-mono text-[11px] uppercase">
                <th className="py-3 px-3.5">Pronombre</th>
                <th className="py-3 px-3.5 text-amber-900">Posesivo Base</th>
                <th className="py-3 px-3.5">Significado en Español</th>
                <th className="py-3 px-3.5 text-stone-900">Masc. Nominativo (Sujeto)</th>
                <th className="py-3 px-3.5 text-blue-900">Masc. Acusativo (Obj. Directo)</th>
                <th className="py-3 px-3.5 text-purple-900">Dativo (-em)</th>
                <th className="py-3 px-3.5 text-stone-500">Alerta Filológica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-sans">
              {possessivesMasterData.map((item, idx) => {
                const isSelected = activeItem.pronoun === item.pronoun;
                return (
                  <tr 
                    key={idx}
                    onClick={() => setSelectedPerson(item.pronoun.split(' ')[0])}
                    className={`hover:bg-amber-50/40 transition-colors cursor-pointer ${
                      isSelected ? 'bg-amber-50/60 font-medium' : ''
                    }`}
                  >
                    <td className="py-3.5 px-3.5 font-mono font-bold text-stone-900 whitespace-nowrap">
                      {item.pronoun}
                    </td>
                    <td className="py-3.5 px-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-sm text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded border border-amber-200">
                          {item.base}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            speechService.speak(item.base);
                          }}
                          className="p-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer border border-stone-200"
                          title={`Pronunciar ${item.base}`}
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                    <td className="py-3.5 px-3.5 text-stone-800 font-serif font-medium whitespace-nowrap">
                      {item.meaningEs}
                    </td>
                    <td className="py-3.5 px-3.5 font-mono text-stone-700 whitespace-nowrap">
                      {item.exampleNomMasc}
                    </td>
                    <td className="py-3.5 px-3.5 font-mono font-bold text-blue-800 bg-blue-50/40 rounded whitespace-nowrap">
                      {item.exampleAkkMasc}
                    </td>
                    <td className="py-3.5 px-3.5 font-mono font-semibold text-purple-800 whitespace-nowrap">
                      {item.exampleDat}
                    </td>
                    <td className="py-3.5 px-3.5 text-[11px] text-stone-600 max-w-xs leading-normal">
                      {item.trapNote}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Las 4 Reglas de Oro de Declinación de Posesivos */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
          <Lightbulb className="w-5 h-5 text-amber-600" />
          <h4 className="font-serif font-bold text-base text-stone-900">
            Las 4 Reglas de Oro para Declinarlos sin Dudar
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center font-mono text-xs font-bold">1</span>
              <span className="font-serif font-bold text-sm text-stone-900">Fórmula Idéntica a "ein"</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              En singular, los posesivos toman <strong>exactamente las mismas terminaciones que el artículo indefinido <em>ein</em></strong>:
              <br />
              • Masculino: <em>mein</em> (Nom) ➔ <strong>meinen</strong> (Akk) ➔ <strong>meinem</strong> (Dat).
              <br />
              • Femenino: <em>meine</em> (Nom/Akk) ➔ <strong>meiner</strong> (Dat).
              <br />
              • Neutro: <em>mein</em> (Nom/Akk) ➔ <strong>meinem</strong> (Dat).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-mono text-xs font-bold">2</span>
              <span className="font-serif font-bold text-sm text-amber-950">Plural con "-e" (como keine)</span>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed font-sans">
              Como <em>ein</em> no tiene plural, el posesivo se declina en plural igual que la negación <strong>keine</strong>:
              <br />
              • Nominativo/Acusativo Plural: <strong>meine Freunde / deine Bücher</strong>.
              <br />
              • Dativo Plural: terminación <strong>-en</strong> en el posesivo y <strong>-n</strong> en el sustantivo: <em>mit meinen Freunden</em>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center font-mono text-xs font-bold">3</span>
              <span className="font-serif font-bold text-sm text-rose-950">¡La Gran Trampa de la Concordancia!</span>
            </div>
            <p className="text-xs text-rose-900 leading-relaxed font-sans">
              El posesivo concuerda con el <strong>objeto poseído</strong>, ¡NUNCA con el sujeto!
              <br />
              Ejemplo: Carlos habla con su madre ➔ la madre es femenina (<em>die Mutter</em>) y va en dativo (<em>mit</em>) ➔ <strong>Carlos spricht mit seiner Mutter</strong> (raíz <em>sein</em> por él, pero terminación <em>-er</em> por la madre).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-bold">4</span>
              <span className="font-serif font-bold text-sm text-blue-950">Distinción Vital: sein vs. ihr vs. Ihr</span>
            </div>
            <p className="text-xs text-blue-900 leading-relaxed font-sans">
              • <strong>sein</strong> = de él (Carlos) o de sustantivo neutro (das Kind).
              <br />
              • <strong>ihr</strong> (minúscula) = de ella (Maria) o de ellos/ellas (die Eltern).
              <br />
              • <strong>Ihr</strong> (mayúscula obligatoria) = de usted / de ustedes (formal de respeto en Alemania).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
