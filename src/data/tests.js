// Batería de Pruebas de Autoevaluación A2 (Prüfungszentrum / Selbsttest)

export const a2DiagnosticTest = {
  id: 'test_a2_general',
  title: 'Evaluación Diagnóstica Integral A2 (Selbsttest)',
  description: '10 reactivos calibrados que miden casos, sintaxis de oraciones subordinadas, tiempos verbales y discriminación de falsos amigos.',
  passingScore: 70, // 70% para aprobar A2
  questions: [
    {
      id: 'q1',
      domain: 'Wechselpräpositionen',
      prompt: 'Er stellt das Glas auf ___ Tisch.',
      context: 'Acción de colocar (stellen) sobre la mesa (der Tisch).',
      options: ['dem', 'den', 'der', 'das'],
      correct: 1,
      explanation: 'El verbo "stellen" indica acción/desplazamiento (Wohin?) y rige Akkusativ masculino: der Tisch → den Tisch.'
    },
    {
      id: 'q2',
      domain: 'Sintaxis de Subordinadas (Nebensatz)',
      prompt: 'Ich kann heute nicht kommen, weil ich noch viel arbeiten ___ .',
      context: 'Oración subordinada con el conector causal "weil".',
      options: ['muss', 'habe gemusst', 'musste ich', 'müssen'],
      correct: 0,
      explanation: 'Con la conjunción subordinante "weil", el verbo conjugado ("muss") se desplaza al final absoluto de la cláusula.'
    },
    {
      id: 'q3',
      domain: 'Das Perfekt (Auxiliares)',
      prompt: 'Am Wochenende ___ wir nach Wien gefahren.',
      context: 'Verbo de movimiento físico de desplazamiento (fahren).',
      options: ['haben', 'sind', 'wurden', 'hatten'],
      correct: 1,
      explanation: 'Los verbos intransitivos que implican desplazamiento de un punto A a un punto B forman el Perfekt con "sein": wir sind gefahren.'
    },
    {
      id: 'q4',
      domain: 'Falsos Amigos (Falsche Freunde 👻)',
      prompt: 'Si alguien en Alemania te dice: "Ich habe ein Geschenk bekommen", ¿qué significa?',
      context: 'Discriminación léxica de "bekommen".',
      options: [
        'He recibido un regalo.',
        'Me he convertido en un regalo.',
        'He comprado un veneno.',
        'He comenzado una fiesta.'
      ],
      correct: 0,
      explanation: '¡Alerta fantasma 👻! "Bekommen" significa RECIBIR, no convertirse (become). "Ein Geschenk" es un regalo.'
    },
    {
      id: 'q5',
      domain: 'Adjektivdeklination im Dativ',
      prompt: 'Ich fahre jeden Tag mit dem neu___ Fahrrad (das Fahrrad) zur Arbeit.',
      context: 'Preposición "mit" rige Dativo obligatorio.',
      options: ['-em', '-es', '-en', '-e'],
      correct: 2,
      explanation: 'Regla áurea: En Dativo con artículo determinado (dem), el adjetivo SIEMPRE recibe la desinencia débil "-en" (dem neuen Fahrrad).'
    },
    {
      id: 'q6',
      domain: 'Präteritum de Verbos Modales',
      prompt: 'Gestern ___ ich den ganzen Nachmittag beim Arzt warten.',
      context: 'Obligación en pasado con el verbo modal "müssen".',
      options: ['musste', 'gemusst', 'habe gemusst', 'muss'],
      correct: 0,
      explanation: 'En el pasado, los verbos modales se usan casi exclusivamente en Präteritum en vez de Perfekt: ich musste.'
    },
    {
      id: 'q7',
      domain: 'Verbos Reflexivos',
      prompt: 'Wir freuen ___ sehr auf deinen Besuch am Wochenende!',
      context: 'Verbo reflexivo "sich freuen auf" (alegrarse por algo futuro).',
      options: ['sich', 'uns', 'euch', 'wir'],
      correct: 1,
      explanation: 'Para la primera persona del plural (wir), el pronombre reflexivo en acusativo es "uns": wir freuen uns.'
    },
    {
      id: 'q8',
      domain: 'Comprensión Lectora A2 (Leseverstehen)',
      prompt: 'Aviso en estación: "Wegen technischer Störung hat der ICE nach Frankfurt heute 25 Minuten Verspätung. Abfahrt von Gleis 6 statt Gleis 2." ¿Dónde tomas el tren?',
      context: 'Interpretación de megafonía o panel de Deutsche Bahn.',
      options: [
        'En la vía 6 (Gleis 6), con retraso de 25 minutos.',
        'En la vía 2 (Gleis 2), a la hora normal.',
        'El tren está cancelado por avería técnica.',
        'En la vía 25 dentro de 6 minutos.'
      ],
      correct: 0,
      explanation: '"Statt Gleis 2" significa "en vez de vía 2". Por tanto, sale del andén 6 (Gleis 6) y lleva 25 minutos de retraso (Verspätung).'
    },
    {
      id: 'q9',
      domain: 'Inversión Oracional (V2-Regel)',
      prompt: 'Am Sonntag ___ wir immer spät auf.',
      context: 'Oración principal que comienza por un complemento temporal ("Am Sonntag").',
      options: ['stehen', 'wir stehen', 'aufstehen', 'haben gestanden'],
      correct: 0,
      explanation: 'En la oración principal alemana, el verbo conjugado ocupa obligatoriamente la posición 2: Am Sonntag (Pos. 1) + stehen (Pos. 2) + wir...'
    },
    {
      id: 'q10',
      domain: 'Falsos Amigos (Falsche Freunde 👻)',
      prompt: '¿Qué significa la palabra alemana "das Gift"?',
      context: 'Advertencia en etiquetas de laboratorio o productos.',
      options: [
        'El veneno',
        'El regalo',
        'La habilidad',
        'La propina'
      ],
      correct: 0,
      explanation: '¡Alerta fantasma 👻! "Das Gift" en alemán es VENENO. Para decir regalo se dice "das Geschenk".'
    }
  ]
};
