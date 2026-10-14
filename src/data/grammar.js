// Tratado pedagógico exhaustivo de gramática Alemana Nivel A2
// Diseñado con fundamentación conceptual, origen de casos, tablas dinámicas y rayos X oracionales

export const grammarTopics = [
  {
    id: 'ursprung_faelle',
    title: 'El Origen de los Casos: Nominativ, Akkusativ & Dativ',
    subtitle: 'Por qué existen, qué rol cumplen y cómo se materializan los artículos',
    level: 'A2.1 Fundamentos',
    icon: 'Layers',
    originExplanation: {
      whyItExists: 'En español dependemos del orden rígido de las palabras (Sujeto + Verbo + Objeto) o de la preposición "a" personal ("Veo a María"). En alemán, el orden es flexible: para saber quién hace qué, el idioma coloca pequeños "sellos" morfológicos en los artículos. Estos sellos son los CASOS.',
      theThreeRoles: [
        {
          name: '1. Nominativ (Sujeto)',
          question: 'Wer? / Was? (¿Quién? / ¿Qué?)',
          role: 'El ejecutor o protagonista.',
          example: 'Der Mann arbeitet. (El hombre trabaja → Sujeto = Nominativ)',
          color: 'stone'
        },
        {
          name: '2. Akkusativ (Objeto Directo)',
          question: 'Wen? / Was? (¿A quién? / ¿Qué?)',
          role: 'El objeto del impacto directo. Lo que el verbo toca, compra, ve o come.',
          example: 'Ich sehe den Mann. (Veo al hombre → den Mann es el impacto directo)',
          color: 'blue',
          secret: '⭐ ¡EL SECRETO DE ORO DEL ACUSATIVO! Solo el masculino cambia: der → den, ein → einen, mein → meinen. Femenino (die), neutro (das) y plural (die) quedan EXACTAMENTE IGUALES al nominativo.'
        },
        {
          name: '3. Dativ (Objeto Indirecto & Beneficiario)',
          question: 'Wem? (¿A quién? / ¿Para quién?)',
          role: 'El destinatario secundario o beneficiario de la acción.',
          example: 'Ich gebe dem Mann das Buch. (Le doy el libro al hombre → dem Mann recibe el libro)',
          color: 'purple',
          secret: '⭐ ¡LA FORMA SUAVE DEL DATIVO! Todo se redondea a sonidos nasales: Masculino y Neutro terminan en "-em" (dem, einem, meinem). Femenino toma "-er" (der, einer, meiner). Plural toma "-en" (den Freunden) y le añade una "-n" al sustantivo.'
        }
      ],
      dativPrepositions: [
        'aus', 'bei', 'mit', 'nach', 'seit', 'von', 'zu'
      ],
      dativMnemonic: 'Mnemotecnia clásica infalible: "AUS - BEI - MIT - NACH - SEIT - VON - ZU" exigen SIEMPRE Dativ, sin importar si hay movimiento o no.',
      feminineEndings: [
        '-ung (die Wohnung)', '-in (die Freundin)', '-schaft (die Freundschaft)', 
        '-heit (die Gesundheit)', '-keit (die Möglichkeit)', '-tät (die Universität)',
        '-musik (die Musik)', '-milch (die Milch)'
      ]
    },
    tables: {
      definite: [
        { case: 'Nominativ', m: 'der', f: 'die', n: 'das', pl: 'die' },
        { case: 'Akkusativ', m: 'den', f: 'die', n: 'das', pl: 'die', highlightM: true },
        { case: 'Dativ', m: 'dem', f: 'der', n: 'dem', pl: 'den (+n)', highlightAll: true },
      ],
      indefinite: [
        { case: 'Nominativ', m: 'ein', f: 'eine', n: 'ein', pl: '-' },
        { case: 'Akkusativ', m: 'einen', f: 'eine', n: 'ein', pl: '-', highlightM: true },
        { case: 'Dativ', m: 'einem', f: 'einer', n: 'einem', pl: '-', highlightAll: true },
      ],
      possessive: [
        { case: 'Nominativ', m: 'mein', f: 'meine', n: 'mein', pl: 'meine' },
        { case: 'Akkusativ', m: 'meinen', f: 'meine', n: 'mein', pl: 'meine', highlightM: true },
        { case: 'Dativ', m: 'meinem', f: 'meiner', n: 'meinem', pl: 'meinen (+n)', highlightAll: true },
      ],
      negation: [
        { case: 'Nominativ', m: 'kein', f: 'keine', n: 'kein', pl: 'keine' },
        { case: 'Akkusativ', m: 'keinen', f: 'keine', n: 'kein', pl: 'keine', highlightM: true },
        { case: 'Dativ', m: 'keinem', f: 'keiner', n: 'keinem', pl: 'keinen (+n)', highlightAll: true },
      ]
    },
    sentenceRayX: [
      {
        de: 'Der Chef kauft dem Mitarbeiter einen Kaffee.',
        es: 'El jefe le compra un café al empleado.',
        breakdown: [
          { segment: 'Der Chef', role: 'Nominativ (Sujeto)', color: 'stone' },
          { segment: 'kauft', role: 'Verbo conjugado', color: 'gray' },
          { segment: 'dem Mitarbeiter', role: 'Dativ (Beneficiario)', color: 'purple' },
          { segment: 'einen Kaffee', role: 'Akkusativ (Objeto directo masculino)', color: 'blue' },
        ]
      },
      {
        de: 'Ich gebe meiner Mutter das Geschenk.',
        es: 'Le doy el regalo a mi madre.',
        breakdown: [
          { segment: 'Ich', role: 'Nominativ (Sujeto)', color: 'stone' },
          { segment: 'gebe', role: 'Verbo', color: 'gray' },
          { segment: 'meiner Mutter', role: 'Dativ femenino (die Mutter → meiner)', color: 'purple' },
          { segment: 'das Geschenk', role: 'Akkusativ neutro (intacto)', color: 'blue' },
        ]
      }
    ],
    exercises: [
      {
        question: 'Ich sehe ___ Mann auf der Straße.',
        translation: 'Veo al hombre en la calle.',
        options: ['den', 'der', 'dem', 'des'],
        correct: 0,
        explanation: '¿Wen sehe ich? (¿A quién veo?) → Objeto directo masculino = Akkusativ (der Mann → den Mann).'
      },
      {
        question: 'Sie hilft ___ Frau beim Einkaufen.',
        translation: 'Ella ayuda a la mujer con las compras.',
        options: ['der', 'die', 'den', 'dem'],
        correct: 0,
        explanation: '⚠️ ¡"Helfen" siempre rige Dativo! Femenino en dativo: die Frau → der Frau.'
      },
      {
        question: 'Wir schenken ___ Kind ein Buch.',
        translation: 'Le regalamos un libro al niño.',
        options: ['dem', 'das', 'den', 'der'],
        correct: 0,
        explanation: '¿Wem schenken wir ein Buch? (¿A quién le regalamos?) → Dativo neutro (das Kind → dem Kind).'
      },
      {
        question: 'Ich trinke jeden Morgen ___ Kaffee (der Kaffee).',
        translation: 'Bebo cada mañana un café.',
        options: ['einen', 'ein', 'einem', 'einer'],
        correct: 0,
        explanation: 'Objeto directo masculino con artículo indefinido → Akkusativ (ein Kaffee → einen Kaffee).'
      }
    ]
  },

  {
    id: 'possessiv_negation',
    title: 'Posesivos & Negación: "Nicht" vs. "Kein"',
    subtitle: 'La concordancia con el objeto poseído y cómo negar con precisión alemana',
    level: 'A2.1 Sintaxis',
    icon: 'ShieldAlert',
    originExplanation: {
      whyItExists: 'En alemán, el artículo posesivo (mi, tu, su...) no cambia por quién es el dueño, sino por el sustantivo que acompaña. Además, la negación se divide en dos mundos: "kein" para sustantivos y "nicht" para todo lo demás.',
      theThreeRoles: [
        {
          name: 'Personas & Raíces Posesivas',
          role: 'ich → mein | du → dein | er/es → sein | sie → ihr | wir → unser | ihr → euer | Sie → Ihr',
          example: 'sein Vater (su padre de él) vs ihr Vater (su padre de ella)',
          color: 'stone',
          secret: '📌 Regla clave de oro: "mein Vater" (masc), "meine Mutter" (fem), "mein Haus" (neutro), "meine Freunde" (plural).'
        },
        {
          name: 'Negación con "kein"',
          role: 'Se usa SOLO para negar sustantivos con artículo indefinido (ein) o sin artículo.',
          example: 'Ich habe ein Auto → Ich habe kein Auto. Ich trinke Bier → Ich trinke kein Bier.',
          color: 'rose',
          secret: '"Kein" se declina exactamente igual que "ein": keinen (Akk masc), keinem (Dat masc/neut), keiner (Dat fem).'
        },
        {
          name: 'Negación con "nicht"',
          role: 'Niega verbos, adjetivos, adverbios y sustantivos con artículo definido (der/die/das).',
          example: 'Ich laufe nicht. Das Haus ist nicht groß. Ich habe das Geld nicht.',
          color: 'amber',
          secret: 'Compara: "Ich habe kein Geld" (No tengo dinero, niego la existencia) vs "Ich habe das Geld nicht" (No tengo ese dinero específico, niego la posesión concreta con nicht).'
        }
      ]
    },
    tables: {
      possessive: [
        { case: 'Nominativ', m: 'mein', f: 'meine', n: 'mein', pl: 'meine' },
        { case: 'Akkusativ', m: 'meinen', f: 'meine', n: 'mein', pl: 'meine', highlightM: true },
        { case: 'Dativ', m: 'meinem', f: 'meiner', n: 'meinem', pl: 'meinen (+n)', highlightAll: true },
      ],
      negation: [
        { case: 'Nominativ', m: 'kein', f: 'keine', n: 'kein', pl: 'keine' },
        { case: 'Akkusativ', m: 'keinen', f: 'keine', n: 'kein', pl: 'keine', highlightM: true },
        { case: 'Dativ', m: 'keinem', f: 'keiner', n: 'keinem', pl: 'keinen (+n)', highlightAll: true },
      ]
    },
    sentenceRayX: [
      {
        de: 'Ich fahre mit meinem neuen Fahrrad zur Arbeit.',
        es: 'Voy en mi bicicleta nueva al trabajo.',
        breakdown: [
          { segment: 'mit', role: 'Preposición fija de Dativo', color: 'purple' },
          { segment: 'meinem neuen Fahrrad', role: 'Dativ neutro (das Fahrrad → meinem)', color: 'blue' },
          { segment: 'zur Arbeit', role: 'zu + der Arbeit (Dativ)', color: 'stone' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Ich habe leider ___ Auto (das Auto).',
        translation: 'Lamentablemente no tengo coche.',
        options: ['kein', 'nicht', 'keinen', 'keine'],
        correct: 0,
        explanation: 'Negamos un sustantivo neutro sin artículo → "kein Auto".'
      },
      {
        question: 'Er kommt heute ___ zur Schule.',
        translation: 'Él no viene hoy a la escuela.',
        options: ['nicht', 'kein', 'keine', 'keinen'],
        correct: 0,
        explanation: 'Niega el verbo o la acción de venir → se usa "nicht".'
      },
      {
        question: 'Ich helfe ___ Schwester (die Schwester).',
        translation: 'Ayudo a mi hermana.',
        options: ['meiner', 'meine', 'meinem', 'meinen'],
        correct: 0,
        explanation: 'Helfen pide Dativo. Femenino posesivo en dativo → "meiner Schwester".'
      }
    ]
  },

  {
    id: 'modalverben',
    title: 'Modalverben: Dürfen, Können, Müssen',
    subtitle: 'Permiso, capacidad y obligación ineludible con la estructura Satzklammer',
    level: 'A2.1 Verbos',
    icon: 'Sliders',
    originExplanation: {
      whyItExists: 'Los verbos modales modifican la actitud del hablante frente a una acción. En alemán forman una pinza estructural (Satzklammer): el verbo modal se conjuga en posición 2 y arroja el verbo principal en infinitivo AL FINAL de la oración.',
      theThreeRoles: [
        {
          name: 'Dürfen (Tener permiso / Prohibición)',
          role: 'Expresa autorización legal o social.',
          example: 'Du darfst hier nicht rauchen. Du darfst den Müll nicht auf den Boden werfen.',
          color: 'emerald'
        },
        {
          name: 'Können (Poder / Capacidad / Propuesta)',
          role: 'Saber hacer algo o tener la posibilidad física/mental.',
          example: 'Ich kann gut Deutsch sprechen. Wir können morgen ins Kino gehen.',
          color: 'blue'
        },
        {
          name: 'Müssen (Tener que / Deber ineludible)',
          role: 'Obligación absoluta que no depende de tu voluntad.',
          example: 'Ich muss heute bis 20 Uhr arbeiten.',
          color: 'amber'
        }
      ]
    },
    tables: {
      modals: [
        { person: 'ich', duerfen: 'darf', koennen: 'kann', muessen: 'muss' },
        { person: 'du', duerfen: 'darfst', koennen: 'kannst', muessen: 'musst' },
        { person: 'er/sie/es', duerfen: 'darf', koennen: 'kann', muessen: 'muss' },
        { person: 'wir', duerfen: 'dürfen', koennen: 'können', muessen: 'müssen' },
        { person: 'ihr', duerfen: 'dürft', koennen: 'könnt', muessen: 'müsst' },
        { person: 'sie/Sie', duerfen: 'dürfen', koennen: 'können', muessen: 'müssen' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Du darfst den Müll nicht auf den Boden werfen.',
        es: 'No puedes (no tienes permitido) tirar la basura al suelo.',
        breakdown: [
          { segment: 'Du', role: 'Sujeto', color: 'stone' },
          { segment: 'darfst', role: 'Verbo modal en POSICIÓN 2', color: 'emerald' },
          { segment: 'den Müll nicht auf den Boden', role: 'Complementos', color: 'blue' },
          { segment: 'werfen', role: 'Infinitivo AL FINAL', color: 'amber' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Hier ___ man nicht parken. Es ist verboten! (dürfen)',
        translation: 'Aquí no se puede aparcar. ¡Está prohibido!',
        options: ['darf', 'muss', 'kannst', 'darfst'],
        correct: 0,
        explanation: 'Con el pronombre impersonal "man" (tercera persona) el verbo dürfen es "darf".'
      },
      {
        question: 'Morgen habe ich eine Prüfung, ich ___ viel lernen. (müssen)',
        translation: 'Mañana tengo un examen, tengo que estudiar mucho.',
        options: ['muss', 'kann', 'darf', 'müsste'],
        correct: 0,
        explanation: 'Obligación necesaria para aprobar: "ich muss".'
      },
      {
        question: '___ du mir bitte helfen? (können)',
        translation: '¿Puedes ayudarme por favor?',
        options: ['Kannst', 'Musst', 'Darfst', 'Können'],
        correct: 0,
        explanation: 'Segunda persona singular (du) de können es "kannst".'
      }
    ]
  },

  {
    id: 'reflexive_verben',
    title: 'Verbos Reflexivos: Akkusativ vs. Dativ',
    subtitle: 'La regla anatómica de oro: cuándo decir "mich" y cuándo decir "mir"',
    level: 'A2.2 Verbos',
    icon: 'RotateCcw',
    originExplanation: {
      whyItExists: 'Los verbos reflexivos expresan acciones que recaen sobre el propio sujeto que las realiza. Muchos estudiantes confunden cuándo usar el pronombre en Acusativo (mich/dich) y cuándo en Dativo (mir/dir). La regla anatómica resuelve esta duda para siempre.',
      theThreeRoles: [
        {
          name: 'Regla Anatómica 1: Sin objeto secundario → AKKUSATIV',
          role: 'Si la acción recae sobre TODO tu ser sin especificar partes.',
          example: 'Ich wasche mich. (Me lavo / me baño entero). Er beeilt sich.',
          color: 'blue'
        },
        {
          name: 'Regla Anatómica 2: Con parte del cuerpo o prenda → DATIV',
          role: 'Si mencionas qué parte específica te lavas o qué prenda te pones, esa parte es el objeto directo (Akkusativ), por lo que TÚ pasas a ser el beneficiario (Dativ).',
          example: 'Ich wasche mir [Dat] die Haare [Akk]. Ich ziehe mir [Dat] die Jacke [Akk] an.',
          color: 'purple',
          secret: '💡 Truco visual: La mano/cabello/chaqueta es lo tocado (Akkusativ); tú eres la persona que recibe el beneficio (Dativ: mir, dir).'
        }
      ]
    },
    tables: {
      reflexivePronouns: [
        { person: 'ich', akk: 'mich', dat: 'mir' },
        { person: 'du', akk: 'dich', dat: 'dir' },
        { person: 'er/sie/es', akk: 'sich', dat: 'sich' },
        { person: 'wir', akk: 'uns', dat: 'uns' },
        { person: 'ihr', akk: 'euch', dat: 'euch' },
        { person: 'sie/Sie', akk: 'sich', dat: 'sich' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Ich wasche mir jeden Morgen das Gesicht.',
        es: 'Me lavo la cara cada mañana.',
        breakdown: [
          { segment: 'Ich', role: 'Sujeto', color: 'stone' },
          { segment: 'wasche', role: 'Verbo', color: 'gray' },
          { segment: 'mir', role: 'Dativ (a mí mismo)', color: 'purple' },
          { segment: 'das Gesicht', role: 'Akkusativ (la parte del cuerpo)', color: 'blue' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Ich putze ___ die Zähne.',
        translation: 'Me cepillo los dientes.',
        options: ['mir', 'mich', 'sich', 'dir'],
        correct: 0,
        explanation: 'Los dientes (die Zähne) son el objeto directo → tú vas en Dativ: "mir".'
      },
      {
        question: 'Ich muss ___ beeilen, der Zug kommt gleich!',
        translation: 'Tengo que darme prisa, ¡el tren viene ya!',
        options: ['mich', 'mir', 'sich', 'uns'],
        correct: 0,
        explanation: '"Sich beeilen" no lleva objeto secundario → Akkusativ: "mich".'
      },
      {
        question: 'Zieh ___ bitte eine warme Jacke an!',
        translation: '¡Por favor ponte una chaqueta abrigada!',
        options: ['dir', 'dich', 'du', 'ihr'],
        correct: 0,
        explanation: 'La chaqueta es el objeto directo → la persona va en Dativ: "dir".'
      }
    ]
  },

  {
    id: 'wechselpraepositionen',
    title: 'Wechselpräpositionen: Akkusativ vs. Dativ',
    subtitle: '¿Hacia dónde o dónde? La regla espacial de las 9 preposiciones',
    level: 'A2.1 Espacio',
    icon: 'Compass',
    originExplanation: {
      whyItExists: 'Las 9 Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen) son un espejo de la física: si hay movimiento dinámico hacia un destino nuevo rigen Acusativo; si describen ubicación quieta o estática en una coordenada fija rigen Dativo.',
      theThreeRoles: [
        {
          name: 'Wohin? (¿Hacia dónde? / Movimiento)',
          role: 'Cambio de lugar o acción de colocar algo.',
          example: 'Ich lege das Buch auf den Tisch. (der Tisch → den Tisch)',
          color: 'blue'
        },
        {
          name: 'Wo? (¿Dónde? / Posición fija)',
          role: 'Reposo o estado sin cambio de lugar.',
          example: 'Das Buch liegt auf dem Tisch. (der Tisch → dem Tisch)',
          color: 'purple'
        }
      ],
      verbPairs: [
        { action: 'legen (poner horizontal) → Akkusativ', state: 'liegen (estar acostado) → Dativ' },
        { action: 'stellen (poner vertical) → Akkusativ', state: 'stehen (estar de pie) → Dativ' },
        { action: 'setzen (sentar a alguien) → Akkusativ', state: 'sitzen (estar sentado) → Dativ' },
        { action: 'hängen (colgar algo) → Akkusativ', state: 'hängen (estar colgado) → Dativ' }
      ]
    },
    tables: {
      spatial: [
        { prep: 'in', wohin: 'in den Park (Akk)', wo: 'im Park (Dat)' },
        { prep: 'auf', wohin: 'auf den Tisch (Akk)', wo: 'auf dem Tisch (Dat)' },
        { prep: 'an', wohin: 'an die Wand (Akk)', wo: 'an der Wand (Dat)' },
        { prep: 'unter', wohin: 'unter das Bett (Akk)', wo: 'unter dem Bett (Dat)' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Wir stellen das Sofa in das Wohnzimmer.',
        es: 'Ponemos el sofá en el salón.',
        breakdown: [
          { segment: 'stellen', role: 'Verbo de acción/movimiento', color: 'emerald' },
          { segment: 'das Sofa', role: 'Akkusativ neutro', color: 'stone' },
          { segment: 'in das Wohnzimmer', role: 'Wohin? → Akkusativ', color: 'blue' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Mein Schlüssel liegt auf ___ Tisch (der Tisch).',
        translation: 'Mi llave está sobre la mesa.',
        options: ['dem', 'den', 'das', 'der'],
        correct: 0,
        explanation: '¿Wo liegt der Schlüssel? (¿Dónde está quieto?) → Dativ masculino: auf dem Tisch.'
      },
      {
        question: 'Ich gehe morgen in ___ Supermarkt (der Supermarkt).',
        translation: 'Voy mañana al supermercado.',
        options: ['den', 'dem', 'der', 'das'],
        correct: 0,
        explanation: '¿Wohin gehe ich? (¿Hacia dónde voy?) → Akkusativ masculino: in den Supermarkt.'
      }
    ]
  },

  {
    id: 'uhrzeit_zeit',
    title: 'Die Uhrzeit: La Hora y Expresiones Temporales',
    subtitle: 'Formato formal 24h, hora coloquial (vor, nach, Viertel) y la trampa de "halb"',
    level: 'A1/A2 Cotidiano',
    icon: 'Clock',
    originExplanation: {
      whyItExists: 'En Alemania la puntualidad es cultural. Existen dos maneras de decir la hora: el formato oficial de 24 horas (en estaciones, trabajo y citas formales) y el formato coloquial hablado.',
      theThreeRoles: [
        {
          name: '1. Formato Oficial (24 Horas)',
          role: 'Es ist [Hora] Uhr [Minutos]. Muy fácil y directo.',
          example: '16:35 = Es ist sechzehn Uhr fünfunddreißig. 08:15 = Es ist acht Uhr fünfzehn.',
          color: 'stone'
        },
        {
          name: '2. Formato Coloquial (nach / vor / Viertel)',
          role: 'Usa "nach" (después de) y "vor" (antes de).',
          example: '15:05 = Es ist fünf nach drei. 14:55 = Es ist fünf vor drei. Viertel nach vier (4:15).',
          color: 'blue'
        },
        {
          name: '3. ⚠️ ¡La Gran Trampa de "halb"!',
          role: 'En alemán "halb" mira HACIA la siguiente hora, no hacia atrás.',
          example: 'halb drei = 2:30 (la mitad hacia las 3, NO las 3:30). halb vier = 3:30.',
          color: 'rose',
          secret: '🚨 Error clásico de hispanohablantes: si alguien te cita a las "halb vier", llega a las 3:30, no a las 4:30.'
        }
      ]
    },
    tables: {
      timeUnits: [
        { de: 'eine Viertelstunde', es: 'un cuarto de hora (15 min)' },
        { de: 'eine halbe Stunde', es: 'media hora (30 min)' },
        { de: 'eine Dreiviertelstunde', es: 'tres cuartos de hora (45 min)' },
        { de: 'zuerst ... dann ... zum Schluss', es: 'primero ... luego ... al final' }
      ]
    },
    sentenceRayX: [
      {
        de: 'Der Zug fährt um Viertel nach sieben ab.',
        es: 'El tren sale a las siete y cuarto.',
        breakdown: [
          { segment: 'Der Zug', role: 'Sujeto', color: 'stone' },
          { segment: 'fährt ... ab', role: 'Verbo separable abfahren', color: 'emerald' },
          { segment: 'um Viertel nach sieben', role: 'Hora: 7:15', color: 'blue' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Si un amigo te dice: "Treffen wir uns um halb fünf", ¿a qué hora es la cita?',
        translation: '¿A qué hora se encuentran?',
        options: ['4:30', '5:30', '5:15', '4:15'],
        correct: 0,
        explanation: '¡"halb fünf" significa que falta media hora para las 5:00 → las 4:30!'
      },
      {
        question: 'Es ist 14:45. De forma coloquial se dice:',
        translation: 'Son las tres menos cuarto.',
        options: ['Viertel vor drei', 'Viertel nach zwei', 'halb drei', 'Dreiviertel zwei'],
        correct: 0,
        explanation: 'Faltan 15 minutos para las 3:00 → "Viertel vor drei".'
      }
    ]
  },

  {
    id: 'nebensaetze_weil',
    title: 'Oraciones Subordinadas: "Weil", "Dass", "Wenn"',
    subtitle: 'El superpoder de mandar el verbo conjugado al final absoluto',
    level: 'A2.1 Sintaxis',
    icon: 'GitFork',
    originExplanation: {
      whyItExists: 'En las oraciones subordinadas (Nebensätze), el alemán aplica una regla rígida de clausura: el conector (Subjunktion) exige que el verbo conjugado viaje hasta el último lugar de la frase.',
      theThreeRoles: [
        {
          name: 'Weil (Porque - responde a Warum?)',
          role: 'Da la justificación o causa.',
          example: 'Ich lerne Deutsch, weil ich in Deutschland leben will.',
          color: 'emerald',
          secret: 'Diferencia: "Warum lernst du?" (pregunta) vs "Weil ich reisen will" (respuesta con verbo al final).'
        },
        {
          name: 'Dass (Que)',
          role: 'Introduce pensamientos, noticias u opiniones.',
          example: 'Ich weiß, dass du sehr müde bist.',
          color: 'blue'
        },
        {
          name: 'Wenn (Si condicional / Cuando temporal)',
          role: 'Introduce una condición.',
          example: 'Wenn das Wetter schön ist, gehen wir spazieren.',
          color: 'amber'
        }
      ]
    },
    tables: {
      connectors: [
        { con: 'weil', meaning: 'porque', example: 'Ich bleibe zu Hause, weil ich krank bin.' },
        { con: 'dass', meaning: 'que', example: 'Er sagt, dass er morgen kommt.' },
        { con: 'wenn', meaning: 'si / cuando', example: 'Wenn ich Zeit habe, koche ich.' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Ich gehe heute früh schlafen, weil ich morgen viel arbeiten muss.',
        es: 'Me voy a dormir temprano hoy porque mañana tengo que trabajar mucho.',
        breakdown: [
          { segment: 'weil', role: 'Conector subordinante', color: 'emerald' },
          { segment: 'ich morgen viel arbeiten', role: 'Complementos', color: 'stone' },
          { segment: 'muss', role: 'Verbo conjugado AL FINAL', color: 'rose' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Ich trinke viel Wasser, weil es gesund ___ .',
        translation: 'Bebo mucha agua porque es saludable.',
        options: ['ist', 'sein', 'wird', 'hat'],
        correct: 0,
        explanation: 'Con "weil", el verbo conjugado (ist) va al final de la oración secundaria.'
      },
      {
        question: 'Er freut sich, dass du heute Zeit ___ .',
        translation: 'Él se alegra de que hoy tengas tiempo.',
        options: ['hast', 'hast gehabt', 'haben', 'bist'],
        correct: 0,
        explanation: '"dass" envía el verbo conjugado "hast" a la posición final.'
      }
    ]
  },

  {
    id: 'adjektivdeklination',
    title: 'Adjektivdeklination: Declinación de Adjetivos',
    subtitle: 'La regla simplificada: débil, mixta y la salvación del Dativ en -en',
    level: 'A2.2 Morfología',
    icon: 'Sparkles',
    originExplanation: {
      whyItExists: 'En alemán los adjetivos solo se declinan cuando van DELANTE del sustantivo ("der gute Mann"). Si van detrás del verbo ("Der Mann ist gut"), nunca se declinan.',
      theThreeRoles: [
        {
          name: '⭐ La Regla Salvadora del Dativ y Plural',
          role: 'Si estás en Dativo con artículo o en cualquier Plural con artículo:',
          example: '¡EL ADJETIVO TERMINA SIEMPRE EN "-EN" SIN EXCEPCIÓN!',
          color: 'emerald',
          secret: 'mit dem neuen Auto, in der schönen Stadt, mit den besten Freunden.'
        },
        {
          name: 'Con Artículo Definido (der/die/das)',
          role: 'En Nominativo terminan en -e (der neue Wagen, die neue Lampe, das neue Buch).',
          example: 'En Acusativo masculino cambia a -en: den neuen Wagen.',
          color: 'blue'
        }
      ]
    },
    tables: {
      adjectives: [
        { case: 'Nom. Def', m: 'der neue Wagen (-e)', f: 'die neue Lampe (-e)', n: 'das neue Buch (-e)' },
        { case: 'Akk. Def', m: 'den neuen Wagen (-en)', f: 'die neue Lampe (-e)', n: 'das neue Buch (-e)' },
        { case: 'Dat. Def', m: 'dem neuen Wagen (-en)', f: 'der neuen Lampe (-en)', n: 'dem neuen Buch (-en)' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Ich wohne in einer gemütlichen Wohnung.',
        es: 'Vivo en un departamento acogedor.',
        breakdown: [
          { segment: 'in einer', role: 'Dativ femenino con artículo indefinido', color: 'purple' },
          { segment: 'gemütlichen', role: 'Adjetivo en Dativo: siempre -en', color: 'emerald' },
          { segment: 'Wohnung', role: 'Sustantivo femenino (-ung)', color: 'stone' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Ich trinke gern ___ heißen Kaffee (der Kaffee, Akkusativ).',
        translation: 'Bebo con gusto el café caliente.',
        options: ['den', 'der', 'dem', 'das'],
        correct: 0,
        explanation: 'Akkusativ masculino determinado: "den heißen Kaffee".'
      },
      {
        question: 'Ich fahre mit dem alt___ Bus (der Bus, Dativ).',
        translation: 'Voy con el autobús viejo.',
        options: ['-en', '-e', '-er', '-es'],
        correct: 0,
        explanation: 'En Dativo con artículo determinado, el adjetivo SIEMPRE toma "-en" (dem alten Bus).'
      }
    ]
  }
];
