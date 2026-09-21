import { Blocks, Code2, Layers, ShieldCheck, Coins } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { engineeringPillars } from "@/data/site";

const icons = [Code2, Blocks, ShieldCheck, Coins, Layers];

export const Engineering = () => (
  <section id="engineering" data-testid="engineering-section" className="relative border-t border-line/60">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeader
        index="03"
        label="ENGINEERING"
        title="WHAT I BUILD"
        sub="Five engineering directions, one goal: systems where trust is enforced by code, not promised by people."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {engineeringPillars.map((pillar, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={pillar.num} delay={i * 0.07} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article
                data-testid={`engineering-card-${pillar.num}`}
                className="group glass relative h-full overflow-hidden rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-zinc-800/50 transition-colors duration-300 group-hover:text-violet-500/20"
                  aria-hidden="true"
                >
                  {pillar.num}
                </span>
                <span className="inline-flex rounded-md border border-violet-500/30 bg-violet-500/10 p-2.5 text-violet-300 transition-colors duration-300 group-hover:text-violet-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm">{pillar.description}</p>
                <span className="mt-5 block h-px w-full bg-gradient-to-r from-violet-500/50 via-line to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
