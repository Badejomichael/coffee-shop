import { Variants } from "framer-motion";

/** Fade up on scroll — the default reveal for headings, paragraphs, cards */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Simple opacity fade, for images and background layers */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

/** Fade in from the left — used for text columns paired with an image on the right */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from the right — used for images paired with a text column on the left */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Parent wrapper that staggers its children's own variants */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

/** Scale + fade, for cards and menu tiles */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Hero entrance sequence — larger movement, slightly slower, for the page-load moment */
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Ember particle drift — the signature floating ember motif used in the hero */
export const emberFloat: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: [0, 1, 1, 0],
    y: -120,
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};
