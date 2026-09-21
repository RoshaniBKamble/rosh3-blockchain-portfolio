import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, FolderGit2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

const badgeTones = {
  violet: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  cyan: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
};

const ProjectCard = ({ project, flip }) => (
  <Reveal>
    <article
      data-testid={`project-card-${project.slug}`}
      className={`group glass relative grid gap-0 overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.14)] lg:grid-cols-2 ${
        flip ? "" : ""
      }`}
    >
      <div className={`relative p-7 sm:p-10 ${flip ? "lg:order-2" : ""}`}>
        <span
          className="pointer-events-none absolute -top-3 right-4 font-display text-8xl font-bold text-zinc-800/40 transition-colors duration-300 group-hover:text-violet-500/25 sm:text-9xl"
          aria-hidden="true"
        >
          {project.num}
        </span>
        <div className="relative">
          <p className="mono-label text-[10px] text-zinc-500">
            PROJECT {project.num} <span className="text-zinc-700">//</span>{" "}
            <span className="text-violet-400 transition-colors duration-300 group-hover:text-violet-300">
              {project.subtitle.toUpperCase()}
            </span>
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((b) => (
              <span
                key={b.label}
                className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.18em] ${badgeTones[b.tone]}`}
              >
                {b.label}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-400">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded border border-line/80 bg-obsidian/70 px-2.5 py-1 font-mono text-[10px] tracking-wider text-zinc-500 transition-colors duration-300 group-hover:border-line group-hover:text-zinc-300"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to={`/project/${project.slug}`}
              data-testid={`project-case-study-btn-${project.slug}`}
              className="group/btn inline-flex items-center gap-2 rounded-md bg-violet-600 px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.18em] text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
            >
              VIEW CASE STUDY
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
            <span
              data-testid={`project-github-soon-${project.slug}`}
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-line/70 px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-zinc-600"
              title="Repository link will be published soon"
            >
              <FolderGit2 className="h-3.5 w-3.5" />
              GITHUB — COMING SOON
            </span>
          </div>
        </div>
      </div>

      <div
        className={`relative flex flex-col justify-center border-t border-line/60 bg-obsidian/50 p-7 sm:p-10 ${
          flip ? "lg:order-1 lg:border-r lg:border-t-0" : "lg:border-l lg:border-t-0"
        }`}
      >
        <p className="mono-label text-[10px] text-zinc-600">SYSTEM FLOW</p>
        <div className="mt-5 space-y-0">
          {project.flow.map((step, i) => (
            <div key={step}>
              <div className="flex items-center gap-3 rounded-md border border-line/60 bg-charcoal/50 px-4 py-2.5 transition-colors duration-300 hover:border-cyan-500/40">
                <span className="font-mono text-[9px] text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-300">{step}</span>
              </div>
              {i < project.flow.length - 1 ? (
                <div className="flex justify-center py-0.5" aria-hidden="true">
                  <span className="font-mono text-cyan-500/50">↓</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-zinc-600">
          <span>HOVER TO EXPLORE</span>
          <Link
            to={`/project/${project.slug}`}
            data-testid={`project-arrow-link-${project.slug}`}
            aria-label={`Open ${project.title} case study`}
            className="text-zinc-500 transition-all duration-300 group-hover:text-violet-300"
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  </Reveal>
);

export const Projects = () => (
  <section id="projects" data-testid="projects-section" className="relative border-t border-line/60">
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
      style={{ background: "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(6,182,212,0.07), transparent 70%)" }}
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeader
        index="04"
        label="SELECTED WORK"
        title="BLOCKCHAIN SYSTEMS I'M BUILDING"
        sub="Four engineering projects across smart-contract security, escrow, DeFi and verification — each with a full case study."
      />
      <div className="mt-14 space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} flip={i % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);
