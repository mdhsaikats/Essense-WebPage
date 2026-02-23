import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We’d love to hear from you! Fill out the form below or reach out to
            us directly.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">Contact Form</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Contact Information
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>
                <span className="font-bold text-slate-900">Email:</span>{" "}
                support@ecommerce.com
              </li>
              <li>
                <span className="font-bold text-slate-900">Phone:</span> +1
                (555) 123-4567
              </li>
              <li>
                <span className="font-bold text-slate-900">Address:</span> 123
                E-commerce St, Shop City, SC 12345
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-bold text-slate-900">Follow Us</h3>
              <div className="mt-3 flex space-x-4">
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-700"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-700"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.51-4.19 11.86-11.86 11.86A11.8 11.8 0 0 1 2 18.292c.26.03.51.04.78.04a8.37 8.37 0 0 0 5.18-1.78 4.18 4.18 0 0 1-3.9-2.9c.65.1 1.3.1 1.97-.08a4.17 4.17 0 0 1-3.34-4.1v-.05c.56.31 1.2.5 1.88.52a4.16 4.16 0 0 1-1.86-3.47c0-.77.21-1.48.57-2.1a11.83 11.83 0 0 0 8.58 4.35c-.06-.31-.1-.63-.1-.96a4.17 4.17 0 0 1 7.22-2.85 8.3 8.3 0 0 0 2.64-1.01 4.15 4.15 0 0 1-1.83 2.3 8.34 8.34 0 0 0 2.4-.65 8.93 8.93 0 0 1-2.1 2.17z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
