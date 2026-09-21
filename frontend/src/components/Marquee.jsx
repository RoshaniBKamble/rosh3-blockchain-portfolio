import { marqueeItems } from "@/data/site";

export const Marquee = () => (
  <div
    data-testid="protocol-marquee"
    className="overflow-hidden border-y border-line bg-obsidian/80 py-4"
    aria-hidden="true"
  >
    <div className="animate-marquee flex w-max items-center">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center">
          {marqueeItems.map((item) => (
            <span
              key={`${copy}-${item}`}
              className="flex items-center font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500"
            >
              <span className="px-6">{item}</span>
              <span className="text-violet-500/60">//</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
