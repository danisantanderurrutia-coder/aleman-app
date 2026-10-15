import React from 'react';
import { Volume2, Sparkles, AlertCircle, Lightbulb, Bookmark, Check } from 'lucide-react';
import { speechService } from '../utils/speech';

export default function FormattedDossierView({ dossiers }) {
  if (!dossiers || !dossiers.length) return null;

  const accentBorders = [
    'border-l-4 border-l-amber-500 bg-amber-50/20',
    'border-l-4 border-l-blue-500 bg-blue-50/20',
    'border-l-4 border-l-purple-500 bg-purple-50/20',
    'border-l-4 border-l-emerald-500 bg-emerald-50/20',
    'border-l-4 border-l-rose-500 bg-rose-50/20',
  ];

  return (
    <div className="space-y-6 pt-4 border-t border-stone-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-amber-600" />
          <h3 className="font-serif font-bold text-lg text-stone-900">
            Dossier Teórico y Conceptual del Módulo
          </h3>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-300 font-semibold">
          Lectura Didáctica Destacada
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {dossiers.map((dossier, dIdx) => {
          const accentStyle = accentBorders[dIdx % accentBorders.length];

          return (
            <div
              key={dIdx}
              className={`p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm transition-all hover:shadow-md ${accentStyle}`}
            >
              {/* Dossier Header */}
              <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-stone-900 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {dIdx + 1}
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-stone-950">
                    {dossier.title}
                  </h4>
                </div>
              </div>

              {/* Dossier Formatted Body */}
              <DossierBody text={dossier.content} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DossierBody({ text }) {
  if (!text) return null;

  // Split content into blocks by double newlines or single newlines
  const blocks = text.split('\n\n');

  return (
    <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();

        // 1. Detect Markdown Table
        if (trimmed.includes('|') && trimmed.includes('\n')) {
          return <TableBlock key={bIdx} raw={trimmed} />;
        }

        // 2. Detect Callout Alert (⚠️, 🔑, 📌)
        if (trimmed.startsWith('⚠️') || trimmed.startsWith('🔑') || trimmed.startsWith('📌')) {
          return <CalloutBlock key={bIdx} text={trimmed} />;
        }

        // 3. Detect Bullet List
        if (trimmed.includes('\n• ') || trimmed.startsWith('• ') || trimmed.includes('\n* ') || trimmed.startsWith('* ')) {
          return <ListBlock key={bIdx} text={trimmed} />;
        }

        // 4. Standard Paragraph with highlighted tokens
        return (
          <p key={bIdx} className="leading-relaxed">
            <HighlightedSpan text={trimmed} />
          </p>
        );
      })}
    </div>
  );
}

// Callout alert box for rules and mnemonics
function CalloutBlock({ text }) {
  const isWarning = text.startsWith('⚠️');
  const isKey = text.startsWith('🔑');
  const isPin = text.startsWith('📌');

  let bg = 'bg-amber-50 border-amber-200 text-amber-950';
  let badge = 'bg-amber-200 text-amber-900';

  if (isWarning) {
    bg = 'bg-rose-50 border-rose-200 text-rose-950';
    badge = 'bg-rose-200 text-rose-900';
  } else if (isKey) {
    bg = 'bg-blue-50 border-blue-200 text-blue-950';
    badge = 'bg-blue-200 text-blue-900';
  } else if (isPin) {
    bg = 'bg-purple-50 border-purple-200 text-purple-950';
    badge = 'bg-purple-200 text-purple-900';
  }

  return (
    <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed my-2 shadow-2xs ${bg}`}>
      <div className="flex items-start gap-2.5">
        <span className="text-base shrink-0 mt-0.5">
          {isWarning ? '⚠️' : isKey ? '🔑' : '📌'}
        </span>
        <div className="flex-1">
          <HighlightedSpan text={text.slice(2).trim()} />
        </div>
      </div>
    </div>
  );
}

// List renderer with styled badges
function ListBlock({ text }) {
  const lines = text.split('\n').filter(l => l.trim().length > 0);

  return (
    <div className="space-y-1.5 my-2 pl-1">
      {lines.map((line, idx) => {
        const clean = line.replace(/^[•*]\s*/, '').trim();
        return (
          <div key={idx} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
            <div className="flex-1 leading-relaxed">
              <HighlightedSpan text={clean} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Table renderer for markdown tables inside dossier
function TableBlock({ raw }) {
  const lines = raw.split('\n').filter(l => l.trim().length > 0);
  if (lines.length < 2) return <p>{raw}</p>;

  // Check if first line is headers
  const headerParts = lines[0].split('|').map(s => s.trim()).filter(Boolean);
  const dataLines = lines.slice(1);

  return (
    <div className="overflow-x-auto my-3 rounded-xl border border-stone-200 shadow-2xs bg-white">
      <table className="w-full text-xs font-mono text-left border-collapse">
        <thead>
          <tr className="bg-stone-900 text-white">
            {headerParts.map((h, hIdx) => (
              <th key={hIdx} className="p-2.5 font-bold uppercase tracking-wider text-[11px] border-r border-stone-800 last:border-r-0">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {dataLines.map((row, rIdx) => {
            const cleanRow = row.replace(/^\*+\s*/, '');
            const cells = cleanRow.split('|').map(s => s.trim()).filter(Boolean);
            const isAkk = cleanRow.toLowerCase().includes('acusativo') || cleanRow.toLowerCase().includes('akkusativ');
            const isDat = cleanRow.toLowerCase().includes('dativo') || cleanRow.toLowerCase().includes('dativ');

            return (
              <tr 
                key={rIdx} 
                className={`hover:bg-stone-50 transition-colors ${
                  isAkk ? 'bg-blue-50/30' : isDat ? 'bg-purple-50/30' : ''
                }`}
              >
                {cells.map((cell, cIdx) => (
                  <td 
                    key={cIdx} 
                    className={`p-2.5 border-r border-stone-100 last:border-r-0 ${
                      cIdx === 0 ? 'font-bold text-stone-900' : 'text-stone-700'
                    }`}
                  >
                    <HighlightedSpan text={cell} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// Highlights quotes ("..."), cases (Akkusativ, Dativ, Nominativ), bold (**...**), and italics (*...*)
function HighlightedSpan({ text }) {
  if (!text) return null;

  // We can tokenize by quotes or bold formatting
  // Regex matches: "quote" | **bold** | *italic*
  const parts = text.split(/(".*?"|\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <>
      {parts.map((part, idx) => {
        if (!part) return null;

        // 1. Quoted German string (e.g., "Der Mann sieht den Hund")
        if (part.startsWith('"') && part.endsWith('"') && part.length > 2) {
          const inner = part.slice(1, -1);
          return (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-900 font-serif italic text-[13px] group transition-colors"
            >
              <span>"{inner}"</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speechService.speak(inner);
                }}
                className="opacity-70 group-hover:opacity-100 hover:text-amber-800 cursor-pointer p-0.5 rounded"
                title={`Escuchar locución: "${inner}"`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </span>
          );
        }

        // 2. Bold text (**bold**)
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          const inner = part.slice(2, -2);
          return (
            <strong key={idx} className="font-bold text-stone-950">
              {inner}
            </strong>
          );
        }

        // 3. Italic text (*italic*)
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          const inner = part.slice(1, -1);
          return (
            <em key={idx} className="italic font-serif text-stone-800">
              {inner}
            </em>
          );
        }

        // 4. Keyword highlighting in standard text
        return <KeywordHighlighter key={idx} text={part} />;
      })}
    </>
  );
}

// Inline keyword highlighter for case names and critical markers
function KeywordHighlighter({ text }) {
  // Replace critical grammatical terms with colored pills
  // Akkusativ -> blue, Dativ -> purple, Nominativ -> amber/stone
  const tokenRegex = /\b(Akkusativ|Acusativo|Dativ|Dativo|Nominativ|Nominativo|den|dem|einen|einem|meinen|meinem|keinen|keinem|helfen|nicht|kein)\b/gi;
  const segments = text.split(tokenRegex);

  return (
    <>
      {segments.map((seg, sIdx) => {
        const lower = seg.toLowerCase();
        if (lower === 'akkusativ' || lower === 'acusativo' || lower === 'den' || lower === 'einen' || lower === 'meinen' || lower === 'keinen') {
          return (
            <span
              key={sIdx}
              className="font-bold text-blue-900 bg-blue-100/80 px-1 py-0.5 rounded mx-0.5 font-mono text-[12px] border border-blue-200"
            >
              {seg}
            </span>
          );
        }

        if (lower === 'dativ' || lower === 'dativo' || lower === 'dem' || lower === 'einem' || lower === 'meinem' || lower === 'keinem' || lower === 'helfen') {
          return (
            <span
              key={sIdx}
              className="font-bold text-purple-900 bg-purple-100/80 px-1 py-0.5 rounded mx-0.5 font-mono text-[12px] border border-purple-200"
            >
              {seg}
            </span>
          );
        }

        if (lower === 'nominativ' || lower === 'nominativo') {
          return (
            <span
              key={sIdx}
              className="font-bold text-amber-950 bg-amber-100/80 px-1 py-0.5 rounded mx-0.5 font-mono text-[12px] border border-amber-300"
            >
              {seg}
            </span>
          );
        }

        if (lower === 'nicht') {
          return (
            <span
              key={sIdx}
              className="font-bold text-amber-900 bg-amber-100 px-1 py-0.5 rounded mx-0.5 font-mono text-[12px]"
            >
              {seg}
            </span>
          );
        }

        if (lower === 'kein') {
          return (
            <span
              key={sIdx}
              className="font-bold text-rose-900 bg-rose-100 px-1 py-0.5 rounded mx-0.5 font-mono text-[12px]"
            >
              {seg}
            </span>
          );
        }

        return <span key={sIdx}>{seg}</span>;
      })}
    </>
  );
}
