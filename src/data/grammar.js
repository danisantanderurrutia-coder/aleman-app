// Tratado pedagógico exhaustivo de gramática Alemana Nivel A2
// Integración teórica total de los documentos de estudio: fenomenología, génesis conceptual,
// reglas contrastivas español-alemán, tablas de declinación y análisis oracional.

export const grammarTopics = [
  {
    id: 'ursprung_faelle',
    title: 'El Origen de los Casos: Nominativ, Akkusativ & Dativ',
    subtitle: 'La teoría detrás de los casos: funciones sintácticas, roles oracionales y materialización',
    level: 'A2.1 Fundamentos',
    icon: 'Layers',
    originExplanation: {
      whyItExists: 'En español dependemos principalmente del orden fijo de las palabras (Sujeto + Verbo + Objeto: "El hombre compra la mesa"). En alemán, el orden es mucho más flexible porque el rol sintáctico de cada sustantivo (quién hace la acción, quién la recibe y quién se beneficia) queda codificado matemáticamente en los artículos mediante los CASOS GRAMATICALES (Nominativ, Akkusativ, Dativ).',
      theThreeRoles: [
        {
          name: '1. Nominativ (Sujeto de la Oración)',
          question: 'Wer? / Was? (¿Quién? / ¿Qué?)',
          role: 'Indica el sujeto de la oración: quien realiza la acción o de quien se habla.',
          example: 'Der Mann ist hier. / Die Katze schläft. / Der Chef arbeitet.',
          color: 'stone',
          secret: '👉 Es la forma base. Si un sustantivo actúa como sujeto, su artículo definido será der (masc), die (fem), das (neutro) o die (plural).'
        },
        {
          name: '2. Akkusativ (Objeto Directo)',
          question: 'Wen? / Was? (¿A quién? / ¿Qué?)',
          role: 'Indica el objeto directo: la persona o cosa que recibe directamente la acción del verbo.',
          example: 'Ich sehe den Mann. / Sie kauft einen Apfel. / Wir haben das Auto.',
          color: 'blue',
          secret: '⭐ ¡EL GRAN SECRETO DEL ACUSATIVO! Solo el masculino cambia: der → den, ein → einen, mein → meinen. El femenino (die / eine), el neutro (das / ein) y el plural (die) quedan exactamente iguales al nominativo.'
        },
        {
          name: '3. Dativ (Objeto Indirecto & Beneficiario)',
          question: 'Wem? (¿A quién? / ¿Para quién?)',
          role: 'Indica el objeto indirecto: a quién o para quién se hace algo, o quién se beneficia/perjudica.',
          example: 'Ich gebe dem Mann das Buch. / Sie hilft der Frau. / Wir danken dem Lehrer.',
          color: 'purple',
          secret: '⭐ ¡LA MATERIALIZACIÓN EN DATIVO! Todo se redondea a sonidos nasales: Masculino y Neutro terminan en "-em" (dem, einem, meinem). Femenino toma "-er" (der, einer, meiner). Plural toma "-en" (den Freunden) y añade una "-n" al sustantivo.'
        }
      ],
      quickTrick: '🧠 Truco rápido para recordar del documento:\n* Nominativo = el que hace la acción\n* Acusativo = lo que recibe la acción directamente\n* Dativo = el beneficiario o destinatario de la acción',
      dativPrepositions: ['aus', 'bei', 'mit', 'nach', 'seit', 'von', 'zu'],
      dativMnemonic: '🔑 Regla de los Objetos: Normalmente usamos el acusativo para los objetos; usamos el dativo solo después de los indicadores de dativo: "AUS - BEI - MIT - NACH - SEIT - VON - ZU" > DATIV.',
      feminineEndings: [
        '-ung (die Wohnung, die Prüfung)', '-in (die Freundin)', '-schaft (die Freundschaft)', 
        '-heit (die Gesundheit)', '-keit (die Möglichkeit)', '-tät (die Universität)',
        '-musik (die Musik)', '-milch (die Milch)', '-nachricht (die Nachricht)'
      ]
    },
    theoreticalDossier: [
      {
        title: '1. ¿Qué es un caso y por qué existe en alemán?',
        content: 'En alemán, nominativo, acusativo y dativo son casos gramaticales. Sirven para indicar qué rol cumple cada palabra dentro de la oración (quién hace la acción, quién la recibe y quién se beneficia).\n\n• En español dependemos casi siempre del orden fijo de las palabras (Sujeto + Verbo + Objeto):\n  "El hombre compra el libro" (si invertimos el orden diciendo "El libro compra el hombre", la frase resulta antinatural o ambigua, porque "el libro" no cambia de forma). En seres animados usamos a veces la preposición "a" ("El hombre saluda a la mujer"), pero en objetos inanimados el español carece de marcas de caso.\n\n• En alemán, el orden de las palabras es libre porque el rol sintáctico lo marcan los artículos, NO la posición en que aparecen:\n  1. "Der Mann sieht den Hund." (Sujeto: der Mann = el hombre ve al perro).\n  2. "Den Hund sieht der Mann." (¡El hombre sigue siendo quien ve al perro! Aunque "den Hund" se coloque al inicio para dar énfasis temático, sabemos con absoluta certeza matemática que el hombre es el sujeto porque lleva "der", y que el perro es el objeto porque lleva "den").\n  3. "Den Mann sieht der Hund." (Aquí quien realiza la acción es el perro, porque lleva "der Hund" en nominativo, y a quien ve es al hombre, porque lleva "den Mann" en acusativo. En español: "Al hombre lo ve el perro").\n\n📌 Regla de oro:\n* NOMINATIVO (der / ein / mein): Quien realiza la acción (Sujeto).\n* ACUSATIVO (den / einen / meinen): Quien recibe la acción directamente (Objeto Directo).\n* DATIVO (dem / einem / meinem): El beneficiario o destinatario de la acción (Objeto Indirecto).'
      },
      {
        title: '2. Artículos Definidos vs. Indefinidos: Su Función Epistémica',
        content: 'La distinción entre artículos definidos e indefinidos es fundamental:\n\n• Artículos Definidos (der, die, das, die):\nIndican que se está hablando de algo específico, único o ya conocido tanto por el hablante como por el oyente. Ejemplo: "Der Hund bellt" (el perro ladra, nos referimos a un perro concreto que ambos conocemos).\n\n• Artículos Indefinidos (ein, eine, ein):\nIndican que se introduce algo por primera vez en la conversación, o que se trata de un miembro cualquiera de una clase o especie. Ejemplo: "Ich sehe einen Hund" (veo un perro cualquiera, introducido de nuevo en la escena).'
      },
      {
        title: '3. Concordancia Objetiva de los Posesivos',
        content: 'Los artículos posesivos (mein, dein, sein, ihr, unser, euer, Ihr) indican posesión y funcionan exactamente como los artículos indefinidos (ein / eine). \n\n🔑 Regla clave del documento: El posesivo cambia según el sustantivo que acompaña, NO según la persona que posee.\n\nEjemplos claros:\n* mein Vater (masculino)\n* meine Mutter (femenino)\n* mein Haus (neutro)\n* meine Freunde (plural)\n\nEn Dativo:\n* Masculino y Neutro: terminación -em (mit meinem Vater, zu seinem Haus)\n* Femenino: terminación -er (Ich helfe meiner Mutter)\n* Plural: terminación -en y el sustantivo suele recibir -n (Ich helfe meinen Freunden).'
      },
      {
        title: '4. El Caso del Verbo "Helfen"',
        content: '⚠️ Helfen siempre rige Dativo. En español decimos "ayudo a mi hermano" (lo pensamos como objeto directo), pero en la lógica alemana ayudar es prestar asistencia A alguien en calidad de beneficiario: "Ich helfe meinem Bruder" (dativo masculino: -em), "Ich helfe der Frau" (dativo femenino: der).'
      }
    ],
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
          { segment: 'Der Chef', role: 'Nominativ (Sujeto / Wer?)', color: 'stone' },
          { segment: 'kauft', role: 'Verbo conjugado', color: 'gray' },
          { segment: 'dem Mitarbeiter', role: 'Dativ (Beneficiario / Wem?)', color: 'purple' },
          { segment: 'einen Kaffee', role: 'Akkusativ (Objeto directo / Wen?)', color: 'blue' },
        ]
      },
      {
        de: 'Ich gebe meiner Mutter das Buch.',
        es: 'Le doy el libro a mi madre.',
        breakdown: [
          { segment: 'Ich', role: 'Nominativ (Sujeto)', color: 'stone' },
          { segment: 'gebe', role: 'Verbo', color: 'gray' },
          { segment: 'meiner Mutter', role: 'Dativ femenino (die Mutter → meiner)', color: 'purple' },
          { segment: 'das Buch', role: 'Akkusativ neutro (das Buch)', color: 'blue' },
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
    title: 'Posesivos & Negación Teórica: "Nicht" vs. "Kein"',
    subtitle: 'La ontología de la negación y la tabla completa de declinaciones',
    level: 'A2.1 Sintaxis',
    icon: 'ShieldAlert',
    originExplanation: {
      whyItExists: 'En alemán la negación se divide en dos categorías ontológicas muy distintas: "nicht" niega acciones, cualidades y elementos definidos, mientras que "kein" niega la existencia material o posesión de sustantivos indeterminados.',
      theThreeRoles: [
        {
          name: 'Negación con "nicht" (Acciones & Cualidades)',
          role: 'Niega verbos (Ich laufe nicht), adjetivos predicativos (Das Haus ist nicht groß), adverbios (Er kommt nicht oft), sustantivos con artículo definido (Ich mag nicht den Kaffee) y frases preposicionales (Sie geht nicht in die Schule).',
          example: 'Ich habe das Geld nicht. (No tengo ese dinero específico).',
          color: 'amber',
          secret: 'Posición de "nicht": generalmente se coloca al final de la oración o inmediatamente antes del elemento que busca negar.'
        },
        {
          name: 'Negación con "kein" (Existencia de Cosas)',
          role: 'Se usa exclusivamente para negar sustantivos sin artículo o acompañados de artículo indefinido (ein / eine), y sustantivos en plural sin artículo.',
          example: 'Ich habe kein Auto. / Er ist kein Arzt. / Wir haben keine Kinder.',
          color: 'rose',
          secret: '"Kein" se declina exactamente como el artículo indefinido: keinen (Akk masc), keinem (Dat masc/neut), keiner (Dat fem).'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. Diferencias Clave entre "Nicht" y "Kein" (Doc 1)',
        content: '• "Nicht" niega acciones, estados o cualidades.\n• "Kein" niega la existencia o posesión de algo.\n\nEjemplos comparativos del documento:\n1. "Ich habe kein Geld" (No tengo dinero en general, niego su existencia) vs "Ich habe das Geld nicht" (No tengo el dinero en concreto, niego la posesión específica de esa cantidad).\n2. "Er ist kein Arzt" (Él no es médico de profesión) vs "Er ist nicht der Arzt" (Él no es el médico que estamos buscando).'
      },
      {
        title: '2. Tabla de Declinación de "Kein"',
        content: 'Caso | Masculino | Femenino | Neutro | Plural\n* Nominativo: kein | keine | kein | keine\n* Acusativo: keinen | keine | kein | keine\n* Dativo: keinem | keiner | keinem | keinen\n* Genitivo: keines | keiner | keines | keiner'
      },
      {
        title: '3. Los Posesivos Persona por Persona',
        content: 'Persona | Raíz Alemana | Español\nich | mein | mi\ndu | dein | tu\ner | sein | su (de él)\nsie | ihr | su (de ella)\nes | sein | su (de ello)\nwir | unser | nuestro\nihr | euer | vuestro\nSie | Ihr | su (formal / de usted)\n\n📌 Ojo con la distinción:\n* sein = su (de él o ello)\n* ihr = su (de ella o ellos)\n* Ihr (con mayúscula obligatoria) = su formal de usted.'
      }
    ],
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
        de: 'Ich trinke keinen Kaffee, weil ich schlafen möchte.',
        es: 'No bebo café porque quiero dormir.',
        breakdown: [
          { segment: 'keinen Kaffee', role: 'Negación de objeto masculino en acusativo', color: 'rose' },
          { segment: 'weil', role: 'Conector subordinante', color: 'emerald' },
          { segment: 'schlafen möchte', role: 'Verbos al final', color: 'stone' }
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
    subtitle: 'Permiso, propuestas y obligación ineludible con la estructura Satzklammer',
    level: 'A2.1 Verbos',
    icon: 'Sliders',
    originExplanation: {
      whyItExists: 'Los verbos modales alteran la relación del sujeto con la acción. En alemán forman una pinza oracional (Satzklammer): el verbo modal se conjuga en la posición 2 y proyecta el verbo principal en infinitivo hacia la última posición absoluta de la frase.',
      theThreeRoles: [
        {
          name: 'Dürfen (Poder con permiso / Prohibición)',
          role: 'Indica autorización o permisión legal/social. En negativa (nicht dürfen) indica prohibición tajante.',
          example: 'Du darfst den Müll nicht auf den Boden werfen. (No se permite tirar basura al suelo).',
          color: 'emerald'
        },
        {
          name: 'Können (Poder por capacidad o propuestas)',
          role: 'Expresa capacidad física/intelectual o sirve para proponer planes.',
          example: 'Kannst du Deutsch sprechen? / Wir können morgen ausschlafen.',
          color: 'blue'
        },
        {
          name: 'Müssen (Tener que hacer algo / Obligación)',
          role: 'Expresa necesidad u obligación ineludible impuesta por circunstancias.',
          example: 'Ich muss heute viel lernen. / Muss ich zur Arbeit gehen?',
          color: 'amber'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. Conjugación de los 3 Modales Esenciales (Doc 2)',
        content: 'Persona | Dürfen (Permiso) | Können (Capacidad) | Müssen (Obligación)\nich | darf | kann | muss\ndu | darfst | kannst | musst\ner/sie/es | darf | kann | muss\nwir | dürfen | können | müssen\nihr | dürft | könnt | müsst\nsie/Sie | dürfen | können | müssen\n\n📌 Ojo: Observa que "ich" y "er/sie/es" son siempre idénticos y pierden el Umlaut en singular (darf, kann, muss).'
      },
      {
        title: '2. Estructura de la Pregunta con Verbo Modal',
        content: 'Estructura en preguntas:\n[Verbo Modal Conjugado] + [Sujeto] + [Complementos] + [VERBO PRINCIPAL EN INFINITIVO] + ?\n\nEjemplos del documento:\n* Kannst du Deutsch sprechen? (¿Puedes hablar alemán?)\n* Muss ich zur Arbeit gehen? (¿Tengo que ir al trabajo?)\n\nEs fundamental recordar que el verbo en infinitivo siempre se coloca al final absoluto de la pregunta.'
      }
    ],
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
          { segment: 'darfst', role: 'Verbo modal (Posición 2)', color: 'emerald' },
          { segment: 'den Müll nicht auf den Boden', role: 'Objeto y complemento', color: 'blue' },
          { segment: 'werfen', role: 'Verbo en infinitivo (Posición final)', color: 'amber' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Hier ___ man nicht rauchen. (dürfen)',
        translation: 'Aquí no se tiene permitido fumar.',
        options: ['darf', 'muss', 'kannst', 'darfst'],
        correct: 0,
        explanation: 'Tercera persona singular para "man": "darf".'
      },
      {
        question: 'Morgen habe ich frei, ich ___ ausschlafen. (können)',
        translation: 'Mañana tengo libre, puedo dormir hasta tarde.',
        options: ['kann', 'muss', 'darf', 'kannst'],
        correct: 0,
        explanation: 'Primera persona singular (ich): "kann".'
      }
    ]
  },

  {
    id: 'reflexive_verben',
    title: 'Verbos Reflexivos: Akkusativ vs. Dativ',
    subtitle: 'La regla anatómica y de vestimenta que resuelve cuándo usar "mich" y cuándo "mir"',
    level: 'A2.2 Verbos',
    icon: 'RotateCcw',
    originExplanation: {
      whyItExists: 'Los verbos reflexivos en alemán se caracterizan por llevar el pronombre "sich" en infinitivo (sich waschen) y expresan acciones que recaen sobre el propio sujeto que las ejecuta.',
      theThreeRoles: [
        {
          name: 'Categoría 1: Verbos Siempre Reflexivos',
          role: 'Solo existen en su forma reflexiva.',
          example: 'sich beeilen (darse prisa), sich erholen (recuperarse/descansar).',
          color: 'stone'
        },
        {
          name: 'Categoría 2: Reflexivos Opcionales',
          role: 'Pueden usarse de forma reflexiva o con objeto externo.',
          example: 'sich waschen (lavarse) vs etwas waschen (lavar algo, ej. das Auto).',
          color: 'blue'
        },
        {
          name: 'Categoría 3: Verbos que Cambian de Significado',
          role: 'El pronombre cambia el sentido del verbo.',
          example: 'treffen (encontrar por casualidad) vs sich treffen (reunirse con alguien intencionalmente).',
          color: 'purple'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. La Regla de Oro Anatómica y de Prendas (Doc 2)',
        content: 'Esta es la regla más importante del documento:\n\n👉 Cuando se mencionan partes del cuerpo o prendas de vestir, se usa el DATIVO:\n* "Ich wasche mir die Haare" (Me lavo el pelo. El pelo es el objeto directo en acusativo, por lo que tú recibes el beneficio en dativo: mir).\n* "Ich ziehe mir die Jacke an" (Me pongo la chaqueta).\n\n👉 Si NO se menciona parte del cuerpo o prenda, se usa el ACUSATIVO:\n* "Ich wasche mich" (Me lavo a mí mismo por completo).\n* "Ich ziehe mich an" (Me visto).'
      },
      {
        title: '2. Pronombres Reflexivos en Acusativo vs Dativo',
        content: 'Persona | Acusativo | Dativo\nich | mich | mir\ndu | dich | dir\ner/sie/es | sich | sich\nwir | uns | uns\nihr | euch | euch\nsie/Sie | sich | sich\n\n📌 Fíjate que solo cambian la 1ª y 2ª persona del singular: mich → mir, dich → dir. El resto (sich, uns, euch, sich) son idénticos en ambos casos.'
      },
      {
        title: '3. Verbos Reflexivos Frecuentes en A2',
        content: 'Los más utilizados en la vida diaria:\n* sich freuen (alegrarse)\n* sich ärgern (enfadarse)\n* sich anziehen (vestirse)\n* sich ausruhen (descansar)\n* sich erinnern (recordar)\n* sich interessieren (interesarse)'
      }
    ],
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
        de: 'Ich wasche mir die Hände mit Seife.',
        es: 'Me lavo las manos con jabón.',
        breakdown: [
          { segment: 'Ich wasche', role: 'Sujeto + Verbo', color: 'stone' },
          { segment: 'mir', role: 'Dativ (Beneficiario: a mí)', color: 'purple' },
          { segment: 'die Hände', role: 'Akkusativ (Parte del cuerpo)', color: 'blue' },
          { segment: 'mit Seife', role: 'Complemento con dativo', color: 'emerald' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Ich wasche ___ jeden Morgen die Haare.',
        translation: 'Me lavo el pelo cada mañana.',
        options: ['mir', 'mich', 'sich', 'dir'],
        correct: 0,
        explanation: 'Parte del cuerpo mencionada (die Haare) → pronombre en Dativo: "mir".'
      },
      {
        question: 'Ich muss ___ beeilen!',
        translation: '¡Tengo que darme prisa!',
        options: ['mich', 'mir', 'sich', 'uns'],
        correct: 0,
        explanation: 'Sich beeilen no tiene objeto secundario → Akkusativ: "mich".'
      }
    ]
  },

  {
    id: 'wechselpraepositionen',
    title: 'Wechselpräpositionen: Akkusativ vs. Dativ',
    subtitle: 'La física del movimiento (Wohin?) vs reposo estático (Wo?)',
    level: 'A2.1 Espacio',
    icon: 'Compass',
    originExplanation: {
      whyItExists: 'Las 9 preposiciones mixtas (an, auf, hinter, in, neben, über, unter, vor, zwischen) funcionan como un sensor de movimiento: si la acción describe un cambio de lugar hacia un destino, se materializa en Acusativo. Si describe permanencia o reposo en un lugar fijo, se materializa en Dativo.',
      theThreeRoles: [
        {
          name: 'Wohin? (¿Hacia dónde? / Movimiento / Acción)',
          role: 'Cambio de lugar o acción de colocar algo.',
          example: 'Ich lege das Buch auf den Tisch. (Pongo el libro sobre la mesa → Akkusativ: den Tisch).',
          color: 'blue'
        },
        {
          name: 'Wo? (¿Dónde? / Estado / Reposo)',
          role: 'Ubicación fija o reposo sin desplazamiento.',
          example: 'Das Buch liegt auf dem Tisch. (El libro está sobre la mesa → Dativ: dem Tisch).',
          color: 'purple'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. Los 4 Pares Verbales Fundamentales (Acción vs. Estado)',
        content: 'Acción (Wohin? → Akkusativ) | Estado (Wo? → Dativ)\n• legen (poner horizontal) → liegen (estar acostado)\n• stellen (poner de pie) → stehen (estar de pie)\n• setzen (sentar a alguien) → sitzen (estar sentado)\n• hängen (colgar algo) → hängen (estar colgado)\n\nEjemplo contrastivo:\n* "Ich stelle die Lampe neben das Sofa" (Pongo la lámpara de pie junto al sofá → Akkusativ neutro: das Sofa).\n* "Die Lampe steht neben dem Sofa" (La lámpara ya está de pie junto al sofá → Dativ neutro: dem Sofa).'
      }
    ],
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
        de: 'Das Buch liegt auf dem Schreibtisch.',
        es: 'El libro está sobre el escritorio.',
        breakdown: [
          { segment: 'liegt', role: 'Verbo de estado / reposo', color: 'purple' },
          { segment: 'auf dem Schreibtisch', role: 'Wo? → Dativ masculino', color: 'blue' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Mein Schlüssel liegt auf ___ Tisch (der Tisch).',
        translation: 'Mi llave está sobre la mesa.',
        options: ['dem', 'den', 'das', 'der'],
        correct: 0,
        explanation: '¿Wo? (¿Dónde está quieto?) → Dativ masculino: auf dem Tisch.'
      },
      {
        question: 'Ich gehe morgen in ___ Supermarkt (der Supermarkt).',
        translation: 'Voy mañana al supermercado.',
        options: ['den', 'dem', 'der', 'das'],
        correct: 0,
        explanation: '¿Wohin? (¿A dónde voy?) → Akkusativ masculino: in den Supermarkt.'
      }
    ]
  },

  {
    id: 'uhrzeit_zeit',
    title: 'Die Uhrzeit: La Hora y Expresiones Temporales',
    subtitle: 'El formato formal 24h, la hora coloquial con "nach/vor" y la trampa de "halb"',
    level: 'A1/A2 Cotidiano',
    icon: 'Clock',
    originExplanation: {
      whyItExists: 'En alemán existen dos formas oficiales y cotidianas de comunicar el tiempo cronológico y secuencial.',
      theThreeRoles: [
        {
          name: 'Formato Oficial (24 Horas)',
          role: 'Es ist [Hora] Uhr [Minutos]. Muy usado en trenes, aeropuertos y citas formales.',
          example: '16:35 = Es ist sechzehn Uhr fünfunddreißig.',
          color: 'stone'
        },
        {
          name: 'Formato Coloquial (nach / vor / Viertel)',
          role: 'Minutos después de la hora ("nach") y minutos antes de la hora ("vor").',
          example: '15:05 = Es ist fünf nach drei. 14:55 = Es ist fünf vor drei.',
          color: 'blue'
        },
        {
          name: '⚠️ ¡La Gran Trampa de "halb"!',
          role: 'En alemán "halb" significa la mitad hacia la hora siguiente, NO la hora pasada.',
          example: 'halb drei = 2:30 (media hora para las tres, NO las 3:30). halb vier = 3:30.',
          color: 'rose',
          secret: '🚨 Si alguien te cita a las "halb fünf", ¡debes llegar a las 4:30!'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. Estructura de la Hora en Alemán (Doc 3)',
        content: '• Para decir la hora en punto:\n"Es ist [número] Uhr" (Es ist drei Uhr = Son las tres en punto).\n\n• Minutos después de la hora ("nach"):\n"Es ist [minutos] nach [número]" (Es ist fünf nach drei = Son las tres y cinco).\n\n• Minutos antes de la hora ("vor"):\n"Es ist [minutos] vor [número] Uhr" (Es ist fünf vor drei = Son las tres menos cinco).\n\n• Fracciones temporales clave:\n- Un cuarto de hora: eine Viertelstunde o Viertel nach / Viertel vor\n- Media hora: eine halbe Stunde\n- Tres cuartos de hora: eine Dreiviertelstunde'
      },
      {
        title: '2. Secuenciadores Temporales de Relato (Doc 3)',
        content: 'Para estructurar historias o planes en orden cronológico:\n* Zuerst (primero)\n* Dann (luego / entonces)\n* Zum Schluss / am Ende (de última / al final)\n\nExpresión coloquial del documento: "Ich bin eingeschlafen" (Me quedé dormido).'
      }
    ],
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
          { segment: 'um Viertel nach sieben', role: 'Hora coloquial: 7:15', color: 'blue' }
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
    title: 'Oraciones Subordinadas con "Weil", "Dass" y "Wenn"',
    subtitle: 'La conjunción subordinante "weil" y el verbo expulsado al final de la frase',
    level: 'A2.1 Sintaxis',
    icon: 'GitFork',
    originExplanation: {
      whyItExists: 'En alemán las conjunciones subordinantes (como "weil", "dass", "wenn", "obwohl") alteran el orden canónico y obligan a que el verbo conjugado viaje hasta la última posición absoluta de la oración subordinada.',
      theThreeRoles: [
        {
          name: 'La palabra "weil" (porque)',
          role: 'Es una conjunción subordinante que introduce la causa o razón de la oración principal.',
          example: 'Ich gehe schlafen, weil wir morgen Arbeit haben. / Ich bleibe zu Hause, weil ich krank bin.',
          color: 'emerald'
        },
        {
          name: 'Diferencia con "warum" (Doc 2)',
          role: '"warum" se utiliza para formular preguntas ("¿por qué?"), mientras que "weil" se usa para dar respuestas o justificaciones.',
          example: 'Warum lernst du? — Weil ich in Berlin arbeiten will.',
          color: 'blue'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. Uso y Gramática de "Weil" (Doc 2)',
        content: 'La palabra "weil" en alemán es una conjunción subordinante que se traduce al español como "porque". Se utiliza para introducir una oración subordinada que proporciona la causa o razón de lo que se menciona en la oración principal.\n\nRegla de oro:\nCuando se usa "weil", el verbo conjugado de la oración subordinada se coloca AL FINAL de la misma. Esto puede ser un aspecto gramatical que confunda al inicio a los hispanohablantes.\n\nEjemplos del documento:\n* "Ich bleibe zu Hause, weil ich krank bin." (Me quedo en casa porque estoy enfermo).\n* "Wir fahren nicht ans Meer, weil es zu weit ist." (No vamos a la playa porque está demasiado lejos).\n* "Du darfst heute ausschlafen, weil du viel gelernt hast." (Puedes dormir hasta tarde porque aprendiste mucho).'
      }
    ],
    tables: {
      connectors: [
        { con: 'weil', meaning: 'porque (causa con verbo al final)', example: 'Ich lerne, weil ich die Prüfung bestehen will.' },
        { con: 'dass', meaning: 'que (pensamiento/hecho)', example: 'Ich weiß, dass Deutsch logisch ist.' },
        { con: 'wenn', meaning: 'si / cuando (condición)', example: 'Wenn ich Zeit habe, koche ich.' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Ich bleibe zu Hause, weil ich krank bin.',
        es: 'Me quedo en casa porque estoy enfermo.',
        breakdown: [
          { segment: 'Ich bleibe zu Hause,', role: 'Oración principal (Verbo en pos 2)', color: 'stone' },
          { segment: 'weil', role: 'Conjunción subordinante', color: 'emerald' },
          { segment: 'ich krank', role: 'Sujeto y predicado', color: 'blue' },
          { segment: 'bin.', role: 'Verbo conjugado AL FINAL', color: 'rose' }
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
        question: 'Du darfst ausschlafen, weil du viel gelernt ___ .',
        translation: 'Puedes dormir hasta tarde porque aprendiste mucho.',
        options: ['hast', 'hast gelernt', 'haben', 'bist'],
        correct: 0,
        explanation: 'El verbo auxiliar conjugado "hast" va en la última posición absoluta.'
      }
    ]
  },

  {
    id: 'adjektivdeklination',
    title: 'Adjektivdeklination: Declinación de Adjetivos',
    subtitle: 'Adjetivos atributivos vs predicativos y las 3 declinaciones (débil, mixta, fuerte)',
    level: 'A2.2 Morfología',
    icon: 'Sparkles',
    originExplanation: {
      whyItExists: 'En alemán los adjetivos solo se declinan cuando preceden directamente al sustantivo (adjetivos atributivos). Si van después del verbo (adjetivos predicativos), NUNCA se declinan.',
      theThreeRoles: [
        {
          name: 'Adjetivos Atributivos (Delante del sustantivo)',
          role: 'Se declinan obligatoriamente según 4 factores: artículo previo, número, género y caso.',
          example: 'der gute Mann / ein gutes Kind / mit frischem Brot.',
          color: 'blue'
        },
        {
          name: 'Adjetivos Predicativos (Detrás del verbo)',
          role: '¡No se declinan nunca!',
          example: 'Der Mann ist gut. / Das Kind ist klein. / Die Frau ist nett.',
          color: 'stone'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. Factores y Tipos de Declinación (Doc 1)',
        content: 'Factores que influyen en la declinación:\n1. El tipo de artículo que precede al adjetivo (definido, indefinido o sin artículo)\n2. El número (singular o plural)\n3. El género (masculino, femenino o neutro)\n4. El caso (nominativo, acusativo, dativo o genitivo)\n\nTipos de declinación:\n1. Declinación débil: Se usa cuando el adjetivo va precedido por un artículo determinado (der, die, das) o ciertos pronombres.\n2. Declinación mixta: Se emplea cuando el adjetivo va precedido por un artículo indeterminado (ein), posesivo (mein) o la negación "kein".\n3. Declinación fuerte: Se utiliza cuando no hay ningún artículo antes del adjetivo.'
      },
      {
        title: '2. Tabla Fuerte en Nominativo Singular (Doc 1)',
        content: 'Género | Terminación | Ejemplo\n* Masculino: -er | guter Mann\n* Femenino: -e | gute Frau\n* Neutro: -es | gutes Kind\n\n⭐ La salvación del Dativo y Plural:\nSi estás en DATIVO con artículo determinado, el adjetivo SIEMPRE termina en "-en": mit dem neuen Auto, in der schönen Wohnung, mit den netten Leuten.'
      }
    ],
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
        question: 'Ich fahre con dem alt___ Bus (der Bus, Dativ).',
        translation: 'Voy con el autobús viejo.',
        options: ['-en', '-e', '-er', '-es'],
        correct: 0,
        explanation: 'En Dativo con artículo determinado, el adjetivo SIEMPRE toma "-en" (dem alten Bus).'
      }
    ]
  },
  {
    id: 'personalpronomen_faelle',
    title: 'Pronombres Personales: Nominativ, Akkusativ y Dativ (wir vs uns)',
    subtitle: 'Distingue con precisión quirúrgica el sujeto ejecutor (wir) del objeto receptor (uns)',
    level: 'A2.1 Morfosintaxis',
    icon: 'Layers',
    originExplanation: {
      whyItExists: 'En español usamos la palabra "nosotros" tanto para el sujeto ("Nosotros cocinamos") como para el objeto con preposición ("Él cocina para nosotros"). En alemán, el pronombre muta de raíz de acuerdo a su función: WIR solo puede ser sujeto, UNS es el objeto (acusativo y dativo), y UNSER es el posesivo.',
      theThreeRoles: [
        {
          name: 'Nominativ: wir / ich / du (Sujeto)',
          role: 'El ejecutor directo de la acción verbal. Solo este caso conjuga al verbo.',
          example: 'Wir kochen heute Abend. / Ich lerne Deutsch.',
          color: 'blue'
        },
        {
          name: 'Akkusativ: uns / mich / dich (Objeto Directo)',
          role: 'Quien recibe el impacto directo del verbo. Responde a ¿A quién o qué ve/escucha/visita el sujeto?',
          example: 'Clara besucht uns am Wochenende. / Der Lehrer fragt mich.',
          color: 'rose'
        },
        {
          name: 'Dativ: uns / mir / dir (Objeto Indirecto)',
          role: 'El beneficiario o perjudicado. Responde a ¿A quién le entrega/ayuda/gusta algo?',
          example: 'Der Kellner bringt uns die Rechnung. / Das schmeckt mir sehr gut.',
          color: 'purple'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. El Gran Mapa de Pronombres Personales (Alemán vs Español)',
        content: 'Persona | Nominativ (Sujeto) | Akkusativ (Obj. Directo) | Dativ (Obj. Indirecto) | Posesivo (Raíz)\nich | ich (yo) | mich (a mí / me) | mir (a mí / me) | mein (mi)\ndu | du (tú) | dich (a ti / te) | dir (a ti / te) | dein (tu)\ner | er (él) | ihn (a él / lo) | ihm (a él / le) | sein (su)\nsie (ella) | sie (ella) | sie (a ella / la) | ihr (a ella / le) | ihr (su)\nes | es (ello) | es (a ello / lo) | ihm (a ello / le) | sein (su)\nwir | wir (nosotros) | uns (a nosotros / nos) | uns (a nosotros / nos) | unser (nuestro)\nihr | ihr (vosotros) | euch (a vosotros / os) | euch (a vosotros / os) | euer (vuestro)\nsie (ellos) | sie (ellos) | sie (a ellos / los) | ihnen (a ellos / les) | ihr (su)\nSie (formal) | Sie (Ud/Uds) | Sie (a Ud / lo/la) | Ihnen (a Ud / le) | Ihr (su de Ud)\n\n📌 ¿Por qué "uns" sirve para Acusativo y Dativo? Al igual que en español ("nos ve" = acusativo, "nos da" = dativo), la primera y segunda persona del plural unifican su forma objetual en "uns" y "euch".'
      },
      {
        title: '2. Verbos Clave que Rigen Dativ Obligatorio',
        content: 'Muchos verbos en alemán exigen dativo donde en español esperarías acusativo:\n* helfen (ayudar): "Er hilft uns" (¡nunca "wir"!).\n* danken (agradecer): "Ich danke dir / Ihnen".\n* gefallen (gustar): "Berlin gefällt mir".\n* schmecken (saber/gustar comida): "Die Pizza schmeckt uns".\n* passen (quedar bien/convenir): "Der Termin passt mir gut".\n\n📌 Regla mnemotécnica: Tras preposiciones de dativo (aus, bei, mit, nach, seit, von, zu), siempre va la columna de Dativo: "mit uns", "zu mir", "bei dir".'
      }
    ],
    tables: {
      pronouns: [
        { person: '1ª pl (nosotros)', nom: 'wir', akk: 'uns', dat: 'uns', poss: 'unser' },
        { person: '1ª sg (yo)', nom: 'ich', akk: 'mich', dat: 'mir', poss: 'mein' },
        { person: '2ª sg (tú)', nom: 'du', akk: 'dich', dat: 'dir', poss: 'dein' },
        { person: '3ª masc (él)', nom: 'er', akk: 'ihn', dat: 'ihm', poss: 'sein' },
        { person: '3ª fem (ella)', nom: 'sie', akk: 'sie', dat: 'ihr', poss: 'ihr' },
        { person: '2ª pl (vosotros)', nom: 'ihr', akk: 'euch', dat: 'euch', poss: 'euer' },
        { person: '3ª pl (ellos)', nom: 'sie', akk: 'sie', dat: 'ihnen', poss: 'ihr' },
        { person: 'Formal (Usted)', nom: 'Sie', akk: 'Sie', dat: 'Ihnen', poss: 'Ihr' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Der Reiseleiter hilft uns und zeigt uns den Weg.',
        es: 'El guía turístico nos ayuda y nos muestra el camino.',
        breakdown: [
          { segment: 'Der Reiseleiter', role: 'Sujeto Nominativo (él)', color: 'blue' },
          { segment: 'hilft', role: 'Verbo que exige Dativo', color: 'stone' },
          { segment: 'uns', role: 'Pronombre en Dativo (a nosotros)', color: 'purple' },
          { segment: 'und zeigt', role: 'Segundo verbo', color: 'stone' },
          { segment: 'uns', role: 'Dativo: ¿a quién muestra?', color: 'purple' },
          { segment: 'den Weg', role: 'Acusativo masculino: ¿qué muestra?', color: 'rose' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Peter sieht ___ (nosotros) im Supermarkt.',
        translation: 'Peter nos ve en el supermercado.',
        options: ['uns', 'wir', 'unser', 'unserem'],
        correct: 0,
        explanation: 'Objeto directo de "sehen" = Acusativo de nosotros: "uns". "wir" solo puede ser sujeto.'
      },
      {
        question: '___ (nosotros) haben gestern eine Pizza bestellt.',
        translation: 'Ayer nosotros pedimos una pizza.',
        options: ['Wir', 'Uns', 'Unser', 'Unseren'],
        correct: 0,
        explanation: 'Sujeto que realiza la acción de conjugar el verbo "haben" = "Wir".'
      },
      {
        question: 'Kannst du ___ (a mí) bitte das Salz geben?',
        translation: '¿Puedes darme a mí la sal por favor?',
        options: ['mir', 'mich', 'ich', 'mein'],
        correct: 0,
        explanation: 'Dar algo a alguien = Dativo personal "mir" (geben rige dativo de persona).'
      }
    ]
  },
  {
    id: 'perfekt_modales_zeit',
    title: 'Estructuras de Pasado: Perfekt, Verbos Modales & Marcadores Temporales',
    subtitle: 'La Satzklammer con "habe ... müssen/gemusst", el orden TeKaMoLo y "Am Wochenende"',
    level: 'A2.2 Sintaxis & Pasado',
    icon: 'Clock',
    originExplanation: {
      whyItExists: 'En el alemán hablado cotidiano, el tiempo verbal rey para hablar del pasado reciente es el PERFEKT (haben/sein + Partizip II). Cuando usamos verbos modales o marcadores de tiempo específico como "Am Wochenende", el alemán despliega una arquitectura oracional estricta: el verbo auxiliar ocupa la posición 2 y proyecta el participio o el doble infinitivo al final absoluto de la frase.',
      theThreeRoles: [
        {
          name: 'Pasado Reciente: Am Wochenende (Inversión V2)',
          role: 'Los adverbios de tiempo específico al inicio desplazan al sujeto a la posición 3: [Am Wochenende] + [habe] + [ich]... + [gemacht].',
          example: 'Am Wochenende habe ich meine Familie besucht.',
          color: 'blue'
        },
        {
          name: 'Perfekt con Verbo Modal (Ersatzinfinitiv)',
          role: 'Si el modal acompaña a otro verbo, se produce el doble infinitivo: [habe] en pos. 2 y [arbeiten müssen] al final.',
          example: 'Ich habe gestern bis 22 Uhr arbeiten müssen.',
          color: 'amber'
        },
        {
          name: 'Modal Pleno (habe ... gemusst)',
          role: 'Solo si el modal actúa como verbo único sin ningún otro infinitivo, toma el participio II regular "gemusst".',
          example: 'Ich wollte nicht, aber ich habe leider gemusst.',
          color: 'emerald'
        }
      ]
    },
    theoreticalDossier: [
      {
        title: '1. El Dilema del Pasado con Verbos Modales: ¿Perfekt o Präteritum?',
        content: 'En la práctica lingüística real de Alemania, Austria y Suiza:\n* Con verbos modales, los hablantes nativos prefieren en un 90% de los casos usar el PRÄTERITUM ("Ich musste arbeiten", "Ich konnte nicht kommen") porque es mucho más ágil y elegante que el doble infinitivo.\n* Sin embargo, cuando se construye en PERFEKT, ocurre una regla fascinante: EL ERSATZINFINITIV (Infinitivo de sustitución).\n  - Si hay otro verbo: "Ich habe gestern arbeiten MÜSSEN" (¡NUNCA "arbeiten gemusst"!).\n  - Si NO hay otro verbo (uso pleno): "Ich habe das nicht gewollt / Ich habe gemusst".'
      },
      {
        title: '2. Marcadores Temporales de Pasado Reciente y TeKaMoLo',
        content: 'El alemán distingue con precisión entre el pasado reciente de conversación y el pasado distante:\n* Pasado reciente / tiempo específico: "am Wochenende" (el fin de semana), "gestern" (ayer), "letzte Woche" (la semana pasada), "vor zwei Tagen" (hace dos días).\n* En el habla cotidiana (Umgangssprache), SIEMPRE se usa el Perfekt con estos marcadores: "Was hast du am Wochenende gemacht?" (¡Nunca "Was machtest du am Wochenende?").\n* Regla de posición temporal (TeKaMoLo: Temporal, Kausal, Modal, Lokal):\n  - Si "Am Wochenende" va primero: Am Wochenende (1) + habe (2) + ich (3) + in Berlin (Lokal) + gefeiert (Final).\n  - Si el sujeto va primero: Ich habe am Wochenende (Temporal) in Berlin (Lokal) gefeiert.'
      }
    ],
    tables: {
      pastModals: [
        { modal: 'müssen', praeteritum: 'ich musste', perfektDouble: 'ich habe ... arbeiten müssen', fullPartizip: 'ich habe gemusst' },
        { modal: 'können', praeteritum: 'ich konnte', perfektDouble: 'ich habe ... kommen können', fullPartizip: 'ich habe gekonnt' },
        { modal: 'wollen', praeteritum: 'ich wollte', perfektDouble: 'ich habe ... kaufen wollen', fullPartizip: 'ich habe gewollt' },
        { modal: 'dürfen', praeteritum: 'ich durfte', perfektDouble: 'ich habe ... parken dürfen', fullPartizip: 'ich habe gedurft' },
      ]
    },
    sentenceRayX: [
      {
        de: 'Am Wochenende habe ich mit meinen Freunden lernen müssen.',
        es: 'El fin de semana tuve que estudiar con mis amigos.',
        breakdown: [
          { segment: 'Am Wochenende', role: 'Posición 1: Marcador Temporal (Wann?)', color: 'blue' },
          { segment: 'habe', role: 'Posición 2: Verbo Auxiliar conjugado', color: 'amber' },
          { segment: 'ich', role: 'Posición 3: Sujeto (Inversión V2)', color: 'stone' },
          { segment: 'mit meinen Freunden', role: 'Mittelfeld: Complemento modal/social', color: 'purple' },
          { segment: 'lernen müssen', role: 'Satzende: Doble infinitivo (Ersatzinfinitiv)', color: 'emerald' }
        ]
      }
    ],
    exercises: [
      {
        question: 'Am Wochenende ___ ich lange geschlafen.',
        translation: 'El fin de semana he dormido mucho tiempo.',
        options: ['habe', 'bin', 'hat', 'hast'],
        correct: 0,
        explanation: '"Am Wochenende" en pos. 1 + "habe" (auxiliar con schlafen) en pos. 2 + "ich" en pos. 3.'
      },
      {
        question: 'Gestern habe ich leider bis 20 Uhr im Büro bleiben ___ (müssen).',
        translation: 'Ayer lamentablemente tuve que quedarme en la oficina hasta las 20 horas.',
        options: ['müssen', 'gemusst', 'musste', 'gemusst hat'],
        correct: 0,
        explanation: 'Con el verbo "bleiben" ya presente, el modal toma el doble infinitivo (Ersatzinfinitiv): "bleiben müssen".'
      },
      {
        question: 'En el habla cotidiana en Alemania, ¿cuál es la forma más natural de decir "Ayer tuve que trabajar"?',
        translation: 'Pregunta de naturalidad lingüística A2/B1.',
        options: [
          'Gestern musste ich arbeiten. (Präteritum)',
          'Gestern habe ich arbeiten gemusst.',
          'Gestern arbeitete ich.',
          'Gestern bin ich arbeiten gemusst.'
        ],
        correct: 0,
        explanation: 'Para los verbos modales, los nativos usan casi siempre el Präteritum ("musste"), ya que es mucho más ágil que el Perfekt.'
      }
    ]
  }
];
