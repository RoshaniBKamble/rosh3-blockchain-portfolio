import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, FolderGit2, MonitorX } from "lucide-react";
import Seo from "@/components/Seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { FlowDiagram } from "@/components/FlowDiagram";
import { getProject, projects } from "@/data/projects";

const badgeTones = {
  violet: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  cyan: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  amber: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
};

const Block = ({ label, title, children, testId }) => (
  <Reveal>
    <section data-testid={testId} className="glass rounded-lg p-6 sm:p-8">
      <p className="mono-label text-[10px] text-violet-400">{label}</p>
      <h2 className="mt-2.5 font-display text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">{title}</h2>
      <div className="mt-4 text-sm leading-relaxed text-zinc-400">{children}</div>
    </section>
  </Reveal>
);

const BulletList = ({ items }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-void text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-3xl px-5 py-32 text-center">
          <p className="mono-label text-violet-400">404 // NOT FOUND</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-zinc-100">Unknown project</h1>
          <Link
            to="/"
            data-testid="case-study-back-link"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-mono text-xs tracking-[0.18em] text-zinc-300 hover:border-violet-500/50 hover:text-violet-300"
          >
            <ArrowLeft className="h-4 w-4" /> BACK TO PORTFOLIO
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const cs = project.caseStudy;

  return (
    <div className="min-h-screen bg-void text-slate-100">
      <Seo
        title={`${project.title} — ${project.subtitle} | Roshani Kamble`}
        siteName="Roshani Kamble"
        description={project.description}
      />
      <Navbar />
      <main data-testid="case-study-page" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[440px]"
          style={{ background: "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(139,92,246,0.12), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-14 sm:px-8">
          <Reveal>
            <Link
              to="/"
              data-testid="case-study-back-link"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-zinc-500 transition-colors hover:text-violet-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> BACK TO SELECTED WORK
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <header className="mt-10">
              <p className="mono-label text-zinc-500">
                PROJECT {project.num} <span className="text-zinc-700">//</span>{" "}
                <span className="text-violet-400">CASE STUDY</span>
              </p>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tighter text-zinc-50 sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 font-display text-base text-zinc-400 sm:text-lg">{project.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.badges.map((b) => (
                  <span
                    key={b.label}
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.18em] ${badgeTones[b.tone]}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="case-study-github-link"
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/60 px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-300"
                  >
                    <FolderGit2 className="h-3.5 w-3.5" /> GITHUB REPOSITORY
                  </a>
                ) : (
                  <span
                    data-testid="case-study-github-soon"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-line/70 px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-zinc-600"
                    title="Repository link will be published soon"
                  >
                    <FolderGit2 className="h-3.5 w-3.5" /> GITHUB — COMING SOON
                  </span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="case-study-demo-link"
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-obsidian/60 px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-emerald-300 transition-all duration-300 hover:border-emerald-500/50"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> LIVE DEMO
                  </a>
                ) : (
                  <span
                    data-testid="case-study-demo-soon"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-line/70 px-5 py-3 font-mono text-[11px] tracking-[0.18em] text-zinc-600"
                    title="Live demo will be published after deployment"
                  >
                    <MonitorX className="h-3.5 w-3.5" /> DEMO COMING SOON
                  </span>
                )}
              </div>
            </header>
          </Reveal>

          <div className="mt-12 grid gap-5">
            <Block label="OVERVIEW" title="What this project is" testId="cs-overview">
              <p>{project.description}</p>
            </Block>

            <div className="grid gap-5 lg:grid-cols-2">
              <Block label="PROBLEM" title="The problem it addresses" testId="cs-problem">
                <p>{cs.problem}</p>
              </Block>
              <Block label="SOLUTION" title="How the system solves it" testId="cs-solution">
                <p>{cs.solution}</p>
              </Block>
            </div>

            <Block label="ARCHITECTURE" title="System architecture" testId="cs-architecture">
              <FlowDiagram steps={project.flow} label={`${project.title.toUpperCase()} // DATA FLOW`} testId="cs-flow-diagram" />
            </Block>

            <div className="grid gap-5 lg:grid-cols-2">
              <Block label="BLOCKCHAIN LAYER" title="What happens on the chain" testId="cs-blockchain-layer">
                <BulletList items={cs.blockchainLayer} />
              </Block>
              <Block label="ON-CHAIN / OFF-CHAIN" title="Where the data lives" testId="cs-data-split">
                <p className="mono-label text-[9px] text-emerald-400">STORED ON-CHAIN</p>
                <div className="mb-4 mt-2">
                  <BulletList items={cs.onChain} />
                </div>
                <p className="mono-label text-[9px] text-cyan-400">KEPT OFF-CHAIN</p>
                <div className="mt-2">
                  <BulletList items={cs.offChain} />
                </div>
              </Block>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <Block label="TECHNOLOGY STACK" title="Built with" testId="cs-tech-stack">
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-line/80 bg-charcoal/60 px-3 py-1.5 font-mono text-[11px] tracking-wider text-zinc-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block label="KEY FEATURES" title="Implemented features" testId="cs-features">
                <BulletList items={project.features} />
              </Block>
            </div>

            {project.vulnerabilityClasses ? (
              <Block label="SECURITY FOCUS" title="Vulnerability classes covered" testId="cs-vuln-classes">
                <ul className="flex flex-wrap gap-2">
                  {project.vulnerabilityClasses.map((v) => (
                    <li
                      key={v}
                      className="rounded-md border border-amber-500/30 bg-amber-500/5 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-amber-300"
                    >
                      {v}
                    </li>
                  ))}
                </ul>
                <p className="mono-label mb-2 mt-6 text-[9px] text-zinc-500">EACH FINDING REPORTS</p>
                <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {project.reportFields.map((f, i) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 rounded border border-line/70 bg-charcoal/50 px-3 py-2 font-mono text-[11px] text-zinc-300"
                    >
                      <span className="text-violet-400">{String(i + 1).padStart(2, "0")}</span> {f}
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}

            <div className="grid gap-5 lg:grid-cols-2">
              <Block label="TESTING" title="How it is tested" testId="cs-testing">
                <p>{cs.testing}</p>
              </Block>
              <Block label="SECURITY" title="Security considerations" testId="cs-security">
                <BulletList items={cs.security} />
              </Block>
            </div>

            <Block label="DEPLOYMENT" title="Network & contract status" testId="cs-deployment">
              <div className="rounded-md border border-line/70 bg-charcoal/50 p-4">
                <div className="flex items-center justify-between border-b border-line/60 pb-3 font-mono text-[11px]">
                  <span className="text-zinc-500">NETWORK</span>
                  <span className="tracking-[0.15em] text-cyan-300">ETHEREUM SEPOLIA (TESTNET)</span>
                </div>
                <p className="mt-3 text-sm text-zinc-400">
                  Testnet deployment information — contract address and block-explorer link — will be added after
                  deployment.
                </p>
              </div>
            </Block>

            <div className="grid gap-5 lg:grid-cols-2">
              <Block label="LIMITATIONS" title="What it does not do (yet)" testId="cs-limitations">
                <p>{cs.limitations}</p>
              </Block>
              <Block label="FUTURE IMPROVEMENTS" title="Planned — not yet built" testId="cs-future">
                <BulletList items={cs.future} />
              </Block>
            </div>
          </div>

          <Reveal>
            <Link
              to={`/project/${next.slug}`}
              data-testid="case-study-next-link"
              className="group glass mt-12 flex items-center justify-between rounded-lg p-6 transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.14)] sm:p-8"
            >
              <div>
                <p className="mono-label text-[10px] text-zinc-600">NEXT PROJECT</p>
                <p className="mt-2 font-display text-xl font-bold tracking-tight text-zinc-100 transition-colors group-hover:text-violet-200 sm:text-2xl">
                  {next.title}
                </p>
                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">{next.subtitle}</p>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-zinc-600 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-violet-300" />
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
