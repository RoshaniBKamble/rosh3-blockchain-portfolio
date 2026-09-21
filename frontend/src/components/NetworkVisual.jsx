import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { id: "code", label: "CODE", x: 60, y: 200, color: "#8B5CF6", meta: "solidity ^0.8.x" },
  { id: "contract", label: "SMART CONTRACT", x: 190, y: 90, color: "#A78BFA", meta: "deploy(contract)" },
  { id: "evm", label: "EVM BLOCK", x: 330, y: 210, color: "#06B6D4", meta: "state transition" },
  { id: "verify", label: "VERIFIED", x: 450, y: 100, color: "#10B981", meta: "keccak256 ✓" },
];

const EDGES = [
  ["code", "contract"],
  ["contract", "evm"],
  ["evm", "verify"],
  ["code", "evm"],
];

const node = (id) => NODES.find((n) => n.id === id);

const NodeGlyph = ({ n, active, onEnter, onLeave, reduce }) => (
  <g
    onMouseEnter={() => onEnter(n.id)}
    onMouseLeave={onLeave}
    style={{ cursor: "pointer" }}
    role="img"
    aria-label={`${n.label} node`}
  >
    <circle cx={n.x} cy={n.y} r={active ? 34 : 26} fill={n.color} opacity={active ? 0.14 : 0.07} className="transition-all duration-300" />
    {!reduce && (
      <circle cx={n.x} cy={n.y} r={26} fill="none" stroke={n.color} strokeWidth="0.6" opacity="0.5">
        <animate attributeName="r" values="26;40" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
    )}
    <circle
      cx={n.x}
      cy={n.y}
      r="7"
      fill="#0A0D14"
      stroke={n.color}
      strokeWidth={active ? 2.4 : 1.6}
      className="transition-all duration-300"
    />
    <circle cx={n.x} cy={n.y} r="2.6" fill={n.color} />
    <text
      x={n.x}
      y={n.y + 46}
      textAnchor="middle"
      fill={active ? n.color : "#64748B"}
      fontSize="9"
      fontFamily="JetBrains Mono, monospace"
      letterSpacing="2"
      className="transition-all duration-300"
    >
      {n.label}
    </text>
    {active && (
      <text
        x={n.x}
        y={n.y - 42}
        textAnchor="middle"
        fill={n.color}
        fontSize="9"
        fontFamily="JetBrains Mono, monospace"
        opacity="0.9"
      >
        {n.meta}
      </text>
    )}
  </g>
);

export const NetworkVisual = () => {
  const [active, setActive] = useState(null);
  const reduce = useReducedMotion();

  const isEdgeActive = ([a, b]) => active === a || active === b;

  return (
    <div className="relative" data-testid="network-visual">
      <div className="glass overflow-hidden rounded-xl">
        <div className="flex items-center justify-between border-b border-line/80 px-4 py-2.5">
          <span className="mono-label text-[10px] text-zinc-500">CODE → CONTRACT → CHAIN → VERIFY</span>
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-node-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            EVM
          </span>
        </div>
        <svg viewBox="0 0 510 290" className="block w-full" role="img" aria-label="Blockchain flow visualization: code to smart contract to EVM block to verification">
          <defs>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          {EDGES.map(([a, b]) => {
            const na = node(a);
            const nb = node(b);
            const activeEdge = active && isEdgeActive([a, b]);
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke={activeEdge ? "url(#edgeGrad)" : "#1E2638"}
                strokeWidth={activeEdge ? 1.6 : 1}
                strokeDasharray="5 6"
                className="transition-all duration-300"
              >
                {!reduce && <animate attributeName="stroke-dashoffset" from="44" to="0" dur="2.2s" repeatCount="indefinite" />}
              </line>
            );
          })}
          {!reduce &&
            EDGES.slice(0, 3).map(([a, b], i) => {
              const na = node(a);
              const nb = node(b);
              return (
                <circle key={`pulse-${a}-${b}`} r="2.4" fill={i === 2 ? "#10B981" : "#8B5CF6"} opacity="0.9">
                  <animateMotion
                    dur={`${3 + i * 0.8}s`}
                    repeatCount="indefinite"
                    path={`M${na.x},${na.y} L${nb.x},${nb.y}`}
                  />
                </circle>
              );
            })}
          {NODES.map((n) => (
            <NodeGlyph key={n.id} n={n} active={active === n.id} onEnter={setActive} onLeave={() => setActive(null)} reduce={reduce} />
          ))}
        </svg>
        <div className="flex items-center justify-between border-t border-line/80 px-4 py-2.5 font-mono text-[10px] tracking-[0.18em] text-zinc-500">
          <span>SOLIDITY</span>
          <span>ETHEREUM</span>
          <span className="text-violet-400">ETHERS.JS</span>
          <span className="hidden sm:inline">SEPOLIA</span>
        </div>
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-violet-600/10 blur-3xl"
        animate={reduce ? {} : { opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
