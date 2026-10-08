import { site } from "../data/content";
import Logo from "./Logo";

function Footer() {
  const { footer } = site;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">{footer.about}</p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. {footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;