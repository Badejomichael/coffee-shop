"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/animations/variants";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Word on the Street"
            title={
              <>
                What people tell <em className="italic text-ember">us</em>
              </>
            }
            tone="dark"
            align="left"
          />

          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll testimonials left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-ember hover:text-ember"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll testimonials right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:border-ember hover:text-ember"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex w-[280px] flex-none snap-start flex-col gap-5 rounded-2xl border border-ivory/10 bg-ink-soft p-7 sm:w-[320px]"
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
      </div>
    </section>
  );
}
