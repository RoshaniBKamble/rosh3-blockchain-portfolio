import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export const Footer = () => (
  <footer data-testid="main-footer" className="border-t border-line/60 bg-void">
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.2em] text-zinc-100">
            {site.name.toUpperCase()} <span className="text-zinc-600">//</span>{" "}
            <span className="text-violet-400">{site.brand}</span>
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-zinc-500">
            BLOCKCHAIN / WEB3 DEVELOPER
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-[0.22em] text-zinc-600">
            ETHEREUM · SOLIDITY · WEB3 · SMART CONTRACTS
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-github-link"
            aria-label="GitHub profile"
            className="rounded-md border border-line p-2.5 text-zinc-400 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin-link"
            aria-label="LinkedIn profile"
            className="rounded-md border border-line p-2.5 text-zinc-400 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            data-testid="footer-email-link"
            aria-label="Send email"
            className="rounded-md border border-line p-2.5 text-zinc-400 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-300"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line/50 pt-6 font-mono text-[10px] tracking-[0.2em] text-zinc-600 sm:flex-row sm:items-center">
        <span>© 2026 ROSHANI KAMBLE</span>
        <span>DESIGNED &amp; ENGINEERED ON-CHAIN MINDSET</span>
      </div>
    </div>
  </footer>
);
