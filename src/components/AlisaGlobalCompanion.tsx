'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Bot, X, Sparkles } from 'lucide-react';

export default function AlisaGlobalCompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'CONNECTING' | 'ACTIVE'>('IDLE');
  const [aiResponse, setAiResponse] = useState(
    'Salom! Men Alisa — CYBERNOVA AI xavfsizlik yordamchisiman. Menga savol bering.'
  );

  const toggleVoiceSession = async () => {
    if (isListening) {
      setIsListening(false);
      setStatus('IDLE');
      setAiResponse('Ovozli muloqot toʻxtatildi.');
    } else {
      setIsListening(true);
      setStatus('CONNECTING');
      setAiResponse('Alisa ekotizimiga ulanmoqda...');

      setTimeout(() => {
        setStatus('ACTIVE');
        setAiResponse('Tizim faol! Saytingiz xavfsizligi boʻyicha istalgan savolni berishingiz mumkin.');
      }, 1500);
    }
  };

  return (
    
      {isOpen && (
        
          
            
              
                
              
              
                
                  Alisa Live Companion 
                
                Multimodal Real-Time AI
              
            
             setIsOpen(false)}
              className="text-slate-400 hover:text-white transition p-1"
            >
              
            
          

          
            
              {[40, 70, 30, 90, 50, 80, 40].map((height, i) => (
                
              ))}
            
            
              "{aiResponse}"
            
          

          
            
              {isListening ?  : }
            
          
        
      )}

       setIsOpen(!isOpen)}
        className="group relative p-4 bg-slate-900 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
      >
        
          
          
        
        
      
    
  );
}