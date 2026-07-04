"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiPhone, FiExternalLink } from "react-icons/fi";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

const address = "12 Victoria Street, Edinburgh EH1 2JL";
const encodedAddress = encodeURIComponent(address);

// Directs to the Google Maps app on mobile, or maps.google.com in a new tab on desktop
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const embedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

const details = [
  {
    icon: FiMapPin,
    label: "Address",
    value: address,
  },
  {
    icon: FiClock,
    label: "Hours",
    value: "Mon–Fri 7:30–17:00 · Sat–Sun 8:30–17:00",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+44 131 555 0148",
  },
];

export default function Location() {
  return (
    <section id="location" className="bg-linen px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
              Visit Us
            </span>
            <h2 className="font-display text-4xl leading-[1.1] text-bark md:text-5xl">
              On one of Edinburgh's
              <br />
              <em className="italic text-ember">most curious streets.</em>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe-soft md:text-lg">
              Tucked into the curve of Victoria Street, just below the
              castle. Look for the oak-framed door and the smell of a fresh
              roast.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-ink text-ember">
                  <d.icon size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-taupe-soft">
                    {d.label}
                  </p>
                  <p className="text-bark">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="group relative block min-h-[360px] overflow-hidden rounded-2xl border border-bark/10 shadow-lg"
          aria-label="Open Ember & Oak's location in Google Maps"
        >
          <iframe
            src={embedUrl}
            className="pointer-events-none h-full w-full min-h-[360px] grayscale-[15%]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ember & Oak location map"
          />

          {/* Click affordance overlay */}
          <div className="absolute inset-0 flex items-end justify-end bg-ink/0 p-4 transition-colors duration-300 group-hover:bg-ink/10">
            <span className="flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-ember opacity-90 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              Open in Google Maps <FiExternalLink size={13} />
            </span>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
