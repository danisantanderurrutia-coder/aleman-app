// Motor fonético híbrido bilingüe (Alemán / Español):
// 1. Voz Neural IA (Google Neural TTS Stream en alemán natural para alemán, y voz nativa en español de España/México para español)
// 2. Síntesis local del navegador con priorización de voces Premium / Natural (de-DE y es-ES/es-MX) como respaldo.

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.germanVoice = null;
    this.spanishVoice = null;
    this.rate = 0.9; // Velocidad pedagógica natural
    this.engine = 'neural'; // 'neural' | 'browser'
    this.currentAudio = null;
    this.audioCache = new Map();
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      const voices = this.synth.getVoices();
      // Buscar voces en alemán preferentemente Neural, Natural o Premium
      const deVoice = voices.find(v => 
        v.lang.startsWith('de') && (
          v.name.includes('Natural') || 
          v.name.includes('Neural') ||
          v.name.includes('Google') || 
          v.name.includes('Premium') || 
          v.name.includes('Katja') ||
          v.name.includes('Anna') || 
          v.name.includes('Markus') ||
          v.name.includes('Yannick')
        )
      )
      || voices.find(v => v.lang.startsWith('de'))
      || null;

      // Buscar voces en español (España o México) con calidad Natural o Premium
      const esVoice = voices.find(v => 
        (v.lang.startsWith('es') || v.lang.includes('es-')) && (
          v.name.includes('Natural') || 
          v.name.includes('Neural') ||
          v.name.includes('Google') || 
          v.name.includes('Paulina') || 
          v.name.includes('Monica') || 
          v.name.includes('Mónica') || 
          v.name.includes('Jorge') ||
          v.name.includes('Juan') ||
          v.name.includes('Diego') ||
          v.name.includes('Helena') ||
          v.name.includes('Laura')
        )
      )
      || voices.find(v => v.lang.startsWith('es'))
      || null;

      this.germanVoice = deVoice;
      this.spanishVoice = esVoice;
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  cleanText(text) {
    return text
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .replace(/[¡¿]/g, '')
      .replace(/[*_#~`]/g, '')
      .replace(/👉|⭐|🔑|📌|💡|👻|❤️|🎸|⚡|☀️|🏆/g, '')
      .trim();
  }

  detectLanguage(text) {
    if (!text) return 'de';
    // Caracteres españoles indiscutibles
    if (/[¿¡ñáíóú]/i.test(text)) return 'es';
    // Caracteres alemanes indiscutibles
    if (/[äöüß]/i.test(text)) return 'de';

    const words = text.toLowerCase().match(/[a-z]+/g) || [];
    if (words.length === 0) return 'de';

    const esTokens = new Set([
      'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'del', 'de', 'en', 'y', 'o',
      'que', 'por', 'para', 'con', 'es', 'son', 'fue', 'era', 'no', 'si', 'hombre', 'perro',
      'mujer', 'este', 'esta', 'esto', 'mi', 'mis', 'tu', 'tus', 'su', 'sus', 'nuestro', 'nuestra',
      'como', 'cuando', 'donde', 'porque', 'pero', 'tengo', 'tiene', 'tienen', 've', 'veo', 'vemos',
      'hola', 'gracias', 'buenos', 'dias', 'mucho', 'tambien', 'veces', 'aqui', 'alla', 'solo',
      'lo', 'le', 'les', 'se', 'me', 'te', 'nos', 'alguien', 'amigo', 'amiga', 'hablar', 'aprender',
      'caso', 'casos', 'oracion', 'frase', 'sujeto', 'objeto', 'directo', 'indirecto'
    ]);

    const deTokens = new Set([
      'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines',
      'und', 'oder', 'aber', 'denn', 'weil', 'dass', 'in', 'im', 'an', 'am', 'auf', 'fuer',
      'mit', 'von', 'zu', 'zur', 'zum', 'bei', 'beim', 'nach', 'aus', 'ist', 'sind', 'war', 'waren',
      'nicht', 'kein', 'keine', 'keinen', 'keinem', 'keiner', 'keines', 'ich', 'du', 'er', 'sie',
      'es', 'wir', 'ihr', 'man', 'mein', 'dein', 'sein', 'unser', 'euer', 'wer', 'wen', 'wem',
      'wessen', 'wie', 'was', 'wo', 'wohin', 'woher', 'warum', 'sehr', 'auch', 'mann', 'hund',
      'frau', 'kind', 'sehen', 'sieht', 'haben', 'hat', 'hatte', 'hallo', 'danke', 'bitte', 'gut'
    ]);

    let esScore = 0;
    let deScore = 0;

    for (const w of words) {
      if (esTokens.has(w)) esScore += 2;
      if (deTokens.has(w)) deScore += 2;
    }

    return esScore > deScore ? 'es' : 'de';
  }

  speak(text, customRate = null, forcedLang = null) {
    const clean = this.cleanText(text);
    if (!clean) return;

    // Detener cualquier audio previo
    this.cancel();

    const targetRate = customRate || this.rate;
    const targetLang = forcedLang || this.detectLanguage(text);

    // Si el motor es 'neural', intentamos reproducir el stream de voz natural IA
    if (this.engine === 'neural') {
      try {
        const encoded = encodeURIComponent(clean.slice(0, 200)); // Limite seguro por request
        // Si es español, usamos es-ES (voz española/latina clara y natural), si es alemán de
        const tlParam = targetLang === 'es' ? 'es-ES' : 'de';
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${tlParam}&client=tw-ob&q=${encoded}`;
        
        let audio = this.audioCache.get(url);
        if (!audio) {
          audio = new Audio(url);
          this.audioCache.set(url, audio);
        }

        audio.playbackRate = targetRate;
        audio.currentTime = 0;
        this.currentAudio = audio;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn('Fallback a síntesis local del navegador:', err);
            this.speakWithBrowserSynth(clean, targetRate, targetLang);
          });
        }
        return;
      } catch (e) {
        console.warn('Fallo en Audio Neural, usando síntesis local:', e);
      }
    }

    // Fallback a síntesis del navegador
    this.speakWithBrowserSynth(clean, targetRate, targetLang);
  }

  speakWithBrowserSynth(text, rate, targetLang = 'de') {
    if (!this.synth) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang === 'es' ? 'es-ES' : 'de-DE';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    if (targetLang === 'es' && this.spanishVoice) {
      utterance.voice = this.spanishVoice;
    } else if (targetLang === 'de' && this.germanVoice) {
      utterance.voice = this.germanVoice;
    }

    this.synth.speak(utterance);
  }

  cancel() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }
  }

  setRate(newRate) {
    this.rate = newRate;
    if (this.currentAudio) {
      this.currentAudio.playbackRate = newRate;
    }
  }

  setEngine(mode) {
    if (mode === 'neural' || mode === 'browser') {
      this.engine = mode;
    }
  }

  getEngine() {
    return this.engine;
  }
}

export const speechService = new SpeechService();

