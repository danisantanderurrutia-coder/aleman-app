// Diálogos situacionales A2 para practicar conversación cotidiana en Alemania con audio y traducción

export const dialoguesData = [
  {
    id: 'arzt',
    title: 'Beim Arzt (En el médico)',
    description: 'Aprende a describir síntomas, pedir cita médica y solicitar la baja laboral (Krankschreibung).',
    badge: 'Salud',
    cultureTip: 'En Alemania, si faltas al trabajo por enfermedad, la mayoría de empresas exigen una "Arbeitsunfähigkeitsbescheinigung" (AU) a partir del tercer día.',
    lines: [
      {
        speaker: 'Arzthelferin (Recepcionista)',
        german: 'Guten Tag! Praxis Dr. Weber. Wie kann ich Ihnen helfen?',
        spanish: '¡Buenos días! Consultorio del Dr. Weber. ¿Cómo puedo ayudarle?'
      },
      {
        speaker: 'Du (Tú)',
        german: 'Guten Tag. Ich fühle mich seit gestern gar nicht gut. Ich habe starke Halsschmerzen und Fieber.',
        spanish: 'Buenos días. No me siento nada bien desde ayer. Tengo fuerte dolor de garganta y fiebre.'
      },
      {
        speaker: 'Arzthelferin',
        german: 'Haben Sie heute Zeit? Sie können um 11:30 Uhr vorbeikommen. Bitte bringen Sie Ihre Versichertenkarte mit.',
        spanish: '¿Tiene tiempo hoy? Puede pasar a las 11:30. Por favor traiga su tarjeta sanitaria.'
      },
      {
        speaker: 'Arzt (Médico)',
        german: 'Hallo! Was fehlt Ihnen denn? Machen Sie bitte den Mund weit auf.',
        spanish: '¡Hola! ¿Qué le ocurre? Abra bien la boca por favor.'
      },
      {
        speaker: 'Du',
        german: 'Mein Hals tut sehr weh beim Schlucken. Außerdem brauche ich eine Krankschreibung für meinen Chef.',
        spanish: 'Me duele mucho la garganta al tragar. Además necesito una baja médica para mi jefe.'
      },
      {
        speaker: 'Arzt',
        german: 'Sie haben eine Mandelentzündung. Ich schreibe Sie für drei Tage krank und gebe Ihnen ein Rezept.',
        spanish: 'Tiene amigdalitis. Le doy de baja por tres días y le hago una receta.'
      },
      {
        speaker: 'Du',
        german: 'Vielen Dank, Herr Doktor! Wie oft soll ich die Medikamente nehmen?',
        spanish: '¡Muchas gracias, doctor! ¿Con qué frecuencia debo tomar los medicamentos?'
      },
      {
        speaker: 'Arzt',
        german: 'Zweimal täglich nach dem Essen. Gute Besserung!',
        spanish: 'Dos veces al día después de comer. ¡Que se mejore pronto!'
      }
    ]
  },

  {
    id: 'restaurant',
    title: 'Im Restaurant (En el restaurante)',
    description: 'Pedir mesa, ordenar platos, pedir la cuenta y redondear la propina como un local.',
    badge: 'Gastronomía',
    cultureTip: 'Para pedir la cuenta en Alemania se dice "Zahlen bitte". El camarero te preguntará: "Zusammen oder getrennt?" (¿Juntos o separados?). Al pagar en efectivo, dices el monto total con propina incluida ("15 Euro, bitte") o dices "Stimmt so" (está bien así).',
    lines: [
      {
        speaker: 'Kellner (Camarero)',
        german: 'Guten Abend! Haben Sie reserviert?',
        spanish: '¡Buenas tardes! ¿Tienen reserva?'
      },
      {
        speaker: 'Du',
        german: 'Guten Abend. Nein, wir haben nicht reserviert. Haben Sie einen Tisch für zwei Personen frei?',
        spanish: 'Buenas tardes. No, no tenemos reserva. ¿Tienen una mesa libre para dos personas?'
      },
      {
        speaker: 'Kellner',
        german: 'Ja, gerne hier am Fenster. Was darf ich Ihnen zu trinken bringen?',
        spanish: 'Sí, con gusto aquí junto a la ventana. ¿Qué puedo traerles de beber?'
      },
      {
        speaker: 'Du',
        german: 'Ich hätte gern ein großes Mineralwasser ohne Kohlensäure und ein alkoholfreies Bier, bitte.',
        spanish: 'Quisiera un agua mineral grande sin gas y una cerveza sin alcohol, por favor.'
      },
      {
        speaker: 'Kellner',
        german: 'Und haben Sie schon gewählt?',
        spanish: '¿Y ya han elegido qué comer?'
      },
      {
        speaker: 'Du',
        german: 'Ja, ich nehme das Schnitzel mit Kartoffelsalat. Und könnten Sie mir noch etwas Brot bringen?',
        spanish: 'Sí, tomaré el escalope con ensalada de patatas. ¿Y podría traerme un poco más de pan?'
      },
      {
        speaker: 'Kellner',
        german: 'Sehr gern. Kommt sofort!',
        spanish: 'Con mucho gusto. ¡Enseguida viene!'
      },
      {
        speaker: 'Du',
        german: 'Entschuldigung, wir möchten bitte zahlen! Zusammen, bitte.',
        spanish: 'Disculpe, ¡quisiéramos pagar por favor! Juntos, por favor.'
      },
      {
        speaker: 'Kellner',
        german: 'Das macht insgesamt 27 Euro und 50 Cent.',
        spanish: 'Son en total 27 euros y 50 céntimos.'
      },
      {
        speaker: 'Du',
        german: 'Hier sind 30 Euro. Stimmt so, vielen Dank!',
        spanish: 'Aquí tiene 30 euros. Quédese con el cambio, ¡muchas gracias!'
      }
    ]
  },

  {
    id: 'wohnung',
    title: 'Wohnungssuche (Buscando piso)',
    description: 'Preguntas sobre Kaltmiete, Nebenkosten, Kaution y reglas de la comunidad de vecinos.',
    badge: 'Vivienda',
    cultureTip: 'El mercado de vivienda en Alemania usa dos conceptos: Kaltmiete (alquiler neto) y Warmmiete (incluye calefacción y agua, pero casi nunca electricidad ni internet).',
    lines: [
      {
        speaker: 'Vermieter (Propietario)',
        german: 'Hallo Herr Santander! Willkommen in der Wohnung. Schauen Sie sich gerne um.',
        spanish: '¡Hola! Bienvenido al apartamento. Siéntase libre de mirar alrededor.'
      },
      {
        speaker: 'Du',
        german: 'Vielen Dank! Die Wohnung ist wirklich sehr hell. Wie groß ist die Wohnfläche?',
        spanish: '¡Muchas gracias! El apartamento es realmente muy luminoso. ¿De qué tamaño es la superficie habitable?'
      },
      {
        speaker: 'Vermieter',
        german: 'Sie hat 65 Quadratmeter, zwei Zimmer, einen Balkon und eine Einbauküche.',
        spanish: 'Tiene 65 metros cuadrados, dos habitaciones, un balcón y una cocina equipada.'
      },
      {
        speaker: 'Du',
        german: 'Das klingt super. Wie hoch sind die Nebenkosten und wie viel beträgt die Kaution?',
        spanish: 'Suena genial. ¿A cuánto ascienden los gastos adicionales y cuánto es la fianza?'
      },
      {
        speaker: 'Vermieter',
        german: 'Die Kaltmiete ist 750 Euro, Nebenkosten sind 200 Euro. Die Kaution beträgt drei Kaltmieten.',
        spanish: 'El alquiler base son 750 euros, los gastos adicionales 200 euros. La fianza son tres alquileres base.'
      },
      {
        speaker: 'Du',
        german: 'Ab wann ist die Wohnung frei? Ich könnte ab dem ersten nächsten Monats einziehen.',
        spanish: '¿A partir de cuándo queda libre el apartamento? Podría mudarme a partir del primero del próximo mes.'
      }
    ]
  },

  {
    id: 'bahnhof',
    title: 'Am Bahnhof (En la estación de trenes)',
    description: 'Preguntar por retrasos, conexiones y andenes en la estación.',
    badge: 'Transporte',
    cultureTip: 'Las estaciones alemanas no tienen torniquetes. Compras el billete y, si no tiene fecha impresa, debes validarlo (entwerten) en las máquinas rojas antes de subir al tren.',
    lines: [
      {
        speaker: 'Du',
        german: 'Entschuldigung, von welchem Gleis fährt der ICE nach Hamburg ab?',
        spanish: 'Disculpe, ¿de qué vía sale el tren ICE a Hamburgo?'
      },
      {
        speaker: 'Bahn-Mitarbeiter',
        german: 'Normalerweise von Gleis 7, aber heute hat er 15 Minuten Verspätung und fährt von Gleis 9 ab.',
        spanish: 'Normalmente de la vía 7, pero hoy tiene 15 minutos de retraso y sale de la vía 9.'
      },
      {
        speaker: 'Du',
        german: 'Oje! Erreiche ich dann noch meinen Anschlusszug in Hannover?',
        spanish: '¡Vaya! ¿Alcanzaré aún mi tren de conexión en Hannover?'
      },
      {
        speaker: 'Bahn-Mitarbeiter',
        german: 'Das wird knapp. Wenn Sie den Anschluss verpassen, können Sie den nächsten Zug eine Stunde später nehmen.',
        spanish: 'Estará justo. Si pierde la conexión, puede tomar el siguiente tren una hora más tarde.'
      },
      {
        speaker: 'Du',
        german: 'Muss ich mein Ticket dafür umtauschen?',
        spanish: '¿Debo cambiar mi billete para eso?'
      },
      {
        speaker: 'Bahn-Mitarbeiter',
        german: 'Nein, bei Zugverspätung ist die Zugbindung aufgehoben. Zeigen Sie dem Schaffner einfach Ihr Ticket.',
        spanish: 'No, por retraso del tren la restricción de billete queda anulada. Simplemente muéstrele su billete al revisor.'
      }
    ]
  }
];
