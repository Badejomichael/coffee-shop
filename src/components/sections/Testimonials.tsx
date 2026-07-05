"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/animations/variants";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScroll - 8);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const arrowButtonClass = (enabled: boolean) =>
    `flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
      enabled
        ? "border-ivory/20 text-ivory hover:border-ember hover:text-ember"
        : "cursor-not-allowed border-ivory/5 text-ivory/20"
    }`;

  return (
    <section id="testimonials" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Word on the Street"
            title={
              <>
                What keeps them <em className="italic text-ember">coming back</em>
              </>
            }
            tone="dark"
            align="left"
          />

          {/* Desktop arrows */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll testimonials left"
              className={arrowButtonClass(canScrollLeft)}
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll testimonials right"
              className={arrowButtonClass(canScrollRight)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex w-full flex-none snap-start flex-col gap-5 rounded-2xl border border-ivory/10 bg-ink-soft p-7 sm:w-[320px]"
            >
              <div className="flex items-center gap-1 text-ember">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} size={12} />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-taupe italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="relative h-11 w-11 flex-none overflow-hidden rounded-full border border-ember/40">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ivory">{t.name}</p>
                  <p className="text-xs text-taupe-soft">{t.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-3 md:hidden">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll testimonials left"
            className={arrowButtonClass(canScrollLeft)}
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll testimonials right"
            className={arrowButtonClass(canScrollRight)}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}