import React, { useState } from 'react';
import { 
  X, BookOpen, Sparkles, Heart, Compass, ArrowRight, Volume2, 
  Layers, CheckCircle2, RotateCcw, Lightbulb, HelpCircle, Target, Award
} from 'lucide-react';
import { speechService } from '../utils/speech';

export default function ClaraMentorModal({ isOpen, onClose, progress, setActiveTab }) {
  const [activeTab, setActiveTabLocal] = useState('why'); // 'why', 'macro', 'review', 'secret'
  const currentDay = progress.curriculumDay || 1;

  if (!isOpen) return null;

  const handleClaraGreeting = () => {
    speechService.speak('Hallo! Ich bin Clara aus Berlin Kreuzberg. Willkommen in meinem Notizbuch! Lass uns Deutsch mit System und Freude lernen.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-stone-900 text-white relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Clara's Illustrated Avatar */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-stone-800">
                <img 
                  src="/characters/clara_tandem.jpg" 
                  alt="Clara - Kreuzberg Tandem" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 text-base bg-amber-400 rounded-full p-0.5" title="Mentora de Tandem">
                ✍️
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
                  Mentora Académica & Tandem
                </span>
                <span className="text-xs text-stone-400 font-mono">Kreuzberg, Berlin</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
                El Cuaderno Pedagógico de Clara
                <button
                  onClick={handleClaraGreeting}
                  className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-400 cursor-pointer border border-stone-700 transition-colors"
                  title="Escuchar saludo de Clara con voz natural IA"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </h2>
              <p className="text-xs text-stone-300 font-sans mt-0.5">
                "Te explico por qué aprendes lo que aprendes y cómo conectar la gramática con la vida real."
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white cursor-pointer transition-colors self-end sm:self-auto"
            title="Cerrar cuaderno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 py-3 bg-stone-50 border-b border-stone-200 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTabLocal('why')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'why'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            💡 ¿Por qué aprendo esto hoy?
          </button>

          <button
            onClick={() => setActiveTabLocal('review')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'review'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            🔄 Repaso Espaciado: Origen de Casos
          </button>

          <button
            onClick={() => setActiveTabLocal('macro')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'macro'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            🗺️ Bloques Semanales (A2 ➔ B1)
          </button>

          <button
            onClick={() => setActiveTabLocal('secret')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'secret'
                ? 'bg-stone-900 text-white shadow-2xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            🎨 Dibujos & Esquemas Mentales
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-stone-800">

          {/* TAB 1: ¿POR QUÉ APRENDO ESTO HOY? (MICRO-PROGRESIÓN) */}
          {activeTab === 'why' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 flex items-start gap-4">
                <span className="text-2xl mt-0.5">☕</span>
                <div>
                  <h4 className="font-serif font-bold text-sm text-amber-950">
                    Consejo de Clara para tu Día de Estudio {currentDay}
                  </h4>
                  <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                    "Muchos estudiantes se sienten abrumados el Día 1 porque la teoría de los casos alemanes es como ver el mapa de una montaña entera. Pero en mi cuaderno no estudiamos la montaña de golpe: <strong>cada día materializamos una sola herramienta</strong>."
                  </p>
                </div>
              </div>

              {/* Por qué el Día 2 es Acusativo y Supermercado */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-mono font-bold text-xs">
                    1
                  </span>
                  <h3 className="font-serif font-bold text-lg text-stone-900">
                    La Lógica de la Secuencia: De la Teoría a la Supervivencia
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="text-xs font-mono font-bold text-stone-500 uppercase">Día 1 • Génesis</div>
                    <div className="font-serif font-bold text-stone-900 text-sm mt-1">El Origen de los Casos</div>
                    <p className="text-[11px] text-stone-600 mt-1 leading-normal">
                      Entendiste que el alemán no tiene preposición "a" personal y necesita marcas en los artículos para saber quién hace qué.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                    <div className="text-xs font-mono font-bold text-blue-700 uppercase">Día 2 • Materialización</div>
                    <div className="font-serif font-bold text-blue-950 text-sm mt-1">Compras & Acusativo</div>
                    <p className="text-[11px] text-blue-900 mt-1 leading-normal">
                      ¡No cambiaste de tema! Aplicas el secreto del acusativo en el supermercado: solo el masculino cambia (<strong>der Käse ➔ den Käse</strong>).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200">
                    <div className="text-xs font-mono font-bold text-purple-700 uppercase">Día 3 • Conexión</div>
                    <div className="font-serif font-bold text-purple-950 text-sm mt-1">Citas & Objetos de Tandem</div>
                    <p className="text-[11px] text-purple-900 mt-1 leading-normal">
                      Usas acusativo para pedir el café y dativo para darme mi cuaderno (<strong>Ich gebe dir das Buch</strong>).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed font-sans">
                  💡 <strong>¿Por qué no nos quedamos 5 días estancados en la misma página de teoría?</strong><br />
                  Porque la mente se fatiga si no ve el objeto real. Al comprar alimentos en el Día 2 (<em>Käse, Apfel, Brot</em>), tu cerebro ancla el acusativo en situaciones vivas.
                </div>
              </div>

              {/* Botón de acción para el enfoque del día */}
              <div className="flex items-center justify-between p-4 bg-stone-900 text-white rounded-2xl">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 block uppercase">Tu Objetivo de Hoy</span>
                  <span className="font-serif font-bold text-sm">Completar las 3 Misiones del Día {currentDay}</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    setActiveTab('checkin');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-serif font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  <span>Ir al Challenge Diario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: REPASO ESPACIADO DE CASOS (EL MÉTODO EN ESPIRAL) */}
          {activeTab === 'review' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-5 rounded-2xl bg-purple-50/80 border border-purple-200 text-purple-950">
                <div className="flex items-center gap-2 mb-1">
                  <RotateCcw className="w-5 h-5 text-purple-700" />
                  <h4 className="font-serif font-bold text-sm text-purple-950">
                    El Método de Repaso en Espiral (Spaced Spiral Review)
                  </h4>
                </div>
                <p className="text-xs text-purple-900 leading-relaxed">
                  "Me dijiste: <em>'mañana voy a necesitar repasar tanto contenido del origen de los casos, es denso'</em>. ¡Tienes toda la razón! El alemán no se aprende de forma lineal (pasar página y olvidar). Se aprende en <strong>espiral</strong>: volvemos a la misma regla pero en una situación más avanzada."
                </p>
              </div>

              {/* Tarjeta de Repaso Rápido de 60 segundos */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    ⚡ Tarjeta de Repaso Rápido: Los 3 Casos en 60 Segundos
                  </h3>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-700 border border-stone-300">
                    A2.1 Fundamentos
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-900 text-white uppercase">
                      1. Nominativ
                    </span>
                    <div className="text-xs font-serif font-bold text-stone-900 mt-2">¿Quién hace la acción?</div>
                    <div className="text-xs text-stone-600 mt-0.5 font-mono">der / die / das / die</div>
                    <div className="text-[11px] text-stone-500 italic mt-1">"Der Mann kocht."</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-700 text-white uppercase">
                      2. Akkusativ
                    </span>
                    <div className="text-xs font-serif font-bold text-blue-950 mt-2">¿Qué cosa recibe la acción?</div>
                    <div className="text-xs text-blue-900 mt-0.5 font-mono">
                      <span className="font-bold underline">den</span> / die / das / die
                    </div>
                    <div className="text-[11px] text-blue-800 italic mt-1">"Ich kaufe den Käse."</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-700 text-white uppercase">
                      3. Dativ
                    </span>
                    <div className="text-xs font-serif font-bold text-purple-950 mt-2">¿A quién beneficia/destina?</div>
                    <div className="text-xs text-purple-900 mt-0.5 font-mono">
                      <span className="font-bold">dem / der / dem / den(+n)</span>
                    </div>
                    <div className="text-[11px] text-purple-800 italic mt-1">"Ich helfe der Frau."</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-stone-500">
                    ¿Quieres entrar al dossier teórico completo para releer los contrastes con español?
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      setActiveTab('grammar');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-serif font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all shrink-0"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Abrir Dossier de Origen de Casos</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BLOQUES SEMANALES (MACRO-PROGRESIÓN A2 ➔ B1) */}
          {activeTab === 'macro' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  El Mapa de Vuelo: 4 Bloques Semanales de A2 a B1
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Organizado según los documentos académicos para que nunca te preguntes "¿por dónde voy?".
                </p>
              </div>

              <div className="space-y-3">
                {/* Bloque 1 */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-stone-900 text-white font-mono text-xs font-bold">
                        Semana 1
                      </span>
                      <h4 className="font-serif font-bold text-sm text-stone-900">
                        Cimientos & La Trinidad de los Casos
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                      Bloque Actual
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    • <strong>Gramática:</strong> Génesis de Nominativ, Akkusativ y Dativ. Diferencia entre "nicht" y "kein".<br />
                    • <strong>Léxico Activo:</strong> Ropa (Kleidung), Supermercado y Alimentos, Números, Días de la semana.<br />
                    • <strong>Hito de Salida:</strong> Saber construir frases afirmativas y negativas sin confundir el sujeto con el objeto.
                  </p>
                </div>

                {/* Bloque 2 */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-mono text-xs font-bold border border-stone-300">
                        Semana 2
                      </span>
                      <h4 className="font-serif font-bold text-sm text-stone-900">
                        Dativo Profundo & Las Preposiciones Espaciales
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">Próximos días</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    • <strong>Gramática:</strong> Preposiciones fijas de dativo (<em>aus, bei, mit, nach, seit, von, zu</em>). El verbo "helfen". Preposiciones mixtas (Wohin? Akkusativ vs Wo? Dativ).<br />
                    • <strong>Léxico Activo:</strong> Vivienda y Muebles, Partes del cuerpo, Rutina diaria.<br />
                    • <strong>Hito de Salida:</strong> Describir ubicaciones y movimientos en la ciudad sin dudar de la terminación.
                  </p>
                </div>

                {/* Bloque 3 */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-mono text-xs font-bold border border-stone-300">
                        Semana 3
                      </span>
                      <h4 className="font-serif font-bold text-sm text-stone-900">
                        El Puente a B1: Subordinadas & Satzklammer
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">Fase Avanzada</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    • <strong>Gramática:</strong> Conectores subordinantes (<em>weil, dass, wenn, ob</em>) que expulsan el verbo conjugado al final. Verbos modales compuestos.<br />
                    • <strong>Léxico Activo:</strong> Trabajo y Profesiones, Emociones, Transporte público.<br />
                    • <strong>Hito de Salida:</strong> Argumentar causas y emitir opiniones complejas ("Ich lerne Deutsch, weil es cool ist").
                  </p>
                </div>

                {/* Bloque 4 */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-800 font-mono text-xs font-bold border border-stone-300">
                        Semana 4
                      </span>
                      <h4 className="font-serif font-bold text-sm text-stone-900">
                        Automatización, Partículas Modales & Examen A2
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">Consolidación</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    • <strong>Gramática:</strong> Partículas de naturalidad alemana (<em>doch, mal, ja, denn</em>). Pasado conversacional (Perfekt mit haben/sein).<br />
                    • <strong>Simulador:</strong> Citas completas en Kreuzberg, canciones indie sin subtítulos y diagnóstico final.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DIBUJOS & ESQUEMAS DIDÁCTICOS */}
          {activeTab === 'secret' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Esquemas Visuales del Cuaderno de Clara
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Dibujos simplificados para visualizar la arquitectura de una frase alemana.
                </p>
              </div>

              {/* Dibujo 1: El Tren Oracional Alemán */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚂</span>
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    Esquema 1: El "Tren" de los 3 Casos en una Frase Completa
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center pt-2">
                  <div className="p-3 rounded-xl bg-white border border-stone-300 shadow-2xs">
                    <span className="text-[10px] font-mono text-stone-400 block">VAGÓN 1</span>
                    <span className="font-mono text-xs font-bold text-stone-900 block mt-1">Der Chef</span>
                    <span className="text-[10px] text-amber-800 font-medium">Sujeto (Wer?)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-300 shadow-2xs">
                    <span className="text-[10px] font-mono text-amber-700 block">LOCOMOTORA (Pos. 2)</span>
                    <span className="font-mono text-xs font-bold text-amber-950 block mt-1">kauft</span>
                    <span className="text-[10px] text-amber-900 font-medium">Verbo Conjugado</span>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-300 shadow-2xs">
                    <span className="text-[10px] font-mono text-purple-600 block">VAGÓN 2 (Beneficiario)</span>
                    <span className="font-mono text-xs font-bold text-purple-900 block mt-1">dem Mitarbeiter</span>
                    <span className="text-[10px] text-purple-700 font-medium">Dativo (Wem?)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-300 shadow-2xs">
                    <span className="text-[10px] font-mono text-blue-600 block">VAGÓN 3 (Objeto)</span>
                    <span className="font-mono text-xs font-bold text-blue-900 block mt-1">einen Kaffee.</span>
                    <span className="text-[10px] text-blue-700 font-medium">Acusativo (Wen?)</span>
                  </div>
                </div>

                <p className="text-[11px] text-stone-600 italic pt-1 text-center font-serif">
                  "El jefe le compra un café al empleado." En alemán, el beneficiario (Dativo) casi siempre va antes del objeto directo (Acusativo).
                </p>
              </div>

              {/* Dibujo 2: La Pinza Oracional (Satzklammer) */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🧲</span>
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    Esquema 2: La Pinza Oracional con Verbos Modales (Satzklammer)
                  </h4>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-white rounded-xl border border-stone-300 font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 font-bold text-center w-full sm:w-auto">
                    Ich <span className="underline">kann</span> (Modal en Posición 2)
                  </div>
                  <span className="text-stone-400 font-sans text-xs">... abraza toda la información en medio ...</span>
                  <div className="p-2.5 rounded-lg bg-stone-900 text-white font-bold text-center w-full sm:w-auto">
                    gut Deutsch <span className="underline">sprechen</span>. (Infinitivo al final)
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-mono">
          <div className="flex items-center gap-2">
            <span>🇩🇪 Notas de Clara • Nivel A2</span>
            <span>•</span>
            <span className="text-stone-800 font-bold">Voz Neural IA Disponible</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-serif font-bold cursor-pointer transition-colors"
          >
            Entendido, volver al estudio
          </button>
        </div>

      </div>
    </div>
  );
}
