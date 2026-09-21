export const projects = [
  {
    slug: "chainsentinel",
    num: "01",
    title: "ChainSentinel",
    subtitle: "Smart Contract Security & Vulnerability Analysis Platform",
    description:
      "A developer-facing smart-contract security analysis platform focused on identifying common Solidity vulnerabilities and explaining their security implications and remediation.",
    tech: ["Solidity", "Foundry", "Hardhat", "Slither", "Python", "React"],
    badges: [{ label: "SECURITY / ANALYSIS", tone: "violet" }],
    vulnerabilityClasses: ["REENTRANCY", "ACCESS CONTROL", "UNSAFE EXTERNAL CALLS", "VALIDATION WEAKNESSES"],
    reportFields: ["Vulnerability", "Severity", "Location", "Explanation", "Attack Scenario", "Suggested Remediation"],
    flow: ["SOLIDITY SOURCE", "ANALYSIS ENGINE", "VULNERABILITY FINDINGS", "SEVERITY + LOCATION", "REMEDIATION GUIDANCE"],
    features: [
      "Detection of common Solidity vulnerability classes",
      "Severity classification with contract location references",
      "Plain-language explanation of each finding",
      "Attack scenario walkthroughs for critical patterns",
      "Remediation guidance per vulnerability",
    ],
    caseStudy: {
      problem:
        "Most smart-contract exploits are not exotic — they come from well-documented vulnerability classes like reentrancy, broken access control and unchecked external calls. Developers learning Solidity often know the names of these vulnerabilities but not how they actually appear in real contract code, or how an attacker would chain them into an exploit.",
      solution:
        "ChainSentinel analyzes Solidity contracts and reports findings as structured security records: the vulnerability class, its severity, where it occurs in the contract, why it is dangerous, how an attacker could exploit it, and how to remediate it. The goal is to make security review a learning loop, not just a pass/fail gate.",
      blockchainLayer: [
        "Target chain: Ethereum / EVM-compatible networks",
        "Analyzes Solidity source and contract structure",
        "Static analysis cross-checked with Slither",
        "Vulnerable vs. remediated contract pairs used to validate findings",
      ],
      onChain: ["Reference vulnerable contracts deployed on test networks for reproduction"],
      offChain: ["Analysis engine", "Findings database", "Explanations and remediation content", "Report UI"],
      testing:
        "Vulnerable and remediated contract pairs are exercised with Foundry and Hardhat test suites. Slither output is used as a cross-check for static-analysis findings, and exploit scenarios are reproduced in tests to confirm each reported weakness is real.",
      security: [
        "Reentrancy patterns and checks-effects-interactions violations",
        "Missing or misconfigured access control on state-changing functions",
        "Unsafe low-level external calls and unchecked return values",
        "Validation weaknesses around user-controlled inputs",
      ],
      limitations:
        "ChainSentinel focuses on common, well-documented vulnerability classes. It is an engineering and security-analysis platform — it is not a production-grade automated auditing service, and a clean report is not a guarantee of contract safety.",
      future: [
        "Broader vulnerability coverage (oracle manipulation, front-running scenarios)",
        "Deeper dataflow analysis across multi-contract systems",
        "Public testnet demo with shareable reports",
      ],
    },
  },
  {
    slug: "chainescrow",
    num: "02",
    title: "ChainEscrow",
    subtitle: "Decentralized Milestone Escrow & Dispute Resolution dApp",
    description:
      "A decentralized escrow dApp where milestone-based payments are controlled through Solidity smart contracts.",
    tech: ["Solidity", "Ethereum", "Hardhat", "Ethers.js", "React", "TypeScript"],
    badges: [{ label: "TESTNET", tone: "cyan" }],
    flow: ["CLIENT WALLET", "REACT DAPP", "ETHERS.JS", "SOLIDITY ESCROW", "ETHEREUM SEPOLIA"],
    features: [
      "Milestone Payments",
      "Approvals",
      "Refunds",
      "Dispute Workflow",
      "Wallet Integration",
      "Events",
      "Access Control",
      "Secure Withdrawals",
    ],
    caseStudy: {
      problem:
        "Freelance and contract work runs on trust: the client risks paying for work that never ships, and the worker risks shipping work that never gets paid. Traditional escrow adds a trusted intermediary with fees and delays.",
      solution:
        "ChainEscrow moves the escrow logic into a Solidity smart contract. Funds are locked on-chain, released milestone-by-milestone only on approval, and routed through a dispute workflow when the two sides disagree — without either party being able to unilaterally take the funds.",
      blockchainLayer: [
        "Network: Ethereum Sepolia testnet",
        "Solidity escrow contract holds and releases funds",
        "Wallet-based authentication — the connected wallet is the identity",
        "Contract events drive the dApp's transaction status UI",
        "Role-gated functions: client, worker and arbiter access control",
      ],
      onChain: ["Escrow balances", "Milestone state", "Approvals", "Refund and dispute state transitions", "Events"],
      offChain: ["React dApp interface", "Milestone descriptions and project metadata", "Transaction status presentation"],
      testing:
        "Hardhat unit tests cover milestone approval, refund and dispute paths, including expected reverts for unauthorized callers. Withdrawal flows are tested for correct balance accounting before any testnet interaction.",
      security: [
        "Access control on every state transition",
        "Pull-based withdrawals instead of push transfers",
        "State-machine ordering enforced — no release before approval",
        "Events emitted for every fund movement for off-chain traceability",
      ],
      limitations:
        "Deployed and tested on Sepolia testnet only — no real funds are involved. The dispute workflow relies on a designated arbiter role, which is a deliberate centralization trade-off for an educational escrow design.",
      future: [
        "Multi-arbiter dispute resolution",
        "ERC-20 milestone payments in addition to ETH",
        "Contract verification and explorer links published after deployment",
      ],
    },
  },
  {
    slug: "lendguard",
    num: "03",
    title: "LendGuard",
    subtitle: "DeFi Lending & Collateral Risk Protocol",
    description:
      "An educational Ethereum testnet lending protocol demonstrating collateralized borrowing, interest logic, health assessment and liquidation.",
    tech: ["Solidity", "Ethereum", "ERC-20", "Foundry", "React", "Ethers.js"],
    badges: [{ label: "EDUCATIONAL / TESTNET", tone: "amber" }],
    flow: ["COLLATERAL", "BORROW", "INTEREST", "HEALTH FACTOR", "LIQUIDATION"],
    features: [
      "ERC-20 Assets",
      "Collateral",
      "Borrowing",
      "Repayment",
      "Interest",
      "Risk Assessment",
      "Liquidation",
      "Oracle Risk",
    ],
    caseStudy: {
      problem:
        "DeFi lending protocols are the backbone of on-chain finance, but their core mechanics — collateralization, interest accrual, health factors and liquidation — are usually hidden behind production protocols that are too complex to learn from directly.",
      solution:
        "LendGuard implements the essential money-market loop in a compact, readable protocol: users deposit ERC-20 collateral, borrow against it, accrue interest, and get liquidated if their position's health factor drops below the safety threshold. Every step is inspectable in the contracts and visible in the UI.",
      blockchainLayer: [
        "Network: Ethereum testnet",
        "ERC-20 tokens used as collateral and borrow assets",
        "Solidity contracts track positions, interest and health factors",
        "Liquidation executed as a permissionless contract call",
        "Ethers.js connects the React interface to the protocol",
      ],
      onChain: ["Collateral deposits", "Borrow balances", "Interest accrual state", "Health factor computation", "Liquidation execution"],
      offChain: ["React dashboard for positions and risk", "Health-factor visualization", "Educational explanations of each mechanism"],
      testing:
        "Foundry tests cover deposit, borrow, repay and liquidation flows, including boundary conditions around the liquidation threshold and interest accrual over time. Revert cases for over-borrowing and under-collateralized positions are exercised explicitly.",
      security: [
        "Health factor checked before every borrow and withdrawal",
        "Oracle risk is treated as a first-class design concern, not an afterthought",
        "Liquidation incentives and thresholds kept simple and auditable",
        "Position state transitions guarded against invalid sequences",
      ],
      limitations:
        "LendGuard is an educational testnet protocol — not a production financial platform. It must not be used with real assets. Price feeds, liquidation incentives and interest models are simplified for learning purposes.",
      future: [
        "Multiple collateral assets with isolated risk parameters",
        "Utilization-based dynamic interest rate model",
        "Price-shock stress-test scenarios in the dashboard",
      ],
    },
  },
  {
    slug: "verifichain",
    num: "04",
    title: "VerifiChain",
    subtitle: "Blockchain Credential & Document Verification Platform",
    description:
      "A blockchain-based credential and document verification platform using SHA-256 hashing and smart contracts to provide verifiable authenticity proofs without storing original documents directly on-chain.",
    tech: ["Solidity", "Ethereum", "SHA-256", "React", "Ethers.js"],
    badges: [
      { label: "SEPOLIA TESTNET", tone: "cyan" },
      { label: "DOCUMENT DATA REMAINS OFF-CHAIN", tone: "emerald" },
    ],
    flow: ["DOCUMENT", "SHA-256", "SMART CONTRACT", "ETHEREUM", "VERIFICATION"],
    features: [
      "Credential Issuance",
      "Authorization",
      "Verification",
      "Revocation",
      "Blockchain Events",
      "Wallet Integration",
      "Sepolia Testnet",
    ],
    caseStudy: {
      problem:
        "Degrees, certificates and official documents are trivially easy to forge as PDFs, and verifying a real one usually means contacting the issuer manually. At the same time, putting personal documents directly on a public blockchain would be a privacy disaster.",
      solution:
        "VerifiChain never puts the document on-chain. The document is hashed with SHA-256 off-chain, and only the hash is registered in a smart contract by an authorized issuer. Anyone can later re-hash a presented document and check it against the chain: matching hash means authentic and unaltered, a mismatch means tampered. Issuers can also revoke credentials, which the contract records.",
      blockchainLayer: [
        "Network: Ethereum Sepolia testnet",
        "Smart contract stores credential hashes, issuer registry and revocation state",
        "Only authorized wallets can issue or revoke credentials",
        "Events emitted on issuance and revocation for off-chain indexing",
        "Wallet integration via Ethers.js for issuers and verifiers",
      ],
      onChain: ["SHA-256 document hashes", "Issuer authorization registry", "Revocation state", "Issuance and revocation events"],
      offChain: ["Original documents", "Credential metadata", "Hash generation", "Verification interface"],
      testing:
        "Hash generation is validated against known SHA-256 vectors so off-chain hashing always matches what verifiers compute. Contract functions are tested for issuance, authorization enforcement and revocation, including reverts for unauthorized issuers.",
      security: [
        "Only hashes on-chain — original documents and personal data never leave off-chain storage",
        "Role-based authorization for issuing and revoking credentials",
        "Revocation is a contract state change, not a deletion — full audit trail preserved",
        "Events provide a tamper-evident history of every issuance",
      ],
      limitations:
        "Runs on Sepolia testnet. Verification proves a document matches what an authorized issuer registered — it cannot by itself prove the issuer's real-world authority, which depends on how issuer wallets are onboarded.",
      future: [
        "Decentralized identity integration for issuer onboarding",
        "Batch issuance via Merkle roots",
        "Public verification portal after testnet deployment is finalized",
      ],
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
