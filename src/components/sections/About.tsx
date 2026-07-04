"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

const stats = [
  { value: "100%", label: "Beans Bought Direct" },
  { value: "24h", label: "From Roast to Cup" },
  { value: "6", label: "Origins on Rotation" },
];

export default function About() {
  return (
    <section id="about" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/about-barista.jpg"
            alt="A barista at Ember & Oak pouring latte art by hand"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            Our Story
          </span>
          <h2 className="font-display text-4xl leading-[1.1] text-ivory md:text-5xl">
            From bean to cup,
            <br />
            <em className="italic text-ember">a slower craft.</em>
          </h2>
          <p className="text-base leading-relaxed text-taupe md:text-lg">
            Every pour here gets finished by hand — milk steamed to a
            whisper, poured slow enough to bloom into a pattern. It's a small
            thing, repeated a few hundred times a day, and we've never found
            a good reason to rush it.
          </p>
          <p className="text-base leading-relaxed text-taupe md:text-lg">
            We buy directly from growers we've actually met, roast in
            batches through the week rather than all at once, and let
            whoever's behind the counter decide when a cup is ready — not a
            timer.
          </p>

          <div className="mt-4 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-ivory">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-taupe">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
