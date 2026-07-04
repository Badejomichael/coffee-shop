"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { menuItems } from "@/data/menu";

export default function MenuHighlights() {
  return (
    <section id="menu" className="bg-linen px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              The Signature <em className="italic text-ember">Pour</em>
            </>
          }
          subtitle="These are the three drinks people order most. Start with whichever sounds good."
          tone="light"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.id}
              variants={fadeInUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-bark/10 bg-linen-soft/60 transition-shadow duration-300 hover:shadow-xl hover:shadow-bark/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold tracking-wide text-ember backdrop-blur">
                  {item.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe-soft">
                  {item.origin}
                </span>
                <h3 className="font-display text-2xl text-bark">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-taupe-soft">
                  {item.description}
                </p>

                <div className="mt-2 flex items-center gap-1 text-ember">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <Button variant="outline" className="!border-bark/20 !text-bark hover:!border-ember hover:!text-ember">
            See the Rest of the Menu <FiArrowRight size={14} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
