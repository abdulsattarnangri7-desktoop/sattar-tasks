import { Rocket } from "lucide-react";
import { site } from "../data/content";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 text-xl font-bold">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white">
        <Rocket size={20} />
      </span>
      {site.name}
    </a>
  );
}

export default Logo;