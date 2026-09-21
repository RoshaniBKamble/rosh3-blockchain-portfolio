import { ChevronDown } from "lucide-react";

export const FlowDiagram = ({ steps, label = "ARCHITECTURE", testId }) => (
  <div className="glass rounded-lg" data-testid={testId}>
    <div className="flex items-center justify-between border-b border-line/80 px-4 py-2.5">
      <span className="mono-label text-[10px] text-zinc-500">{label}</span>
      <span className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-zinc-700" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
      </span>
    </div>
    <div className="flex flex-col items-stretch gap-0 p-4 sm:p-5">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-stretch">
          <div className="group flex items-center gap-3 rounded-md border border-line/70 bg-charcoal/60 px-4 py-3 transition-colors duration-300 hover:border-violet-500/40">
            <span className="font-mono text-[10px] text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-mono text-xs tracking-[0.15em] text-zinc-200 transition-colors duration-300 group-hover:text-violet-300">
              {step}
            </span>
            {i === steps.length - 1 ? (
              <span className="ml-auto font-mono text-[10px] tracking-widest text-emerald-400">● ENDPOINT</span>
            ) : null}
          </div>
          {i < steps.length - 1 ? (
            <ChevronDown className="mx-auto my-1 h-4 w-4 text-violet-500/60" aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  </div>
);
