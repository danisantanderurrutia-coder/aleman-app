import React, { useState, useEffect } from 'react';
import { datingScenarios } from '../data/datingGame';
import { speechService } from '../utils/speech';
import { addXP } from '../utils/storage';
import { 
  Heart, Volume2, Sparkles, MessageCircle, RotateCcw, 
  MapPin, CheckCircle2, XCircle, ArrowRight, Bookmark, Eye, EyeOff 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DatingGameTrainer({ progress, setProgress }) {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [charm, setCharm] = useState(20); // 0 to 100
  const [chosenOption, setChosenOption] = useState(null);
  const [isStepEvaluated, setIsStepEvaluated] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [dateState, setDateState] = useState('playing'); // 'playing' | 'won' | 'lost'

  const scenario = datingScenarios[selectedScenarioIdx] || datingScenarios[0];
  const currentStep = scenario.steps[stepIdx];

  // Reset date whenever scenario changes
  useEffect(() => {
    resetDate();
  }, [selectedScenarioIdx]);

  // Speak character line when step changes
  useEffect(() => {
    if (currentStep && dateState === 'playing') {
      speechService.speak(currentStep.herLine);
    }
  }, [stepIdx, selectedScenarioIdx, dateState]);

  const resetDate = () => {
    setStepIdx(0);
    setHearts(3);
    setCharm(25);
    setChosenOption(null);
    setIsStepEvaluated(false);
    setDateState('playing');
  };

  const handleSelectOption = (opt) => {
    if (isStepEvaluated || dateState !== 'playing') return;

    setChosenOption(opt);
    setIsStepEvaluated(true);

    // Speak user German line
    speechService.speak(opt.german);

    const newHearts = Math.max(0, hearts + opt.heartDelta);
    const newCharm = Math.min(100, Math.max(0, charm + opt.charmDelta));
    setHearts(newHearts);
    setCharm(newCharm);

    if (newHearts <= 0) {
      setDateState('lost');
    } else {
      // Play her reply audio after a brief pause
      setTimeout(() => {
        speechService.speak(opt.herReply);
      }, 1800);
    }
  };

  const handleNextStep = () => {
    if (stepIdx < scenario.steps.length - 1) {
      setStepIdx(stepIdx + 1);
      setChosenOption(null);
      setIsStepEvaluated(false);
    } else {
      // Date completed successfully!
      setDateState('won');
      addXP(40);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
            <Bookmark className="w-3.5 h-3.5 text-stone-700" />
            <span>Duolingo-Style • Flirt & Date A2</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Simulador de Citas en Escenarios Reales
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xl">
            Aprende a romper el hielo, usar objetos situacionales y ser encantador en alemán A2 sin perder corazones.
          </p>
        </div>

        {/* Status Bar: Hearts & Charm */}
        <div className="flex items-center gap-4 p-2 px-4 rounded-2xl bg-white border border-stone-200 shadow-2xs self-start sm:self-auto">
          {/* Hearts */}
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 transition-all ${
                  i < hearts ? 'text-rose-600 fill-rose-600 scale-100' : 'text-stone-300 fill-stone-100 scale-90'
                }`}
              />
            ))}
          </div>

          <div className="h-5 w-[1px] bg-stone-200" />

          {/* Charm Meter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-stone-700">Encanto:</span>
            <div className="w-20 h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-500"
                style={{ width: `${charm}%` }}
              />
            </div>
            <span className="font-mono text-xs font-bold text-rose-800">{charm}%</span>
          </div>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {datingScenarios.map((sc, idx) => {
          const isSelected = idx === selectedScenarioIdx;
          return (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioIdx(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                isSelected
                  ? 'bg-white border-stone-900 shadow-sm ring-1 ring-stone-900'
                  : 'bg-white hover:bg-stone-50 border-stone-200'
              }`}
            >
              <img
                src={sc.image}
                alt={sc.name}
                className="w-12 h-12 rounded-xl object-cover border border-stone-200 shadow-2xs shrink-0"
              />
              <div className="overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif font-bold text-stone-900 text-sm truncate">{sc.name}, {sc.age}</h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-stone-100 text-stone-600">
                    {sc.city.split(' ')[0]}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 truncate mt-0.5">{sc.role}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      {dateState === 'playing' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Girl Photo + Scene Info + 8x8 Item Sprite */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-sm">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-stone-100 shadow-inner">
                <img
                  src={scenario.image}
                  alt={scenario.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-4 text-white">
                  <h3 className="text-xl font-serif font-bold">
                    {scenario.name}, {scenario.age}
                  </h3>
                  <p className="text-xs text-stone-200 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{scenario.location}</span>
                  </p>
                </div>
              </div>

              {/* Situational Item (8x8 pixel sprite box) */}
              <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center gap-3.5">
                {/* 8x8 Sprite Display */}
                <div className="w-12 h-12 grid grid-cols-8 grid-rows-8 gap-0.5 bg-white p-1 rounded-xl border border-stone-300 shadow-2xs shrink-0">
                  {scenario.item.grid.map((row, r) =>
                    row.map((cell, c) => (
                      <div
                        key={`${r}-${c}`}
                        style={{ backgroundColor: scenario.item.palette[cell] }}
                      />
                    ))
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-stone-700 border border-stone-200 uppercase">
                      Objeto Clave
                    </span>
                    <span className="font-serif font-bold text-xs text-stone-900">
                      {scenario.item.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 font-sans mt-0.5 leading-snug">
                    {scenario.item.meaning}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Her Dialogue Bubble + Player Choices */}
          <div className="lg:col-span-7 space-y-6">
            {/* Her Speech Bubble */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm relative">
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-100">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-rose-600" />
                  <span>{scenario.name} dice:</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowTranslation(!showTranslation)}
                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-[11px] font-mono flex items-center gap-1 cursor-pointer"
                    title="Ver traducción"
                  >
                    {showTranslation ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showTranslation ? 'Ocultar' : 'Traducir'}</span>
                  </button>
                  <button
                    onClick={() => speechService.speak(currentStep.herLine)}
                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer shadow-2xs"
                    title="Repetir audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-lg font-serif font-bold text-stone-900 leading-relaxed">
                "{currentStep.herLine}"
              </p>

              {showTranslation && (
                <p className="text-xs font-sans text-stone-500 mt-2 italic">
                  "{currentStep.herTranslation}"
                </p>
              )}

              <p className="text-xs text-stone-400 mt-4 pt-3 border-t border-stone-100 font-sans">
                💡 <strong>Situación:</strong> {currentStep.situation}
              </p>
            </div>

            {/* Choices */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest block">
                ¿Qué le respondes en alemán? (Paso {currentStep.step} de {scenario.steps.length})
              </span>

              {currentStep.options.map((opt, idx) => {
                const isChosen = chosenOption === opt;
                let btnStyle = 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800';

                if (isStepEvaluated) {
                  if (isChosen) {
                    btnStyle = opt.charmDelta > 0
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-xs'
                      : 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    btnStyle = 'bg-stone-50/50 border-stone-200 text-stone-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isStepEvaluated}
                    className={`w-full text-left p-5 rounded-2xl border text-sm transition-all cursor-pointer shadow-2xs ${btnStyle}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif font-bold text-base leading-snug">
                          {opt.german}
                        </p>
                        <p className="text-xs text-stone-500 mt-1 italic font-sans">
                          "{opt.translation}"
                        </p>
                      </div>

                      {isStepEvaluated && isChosen && (
                        opt.charmDelta > 0 ? (
                          <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                            +{opt.charmDelta}%
                          </span>
                        ) : (
                          <span className="font-mono text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full shrink-0">
                            -1 ❤️
                          </span>
                        )
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Evaluation & Her Followup Reply */}
            {isStepEvaluated && chosenOption && (
              <div className="p-6 rounded-3xl bg-stone-900 text-white shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  {chosenOption.charmDelta > 0 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  )}
                  <span className="font-serif font-bold text-sm">
                    {chosenOption.feedback}
                  </span>
                </div>

                {/* Her actual reply to your choice */}
                <div className="p-3.5 rounded-xl bg-stone-800 border border-stone-700 text-xs">
                  <span className="font-mono text-stone-400 block mb-0.5">Respuesta de {scenario.name}:</span>
                  <p className="font-serif font-medium text-stone-100 text-sm">"{chosenOption.herReply}"</p>
                  <p className="text-stone-400 text-[11px] italic mt-0.5">"{chosenOption.herReplyEs}"</p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="px-6 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-medium text-xs flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{stepIdx < scenario.steps.length - 1 ? 'Continuar conversación' : 'Ver resultado de la cita'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DATE WON SCREEN */}
      {dateState === 'won' && (
        <div className="p-10 sm:p-14 rounded-3xl bg-white border border-emerald-300 shadow-md text-center max-w-xl mx-auto space-y-6">
          <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-emerald-400 shadow-sm">
            <img src={scenario.image} alt={scenario.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ¡Cita Exitosa! • Encanto: {charm}%
            </span>
            <h3 className="text-3xl font-serif font-bold text-stone-900 mt-3">
              Has conseguido una segunda cita con {scenario.name} 🎉
            </h3>
            <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
              Supiste romper el hielo con educación, prestar atención al entorno, usar el vocabulario A2 adecuado y proponer un encuentro natural en alemán.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700">
            Recompensa: +40 XP para tu expediente académico
          </div>

          <button
            onClick={resetDate}
            className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs cursor-pointer shadow-xs"
          >
            Jugar con otro personaje
          </button>
        </div>
      )}

      {/* DATE LOST SCREEN */}
      {dateState === 'lost' && (
        <div className="p-10 sm:p-14 rounded-3xl bg-white border border-rose-300 shadow-md text-center max-w-xl mx-auto space-y-6">
          <div className="w-20 h-20 rounded-full mx-auto bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-rose-500">
            <Heart className="w-10 h-10 stroke-1 fill-rose-200" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Te quedaste sin corazones (0 ❤️)
            </span>
            <h3 className="text-3xl font-serif font-bold text-stone-900 mt-3">
              La cita se enfrió...
            </h3>
            <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
              En Alemania, frases demasiado bruscas, hablar a gritos o no prestar atención a lo que la otra persona disfruta rompe el encanto. ¡Vuelve a intentarlo usando más cortesía y conectores amables!
            </p>
          </div>

          <button
            onClick={resetDate}
            className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs cursor-pointer shadow-xs"
          >
            Reiniciar cita con {scenario.name}
          </button>
        </div>
      )}
    </div>
  );
}
