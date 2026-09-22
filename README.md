# Roshani Kamble — Blockchain & Web3 Developer Portfolio

Personal engineering portfolio showcasing Web3 and blockchain development work: smart contracts, decentralized applications, DeFi mechanics, smart-contract security analysis, and on-chain/off-chain architecture.

**Live:** https://rosh3-blockchain.preview.emergentagent.com

## Featured Projects

| Project | Focus |
| --- | --- |
| **ChainSentinel** | Smart contract security & vulnerability analysis platform (Solidity, Foundry, Hardhat, Slither, Python, React) |
| **ChainEscrow** | Decentralized milestone escrow & dispute resolution dApp (Solidity, Ethereum, Hardhat, Ethers.js, React, TypeScript) |
| **LendGuard** | Educational/testnet DeFi lending & collateral risk protocol (Solidity, ERC-20, Foundry, React, Ethers.js) |
| **VerifiChain** | Blockchain credential & document verification with SHA-256 proofs, documents kept off-chain (Solidity, Ethereum, React, Ethers.js) |

Each project has a dedicated case-study page covering problem, solution, architecture, blockchain layer, on-chain/off-chain data split, testing, security considerations, limitations, and future improvements.

## Tech Stack

- **Frontend:** React 19, React Router, Tailwind CSS, Framer Motion, Lenis
- **Blockchain focus:** Solidity, Ethereum / EVM, Sepolia testnet, Ethers.js, Foundry, Hardhat, Slither
- **Backend scaffold:** FastAPI + MongoDB (included in the template; the portfolio itself is frontend-only)

## Repository Structure

```
frontend/          React application (components, pages, data, public assets)
  src/data/        Centralized site + project content (single source of truth)
  src/components/  Reusable UI sections (Hero, Projects, CaseStudy blocks, ...)
  src/pages/       Home page and reusable project case-study template
backend/           FastAPI scaffold (not required by the portfolio UI)
```

## Running Locally

```bash
cd frontend
yarn install
yarn start
```

The app runs on http://localhost:3000. Copy `frontend/.env.example` to `frontend/.env` if you need environment configuration.

## Contact

- Email: roshanikamble2002@gmail.com
- GitHub: https://github.com/RoshaniBKamble
- LinkedIn: https://www.linkedin.com/in/roshani-kamble-3a8b7b259

© 2026 Roshani Kamble
