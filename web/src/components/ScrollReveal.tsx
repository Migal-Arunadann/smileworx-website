import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  /** mask reveal instead of fade/rise */
  mask?: boolean;
  /** stagger delay in ms */
  delay?: number;
};

/**
 * Lightweight IntersectionObserver reveal. One shared observer per element,
 * unobserved after first intersection. Fully disabled visually under
 * prefers-reduced-motion via CSS overrides.
 */
export default function ScrollReveal({
  children,
  as: Tag = "div",
  className = "",
  mask = false,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = mask ? "reveal-mask" : "reveal";
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
