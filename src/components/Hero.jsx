import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { site } from "../data/content";

const bars = [40, 65, 45, 80, 55, 90, 70, 95];

function Hero() {
  const { hero } = site;

  return (
    <section className="relative overflow-hidden">
      {/* Soft glow in the background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
        >
          {hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          {hero.title}{" "}
          <span className="bg-linear-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            {hero.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
        >
          {hero.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            {hero.primaryBtn} <ArrowRight size={18} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <PlayCircle size={18} /> {hero.secondaryBtn}
          </a>
        </motion.div>

        <p className="mt-4 text-sm text-slate-500">{hero.note}</p>

        {/* App mockup (made with divs, no image needed!) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
            <div className="mb-4 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {/* Fake sidebar */}
              <div className="hidden space-y-3 md:block">
                <div className="h-8 rounded-lg bg-indigo-600/90" />
                <div className="h-8 rounded-lg bg-slate-200 dark:bg-slate-800" />
                <div className="h-8 rounded-lg bg-slate-200 dark:bg-slate-800" />
                <div className="h-8 rounded-lg bg-slate-200 dark:bg-slate-800" />
              </div>

              <div className="space-y-4 md:col-span-3">
                <div className="grid grid-cols-3 gap-3">
                  {hero.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-white p-3 text-left shadow-sm dark:bg-slate-900">
                      <p className="text-xs text-slate-500">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Animated chart bars */}
                <div className="flex h-40 items-end gap-2 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                      className="flex-1 rounded-t bg-linear-to-t from-indigo-600 to-fuchsia-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;