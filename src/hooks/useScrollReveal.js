import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — triggers 'visible' class on elements entering viewport
 * @param {string} selector - CSS selector for elements to animate
 * @param {number} threshold - intersection ratio to trigger (default 0.1)
 */
export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right', threshold = 0.12) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold]);
}

/**
 * useRevealRef — returns a ref; element gets 'visible' class when in view
 */
export function useRevealRef(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
