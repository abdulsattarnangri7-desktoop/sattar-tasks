import Reveal from "./Reveal";

function SectionTitle({ label, title, text }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-slate-600 dark:text-slate-400">{text}</p>}
    </Reveal>
  );
}

export default SectionTitle;