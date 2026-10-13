// Entrenador de estructura de oraciones (Satzbau) para dominar el orden de palabras en alemán A2

export const sentencePuzzles = [
  {
    id: 's1',
    category: 'Nebensatz con weil (Verbo al final)',
    translation: 'No voy a trabajar hoy porque tengo fiebre.',
    tokens: ['Ich', 'gehe', 'heute', 'nicht', 'arbeiten,', 'weil', 'ich', 'Fieber', 'habe.'],
    hint: 'Recuerda: después de "weil", el verbo conjugado ("habe") va al final absoluto.',
    grammarFocus: 'Conector subordinante: "weil" lanza el verbo al final.'
  },
  {
    id: 's2',
    category: 'Inversión temporal (Posición 1 = tiempo, Posición 2 = Verbo)',
    translation: 'Ayer viajé en tren a Berlín.',
    tokens: ['Gestern', 'bin', 'ich', 'mit', 'dem', 'Zug', 'nach', 'Berlin', 'gefahren.'],
    hint: 'Si la frase comienza con "Gestern" (tiempo), el verbo ("bin") ocupa obligatoriamente la posición 2.',
    grammarFocus: 'Regla de inversión V2 + Auxiliar "sein" para movimiento.'
  },
  {
    id: 's3',
    category: 'Verbo modal (Infinitivo al final)',
    translation: 'Lamentablemente mañana tengo que trabajar hasta las ocho.',
    tokens: ['Ich', 'muss', 'morgen', 'leider', 'bis', 'acht', 'Uhr', 'arbeiten.'],
    hint: 'El verbo modal conjugado ("muss") va en posición 2 y el infinitivo ("arbeiten") cierra la frase al final.',
    grammarFocus: 'Estructura entre corchetes (Satzklammer) de los verbos modales.'
  },
  {
    id: 's4',
    category: 'Wechselpräposition (Wohin = Akkusativ)',
    translation: 'Pongo el nuevo vaso sobre la mesa de la cocina.',
    tokens: ['Ich', 'stelle', 'das', 'neue', 'Glas', 'auf', 'den', 'Küchentisch.'],
    hint: 'Acción de colocar (stellen) + movimiento (Wohin?) = Akkusativ masculino (auf den...).',
    grammarFocus: 'Wechselpräposition "auf" + Akkusativ.'
  },
  {
    id: 's5',
    category: 'Nebensatz con wenn + Hauptsatz',
    translation: 'Si tengo tiempo el fin de semana, te visito.',
    tokens: ['Wenn', 'ich', 'am', 'Wochenende', 'Zeit', 'habe,', 'besuche', 'ich', 'dich.'],
    hint: 'En la frase con "Wenn...", el verbo va al final (habe). En la principal que sigue, el verbo va de primero (besuche).',
    grammarFocus: 'Oración condicional con "wenn".'
  },
  {
    id: 's6',
    category: 'Perfekt con haben (Partizip II al final)',
    translation: 'Hemos comprado un piso muy bonito en Colonia.',
    tokens: ['Wir', 'haben', 'eine', 'sehr', 'schöne', 'Wohnung', 'in', 'Köln', 'gekauft.'],
    hint: 'Auxiliar "haben" en posición 2 y el participio "gekauft" al final.',
    grammarFocus: 'Construcción del Perfekt.'
  }
];
