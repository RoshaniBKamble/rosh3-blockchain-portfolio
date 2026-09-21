import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { scrollToId } from "@/lib/scroll";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToId(id);
    }
  };

  return (
    <header
      data-testid="main-navbar"
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-line/80 bg-void/85" : "border-line/40 bg-void/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary">
        <button
          type="button"
          data-testid="nav-brand"
          onClick={() => go("home")}
          className="group flex items-center gap-3"
          aria-label="Roshani Kamble — home"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-node-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-zinc-100">
            RK <span className="text-zinc-600">/</span>{" "}
            <span className="text-violet-400 transition-colors group-hover:text-violet-300">{site.brand}</span>
          </span>
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                data-testid={`nav-link-${link.id}`}
                onClick={() => go(link.id)}
                className="font-mono text-[11px] tracking-[0.2em] text-zinc-400 transition-colors duration-200 hover:text-violet-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/Roshani-Kamble-Resume.pdf"
            download="Roshani-Kamble-Resume.pdf"
            data-testid="nav-resume-download"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/60 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300"
          >
            <Download className="h-3.5 w-3.5" />
            RESUME
          </a>
          <button
            type="button"
            data-testid="nav-cta-talk"
            onClick={() => go("contact")}
            className="rounded-md border border-violet-500/50 bg-violet-500/10 px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-violet-300 transition-all duration-300 hover:bg-violet-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
          >
            LET&apos;S TALK
          </button>
        </div>

        <button
          type="button"
          data-testid="mobile-menu-button"
          className="rounded-md border border-line p-2 text-zinc-300 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line/60 bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    data-testid={`mobile-nav-link-${link.id}`}
                    onClick={() => go(link.id)}
                    className="block w-full rounded-md px-3 py-3 text-left font-mono text-xs tracking-[0.2em] text-zinc-300 transition-colors hover:bg-charcoal hover:text-violet-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="border-t border-line/60 pt-2">
                <a
                  href="/Roshani-Kamble-Resume.pdf"
                  download="Roshani-Kamble-Resume.pdf"
                  data-testid="mobile-nav-resume-download"
                  className="flex items-center gap-2.5 rounded-md px-3 py-3 font-mono text-xs tracking-[0.2em] text-cyan-300 transition-colors hover:bg-charcoal"
                >
                  <Download className="h-4 w-4" />
                  DOWNLOAD RESUME
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
