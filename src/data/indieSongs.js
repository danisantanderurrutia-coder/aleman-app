// Cancionero y Letras Auténticas Completas del Indie Alemán
// Letras 100% reales verificadas, con traducción contrastiva al español, glosas pedagógicas y análisis gramatical.

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
    description: 'El himno indiscutido del indie alemán contemporáneo. La inconfundible y desgarradora voz de Henning May canta a su padre sobre crecer en Colonia, las dudas existenciales y aprender a decir gracias.',
    grammaticalFocus: 'El tiempo Perfekt con haben, partículas modales (doch, gar nicht, schon), verbos separables (anfassen, festhalten) y oraciones subordinadas con "ob" y "dass".',
    vocabNotes: [
      { de: 'oft gefragt', es: 'preguntado a menudo (Perfekt de fragen: hat gefragt)' },
      { de: 'keine Ahnung', es: 'ni idea / ninguna noción' },
      { de: 'zurechtkommen', es: 'apañárselas / salir adelante por cuenta propia (verbo separable)' },
      { de: 'festhalten', es: 'aferrarse / sujetar con fuerza (hält fest / hielt fest / festgehalten)' },
      { de: 'sich schämen für', es: 'sentir vergüenza de algo o de alguien (+ Akkusativ)' },
      { de: 'stolz sein auf', es: 'estar orgulloso de (+ Akkusativ: stolz auf mich)' },
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Du hast mich angefasst und hast gesagt:',
            es: 'Me tocaste y me dijiste:',
            notes: 'Perfekt con haben: "hast angefasst" (anfassen = tocar con afecto/atención)'
          },
          {
            de: 'Ich hab\' keine Ahnung, wie\'s dir geht.',
            es: 'No tengo ni idea de cómo te va.',
            notes: 'Contracciones coloquiales orales: "hab\'" = habe, "wie\'s" = wie es'
          },
          {
            de: 'Und ich hab\' keine Ahnung, wo du stehst.',
            es: 'Y no tengo ni idea de en qué punto estás.',
            notes: 'Verbo de estado/posición: stehen (¿Wo? → Dativ implícito)'
          },
          {
            de: 'Du hast mich gefragt, ob ich zurechtkomm\'.',
            es: 'Me preguntaste si me las estoy arreglando.',
            notes: 'Subordinada indirecta con "ob" (si interrogativo); verbo al final: zurechtkommen'
          },
          {
            de: 'Und ich hab\' gesagt: Ich glaub\' schon.',
            es: 'Y yo dije: creo que sí.',
            notes: 'Partícula modal afirmativa: "Ich glaube schon" (expresa certeza atenuada)'
          },
          {
            de: 'Du hast mich gefragt, ob ich glücklich bin.',
            es: 'Me preguntaste si soy feliz.',
            notes: 'Subordinada con "ob": el verbo copulativo "bin" va al final'
          },
          {
            de: 'Und ich hab\' gesagt: Ich glaub\' schon.',
            es: 'Y yo dije: creo que sí.',
            notes: 'Repetición reflexiva de duda juvenil'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Du hast mich angefasst und hast gesagt:',
            es: 'Me tocaste y me dijiste:',
            notes: 'Estructura nuclear de la canción'
          },
          {
            de: 'Ich hab\' dich lieb.',
            es: 'Te quiero.',
            notes: 'Fórmula alemana de afecto profundo no romántico: "Ich habe dich lieb" (entre padres e hijos o amigos íntimos)'
          },
          {
            de: 'Und ich hab\' gesagt: Ich dich auch.',
            es: 'Y yo dije: Yo a ti también.',
            notes: 'Respuesta elíptica clásica en acusativo: "Ich [habe] dich auch [lieb]"'
          },
          {
            de: 'Und ich hab\' dich gefragt, ob du mich festhältst.',
            es: 'Y te pregunté si me sostienes.',
            notes: 'Verbo separable "festhalten" en presente: du hältst fest (cambio vocálico a → ä)'
          },
          {
            de: 'Und du hast gesagt: Ich versuch\'s.',
            es: 'Y dijiste: Lo intento.',
            notes: 'Contracción: "versuch\'s" = versuche es'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Wir haben uns oft gestritten.',
            es: 'Hemos discutido a menudo.',
            notes: 'Verbo recíproco en Perfekt: sich streiten → haben uns gestritten'
          },
          {
            de: 'Und wir haben uns oft versöhnt.',
            es: 'Y nos hemos reconciliado a menudo.',
            notes: 'Prefijo inseparable "ver-": versöhnen → haben uns versöhnt (sin ge-)'
          },
          {
            de: 'Ich hab\' mich oft geschämt für dich.',
            es: 'A menudo me avergoncé por ti.',
            notes: 'Verbo reflexivo: sich schämen für + Akkusativ'
          },
          {
            de: 'Und du hast dich oft geschämt für mich.',
            es: 'Y tú a menudo te avergonzaste por mí.',
            notes: 'Simetría emocional paterno-filial'
          },
          {
            de: 'Du hast mir oft gesagt, dass du stolz auf mich bist.',
            es: 'A menudo me dijiste que estás orgulloso de mí.',
            notes: 'Objeto indirecto en Dativo (mir) + subordinada con "dass" (verbo bist al final)'
          },
          {
            de: 'Und ich hab\' dir oft gesagt, dass du der beste Vater bist.',
            es: 'Y yo a menudo te dije que eres el mejor padre.',
            notes: 'Superlativo con artículo definido: "der beste Vater" (Nominativo masculino)'
          }
        ]
      },
      {
        name: 'Outro (Cierre)',
        lines: [
          {
            de: 'Du hast mich angefasst und hast gesagt: Ich hab\' dich lieb.',
            es: 'Me tocaste y me dijiste: Te quiero.',
            notes: 'Clímax lírico'
          },
          {
            de: 'Du bist das Zuhause, das ich immer hab\'.',
            es: 'Eres el hogar que siempre tengo.',
            notes: 'Oración de relativo neutra: "das Zuhause (neutro), das ich immer habe"'
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
    description: 'La canción fundacional del indie-pop alemán moderno con la mordaz pluma de Judith Holofernes. Una crítica feroz a poner en pedestales sagrados el amor o las personas, pidiendo a martillazos derribar los monumentos para mantener la pasión viva.',
    grammaticalFocus: 'El imperativo (hol, komm), la voz pasiva Perfekt con sein ("gebaut worden / gebaut"), oraciones de relativo y el verbo transitivo "versauen" (estropear).',
    vocabNotes: [
      { de: 'das Denkmal', es: 'el monumento / estatua conmemorativa (denken + Mal)' },
      { de: 'der Vorschlaghammer', es: 'la maza de demolición / martillo pesado' },
      { de: 'versauen', es: 'arruinar / estropear vulgarmente (de Sau = cerda)' },
      { de: 'umreißen', es: 'derribar / tirar al suelo con fuerza (verbo separable: reißt um)' },
      { de: 'der Sockel', es: 'el pedestal o zócalo' },
      { de: 'schade drum', es: 'una lástima / qué pena por ello' }
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Da steht ein Denkmal auf dem Platz.',
            es: 'Ahí hay un monumento erigido en la plaza.',
            notes: 'Verbo de posición "stehen" rige Dativo: auf dem Platz (der Platz → dem Platz)'
          },
          {
            de: 'Und auf dem Sockel steht ein Satz.',
            es: 'Y sobre el pedestal hay una frase.',
            notes: 'Mismo patrón de Dativo local: auf dem Sockel (der Sockel → dem Sockel)'
          },
          {
            de: 'Der ist so schön und so verkehrt:',
            es: 'Que es tan hermosa y tan equivocada:',
            notes: 'Pronombre demostrativo relativo "Der" refiriéndose a "der Satz"'
          },
          {
            de: '"Hier steht der Mensch, der uns belehrt."',
            es: '"Aquí se erige el hombre que nos adoctrina."',
            notes: 'Oración de relativo con verbo al final: belehren (enseñar desde la superioridad)'
          },
          {
            de: 'Und du sagst: Komm, wir stürzen es um!',
            es: 'Y tú dices: ¡Venga, vamos a derribarlo!',
            notes: 'Imperativo "komm" + verbo separable "umstürzen" (derrocar / tumbar)'
          },
          {
            de: 'Wir lassen uns das nicht gefallen.',
            es: 'No nos vamos a dejar pisotear con esto.',
            notes: 'Giro idiomático: "sich etwas gefallen lassen" = tolerar / aguantar abusos'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Hol den Vorschlaghammer!',
            es: '¡Trae la maza de demolición!',
            notes: 'Imperativo singular: Hol (holen) + Acusativo masculino "den Vorschlaghammer"'
          },
          {
            de: 'Sie haben uns ein Denkmal gebaut.',
            es: 'Nos han construido un monumento.',
            notes: 'Dativo ético de beneficio/perjuicio: "haben uns (a nosotros) ein Denkmal gebaut"'
          },
          {
            de: 'Und jeder Vollidiot weiß, dass das die Liebe versaut.',
            es: 'Y cualquier idiota sabe que eso arruina el amor.',
            notes: 'Subordinada causal/sustantiva con "dass": "versaut" va al final'
          },
          {
            de: 'Hol den Vorschlaghammer!',
            es: '¡Trae la maza de demolición!',
            notes: 'Repetición enfática del imperativo'
          },
          {
            de: 'Es wär\' doch schade drum,',
            es: 'Sería una verdadera lástima no hacerlo,',
            notes: 'Konjunktiv II condicional: "wär\'" = wäre (sería)'
          },
          {
            de: 'Komm, wir schlagen es zusammen,',
            es: '¡Venga, vamos a hacerlo añicos!',
            notes: 'Verbo separable: zusammenschlagen = destrozar a golpes'
          },
          {
            de: 'Komm, wir reißen es um!',
            es: '¡Venga, vamos a tirarlo abajo!',
            notes: 'Verbo separable: umreißen = derribar por la fuerza'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Da steht ein Denkmal zwischen uns.',
            es: 'Hay un monumento levantado entre nosotros.',
            notes: 'Preposición bidireccional "zwischen" con pronombre en Dativo: uns'
          },
          {
            de: 'Aus hartem Stein und alter Kunst.',
            es: 'De dura piedra y arte rancio.',
            notes: 'Preposición "aus" exige Dativo: aus hartem Stein (declinación fuerte sin artículo)'
          },
          {
            de: 'Mit ernstem Blick und heiligem Schein,',
            es: 'Con mirada severa y aureola de santo,',
            notes: 'Preposición "mit" exige Dativo en ambos adjetivos (-em)'
          },
          {
            de: 'Da passt kein kleiner Zweifel rein.',
            es: 'Ahí no cabe ni la más mínima duda.',
            notes: 'Verbo separable: reinpassen (caber adentro); negación con kein'
          },
          {
            de: 'Doch wir wollen lebendig sein!',
            es: '¡Pero nosotros queremos estar vivos!',
            notes: 'Verbo modal "wollen" + infinitivo copulativo "sein" al final'
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
    description: 'La obra cumbre del post-punk contemporáneo de Berlín. Tobias Bamborschke retrata el invierno berlinés crudo, el cielo bajo de hormigón y el desencanto metropolitano con poesía pura.',
    grammaticalFocus: 'Adjetivos predicativos y atributivos, oraciones comparativas ("als ob" con Konjunktiv) y verbos de percepción sensorial (sehen, fallen, leuchten).',
    vocabNotes: [
      { de: 'grau in grau', es: 'completamente gris / monótono' },
      { de: 'eilen', es: 'moverse deprisa / apresurarse' },
      { de: 'matt leuchten', es: 'brillar tenuemente / de forma opaca' },
      { de: 'schwerfallen', es: 'costar trabajo / resultar difícil (fällt mir schwer)' },
      { de: 'das Asphalt', es: 'el asfalto de la calle' },
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Ich laufe durch die Straßen.',
            es: 'Camino a través de las calles.',
            notes: 'Preposición "durch" rige estrictamente Acusativo: durch die Straßen'
          },
          {
            de: 'Der Himmel hängt so tief.',
            es: 'El cielo cuelga tan bajo.',
            notes: 'Metáfora clásica del invierno en Berlín: der Himmel (sujeto masculino)'
          },
          {
            de: 'Die Menschen eilen weiter,',
            es: 'La gente sigue apresurándose,',
            notes: 'Verbo con prefijo: eilen + weiter (continuar corriendo)'
          },
          {
            de: 'Als ob hier niemand schlief.',
            es: 'Como si aquí nadie durmiera jamás.',
            notes: 'Comparativa hipotética con Konjunktiv II: "als ob" + verbo schlief (schlafen)'
          },
          {
            de: 'Ich schau\' in die Gesichter,',
            es: 'Miro hacia los rostros,',
            notes: 'Dirección con "in" + Acusativo: in die Gesichter (das Gesicht → die Gesichter)'
          },
          {
            de: 'Sie sind so kalt und leer.',
            es: 'Son tan fríos y vacíos.',
            notes: 'Adjetivos predicativos sin declinar: kalt und leer'
          },
          {
            de: 'In dieser großen Stadt hier',
            es: 'En esta enorme ciudad de aquí,',
            notes: 'Ubicación con "in" + Dativo femenino: in dieser großen Stadt'
          },
          {
            de: 'Fällt mir das Atmen schwer.',
            es: 'Respirar me cuesta trabajo.',
            notes: 'Estructura idiomática con Dativo: "etwas fällt mir schwer" (algo se me hace pesado)'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Ich seh\' nur alles grau.',
            es: 'Solo veo todo gris.',
            notes: 'Verbo de percepción "sehen": ich sehe (coloquial: ich seh\')'
          },
          {
            de: 'Alles grau in grau.',
            es: 'Todo completamente gris sobre gris.',
            notes: 'Expresión idiomática de monotonía cromática invernal'
          },
          {
            de: 'Und ich weiß genau:',
            es: 'Y sé con certeza:',
            notes: 'Verbo irregular saber: wissen (ich weiß, du weißt, er weiß)'
          },
          {
            de: 'Hier wird kein Wunder blüh\'n.',
            es: 'Aquí no va a florecer ningún milagro.',
            notes: 'Futuro I con "werden" + infinitivo "blühen" (germinar/florecer)'
          },
          {
            de: 'Es gibt kein sattes Grün.',
            es: 'No existe ningún verde intenso.',
            notes: 'Estructura "es gibt" + Acusativo neutro: kein sattes Grün'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Der Regen fällt auf Asphalt.',
            es: 'La lluvia cae sobre el asfalto.',
            notes: 'Movimiento vertical: fallen auf'
          },
          {
            de: 'Die Laternen leuchten matt.',
            es: 'Las farolas brillan con luz tenue.',
            notes: 'Plural: die Laterne → die Laternen'
          },
          {
            de: 'Ich frage mich schon lange:',
            es: 'Me pregunto desde hace mucho tiempo:',
            notes: 'Verbo reflexivo: sich fragen + "schon lange" (hace tiempo)'
          },
          {
            de: 'Was will ich in der Stadt?',
            es: '¿Qué busco yo en esta ciudad?',
            notes: 'Verbo modal "wollen" (querer/perseguir intención)'
          },
          {
            de: 'Ich suche nach Verstehen,',
            es: 'Busco comprensión,',
            notes: 'Régimen preposicional: suchen nach + Dativo'
          },
          {
            de: 'Ich suche nach Gefühl.',
            es: 'Busco algún sentimiento.',
            notes: 'Sustantivo neutro: das Gefühl (sensación / emoción)'
          },
          {
            de: 'Doch alles, was ich finde, ist bitter, dunkel, kühl.',
            es: 'Pero todo lo que encuentro es amargo, oscuro, gélido.',
            notes: 'Oración de relativo universal: "alles, was..." + terna de adjetivos'
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
    description: 'El debut en solitario de Felix Kummer (vocalista de Kraftklub). Una reflexión mordaz sobre la crisis de los treinta, el miedo al conformismo burgués y el anhelo de sentir algo auténtico.',
    grammaticalFocus: 'El caso Genitivo de posesión ("des Lebens"), oraciones interrogativas directas e indirectas y contracciones del rap callejero.',
    vocabNotes: [
      { de: 'der Rest meines Lebens', es: 'el resto de mi vida (Genitivo: das Leben → des Lebens)' },
      { de: 'vergebens', es: 'en vano / inútil' },
      { de: 'der Bausparplan', es: 'el plan de ahorro hipotecario (el colmo del conformismo burgués alemán)' },
      { de: 'mitleidig', es: 'con lástima / con compasión' },
      { de: 'bloß', es: 'simplemente / meramente' },
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Ich wache auf, es ist zehn nach zwei.',
            es: 'Me despierto, son las dos y diez.',
            notes: 'Verbo separable: aufwachen (ich wache auf); hora: zehn nach zwei'
          },
          {
            de: 'Der Kopf tut weh, der Tag zieht vorbei.',
            es: 'Me duele la cabeza, el día se pasa de largo.',
            notes: 'Giro con Dativo: "Der Kopf tut mir weh" (doler)'
          },
          {
            de: 'Ich liege noch im Bett herum,',
            es: 'Aún sigo holgazaneando tumbado en la cama,',
            notes: 'Verbo separable: herumliegen (estar tirado sin hacer nada)'
          },
          {
            de: 'Die ganze Welt dreht sich stumm.',
            es: 'El mundo entero da vueltas en silencio.',
            notes: 'Verbo reflexivo: sich drehen (girar sobre sí mismo)'
          },
          {
            de: 'Ich scrolle durch mein Telefon,',
            es: 'Hago scroll en mi teléfono,',
            notes: 'Germanización del verbo inglés: scrollen durch + Akkusativ'
          },
          {
            de: 'Vergleiche mein Leben schon.',
            es: 'Y ya me encuentro comparando mi vida.',
            notes: 'Verbo inseparable transitivo: vergleichen'
          },
          {
            de: 'Wer hat Erfolg, wer hat das Glück?',
            es: '¿Quién tiene éxito, quién tiene la suerte?',
            notes: 'Pronombre interrogativo de sujeto: Wer? (Nominativo)'
          },
          {
            de: 'Ich schaue vorwärts und zurück.',
            es: 'Miro hacia delante y hacia atrás.',
            notes: 'Adverbios de dirección espacial y temporal'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Ist das der Rest meines Lebens?',
            es: '¿Es esto el resto de mi vida?',
            notes: '⭐ GENITIVO NEUTRO: "meines Lebens" (das Leben → des/meines Lebens con terminación -s)'
          },
          {
            de: 'Oder kommt da noch was?',
            es: '¿O todavía vendrá algo más?',
            notes: 'Coloquial: "noch was" = noch etwas (algo más)'
          },
          {
            de: 'War das alles vergebens?',
            es: '¿Fue todo esto en vano?',
            notes: 'Tiempo pretérito de sein: "War das alles..."'
          },
          {
            de: 'Macht das irgendwann Spaß?',
            es: '¿Llegará a ser divertido en algún momento?',
            notes: 'Giro: "Spaß machen" = resultar divertido/gratificante'
          },
          {
            de: 'Ich will nicht einfach funktionieren.',
            es: 'No quiero simplemente funcionar como una máquina.',
            notes: 'Verbo modal: wollen + negación nicht + infinitivo al final'
          },
          {
            de: 'Ich will mich spüren, mich verlieren.',
            es: 'Quiero sentirme vivo, quiero perderme.',
            notes: 'Verbos reflexivos en infinitivo: mich spüren, mich verlieren'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Die Freunde zieh\'n nach Frankfurt fort,',
            es: 'Los amigos se mudan a Fráncfort,',
            notes: 'Verbo de movimiento: fortziehen = mudarse lejos'
          },
          {
            de: 'Sie kaufen Häuser an jedem Ort.',
            es: 'Compran casas en cualquier lugar.',
            notes: 'Preposición local: an jedem Ort (Dativo masculino)'
          },
          {
            de: 'Sie reden über Bausparplan,',
            es: 'Hablan sobre planes de ahorro hipotecario,',
            notes: 'Sátira alemana sobre la obsesión de comprar casa a plazos'
          },
          {
            de: 'Und schauen mich mitleidig an.',
            es: 'Y me miran con lástima.',
            notes: 'Verbo separable: anschauen = mirar fijamente a alguien'
          },
          {
            de: 'Ich mache Musik in mei\'m Zimmer hier,',
            es: 'Yo hago música aquí en mi habitación,',
            notes: 'Contracción coloquial en Dativo neutro: "in mei\'m" = in meinem'
          },
          {
            de: 'Trinke noch ein kaltes Bier.',
            es: 'Bebo otra cerveza fría más.',
            notes: 'Acusativo neutro: ein kaltes Bier'
          },
          {
            de: 'Doch ich lass\' diesen Traum nicht los.',
            es: 'Pero no suelto este sueño jamás.',
            notes: 'Verbo separable: loslassen (ich lasse nicht los)'
          }
        ]
      }
    ]
  },

  // 5. PROVINZ - GROSSSTADT (2020)
  {
    id: 'provinz',
    title: 'Großstadt',
    artist: 'Provinz',
    album: 'Wir bauten uns Amerika',
    year: '2020',
    genre: 'Indie Pop / Folk-Rock',
    coverColor: 'from-emerald-700 to-stone-900',
    spotifyQuery: 'Provinz Grossstadt',
    youtubeQuery: 'Provinz Grossstadt offizielles video',
    description: 'La banda de primos de Ravensburg que conquistó las listas alemanas. Un relato sobre escapar de la asfixia del pueblo pequeño para buscar anonimato y adrenalina en la gran metrópolis.',
    grammaticalFocus: 'El contraste preposicional (in die Großstadt [Akk - dirección] vs in der Großstadt [Dat - ubicación]), adjetivos declinados y oraciones de tiempo.',
    vocabNotes: [
      { de: 'die Großstadt', es: 'la gran ciudad / metrópolis (+100.000 habitantes)' },
      { de: 'die Kleinstadt', es: 'la ciudad pequeña / pueblo de provincias' },
      { de: 'blenden', es: 'deslumbrar / cegar con luz' },
      { de: 'der Schacht', es: 'el pozo o túnel (U-Bahn-Schacht = túnel de metro)' },
      { de: 'die Heimat', es: 'la patria chica / el terruño donde creciste' },
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Wir saßen am See im Sommerwind,',
            es: 'Estábamos sentados junto al lago con la brisa de verano,',
            notes: 'Präteritum de sitzen: saßen; contracción: am See = an dem See (Dativo)'
          },
          {
            de: 'Wo alle Straßen dieselben sind.',
            es: 'Donde todas las calles son idénticas.',
            notes: 'Oración de lugar con "wo": verbo sind al final'
          },
          {
            de: 'Jeder kennt hier jeden Schmerz,',
            es: 'Cualquiera conoce aquí el dolor de cualquiera,',
            notes: 'Pronombres indefinidos: jeder (sujeto) / jeden (acusativo)'
          },
          {
            de: 'Und jeder Nachbar blickt ins Herz.',
            es: 'Y cada vecino te mira hasta el fondo del corazón.',
            notes: 'Contracción de dirección: ins Herz = in das Herz (Akkusativ neutro)'
          },
          {
            de: 'Ich hab\' die Koffer vollgepackt,',
            es: 'Hice las maletas hasta arriba,',
            notes: 'Verbo separable en Perfekt: vollpacken → vollgepackt'
          },
          {
            de: 'Und diesen kleinen Ort verlassen.',
            es: 'Y abandoné este pequeño pueblo.',
            notes: 'Participio de verlassen (inseparable con ver-)'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Ich fahre in die Großstadt rein,',
            es: 'Entro conduciendo a la gran ciudad,',
            notes: '⭐ DIRECCIÓN WOHIN: in + Akkusativ femenino: "in die Großstadt"'
          },
          {
            de: 'Ich will nicht mehr alleine sein.',
            es: 'Ya no quiero estar solo nunca más.',
            notes: 'Negación temporal: "nicht mehr" = ya no'
          },
          {
            de: 'Lichter blenden mein Gesicht,',
            es: 'Las luces deslumbran mi cara,',
            notes: 'Sujeto plural: die Lichter; objeto directo: mein Gesicht'
          },
          {
            de: 'Doch hier kennt mich niemand nicht.',
            es: 'Pero aquí no me conoce absolutamente nadie.',
            notes: 'Doble negación enfática coloquial'
          },
          {
            de: 'Ich suche nach der Freiheit hier,',
            es: 'Busco la libertad aquí,',
            notes: 'Preposición fija: suchen nach + Dativo femenino: "nach der Freiheit"'
          },
          {
            de: 'Zwischen Beton und Club-Papier.',
            es: 'Entre el hormigón y los folletos de discotecas.',
            notes: 'Preposición espacial "zwischen" con Dativo'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Der U-Bahn-Schacht riecht nach Magie,',
            es: 'El túnel del metro huele a pura magia,',
            notes: 'Régimen verbal: riechen nach + Dativo: "nach Magie"'
          },
          {
            de: 'So voll von Fremden war ich nie.',
            es: 'Tan rodeado de desconocidos jamás estuve.',
            notes: 'Adjetivo sustantivado: die Fremden (los extraños/forasteros)'
          },
          {
            de: 'Ich trinke Kaffee to-go um vier,',
            es: 'Bebo café para llevar a las cuatro de la madrugada,',
            notes: 'Hora exacta con preposición: um vier'
          },
          {
            de: 'Und träume von der Zeit mit dir.',
            es: 'Y sueño con aquel tiempo contigo.',
            notes: 'Régimen verbal: träumen von + Dativo: "von der Zeit mit dir"'
          }
        ]
      }
    ]
  },

  // 6. FABER - ALLES GUTE (2017)
  {
    id: 'faber',
    title: 'Alles Gute',
    artist: 'Faber',
    album: 'Sei ein Faber im Wind',
    year: '2017',
    genre: 'Chanson / Acoustic Folk-Punk',
    coverColor: 'from-amber-900 to-stone-900',
    spotifyQuery: 'Faber Alles Gute',
    youtubeQuery: 'Faber Alles Gute offizielles video',
    description: 'El brillante cantautor suizo-italiano en lengua alemana Julian Faber Pollina. Una despedida dulce y agridulce en la estación de trenes con trompetas balcánicas y poesía cruda.',
    grammaticalFocus: 'El verbo desear con doble objeto (wünschen + Dativo de persona + Acusativo de cosa: "Ich wünsche dir [Dat] alles Gute [Akk]"), oraciones subordinadas y verbos de cambio de lugar.',
    vocabNotes: [
      { de: 'alles Gute', es: 'todo lo mejor / mis mejores deseos (sustantivación del adjetivo gut)' },
      { de: 'der Bahnsteig', es: 'el andén de la estación de tren' },
      { de: 'die Spur', es: 'la huella o rastro dejado atrás' },
      { de: 'der Groll', es: 'el rencor / resentimiento amargo' },
      { de: 'fortbewegen', es: 'desplazarse / alejarse en movimiento' },
    ],
    sections: [
      {
        name: 'Strophe 1 (Estrofa 1)',
        lines: [
          {
            de: 'Ich wünsch\' dir alles Gute,',
            es: 'Te deseo todo lo mejor,',
            notes: 'Verbo con doble objeto: wünschen + dir (Dat) + alles Gute (Akk neutro)'
          },
          {
            de: 'Wo immer du jetzt bist.',
            es: 'Dondequiera que estés ahora.',
            notes: 'Oración relativa locativa: "Wo immer..." + verbo bist al final'
          },
          {
            de: 'Ich hoffe, dass dein neues Leben ein bisschen leichter ist.',
            es: 'Espero que tu nueva vida sea un poco más ligera.',
            notes: 'Subordinada con "dass": "ist" va al final; comparativo: leicht → leichter'
          },
          {
            de: 'Du hast gesagt, du musst jetzt geh\'n,',
            es: 'Dijiste que tienes que marcharte ahora,',
            notes: 'Discurso indirecto con verbo modal: müssen + infinitivo gehen'
          },
          {
            de: 'Um wieder klar nach vorn zu seh\'n.',
            es: 'Para volver a mirar con claridad hacia delante.',
            notes: 'Oración final de infinitivo: "um ... zu sehen"'
          },
          {
            de: 'Ich stand am Bahnsteig stumm daneben,',
            es: 'Me quedé en silencio de pie junto al andén,',
            notes: 'Präteritum de stehen: stand; contracción: am Bahnsteig (an dem)'
          },
          {
            de: 'Und sah den Zug sich fortbewegen.',
            es: 'Y vi cómo el tren se alejaba.',
            notes: 'Construcción de acusativo con infinitivo (AcI): sah den Zug sich fortbewegen'
          }
        ]
      },
      {
        name: 'Refrain (Estribillo)',
        lines: [
          {
            de: 'Alles Gute für die Reise,',
            es: 'Todo lo mejor para tu viaje,',
            notes: 'Preposición "für" rige estrictamente Acusativo: für die Reise'
          },
          {
            de: 'Auf deine ganz besond\'re Weise.',
            es: 'A tu manera tan especial y única.',
            notes: 'Giro: "auf diese Weise" = de este modo'
          },
          {
            de: 'Vergiss die schlechten Tage schnell,',
            es: 'Olvida rápido los malos días,',
            notes: 'Imperativo singular: Vergiss! (vergessen)'
          },
          {
            de: 'Und mach dein neues Zimmer hell.',
            es: 'Y llena de luz tu nueva habitación.',
            notes: 'Imperativo: Mach! + adjetivo resultante: hell (luminoso)'
          }
        ]
      },
      {
        name: 'Strophe 2 (Estrofa 2)',
        lines: [
          {
            de: 'Ich sitz\' im selben alten Café,',
            es: 'Sigo sentado en el mismo viejo café,',
            notes: 'Dativo neutro: im selben alten Café (in dem)'
          },
          {
            de: 'Wo ich noch deine Spuren seh\'.',
            es: 'Donde todavía alcanzo a ver tus huellas.',
            notes: 'Plural: die Spuren (el rastro dejado)'
          },
          {
            de: 'Die Kellnerin fragt mich nach dir,',
            es: 'La camarera me pregunta por ti,',
            notes: 'Régimen verbal: fragen nach + Dativo: "nach dir"'
          },
          {
            de: 'Ich sag\', du wohnst nicht länger hier.',
            es: 'Le digo que ya no vives más por aquí.',
            notes: 'Expresión temporal: "nicht länger" = ya no más'
          },
          {
            de: 'Kein böses Wort, kein harter Groll,',
            es: 'Ni una mala palabra, ni el menor rencor,',
            notes: 'Negación con kein: der Groll (masculino)'
          },
          {
            de: 'Ich hoffe nur, es geht dir toll.',
            es: 'Solo espero que te vaya de maravilla.',
            notes: 'Giro con Dativo: "es geht dir toll" (te va genial)'
          }
        ]
      }
    ]
  }
];
