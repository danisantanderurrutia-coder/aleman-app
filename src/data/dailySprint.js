// El Hack de los 7 Términos Diarios: Microaprendizaje estructurado por áreas temáticas primordiales
// 14 jornadas progresivas que rotan automáticamente cada día para que siempre haya nuevo vocabulario activo.

export const dailySprintsData = [
  {
    id: 'sprint_kleidung',
    dayNumber: 1,
    title: '👔 Tag 1: Kleidung & Aussehen (La Ropa y Aspecto)',
    description: 'Los 7 elementos esenciales para ir de compras, vestirse y describir a personas.',
    words: [
      {
        id: 'k1',
        article: 'die',
        word: 'Jacke',
        plural: 'die Jacken',
        translation: 'la chaqueta / abrigo ligero',
        exampleDe: 'Zieh eine warme Jacke an, es ist kalt draußen!',
        exampleEs: '¡Ponte una chaqueta abrigada, hace frío afuera!'
      },
      {
        id: 'k2',
        article: 'die',
        word: 'Hose',
        plural: 'die Hosen',
        translation: 'el pantalón (en alemán es femenino singular: "una" pantalón)',
        exampleDe: 'Diese schwarze Hose passt mir sehr gut.',
        exampleEs: 'Este pantalón negro me queda muy bien.'
      },
      {
        id: 'k3',
        article: 'das',
        word: 'Hemd',
        plural: 'die Hemden',
        translation: 'la camisa (de vestir)',
        exampleDe: 'Er trägt heute ein weißes Hemd für das Gespräch.',
        exampleEs: 'Él viste hoy una camisa blanca para la entrevista.'
      },
      {
        id: 'k4',
        article: 'das',
        word: 'Kleid',
        plural: 'die Kleider',
        translation: 'el vestido de mujer (en plural "die Kleider" también significa ropa)',
        exampleDe: 'Das blaue Kleid steht dir ausgezeichnet.',
        exampleEs: 'El vestido azul te queda excelente.'
      },
      {
        id: 'k5',
        article: 'der',
        word: 'Schuh',
        plural: 'die Schuhe',
        translation: 'el zapato',
        exampleDe: 'Ich brauche neue bequeme Schuhe zum Laufen.',
        exampleEs: 'Necesito zapatos nuevos y cómodos para caminar.'
      },
      {
        id: 'k6',
        article: 'der',
        word: 'Pullover',
        plural: 'die Pullover',
        translation: 'el jersey / suéter',
        exampleDe: 'Der Pullover ist aus reiner Wolle gefertigt.',
        exampleEs: 'El jersey está confeccionado en pura lana.'
      },
      {
        id: 'k7',
        article: 'die',
        word: 'Größe',
        plural: 'die Größen',
        translation: 'la talla / el tamaño',
        exampleDe: 'Haben Sie diese Jacke auch in Größe M?',
        exampleEs: '¿Tiene esta chaqueta también en talla M?'
      }
    ]
  },

  {
    id: 'sprint_supermarkt',
    dayNumber: 2,
    title: '🛒 Tag 2: Supermarkt & Lebensmittel (Supermercado y Alimentación)',
    description: 'Los 7 términos para desenvolverte con total autonomía al hacer las compras cotidianas.',
    words: [
      {
        id: 'sm1',
        article: 'der',
        word: 'Einkaufswagen',
        plural: 'die Einkaufswagen',
        translation: 'el carrito de la compra',
        exampleDe: 'Man braucht eine Ein-Euro-Münze für den Einkaufswagen.',
        exampleEs: 'Se necesita una moneda de un euro para el carrito de compras.'
      },
      {
        id: 'sm2',
        article: 'die',
        word: 'Kasse',
        plural: 'die Kassen',
        translation: 'la caja de cobro',
        exampleDe: 'Könnten Sie bitte eine zweite Kasse öffnen?',
        exampleEs: '¿Podrían abrir una segunda caja, por favor?'
      },
      {
        id: 'sm3',
        article: 'das',
        word: 'Gemüse',
        plural: '-',
        translation: 'la verdura (término colectivo neutro)',
        exampleDe: 'Frisches Gemüse kaufe ich am liebsten auf dem Markt.',
        exampleEs: 'Las verduras frescas prefiero comprarlas en el mercado.'
      },
      {
        id: 'sm4',
        article: 'das',
        word: 'Obst',
        plural: '-',
        translation: 'la fruta (término colectivo neutro sin plural)',
        exampleDe: 'Äpfel und Bananen sind gesundes Obst.',
        exampleEs: 'Las manzanas y los plátanos son frutas saludables.'
      },
      {
        id: 'sm5',
        article: 'die',
        word: 'Milch',
        plural: '-',
        translation: 'la leche',
        exampleDe: 'Haben Sie laktosefreie Milch oder Hafermilch da?',
        exampleEs: '¿Tienen leche sin lactosa o leche de avena por aquí?'
      },
      {
        id: 'sm6',
        article: 'das',
        word: 'Haltbarkeitsdatum',
        plural: 'die Haltbarkeitsdaten',
        translation: 'la fecha de caducidad / consumo preferente (MHD)',
        exampleDe: 'Achten Sie bitte auf das Mindesthaltbarkeitsdatum (MHD).',
        exampleEs: 'Fíjese por favor en la fecha de consumo preferente.'
      },
      {
        id: 'sm7',
        article: 'das',
        word: 'Pfand',
        plural: 'die Pfänder',
        translation: 'el depósito reembolsable de botellas / envases',
        exampleDe: 'Vergiss nicht, die Pfandflaschen zum Automaten zu bringen!',
        exampleEs: '¡No olvides llevar las botellas con depósito a la máquina de Pfand!'
      }
    ]
  },

  {
    id: 'sprint_wohnung',
    dayNumber: 3,
    title: '🏠 Tag 3: Wohnung & Alltag (La Vivienda y Vida en Casa)',
    description: 'Los 7 términos para entender tu contrato, describir tu hogar y hablar de muebles.',
    words: [
      {
        id: 'w1',
        article: 'die',
        word: 'Küche',
        plural: 'die Küchen',
        translation: 'la cocina',
        exampleDe: 'Die Einbauküche ist bereits im Mietpreis enthalten.',
        exampleEs: 'La cocina equipada ya está incluida en el precio de alquiler.'
      },
      {
        id: 'w2',
        article: 'der',
        word: 'Kühlschrank',
        plural: 'die Kühlschränke',
        translation: 'el frigorífico / nevera',
        exampleDe: 'Der Kühlschrank ist fast leer, wir müssen einkaufen.',
        exampleEs: 'La nevera está casi vacía, tenemos que hacer la compra.'
      },
      {
        id: 'w3',
        article: 'die',
        word: 'Heizung',
        plural: 'die Heizungen',
        translation: 'la calefacción',
        exampleDe: 'Im Winter drehen wir die Heizung auf Stufe drei.',
        exampleEs: 'En invierno ponemos la calefacción en el nivel tres.'
      },
      {
        id: 'w4',
        article: 'das',
        word: 'Badezimmer',
        plural: 'die Badezimmer',
        translation: 'el cuarto de baño',
        exampleDe: 'Das Badezimmer hat sowohl eine Dusche als auch ein Fenster.',
        exampleEs: 'El cuarto de baño tiene tanto una ducha como una ventana.'
      },
      {
        id: 'w5',
        article: 'der',
        word: 'Müll',
        plural: '-',
        translation: 'la basura (y el sistema de reciclaje: Mülltrennung)',
        exampleDe: 'In Deutschland trennt man den Müll sehr genau.',
        exampleEs: 'En Alemania se separa la basura de manera muy precisa.'
      },
      {
        id: 'w6',
        article: 'der',
        word: 'Schlüssel',
        plural: 'die Schlüssel',
        translation: 'la llave',
        exampleDe: 'Ich habe meinen Wohnungsschlüssel leider vergessen.',
        exampleEs: 'Lamentablemente he olvidado la llave de mi apartamento.'
      },
      {
        id: 'w7',
        article: 'die',
        word: 'Nebenkosten',
        plural: 'die Nebenkosten (Pluralwort)',
        translation: 'los gastos comunitarios adicionales (agua, calefacción, basura)',
        exampleDe: 'Die Nebenkosten werden einmal im Jahr genau abgerechnet.',
        exampleEs: 'Los gastos adicionales se liquidan con exactitud una vez al año.'
      }
    ]
  },

  {
    id: 'sprint_verkehr',
    dayNumber: 4,
    title: '🚆 Tag 4: Stadt, Verkehr & Orientierung (Transporte y la Ciudad)',
    description: 'Los 7 términos imprescindibles para moverte en metro, tren y pedir indicaciones.',
    words: [
      {
        id: 'v1',
        article: 'der',
        word: 'Bahnhof',
        plural: 'die Bahnhöfe',
        translation: 'la estación de tren (Hauptbahnhof = estación central)',
        exampleDe: 'Wir treffen uns direkt vor dem Hauptbahnhof.',
        exampleEs: 'Nos encontramos directamente frente a la estación central.'
      },
      {
        id: 'v2',
        article: 'das',
        word: 'Gleis',
        plural: 'die Gleise',
        translation: 'la vía / andén del tren',
        exampleDe: 'Der ICE nach Hamburg fährt heute auf Gleis 4 ab.',
        exampleEs: 'El tren rápido hacia Hamburgo sale hoy por la vía 4.'
      },
      {
        id: 'v3',
        article: 'die',
        word: 'Verspätung',
        plural: 'die Verspätungen',
        translation: 'el retraso / demora',
        exampleDe: 'Der Zug hat leider 20 Minuten Verspätung.',
        exampleEs: 'El tren tiene lamentablemente 20 minutos de retraso.'
      },
      {
        id: 'v4',
        article: 'die',
        word: 'Fahrkarte',
        plural: 'die Fahrkarten',
        translation: 'el billete de viaje / ticket de transporte',
        exampleDe: 'Haben Sie eine gültige Fahrkarte für diesen Bereich?',
        exampleEs: '¿Tiene un billete válido para esta zona?'
      },
      {
        id: 'v5',
        article: 'die',
        word: 'Ampel',
        plural: 'die Ampeln',
        translation: 'el semáforo',
        exampleDe: 'An der nächsten Ampel biegen Sie bitte nach links ab.',
        exampleEs: 'En el próximo semáforo gire por favor a la izquierda.'
      },
      {
        id: 'v6',
        article: 'die',
        word: 'Haltestelle',
        plural: 'die Haltestellen',
        translation: 'la parada de autobús o tranvía',
        exampleDe: 'Die Haltestelle ist nur zwei Minuten zu Fuß entfernt.',
        exampleEs: 'La parada está a solo dos minutos a pie.'
      },
      {
        id: 'v7',
        article: 'der',
        word: 'Fahrplan',
        plural: 'die Fahrpläne',
        translation: 'el horario de transportes',
        exampleDe: 'Ich schaue schnell im Online-Fahrplan nach.',
        exampleEs: 'Miro rápidamente en el horario online.'
      }
    ]
  },

  {
    id: 'sprint_gesundheit',
    dayNumber: 5,
    title: '🩺 Tag 5: Gesundheit & Beim Arzt (Salud y Consulta Médica)',
    description: 'Los 7 términos para pedir cita en el médico, describir síntomas y comprar en la farmacia.',
    words: [
      {
        id: 'g1',
        article: 'der',
        word: 'Termin',
        plural: 'die Termine',
        translation: 'la cita previa / compromiso oficial',
        exampleDe: 'Ich möchte gerne einen Termin beim Arzt vereinbaren.',
        exampleEs: 'Me gustaría concertar una cita con el médico.'
      },
      {
        id: 'g2',
        article: 'die',
        word: 'Schmerzen',
        plural: 'die Schmerzen (Plural)',
        translation: 'los dolores (Kopfschmerzen = dolor de cabeza)',
        exampleDe: 'Ich habe seit zwei Tagen starke Halsschmerzen.',
        exampleEs: 'Tengo un fuerte dolor de garganta desde hace dos días.'
      },
      {
        id: 'g3',
        article: 'das',
        word: 'Rezept',
        plural: 'die Rezepte',
        translation: 'la receta médica (y también receta de cocina)',
        exampleDe: 'Der Arzt hat mir ein Rezept für Antibiotika ausgestellt.',
        exampleEs: 'El médico me ha emitido una receta para antibióticos.'
      },
      {
        id: 'g4',
        article: 'die',
        word: 'Apotheke',
        plural: 'die Apotheken',
        translation: 'la farmacia (distinguir de Drogerie)',
        exampleDe: 'Medikamente auf Rezept bekommt man nur in der Apotheke.',
        exampleEs: 'Los medicamentos con receta solo se obtienen en la farmacia.'
      },
      {
        id: 'g5',
        article: 'das',
        word: 'Fieber',
        plural: '-',
        translation: 'la fiebre',
        exampleDe: 'Das Kind hat hohes Fieber und muss im Bett bleiben.',
        exampleEs: 'El niño tiene fiebre alta y debe quedarse en cama.'
      },
      {
        id: 'g6',
        article: 'die',
        word: 'Krankenkasse',
        plural: 'die Krankenkassen',
        translation: 'el seguro médico / caja de salud',
        exampleDe: 'Zeigen Sie bitte Ihre elektronische Gesundheitskarte.',
        exampleEs: 'Muestre por favor su tarjeta sanitaria de la mutua.'
      },
      {
        id: 'g7',
        article: 'die',
        word: 'Besserung',
        plural: '-',
        translation: 'la mejoría (¡Gute Besserung! = ¡Que te mejores!)',
        exampleDe: 'Ich wünsche dir von Herzen gute Besserung!',
        exampleEs: '¡Te deseo de corazón una pronta recuperación!'
      }
    ]
  },

  {
    id: 'sprint_freizeit',
    dayNumber: 6,
    title: '🎭 Tag 6: Freizeit & Ausgehen (Ocio, Cultura y Salir)',
    description: 'Los 7 términos para planear salidas, quedar con amigos y disfrutar del fin de semana.',
    words: [
      {
        id: 'fz1',
        article: 'die',
        word: 'Verabredung',
        plural: 'die Verabredungen',
        translation: 'la quedada / cita entre amigos o conocidos',
        exampleDe: 'Ich habe heute Abend eine Verabredung mit Freunden.',
        exampleEs: 'Tengo una quedada esta noche con amigos.'
      },
      {
        id: 'fz2',
        article: 'das',
        word: 'Konzert',
        plural: 'die Konzerte',
        translation: 'el concierto',
        exampleDe: 'Am Samstag gehen wir auf ein deutsches Indie-Konzert.',
        exampleEs: 'El sábado vamos a un concierto de indie alemán.'
      },
      {
        id: 'fz3',
        article: 'die',
        word: 'Kneipe',
        plural: 'die Kneipen',
        translation: 'el bar tradicional / taberna de barrio',
        exampleDe: 'Lass uns in die gemütliche Kneipe um die Ecke gehen!',
        exampleEs: '¡Vamos al acogedor bar tradicional de la esquina!'
      },
      {
        id: 'fz4',
        article: 'die',
        word: 'Eintrittskarte',
        plural: 'die Eintrittskarten',
        translation: 'la entrada / ticket de acceso a un evento o museo',
        exampleDe: 'Die Eintrittskarten haben wir schon online reserviert.',
        exampleEs: 'Ya hemos reservado las entradas online.'
      },
      {
        id: 'fz5',
        article: 'der',
        word: 'Spaziergang',
        plural: 'die Spaziergänge',
        translation: 'el paseo a pie (hacer un paseo = einen Spaziergang machen)',
        exampleDe: 'Sonntags machen viele Deutsche einen langen Spaziergang.',
        exampleEs: 'Los domingos muchos alemanes dan un largo paseo.'
      },
      {
        id: 'fz6',
        article: 'die',
        word: 'Ausstellung',
        plural: 'die Ausstellungen',
        translation: 'la exposición de arte o fotografía',
        exampleDe: 'Im Museum gibt es eine moderne Fotoausstellung.',
        exampleEs: 'En el museo hay una exposición de fotografía moderna.'
      },
      {
        id: 'fz7',
        article: 'der',
        word: 'Feierabend',
        plural: '-',
        translation: 'el final de la jornada laboral / hora de desconectar',
        exampleDe: 'Schönen Feierabend allerseits!',
        exampleEs: '¡Buen final de jornada a todos!'
      }
    ]
  },

  {
    id: 'sprint_arbeit',
    dayNumber: 7,
    title: '💼 Tag 7: Beruf, Büro & Arbeitswelt (El Trabajo y la Oficina)',
    description: 'Los 7 términos para desenvolverte en un entorno profesional o en la búsqueda de empleo.',
    words: [
      {
        id: 'ab1',
        article: 'die',
        word: 'Bewerbung',
        plural: 'die Bewerbungen',
        translation: 'la solicitud de empleo / candidatura laboral',
        exampleDe: 'Ich habe gestern meine Bewerbung per E-Mail abgeschickt.',
        exampleEs: 'Ayer envié mi solicitud de empleo por correo electrónico.'
      },
      {
        id: 'ab2',
        article: 'das',
        word: 'Vorstellungsgespräch',
        plural: 'die Vorstellungsgespräche',
        translation: 'la entrevista de trabajo',
        exampleDe: 'Mein Vorstellungsgespräch findet nächsten Dienstag statt.',
        exampleEs: 'Mi entrevista de trabajo tiene lugar el próximo martes.'
      },
      {
        id: 'ab3',
        article: 'der',
        word: 'Kollege',
        plural: 'die Kollegen',
        translation: 'el compañero de trabajo (die Kollegin = compañera)',
        exampleDe: 'Meine neuen Kollegen sind hilfsbereit und freundlich.',
        exampleEs: 'Mis nuevos compañeros de trabajo son serviciales y amables.'
      },
      {
        id: 'ab4',
        article: 'die',
        word: 'Besprechung',
        plural: 'die Besprechungen',
        translation: 'la reunión de trabajo (o Meeting)',
        exampleDe: 'Wir haben um 10 Uhr eine wichtige Teambesprechung.',
        exampleEs: 'Tenemos una reunión de equipo importante a las 10.'
      },
      {
        id: 'ab5',
        article: 'das',
        word: 'Gehalt',
        plural: 'die Gehälter',
        translation: 'el sueldo / salario mensual',
        exampleDe: 'Das Gehalt wird immer am Ende des Monats überwiesen.',
        exampleEs: 'El sueldo se transfiere siempre a finales de mes.'
      },
      {
        id: 'ab6',
        article: 'der',
        word: 'Vertrag',
        plural: 'die Verträge',
        translation: 'el contrato (Arbeitsvertrag = contrato laboral)',
        exampleDe: 'Ich habe den neuen Arbeitsvertrag gestern unterschrieben.',
        exampleEs: 'Ayer firmé el nuevo contrato de trabajo.'
      },
      {
        id: 'ab7',
        article: 'die',
        word: 'Erfahrung',
        plural: 'die Erfahrungen',
        translation: 'la experiencia (Berufserfahrung = experiencia profesional)',
        exampleDe: 'Ich bringe mehrjährige Erfahrung im Projektmanagement mit.',
        exampleEs: 'Aporto varios años de experiencia en gestión de proyectos.'
      }
    ]
  }
];
