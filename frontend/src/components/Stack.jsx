import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { stackCategories } from "@/data/site";

export const Stack = () => (
  <section id="stack" data-testid="stack-section" className="relative border-t border-line/60">
    <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeader
        index="02"
        label="STACK"
        title="THE STACK BEHIND THE SYSTEMS"
        sub="The technologies I use to design, build, test and secure Web3 systems — from the EVM up to the interface."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.07}>
            <article
              data-testid={`stack-category-${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group glass h-full rounded-lg transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]"
            >
              <div className="flex items-center justify-between border-b border-line/80 px-5 py-3">
                <h3 className="mono-label text-[10px] text-cyan-400">{cat.name}</h3>
                <span className="font-mono text-[10px] text-zinc-600">{String(cat.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="flex flex-wrap gap-2 p-5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line/70 bg-charcoal/50 px-2.5 py-1.5 font-mono text-[11px] text-zinc-400 transition-colors duration-200 hover:border-violet-500/40 hover:text-zinc-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
