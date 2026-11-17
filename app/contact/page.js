
import React from "react";

const Contact = () => {
  return (
    <main className="relative flex min-h-[84vh] w-full items-center justify-center bg-gray-200 px-5 py-12 sm:px-8">

      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">

        {/* Heading */}
        <div className="flex flex-col items-center gap-3 text-center">

          <span className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-600">
            Get in touch
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Let's talk.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Have a question, an idea, or something you'd like to share?
            We'd love to hear from you. Your feedback helps us make Linkly better.
          </p>

        </div>

        {/* Contact Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-gray-300 bg-white p-6 shadow-xl shadow-gray-300/30 sm:p-10">

          <div className="flex flex-col items-center gap-5 text-center">

            {/* Mail Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-3xl text-white shadow-lg">
              ✉
            </div>

            <div className="flex flex-col gap-2">

              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Drop us an email
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                Whether it's a question, feedback, or a suggestion,
                our inbox is always open.
              </p>

            </div>

            {/* Email Address */}
            <a
              href="mailto:damanstudyonly@gmail.com"
              className="group flex max-w-full items-center gap-2 break-all rounded-xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-200 sm:text-lg"
            >
              <span>damanstudyonly@gmail.com</span>

              <span className="shrink-0 text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>

            </a>

            {/* Contact Button */}
            <a
              href="mailto:damanstudyonly@gmail.com?subject=Hello%20Linkly"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-xl active:scale-95"
            >
              <span className="text-lg">✉</span>
              Send us a message
              <span>→</span>
            </a>

          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-gray-500">
          Thanks for being part of Linkly. We appreciate you!
        </p>

      </section>
    </main>
  );
};

export default Contact;
