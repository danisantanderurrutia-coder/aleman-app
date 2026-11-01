// Entrenador de estructura de oraciones (Satzbau) para dominar el orden de palabras en alemán A2

export const sentencePuzzles = [
  {
    id: 's1',
    category: 'Subordinada con "weil" (Verbo al final)',
    translation: 'No voy a trabajar hoy porque tengo fiebre.',
    tokens: ['Ich', 'gehe', 'heute', 'nicht', 'arbeiten,', 'weil', 'ich', 'Fieber', 'habe.'],
    hint: 'Recuerda: después de "weil", el verbo conjugado ("habe") va al final absoluto.',
    grammarFocus: 'Conector subordinante: "weil" lanza el verbo al final.'
  },
  {
    id: 's2',
    category: 'Inversión temporal V2 (Posición 1 = tiempo, Posición 2 = Verbo)',
    translation: 'Ayer viajé en tren a Berlín.',
    tokens: ['Gestern', 'bin', 'ich', 'mit', 'dem', 'Zug', 'nach', 'Berlin', 'gefahren.'],
    hint: 'Si la frase comienza con "Gestern" (tiempo), el verbo ("bin") ocupa obligatoriamente la posición 2.',
    grammarFocus: 'Regla de inversión V2 + Auxiliar "sein" para movimiento.'
  },
  {
    id: 's3',
    category: 'Verbo modal con Satzklammer (Infinitivo al final)',
    translation: 'Lamentablemente mañana tengo que trabajar hasta las ocho.',
    tokens: ['Ich', 'muss', 'morgen', 'leider', 'bis', 'acht', 'Uhr', 'arbeiten.'],
    hint: 'El verbo modal conjugado ("muss") va en posición 2 y el infinitivo ("arbeiten") cierra la frase al final.',
    grammarFocus: 'Estructura entre corchetes (Satzklammer) de los verbos modales.'
  },
  {
    id: 's4',
    category: 'Wechselpräposition (Wohin? = Akkusativ)',
    translation: 'Pongo el nuevo vaso sobre la mesa de la cocina.',
    tokens: ['Ich', 'stelle', 'das', 'neue', 'Glas', 'auf', 'den', 'Küchentisch.'],
    hint: 'Acción de colocar (stellen) + movimiento (Wohin?) = Akkusativ masculino (auf den Küchentisch).',
    grammarFocus: 'Wechselpräposition "auf" + Akkusativ con cambio der → den.'
  },
  {
    id: 's5',
    category: 'Doble Objeto: Dativo de Persona + Acusativo de Cosa',
    translation: 'El hombre le compra un café caliente a su amiga.',
    tokens: ['Der', 'Mann', 'kauft', 'seiner', 'Freundin', 'einen', 'heißen', 'Kaffee.'],
    hint: 'Regla clásica: primero el beneficiario en Dativo (seiner Freundin) y luego la cosa en Acusativo (einen heißen Kaffee).',
    grammarFocus: 'Dativo personal + Acusativo de objeto directo.'
  },
  {
    id: 's6',
    category: 'Verbo separable (Prefijo al final absoluto)',
    translation: 'El tren a Múnich sale puntual a las nueve.',
    tokens: ['Der', 'Zug', 'nach', 'München', 'fährt', 'pünktlich', 'um', 'neun', 'Uhr', 'ab.'],
    hint: 'El verbo "abfahren" se separa: "fährt" en posición 2 y el prefijo "ab" cierra la oración al final.',
    grammarFocus: 'Verbos separables (trennbare Verben).'
  },
  {
    id: 's7',
    category: 'Condicional con "wenn" + Inversión en Principal',
    translation: 'Si tengo tiempo el fin de semana, te visito.',
    tokens: ['Wenn', 'ich', 'am', 'Wochenende', 'Zeit', 'habe,', 'besuche', 'ich', 'dich.'],
    hint: 'En la frase con "Wenn...", el verbo va al final (habe). En la principal que sigue, el verbo va de primero (besuche).',
    grammarFocus: 'Oración condicional con "wenn" + regla V1 en la oración principal consecutiva.'
  },
  {
    id: 's8',
    category: 'Perfekt con haben (Partizip II al final)',
    translation: 'Hemos comprado un piso muy bonito en Colonia.',
    tokens: ['Wir', 'haben', 'eine', 'sehr', 'schöne', 'Wohnung', 'in', 'Köln', 'gekauft.'],
    hint: 'Auxiliar "haben" en posición 2 y el participio "gekauft" al final.',
    grammarFocus: 'Construcción del Perfekt con participio regular.'
  },
  {
    id: 's9',
    category: 'Subordinada con "dass" (Objetiva con verbo al final)',
    translation: 'Sé con seguridad que Clara vive en Berlín.',
    tokens: ['Ich', 'weiß', 'genau,', 'dass', 'Clara', 'in', 'Berlin', 'wohnt.'],
    hint: 'La conjunción "dass" subordina y envía el verbo conjugado ("wohnt") al final de la frase.',
    grammarFocus: 'Subordinada completiva con "dass".'
  },
  {
    id: 's10',
    category: 'Posesivos en Dativo (Régimen del verbo helfen)',
    translation: 'Todos los días ayudo a mi padre en el jardín.',
    tokens: ['Ich', 'helfe', 'jeden', 'Tag', 'meinem', 'Vater', 'im', 'Garten.'],
    hint: 'El verbo "helfen" exige dativo obligatorio: mein Vater → meinem Vater (-em).',
    grammarFocus: 'Dativo regido por verbo + posesivo "mein" declinado.'
  },
  {
    id: 's11',
    category: 'Wechselpräposition estática (Wo? = Dativ)',
    translation: 'La llave de repuesto está sobre la mesa de noche.',
    tokens: ['Der', 'Schlüssel', 'liegt', 'auf', 'dem', 'Nachttisch.'],
    hint: 'Estar situado (liegen) + posición fija (Wo?) = Dativ masculino (auf dem Nachttisch).',
    grammarFocus: 'Wechselpräposition "auf" + Dativ masculino con "dem".'
  },
  {
    id: 's12',
    category: 'Conector coordinante "aber" (Posición Cero)',
    translation: 'Me gustaría ir al cine, pero no tengo dinero.',
    tokens: ['Ich', 'möchte', 'ins', 'Kino,', 'aber', 'ich', 'habe', 'kein', 'Geld.'],
    hint: 'El conector "aber" ocupa la posición cero (ADUSO: aber, denn, und, sondern, oder). No altera el orden de la siguiente frase.',
    grammarFocus: 'Conectores en posición 0 (ADUSO).'
  },
  {
    id: 's13',
    category: 'Inversión por Adverbio de Frecuencia',
    translation: 'A veces bebemos cerveza alemana en el parque.',
    tokens: ['Manchmal', 'trinken', 'wir', 'deutsches', 'Bier', 'im', 'Park.'],
    hint: 'Al empezar con "Manchmal" (adverbio), el verbo "trinken" ocupa la posición 2 y el sujeto "wir" pasa a posición 3.',
    grammarFocus: 'Inversión Sujeto-Verbo tras adverbio en posición 1.'
  },
  {
    id: 's14',
    category: 'Verbo de Movimiento con Perfekt y Auxiliar "sein"',
    translation: 'Hoy me he despertado muy temprano.',
    tokens: ['Heute', 'bin', 'ich', 'sehr', 'früh', 'aufgewacht.'],
    hint: 'Verbo de cambio de estado ("aufwachen") = auxiliar "sein" (bin) + participio al final ("aufgewacht").',
    grammarFocus: 'Perfekt con auxiliar "sein" para cambio de estado o movimiento.'
  }
];
