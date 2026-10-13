import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  /** width/height of both images (must be identical) */
  width?: number;
  height?: number;
};

const MIN = 2;
const MAX = 98;

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  width = 1200,
  height = 800,
}: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(MAX, Math.max(MIN, pct)));
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    let next: number | null = null;
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        next = pos - (e.shiftKey ? 10 : 3);
        break;
      case "ArrowRight":
      case "ArrowUp":
        next = pos + (e.shiftKey ? 10 : 3);
        break;
      case "Home":
        next = MIN;
        break;
      case "End":
        next = MAX;
        break;
      default:
        return;
    }
    e.preventDefault();
    setPos(Math.min(MAX, Math.max(MIN, next)));
  };

  // clean up if pointer released outside while capture unsupported
  useEffect(() => {
    const stop = () => (draggingRef.current = false);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* AFTER is the base layer */}
      <img
        src={afterSrc}
        alt={afterAlt}
        width={width}
        height={height}
        draggable={false}
        loading="lazy"
        decoding="async"
      />

      {/* BEFORE clipped from the left edge to the divider */}
      <div
        className="ba__clipped"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <img
          src={beforeSrc}
          alt=""
          width={width}
          height={height}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>

      <span className="ba__label ba__label--before">Before</span>
      <span className="ba__label ba__label--after">After</span>

      <div className="ba__divider" style={{ left: `${pos}%` }} aria-hidden="true">
        <button
          type="button"
          className="ba__handle"
          role="slider"
          aria-label="Reveal comparison between before and after images"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)} percent before shown`}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onClick={(e) => e.preventDefault()}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
            <path
              d="M7.5 2 3 7l4.5 5M14.5 2 19 7l-4.5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
