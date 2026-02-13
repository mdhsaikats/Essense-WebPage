import React from "react";
import {
  Facebook,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-gray-900 text-gray-400 border-t border-gray-800 p-8 w-full">
      {/* top */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* brand */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              ESSENSE<span className="text-pink-500">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7">
              ESSENSE is the pure expression of presence — where scent becomes
              identity. Born from the belief that fragrance is the invisible
              signature of the soul, ESSENSE captures the true essence of
              confidence, elegance, and individuality.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="ESSENSE on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                aria-label="ESSENSE on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                aria-label="ESSENSE on GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-pink-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-pink-500" />
                <span>Dhaka, Bangladesh</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-pink-500" />
                <a
                  href="tel:+8801000000000"
                  className="hover:text-pink-500 transition"
                >
                  +880 10 0000 0000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-pink-500" />
                <a
                  href="mailto:hello@essense.com"
                  className="hover:text-pink-500 transition"
                >
                  hello@essense.com
                </a>
              </li>
            </ul>

            {/* newsletter */}
            <div className="mt-6">
              <p className="text-sm">Get new drops, offers & updates.</p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-3 flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-full bg-gray-800 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Join <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
