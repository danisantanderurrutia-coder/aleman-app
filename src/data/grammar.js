// Módulos pedagógicos de gramática Alemana Nivel A2 con explicaciones en español y ejercicios interactivos

export const grammarTopics = [
  {
    id: 'wechselpraepositionen',
    title: 'Wechselpräpositionen: Akkusativ vs. Dativ',
    subtitle: '¿Hacia dónde o dónde? La regla definitiva de las 9 preposiciones',
    level: 'A2.1',
    icon: 'Compass',
    explanation: {
      summary: 'Hay 9 preposiciones en alemán que cambian de caso según si hay movimiento hacia un destino o si algo ya está ubicado en un lugar fijo.',
      prepositions: ['an', 'auf', 'hinter', 'in', 'neben', 'über', 'unter', 'vor', 'zwischen'],
      goldenRule: [
        {
          question: 'Wohin? (¿Hacia dónde? Movimiento / Cambio de lugar)',
          case: 'AKKUSATIV',
          color: 'blue',
          exampleDe: 'Ich lege das Buch auf den Tisch.',
          exampleEs: 'Pongo el libro sobre la mesa. (Acción de colocarlo)',
        },
        {
          question: 'Wo? (¿Dónde? Posición fija / Estado de reposo)',
          case: 'DATIV',
          color: 'purple',
          exampleDe: 'Das Buch liegt auf dem Tisch.',
          exampleEs: 'El libro está (yace) sobre la mesa. (Ya está ahí)',
        }
      ],
      verbPairs: [
        { action: 'legen (poner horizontal) → Akkusativ', state: 'liegen (estar tumbado) → Dativ' },
        { action: 'stellen (poner vertical) → Akkusativ', state: 'stehen (estar de pie) → Dativ' },
        { action: 'setzen (sentar a alguien/se) → Akkusativ', state: 'sitzen (estar sentado) → Dativ' },
        { action: 'hängen (colgar algo) → Akkusativ', state: 'hängen (estar colgado) → Dativ' },
      ],
      tip: '💡 Mnemotecnia rápida: Si respondes a "¿A dónde lo llevas?", es Akkusativ (der → den). Si respondes a "¿Dónde está quieto?", es Dativ (der/das → dem, die → der).'
    },
    exercises: [
      {
        question: 'Ich gehe morgen in ___ Supermarkt.',
        translation: 'Voy mañana al supermercado.',
        options: ['den', 'dem', 'der', 'die'],
        correct: 0,
        explanation: '¿Wohin? (¿A dónde voy?) → Akkusativ masculino (der Supermarkt → den Supermarkt).'
      },
      {
        question: 'Mein Schlüssel liegt auf ___ Tisch.',
        translation: 'Mi llave está sobre la mesa.',
        options: ['den', 'dem', 'das', 'des'],
        correct: 1,
        explanation: '¿Wo? (¿Dónde está?) → Dativ masculino (der Tisch → dem Tisch).'
      },
      {
        question: 'Wir stellen die Lampe neben ___ Sofa (das).',
        translation: 'Ponemos la lámpara al lado del sofá.',
        options: ['das', 'dem', 'den', 'des'],
        correct: 0,
        explanation: 'Verbo "stellen" (acción/movimiento) + Wohin? → Akkusativ neutro (das Sofa → das Sofa).'
      },
      {
        question: 'Das Kind schläft in ___ Bett (das).',
        translation: 'El niño duerme en la cama.',
        options: ['das', 'dem', 'den', 'des'],
        correct: 1,
        explanation: '¿Wo? (¿Dónde duerme?) → Dativ neutro (das Bett → dem Bett).'
      },
      {
        question: 'Häng bitte das Bild an ___ Wand (die)!',
        translation: '¡Por favor cuelga el cuadro en la pared!',
        options: ['die', 'der', 'den', 'dem'],
        correct: 0,
        explanation: '¿Wohin? (acción de colgar en la pared) → Akkusativ femenino (die Wand → die Wand).'
      }
    ]
  },

  {
    id: 'nebensaetze',
    title: 'Oraciones subordinadas con "weil", "dass", "wenn", "obwohl"',
    subtitle: 'El superpoder de mandar el verbo al final de la frase',
    level: 'A2.1',
    icon: 'GitFork',
    explanation: {
      summary: 'En alemán, cuando usas conectores subordinantes (Subjunktionen), la regla de oro es: ¡EL VERBO CONJUGADO VIAJA AL FINAL ABSOLUTO DE LA FRASE!',
      connectors: [
        { word: 'weil', meaning: 'porque (da una razón o causa)', example: 'Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.' },
        { word: 'dass', meaning: 'que (introduce información o pensamientos)', example: 'Ich weiß, dass Deutsch manchmal schwer ist.' },
        { word: 'wenn', meaning: 'cuando / si (condicional o temporal en presente)', example: 'Wenn ich Zeit habe, koche ich gern.' },
        { word: 'obwohl', meaning: 'aunque / a pesar de que', example: 'Er geht spazieren, obwohl es regnet.' }
      ],
      goldenRule: [
        {
          question: 'Estructura con conector subordinado:',
          case: 'Conector + Sujeto + ... + VERBO CONJUGADO.',
          color: 'emerald',
          exampleDe: 'Ich trinke Kaffee, WEIL ich müde BIN.',
          exampleEs: 'Tomo café porque estoy cansado. (El verbo "bin" se va al final)',
        }
      ],
      tip: '⚠️ Cuidado con la diferencia entre "weil" (manda verbo al final) y "denn" (mantiene orden normal: denn ich bin müde). Ambos significan "porque", pero en el examen A2 les encanta evaluar "weil".'
    },
    exercises: [
      {
        question: 'Ich bleibe heute zu Hause, weil ich krank ___ .',
        translation: 'Me quedo hoy en casa porque estoy enfermo.',
        options: ['bin', 'habe', 'ist', 'sei'],
        correct: 0,
        explanation: 'Con "weil", el verbo conjugado (ich bin) va al final de la oración secundaria.'
      },
      {
        question: 'Mein Arzt sagt, dass ich mehr Wasser trinken ___ .',
        translation: 'Mi médico dice que debo beber más agua.',
        options: ['sollte', 'muss', 'trinke', 'sollen'],
        correct: 1,
        explanation: '"dass" manda el verbo modal conjugado (muss) al final de la frase.'
      },
      {
        question: 'Wenn das Wetter schön ist, ___ wir einen Ausflug.',
        translation: 'Si el clima está bonito, hacemos una excursión.',
        options: ['machen', 'wir machen', 'gemacht', 'zu machen'],
        correct: 0,
        explanation: 'Si la frase empieza con "Wenn...", la oración principal que sigue debe comenzar INMEDIATAMENTE por el verbo (hacemos nosotros...).'
      },
      {
        question: 'Er kommt nicht zur Party, obwohl er eingeladen ___ .',
        translation: 'Él no viene a la fiesta, aunque fue invitado / está invitado.',
        options: ['wurde', 'ist', 'hat', 'wäre'],
        correct: 1,
        explanation: 'Con "obwohl", el verbo auxiliar conjugado (ist) va al final.'
      }
    ]
  },

  {
    id: 'perfekt_sein_haben',
    title: 'Das Perfekt: ¿Cuándo usar "haben" y cuándo "sein"?',
    subtitle: 'El tiempo verbal más usado para hablar del pasado en la vida diaria',
    level: 'A2.1',
    icon: 'History',
    explanation: {
      summary: 'El Perfekt es el tiempo que usan los alemanes en el 90% de sus conversaciones cotidianas para hablar del pasado. Se forma con: Sujeto + (haben/sein) + complemento + Partizip II (al final).',
      goldenRule: [
        {
          question: '¿Cuándo usamos SEIN?',
          case: 'Movimiento de A a B + Cambio de estado',
          color: 'blue',
          exampleDe: 'gehen (ir a pie), fahren (ir en vehículo), fliegen, kommen, aufstehen, einschlafen, sterben.',
          exampleEs: '¡Y las 3 excepciones fijas: sein (ist gewesen), bleiben (ist geblieben), werden (ist geworden)!',
        },
        {
          question: '¿Cuándo usamos HABEN?',
          case: 'Todo lo demás (la gran mayoría)',
          color: 'amber',
          exampleDe: 'Ich habe gegessen, ich habe gearbeitet, ich habe ein Buch gelesen.',
          exampleEs: 'Casi todos los verbos con objeto directo (Akkusativ) van con haben.',
        }
      ],
      tip: '💡 Pregúntate siempre: "¿Cambié de lugar geográfico o cambié de estado físico/vital?". Si la respuesta es sí → usa "sein" (Ich bin nach Deutschland gereist).'
    },
    exercises: [
      {
        question: 'Gestern ___ ich mit dem Zug nach München gefahren.',
        translation: 'Ayer viajé en tren a Múnich.',
        options: ['habe', 'bin', 'hat', 'ist'],
        correct: 1,
        explanation: 'Fahren implica cambio de lugar (desplazamiento) → se usa el auxiliar "sein" (ich bin gefahren).'
      },
      {
        question: 'Was ___ du am Wochenende gemacht?',
        translation: '¿Qué hiciste el fin de semana?',
        options: ['hast', 'bist', 'hat', 'ist'],
        correct: 0,
        explanation: 'Machen es una acción estándar que no implica cambio de lugar/estado → auxiliar "haben" (du hast gemacht).'
      },
      {
        question: 'Wir ___ das ganze Wochenende zu Hause geblieben.',
        translation: 'Nos quedamos todo el fin de semana en casa.',
        options: ['haben', 'sind', 'waren', 'wurden'],
        correct: 1,
        explanation: '¡Ojo con "bleiben" (quedarse)! Aunque no haya movimiento, por regla gramatical fija va SIEMPRE con "sein" (wir sind geblieben).'
      },
      {
        question: 'Heute Morgen ___ er um 7:00 Uhr aufgewacht.',
        translation: 'Esta mañana él se despertó a las 7:00.',
        options: ['hat', 'ist', 'wurde', 'hatte'],
        correct: 1,
        explanation: 'Aufwachen (despertarse) es un cambio de estado (de dormido a despierto) → auxiliar "sein" (er ist aufgewacht).'
      }
    ]
  },

  {
    id: 'adjektivdeklination',
    title: 'Adjektivdeklination (Declinación de adjetivos)',
    subtitle: 'El mito más temido de A2 resuelto con la regla de la sartén',
    level: 'A2.2',
    icon: 'Sparkles',
    explanation: {
      summary: 'Cuando un adjetivo va DELANTE de un sustantivo (ej. "el café caliente", "una casa grande"), en alemán debe recibir una terminación según el artículo, género y caso.',
      goldenRule: [
        {
          question: 'Con artículo determinado (der, die, das):',
          case: 'Regla del huevo o sartén',
          color: 'purple',
          exampleDe: 'Nominativ: der neue Wagen (-e), die neue Stadt (-e), das neue Buch (-e).',
          exampleEs: 'Akkusativ: den neuen Wagen (-en), die neue Stadt (-e), das neue Buch (-e).',
        },
        {
          question: 'La salvación del Dativ y Plural:',
          case: '¡EN TODO EL DATIVO Y PLURAL TERMINA EN -EN!',
          color: 'emerald',
          exampleDe: 'mit dem neuen Auto (-en), in der schönen Wohnung (-en), mit den netten Leuten (-en).',
          exampleEs: '¡Sin excepciones! Si estás en Dativ con artículo der/die/das, el adjetivo siempre termina en "-en".',
        }
      ],
      tip: '🎯 Si ves una preposición con Dativ (mit, bei, von, zu, nach) y un artículo, ¡no lo pienses dos veces! El adjetivo terminará en "-en".'
    },
    exercises: [
      {
        question: 'Ich trinke gern ___ heißen Kaffee (der Kaffee, Akkusativ).',
        translation: 'Me gusta beber el café caliente.',
        options: ['den', 'der', 'dem', 'das'],
        correct: 0,
        explanation: 'Akkusativ masculino determinado: "den heißen Kaffee".'
      },
      {
        question: 'Ich fahre mit dem neu___ Auto (das Auto, Dativ).',
        translation: 'Voy con el coche nuevo.',
        options: ['-en', '-es', '-er', '-e'],
        correct: 0,
        explanation: 'En Dativ con artículo determinado, el adjetivo SIEMPRE termina en "-en" (dem neuen Auto).'
      },
      {
        question: 'Das ist eine schön___ Stadt (die Stadt, Nominativ).',
        translation: 'Esta es una ciudad hermosa.',
        options: ['-e', '-en', '-er', '-es'],
        correct: 0,
        explanation: 'Con artículo indeterminado femenino en Nominativ ("eine..."), el adjetivo toma la marca femenina "-e" (eine schöne Stadt).'
      },
      {
        question: 'Wir haben einen interessant___ Film gesehen.',
        translation: 'Hemos visto una película interesante.',
        options: ['-en', '-em', '-er', '-es'],
        correct: 0,
        explanation: 'Akkusativ masculino con "einen" → el adjetivo se lleva la marca masculina "-en" (einen interessanten Film).'
      }
    ]
  },

  {
    id: 'praeteritum_modalverben',
    title: 'Präteritum de verbos modales y "sein / haben"',
    subtitle: 'Por qué nadie dice "ich habe gemusst" y cómo hablar con soltura',
    level: 'A2.2',
    icon: 'MessageSquareText',
    explanation: {
      summary: 'Aunque en A2 usamos el Perfekt para casi todos los verbos en el pasado, hay una gran excepción que suena 100 veces más natural: los verbos modales (können, müssen, wollen, dürfen, sollen) y los verbos "sein" y "haben" se usan casi siempre en Präteritum.',
      goldenRule: [
        {
          question: 'Formas Präteritum esenciales:',
          case: 'ich / er / sie / es tienen la misma terminación',
          color: 'blue',
          exampleDe: 'sein: ich war (yo era/estaba) | haben: ich hatte (yo tenía)',
          exampleEs: 'können: ich konnte (yo podía) | müssen: ich musste (yo tenía que) | wollen: ich wollte (yo quería)',
        }
      ],
      tip: '💡 En alemán hablado, decir "Ich habe keine Zeit gehabt" suena pesado. Los alemanes dicen con naturalidad: "Ich hatte keine Zeit" o "Ich war gestern krank".'
    },
    exercises: [
      {
        question: 'Gestern ___ ich den ganzen Tag arbeiten. (müssen)',
        translation: 'Ayer tuve que trabajar todo el día.',
        options: ['musste', 'gemusst', 'habe gemusst', 'musst'],
        correct: 0,
        explanation: 'Präteritum de müssen para "ich" es "musste".'
      },
      {
        question: 'Wo ___ du gestern Abend? (sein)',
        translation: '¿Dónde estuviste ayer por la noche?',
        options: ['warst', 'gewesen', 'bist gewesen', 'hattest'],
        correct: 0,
        explanation: 'El Präteritum de sein para "du" es "warst" (Wo warst du?).'
      },
      {
        question: 'Wir ___ leider nicht kommen, weil wir keine Tickets hatten. (können)',
        translation: 'Lamentablemente no pudimos venir porque no teníamos entradas.',
        options: ['konnten', 'gekonnt', 'könnten', 'kann'],
        correct: 0,
        explanation: 'Präteritum de können para "wir" es "konnten".'
      },
      {
        question: 'Als Kind ___ er Arzt werden. (wollen)',
        translation: 'De niño él quería ser médico.',
        options: ['wollte', 'gewollt', 'will', 'wollten'],
        correct: 0,
        explanation: 'Präteritum de wollen para "er" es "wollte".'
      }
    ]
  },

  {
    id: 'reflexivpronomen',
    title: 'Verbos Reflexivos (Reflexive Verben)',
    subtitle: 'sich freuen, sich fühlen, sich beeilen y sus pronombres',
    level: 'A2.2',
    icon: 'UserCheck',
    explanation: {
      summary: 'Muchos verbos en alemán requieren un pronombre reflexivo (sich). En A2, la mayoría usan el caso Akkusativ (mich, dich, sich, uns, euch, sich).',
      goldenRule: [
        {
          question: 'Pronombres reflexivos en Akkusativ:',
          case: 'mich, dich, sich, uns, euch, sich',
          color: 'indigo',
          exampleDe: 'Ich freue mich (Me alegro) | Du freust dich | Er/Sie freut sich',
          exampleEs: 'Wir freuen uns | Ihr freut euch | Sie/sie freuen sich',
        }
      ],
      tip: '📌 Verbos A2 imprescindibles con preposición fija: "sich freuen auf" (alegrarse por algo futuro), "sich freuen über" (alegrarse por algo presente o pasado), "sich interessieren für" (interesarse por).'
    },
    exercises: [
      {
        question: 'Ich freue ___ sehr über das Geschenk!',
        translation: '¡Me alegro mucho por el regalo!',
        options: ['mich', 'mir', 'sich', 'dich'],
        correct: 0,
        explanation: 'Con "ich", el reflexivo en Akkusativ es "mich" (Ich freue mich).'
      },
      {
        question: 'Beeil ___ bitte, der Zug fährt gleich ab!',
        translation: '¡Apúrate por favor, el tren sale pronto!',
        options: ['dich', 'dir', 'sich', 'mich'],
        correct: 0,
        explanation: 'Imperativo informal para "du" de sich beeilen: "Beeil dich!".'
      },
      {
        question: 'Wir interessieren ___ für deutsche Kultur.',
        translation: 'Nos interesamos por la cultura alemana.',
        options: ['uns', 'euch', 'sich', 'wir'],
        correct: 0,
        explanation: 'Con "wir", el reflexivo es "uns" (Wir interessieren uns für...).'
      },
      {
        question: 'Wie fühlen Sie ___ heute?',
        translation: '¿Cómo se siente usted hoy?',
        options: ['sich', 'Ihnen', 'Sie', 'mich'],
        correct: 0,
        explanation: 'Con la forma formal "Sie", el pronombre reflexivo es "sich".'
      }
    ]
  },

  {
    id: 'modalpartikeln',
    title: 'Modalpartikeln: Las Partículas Modales (doch, mal, denn, ja, eigentlich)',
    subtitle: 'El secreto alemán para sonar natural, empático y fluido al hablar',
    level: 'A2-B1',
    icon: 'Sparkles',
    explanation: {
      summary: 'Las partículas modales son pequeñas palabras "mágicas" casi intraducibles que no cambian el significado lógico de la frase, pero expresan la emoción, intención, cortesía, sorpresa o resignación del hablante.',
      connectors: [
        { word: 'doch', meaning: '¡Claro que sí! / Suavizar ruego / Pero si...', example: 'Komm doch rein! (¡Pasa, hombre!) | Das weißt du doch! (¡Pero si ya lo sabes!)' },
        { word: 'mal', meaning: 'Suaviza una petición u orden (un momento)', example: 'Kannst du mir mal helfen? (¿Me echas una mano?) | Schau mal! (¡Mira un segundo!)' },
        { word: 'denn', meaning: 'Muestra interés amigable o extrañeza en preguntas', example: 'Wie spät ist es denn? (¿Qué hora es, pues?) | Was machst du denn hier? (¿Qué haces tú por aquí?)' },
        { word: 'ja', meaning: 'Sorpresa inesperada o evidencia compartida', example: 'Das ist ja fantastisch! (¡Vaya, pero qué bien!) | Du bist ja schon da! (¡Pero si ya estás aquí!)' },
        { word: 'eigentlich', meaning: 'En realidad / A decir verdad / Para cambiar de tema', example: 'Was machst du eigentlich beruflich? (¿A qué te dedicas, a todo esto?)' },
        { word: 'eben / halt', meaning: 'Resignación natural ante lo inevitable', example: 'Das ist eben so. (Las cosas son así / Es lo que hay).' }
      ],
      goldenRule: [
        {
          question: 'Regla de oro de posición:',
          case: 'Suelen ir en el centro de la oración (Mittelfeld), justo después del pronombre o sujeto.',
          color: 'amber',
          exampleDe: 'Hilf mir MAL kurz! / Das ist JA eine Überraschung!',
          exampleEs: '¡Échame una mano un segundo! / ¡Vaya sorpresa!',
        }
      ],
      tip: '💡 Si quitas una partícula modal, la frase sigue siendo gramaticalmente correcta pero suena seca y robótica. Al usarlas, pasas instantáneamente de sonar como un libro de texto a sonar como un nativo.'
    },
    exercises: [
      {
        question: 'Komm ___ rein, es ist kalt draußen! (Invitación cordial)',
        translation: '¡Pasa, hombre, que hace frío afuera!',
        options: ['doch', 'nie', 'sehr', 'weil'],
        correct: 0,
        explanation: '"doch" en imperativo suaviza la orden y la convierte en una invitación afectuosa y hospitalaria ("Komm doch rein!").'
      },
      {
        question: 'Kannst du mir ___ kurz dein Handy leihen? (Petición amable)',
        translation: '¿Me puedes prestar un segundo tu móvil?',
        options: ['mal', 'sehr', 'oft', 'nie'],
        correct: 0,
        explanation: '"mal" suaviza la petición haciéndola casual y poco invasiva ("Kannst du mir mal kurz...").'
      },
      {
        question: 'Wo wohnst du ___ in Berlin? (Pregunta con interés amistoso)',
        translation: '¿En qué parte de Berlín vives tú, a todo esto?',
        options: ['denn', 'doch', 'halt', 'mal'],
        correct: 0,
        explanation: 'En preguntas, "denn" añade curiosidad amigable y calidez ("Wo wohnst du denn?").'
      },
      {
        question: 'Du bist ___ heute früh wach! (Sorpresa genuina)',
        translation: '¡Vaya, pero si te has despertado temprano hoy!',
        options: ['ja', 'denn', 'eben', 'dass'],
        correct: 0,
        explanation: '"ja" en oraciones afirmativas expresa asombro ante algo inesperado ("Du bist ja früh wach!").'
      }
    ]
  },

  {
    id: 'deklinationen_master',
    title: 'Compendio de Declinaciones: Nominativ, Akkusativ, Dativ & Genitiv',
    subtitle: 'El mapa completo de casos, artículos determinados/indeterminados y adjetivos',
    level: 'A2-B1',
    icon: 'Compass',
    explanation: {
      summary: 'El alemán tiene 3 géneros (der, die, das) y 4 casos gramaticales según la función sintáctica en la oración: Nominativ (sujeto), Akkusativ (objeto directo / destino), Dativ (objeto indirecto / ubicación) y Genitiv (posesión).',
      goldenRule: [
        {
          question: '1. Nominativ (Sujeto / ¿Quién hace la acción?):',
          case: 'der Mann / die Frau / das Kind / die Kinder',
          color: 'stone',
          exampleDe: 'Der neue Kollege kommt heute.',
          exampleEs: 'El nuevo colega viene hoy.',
        },
        {
          question: '2. Akkusativ (Objeto Directo / ¿A quién? / Movimiento Wohin?):',
          case: 'den Mann / die Frau / das Kind / die Kinder',
          color: 'blue',
          exampleDe: 'Ich sehe den neuen Kollegen.',
          exampleEs: 'Veo al nuevo colega. (¡Solo cambia el masculino: der → den!).',
        },
        {
          question: '3. Dativ (Objeto Indirecto / ¿A quién le pasa? / Ubicación Wo?):',
          case: 'dem Mann / der Frau / dem Kind / den Kindern (+n)',
          color: 'purple',
          exampleDe: 'Ich helfe dem neuen Kollegen.',
          exampleEs: 'Ayudo al nuevo colega. (Masculino/Neutro = dem; Femenino = der; Plural = den + n).',
        },
        {
          question: '4. Genitiv (Posesión / ¿De quién?):',
          case: 'des Mannes (+es) / der Frau / des Kindes (+es) / der Kinder',
          color: 'amber',
          exampleDe: 'Das Auto des neuen Kollegen.',
          exampleEs: 'El coche del nuevo colega.',
        }
      ],
      tip: '🎯 En la declinación con artículo determinado (der/die/das), ¡en TODO el Dativ, Genitiv y Plural el adjetivo termina siempre en "-en"!'
    },
    exercises: [
      {
        question: 'Ich gebe ___ Kind (das) einen Apfel.',
        translation: 'Le doy una manzana al niño.',
        options: ['dem', 'den', 'des', 'das'],
        correct: 0,
        explanation: 'Objeto indirecto (¿a quién le doy?) → Dativ neutro: das Kind → dem Kind.'
      },
      {
        question: 'Wir haben ___ neu___ Tisch (der) gekauft.',
        translation: 'Hemos comprado la mesa nueva.',
        options: ['den / -en', 'der / -e', 'dem / -en', 'des / -es'],
        correct: 0,
        explanation: 'Objeto directo (¿qué compramos?) → Akkusativ masculino determinado: den neuen Tisch.'
      },
      {
        question: 'Das ist die Tasche ___ Mutter (die).',
        translation: 'Ese es el bolso de la madre.',
        options: ['der', 'des', 'dem', 'den'],
        correct: 0,
        explanation: 'Posesión (¿de quién es el bolso?) → Genitiv femenino: die Mutter → der Mutter.'
      },
      {
        question: 'Ich fahre mit ___ Freunden (die Freunde, Plural).',
        translation: 'Voy con los amigos.',
        options: ['den', 'die', 'dem', 'der'],
        correct: 0,
        explanation: 'Preposición "mit" exige siempre Dativo. En plural: die Freunde → den Freunden (con la -n final).'
      }
    ]
  }
];

