import { useState } from "react";
import { ArrowRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const ContactRow = ({ icon: Icon, label, value, href, testId, external }) => (
  <a
    href={href}
    data-testid={testId}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group glass flex items-center gap-4 rounded-lg p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.14)]"
  >
    <span className="rounded-md border border-line bg-charcoal/60 p-2.5 text-violet-300">
      <Icon className="h-4 w-4" />
    </span>
    <span className="min-w-0">
      <span className="mono-label block text-[9px] text-zinc-600">{label}</span>
      <span className="mt-1 block truncate font-mono text-xs text-zinc-200 transition-colors group-hover:text-violet-200 sm:text-sm">
        {value}
      </span>
    </span>
    <ArrowRight className="ml-auto h-4 w-4 shrink-0 -rotate-45 text-zinc-600 transition-all duration-300 group-hover:rotate-0 group-hover:text-violet-300" />
  </a>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy — email is shown above");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative overflow-hidden border-t border-line/60">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        style={{ background: "radial-gradient(ellipse 55% 55% at 50% 100%, rgba(139,92,246,0.13), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8">
        <SectionHeader index="07" label="CONNECT" align="center" title={
          <span className="mx-auto block">
            LET&apos;S BUILD <span className="text-gradient">ON-CHAIN.</span>
          </span>
        } />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Open to opportunities in Blockchain, Web3, Smart Contracts, and Full-Stack Web3 development.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              data-testid="contact-cta-email"
              className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-7 py-4 font-mono text-xs font-semibold tracking-[0.18em] text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              <Mail className="h-4 w-4" />
              LET&apos;S BUILD ON-CHAIN.
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-cta-github"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/70 px-7 py-4 font-mono text-xs tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <Github className="h-4 w-4" />
              VIEW GITHUB
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={copyEmail}
              data-testid="contact-copy-email-button"
              className="inline-flex items-center gap-2 rounded-md border border-line/70 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-zinc-500 transition-colors duration-300 hover:border-violet-500/40 hover:text-violet-300"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "COPIED" : "COPY EMAIL"}
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 text-left sm:grid-cols-2">
          <Reveal delay={0.1}>
            <ContactRow icon={Mail} label="EMAIL" value={site.email} href={`mailto:${site.email}`} testId="contact-email-link" />
          </Reveal>
          <Reveal delay={0.16}>
            <ContactRow icon={Phone} label="PHONE" value={site.phone} href={site.phoneHref} testId="contact-phone-link" />
          </Reveal>
          <Reveal delay={0.22}>
            <ContactRow icon={Github} label="GITHUB" value="github.com/RoshaniBKamble" href={site.github} testId="contact-github-link" external />
          </Reveal>
          <Reveal delay={0.28}>
            <ContactRow icon={Linkedin} label="LINKEDIN" value="linkedin.com/in/roshani-kamble" href={site.linkedin} testId="contact-linkedin-link" external />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-zinc-500">
            <MapPin className="h-3.5 w-3.5 text-violet-400" />
            {site.location.toUpperCase()}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
