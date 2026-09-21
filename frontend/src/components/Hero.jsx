import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { heroBadges, site, statusFocus } from "@/data/site";
import { scrollToId } from "@/lib/scroll";
import { NetworkVisual } from "@/components/NetworkVisual";

const MaskedLine = ({ children, delay, reduce }) => {
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section id="home" data-testid="hero-section" ref={ref} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.14), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5"
            data-testid="hero-status-card"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-node-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] text-emerald-300 sm:text-[11px]">
              OPEN TO WEB3 / BLOCKCHAIN OPPORTUNITIES
            </span>
          </motion.div>

          <motion.p
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mono-label mt-8 text-zinc-500"
          >
            {site.name.toUpperCase()} <span className="text-zinc-700">//</span>{" "}
            <span className="text-violet-400">BLOCKCHAIN &amp; WEB3 DEVELOPER</span>
          </motion.p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-tighter text-zinc-50 sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.25} reduce={reduce}>BUILDING DECENTRALIZED</MaskedLine>
            <MaskedLine delay={0.37} reduce={reduce}>SYSTEMS. ENGINEERING</MaskedLine>
            <MaskedLine delay={0.49} reduce={reduce}>
              TRUST <span className="text-gradient">ON-CHAIN.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            I build smart contracts, Web3 applications, blockchain security tools, DeFi systems, and verification
            platforms using Ethereum and modern full-stack technologies.
          </motion.p>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="mt-7 flex flex-wrap gap-2"
            data-testid="hero-tech-badges"
          >
            {heroBadges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-line bg-obsidian/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] text-zinc-400 transition-colors duration-300 hover:border-violet-500/50 hover:text-violet-300"
              >
                {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              data-testid="hero-cta-projects"
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 rounded-md bg-violet-600 px-6 py-3.5 font-mono text-xs font-semibold tracking-[0.18em] text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              EXPLORE PROJECTS
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="hero-cta-github"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/60 px-6 py-3.5 font-mono text-xs tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <Github className="h-4 w-4" />
              VIEW GITHUB
            </a>
            <a
              data-testid="hero-cta-linkedin"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/60 px-6 py-3.5 font-mono text-xs tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <Linkedin className="h-4 w-4" />
              CONNECT ON LINKEDIN
            </a>
            <a
              data-testid="hero-cta-resume"
              href="/Roshani-Kamble-Resume.pdf"
              download="Roshani-Kamble-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/60 px-6 py-3.5 font-mono text-xs tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-emerald-500/50 hover:text-emerald-300"
            >
              <Download className="h-4 w-4" />
              DOWNLOAD RESUME
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.22em] text-zinc-600"
          >
            {statusFocus.map((f, i) => (
              <span key={f} className="flex items-center gap-2">
                {i > 0 && <span className="text-zinc-800">/</span>}
                <span className={i === 0 ? "text-violet-400" : ""}>{f}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          initial={reduce ? {} : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <NetworkVisual />
        </motion.div>
      </div>
    </section>
  );
};
