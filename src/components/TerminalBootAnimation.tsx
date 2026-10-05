import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalBootAnimationProps {
  onComplete: () => void;
}

export const TerminalBootAnimation: React.FC<TerminalBootAnimationProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const bootSequence = [
      'BIOS (C) 2026 Dev Chhangani Hardware Systems',
      'Mounting Architecture: ESP32-WROVER + FreeRTOS ... [OK]',
      'Loading Kinematics Engine (6-DOF BHUJHA Arm) ... [OK]',
      'Verifying Proof Manifest (38 Academic & Technical Records) ... [OK]',
      'Initializing Terminal UI (JetBrains Mono & Inter) ... [OK]',
      'Booting DevOS v2.6 // Session Online'
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 180);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        clearInterval(interval);
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] flex flex-col items-center justify-center p-4 font-mono text-xs select-none">
      <div className="max-w-md w-full bg-[#12121a] border border-[#1f1f2e] rounded-xl overflow-hidden shadow-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1f1f2e] pb-3">
          <div className="flex items-center gap-2 text-[#00f5ff]">
            <Terminal className="w-4 h-4" />
            <span className="font-bold">DEV_TERMINAL_BOOT</span>
          </div>
          <button
            onClick={onComplete}
            className="text-[10px] text-[#66667a] hover:text-[#e0e0e0] border border-[#1f1f2e] px-2 py-0.5 rounded cursor-pointer"
          >
            SKIP [ESC]
          </button>
        </div>

        <div className="space-y-2 min-h-[160px] text-[#a0a0b0]">
          {lines.map((line, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-[#00ff9d]">&gt;</span>
              <span className={idx === lines.length - 1 ? 'text-[#e0e0e0]' : ''}>{line}</span>
            </div>
          ))}
          <div className="inline-block w-2 h-4 bg-[#00f5ff] animate-blink" />
        </div>

        <div className="pt-2 border-t border-[#1f1f2e] flex items-center justify-between text-[11px] text-[#66667a]">
          <span>Loading developer proof portfolio...</span>
          <span className="text-[#00ff9d]">100% Verified</span>
        </div>
      </div>
    </div>
  );
};
