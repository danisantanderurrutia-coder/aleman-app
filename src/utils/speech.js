// Utilidad para reproducir audio en alemán con la síntesis de voz nativa del navegador

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.germanVoice = null;
    this.rate = 0.85; // Velocidad amigable para estudiantes A2
    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const findVoice = () => {
      const voices = this.synth.getVoices();
      // Buscar voces en alemán preferentemente de alta calidad
      const deVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Anna') || v.name.includes('Markus')))
        || voices.find(v => v.lang.startsWith('de'))
        || null;
      this.germanVoice = deVoice;
    };

    findVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findVoice;
    }
  }

  speak(text, customRate = null) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancelar cualquier audio anterior
    this.synth.cancel();

    // Limpiar texto de signos innecesarios para pronunciar solo la frase
    const cleanText = text.replace(/\[.*?\]/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'de-DE';
    utterance.rate = customRate || this.rate;
    utterance.pitch = 1.0;

    if (this.germanVoice) {
      utterance.voice = this.germanVoice;
    }

    this.synth.speak(utterance);
  }

  setRate(newRate) {
    this.rate = newRate;
  }
}

export const speechService = new SpeechService();
