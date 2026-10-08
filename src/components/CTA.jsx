import { ArrowRight } from "lucide-react";
import { site } from "../data/content";
import Reveal from "./Reveal";

function CTA() {
  const { cta } = site;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 to-fuchsia-600 px-8 py-16 text-center text-white md:px-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <h2 className="relative text-3xl font-bold md:text-4xl">{cta.title}</h2>
            <p className="relative mx-auto mt-4 max-w-xl text-indigo-100">{cta.text}</p>
            <a
              href="#pricing"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:scale-105"
            >
              {cta.button} <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTA;