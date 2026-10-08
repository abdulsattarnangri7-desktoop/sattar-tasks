import { useEffect, useState } from "react";

// Custom hook: remembers dark/light mode
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("launchkit-theme");
      if (saved) return saved === "dark";
    } catch {
      // ignore
    }
    // First visit: follow the computer's setting
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("launchkit-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleDark = () => setDark((d) => !d);

  return [dark, toggleDark];
}

export default useDarkMode;