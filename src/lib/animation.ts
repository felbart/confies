import type { TargetAndTransition, Variants } from "motion/react"

// ── Easings ──────────────────────────────────────────────
export const easeOutExpo = [0.16, 1, 0.36, 1] as const
export const easeOutQuart = [0.22, 1, 0.36, 1] as const
export const easeInOutSine = [0.37, 0, 0.63, 1] as const

// ── Fade & Slide ─────────────────────────────────────────
export const fadeUpContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeOutExpo,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easeOutQuart,
    },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
}

// ── Imagens ───────────────────────────────────────────────
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
    filter: "blur(4px)",
    clipPath: "inset(8% 0% 8% 0%)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.1,
      ease: easeOutExpo,
    },
  },
}

export const imageGridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// ── Divisores ─────────────────────────────────────────────
export const scaleXDivider: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easeOutQuart,
    },
  },
}

// ── Navbar ────────────────────────────────────────────────
export const headerReveal: Variants = {
  hidden: {
    y: -16,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
}

export const mobilePanelVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: easeOutQuart,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: easeOutExpo,
    },
  },
}

export const mobileListVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const mobileItemVariants: Variants = {
  closed: {
    y: -6,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: easeOutExpo,
    },
  },
}

// ── Texto por palavra ─────────────────────────────────────
export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const wordItem: Variants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
}

// ── Cards / itens ─────────────────────────────────────────
export const cardHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOutQuart,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: easeOutQuart,
    },
  },
}

// ── Marquee ───────────────────────────────────────────────
export const marquee: { animate: TargetAndTransition } = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  },
}

export const marqueeReverse: { animate: TargetAndTransition } = {
  animate: {
    x: ["-50%", "0%"],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  },
}