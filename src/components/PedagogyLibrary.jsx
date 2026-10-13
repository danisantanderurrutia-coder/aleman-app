import React, { useState } from 'react';
import { pedagogyArticles } from '../data/pedagogy';
import { BookOpen, Brain, Clock, Bookmark, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function PedagogyLibrary({ setActiveTab }) {
  const [selectedArticleId, setSelectedArticleId] = useState(pedagogyArticles[0].id);

  const article = pedagogyArticles.find(a => a.id === selectedArticleId) || pedagogyArticles[0];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1 text-stone-500 text-xs font-mono tracking-widest uppercase">
          <Bookmark className="w-3.5 h-3.5 text-stone-700" />
          <span>Bibliothek der Sprachdidaktik • Ciencia del Aprendizaje</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900">
          Pedagogía de Aprender Idiomas
        </h2>
        <p className="text-xs text-stone-500 mt-1 max-w-2xl leading-relaxed">
          Fundamentos de la Lingüística Aplicada y la Neurociencia del Bilingüismo: cómo hackear la memoria de trabajo y automatizar el habla en nivel A2.
        </p>

        {/* Article Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {pedagogyArticles.map((art) => {
            const isSelected = art.id === article.id;
            return (
              <button
                key={art.id}
                onClick={() => setSelectedArticleId(art.id)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-stone-800 shadow-sm ring-1 ring-stone-800'
                    : 'bg-white hover:bg-stone-50 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono text-stone-400">{art.readingTime}</span>
                  <BookOpen className="w-3.5 h-3.5 text-stone-400" />
                </div>
                <h4 className="text-xs font-serif font-bold text-stone-900 line-clamp-1">{art.title}</h4>
                <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{art.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Reading Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm">
        <div className="border-b border-stone-100 pb-6 mb-8">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest">
            Tratado Metodológico • Lectura de {article.readingTime}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-2">
            {article.title}
          </h3>
          <p className="text-sm font-serif italic text-amber-900 mt-1">
            {article.subtitle}
          </p>
        </div>

        {/* Abstract / Summary */}
        <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-stone-800 text-sm leading-relaxed mb-8 font-serif">
          <strong className="block text-stone-900 font-sans text-xs uppercase tracking-wider mb-2 font-bold">
            Tesis Central:
          </strong>
          {article.summary}
        </div>

        {/* Key Concepts */}
        <div className="space-y-4 mb-8">
          <h4 className="text-xs font-mono font-bold text-stone-600 uppercase tracking-widest">
            Conceptos Teóricos Clave:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {article.keyConcepts.map((kc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200 text-xs">
                <span className="font-serif font-bold text-stone-900 text-sm block mb-1">
                  {kc.term}
                </span>
                <p className="text-stone-600 leading-relaxed font-sans">{kc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Action Plan */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-3.5 mb-8">
          <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold text-sm font-serif mb-1 text-amber-900">
              Aplicación Práctica en tu Rutina:
            </strong>
            <p className="leading-relaxed font-sans text-stone-700">{article.actionPlan}</p>
          </div>
        </div>

        {/* Quick App Link */}
        <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-stone-500 font-sans">
            ¿Listo para poner en práctica este método en la aplicación?
          </span>
          <button
            onClick={() => setActiveTab('sprint')}
            className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Ir al Sprint de 7 Palabras</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
