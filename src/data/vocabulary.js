// Vocabulario A2 clasificado por categorías temáticas esenciales con género, plural y oraciones de ejemplo

export const vocabularyCategories = [
  { id: 'all', name: 'Todo el vocabulario', icon: 'Layers' },
  { id: 'arbeit', name: '💼 Trabajo & Oficina', icon: 'Briefcase' },
  { id: 'gesundheit', name: '🩺 Salud & Médico', icon: 'HeartPulse' },
  { id: 'wohnen', name: '🏠 Vivienda & Ciudad', icon: 'Home' },
  { id: 'einkaufen', name: '🛒 Compras & Restaurante', icon: 'ShoppingBag' },
  { id: 'reisen', name: '✈️ Viajes & Transporte', icon: 'Plane' },
  { id: 'alltag', name: '🗣️ Expresiones & Vida diaria', icon: 'MessageCircle' },
];

export const vocabularyList = [
  // TRABAJO & OFICINA
  {
    id: 'v1',
    article: 'der',
    word: 'Termin',
    plural: 'die Termine',
    translation: 'la cita / el turno / la reunión fijada',
    category: 'arbeit',
    exampleDe: 'Ich muss meinen Termin leider verschieben.',
    exampleEs: 'Lamentablemente tengo que aplazar mi cita.',
    tips: 'Palabra clave en Alemania para todo: médico, oficina de extranjeros, peluquería.'
  },
  {
    id: 'v2',
    article: 'die',
    word: 'Bewerbung',
    plural: 'die Bewerbungen',
    translation: 'la solicitud de empleo / candidatura',
    category: 'arbeit',
    exampleDe: 'Ich habe eine Bewerbung als Softwareentwickler geschickt.',
    exampleEs: 'He enviado una solicitud como desarrollador de software.',
    tips: 'Las palabras terminadas en -ung son SIEMPRE femeninas (die).'
  },
  {
    id: 'v3',
    article: 'der',
    word: 'Kollege',
    plural: 'die Kollegen',
    translation: 'el compañero de trabajo (fem: die Kollegin)',
    category: 'arbeit',
    exampleDe: 'Mein Kollege hilft mir immer bei Fragen.',
    exampleEs: 'Mi compañero siempre me ayuda cuando tengo preguntas.',
    tips: 'Es un sustantivo débil (N-Deklination): en Akkusativ/Dativ se dice "den/dem Kollegen".'
  },
  {
    id: 'v4',
    article: 'das',
    word: 'Gehalt',
    plural: 'die Gehälter',
    translation: 'el sueldo / salario mensual',
    category: 'arbeit',
    exampleDe: 'Das Gehalt wird am Monatsende überwiesen.',
    exampleEs: 'El sueldo se transfiere a fin de mes.',
    tips: 'Distinto de der Lohn (pago por horas).'
  },
  {
    id: 'v5',
    article: 'die',
    word: 'Erfahrung',
    plural: 'die Erfahrungen',
    translation: 'la experiencia',
    category: 'arbeit',
    exampleDe: 'Ich habe drei Jahre Berufserfahrung.',
    exampleEs: 'Tengo tres años de experiencia laboral.',
    tips: 'Otra palabra con terminación -ung = femenina.'
  },

  // SALUD & MÉDICO
  {
    id: 'v6',
    article: 'die',
    word: 'Krankenversicherung',
    plural: 'die Krankenversicherungen',
    translation: 'el seguro médico',
    category: 'gesundheit',
    exampleDe: 'In Deutschland ist die Krankenversicherung Pflicht.',
    exampleEs: 'En Alemania el seguro médico es obligatorio.',
    tips: 'Compuesta de Kranken (enfermos) + Versicherung (seguro).'
  },
  {
    id: 'v7',
    article: 'der',
    word: 'Schmerz',
    plural: 'die Schmerzen',
    translation: 'el dolor (suele usarse en plural)',
    category: 'gesundheit',
    exampleDe: 'Ich habe seit zwei Tagen starke Kopfschmerzen.',
    exampleEs: 'Tengo un fuerte dolor de cabeza desde hace dos días.',
    tips: 'Kopfschmerzen (dolor de cabeza), Bauchschmerzen (dolor de barriga), Halsschmerzen (dolor de garganta).'
  },
  {
    id: 'v8',
    article: 'das',
    word: 'Rezept',
    plural: 'die Rezepte',
    translation: 'la receta médica (o de cocina)',
    category: 'gesundheit',
    exampleDe: 'Der Arzt hat mir ein Rezept für Antibiotika gegeben.',
    exampleEs: 'El médico me dio una receta para antibióticos.',
    tips: 'En la farmacia (Apotheke) entregas das Rezept.'
  },
  {
    id: 'v9',
    article: 'die',
    word: 'Krankschreibung',
    plural: 'die Krankschreibungen',
    translation: 'la baja médica / certificado de incapacidad',
    category: 'gesundheit',
    exampleDe: 'Ich brauche eine Krankschreibung für meinen Arbeitgeber.',
    exampleEs: 'Necesito una baja médica para mi empleador.',
    tips: 'También llamada coloquialmente "gelber Schein" o "AU-Bescheinigung".'
  },
  {
    id: 'v10',
    article: 'das',
    word: 'Fieber',
    plural: '-',
    translation: 'la fiebre',
    category: 'gesundheit',
    exampleDe: 'Mein Kind hat hohes Fieber.',
    exampleEs: 'Mi hijo tiene fiebre alta.',
    tips: 'Fieber messen = tomarse la fiebre.'
  },

  // VIVIENDA & CIUDAD
  {
    id: 'v11',
    article: 'die',
    word: 'Miete',
    plural: 'die Mieten',
    translation: 'el alquiler',
    category: 'wohnen',
    exampleDe: 'Wie hoch ist die Warmmiete pro Monat?',
    exampleEs: '¿Cuánto es el alquiler con calefacción/gastos incluidos al mes?',
    tips: 'Kaltmiete = alquiler base sin gastos; Warmmiete = alquiler con gastos comunes de calefacción y agua.'
  },
  {
    id: 'v12',
    article: 'die',
    word: 'Kaution',
    plural: 'die Kautionen',
    translation: 'la fianza / depósito de garantía',
    category: 'wohnen',
    exampleDe: 'Die Kaution beträgt drei Monatskaltmieten.',
    exampleEs: 'La fianza equivale a tres meses de alquiler base.',
    tips: 'Terminación en -tion = siempre femenino (die).'
  },
  {
    id: 'v13',
    article: 'der',
    word: 'Nachbar',
    plural: 'die Nachbarn',
    translation: 'el vecino (fem: die Nachbarin)',
    category: 'wohnen',
    exampleDe: 'Unsere Nachbarn sind sehr freundlich und ruhig.',
    exampleEs: 'Nuestros vecinos son muy amables y tranquilos.',
    tips: 'Ruhezeit en Alemania: respeta los domingos y después de las 22:00.'
  },
  {
    id: 'v14',
    article: 'der',
    word: 'Aufzug',
    plural: 'die Aufzüge',
    translation: 'el ascensor',
    category: 'wohnen',
    exampleDe: 'Gibt es im Gebäude einen Aufzug?',
    exampleEs: '¿Hay ascensor en el edificio?',
    tips: 'También conocido como "der Fahrstuhl".'
  },
  {
    id: 'v15',
    article: 'das',
    word: 'Möbel',
    plural: 'die Möbel',
    translation: 'el mueble (normalmente usado en plural)',
    category: 'wohnen',
    exampleDe: 'Die Wohnung ist voll möbliert.',
    exampleEs: 'El departamento está completamente amueblado.',
    tips: 'Möbelstück = pieza de mueble individual.'
  },

  // COMPRAS & RESTAURANTE
  {
    id: 'v16',
    article: 'die',
    word: 'Rechnung',
    plural: 'die Rechnungen',
    translation: 'la cuenta / factura',
    category: 'einkaufen',
    exampleDe: 'Könnten wir bitte die Rechnung haben?',
    exampleEs: '¿Podríamos pedir la cuenta, por favor?',
    tips: 'Zusammen oder getrennt? (¿Juntos o por separado? Pregunta típica del camarero).'
  },
  {
    id: 'v17',
    article: 'das',
    word: 'Trinkgeld',
    plural: '-',
    translation: 'la propina',
    category: 'einkaufen',
    exampleDe: 'In Deutschland gibt man meistens 5 bis 10 Prozent Trinkgeld.',
    exampleEs: 'En Alemania se suele dar entre un 5% y un 10% de propina.',
    tips: 'Literalmente: "dinero para beber" (Trink + Geld). Para redondear dices "Stimmt so" (quédese con el cambio).'
  },
  {
    id: 'v18',
    article: 'der',
    word: 'Kassenzettel',
    plural: 'die Kassenzettel',
    translation: 'el recibo / tique de compra',
    category: 'einkaufen',
    exampleDe: 'Brauchen Sie den Kassenzettel?',
    exampleEs: '¿Necesita el tique de caja?',
    tips: 'Pregunta obligada en cualquier supermercado o panadería alemana.'
  },
  {
    id: 'v19',
    article: 'das',
    word: 'Angebot',
    plural: 'die Angebote',
    translation: 'la oferta / propuesta',
    category: 'einkaufen',
    exampleDe: 'Dieser Kaffee ist heute im Angebot.',
    exampleEs: 'Este café está hoy en oferta.',
    tips: 'Im Angebot = a precio rebajado.'
  },
  {
    id: 'v20',
    article: 'die',
    word: 'Tüte',
    plural: 'die Tüten',
    translation: 'la bolsa (de compras)',
    category: 'einkaufen',
    exampleDe: 'Möchten Sie eine Tüte dazu?',
    exampleEs: '¿Desea una bolsa para sus compras?',
    tips: 'En el sur de Alemania / Austria también dicen "das Sackerl".'
  },

  // VIAJES & TRANSPORTE
  {
    id: 'v21',
    article: 'die',
    word: 'Verspätung',
    plural: 'die Verspätungen',
    translation: 'el retraso / demora',
    category: 'reisen',
    exampleDe: 'Der Zug nach Hamburg hat 20 Minuten Verspätung.',
    exampleEs: 'El tren a Hamburgo tiene 20 minutos de retraso.',
    tips: 'La frase más escuchada en la Deutsche Bahn (DB).'
  },
  {
    id: 'v22',
    article: 'das',
    word: 'Gleis',
    plural: 'die Gleise',
    translation: 'la vía / andén del tren',
    category: 'reisen',
    exampleDe: 'Der ICE fährt heute von Gleis 4 ab.',
    exampleEs: 'El tren ICE sale hoy de la vía 4.',
    tips: 'En la estación siempre anuncian: "Einfahrt auf Gleis..."'
  },
  {
    id: 'v23',
    article: 'der',
    word: 'Fahrschein',
    plural: 'die Fahrscheine',
    translation: 'el billete / ticket de viaje',
    category: 'reisen',
    exampleDe: 'Bitte entwerten Sie Ihren Fahrschein vor der Fahrt.',
    exampleEs: 'Por favor valide su billete antes del viaje.',
    tips: 'Sinónimo de "die Fahrkarte". Schwarzfahren = viajar sin billete.'
  },
  {
    id: 'v24',
    article: 'der',
    word: 'Anschluss',
    plural: 'die Anschlüsse',
    translation: 'la conexión / transbordo',
    category: 'reisen',
    exampleDe: 'Erreiche ich in Frankfurt meinen Anschlusszug?',
    exampleEs: '¿Alcanzaré mi tren de conexión en Fráncfort?',
    tips: 'Anschluss verpassen = perder la conexión.'
  },

  // EXPRESIONES & VIDA DIARIA
  {
    id: 'v25',
    article: 'die',
    word: 'Gewohnheit',
    plural: 'die Gewohnheiten',
    translation: 'el hábito / la costumbre',
    category: 'alltag',
    exampleDe: 'Früh aufzustehen ist eine gute Gewohnheit.',
    exampleEs: 'Levantarse temprano es un buen hábito.',
    tips: 'Terminación en -heit = siempre femenino.'
  },
  {
    id: 'v26',
    article: 'der',
    word: 'Feierabend',
    plural: '-',
    translation: 'el fin de la jornada laboral / tiempo libre tras el trabajo',
    category: 'alltag',
    exampleDe: 'Schönen Feierabend! Bis morgen!',
    exampleEs: '¡Que tengas un buen fin de jornada! ¡Hasta mañana!',
    tips: 'Concepto cultural alemán intraducible que celebra el descanso tras trabajar.'
  },
  {
    id: 'v27',
    article: 'der',
    word: 'Unterschied',
    plural: 'die Unterschiede',
    translation: 'la diferencia',
    category: 'alltag',
    exampleDe: 'Was ist der Unterschied zwischen diesen beiden Wörtern?',
    exampleEs: '¿Cuál es la diferencia entre estas dos palabras?',
    tips: 'Unterschiedlich = diferente / variado.'
  },
  {
    id: 'v28',
    article: 'die',
    word: 'Verabredung',
    plural: 'die Verabredungen',
    translation: 'el encuentro social / la cita con amigos',
    category: 'alltag',
    exampleDe: 'Ich habe heute Abend eine Verabredung mit Freunden.',
    exampleEs: 'Tengo un encuentro con amigos esta noche.',
    tips: 'Diferencia con "Termin": Termin es formal (médico, jefe), Verabredung es con amigos/pareja.'
  }
];
