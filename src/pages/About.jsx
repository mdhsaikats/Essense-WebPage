import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-pink-200 bg-white px-3 py-1 text-xs font-semibold text-pink-700">
              About Our Store
            </span>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Shopping made simple, fast, and reliable.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Welcome to our e-commerce platform! We are dedicated to providing
              the best products and services to our customers. Our mission is to
              make online shopping easy, accessible, and enjoyable for everyone.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Contact Us
              </a>
              <a
                href="/shop"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Browse Products
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-100 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-pink-50 blur-2xl" />

              <div className="relative p-6 sm:p-8">
                <h3 className="text-lg font-bold text-slate-900">
                  What you can expect
                </h3>

                <div className="mt-6 grid gap-4">
                  <Feature
                    title="Trusted quality"
                    desc="We keep high standards so you get the best value."
                  />
                  <Feature
                    title="Fast support"
                    desc="Quick responses and real help when you need it."
                  />
                  <Feature
                    title="Secure checkout"
                    desc="Smooth and safe payments for peace of mind."
                  />
                </div>

                <div className="mt-7 rounded-xl border border-slate-200 bg-pink-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Founded in <span className="text-pink-700">2026</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Started with a vision to revolutionize the way people shop
                    online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Story */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Our Story</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Founded in 2026, our company started with a vision to
                revolutionize the way people shop online. With a focus on
                quality and customer satisfaction, we have grown to become a
                trusted name in the industry.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <Stat number="10K+" label="Happy customers" />
                <Stat number="1K+" label="Products" />
                <Stat number="24/7" label="Support" />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Our Values</h2>

              <ul className="mt-5 space-y-3 text-slate-700">
                <ValueItem
                  title="Customer First"
                  desc="We prioritize our customers in everything we do."
                />
                <ValueItem
                  title="Quality"
                  desc="We ensure the highest standards in our products."
                />
                <ValueItem
                  title="Innovation"
                  desc="We embrace change and strive for continuous improvement."
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div
          id="contact"
          className="mt-14 overflow-hidden rounded-2xl border border-pink-200 bg-pink-50"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                Contact Us
              </h2>
              <p className="mt-2 text-slate-700">
                Have questions or feedback? Reach out anytime — we’d love to
                help.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <a
                href="mailto:support@ecommerce.com"
                className="inline-flex w-full items-center justify-center rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 sm:w-auto"
              >
                support@ecommerce.com
              </a>
              <p className="mt-2 text-xs text-slate-600">
                We usually reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small UI pieces */
function Feature({ title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-100 text-pink-700">
          ✓
        </span>
        <div>
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-pink-50 p-4">
      <p className="text-lg font-extrabold text-slate-900">{number}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

function ValueItem({ title, desc }) {
  return (
    <li className="rounded-xl border border-slate-200 bg-pink-50 p-4">
      <p className="font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </li>
  );
}
