import { site } from "../data/content";

function Logos() {
  return (
    <section className="border-y border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium text-slate-500">{site.logosTitle}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {site.logos.map((name) => (
            <span
              key={name}
              className="text-xl font-bold text-slate-400 transition hover:text-slate-600 dark:text-slate-600 dark:hover:text-slate-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logos;