import Lenis from "lenis";

export function initLenis() {
  const lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.08, // suavidade (quanto menor, mais suave)
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
}