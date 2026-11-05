// Colección de citas canónicas de Yoda en el doblaje oficial alemán
// con análisis filológico de la sintaxis "Yodaisch", violación de la Regla V2 y corrección a Hochdeutsch

export const yodaHistoryStory = {
  title: 'La invención del "Yodaisch": La odisea de traducir a Yoda al alemán',
  subtitle: 'Cómo los directores de doblaje en Berlín crearon un dialecto galáctico respetando los casos gramaticales',
  year: '1980 (Das Imperium schlägt zurück)',
  protagonists: 'Lutz Riedel (director de doblaje), Heinz Freitag (traductor) y Hugo Schrader (voz original alemana de Yoda)',
  article: `Cuando George Lucas y Frank Oz concibieron a Yoda en 1980, en inglés utilizaron una estructura OSV (Object + Subject + Verb, ej: "Much to learn you still have"). En inglés esto suena alienígena y sabio de inmediato porque el inglés moderno tiene un orden de palabras muy rígido (SVO).

Sin embargo, cuando la cinta llegó a Berlín para el doblaje en alemán, el equipo se topó con un muro lingüístico:
1. En alemán estándar, gracias a los casos gramaticales (Nominativ, Akkusativ, Dativ), poner el objeto al inicio ya es perfectamente legal y común ("Den Apfel esse ich"). ¡Si Yoda solo movía el objeto al inicio, sonaría como un alemán normal!
2. Además, el alemán tiene la "Regla de Oro V2": en toda oración principal, el verbo conjugado DEBE ocupar la posición 2.
3. Al mismo tiempo, en las oraciones subordinadas (Nebensätze con weil, dass...), el verbo conjugado se catapulta al final absoluto.

¿Qué inventaron los traductores berlineses? Crearon el "Yodaisch" (el dialecto de Yoda):
• Rompieron deliberadamente la Regla V2 en oraciones principales: lanzaron el verbo conjugado al final absoluto, como si Yoda viviera en una oración subordinada perpetua sin conector ("Viel zu lernen du noch hast").
• Mantuvieron los casos gramaticales intactos (Dich, der Zorn, dem Schüler), de modo que el espectador alemán siempre sabe exactamente quién es el sujeto y quién es el objeto, a pesar de que el orden sintáctico esté patas arriba.
• Desacoplaron los verbos modales y auxiliares, rompiendo el marco oracional (Satzklammer).

El resultado fue una obra maestra del doblaje internacional: Yoda suena venerable, cósmico y profundamente filosófico.`
};

export const yodaQuotesList = [
  {
    id: 'yoda-1',
    yodaGerman: 'Viel zu lernen du noch hast.',
    standardGerman: 'Du hast noch viel zu lernen.',
    alternativeStandard: 'Viel zu lernen hast du noch.',
    spanishMeaning: 'Aún tienes mucho que aprender.',
    context: 'Episodio II: El ataque de los clones (a Obi-Wan Kenobi y Anakin)',
    badge: 'Regla V2 & Verbo Auxiliar',
    brokenRule: 'Violación de la Regla V2 (Verb-Zweit-Stellung)',
    syntaxDiagnosis: 'Yoda colocó el verbo conjugado "hast" al final absoluto de la oración principal, en lugar de situarlo en la 2.ª posición gramatical obligatoria.',
    wrongOptions: [
      {
        text: 'Du viel zu lernen hast noch.',
        explanation: 'Incorrecto: "hast" sigue al final y "noch" queda descolgado sin función.'
      },
      {
        text: 'Viel zu lernen du hast noch.',
        explanation: 'Incorrecto: En alemán, si "Viel zu lernen" ocupa la posición 1, el verbo "hast" debe ir inmediatamente en posición 2 (inversión).'
      }
    ]
  },
  {
    id: 'yoda-2',
    yodaGerman: 'Der Pfad zur dunklen Seite die Furcht ist.',
    standardGerman: 'Die Furcht ist der Pfad zur dunklen Seite.',
    alternativeStandard: 'Der Pfad zur dunklen Seite ist die Furcht.',
    spanishMeaning: 'El miedo es el camino hacia el lado oscuro.',
    context: 'Episodio I: La amenaza fantasma (ante el Consejo Jedi evaluando a Anakin)',
    badge: 'Verbo Copulativo "sein"',
    brokenRule: 'Expulsión del verbo cópula al final',
    syntaxDiagnosis: 'Yoda colocó el predicado al inicio ("Der Pfad zur dunklen Seite"), luego el sujeto ("die Furcht") y expulsó el verbo "ist" al final sin cópula central.',
    wrongOptions: [
      {
        text: 'Die Furcht der Pfad zur dunklen Seite ist.',
        explanation: 'Incorrecto: Aunque el sujeto esté al inicio, el verbo "ist" sigue atrapado al final.'
      },
      {
        text: 'Ist die Furcht der Pfad zur dunklen Seite.',
        explanation: 'Incorrecto: Con el verbo en posición 1 se convierte en una pregunta ("¿Es el miedo el camino...?"), no en una afirmación.'
      }
    ]
  },
  {
    id: 'yoda-3',
    yodaGerman: 'Stark die Macht in dir ist.',
    standardGerman: 'Die Macht in dir ist stark.',
    alternativeStandard: 'Stark ist die Macht in dir.',
    spanishMeaning: 'La Fuerza es poderosa en ti.',
    context: 'Episodio V: El Imperio contraataca (entrenando a Luke en Dagobah)',
    badge: 'Adjetivo Predicativo',
    brokenRule: 'Falta de inversión verbo-sujeto',
    syntaxDiagnosis: 'Si se enfatiza el adjetivo "Stark" en posición 1, la gramática alemana exige inversión inmediata ("Stark IST die Macht..."). Yoda mantiene "die Macht" y tira "ist" al final.',
    wrongOptions: [
      {
        text: 'In dir stark die Macht ist.',
        explanation: 'Incorrecto: Acumula complementos al inicio y mantiene el verbo al final.'
      },
      {
        text: 'Stark die Macht ist in dir.',
        explanation: 'Incorrecto: Sigue sin invertir el verbo a la posición 2 tras el adjetivo inicial.'
      }
    ]
  },
  {
    id: 'yoda-4',
    yodaGerman: 'Viel Geduld du haben musst, mein junger Padawan.',
    standardGerman: 'Du musst viel Geduld haben, mein junger Padawan.',
    alternativeStandard: 'Viel Geduld musst du haben, mein junger Padawan.',
    spanishMeaning: 'Debes tener mucha paciencia, mi joven padawan.',
    context: 'Episodio V: El Imperio contraataca',
    badge: 'Verbos Modales & Satzklammer',
    brokenRule: 'Ruptura del Marco Oracional (Satzklammer)',
    syntaxDiagnosis: 'Con verbos modales, el verbo conjugado ("musst") debe ocupar la posición 2 y el infinitivo ("haben") el final. Yoda mandó ambos verbos juntos al final.',
    wrongOptions: [
      {
        text: 'Du viel Geduld musst haben, mein junger Padawan.',
        explanation: 'Incorrecto: El verbo modal "musst" no puede ir en tercera posición después de "Geduld".'
      },
      {
        text: 'Haben du musst viel Geduld, mein junger Padawan.',
        explanation: 'Incorrecto: El infinitivo "haben" no puede encabezar la frase de este modo.'
      }
    ]
  },
  {
    id: 'yoda-5',
    yodaGerman: 'Dich der Zorn überwältigt hat.',
    standardGerman: 'Der Zorn hat dich überwältigt.',
    alternativeStandard: 'Dich hat der Zorn überwältigt.',
    spanishMeaning: 'La ira te ha consumido / dominado.',
    context: 'Episodio III: La venganza de los Sith',
    badge: 'Acusativo Frontal & Perfekt',
    brokenRule: 'Posición del Auxiliar Temporal "haben"',
    syntaxDiagnosis: 'En Perfekt, el auxiliar conjugado ("hat") debe ir en posición 2. Yoda coloca el objeto acusativo ("Dich"), luego el sujeto nominativo ("der Zorn") y ambos verbos al final.',
    wrongOptions: [
      {
        text: 'Der Zorn dich überwältigt hat.',
        explanation: 'Incorrecto: Sujeto al inicio pero auxiliar "hat" todavía al final como si fuera subordinada.'
      },
      {
        text: 'Dich der Zorn hat überwältigt.',
        explanation: 'Incorrecto: El participio "überwältigt" debe cerrar la oración en Perfekt.'
      }
    ]
  },
  {
    id: 'yoda-6',
    yodaGerman: 'Wenn 900 Jahre alt du bist, wirst aussehen du nicht so gut.',
    standardGerman: 'Wenn du 900 Jahre alt bist, wirst du nicht so gut aussehen.',
    spanishMeaning: 'Cuando 900 años tengas, no te verás tan bien.',
    context: 'Episodio VI: El retorno del Jedi (en su lecho en Dagobah)',
    badge: 'Subordinada Condicional + Futur I',
    brokenRule: 'Colapso de inversión en la oración principal',
    syntaxDiagnosis: 'Tras una subordinada ("Wenn..."), la oración principal debe comenzar inmediatamente por el verbo auxiliar ("wirst du..."). Yoda separó "wirst aussehen du" de forma caótica.',
    wrongOptions: [
      {
        text: 'Wenn du bist 900 Jahre alt, wirst du nicht gut aussehen.',
        explanation: 'Incorrecto: La subordinada con "wenn" requiere el verbo "bist" al final.'
      },
      {
        text: 'Wenn 900 Jahre alt bist du, du wirst nicht so gut aussehen.',
        explanation: 'Incorrecto: No invierte la principal tras la subordinada condicional.'
      }
    ]
  },
  {
    id: 'yoda-7',
    yodaGerman: 'Vergessen du musst, was früher du gelernt.',
    standardGerman: 'Du musst vergessen, was du früher gelernt hast.',
    spanishMeaning: 'Debes desaprender lo que aprendiste.',
    context: 'Episodio V: El Imperio contraataca',
    badge: 'Omisión de Auxiliar & Modal',
    brokenRule: 'Omisión del auxiliar "hast" y desplazamiento modal',
    syntaxDiagnosis: 'Yoda mandó "du musst" tras el infinitivo "Vergessen", y en la subordinada omitió por completo el verbo auxiliar "hast" ("was früher du gelernt [hast]").',
    wrongOptions: [
      {
        text: 'Du musst was früher gelernt vergessen.',
        explanation: 'Incorrecto: La oración subordinada ("was...") debe ir separada por coma de la principal.'
      },
      {
        text: 'Vergessen musst was du früher hast gelernt.',
        explanation: 'Incorrecto: En la subordinada introducida por "was", el auxiliar "hast" debe ir al final absoluto.'
      }
    ]
  }
];
