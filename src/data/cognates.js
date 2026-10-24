// Base de datos exhaustiva y enciclopédica de Cognados Reales y Falsos Amigos
// Diseñada para hispanohablantes aprendiendo alemán (A2 - B2) con puentes en español e inglés.

export const cognatesData = {
  // =========================================================================
  // 1. FALSOS AMIGOS (Falsche Freunde 👻) - Peligro de trampa léxica y de género
  // =========================================================================
  falseFriends: [
    {
      id: 'ff_schluessel_schuessel',
      german: 'der Schlüssel vs. die Schüssel',
      looksLikeEn: 'Schlüssel ↔ key / Schüssel ↔ bowl',
      looksLikeEs: 'Trampa doble de género con el español: "la llave" y "el tazón"',
      actualMeaning: 'der Schlüssel = LA LLAVE (Masc) | die Schüssel = EL TAZÓN / CUENCO (Fem)',
      ghostAlert: '⭐ ¡LA GRAN TRAMPA DE GÉNERO CRUZADA!\n1. En español decimos "LA llave" (femenino), pero en alemán es estrictamente MASCULINO: "der Schlüssel" (del verbo schließen = cerrar/abrir cerraduras).\n2. En español decimos "EL tazón / el cuenco" (masculino), pero en alemán es FEMENINO: "die Schüssel" (fuente o bol de ensalada).\n¡Muchos estudiantes hispanohablantes confunden ambas palabras creyendo que hay un error de ortografía, cuando en realidad ambas existen con géneros exactamente invertidos respecto al español!',
      exampleDe: 'Wo ist der Schlüssel (Masc)? Er liegt neben der Schüssel (Fem).',
      exampleEs: '¿Dónde está la llave? Está junto al tazón/ensaladera.',
      trick: '👻 Regla nemotécnica: Schlüssel (con "l" de llave) es DER. Schüssel (el cuenco donde comes) es DIE.'
    },
    {
      id: 'ff_bekommen',
      german: 'bekommen',
      looksLikeEn: 'become (llegar a ser / convertirse)',
      looksLikeEs: 'parece "convertirse en / llegar a ser"',
      actualMeaning: 'RECIBIR u OBTENER',
      ghostAlert: 'Si pides en un restaurante: "I become a steak", suena como si te convirtieras mágicamente en un filete de carne. En alemán: "Ich bekomme ein Steak" significa "Recibo / Me pido un filete". Para decir "llegar a ser" o "convertirse" en alemán se usa WERDEN.',
      exampleDe: 'Ich habe heute einen wichtigen Brief bekommen.',
      exampleEs: 'Hoy he recibido una carta importante.',
      trick: '👻 Bekommen = Recibir. Werden = Llegar a ser (become).'
    },
    {
      id: 'ff_gift',
      german: 'das Gift',
      looksLikeEn: 'gift (regalo)',
      looksLikeEs: 'parece "don / regalo"',
      actualMeaning: 'EL VENENO (Tóxico mortal)',
      ghostAlert: '¡Peligro mortal! "Das Gift" en alemán es VENENO. Si quieres regalarle algo a un ser querido, regálale "das Geschenk", ¡nunca "das Gift"!',
      exampleDe: 'Vorsicht! Diese Pflanze enthält starkes Gift.',
      exampleEs: '¡Cuidado! Esta planta contiene un veneno fuerte.',
      trick: '👻 Gift = Veneno. Geschenk = Regalo.'
    },
    {
      id: 'ff_chef',
      german: 'der Chef / die Chefin',
      looksLikeEn: 'chef (cocinero profesional)',
      looksLikeEs: 'parece "chef de cocina"',
      actualMeaning: 'EL JEFE / LA JEFA (del trabajo o empresa)',
      ghostAlert: 'Tu "Chef" en Alemania es tu superior jerárquico laboral o tu director. Un cocinero profesional de restaurante se llama "der Koch" o "der Küchenchef".',
      exampleDe: 'Mein Chef hat mir zwei Wochen Urlaub genehmigt.',
      exampleEs: 'Mi jefe me ha aprobado dos semanas de vacaciones.',
      trick: '👻 Chef = El jefe. Koch = El cocinero.'
    },
    {
      id: 'ff_gymnasium',
      german: 'das Gymnasium',
      looksLikeEn: 'gym / gymnasium (gimnasio deportivo)',
      looksLikeEs: 'parece "gimnasio para entrenar"',
      actualMeaning: 'INSTITUTO DE SECUNDARIA / BACHILLERATO DE ÉLITE',
      ghostAlert: 'El "Gymnasium" es la escuela preparatoria académica que lleva al Abitur (acceso a universidad). Para ir a levantar pesas o hacer fitness se dice "das Fitnessstudio" o "die Turnhalle".',
      exampleDe: 'Mein Sohn geht in die neunte Klasse am Gymnasium.',
      exampleEs: 'Mi hijo va a noveno curso en el instituto.',
      trick: '👻 Gymnasium = Instituto de bachillerato. Fitnessstudio = Gimnasio.'
    },
    {
      id: 'ff_aktuell',
      german: 'aktuell',
      looksLikeEn: 'actually (en realidad / de hecho)',
      looksLikeEs: 'parece "en realidad"',
      actualMeaning: 'ACTUAL / VIGENTE / DE ÚLTIMA HORA',
      ghostAlert: '"Aktuell" significa lo que ocurre en este momento (de actualidad). Para decir "en realidad / actually", en alemán se usa "eigentlich" o "tatsächlich".',
      exampleDe: 'Das sind die aktuellsten Nachrichten aus Berlin.',
      exampleEs: 'Estas son las noticias más actuales de Berlín.',
      trick: '👻 Aktuell = Actual. Eigentlich / Tatsächlich = En realidad (actually).'
    },
    {
      id: 'ff_praegnant',
      german: 'prägnant',
      looksLikeEn: 'pregnant (embarazada)',
      looksLikeEs: 'parece "preñada / embarazada"',
      actualMeaning: 'CONCISO / PRECISO / RELEVANTE',
      ghostAlert: 'Si dices que un texto es "sehr prägnant", estás diciendo que es claro, sintético y al grano. ¡No tiene nada que ver con un embarazo! Para decir embarazada se dice "schwanger".',
      exampleDe: 'Seine Erklärung war kurz und sehr prägnant.',
      exampleEs: 'Su explicación fue breve y muy concisa.',
      trick: '👻 Prägnant = Conciso / claro. Schwanger = Embarazada.'
    },
    {
      id: 'ff_rente',
      german: 'die Rente',
      looksLikeEn: 'rent (alquiler de casa)',
      looksLikeEs: 'parece "renta / alquiler"',
      actualMeaning: 'LA JUBILACIÓN / PENSIÓN DE RETIRO',
      ghostAlert: 'En alemán, el alquiler mensual de un piso se llama "die Miete". "Die Rente" es la pensión de jubilación que cobras al retirarte.',
      exampleDe: 'Mein Großvater geht nächstes Jahr in Rente.',
      exampleEs: 'Mi abuelo se jubila el año que viene.',
      trick: '👻 Rente = Jubilación / pensión. Miete = Alquiler.'
    },
    {
      id: 'ff_spenden',
      german: 'spenden',
      looksLikeEn: 'spend (gastar dinero o pasar tiempo)',
      looksLikeEs: 'parece "expender / gastar"',
      actualMeaning: 'DONAR (a una causa benéfica o caridad)',
      ghostAlert: '"Spenden" significa dar dinero o bienes desinteresadamente a una ONG o causa social. Para decir gastar dinero en compras cotidianas se usa "ausgeben". Para pasar tiempo se usa "verbringen".',
      exampleDe: 'Viele Menschen spenden Geld für das Rote Kreuz.',
      exampleEs: 'Muchas personas donan dinero a la Cruz Roja.',
      trick: '👻 Spenden = Donar a caridad. Ausgeben = Gastar dinero.'
    },
    {
      id: 'ff_brav',
      german: 'brav',
      looksLikeEn: 'brave (valiente)',
      looksLikeEs: 'parece "bravo / feroz o valiente"',
      actualMeaning: 'OBEDIENTE / BIEN EDUCADO / FORMAL',
      ghostAlert: 'Si le dices a un niño o a un perro "Sei brav!", le estás pidiendo que se porte bien y esté tranquilo, no que pelee valientemente. Para valiente se dice "mutig".',
      exampleDe: 'Die Kinder waren heute beim Zahnarzt sehr brav.',
      exampleEs: 'Los niños se portaron muy bien hoy en el dentista.',
      trick: '👻 Brav = Bien educado / obediente. Mutig = Valiente.'
    },
    {
      id: 'ff_fabrik',
      german: 'die Fabrik',
      looksLikeEn: 'fabric (tejido o tela textil)',
      looksLikeEs: 'parece "tejido / fábrica"',
      actualMeaning: 'LA FÁBRICA / PLANTA INDUSTRIAL',
      ghostAlert: 'En inglés "fabric" es la tela o el tejido textil (en alemán: der Stoff). En alemán, "die Fabrik" es la nave industrial donde se fabrican productos.',
      exampleDe: 'Er arbeitet als Ingenieur in einer Autofabrik.',
      exampleEs: 'Trabaja como ingeniero en una fábrica de coches.',
      trick: '👻 Fabrik = Fábrica. Stoff = Tela / Fabric.'
    },
    {
      id: 'ff_sensibel',
      german: 'sensibel',
      looksLikeEn: 'sensible (sensato / juicioso)',
      looksLikeEs: 'parece "sensible"',
      actualMeaning: 'SENSIBLE / DELICADO EMOCIONALMENTE',
      ghostAlert: 'En inglés "sensible" significa sensato, con sentido común (en alemán: vernünftig). En alemán "sensibel" significa que siente mucho las emociones o que su piel reacciona fácilmente.',
      exampleDe: 'Sie hat sehr sensible Haut und ein großes Herz.',
      exampleEs: 'Tiene la piel muy sensible y un gran corazón.',
      trick: '👻 Sensibel = Sensible emocional. Vernünftig = Sensato (sensible en inglés).'
    },
    {
      id: 'ff_also',
      german: 'also',
      looksLikeEn: 'also (también / además)',
      looksLikeEs: 'parece "también"',
      actualMeaning: 'POR LO TANTO / ASÍ QUE / ENTONCES',
      ghostAlert: '¡Trampa omnipresente! En alemán "also" es el conector consecutivo: "Ich denke, also bin ich" (Pienso, luego existo). Para decir "también" en alemán se dice "auch".',
      exampleDe: 'Es regnet stark, also bleiben wir drinnen.',
      exampleEs: 'Llueve fuerte, así que nos quedamos dentro.',
      trick: '👻 Also = Por tanto / así que. Auch = También (also en inglés).'
    },
    {
      id: 'ff_rat',
      german: 'der Rat',
      looksLikeEn: 'rat (rata)',
      looksLikeEs: 'parece "rata"',
      actualMeaning: 'EL CONSEJO o EL CONSEJO MUNICIPAL',
      ghostAlert: '"Der Rat" no es un roedor, es una recomendación sabia o un órgano consultivo (der Stadtrat). El roedor en alemán se llama "die Ratte".',
      exampleDe: 'Danke für deinen guten Rat, er hat mir sehr geholfen!',
      exampleEs: '¡Gracias por tu buen consejo, me ha ayudado mucho!',
      trick: '👻 Der Rat = El consejo. Die Ratte = La rata.'
    },
    {
      id: 'ff_eventuell',
      german: 'eventuell',
      looksLikeEn: 'eventually (finalmente / a la larga)',
      looksLikeEs: 'parece "eventualmente / con el tiempo"',
      actualMeaning: 'POSIBLEMENTE / QUIZÁS / POR SI ACASO',
      ghostAlert: '"Eventuell" no denota algo que pasará al final del tiempo, sino una hipótesis incierta (quizás, tal vez). Para decir "a la larga / con el tiempo / eventually" se usa "schließlich" o "mit der Zeit".',
      exampleDe: 'Ich komme eventuell etwas später zum Abendessen.',
      exampleEs: 'Posiblemente llegue un poco más tarde a la cena.',
      trick: '👻 Eventuell = Quizás / posiblemente. Schließlich = Finalmente (eventually).'
    },
    {
      id: 'ff_blamieren',
      german: 'sich blamieren',
      looksLikeEn: 'blame (culpar a alguien)',
      looksLikeEs: 'parece "culpar / reprochar"',
      actualMeaning: 'PONERSE EN EVIDENCIA / HACER EL RIDÍCULO',
      ghostAlert: '"Sich blamieren" significa quedar en vergüenza públicamente. Para decir culpar a alguien en alemán se usa "beschuldigen" o "die Schuld geben".',
      exampleDe: 'Ich habe mich vor dem ganzen Publikum blamiert.',
      exampleEs: 'Hice el ridículo ante todo el público.',
      trick: '👻 Sich blamieren = Hacer el ridículo. Beschuldigen = Culpar (blame).'
    },
    {
      id: 'ff_eng',
      german: 'eng',
      looksLikeEn: 'angry (enfadado)',
      looksLikeEs: 'parece "angosto / enojado"',
      actualMeaning: 'ESTRECHO / APRETADO / AJUSTADO',
      ghostAlert: 'Si una camiseta te queda "eng", te queda apretada o ceñida al cuerpo. Para decir enfadado se dice "wütend" o "verärgert".',
      exampleDe: 'Diese Hose ist mir leider zu eng geworden.',
      exampleEs: 'Este pantalón lamentablemente me ha quedado demasiado estrecho.',
      trick: '👻 Eng = Estrecho / apretado. Wütend = Enfadado.'
    },
    {
      id: 'ff_dose',
      german: 'die Dose',
      looksLikeEn: 'dose (dosis de medicamento)',
      looksLikeEs: 'parece "dosis médica"',
      actualMeaning: 'LA LATA / BOTE METÁLICO',
      ghostAlert: '"Eine Dose Cola" es una lata de Coca-Cola. La dosis médica en alemán se dice "die Dosis".',
      exampleDe: 'Ich trinke gerne eine Dose kaltes Bier nach Feierabend.',
      exampleEs: 'Me gusta beber una lata de cerveza fría tras salir de trabajar.',
      trick: '👻 Die Dose = La lata / bote. Die Dosis = La dosis médica.'
    },
    {
      id: 'ff_hell',
      german: 'hell',
      looksLikeEn: 'hell (infierno)',
      looksLikeEs: 'parece "infierno"',
      actualMeaning: 'CLARO / LUMINOSO / RADIANTE',
      ghostAlert: 'Un piso "hell" es un piso lleno de luz solar natural, muy cotizado en Alemania. El infierno en alemán se llama "die Hölle".',
      exampleDe: 'Das Wohnzimmer hat große Fenster und ist wunderschön hell.',
      exampleEs: 'El salón tiene grandes ventanas y es hermosamente luminoso.',
      trick: '👻 Hell = Luminoso / claro. Die Hölle = El infierno.'
    },
    {
      id: 'ff_mist',
      german: 'der Mist',
      looksLikeEn: 'mist (niebla fina)',
      looksLikeEs: 'parece "misterio o niebla"',
      actualMeaning: 'ESTIÉRCOL / PORQUERÍA / ¡MALDICIÓN!',
      ghostAlert: 'En alemán exclamar "So ein Mist!" es como decir "¡Vaya mierda / Qué fastidio!". La niebla suave en inglés (mist) en alemán es "der Nebel" o "der Dunst".',
      exampleDe: 'Mist! Ich habe meinen Zug um eine Minute verpasst.',
      exampleEs: '¡Maldición! He perdido mi tren por un minuto.',
      trick: '👻 Mist = Estiércol / Qué fastidio. Nebel = Niebla.'
    },
    {
      id: 'ff_sparen',
      german: 'sparen',
      looksLikeEn: 'spare (de repuesto / perdonar)',
      looksLikeEs: 'parece "separar / perdonar"',
      actualMeaning: 'AHORRAR DINERO o ENERGÍA',
      ghostAlert: '"Ich spare Geld" significa "Ahorro dinero para el futuro". Una rueda de repuesto en inglés (spare tire) en alemán es "das Ersatzrad".',
      exampleDe: 'Wir müssen Strom sparen, weil die Energiepreise steigen.',
      exampleEs: 'Tenemos que ahorrar electricidad porque suben los precios de la energía.',
      trick: '👻 Sparen = Ahorrar dinero/energía. Ersatz = Repuesto.'
    },
    {
      id: 'ff_decke',
      german: 'die Decke',
      looksLikeEn: 'deck (cubierta del barco / terraza)',
      looksLikeEs: 'parece "cubierta"',
      actualMeaning: 'EL TECHO INTERIOR o LA MANTA',
      ghostAlert: '"Die Decke" tiene un doble significado hogareño: es el techo de una habitación (Zimmerdecke) y también la manta calentita con la que te tapas en el sofá (Wohndecke).',
      exampleDe: 'Es ist kalt im Zimmer, nimm dir bitte eine Decke.',
      exampleEs: 'Hace frío en la habitación, coge por favor una manta.',
      trick: '👻 Decke = Manta o techo interior. Dach = El tejado exterior.'
    },
    {
      id: 'ff_see_mask_fem',
      german: 'der See vs. die See',
      looksLikeEn: 'see / sea (mar / ver)',
      looksLikeEs: 'parece "el mar"',
      actualMeaning: 'der See = EL LAGO (agua dulce) | die See = EL MAR (mar abierto)',
      ghostAlert: '¡Otra trampa de género alemana crucial!\n* DER See (masculino) = Un lago de agua dulce (ej: der Bodensee, der Wannsee).\n* DIE See (femenino) = El mar o el océano abierto (ej: die Nordsee, die Ostsee).\n* Y "das Meer" (neutro) = El mar en general.',
      exampleDe: 'Wir baden im See (lago) und fahren im Urlaub an die See (al mar).',
      exampleEs: 'Nos bañamos en el lago y en vacaciones vamos al mar.',
      trick: '👻 der See = Lago dulce. die See = Mar salado.'
    }
  ],

  // =========================================================================
  // 2. PUENTES REALES GERMÁNICOS (Wortbrücken con el Inglés 🇬🇧)
  // Palabras con raíz indoeuropea idéntica y mutaciones fonéticas predecibles
  // =========================================================================
  germanicCognates: [
    {
      id: 'gc_water',
      german: 'das Wasser',
      english: 'water',
      spanish: 'el agua',
      pattern: 'Mutación fonética: La "t" inglesa se transforma en "ss / s" en alemán (water → Wasser).',
      exampleDe: 'Trinkst du lieber stilles Wasser oder mit Sprudel?',
      exampleEs: '¿Prefieres beber agua sin gas o con gas?'
    },
    {
      id: 'gc_house',
      german: 'das Haus',
      english: 'house',
      spanish: 'la casa',
      pattern: 'Idéntica pronunciación y raíz: house → Haus (plural: die Häuser).',
      exampleDe: 'Wir suchen ein kleines Haus mit Garten.',
      exampleEs: 'Buscamos una casa pequeña con jardín.'
    },
    {
      id: 'gc_book',
      german: 'das Buch',
      english: 'book',
      spanish: 'el libro',
      pattern: 'La "k" inglesa muta en el sonido gutural alemán "ch" (book → Buch).',
      exampleDe: 'Dieses Buch hat mein Leben verändert.',
      exampleEs: 'Este libro ha cambiado mi vida.'
    },
    {
      id: 'gc_friend',
      german: 'der Freund',
      english: 'friend',
      spanish: 'el amigo',
      pattern: 'Raíz germánica común: friend → Freund (femenino: die Freundin).',
      exampleDe: 'Er ist mein bester Freund seit der Kindheit.',
      exampleEs: 'Es mi mejor amigo desde la infancia.'
    },
    {
      id: 'gc_drink',
      german: 'trinken',
      english: 'to drink',
      spanish: 'beber / tomar',
      pattern: 'Verbo gemelo: drink → trinken (ich trinke, du trinkst, er trinkt).',
      exampleDe: 'Ich trinke jeden Morgen eine Tasse schwarzen Kaffee.',
      exampleEs: 'Bebo cada mañana una taza de café solo.'
    },
    {
      id: 'gc_find',
      german: 'finden',
      english: 'to find',
      spanish: 'encontrar / hallar / opinar',
      pattern: 'Verbo gemelo: to find → finden (Wie findest du das? = ¿Qué opinas de esto?).',
      exampleDe: 'Ich kann meine Schlüssel schon wieder nicht finden.',
      exampleEs: 'No logro encontrar mis llaves otra vez.'
    },
    {
      id: 'gc_help',
      german: 'helfen',
      english: 'to help',
      spanish: 'ayudar (¡rige Dativo!)',
      pattern: 'Verbo gemelo: help → helfen. La "p" inglesa muta en "f" alemana (help → helf-).',
      exampleDe: 'Kannst du mir bitte kurz helfen? (helfen + mir im Dativ).',
      exampleEs: '¿Puedes ayudarme un momento, por favor?'
    },
    {
      id: 'gc_milk',
      german: 'die Milch',
      english: 'milk',
      spanish: 'la leche',
      pattern: 'La "k" inglesa muta en "ch" alemana (milk → Milch).',
      exampleDe: 'Möchtest du Milch und Zucker in deinen Tee?',
      exampleEs: '¿Quieres leche y azúcar en tu té?'
    },
    {
      id: 'gc_bread',
      german: 'das Brot',
      english: 'bread',
      spanish: 'el pan',
      pattern: 'Raíz común: bread → Brot.',
      exampleDe: 'In Deutschland gibt es über 3000 Sorten Brot.',
      exampleEs: 'En Alemania hay más de 3000 tipos de pan.'
    },
    {
      id: 'gc_cold_warm',
      german: 'kalt / warm',
      english: 'cold / warm',
      spanish: 'frío / cálido',
      pattern: 'Adjetivos gemelos: cold → kalt, warm → warm.',
      exampleDe: 'Im Winter ist es kalt, aber die Wohnung ist schön warm.',
      exampleEs: 'En invierno hace frío, pero el apartamento está bien caliente.'
    },
    {
      id: 'gc_apple',
      german: 'der Apfel',
      english: 'apple',
      spanish: 'la manzana',
      pattern: 'La "p" inglesa muta en "pf" alemana (apple → Apfel).',
      exampleDe: 'Ein frischer Apfel schmeckt herrlich süß.',
      exampleEs: 'Una manzana fresca sabe deliciosamente dulce.'
    },
    {
      id: 'gc_finger',
      german: 'der Finger',
      english: 'finger',
      spanish: 'el dedo de la mano',
      pattern: 'Escritura y sonido idénticos: finger → Finger.',
      exampleDe: 'Ich habe mir den Finger an der heißen Pfanne verbrannt.',
      exampleEs: 'Me he quemado el dedo con la sartén caliente.'
    },
    {
      id: 'gc_name',
      german: 'der Name',
      english: 'name',
      spanish: 'el nombre',
      pattern: 'Palabra gemela universal: name → Name.',
      exampleDe: 'Wie ist Ihr voller Name, bitte?',
      exampleEs: '¿Cuál es su nombre completo, por favor?'
    },
    {
      id: 'gc_night',
      german: 'die Nacht',
      english: 'night',
      spanish: 'la noche',
      pattern: 'La "gh" muda inglesa equivale a la "ch" alemana: night → Nacht.',
      exampleDe: 'Gute Nacht und schlaf gut!',
      exampleEs: '¡Buenas noches y duerme bien!'
    }
  ],

  // =========================================================================
  // 3. PUENTES REALES LATINOS (Wortbrücken con el Español 🇪🇸)
  // Palabras y sufijos que puedes usar de inmediato con un 95% de acierto
  // =========================================================================
  latinCognates: [
    {
      id: 'lc_tion',
      german: 'die Information, Situation, Nation, Funktion',
      spanish: 'Sufijo: -ción en español = -tion en alemán (¡100% FEMENINAS: DIE!)',
      pattern: 'Toda palabra terminada en "-tion" en alemán es FEMENINA (die) y se acentúa en la última sílaba: die InformaTION, die SituaTION.',
      exampleDe: 'Die Information ist für die ganze Situation sehr nützlich.',
      exampleEs: 'La información es muy útil para toda la situación.'
    },
    {
      id: 'lc_ieren',
      german: 'organisieren, studieren, reservieren, funktionieren, reparieren',
      spanish: 'Verbos en -ar / -ir en español = -ieren en alemán (¡Regulares y sin "ge-" en Perfekt!)',
      pattern: 'Los verbos derivados del latín terminan en "-ieren" y tienen una ventaja enorme: su participio Perfekt NO lleva el prefijo "ge-" (ej: studiert, reserviert, repariert).',
      exampleDe: 'Ich habe gestern den Tisch im Restaurant reserviert.',
      exampleEs: 'Ayer reservé la mesa en el restaurante.'
    },
    {
      id: 'lc_problem',
      german: 'das Problem',
      spanish: 'el problema (¡Ojo al género: neutro "das" en alemán!)',
      pattern: 'Escritura idéntica. En español es masculino ("el problema") por su origen griego neutro; en alemán preserva el género neutro original: "das Problem".',
      exampleDe: 'Kein Problem! Das können wir ganz leicht lösen.',
      exampleEs: '¡Ningún problema! Eso lo podemos resolver muy fácilmente.'
    },
    {
      id: 'lc_musik',
      german: 'die Musik',
      spanish: 'la música',
      pattern: 'En alemán la acentuación pasa al final: die MuSIK. Género femenino die Musik.',
      exampleDe: 'Ich höre den ganzen Tag gerne deutsche Indie-Musik.',
      exampleEs: 'Me gusta escuchar música indie alemana todo el día.'
    },
    {
      id: 'lc_familie',
      german: 'die Familie',
      spanish: 'la familia',
      pattern: 'Idéntica y transparente: die Familie.',
      exampleDe: 'Meine Familie wohnt in Spanien und Südamerika.',
      exampleEs: 'Mi familia vive en España y Sudamérica.'
    },
    {
      id: 'lc_kultur',
      german: 'die Kultur',
      spanish: 'la cultura',
      pattern: 'Terminación "-tur" en alemán equivale a "-tura": die KulTUR, die NaTUR, die LiteraTUR. (¡Siempre femeninas: die!).',
      exampleDe: 'Berlin hat eine pulsierende und offene Kultur.',
      exampleEs: 'Berlín tiene una cultura vibrante y abierta.'
    },
    {
      id: 'lc_restaurant_hotel',
      german: 'das Restaurant / das Hotel / das Café',
      spanish: 'el restaurante / el hotel / el café (establecimiento)',
      pattern: 'Los lugares internacionales de hostelería son neutros en alemán: das Restaurant, das Hotel, das Café.',
      exampleDe: 'Wir treffen uns heute Abend im Restaurant vor dem Hotel.',
      exampleEs: 'Nos encontramos esta noche en el restaurante frente al hotel.'
    },
    {
      id: 'lc_adjektive',
      german: 'interessant, perfekt, direkt, modern, aktiv, nervös',
      spanish: 'Adjetivos de raíz latina compartida',
      pattern: 'Se usan directamente como adjetivos predicativos sin declinar (Das ist interessant, perfekt, modern).',
      exampleDe: 'Der Kurs ist sehr interessant und absolut perfekt für mich.',
      exampleEs: 'El curso es muy interesante y absolutamente perfecto para mí.'
    }
  ]
};
