// Mapa Curricular Progresivo: El Camino de Aprendizaje (Der Lernpfad)
// Estructura día a día para que cada jornada tenga una misión específica, contenido único y avance hacia B1/B2.

export const curriculumRoadmap = [
  // FASE 1: A2.1 - CIMIENTOS Y ENTORNO INMEDIATO (Días 1 a 7)
  {
    day: 1,
    phase: 'A2.1 Cimientos',
    title: 'Día 1: El Café & El Acusativo de Cortesía',
    badge: 'Casos & Social',
    objective: 'Aprender a pedir con cortesía y usar el caso Akkusativ masculino (den Cappuccino) para romper el hielo.',
    steps: [
      { id: 'step_vocab', title: 'Aprende las 7 palabras de Ropa & Aspecto', tab: 'sprint', xp: 15 },
      { id: 'step_grammar', title: 'Estudia la regla de Wohin? (Akkusativ)', tab: 'grammar', xp: 20 },
      { id: 'step_date', title: 'Supera la cita con Lena en el Café de Berlín', tab: 'dating', xp: 25 },
    ],
    cefrSkill: 'A2.1: Interacción en cafeterías y peticiones directas'
  },
  {
    day: 2,
    phase: 'A2.1 Cimientos',
    title: 'Día 2: El Supermercado & El Dativo Estático',
    badge: 'Casos & Alimentos',
    objective: 'Distinguir Wo? (Dativo: im Supermarkt / auf dem Tisch) al hacer las compras y pedir recomendaciones.',
    steps: [
      { id: 'step_vocab', title: 'Domina las 7 palabras de Supermercado & Alimentos', tab: 'sprint', xp: 15 },
      { id: 'step_articles', title: 'Consigue racha de 5 en el juego Der • Die • Das', tab: 'articles', xp: 20 },
      { id: 'step_date', title: 'Usa el abridor de DateMaster con Mia en el Bio-Markt', tab: 'dating', xp: 25 },
    ],
    cefrSkill: 'A2.1: Localización espacial fija y compras cotidianas'
  },
  {
    day: 3,
    phase: 'A2.1 Cimientos',
    title: 'Día 3: El Intercambio & Subordinadas con "weil"',
    badge: 'Sintaxis & Conectores',
    objective: 'Explicar motivos y causas enviando el verbo conjugado al final de la frase (weil ich Deutsch lerne).',
    steps: [
      { id: 'step_grammar', title: 'Módulo: Nebensätze con "weil", "dass", "wenn"', tab: 'grammar', xp: 20 },
      { id: 'step_cognates', title: 'Detecta los 4 primeros Falsos Amigos Fantasma 👻', tab: 'cognates', xp: 20 },
      { id: 'step_date', title: 'Negocia el intercambio de idiomas con Clara', tab: 'dating', xp: 25 },
    ],
    cefrSkill: 'A2.1: Justificación causal básica y subordinación'
  },
  {
    day: 4,
    phase: 'A2.1 Cimientos',
    title: 'Día 4: El Pasado Cotidiano (Das Perfekt)',
    badge: 'Tiempos Verbales',
    objective: 'Narrar lo que hiciste ayer distinguiendo el auxiliar "haben" del auxiliar de movimiento "sein".',
    steps: [
      { id: 'step_grammar', title: 'Módulo: Das Perfekt (sein vs haben)', tab: 'grammar', xp: 20 },
      { id: 'step_sentences', title: 'Arma 2 frases en Satzbau con Partizip II al final', tab: 'sentences', xp: 20 },
      { id: 'step_dialogue', title: 'Escucha y practica el diálogo: Am Bahnhof (Deutsche Bahn)', tab: 'dialogues', xp: 20 },
    ],
    cefrSkill: 'A2.1: Narración en pasado de desplazamientos y viajes'
  },
  {
    day: 5,
    phase: 'A2.1 Cimientos',
    title: 'Día 5: La Noche Alternativa & Declinación en Dativo',
    badge: 'Morfología & Emociones',
    objective: 'Aplicar la regla del adjetivo en dativo (-en) y conectar con conversaciones profundas sin miedo.',
    steps: [
      { id: 'step_vocab', title: 'Domina las 7 palabras de Vivienda & Casa', tab: 'sprint', xp: 15 },
      { id: 'step_date', title: 'Conecta con Zoe (Chica Emo/Darks) en el Vinyl-Bar', tab: 'dating', xp: 25 },
      { id: 'step_grammar', title: 'Estudia: Adjektivdeklination im Dativ (-en)', tab: 'grammar', xp: 20 },
    ],
    cefrSkill: 'A2.1: Expresión de gustos musicales y descripción con adjetivos'
  },
  {
    day: 6,
    phase: 'A2.1 Cimientos',
    title: 'Día 6: Deporte, Cuerpo & Verbos Reflexivos',
    badge: 'Salud & Acción',
    objective: 'Describir rutinas saludables y movimientos usando pronombres reflexivos (sich fühlen, sich beeilen).',
    steps: [
      { id: 'step_grammar', title: 'Módulo: Reflexive Verben (mich, dich, uns...)', tab: 'grammar', xp: 20 },
      { id: 'step_pixel', title: 'Resuelve 3 enigmas en el módulo Píxel 8×8', tab: 'pixel', xp: 20 },
      { id: 'step_date', title: 'Juega el partido de vóley playa con Maya', tab: 'dating', xp: 25 },
    ],
    cefrSkill: 'A2.1: Salud corporal, hábitos y actividades deportivas'
  },
  {
    day: 7,
    phase: 'A2.1 Cimientos',
    title: 'Día 7: Auditoría Semanal & Checkpoint de Fase A2.1',
    badge: 'Evaluación & Síntesis',
    objective: 'Evaluar objetivamente tu asimilación de casos, verbos y léxico para certificar el paso a A2.2.',
    steps: [
      { id: 'step_test', title: 'Realiza el Test Diagnóstico A2 (mínimo 70%)', tab: 'test', xp: 50 },
      { id: 'step_pedagogy', title: 'Lee el artículo sobre la Curva de Ebbinghaus en Biblioteca', tab: 'pedagogy', xp: 20 },
    ],
    cefrSkill: 'Checkpoint A2.1: Consolidación de casos y supervivencia social'
  },

  // FASE 2: A2.2 - CONSOLIDACIÓN Y FLUIDEZ COTIDIANA (Días 8 a 14)
  {
    day: 8,
    phase: 'A2.2 Consolidación',
    title: 'Día 8: El Mundo del Trabajo & Modales en Pasado',
    badge: 'Profesional & Präteritum',
    objective: 'Hablar de tus obligaciones laborales pasadas con fluidez natural usando musste, konnte y wollte.',
    steps: [
      { id: 'step_grammar', title: 'Módulo: Präteritum de verbos modales', tab: 'grammar', xp: 20 },
      { id: 'step_date', title: 'Aplica la técnica de los 20 segundos con Elena en el Coworking', tab: 'dating', xp: 25 },
      { id: 'step_sentences', title: 'Construye frases con infinitivo al final', tab: 'sentences', xp: 20 },
    ],
    cefrSkill: 'A2.2: Descripción de responsabilidades laborales y proyectos'
  },
  {
    day: 9,
    phase: 'A2.2 Consolidación',
    title: 'Día 9: Cultura Punk & Libertad de Expresión',
    badge: 'Subcultura & Desparpajo',
    objective: 'Soltar la lengua con humor descarado (Playful Cocky-Funny) y defender tus puntos de vista.',
    steps: [
      { id: 'step_date', title: 'Acepta el desafío en el RAW-Gelände con Kira (Punk)', tab: 'dating', xp: 25 },
      { id: 'step_cognates', title: 'Módulo de Puentes Germánicos Reales (t ↔ d, p ↔ f)', tab: 'cognates', xp: 20 },
    ],
    cefrSkill: 'A2.2: Respuestas espontáneas y lenguaje informal urbano'
  },
  {
    day: 10,
    phase: 'A2.2 Consolidación',
    title: 'Día 10: La Salud & Trámites Médicos en Alemania',
    badge: 'Salud & Burocracia',
    objective: 'Pedir cita, describir síntomas al doctor y solicitar la baja médica (Krankschreibung).',
    steps: [
      { id: 'step_dialogue', title: 'Transcripción completa: Beim Arzt', tab: 'dialogues', xp: 25 },
      { id: 'step_vocab', title: 'Repasa el léxico de Salud & Médico en Flashcards', tab: 'flashcards', xp: 20 },
    ],
    cefrSkill: 'A2.2: Autonomía ante citas médicas y farmacia'
  },
  {
    day: 11,
    phase: 'A2.2 Consolidación',
    title: 'Día 11: Noche en Berlín & La Cultura Kinky / Clubbing',
    badge: 'Vida Nocturna & Intimidad',
    objective: 'Expresar límites, consentimiento y deseos respetuosos con naturalidad y vocabulario maduro.',
    steps: [
      { id: 'step_date', title: 'Conversación en el lounge del KitKat con Roxanne', tab: 'dating', xp: 25 },
      { id: 'step_sentences', title: 'Practica frases con conectores de cortesía', tab: 'sentences', xp: 20 },
    ],
    cefrSkill: 'A2.2: Conversación sobre intimidad, respeto y vida nocturna'
  },
  {
    day: 12,
    phase: 'A2.2 Consolidación',
    title: 'Día 12: Vivienda en Alemania: Warmmiete & Kaution',
    badge: 'Vivienda & Finanzas',
    objective: 'Comprender los contratos de alquiler alemanes, qué incluye el Warmmiete y cómo reclamar reparaciones.',
    steps: [
      { id: 'step_dialogue', title: 'Transcripción: Wohnungssuche & Mietvertrag', tab: 'dialogues', xp: 25 },
      { id: 'step_cognates', title: 'Caza el falso amigo: "die Kaution" no es precaución', tab: 'cognates', xp: 20 },
    ],
    cefrSkill: 'A2.2: Negociación de contratos y gestión de hogar'
  },
  {
    day: 13,
    phase: 'A2.2 Consolidación',
    title: 'Día 13: La Gastronomía & Pagar por Separado',
    badge: 'Restaurante & Modales',
    objective: 'Ordenar en restaurantes, pedir cuentas por separado (Zusammen oder getrennt?) y redondear propinas.',
    steps: [
      { id: 'step_dialogue', title: 'Transcripción: Im Restaurant (Zahlen bitte!)', tab: 'dialogues', xp: 25 },
      { id: 'step_date', title: 'Brinda con Hannah al atardecer en Hamburgo', tab: 'dating', xp: 25 },
    ],
    cefrSkill: 'A2.2: Comportamiento social en hostelería y gastronomía'
  },
  {
    day: 14,
    phase: 'A2.2 Consolidación',
    title: 'Día 14: Gran Auditoría A2 & Certificado de Nivel',
    badge: 'Graduación A2',
    objective: 'Aprobar la evaluación global y certificar que estás listo para dar el salto definitivo hacia B1.',
    steps: [
      { id: 'step_test', title: 'Completa el Test A2 con más del 85% de aciertos', tab: 'test', xp: 60 },
      { id: 'step_pedagogy', title: 'Estudia el método de Chunking para preparar B1', tab: 'pedagogy', xp: 25 },
    ],
    cefrSkill: 'Certificación A2 Completa: Preparado para el despegue B1'
  }
];

// Niveles del marco MCER y su estado de dominio
export const cefrMilestones = [
  {
    level: 'A1',
    name: 'Supervivencia Inicial',
    desc: 'Presentarse, pedir la hora, saludar y números.',
    status: 'Dominado',
    progress: 100,
    color: 'emerald'
  },
  {
    level: 'A2',
    name: 'Rutina Cotidiana & Casos (Tu Nivel Actual)',
    desc: 'Casos Akkusativ/Dativ, oraciones subordinadas con weil, pasado Perfekt, compras, citas y citas médicas.',
    status: 'En Progreso Activo',
    progress: 68,
    color: 'amber'
  },
  {
    level: 'B1',
    name: 'Independencia & Argumentación (Próximo Objetivo)',
    desc: 'Konjunktiv II para hipótesis y deseos, oraciones de relativo, conectores dobles y voz pasiva en presente.',
    status: 'Desbloqueándose',
    progress: 18,
    color: 'stone'
  },
  {
    level: 'B2',
    name: 'Fluidez Espontánea & Ámbito Laboral',
    desc: 'Voz pasiva con modales, estilo indirecto (Konjunktiv I), infinitivo con um... zu, argumentación profesional compleja.',
    status: 'Bloqueado',
    progress: 0,
    color: 'stone'
  },
  {
    level: 'C1',
    name: 'Registro Culto & Precisión Filológica',
    desc: 'Nomen-Verb-Verbindungen, matices irónicos sutiles, discurso académico sin esfuerzo.',
    status: 'Horizonte Lejano',
    progress: 0,
    color: 'stone'
  }
];
