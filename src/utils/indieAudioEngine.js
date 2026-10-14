// Web Audio API Indie Music Engine
// Generates ambient, melodic indie/lo-fi acoustic and electric piano chord progressions
// tailored for German indie songs, with full timing synchronization for Karaoke lyrics.

class IndieAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.currentTrack = null;
    this.currentTime = 0;
    this.duration = 60; // 60-90s loops
    this.volume = 0.6;
    this.timerInterval = null;
    this.onTimeUpdateCallback = null;
    this.onTrackEndCallback = null;
    this.loopNodes = [];
    this.masterGain = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
  }

  loadTrack(track) {
    this.stop();
    this.currentTrack = track;
    this.currentTime = 0;
    this.duration = track.duration || 60;
  }

  play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // Start audio synthesizer loop
    this.scheduleNotes();

    // Start playback timer clock
    const startTime = Date.now() - (this.currentTime * 1000);
    this.timerInterval = setInterval(() => {
      this.currentTime = (Date.now() - startTime) / 1000;
      if (this.currentTime >= this.duration) {
        // loop or next track
        this.currentTime = 0;
        if (this.onTrackEndCallback) {
          this.onTrackEndCallback();
        }
      }
      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(this.currentTime);
      }
    }, 100);
  }

  pause() {
    this.isPlaying = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.stopAudioNodes();
  }

  stop() {
    this.pause();
    this.currentTime = 0;
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(0);
    }
  }

  seek(seconds) {
    const wasPlaying = this.isPlaying;
    if (wasPlaying) this.pause();
    this.currentTime = Math.max(0, Math.min(this.duration, seconds));
    if (this.onTimeUpdateCallback) {
      this.onTimeUpdateCallback(this.currentTime);
    }
    if (wasPlaying) this.play();
  }

  stopAudioNodes() {
    this.loopNodes.forEach(node => {
      try {
        node.stop();
        node.disconnect();
      } catch (e) {}
    });
    this.loopNodes = [];
  }

  scheduleNotes() {
    if (!this.audioCtx || !this.isPlaying) return;

    // Play periodic chord arpeggios according to the track key/bpm
    const bpm = (this.currentTrack && this.currentTrack.bpm) || 85;
    const beatSec = 60 / bpm;
    const ctx = this.audioCtx;

    // Scale notes for indie chords (Warm electric Rhodes/Wurlitzer simulation)
    const chordProgressions = {
      annenmaykantereit: [
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
      ],
      kummer: [
        [146.83, 174.61, 220.00, 261.63], // Dm7 (indie rap beat)
        [116.54, 146.83, 174.61, 220.00], // Bbmaj7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [130.81, 164.81, 196.00, 246.94], // C
      ],
      provinz: [
        [196.00, 246.94, 293.66, 392.00], // G
        [164.81, 196.00, 246.94, 329.63], // Em
        [261.63, 329.63, 392.00, 523.25], // C
        [146.83, 220.00, 293.66, 369.99], // D
      ],
      lisbeth: [
        [261.63, 329.63, 392.00], // C
        [220.00, 261.63, 329.63], // Am
        [174.61, 220.00, 261.63], // F
        [196.00, 246.94, 293.66], // G
      ]
    };

    const trackId = (this.currentTrack && this.currentTrack.id) || 'annenmaykantereit';
    const chords = chordProgressions[trackId] || chordProgressions.annenmaykantereit;

    const playChordLoop = () => {
      if (!this.isPlaying) return;
      const now = ctx.currentTime;
      const barDuration = beatSec * 4;

      chords.forEach((chord, chordIdx) => {
        const chordTime = now + (chordIdx * barDuration);

        // Bass root note
        const bassOsc = ctx.createOscillator();
        const bassGain = ctx.createGain();
        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(chord[0] / 2, chordTime);

        bassGain.gain.setValueAtTime(0.001, chordTime);
        bassGain.gain.exponentialRampToValueAtTime(0.25, chordTime + 0.08);
        bassGain.gain.exponentialRampToValueAtTime(0.001, chordTime + barDuration * 0.95);

        bassOsc.connect(bassGain);
        bassGain.connect(this.masterGain);
        bassOsc.start(chordTime);
        bassOsc.stop(chordTime + barDuration);
        this.loopNodes.push(bassOsc);

        // Polyphonic Warm Plucked Chords (electric guitar/piano feel)
        chord.forEach((freq, noteIdx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc.type = noteIdx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, chordTime + (noteIdx * 0.04));

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(900, chordTime);
          filter.Q.setValueAtTime(1.5, chordTime);

          const noteStart = chordTime + (noteIdx * 0.04);
          gain.gain.setValueAtTime(0.001, noteStart);
          gain.gain.exponentialRampToValueAtTime(0.12, noteStart + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, noteStart + (barDuration * 0.85));

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);

          osc.start(noteStart);
          osc.stop(noteStart + barDuration);
          this.loopNodes.push(osc);
        });

        // Subtle lo-fi soft shaker / percussion beat
        for (let beat = 0; beat < 4; beat++) {
          const beatTime = chordTime + (beat * beatSec);
          const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.04, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          for (let i = 0; i < noiseBuffer.length; i++) {
            output[i] = Math.random() * 2 - 1;
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(beat === 1 || beat === 3 ? 3000 : 7000, beatTime);

          const noiseGain = ctx.createGain();
          const vol = beat === 1 || beat === 3 ? 0.05 : 0.02;
          noiseGain.gain.setValueAtTime(vol, beatTime);
          noiseGain.gain.exponentialRampToValueAtTime(0.0001, beatTime + 0.035);

          whiteNoise.connect(filter);
          filter.connect(noiseGain);
          noiseGain.connect(this.masterGain);

          whiteNoise.start(beatTime);
          whiteNoise.stop(beatTime + 0.04);
        }
      });

      // Schedule next loop
      const totalLoopTime = chords.length * barDuration * 1000;
      setTimeout(() => {
        if (this.isPlaying) {
          this.scheduleNotes();
        }
      }, Math.max(100, totalLoopTime - 200));
    };

    playChordLoop();
  }
}

export const indieAudioEngine = new IndieAudioEngine();
