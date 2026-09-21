import { Trophy } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { achievement } from "@/data/site";

export const Achievement = () => (
  <section id="achievement" data-testid="achievement-section" className="relative border-t border-line/60">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeader index="06" label="ACHIEVEMENT" title="RECOGNIZED FOR BUILDING" />
      <Reveal delay={0.1} className="mt-12">
        <article className="group glass relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:border-amber-500/40 sm:p-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 50% 60% at 15% 20%, rgba(245,158,11,0.07), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-300">
              <Trophy className="h-8 w-8" />
            </span>
            <div>
              <p className="mono-label text-[10px] text-amber-400/90">HACKATHON / COMPETITION</p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
                {achievement.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs tracking-[0.16em] text-zinc-400">
                {achievement.institution.toUpperCase()}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{achievement.description}</p>
            </div>
          </div>
        </article>
      </Reveal>
    </div>
  </section>
);
