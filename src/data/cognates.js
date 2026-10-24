// Base de datos exhaustiva y enciclopédica de Cognados Reales, Leyes Fonéticas y Falsos Amigos
// Diseñada para acelerar el aprendizaje de hispanohablantes usando el inglés y el latín/español.

export const cognatesData = {
  // =========================================================================
  // 1. FALSOS AMIGOS (Falsche Freunde 👻) - Trampas cognitivas y de género
  // =========================================================================
  falseFriends: [
    {
      id: 'ff_schluessel_schuessel',
      german: 'der Schlüssel vs. die Schüssel',
      looksLikeEn: 'Schlüssel ↔ key / Schüssel ↔ bowl',
      looksLikeEs: 'Trampa doble de género: "la llave" y "el tazón"',
      actualMeaning: 'der Schlüssel = LA LLAVE (Masc) | die Schüssel = EL TAZÓN / CUENCO (Fem)',
      ghostAlert: '⭐ ¡LA GRAN TRAMPA DE GÉNERO CRUZADA!\n1. En español decimos "LA llave" (femenino), pero en alemán es MASCULINO: "der Schlüssel" (del verbo schließen = cerrar cerraduras).\n2. En español decimos "EL tazón / cuenco" (masculino), pero en alemán es FEMENINO: "die Schüssel" (fuente o bol de ensalada).\n¡Ambas palabras existen pero tienen sus géneros exactamente invertidos respecto al español!',
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
      trick: '👻标志 Prägnant = Conciso / claro. Schwanger = Embarazada.'
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
      ghostAlert: '"Eine Dose Cola" es una lata de refresco. La dosis médica en alemán se dice "die Dosis".',
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
      ghostAlert: 'En alemán exclamar "So ein Mist!" es como decir "¡Vaya porquería / Qué fastidio!". La niebla suave en inglés (mist) en alemán es "der Nebel" o "der Dunst".',
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
  // 2. LAS 7 LEYES FONÉTICAS CON EL INGLÉS (Zweite Lautverschiebung 🇬🇧 ↔ 🇩🇪)
  // Las reglas de mutación que convierten cientos de palabras inglesas a alemán
  // =========================================================================
  phoneticRulesEn: [
    {
      id: 'pr_t_ss_z',
      name: 'Ley 1: La "T" inglesa muta en "SS / S" o "Z / TZ"',
      rule: 'Cuando el inglés tiene una "T", el alemán sistemáticamente la fricativa en "ss/s" tras vocal, o en "z/tz" al inicio o tras consonante.',
      examples: [
        { en: 'water', de: 'das Wasser', es: 'el agua' },
        { en: 'better', de: 'besser', es: 'mejor' },
        { en: 'street', de: 'die Straße', es: 'la calle' },
        { en: 'to eat', de: 'essen', es: 'comer' },
        { en: 'to bite', de: 'beißen', es: 'morder' },
        { en: 'white', de: 'weiß', es: 'blanco' },
        { en: 'foot', de: 'der Fuß', es: 'el pie' },
        { en: 'cat', de: 'die Katze', es: 'el gato' },
        { en: 'heart', de: 'das Herz', es: 'el corazón' },
        { en: 'ten', de: 'zehn', es: 'diez' },
        { en: 'time', de: 'die Zeit', es: 'el tiempo / la hora' },
        { en: 'tongue', de: 'die Zunge', es: 'la lengua' },
        { en: 'two', de: 'zwei', es: 'dos' },
        { en: 'to sit', de: 'sitzen', es: 'estar sentado' },
        { en: 'to let', de: 'lassen', es: 'dejar / permitir' },
        { en: 'to hate', de: 'hassen', es: 'odiar' },
        { en: 'hot', de: 'heiß', es: 'caliente' },
        { en: 'to shoot', de: 'schießen', es: 'disparar' }
      ]
    },
    {
      id: 'pr_p_pf_f',
      name: 'Ley 2: La "P" inglesa muta en "PF" o "F / FF"',
      rule: 'El sonido oclusivo labial "P" se abrió en alemán en una africada "pf" o fricativa "f/ff".',
      examples: [
        { en: 'apple', de: 'der Apfel', es: 'la manzana' },
        { en: 'pepper', de: 'der Pfeffer', es: 'la pimienta' },
        { en: 'pipe', de: 'die Pfeife', es: 'la pipa' },
        { en: 'pound', de: 'das Pfund', es: 'la libra' },
        { en: 'plant', de: 'die Pflanze', es: 'la planta' },
        { en: 'ship', de: 'das Schiff', es: 'el barco' },
        { en: 'to sleep', de: 'schlafen', es: 'dormir' },
        { en: 'deep', de: 'tief', es: 'profundo' },
        { en: 'open', de: 'offen', es: 'abierto' },
        { en: 'to hope', de: 'hoffen', es: 'esperar con esperanza' },
        { en: 'to help', de: 'helfen', es: 'ayudar' },
        { en: 'sharp', de: 'scharf', es: 'picante / afilado' },
        { en: 'ape', de: 'der Affe', es: 'el mono' },
        { en: 'soap', de: 'die Seife', es: 'el jabón' },
        { en: 'drop', de: 'der Tropfen', es: 'la gota' }
      ]
    },
    {
      id: 'pr_k_ch',
      name: 'Ley 3: La "K" inglesa muta en el sonido gutural "CH"',
      rule: 'La oclusiva velar sorda "k" tras vocal en inglés se convirtió en el sonido alemán "ch" ([x] o [ç]).',
      examples: [
        { en: 'book', de: 'das Buch', es: 'el libro' },
        { en: 'to make', de: 'machen', es: 'hacer' },
        { en: 'to cook', de: 'kochen', es: 'cocinar' },
        { en: 'to speak', de: 'sprechen', es: 'hablar' },
        { en: 'to break', de: 'brechen', es: 'romper' },
        { en: 'smoke', de: 'der Rauch', es: 'el humo' },
        { en: 'milk', de: 'die Milch', es: 'la leche' },
        { en: 'week', de: 'die Woche', es: 'la semana' },
        { en: 'to seek', de: 'suchen', es: 'buscar' },
        { en: 'cake', de: 'der Kuchen', es: 'el pastel' },
        { en: 'rich', de: 'reich', es: 'rico / adinerado' }
      ]
    },
    {
      id: 'pr_d_t',
      name: 'Ley 4: La "D" inglesa muta en "T" alemana',
      rule: 'Casi cualquier palabra inglesa que empieza por "D" o tiene "d" interna pasa a "T" en alemán.',
      examples: [
        { en: 'to drink', de: 'trinken', es: 'beber' },
        { en: 'daughter', de: 'die Tochter', es: 'la hija' },
        { en: 'day', de: 'der Tag', es: 'el día' },
        { en: 'door', de: 'die Tür', es: 'la puerta' },
        { en: 'to dance', de: 'tanzen', es: 'bailar' },
        { en: 'dead', de: 'tot', es: 'muerto' },
        { en: 'dream', de: 'der Traum', es: 'el sueño' },
        { en: 'to drive', de: 'treiben', es: 'impulsar / arrear' },
        { en: 'dew', de: 'der Tau', es: 'el rocío' },
        { en: 'deaf', de: 'taub', es: 'sordo' },
        { en: 'deep', de: 'tief', es: 'profundo' }
      ]
    },
    {
      id: 'pr_th_d',
      name: 'Ley 5: La "TH" inglesa muta en "D" alemana',
      rule: 'El inglés conservó la fricativa dental "th" interdental, mientras que el alemán la cerró en "D" dental sonora.',
      examples: [
        { en: 'to thank', de: 'danken', es: 'dar las gracias' },
        { en: 'to think', de: 'denken', es: 'pensar' },
        { en: 'this', de: 'dies / dieser', es: 'este / esto' },
        { en: 'that', de: 'das / dass', es: 'eso / que' },
        { en: 'the', de: 'der / die / das', es: 'el / la / lo' },
        { en: 'brother', de: 'der Bruder', es: 'el hermano' },
        { en: 'leather', de: 'das Leder', es: 'el cuero' },
        { en: 'thorn', de: 'der Dorn', es: 'la espina' },
        { en: 'thick', de: 'dick', es: 'gordo / grueso' },
        { en: 'thief', de: 'der Dieb', es: 'el ladrón' },
        { en: 'three', de: 'drei', es: 'tres' },
        { en: 'through', de: 'durch', es: 'a través de' },
        { en: 'thirst', de: 'der Durst', es: 'la sed' },
        { en: 'thin', de: 'dünn', es: 'delgado' }
      ]
    },
    {
      id: 'pr_v_b',
      name: 'Ley 6: La "V / F" inglesa muta en "B" alemana',
      rule: 'Las fricativas sonoras inglesas "v/f" suelen corresponderse con la "b" alemana interna.',
      examples: [
        { en: 'to have', de: 'haben', es: 'tener / haber' },
        { en: 'to give', de: 'geben', es: 'dar' },
        { en: 'to live', de: 'leben', es: 'vivir' },
        { en: 'to love', de: 'lieben', es: 'amar / querer' },
        { en: 'seven', de: 'sieben', es: 'siete' },
        { en: 'silver', de: 'das Silber', es: 'la plata' },
        { en: 'liver', de: 'die Leber', es: 'el hígado' },
        { en: 'over', de: 'über', es: 'encima de / sobre' },
        { en: 'heaven', de: 'der Himmel', es: 'el cielo' },
        { en: 'halve', de: 'die Hälfte / halb', es: 'la mitad / medio' }
      ]
    },
    {
      id: 'pr_y_g',
      name: 'Ley 7: La "Y" final inglesa equivale a "G" alemana',
      rule: 'La vocalización inglesa de la antigua "g" germánica en "y" (day, say) se conserva como "g" en alemán (Tag, sagen).',
      examples: [
        { en: 'day', de: 'der Tag', es: 'el día' },
        { en: 'to lay', de: 'legen', es: 'poner / acostar' },
        { en: 'to say', de: 'sagen', es: 'decir' },
        { en: 'rain', de: 'der Regen', es: 'la lluvia' },
        { en: 'hail', de: 'der Hagel', es: 'el granizo' },
        { en: 'sail', de: 'das Segel', es: 'la vela de barco' },
        { en: 'nail', de: 'der Nagel', es: 'el clavo / la uña' },
        { en: 'eye', de: 'das Auge', es: 'el ojo' },
        { en: 'to fly', de: 'fliegen', es: 'volar' },
        { en: 'honey', de: 'der Honig', es: 'la miel' },
        { en: 'holy', de: 'heilig', es: 'santo / sagrado' }
      ]
    }
  ],

  // =========================================================================
  // 3. PALABRAS GEMELAS DIRECTAS CON EL INGLÉS (Near-Identical 🇬🇧 ↔ 🇩🇪)
  // Vocabulario básico del día a día prácticamente idéntico
  // =========================================================================
  directEnglishTwins: [
    { de: 'der Arm', en: 'arm', es: 'el brazo' },
    { de: 'die Hand', en: 'hand', es: 'la mano' },
    { de: 'der Finger', en: 'finger', es: 'el dedo' },
    { de: 'das Haar', en: 'hair', es: 'el pelo' },
    { de: 'der Name', en: 'name', es: 'el nombre' },
    { de: 'der Ring', en: 'ring', es: 'el anillo' },
    { de: 'das Glas', en: 'glass', es: 'el vaso / el cristal' },
    { de: 'das Gras', en: 'grass', es: 'la hierba / césped' },
    { de: 'das Gold', en: 'gold', es: 'el oro' },
    { de: 'das Land', en: 'land', es: 'el país / la tierra' },
    { de: 'der Sand', en: 'sand', es: 'la arena' },
    { de: 'der Wind', en: 'wind', es: 'el viento' },
    { de: 'der Winter', en: 'winter', es: 'el invierno' },
    { de: 'der Sommer', en: 'summer', es: 'el verano' },
    { de: 'das Bett', en: 'bed', es: 'la cama' },
    { de: 'das Boot', en: 'boat', es: 'el barco' },
    { de: 'das Haus', en: 'house', es: 'la casa' },
    { de: 'die Maus', en: 'mouse', es: 'el ratón' },
    { de: 'das Eis', en: 'ice', es: 'el hielo / el helado' },
    { de: 'der Fisch', en: 'fish', es: 'el pez / pescado' },
    { de: 'das Fleisch', en: 'flesh / meat', es: 'la carne' },
    { de: 'der Freund', en: 'friend', es: 'el amigo' },
    { de: 'der Mann', en: 'man', es: 'el hombre' },
    { de: 'das Wort', en: 'word', es: 'la palabra' },
    { de: 'das Werk', en: 'work', es: 'la obra / trabajo' },
    { de: 'singen', en: 'to sing', es: 'cantar' },
    { de: 'schwimmen', en: 'to swim', es: 'nadar' },
    { de: 'sinken', en: 'to sink', es: 'hundirse' },
    { de: 'bringen', en: 'to bring', es: 'traer' },
    { de: 'fallen', en: 'to fall', es: 'caer' },
    { de: 'hören', en: 'to hear', es: 'oír / escuchar' },
    { de: 'lernen', en: 'to learn', es: 'aprender' },
    { de: 'senden', en: 'to send', es: 'enviar' },
    { de: 'warm', en: 'warm', es: 'cálido / caliente' },
    { de: 'kalt', en: 'cold', es: 'frío' },
    { de: 'wild', en: 'wild', es: 'salvaje' },
    { de: 'blind', en: 'blind', es: 'ciego' },
    { de: 'rot', en: 'red', es: 'rojo' },
    { de: 'blau', en: 'blue', es: 'azul' },
    { de: 'grün', en: 'green', es: 'verde' },
    { de: 'braun', en: 'brown', es: 'marrón' }
  ],

  // =========================================================================
  // 4. LAS 8 FÓRMULAS LATINAS MÁGICAS CON EL ESPAÑOL (🇪🇸 ↔ 🇩🇪)
  // Sufijos con un 95% de correspondencia que abren miles de términos de golpe
  // =========================================================================
  latinSuffixFormulas: [
    {
      id: 'form_tion',
      name: 'Fórmula 1: "-ción" en español = "-tion" en alemán',
      gender: '100% FEMENINAS: DIE',
      accentRule: 'Acentuación siempre en la última sílaba: die InformaTION, die SituaTION.',
      examples: [
        { es: 'la información', de: 'die Information' },
        { es: 'la situación', de: 'die Situation' },
        { es: 'la función', de: 'die Funktion' },
        { es: 'la comunicación', de: 'die Kommunikation' },
        { es: 'la estación (de tren/metro)', de: 'die Station' },
        { es: 'la tradición', de: 'die Tradition' },
        { es: 'la producción', de: 'die Produktion' },
        { es: 'la reacción', de: 'die Reaktion' },
        { es: 'la posición', de: 'die Position' },
        { es: 'la condición / forma física', de: 'die Kondition' },
        { es: 'la generación', de: 'die Generation' },
        { es: 'la organización', de: 'die Organisation' },
        { es: 'la definición', de: 'die Definition' },
        { es: 'la concentración', de: 'die Konzentration' },
        { es: 'la inspiración', de: 'die Inspiration' },
        { es: 'la motivación', de: 'die Motivation' },
        { es: 'la nación', de: 'die Nation' },
        { es: 'la operación', de: 'die Operation' }
      ]
    },
    {
      id: 'form_taet',
      name: 'Fórmula 2: "-dad" en español = "-tät" en alemán',
      gender: '100% FEMENINAS: DIE',
      accentRule: 'Acentuación en la terminación -TÄT: die UniversiTÄT, die QualiTÄT.',
      examples: [
        { es: 'la universidad', de: 'die Universität' },
        { es: 'la realidad', de: 'die Realität' },
        { es: 'la calidad', de: 'die Qualität' },
        { es: 'la actividad', de: 'die Aktivität' },
        { es: 'la identidad', de: 'die Identität' },
        { es: 'la capacidad', de: 'die Kapazität' },
        { es: 'la flexibilidad', de: 'die Flexibilität' },
        { es: 'la nacionalidad', de: 'die Nationalität' },
        { es: 'la prioridad', de: 'die Priorität' },
        { es: 'la variedad', de: 'die Varietät' },
        { es: 'la intensidad', de: 'die Intensität' },
        { es: 'la creatividad', de: 'die Kreativität' }
      ]
    },
    {
      id: 'form_nz',
      name: 'Fórmula 3: "-ncia" en español = "-nz" en alemán',
      gender: '100% FEMENINAS: DIE',
      accentRule: 'Terminación con sonido africado /ts/: die DiffeRENZ, die ExisTENZ.',
      examples: [
        { es: 'la diferencia', de: 'die Differenz' },
        { es: 'la existencia', de: 'die Existenz' },
        { es: 'la frecuencia', de: 'die Frequenz' },
        { es: 'la consecuencia', de: 'die Konsequenz' },
        { es: 'la inteligencia', de: 'die Intelligenz' },
        { es: 'la tendencia', de: 'die Tendenz' },
        { es: 'la distancia', de: 'die Distanz' },
        { es: 'la tolerancia', de: 'die Toleranz' },
        { es: 'la sustancia', de: 'die Substanz' },
        { es: 'la concurrencia / competencia', de: 'die Konkurrenz' }
      ]
    },
    {
      id: 'form_ie',
      name: 'Fórmula 4: "-ía" en español = "-ie" en alemán',
      gender: '100% FEMENINAS: DIE',
      accentRule: 'El diptongo -ie suena como una "i" larga y sostenida: die PhilosoPHIE.',
      examples: [
        { es: 'la filosofía', de: 'die Philosophie' },
        { es: 'la energía', de: 'die Energie' },
        { es: 'la categoría', de: 'die Kategorie' },
        { es: 'la teoría', de: 'die Theorie' },
        { es: 'la biología', de: 'die Biologie' },
        { es: 'la psicología', de: 'die Psychologie' },
        { es: 'la estrategia', de: 'die Strategie' },
        { es: 'la fantasía', de: 'die Fantasie' },
        { es: 'la democracia', de: 'die Demokratie' },
        { es: 'la ironía', de: 'die Ironie' },
        { es: 'la armonía', de: 'die Harmonie' }
      ]
    },
    {
      id: 'form_ismus',
      name: 'Fórmula 5: "-ismo" en español = "-ismus" en alemán',
      gender: '100% MASCULINOS: DER',
      accentRule: 'Todos los sustantivos ideológicos o de corrientes son masculinos.',
      examples: [
        { es: 'el optimismo', de: 'der Optimismus' },
        { es: 'el pesimismo', de: 'der Pessimismus' },
        { es: 'el realismo', de: 'der Realismus' },
        { es: 'el turismo', de: 'der Tourismus' },
        { es: 'el capitalismo', de: 'der Kapitalismus' },
        { es: 'el mecanismo', de: 'der Mechanismus' },
        { es: 'el organismo', de: 'der Organismus' },
        { es: 'el egoísmo', de: 'der Egoismus' },
        { es: 'el idealismo', de: 'der Idealismus' }
      ]
    },
    {
      id: 'form_ist',
      name: 'Fórmula 6: "-ista" en español = "-ist" / "-istin" en alemán',
      gender: 'DER para hombres / DIE para mujeres (-in)',
      accentRule: 'Profesiones y adeptos con acentuación final: der TouRIST, die TouRIStin.',
      examples: [
        { es: 'el/la turista', de: 'der Tourist / die Touristin' },
        { es: 'el/la periodista', de: 'der Journalist / die Journalistin' },
        { es: 'el/la especialista', de: 'der Spezialist / die Spezialistin' },
        { es: 'el/la guitarrista', de: 'der Gitarrist / die Gitarristin' },
        { es: 'el/la optimista', de: 'der Optimist / die Optimistin' },
        { es: 'el/la artista', de: 'der Artist / die Artistin' },
        { es: 'el/la pianista', de: 'der Pianist / die Pianistin' }
      ]
    },
    {
      id: 'form_ieren',
      name: 'Fórmula 7: Verbos "-ar / -ir" de raíz latina = "-ieren"',
      gender: 'VERBOS REGULARES SIN "GE-" EN PERFEKT',
      accentRule: '¡El superpoder del estudiante! Participio termina en "-iert" sin prefijo ge- (reserviert, studiert, repariert).',
      examples: [
        { es: 'organizar', de: 'organisieren (hat organisiert)' },
        { es: 'estudiar (en universidad)', de: 'studieren (hat studiert)' },
        { es: 'reservar', de: 'reservieren (hat reserviert)' },
        { es: 'funcionar', de: 'funktionieren (hat funktioniert)' },
        { es: 'reparar', de: 'reparieren (hat repariert)' },
        { es: 'informar', de: 'informieren (hat informiert)' },
        { es: 'discutir / debatir', de: 'diskutieren (hat diskutiert)' },
        { es: 'probar / degustar', de: 'probieren (hat probiert)' },
        { es: 'fotografiar', de: 'fotografieren (hat fotografiert)' },
        { es: 'reaccionar', de: 'reagieren (hat reagiert)' },
        { es: 'comunicar', de: 'kommunizieren (hat kommuniziert)' },
        { es: 'analizar', de: 'analysieren (hat analysiert)' },
        { es: 'instalar', de: 'installieren (hat installiert)' },
        { es: 'controlar / verificar', de: 'kontrollieren (hat kontrolliert)' },
        { es: 'protestar', de: 'protestieren (hat protestiert)' },
        { es: 'reducir', de: 'reduzieren (hat reduziert)' },
        { es: 'producir', de: 'produzieren (hat produziert)' },
        { es: 'existir', de: 'existieren (hat existiert)' },
        { es: 'motivar', de: 'motivieren (hat motiviert)' },
        { es: 'interesar', de: 'interessieren (hat interessiert)' },
        { es: 'pasar / ocurrir', de: 'passieren (ist passiert)' }
      ]
    },
    {
      id: 'form_iv',
      name: 'Fórmula 8: Adjetivos "-ivo / -iva" = "-iv"',
      gender: 'ADJETIVOS DIRECTOS',
      accentRule: 'Se usan sin cambio como adjetivos predicativos (Das ist aktiv, positiv, kreativ).',
      examples: [
        { es: 'activo', de: 'aktiv' },
        { es: 'positivo', de: 'positiv' },
        { es: 'negativo', de: 'negativ' },
        { es: 'creativo', de: 'kreativ' },
        { es: 'productivo', de: 'produktiv' },
        { es: 'alternativo', de: 'alternativ' },
        { es: 'efectivo / eficaz', de: 'effektiv' },
        { es: 'relativo', de: 'relativ' },
        { es: 'agresivo', de: 'aggressiv' },
        { es: 'intensivo', de: 'intensiv' },
        { es: 'sensitivo / delicado', de: 'sensitiv' },
        { es: 'atractivo', de: 'attraktiv' }
      ]
    }
  ],

  // =========================================================================
  // 5. PALABRAS TRIANGULARES UNIVERSALES (🇩🇪 ↔ 🇬🇧 ↔ 🇪🇸)
  // Términos idénticos y transparentes en los tres idiomas
  // =========================================================================
  universalTriangles: [
    { de: 'die Musik', en: 'music', es: 'la música', note: 'Femenino en español y alemán' },
    { de: 'die Lampe', en: 'lamp', es: 'la lámpara', note: 'Palabra del hogar cotidiana' },
    { de: 'der Kaffee', en: 'coffee', es: 'el café (bebida)', note: 'Masculino: der Kaffee' },
    { de: 'das Café', en: 'café', es: 'el café (local/bar)', note: 'Neutro: das Café' },
    { de: 'der Tee', en: 'tea', es: 'el té', note: 'Masculino: der Tee' },
    { de: 'die Banane', en: 'banana', es: 'el plátano / banana', note: 'Femenino: die Banane' },
    { de: 'die Tomate', en: 'tomato', es: 'el tomate', note: 'Femenino: die Tomate' },
    { de: 'die Gitarre', en: 'guitar', es: 'la guitarra', note: 'Femenino: die Gitarre' },
    { de: 'das Radio', en: 'radio', es: 'la radio', note: 'Neutro en alemán: das Radio' },
    { de: 'das Telefon', en: 'telephone', es: 'el teléfono', note: 'Neutro: das Telefon' },
    { de: 'der Bus', en: 'bus', es: 'el autobús', note: 'Masculino: der Bus' },
    { de: 'das Taxi', en: 'taxi', es: 'el taxi', note: 'Neutro: das Taxi' },
    { de: 'der Park', en: 'park', es: 'el parque', note: 'Masculino: der Park' },
    { de: 'der Moment', en: 'moment', es: 'el momento', note: 'Masculino: der Moment' },
    { de: 'die Person', en: 'person', es: 'la persona', note: 'Femenino: die Person' },
    { de: 'die Natur', en: 'nature', es: 'la naturaleza', note: 'Femenino: die Natur' },
    { de: 'die Kultur', en: 'culture', es: 'la cultura', note: 'Femenino: die Kultur' },
    { de: 'die Adresse', en: 'address', es: 'la dirección', note: 'Femenino: die Adresse' },
    { de: 'das Dokument', en: 'document', es: 'el documento', note: 'Neutro: das Dokument' },
    { de: 'die Minute', en: 'minute', es: 'el minuto', note: 'Femenino en alemán: die Minute' },
    { de: 'die Sekunde', en: 'second', es: 'el segundo', note: 'Femenino en alemán: die Sekunde' },
    { de: 'das Problem', en: 'problem', es: 'el problema', note: 'Neutro en alemán: das Problem' },
    { de: 'das System', en: 'system', es: 'el sistema', note: 'Neutro en alemán: das System' },
    { de: 'das Thema', en: 'theme / topic', es: 'el tema', note: 'Neutro en alemán: das Thema' },
    { de: 'das Museum', en: 'museum', es: 'el museo', note: 'Neutro: das Museum' },
    { de: 'das Hotel', en: 'hotel', es: 'el hotel', note: 'Neutro: das Hotel' },
    { de: 'das Restaurant', en: 'restaurant', es: 'el restaurante', note: 'Neutro: das Restaurant' }
  ]
};
