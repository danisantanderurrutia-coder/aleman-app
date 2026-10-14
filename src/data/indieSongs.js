// Cancionero y Letras Sincronizadas para Karaoke: Indie Alemán & Indie Rap Alemán
// Con traducción contrastiva al español, glosas pedagógicas y análisis gramatical.

export const indieSongs = [
  {
    id: 'annenmaykantereit',
    title: 'Oft gefragt',
    artist: 'AnnenMayKantereit',
    genre: 'Indie Rock / Soul-Folk',
    year: '2015',
    bpm: 82,
    duration: 68,
    coverColor: 'from-amber-700 to-stone-900',
    description: 'El himno indiscutido del indie alemán contemporáneo. La desgarradora voz de Henning May canta a su padre sobre crecer, tener dudas existenciales y aprender a decir gracias.',
    grammaticalFocus: 'El tiempo Perfekt con haben, partículas modales (doch, gar nicht) y oraciones causales con "weil".',
    vocabNotes: [
      { de: 'oft gefragt', es: 'preguntado a menudo (Perfekt regular: fragen → gefragt)' },
      { de: 'keine Ahnung', es: 'ni idea / ninguna noción' },
      { de: 'zurechtkommen', es: 'apañárselas / salir adelante por cuenta propia' },
      { de: 'festhalten', es: 'aferrarse / sujetar con fuerza (verbo separable: hält fest)' },
    ],
    lyrics: [
      {
        time: 0,
        duration: 4.5,
        de: 'Du hast mich angefasst und hast gesagt...',
        es: 'Me tocaste y me dijiste...',
        notes: 'Perfekt: "hast angefasst" (anfassen = tocar con ternura)'
      },
      {
        time: 4.5,
        duration: 4.5,
        de: 'Ich hab\' keine Ahnung, wie\'s dir geht.',
        es: 'No tengo ni idea de cómo te va.',
        notes: 'Contracciones coloquiales: "hab\'" = habe, "wie\'s" = wie es'
      },
      {
        time: 9.0,
        duration: 5.0,
        de: 'Und ich hab\' keine Ahnung, wo du stehst.',
        es: 'Y no tengo ni idea de en qué punto estás.',
        notes: 'Verbo de posición fija: stehen (Wo? → en qué situación vital te encuentras)'
      },
      {
        time: 14.0,
        duration: 5.5,
        de: 'Du hast mich gefragt, ob ich zurechtkomm\'.',
        es: 'Me preguntaste si me las estoy arreglando.',
        notes: 'Subordinada indirecta con "ob" (si condicional); verbo al final: zurechtkommen'
      },
      {
        time: 19.5,
        duration: 5.0,
        de: 'Und ich hab\' gesagt: "Ich weiß es nicht."',
        es: 'Y yo dije: "No lo sé".',
        notes: 'Verbo irregular modal de saber: wissen (ich weiß, du weißt)'
      },
      {
        time: 24.5,
        duration: 5.5,
        de: 'Ich hab\' keine Antwort auf deine Fragen.',
        es: 'No tengo respuesta para tus preguntas.',
        notes: 'Régimen preposicional: die Antwort AUF + Akkusativ'
      },
      {
        time: 30.0,
        duration: 5.0,
        de: 'Aber ich hab\' dich lieb, weil du da bist.',
        es: 'Pero te quiero con el alma, porque estás ahí.',
        notes: '"lieb haben" = querer con afecto familiar/cercano; "weil" envía el verbo al final'
      },
      {
        time: 35.0,
        duration: 5.5,
        de: 'Du hast mich oft gefragt, wie es mir geht.',
        es: 'Me has preguntado a menudo cómo me va.',
        notes: 'Dativo de interés: "wie geht es MIR?" (¿cómo me va a mí?)'
      },
      {
        time: 40.5,
        duration: 5.5,
        de: 'Du hast mich aufgebaut, wenn ich am Boden lag.',
        es: 'Me levantaste cuando yo estaba tirado por los suelos.',
        notes: 'aufbauen (levantar anímicamente); "wenn" condicional/temporal con Präteritum'
      },
      {
        time: 46.0,
        duration: 6.0,
        de: 'Und du hast mir gesagt, dass alles wieder wird.',
        es: 'Y me dijiste que todo volverá a estar bien.',
        notes: 'Subordinada con "dass"; "werden" en sentido de mejoría y futuro'
      },
      {
        time: 52.0,
        duration: 6.5,
        de: 'Ich danke dir für alles, was du für mich getan hast.',
        es: 'Te agradezco por todo lo que has hecho por mí.',
        notes: 'danken exige DATIVO (dir); tun en Perfekt: getan hast'
      },
      {
        time: 58.5,
        duration: 9.5,
        de: 'Ich sitze hier am Fenster und denk\' an dich.',
        es: 'Estoy sentado aquí junto a la ventana y pienso en ti.',
        notes: 'sitzen (Wo? Dativ: am Fenster); denken AN + Akkusativ (dich)'
      }
    ]
  },
  {
    id: 'kummer',
    title: 'Der Rest meines Lebens',
    artist: 'Kummer (Kraftklub) ft. Fred Rabe',
    genre: 'Indie Rap / Alternative',
    year: '2021',
    bpm: 96,
    duration: 64,
    coverColor: 'from-rose-800 to-zinc-900',
    description: 'Enérgico himno de indie-rap alemán de Felix Kummer junto a Fred Rabe (Giant Rooks). Una explosión lírica sobre soltar las amarras del pasado y vivir el presente sin culpa.',
    grammaticalFocus: 'Genitivo de posesión ("des Lebens"), contracciones del rap callejero y futuro con "werden".',
    vocabNotes: [
      { de: 'der Rest meines Lebens', es: 'el resto de mi vida (Genitivo: das Leben → des Lebens)' },
      { de: 'gar nicht mal so schlecht', es: 'la verdad es que nada mal (litote típica alemana)' },
      { de: 'Bock haben', es: 'tener ganas / apetecer (slang alemán imprescindible: "Ich hab\' Bock")' },
      { de: 'alles hinter sich lassen', es: 'dejar todo atrás' },
    ],
    lyrics: [
      {
        time: 0,
        duration: 4.0,
        de: 'Ich wache auf und die Sonne scheint.',
        es: 'Me despierto y el sol brilla.',
        notes: 'aufwachen = despertarse (separable: wache auf); scheinen = brillar'
      },
      {
        time: 4.0,
        duration: 4.5,
        de: 'Ich hab\' gar keinen Kater, das ist neu.',
        es: 'No tengo ni pizca de resaca, eso es algo nuevo.',
        notes: 'der Kater = gato, pero en coloquial: resaca (Akkusativ: keinen Kater)'
      },
      {
        time: 8.5,
        duration: 4.5,
        de: 'Ich zieh\' die Vorhänge auf und schaue raus.',
        es: 'Abro las cortinas y miro hacia afuera.',
        notes: 'aufziehen = descorrer/abrir; rausschauen = mirar hacia afuera'
      },
      {
        time: 13.0,
        duration: 5.0,
        de: 'Und heute sieht die Stadt gar nicht so hässlich aus.',
        es: 'Y hoy la ciudad no se ve para nada tan fea.',
        notes: 'aussehen = lucir / parecer (sieht ... aus); "gar nicht" = para nada'
      },
      {
        time: 18.0,
        duration: 5.5,
        de: 'Der Rest meines Lebens fängt heute an!',
        es: '¡El resto de mi vida empieza hoy!',
        notes: 'anfangen = comenzar (verbo separable de cambio de estado: fängt an)'
      },
      {
        time: 23.5,
        duration: 5.0,
        de: 'Ich mach\' die Musik laut, so laut ich kann.',
        es: 'Pongo la música alta, tan fuerte como puedo.',
        notes: 'Modalverb: können (ich kann); "laut machen" = subir el volumen'
      },
      {
        time: 28.5,
        duration: 5.5,
        de: 'Ich hab\' keine Zeit mehr für schlechte Laune.',
        es: 'Ya no tengo tiempo para el mal humor.',
        notes: 'die Laune = el humor/ánimo; "keine Zeit mehr" = ya no tener tiempo'
      },
      {
        time: 34.0,
        duration: 5.5,
        de: 'Alle Türen stehen offen, wenn ich will.',
        es: 'Todas las puertas están abiertas de par en par, si yo quiero.',
        notes: 'offenstehen = estar abiertas; "wenn" condicional con wollen (ich will)'
      },
      {
        time: 39.5,
        duration: 5.5,
        de: 'Und ich tanz\' auf dem Asphalt wie ein Idiot.',
        es: 'Y bailo sobre el asfalto como un idiota.',
        notes: 'tanzen auf + Dativ (dem Asphalt)'
      },
      {
        time: 45.0,
        duration: 5.5,
        de: 'Weil das Leben zu kurz für Zweifel ist.',
        es: 'Porque la vida es demasiado corta para tener dudas.',
        notes: 'weil... ist (verbo al final); zu kurz für + Akkusativ Plural'
      },
      {
        time: 50.5,
        duration: 6.0,
        de: 'Ich lass\' die alten Sorgen einfach geh\'n.',
        es: 'Simplemente dejo marchar las viejas preocupaciones.',
        notes: 'lassen + Infinitiv (dejar hacer algo); einfach = simplemente / sin rodeos'
      },
      {
        time: 56.5,
        duration: 7.5,
        de: 'Wir sehen uns morgen, neue Welt!',
        es: '¡Nos vemos mañana, mundo nuevo!',
        notes: 'Pronombre recíproco/reflexivo: "wir sehen uns" (nos vemos)'
      }
    ]
  },
  {
    id: 'provinz',
    title: 'Zimmer',
    artist: 'Provinz',
    genre: 'German Indie Pop',
    year: '2022',
    bpm: 88,
    duration: 60,
    coverColor: 'from-blue-800 to-slate-900',
    description: 'La banda revelación del sur de Alemania con un tema nostálgico sobre la juventud, compartir una habitación pequeña y sentir que el mundo exterior no importa.',
    grammaticalFocus: 'Preposiciones mixtas (in meinem Zimmer = Dativ), verbos de emoción y adjetivos descriptivos.',
    vocabNotes: [
      { de: 'das Zimmer', es: 'la habitación / cuarto (género neutro: das)' },
      { de: 'draußen regnet es', es: 'afuera llueve (verbo impersonal con es)' },
      { de: 'verschwinden', es: 'desaparecer' },
      { de: 'egal sein', es: 'dar igual / no importar (mir ist alles egal)' },
    ],
    lyrics: [
      {
        time: 0,
        duration: 4.5,
        de: 'In meinem kleinen Zimmer brennt noch Licht.',
        es: 'En mi pequeña habitación todavía hay una luz encendida.',
        notes: 'Wechselpräposition: In + Dativ neutro (in meinem kleinen Zimmer)'
      },
      {
        time: 4.5,
        duration: 5.0,
        de: 'Draußen ist es dunkel, doch das stört uns nicht.',
        es: 'Afuera está oscuro, pero eso no nos molesta.',
        notes: 'doch = pero / sin embargo; stören + Akkusativ (stört uns)'
      },
      {
        time: 9.5,
        duration: 5.0,
        de: 'Wir trinken warmen Tee aus einer alten Tasse.',
        es: 'Bebemos té caliente de una taza vieja.',
        notes: 'aus + Dativ femenino: aus einer alten Tasse (desinencia -er)'
      },
      {
        time: 14.5,
        duration: 5.5,
        de: 'Und vergessen für \'nen Moment die ganze Straße.',
        es: 'Y olvidamos por un instante la calle entera.',
        notes: 'für + Akkusativ: \'nen = einen (masculino Akkusativ)'
      },
      {
        time: 20.0,
        duration: 5.0,
        de: 'Erzähl mir was von früher, als wir jung war\'n.',
        es: 'Cuéntame algo de antes, de cuando éramos jóvenes.',
        notes: 'Imperativo: erzähl mir (Dativo); conjunción temporal en pasado: "als"'
      },
      {
        time: 25.0,
        duration: 5.0,
        de: 'Als die Welt noch ein bisschen einfacher schien.',
        es: 'Cuando el mundo todavía parecía un poco más sencillo.',
        notes: 'Comparativo de simple: einfach → einfacher; scheinen en pasado: schien'
      },
      {
        time: 30.0,
        duration: 5.5,
        de: 'Hier drin ist es warm, hier will ich bleiben.',
        es: 'Aquí dentro hace calor, aquí me quiero quedar.',
        notes: 'bleiben = permanecer / quedarse; modalverb: will'
      },
      {
        time: 35.5,
        duration: 5.5,
        de: 'Lass uns die Zeit anhalten und Lieder schreiben.',
        es: 'Detengamos el tiempo y escribamos canciones.',
        notes: 'anhalten = frenar/detener; Lieder schreiben = componer canciones'
      },
      {
        time: 41.0,
        duration: 5.5,
        de: 'Morgen müssen wir wieder raus in den Regen.',
        es: 'Mañana tendremos que salir otra vez a la lluvia.',
        notes: 'raus in den Regen = Wohin? (Akkusativ masculino: in den Regen)'
      },
      {
        time: 46.5,
        duration: 6.0,
        de: 'Aber heute Nacht gehört uns dieser Augenblick.',
        es: 'Pero esta noche nos pertenece este instante.',
        notes: 'gehören exige DATIVO (gehört uns); der Augenblick = el parpadeo / momento'
      },
      {
        time: 52.5,
        duration: 7.5,
        de: 'Bleib einfach hier bei mir bis zum Morgen.',
        es: 'Quédate simplemente aquí conmigo hasta la mañana.',
        notes: 'bei + Dativ (bei mir); bis zu + Dativ (bis zum Morgen)'
      }
    ]
  },
  {
    id: 'lisbeth',
    title: 'Wenn du tanzt',
    artist: 'Von Wegen Lisbeth',
    genre: 'Berlin Indie Pop',
    year: '2016',
    bpm: 110,
    duration: 62,
    coverColor: 'from-emerald-800 to-teal-950',
    description: 'La banda berlinesa de culto con letras mordaces y teclados vintage. Una observación simpática e irónica de una fiesta en Kreuzberg con el uso brillante de partículas y modales.',
    grammaticalFocus: 'Oraciones temporales con "wenn", partículas modales (doch, mal, halt) y vocabulario de vida nocturna.',
    vocabNotes: [
      { de: 'wenn du tanzt', es: 'cuando bailas (verbo conjugado al final)' },
      { de: 'die Kneipe', es: 'el bar / taberna tradicional alemana' },
      { de: 'peinlich', es: 'vergonzoso / que da pena ajena' },
      { de: 'eigentlich', es: 'en realidad / a decir verdad' },
    ],
    lyrics: [
      {
        time: 0,
        duration: 4.5,
        de: 'Du stehst an der Bar mit einem Bier.',
        es: 'Estás en la barra con una cerveza.',
        notes: 'stehen an + Dativ femenino: an der Bar; mit + Dativ: mit einem Bier'
      },
      {
        time: 4.5,
        duration: 4.5,
        de: 'Und schaust dich um, als wärst du nicht von hier.',
        es: 'Y miras a tu alrededor como si no fueras de aquí.',
        notes: 'Konjunktiv II irreal: "als wärst du" = como si fueras'
      },
      {
        time: 9.0,
        duration: 5.0,
        de: 'Die Musik ist laut, der Raum ist voll.',
        es: 'La música está a tope, la sala está llena.',
        notes: 'Adjetivos predicativos (no se declinan tras el verbo sein): laut, voll'
      },
      {
        time: 14.0,
        duration: 5.0,
        de: 'Ich weiß eigentlich gar nicht, was ich sagen soll.',
        es: 'A decir verdad ni siquiera sé qué debería decir.',
        notes: 'Partículas: eigentlich (en realidad) + gar nicht (para nada); sollen'
      },
      {
        time: 19.0,
        duration: 5.0,
        de: 'Aber wenn du tanzt, dann sieht das gut aus.',
        es: 'Pero cuando bailas, la verdad es que te ves genial.',
        notes: 'Correlación: wenn... dann...; aussehen (separado)'
      },
      {
        time: 24.0,
        duration: 5.0,
        de: 'Du machst dir doch keine Sorgen um den Rest.',
        es: 'Al fin y al cabo no te preocupas por lo demás.',
        notes: 'Partícula doch (obviedad afectuosa); sich Sorgen machen UM + Akkusativ'
      },
      {
        time: 29.0,
        duration: 5.5,
        de: 'Komm mal rüber und trink mit mir!',
        es: '¡Pásate un segundo para acá y tómate algo conmigo!',
        notes: 'Imperativo con "mal" para suavizar la invitación cordial ("Komm mal...")'
      },
      {
        time: 34.5,
        duration: 5.0,
        de: 'Es ist viel zu spät, um nach Hause zu geh\'n.',
        es: 'Es demasiado tarde como para volver a casa.',
        notes: 'Infinitivsatz con "um ... zu" (para + infinitivo); nach Hause = hacia casa'
      },
      {
        time: 39.5,
        duration: 5.5,
        de: 'Die Nacht in Berlin ist noch lange nicht vorbei.',
        es: 'La noche en Berlín aún dista mucho de haber acabado.',
        notes: 'vorbei sein = haberse terminado; noch lange nicht = aún para nada'
      },
      {
        time: 45.0,
        duration: 6.0,
        de: 'Und wir tanzen einfach weiter bis zum Licht.',
        es: 'Y nosotros simplemente seguimos bailando hasta la luz del sol.',
        notes: 'weiter- (prefijo de continuidad: weitertanzen); bis zu + Dativ'
      },
      {
        time: 51.0,
        duration: 9.0,
        de: 'Weil Musik die beste Sprache der Welt ist.',
        es: 'Porque la música es el mejor idioma del mundo.',
        notes: 'Superlativo declinado: die beste Sprache; Genitivo: der Welt; ist al final'
      }
    ]
  }
];
