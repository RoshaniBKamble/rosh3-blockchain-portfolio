# PRD — Roshani Kamble · Blockchain & Web3 Developer Portfolio

## Original problem statement
Build a premium, production-quality Web3/Blockchain developer portfolio for **Roshani Kamble** (Blockchain & Web3 Developer) to link from her resume. Dark futuristic engineering aesthetic (deep black, electric violet, cyan, emerald status accents), Space Grotesk + JetBrains Mono, masked hero reveal, blockchain network visual, full case-study pages for 4 projects, strict truthfulness (no fake stats/links/demos), Awwwards-level motion (framer-motion + lenis), responsive, accessible, SEO-ready.

## Real contact details (DO NOT CHANGE)
- Email: roshanikamble2002@gmail.com (mailto)
- Phone: +91 9307312497 (tel:+919307312497)
- GitHub: https://github.com/RoshaniBKamble
- LinkedIn: https://www.linkedin.com/in/roshani-kamble-3a8b7b259
- Location: Pune, Maharashtra, India

## Architecture
- Frontend-only React 19 SPA (no backend dependency; backend service unused)
- react-router-dom: `/` (single-page portfolio) + `/project/:slug` (reusable case-study template)
- Centralized content: `src/data/site.js` (identity, nav, stack, pillars, process, education, achievement), `src/data/projects.js` (4 projects incl. full case-study data)
- Components: Navbar, Hero, NetworkVisual (interactive SVG), Marquee, About, Stack, Engineering, Projects, Process, Achievement, Contact, Footer, FlowDiagram, SectionHeader, Reveal
- Motion: framer-motion (masked headline reveal, scroll reveals, parallax) + lenis smooth scroll; prefers-reduced-motion respected
- SEO: Seo component (title/canonical/OG/JSON-LD Person), llms.txt, custom favicon.svg

## Implemented (2026-09-21)
- Sticky glass navbar (RK / ROSH3 brand, emerald pulse, mobile drawer)
- Kinetic hero: masked line-by-line headline "BUILDING DECENTRALIZED SYSTEMS. ENGINEERING TRUST ON-CHAIN.", status chip (open to opportunities), tech badges, 3 CTAs (Explore Projects / real GitHub / real LinkedIn), interactive SVG network visual (code → contract → EVM → verified) with hover node highlights + parallax
- Slow editorial tech marquee
- 01/ABOUT with education timeline (M.Sc. Blockchain Tech MIT-WPU 2025–Present; BBA CA SPPU 2022–2025)
- 02/STACK — 6 truthful categories from resume
- 03/ENGINEERING — 5 capability cards
- 04/SELECTED WORK — ChainSentinel, ChainEscrow (TESTNET), LendGuard (EDUCATIONAL/TESTNET), VerifiChain (SEPOLIA / off-chain data badge); hover glow, system-flow panels; GITHUB shown as "COMING SOON" (no fake links), LIVE DEMO omitted
- 4 case-study pages: Overview, Problem, Solution, Architecture diagram, Blockchain Layer, On-chain/Off-chain split, Tech, Features, Testing, Security, Deployment (Sepolia note, no fake addresses), Limitations, Future, next-project nav
- 05/PROCESS 7-step lifecycle, 06/ACHIEVEMENT (E.D.G.E. Mini Project winner, MIT-WPU), 07/CONNECT (mailto/tel/GitHub/LinkedIn + copy-email toast), footer with © 2026
- data-testids on all interactive elements

## Verified
- Desktop hero/mid/projects/contact screenshots, case-study page, mobile 390px (no horizontal overflow, drawer works), zero app console errors

## Backlog
- P0: Add real per-project GitHub repo URLs + contract addresses/explorer links when deployed (swap "COMING SOON" chips)
- P1: Live demos for ChainEscrow / VerifiChain after Sepolia deployment
- P1: Resume PDF download button
- P2: Blog/writing section on Web3 security learnings
