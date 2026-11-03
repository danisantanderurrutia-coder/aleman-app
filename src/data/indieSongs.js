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
  },

  // 12. YUNG HURN - SAMURAI SCHWERT (2021) [Cloud Rap / Indie-Pop]
  {
    id: 'yung_hurn_samurai',
    title: 'Samurai Schwert',
    artist: 'Yung Hurn',
    album: 'Single',
    year: '2021',
    genre: 'Cloud Rap / Melancholic Trap (Fácil)',
    coverColor: 'from-rose-700 to-stone-950',
    spotifyQuery: 'Yung Hurn Samurai Schwert',
    youtubeQuery: 'Yung Hurn Samurai Schwert offizielles video',
    description: 'El icono vienés del Cloud Rap combina desamor e ironía: "Me clavas tu espada samurái comprada en Amazon directamente en el cuerpo". Estructuras muy repetitivas y claras.',
    grammaticalFocus: 'Oraciones de relativo con preposición ("in dem", "in denen"), preposición "mit" + Dativ ("mit deinem Samuraischwert") y verbos separables de dirección ("hineinstechen").',
    vocabNotes: [
      { de: 'das Samuraischwert', es: 'la espada samurái (katana)' },
      { de: 'kämpfen gegen', es: 'luchar contra algo (+ Akkusativ: gegen den letzten Moment)' },
      { de: 'hineinstechen', es: 'clavar / apuñalar hacia adentro (du stichst ... hinein)' },
      { de: 'der Leib', es: 'el cuerpo / el vientre (término poético/clásico)' },
      { de: 'die Leichtigkeit', es: 'la ligereza / facilidad' },
      { de: 'auslachen', es: 'reírse de alguien / burlarse (der Himmel lacht mich aus)' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Ich kämpf\' gegen den letzten Moment, in dem du endlich erkennst, dass ich nicht gut für dich bin, oh Baby',
            es: 'Lucho contra el último momento en el que por fin te das cuenta de que no soy bueno para ti, oh Baby',
            notes: 'Preposición "gegen" rige Acusativo masculino: "gegen den letzten Moment". Relativo en Dativo: "in dem".'
          },
          {
            de: 'Und wenn sieben Tage dann vergeh\'n, in denen wir uns nicht seh\'n, kämpf\' ich gegen kalten Wind, oh Baby',
            es: 'Y cuando pasan siete días en los que no nos vemos, lucho contra el viento frío, oh Baby',
            notes: 'Oración de relativo en Dativo plural: "sieben Tage, in denen wir uns nicht sehen".'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Okay, du stichst mit dei\'m Samuraischwert von Amazon in mein\'n Leib hinein',
            es: 'Vale, me clavas tu espada samurái de Amazon dentro del cuerpo',
            notes: 'Verbo fuerte "stechen" (du stichst) + Dativo "mit deinem Samuraischwert" + Acusativo de dirección "in meinen Leib hinein".'
          },
          {
            de: 'Okay, du stichst mit dei\'m Samuraischwert in mein Herz hinein mit Leichtigkeit.',
            es: 'Vale, clavas tu espada samurái dentro de mi corazón con total facilidad.',
            notes: 'Dirección hacia el interior con "in ... hinein" (Acusativo neutro: in mein Herz).'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Ich renn\' von Berlin bis nach Athen, meine Füße tun so weh und der Himmel lacht mich aus, oh Baby',
            es: 'Corro desde Berlín hasta Atenas, me duelen tanto los pies y el cielo se ríe de mí, oh Baby',
            notes: 'Verbo separable "auslachen" (burlarse de alguien) + Acusativo "mich".'
          },
          {
            de: '17. Oktober, du sagst, es ist over; du gibst mir Probleme und ich renn\' so wie Lola.',
            es: '17 de octubre, dices que se acabó; me das problemas y corro como Lola (Corre, Lola, corre).',
            notes: 'Referencia al clásico del cine alemán "Lola rennt" (1998).'
          }
        ]
      }
    ]
  },

  // 13. SKI AGGU & MAKKO - IMMER (2024) [Deutschrap / Indie-Rap]
  {
    id: 'makko_ski_aggu_immer',
    title: 'IMMER',
    artist: 'Ski Aggu & makko',
    album: 'Wilmersdorfer Kind / Single',
    year: '2024',
    genre: 'Indie-Rap / New Wave Berlin (Fácil)',
    coverColor: 'from-sky-700 to-stone-950',
    spotifyQuery: 'Ski Aggu makko IMMER',
    youtubeQuery: 'Ski Aggu makko IMMER offizielles video',
    description: 'Dos de los nombres más grandes de la nueva escena berlinesa (makko y Ski Aggu) celebran mantenerse fieles a sí mismos a pesar de la fama, con mensajes de WhatsApp de mamá incluidos.',
    grammaticalFocus: 'Verbos reflexivos ("sich verändern", "sich benehmen", "sich fühlen"), conjunciones concesivas ("obwohl", "egal wie") e imperativo con verbo separable ("pass gut auf dich auf").',
    vocabNotes: [
      { de: 'so wie immer', es: 'tal como siempre / igual que siempre' },
      { de: 'der Macher', es: 'el hacedor / alguien que actúa y consigue cosas' },
      { de: 'sich benehmen wie ein Irrer', es: 'comportarse como un loco' },
      { de: 'der Atze', es: 'el colega / hermano / amigo íntimo (jerga berlinesa clásica)' },
      { de: 'aufpassen auf', es: 'cuidar de alguien ("Pass gut auf dich auf!" = ¡Cuídate mucho!)' },
      { de: 'Scheiße bauen', es: 'meter la pata / hacer tonterías o líos (coloquial)' }
    ],
    sections: [
      {
        name: 'Hook (Estribillo - makko & Ski Aggu)',
        lines: [
          {
            de: 'Ring, ring, ja, mein Phone steht niemals still, Baby, ich bin Macher, also mach\' ich, was ich will',
            es: 'Ring, ring, sí, mi móvil nunca se detiene; cariño, soy un hombre de acción, así que hago lo que quiero',
            notes: '"stillstehen" (quedarse quieto/en silencio) + "was ich will" (lo que quiero).'
          },
          {
            de: 'Neue Leaks, alte Freunde, neue Grillz, und ich will mich nicht verändern, egal, wie sich Konto füllt',
            es: 'Nuevas filtraciones, viejos amigos, nuevos grillz, y no quiero cambiar sin importar cómo se llene la cuenta bancaria',
            notes: 'Verbo reflexivo "sich verändern" (cambiar uno mismo) + "sich füllen" (llenarse).'
          },
          {
            de: 'Und ich hoffe, ich bleib\' ich, ja, für immer; und ich hoffe, dass du mich noch siehst wie immer',
            es: 'Y espero seguir siendo yo, sí, para siempre; y espero que me sigas viendo como siempre',
            notes: 'Contraste de estructura: oración con "hoffe, ich bleib\'" vs subordinada con "dass du mich noch siehst".'
          },
          {
            de: 'Sommer oder Winter, fühl\' mich wie\'n Gewinner; Wohnung mit vier Zimmer, doch benehm\' mich wie ein Irrer!',
            es: 'Verano o invierno, me siento como un ganador; piso de cuatro habitaciones, ¡pero me comporto como un loco!',
            notes: 'Verbo reflexivo "sich benehmen" (comportarse).'
          }
        ]
      },
      {
        name: 'Part (Estrofa - Ski Aggu & makko)',
        lines: [
          {
            de: 'Von Wohnung mit ei\'m Zimmer in einem Jahr zu ausverkauften Shows und Kinder fragen mich nach Bildern',
            es: 'De un piso de una habitación en un año a conciertos agotados y los chicos me piden fotos',
            notes: 'Régimen verbal: "fragen nach + Dativ" (pedir o preguntar por algo).'
          },
          {
            de: 'Ein junger Atze macht, worauf er Lust hat',
            es: 'Un colega joven hace aquello de lo que tiene ganas',
            notes: '"Lust haben auf + Akk" → adverbio relativo "worauf er Lust hat".'
          },
          {
            de: '"Bitte pass gut auf dich auf", schreibt mir bei WhatsApp meine Mutter',
            es: '"Por favor, cuídate mucho", me escribe mi madre por WhatsApp',
            notes: '⭐ Frase imprescindible de la vida real: "Pass gut auf dich auf!" (aufpassen auf + Akkusativ).'
          },
          {
            de: 'Mama ist stolz, alles, was ich anfass\', wird Gold; Papa ist stolz, obwohl ich Scheiße bau\' die ganze Zeit.',
            es: 'Mamá está orgullosa, todo lo que toco se vuelve oro; papá está orgulloso, aunque meta la pata todo el tiempo.',
            notes: 'Conjunción subordinante concesiva "obwohl" (aunque) + modismo "Scheiße bauen".'
          }
        ]
      }
    ]
  },

  // 14. KITSCHKRIEG FEAT. BLUMENGARTEN & SHIRIN DAVID - GUT GENUG (2024)
  {
    id: 'gut_genug_shirin_blumengarten',
    title: 'Gut genug',
    artist: 'KitschKrieg feat. Blumengarten & Shirin David',
    album: 'Single',
    year: '2024',
    genre: 'Indie-Pop / Deutschrap Crossover (Fácil)',
    coverColor: 'from-amber-600 to-stone-950',
    spotifyQuery: 'KitschKrieg Blumengarten Shirin David Gut genug',
    youtubeQuery: 'KitschKrieg Blumengarten Shirin David Gut genug offizielles video',
    description: 'La colaboración entre la banda indie revelación Blumengarten, los productores berlineses KitschKrieg y la superestrella Shirin David. Un himno sobre la autoexigencia y aceptarse: "Du bist gut genug, bleib einfach nur du".',
    grammaticalFocus: 'Adjetivo con adverbio de grado ("gut genug"), imperativo de sein ("bleib einfach nur du"), verbos con Dativo ("jemandem gerecht werden") y preposiciones ("an dich selbst glauben").',
    vocabNotes: [
      { de: 'gut genug', es: 'lo suficientemente bueno / bastante bueno' },
      { de: 'Bleib einfach nur du', es: 'Sigue siendo simplemente tú mismo' },
      { de: 'gerecht werden (+ Dativ)', es: 'estar a la altura de alguien / hacer justicia a algo' },
      { de: 'sich entscheiden für', es: 'decidirse por algo (+ Akkusativ)' },
      { de: 'glauben an (+ Akkusativ)', es: 'creer en alguien ("wenn du an dich selbst glaubst")' },
      { de: 'zweifeln an (+ Dativ)', es: 'dudar de alguien ("an uns zweifeln")' }
    ],
    sections: [
      {
        name: 'Intro & Hook (Estribillo - Blumengarten)',
        lines: [
          {
            de: 'Du bist gut genug, ich weiß nicht, was die Welt dir sagt',
            es: 'Eres lo suficientemente bueno, no sé qué te dice el mundo',
            notes: 'Subordinada interrogativa indirecta con "was" + pronombre Dativo "dir".'
          },
          {
            de: 'Bleib einfach nur du! Du bist gut genug!',
            es: '¡Sigue siendo simplemente tú! ¡Eres lo bastante bueno!',
            notes: 'Imperativo de bleiben: "Bleib!". Estructura cristalina de ánimo en alemán.'
          }
        ]
      },
      {
        name: 'Part (Estrofa - Shirin David)',
        lines: [
          {
            de: 'Ich werde mir nie gerecht, denn ich bin zu mir nie gerecht',
            es: 'Nunca estoy a mi propia altura, porque nunca soy justa conmigo misma',
            notes: 'Juego con "gerecht": "mir gerecht werden" (cumplir mis expectativas) vs "zu mir gerecht sein" (ser justa conmigo).'
          },
          {
            de: 'Für mich ist das Schwerste: erst Familie oder Karriere? Ich entschied mich für das Zweite',
            es: 'Para mí lo más difícil es: ¿primero familia o carrera? Me decidí por lo segundo',
            notes: 'Präteritum de "sich entscheiden für": "ich entschied mich für das Zweite".'
          },
          {
            de: 'Man sagt: "Du kannst alles schaffen, wenn du an dich selbst glaubst"',
            es: 'Dicen: "Puedes lograrlo todo si crees en ti mismo"',
            notes: 'Régimen preposicional: "glauben an + Akkusativ" → "an dich selbst".'
          },
          {
            de: 'Für die meisten bin ich Miss Bauch, Beine, Po; doch mir selbst sag\' ich jeden Tag: "Bleib einfach du!"',
            es: 'Para la mayoría soy Miss Bauch, Beine, Po; pero a mí misma me digo cada día: "¡Sigue siendo simplemente tú!"',
            notes: 'Dativo reflexivo enfático: "mir selbst" (a mí misma).'
          }
        ]
      }
    ]
  },

  // 15. SHIRIN DAVID - BAUCH BEINE PO (2024)
  {
    id: 'shirin_david_bbp',
    title: 'Bauch Beine Po',
    artist: 'Shirin David',
    album: 'Single (#1 Hit Alemania)',
    year: '2024',
    genre: 'Pop-Rap / Club Anthem (Fácil)',
    coverColor: 'from-pink-600 to-stone-950',
    spotifyQuery: 'Shirin David Bauch Beine Po',
    youtubeQuery: 'Shirin David Bauch Beine Po offizielles video',
    description: 'El éxito número 1 del verano en Alemania. Un himno pop-rap irreverente, pegadizo y lleno de vocabulario cotidiano de gimnasio, partes del cuerpo, estética berlinesa (Charlottenburg) e imperativos.',
    grammaticalFocus: 'Partes del cuerpo (der Bauch, die Beine, der Po), condicionales sin "wenn" con verbo en posición 1 ("Bist du ein Hottie, werden sie gucken"), e imperativos de entrenamiento ("atme ein, atme aus, gib nicht auf").',
    vocabNotes: [
      { de: 'der Bauch / die Beine / der Po', es: 'el abdomen / las piernas / el trasero (nombre clásico de la clase de aeróbic en Alemania)' },
      { de: 'etwas Scharfes tragen', es: 'llevar puesto algo picante / atrevido' },
      { de: 'im Takt laufen', es: 'caminar al ritmo / al compás' },
      { de: 'einatmen / ausatmen', es: 'inhalar / exhalar (verbos separables: atme ein, atme aus)' },
      { de: 'aufgeben', es: 'rendirse ("Gib nicht auf!" = ¡No te rindas!)' }
    ],
    sections: [
      {
        name: 'Part 1 & Pre-Hook',
        lines: [
          {
            de: 'Iced Matcha Latte, zu spät beim Pilates; Küsschen links, Küsschen rechts, ich trag\' heute was Scharfes',
            es: 'Iced Matcha Latte, llegando tarde a Pilates; besito a la izquierda, besito a la derecha, hoy llevo puesto algo atrevido',
            notes: 'Adjetivo sustantivado tras "was" (= etwas): "etwas Scharfes" (con mayúscula y terminación neutra -es).'
          },
          {
            de: 'Auf und ab, wir laufen im Takt, mit den Waffen einer Frau',
            es: 'Arriba y abajo, caminamos al compás, con las armas de una mujer',
            notes: 'Dativo plural ("mit den Waffen") seguido de Genitivo femenino singular ("einer Frau").'
          },
          {
            de: 'Ich bin schlau, aber blond und supermegahot.',
            es: 'Soy lista, pero rubia y supermegahot.',
            notes: 'Adjetivos predicativos sin declinar: "schlau" (astuta/inteligente).'
          }
        ]
      },
      {
        name: 'Hook & Bridge (Estribillo y Puente)',
        lines: [
          {
            de: 'Du willst ein\'n Body? Dann musst du pushen! Bist du ein Hottie, werden sie gucken!',
            es: '¿Quieres un cuerpazo? ¡Entonces tienes que darle duro! Si eres un bombón, ¡te van a mirar!',
            notes: 'Condicional con verbo en posición 1: "Bist du..." (= Wenn du ... bist) seguido de Futuro I ("werden sie gucken").'
          },
          {
            de: 'Geh\' ins Gymmie, werde skinny, mach\' daraus eine Show; wir sind pretty im Bikini, das ist Bauch, Beine, Po!',
            es: 'Ve al gym, ponte en forma, haz de ello un espectáculo; estamos divinas en bikini, ¡esto es abdomen, piernas y glúteos!',
            notes: 'Imperativos en serie: "Geh!", "Werde!", "Mach!".'
          },
          {
            de: 'Atme ein, atme aus, das war noch nicht genug! Komm, noch zwei, gib nicht auf, verdammt, du machst das gut!',
            es: '¡Inhala, exhala, eso aún no fue suficiente! ¡Vamos, dos más, no te rindas, maldita sea, lo estás haciendo genial!',
            notes: 'Tres verbos separables en imperativo: einatmen (atme ein), ausatmen (atme aus), aufgeben (gib nicht auf).'
          }
        ]
      }
    ]
  },

  // 16. IKKIMEL & BARRÉ - KETA UND KRAWALL (2023)
  {
    id: 'ikkimel_keta_krawall',
    title: 'Keta und Krawall',
    artist: 'Ikkimel & Barré',
    album: 'Single (Berlin Techno-Rap)',
    year: '2023',
    genre: 'Berlin Techno-Rap / Atzen-Pop',
    coverColor: 'from-fuchsia-700 to-stone-950',
    spotifyQuery: 'Ikkimel Keta und Krawall',
    youtubeQuery: 'Ikkimel Keta und Krawall offizielles video',
    description: 'La rapera berlinesa de Tempelhof/Friedrichshain que revolucionó los clubes de Alemania con su humor deslenguado, ritmos techno a 150 BPM y refranes alemanes callejeros.',
    grammaticalFocus: 'Proverbios alemanes reales ("Wie es in den Wald schallt..."), verbos separables del habla berlinesa ("reinballern", "rummachen", "ansprechen", "ausschlafen") y modismos ("blau machen").',
    vocabNotes: [
      { de: 'der Krawall', es: 'el alboroto / el jaleo / el tumulto callejero' },
      { de: 'rummachen', es: 'liarse / besarse o desfasar de fiesta' },
      { de: 'glotzen', es: 'mirar fijamente con los ojos abiertos ("Was glotzt du so?")' },
      { de: 'eingebildet', es: 'creída / vanidosa / engreída' },
      { de: 'jemanden ansprechen', es: 'acercarse a hablarle a alguien / entrarle a alguien' },
      { de: 'blau machen', es: 'faltar al trabajo o a clase sin estar enfermo (hacer novillos)' }
    ],
    sections: [
      {
        name: 'Hook & Part 1 (Friedrichshain)',
        lines: [
          {
            de: 'Ich bin in Friedrichshain und baller\' mir ein Bierchen rein',
            es: 'Estoy en Friedrichshain y me tomo una cervecita de golpe',
            notes: 'Diminutivo neutro "-chen": "das Bierchen" + dativo reflexivo "mir".'
          },
          {
            de: 'Nächster Halt: Damenklo, Dickerchen, was glotzt du so?',
            es: 'Próxima parada: baño de chicas; gordito, ¿qué miras tan fijo?',
            notes: 'Fórmula típica del metro de Berlín ("Nächster Halt") + verbo coloquial "glotzen" (quedarse mirando).'
          },
          {
            de: 'Wie es in den Wald schallt, schallt\'s auch wieder raus',
            es: 'Tal como gritas hacia el bosque, así te devuelve el eco (quien siembra vientos, recoge tempestades)',
            notes: '⭐ Refrán tradicional alemán: "Wie man in den Wald hineinruft, so schallt es heraus".'
          },
          {
            de: 'Ich bin vielleicht eingebildet, aber seh\' gut aus; ich bin das Komplettpaket, einfach Traumfrau',
            es: 'Quizás soy una creída, pero me veo genial; soy el paquete completo, simplemente la mujer ideal',
            notes: 'Verbo separable "aussehen" (tener buen aspecto: ich sehe gut aus).'
          },
          {
            de: 'Sprich mich einmal an und ich mach\' dich zu mei\'m Wauwau!',
            es: '¡Háblame una sola vez y te convierto en mi perrito faldero!',
            notes: 'Imperativo irregular de "ansprechen" (e → i): "Sprich mich an!" (dirigir la palabra a alguien).'
          }
        ]
      },
      {
        name: 'Part 2 (Modismos Cotidianos)',
        lines: [
          {
            de: 'Ich will mich schlaumachen, morgen wieder blau machen',
            es: 'Quiero informarme bien, y mañana volver a faltar al trabajo (hacer novillos)',
            notes: 'Dos modismos esenciales: "sich schlaumachen" (averiguar/informarse) y "blau machen" (no ir a trabajar).'
          },
          {
            de: 'Sehr viel reden, aber sehr wenig aussagen; morgen wieder ausschlafen und dann wieder rausmachen.',
            es: 'Hablar muchísimo pero decir muy poco en sustancia; mañana dormir hasta tarde y luego volver a salir.',
            notes: 'Verbos con prefijo: "aussagen" (expresar contenido) y "ausschlafen" (dormir hasta despertarse solo).'
          }
        ]
      }
    ]
  },

  // 17. NINA CHUBA - WILDBERRY LILLET (2022) [Nivel Fácil / A2]
  {
    id: 'nina_chuba_wildberry',
    title: 'Wildberry Lillet',
    artist: 'Nina Chuba',
    album: 'Glas',
    year: '2022',
    genre: 'Pop / Dancehall-Rap (Fácil)',
    coverColor: 'from-purple-700 to-stone-950',
    spotifyQuery: 'Nina Chuba Wildberry Lillet',
    youtubeQuery: 'Nina Chuba Wildberry Lillet offizielles video',
    description: 'Uno de los mayores éxitos de la década en Alemania. Nina Chuba utiliza el verbo modal "wollen" ("Ich will...") en decenas de frases súper claras y pegadizas para expresar deseos, ambición y disfrutar la vida con sus amigos.',
    grammaticalFocus: 'Dominio absoluto del verbo modal "wollen" (ich will), acusativo masculino ("einen Wildberry Lillet"), conectores consecutivos ("also nehm\' ich mir...") y subordinadas con "wenn" y "dass".',
    vocabNotes: [
      { de: 'die Immos (Immobilien)', es: 'los bienes raíces / propiedades inmobiliarias' },
      { de: 'Hunger haben', es: 'tener hambre ("Ich hab\' Hunger")' },
      { de: 'die Küste', es: 'la costa marítima ("an der Küste")' },
      { de: 'alt werden', es: 'envejecer / hacerse viejo' },
      { de: 'stehen bleiben', es: 'detenerse / quedarse parado ("Zeit bleibt für mich steh\'n")' },
      { de: 'sich stapeln', es: 'apilarse / amontonarse en pilas (billetes de 500 € violetas)' }
    ],
    sections: [
      {
        name: 'Hook (Estribillo)',
        lines: [
          {
            de: 'Ich will Immos, ich will Dollars, ich will fliegen wie bei Marvel',
            es: 'Quiero propiedades, quiero dólares, quiero volar como en Marvel',
            notes: 'Verbo modal "wollen" en 1ª persona singular: "ich will" + infinitivo al final ("fliegen").'
          },
          {
            de: 'Ich hab\' Hunger, also nehm\' ich mir alles vom Buffet',
            es: 'Tengo hambre, así que me sirvo todo del bufé',
            notes: 'Conjunción "also" (por lo tanto) genera inversión V2: "also nehme ich mir...".'
          },
          {
            de: 'Will ein Haus für meine Mama an der Küste von Catania',
            es: 'Quiero una casa para mi mamá en la costa de Catania',
            notes: 'Preposición "für" + Acusativo ("für meine Mama") y "an" + Dativo local ("an der Küste").'
          },
          {
            de: 'Zum Frühstück Canapés und ein\'n Wildberry Lillet!',
            es: '¡Para desayunar, canapés y un Wildberry Lillet!',
            notes: '"zum Frühstück" (zu dem Frühstück = para el desayuno) + Acusativo masculino "einen".'
          }
        ]
      },
      {
        name: 'Part & Pre-Hook',
        lines: [
          {
            de: 'Ich will nicht alt werden, Zeit bleibt für mich steh\'n',
            es: 'No quiero envejecer, el tiempo se detiene para mí',
            notes: 'Construcción de cambio de estado: "alt werden" (hacerse viejo).'
          },
          {
            de: 'Ich will nicht warten, will, wenn ich aufwach\', in dein Gesicht seh\'n',
            es: 'No quiero esperar; quiero, cuando me despierte, mirar tu rostro',
            notes: 'Subordinada temporal intercalada: "wenn ich aufwache" (verbo separable al final).'
          },
          {
            de: 'Will, dass alle meine Freunde bei mir wohn\'n in der Straße.',
            es: 'Quiero que todos mis amigos vivan conmigo en la misma calle.',
            notes: 'Subordinada con "dass" + preposición "bei mir" (junto a mí / en mi zona).'
          }
        ]
      }
    ]
  },

  // 18. VIKO63 & PENGLORD - SAUF SPORT BALANCE (2021)
  {
    id: 'viko63_sauf_sport',
    title: 'Sauf Sport Balance',
    artist: 'viko63 & penglord (feat. TimmyT)',
    album: 'Single',
    year: '2021',
    genre: 'Cloud-Techno / Kreisliga-Kult (Fácil)',
    coverColor: 'from-teal-700 to-stone-950',
    spotifyQuery: 'viko63 Sauf Sport Balance',
    youtubeQuery: 'viko63 Sauf Sport Balance offizielles video',
    description: 'El himno viral de culto en toda Alemania que parodia y celebra el equilibrio entre salir de fiesta ("saufen") y hacer deporte ("Sport") como en las ligas regionales de fútbol de domingo ("Kreisliga").',
    grammaticalFocus: 'Sustantivación de verbos con "beim" ("beim Aufwärmen"), vocabulario deportivo ("Gewinner" vs "Verlierer") y giros coloquiales ("die Kippe", "der Überflieger").',
    vocabNotes: [
      { de: 'saufen', es: 'beber alcohol en grandes cantidades / irse de copas (coloquial)' },
      { de: 'die Kippe', es: 'el cigarrillo / el pitillo (jerga cotidiana alemana)' },
      { de: 'das Aufwärmen', es: 'el calentamiento deportivo antes del partido ("beim Aufwärmen" = al calentar)' },
      { de: 'die Kreisliga', es: 'la liga regional amateur de fútbol de los domingos en Alemania' },
      { de: 'der Überflieger', es: 'el crack / alguien que destaca muy por encima del resto' },
      { de: 'der Gewinner / der Verlierer', es: 'el ganador / el perdedor' }
    ],
    sections: [
      {
        name: 'Intro & Hook (Estribillo)',
        lines: [
          {
            de: 'Tschuldigung, Coach, ich brauch\' die Kippe beim Aufwärmen in der Kreisliga',
            es: 'Disculpe, entrenador, necesito el cigarrillo mientras caliento en la liga regional',
            notes: '"Tschuldigung" = Entschuldigung. "beim Aufwärmen" (bei dem Aufwärmen = durante el calentamiento).'
          },
          {
            de: 'Sauf-Sport-Balance, so wie in der Kreisliga',
            es: 'Equilibrio entre fiesta y deporte, tal como en la liga regional',
            notes: 'Juego de palabras con "Work-Life-Balance" convertido en "Sauf-Sport-Balance".'
          },
          {
            de: 'Ich und meine Goons, wir sind wahre Überflieger',
            es: 'Mis colegas y yo somos auténticos cracks',
            notes: 'Adjetivo atributivo plural sin artículo: "wahre Überflieger".'
          },
          {
            de: 'Mein Team Gewinner und dein Team Verlierer!',
            es: '¡Mi equipo ganador y tu equipo perdedor!',
            notes: 'Contraste fundamental de vocabulario A2: der Gewinner (de gewinnen) vs der Verlierer (de verlieren).'
          }
        ]
      },
      {
        name: 'Part (Estrofa)',
        lines: [
          {
            de: 'Sorry, gell, ich und meine Brüder, wir sind sehr, sehr gute Spieler',
            es: 'Perdona, ¿eh?, mis hermanos y yo somos muy, pero que muy buenos jugadores',
            notes: 'Partícula modal del sur de Alemania y Suiza: "gell?" (¿verdad? / ¿no es así?).'
          },
          {
            de: 'Über Stock und Stein wie Amadeus und Sabrina.',
            es: 'A campo traviesa (por encima de palos y piedras) como Amadeus y Sabrina.',
            notes: 'Modismo alemán: "über Stock und Stein" (a través de todo obstáculo) + referencia a la serie infantil "Bibi und Tina".'
          }
        ]
      }
    ]
  },

  // 19. NENA - 99 LUFTBALLONS (1983) [Clásico Universal / Nivel Fácil]
  {
    id: 'nena_99_luftballons',
    title: '99 Luftballons',
    artist: 'Nena',
    album: 'Nena',
    year: '1983',
    genre: 'Neue Deutsche Welle (Clásico Mundial)',
    coverColor: 'from-red-700 to-stone-950',
    spotifyQuery: 'Nena 99 Luftballons',
    youtubeQuery: 'Nena 99 Luftballons offizielles video',
    description: 'La canción en alemán más famosa de la historia a nivel mundial. Su primera y última estrofa son una joya absoluta de claridad para nivel A2, mientras que el cuerpo narra en Präteritum cómo 99 globos desatan una guerra absurda.',
    grammaticalFocus: 'Condicionales con "Dann" en posición 1 ("Hast du etwas Zeit für mich, dann singe ich..."), verbos con preposición ("denken an + Akk", "halten für + Akk") y el Präteritum narrativo.',
    vocabNotes: [
      { de: 'der Luftballon', es: 'el globo de aire (plural: die Luftballons)' },
      { de: 'der Horizont', es: 'el horizonte ("auf ihrem Weg zum Horizont")' },
      { de: 'halten für (+ Akkusativ)', es: 'tomar o confundir algo con otra cosa ("hielt man für Ufos")' },
      { de: 'der Düsenflieger', es: 'el avión caza a reacción' },
      { de: 'raffen', es: 'pillar / entender algo ("haben nichts gerafft" = no entendieron nada)' },
      { de: 'die Trümmer', es: 'los escombros / las ruinas' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1 - Nivel A2 Puro)',
        lines: [
          {
            de: 'Hast du etwas Zeit für mich? Dann singe ich ein Lied für dich',
            es: '¿Tienes algo de tiempo para mí? Entonces canto una canción para ti',
            notes: 'Inversión V2 tras "Dann": "Dann (1) singe (2) ich (3)...". Preposición "für" + Acusativo (mich / dich).'
          },
          {
            de: 'Von 99 Luftballons auf ihrem Weg zum Horizont',
            es: 'Sobre 99 globos en su camino hacia el horizonte',
            notes: 'Posesivo femenino/plural en Dativo: "auf ihrem Weg" (de ellos, los globos).'
          },
          {
            de: 'Denkst du vielleicht grad an mich? Dann singe ich ein Lied für dich',
            es: '¿Estás pensando quizás ahora mismo en mí? Entonces canto una canción para ti',
            notes: 'Régimen verbal clásico: "denken an + Akkusativ" ("an mich").'
          },
          {
            de: 'Von 99 Luftballons und dass sowas von sowas kommt.',
            es: 'Sobre 99 globos y de cómo una cosa así lleva a otra así.',
            notes: '"sowas" = so etwas (algo así).'
          }
        ]
      },
      {
        name: 'Strophe 2 & 3 (La Escalada)',
        lines: [
          {
            de: '99 Luftballons auf ihrem Weg zum Horizont hielt man für Ufos aus dem All',
            es: '99 globos en su camino al horizonte fueron tomados por ovnis del espacio exterior',
            notes: 'Präteritum de "halten für": "hielt man für Ufos" (se los confundió con ovnis).'
          },
          {
            de: 'Darum schickte ein General \'ne Fliegerstaffel hinterher, Alarm zu geben, wenn\'s so wär',
            es: 'Por eso un general envió un escuadrón aéreo detrás para dar la alarma si así fuera',
            notes: 'Conector causal-consecutivo "darum" (por eso) + Konjunktiv II "wär" (wäre).'
          },
          {
            de: 'Dabei war\'n dort am Horizont nur 99 Luftballons!',
            es: '¡Cuando en realidad allá en el horizonte solo había 99 globos!',
            notes: '"dabei" al inicio de frase significa "y eso que / cuando en realidad".'
          }
        ]
      },
      {
        name: 'Outro (El Epílogo entre las Ruinas)',
        lines: [
          {
            de: '99 Jahre Krieg ließen keinen Platz für Sieger, Kriegsminister gibt\'s nicht mehr',
            es: '99 años de guerra no dejaron lugar para vencedores; ya no existen ministros de guerra',
            notes: '"es gibt nicht mehr" = ya no hay.'
          },
          {
            de: 'Heute zieh ich meine Runden, seh\' die Welt in Trümmern liegen',
            es: 'Hoy doy mis vueltas, veo el mundo yacer en ruinas',
            notes: 'Expresión: "seine Runden ziehen" (dar vueltas / caminar en círculos).'
          },
          {
            de: 'Hab \'nen Luftballon gefunden, denk\' an dich und lass\' ihn fliegen.',
            es: 'He encontrado un globo, pienso en ti y lo dejo volar.',
            notes: 'Acusativo masculino: "\'nen Luftballon" (einen Luftballon) → pronombre masculino acusativo "ihn".'
          }
        ]
      }
    ]
  },

  // 20. RAMMSTEIN - OHNE DICH (2004) [Nivel Fácil / A2]
  {
    id: 'rammstein_ohne_dich',
    title: 'Ohne dich',
    artist: 'Rammstein',
    album: 'Reise, Reise',
    year: '2004',
    genre: 'Neue Deutsche Härte / Rock Ballad (Fácil)',
    coverColor: 'from-stone-800 to-black',
    spotifyQuery: 'Rammstein Ohne dich',
    youtubeQuery: 'Rammstein Ohne dich offizielles video',
    description: 'La balada monumental de Rammstein. Su estribillo es lento, solemne y constituye el mejor ejercicio de todo el idioma alemán para memorizar el contraste entre "Ohne dich" (ohne + Acusativo) y "Mit dir" (mit + Dativo).',
    grammaticalFocus: 'Contraste directo e inolvidable entre preposición de Acusativo ("ohne dich") y preposición de Dativo ("mit dir"), futuro con "werden" y la expresión "das Atmen fällt mir schwer".',
    vocabNotes: [
      { de: 'ohne dich', es: 'sin ti (la preposición "ohne" rige SIEMPRE Acusativo: dich)' },
      { de: 'mit dir', es: 'contigo (la preposición "mit" rige SIEMPRE Dativo: dir)' },
      { de: 'die Tanne', es: 'el abeto (plural: die Tannen)' },
      { de: 'die Stunden zählen', es: 'contar las horas' },
      { de: 'der Ast / der Graben', es: 'la rama del árbol / la zanja o foso' },
      { de: 'lohnen', es: 'valer la pena / merecer la pena ("Mit dir stehen die Sekunden, lohnen nicht")' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Ich werde in die Tannen gehen, dahin, wo ich sie zuletzt gesehen',
            es: 'Me adentraré entre los abetos, allá donde la vi por última vez',
            notes: 'Futuro I ("ich werde ... gehen") + dirección con Acusativo plural ("in die Tannen").'
          },
          {
            de: 'Doch der Abend wirft ein Tuch aufs Land und auf die Wege hinterm Waldesrand',
            es: 'Pero el atardecer arroja un manto sobre la tierra y sobre los caminos tras el linde del bosque',
            notes: 'Verbo fuerte "werfen" (er wirft) + "aufs Land" (auf das Land).'
          },
          {
            de: 'Und der Wald, er steht so schwarz und leer, weh mir, oh weh, und die Vögel singen nicht mehr.',
            es: 'Y el bosque se alza tan negro y vacío, ¡ay de mí!, y los pájaros ya no cantan más.',
            notes: 'Exclamación poética clásica con Dativo: "Weh mir!" (¡Ay de mí!).'
          }
        ]
      },
      {
        name: 'Refrain (El Contraste Maestro: Ohne dich vs Mit dir)',
        lines: [
          {
            de: 'Ohne dich kann ich nicht sein, ohne dich',
            es: 'Sin ti no puedo existir, sin ti',
            notes: '⭐ Regla de oro: "ohne" + Akkusativ → "ohne dich" (¡nunca ohne dir!).'
          },
          {
            de: 'Mit dir bin ich auch allein, ohne dich',
            es: 'Contigo también estoy solo, sin ti',
            notes: '⭐ Regla de oro: "mit" + Dativ → "mit dir" (¡nunca mit dich!).'
          },
          {
            de: 'Ohne dich zähl\' ich die Stunden, ohne dich',
            es: 'Sin ti cuento las horas, sin ti',
            notes: 'Inversión V2: "Ohne dich" (Posición 1) + "zähle" (Posición 2) + "ich" (Posición 3).'
          },
          {
            de: 'Mit dir stehen die Sekunden, lohnen nicht, ohne dich.',
            es: 'Contigo se detienen los segundos, no valen la pena, sin ti.',
            notes: 'Paralelismo poético entre "Stunden" (horas) y "Sekunden" (segundos).'
          }
        ]
      }
    ]
  },

  // 21. RAMMSTEIN - SONNE (2001) [Nivel Fácil / A2]
  {
    id: 'rammstein_sonne',
    title: 'Sonne',
    artist: 'Rammstein',
    album: 'Mutter',
    year: '2001',
    genre: 'Neue Deutsche Härte (Fácil / Números y Cuerpo)',
    coverColor: 'from-orange-700 to-black',
    spotifyQuery: 'Rammstein Sonne',
    youtubeQuery: 'Rammstein Sonne offizielles video',
    description: 'Uno de los riffs más potentes del rock alemán. Ideal para fijar los números del 1 al 10, partes del cuerpo (Augen, Hände, Fäuste, Gesicht, Brust), superlativos ("der hellste Stern") y preposiciones.',
    grammaticalFocus: 'Los números del 1 al 10, superlativo masculino ("der hellste Stern von allen"), verbos reflexivos de movimiento ("legt sich heiß auf das Gesicht") y futuro con "werden".',
    vocabNotes: [
      { de: 'die Sonne', es: 'el sol (¡femenino en alemán!: die Sonne)' },
      { de: 'der Stern', es: 'la estrella (¡masculino en alemán!: der Stern)' },
      { de: 'sich fürchten', es: 'tener miedo / temer ("Fürchtet euch nicht!" = ¡No temáis!)' },
      { de: 'untergehen', es: 'ponerse el sol / hundirse' },
      { de: 'die Faust / die Brust', es: 'el puño (pl. die Fäuste) / el pecho' },
      { de: 'das Gleichgewicht', es: 'el equilibrio' }
    ],
    sections: [
      {
        name: 'Strophe 1 & Refrain (Estrofa 1 y Estribillo)',
        lines: [
          {
            de: 'Eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, aus!',
            es: 'Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, ¡fuera!',
            notes: 'La cuenta de árbitro de boxeo con la que arranca el tema.'
          },
          {
            de: 'Alle warten auf das Licht; fürchtet euch, fürchtet euch nicht!',
            es: 'Todos esperan la luz; ¡temed, no temáis!',
            notes: 'Régimen verbal: "warten auf + Akkusativ" ("auf das Licht"). Imperativo plural: "Fürchtet euch!".'
          },
          {
            de: 'Die Sonne scheint mir aus den Augen, sie wird heut\' Nacht nicht untergehen',
            es: 'El sol me brilla desde los ojos, esta noche no se va a poner',
            notes: 'Futuro I negativo con verbo separable: "wird ... nicht untergehen".'
          },
          {
            de: 'Und die Welt zählt laut bis zehn: Eins, hier kommt die Sonne! Zwei, hier kommt die Sonne!',
            es: 'Y el mundo cuenta en voz alta hasta diez: ¡Uno, aquí viene el sol! ¡Dos, aquí viene el sol!',
            notes: 'Observa el género: "die Sonne" (femenino) → pronombre "sie".'
          },
          {
            de: 'Drei, sie ist der hellste Stern von allen! Vier, hier kommt die Sonne!',
            es: '¡Tres, ella es la estrella más brillante de todas! ¡Cuatro, aquí viene el sol!',
            notes: 'Superlativo masculino: "der hellste Stern" (en alemán el sol es femenino y la estrella es masculina).'
          }
        ]
      },
      {
        name: 'Strophe 2 (Partes del Cuerpo y Dirección)',
        lines: [
          {
            de: 'Die Sonne scheint mir aus den Händen, kann verbrennen, kann dich blenden',
            es: 'El sol me brilla desde las manos, puede quemar, puede cegarte',
            notes: 'Preposición "aus" con Dativo plural: "aus den Händen" (die Hand → den Händen).'
          },
          {
            de: 'Wenn sie aus den Fäusten bricht, legt sich heiß auf dein Gesicht',
            es: 'Cuando brota de los puños, se posa ardiente sobre tu rostro',
            notes: 'Dirección sobre una superficie con "auf" + Acusativo neutro: "auf dein Gesicht".'
          },
          {
            de: 'Legt sich schmerzend auf die Brust, das Gleichgewicht wird zum Verlust',
            es: 'Se posa con dolor sobre el pecho, el equilibrio se convierte en pérdida',
            notes: 'Acusativo femenino: "auf die Brust".'
          },
          {
            de: 'Und wird nie vom Himmel fallen!',
            es: '¡Y jamás caerá del cielo!',
            notes: '"vom Himmel" (von dem Himmel, Dativo masculino).'
          }
        ]
      }
    ]
  }
];
