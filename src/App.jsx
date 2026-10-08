import useDarkMode from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [dark, toggleDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;