import { GiCoffeeCup } from "react-icons/gi";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const quickLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#about" },
  { label: "Visit Us", href: "#location" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-20 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-b border-ink-line pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <GiCoffeeCup className="text-ember" size={22} />
            <span className="font-display text-xl text-ivory">
              Ember &amp; Oak
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-taupe">
            A coffee house on Victoria Street, Edinburgh. Come in out of
            the rain, we'll have a cup ready.
          </p>
          <div className="mt-2 flex gap-4 text-ivory">
            <a href="#" aria-label="Instagram" className="transition-colors hover:text-ember">
              <FiInstagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-ember">
              <FiFacebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-ember">
              <FiTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-ivory">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-taupe transition-colors hover:text-ember"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-ivory">
            Contact
          </p>
          <ul className="flex flex-col gap-3 text-sm text-taupe">
            <li>12 Victoria Street, Edinburgh EH1 2JL</li>
            <li>hello@emberandoak.co.uk</li>
            <li>+44 131 555 0148</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-ivory">
            Hours
          </p>
          <ul className="flex flex-col gap-3 text-sm text-taupe">
            <li>Mon–Fri: 7:30 – 17:00</li>
            <li>Sat–Sun: 8:30 – 17:00</li>
          </ul>
        </div>
      </div>

      <p className="pt-8 text-center text-xs text-taupe-soft">
        © {new Date().getFullYear()} Ember &amp; Oak Coffee House. All rights
        reserved.
      </p>
    </footer>
  );
}
