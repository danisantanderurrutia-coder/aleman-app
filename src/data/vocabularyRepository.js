// Repositorio General de Vocabulario y Expresiones (Wortschatz-Archiv)
// Extraído de las fuentes del curso A1-A2 y organizado por categorías progresivas desbloqueables

export const vocabularyCategories = [
  { id: 'all', name: 'Todo el Repositorio', icon: 'Layers' },
  { id: 'saludos', name: 'Saludos & Regionalismos', icon: 'Smile' },
  { id: 'alfabeto', name: 'Alfabeto Fonético (Buchstaben)', icon: 'Type' },
  { id: 'numeros', name: 'Números & Ordinales', icon: 'Hash' },
  { id: 'frutas', name: 'El Frutero (Der/Die/Das)', icon: 'Apple' },
  { id: 'cocina', name: 'Objetos de Cocina', icon: 'Utensils' },
  { id: 'verbos', name: 'Radar de 25+ Verbos', icon: 'Activity' },
  { id: 'direcciones', name: 'Direcciones & Ciudad', icon: 'Compass' },
  { id: 'tiempo', name: 'Tiempo & Frecuencia', icon: 'Clock' },
  { id: 'familia', name: 'Familia & Personas', icon: 'Users' },
];

export const repositoryWords = [
  // 1. SALUDOS & CORTESÍA REGIONAL (Doc 4)
  {
    id: 'saludo_tach',
    category: 'saludos',
    de: 'Tach!',
    es: '¡Hola! (Coloquial, de Tag)',
    gender: null,
    level: 'A1/A2',
    tip: 'Forma informal de "Guten Tag" muy usada en el centro y oeste de Alemania.',
    example: 'Tach! Alles gut bei dir?'
  },
  {
    id: 'saludo_moin',
    category: 'saludos',
    de: 'Moin! / Moin Moin!',
    es: '¡Hola! / ¡Buenos días! (Norte de Alemania)',
    gender: null,
    level: 'A1/A2',
    tip: 'El saludo insignia de Hamburgo y el norte. Se puede usar a cualquier hora del día.',
    example: 'Moin! Wie geht es dir?'
  },
  {
    id: 'saludo_servus',
    category: 'saludos',
    de: 'Servus!',
    es: '¡Hola! / ¡Chao! (Baviera y Austria)',
    gender: null,
    level: 'A1/A2',
    tip: 'Sirve tanto para saludar al llegar como para despedirse al salir.',
    example: 'Servus Markus! Lange nicht gesehen.'
  },
  {
    id: 'saludo_gruss_gott',
    category: 'saludos',
    de: 'Grüß Gott!',
    es: '¡Saludos! / Que Dios te bendiga (Sur de Alemania / Austria)',
    gender: null,
    level: 'A1/A2',
    tip: 'Saludo tradicional y respetuoso en Múnich y zonas alpinas.',
    example: 'Grüß Gott, Herr Müller!'
  },
  {
    id: 'saludo_gruezi',
    category: 'saludos',
    de: 'Grüezi!',
    es: '¡Hola! (Suiza)',
    gender: null,
    level: 'A1/A2',
    tip: 'El saludo estándar y formal en la Suiza germanohablante.',
    example: 'Grüezi mitenand!'
  },
  {
    id: 'saludo_na',
    category: 'saludos',
    de: 'Na? (Respuesta: Na!)',
    es: '¿Qué tal? ¿Todo bien? (El saludo más conciso de Alemania)',
    gender: null,
    level: 'A2',
    tip: 'Un monosílabo capaz de preguntar estado de ánimo y responder al mismo tiempo.',
    example: 'Na? — Na, alles bestens!'
  },
  {
    id: 'saludo_vielen_dank',
    category: 'saludos',
    de: 'Vielen Dank',
    es: 'Muchas gracias',
    gender: null,
    level: 'A1',
    tip: 'Más cordial y formal que un simple "Danke".',
    example: 'Vielen Dank für Ihre Hilfe!'
  },
  {
    id: 'saludo_kein_problem',
    category: 'saludos',
    de: 'Kein Problem / Mach dir keine Sorgen',
    es: 'No hay problema / No te preocupes',
    gender: null,
    level: 'A2',
    tip: 'Imprescindible para interacciones amables del día a día.',
    example: 'Kein Problem, das machen wir morgen.'
  },
  {
    id: 'saludo_freut_mich',
    category: 'saludos',
    de: 'Freut mich, dich kennenzulernen',
    es: 'Un gusto conocerte',
    gender: null,
    level: 'A1',
    tip: 'La frase clásica al presentarse a alguien por primera vez.',
    example: 'Hallo, ich bin Daniel. Freut mich, dich kennenzulernen!'
  },
  {
    id: 'saludo_wie_schreibt_man',
    category: 'saludos',
    de: 'Wie schreibt man deinen Namen?',
    es: '¿Cómo se escribe tu nombre?',
    gender: null,
    level: 'A1',
    tip: 'Clave para el examen oral A1/A2 cuando te piden deletrear.',
    example: 'Entschuldigung, wie schreibt man deinen Namen?'
  },

  // 2. ALFABETO FONÉTICO (Doc 4)
  {
    id: 'alfa_buchstabe',
    category: 'alfabeto',
    de: 'der Buchstabe (die Buchstaben)',
    es: 'La letra (las letras)',
    gender: 'M',
    article: 'der',
    level: 'A1',
    tip: 'Sustantivo masculino con plural en -n.',
    example: 'Buchstabieren Sie bitte das Wort!'
  },
  {
    id: 'alfa_eszett',
    category: 'alfabeto',
    de: 'das Eszett (ß)',
    es: 'La letra ß (doble S sorda con vocal larga previa)',
    gender: 'N',
    article: 'das',
    level: 'A1',
    tip: 'Solo se usa tras vocales largas o diptongos (ej. Straße, heiß, groß). Suiza usa "ss".',
    example: 'In der Schweiz schreibt man "ss" statt "ß".'
  },
  {
    id: 'alfa_umlaut_ae',
    category: 'alfabeto',
    de: 'Ä / ä (A-Umlaut: "E")',
    es: 'Vocal ä: sonido entre A y E abierta',
    gender: null,
    level: 'A1',
    tip: 'Pronuncia como una "E" abierta española (ej. Käse, spät, Äpfel).',
    example: 'Ich esse gern Käse.'
  },
  {
    id: 'alfa_umlaut_oe',
    category: 'alfabeto',
    de: 'Ö / ö (O-Umlaut: labios de O, dices E)',
    es: 'Vocal ö: redondeo labial alemán',
    gender: null,
    level: 'A1',
    tip: 'Coloca la boca en forma de "O" pero pronuncia una "E" desde la garganta (ej. schön, hören, Köln).',
    example: 'Das Wetter ist heute so schön!'
  },
  {
    id: 'alfa_umlaut_ue',
    category: 'alfabeto',
    de: 'Ü / ü (U-Umlaut: labios de U, dices I)',
    es: 'Vocal ü: pronunciación francesa/alemana',
    gender: null,
    level: 'A1',
    tip: 'Boca en trompeta como silbando y dices "I" (ej. über, müssen, Tür).',
    example: 'Wir müssen pünktlich sein.'
  },

  // 3. NÚMEROS & ORDINALES (Doc 4)
  {
    id: 'num_ordinal_regla',
    category: 'numeros',
    de: 'Ordinalzahlen: -ten (1-19) / -sten (20+)',
    es: 'Números ordinales para fechas y listas',
    gender: null,
    level: 'A2',
    tip: 'Hasta el 19 agregan "-ten", con 3 excepciones: 1. ersten, 3. dritten, 7. siebten. Desde el 20 agregan "-sten" (am zwanzigsten).',
    example: 'Heute ist der erste (1.) Mai.'
  },
  {
    id: 'num_dreissig',
    category: 'numeros',
    de: 'dreißig (30)',
    es: 'Treinta (¡la única decena con ß!)',
    gender: null,
    level: 'A1',
    tip: 'Zwanzig, vierzig, fünfzig llevan "z", pero "dreißig" lleva "ß".',
    example: 'Er ist dreißig Jahre alt.'
  },
  {
    id: 'num_tausend',
    category: 'numeros',
    de: 'eintausend (1.000) / zehntausend (10.000)',
    es: 'Mil / diez mil',
    gender: null,
    level: 'A1/A2',
    tip: 'En alemán los números grandes se escriben juntos en una sola palabra.',
    example: 'Das Ticket kostet einhundert Euro.'
  },

  // 4. EL FRUTERO POR GÉNERO (Doc 4)
  {
    id: 'fruta_apfel',
    category: 'frutas',
    de: 'der Apfel (die Äpfel)',
    es: 'La manzana (las manzanas)',
    gender: 'M',
    article: 'der',
    level: 'A1',
    tip: '¡Masculino en alemán! En acusativo se convierte en "den Apfel / einen Apfel".',
    example: 'Ich esse jeden Tag einen Apfel.'
  },
  {
    id: 'fruta_pfirsich',
    category: 'frutas',
    de: 'der Pfirsich (die Pfirsiche)',
    es: 'El durazno / melocotón',
    gender: 'M',
    article: 'der',
    level: 'A2',
    tip: 'Sustantivo masculino con plural en -e.',
    example: 'Der Pfirsich ist süß und saftig.'
  },
  {
    id: 'fruta_banane',
    category: 'frutas',
    de: 'die Banane (die Bananen)',
    es: 'El plátano / la banana',
    gender: 'F',
    article: 'die',
    level: 'A1',
    tip: 'Casi todas las frutas terminadas en -e son femeninas en alemán.',
    example: 'Ich kaufe eine Banane auf dem Markt.'
  },
  {
    id: 'fruta_birne',
    category: 'frutas',
    de: 'die Birne (die Birnen)',
    es: 'La pera (las peras)',
    gender: 'F',
    article: 'die',
    level: 'A1',
    tip: 'Femenina, plural regular con -n.',
    example: 'Die Birne schmeckt köstlich.'
  },
  {
    id: 'fruta_kirsche',
    category: 'frutas',
    de: 'die Kirsche (die Kirschen)',
    es: 'La cereza',
    gender: 'F',
    article: 'die',
    level: 'A2',
    tip: 'Terminación en -e → die Kirsche.',
    example: 'Im Sommer pflücken wir Kirschen.'
  },
  {
    id: 'fruta_traube',
    category: 'frutas',
    de: 'die Traube (die Trauben)',
    es: 'La uva (las uvas)',
    gender: 'F',
    article: 'die',
    level: 'A2',
    tip: 'Generalmente se usa en plural "die Trauben".',
    example: 'Ich esse gern grüne Trauben.'
  },
  {
    id: 'fruta_kiwi',
    category: 'frutas',
    de: 'die Kiwi / das Kiwi',
    es: 'El kiwi (femenino o neutro según región)',
    gender: 'F',
    article: 'die',
    level: 'A2',
    tip: 'En Alemania suele ser die Kiwi, en Austria a veces das Kiwi.',
    example: 'Die Kiwi enthält viel Vitamin C.'
  },

  // 5. OBJETOS DE COCINA CON GÉNEROS (Doc 4)
  {
    id: 'cocina_teller',
    category: 'cocina',
    de: 'der Teller (die Teller)',
    es: 'El plato',
    gender: 'M',
    article: 'der',
    level: 'A1',
    tip: 'Masculino. El plural no cambia de forma (die Teller).',
    example: 'Stell bitte den Teller auf den Tisch!'
  },
  {
    id: 'cocina_topf',
    category: 'cocina',
    de: 'der Topf (die Töpfe)',
    es: 'La olla',
    gender: 'M',
    article: 'der',
    level: 'A2',
    tip: 'Masculino en alemán (la olla es femenina en español). Plural con Umlaut.',
    example: 'Das Wasser kocht im Topf.'
  },
  {
    id: 'cocina_pfanne',
    category: 'cocina',
    de: 'die Pfanne (die Pfannen)',
    es: 'La sartén',
    gender: 'F',
    article: 'die',
    level: 'A2',
    tip: 'Femenino, plural con -n.',
    example: 'Ich brate Eier in der Pfanne.'
  },
  {
    id: 'cocina_messer',
    category: 'cocina',
    de: 'das Messer (die Messer)',
    es: 'El cuchillo',
    gender: 'N',
    article: 'das',
    level: 'A1',
    tip: '¡Neutro en alemán! Der Löffel (cuchara), die Gabel (tenedor), das Messer (cuchillo).',
    example: 'Das Messer ist sehr scharf.'
  },
  {
    id: 'cocina_kuehlschrank',
    category: 'cocina',
    de: 'der Kühlschrank (die Kühlschränke)',
    es: 'El refrigerador / la nevera',
    gender: 'M',
    article: 'der',
    level: 'A1',
    tip: 'Literalmente "el armario que enfría" (kühlen + Schrank).',
    example: 'Die Milch steht im Kühlschrank.'
  },
  {
    id: 'cocina_tasse',
    category: 'cocina',
    de: 'die Tasse (die Tassen)',
    es: 'La taza',
    gender: 'F',
    article: 'die',
    level: 'A1',
    tip: 'Eine Tasse Kaffee / eine Tasse Tee.',
    example: 'Möchtest du eine Tasse Kaffee?'
  },
  {
    id: 'cocina_backofen',
    category: 'cocina',
    de: 'der Backofen (die Backöfen)',
    es: 'El horno',
    gender: 'M',
    article: 'der',
    level: 'A2',
    tip: 'Der Ofen / der Backofen (masculino).',
    example: 'Die Pizza ist im Backofen.'
  },

  // 6. RADAR DE VERBOS FUNDAMENTALES (Doc 4)
  {
    id: 'verbo_helfen',
    category: 'verbos',
    de: 'helfen (hilft, half, geholfen)',
    es: 'Ayudar (¡RIGE DATIVO SIEMPRE!)',
    gender: null,
    level: 'A2',
    tip: '⚠️ Regla dorada: "helfen" SIEMPRE pide Dativo. Ich helfe DIR (te ayudo a ti), Ich helfe dem Mann.',
    example: 'Kannst du mir bitte helfen?'
  },
  {
    id: 'verbo_sprechen',
    category: 'verbos',
    de: 'sprechen (spricht, sprach, gesprochen)',
    es: 'Hablar (cambio vocálico e → i)',
    gender: null,
    level: 'A1',
    tip: 'Du sprichst, er spricht. Con "mit" pide dativo: mit dir sprechen.',
    example: 'Ich spreche ein bisschen Deutsch.'
  },
  {
    id: 'verbo_fahren',
    category: 'verbos',
    de: 'fahren (fährt, fuhr, ist gefahren)',
    es: 'Conducir / Ir en vehículo (auxiliar SEIN en Perfekt)',
    gender: null,
    level: 'A1',
    tip: 'Du fährst, er fährt. En pasado usa "sein": Ich bin mit dem Bus gefahren.',
    example: 'Wir fahren am Wochenende nach Hamburg.'
  },
  {
    id: 'verbo_essen',
    category: 'verbos',
    de: 'essen (isst, aß, hat gegessen)',
    es: 'Comer (du isst, er isst)',
    gender: null,
    level: 'A1',
    tip: 'Cambio de e → i. Siempre pide Akkusativ: Ich esse einen Apfel.',
    example: 'Was isst du zum Frühstück?'
  },
  {
    id: 'verbo_brauchen',
    category: 'verbos',
    de: 'brauchen (braucht, brauchte, hat gebraucht)',
    es: 'Necesitar (pide Akkusativ directo)',
    gender: null,
    level: 'A1',
    tip: 'Ich brauche einen neuen Computer (der Computer → einen).',
    example: 'Ich brauche deine Hilfe.'
  },
  {
    id: 'verbo_besichtigen',
    category: 'verbos',
    de: 'besichtigen (besichtigt, hat besichtigt)',
    es: 'Visitar turísticamente (monumentos, ciudades)',
    gender: null,
    level: 'A2',
    tip: 'Para personas se usa "besuchen"; para ciudades o museos se usa "besichtigen".',
    example: 'Morgen besichtigen wir das Brandenburger Tor.'
  },
  {
    id: 'verbo_einsteigen',
    category: 'verbos',
    de: 'einsteigen (steigt ein, ist eingestiegen)',
    es: 'Subir al transporte / abordar (separable: ein-)',
    gender: null,
    level: 'A2',
    tip: 'Verbo separable y de movimiento (usa sein): Ich steige in den Zug ein.',
    example: 'Bitte alle einsteigen, die Türen schließen!'
  },
  {
    id: 'verbo_ausschlafen',
    category: 'verbos',
    de: 'ausschlafen (schläft aus, hat ausgeschlafen)',
    es: 'Dormir hasta tarde / descansar a gusto',
    gender: null,
    level: 'A2',
    tip: 'Prefijo aus- separable: Am Sonntag schlafe ich endlich aus.',
    example: 'Am Wochenende darf ich ausschlafen.'
  },

  // 7. DIRECCIONES & CIUDAD (Doc 4)
  {
    id: 'dir_geradeaus',
    category: 'direcciones',
    de: 'geradeaus',
    es: 'Todo recto / derecho',
    gender: null,
    level: 'A1',
    tip: 'Gehen Sie bitte geradeaus und dann nach links.',
    example: 'Fahren Sie immer geradeaus bis zur Kreuzung.'
  },
  {
    id: 'dir_buergersteig',
    category: 'direcciones',
    de: 'der Bürgersteig (die Bürgersteige)',
    es: 'La acera / vereda',
    gender: 'M',
    article: 'der',
    level: 'A2',
    tip: 'También llamado "der Gehweg".',
    example: 'Die Kinder spielen auf dem Bürgersteig.'
  },
  {
    id: 'dir_haltestelle',
    category: 'direcciones',
    de: 'die Haltestelle (die Haltestellen)',
    es: 'La parada de autobús o tranvía',
    gender: 'F',
    article: 'die',
    level: 'A1',
    tip: 'Femenino. "An der Haltestelle" (en la parada, Dativ).',
    example: 'Ich warte an der Bushaltestelle auf dich.'
  },

  // 8. TIEMPO & FRECUENCIA (Doc 4)
  {
    id: 'tiempo_vorgestern',
    category: 'tiempo',
    de: 'vorgestern / übermorgen',
    es: 'Anteayer / pasado mañana',
    gender: null,
    level: 'A1/A2',
    tip: 'Estructura lógica: gestern (ayer) → vorgestern (anteayer); morgen (mañana) → übermorgen (pasado mañana).',
    example: 'Übermorgen fahre ich nach Berlin.'
  },
  {
    id: 'tiempo_zuerst_schluss',
    category: 'tiempo',
    de: 'zuerst ... dann ... zum Schluss',
    es: 'Primero ... luego ... al final',
    gender: null,
    level: 'A2',
    tip: 'Conectores temporales esenciales para estructurar un relato u opinión.',
    example: 'Zuerst lerne ich Deutsch, dann koche ich, und zum Schluss gehe ich schlafen.'
  },
  {
    id: 'tiempo_schnellstmoeglich',
    category: 'tiempo',
    de: 'schnellstmöglich / so bald wie möglich',
    es: 'Lo antes posible / a la mayor brevedad',
    gender: null,
    level: 'A2',
    tip: 'Muy común en correos formales de trabajo.',
    example: 'Bitte antworten Sie mir schnellstmöglich.'
  }
];
