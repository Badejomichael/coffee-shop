"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiMapPin } from "react-icons/fi";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { heroReveal, staggerContainer, fadeInUp } from "@/animations/variants";
import Button from "@/components/ui/Button";
import EmberField from "@/components/ui/EmberField";
import MenuToggle from "@/components/ui/MenuToggle";

const navLinks = [
  { label: "Menu", href: "#menu", icon: GiCoffeeCup },
  { label: "Our Story", href: "#about", icon: GiCoffeeBeans },
  { label: "Visit Us", href: "#location", icon: FiMapPin },
  { label: "Reviews", href: "#testimonials", icon: FaStar },
];

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* Navbar — fixed to the viewport, gains a solid backdrop once scrolled */}
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-6 transition-all duration-300 md:px-10 ${
          isScrolled
            ? "bg-ink/90 py-4 shadow-lg shadow-ink/20 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2 text-ivory">
          <GiCoffeeCup className="text-ember" size={22} />
          <span className="font-display text-lg tracking-wide">
            Ember &amp; Oak
          </span>
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-ivory/80 transition-colors hover:text-ember"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" className="hidden !px-5 !py-2.5 text-xs md:inline-flex">
          Book a Table
        </Button>

        <MenuToggle
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              aria-label="Close menu overlay"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-ink/70 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[76px] z-40 overflow-hidden rounded-2xl border border-ink-line bg-ink-soft/95 p-3 shadow-2xl md:hidden"
            >
              <motion.nav
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={fadeInUp}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium text-ivory/90 transition-colors hover:bg-ink hover:text-ember"
                  >
                    <link.icon className="text-ember" size={16} />
                    {link.label}
                  </motion.a>
                ))}
                <motion.div variants={fadeInUp} className="p-2 pt-3">
                  <Button
                    variant="primary"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full"
                  >
                    Book a Table
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for legibility + brand tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      {/* Signature ember motif */}
      <EmberField />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-28 md:px-10"
      >
        <motion.span
          variants={heroReveal}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-ember"
        >
          House-Roasted. Hand-Poured.
        </motion.span>

        <motion.h1
          variants={heroReveal}
          className="max-w-3xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl md:text-7xl"
        >
          Coffee, roasted
          <br />
          with <em className="text-ember not-italic font-medium italic">intent.</em>
        </motion.h1>

        <motion.p
          variants={heroReveal}
          className="max-w-lg text-base leading-relaxed text-taupe md:text-lg"
        >
          We're a coffee house on Victoria Street in Edinburgh. Nothing
          here is rushed — we pull every cup slow and mean it.
        </motion.p>

        <motion.div variants={heroReveal} className="flex flex-wrap items-center gap-5 pt-2">
          <Button variant="primary" href="#menu">View the Menu</Button>
          <Button variant="outline" href="#location">Find Us</Button>
        </motion.div>

        <motion.div
          variants={heroReveal}
          className="flex items-center gap-10 pt-10 text-ivory"
        >
          <div>
            <p className="font-display text-3xl">8k+</p>
            <p className="text-xs uppercase tracking-widest text-taupe">
              Cups We Pour Each Month
            </p>
          </div>
          <div className="h-10 w-px bg-ink-line" />
          <div>
            <p className="font-display text-3xl">4.9</p>
            <p className="text-xs uppercase tracking-widest text-taupe">
              Rating, Mostly From Regulars
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ember"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
