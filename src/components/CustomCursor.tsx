import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(hover: none)').matches
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or its parents are interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"], .group'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect with requestAnimationFrame
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const follow = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Glowing Trailing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-75 ease-out pointer-events-none ${
          isHovered
            ? 'w-12 h-12 border-2 border-cyan-500/80 bg-cyan-500/15 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-125'
            : isClicked
            ? 'w-8 h-8 border border-purple-500/80 bg-purple-500/20 scale-90'
            : 'w-8 h-8 border border-cyan-400/60 bg-cyan-400/5 shadow-sm scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPosition.x - (isHovered ? 24 : isClicked ? 16 : 16)}px, ${
            trailingPosition.y - (isHovered ? 24 : isClicked ? 16 : 16)
          }px, 0)`,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s, transform 0.05s linear',
        }}
      />

      {/* Center Precise Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-100 ${
          isHovered
            ? 'w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]'
            : isClicked
            ? 'w-3 h-3 bg-purple-400 shadow-[0_0_12px_rgba(192,132,252,0.9)]'
            : 'w-2 h-2 bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.8)]'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 5 : isClicked ? 6 : 4)}px, ${
            position.y - (isHovered ? 5 : isClicked ? 6 : 4)
          }px, 0)`,
        }}
      />
    </div>
  );
};
