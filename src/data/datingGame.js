// Datos para el simulador conversacional tipo Duolingo: "Flirt & Date A2"
// Integrado con el universo y arquetipos de DateMaster (Indie, Emo/Darks, Punk, Deportiva, Kinky, etc.)

export const datingScenarios = [
  // 1. CLARA - LA CHICA INDIE (Kreuzberg Tandem)
  {
    id: 'date_tandem',
    name: 'Clara',
    age: 23,
    archetype: 'Indie & Bohemio',
    city: 'Berlin (Kreuzberg)',
    role: 'Estudiante de Lenguas & Chica Indie',
    image: 'characters/clara_tandem.jpg',
    location: 'Café Morgenstern (Sprachtandem Meetup)',
    ambience: 'Mesa de madera junto a la ventana. Clara lleva chaqueta vaquera vintage, moño despeinado y tiene su cuaderno de notas abierto.',
    item: {
      name: 'Das Notizbuch',
      article: 'das',
      meaning: 'el cuaderno de notas de vocabulario',
      palette: ['transparent', '#1c1917', '#e11d48', '#ffffff', '#cbd5e1'],
      grid: [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [2, 3, 3, 3, 3, 3, 3, 1],
        [2, 3, 4, 4, 4, 4, 3, 1],
        [2, 3, 4, 4, 4, 4, 3, 1],
        [2, 3, 4, 4, 4, 4, 3, 1],
        [2, 3, 3, 3, 3, 3, 3, 1],
        [2, 3, 3, 3, 3, 3, 3, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'Llegas al evento de intercambio de idiomas y Clara está sentada con un cartel que dice "Suche Spanisch-Partner" (Busco compañero de español).',
        herLine: '¡Hola! Suchst du auch jemanden zum Deutsch und Spanisch üben?',
        herTranslation: '¡Hola! ¿Tú también buscas a alguien para practicar alemán y español?',
        options: [
          {
            german: 'Hallo Clara! Ja, genau. Ich komme aus Südamerika und lerne Deutsch auf Niveau A2. Darf ich mich zu dir setzen?',
            translation: '¡Hola Clara! Sí, exacto. Vengo de Sudamérica y estoy aprendiendo alemán nivel A2. ¿Puedo sentarme contigo?',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Abridor directo y genuino de DateMaster! Clara se ilumina al escuchar tu español nativo.',
            herReply: '¡Qué bien! Dein Deutsch klingt schon super flüssig. Setz dich unbedingt!',
            herReplyEs: '¡Qué bien! Tu alemán ya suena super fluido. ¡Siéntate por favor!'
          },
          {
            german: 'Mein Deutsch ist schlecht und ich habe keine Lust zu sprechen.',
            translation: 'Mi alemán es malo y no tengo ganas de hablar.',
            charmDelta: -30,
            heartDelta: -1,
            feedback: 'Actitud derrotista que arruina el intercambio.',
            herReply: 'Oh... aber hier sind wir doch zum Üben da...',
            herReplyEs: 'Oh... pero si aquí estamos justamente para practicar...'
          },
          {
            german: 'Ja, ich lerne Deutsch.',
            translation: 'Sí, aprendo alemán.',
            charmDelta: +10,
            heartDelta: 0,
            feedback: 'Muy escueto, pero correcto.',
            herReply: 'Schön! Erzähl mir ein bisschen über dich.',
            herReplyEs: '¡Qué bien! Cuéntame un poco sobre ti.'
          }
        ]
      },
      {
        step: 2,
        situation: 'Ves que Clara tiene dificultades con la diferencia entre "por" y "para" en español.',
        herLine: 'Spanische Präpositionen machen mich verrückt! Kannst du mir das kurz erklären?',
        herTranslation: '¡Las preposiciones en español me vuelven loca! ¿Me lo puedes explicar brevemente?',
        options: [
          {
            german: 'Sehr gern! Im Gegenzug erklärst du mir die deutschen Wechselpräpositionen bei einem Tee, abgemacht?',
            translation: '¡Con mucho gusto! A cambio, me explicas las preposiciones mixtas alemanas con un té, ¿trato hecho?',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Técnica de negociación coqueta y cómplice! Clara se ríe y acepta entusiasmada.',
            herReply: 'Haha, ein perfekter Deal! Das machen wir!',
            herReplyEs: '¡Jaja, un trato perfecto! ¡Hagámoslo!'
          },
          {
            german: 'Das ist doch total einfach, verstehst du das etwa nicht?',
            translation: 'Pero si eso es facilísimo, ¿es que no lo entiendes?',
            charmDelta: -35,
            heartDelta: -1,
            feedback: 'Condescendiente y poco empático.',
            herReply: 'Na danke... das war jetzt nicht besonders hilfreich.',
            herReplyEs: 'Pues gracias... eso no ha sido muy útil.'
          }
        ]
      },
      {
        step: 3,
        situation: 'Termina el tiempo oficial del evento de Tandem y recogen las mesas.',
        herLine: 'Die Zeit verging wie im Flug mit dir! Gehst du jetzt schon nach Hause?',
        herTranslation: '¡El tiempo voló contigo! ¿Te vas ya a casa?',
        options: [
          {
            german: 'Noch nicht! Wollen wir noch ein Stück spazieren gehen und auf Spanisch und Deutsch weiterplaudern?',
            translation: '¡Todavía no! ¿Nos damos un paseo y seguimos charlando en español y alemán?',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Transición magistral del contexto formal a una cita real 1 a 1!',
            herReply: 'Sehr gerne! Der Kanal ist gleich um die Ecke. Lass uns gehen!',
            herReplyEs: '¡Con mucho gusto! El canal está aquí al lado. ¡Vamos!'
          },
          {
            german: 'Ja, ich muss schlafen.',
            translation: 'Sí, tengo que dormir.',
            charmDelta: 0,
            heartDelta: 0,
            feedback: 'Desconexión total.',
            herReply: 'Ach so... na dann gute Nacht.',
            herReplyEs: 'Vaya... pues buenas noches.'
          }
        ]
      }
    ]
  },

  // 2. ZOE - LA CHICA EMO / DARKS (Friedrichshain)
  {
    id: 'date_emo',
    name: 'Zoe',
    age: 22,
    archetype: 'Emo / Darks & Misterio',
    city: 'Berlin (Friedrichshain)',
    role: 'Música & Chica Alternativa',
    image: 'characters/zoe_emo.jpg',
    location: 'Vinyl-Bar am Boxhagener Platz',
    ambience: 'Bar tenue con velas, posters de Joy Division y estantes de discos de vinilo. Zoe lleva delineador oscuro, collar gargantilla y mira la carta con pose distante.',
    item: {
      name: 'Die Schallplatte',
      article: 'die',
      meaning: 'el disco de vinilo de post-punk',
      palette: ['transparent', '#1c1917', '#475569', '#cbd5e1', '#b91c1c'],
      grid: [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 2, 2, 2, 2, 1, 0],
        [1, 2, 3, 4, 4, 3, 2, 1],
        [1, 2, 4, 4, 4, 4, 2, 1],
        [1, 2, 4, 4, 4, 4, 2, 1],
        [1, 2, 3, 4, 4, 3, 2, 1],
        [0, 1, 2, 2, 2, 2, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'Zoe está en la barra escuchando el vinilo que gira en el tocadiscos. Parece fría y misteriosa.',
        herLine: '(schaut dich kühl an) Bist du auch wegen der Post-Punk-Musik hier oder hast du dich verlaufen?',
        herTranslation: '(te mira fría) ¿Estás aquí por la música post-punk o es que te has perdido?',
        options: [
          {
            german: 'Weder noch: Die Musik ist genial, aber deine Aura hat meine Neugier geweckt. Ich bin Daniel.',
            translation: 'Ni lo uno ni lo otro: la música es genial, pero tu aura despertó mi curiosidad. Soy Daniel.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Tono magnético y directo de DateMaster! Rompe su fachada defensiva sin ponerte nervioso.',
            herReply: '(ein seltenes Lächeln blitzt auf) Mutige Antwort. Nicht schlecht. Setz dich zu mir.',
            herReplyEs: '(sonríe sutilmente) Respuesta valiente. Nada mal. Siéntate conmigo.'
          },
          {
            german: 'Warum guckst du so böse? Lächle doch mal!',
            translation: '¿Por qué miras tan enfadada? ¡Sonríe un poco!',
            charmDelta: -40,
            heartDelta: -1,
            feedback: '¡Error garrafal! Decirle a una chica darks/emo que sonría arruina la interacción instantáneamente.',
            herReply: 'Sag mir nicht, was ich tun soll. Dreh dich um und geh.',
            herReplyEs: 'No me digas lo que tengo que hacer. Date la vuelta y lárgate.'
          },
          {
            german: 'Hallo, ich mag auch schwarze Kleidung.',
            translation: 'Hola, a mí también me gusta la ropa negra.',
            charmDelta: +10,
            heartDelta: 0,
            feedback: 'Comentario inocente pero algo plano.',
            herReply: 'Schwarz ist eben die ehrlichste Farbe.',
            herReplyEs: 'El negro es simplemente el color más honesto.'
          }
        ]
      },
      {
        step: 2,
        situation: 'El camarero pone un tema de The Cure en el vinilo.',
        herLine: 'Die meisten Leute in dieser Stadt sind so oberflächlich. Was suchst du eigentlich wirklich im Leben?',
        herTranslation: 'La mayoría de la gente en esta ciudad es tan superficial. ¿Qué buscas tú realmente en la vida?',
        options: [
          {
            german: 'Tiefe und echte Leidenschaft. Ich liebe intensive Kunst, ehrliche Gespräche und Menschen mit eigener Meinung.',
            translation: 'Profundidad y pasión real. Amo el arte intenso, las conversaciones honestas y la gente con opinión propia.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Conexión emocional profunda! Zoe asiente con la cabeza y te mira a los ojos fijamente.',
            herReply: 'Interessant... du bist anders als die Typen, die sonst hier rumlaufen.',
            herReplyEs: 'Interesante... eres diferente a los tíos que suelen rondar por aquí.'
          },
          {
            german: 'Ich suche nur Party und viele oberflächliche Kontakte.',
            translation: 'Solo busco fiesta y muchos contactos superficiales.',
            charmDelta: -30,
            heartDelta: -1,
            feedback: 'Confirmaste exactamente lo que ella detesta.',
            herReply: 'Genau das habe ich befürchtet.',
            herReplyEs: 'Justo lo que me temía.'
          }
        ]
      },
      {
        step: 3,
        situation: 'La noche avanza y Zoe apaga su cigarrillo mirando la calle iluminada por neones.',
        herLine: 'Es wird mir hier langsam zu voll. Hast du Lust auf einen nächtlichen Spaziergang durch Friedrichshain?',
        herTranslation: 'Se está llenando demasiado esto. ¿Te apetece dar un paseo nocturno por Friedrichshain?',
        options: [
          {
            german: 'Sehr gern. Zeig mir deine dunkelsten Lieblingsecken in Berlin.',
            translation: 'Con mucho gusto. Muéstrame tus rincones oscuros favoritos en Berlín.',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Química total! Zoe te agarra del brazo y salen juntos a la noche berlinesa.',
            herReply: 'Komm mit, Daniel. Ich kenne eine geheime Dachterrasse.',
            herReplyEs: 'Ven conmigo, Daniel. Conozco una azotea secreta.'
          },
          {
            german: 'Nein, es ist mir zu dunkel draußen.',
            translation: 'No, está demasiado oscuro afuera para mí.',
            charmDelta: -20,
            heartDelta: 0,
            feedback: 'Mataste la vibra nocturna.',
            herReply: 'Dann bleib eben hier. Tschüss.',
            herReplyEs: 'Pues quédate aquí. Adiós.'
          }
        ]
      }
    ]
  },

  // 3. KIRA - LA CHICA PUNK / ALTERNATIVA (RAW-Gelände)
  {
    id: 'date_punk',
    name: 'Kira',
    age: 24,
    archetype: 'Punk & Rebelde',
    city: 'Berlin (RAW-Gelände)',
    role: 'Tatuadora & Baterista',
    image: 'characters/kira_punk.jpg',
    location: 'Cassiopeia Sommergarten (RAW-Gelände)',
    ambience: 'Paredes con graffitis coloridos, música rock de fondo y bancos de madera. Kira tiene pelo rosa neon, chaqueta de cuero con parches y botines.',
    item: {
      name: 'Die Lederjacke',
      article: 'die',
      meaning: 'la chaqueta de cuero con tachuelas',
      palette: ['transparent', '#1c1917', '#e11d48', '#f8fafc', '#64748b'],
      grid: [
        [0, 1, 1, 0, 0, 1, 1, 0],
        [1, 2, 2, 1, 1, 2, 2, 1],
        [1, 2, 3, 2, 2, 3, 2, 1],
        [1, 2, 2, 4, 4, 2, 2, 1],
        [0, 1, 2, 4, 4, 2, 1, 0],
        [0, 1, 2, 2, 2, 2, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'Kira está sentada sobre una mesa de madera apoyando los pies en el banco mientras ajusta las baquetas de su batería.',
        herLine: 'Hey! Guckst du dir meine Tattoos an oder wolltest du mich tatsächlich ansprechen?',
        herTranslation: '¡Hey! ¿Te estás quedando mirando mis tatuajes o es que realmente querías hablarme?',
        options: [
          {
            german: 'Beides: Deine Tattoos sind Kunstwerke, aber deine freche Energie gefällt mir noch besser. Ich bin Daniel!',
            translation: 'Ambas cosas: tus tatuajes son obras de arte, pero tu energía descarada me gusta todavía más. ¡Soy Daniel!',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Respuesta de macho alfa juguetón (Playful Cocky-Funny)! A Kira le encanta que no te achiques.',
            herReply: '(lacht laut) Ha! Endlich mal ein Typ mit Rückgrat! Trink ein Bier mit mir, Daniel.',
            herReplyEs: '(se ríe) ¡Ja! ¡Por fin un tío con agallas! Tómate una cerveza conmigo, Daniel.'
          },
          {
            german: 'Entschuldigung, ich wollte nicht gucken, tut mir leid!',
            translation: 'Disculpa, no quería mirar, ¡lo siento!',
            charmDelta: -30,
            heartDelta: -1,
            feedback: 'Disculparse con timidez te pone en posición sumisa.',
            herReply: 'Entspann dich mal... du musst dich nicht gleich entschuldigen.',
            herReplyEs: 'Relájate un poco... no hace falta que te disculpes enseguida.'
          }
        ]
      },
      {
        step: 2,
        situation: 'Kira te pasa una cerveza fría de botella y chocan los vidrios.',
        herLine: 'Ich spiele heute Abend noch ein Konzert im Club drüben. Hast du überhaupt einen wilden Kern in dir?',
        herTranslation: 'Toco un concierto esta noche en el club de enfrente. ¿Acaso tienes un lado salvaje dentro de ti?',
        options: [
          {
            german: 'Mehr als du denkst! Ich liebe Adrenalin, Live-Musik und spontane Abenteuer ohne Sicherheitsnetz.',
            translation: '¡Más de lo que crees! Amo la adrenalina, la música en vivo y las aventuras espontáneas sin red de seguridad.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Vibra aventurera compartida! Kira te da un empujoncito cómplice en el hombro.',
            herReply: 'Das will ich sehen! Dann kommst du später backstage mit mir.',
            herReplyEs: '¡Eso quiero verlo! Entonces te vienes al backstage conmigo luego.'
          },
          {
            german: 'Nein, ich gehe immer um 21:00 Uhr ins Bett und mag keine laute Musik.',
            translation: 'No, siempre me voy a la cama a las 21:00 y no me gusta la música alta.',
            charmDelta: -35,
            heartDelta: -1,
            feedback: 'Cero compatibilidad punk.',
            herReply: 'Uff... dann bist du hier definitiv falsch.',
            herReplyEs: 'Uff... entonces te has equivocado totalmente de lugar.'
          }
        ]
      },
      {
        step: 3,
        situation: 'Se escucha la prueba de sonido de la batería en el club.',
        herLine: 'Gleich geht der Soundcheck los! Kommst du mit rein oder kneifst du?',
        herTranslation: '¡Ya empieza la prueba de sonido! ¿Entras conmigo o te rajas?',
        options: [
          {
            german: 'Ich kneife nie! Lass uns den Club rocken!',
            translation: '¡Yo nunca me rajo! ¡Vamos a romperla en el club!',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Puntuación perfecta! Kira te toma de la mano y te mete al backstage.',
            herReply: 'So gefällst du mir! Los gehts!',
            herReplyEs: '¡Así me gustas! ¡Vamos!'
          }
        ]
      }
    ]
  },

  // 4. MAYA - LA CHICA DEPORTIVA / FITNESS (BeachMitte)
  {
    id: 'date_sport',
    name: 'Maya',
    age: 23,
    archetype: 'Deportiva & Fitness',
    city: 'Berlin (BeachMitte)',
    role: 'Jugadora de Vóley Playa & Estudiante',
    image: 'characters/maya_sport.jpg',
    location: 'BeachMitte Sandplätze (Mauerpark)',
    ambience: 'Canchas de arena bajo el sol veraniego. Maya está en la red estirándose tras un partido reñido, con el balón bajo el brazo y una toalla.',
    item: {
      name: 'Der Volleyball',
      article: 'der',
      meaning: 'el balón de vóley playa',
      palette: ['transparent', '#1d4ed8', '#facc15', '#ffffff', '#0f172a'],
      grid: [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 2, 2, 3, 3, 1, 0],
        [1, 2, 2, 3, 3, 2, 2, 1],
        [1, 3, 3, 2, 2, 3, 3, 1],
        [1, 3, 3, 2, 2, 3, 3, 1],
        [1, 2, 2, 3, 3, 2, 2, 1],
        [0, 1, 2, 2, 3, 3, 1, 0],
        [0, 0, 1, 1, 1, 1, 0, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'El balón sale de la cancha y rueda hasta tus pies. Maya corre hacia ti secándose el sudor con una sonrisa atlética.',
        herLine: 'Hey! Kannst du mir bitte den Ball zuwerfen? Danke dir!',
        herTranslation: '¡Hey! ¿Me puedes lanzar el balón por favor? ¡Muchas gracias!',
        options: [
          {
            german: 'Hier, bitte! Schöner Aufschlag eben! Fehlt euch noch ein Mitspieler oder darf ich euch danach auf ein kaltes Wasser einladen?',
            translation: '¡Aquí tienes! ¡Buen saque hace un momento! ¿Les falta un jugador o puedo invitarte después a un agua bien fría?',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Elogio deportivo genuino + invitación refrescante! Maya atrapa el balón impresionada.',
            herReply: '(fängt den Ball lächelnd) Danke! Wasser klingt nach diesem Satz wie der Himmel auf Erden!',
            herReplyEs: '(atrapa el balón sonriendo) ¡Gracias! ¡El agua suena a gloria tras este set!'
          },
          {
            german: 'Ich werfe den Ball nicht. Kauf dir einen neuen.',
            translation: 'No te lanzo el balón. Cómprate uno nuevo.',
            charmDelta: -40,
            heartDelta: -1,
            feedback: 'Antipático y absurdo.',
            herReply: 'Was stimmt denn mit dir nicht?!',
            herReplyEs: '¡¿Pero qué te pasa?!'
          }
        ]
      },
      {
        step: 2,
        situation: 'Termina su partido y se sienta en la arena contigo junto a la red.',
        herLine: 'Sport ist für mich die beste Therapie gegen Alltagsstress. Trainierst du auch regelmäßig?',
        herTranslation: 'El deporte es para mí la mejor terapia contra el estrés diario. ¿Tú también entrenas con regularidad?',
        options: [
          {
            german: 'Absolut! Ich gehe mehrmals pro Woche trainieren. Ein starker Körper hält den Kopf fit für neue Herausforderungen.',
            translation: '¡Totalmente! Voy a entrenar varias veces por semana. Un cuerpo fuerte mantiene la mente ágil para nuevos retos.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Mentalidad atlética y disciplina que resuena al 100% con su estilo de vida!',
            herReply: 'Genau meine Philosophie! Man sieht dir auch an, dass du sportlich bist.',
            herReplyEs: '¡Exactamente mi filosofía! Se nota que eres deportista.'
          },
          {
            german: 'Ich liege nur auf der Couch und esse Chips.',
            translation: 'Solo me tiro en el sofá a comer patatas fritas.',
            charmDelta: -25,
            heartDelta: 0,
            feedback: 'Desconexión de intereses.',
            herReply: 'Oh je... das wäre gar nichts für mich.',
            herReplyEs: 'Vaya... eso no va conmigo para nada.'
          }
        ]
      },
      {
        step: 3,
        situation: 'Cae el sol sobre la arena de Mauerpark.',
        herLine: 'Wir trinken drüben an der Strandbar noch eine Schorle. Kommst du mit?',
        herTranslation: 'Vamos a tomarnos un zumo con gas en el chiringuito de enfrente. ¿Te vienes?',
        options: [
          {
            german: 'Sehr gern! Die erste Runde geht auf mich, Maya!',
            translation: '¡Con mucho gusto! ¡La primera ronda corre por mi cuenta, Maya!',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Cierre impecable y caballeroso!',
            herReply: 'Super! Ich wasche mir kurz den Sand ab und bin gleich bei dir!',
            herReplyEs: '¡Genial! ¡Me quito la arena un segundo y voy contigo!'
          }
        ]
      }
    ]
  },

  // 5. ROXANNE - LA CHICA KINKY / ABIERTA SEXUALMENTE (KitKat Club / Bar Nocturno)
  {
    id: 'date_kinky',
    name: 'Roxanne',
    age: 26,
    archetype: 'Abierta Sexualmente & Kinky',
    city: 'Berlin (KitKat Club / Bar)',
    role: 'Artista Visual & Modelo de Performance',
    image: 'characters/roxanne_kinky.jpg',
    location: 'Lounge Bar vor dem Club (Köpenicker Straße)',
    ambience: 'Luces rojas tenues, música electrónica envolvente y copas de champán. Roxanne lleva un corsé elegante, antifaz negro y una copa en la mano.',
    item: {
      name: 'Die Maske',
      article: 'die',
      meaning: 'el antifaz negro de encaje',
      palette: ['transparent', '#1c1917', '#be123c', '#ffffff'],
      grid: [
        [0, 1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 0, 1, 1, 0, 2, 1],
        [1, 0, 0, 1, 1, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 1, 2, 2, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'Roxanne está en la zona lounge del club donde la gente va con looks fetish y elegantes. Te mira fijamente por encima de su antifaz.',
        herLine: '(schaut dich verführerisch an) Du hast einen sehr intensiven Blick... Was fasziniert dich an dieser Nacht?',
        herTranslation: '(te mira seductora) Tienes una mirada muy intensa... ¿Qué te fascina de esta noche?',
        options: [
          {
            german: 'Die Freiheit, keine Masken tragen zu müssen – außer den schönen, die du trägst. Ich bin Daniel.',
            translation: 'La libertad de no tener que llevar máscaras, salvo las bonitas como la tuya. Soy Daniel.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Frase seductora de alta sofisticación de DateMaster! Roxanne sonríe fascinada.',
            herReply: '(lächelt tief) Sehr poetisch... und sehr sexy. Gefällt mir, Daniel.',
            herReplyEs: '(sonríe cómplice) Muy poético... y muy sexy. Me gusta, Daniel.'
          },
          {
            german: 'Hier laufen ja alle nackt rum, das ist ja peinlich!',
            translation: '¡Si aquí todos andan casi desnudos, qué vergüenza!',
            charmDelta: -45,
            heartDelta: -1,
            feedback: 'Juzgar la libertad corporal en la noche berlinesa es el mayor error posible.',
            herReply: 'Wenn du verklemmt bist, bist du im falschen Club.',
            herReplyEs: 'Si eres reprimido, estás en el club equivocado.'
          }
        ]
      },
      {
        step: 2,
        situation: 'Roxanne apoya su copa y se acerca a una distancia de intimidad eléctrica.',
        herLine: 'In Berlin reden viele über Tabulosigkeit, aber die meisten haben Angst vor wahrer Intimität. Wie steht es mit dir?',
        herTranslation: 'En Berlín muchos hablan de no tener tabúes, pero casi todos temen la verdadera intimidad. ¿Qué pasa contigo?',
        options: [
          {
            german: 'Ich habe keine Angst vor Nähe oder Leidenschaft. Wenn Respekt und Anziehung stimmen, gibt es keine Grenzen.',
            translation: 'No tengo miedo a la cercanía ni a la pasión. Cuando el respeto y la atracción encajan, no hay límites.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Valores del pilar kinky de DateMaster (Consentimiento + Pasión libre)! Roxanne te acaricia suavemente el brazo.',
            herReply: 'Ein Mann, der weiß, was er will und respektvoll ist... Eine seltene Mischung.',
            herReplyEs: 'Un hombre que sabe lo que quiere y es respetuoso... Una combinación escasa.'
          },
          {
            german: 'Ich mache nur was meine Mama mir erlaubt.',
            translation: 'Yo solo hago lo que mi mamá me permite.',
            charmDelta: -30,
            heartDelta: -1,
            feedback: 'Mata el deseo sexual al 100%.',
            herReply: 'Ähm... okay...',
            herReplyEs: 'Ehm... vale...'
          }
        ]
      },
      {
        step: 3,
        situation: 'Empieza la sesión de música en la pista principal y el ambiente se vuelve electrizante.',
        herLine: 'Komm mit mir zur Tanzfläche. Lass uns sehen, wie gut wir uns ohne Worte verstehen.',
        herTranslation: 'Ven conmigo a la pista de baile. Veamos qué tan bien nos entendemos sin palabras.',
        options: [
          {
            german: 'Mit dem größten Vergnügen, Roxanne. Führe mich.',
            translation: 'Con el mayor de los placeres, Roxanne. Guíame.',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Cita ganada con máxima química y tensión coqueta!',
            herReply: 'Du wirst diese Nacht nie vergessen, Daniel.',
            herReplyEs: 'Nunca olvidarás esta noche, Daniel.'
          }
        ]
      }
    ]
  },

  // 6. LENA - LA CHICA CHIC & CAFÉ (Kollwitzplatz)
  {
    id: 'date_berlin',
    name: 'Lena',
    age: 24,
    archetype: 'Chic & Urbana',
    city: 'Berlin (Mitte)',
    role: 'Diseñadora gráfica & Amante del café',
    image: 'characters/berlin_date_chic.jpg',
    location: 'Café & Kultur am Kollwitzplatz',
    ambience: 'Café bohemio iluminado por el sol matutino. Lena está sentada sola junto a la ventana saboreando un capuchino.',
    item: {
      name: 'Der Cappuccino',
      article: 'der',
      meaning: 'el capuchino con espuma de avena',
      palette: ['transparent', '#ffffff', '#78350f', '#d97706', '#e7e5e4'],
      grid: [
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 3, 3, 3, 3, 1, 0],
        [1, 3, 2, 2, 2, 2, 3, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [0, 1, 2, 2, 2, 2, 1, 4],
        [0, 0, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'Llegas al café y ves que casi todas las mesas están llenas, excepto una silla libre frente a Lena.',
        herLine: 'Hallo! Suchst du auch einen Platz? Es ist heute ganz schön voll hier.',
        herTranslation: '¡Hola! ¿Tú también buscas asiento? Hoy está bastante lleno por aquí.',
        options: [
          {
            german: 'Entschuldigung, ist dieser Platz hier noch frei? Darf ich mich kurz setzen?',
            translation: 'Disculpa, ¿está libre este asiento? ¿Puedo sentarme un momento?',
            charmDelta: +25,
            heartDelta: 0,
            feedback: '¡Excelente educación y cortesía en A2! Lena te sonríe y retira su bolso.',
            herReply: 'Ja, natürlich! Nimm gerne Platz. Ich warte auf niemanden.',
            herReplyEs: '¡Sí, por supuesto! Toma asiento con gusto. No estoy esperando a nadie.'
          },
          {
            german: 'Hier sitze ich jetzt. Gib mir mal die Speisekarte.',
            translation: 'Aquí me siento ahora. Pásame la carta de menú.',
            charmDelta: -30,
            heartDelta: -1,
            feedback: 'Demasiado brusco e imperativo.',
            herReply: 'Ähm... bitte? Du bist ja nicht gerade besonders höflich.',
            herReplyEs: 'Ehm... ¿perdona? No eres precisamente muy educado.'
          }
        ]
      },
      {
        step: 2,
        situation: 'Miras el objeto situacional sobre la mesa: su taza de capuchino con latte art.',
        herLine: 'Der Kaffee hier schmeckt wirklich fantastisch. Trinkst du auch gerne Cappuccino?',
        herTranslation: 'El café aquí sabe realmente fantástico. ¿A ti también te gusta beber capuchino?',
        options: [
          {
            german: 'Ja, total! Der Cappuccino sieht lecker aus. Könnte ich dir vielleicht noch ein Croissant dazu bestellen?',
            translation: '¡Sí, totalmente! El capuchino tiene una pinta deliciosa. ¿Podría pedirte quizás un cruasán para acompañar?',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Uso magistral del Konjunktiv II de cortesía! A Lena le brillan los ojos.',
            herReply: 'Oh, wie aufmerksam von dir! Ein Schokocroissant wäre ein Traum.',
            herReplyEs: '¡Oh, qué detallista eres! Un cruasán de chocolate sería un sueño.'
          }
        ]
      },
      {
        step: 3,
        situation: 'Es momento de proponer un segundo encuentro antes de marcharte.',
        herLine: 'Es war wirklich schön mit dir! Ich muss aber gleich los zum Atelier.',
        herTranslation: '¡Ha sido realmente agradable contigo! Pero tengo que irme ya hacia el taller.',
        options: [
          {
            german: 'Ich fand es auch super! Hättest du Lust, am Wochenende zusammen spazieren zu gehen? Gibst du mir deine Nummer?',
            translation: '¡A mí también me pareció genial! ¿Te apetecería dar un paseo juntos el fin de semana? ¿Me das tu número?',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Propuesta perfecta en A2!',
            herReply: 'Sehr gerne! Schreib mir einfach bei WhatsApp: 0176-55443322. Bis Samstag!',
            herReplyEs: '¡Con mucho gusto! Escríbeme a WhatsApp. ¡Hasta el sábado!'
          }
        ]
      }
    ]
  },

  // 7. SOPHIE - LA CHICA INTELECTUAL / ACADÉMICA (LMU München)
  {
    id: 'date_munich',
    name: 'Sophie',
    age: 23,
    archetype: 'Intelectual & Académica',
    city: 'München (LMU)',
    role: 'Estudiante de Historia del Arte & Filología',
    image: 'characters/munich_library_date.jpg',
    location: 'Universitätsbibliothek München',
    ambience: 'Biblioteca clásica con mesas de madera noble. Sophie lleva gafas elegantes y está hojeando un gran catálogo de arte.',
    item: {
      name: 'Das Buch',
      article: 'das',
      meaning: 'el libro de arte de Kandinsky',
      palette: ['transparent', '#1e3a8a', '#fbbf24', '#ffffff', '#78350f'],
      grid: [
        [0, 1, 1, 1, 1, 1, 1, 0],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 3, 3, 3, 3, 2, 1],
        [1, 2, 3, 3, 3, 3, 2, 1],
        [1, 2, 3, 3, 3, 3, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 4, 4, 4, 4, 4, 4, 1],
        [0, 1, 1, 1, 1, 1, 1, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'Te sientas en la mesa de enfrente en la biblioteca.',
        herLine: '(flüstert leise) Pssst... hallo! Suchst du auch Fachliteratur für die Hausarbeit?',
        herTranslation: '(susurra en voz baja) Pssst... ¡hola! ¿Tú también buscas bibliografía para el trabajo de curso?',
        options: [
          {
            german: 'Entschuldige die Störung, aber das Buch über den "Blauen Reiter" sieht faszinierend aus. Interessierst du dich für Kunst?',
            translation: 'Disculpa la molestia, pero el libro sobre "Der Blaue Reiter" se ve fascinante. ¿Te interesa el arte?',
            charmDelta: +30,
            heartDelta: 0,
            feedback: '¡Uso perfecto de sich interessieren für!',
            herReply: '(lächelt) Ja, total! Kandinsky und Franz Marc sind meine Lieblingskünstler hier in München.',
            herReplyEs: '(sonríe) ¡Sí, totalmente! Kandinsky y Franz Marc son mis artistas favoritos.'
          }
        ]
      },
      {
        step: 2,
        situation: 'A Sophie se le acaba la tinta del bolígrafo.',
        herLine: 'Mist, mein Stift schreibt nicht mehr... Hast du vielleicht einen Kugelschreiber für mich?',
        herTranslation: 'Vaya, mi bolígrafo ya no escribe... ¿Tienes quizás un bolígrafo para mí?',
        options: [
          {
            german: 'Klar, hier bitte! Du kannst meinen blauen Kugelschreiber gern behalten.',
            translation: '¡Claro, aquí tienes! Puedes quedarte con mi bolígrafo azul si quieres.',
            charmDelta: +30,
            heartDelta: 0,
            feedback: '¡Generoso y natural con el acusativo!',
            herReply: 'Tausend Dank! Du hast gerade meine Zusammenfassung gerettet.',
            herReplyEs: '¡Mil gracias! Acabas de salvar mi resumen.'
          }
        ]
      },
      {
        step: 3,
        situation: 'Sophie cierra el libro y necesita un respiro.',
        herLine: 'Puh, mein Kopf raucht! Ich brauche dringend frische Luft.',
        herTranslation: 'Uff, ¡me echa humo la cabeza! Necesito aire fresco urgentemente.',
        options: [
          {
            german: 'Wie wäre es mit einer kleinen Pause im Englischen Garten? Wir könnten ein Eis essen!',
            translation: '¿Qué te parecería un descanso en el Jardín Inglés? ¡Podríamos tomar un helado!',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Plan inmejorable en Múnich!',
            herReply: 'Das ist die beste Idee des Tages! Lass uns gehen!',
            herReplyEs: '¡Es la mejor idea del día! ¡Vamos!'
          }
        ]
      }
    ]
  },

  // 8. HANNAH - LA CHICA DE VIAJES Y VERANO (Alster Hamburg)
  {
    id: 'date_hamburg',
    name: 'Hannah',
    age: 25,
    archetype: 'Viajera & Relajada',
    city: 'Hamburg (Binnenalster)',
    role: 'Fotógrafa & Amante de los viajes',
    image: 'characters/hamburg_summer_date.jpg',
    location: 'Sonnenterrasse an der Alster',
    ambience: 'Terraza al atardecer junto al lago Alster con veleros de fondo y spritz espumoso.',
    item: {
      name: 'Die Sonnenbrille',
      article: 'die',
      meaning: 'las gafas de sol chic',
      palette: ['transparent', '#1c1917', '#d97706', '#475569'],
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 0],
        [2, 1, 1, 2, 2, 1, 1, 2],
        [2, 3, 1, 2, 2, 3, 1, 2],
        [2, 1, 1, 2, 2, 1, 1, 2],
        [0, 2, 2, 0, 0, 2, 2, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ]
    },
    steps: [
      {
        step: 1,
        situation: 'El atardecer en Hamburgo sobre el agua.',
        herLine: 'Moin moin! Hamburg zeigt sich heute von seiner besten Seite, findest du nicht auch?',
        herTranslation: '¡Moin moin! Hamburgo se muestra hoy en su mejor faceta, ¿no te parece?',
        options: [
          {
            german: 'Moin! Absolut, der Sonnenuntergang über der Alster ist wunderschön – fast so schön wie dein Lächeln.',
            translation: '¡Moin! Totalmente, el atardecer sobre el Alster es precioso, casi tan bonito como tu sonrisa.',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Saludo norteño con piropo elegante!',
            herReply: 'Oh, da weiß aber jemand, wie man charmant ist! Setz dich gerne zu mir.',
            herReplyEs: '¡Oh, vaya, alguien sabe cómo ser encantador! Siéntate conmigo con gusto.'
          }
        ]
      },
      {
        step: 2,
        situation: 'Hannah disfruta de su bebida al sol.',
        herLine: 'Ich liebe diese Sommerabende in Hamburg. Was trinkst du denn Schönes?',
        herTranslation: 'Me encantan estas tardes de verano en Hamburgo. ¿Y tú qué estás tomando de rico?',
        options: [
          {
            german: 'Ich hole mir gerade einen Aperol Spritz. Darf ich mit dir anstoßen? Auf den schönen Abend!',
            translation: 'Iba a pedirme justo un Aperol Spritz. ¿Puedo brindar contigo? ¡Por la bonita tarde!',
            charmDelta: +35,
            heartDelta: 0,
            feedback: '¡Brindis con acusativo impecable!',
            herReply: 'Zum Wohl! Auf einen perfekten Feierabend am Wasser!',
            herReplyEs: '¡Salud! ¡Por un perfecto fin de jornada laboral junto al agua!'
          }
        ]
      },
      {
        step: 3,
        situation: 'Anochece sobre el muelle.',
        herLine: 'Ich wollte später noch zur Elbphilharmonie spazieren.',
        herTranslation: 'Quería pasear más tarde hacia la Filarmónica del Elba.',
        options: [
          {
            german: 'Könnte ich dich begleiten? Ich kenne einen tollen Aussichtspunkt am Hafen!',
            translation: '¿Podría acompañarte? ¡Conozco un mirador genial en el puerto!',
            charmDelta: +40,
            heartDelta: 0,
            feedback: '¡Cierre con iniciativa y cortesía!',
            herReply: 'Abgemacht! Zeig mir deinen Lieblingsplatz. Komm, gehen wir!',
            herReplyEs: '¡Trato hecho! Muéstrame tu rincón favorito. ¡Vamos!'
          }
        ]
      }
    ]
  }
];
