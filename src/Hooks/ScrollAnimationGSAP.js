import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Text scroll animation (fade in + slight move up)
 * @param {React.RefObject} ref - element to animate
 * @param {object} options - optional GSAP settings
 */
export const useScrollTextAnim = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 60, ...options.from },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          ...options.to,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            ...options.scrollTrigger,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
};

/**
 * Card scroll animation (fade in + move up + scale + optional stagger)
 * @param {React.RefObject} ref - container element wrapping cards
 * @param {object} options - optional GSAP settings
 */
export const useScrollCardAnim = (containerRef, options = {}) => {
  useEffect(() => {
    if (!containerRef.current) return;

    // Make sure it's a DOM element
    const container = containerRef.current instanceof HTMLElement 
      ? containerRef.current 
      : containerRef.current?.current;

    if (!container || typeof container.querySelectorAll !== "function") return;

    const cards = Array.from(container.querySelectorAll(".cardAnim"));
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
          ...options.from,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration || 0.8,
          ease: options.ease || "power3.out",
          stagger: options.stagger || 0.2,
          scrollTrigger: {
            trigger: container,
            start: options.start || "top 90%",
            end: options.end || "bottom 10%",
            toggleActions: options.toggleActions || "play none none reverse",
            scrub: options.scrub ?? 0.3,
            markers: options.markers || false,
            ...options.scrollTrigger,
          },
          ...options.to,
        }
      );
    }, container);

    return () => ctx.revert();
  }, [containerRef, options]);
};
