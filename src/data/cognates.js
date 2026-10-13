// Base de datos de Cognados Reales y Falsos Amigos (Falsche Freunde 👻) con correspondencias en inglés y español

export const cognatesData = {
  // FALSOS COGNADOS CON LOGO FANTASMA 👻 (Peligro de trampa mental)
  falseFriends: [
    {
      id: 'ff1',
      german: 'bekommen',
      looksLikeEn: 'become (llegar a ser)',
      looksLikeEs: 'parece "llegar a ser / convertirse"',
      actualMeaning: 'RECIBIR u OBTENER',
      ghostAlert: '¡Cuidado! Si dices "I become a beer", en inglés suena como si te convirtieras en una cerveza. En alemán: "Ich bekomme ein Bier" significa "Recibo una cerveza". Para decir "llegar a ser" en alemán se usa WERDEN.',
      exampleDe: 'Ich habe heute einen wichtigen Brief bekommen.',
      exampleEs: 'Hoy he recibido una carta importante.',
      trick: '👻 Fantasma: Bekommen = Recibir. Werden = Llegar a ser.'
    },
    {
      id: 'ff2',
      german: 'das Gift',
      looksLikeEn: 'gift (regalo)',
      looksLikeEs: 'parece "don o regalo"',
      actualMeaning: 'EL VENENO',
      ghostAlert: '¡Peligro mortal! "Das Gift" en alemán es VENENO. Para decir regalo en alemán se dice "das Geschenk".',
      exampleDe: 'Vorsicht! Diese Pflanze enthält starkes Gift.',
      exampleEs: '¡Cuidado! Esta planta contiene un veneno fuerte.',
      trick: '👻 Fantasma: Gift = Veneno. Geschenk = Regalo.'
    },
    {
      id: 'ff3',
      german: 'der Chef',
      looksLikeEn: 'chef (cocinero / chef de cocina)',
      looksLikeEs: 'parece "chef de restaurante"',
      actualMeaning: 'EL JEFE / LA JEFA (del trabajo)',
      ghostAlert: 'Tu "Chef" en Alemania es tu superior jerárquico o empleador. Un cocinero profesional se llama "der Koch".',
      exampleDe: 'Mein Chef hat mir zwei Wochen Urlaub genehmigt.',
      exampleEs: 'Mi jefe me ha aprobado dos semanas de vacaciones.',
      trick: '👻 Fantasma: Chef = El jefe. Koch = El cocinero.'
    },
    {
      id: 'ff4',
      german: 'das Gymnasium',
      looksLikeEn: 'gym / gymnasium (gimnasio deportivo)',
      looksLikeEs: 'parece "gimnasio para hacer pesas"',
      actualMeaning: 'INSTITUTO DE SECUNDARIA / PREPARATORIA',
      ghostAlert: 'El "Gymnasium" es la escuela secundaria preparatoria para la universidad (hasta el Abitur). Para ir al gimnasio se dice "das Fitnessstudio" o "die Turnhalle".',
      exampleDe: 'Mein Sohn geht in die neunte Klasse am Gymnasium.',
      exampleEs: 'Mi hijo va al noveno curso en el instituto.',
      trick: '👻 Fantasma: Gymnasium = Instituto de bachillerato. Fitnessstudio = Gimnasio.'
    },
    {
      id: 'ff5',
      german: 'aktuell',
      looksLikeEn: 'actually (en realidad / de hecho)',
      looksLikeEs: 'parece "en realidad"',
      actualMeaning: 'ACTUAL / DE VIGENCIA O NOVEDAD',
      ghostAlert: '"Aktuell" significa lo que está pasando hoy en día (de actualidad). Para decir "en realidad / actually", en alemán se usa "eigentlich" o "tatsächlich".',
      exampleDe: 'Das sind die aktuellsten Nachrichten aus Berlin.',
      exampleEs: 'Estas son las noticias más actuales de Berlín.',
      trick: '👻 Fantasma: Aktuell = Actual. Eigentlich = En realidad / Actually.'
    },
    {
      id: 'ff6',
      german: 'die Wand',
      looksLikeEn: 'wand (varita mágica)',
      looksLikeEs: 'parece "varita o banda"',
      actualMeaning: 'LA PARED / EL MURO INTERIOR',
      ghostAlert: '"Die Wand" es la pared de tu habitación o salón. Para varita mágica se dice "der Zauberstab".',
      exampleDe: 'Wir haben ein schönes Bild an die Wand gehängt.',
      exampleEs: 'Hemos colgado un bonito cuadro en la pared.',
      trick: '👻 Fantasma: Wand = Pared. Mauer = Muro exterior.'
    },
    {
      id: 'ff7',
      german: 'die Kaution',
      looksLikeEn: 'caution (precaución / cuidado)',
      looksLikeEs: 'parece "precaución"',
      actualMeaning: 'LA FIANZA / DEPÓSITO DEL ALQUILER',
      ghostAlert: 'En el contrato de piso, "die Kaution" es el dinero de fianza de garantía. Para precaución se dice "die Vorsicht" o "die Achtung".',
      exampleDe: 'Die Kaution beträgt drei Monatskaltmieten.',
      exampleEs: 'La fianza equivale a tres meses de alquiler base.',
      trick: '👻 Fantasma: Kaution = Fianza de alquiler. Vorsicht = Cuidado/Precaución.'
    },
    {
      id: 'ff8',
      german: 'brav',
      looksLikeEn: 'brave (valiente)',
      looksLikeEs: 'parece "bravo / feroz / valiente"',
      actualMeaning: 'BUENO / PORTARSE BIEN (especialmente niños o mascotas)',
      ghostAlert: '"Ein braves Kind" es un niño obediente y bien educado. Para decir valiente se usa "mutig" o "tapfer".',
      exampleDe: 'Die Kinder waren heute beim Zahnarzt sehr brav.',
      exampleEs: 'Los niños se portaron muy bien hoy en el dentista.',
      trick: '👻 Fantasma: Brav = Bien educado / obediente. Mutig = Valiente.'
    }
  ],

  // COGNADOS REALES Y REGLAS DE PUENTE MENTAL (DEL INGLÉS Y ESPAÑOL AL ALEMÁN)
  realCognates: [
    {
      id: 'rc1',
      german: 'das Haus',
      english: 'house',
      spanish: 'casa',
      rule: 'Correspondencia germánica directa: au ↔ ou (Haus ↔ house, Maus ↔ mouse, laut ↔ loud).',
      exampleDe: 'Das Haus hat einen großen Garten.',
      exampleEs: 'La casa tiene un gran jardín.'
    },
    {
      id: 'rc2',
      german: 'trinken',
      english: 'drink',
      spanish: 'beber (tomar)',
      rule: 'Mutación consonántica t ↔ d (trinken ↔ drink, Tag ↔ day, Traum ↔ dream, Tür ↔ door).',
      exampleDe: 'Ich trinke jeden Morgen Wasser.',
      exampleEs: 'Bebo agua cada mañana.'
    },
    {
      id: 'rc3',
      german: 'die Musik / das Problem / die Information',
      english: 'music / problem / information',
      spanish: 'música / problema / información',
      rule: 'Palabras internacionales de origen latino o griego. En alemán todas las palabras en -tion son femeninas (die Information, die Nation, die Situation).',
      exampleDe: 'Diese Information ist sehr wichtig für uns.',
      exampleEs: 'Esta información es muy importante para nosotros.'
    },
    {
      id: 'rc4',
      german: 'helfen',
      english: 'help',
      spanish: 'ayudar',
      rule: 'Mutación consonántica f/pf ↔ p (helfen ↔ help, hoffen ↔ hope, Pfeffer ↔ pepper, Schiff ↔ ship).',
      exampleDe: 'Können Sie mir bitte helfen?',
      exampleEs: '¿Puede usted ayudarme, por favor?'
    },
    {
      id: 'rc5',
      german: 'das Wasser',
      english: 'water',
      spanish: 'agua',
      rule: 'Mutación consonántica ss/s ↔ t (Wasser ↔ water, besser ↔ better, lassen ↔ let, was ↔ what).',
      exampleDe: 'Ein Glas stilles Wasser, bitte.',
      exampleEs: 'Un vaso de agua sin gas, por favor.'
    },
    {
      id: 'rc6',
      german: 'das Buch',
      english: 'book',
      spanish: 'libro',
      rule: 'Correspondencia germánica ch ↔ k (Buch ↔ book, machen ↔ make, kochen ↔ cook).',
      exampleDe: 'Ich lese gerade ein interessantes Buch.',
      exampleEs: 'Estoy leyendo un libro interesante.'
    }
  ]
};
