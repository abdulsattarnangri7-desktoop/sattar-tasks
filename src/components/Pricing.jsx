import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { site } from "../data/content";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-20 bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle {...site.pricingSection} />

        {/* Monthly / Yearly toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={yearly ? "text-slate-500" : "font-semibold"}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            aria-label="Switch monthly or yearly"
            className={`relative h-7 w-14 rounded-full transition ${
              yearly ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700"
            }`}
          >
            <span
              className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                yearly ? "translate-x-7" : ""
              }`}
            />
          </button>
          <span className={yearly ? "font-semibold" : "text-slate-500"}>Yearly</span>
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
            {site.pricingSection.save}
          </span>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {site.plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 dark:bg-slate-900 ${
                    plan.popular
                      ? "border-indigo-600 shadow-2xl shadow-indigo-500/20 lg:scale-105"
                      : "border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}

                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{plan.desc}</p>

                  <p className="mt-6 flex items-baseline gap-1">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl font-extrabold"
                    >
                      ${price}
                    </motion.span>
                    <span className="text-slate-500">/month</span>
                  </p>
                  {yearly && price > 0 && (
                    <p className="mt-1 text-sm text-slate-500">Billed ${price * 12} yearly</p>
                  )}

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={18} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`mt-8 block rounded-xl px-6 py-3 text-center font-semibold transition ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                        : "border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                    }`}
                  >
                    {plan.button}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;