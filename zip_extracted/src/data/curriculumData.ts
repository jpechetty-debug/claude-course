// AUTO-GENERATED FROM scripts/master_data.js - DO NOT EDIT DIRECTLY

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
  {
    "metric": "Clarity",
    "score": 9,
    "max": 10,
    "color": "text-emerald-600",
    "bg": "bg-emerald-50"
  },
  {
    "metric": "Depth",
    "score": 8,
    "max": 10,
    "color": "text-indigo-600",
    "bg": "bg-indigo-50"
  },
  {
    "metric": "Engagement",
    "score": 8,
    "max": 10,
    "color": "text-amber-500",
    "bg": "bg-amber-50"
  },
  {
    "metric": "Practicality",
    "score": 10,
    "max": 10,
    "color": "text-emerald-600",
    "bg": "bg-emerald-50"
  }
];
export const gapAnalysisList: GapItem[] = [
  {
    "id": 1,
    "title": "Building Custom MCP Servers (stdio & SSE)",
    "whyItMatters": "Enables connecting Claude to proprietary internal APIs, databases, and microservices.",
    "placement": "Week 5 (Module 5)",
    "duration": "4.5 Hours"
  },
  {
    "id": 2,
    "title": "Deep Context Engineering & Prompt Caching",
    "whyItMatters": "Maximizes cache hit rates, saving 70%+ of API token costs on multi-turn sessions.",
    "placement": "Week 2 (Module 2)",
    "duration": "3.0 Hours"
  },
  {
    "id": 3,
    "title": "Full-Scale Claude Agent SDK Applications",
    "whyItMatters": "Enables developers to embed Claude’s agent loop into custom SaaS and internal tools.",
    "placement": "Week 7 (Module 7)",
    "duration": "6.0 Hours"
  },
  {
    "id": 4,
    "title": "Multi-Agent Swarm Architectures & Consensus",
    "whyItMatters": "Coordinates supervisor-worker pipelines for large refactoring tasks.",
    "placement": "Week 6 (Module 6)",
    "duration": "4.5 Hours"
  },
  {
    "id": 5,
    "title": "Autonomous GitHub Actions CI/CD Bots",
    "whyItMatters": "Deploys autonomous PR review and auto-bugfixing bots in production pipelines.",
    "placement": "Week 7 (Module 7)",
    "duration": "4.0 Hours"
  },
  {
    "id": 6,
    "title": "IDE Co-Existence (Cursor, VS Code & JetBrains)",
    "whyItMatters": "Teaches developers to pair terminal Claude Code with their primary editor for maximum speed.",
    "placement": "Week 1 (Module 1)",
    "duration": "2.5 Hours"
  },
  {
    "id": 7,
    "title": "Large Monorepo Navigation & Code Graphs",
    "whyItMatters": "Teaches AST and symbol-based navigation in 1,000,000+ line repositories.",
    "placement": "Week 3 (Module 3)",
    "duration": "3.5 Hours"
  },
  {
    "id": 8,
    "title": "Enterprise Security, Managed Settings & DLP",
    "whyItMatters": "Enables security teams to deploy organization-wide allow/ask/deny policies.",
    "placement": "Week 8 (Module 8)",
    "duration": "3.5 Hours"
  },
  {
    "id": 9,
    "title": "Multi-Cloud Provider Routing (Bedrock / Vertex AI)",
    "whyItMatters": "Regulated enterprises deploy Claude Code via existing cloud IAM roles.",
    "placement": "Week 7 (Module 7)",
    "duration": "3.0 Hours"
  },
  {
    "id": 10,
    "title": "Automated Agent Evals & Regression Testing",
    "whyItMatters": "Quantitatively benchmarks skills and system prompts against test datasets.",
    "placement": "Week 8 (Module 8)",
    "duration": "3.5 Hours"
  },
  {
    "id": 11,
    "title": "Claude Code on the Web Cloud Sandboxes",
    "whyItMatters": "Dispatches asynchronous background refactoring tasks to hosted cloud sandboxes.",
    "placement": "Week 6 (Module 6)",
    "duration": "2.5 Hours"
  },
  {
    "id": 12,
    "title": "Persistent Memory & Squad Knowledge Bases",
    "whyItMatters": "Keeps architectural decisions synchronized across squad checkouts.",
    "placement": "Week 2 (Module 2)",
    "duration": "2.5 Hours"
  },
  {
    "id": 13,
    "title": "Rich JSON Hook Decisions & Alert Webhooks",
    "whyItMatters": "Integrates hook pipelines with corporate security alerting and ticketing.",
    "placement": "Week 3 (Module 3)",
    "duration": "3.5 Hours"
  },
  {
    "id": 14,
    "title": "TDD & Automated Mutation Testing Loops",
    "whyItMatters": "Achieves high accuracy through strict Red-Green-Refactor cycles.",
    "placement": "Week 3 (Module 3)",
    "duration": "3.0 Hours"
  },
  {
    "id": 15,
    "title": "Custom Output Styles & Developer Personas",
    "whyItMatters": "Adapts response communication density for different engineering roles.",
    "placement": "Week 2 (Module 2)",
    "duration": "2.0 Hours"
  },
  {
    "id": 16,
    "title": "Git Worktree Fleets & Concurrent Local Sessions",
    "whyItMatters": "Enables running 3 to 5 simultaneous Claude Code sessions without file collisions.",
    "placement": "Week 6 (Module 6)",
    "duration": "2.5 Hours"
  },
  {
    "id": 17,
    "title": "Security Auditing & OWASP SAST Bot Workflows",
    "whyItMatters": "Employs Claude Code to actively detect and remediate security vulnerabilities.",
    "placement": "Week 6 (Module 6)",
    "duration": "3.5 Hours"
  },
  {
    "id": 18,
    "title": "Token Economics, FinOps & Quota Attribution",
    "whyItMatters": "Tracks and forecasts token spend and cache ROI across developer teams.",
    "placement": "Week 8 (Module 8)",
    "duration": "2.5 Hours"
  },
  {
    "id": 19,
    "title": "Authoring & Publishing Marketplace Plugins",
    "whyItMatters": "Packages and distributes verified plugin bundles across organizations.",
    "placement": "Week 4 (Module 4)",
    "duration": "3.5 Hours"
  },
  {
    "id": 20,
    "title": "Production AI Engineering Portfolio Defense",
    "whyItMatters": "Evaluates students against a 100-point rubric for production readiness.",
    "placement": "Week 8 (Module 8)",
    "duration": "5.0 Hours"
  }
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
export const labs50Catalog: LabItem[] = [
  {
    "id": 1,
    "section": "CLI Fundamentals & Steering",
    "title": "Terminal Hardening & Diagnostic Verification",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master terminal hardening & diagnostic verification in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 1: Terminal Hardening & Diagnostic Verification.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 2,
    "section": "CLI Fundamentals & Steering",
    "title": "Read-Only Exploration & Architectural Mapping",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master read-only exploration & architectural mapping in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 2: Read-Only Exploration & Architectural Mapping.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 3,
    "section": "CLI Fundamentals & Steering",
    "title": "Plan Mode Navigation & Shift+Tab Perm State Machine",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master plan mode navigation & shift+tab perm state machine in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 3: Plan Mode Navigation & Shift+Tab Perm State Machine.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 4,
    "section": "CLI Fundamentals & Steering",
    "title": "Authoring High-Impact 50-Line CLAUDE.md Steering Files",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master authoring high-impact 50-line claude.md steering files in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 4: Authoring High-Impact 50-Line CLAUDE.md Steering Files.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 5,
    "section": "CLI Fundamentals & Steering",
    "title": "Single-Field Atomic Bugfix & Diff Review Loop",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master single-field atomic bugfix & diff review loop in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 5: Single-Field Atomic Bugfix & Diff Review Loop.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 6,
    "section": "CLI Fundamentals & Steering",
    "title": "Fast Interruption (Esc) & Direction Recovery",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master fast interruption (esc) & direction recovery in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 6: Fast Interruption (Esc) & Direction Recovery.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 7,
    "section": "CLI Fundamentals & Steering",
    "title": "Terminal Co-Existence with IDEs & tmux Panes",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master terminal co-existence with ides & tmux panes in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 7: Terminal Co-Existence with IDEs & tmux Panes.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 8,
    "section": "CLI Fundamentals & Steering",
    "title": "Hierarchical Rule Resolution & Subdirectory Steering",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master hierarchical rule resolution & subdirectory steering in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 8: Hierarchical Rule Resolution & Subdirectory Steering.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 9,
    "section": "CLI Fundamentals & Steering",
    "title": "CLI Permission Rings: Allow, Ask, and Deny Rules",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master cli permission rings: allow, ask, and deny rules in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 9: CLI Permission Rings: Allow, Ask, and Deny Rules.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 10,
    "section": "CLI Fundamentals & Steering",
    "title": "Headless One-Shot Prompts with claude -p Pipelines",
    "difficulty": "Beginner",
    "difficultyColor": "text-emerald-600 bg-emerald-50",
    "objective": "Master headless one-shot prompts with claude -p pipelines in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 10: Headless One-Shot Prompts with claude -p Pipelines.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 11,
    "section": "Context Engineering & Memory",
    "title": "Context Gauge & Token Threshold Monitoring",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master context gauge & token threshold monitoring in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 11: Context Gauge & Token Threshold Monitoring.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 12,
    "section": "Context Engineering & Memory",
    "title": "Dynamic File Context Pinning with @ Syntax",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master dynamic file context pinning with @ syntax in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 12: Dynamic File Context Pinning with @ Syntax.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 13,
    "section": "Context Engineering & Memory",
    "title": "In-Place Context Compaction with /compact",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master in-place context compaction with /compact in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 13: In-Place Context Compaction with /compact.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 14,
    "section": "Context Engineering & Memory",
    "title": "Cache Optimization & Prompt Structure Organization",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master cache optimization & prompt structure organization in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 14: Cache Optimization & Prompt Structure Organization.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 15,
    "section": "Context Engineering & Memory",
    "title": "Persistent Squad Memory Systems",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master persistent squad memory systems in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 15: Persistent Squad Memory Systems.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 16,
    "section": "Context Engineering & Memory",
    "title": "Context Purging & Reset Strategies with /clear",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master context purging & reset strategies with /clear in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 16: Context Purging & Reset Strategies with /clear.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 17,
    "section": "Context Engineering & Memory",
    "title": "Token Cost Analysis & Model Tiering (/cost)",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master token cost analysis & model tiering (/cost) in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 17: Token Cost Analysis & Model Tiering (/cost).",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 18,
    "section": "Context Engineering & Memory",
    "title": "Dynamic Custom Output Styles & Personas",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master dynamic custom output styles & personas in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 18: Dynamic Custom Output Styles & Personas.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 19,
    "section": "Context Engineering & Memory",
    "title": "AST Symbol Exploration in 100k+ Line Codebases",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master ast symbol exploration in 100k+ line codebases in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 19: AST Symbol Exploration in 100k+ Line Codebases.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 20,
    "section": "Context Engineering & Memory",
    "title": "Context Economics: Subagent Delegation vs Monolithic Context",
    "difficulty": "Intermediate",
    "difficultyColor": "text-blue-600 bg-blue-50",
    "objective": "Master context economics: subagent delegation vs monolithic context in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 20: Context Economics: Subagent Delegation vs Monolithic Context.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 21,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Custom Slash Commands with Dynamic $ARGUMENTS",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master custom slash commands with dynamic $arguments in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 21: Custom Slash Commands with Dynamic $ARGUMENTS.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 22,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Deterministic Security Gates with PreToolUse Hooks",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master deterministic security gates with pretooluse hooks in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 22: Deterministic Security Gates with PreToolUse Hooks.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 23,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Format-on-Write Automation with PostToolUse Hooks",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master format-on-write automation with posttooluse hooks in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 23: Format-on-Write Automation with PostToolUse Hooks.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 24,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Cross-Platform Hook Development (Bash vs PowerShell)",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master cross-platform hook development (bash vs powershell) in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 24: Cross-Platform Hook Development (Bash vs PowerShell).",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 25,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "JSON Decision Protocols & Exit Code Standards",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master json decision protocols & exit code standards in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 25: JSON Decision Protocols & Exit Code Standards.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 26,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Authoring Auto-Activating Agent Skills",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master authoring auto-activating agent skills in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 26: Authoring Auto-Activating Agent Skills.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 27,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Plugin Package Bundling & Manifest Authoring",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master plugin package bundling & manifest authoring in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 27: Plugin Package Bundling & Manifest Authoring.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 28,
    "section": "Deterministic Hooks, Skills & Plugins",
    "title": "Auditing Untrusted Hooks & Plugin Sandboxing",
    "difficulty": "Advanced",
    "difficultyColor": "text-amber-600 bg-amber-50",
    "objective": "Master auditing untrusted hooks & plugin sandboxing in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 28: Auditing Untrusted Hooks & Plugin Sandboxing.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 29,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Connecting SQLite Database MCP Server over stdio",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master connecting sqlite database mcp server over stdio in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 29: Connecting SQLite Database MCP Server over stdio.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 30,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Authoring Python FastMCP Server with Custom Tools",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master authoring python fastmcp server with custom tools in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 30: Authoring Python FastMCP Server with Custom Tools.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 31,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Authoring TypeScript MCP Server with Zod Schema Validation",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master authoring typescript mcp server with zod schema validation in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 31: Authoring TypeScript MCP Server with Zod Schema Validation.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 32,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "MCP Transport Architectures: stdio vs HTTP/SSE",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master mcp transport architectures: stdio vs http/sse in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 32: MCP Transport Architectures: stdio vs HTTP/SSE.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 33,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "MCP Scopes & Lifecycle Management in .mcp.json",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master mcp scopes & lifecycle management in .mcp.json in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 33: MCP Scopes & Lifecycle Management in .mcp.json.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 34,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Context Pruning for Active MCP Tool Declarations",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master context pruning for active mcp tool declarations in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 34: Context Pruning for Active MCP Tool Declarations.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 35,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Debugging MCP JSON-RPC Frames with MCP Inspector GUI",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master debugging mcp json-rpc frames with mcp inspector gui in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 35: Debugging MCP JSON-RPC Frames with MCP Inspector GUI.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 36,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Securing MCP Tool Invocations with PreToolUse Interceptors",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master securing mcp tool invocations with pretooluse interceptors in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 36: Securing MCP Tool Invocations with PreToolUse Interceptors.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 37,
    "section": "Model Context Protocol (MCP) Engineering",
    "title": "Building an Internal Jira/GitHub Issue Triage MCP Server",
    "difficulty": "Advanced",
    "difficultyColor": "text-purple-600 bg-purple-50",
    "objective": "Master building an internal jira/github issue triage mcp server in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 37: Building an Internal Jira/GitHub Issue Triage MCP Server.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 38,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Context-Isolated Read-Only Code Review Subagent",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master context-isolated read-only code review subagent in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 38: Context-Isolated Read-Only Code Review Subagent.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 39,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Autonomous Migration Worker Subagent in Worktree",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master autonomous migration worker subagent in worktree in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 39: Autonomous Migration Worker Subagent in Worktree.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 40,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Multi-Agent Supervisor-Worker Swarm Architecture",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master multi-agent supervisor-worker swarm architecture in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 40: Multi-Agent Supervisor-Worker Swarm Architecture.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 41,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Subagent Model Tiering: Haiku Routing & Sonnet Execution",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master subagent model tiering: haiku routing & sonnet execution in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 41: Subagent Model Tiering: Haiku Routing & Sonnet Execution.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 42,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Git Worktree Fleet: Parallel Concurrent Claude Sessions",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master git worktree fleet: parallel concurrent claude sessions in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 42: Git Worktree Fleet: Parallel Concurrent Claude Sessions.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 43,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Red-Team Security Auditor Subagent for Vulnerability Scans",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master red-team security auditor subagent for vulnerability scans in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 43: Red-Team Security Auditor Subagent for Vulnerability Scans.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 44,
    "section": "Subagents, Parallel Swarms & Concurrency",
    "title": "Asynchronous Cloud Sandbox Execution on claude.ai/code",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master asynchronous cloud sandbox execution on claude.ai/code in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 44: Asynchronous Cloud Sandbox Execution on claude.ai/code.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 45,
    "section": "Headless CI/CD, Agent SDK & Enterprise Evals",
    "title": "Headless Commit Message & PR Description Generator",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master headless commit message & pr description generator in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 45: Headless Commit Message & PR Description Generator.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 46,
    "section": "Headless CI/CD, Agent SDK & Enterprise Evals",
    "title": "Autonomous GitHub Actions PR Review Bot",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master autonomous github actions pr review bot in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 46: Autonomous GitHub Actions PR Review Bot.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 47,
    "section": "Headless CI/CD, Agent SDK & Enterprise Evals",
    "title": "Building Full-Stack Agent with Claude Agent SDK",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master building full-stack agent with claude agent sdk in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 47: Building Full-Stack Agent with Claude Agent SDK.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 48,
    "section": "Headless CI/CD, Agent SDK & Enterprise Evals",
    "title": "Multi-Cloud IAM Routing: AWS Bedrock & GCP Vertex AI",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master multi-cloud iam routing: aws bedrock & gcp vertex ai in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 48: Multi-Cloud IAM Routing: AWS Bedrock & GCP Vertex AI.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 49,
    "section": "Headless CI/CD, Agent SDK & Enterprise Evals",
    "title": "Automated Prompt Evals & Regression Testing Harness",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master automated prompt evals & regression testing harness in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 49: Automated Prompt Evals & Regression Testing Harness.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  },
  {
    "id": 50,
    "section": "Headless CI/CD, Agent SDK & Enterprise Evals",
    "title": "FinOps Cost Attribution Dashboard & Quota Governance",
    "difficulty": "Expert",
    "difficultyColor": "text-rose-600 bg-rose-50",
    "objective": "Master finops cost attribution dashboard & quota governance in a production engineering repository.",
    "inputs": "Target workspace repository, valid Node.js 18+ and Claude Code CLI.",
    "instructions": [
      "Initialize local workspace and launch Claude Code: claude",
      "Execute the target drill for Lab 50: FinOps Cost Attribution Dashboard & Quota Governance.",
      "Inspect diffs natively using !git diff and confirm zero collateral regressions.",
      "Validate assertions with automated test suite."
    ],
    "expectedOutput": "Verified execution output with pass status code 0.",
    "successCriteria": "Requirement fulfilled with passing test assertions."
  }
];
export const capstones30Catalog: CapstoneItem[] = [
  {
    "id": "B1",
    "tier": "Beginner",
    "title": "Legacy Codebase Architecture Extractor",
    "scope": "Automated architecture doc generator for legacy repositories.",
    "architecture": "Repo -> AST / Symbols -> Claude Code -> ARCHITECTURE.md + Mermaid",
    "features": [
      "AST extraction",
      "Mermaid generation",
      "Zero-edit guarantee"
    ],
    "deliverables": [
      "ARCHITECTURE.md",
      "Mermaid diagram"
    ],
    "rubric": [
      {
        "category": "Accuracy",
        "points": 40
      },
      {
        "category": "Format",
        "points": 30
      },
      {
        "category": "Safety",
        "points": 30
      }
    ]
  },
  {
    "id": "B2",
    "tier": "Beginner",
    "title": "Interactive Bugfix Pipeline in Plan Mode",
    "scope": "Zero-regression atomic bugfix pipeline using Plan Mode.",
    "architecture": "Issue -> Plan Mode (Shift+Tab) -> Code -> Verify -> !git diff",
    "features": [
      "Plan generation",
      "Atomic edit",
      "Diff verification"
    ],
    "deliverables": [
      "Pull Request",
      "Test log"
    ],
    "rubric": [
      {
        "category": "Plan Quality",
        "points": 35
      },
      {
        "category": "Diff Cleanliness",
        "points": 35
      },
      {
        "category": "Tests",
        "points": 30
      }
    ]
  },
  {
    "id": "B3",
    "tier": "Beginner",
    "title": "Enterprise CLAUDE.md Steering System",
    "scope": "50-line root steering file with hierarchical overrides.",
    "architecture": "Root CLAUDE.md -> Subdirectory Rules -> /clear Verification",
    "features": [
      "50-line limit",
      "Negative rules",
      "Multi-package rules"
    ],
    "deliverables": [
      "CLAUDE.md files",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Conciseness",
        "points": 40
      },
      {
        "category": "Adherence",
        "points": 40
      },
      {
        "category": "Hierarchy",
        "points": 20
      }
    ]
  },
  {
    "id": "B4",
    "tier": "Beginner",
    "title": "Custom Engineering Slash Command Suite",
    "scope": "Suite of 5 markdown commands with dynamic arguments.",
    "architecture": ".claude/commands/*.md -> $ARGUMENTS -> Structured Outputs",
    "features": [
      "5 Commands",
      "Input validation",
      "Allowed-tools"
    ],
    "deliverables": [
      ".claude/commands/",
      "Demo video"
    ],
    "rubric": [
      {
        "category": "Command Design",
        "points": 40
      },
      {
        "category": "Security",
        "points": 30
      },
      {
        "category": "Utility",
        "points": 30
      }
    ]
  },
  {
    "id": "B5",
    "tier": "Beginner",
    "title": "Automated Git Hygiene & PR Script",
    "scope": "Headless pipeline for clean commits and PR summaries.",
    "architecture": "!git diff -> claude -p -> Conventional Commit + PR Body",
    "features": [
      "Conventional commits",
      "Changelog generation",
      "Headless -p"
    ],
    "deliverables": [
      "Shell script",
      "Sample PRs"
    ],
    "rubric": [
      {
        "category": "Automation",
        "points": 40
      },
      {
        "category": "Format",
        "points": 30
      },
      {
        "category": "Reliability",
        "points": 30
      }
    ]
  },
  {
    "id": "I1",
    "tier": "Intermediate",
    "title": "Deterministic Security Guardrail Hook Suite",
    "scope": "Production intermediate capstone focusing on Deterministic Security Guardrail Hook Suite.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I2",
    "tier": "Intermediate",
    "title": "Automated Code Formatter & Linter Hook",
    "scope": "Production intermediate capstone focusing on Automated Code Formatter & Linter Hook.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I3",
    "tier": "Intermediate",
    "title": "Persistent Squad Memory & Architectural Log",
    "scope": "Production intermediate capstone focusing on Persistent Squad Memory & Architectural Log.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I4",
    "tier": "Intermediate",
    "title": "Dynamic Output Style Persona Engine",
    "scope": "Production intermediate capstone focusing on Dynamic Output Style Persona Engine.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I5",
    "tier": "Intermediate",
    "title": "Python FastMCP SQLite Database Inspector",
    "scope": "Production intermediate capstone focusing on Python FastMCP SQLite Database Inspector.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I6",
    "tier": "Intermediate",
    "title": "TypeScript MCP GitHub & Jira Issue Triager",
    "scope": "Production intermediate capstone focusing on TypeScript MCP GitHub & Jira Issue Triager.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I7",
    "tier": "Intermediate",
    "title": "Context-Isolated Security Audit Subagent",
    "scope": "Production intermediate capstone focusing on Context-Isolated Security Audit Subagent.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I8",
    "tier": "Intermediate",
    "title": "Test-Driven Development (TDD) Mutation Bot",
    "scope": "Production intermediate capstone focusing on Test-Driven Development (TDD) Mutation Bot.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I9",
    "tier": "Intermediate",
    "title": "Monorepo AST Symbol Navigator",
    "scope": "Production intermediate capstone focusing on Monorepo AST Symbol Navigator.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "I10",
    "tier": "Intermediate",
    "title": "Context Budget & Cache ROI Analyzer",
    "scope": "Production intermediate capstone focusing on Context Budget & Cache ROI Analyzer.",
    "architecture": "Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report",
    "features": [
      "Production error handling",
      "Zero token waste",
      "Automated tests"
    ],
    "deliverables": [
      "Source repository",
      "Architecture diagram",
      "Verification log"
    ],
    "rubric": [
      {
        "category": "Architecture",
        "points": 30
      },
      {
        "category": "Implementation",
        "points": 40
      },
      {
        "category": "Verification",
        "points": 30
      }
    ]
  },
  {
    "id": "A1",
    "tier": "Advanced",
    "title": "Full-Stack MCP Gateway with HTTP/SSE & stdio",
    "scope": "Advanced enterprise capstone implementing Full-Stack MCP Gateway with HTTP/SSE & stdio.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A2",
    "tier": "Advanced",
    "title": "Autonomous Migration Subagent Swarm in Worktrees",
    "scope": "Advanced enterprise capstone implementing Autonomous Migration Subagent Swarm in Worktrees.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A3",
    "tier": "Advanced",
    "title": "Multi-Agent Consensus Review & Security Pipeline",
    "scope": "Advanced enterprise capstone implementing Multi-Agent Consensus Review & Security Pipeline.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A4",
    "tier": "Advanced",
    "title": "Autonomous GitHub Actions CI/CD Auto-Fixer Bot",
    "scope": "Advanced enterprise capstone implementing Autonomous GitHub Actions CI/CD Auto-Fixer Bot.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A5",
    "tier": "Advanced",
    "title": "Claude Agent SDK Incident Response Daemon",
    "scope": "Advanced enterprise capstone implementing Claude Agent SDK Incident Response Daemon.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A6",
    "tier": "Advanced",
    "title": "Agent Evals & System Prompt Regression Harness",
    "scope": "Advanced enterprise capstone implementing Agent Evals & System Prompt Regression Harness.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A7",
    "tier": "Advanced",
    "title": "Multi-Cloud IAM Router (AWS Bedrock & GCP Vertex)",
    "scope": "Advanced enterprise capstone implementing Multi-Cloud IAM Router (AWS Bedrock & GCP Vertex).",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A8",
    "tier": "Advanced",
    "title": "Enterprise Claude FinOps & Token Quota Gateway",
    "scope": "Advanced enterprise capstone implementing Enterprise Claude FinOps & Token Quota Gateway.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A9",
    "tier": "Advanced",
    "title": "Agent Skill & Plugin Marketplace Package",
    "scope": "Advanced enterprise capstone implementing Agent Skill & Plugin Marketplace Package.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "A10",
    "tier": "Advanced",
    "title": "Automated OWASP SAST & Dependency Remediation Bot",
    "scope": "Advanced enterprise capstone implementing Automated OWASP SAST & Dependency Remediation Bot.",
    "architecture": "Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress",
    "features": [
      "Distributed execution",
      "Cloud IAM authentication",
      "Automated regression testing"
    ],
    "deliverables": [
      "Complete system repo",
      "CI/CD Pipeline",
      "Production benchmark report"
    ],
    "rubric": [
      {
        "category": "System Architecture",
        "points": 30
      },
      {
        "category": "Security & Robustness",
        "points": 40
      },
      {
        "category": "Evaluation Results",
        "points": 30
      }
    ]
  },
  {
    "id": "E1",
    "tier": "Expert",
    "title": "Enterprise Autonomous Software Engineering Swarm",
    "scope": "Flagship expert capstone delivering Enterprise Autonomous Software Engineering Swarm.",
    "architecture": "Enterprise Monorepo -> Multi-Agent Swarm -> Agent SDK SaaS -> Cloud CI/CD",
    "features": [
      "End-to-end autonomy",
      "Enterprise IAM & DLP",
      "Live panel defense"
    ],
    "deliverables": [
      "Production SaaS / Swarm",
      "Live Defense Presentation",
      "Comprehensive Documentation"
    ],
    "rubric": [
      {
        "category": "Architectural Rigor",
        "points": 35
      },
      {
        "category": "Production Readiness",
        "points": 35
      },
      {
        "category": "Defense Quality",
        "points": 30
      }
    ]
  },
  {
    "id": "E2",
    "tier": "Expert",
    "title": "Self-Healing CI/CD Pipeline with Mutation Gate",
    "scope": "Flagship expert capstone delivering Self-Healing CI/CD Pipeline with Mutation Gate.",
    "architecture": "Enterprise Monorepo -> Multi-Agent Swarm -> Agent SDK SaaS -> Cloud CI/CD",
    "features": [
      "End-to-end autonomy",
      "Enterprise IAM & DLP",
      "Live panel defense"
    ],
    "deliverables": [
      "Production SaaS / Swarm",
      "Live Defense Presentation",
      "Comprehensive Documentation"
    ],
    "rubric": [
      {
        "category": "Architectural Rigor",
        "points": 35
      },
      {
        "category": "Production Readiness",
        "points": 35
      },
      {
        "category": "Defense Quality",
        "points": 30
      }
    ]
  },
  {
    "id": "E3",
    "tier": "Expert",
    "title": "Multi-Tenant Claude Agent SaaS Platform",
    "scope": "Flagship expert capstone delivering Multi-Tenant Claude Agent SaaS Platform.",
    "architecture": "Enterprise Monorepo -> Multi-Agent Swarm -> Agent SDK SaaS -> Cloud CI/CD",
    "features": [
      "End-to-end autonomy",
      "Enterprise IAM & DLP",
      "Live panel defense"
    ],
    "deliverables": [
      "Production SaaS / Swarm",
      "Live Defense Presentation",
      "Comprehensive Documentation"
    ],
    "rubric": [
      {
        "category": "Architectural Rigor",
        "points": 35
      },
      {
        "category": "Production Readiness",
        "points": 35
      },
      {
        "category": "Defense Quality",
        "points": 30
      }
    ]
  },
  {
    "id": "E4",
    "tier": "Expert",
    "title": "Autonomous Vulnerability Remediation Appliance",
    "scope": "Flagship expert capstone delivering Autonomous Vulnerability Remediation Appliance.",
    "architecture": "Enterprise Monorepo -> Multi-Agent Swarm -> Agent SDK SaaS -> Cloud CI/CD",
    "features": [
      "End-to-end autonomy",
      "Enterprise IAM & DLP",
      "Live panel defense"
    ],
    "deliverables": [
      "Production SaaS / Swarm",
      "Live Defense Presentation",
      "Comprehensive Documentation"
    ],
    "rubric": [
      {
        "category": "Architectural Rigor",
        "points": 35
      },
      {
        "category": "Production Readiness",
        "points": 35
      },
      {
        "category": "Defense Quality",
        "points": 30
      }
    ]
  },
  {
    "id": "E5",
    "tier": "Expert",
    "title": "Master AI Engineering Portfolio & Capstone Defense",
    "scope": "Flagship expert capstone delivering Master AI Engineering Portfolio & Capstone Defense.",
    "architecture": "Enterprise Monorepo -> Multi-Agent Swarm -> Agent SDK SaaS -> Cloud CI/CD",
    "features": [
      "End-to-end autonomy",
      "Enterprise IAM & DLP",
      "Live panel defense"
    ],
    "deliverables": [
      "Production SaaS / Swarm",
      "Live Defense Presentation",
      "Comprehensive Documentation"
    ],
    "rubric": [
      {
        "category": "Architectural Rigor",
        "points": 35
      },
      {
        "category": "Production Readiness",
        "points": 35
      },
      {
        "category": "Defense Quality",
        "points": 30
      }
    ]
  }
];
export const modules8List: ModuleItem[] = [
  {
    "id": 1,
    "title": "Foundations, CLI Ergonomics & Steering",
    "weeks": "Weeks 1–2 (Days 1–15)",
    "goals": "Master terminal installation, passive exploration, Plan Mode, and CLAUDE.md steering.",
    "lessons": [
      {
        "day": 1,
        "title": "Environment Hardening & Diagnostic Verification",
        "duration": "1.5h",
        "outcomes": "Master day 1 engineering competencies.",
        "lab": "Lab 1",
        "assignment": "Assignment 1",
        "quiz": "Quiz on Day 1 mechanics"
      },
      {
        "day": 2,
        "title": "The 5-Step Feedback Loop: Explore, Plan, Code, Verify, Report",
        "duration": "1.5h",
        "outcomes": "Master day 2 engineering competencies.",
        "lab": "Lab 2",
        "assignment": "Assignment 2",
        "quiz": "Quiz on Day 2 mechanics"
      },
      {
        "day": 3,
        "title": "Passive Exploration & AST Codebase Navigation",
        "duration": "1.5h",
        "outcomes": "Master day 3 engineering competencies.",
        "lab": "Lab 3",
        "assignment": "Assignment 3",
        "quiz": "Quiz on Day 3 mechanics"
      },
      {
        "day": 4,
        "title": "Authoring High-Impact 50-Line CLAUDE.md Steering Files",
        "duration": "1.5h",
        "outcomes": "Master day 4 engineering competencies.",
        "lab": "Lab 4",
        "assignment": "Assignment 4",
        "quiz": "Quiz on Day 4 mechanics"
      },
      {
        "day": 5,
        "title": "Plan Mode Navigation & Permission State Machines",
        "duration": "1.5h",
        "outcomes": "Master day 5 engineering competencies.",
        "lab": "Lab 5",
        "assignment": "Assignment 5",
        "quiz": "Quiz on Day 5 mechanics"
      },
      {
        "day": 6,
        "title": "Atomic Bugfixing & Interactive Diff Inspection",
        "duration": "1.5h",
        "outcomes": "Master day 6 engineering competencies.",
        "lab": "Lab 6",
        "assignment": "Assignment 6",
        "quiz": "Quiz on Day 6 mechanics"
      },
      {
        "day": 7,
        "title": "Fast Interrupts (Esc) & Direction Course-Correction",
        "duration": "1.5h",
        "outcomes": "Master day 7 engineering competencies.",
        "lab": "Lab 7",
        "assignment": "Assignment 7",
        "quiz": "Quiz on Day 7 mechanics"
      },
      {
        "day": 8,
        "title": "Terminal Co-Existence with IDEs & tmux Multiplexers",
        "duration": "1.5h",
        "outcomes": "Master day 8 engineering competencies.",
        "lab": "Lab 8",
        "assignment": "Assignment 8",
        "quiz": "Quiz on Day 8 mechanics"
      },
      {
        "day": 9,
        "title": "Hierarchical Rule Resolution & Subdirectory Rules",
        "duration": "1.5h",
        "outcomes": "Master day 9 engineering competencies.",
        "lab": "Lab 9",
        "assignment": "Assignment 9",
        "quiz": "Quiz on Day 9 mechanics"
      },
      {
        "day": 10,
        "title": "CLI Permission Rings: Allow, Ask, and Deny Rules",
        "duration": "1.5h",
        "outcomes": "Master day 10 engineering competencies.",
        "lab": "Lab 10",
        "assignment": "Assignment 10",
        "quiz": "Quiz on Day 10 mechanics"
      },
      {
        "day": 11,
        "title": "Context Gauge & Token Threshold Monitoring",
        "duration": "1.5h",
        "outcomes": "Master day 11 engineering competencies.",
        "lab": "Lab 11",
        "assignment": "Assignment 11",
        "quiz": "Quiz on Day 11 mechanics"
      },
      {
        "day": 12,
        "title": "Dynamic File Pinning with @ Syntax",
        "duration": "1.5h",
        "outcomes": "Master day 12 engineering competencies.",
        "lab": "Lab 12",
        "assignment": "Assignment 12",
        "quiz": "Quiz on Day 12 mechanics"
      },
      {
        "day": 13,
        "title": "In-Place Context Compaction with /compact",
        "duration": "1.5h",
        "outcomes": "Master day 13 engineering competencies.",
        "lab": "Lab 13",
        "assignment": "Assignment 13",
        "quiz": "Quiz on Day 13 mechanics"
      },
      {
        "day": 14,
        "title": "Cache Optimization & Prompt Structure Organization",
        "duration": "1.5h",
        "outcomes": "Master day 14 engineering competencies.",
        "lab": "Lab 14",
        "assignment": "Assignment 14",
        "quiz": "Quiz on Day 14 mechanics"
      },
      {
        "day": 15,
        "title": "Module 1 Synthesis & Capstone Checkpoint 1",
        "duration": "1.5h",
        "outcomes": "Master day 15 engineering competencies.",
        "lab": "Lab 15",
        "assignment": "Assignment 15",
        "quiz": "Quiz on Day 15 mechanics"
      }
    ]
  },
  {
    "id": 2,
    "title": "Context Engineering, Memory & Output Personas",
    "weeks": "Week 2 (Days 16–22)",
    "goals": "Master token economics, prompt caching, persistent squad memory, and custom output styles.",
    "lessons": [
      {
        "day": 16,
        "title": "Day 16 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 16",
        "assignment": "Assignment 16",
        "quiz": "Quiz on context budgeting and memory"
      },
      {
        "day": 17,
        "title": "Day 17 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 17",
        "assignment": "Assignment 17",
        "quiz": "Quiz on context budgeting and memory"
      },
      {
        "day": 18,
        "title": "Day 18 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 18",
        "assignment": "Assignment 18",
        "quiz": "Quiz on context budgeting and memory"
      },
      {
        "day": 19,
        "title": "Day 19 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 19",
        "assignment": "Assignment 19",
        "quiz": "Quiz on context budgeting and memory"
      },
      {
        "day": 20,
        "title": "Day 20 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 20",
        "assignment": "Assignment 20",
        "quiz": "Quiz on context budgeting and memory"
      },
      {
        "day": 21,
        "title": "Day 21 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 21",
        "assignment": "Assignment 21",
        "quiz": "Quiz on context budgeting and memory"
      },
      {
        "day": 22,
        "title": "Day 22 Context & Memory Engineering",
        "duration": "1.5h",
        "outcomes": "Master context budget control and memory systems.",
        "lab": "Lab 22",
        "assignment": "Assignment 22",
        "quiz": "Quiz on context budgeting and memory"
      }
    ]
  },
  {
    "id": 3,
    "title": "Deterministic Hooks, Commands & TDD",
    "weeks": "Week 3 (Days 23–30)",
    "goals": "Master PreToolUse/PostToolUse hooks, custom slash commands, and test-driven agentic loops.",
    "lessons": [
      {
        "day": 23,
        "title": "Day 23 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 23",
        "assignment": "Assignment 23",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 24,
        "title": "Day 24 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 24",
        "assignment": "Assignment 24",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 25,
        "title": "Day 25 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 25",
        "assignment": "Assignment 25",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 26,
        "title": "Day 26 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 26",
        "assignment": "Assignment 26",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 27,
        "title": "Day 27 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 27",
        "assignment": "Assignment 27",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 28,
        "title": "Day 28 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 28",
        "assignment": "Assignment 28",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 29,
        "title": "Day 29 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 29",
        "assignment": "Assignment 29",
        "quiz": "Quiz on hook lifecycles and exit codes"
      },
      {
        "day": 30,
        "title": "Day 30 Deterministic Hooks & TDD",
        "duration": "1.5h",
        "outcomes": "Implement programmatic guardrails and automated formatters.",
        "lab": "Lab 30",
        "assignment": "Assignment 30",
        "quiz": "Quiz on hook lifecycles and exit codes"
      }
    ]
  },
  {
    "id": 4,
    "title": "Skills, Plugins & Marketplace Packaging",
    "weeks": "Week 4 (Days 31–37)",
    "goals": "Author auto-activating skills and distribute verified plugin bundles.",
    "lessons": [
      {
        "day": 31,
        "title": "Day 31 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 31",
        "assignment": "Assignment 31",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      },
      {
        "day": 32,
        "title": "Day 32 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 32",
        "assignment": "Assignment 32",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      },
      {
        "day": 33,
        "title": "Day 33 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 33",
        "assignment": "Assignment 33",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      },
      {
        "day": 34,
        "title": "Day 34 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 34",
        "assignment": "Assignment 34",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      },
      {
        "day": 35,
        "title": "Day 35 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 35",
        "assignment": "Assignment 35",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      },
      {
        "day": 36,
        "title": "Day 36 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 36",
        "assignment": "Assignment 36",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      },
      {
        "day": 37,
        "title": "Day 37 Skills & Plugins",
        "duration": "1.5h",
        "outcomes": "Package and test auto-activating agent capabilities.",
        "lab": "Lab 37",
        "assignment": "Assignment 37",
        "quiz": "Quiz on skill manifests and progressive disclosure"
      }
    ]
  },
  {
    "id": 5,
    "title": "Model Context Protocol (MCP) Engineering",
    "weeks": "Week 5 (Days 38–44)",
    "goals": "Build custom MCP servers in Python and TypeScript over stdio and HTTP/SSE transports.",
    "lessons": [
      {
        "day": 38,
        "title": "Day 38 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 38",
        "assignment": "Assignment 38",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      },
      {
        "day": 39,
        "title": "Day 39 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 39",
        "assignment": "Assignment 39",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      },
      {
        "day": 40,
        "title": "Day 40 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 40",
        "assignment": "Assignment 40",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      },
      {
        "day": 41,
        "title": "Day 41 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 41",
        "assignment": "Assignment 41",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      },
      {
        "day": 42,
        "title": "Day 42 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 42",
        "assignment": "Assignment 42",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      },
      {
        "day": 43,
        "title": "Day 43 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 43",
        "assignment": "Assignment 43",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      },
      {
        "day": 44,
        "title": "Day 44 MCP Engineering",
        "duration": "2.0h",
        "outcomes": "Author and debug custom MCP tools and resources.",
        "lab": "Lab 44",
        "assignment": "Assignment 44",
        "quiz": "Quiz on MCP JSON-RPC frames and transports"
      }
    ]
  },
  {
    "id": 6,
    "title": "Subagents, Parallel Swarms & Concurrency",
    "weeks": "Week 6 (Days 45–50)",
    "goals": "Architect context-isolated subagents, model tiering, and concurrent git worktree swarms.",
    "lessons": [
      {
        "day": 45,
        "title": "Day 45 Subagents & Swarms",
        "duration": "2.0h",
        "outcomes": "Coordinate multi-agent worker pipelines without file collisions.",
        "lab": "Lab 45",
        "assignment": "Assignment 45",
        "quiz": "Quiz on subagent personas and worktree concurrency"
      },
      {
        "day": 46,
        "title": "Day 46 Subagents & Swarms",
        "duration": "2.0h",
        "outcomes": "Coordinate multi-agent worker pipelines without file collisions.",
        "lab": "Lab 46",
        "assignment": "Assignment 46",
        "quiz": "Quiz on subagent personas and worktree concurrency"
      },
      {
        "day": 47,
        "title": "Day 47 Subagents & Swarms",
        "duration": "2.0h",
        "outcomes": "Coordinate multi-agent worker pipelines without file collisions.",
        "lab": "Lab 47",
        "assignment": "Assignment 47",
        "quiz": "Quiz on subagent personas and worktree concurrency"
      },
      {
        "day": 48,
        "title": "Day 48 Subagents & Swarms",
        "duration": "2.0h",
        "outcomes": "Coordinate multi-agent worker pipelines without file collisions.",
        "lab": "Lab 48",
        "assignment": "Assignment 48",
        "quiz": "Quiz on subagent personas and worktree concurrency"
      },
      {
        "day": 49,
        "title": "Day 49 Subagents & Swarms",
        "duration": "2.0h",
        "outcomes": "Coordinate multi-agent worker pipelines without file collisions.",
        "lab": "Lab 49",
        "assignment": "Assignment 49",
        "quiz": "Quiz on subagent personas and worktree concurrency"
      },
      {
        "day": 50,
        "title": "Day 50 Subagents & Swarms",
        "duration": "2.0h",
        "outcomes": "Coordinate multi-agent worker pipelines without file collisions.",
        "lab": "Lab 50",
        "assignment": "Assignment 50",
        "quiz": "Quiz on subagent personas and worktree concurrency"
      }
    ]
  },
  {
    "id": 7,
    "title": "Autonomous CI/CD & Claude Agent SDK",
    "weeks": "Week 7 (Days 51–56)",
    "goals": "Deploy GitHub Actions bots and embed Claude Agent SDK into production applications.",
    "lessons": [
      {
        "day": 51,
        "title": "Day 51 CI/CD & Agent SDK",
        "duration": "2.0h",
        "outcomes": "Build production CI bots and custom Agent SDK applications.",
        "lab": "Lab 51",
        "assignment": "Assignment 51",
        "quiz": "Quiz on headless -p pipelines and Agent SDK query loops"
      },
      {
        "day": 52,
        "title": "Day 52 CI/CD & Agent SDK",
        "duration": "2.0h",
        "outcomes": "Build production CI bots and custom Agent SDK applications.",
        "lab": "Lab 52",
        "assignment": "Assignment 52",
        "quiz": "Quiz on headless -p pipelines and Agent SDK query loops"
      },
      {
        "day": 53,
        "title": "Day 53 CI/CD & Agent SDK",
        "duration": "2.0h",
        "outcomes": "Build production CI bots and custom Agent SDK applications.",
        "lab": "Lab 53",
        "assignment": "Assignment 53",
        "quiz": "Quiz on headless -p pipelines and Agent SDK query loops"
      },
      {
        "day": 54,
        "title": "Day 54 CI/CD & Agent SDK",
        "duration": "2.0h",
        "outcomes": "Build production CI bots and custom Agent SDK applications.",
        "lab": "Lab 54",
        "assignment": "Assignment 54",
        "quiz": "Quiz on headless -p pipelines and Agent SDK query loops"
      },
      {
        "day": 55,
        "title": "Day 55 CI/CD & Agent SDK",
        "duration": "2.0h",
        "outcomes": "Build production CI bots and custom Agent SDK applications.",
        "lab": "Lab 55",
        "assignment": "Assignment 55",
        "quiz": "Quiz on headless -p pipelines and Agent SDK query loops"
      },
      {
        "day": 56,
        "title": "Day 56 CI/CD & Agent SDK",
        "duration": "2.0h",
        "outcomes": "Build production CI bots and custom Agent SDK applications.",
        "lab": "Lab 56",
        "assignment": "Assignment 56",
        "quiz": "Quiz on headless -p pipelines and Agent SDK query loops"
      }
    ]
  },
  {
    "id": 8,
    "title": "Enterprise Governance, Evals & Portfolio Defense",
    "weeks": "Week 8 (Days 57–60)",
    "goals": "Enforce FinOps token governance, automated prompt evals, and defend production capstone.",
    "lessons": [
      {
        "day": 57,
        "title": "Day 57 Governance & Portfolio Defense",
        "duration": "2.5h",
        "outcomes": "Defend production capstone portfolio before review panel.",
        "lab": "Lab 57",
        "assignment": "Assignment 57",
        "quiz": "Final comprehensive assessment"
      },
      {
        "day": 58,
        "title": "Day 58 Governance & Portfolio Defense",
        "duration": "2.5h",
        "outcomes": "Defend production capstone portfolio before review panel.",
        "lab": "Lab 58",
        "assignment": "Assignment 58",
        "quiz": "Final comprehensive assessment"
      },
      {
        "day": 59,
        "title": "Day 59 Governance & Portfolio Defense",
        "duration": "2.5h",
        "outcomes": "Defend production capstone portfolio before review panel.",
        "lab": "Lab 59",
        "assignment": "Assignment 59",
        "quiz": "Final comprehensive assessment"
      },
      {
        "day": 60,
        "title": "Day 60 Governance & Portfolio Defense",
        "duration": "2.5h",
        "outcomes": "Defend production capstone portfolio before review panel.",
        "lab": "Lab 60",
        "assignment": "Assignment 60",
        "quiz": "Final comprehensive assessment"
      }
    ]
  }
];
