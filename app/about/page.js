
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="relative flex min-h-[84vh] w-full flex-col items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/aboutbg.png"
        alt="Linkly background"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />

      {/* Content */}
      <section className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 px-5 py-12 sm:px-8 sm:py-16">

        {/* Heading */}
        <div className="flex flex-col items-center gap-3">

          <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
            About Linkly
          </h1>

          <p className="text-lg font-medium text-center text-gray-700 sm:text-xl">
            Short links. Less hassle.
          </p>

        </div>

        {/* Description */}
        <div className="flex w-full max-w-3xl flex-col gap-6">

          <p className="text-base leading-relaxed text-center sm:text-lg md:text-xl">
            We built Linkly to make sharing links simpler. Long URLs can be
            messy, difficult to remember, and inconvenient to share. Linkly
            turns them into short, clean links that are easier to use.
          </p>

          <p className="text-base leading-relaxed text-center sm:text-lg md:text-xl">
            But it's not just about shortening URLs. Linkly also helps you
            keep track of your links and understand how people interact with
            them through click statistics.
          </p>

          <p className="text-base leading-relaxed text-center sm:text-lg md:text-xl">
            Whether you're sharing links with friends, managing a blog, or
            promoting your business, Linkly gives you a simple way to keep
            everything organized and easy to access.
          </p>

        </div>

      </section>
    </main>
  );
};

export default About;
