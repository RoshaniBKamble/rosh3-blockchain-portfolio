import { Reveal } from "@/components/Reveal";

export const SectionHeader = ({ index, label, title, sub, align = "left" }) => (
  <Reveal className={align === "center" ? "text-center" : ""}>
    <p className="mono-label text-violet-400" data-testid={`section-label-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      {index} / {label}
    </p>
    <h2 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-3xl lg:text-4xl">
      {title}
    </h2>
    {sub ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">{sub}</p> : null}
  </Reveal>
);
