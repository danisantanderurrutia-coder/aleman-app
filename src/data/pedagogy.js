// Biblioteca Pedagógica: Principios científicos y metodológicos para el aprendizaje eficiente del alemán

export const pedagogyArticles = [
  {
    id: 'comprehensible-input',
    title: '1. Input Comprensible (Hipótesis i + 1 de Stephen Krashen)',
    subtitle: 'Por qué escuchar y leer material comprensible vence a memorizar listas en abstracto',
    icon: 'Brain',
    readingTime: '4 min',
    summary: 'El cerebro humano no adquiere una lengua estudiando su anatomía formal primero, sino procesando mensajes significativos que comprende en un 85-90%.',
    keyConcepts: [
      {
        term: 'Nivel i + 1',
        desc: 'Tu nivel actual (i) más un pequeño desafío contextual (+1). Si el material está en i+5 te frustras; si está en i+0 te aburres.'
      },
      {
        term: 'Filtro Afectivo Bajo',
        desc: 'El estrés, el miedo a equivocarse y la ansiedad bloquean la adquisición en el sistema límbico. Aprender en sesiones cortas y sin presión abre la receptividad.'
      },
      {
        term: 'Adquisición vs. Aprendizaje',
        desc: 'El "aprendizaje" consciente sirve como editor o monitor; la "adquisición" inconsciente es la que te permite hablar sin traducir en tu cabeza.'
      }
    ],
    actionPlan: 'Lee y escucha historias graduadas A2. Cuando no entiendas una palabra, dedúcela primero por el contexto antes de abrir el diccionario.'
  },

  {
    id: 'lexical-approach',
    title: '2. Enfoque Léxico y "Chunking" (Michael Lewis)',
    subtitle: 'El cerebro almacena bloques prefabricados, no reglas gramaticales sueltas',
    icon: 'Boxes',
    readingTime: '5 min',
    summary: 'Los nativos no conjugan en tiempo real diciendo "verbo modal en posición 2 + sujeto + dativo + infinitivo al final". Emplean piezas preensambladas de lenguaje.',
    keyConcepts: [
      {
        term: 'Bloque Léxico (Chunk)',
        desc: 'Secuencias de 3 a 5 palabras que viajan juntas: "Könnten Sie mir bitte sagen...", "Es kommt darauf an", "Ich habe keine Ahnung".'
      },
      {
        term: 'Carga Cognitiva Reducida',
        desc: 'Al almacenar la frase completa con su preposición y caso integrados, liberas a tu memoria de trabajo para concentrarte en el mensaje.'
      },
      {
        term: 'Colocaciones Naturales',
        desc: 'En alemán no se "hace una foto" con machen, sino "ein Foto machen" o "fotografieren"; no se "toma una decisión" con nehmen, sino "eine Entscheidung treffen".'
      }
    ],
    actionPlan: 'Nunca anotes un verbo solo. Anota el verbo con su preposición fija y un sustantivo típico: no anotes "warten", anota "warten auf den Bus (+ Akkusativ)".'
  },

  {
    id: 'task-based',
    title: '3. Enfoque Basado en Tareas (Task-Based Learning - TBLT)',
    subtitle: 'El idioma como herramienta de supervivencia y acción, no como teoría pura',
    icon: 'Target',
    readingTime: '4 min',
    summary: 'Aprender gramática aislada sin aplicarla a un objetivo real genera el fenómeno de "aprobar el examen pero no poder pedir comida en la estación".',
    keyConcepts: [
      {
        term: 'Misión Pragmática',
        desc: 'Cada sesión debe culminar con una tarea resuelta: redactar una queja a DHL, pedir un cambio de turno al jefe, preguntar por la calefacción.'
      },
      {
        term: 'Urgencia Comunicativa',
        desc: 'El cerebro prioriza la memoria a largo plazo cuando siente que la información tiene utilidad práctica inmediata para resolver un problema.'
      }
    ],
    actionPlan: 'Ponte una micromisión diaria en alemán: escribir tu lista de compras solo en alemán o simular un email de disculpa por llegar tarde.'
  },

  {
    id: 'shadowing-phonetics',
    title: '4. Técnica de Shadowing y Fonética Motora (Prof. Argüelles)',
    subtitle: 'Entrenando la boca y el oído como si fueran músculos de un atleta',
    icon: 'Mic',
    readingTime: '3 min',
    summary: 'El alemán tiene una articulación tensa, con golpes de glotis (Knacklaut) y vocales redondeadas (ö, ü) que no existen en español. Si no las pronuncias en voz alta, no las fijas.',
    keyConcepts: [
      {
        term: 'El Eco Paralelo',
        desc: 'Escuchar la locución nativa y repetirla con apenas 300 milisegundos de retraso, imitando la cadencia, el énfasis y la respiración.'
      },
      {
        term: 'Memoria Kinestésica Oral',
        desc: 'La posición de la lengua y los labios para diferenciar "sch" /ʃ/ de "ch" suave /ç/ en "ich" y "ch" dura /x/ en "Bach".'
      }
    ],
    actionPlan: 'Dedica 3 minutos al día a activar el botón de audio en la app y repetir la frase en voz alta exactamente con el mismo ritmo.'
  },

  {
    id: 'spaced-repetition',
    title: '5. Repetición Espaciada y Efecto de Recuperación (Curva de Ebbinghaus)',
    subtitle: 'El algoritmo biológico para transferir vocabulario a la memoria a largo plazo',
    icon: 'Clock',
    readingTime: '4 min',
    summary: 'Olvidamos el 75% de lo aprendido en las primeras 48 horas a menos que el cerebro sea forzado a recordar el dato justo en el momento en que está a punto de perderse.',
    keyConcepts: [
      {
        term: 'Active Recall (Evocación Activa)',
        desc: 'Mirar una palabra y ver la respuesta es pasivo y crea una falsa ilusión de saber. Tapar la respuesta y esforzarse por recordarla crea sinapsis fuertes.'
      },
      {
        term: 'Intervalos Exponenciales',
        desc: 'Repasar a las 24 horas, a los 3 días, a los 7 días y a los 30 días consolida el dato permanentemente.'
      }
    ],
    actionPlan: 'Usa el sistema de tarjetas de la app 5 a 10 minutos cada mañana. La consistencia de 7 palabras al día supera a 3 horas de atracón los fines de semana.'
  }
];
