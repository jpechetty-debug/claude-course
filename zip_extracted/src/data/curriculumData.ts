export interface LabItem {
  id: number;
  section: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  difficultyColor: string;
  objective: string;
  inputs: string;
  instructions: string[];
  expectedOutput: string;
  successCriteria: string;
}

export interface CapstoneItem {
  id: string;
  tier: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  title: string;
  scope: string;
  architecture: string;
  features: string[];
  deliverables: string[];
  rubric: { category: string; points: number }[];
}

export interface LessonItem {
  day: number;
  title: string;
  duration: string;
  outcomes: string;
  lab: string;
  assignment: string;
  quiz: string;
}

export interface ModuleItem {
  id: number;
  title: string;
  weeks: string;
  goals: string;
  lessons: LessonItem[];
}

export interface GapItem {
  id: number;
  title: string;
  whyItMatters: string;
  placement: string;
  duration: string;
}

export const auditMetrics = [
  { metric: 'Clarity', score: 9.0, max: 10, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { metric: 'Depth', score: 8.5, max: 10, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { metric: 'Engagement', score: 8.5, max: 10, color: 'text-amber-500', bg: 'bg-amber-50' },
  { metric: 'Practicality', score: 9.5, max: 10, color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

export const gapAnalysisList: GapItem[] = [
  { id: 1, title: 'Building Custom MCP Servers (stdio & SSE)', whyItMatters: '90% of enterprise value comes from connecting Claude to internal databases and APIs.', placement: 'Week 4 (Module 5)', duration: '4.5 Hours' },
  { id: 2, title: 'Deep Context Engineering & Prompt Caching', whyItMatters: 'Developers waste 60%+ of API budgets on cold cache misses and bloated history.', placement: 'Week 2 (Module 2)', duration: '3.0 Hours' },
  { id: 3, title: 'Full-Scale Claude Agent SDK Applications', whyItMatters: 'AI engineers need to embed Claude’s agent loop into custom SaaS backends.', placement: 'Week 7 (Module 7)', duration: '6.0 Hours' },
  { id: 4, title: 'Multi-Agent Swarm Architectures & Consensus', whyItMatters: 'Complex refactoring requires supervisor-worker topologies and parallel audits.', placement: 'Week 6 (Module 6)', duration: '4.5 Hours' },
  { id: 5, title: 'Autonomous GitHub Actions CI/CD Bots', whyItMatters: 'Organizations require autonomous PR review and auto-bugfixing in CI pipelines.', placement: 'Week 7 (Module 7)', duration: '4.0 Hours' },
  { id: 6, title: 'IDE Co-Existence (Cursor, VS Code & JetBrains)', whyItMatters: 'Top engineers pair terminal Claude Code with their primary editor for 10x speed.', placement: 'Week 1 (Module 1)', duration: '2.5 Hours' },
  { id: 7, title: 'Large Monorepo Navigation & Code Graphs', whyItMatters: 'Real-world developers work in 1,000,000+ line repos requiring AST navigation.', placement: 'Week 3 (Module 3)', duration: '3.5 Hours' },
  { id: 8, title: 'Enterprise Security, Managed Settings & DLP', whyItMatters: 'CTOs and Security teams require enterprise governance before approving org rollout.', placement: 'Week 8 (Module 8)', duration: '3.5 Hours' },
  { id: 9, title: 'Multi-Cloud Provider Routing (Bedrock / Vertex AI)', whyItMatters: 'Regulated enterprises deploy Claude Code via AWS IAM and GCP Workload Identity.', placement: 'Week 7 (Module 7)', duration: '3.0 Hours' },
  { id: 10, title: 'Automated Agent Evals & Regression Testing', whyItMatters: 'Quantitative proof that skills and system prompts do not degrade over time.', placement: 'Week 8 (Module 8)', duration: '3.5 Hours' },
  { id: 11, title: 'Claude Code on the Web Cloud Sandboxes', whyItMatters: 'Asynchronous cloud agents execute long refactors while engineers sleep.', placement: 'Week 6 (Module 6)', duration: '2.5 Hours' },
  { id: 12, title: 'Persistent Memory & Squad Knowledge Bases', whyItMatters: 'Agents must remember architecture decisions across developer checkouts.', placement: 'Week 2 (Module 2)', duration: '2.5 Hours' },
  { id: 13, title: 'Rich JSON Hook Decisions & Slack Webhooks', whyItMatters: 'Enterprise hook pipelines require integration with corporate SIEMs and alerts.', placement: 'Week 3 (Module 3)', duration: '3.5 Hours' },
  { id: 14, title: 'TDD & Automated Mutation Testing Loops', whyItMatters: 'TDD yields a 95%+ first-pass accuracy rate compared to speculative coding.', placement: 'Week 3 (Module 3)', duration: '3.0 Hours' },
  { id: 15, title: 'Custom Output Styles & Developer Personas', whyItMatters: 'Different tasks require different communication density and validation rigor.', placement: 'Week 2 (Module 2)', duration: '2.0 Hours' },
  { id: 16, title: 'Git Worktree Fleets & Concurrent Local Sessions', whyItMatters: 'Power users run 3 to 5 simultaneous Claude sessions in parallel branches.', placement: 'Week 6 (Module 6)', duration: '2.5 Hours' },
  { id: 17, title: 'Security Auditing & OWASP SAST Bot Workflows', whyItMatters: 'Claude Code actively hardens codebases against injection and IDOR flaws.', placement: 'Week 6 (Module 6)', duration: '3.5 Hours' },
  { id: 18, title: 'Token Economics, FinOps & Quota Attribution', whyItMatters: 'Engineering leaders must forecast and control Claude Code ROI across 50+ seats.', placement: 'Week 8 (Module 8)', duration: '2.5 Hours' },
  { id: 19, title: 'Authoring & Monetizing Marketplace Plugins', whyItMatters: 'Unlocks monetization and career opportunities in the emerging AI tooling market.', placement: 'Week 4 (Module 4)', duration: '3.5 Hours' },
  { id: 20, title: 'Production Portfolio Defense & Client Proposals', whyItMatters: 'Equips students to land $150k-$280k roles or $10k-$50k consulting clients.', placement: 'Week 8 (Module 8)', duration: '5.0 Hours' },
];

export const courseNamesList = [
  "Claude Code Mastery: Zero to Production AI Engineer",
  "Anthropic Claude Code Architect: Enterprise Agentic Systems",
  "The Complete Claude Engineering Fellowship: CLI, SDK & Multi-Agent Swarms",
  "Claude Code for High-Velocity Software Engineers & Tech Leaders",
  "Production AI with Claude: From Terminal Prompts to Autonomous Systems",
  "Full-Stack Claude Code: MCP, Hooks, Subagents & Custom SDK Harnesses",
  "Claude Code Immersion: The Enterprise AI Developer Bootcamp",
  "Autonomous Software Engineering with Claude Code & Agent SDK",
  "Claude Developer Masterclass: Context, Code & Cloud Sandboxes",
  "The Claude Code Certification Program: Building Production AI Workflows"
];

export const masterPromise = "Transform from an AI-curious developer into a world-class AI Software Engineer capable of building, securing, automating, and deploying production-grade agentic systems, custom MCP servers, and enterprise CI/CD pipelines using Claude Code and the Agent SDK.";

export const labs50Catalog: LabItem[] = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  let section = 'CLI Fundamentals & Steering';
  let difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' = 'Beginner';
  let difficultyColor = 'text-emerald-600 bg-emerald-50';

  if (id > 10 && id <= 20) {
    section = 'Context Engineering & Memory';
    difficulty = 'Intermediate';
    difficultyColor = 'text-indigo-600 bg-indigo-50';
  } else if (id > 20 && id <= 28) {
    section = 'Deterministic Hooks, Skills & Plugins';
    difficulty = id > 25 ? 'Advanced' : 'Intermediate';
    difficultyColor = id > 25 ? 'text-amber-600 bg-amber-50' : 'text-indigo-600 bg-indigo-50';
  } else if (id > 28 && id <= 37) {
    section = 'Model Context Protocol (MCP) Engineering';
    difficulty = 'Advanced';
    difficultyColor = 'text-amber-600 bg-amber-50';
  } else if (id > 37 && id <= 44) {
    section = 'Subagents, Parallel Swarms & Concurrency';
    difficulty = id > 41 ? 'Expert' : 'Advanced';
    difficultyColor = id > 41 ? 'text-rose-600 bg-rose-50' : 'text-amber-600 bg-amber-50';
  } else if (id > 44) {
    section = 'Headless CI/CD, Agent SDK & Enterprise Evals';
    difficulty = 'Expert';
    difficultyColor = 'text-rose-600 bg-rose-50';
  }

  const titles = [
    "Terminal Hardening & Diagnostic Verification",
    "Passive Codebase Deconstruction (Read-Only)",
    "Zero-Risk Feature Planning in Plan Mode",
    "Authoring High-Impact CLAUDE.md Steering Files",
    "The Single-Field Validation Loop (Explore-Plan-Code-Verify)",
    "Fast Interrupts & Checkpoint Rewind Drills (Esc / Esc Esc)",
    "Permission Mode Cycling & Boundary Auditing",
    "Shell Passthrough Execution with ! Prefix",
    "Interactive Navigation & Prompt History Recall",
    "Model Switching & Cost-Tier Matching (/model)",
    "Real-Time Context Inspection with /context",
    "Prompt Caching Maximization & Cache TTL Drills",
    "Surgical File Pinning with @ vs Unbounded Globbing",
    "Mid-Task In-Place Compaction with /compact",
    "Session Segregation & Context Contamination Testing (/clear)",
    "Squad Architecture Memory Configuration (.claude/memory/)",
    "Thinking Token Ceiling & Effort Tuning (MAX_THINKING_TOKENS)",
    "Authoring Custom Slash Commands with Frontmatter",
    "Dynamic Slash Commands with $ARGUMENTS Injection",
    "Crafting Reusable Output Styles & Developer Personas",
    "Hook Lifecycle Event Logging (Pre/Post/Stop)",
    "Hardening Secret Protection with PreToolUse Hooks",
    "Format-on-Write & Instant Lint Auto-Fixing (PostToolUse)",
    "JSON Decision Protocol & Webhook Alerting (Slack/Teams)",
    "Authoring Auto-Activating Agent Skills (SKILL.md)",
    "Progressive Disclosure in Multi-File Skills",
    "Auditing & Sandboxing Marketplace Plugins",
    "Packaging & Publishing Custom Enterprise Plugins",
    "MCP Client Scoping & Tool Impact Profiling (.mcp.json)",
    "Building a Python FastMCP Server from Scratch (stdio)",
    "Building a TypeScript MCP Server with Zod Validation (stdio)",
    "Implementing Dynamic MCP URI Resources (logs://, db://)",
    "Remote MCP Server Deployment over HTTP/SSE with Auth",
    "Interactive MCP Elicitation Workflows",
    "MCP Server Debugging & Protocol Packet Sniffing (Inspector)",
    "Multi-Server MCP Gateway & Aggregator",
    "Disconnection Discipline & Context Reclamation",
    "Authoring Read-Only Code Reviewer Subagent",
    "Model Tiering in Subagent Pipelines (Haiku for Search, Opus for Logic)",
    "Parallel Multi-Domain Review Swarm (Security + Perf + QA)",
    "Supervisor-Worker Hierarchical Task Decomposition",
    "Concurrent Multi-Branch Development with Git Worktrees",
    "Cloud Sandbox Dispatch on Claude Code on the Web (& operator)",
    "Bidirectional Session Teleportation (Terminal ↔ Web)",
    "Headless Scripting & JSON Pipeline Automation (claude -p)",
    "Deploying an Autonomous GitHub Actions PR Review Bot",
    "Building a Custom Python Agent with the Claude Agent SDK",
    "Interactive Human-in-the-Loop Web Dashboard for Agent SDK",
    "Automated Skill Evals & Regression Testing Harness",
    "FinOps Token Attribution & Real-Time Cost Dashboard"
  ];

  return {
    id,
    section,
    title: titles[i] || `Production Lab ${id}`,
    difficulty,
    difficultyColor,
    objective: `Master the practical engineering mechanics of ${titles[i]}.`,
    inputs: `Cloned test repository, active Claude Code CLI, configuration files.`,
    instructions: [
      `Step 1: Initialize the lab environment and verify baseline configuration.`,
      `Step 2: Execute target command/prompt sequence using recommended permission mode.`,
      `Step 3: Verify outputs, check diffs, and inspect token metrics.`
    ],
    expectedOutput: `Deterministic pass status with clean diff and verified assertion logs.`,
    successCriteria: `All automated checks pass with zero unhandled errors or context leakage.`
  };
});

export const capstones30Catalog: CapstoneItem[] = [
  // Beginner (5)
  {
    id: "B1",
    tier: "Beginner",
    title: "Legacy CLI Tool Modernizer & Test Generator",
    scope: "Modernize a legacy CLI tool to Python 3.12 / TypeScript ESM with 100% test coverage using Plan Mode.",
    architecture: "Legacy Code ──► Plan Mode Deconstruction ──► Atomic ESM Refactor ──► Automated Pytest/Vitest",
    features: ["Zero-regression CLI interface", "Type annotations", "95%+ branch coverage", "Updated CLAUDE.md"],
    deliverables: ["Modernized repository", "Test suite", "Migration diff report"],
    rubric: [{ category: "Code Quality", points: 30 }, { category: "Test Coverage", points: 30 }, { category: "CLI Compatibility", points: 20 }, { category: "Plan Discipline", points: 20 }]
  },
  {
    id: "B2",
    tier: "Beginner",
    title: "Full-Stack Documentation & API Specification Generator",
    scope: "Analyze a 10,000-line codebase and generate complete OpenAPI 3.1 specs and Mermaid diagrams headlessly.",
    architecture: "Backend Controllers ──► Claude -p Extraction ──► OpenAPI 3.1 YAML + Mermaid Architecture Map",
    features: ["Automated endpoint discovery", "Interactive Mermaid sequence diagrams", "Developer onboarding guide"],
    deliverables: ["openapi.yaml", "ARCHITECTURE.md", "Documentation website"],
    rubric: [{ category: "Schema Accuracy", points: 35 }, { category: "Diagram Clarity", points: 25 }, { category: "Readme Quality", points: 20 }, { category: "Scripting", points: 20 }]
  },
  {
    id: "B3",
    tier: "Beginner",
    title: "Monorepo Code Smell & Technical Debt Auditor",
    scope: "Build a headless CLI tool that scans a multi-package repo for dead code, circular dependencies, and security smells.",
    architecture: "Monorepo Root ──► AST Static Analysis ──► Claude Severity Classifier ──► Structured Debt Matrix",
    features: ["Orphaned export detection", "Circular dependency mapping", "Prioritized refactoring backlog"],
    deliverables: ["Audit script", "TECH_DEBT_REPORT.md", "GitHub issue backlog"],
    rubric: [{ category: "Detection Precision", points: 35 }, { category: "Remediation Value", points: 25 }, { category: "JSON Parsing", points: 20 }, { category: "Token Efficiency", points: 20 }]
  },
  {
    id: "B4",
    tier: "Beginner",
    title: "Automated Git Commit & Release Note Pipeline",
    scope: "Create terminal tools that analyze uncommitted git diffs, generate Conventional Commits, and compile changelogs.",
    architecture: "git diff HEAD ──► Unix Pipe ──► Claude -p Conventional Commit Engine ──► Semantic Release Tag",
    features: ["Conventional commit enforcement", "Semantic version recommendation", "Grouped markdown changelog"],
    deliverables: ["Shell scripts", ".claude/commands/pr-release.md", "Documentation"],
    rubric: [{ category: "Commit Accuracy", points: 30 }, { category: "Changelog Depth", points: 30 }, { category: "Ergonomics", points: 20 }, { category: "Token Efficiency", points: 20 }]
  },
  {
    id: "B5",
    tier: "Beginner",
    title: "Config & Environment Drift Detector",
    scope: "Cross-reference .env.example, Dockerfiles, and k8s manifests to detect missing keys and default secrets.",
    architecture: ".env.example + Docker + k8s ──► Claude Comparison Engine ──► Drift Alert Matrix & Auto-Fix Template",
    features: ["Missing environment key alerts", "Hardcoded secret flagging", "Auto-synchronized .env.template"],
    deliverables: ["Audit CLI utility", "Drift matrix", "Remediation command"],
    rubric: [{ category: "Drift Precision", points: 35 }, { category: "Security Alerting", points: 25 }, { category: "Auto-Fix", points: 20 }, { category: "Documentation", points: 20 }]
  },

  // Intermediate (10)
  {
    id: "I1",
    tier: "Intermediate",
    title: "Enterprise Deterministic Hook & Compliance Suite",
    scope: "Build a cross-platform security and formatting hook suite preventing secret leaks and enforcing format-on-write.",
    architecture: "Tool Call ──► PreToolUse Secret Guard (Bash/PowerShell) ──► PostToolUse Formatter ──► Stop Audit Log",
    features: ["Regex secret blocking (.env, .pem, keys)", "Auto-format on write", "Structured JSON audit telemetry"],
    deliverables: [".claude/settings.json", "Hook scripts", "Automated test suite"],
    rubric: [{ category: "Secret Interception", points: 30 }, { category: "Cross-Platform", points: 25 }, { category: "Formatting", points: 25 }, { category: "Telemetry", points: 20 }]
  },
  {
    id: "I2",
    tier: "Intermediate",
    title: "Production Full-Stack DevSecOps Plugin Suite",
    scope: "Package and distribute a complete Claude Code plugin bundling skills, slash commands, subagents, and hooks.",
    architecture: "Plugin Manifest (plugin.json) ──► Commands + Skills + Agents + Hooks ──► One-Command Installation",
    features: ["Unified plugin distribution", "Auto-activating Docker skills", "Specialized security reviewer subagent"],
    deliverables: ["Packaged plugin repository", "Install script", "End-to-end demo"],
    rubric: [{ category: "Spec Compliance", points: 30 }, { category: "Component Depth", points: 30 }, { category: "Install Flow", points: 20 }, { category: "Documentation", points: 20 }]
  },
  {
    id: "I3",
    tier: "Intermediate",
    title: "Smart Database Migration & Index Optimization Assistant",
    scope: "Analyze SQL/Prisma schemas, suggest indexing strategies, and draft zero-downtime expand/contract migrations.",
    architecture: "Prisma/SQL Schema ──► Index Profiler Skill ──► Query Plan Analyzer ──► Safe Multi-Stage Migration",
    features: ["Missing FK index detection", "Zero-downtime expand/contract patterns", "PostgreSQL query plan tuning"],
    deliverables: [".claude/skills/db-migrate/", "Helper Python scripts", "Migration test suite"],
    rubric: [{ category: "Index Quality", points: 30 }, { category: "Migration Safety", points: 30 }, { category: "Skill Design", points: 20 }, { category: "Test Rigor", points: 20 }]
  },
  {
    id: "I4",
    tier: "Intermediate",
    title: "Autonomous Next.js / React Refactoring Engine",
    scope: "Refactor legacy React class components to React Server Components (RSC) with Playwright E2E verification.",
    architecture: "Legacy React ──► RSC Skill ──► Server/Client Boundary Split ──► Playwright Test Verification",
    features: ["Automatic 'use client' boundary split", "Async server function data fetching", "Zero hydration error rate"],
    deliverables: ["Refactoring slash commands", "React skill", "E2E test suite"],
    rubric: [{ category: "RSC Separation", points: 35 }, { category: "Modern Data Flow", points: 25 }, { category: "Test Pass Rate", points: 20 }, { category: "Zero Hydration Errors", points: 20 }]
  },
  {
    id: "I5",
    tier: "Intermediate",
    title: "API Error Standardization & Telemetry Instrumenter",
    scope: "Instrument backend route handlers with RFC 7807 problem details and OpenTelemetry distributed trace spans.",
    architecture: "Route Handlers ──► Standardization Skill ──► RFC 7807 Error Envelopes + OpenTelemetry Spans",
    features: ["Stack trace leakage elimination", "RFC 7807 error envelopes", "Automatic trace context propagation"],
    deliverables: ["Standardization skill", "Error middleware", "Integration test suite"],
    rubric: [{ category: "RFC 7807 Compliance", points: 35 }, { category: "Telemetry Traces", points: 25 }, { category: "Security", points: 20 }, { category: "Tests", points: 20 }]
  },
  {
    id: "I6",
    tier: "Intermediate",
    title: "Automated OpenAPI 3.1 & SDK Generator Skill",
    scope: "Extract models and routes from backend code to produce OpenAPI 3.1 specs and compile TypeScript/Python SDKs.",
    architecture: "Backend Code ──► Extraction Skill ──► OpenAPI 3.1 YAML ──► TypeScript & Python SDK Packages",
    features: ["Automated route extraction", "OpenAPI 3.1 YAML generation", "Multi-language typed client SDKs"],
    deliverables: [".claude/skills/sdk-builder/", "SDK code generator", "Sample client apps"],
    rubric: [{ category: "Spec Validity", points: 35 }, { category: "SDK Type Quality", points: 25 }, { category: "Skill Design", points: 20 }, { category: "Client Tests", points: 20 }]
  },
  {
    id: "I7",
    tier: "Intermediate",
    title: "Squad Architecture Memory & Knowledge Sharing System",
    scope: "Sync git-committed Architectural Decision Records (ADRs) to .claude/memory/ across developer workstations.",
    architecture: "ADR Markdown Files ──► Sync Utility ──► .claude/memory/ ──► Zero ADR Violations in Clean Sessions",
    features: ["Bi-directional ADR memory sync", "Real-time ADR violation linting", "Automated ADR drafting"],
    deliverables: ["Memory sync CLI tool", "ADR template suite", "Verification tests"],
    rubric: [{ category: "Sync Mechanism", points: 30 }, { category: "Rule Adherence", points: 30 }, { category: "Memory Indexing", points: 20 }, { category: "Documentation", points: 20 }]
  },
  {
    id: "I8",
    tier: "Intermediate",
    title: "Interactive PR Triage & Semantic Labeling Assistant",
    scope: "Build a subagent workflow that triages PRs, calculates risk scores, and generates semantic GitHub labels.",
    architecture: "PR Diff ──► Triage Subagent ──► Multi-Factor Risk Score ──► GitHub Semantic Labels & Summary",
    features: ["Multi-factor risk scoring", "Semantic categorization", "Non-technical executive PR summaries"],
    deliverables: ["/triage-pr command", "Subagent config", "GitHub integration script"],
    rubric: [{ category: "Risk Scoring", points: 35 }, { category: "Labeling Precision", points: 25 }, { category: "Subagent Scoping", points: 20 }, { category: "Summary Clarity", points: 20 }]
  },
  {
    id: "I9",
    tier: "Intermediate",
    title: "Context-Aware Microservice Scaffolder",
    scope: "Inspect an organization's existing repositories and scaffold a new, perfectly synchronized microservice skeleton.",
    architecture: "Existing Repo Fleet ──► Pattern Extraction ──► Scaffolder Command ──► Synced Microservice Boilerplate",
    features: ["Company standard logging & auth pattern matching", "Complete CI/CD & Docker boilerplate", "100% CLAUDE.md compliance"],
    deliverables: ["/scaffold-service command", "Microservice template", "Validation test suite"],
    rubric: [{ category: "Pattern Replication", points: 35 }, { category: "Completeness", points: 25 }, { category: "Execution Speed", points: 20 }, { category: "Test Pass Rate", points: 20 }]
  },
  {
    id: "I10",
    tier: "Intermediate",
    title: "TDD Mutation Testing Harness",
    scope: "Implement strict Red-Green-Refactor cycles and run mutation testing to achieve >90% mutant kill rate.",
    architecture: "Spec ──► Red (Failing Test) ──► Green (Minimal Code) ──► Refactor ──► Stryker/Mutmut Kill Verification",
    features: ["Strict TDD enforcement", "Automated mutation testing", "Self-healing test generation loop"],
    deliverables: ["/tdd command", "Mutation testing script", "Audited test suite"],
    rubric: [{ category: "TDD Red-Green Flow", points: 35 }, { category: "Mutation Score (>90%)", points: 30 }, { category: "Code Quality", points: 20 }, { category: "Scripting", points: 15 }]
  },

  // Advanced (10)
  {
    id: "A1",
    tier: "Advanced",
    title: "Enterprise Internal Developer Platform MCP Server (TypeScript)",
    scope: "Build a TypeScript MCP server connecting Claude Code to PostgreSQL, LaunchDarkly, and Kubernetes.",
    architecture: "Claude Code CLI ──(stdio JSON-RPC)──► TypeScript MCP Server ──► PostgreSQL + LaunchDarkly + K8s Pods",
    features: ["Sanitized SQL schema inspection", "Feature flag toggle verification", "K8s pod log streaming", "Zod validation"],
    deliverables: ["TypeScript MCP server repo", ".mcp.json", "Docker container", "Integration test suite"],
    rubric: [{ category: "Protocol & Zod", points: 30 }, { category: "Security & Scoping", points: 25 }, { category: "Multi-System Integration", points: 25 }, { category: "Performance", points: 20 }]
  },
  {
    id: "A2",
    tier: "Advanced",
    title: "Cloud Infrastructure Health & FinOps MCP Server (Python)",
    scope: "Build a Python FastMCP server providing live AWS CloudWatch metrics, Cost Explorer spend, and Terraform state.",
    architecture: "Claude Code CLI ──(stdio)──► Python FastMCP Server ──► AWS boto3 ──► Live Cost & Health Telemetry",
    features: ["CloudWatch alarms and CPU/RAM metrics", "30-day spend by service", "Dynamic MCP resource aws://costs/today"],
    deliverables: ["Python MCP package", "Setup script", "AWS least-privilege IAM guide", "Mock test suite"],
    rubric: [{ category: "FastMCP Architecture", points: 30 }, { category: "FinOps Analytics", points: 25 }, { category: "IAM Security", points: 25 }, { category: "Test Resilience", points: 20 }]
  },
  {
    id: "A3",
    tier: "Advanced",
    title: "Multi-Agent Parallel Code Review Swarm",
    scope: "Deploy 3 parallel subagents (Security, Performance, QA) to conduct concurrent multi-domain PR audits.",
    architecture: "PR Git Diff ──► [Security Agent | Perf Agent | QA Agent in Parallel] ──► Synthesized Master Matrix",
    features: ["Concurrent subagent execution", "Model tiering (Haiku parsing + Sonnet review)", "Synthesized risk matrix"],
    deliverables: ["Subagent configs", "Parallel bash runner", "Synthesis prompt", "Demo screencast"],
    rubric: [{ category: "Concurrency & Isolation", points: 30 }, { category: "Audit Accuracy", points: 30 }, { category: "Report Synthesis", points: 20 }, { category: "Cost Optimization", points: 20 }]
  },
  {
    id: "A4",
    tier: "Advanced",
    title: "Hierarchical Multi-Agent Monorepo Refactor Coordinator",
    scope: "Architect a supervisor-worker agent system that decomposes and coordinates refactors across a 5-package monorepo.",
    architecture: "Supervisor (Opus) ──► Worker Subagents (Core, API, Web) ──► Integration Verifier & Rollback",
    features: ["Dependency-aware task breakdown", "Automated state checkpoints", "Automatic rollback on test failure"],
    deliverables: ["Supervisor runner", "Worker configs", "Rollback handler", "Sample refactored monorepo"],
    rubric: [{ category: "Task Decomposition", points: 30 }, { category: "Failure Recovery", points: 25 }, { category: "Monorepo Integrity", points: 25 }, { category: "Token Budgeting", points: 20 }]
  },
  {
    id: "A5",
    tier: "Advanced",
    title: "Remote HTTP/SSE MCP Gateway with OAuth2 Authentication",
    scope: "Deploy a remote MCP server over Server-Sent Events (SSE) hosted on cloud infrastructure with Bearer/OAuth2 auth.",
    architecture: "Claude Code CLI ──(HTTPS/SSE + Bearer)──► Cloud MCP Gateway (Fly.io/AWS) ──► Internal Corporate APIs",
    features: ["Bidirectional SSE message stream", "JWT token verification middleware", "Rate-limiting and IP allowlisting"],
    deliverables: ["Cloud MCP Gateway repo", "Dockerfile", "Terraform script", "Connection guide"],
    rubric: [{ category: "SSE Stability", points: 30 }, { category: "Auth Hardening", points: 30 }, { category: "Cloud IaC", points: 20 }, { category: "Documentation", points: 20 }]
  },
  {
    id: "A6",
    tier: "Advanced",
    title: "Real-Time Log Ingestion & Error Anomaly Detection MCP",
    scope: "Connect Claude Code to Datadog/Loki log streams to autonomously triage errors and correlate with source files.",
    architecture: "Datadog/Loki Stream ──► Ingestion MCP Server ──► Claude Code CLI ──► Root-Cause Analysis & Codebase Patch",
    features: ["Dynamic MCP resource logs://production/errors", "Stack trace search tool", "Automatic source correlation"],
    deliverables: ["Log ingestion MCP server", "Stream simulator", "Incident triage demo"],
    rubric: [{ category: "Streaming Performance", points: 30 }, { category: "Root-Cause Precision", points: 30 }, { category: "Resource Usability", points: 20 }, { category: "Error Handling", points: 20 }]
  },
  {
    id: "A7",
    tier: "Advanced",
    title: "Autonomous Multi-Branch Git Worktree Fleet Engine",
    scope: "Build a CLI orchestrator running 4 concurrent Claude Code sessions in isolated worktrees to resolve backlog tickets.",
    architecture: "4 Backlog Tickets ──► claude-fleet Orchestrator ──► 4 Isolated Git Worktrees ──► Auto-Merge & PRs",
    features: ["Automated worktree provisioning", "Concurrent headless (-p) management", "Conflict detection and clean merges"],
    deliverables: ["claude-fleet CLI tool", "Process manager", "Multi-ticket demo"],
    rubric: [{ category: "Worktree Concurrency", points: 35 }, { category: "Conflict Handling", points: 25 }, { category: "Fleet Monitoring", points: 20 }, { category: "CLI Ergonomics", points: 20 }]
  },
  {
    id: "A8",
    tier: "Advanced",
    title: "Cloud Sandbox (claude.ai/code) Background Task Runner",
    scope: "Dispatch long-running refactoring tasks to hosted cloud sandboxes using '&' and teleport completed states locally.",
    architecture: "Local CLI ──(& operator)──► Anthropic Cloud Sandbox ──► Async Tests ──► (/teleport) Local Terminal",
    features: ["Asynchronous cloud dispatch", "Mobile/browser status monitoring", "Bidirectional session teleportation"],
    deliverables: ["Workflow playbook", "Integration scripts", "Video walkthrough"],
    rubric: [{ category: "Cloud Teleportation", points: 35 }, { category: "State Sync", points: 25 }, { category: "Velocity Metrics", points: 20 }, { category: "Documentation", points: 20 }]
  },
  {
    id: "A9",
    tier: "Advanced",
    title: "Autonomous Threat Modeling & OWASP SAST Remediation Bot",
    scope: "Scan codebases for OWASP Top 10 vulnerabilities with Semgrep, execute STRIDE modeling, and author verified fixes.",
    architecture: "Source Code ──► Semgrep SAST ──► Claude Security Agent ──► STRIDE Threat Model + Patch + Security Tests",
    features: ["Semgrep JSON integration", "Automated SQLi/XSS/IDOR patches", "Security unit test generation"],
    deliverables: ["Security subagent", "SAST runner script", "Vulnerability fix suite"],
    rubric: [{ category: "Remediation Precision", points: 35 }, { category: "STRIDE Threat Model", points: 25 }, { category: "Security Unit Tests", points: 20 }, { category: "Zero Regressions", points: 20 }]
  },
  {
    id: "A10",
    tier: "Advanced",
    title: "Enterprise Plugin Marketplace & Auto-Sync Server",
    scope: "Build a central plugin distribution server that synchronizes approved skills, hooks, and subagents across 500+ seats.",
    architecture: "Enterprise Central Registry ──► Auto-Sync Daemon ──► 500+ Developer Workstations (.claude/settings.json)",
    features: ["Cryptographic plugin signing", "Auto-sync background daemon", "Admin version tracking dashboard"],
    deliverables: ["Registry backend", "Sync daemon", "Admin dashboard", "Deployment guide"],
    rubric: [{ category: "Distribution Security", points: 30 }, { category: "Sync Reliability", points: 25 }, { category: "Admin UI", points: 25 }, { category: "Documentation", points: 20 }]
  },

  // Expert (5 Flagships)
  {
    id: "E1",
    tier: "Expert",
    title: "Autonomous GitHub Actions PR Fix & Release Platform",
    scope: "Build an enterprise CI/CD platform that reviews PRs, responds to @claude fix comments, and self-heals failing tests.",
    architecture: "GitHub PR Event ──► Hardened Docker Runner ──► Claude -p Self-Healing Loop ──► Green Tests & Auto-PR",
    features: ["Least-privilege token governance", "PreToolUse security sandboxing", "Self-healing test iteration loop", "Semantic release tagging"],
    deliverables: [".github/workflows/ suite", "Hardened Docker runner", "Custom CI hooks", "Public demo repo"],
    rubric: [{ category: "Autonomous Self-Healing", points: 30 }, { category: "Security Sandboxing", points: 25 }, { category: "GitHub Actions Quality", points: 25 }, { category: "Edge-Case Handling", points: 20 }]
  },
  {
    id: "E2",
    tier: "Expert",
    title: "Full-Stack Agent SDK Application with Human-in-the-Loop Web UI",
    scope: "Build a SaaS app running the Claude Agent SDK with live streaming thought traces and interactive tool approvals.",
    architecture: "Next.js Web Frontend ◄──(WebSocket)──► Agent SDK Backend (query loop) ──► canUseTool Approval Callbacks",
    features: ["Embedded Agent SDK query() loop", "Real-time streaming UI", "Human-in-the-loop approval pauses", "PostgreSQL session persistence"],
    deliverables: ["Full-stack repository", "PostgreSQL schema", "WebSocket server", "Live cloud deployment"],
    rubric: [{ category: "Agent SDK Integration", points: 30 }, { category: "Human-in-the-Loop UI", points: 25 }, { category: "Streaming UX", points: 25 }, { category: "State Persistence", points: 20 }]
  },
  {
    id: "E3",
    tier: "Expert",
    title: "Enterprise Multi-Cloud Agent Platform (AWS Bedrock & GCP Vertex AI)",
    scope: "Deploy a multi-cloud agent service routing between Bedrock (IAM) and Vertex AI (Workload Identity) with zero data retention.",
    architecture: "Enterprise API Consumer ──► Multi-Cloud Agent Router ──► [AWS Bedrock (PrivateLink) | GCP Vertex AI (PSC)]",
    features: ["Multi-provider fallback", "IAM role & Workload Identity auth", "Private networking isolation", "SOC2/HIPAA compliance"],
    deliverables: ["Terraform IaC modules", "Routing service", "Benchmark harness", "Architecture whitepaper"],
    rubric: [{ category: "Multi-Cloud IAM", points: 30 }, { category: "Provider Fallback", points: 25 }, { category: "VPC Security", points: 25 }, { category: "Terraform IaC", points: 20 }]
  },
  {
    id: "E4",
    tier: "Expert",
    title: "Automated Agent Evals & Regression Testing Framework",
    scope: "Build an automated evaluation harness testing custom Claude skills and tool-calling precision across 100+ challenges.",
    architecture: "100+ Task Benchmark ──► Distributed Headless Runner ──► Pass@1 & Drift Analytics ──► CI Merge Blocker Gate",
    features: ["Pass@1 and tool precision scoring", "Semantic drift and regression alerts", "CI merge blocking on eval degradation", "Interactive HTML report"],
    deliverables: ["Eval framework repo", "100-task benchmark dataset", "GitHub Actions eval gate", "Dashboard"],
    rubric: [{ category: "Eval Methodology", points: 30 }, { category: "Dataset Quality", points: 25 }, { category: "CI Integration", points: 25 }, { category: "Reporting UI", points: 20 }]
  },
  {
    id: "E5",
    tier: "Expert",
    title: "Enterprise Claude Code FinOps & Telemetry Dashboard",
    scope: "Develop an observability and governance platform tracking token spend, cache hit rates, and security violations across 500+ engineers.",
    architecture: "500+ Workstations ──(OpenTelemetry Hooks)──► Telemetry Gateway ──► Prometheus + SIEM + Grafana Dashboard",
    features: ["Automated OpenTelemetry hook instrumentation", "Squad-level cost allocation", "Security violation alerting", "ROI & cache savings metrics"],
    deliverables: ["Telemetry ingestion service", "Grafana dashboards", "OpenTelemetry hook package", "Enterprise playbook"],
    rubric: [{ category: "Telemetry Accuracy", points: 30 }, { category: "FinOps Modeling", points: 25 }, { category: "Security Governance", points: 25 }, { category: "Scalability", points: 20 }]
  }
];

export const modules8List: ModuleItem[] = [
  {
    id: 1,
    title: "Module 1: Foundations, Workstation Setup & Read-Only Explorer",
    weeks: "Week 1 (Days 1–7)",
    goals: "Establish environment health, developer ergonomics, navigation without editing, and the core 5-step feedback loop.",
    lessons: [
      { day: 1, title: "Welcome & Environment Hardening (claude doctor)", duration: "45m", outcomes: "Hardened CLI installation, Node 20+, Git config", lab: "Lab 1: Terminal Hardening", assignment: "Run doctor on 3 environments", quiz: "CLI setup & diagnostic exit codes" },
      { day: 2, title: "The Agentic Loop Mental Model (Explore-Plan-Code-Verify)", duration: "45m", outcomes: "Deconstruct the 5-phase feedback loop", lab: "Lab 2: Passive Codebase Deconstruction", assignment: "Deconstruct 5k-line repo into flowchart", quiz: "Agent state transitions" },
      { day: 3, title: "Plan Mode vs Default Mode (Shift+Tab)", duration: "45m", outcomes: "Enforce zero-write exploration in Plan Mode", lab: "Lab 3: Feature Planning in Plan Mode", assignment: "6-step plan for unfamiliar bugfix", quiz: "Permission boundaries & ask/allow/deny" },
      { day: 4, title: "Authoring High-Impact CLAUDE.md Steering Files", duration: "45m", outcomes: "Draft, prune, and enforce negative constraints", lab: "Lab 4: CLAUDE.md Steering Creation", assignment: "Author 45-line production CLAUDE.md", quiz: "Precedence & token overhead" },
      { day: 5, title: "The Atomic Engineering Loop & Diff Verification", duration: "45m", outcomes: "Surgical edits, native diff checks (!git diff)", lab: "Lab 5: Single-Field Validation Loop", assignment: "3 atomic bugfixes with isolated tests", quiz: "Diff evaluation standards" },
      { day: 6, title: "Keyboard Accelerators & Fast Interrupts (Esc / Esc Esc)", duration: "45m", outcomes: "Instant halts, checkpoint rewinds, ! shell passthrough", lab: "Lab 6: Fast Interrupts & Checkpoint Rewind", assignment: "Recover from runaway loop in <15s", quiz: "Interrupt vs Rewind vs Abort" },
      { day: 7, title: "Weekly Milestone Review & Beginner Capstone 1", duration: "90m", outcomes: "Deliver verified Capstone Project B1", lab: "Capstone B1 Sprint", assignment: "Submit Capstone B1 repo", quiz: "Module 1 Mastery Exam" }
    ]
  },
  {
    id: 2,
    title: "Module 2: Context Engineering, Token Economics & Memory",
    weeks: "Week 2 (Days 8–15)",
    goals: "Master prompt caching, KV cache breakpoints, context gauges, /compact, /clear, and squad persistent memory.",
    lessons: [
      { day: 8, title: "The Anatomy of Context & Token Ceilings", duration: "45m", outcomes: "Deconstruct context composition and ITPM/OTPM ceilings", lab: "Lab 7: Context Inspection (/context)", assignment: "Profile 20-turn context curve", quiz: "Token ceilings & truncation" },
      { day: 9, title: "Prompt Caching Mechanics & Cost Optimization", duration: "45m", outcomes: "KV cache prefix matching and 5-min cache TTL optimization", lab: "Lab 8: Cache Hit Maximization", assignment: "Increase cache hit rate from 20% to 85%", quiz: "Cache pricing & invalidation" },
      { day: 10, title: "Surgical File Pinning (@) vs Global Search", duration: "45m", outcomes: "Prevent expensive workspace-wide search scans", lab: "Lab 9: Surgical Pinning vs Globbing", assignment: "Compare token usage across 5 tasks", quiz: "Context injection costs" },
      { day: 11, title: "Mid-Task In-Place Compaction (/compact)", duration: "45m", outcomes: "Reclaim context at milestone boundaries", lab: "Lab 10: Deep Compaction Drills", assignment: "40-turn refactor with zero amnesia", quiz: "Compaction algorithms & diff retention" },
      { day: 12, title: "Context Reset Hygiene (/clear)", duration: "45m", outcomes: "Eliminate cross-task hallucination and token bleed", lab: "Lab 11: Context Contamination Testing", assignment: "Document hallucination rates", quiz: "When to /clear vs /compact" },
      { day: 13, title: "Persistent Memory Systems (.claude/memory/)", duration: "45m", outcomes: "Configure local and shared memory stores", lab: "Lab 12: Squad Architecture Memory", assignment: "Persist conventions across fresh checkouts", quiz: "Global vs Project memory resolution" },
      { day: 14, title: "Extended Thinking Budgets & Effort Scaling", duration: "45m", outcomes: "Configure MAX_THINKING_TOKENS & /effort levels", lab: "Lab 13: Thinking Token Tuning", assignment: "Benchmark reasoning vs latency", quiz: "Thinking flags & temperature" },
      { day: 15, title: "Weekly Milestone Review & Beginner Capstone 2", duration: "90m", outcomes: "Deliver verified Capstone Project B2", lab: "Capstone B2 Sprint", assignment: "Submit Capstone B2 repo", quiz: "Module 2 Mastery Exam" }
    ]
  },
  {
    id: 3,
    title: "Module 3: Custom Slash Commands, Output Styles & Hooks",
    weeks: "Week 3 (Days 16–23)",
    goals: "Automate repeatable routines, shape developer personas, and enforce hard deterministic security guardrails.",
    lessons: [
      { day: 16, title: "Custom Slash Command Architecture", duration: "45m", outcomes: "Author .claude/commands/ with YAML frontmatter", lab: "Lab 14: Reusable Slash Commands", assignment: "Build 3 migration review commands", quiz: "allowed-tools & frontmatter" },
      { day: 17, title: "Parameterized Slash Commands ($ARGUMENTS)", duration: "45m", outcomes: "Pass arguments and issue IDs dynamically", lab: "Lab 15: Dynamic Command Pipelines", assignment: "Create /fix-ticket <id> command", quiz: "Argument escaping & validation" },
      { day: 18, title: "Output Styles & Custom Developer Personas", duration: "45m", outcomes: "Build custom output styles via /output-style:new", lab: "Lab 16: Persona Crafting", assignment: "Create Staff Security Engineer style", quiz: "Style storage & inheritance" },
      { day: 19, title: "The 31 Hook Lifecycle Events & Cadences", duration: "45m", outcomes: "Master session, turn, and tool event cadences", lab: "Lab 17: Hook Event Mapping", assignment: "Construct append-only audit logger", quiz: "The 3 cadences & execution order" },
      { day: 20, title: "Security Enforcement with PreToolUse Hooks", duration: "45m", outcomes: "Block secret reads (.env, keys) and risky bash commands", lab: "Lab 18: Bulletproof Secret Guard", assignment: "Cross-platform push/secret blocker", quiz: "Exit codes (0 vs 2) & stderr" },
      { day: 21, title: "Automated Post-Processing with PostToolUse", duration: "45m", outcomes: "Format-on-write and instant linter feedback loops", lab: "Lab 19: Format-on-Write Pipeline", assignment: "Auto-repair TypeScript syntax hook", quiz: "$FILE, $TOOL_NAME environment vars" },
      { day: 22, title: "JSON Decision Protocol & Webhook Alerts", duration: "45m", outcomes: "Implement JSON allow/deny/ask and Slack webhooks", lab: "Lab 20: JSON Decisions & Slack Alerts", assignment: "Python HTTP security alert hook", quiz: "JSON schemas for hook decisions" },
      { day: 23, title: "Weekly Milestone Review & Intermediate Capstone 1", duration: "90m", outcomes: "Deliver verified Capstone Project I1", lab: "Capstone I1 Sprint", assignment: "Submit Capstone I1 repo", quiz: "Module 3 Mastery Exam" }
    ]
  },
  {
    id: 4,
    title: "Module 4: Agent Skills, Plugins & Marketplaces",
    weeks: "Week 4 (Days 24–30)",
    goals: "Package auto-activating know-how, implement progressive disclosure, and publish enterprise plugins.",
    lessons: [
      { day: 24, title: "The Agent Skills Specification", duration: "45m", outcomes: "Author auto-activating SKILL.md files", lab: "Lab 21: Auto-Activating API Skills", assignment: "Enforce OpenAPI 3.1 standards unprompted", quiz: "Discovery & description matching" },
      { day: 25, title: "Progressive Disclosure in Multi-File Skills", duration: "45m", outcomes: "Structure skills with scripts/ and examples/ folders", lab: "Lab 22: Multi-Tiered Database Skill", assignment: "Database optimizer with helper scripts", quiz: "Progressive loading efficiency" },
      { day: 26, title: "Skill Validation & Automated Linting", duration: "45m", outcomes: "Validate skills with skill-check against Agent Skills spec", lab: "Lab 23: Skill Validation Drills", assignment: "Audit library of 10 custom skills", quiz: "Word count limits & risk classes" },
      { day: 27, title: "Auditing & Sandboxing Marketplace Plugins", duration: "45m", outcomes: "Install, inspect, and safely execute plugins", lab: "Lab 24: Plugin Security Auditing", assignment: "Audit 3 community plugins for risk", quiz: "Plugin layouts & permissions" },
      { day: 28, title: "Authoring and Packaging Custom Plugins", duration: "45m", outcomes: "Bundle commands, skills, subagents, and hooks", lab: "Lab 25: Full-Stack Plugin Packaging", assignment: "Package Next.js DevSecOps plugin", quiz: "plugin.json manifest specs" },
      { day: 29, title: "Plugin Publishing & Enterprise Distribution", duration: "45m", outcomes: "Set up private registries and manage auto-sync", lab: "Lab 26: Private Team Marketplace", assignment: "Deploy private GitHub registry", quiz: "Managed settings distribution" },
      { day: 30, title: "Weekly Milestone Review & Intermediate Capstone 2", duration: "90m", outcomes: "Deliver verified Capstone Project I2", lab: "Capstone I2 Sprint", assignment: "Submit Capstone I2 repo", quiz: "Module 4 Mastery Exam" }
    ]
  },
  {
    id: 5,
    title: "Module 5: Model Context Protocol (MCP) Server Engineering",
    weeks: "Week 5 (Days 31–38)",
    goals: "Master MCP architecture, transports, dynamic resources, and build custom servers in Python & TypeScript.",
    lessons: [
      { day: 31, title: "MCP Architecture (Tools, Resources, Prompts)", duration: "45m", outcomes: "Master JSON-RPC 2.0 frames, stdio vs HTTP/SSE", lab: "Lab 27: MCP Transport Profiling", assignment: "Measure per-server token overhead", quiz: "JSON-RPC protocol & scopes" },
      { day: 32, title: "Client Integration & Scope Isolation (.mcp.json)", duration: "45m", outcomes: "Manage servers across local, project, and user scopes", lab: "Lab 28: Multi-Server Orchestration", assignment: "Configure team-shared .mcp.json", quiz: "local vs project vs user scopes" },
      { day: 33, title: "Building a Python MCP Server (FastMCP)", duration: "45m", outcomes: "Build custom tools and DB inspectors in Python", lab: "Lab 29: Python DB Inspector MCP", assignment: "Build SQL query inspection tool", quiz: "FastMCP decorator syntax" },
      { day: 34, title: "Building a TypeScript MCP Server (Zod)", duration: "45m", outcomes: "Build high-performance TS server with Zod schemas", lab: "Lab 30: TypeScript Cloud MCP Server", assignment: "CloudWatch metrics fetcher tool", quiz: "Zod input validation in MCP" },
      { day: 35, title: "Dynamic MCP URI Resources (logs://, db://)", duration: "45m", outcomes: "Expose real-time data feeds directly into context", lab: "Lab 31: Dynamic Log Resource Feeds", assignment: "Expose live application error feeds", quiz: "MIME types & resource streaming" },
      { day: 36, title: "Remote MCP Servers over HTTP/SSE & Auth", duration: "45m", outcomes: "Deploy remote SSE servers with Bearer token auth", lab: "Lab 32: Remote Cloud MCP Deployment", assignment: "Deploy FastAPI MCP server to Fly.io", quiz: "SSE handshake & /mcp login" },
      { day: 37, title: "Interactive MCP Elicitation & Packet Debugging", duration: "45m", outcomes: "Trigger interactive approvals and use MCP Inspector", lab: "Lab 33: Interactive Elicitation", assignment: "Build DDL migration confirmation tool", quiz: "Elicitation protocol frames" },
      { day: 38, title: "Weekly Milestone Review & Advanced Capstone 1", duration: "90m", outcomes: "Deliver verified Capstone Project A1", lab: "Capstone A1 Sprint", assignment: "Submit Capstone A1 repo", quiz: "Module 5 Mastery Exam" }
    ]
  },
  {
    id: 6,
    title: "Module 6: Subagents, Parallel Swarms & Concurrency",
    weeks: "Week 6 (Days 39–45)",
    goals: "Master context isolation, read-only reviewers, parallel swarms, model tiering, and git worktrees.",
    lessons: [
      { day: 39, title: "Subagent Architecture & Context Isolation", duration: "45m", outcomes: "Author context-isolated agents in .claude/agents/", lab: "Lab 34: Security Auditor Subagent", assignment: "Audit packages for known CVEs", quiz: "Parent-child result return schemas" },
      { day: 40, title: "Model Tiering in Subagent Pipelines", duration: "45m", outcomes: "Route exploration to Haiku, architecture to Opus", lab: "Lab 35: Tiered Multi-Model Pipeline", assignment: "Two-stage Haiku/Opus refactor", quiz: "Model frontmatter syntax & costs" },
      { day: 41, title: "Parallel Multi-Domain Review Swarms", duration: "45m", outcomes: "Run Security, Perf, and QA agents concurrently", lab: "Lab 36: Parallel 3-Agent PR Swarm", assignment: "Parallel audit on full-stack PR", quiz: "Concurrency ceilings & rate limits" },
      { day: 42, title: "Supervisor-Worker Hierarchical Architectures", duration: "45m", outcomes: "Decompose user stories into subagent tasks", lab: "Lab 37: Refactoring Coordinator", assignment: "Build 3-stage supervisor pipeline", quiz: "Task decomposition heuristics" },
      { day: 43, title: "Concurrent Development with Git Worktrees", duration: "45m", outcomes: "Run 3+ simultaneous Claude sessions on one repo", lab: "Lab 38: Multi-Worktree Engineering", assignment: "Build 2 features in parallel worktrees", quiz: "Worktree isolation & cleanup" },
      { day: 44, title: "Cloud Sandboxes on Web & Session Teleportation", duration: "45m", outcomes: "Dispatch tasks to cloud (&) and teleport sessions", lab: "Lab 39: Cloud Sandbox Task Dispatch", assignment: "Dispatch long refactor to cloud web", quiz: "Cloud sandboxing & serialization" },
      { day: 45, title: "Weekly Milestone Review & Advanced Capstone 2", duration: "90m", outcomes: "Deliver verified Capstone Project A2", lab: "Capstone A2 Sprint", assignment: "Submit Capstone A2 repo", quiz: "Module 6 Mastery Exam" }
    ]
  },
  {
    id: 7,
    title: "Module 7: Autonomous CI/CD, GitHub Actions & Agent SDK",
    weeks: "Week 7 (Days 46–53)",
    goals: "Master headless automation, GitHub Action PR bots, and embed the Claude Agent SDK into custom SaaS apps.",
    lessons: [
      { day: 46, title: "Headless Automation Masterclass (claude -p)", duration: "45m", outcomes: "Drive Claude in scripts and parse JSON with jq", lab: "Lab 40: Headless Release Scripting", assignment: "Automate GitHub release creation", quiz: "-p flag nuances & JSON schema" },
      { day: 47, title: "Autonomous GitHub Actions PR Review Bot", duration: "45m", outcomes: "Deploy production workflow reviewing incoming PRs", lab: "Lab 41: Autonomous PR Review Action", assignment: "Deploy PR review bot on GitHub", quiz: "Runner permissions & diff piping" },
      { day: 48, title: "Autonomous Issue-to-PR Bugfixing Bot", duration: "45m", outcomes: "Trigger auto-fix loops from @claude issue comments", lab: "Lab 42: Issue-to-PR Auto-Fix Pipeline", assignment: "End-to-end bug to PR pipeline", quiz: "CI security hardening & PreToolUse" },
      { day: 49, title: "The Claude Agent SDK Fundamentals (Python/TS)", duration: "45m", outcomes: "Master the query() loop in custom applications", lab: "Lab 43: First Agent SDK Application", assignment: "Build custom schema analysis CLI", quiz: "Agent SDK vs Client SDK comparison" },
      { day: 50, title: "Custom Tools & External Handlers in SDK", duration: "45m", outcomes: "Register business logic and API tools in SDK", lab: "Lab 44: Agent SDK IT Triage Bot", assignment: "Author Jira/PagerDuty triage agent", quiz: "Tool definitions & return schemas" },
      { day: 51, title: "Human-in-the-Loop Approval Callbacks", duration: "45m", outcomes: "Implement canUseTool and permission deferral", lab: "Lab 45: Web Approval Dashboard", assignment: "Build interactive approval Next.js app", quiz: "Deferral serialization & tokens" },
      { day: 52, title: "Enterprise Multi-Cloud (Bedrock & Vertex AI)", duration: "45m", outcomes: "Route Agent SDK via AWS IAM and GCP Workload Identity", lab: "Lab 46: Multi-Cloud Bedrock Deployment", assignment: "Deploy Agent on AWS ECS with Bedrock", quiz: "Cloud IAM roles & private endpoints" },
      { day: 53, title: "Weekly Milestone Review & Expert Capstone 1", duration: "90m", outcomes: "Deliver verified Capstone Project E1", lab: "Capstone E1 Sprint", assignment: "Submit Capstone E1 repo", quiz: "Module 7 Mastery Exam" }
    ]
  },
  {
    id: 8,
    title: "Module 8: Enterprise Governance, Evals, FinOps & Defense",
    weeks: "Week 8 (Days 54–60)",
    goals: "Master enterprise governance, automated skill evals, FinOps telemetry, and defend your flagship capstone.",
    lessons: [
      { day: 54, title: "Enterprise Governance, Managed Settings & DLP", duration: "45m", outcomes: "Deploy MDM managed settings and org deny rules", lab: "Lab 47: Managed Settings & DLP Setup", assignment: "Enforce zero-data-retention policy", quiz: "Settings inheritance & lockouts" },
      { day: 55, title: "Automated Agent Evals & Regression Testing", duration: "45m", outcomes: "Build benchmark harness to test skill accuracy", lab: "Lab 48: Automated Evals Test Suite", assignment: "Create 20-task benchmark harness", quiz: "pass@1 metrics & regression alerts" },
      { day: 56, title: "Token FinOps, Cost Forecasting & Quotas", duration: "45m", outcomes: "Build OpenTelemetry/Prometheus cost dashboards", lab: "Lab 49: FinOps Token Attribution", assignment: "Implement Grafana burn rate dashboard", quiz: "Cost modeling & quota allocation" },
      { day: 57, title: "Building & Publishing Commercial Plugins", duration: "45m", outcomes: "Package and publish flagship marketplace plugins", lab: "Lab 50: Marketplace Plugin Release", assignment: "Publish tested plugin to marketplace", quiz: "Marketplace submission & semver" },
      { day: 58, title: "Capstone Project Final Sprint & Polish", duration: "90m", outcomes: "Complete final code freeze for Capstones E1–E5", lab: "Capstone Final Polish", assignment: "Submit production PR & video demo", quiz: "Portfolio Readiness Checklist" },
      { day: 59, title: "Formal Portfolio Review & Capstone Defense", duration: "90m", outcomes: "Live architectural defense before review panel", lab: "Capstone Defense Session", assignment: "Defend architecture & answer QA", quiz: "100-Point Enterprise Rubric" },
      { day: 60, title: "Graduation & Career / Consulting Launch", duration: "60m", outcomes: "Award of CC-ASA credential & network launch", lab: "Alumni Onboarding", assignment: "Publish verified portfolio & resume", quiz: "Consulting Proposal Playbook" }
    ]
  }
];
