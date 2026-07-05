"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";
import { fadeInLeft, fadeInRight } from "@/animations/variants";

const address = "12 Victoria Street, Edinburgh EH1 2JL";
const encodedAddress = encodeURIComponent(address);

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
const appleMapsUrl = `https://maps.apple.com/?address=${encodedAddress}`;
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
  // Defaults to Google Maps (works everywhere); switches to Apple Maps
  // on iOS/macOS so tapping the map opens whichever app the person
  // actually has set up on their device.
  const [mapsUrl, setMapsUrl] = useState(googleMapsUrl);

  useEffect(() => {
    const isApple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
    if (isApple) setMapsUrl(appleMapsUrl);
  }, []);

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
              Come Find Us
            </span>
            <h2 className="font-display text-4xl leading-[1.1] text-bark md:text-5xl">
              On one of Edinburgh's
              <br />
              <em className="italic text-ember">most curious streets.</em>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe-soft md:text-lg">
              Tucked into the curve of Victoria Street, just below the
              castle. Follow the smell of fresh roast to the oak-framed
              door, you can't miss it.
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
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative block min-h-[360px] cursor-pointer overflow-hidden rounded-2xl border border-bark/10 shadow-lg"
          aria-label="Open Ember & Oak's location in Maps"
        >
          <iframe
            src={embedUrl}
            className="pointer-events-none h-full w-full min-h-[360px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ember & Oak location map"
          />
        </motion.a>
      </div>
    </section>
  );
}
