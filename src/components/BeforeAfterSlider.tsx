import { useState, useRef, useCallback } from 'react';
import type { MouseEvent, TouchEvent, KeyboardEvent } from 'react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}

export function BeforeAfterSlider({
  beforeImage = '/images/comparisons/before.jpg',
  afterImage = '/images/comparisons/after.jpg',
  beforeLabel = 'BEFORE: WEAR & CHIPPING',
  afterLabel = 'AFTER: PORCELAIN VENEERS',
  caption = 'Authentic clinical case demonstration of aesthetic porcelain veneers restoring worn, uneven anterior tooth enamel. Individual outcomes vary depending on oral anatomy and case diagnosis.'
}: BeforeAfterSliderProps) {
  // Slider position from 0 to 100 percent (start in middle 50%)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(Math.round(percentage * 10) / 10);
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // Accessible keyboard controls
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition(prev => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '980px', margin: '0 auto' }}>
      {/* Interactive Drag Stage */}
      <div
        ref={containerRef}
        className="before-after-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        tabIndex={0}
        role="slider"
        aria-label="Interactive Before and After dental restoration comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuetext={`${sliderPosition}% after image revealed`}
        onKeyDown={handleKeyDown}
        style={{
          outline: 'none',
          position: 'relative',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      >
        {/* Underneath: Before Image (visible on left when slider moves right) */}
        <img
          src={beforeImage}
          alt="Dental teeth appearance before restoration"
          className="before-after-image"
          loading="lazy"
          style={{ objectFit: 'cover' }}
        />

        {/* Overlay: After Image clipped to the right of the slider */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
            WebkitClipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
            pointerEvents: 'none'
          }}
        >
          <img
            src={afterImage}
            alt="Dental teeth appearance after aesthetic crown placement"
            className="before-after-image"
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Before and After Labels */}
        <div className="before-after-tag before">
          {beforeLabel}
        </div>
        <div className="before-after-tag after">
          {afterLabel}
        </div>

        {/* Draggable Divider Line and Thumb Handle */}
        <div
          className="before-after-handle"
          style={{
            left: `${sliderPosition}%`,
            transition: isDragging ? 'none' : 'left 0.1s ease-out'
          }}
        >
          <div className="before-after-button" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6" style={{ display: 'none' }}></polyline>
              <polyline points="9 18 15 12 9 6" transform="rotate(180 12 12)"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Caption & Accessibility Helper */}
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '0.75rem',
        fontSize: '0.82rem',
        color: 'var(--text-secondary)'
      }}>
        <p style={{ fontStyle: 'italic', maxWidth: '640px' }}>
          * {caption}
        </p>
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          backgroundColor: 'var(--bg-cream)',
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-sm)'
        }}>
          Drag slider or use ← / → arrow keys
        </span>
      </div>
    </div>
  );
}
