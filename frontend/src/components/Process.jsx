import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/data/site";

export const Process = () => (
  <section id="process" data-testid="process-section" className="relative border-t border-line/60">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeader
        index="05"
        label="PROCESS"
        title="FROM IDEA TO ON-CHAIN SYSTEM"
        sub="The same disciplined lifecycle on every project — because shipping to a blockchain means there is no quick patch later."
      />
      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
        {processSteps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.06}>
            <li
              data-testid={`process-step-${s.step}`}
              className="group glass relative h-full rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-violet-400">{s.step}</span>
              <h3 className="mt-3 font-display text-sm font-bold tracking-wide text-zinc-100">{s.name}</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-zinc-500">{s.desc}</p>
              {i < processSteps.length - 1 ? (
                <span
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] text-zinc-700 lg:block"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
