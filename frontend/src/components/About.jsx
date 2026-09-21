import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { education, site } from "@/data/site";

export const About = () => (
  <section id="about" data-testid="about-section" className="relative border-t border-line/60">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeader
        index="01"
        label="ABOUT"
        title="ENGINEERING AT THE INTERSECTION OF SOFTWARE & BLOCKCHAIN"
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0.1}>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            I am pursuing an M.Sc. in Blockchain Technology at MIT World Peace University, with a focus on Ethereum,
            Solidity, smart contracts, Web3 applications, blockchain security, DeFi, and on-chain/off-chain
            architecture.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
            My broader engineering direction combines frontend and full-stack development with Blockchain/Web3
            specialization and AI/ML as an additional technical domain.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {site.roles.map((role) => (
              <span
                key={role}
                className="rounded-md border border-line bg-charcoal/60 px-3.5 py-2 font-mono text-[10px] tracking-[0.16em] text-zinc-300"
              >
                {role.toUpperCase()}
              </span>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-violet-500/60 pl-5 font-display text-base font-medium text-zinc-200 sm:text-lg">
            Immutable logic. Verifiable state. Security as a default, not a patch.
          </p>
        </Reveal>

        <div className="space-y-4">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={0.12 + i * 0.1}>
              <article
                data-testid={`education-card-${i}`}
                className="group glass rounded-lg p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md border border-violet-500/30 bg-violet-500/10 p-2 text-violet-300">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-100">{ed.degree}</h3>
                  </div>
                  <span className="whitespace-nowrap font-mono text-[10px] tracking-[0.18em] text-cyan-400">
                    {ed.period}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-zinc-300">{ed.school}</p>
                <p className="font-mono text-[11px] tracking-wider text-zinc-500">{ed.place}</p>
                <p className="mt-3 text-xs leading-relaxed text-zinc-500 sm:text-sm">{ed.focus}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
