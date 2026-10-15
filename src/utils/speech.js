// Motor fonético híbrido para alemán:
// 1. Voz Neural IA (Google Neural TTS Stream en alemán natural, fluido y humano)
// 2. Síntesis local del navegador con priorización de voces Premium / Natural como respaldo.

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.germanVoice = null;
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

      this.germanVoice = deVoice;
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

  speak(text, customRate = null) {
    const clean = this.cleanText(text);
    if (!clean) return;

    // Detener cualquier audio previo
    this.cancel();

    const targetRate = customRate || this.rate;

    // Si el motor es 'neural', intentamos reproducir el stream de voz natural IA
    if (this.engine === 'neural') {
      try {
        const encoded = encodeURIComponent(clean.slice(0, 200)); // Limite seguro por request
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encoded}`;
        
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
            this.speakWithBrowserSynth(clean, targetRate);
          });
        }
        return;
      } catch (e) {
        console.warn('Fallo en Audio Neural, usando síntesis local:', e);
      }
    }

    // Fallback a síntesis del navegador
    this.speakWithBrowserSynth(clean, targetRate);
  }

  speakWithBrowserSynth(text, rate) {
    if (!this.synth) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    if (this.germanVoice) {
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

