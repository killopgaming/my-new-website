import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse), disable on touch/mobile
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer || window.innerWidth < 768) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;
    let isMoving = false;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const container = containerRef.current;

    // Direct DOM show/hide without React re-renders
    const setCursorVisible = (visible: boolean) => {
      if (isVisibleRef.current === visible) return;
      isVisibleRef.current = visible;
      if (container) {
        container.style.opacity = visible ? '1' : '0';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisibleRef.current) {
        currentX = targetX;
        currentY = targetY;
        setCursorVisible(true);
      }

      isMoving = true;

      // Ultra-efficient interactive target detection
      const target = e.target as Element | null;
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
      );

      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        if (ring) {
          if (isInteractive) {
            ring.style.transform = 'translate(-50%, -50%) scale(1.4)';
            ring.style.borderColor = '#00f5ff';
            ring.style.backgroundColor = 'rgba(0, 245, 255, 0.12)';
            ring.style.boxShadow = '0 0 14px rgba(0, 245, 255, 0.4)';
          } else {
            ring.style.transform = 'translate(-50%, -50%) scale(1)';
            ring.style.borderColor = 'rgba(0, 245, 255, 0.45)';
            ring.style.backgroundColor = 'transparent';
            ring.style.boxShadow = 'none';
          }
        }
      }
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
      isMoving = false;
    };

    const handleMouseEnter = () => {
      setCursorVisible(true);
    };

    // Smooth physics loop running on RAF with anti-jitter deadband
    const tick = () => {
      if (isVisibleRef.current) {
        // Direct, zero-latency update for the center crosshair dot
        if (dot) {
          dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
        }

        // Damped interpolation for outer targeting ring
        const dx = targetX - currentX;
        const dy = targetY - currentY;

        // Anti-jitter: snap when difference is negligible (< 0.05px)
        if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
          currentX = targetX;
          currentY = targetY;
        } else {
          // Smooth spring damping factor
          currentX += dx * 0.28;
          currentY += dy * 0.28;
        }

        if (ring) {
          ring.style.left = `${currentX}px`;
          ring.style.top = `${currentY}px`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden opacity-0 transition-opacity duration-200"
      aria-hidden="true"
    >
      {/* Outer smooth tracking ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed w-7 h-7 rounded-full border border-[#00f5ff]/45 transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: 'translate(-50%, -50%) scale(1)',
          left: '-100px',
          top: '-100px',
        }}
      />

      {/* Immediate center crosshair point */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed w-2 h-2 rounded-full bg-[#00f5ff] shadow-[0_0_8px_#00f5ff] will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
