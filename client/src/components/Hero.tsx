import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Logo from "../assets/logo.svg";

export default function Hero() {
  return (
    <section className="hero-grid">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-20">
        <div className="hero-copy">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
            Full-Stack Developer
          </p>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] text-gray-950 md:text-6xl">
            Hi, I&apos;m <span className="text-indigo-600">Serghei Muntean.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            I build web applications, APIs, and e-commerce solutions using PHP, Laravel,
            JavaScript, and modern web technologies.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              View Projects <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href="/cv.pdf"
              download="Serghei-Muntean-CV.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-gray-300 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-500 hover:bg-white"
            >
              Download CV <ArrowDownToLine size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-mark flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md p-5 md:p-8">
          <img
            src={Logo}
            alt="Serghei Muntean SM monogram"
            className="w-full max-w-[440px]"
          />
        </div>
      </div>
    </section>
  );
}