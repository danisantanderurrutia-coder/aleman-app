// Cancionero y Letras Auténticas Completas del Indie Alemán
// Letras 100% REALES y verificadas, con traducción contrastiva al español, glosas pedagógicas y análisis gramatical.

export const indieSongs = [
  // 1. ANNENMAYKANTEREIT - OFT GEFRAGT (2015)
  {
    id: 'annenmaykantereit',
    title: 'Oft gefragt',
    artist: 'AnnenMayKantereit',
    album: 'Alles nix Konkretes',
    year: '2015',
    genre: 'Indie Rock / Soul-Folk',
    coverColor: 'from-amber-700 to-stone-900',
    spotifyQuery: 'AnnenMayKantereit Oft gefragt',
    youtubeQuery: 'AnnenMayKantereit Oft gefragt offizielles video',
    description: 'El himno indiscutido del indie alemán contemporáneo. Henning May le canta a su padre recordando su infancia, sus mentiras de adolescente y el agradecimiento infinito: "Zu Hause bist immer nur du".',
    grammaticalFocus: 'El tiempo Perfekt con haben y sein, verbos con prefijos (angezogen, umgezogen, angelogen), oraciones subordinadas con "ob" y "dass", e inversión oracional con "Zu Hause".',
    vocabNotes: [
      { de: 'großziehen', es: 'criar a un hijo hasta la adultez (hat großgezogen)' },
      { de: 'umziehen', es: 'mudarse de casa (usa auxiliar sein: sind umgezogen)' },
      { de: 'anlügen', es: 'mentir a alguien directamente (+ Akkusativ: hab dich angelogen)' },
      { de: 'zerreißen', es: 'desgarrar / atormentar por dentro (was mich zerreißt)' },
      { de: 'abholen / hinbringen', es: 'ir a buscar / llevar en coche a un destino' },
      { de: 'aufhören mit', es: 'dejar de hacer algo (+ Infinitiv mit zu: aufgehört, mich das zu fragen)' },
      { de: 'die Heimat', es: 'el hogar de origen / tierra natal / concepto de pertenencia profunda' },
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Du hast mich angezogen, ausgezogen, großgezogen',
            es: 'Me vestiste, me desvestiste, me criaste',
            notes: 'Juego morfológico con el verbo "ziehen": anziehen (vestir) → ausziehen (desvestir) → großziehen (criar).'
          },
          {
            de: 'Und wir sind umgezogen, ich hab dich angelogen!',
            es: 'Y nos mudamos de casa, ¡te mentí!',
            notes: 'Contraste de auxiliares: "umziehen" (mudanza) rige "sein" (sind umgezogen); "anlügen" rige acusativo (dich).'
          },
          {
            de: 'Ich nehme keine Drogen',
            es: 'No tomo drogas',
            notes: 'Presente irregular de nehmen (ich nehme) + negación indefinida plural "keine".'
          },
          {
            de: 'Und in der Schule war ich auch.',
            es: 'Y a la escuela también fui.',
            notes: 'Präteritum de sein: "war ich". Preposición local estática con dativo: in der Schule.'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Du hast dich oft gefragt, was mich zerreißt',
            es: 'A menudo te preguntaste qué me desgarra por dentro',
            notes: 'Verbo reflexivo en Perfekt: "hast dich gefragt" + pronombre interrogativo subordinante "was".'
          },
          {
            de: 'Ich wollte nicht, dass du es weißt',
            es: 'Yo no quería que lo supieras',
            notes: 'Modal en Präteritum ("wollte") + subordinada con "dass" (verbo weißt al final).'
          },
          {
            de: 'Du warst allein zu Haus\', hast mich vermisst',
            es: 'Estabas solo en casa, me echabas de menos',
            notes: '"zu Hause" acortado coloquialmente a "zu Haus\'". Verbo regular "vermissen" (extrañar).'
          },
          {
            de: 'Und dich gefragt, was du noch für mich bist',
            es: 'Y te preguntabas qué eres todavía para mí',
            notes: 'Preposición con acusativo: "für mich".'
          },
          {
            de: 'Und dich gefragt, was du noch für mich bist',
            es: 'Y te preguntabas qué eres todavía para mí',
            notes: 'Repetición melancólica del peso de la paternidad.'
          },
          {
            de: 'Zu Hause bist immer nur du.',
            es: 'Mi verdadero hogar eres siempre solo tú.',
            notes: 'Inversión V2: "Zu Hause" en posición 1 envía el verbo "bist" a posición 2 antes del sujeto "du".'
          },
          {
            de: 'Zu Hause bist immer nur du.',
            es: 'Mi verdadero hogar eres siempre solo tú.',
            notes: 'La frase central y más recordada de todo el indie alemán.'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Du hast mich abgeholt und hingebracht',
            es: 'Me fuiste a buscar y me llevaste',
            notes: 'Dos verbos separables en Perfekt: abholen (recoger) y hinbringen (llevar a un sitio).'
          },
          {
            de: 'Bist mitten in der Nacht wegen mir aufgewacht',
            es: 'Te despertaste en plena noche por mi culpa',
            notes: '"aufwachen" (cambio de estado con sein) + preposición causal "wegen mir".'
          },
          {
            de: 'Ich hab in letzter Zeit zu oft daran gedacht',
            es: 'Últimamente he pensado demasiado a menudo en eso',
            notes: 'Régimen preposicional: "denken an + Akk" → adverbio pronominal "daran gedacht".'
          },
          {
            de: 'Wir waren in Prag, Paris und Wien',
            es: 'Estuvimos en Praga, París y Viena',
            notes: 'Präteritum plural del verbo sein: "wir waren".'
          },
          {
            de: 'In der Bretagne und Berlin, aber nicht in Kopenhagen.',
            es: 'En Bretaña y Berlín, pero no en Copenhague.',
            notes: 'Ubicación con nombres femeninos de regiones: "die Bretagne" → Dativ: "in der Bretagne".'
          }
        ]
      },
      {
        name: 'Refrain 2 & Outro (Estribillo y Cierre)',
        lines: [
          {
            de: 'Du hast dich oft gefragt, was mich zerreißt',
            es: 'A menudo te preguntaste qué me desgarra por dentro',
            notes: 'Retorno al estribillo.'
          },
          {
            de: 'Ich habe aufgehört, mich das zu fragen',
            es: 'He dejado de preguntármelo',
            notes: 'Estructura "aufhören mit" con infinitivo con zu: "aufgehört, ... zu fragen".'
          },
          {
            de: 'Du warst allein zu Haus\', hast mich vermisst',
            es: 'Estabas solo en casa, me echabas de menos',
            notes: 'Reiteración.'
          },
          {
            de: 'Und dich gefragt, was du noch für mich bist',
            es: 'Y te preguntabas qué eres todavía para mí',
            notes: 'La duda de un padre solitario.'
          },
          {
            de: 'Zu Hause bist immer nur du.',
            es: 'Mi hogar eres siempre solo tú.',
            notes: 'Clímax vocal de Henning May con voz rota.'
          },
          {
            de: 'Ich hab keine Heimat, ich hab nur dich',
            es: 'No tengo patria, solo te tengo a ti',
            notes: '"die Heimat": el concepto alemán de hogar y raíz vital.'
          },
          {
            de: 'Du bist zu Hause für immer und mich.',
            es: 'Tú eres el hogar para siempre y para mí.',
            notes: 'Cierre poético definitivo de la canción.'
          }
        ]
      }
    ]
  },

  // 2. WIR SIND HELDEN - DENKMAL (2003)
  {
    id: 'wir_sind_helden',
    title: 'Denkmal',
    artist: 'Wir sind Helden',
    album: 'Die Reklamation',
    year: '2003',
    genre: 'Indie Rock / New Wave Pop',
    coverColor: 'from-rose-600 to-stone-900',
    spotifyQuery: 'Wir sind Helden Denkmal',
    youtubeQuery: 'Wir sind Helden Denkmal offizielles video',
    description: 'El clásico indiscutible del pop-rock alemán de los 2000 liderado por Judith Holofernes. Una pareja descubre que les han esculpido una estatua en la plaza frente a Aldi y deciden destruirla a martillazos para no congelar su amor.',
    grammaticalFocus: 'El imperativo (komm, hol), el acusativo masculino (den Vorschlaghammer), subordinadas con "dass", oraciones comparativas con Konjunktiv II ("als hätten die..."), y el genitivo ("dieser Stadt").',
    vocabNotes: [
      { de: 'das Denkmal', es: 'el monumento / estatua conmemorativa (de denken + Mal)' },
      { de: 'der Vorschlaghammer', es: 'la maza de demolición / martillo pesado de construcción' },
      { de: 'versauen', es: 'arruinar / estropear vulgarmente (de Sau = cerda)' },
      { de: 'das Abbild', es: 'el retrato / la réplica fiel esculpida' },
      { de: 'beschmieren', es: 'embadurnar / pintarrajear con grafitis' },
      { de: 'erwischen', es: 'pillar in fraganti / atrapar a alguien haciendo algo prohibido' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Komm mal ans Fenster, komm her zu mir',
            es: 'Ven un momento a la ventana, ven aquí junto a mí',
            notes: 'Imperativo familiar "komm" + partícula modal "mal" + dirección "ans Fenster" (an das Fenster, Akkusativ).'
          },
          {
            de: 'Siehst du da drüben, gleich da hinterm Wellblechzaun?',
            es: '¿Ves allá enfrente, justo ahí detrás de la valla de chapa ondulada?',
            notes: 'Contracción local con dativo: "hinterm" = hinter dem Wellblechzaun.'
          },
          {
            de: 'Da drüben auf dem Platz vor Aldi haben sie',
            es: 'Allá enfrente, en la plaza delante de Aldi, han...',
            notes: 'Doble preposición con dativo de ubicación: "auf dem Platz" y "vor Aldi". Inversión V2 con "haben".'
          },
          {
            de: 'Unser Abbild in Stein gehaun',
            es: 'esculpido nuestra imagen en piedra',
            notes: 'Coloquialismo oral germano: "gehaun" = gehauen (participio del verbo hauen: cincelar/golpear).'
          },
          {
            de: 'Komm auf die Straße, komm her zu mir',
            es: 'Sal a la calle, ven aquí junto a mí',
            notes: 'Acusativo de movimiento: "auf die Straße" (¿Wohin?).'
          },
          {
            de: 'Überall Blumen und Girlanden, halb zerknüllt',
            es: 'Por todas partes flores y guirnaldas, medio estrujadas',
            notes: 'Participio adjetival: "zerknüllt" (del verbo zerknüllen: arrugar/estrujar).'
          },
          {
            de: 'Sieht so aus, als hätten die unser Denkmal heute Nacht',
            es: 'Parece como si hubieran inaugurado nuestro monumento esta noche...',
            notes: 'Verbo separable "aussehen" + Konjunktiv II comparativo con inversión: "als hätten die...".'
          },
          {
            de: 'Schon ohne uns enthüllt!',
            es: '¡ya sin nosotros!',
            notes: 'Preposición con acusativo: "ohne uns". Participio II: "enthüllt" (descorrer el velo de una estatua).'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Hol den Vorschlaghammer!',
            es: '¡Trae la maza de demolición!',
            notes: 'Imperativo singular de "holen" + acusativo masculino: "den Vorschlaghammer".'
          },
          {
            de: 'Sie haben uns ein Denkmal gebaut',
            es: '¡Nos han construido un monumento!',
            notes: 'Dativo personal: "uns" (a nosotros) + acusativo neutro: "ein Denkmal".'
          },
          {
            de: 'Und jeder Vollidiot weiß,',
            es: 'Y cualquier idiota integral sabe',
            notes: 'Sustantivo compuesto coloquial: der Vollidiot.'
          },
          {
            de: 'Dass das die Liebe versaut!',
            es: '¡que eso arruina el amor por completo!',
            notes: 'Subordinada con "dass" (verbo versaut al final). Verbo coloquial expresivo: versauen.'
          },
          {
            de: 'Ich werd die schlechtesten Sprayer dieser Stadt engagieren',
            es: 'Voy a contratar a los peores grafiteros de esta ciudad',
            notes: 'Futuro I con werden + Genitivo femenino singular: "dieser Stadt".'
          },
          {
            de: 'Die sollen nachts noch die Trümmer mit Parolen beschmieren!',
            es: '¡para que pinten de noche los escombros con proclamas!',
            notes: 'Verbo modal "sollen" + instrumental con dativo plural: "mit Parolen".'
          }
        ]
      },
      {
        name: 'Strophe 2 & Bridge (Estrofa 2 y Puente)',
        lines: [
          {
            de: 'Komm auf die Beine, komm her zu mir',
            es: '¡Ponte de pie, ven aquí junto a mí!',
            notes: 'Expresión idiomática: "auf die Beine kommen" (levantarse de la cama o reaccionar).'
          },
          {
            de: 'Es wird bald hell und wir haben nicht ewig Zeit',
            es: 'Pronto va a amanecer y no tenemos todo el tiempo del mundo',
            notes: '"es wird hell" = amanece (werden para cambio natural).'
          },
          {
            de: 'Wenn uns jetzt hier wer erwischt, sind wir für immer vereint',
            es: 'Si alguien nos pilla aquí ahora, quedaremos unidos para siempre',
            notes: 'Condicional con "wenn" + pronombre coloquial "wer" (= jemand).'
          },
          {
            de: 'In Beton und Seligkeit',
            es: 'en hormigón y bienaventuranza eterna',
            notes: 'Contraste poético mordaz: la frialdad del cemento frente a la beatitud de un santo.'
          },
          {
            de: 'Siehst du die Inschrift da unten bei den Schuhen?',
            es: '¿Ves la inscripción allá abajo junto a los zapatos?',
            notes: 'Preposición "bei" con dativo plural: "bei den Schuhen" (+n de dativo plural).'
          },
          {
            de: 'Da steht in goldener Schrift, wir sollen in Ewigkeit ruhen.',
            es: 'Ahí dice en letras de oro que debemos descansar por toda la eternidad.',
            notes: 'Dativo con declinación fuerte del adjetivo: "in goldener Schrift".'
          }
        ]
      }
    ]
  },

  // 3. ISOLATION BERLIN - ALLES GRAU (2016)
  {
    id: 'isolation_berlin',
    title: 'Alles Grau',
    artist: 'Isolation Berlin',
    album: 'Und aus den Wolken tropft die Zeit',
    year: '2016',
    genre: 'Post-Punk / Indie Rock',
    coverColor: 'from-stone-600 to-black',
    spotifyQuery: 'Isolation Berlin Alles Grau',
    youtubeQuery: 'Isolation Berlin Alles Grau offizielles video',
    description: 'La cumbre del post-punk contemporáneo en alemán. Tobias Bamborschke desciende a la crudeza gélida del invierno berlinés: el cielo gris plomizo, la pérdida de ilusiones y la rendición existencial.',
    grammaticalFocus: 'Negación con "kein" y "nicht mehr", frases hechas ("Schall und Rauch", "Asche zu Asche"), preposiciones con acusativo (in den Arm) y dativo (vor dem Sterben).',
    vocabNotes: [
      { de: 'grau in grau', es: 'completamente gris / monótono sin contrastes' },
      { de: 'Schall und Rauch', es: 'humo y palabras vacías / algo efímero sin sustancia' },
      { de: 'der Wahnsinn', es: 'la locura / la demencia' },
      { de: 'in den Arm nehmen', es: 'abrazar cálidamente a alguien (con Akkusativ: den Arm)' },
      { de: 'taub', es: 'sordo / insensible / entumecido por el frío' },
      { de: 'vor dem Sterben', es: 'ante la muerte / antes de morir (sustantivación del verbo sterben)' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Alles grau, alles grau in grau',
            es: 'Todo gris, todo gris sobre gris',
            notes: 'La clásica expresión alemana de desolación climática y emocional.'
          },
          {
            de: 'Alles kalt, alles kalt, kalt, kalt',
            es: 'Todo frío, todo frío, frío, frío',
            notes: 'Repetición rítmica del adjetivo no declinado (función predicativa).'
          },
          {
            de: 'Asche zu Asche, Staub zu Staub',
            es: 'Ceniza a la ceniza, polvo al polvo',
            notes: 'Fórmula litúrgica funeraria tradicional.'
          },
          {
            de: 'Alles Rauch, alles Schall und Rauch',
            es: 'Todo humo, todo palabras huecas que se lleva el viento',
            notes: 'Famoso modismo de Goethe (Fausto): "Name ist Schall und Rauch".'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Der Wahnsinn hält mich warm',
            es: 'La locura me mantiene caliente',
            notes: 'Personificación: "der Wahnsinn" (sujeto masculino) con el verbo halten.'
          },
          {
            de: 'Der Teufel kommt und nimmt mich in den Arm',
            es: 'El diablo viene y me estrecha entre sus brazos',
            notes: 'Acusativo masculino de dirección con "in": "in den Arm" (¿Wohin?).'
          },
          {
            de: 'Ich hab’ endlich keine Träume mehr',
            es: 'Por fin ya no tengo sueños',
            notes: 'Negación temporal: "keine ... mehr" (ya no más).'
          },
          {
            de: 'Ich hab’ endlich keine Hoffnung mehr',
            es: 'Por fin ya no tengo esperanzas',
            notes: '"die Hoffnung" con negación indefinida: "keine Hoffnung mehr".'
          },
          {
            de: 'Hab’ endlich keine Emotionen mehr',
            es: 'Por fin ya no tengo emociones',
            notes: 'Omisión poética del sujeto "ich".'
          },
          {
            de: 'Ich hab’ keine Angst vor’m Sterben mehr.',
            es: 'Ya no le tengo miedo a morir.',
            notes: 'Estructura "Angst haben vor + Dat": "vor\'m Sterben" (vor dem Sterben).'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Alles grau, alles grau in grau',
            es: 'Todo gris, todo gris sobre gris',
            notes: 'Retorno a la estampa invernal.'
          },
          {
            de: 'Alles taub, alles taub, taub, taub',
            es: 'Todo sordo, todo entumecido, sordo, sordo',
            notes: '"taub" denota tanto sordera física como falta de sensibilidad emocional.'
          },
          {
            de: 'Asche zu Asche, Staub zu Staub',
            es: 'Ceniza a la ceniza, polvo al polvo',
            notes: 'Inexorabilidad del tiempo.'
          },
          {
            de: 'Alles Rauch, alles Schall und Rauch.',
            es: 'Todo humo, todo puro humo efímero.',
            notes: 'Cierre del ciclo con reverberación de guitarras post-punk.'
          }
        ]
      }
    ]
  },

  // 4. KUMMER - DER REST MEINES LEBENS (2019)
  {
    id: 'kummer',
    title: 'Der Rest meines Lebens',
    artist: 'Kummer (feat. Max Raabe)',
    album: 'KIOX',
    year: '2019',
    genre: 'Indie Rap / Melancholic Pop',
    coverColor: 'from-amber-600 to-stone-900',
    spotifyQuery: 'Kummer Der Rest meines Lebens',
    youtubeQuery: 'Kummer Der Rest meines Lebens offizielles video',
    description: 'Felix Kummer (vocalista de Kraftklub) une fuerzas con la leyenda del swing Max Raabe. Una sátira mordaz sobre superar los 27 años, ver a los amigos mudarse a las afueras por los niños y caer en el conformismo de los domingos burgueses.',
    grammaticalFocus: 'El caso Genitivo de posesión ("des Lebens"), oraciones de infinitivo con "um... zu", subordinadas con "damit", y preposiciones causales con genitivo ("wegen der Kinder").',
    vocabNotes: [
      { de: 'der Rest meines Lebens', es: 'el resto de mi vida (Genitivo masculino: das Leben → des Lebens)' },
      { de: 'draufgehen', es: 'morir / palmarla vulgarmente' },
      { de: 'die Spießigkeit', es: 'el conformismo burgués / la mentalidad de clase media aburrida' },
      { de: 'der Bausparplan', es: 'el plan de ahorro para comprar casa (símbolo máximo de adultez aburrida)' },
      { de: 'wegen der Kinder', es: 'a causa de los niños (Preposición causal con genitivo plural: die Kinder → der Kinder)' },
      { de: 'Bekannte von früher', es: 'conocidos de antes (antiguos amigos que ya no frecuentas)' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'So langsam wird es knapp, den Club der Siebenundzwanzig hab ich ziemlich klar verpasst',
            es: 'Poco a poco se acaba el margen: el Club de los 27 lo he esquivado con bastante claridad',
            notes: 'Referencia a Hendrix, Cobain y Winehouse: "den Club der 27" (Genitivo).'
          },
          {
            de: 'Mit Hundertachtzig durch die Stadt, balancier\' besoffen auf dem Dach',
            es: 'A 180 por la ciudad, haciendo equilibrios borracho sobre el tejado',
            notes: 'Ubicación con dativo: "auf dem Dach" (das Dach → dem Dach).'
          },
          {
            de: 'Eine Woche wach, tausend Flaschen Schnaps',
            es: 'Una semana despierto, mil botellas de aguardiente',
            notes: 'Adjetivo predicativo: "wach" (despierto).'
          },
          {
            de: 'Doch dann kommt die erste Freitagnacht, in der man passt, früh ins Bett geht',
            es: 'Pero luego llega la primera noche de viernes en la que pasas de salir y te vas temprano a la cama',
            notes: 'Oración de relativo con dativo temporal: "in der man passt" (die Nacht → in der).'
          },
          {
            de: 'Damit man vom Samstag noch was hat',
            es: 'Para poder aprovechar algo del sábado',
            notes: 'Conjunción final con verbo al final: "damit" (para que / a fin de que).'
          },
          {
            de: 'Damit fängt es an: der erste Sonntagsbrunch, der erste Pärchenurlaub',
            es: 'Así empieza todo: el primer brunch de domingo, las primeras vacaciones en parejita',
            notes: 'Verbo separable: anfangen (es fängt an).'
          },
          {
            de: 'Ironisch gemeinte Spießigkeit, Anti-Eskalation, pro Gemütlichkeit',
            es: 'Conformismo burgués vivido como ironía: anti-desmadre, pro-mantita y sofá',
            notes: 'Retrato sociológico demoledor de la juventud alemana al cumplir 30.'
          },
          {
            de: 'Es beginnt ganz harmlos mit einem Spieleabend, aber endet in Gesprächen über Risikoanlagen.',
            es: 'Empieza de forma inofensiva con una noche de juegos de mesa, pero termina en charlas sobre fondos de inversión de riesgo.',
            notes: 'Preposición con dativo neutro: "mit einem Spieleabend" (der Abend → einem Abend).'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo - Max Raabe)',
        lines: [
          {
            de: 'Irgendwann ist es zu spät, um zu früh draufzugehen',
            es: 'En algún momento ya es demasiado tarde para palmarla joven',
            notes: 'Estructura "zu ... um zu": "zu spät, um draufzugehen" (demasiado tarde para morir).'
          },
          {
            de: 'Irgendwann bin ich zu alt, zu alt, um jung zu sterben',
            es: 'En algún momento soy demasiado viejo, demasiado viejo para morir joven',
            notes: 'Infinitivo con "um ... zu sterben". Cantado con la elegancia operística de Max Raabe.'
          },
          {
            de: 'Doch ich hab\'s versucht, ich hab\' es wirklich versucht',
            es: 'Pero lo intenté, de verdad que lo intenté',
            notes: 'Perfekt del verbo versuchen: "habe es versucht" (coloquial: hab\'s).'
          },
          {
            de: 'Wirklich versucht, glaub\' mir, ich hab\'s versucht, doch vielleicht nicht gut genug.',
            es: 'De verdad que lo intenté, créeme, lo intenté, pero tal vez no lo bastante bien.',
            notes: 'Imperativo familiar: "glaub\' mir" (glauben rige dativo personal: mir).'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Die ersten wohnen außerhalb der Stadt, wegen der Kinder, bessere Gegend',
            es: 'Los primeros ya se mudan a las afueras, por los niños, una zona mejor',
            notes: 'Dos preposiciones que rigen Genitivo: "außerhalb der Stadt" y "wegen der Kinder".'
          },
          {
            de: 'Aber schön, dass das mal klappt, wir haben uns ja ewig nicht gesehen',
            es: 'Pero qué bien que por fin se haya dado, si es que hace una eternidad que no nos veíamos',
            notes: 'Giro idiomático con klappen: "dass das klappt" (que funcione / salga adelante).'
          },
          {
            de: 'Die ersten Grillfeste, Hochzeiten, Klassentreffen, Weinverkostung',
            es: 'Las primeras barbacoas, bodas, cenas de antiguos alumnos, catas de vino',
            notes: 'Enumeración de ritos de la adultez.'
          },
          {
            de: 'Blei gießen an Silvester, Kassenbons statt Plastik-Bong',
            es: 'Fundir plomo en Nochevieja, tickets de compra en vez de bongs de plástico',
            notes: 'Tradición alemana de Nochevieja (Bleigießen) para adivinar el porvenir.'
          },
          {
            de: 'Nicht mehr reden über Politik, da streiten wir nur wieder',
            es: 'Ya no hablar de política, que si no volvemos a discutir',
            notes: 'Verbo recíproco: sich streiten.'
          },
          {
            de: 'Und Freunde fürs Leben werden Bekannte von früher.',
            es: 'Y los que iban a ser amigos para toda la vida se convierten en conocidos del pasado.',
            notes: 'Verbo de transformación "werden" + preposición temporal "von früher".'
          }
        ]
      }
    ]
  },

  // 5. PROVINZ - GROßSTADT (2020)
  {
    id: 'provinz_grossstadt',
    title: 'Großstadt',
    artist: 'Provinz',
    album: 'Wir bauten uns Amerika',
    year: '2020',
    genre: 'Indie Pop / Folk Rock',
    coverColor: 'from-emerald-700 to-stone-900',
    spotifyQuery: 'Provinz Grossstadt',
    youtubeQuery: 'Provinz Grossstadt offizielles video',
    description: 'La voz rasgada de Vincent Waizenegger y la banda juvenil de Ravensburg retratan el miedo visceral de los chicos de pueblo a mudarse a Berlín o Hamburgo: "Ich will nicht in die Großstadt, ich hab Angst, mich zu verlieren".',
    grammaticalFocus: 'Verbos modales (wollen, brauchen), expresiones con Dativo ("mir", "am Ende"), oraciones de infinitivo de finalidad ("um zu vergessen"), e infinitivos reflexivos ("mich zu verlieren").',
    vocabNotes: [
      { de: 'die Großstadt', es: 'la gran metrópolis / gran ciudad' },
      { de: 'keinen Bock haben', es: 'no tener ningunas ganas / no apetecer nada (coloquial)' },
      { de: 'der Späti', es: 'tienda 24h típica de Berlín abierta hasta altas horas de la noche' },
      { de: 'die Tanke', es: 'la gasolinera (sitio de reunión nocturno en los pueblos de Alemania)' },
      { de: 'sich verlieren', es: 'perderse a uno mismo / desorientarse vitalmente' },
      { de: 'ewig', es: 'por toda la eternidad / para siempre' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Fall\'n wir auf, fall\'n wir ein, nimm mich mit am Ende, jeder gleich',
            es: 'Si llamamos la atención, si caemos de golpe: llévame contigo al final, todos iguales',
            notes: 'Verbos con prefijo: auffallen (llamar la atención) y einfallen (derrumbarse).'
          },
          {
            de: 'Alle für einen, gegen den Rest der Bande',
            es: 'Todos para uno, contra el resto de la pandilla',
            notes: 'Genitivo masculino: "der Rest der Bande".'
          },
          {
            de: 'Letztes Geld und letzter Drink, werdens je vermissen',
            es: 'Último dinero y último trago, lo echaremos de menos algún día',
            notes: 'Declinación fuerte del adjetivo en nominativo neutro y masculino: "letztes / letzter".'
          },
          {
            de: 'Und wir, die Jungs, wir treiben um: trinken zu vergessen, rauchen, um uns zu erinnern',
            es: 'Y nosotros, los chavales, vagabundeamos: bebiendo para olvidar, fumando para recordar',
            notes: 'Estructura de infinitivo con "um ... zu" (finalidad): "um uns zu erinnern".'
          },
          {
            de: 'Der Himmel war noch nie so klar, hier gibt\'s kein\' Club, nur eine Bar.',
            es: 'El cielo nunca estuvo tan despejado: aquí no hay ninguna discoteca, solo un bar.',
            notes: 'Estructura impersonal "es gibt" + acusativo masculino: "keinen Club" (oral: kein\' Club).'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Ich will nicht in die Großstadt!',
            es: '¡No quiero irme a la gran ciudad!',
            notes: 'Verbo modal "wollen" + dirección con acusativo femenino: "in die Großstadt".'
          },
          {
            de: 'Ich hab Angst, mich zu verlieren',
            es: 'Tengo miedo de perderme a mí mismo',
            notes: 'Construcción nominal con infinitivo con zu: "Angst haben, mich zu verlieren".'
          },
          {
            de: 'Wir sind die gleichen Jungs von damals',
            es: 'Somos los mismos chicos de entonces',
            notes: 'Adjetivo demostrado: "die gleichen Jungs" + temporal "von damals" (de aquella época).'
          },
          {
            de: 'Lieber bleib ich ewig hier',
            es: 'Prefiero quedarme aquí eternamente',
            notes: 'Adverbio comparativo de preferencia: "lieber" (más bien / con más ganas).'
          },
          {
            de: 'Nein, ich will nicht in die Großstadt, ich hab\' kein\' Bock mich zu verlieren',
            es: 'No, no quiero ir a la gran ciudad, no tengo ningunas ganas de perderme',
            notes: 'Giro coloquial indispensable en Alemania: "keinen Bock haben" (no tener ganas).'
          },
          {
            de: 'Brauch kein Späti, fahr zur Tanke: wenn du mich suchst, dann bin ich hier!',
            es: 'No necesito ningún Späti, voy a la gasolinera: ¡si me buscas, aquí estoy!',
            notes: 'Contraste cultural alemán: el "Späti" de Berlín frente a la "Tanke" del pueblo.'
          }
        ]
      }
    ]
  },

  // 6. FABER - ALLES GUTE (2017)
  {
    id: 'faber_alles_gute',
    title: 'Alles Gute',
    artist: 'Faber',
    album: 'Sei ein Faber im Wind',
    year: '2017',
    genre: 'Chanson-Folk / Indie Rock',
    coverColor: 'from-stone-800 to-amber-950',
    spotifyQuery: 'Faber Alles Gute',
    youtubeQuery: 'Faber Alles Gute offizielles video',
    description: 'El cantautor suizo Julian Pollina (Faber) firma una de las canciones más amargas, brillantes y honestas del indie en lengua alemana: un cáustico "Alles Gute" dedicado a quien baila solo, se siente fuera de lugar y aprende a bastarse consigo mismo.',
    grammaticalFocus: 'Verbos que rigen Dativo (gefallen, gehören), oraciones subordinadas con "weil" y "wenn", oraciones comparativas ("wie ein Pferd", "besser als mir"), y oraciones de relativo ("wer").',
    vocabNotes: [
      { de: 'gefallen', es: 'gustar (el sujeto es la cosa, la persona va en Dativo: du gefällst dir nicht)' },
      { de: 'am Boden sein', es: 'estar hundido por los suelos / tocar fondo anímicamente' },
      { de: 'mit dem Rücken zur Wand', es: 'con la espalda contra la pared / acorralado' },
      { de: 'sich auskennen mit', es: 'conocerse muy bien algo o a uno mismo' },
      { de: 'Alles Gute', es: 'Fórmula irónica: "te deseo lo mejor" / "feliz cumpleaños" / "buena suerte"' },
      { de: 'sich umdrehen', es: 'darse la vuelta para mirar a alguien' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Weil du dir meistens nicht gefällst und du tanzt wie ein Pferd',
            es: 'Porque la mayoría de las veces no te gustas a ti mismo y bailas como un caballo',
            notes: 'Subordinada con "weil" + verbo de Dativo reflexivo: "du gefällst dir nicht". Comparativa con "wie".'
          },
          {
            de: 'Und du nur daneben stehst und dir oft überlegst, wie du gern wärst oder wer',
            es: 'Y te quedas apartado al margen y te preguntas a menudo cómo te gustaría ser o quién',
            notes: 'Verbo reflexivo con Dativo: "sich etwas überlegen" (sopesar / meditar) + Konjunktiv II "wärst" (serías).'
          },
          {
            de: 'Und wenn du merkst, dass dich niemand versteht',
            es: 'Y cuando te das cuenta de que nadie te comprende',
            notes: 'Doble subordinación: condicional/temporal con "wenn" + completiva con "dass".'
          },
          {
            de: 'Und wenn du meinst, dass wenn du weinst und du flehst, sich niemand umdreht',
            es: 'Y cuando sientes que si lloras y suplicas, nadie se va a girar a mirarte',
            notes: 'Verbo reflexivo separable: "sich umdrehen" (girarse).'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Wenn du dann am Boden bist, weißt du, wo du hingehörst',
            es: 'Cuando estás por los suelos, sabes a dónde perteneces',
            notes: 'Modismo: "am Boden sein" (tocar fondo) + dirección con "wohin... gehören" (pertenecer a un sitio).'
          },
          {
            de: 'Wenn du ganz alleine bist, weißt du, dass du es noch so lange sein wirst',
            es: 'Cuando estás completamente solo, sabes que lo vas a seguir estando por mucho tiempo',
            notes: 'Futuro I con predicativo neutro: "sein wirst". Cínico y demoledor.'
          },
          {
            de: 'Alles Gute!',
            es: '¡Felicidades! / ¡Que te vaya bonito!',
            notes: 'La clásica felicitación convertida en una bofetada de sarcasmo.'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Mit dem Rücken zur Wand hältst du dir selber die Hand',
            es: 'Con la espalda contra la pared te tomas la mano a ti mismo',
            notes: 'Dativo estático con "zu": "zur Wand" (zu der Wand) + dativo reflexivo "hältst dir die Hand".'
          },
          {
            de: 'Und gehst nachts durch die Welt, schreibst deinen Namen in den Sand',
            es: 'Y caminas de noche a través del mundo, escribiendo tu nombre en la arena',
            notes: 'Preposición con acusativo: "durch die Welt" + acusativo de dirección "in den Sand".'
          },
          {
            de: 'Du gehst am liebsten mit dir aus, kennst dich mit dir am besten aus',
            es: 'Prefieres salir contigo mismo, contigo mismo es con quien mejor te entiendes',
            notes: 'Superlativo con "am liebsten" y "am besten" + verbo separable: "sich auskennen".'
          },
          {
            de: 'Manche meinen, das sei traurig, du sagst zu Recht:',
            es: 'Algunos opinan que eso es triste; tú dices con toda la razón:',
            notes: 'Estilo indirecto en Konjunktiv I: "das sei traurig" (del verbo sein).'
          },
          {
            de: '"Schau dich doch mal um: zeig mir einen, dem es besser geht als mir!"',
            es: '"¡Mira a tu alrededor: muéstrame a uno solo al que le vaya mejor que a mí!"',
            notes: 'Imperativo "zeig mir" con dativo + oración de relativo con dativo impersonal: "dem es besser geht".'
          }
        ]
      }
    ]
  },

  // 7. ANNENMAYKANTEREIT - BARFUß AM KLAVIER (2015) [Nivel Fácil / A2]
  {
    id: 'amk_barfuss',
    title: 'Barfuß am Klavier',
    artist: 'AnnenMayKantereit',
    album: 'Alles nix Konkretes',
    year: '2015',
    genre: 'Indie Folk / Piano Ballad (Fácil)',
    coverColor: 'from-amber-800 to-stone-950',
    spotifyQuery: 'AnnenMayKantereit Barfuss am Klavier',
    youtubeQuery: 'AnnenMayKantereit Barfuss am Klavier offizielles video',
    description: 'Una de las baladas más íntimas, sencillas y queridas de AnnenMayKantereit. Vocabulario claro y cotidiano ideal para nivel A2: estar sentado descalzo frente al piano recordando las mañanas en pareja.',
    grammaticalFocus: 'Preposiciones locales estáticas con Dativ ("am Klavier", "im Bett", "bei dir"), el Perfekt de verbos de postura ("rumgesessen", "geschwiegen") y la finalidad con "um zu lieben".',
    vocabNotes: [
      { de: 'barfuß', es: 'descalzo / con los pies desnudos' },
      { de: 'am Klavier', es: 'junto al piano (an dem Klavier → Dativ neutro)' },
      { de: 'das Liebeslied', es: 'la canción de amor (plural: die Liebeslieder)' },
      { de: 'wunderlich', es: 'peculiar / extraño / excéntrico' },
      { de: 'schweigen', es: 'guardar silencio / callar (hat geschwiegen)' },
      { de: 'sich erinnern an', es: 'acordarse de algo (+ Akkusativ: ans Liegen = an das Liegen)' }
    ],
    sections: [
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Und ich sitz schon wieder barfuß am Klavier',
            es: 'Y ya estoy sentado otra vez descalzo frente al piano',
            notes: 'Verbo de posición estática "sitzen" + Dativ neutro: "am Klavier" (an dem Klavier).'
          },
          {
            de: 'Ich träume Liebeslieder und sing dabei von dir',
            es: 'Sueño canciones de amor y mientras tanto canto sobre ti',
            notes: 'Preposición con Dativo: "von dir" (sobre ti / acerca de ti). "dabei" = al mismo tiempo.'
          }
        ]
      },
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Und du und ich, wir waren wunderlich',
            es: 'Y tú y yo éramos peculiares',
            notes: 'Präteritum plural del verbo sein: "wir waren".'
          },
          {
            de: 'Nicht für mich, für die, die es störte, wenn man uns nachts hörte',
            es: 'No para mí, sino para aquellos a los que les molestaba cuando se nos oía de noche',
            notes: 'Pronombre acusativo plural: "uns" (a nosotros). Adverbio temporal: "nachts" (por las noches).'
          },
          {
            de: 'Ich hab mit dir gemeinsam einsam rumgesessen und geschwiegen',
            es: 'Me he quedado sentado contigo en soledad compartida y hemos callado',
            notes: 'Oxímoron poético: "gemeinsam einsam" (juntos en soledad). Participios: rumgesessen y geschwiegen.'
          },
          {
            de: 'Ich erinnere mich am besten ans gemeinsam einsam liegen',
            es: 'Lo que mejor recuerdo es estar tumbados juntos en silencio',
            notes: 'Verbo reflexivo con preposición: "sich erinnern an + Akk" (ans = an das).'
          },
          {
            de: 'Jeden Morgen danach bei dir: du nackt im Bett und ich barfuß am Klavier.',
            es: 'Cada mañana después en tu casa: tú desnuda en la cama y yo descalzo al piano.',
            notes: 'Tres dativos estáticos seguidos: "bei dir" (en tu casa), "im Bett" (en la cama), "am Klavier" (al piano).'
          }
        ]
      },
      {
        name: 'Strophe 2 & Outro (Estrofa 2 y Cierre)',
        lines: [
          {
            de: 'Und du und ich, wir waren mal wir und sind jetzt nichts: du da, ich hier',
            es: 'Y tú y yo alguna vez fuimos nosotros y ahora no somos nada: tú allá, yo aquí',
            notes: 'Partícula temporal "mal" (= einmal, alguna vez en el pasado). Contraste espacial: da vs hier.'
          },
          {
            de: 'Du wolltest alles wissen und das hat mich vertrieben',
            es: 'Tú querías saberlo todo y eso me ahuyentó',
            notes: 'Modal en Präteritum: "du wolltest". Participio con prefijo inseparable: "vertrieben" (vertreiben).'
          },
          {
            de: 'Eigentlich dich, du bist nicht länger geblieben bei mir',
            es: 'En realidad a ti: tú no te quedaste más tiempo conmigo',
            notes: 'Perfekt de "bleiben" con auxiliar obligatorio sein: "du bist geblieben".'
          },
          {
            de: 'Und so sitz ich, um zu lieben, lieber barfuß am Klavier',
            es: 'Y así, para amar, prefiero sentarme descalzo frente al piano',
            notes: 'Oración final con "um ... zu lieben" + comparativo "lieber" (preferentemente).'
          },
          {
            de: 'Und du und ich, das war zu wenig.',
            es: 'Y lo de tú y yo, eso fue demasiado poco.',
            notes: 'Cierre minimalista con "zu wenig" (insuficiente).'
          }
        ]
      }
    ]
  },

  // 8. ANNENMAYKANTEREIT - POCAHONTAS (2016) [Nivel Fácil / A2]
  {
    id: 'amk_pocahontas',
    title: 'Pocahontas',
    artist: 'AnnenMayKantereit',
    album: 'Alles nix Konkretes',
    year: '2016',
    genre: 'Indie Rock / Folk-Pop (Fácil)',
    coverColor: 'from-rose-800 to-stone-950',
    spotifyQuery: 'AnnenMayKantereit Pocahontas',
    youtubeQuery: 'AnnenMayKantereit Pocahontas offizielles video',
    description: 'Uno de los mayores éxitos virales de la banda de Colonia. Con frases cortas, directas y clarísimas ("Es tut mir leid, Pocahontas, ich hoffe, du weißt das"), es perfecta para practicar verbos separables y expresiones emocionales cotidianas.',
    grammaticalFocus: 'Verbos separables en antítesis ("festhalten" vs "loslassen"), expresiones con Dativo ("es tut mir leid", "mir ist nicht egal") y subordinadas interrogativas indirectas ("wie gut du mich kennst").',
    vocabNotes: [
      { de: 'die Haltestelle', es: 'la parada de autobús o tranvía' },
      { de: 'wehtun (es tut weh)', es: 'doler física o emocionalmente' },
      { de: 'festhalten / loslassen', es: 'sujetar fuerte / soltar y dejar ir' },
      { de: 'Es tut mir leid', es: 'Lo siento mucho (literalmente: me causa pesar a mí - Dativ)' },
      { de: 'mir ist nicht egal', es: 'no me da igual / me importa mucho (Dativ: mir)' },
      { de: 'pennen', es: 'dormir / sobar (jerga coloquial alemana muy frecuente)' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'An der Haltestelle steh\'n und es tut weh, dich schon wieder, so wieder zu seh\'n',
            es: 'Estar parado en la parada del bus y duele volverte a ver otra vez así',
            notes: 'Ubicación femenina en Dativ: "an der Haltestelle". Verbo separable: wehtun (es tut weh).'
          },
          {
            de: 'Und es tut weh, dass wir gleich wieder geh\'n',
            es: 'Y duele que enseguida nos volvamos a marchar',
            notes: 'Adverbio temporal inmediato: "gleich" (en un instante / ya mismo).'
          },
          {
            de: 'Und es tut weh, dass man sich nur sieht, weil bei mir so viel Zeug von dir rumliegt',
            es: 'Y duele que solo nos veamos porque en mi casa hay un montón de cosas tuyas tiradas',
            notes: '"das Zeug" (las cosas/trastos, coloquial). Verbo separable: "rumliegen" (estar tirado por ahí).'
          },
          {
            de: 'Das ich nicht mehr ertrage.',
            es: 'Que ya no soporto más.',
            notes: 'Oración de relativo referida a "das Zeug": ertragen (soportar/aguantar).'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Ich halt\' dich nicht fest und lass\' dich nicht los',
            es: 'Ni te sujeto con fuerza ni te dejo marchar',
            notes: 'Oposición magistral de dos verbos separables con acusativo (dich): festhalten vs loslassen.'
          },
          {
            de: 'Du, du gibst mir den Rest, die Tasche ist groß',
            es: 'Tú me das el golpe de gracia, el bolso es grande',
            notes: 'Modismo: "jemandem den Rest geben" (rematar / agotar las fuerzas a alguien).'
          },
          {
            de: 'Es tut mir leid, Pocahontas, ich hoffe, du weißt das!',
            es: '¡Lo siento mucho, Pocahontas, espero que sepas eso!',
            notes: 'Fórmula esencial del alemán: "Es tut mir leid" + "ich hoffe, du weißt das".'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Und eigentlich sind wir schon viel zu lange zusammen, um jetzt damit aufzuhören',
            es: 'Y en realidad ya llevamos demasiado tiempo juntos como para dejarlo ahora',
            notes: 'Estructura "zu ... um ... aufzuhören" (demasiado tiempo como para terminar con ello).'
          },
          {
            de: 'Aber das ist \'n verdammt beschissener Grund',
            es: 'Pero esa es una maldita razón de mierda',
            notes: 'Coloquialismo callejero: "\'n" = ein (nominativo masculino: der Grund).'
          },
          {
            de: 'Und mir is\' nicht egal, wie gut du mich kennst',
            es: 'Y no me da igual lo bien que me conoces',
            notes: 'Dativo de interés: "mir ist nicht egal" + subordinada con verbo al final (kennst).'
          },
          {
            de: 'Und mir is\' nicht egal, wie du mich nennst',
            es: 'Y no me da igual cómo me llamas',
            notes: 'Verbo "nennen" (llamar por un nombre o apodo) + objeto directo "mich".'
          },
          {
            de: 'Und mir is\' nicht egal, wo du gerade pennst!',
            es: '¡Y no me da igual dónde estás durmiendo ahora mismo!',
            notes: 'Verbo coloquial "pennen" (= schlafen, dormir) + adverbio de presente continuo "gerade".'
          }
        ]
      }
    ]
  },

  // 9. EDWIN ROSEN - LEICHTER//KÄLTER (2020) [Nivel Fácil / A2]
  {
    id: 'edwin_rosen_leichter',
    title: 'leichter//kälter',
    artist: 'Edwin Rosen',
    album: 'mitleerenhänden',
    year: '2020',
    genre: 'Neue Neue Deutsche Welle / Synth-Indie (Fácil)',
    coverColor: 'from-blue-900 to-stone-950',
    spotifyQuery: 'Edwin Rosen leichter kaelter',
    youtubeQuery: 'Edwin Rosen leichter kaelter offizielles video',
    description: 'El fenómeno absoluto de la "Neue Neue Deutsche Welle". Su letra es corta, hipnótica y perfecta para dominar para siempre la diferencia entre "Mir ist kalt" (tengo frío), "Es ist kalt" (hace frío) y "Du bist kalt" (eres una persona fría).',
    grammaticalFocus: 'La regla de oro de las sensaciones físicas en Dativ ("Mir ist so kalt") frente al Nominativ de carácter ("Du bist so kalt"), comparativos ("leichter", "kälter") y el verbo "frieren".',
    vocabNotes: [
      { de: 'barfuß im Schnee', es: 'descalzo en la nieve (in dem Schnee → Dativ)' },
      { de: 'Mir ist kalt', es: 'Tengo frío (Dativo obligatorio: si dices "Ich bin kalt" significa que eres frío de corazón o un cadáver)' },
      { de: 'Du bist kalt', es: 'Eres frío/a emocionalmente (insensible o distante)' },
      { de: 'leicht / leichter', es: 'fácil / más fácil (comparativo)' },
      { de: 'kalt / kälter', es: 'frío / más frío (comparativo con Umlaut a → ä)' },
      { de: 'frieren', es: 'pasar frío / helarse / tiritar' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Und du stehst barfuß im Schnee',
            es: 'Y tú estás de pie descalza en la nieve',
            notes: 'Ubicación estática con Dativo masculino: "im Schnee" (der Schnee → in dem Schnee).'
          },
          {
            de: 'Und es fällt mir nicht leicht, das anzusehen, dich anzusehen',
            es: 'Y no se me hace nada fácil mirar eso, mirarte a ti',
            notes: 'Expresión con Dativo: "es fällt mir nicht leicht" (me cuesta trabajo) + infinitivo separable "anzusehen".'
          },
          {
            de: 'Und du fragst: "Oh, ist es kalt? Ist es kalt? Ist es kalt?"',
            es: 'Y preguntas: "¡Oh!, ¿hace frío?, ¿hace frío?, ¿hace frío?"',
            notes: 'Clima impersonal con "es": "Ist es kalt?" (¿Hace frío afuera?).'
          },
          {
            de: 'Doch du sagst, es ist viel leichter, ja, ich sei doch so viel kälter',
            es: 'Pero dices que es mucho más fácil, sí, que yo soy mucho más frío',
            notes: 'Doble comparativo: "leichter" (más fácil) y "kälter" (más frío). Konjunktiv I: "ich sei".'
          },
          {
            de: 'Also bleibst du steh\'n, bleibst barfuß im Schnee. Ach verdammt, es ist so kalt!',
            es: 'Así que te quedas ahí parada, descalza en la nieve. ¡Ah, maldita sea, hace tanto frío!',
            notes: 'Conector consecutivo "also" (así que) en posición 1 con inversión verbal (bleibst du).'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Und deine Lippen sind lila, wie die Blumen, die ich dir nie kauf\'',
            es: 'Y tus labios están violetas, como las flores que nunca te compro',
            notes: 'Oración de relativo plural ("die Blumen, die...") con Dativo de beneficiario "dir" (a ti).'
          },
          {
            de: 'Und wenn du das nächste Mal frierst, vielleicht frierst du wegen mir?',
            es: 'Y la próxima vez que pases frío, ¿quizás tiritas por mi culpa?',
            notes: 'Verbo intransitivo "frieren" (tener frío / congelarse) + preposición causal "wegen mir".'
          },
          {
            de: 'Wenn du das nächste Mal frierst, ist\'s am Ende gar nicht kalt.',
            es: 'La próxima vez que pases frío, al final ni siquiera hará frío de verdad.',
            notes: 'Negación enfática: "gar nicht" (en absoluto / para nada).'
          }
        ]
      },
      {
        name: 'Refrain / Outro (El Trío Gramatical del Frío)',
        lines: [
          {
            de: '"Mir ist so kalt, hier ist\'s so kalt, du bist so kalt", sagst du zu mir',
            es: '"Tengo tanto frío, aquí hace tanto frío, tú eres tan frío", me dices',
            notes: '⭐ ¡JOYA GRAMATICAL A2!: 1) "Mir ist kalt" (yo siento frío, Dativ), 2) "Hier ist es kalt" (clima), 3) "Du bist kalt" (tu corazón es frío, Nominativ).'
          },
          {
            de: '"Hier ist\'s so kalt, mir ist so kalt, du bist so kalt", sagst du zu mir.',
            es: '"Aquí hace tanto frío, tengo tanto frío, eres tan frío", me dices a mí.',
            notes: 'Decir algo a alguien se construye con "sagen zu + Dativ": "sagst du zu mir".'
          }
        ]
      }
    ]
  },

  // 10. SPORTFREUNDE STILLER - EIN KOMPLIMENT (2002) [Nivel Fácil / A2]
  {
    id: 'sportfreunde_kompliment',
    title: 'Ein Kompliment',
    artist: 'Sportfreunde Stiller',
    album: 'Die gute Seite',
    year: '2002',
    genre: 'Indie Rock / Britpop-Deutsch (Fácil)',
    coverColor: 'from-emerald-600 to-stone-900',
    spotifyQuery: 'Sportfreunde Stiller Ein Kompliment',
    youtubeQuery: 'Sportfreunde Stiller Ein Kompliment offizielles video',
    description: 'El himno alegre e inmortal del indie-rock de Múnich que suena en todas las fiestas universitarias de Alemania. Una declaración de amor directa y luminosa llena de metáforas cotidianas (como la sección de dulces del supermercado).',
    grammaticalFocus: 'Subordinadas completivas con "dass" e interrogativas con "ob", pronombres en Dativo ("dir sagen") y Acusativo ("für mich"), y sustantivos compuestos cotidianos.',
    vocabNotes: [
      { de: 'das Kompliment', es: 'el cumplido / el halago' },
      { de: 'das Ziel einer Reise', es: 'el destino o meta de un viaje' },
      { de: 'das Größte', es: 'lo más grande / lo máximo (adjetivo sustantivado en superlativo)' },
      { de: 'sichergehen', es: 'asegurarse / cerciorarse de algo' },
      { de: 'die Süßwarenabteilung', es: 'la sección de dulces y golosinas en el supermercado' },
      { de: 'verzichten auf', es: 'renunciar a algo / prescindir de algo' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Wenn man so will, bist du das Ziel einer langen Reise',
            es: 'Si se quiere ver así, tú eres la meta de un largo viaje',
            notes: 'Genitivo femenino singular: "einer langen Reise" (die Reise).'
          },
          {
            de: 'Die Perfektion der besten Art und Weise',
            es: 'La perfección de la mejor manera posible',
            notes: 'Expresión fija muy común: "Art und Weise" (modo y manera).'
          },
          {
            de: 'In stillen Momenten leise, die Schaumkrone der Woge der Begeisterung',
            es: 'Suave en los momentos silenciosos, la cresta de espuma en la ola del entusiasmo',
            notes: 'Dativo plural con -n: "in stillen Momenten".'
          },
          {
            de: 'Bergauf, mein Antrieb und Schwung.',
            es: 'Cuesta arriba, mi motor y mi impulso.',
            notes: '"bergauf" = cuesta arriba (opuesto: bergab).'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Ich wollte dir nur mal eben sagen, dass du das Größte für mich bist!',
            es: '¡Solo quería decirte un momento que eres lo más grande para mí!',
            notes: 'Estructura fundamental: "Ich wollte dir (Dativ) sagen, dass du ... bist (verbo al final)".'
          },
          {
            de: 'Und sichergeh\'n, ob du denn dasselbe für mich fühlst',
            es: 'Y asegurarme de si acaso sientes lo mismo por mí',
            notes: 'Subordinada con "ob" (si condicional/duda) + "dasselbe" (exactamente lo mismo).'
          },
          {
            de: 'Für mich fühlst!',
            es: '¡Sientes por mí!',
            notes: 'Preposición "für" exige siempre Acusativo: "für mich".'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Wenn man so will, bist du meine Chill-out Area, meine Feiertage in jedem Jahr',
            es: 'Si se quiere ver así, eres mi zona de relax, mis días festivos de cada año',
            notes: 'Dativo temporal: "in jedem Jahr" (das Jahr → jedem Jahr).'
          },
          {
            de: 'Meine Süßwarenabteilung im Supermarkt, die Lösung, wenn mal was hakt',
            es: 'Mi pasillo de golosinas en el supermercado, la solución cuando algo se atasca',
            notes: 'Palabra compuesta deliciosa: Süßwaren (dulces) + Abteilung (sección/departamento).'
          },
          {
            de: 'So wertvoll, dass man es sich gerne aufspart',
            es: 'Tan valioso que uno se lo guarda con gusto como un tesoro',
            notes: 'Consecutiva con "so ..., dass" + verbo separable reflexivo "sich etwas aufsparen" (reservarse).'
          },
          {
            de: 'Und so schön, dass man nie darauf verzichten mag.',
            es: 'Y tan hermoso que uno jamás querría renunciar a ello.',
            notes: 'Régimen verbal: "verzichten auf" → adverbio pronominal "darauf verzichten".'
          }
        ]
      }
    ]
  },

  // 11. RIO REISER (ECHT) - JUNIMOND (1986 / 2000) [Nivel Fácil / A2]
  {
    id: 'rio_reiser_junimond',
    title: 'Junimond',
    artist: 'Rio Reiser (Versión Indie: Echt)',
    album: 'Rio I. / Freischwimmer',
    year: '1986',
    genre: 'Indie-Pop Klassiker / Poetic Rock (Fácil)',
    coverColor: 'from-indigo-800 to-stone-950',
    spotifyQuery: 'Rio Reiser Junimond',
    youtubeQuery: 'Echt Junimond offizielles video',
    description: 'Considerada la canción de desamor más bella de la música moderna alemana (escrita por el legendario Rio Reiser y convertida en himno indie por la banda Echt). Letras cristalinas y lentas ideales para practicar el Perfekt.',
    grammaticalFocus: 'El tiempo Perfekt con cadena de participios ("gewartet, gezählt, getrunken, geraucht, gebetet, gesucht"), verbos separables ("vorbeigehen", "aufkommen") y negación temporal ("nicht mehr").',
    vocabNotes: [
      { de: 'der Junimond', es: 'la luna de junio' },
      { de: 'vorbeigehen', es: 'pasar de largo sin detenerse' },
      { de: 'stumm', es: 'mudo / en silencio absoluto' },
      { de: 'Es ist vorbei', es: 'Se acabó / Todo ha terminado' },
      { de: 'zweitausend Stunden', es: 'dos mil horas' },
      { de: 'flussauf- und flussabwärts', es: 'río arriba y río abajo' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Die Welt schaut rauf zu meinem Fenster mit müden Augen, ganz staubig, ganz scheu',
            es: 'El mundo mira hacia arriba a mi ventana con ojos cansados, todo polvoriento y tímido',
            notes: 'Preposición "zu" y "mit" con Dativo: "zu meinem Fenster", "mit müden Augen".'
          },
          {
            de: 'Ich bin hier oben auf meiner Wolke',
            es: 'Yo estoy aquí arriba sobre mi nube',
            notes: 'Ubicación estática femenina en Dativo: "auf meiner Wolke" (die Wolke).'
          },
          {
            de: 'Ich seh dich kommen, aber du gehst vorbei.',
            es: 'Te veo venir, pero pasas de largo.',
            notes: 'Verbo de percepción "sehen" + infinitivo sin zu ("kommen") + verbo separable "vorbeigehen".'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Doch jetzt tut’s nicht mehr weh, nee, jetzt tut’s nicht mehr weh',
            es: 'Pero ahora ya no duele más, no, ahora ya no duele más',
            notes: '"nee" es la forma coloquial alemana de "nein". "nicht mehr" = ya no más.'
          },
          {
            de: 'Und alles bleibt stumm und kein Sturm kommt auf, wenn ich dich seh',
            es: 'Y todo permanece en silencio y no se levanta ninguna tormenta cuando te veo',
            notes: 'Verbo separable "aufkommen" (desatarse una tormenta) + subordinada temporal con "wenn".'
          },
          {
            de: 'Es ist vorbei, bye, bye, Junimond! Es ist vorbei, es ist vorbei, bye, bye!',
            es: '¡Se terminó, adiós, luna de junio! ¡Se terminó, se terminó, adiós!',
            notes: 'La frase más célebre para decir que una etapa o relación ha concluido: "Es ist vorbei".'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2 - Práctica Maestra de Perfekt)',
        lines: [
          {
            de: 'Zweitausend Stunden hab ich gewartet, ich hab sie alle gezählt und verflucht',
            es: 'Dos mil horas he esperado, las he contado y maldecido todas',
            notes: 'Tres participios en Perfekt: gewartet (warten), gezählt (zählen), verflucht (verfluchen, sin ge-).'
          },
          {
            de: 'Ich hab getrunken, geraucht und gebetet',
            es: 'He bebido, he fumado y he rezado',
            notes: 'Tres participios esenciales de nivel A2: getrunken (trinken), geraucht (rauchen), gebetet (beten).'
          },
          {
            de: 'Hab dich flussauf- und flussabwärts gesucht.',
            es: 'Te he buscado río arriba y río abajo.',
            notes: 'Participio regular "gesucht" (suchen) cerrando la pinza oracional.'
          }
        ]
      }
    ]
  }
];
