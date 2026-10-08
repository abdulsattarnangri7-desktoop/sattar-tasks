import { Star } from "lucide-react";
import { site } from "../data/content";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle {...site.testimonialsSection} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-slate-700 dark:text-slate-300">“{t.text}”</p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-linear-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;