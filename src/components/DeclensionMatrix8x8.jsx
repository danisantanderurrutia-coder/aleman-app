import React, { useState } from 'react';
import { Volume2, Sparkles, Compass, Eye, Info, Check, BookOpen, ShieldAlert, Key } from 'lucide-react';
import { speechService } from '../utils/speech';

/**
 * DeclensionMatrix8x8:
 * Grilla visual interactiva 8x8 (64 celdas) y centros pedagógicos para:
 * 1. "cases": Matriz de Declinación de Artículos y Posesivos (8x8)
 * 2. "possessives": Guía Completa de Posesivos (mein, dein, sein, ihr, unser, euer, ihr, Ihr)
 * 3. "genitiv": El Dossier y Tabla Completa del Genitivo (Genitiv vs von+Dativ)
 * 4. "spatial": Tablero Espacial de Wechselpräpositionen (Wohin vs Wo en habitación 8x8)
 */

export default function DeclensionMatrix8x8({ mode = 'cases' }) {
  const [activeCell, setActiveCell] = useState('1-0');
  const [matrixMode, setMatrixMode] = useState(mode);
  const [selectedPossessive, setSelectedPossessive] = useState('ich');

  // Posesivos persona por persona con declinación completa
  const possessivePersons = [
    { id: 'ich', pronoun: 'ich', base: 'mein', label: 'mein (mi / mis)', owner: '1ª pers. singular (yo)', note: 'Igual que ein/kein' },
    { id: 'du', pronoun: 'du', base: 'dein', label: 'dein (tu / tus)', owner: '2ª pers. singular (tú)', note: 'Informal singular' },
    { id: 'er', pronoun: 'er', base: 'sein', label: 'sein (su de él)', owner: '3ª pers. masc. (él)', note: 'Refiere a sujeto masculino o neutro' },
    { id: 'es', pronoun: 'es', base: 'sein', label: 'sein (su de ello)', owner: '3ª pers. neutra (ello)', note: 'Idéntico al de él' },
    { id: 'sie_sg', pronoun: 'sie', base: 'ihr', label: 'ihr (su de ella)', owner: '3ª pers. fem. (ella)', note: 'Ojo con no confundir con ihr (vosotros)' },
    { id: 'wir', pronoun: 'wir', base: 'unser', label: 'unser (nuestro/a)', owner: '1ª pers. plural (nosotros)', note: 'unser, unsere, unserem...' },
    { id: 'ihr_pl', pronoun: 'ihr', base: 'euer', label: 'euer (vuestro/a)', owner: '2ª pers. plural (vosotros)', note: '⚠️ Contracción: eure, eurem, euren (pierde la "e" interior)' },
    { id: 'sie_pl', pronoun: 'sie (pl)', base: 'ihr', label: 'ihr (su de ellos/as)', owner: '3ª pers. plural (ellos/as)', note: 'En minúscula' },
    { id: 'sie_form', pronoun: 'Sie', base: 'Ihr', label: 'Ihr (su formal de Ud/Uds)', owner: 'Trato formal (Usted / Ustedes)', note: '⭐ ¡SIEMPRE con "I" mayúscula obligatoria!' },
  ];

  const getPossessiveForms = (personId) => {
    switch (personId) {
      case 'ich':
        return {
          base: 'mein',
          nom: { m: 'mein', f: 'meine', n: 'mein', pl: 'meine' },
          akk: { m: 'meinen', f: 'meine', n: 'mein', pl: 'meine' },
          dat: { m: 'meinem', f: 'meiner', n: 'meinem', pl: 'meinen (+n)' },
          gen: { m: 'meines (+es)', f: 'meiner', n: 'meines (+es)', pl: 'meiner' },
          example: 'Ich suche meinen Schlüssel (Akk. masc) und helfe meiner Mutter (Dat. fem).'
        };
      case 'du':
        return {
          base: 'dein',
          nom: { m: 'dein', f: 'deine', n: 'dein', pl: 'deine' },
          akk: { m: 'deinen', f: 'deine', n: 'dein', pl: 'deine' },
          dat: { m: 'deinem', f: 'deiner', n: 'deinem', pl: 'deinen (+n)' },
          gen: { m: 'deines (+es)', f: 'deiner', n: 'deines (+es)', pl: 'deiner' },
          example: 'Ist das dein Pass (Nom) oder hast du deinen Pass (Akk) vergessen?'
        };
      case 'er':
      case 'es':
        return {
          base: 'sein',
          nom: { m: 'sein', f: 'seine', n: 'sein', pl: 'seine' },
          akk: { m: 'seinen', f: 'seine', n: 'sein', pl: 'seine' },
          dat: { m: 'seinem', f: 'seiner', n: 'seinem', pl: 'seinen (+n)' },
          gen: { m: 'seines (+es)', f: 'seiner', n: 'seines (+es)', pl: 'seiner' },
          example: 'Thomas liebt seinen Hund (Akk) und fährt mit seinem Auto (Dat).'
        };
      case 'sie_sg':
        return {
          base: 'ihr',
          nom: { m: 'ihr', f: 'ihre', n: 'ihr', pl: 'ihre' },
          akk: { m: 'ihren', f: 'ihre', n: 'ihr', pl: 'ihre' },
          dat: { m: 'ihrem', f: 'ihrer', n: 'ihrem', pl: 'ihren (+n)' },
          gen: { m: 'ihres (+es)', f: 'ihrer', n: 'ihres (+es)', pl: 'ihrer' },
          example: 'Clara liest ihr Buch (Nom/Akk) und wohnt bei ihrer Freundin (Dat).'
        };
      case 'wir':
        return {
          base: 'unser',
          nom: { m: 'unser', f: 'unsere', n: 'unser', pl: 'unsere' },
          akk: { m: 'unseren', f: 'unsere', n: 'unser', pl: 'unsere' },
          dat: { m: 'unserem', f: 'unserer', n: 'unserem', pl: 'unseren (+n)' },
          gen: { m: 'unseres (+es)', f: 'unserer', n: 'unseres (+es)', pl: 'unserer' },
          example: 'Wir lieben unser Haus (Akk. neutro) und sprechen mit unserem Lehrer (Dat. masc).'
        };
      case 'ihr_pl':
        return {
          base: 'euer',
          nom: { m: 'euer', f: 'eure', n: 'euer', pl: 'eure' },
          akk: { m: 'euren', f: 'eure', n: 'euer', pl: 'eure' },
          dat: { m: 'eurem', f: 'eurer', n: 'eurem', pl: 'euren (+n)' },
          gen: { m: 'eures (+es)', f: 'eurer', n: 'eures (+es)', pl: 'eurer' },
          example: 'Habt ihr euren Schlüssel dabei? (Ojo: euer pierde la -e- interior: eure, eurem, euren).'
        };
      case 'sie_pl':
        return {
          base: 'ihr',
          nom: { m: 'ihr', f: 'ihre', n: 'ihr', pl: 'ihre' },
          akk: { m: 'ihren', f: 'ihre', n: 'ihr', pl: 'ihre' },
          dat: { m: 'ihrem', f: 'ihrer', n: 'ihrem', pl: 'ihren (+n)' },
          gen: { m: 'ihres (+es)', f: 'ihrer', n: 'ihres (+es)', pl: 'ihrer' },
          example: 'Die Studenten besuchen ihre Eltern (Akk. pl) mit ihren Freunden (Dat. pl).'
        };
      case 'sie_form':
      default:
        return {
          base: 'Ihr',
          nom: { m: 'Ihr', f: 'Ihre', n: 'Ihr', pl: 'Ihre' },
          akk: { m: 'Ihren', f: 'Ihre', n: 'Ihr', pl: 'Ihre' },
          dat: { m: 'Ihrem', f: 'Ihrer', n: 'Ihrem', pl: 'Ihren (+n)' },
          gen: { m: 'Ihres (+es)', f: 'Ihrer', n: 'Ihres (+es)', pl: 'Ihrer' },
          example: 'Wie ist Ihr Name? (Nom) / Kann ich Ihren Pass sehen? (Akk. masc, con "I" mayúscula).'
        };
    }
  };

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
            <span>Matriz Visual & Sistema de Casos (Grammatik-Schachbrett)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            {matrixMode === 'cases' && 'Mapa de Declinaciones en Matriz 8×8 (Nom, Akk, Dat)'}
            {matrixMode === 'possessives' && 'Guía Completa de Posesivos: mein, dein, sein, ihr, unser, euer, Ihr'}
            {matrixMode === 'genitiv' && 'El Genitivo en Detalle: Origen, Tablas y el uso de "von + Dativ"'}
            {matrixMode === 'spatial' && 'Simulador Espacial 8×8: Wechselpräpositionen (Wo vs Wohin)'}
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            {matrixMode === 'cases' && 'Toca cualquier casilla para escuchar, ver el origen y analizar la transformación en vivo.'}
            {matrixMode === 'possessives' && 'Selecciona cualquier persona para ver su raíz, su significado en español y su declinación exacta en los 4 casos.'}
            {matrixMode === 'genitiv' && 'Descubre por qué en la calle se usa "von + Dativ" y cómo dominar el Genitivo formal con sus preposiciones.'}
            {matrixMode === 'spatial' && 'Visualiza la diferencia física entre movimiento hacia un lugar (Akkusativ) vs estado fijo (Dativ).'}
          </p>
        </div>

        {/* Mode Selector con los 4 pilares */}
        <div className="flex flex-wrap items-center bg-stone-100 p-1 rounded-xl self-start gap-1">
          <button
            onClick={() => { setMatrixMode('cases'); setActiveCell('1-0'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              matrixMode === 'cases' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tablero de Casos (8×8)
          </button>
          <button
            onClick={() => { setMatrixMode('possessives'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              matrixMode === 'possessives' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Posesivos (mein, dein...)
          </button>
          <button
            onClick={() => { setMatrixMode('genitiv'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              matrixMode === 'genitiv' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            El Genitivo
          </button>
          <button
            onClick={() => { setMatrixMode('spatial'); setActiveCell('tisch'); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
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
            <div className="min-w-[820px]">
              {/* Columns Header (Row Header + 8 Cols) */}
              <div className="grid grid-cols-[190px_repeat(8,minmax(72px,1fr))] gap-2 mb-2">
                <div className="text-[11px] font-mono text-stone-500 uppercase font-bold flex items-center px-2 bg-stone-100 rounded-lg">
                  Función / Caso
                </div>
                {caseColumns.map((col) => (
                  <div
                    key={col.id}
                    className="p-2 text-center rounded-lg bg-stone-50 border border-stone-200/80"
                  >
                    <div className="text-xs font-bold text-stone-900 leading-tight">{col.label}</div>
                    <div className="text-[10px] text-stone-500 font-mono">({col.gender})</div>
                  </div>
                ))}
              </div>

              {/* 8 Rows x 8 Columns Grid */}
              {caseRows.map((row, rIdx) => (
                <div key={row.id} className="grid grid-cols-[190px_repeat(8,minmax(72px,1fr))] gap-2 mb-2 items-stretch">
                  {/* Row Header Label: Completamente visible, sin puntos suspensivos */}
                  <div className="p-2.5 px-3 rounded-xl bg-stone-100/90 border border-stone-200 text-left flex flex-col justify-center">
                    <div className="text-xs font-bold text-stone-900 leading-snug">
                      {row.caseName}
                    </div>
                    <div className="text-[10px] text-amber-800 font-medium font-sans mt-0.5 leading-snug">
                      {row.role}
                    </div>
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

      {/* MATRIX VIEW: POSSESSIVES (mein, dein, sein, ihr, unser, euer, Ihr) */}
      {matrixMode === 'possessives' && (() => {
        const activePerson = possessivePersons.find(p => p.id === selectedPossessive) || possessivePersons[0];
        const forms = getPossessiveForms(activePerson.id);

        return (
          <div className="mt-6 space-y-6">
            {/* Banner pedagógico de los Posesivos */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <strong className="font-serif text-amber-900 block text-base mb-1">
                  💡 La Regla de Oro de los Posesivos (Possessivartikel):
                </strong>
                <span>
                  Los posesivos funcionan exactamente igual que el artículo indefinido <strong>"ein"</strong> y la negación <strong>"kein"</strong>.
                  Toman la raíz de la persona que posee (<em>mein, dein, sein...</em>) y le añaden las terminaciones del caso según el género del objeto poseído.
                </span>
              </div>
              <span className="shrink-0 px-3 py-1.5 rounded-xl bg-amber-200/60 font-mono text-xs font-bold text-amber-900 border border-amber-300">
                Persona: {activePerson.pronoun}
              </span>
            </div>

            {/* Selector de Personas (9 Personas) */}
            <div>
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider block mb-2">
                1. Selecciona el Posesivo / Persona:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {possessivePersons.map((p) => {
                  const isSelected = selectedPossessive === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPossessive(p.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-amber-400 ring-offset-1'
                          : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold">{p.pronoun}</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-600'}`}>
                          {p.base}
                        </span>
                      </div>
                      <div className="text-[11px] font-serif mt-1 truncate">
                        {p.label.split('(')[1]?.replace(')', '') || p.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ficha Activa de la Persona */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-xl text-stone-900">
                      Raíz: <strong className="text-amber-800 italic underline">{forms.base}</strong>
                    </span>
                    <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                      {activePerson.owner}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    Traducción: <strong>{activePerson.label}</strong> • {activePerson.note}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => speechService.speak(forms.base)}
                  className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-stone-200 transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-stone-600" />
                  <span>Pronunciar "{forms.base}"</span>
                </button>
              </div>

              {/* Tabla de Declinación en los 4 Casos */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-50 text-stone-500 font-mono text-[11px] uppercase border-b border-stone-200">
                      <th className="p-3">Caso Gramatical</th>
                      <th className="p-3 text-blue-900">Masculino (der)</th>
                      <th className="p-3 text-rose-900">Femenino (die)</th>
                      <th className="p-3 text-emerald-900">Neutro (das)</th>
                      <th className="p-3 text-amber-900">Plural (die)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-sans">
                    {/* Nominativ */}
                    <tr className="hover:bg-stone-50/60 transition-colors">
                      <td className="p-3 font-serif font-bold text-stone-900">
                        Nominativ <span className="font-mono text-[10px] text-stone-400 block font-normal">(Sujeto)</span>
                      </td>
                      <td className="p-3 font-mono font-medium text-blue-900">{forms.nom.m}</td>
                      <td className="p-3 font-mono font-medium text-rose-900">{forms.nom.f}</td>
                      <td className="p-3 font-mono font-medium text-emerald-900">{forms.nom.n}</td>
                      <td className="p-3 font-mono font-medium text-amber-900">{forms.nom.pl}</td>
                    </tr>
                    {/* Akkusativ */}
                    <tr className="bg-blue-50/30 hover:bg-blue-50/60 transition-colors">
                      <td className="p-3 font-serif font-bold text-stone-900">
                        Akkusativ <span className="font-mono text-[10px] text-stone-400 block font-normal">(Obj. Directo)</span>
                      </td>
                      <td className="p-3 font-mono font-bold text-blue-900 bg-blue-100/60 rounded">
                        ⭐ {forms.akk.m} <span className="text-[10px] font-sans font-normal text-blue-700">(¡cambia a -en!)</span>
                      </td>
                      <td className="p-3 font-mono font-medium text-rose-900">{forms.akk.f}</td>
                      <td className="p-3 font-mono font-medium text-emerald-900">{forms.akk.n}</td>
                      <td className="p-3 font-mono font-medium text-amber-900">{forms.akk.pl}</td>
                    </tr>
                    {/* Dativ */}
                    <tr className="bg-purple-50/30 hover:bg-purple-50/60 transition-colors">
                      <td className="p-3 font-serif font-bold text-stone-900">
                        Dativ <span className="font-mono text-[10px] text-stone-400 block font-normal">(Obj. Indirecto)</span>
                      </td>
                      <td className="p-3 font-mono font-bold text-purple-900">{forms.dat.m}</td>
                      <td className="p-3 font-mono font-bold text-rose-900">{forms.dat.f}</td>
                      <td className="p-3 font-mono font-bold text-emerald-900">{forms.dat.n}</td>
                      <td className="p-3 font-mono font-bold text-amber-900 bg-amber-100/50 rounded">
                        {forms.dat.pl}
                      </td>
                    </tr>
                    {/* Genitiv */}
                    <tr className="bg-stone-50/70 hover:bg-stone-100/60 transition-colors">
                      <td className="p-3 font-serif font-bold text-stone-900">
                        Genitiv <span className="font-mono text-[10px] text-stone-400 block font-normal">(Posesión / De quién)</span>
                      </td>
                      <td className="p-3 font-mono font-medium text-stone-800">{forms.gen.m}</td>
                      <td className="p-3 font-mono font-medium text-stone-800">{forms.gen.f}</td>
                      <td className="p-3 font-mono font-medium text-stone-800">{forms.gen.n}</td>
                      <td className="p-3 font-mono font-medium text-stone-800">{forms.gen.pl}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ejemplo en contexto oracional */}
              <div className="mt-5 p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-stone-400 block mb-0.5">
                    Ejemplo oracional en contexto:
                  </span>
                  <p className="text-sm font-serif font-medium text-stone-900">
                    "{forms.example}"
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => speechService.speak(forms.example)}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-mono flex items-center gap-1.5 cursor-pointer shrink-0 shadow-2xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-stone-600" />
                  <span>Escuchar oración</span>
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* MATRIX VIEW: GENITIV (El Enigma del Genitivo & von+Dativ) */}
      {matrixMode === 'genitiv' && (
        <div className="mt-6 space-y-6">
          {/* Respuesta directa a la duda filológica */}
          <div className="p-6 rounded-2xl bg-stone-900 text-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
              <Key className="w-4 h-4" />
              <span>Dossier Filológico: ¿Por qué no se enseña al principio el Genitivo?</span>
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              "Der Dativ ist dem Genitiv sein Tod" (El Dativo es la muerte del Genitivo)
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              En el alemán hablado cotidiano (<em>Umgangssprache</em>), los propios hablantes nativos casi nunca usan el genitivo para indicar posesión.
              En su lugar, usan la estructura <strong>"von + Dativ"</strong>. Por eso, en los niveles A1 y A2 se prioriza dominar Nominativo, Acusativo y Dativo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-stone-800 border border-stone-700">
                <span className="text-emerald-400 font-mono font-bold block mb-1">🗣️ En la calle / Alemán A1-A2 (von + Dativ):</span>
                <span className="font-serif italic text-white">"Das Auto <strong>von meinem Vater</strong>."</span>
                <span className="text-stone-400 block mt-0.5">(El coche de mi padre).</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-800 border border-stone-700">
                <span className="text-amber-400 font-mono font-bold block mb-1">📚 Alemán Formal / Escrito B1-C1 (Genitiv):</span>
                <span className="font-serif italic text-white">"Das Auto <strong>meines Vaters</strong>."</span>
                <span className="text-stone-400 block mt-0.5">(El coche de mi padre).</span>
              </div>
            </div>
          </div>

          {/* Las 2 Reglas Sagradas del Genitivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-mono font-bold text-amber-900 uppercase block mb-1.5">
                Regla 1: Masculino y Neutro (Añaden -s o -es)
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                El artículo pasa a <strong>des</strong> (o <strong>eines</strong> / <strong>meines</strong>) y el sustantivo recibe obligatoriamente la terminación <strong>-(e)s</strong>:
              </p>
              <div className="mt-2.5 p-2.5 rounded-xl bg-white border border-amber-200 font-mono text-xs text-amber-950 flex items-center justify-between">
                <span>der Mann → <strong>des Mannes</strong></span>
                <button type="button" onClick={() => speechService.speak('des Mannes')} className="p-1 hover:text-amber-700 cursor-pointer">
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-1.5 p-2.5 rounded-xl bg-white border border-amber-200 font-mono text-xs text-amber-950 flex items-center justify-between">
                <span>das Kind → <strong>des Kindes</strong></span>
                <button type="button" onClick={() => speechService.speak('des Kindes')} className="p-1 hover:text-amber-700 cursor-pointer">
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
              <span className="text-xs font-mono font-bold text-rose-900 uppercase block mb-1.5">
                Regla 2: Femenino y Plural (Cambian a "der")
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                El artículo pasa a <strong>der</strong> (o <strong>einer</strong> / <strong>meiner</strong>), pero el sustantivo <strong>NO</strong> cambia en absoluto:
              </p>
              <div className="mt-2.5 p-2.5 rounded-xl bg-white border border-rose-200 font-mono text-xs text-rose-950 flex items-center justify-between">
                <span>die Frau → <strong>der Frau</strong></span>
                <button type="button" onClick={() => speechService.speak('der Frau')} className="p-1 hover:text-rose-700 cursor-pointer">
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-1.5 p-2.5 rounded-xl bg-white border border-rose-200 font-mono text-xs text-rose-950 flex items-center justify-between">
                <span>die Freunde → <strong>der Freunde</strong></span>
                <button type="button" onClick={() => speechService.speak('der Freunde')} className="p-1 hover:text-rose-700 cursor-pointer">
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabla Resumen del Genitivo */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <h5 className="font-serif font-bold text-base text-stone-900 mb-3">
              Tabla Completa de Declinación en Genitivo
            </h5>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-stone-50 text-stone-500 font-mono text-[11px] uppercase border-b border-stone-200">
                    <th className="p-3">Género / Número</th>
                    <th className="p-3">Artículo Definido</th>
                    <th className="p-3">Artículo Indefinido</th>
                    <th className="p-3">Posesivo (mein)</th>
                    <th className="p-3">Negación (kein)</th>
                    <th className="p-3">Cambio en Sustantivo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono">
                  <tr className="hover:bg-stone-50/60">
                    <td className="p-3 font-sans font-bold text-blue-900">Masculino (der)</td>
                    <td className="p-3 font-bold text-blue-800">des</td>
                    <td className="p-3">eines</td>
                    <td className="p-3">meines</td>
                    <td className="p-3">keines</td>
                    <td className="p-3 font-sans text-amber-900 font-semibold">+ (e)s</td>
                  </tr>
                  <tr className="hover:bg-stone-50/60">
                    <td className="p-3 font-sans font-bold text-rose-900">Femenino (die)</td>
                    <td className="p-3 font-bold text-rose-800">der</td>
                    <td className="p-3">einer</td>
                    <td className="p-3">meiner</td>
                    <td className="p-3">keiner</td>
                    <td className="p-3 font-sans text-stone-400">Sin cambio</td>
                  </tr>
                  <tr className="hover:bg-stone-50/60">
                    <td className="p-3 font-sans font-bold text-emerald-900">Neutro (das)</td>
                    <td className="p-3 font-bold text-emerald-800">des</td>
                    <td className="p-3">eines</td>
                    <td className="p-3">meines</td>
                    <td className="p-3">keines</td>
                    <td className="p-3 font-sans text-amber-900 font-semibold">+ (e)s</td>
                  </tr>
                  <tr className="hover:bg-stone-50/60">
                    <td className="p-3 font-sans font-bold text-amber-900">Plural (die)</td>
                    <td className="p-3 font-bold text-amber-800">der</td>
                    <td className="p-3 text-stone-400">-</td>
                    <td className="p-3">meiner</td>
                    <td className="p-3">keiner</td>
                    <td className="p-3 font-sans text-stone-400">Sin cambio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Las 4 Preposiciones Reinas del Genitivo */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <h5 className="font-serif font-bold text-base text-stone-900 mb-1">
              Las 4 Preposiciones que Rigen Genitivo
            </h5>
            <p className="text-xs text-stone-500 mb-4">
              Cada vez que uses una de estas 4 preposiciones, el sustantivo va en genitivo:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { prep: 'wegen', meaning: 'a causa de / por motivo de', de: 'Wegen des Regens bleiben wir zu Hause.', es: 'A causa de la lluvia nos quedamos en casa.' },
                { prep: 'während', meaning: 'durante', de: 'Während des Films esse ich Popcorn.', es: 'Durante la película como palomitas.' },
                { prep: 'trotz', meaning: 'a pesar de', de: 'Trotz des schlechten Wetters gehe ich spazieren.', es: 'A pesar del mal tiempo salgo a pasear.' },
                { prep: '(an)statt', meaning: 'en vez de / en lugar de', de: 'Statt eines Kaffees trinke ich Tee.', es: 'En vez de un café bebo té.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-amber-900 bg-amber-100/70 px-2.5 py-0.5 rounded-lg border border-amber-200">
                      {item.prep}
                    </span>
                    <span className="text-[11px] text-stone-500 font-sans italic">{item.meaning}</span>
                  </div>
                  <div>
                    <p className="font-serif font-medium text-xs text-stone-900 mt-1">"{item.de}"</p>
                    <p className="text-[11px] text-stone-500 italic font-sans">{item.es}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => speechService.speak(item.de)}
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
