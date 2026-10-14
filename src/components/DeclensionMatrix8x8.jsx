import React, { useState } from 'react';
import { Volume2, Sparkles, Compass, Eye, Info, Check } from 'lucide-react';
import { speechService } from '../utils/speech';

/**
 * DeclensionMatrix8x8:
 * Grilla visual interactiva 8x8 (64 celdas) para materializar la estructura de:
 * 1. "cases": Matriz de Declinación de Artículos y Posesivos (8x8)
 * 2. "spatial": Tablero Espacial de Wechselpräpositionen (Wohin vs Wo en habitación 8x8)
 */

export default function DeclensionMatrix8x8({ mode = 'cases' }) {
  const [activeCell, setActiveCell] = useState(null);
  const [matrixMode, setMatrixMode] = useState(mode);

  // 8x8 Casos: 8 Filas x 8 Columnas
  const caseColumns = [
    { id: 'm_def', label: 'Masc. Def', sub: 'el', gender: 'M', color: 'blue' },
    { id: 'm_indef', label: 'Masc. Indef', sub: 'un', gender: 'M', color: 'blue' },
    { id: 'f_def', label: 'Fem. Def', sub: 'la', gender: 'F', color: 'rose' },
    { id: 'f_indef', label: 'Fem. Indef', sub: 'una', gender: 'F', color: 'rose' },
    { id: 'n_def', label: 'Neut. Def', sub: 'el (neutro)', gender: 'N', color: 'emerald' },
    { id: 'n_indef', label: 'Neut. Indef', sub: 'un (neutro)', gender: 'N', color: 'emerald' },
    { id: 'pl_def', label: 'Plural Def', sub: 'los/las', gender: 'PL', color: 'amber' },
    { id: 'pl_kein', label: 'Plural Neg/Pos', sub: 'ningunos/mis', gender: 'PL', color: 'amber' },
  ];

  const caseRows = [
    { id: 'nom_art', caseName: 'Nominativ (Artículos)', role: 'Sujeto (Wer?)', desc: 'Quien ejecuta la acción' },
    { id: 'akk_art', caseName: 'Akkusativ (Artículos)', role: 'Obj. Directo (Wen?)', desc: 'Impacto directo. ¡Solo cambia el masc!' },
    { id: 'dat_art', caseName: 'Dativ (Artículos)', role: 'Obj. Indirecto (Wem?)', desc: 'Beneficiario / Preposiciones fijas' },
    { id: 'nom_poss', caseName: 'Posesivo "mein" (Nom)', role: 'Mi / Tu / Su (Sujeto)', desc: 'Concordancia con lo poseído' },
    { id: 'akk_poss', caseName: 'Posesivo "mein" (Akk)', role: 'A mi / Con mi (Obj. Dir)', desc: 'Masc cambia a -en' },
    { id: 'dat_poss', caseName: 'Posesivo "mein" (Dat)', role: 'Para mi / Con mi (Dat)', desc: 'M/N: -em, F: -er, Pl: -en' },
    { id: 'neg_kein', caseName: 'Negación "kein" (Akk)', role: 'Ningún / Ninguna', desc: 'Niega sustantivos directos' },
    { id: 'adj_weak', caseName: 'Adjetivo débil (Nom/Akk)', role: 'Terminación Adjetivo', desc: 'Con artículo definido: -e o -en' },
  ];

  // Datos de las 64 celdas (8x8)
  const caseMatrixData = {
    // Fila 0: Nominativ Artículos
    '0-0': { form: 'der', end: 'der', example: 'Der Mann arbeitet.', rule: 'Forma base del sujeto masculino.' },
    '0-1': { form: 'ein', end: 'ein', example: 'Ein Mann kommt.', rule: 'Indefinido masculino sin terminación adicional.' },
    '0-2': { form: 'die', end: 'die', example: 'Die Frau liest.', rule: 'Femenino base.' },
    '0-3': { form: 'eine', end: 'eine', example: 'Eine Frau spricht.', rule: 'Indefinido femenino con terminación -e.' },
    '0-4': { form: 'das', end: 'das', example: 'Das Kind spielt.', rule: 'Neutro base.' },
    '0-5': { form: 'ein', end: 'ein', example: 'Ein Kind lacht.', rule: 'Indefinido neutro idéntico a masc.' },
    '0-6': { form: 'die', end: 'die', example: 'Die Freunde reisen.', rule: 'Plural definido.' },
    '0-7': { form: 'keine', end: 'keine', example: 'Keine Probleme!', rule: 'Plural indefinido/negativo con -e.' },

    // Fila 1: Akkusativ Artículos (¡Solo cambia masc!)
    '1-0': { form: 'den', end: '-en', highlight: true, example: 'Ich sehe den Mann.', rule: '⭐ ¡EL GRAN CAMBIO! der pasa a den.' },
    '1-1': { form: 'einen', end: '-en', highlight: true, example: 'Ich kaufe einen Apfel.', rule: '⭐ ein pasa a einen en acusativo masculino.' },
    '1-2': { form: 'die', end: 'die', example: 'Ich kenne die Frau.', rule: '¡Sin cambios! Femenino se mantiene idéntico.' },
    '1-3': { form: 'eine', end: 'eine', example: 'Ich trinke eine Milch.', rule: '¡Sin cambios! Indefinido femenino intacto.' },
    '1-4': { form: 'das', end: 'das', example: 'Ich esse das Brot.', rule: '¡Sin cambios! Neutro definido intacto.' },
    '1-5': { form: 'ein', end: 'ein', example: 'Ich nehme ein Brot.', rule: '¡Sin cambios! Neutro indefinido intacto.' },
    '1-6': { form: 'die', end: 'die', example: 'Ich treffe die Freunde.', rule: '¡Sin cambios! Plural en acusativo se mantiene die.' },
    '1-7': { form: 'keine', end: 'keine', example: 'Ich habe keine Zeit.', rule: 'Plural negativo intacto en acusativo.' },

    // Fila 2: Dativ Artículos (Todo se nasaliza y suaviza)
    '2-0': { form: 'dem', end: '-em', highlight: true, example: 'Ich helfe dem Mann.', rule: '⭐ der pasa a dem en dativo.' },
    '2-1': { form: 'einem', end: '-em', highlight: true, example: 'Ich gebe einem Mann das Buch.', rule: '⭐ ein pasa a einem.' },
    '2-2': { form: 'der', end: '-er', highlight: true, example: 'Ich helfe der Frau.', rule: '⭐ ¡Ojo! die pasa a der en dativo femenino.' },
    '2-3': { form: 'einer', end: '-er', highlight: true, example: 'Ich vertraue einer Frau.', rule: '⭐ eine pasa a einer.' },
    '2-4': { form: 'dem', end: '-em', highlight: true, example: 'Das Kind sitzt auf dem Sofa.', rule: '⭐ das pasa a dem (igual que masculino).' },
    '2-5': { form: 'einem', end: '-em', highlight: true, example: 'Ich helfe einem Kind.', rule: '⭐ ein pasa a einem (igual que masculino).' },
    '2-6': { form: 'den +n', end: '-en +n', highlight: true, example: 'Ich helfe den Freunden.', rule: '⭐ die pasa a den y el sustantivo recibe -n!' },
    '2-7': { form: 'keinen +n', end: '-en +n', highlight: true, example: 'Mit keinen Freunden.', rule: 'Dativo plural siempre con -en y sustantivo con -n.' },

    // Fila 3: Posesivo mein (Nominativ)
    '3-0': { form: 'mein', end: 'mein', example: 'Mein Vater ist nett.', rule: 'Posesivo masculino sujeto.' },
    '3-1': { form: 'dein', end: 'dein', example: 'Dein Bruder arbeitet.', rule: 'Posesivo segunda persona.' },
    '3-2': { form: 'meine', end: '-e', example: 'Meine Mutter kocht.', rule: 'Femenino toma terminación -e.' },
    '3-3': { form: 'deine', end: '-e', example: 'Deine Schwester liest.', rule: 'Femenino segunda persona con -e.' },
    '3-4': { form: 'mein', end: 'mein', example: 'Mein Haus ist alt.', rule: 'Neutro sin terminación adicional.' },
    '3-5': { form: 'dein', end: 'dein', example: 'Dein Auto ist schnell.', rule: 'Neutro segunda persona.' },
    '3-6': { form: 'meine', end: '-e', example: 'Meine Eltern reisen.', rule: 'Plural posesivo con -e.' },
    '3-7': { form: 'seine', end: '-e', example: 'Seine Freunde kommen.', rule: 'Plural de er/es con -e.' },

    // Fila 4: Posesivo mein (Akkusativ)
    '4-0': { form: 'meinen', end: '-en', highlight: true, example: 'Ich besuche meinen Vater.', rule: '⭐ Masc en acusativo: terminación -en.' },
    '4-1': { form: 'deinen', end: '-en', highlight: true, example: 'Ich treffe deinen Bruder.', rule: '⭐ Masculino en acusativo con -en.' },
    '4-2': { form: 'meine', end: '-e', example: 'Ich liebe meine Mutter.', rule: 'Femenino se mantiene con -e.' },
    '4-3': { form: 'deine', end: '-e', example: 'Ich kenne deine Schwester.', rule: 'Femenino intacto.' },
    '4-4': { form: 'mein', end: 'mein', example: 'Ich putze mein Haus.', rule: 'Neutro se mantiene mein.' },
    '4-5': { form: 'dein', end: 'dein', example: 'Ich fahre dein Auto.', rule: 'Neutro intacto.' },
    '4-6': { form: 'meine', end: '-e', example: 'Ich rufe meine Eltern an.', rule: 'Plural se mantiene meine.' },
    '4-7': { form: 'seine', end: '-e', example: 'Er mag seine Kollegen.', rule: 'Plural intacto.' },

    // Fila 5: Posesivo mein (Dativ)
    '5-0': { form: 'meinem', end: '-em', highlight: true, example: 'Ich danke meinem Vater.', rule: '⭐ Dativo masculino toma -em.' },
    '5-1': { form: 'deinem', end: '-em', highlight: true, example: 'Mit deinem Bruder.', rule: '⭐ Dativo masculino con preposición.' },
    '5-2': { form: 'meiner', end: '-er', highlight: true, example: 'Ich helfe meiner Mutter.', rule: '⭐ Dativo femenino toma -er!' },
    '5-3': { form: 'deiner', end: '-er', highlight: true, example: 'Von deiner Schwester.', rule: '⭐ Dativo femenino con -er.' },
    '5-4': { form: 'meinem', end: '-em', highlight: true, example: 'Zu meinem Haus.', rule: '⭐ Dativo neutro toma -em (igual que masc).' },
    '5-5': { form: 'deinem', end: '-em', highlight: true, example: 'Mit deinem Kind.', rule: '⭐ Dativo neutro con -em.' },
    '5-6': { form: 'meinen +n', end: '-en +n', highlight: true, example: 'Ich danke meinen Eltern.', rule: '⭐ Dativo plural toma -en y sustantivo añade -n.' },
    '5-7': { form: 'seinen +n', end: '-en +n', highlight: true, example: 'Mit seinen Freunden.', rule: '⭐ Dativo plural con -en +n.' },

    // Fila 6: Negación kein (Akkusativ)
    '6-0': { form: 'keinen', end: '-en', highlight: true, example: 'Ich habe keinen Hund.', rule: '⭐ Acusativo masculino niega con keinen.' },
    '6-1': { form: 'keinen', end: '-en', highlight: true, example: 'Er trinkt keinen Kaffee.', rule: '⭐ Masc acusativo siempre -en.' },
    '6-2': { form: 'keine', end: '-e', example: 'Ich habe keine Katze.', rule: 'Femenino niega con keine.' },
    '6-3': { form: 'keine', end: '-e', example: 'Wir haben keine Wohnung.', rule: 'Femenino acusativo con -e.' },
    '6-4': { form: 'kein', end: 'kein', example: 'Ich esse kein Fleisch.', rule: 'Neutro niega con kein sin terminación.' },
    '6-5': { form: 'kein', end: 'kein', example: 'Sie hat kein Auto.', rule: 'Neutro intacto.' },
    '6-6': { form: 'keine', end: '-e', example: 'Ich habe keine Geschwister.', rule: 'Plural niega con keine.' },
    '6-7': { form: 'keine', end: '-e', example: 'Wir haben keine Fragen.', rule: 'Plural acusativo con keine.' },

    // Fila 7: Adjetivo Débil (mit der/die/das)
    '7-0': { form: '-e / -en', end: 'Nom/Akk', highlight: true, example: 'der gute Mann / den guten Mann', rule: 'En Nominativo es -e, en Acusativo masculino pasa a -en.' },
    '7-1': { form: '-en', end: 'Dativ', highlight: true, example: 'mit dem guten Mann', rule: '¡En Dativo todo el mundo lleva -en!' },
    '7-2': { form: '-e', end: 'Nom/Akk', example: 'die gute Frau', rule: 'Femenino con der/die/das lleva -e.' },
    '7-3': { form: '-en', end: 'Dativ', highlight: true, example: 'in der schönen Wohnung', rule: '¡Dativo femenino con artículo lleva -en!' },
    '7-4': { form: '-e', end: 'Nom/Akk', example: 'das kleine Kind', rule: 'Neutro con artículo definido lleva -e.' },
    '7-5': { form: '-en', end: 'Dativ', highlight: true, example: 'auf dem bequemen Sofa', rule: 'Dativo neutro lleva -en.' },
    '7-6': { form: '-en', end: 'Plural', highlight: true, example: 'die netten Leute', rule: 'Plural con artículo definido SIEMPRE lleva -en.' },
    '7-7': { form: '-en', end: 'Dat. Pl.', highlight: true, example: 'mit den besten Freunden', rule: 'Dativo plural siempre termina en -en.' },
  };

  // Cuadrícula 8x8 Espacial para Wechselpräpositionen
  const spatialRooms = [
    { id: 'wand', name: 'an die / an der Wand', type: 'vertical', prep: 'an' },
    { id: 'tisch', name: 'auf den / auf dem Tisch', type: 'surface', prep: 'auf' },
    { id: 'schrank', name: 'in den / im Schrank', type: 'inside', prep: 'in' },
    { id: 'bett', name: 'neben das / neben dem Bett', type: 'near', prep: 'neben' },
    { id: 'sofa', name: 'vor das / vor dem Sofa', type: 'front', prep: 'vor' },
    { id: 'tuer', name: 'hinter die / hinter der Tür', type: 'back', prep: 'hinter' },
    { id: 'lampe', name: 'unter die / unter der Lampe', type: 'under', prep: 'unter' },
    { id: 'teppich', name: 'über den / über dem Teppich', type: 'over', prep: 'über' },
  ];

  const selectedData = activeCell ? caseMatrixData[activeCell] : null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-stone-500 font-mono text-xs uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Matriz Visual 8×8 (Grammatik-Schachbrett)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            {matrixMode === 'cases' ? 'Mapa de Declinaciones en Matriz 8×8' : 'Simulador Espacial 8×8: Wechselpräpositionen'}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            {matrixMode === 'cases'
              ? 'Toca cualquier casilla para escuchar, ver el origen y analizar la transformación en vivo.'
              : 'Visualiza la diferencia física entre movimiento hacia un lugar (Akkusativ) vs estado fijo (Dativ).'}
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center bg-stone-100 p-1 rounded-xl self-start">
          <button
            onClick={() => { setMatrixMode('cases'); setActiveCell('1-0'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              matrixMode === 'cases' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tablero de Casos
          </button>
          <button
            onClick={() => { setMatrixMode('spatial'); setActiveCell('tisch'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              matrixMode === 'spatial' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Espacio 8×8 (Wo vs Wohin)
          </button>
        </div>
      </div>

      {/* MATRIX VIEW: CASES (8x8 Grid) */}
      {matrixMode === 'cases' && (
        <div className="mt-6">
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[620px]">
              {/* Columns Header (8 Cols) */}
              <div className="grid grid-cols-9 gap-1.5 mb-2">
                <div className="text-[10px] font-mono text-stone-400 uppercase font-semibold flex items-center justify-center">
                  Rol / Caso
                </div>
                {caseColumns.map((col) => (
                  <div
                    key={col.id}
                    className="p-1.5 text-center rounded-lg bg-stone-50 border border-stone-200/60"
                  >
                    <div className="text-[11px] font-bold text-stone-800 leading-tight">{col.label}</div>
                    <div className="text-[9px] text-stone-500 font-mono">({col.gender})</div>
                  </div>
                ))}
              </div>

              {/* 8 Rows x 8 Columns Grid */}
              {caseRows.map((row, rIdx) => (
                <div key={row.id} className="grid grid-cols-9 gap-1.5 mb-1.5 items-center">
                  {/* Row Header Label */}
                  <div className="p-1.5 rounded-lg bg-stone-100/70 border border-stone-200/60 text-left">
                    <div className="text-[10px] font-bold text-stone-800 leading-tight line-clamp-1">{row.caseName}</div>
                    <div className="text-[9px] text-amber-700 font-mono line-clamp-1">{row.role}</div>
                  </div>

                  {/* 8 Interactive Cells */}
                  {caseColumns.map((col, cIdx) => {
                    const cellKey = `${rIdx}-${cIdx}`;
                    const data = caseMatrixData[cellKey] || { form: '-', end: '' };
                    const isSelected = activeCell === cellKey;
                    const isHighlight = data.highlight;

                    return (
                      <button
                        key={cellKey}
                        onClick={() => {
                          setActiveCell(cellKey);
                          if (data.form && data.form !== '-') {
                            speechService.speak(data.form.replace('+n', ''));
                          }
                        }}
                        className={`p-2 rounded-xl text-center transition-all cursor-pointer border relative flex flex-col justify-center items-center h-12 ${
                          isSelected
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm scale-105 z-10'
                            : isHighlight
                            ? 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 font-semibold shadow-2xs'
                            : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200'
                        }`}
                      >
                        <span className={`text-xs font-mono font-bold leading-none ${isSelected ? 'text-white' : ''}`}>
                          {data.form}
                        </span>
                        {isHighlight && !isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Inspection Panel for Active Cell */}
          {selectedData && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-stone-50 border border-stone-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 animate-in fade-in">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-stone-900 text-white font-mono text-xs font-bold">
                    {selectedData.form}
                  </span>
                  <span className="text-xs font-medium text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    {selectedData.rule}
                  </span>
                </div>
                <div className="text-sm font-serif italic text-stone-800 mt-2">
                  Ejemplo real: <span className="font-bold font-sans not-italic text-stone-950">"{selectedData.example}"</span>
                </div>
              </div>

              <button
                onClick={() => speechService.speak(selectedData.example)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 text-xs font-medium shadow-2xs shrink-0 cursor-pointer transition-all"
              >
                <Volume2 className="w-4 h-4 text-stone-600" />
                <span>Escuchar frase</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* MATRIX VIEW: SPATIAL (8x8 Room & Wechselpräpositionen) */}
      {matrixMode === 'spatial' && (
        <div className="mt-6 space-y-6">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>💡 La Regla Espacial Definitiva:</strong> Si hay una flecha de movimiento hacia un destino (<strong>¿Wohin?</strong>), la preposición rige <strong>AKKUSATIV</strong> (der → den). Si el objeto ya está en calma o reposo en una coordenada (<strong>¿Wo?</strong>), la preposición rige <strong>DATIV</strong> (der/das → dem, die → der).
          </div>

          {/* 8 Interactive Furniture/Location Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {spatialRooms.map((room) => {
              const isSelected = activeCell === room.id;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveCell(room.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-stone-900'
                      : 'bg-white hover:bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider mb-1 opacity-70">
                    Prep: {room.prep}
                  </div>
                  <div className="font-serif font-bold text-sm leading-snug">{room.name}</div>
                  <div className="text-[11px] opacity-80 mt-1 capitalize font-sans">{room.type}</div>
                </button>
              );
            })}
          </div>

          {/* Spatial Contrast Inspector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-blue-800 uppercase">Wohin? (Akkusativ)</span>
                <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded-full font-semibold">Acción / Movimiento</span>
              </div>
              <p className="text-sm font-medium text-stone-900 mb-1">
                Ich lege das Buch <span className="text-blue-700 font-bold underline">auf den Tisch</span>.
              </p>
              <p className="text-xs text-stone-600 italic">
                Pongo el libro sobre la mesa. (Acción de desplazarlo).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-purple-800 uppercase">Wo? (Dativ)</span>
                <span className="text-[10px] bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded-full font-semibold">Reposo / Estado</span>
              </div>
              <p className="text-sm font-medium text-stone-900 mb-1">
                Das Buch liegt <span className="text-purple-700 font-bold underline">auf dem Tisch</span>.
              </p>
              <p className="text-xs text-stone-600 italic">
                El libro está sobre la mesa. (Ubicación fija sin movimiento).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
