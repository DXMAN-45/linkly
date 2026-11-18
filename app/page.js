
import Image from "next/image";
import Btn from "./components/Btn";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-[84vh] bg-gray-300 overflow-hidden">

      <div className="mx-auto flex min-h-[84vh] w-[90%] max-w-7xl items-center">

        <div className="flex w-full flex-col-reverse items-center justify-center gap-8 py-10 md:flex-row md:gap-6 md:py-0">

          {/* Left Section */}
          <div className="first-section flex w-full flex-col items-center gap-5 text-center md:w-1/2 md:items-center">

            <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              The best URL shortener in the market
            </h1>

            <p className="max-w-lg text-base leading-relaxed sm:text-lg">
              Shorten your URLs and manage your links effortlessly
              with Linkly. Create clean, shareable links with a fast,
              reliable, and easy-to-use platform built for you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">

              <Link href="/shortner">
                <Btn name="Try now" arrow={false} />
              </Link>

              <Link
                href="https://github.com/DXMAN-45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Btn name="GitHub" arrow={false} />
              </Link>

            </div>
          </div>

          {/* Right Section */}
          <div className="second-section relative aspect-[4/3] w-full max-w-xl md:aspect-auto md:h-[65vh] md:w-1/2">

            <Image
              src="/finalbg.png"
              alt="Linkly URL shortener illustration"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 50vw"
              className="object-contain"
            />

          </div>

        </div>
      </div>
    </main>
  );
}
