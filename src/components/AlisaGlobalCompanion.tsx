'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Bot, X, Sparkles } from 'lucide-react';

export default function AlisaGlobalCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'CONNECTING' | 'ACTIVE'>('IDLE');
  const [aiResponse, setAiResponse] = useState(
    'Salom! Men Alisa - CYBERNOVA AI xavfsizlik yordamchisiman. Menga savol bering.'
  );

  const toggleVoiceSession = async () => {
    if (isListening) {
      setIsListening(false);
      setStatus('IDLE');
      setAiResponse('Ovozli muloqot toxtatildi.');
    } else {
      setIsListening(true);
      setStatus('CONNECTING');
      setAiResponse('Alisa ekotizimiga ulanmoqda...');

      setTimeout(() => {
        setStatus('ACTIVE');
        setAiResponse('Tizim faol! Saytingiz xavfsizligi boyicha istalgan savolni berishingiz mumkin.');
      }, 1500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-900 border border-emerald-500/30 rounded-2xl p-5 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl text-white">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm flex items-center gap-1.5">
                  Alisa Live Companion <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h3>
                <p className="text-[10px] text-slate-400">Multimodal Real-Time AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4 text-center">
            <div className="flex justify-center items-center gap-1 h-8 mb-3">
              {[40, 70, 30, 90, 50, 80, 40].map((height, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    status === 'ACTIVE' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'
                  }`}
                  style={{ height: status === 'ACTIVE' ? `${height}%` : '20%' }}
                />
              ))}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              &quot;{aiResponse}&quot;
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={toggleVoiceSession}
              className={`p-4 rounded-full font-bold transition flex items-center justify-center gap-2 shadow-lg ${
                isListening
                  ? 'bg-rose-500 hover:bg-rose-400 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
              }`}
            >
              {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-4 bg-slate-900 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <Bot className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}