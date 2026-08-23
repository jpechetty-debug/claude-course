/**
 * Master Curriculum Data Model (Single Source of Truth)
 * Contains audited and fact-checked catalog definitions for:
 * - 50 Hands-On Labs
 * - 30 Capstone Projects
 * - 8 Modules (60 Lessons)
 * - 20 Gap Analysis Items
 */

export const masterData = {
  auditMetrics: [
    { metric: 'Clarity', score: 9, max: 10, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { metric: 'Depth', score: 8, max: 10, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { metric: 'Engagement', score: 8, max: 10, color: 'text-amber-500', bg: 'bg-amber-50' },
    { metric: 'Practicality', score: 10, max: 10, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ],

  gapAnalysisList: [
    { id: 1, title: 'Building Custom MCP Servers (stdio & SSE)', whyItMatters: 'Enables connecting Claude to proprietary internal APIs, databases, and microservices.', placement: 'Week 5 (Module 5)', duration: '4.5 Hours' },
    { id: 2, title: 'Deep Context Engineering & Prompt Caching', whyItMatters: 'Maximizes cache hit rates, saving 70%+ of API token costs on multi-turn sessions.', placement: 'Week 2 (Module 2)', duration: '3.0 Hours' },
    { id: 3, title: 'Full-Scale Claude Agent SDK Applications', whyItMatters: 'Enables developers to embed Claude’s agent loop into custom SaaS and internal tools.', placement: 'Week 7 (Module 7)', duration: '6.0 Hours' },
    { id: 4, title: 'Multi-Agent Swarm Architectures & Consensus', whyItMatters: 'Coordinates supervisor-worker pipelines for large refactoring tasks.', placement: 'Week 6 (Module 6)', duration: '4.5 Hours' },
    { id: 5, title: 'Autonomous GitHub Actions CI/CD Bots', whyItMatters: 'Deploys autonomous PR review and auto-bugfixing bots in production pipelines.', placement: 'Week 7 (Module 7)', duration: '4.0 Hours' },
    { id: 6, title: 'IDE Co-Existence (Cursor, VS Code & JetBrains)', whyItMatters: 'Teaches developers to pair terminal Claude Code with their primary editor for maximum speed.', placement: 'Week 1 (Module 1)', duration: '2.5 Hours' },
    { id: 7, title: 'Large Monorepo Navigation & Code Graphs', whyItMatters: 'Teaches AST and symbol-based navigation in 1,000,000+ line repositories.', placement: 'Week 3 (Module 3)', duration: '3.5 Hours' },
    { id: 8, title: 'Enterprise Security, Managed Settings & DLP', whyItMatters: 'Enables security teams to deploy organization-wide allow/ask/deny policies.', placement: 'Week 8 (Module 8)', duration: '3.5 Hours' },
    { id: 9, title: 'Multi-Cloud Provider Routing (Bedrock / Vertex AI)', whyItMatters: 'Regulated enterprises deploy Claude Code via existing cloud IAM roles.', placement: 'Week 7 (Module 7)', duration: '3.0 Hours' },
    { id: 10, title: 'Automated Agent Evals & Regression Testing', whyItMatters: 'Quantitatively benchmarks skills and system prompts against test datasets.', placement: 'Week 8 (Module 8)', duration: '3.5 Hours' },
    { id: 11, title: 'Claude Code on the Web Cloud Sandboxes', whyItMatters: 'Dispatches asynchronous background refactoring tasks to hosted cloud sandboxes.', placement: 'Week 6 (Module 6)', duration: '2.5 Hours' },
    { id: 12, title: 'Persistent Memory & Squad Knowledge Bases', whyItMatters: 'Keeps architectural decisions synchronized across squad checkouts.', placement: 'Week 2 (Module 2)', duration: '2.5 Hours' },
    { id: 13, title: 'Rich JSON Hook Decisions & Alert Webhooks', whyItMatters: 'Integrates hook pipelines with corporate security alerting and ticketing.', placement: 'Week 3 (Module 3)', duration: '3.5 Hours' },
    { id: 14, title: 'TDD & Automated Mutation Testing Loops', whyItMatters: 'Achieves high accuracy through strict Red-Green-Refactor cycles.', placement: 'Week 3 (Module 3)', duration: '3.0 Hours' },
    { id: 15, title: 'Custom Output Styles & Developer Personas', whyItMatters: 'Adapts response communication density for different engineering roles.', placement: 'Week 2 (Module 2)', duration: '2.0 Hours' },
    { id: 16, title: 'Git Worktree Fleets & Concurrent Local Sessions', whyItMatters: 'Enables running 3 to 5 simultaneous Claude Code sessions without file collisions.', placement: 'Week 6 (Module 6)', duration: '2.5 Hours' },
    { id: 17, title: 'Security Auditing & OWASP SAST Bot Workflows', whyItMatters: 'Employs Claude Code to actively detect and remediate security vulnerabilities.', placement: 'Week 6 (Module 6)', duration: '3.5 Hours' },
    { id: 18, title: 'Token Economics, FinOps & Quota Attribution', whyItMatters: 'Tracks and forecasts token spend and cache ROI across developer teams.', placement: 'Week 8 (Module 8)', duration: '2.5 Hours' },
    { id: 19, title: 'Authoring & Publishing Marketplace Plugins', whyItMatters: 'Packages and distributes verified plugin bundles across organizations.', placement: 'Week 4 (Module 4)', duration: '3.5 Hours' },
    { id: 20, title: 'Production AI Engineering Portfolio Defense', whyItMatters: 'Evaluates students against a 100-point rubric for production readiness.', placement: 'Week 8 (Module 8)', duration: '5.0 Hours' },
  ],

  courseNamesList: [
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
  ],

  masterPromise: "Transform from an AI-curious developer into a world-class AI Software Engineer capable of building, securing, automating, and deploying production-grade agentic systems, custom MCP servers, and enterprise CI/CD pipelines using Claude Code and the Agent SDK.",

  labs50Catalog: Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    let section = 'CLI Fundamentals & Steering';
    let difficulty = 'Beginner';
    let difficultyColor = 'text-emerald-600 bg-emerald-50';

    if (id >= 11 && id <= 20) {
      section = 'Context Engineering & Memory';
      difficulty = 'Intermediate';
      difficultyColor = 'text-blue-600 bg-blue-50';
    } else if (id >= 21 && id <= 28) {
      section = 'Deterministic Hooks, Skills & Plugins';
      difficulty = 'Advanced';
      difficultyColor = 'text-amber-600 bg-amber-50';
    } else if (id >= 29 && id <= 37) {
      section = 'Model Context Protocol (MCP) Engineering';
      difficulty = 'Advanced';
      difficultyColor = 'text-purple-600 bg-purple-50';
    } else if (id >= 38 && id <= 44) {
      section = 'Subagents, Parallel Swarms & Concurrency';
      difficulty = 'Expert';
      difficultyColor = 'text-rose-600 bg-rose-50';
    } else if (id >= 45 && id <= 50) {
      section = 'Headless CI/CD, Agent SDK & Enterprise Evals';
      difficulty = 'Expert';
      difficultyColor = 'text-rose-600 bg-rose-50';
    }

    const titles = [
      "Terminal Hardening & Diagnostic Verification",
      "Read-Only Exploration & Architectural Mapping",
      "Plan Mode Navigation & Shift+Tab Perm State Machine",
      "Authoring High-Impact 50-Line CLAUDE.md Steering Files",
      "Single-Field Atomic Bugfix & Diff Review Loop",
      "Fast Interruption (Esc) & Direction Recovery",
      "Terminal Co-Existence with IDEs & tmux Panes",
      "Hierarchical Rule Resolution & Subdirectory Steering",
      "CLI Permission Rings: Allow, Ask, and Deny Rules",
      "Headless One-Shot Prompts with claude -p Pipelines",
      "Context Gauge & Token Threshold Monitoring",
      "Dynamic File Context Pinning with @ Syntax",
      "In-Place Context Compaction with /compact",
      "Cache Optimization & Prompt Structure Organization",
      "Persistent Squad Memory Systems",
      "Context Purging & Reset Strategies with /clear",
      "Token Cost Analysis & Model Tiering (/cost)",
      "Dynamic Custom Output Styles & Personas",
      "AST Symbol Exploration in 100k+ Line Codebases",
      "Context Economics: Subagent Delegation vs Monolithic Context",
      "Custom Slash Commands with Dynamic $ARGUMENTS",
      "Deterministic Security Gates with PreToolUse Hooks",
      "Format-on-Write Automation with PostToolUse Hooks",
      "Cross-Platform Hook Development (Bash vs PowerShell)",
      "JSON Decision Protocols & Exit Code Standards",
      "Authoring Auto-Activating Agent Skills",
      "Plugin Package Bundling & Manifest Authoring",
      "Auditing Untrusted Hooks & Plugin Sandboxing",
      "Connecting SQLite Database MCP Server over stdio",
      "Authoring Python FastMCP Server with Custom Tools",
      "Authoring TypeScript MCP Server with Zod Schema Validation",
      "MCP Transport Architectures: stdio vs HTTP/SSE",
      "MCP Scopes & Lifecycle Management in .mcp.json",
      "Context Pruning for Active MCP Tool Declarations",
      "Debugging MCP JSON-RPC Frames with MCP Inspector GUI",
      "Securing MCP Tool Invocations with PreToolUse Interceptors",
      "Building an Internal Jira/GitHub Issue Triage MCP Server",
      "Context-Isolated Read-Only Code Review Subagent",
      "Autonomous Migration Worker Subagent in Worktree",
      "Multi-Agent Supervisor-Worker Swarm Architecture",
      "Subagent Model Tiering: Haiku Routing & Sonnet Execution",
      "Git Worktree Fleet: Parallel Concurrent Claude Sessions",
      "Red-Team Security Auditor Subagent for Vulnerability Scans",
      "Asynchronous Cloud Sandbox Execution on claude.ai/code",
      "Headless Commit Message & PR Description Generator",
      "Autonomous GitHub Actions PR Review Bot",
      "Building Full-Stack Agent with Claude Agent SDK",
      "Multi-Cloud IAM Routing: AWS Bedrock & GCP Vertex AI",
      "Automated Prompt Evals & Regression Testing Harness",
      "FinOps Cost Attribution Dashboard & Quota Governance"
    ];

    const title = titles[id - 1] || `Production Engineering Lab ${id}`;

    return {
      id,
      section,
      title,
      difficulty,
      difficultyColor,
      objective: `Master ${title.toLowerCase()} in a production engineering repository.`,
      inputs: `Target workspace repository, valid Node.js 18+ and Claude Code CLI.`,
      instructions: [
        `Initialize local workspace and launch Claude Code: claude`,
        `Execute the target drill for Lab ${id}: ${title}.`,
        `Inspect diffs natively using !git diff and confirm zero collateral regressions.`,
        `Validate assertions with automated test suite.`
      ],
      expectedOutput: `Verified execution output with pass status code 0.`,
      successCriteria: `Requirement fulfilled with passing test assertions.`
    };
  }),

  capstones30Catalog: [
    // 5 Beginner
    { id: "B1", tier: "Beginner", title: "Legacy Codebase Architecture Extractor", scope: "Automated architecture doc generator for legacy repositories.", architecture: "Repo -> AST / Symbols -> Claude Code -> ARCHITECTURE.md + Mermaid", features: ["AST extraction", "Mermaid generation", "Zero-edit guarantee"], deliverables: ["ARCHITECTURE.md", "Mermaid diagram"], rubric: [{ category: "Accuracy", points: 40 }, { category: "Format", points: 30 }, { category: "Safety", points: 30 }] },
    { id: "B2", tier: "Beginner", title: "Interactive Bugfix Pipeline in Plan Mode", scope: "Zero-regression atomic bugfix pipeline using Plan Mode.", architecture: "Issue -> Plan Mode (Shift+Tab) -> Code -> Verify -> !git diff", features: ["Plan generation", "Atomic edit", "Diff verification"], deliverables: ["Pull Request", "Test log"], rubric: [{ category: "Plan Quality", points: 35 }, { category: "Diff Cleanliness", points: 35 }, { category: "Tests", points: 30 }] },
    { id: "B3", tier: "Beginner", title: "Enterprise CLAUDE.md Steering System", scope: "50-line root steering file with hierarchical overrides.", architecture: "Root CLAUDE.md -> Subdirectory Rules -> /clear Verification", features: ["50-line limit", "Negative rules", "Multi-package rules"], deliverables: ["CLAUDE.md files", "Verification log"], rubric: [{ category: "Conciseness", points: 40 }, { category: "Adherence", points: 40 }, { category: "Hierarchy", points: 20 }] },
    { id: "B4", tier: "Beginner", title: "Custom Engineering Slash Command Suite", scope: "Suite of 5 markdown commands with dynamic arguments.", architecture: ".claude/commands/*.md -> $ARGUMENTS -> Structured Outputs", features: ["5 Commands", "Input validation", "Allowed-tools"], deliverables: [".claude/commands/", "Demo video"], rubric: [{ category: "Command Design", points: 40 }, { category: "Security", points: 30 }, { category: "Utility", points: 30 }] },
    { id: "B5", tier: "Beginner", title: "Automated Git Hygiene & PR Script", scope: "Headless pipeline for clean commits and PR summaries.", architecture: "!git diff -> claude -p -> Conventional Commit + PR Body", features: ["Conventional commits", "Changelog generation", "Headless -p"], deliverables: ["Shell script", "Sample PRs"], rubric: [{ category: "Automation", points: 40 }, { category: "Format", points: 30 }, { category: "Reliability", points: 30 }] },

    // 10 Intermediate (I1-I10)
    ...Array.from({ length: 10 }, (_, idx) => {
      const num = idx + 1;
      const titles = [
        "Deterministic Security Guardrail Hook Suite",
        "Automated Code Formatter & Linter Hook",
        "Persistent Squad Memory & Architectural Log",
        "Dynamic Output Style Persona Engine",
        "Python FastMCP SQLite Database Inspector",
        "TypeScript MCP GitHub & Jira Issue Triager",
        "Context-Isolated Security Audit Subagent",
        "Test-Driven Development (TDD) Mutation Bot",
        "Monorepo AST Symbol Navigator",
        "Context Budget & Cache ROI Analyzer"
      ];
      return {
        id: `I${num}`,
        tier: "Intermediate",
        title: titles[idx] || `Intermediate Capstone ${num}`,
        scope: `Production intermediate capstone focusing on ${titles[idx]}.`,
        architecture: `Event / Trigger -> Interceptor / Subagent -> Test Suite -> Report`,
        features: ["Production error handling", "Zero token waste", "Automated tests"],
        deliverables: ["Source repository", "Architecture diagram", "Verification log"],
        rubric: [{ category: "Architecture", points: 30 }, { category: "Implementation", points: 40 }, { category: "Verification", points: 30 }]
      };
    }),

    // 10 Advanced (A1-A10)
    ...Array.from({ length: 10 }, (_, idx) => {
      const num = idx + 1;
      const titles = [
        "Full-Stack MCP Gateway with HTTP/SSE & stdio",
        "Autonomous Migration Subagent Swarm in Worktrees",
        "Multi-Agent Consensus Review & Security Pipeline",
        "Autonomous GitHub Actions CI/CD Auto-Fixer Bot",
        "Claude Agent SDK Incident Response Daemon",
        "Agent Evals & System Prompt Regression Harness",
        "Multi-Cloud IAM Router (AWS Bedrock & GCP Vertex)",
        "Enterprise Claude FinOps & Token Quota Gateway",
        "Agent Skill & Plugin Marketplace Package",
        "Automated OWASP SAST & Dependency Remediation Bot"
      ];
      return {
        id: `A${num}`,
        tier: "Advanced",
        title: titles[idx] || `Advanced Capstone ${num}`,
        scope: `Advanced enterprise capstone implementing ${titles[idx]}.`,
        architecture: `Webhook / CI -> Parallel Swarm -> MCP Gateway -> Cloud Egress`,
        features: ["Distributed execution", "Cloud IAM authentication", "Automated regression testing"],
        deliverables: ["Complete system repo", "CI/CD Pipeline", "Production benchmark report"],
        rubric: [{ category: "System Architecture", points: 30 }, { category: "Security & Robustness", points: 40 }, { category: "Evaluation Results", points: 30 }]
      };
    }),

    // 5 Expert (E1-E5)
    ...Array.from({ length: 5 }, (_, idx) => {
      const num = idx + 1;
      const titles = [
        "Enterprise Autonomous Software Engineering Swarm",
        "Self-Healing CI/CD Pipeline with Mutation Gate",
        "Multi-Tenant Claude Agent SaaS Platform",
        "Autonomous Vulnerability Remediation Appliance",
        "Master AI Engineering Portfolio & Capstone Defense"
      ];
      return {
        id: `E${num}`,
        tier: "Expert",
        title: titles[idx] || `Expert Capstone ${num}`,
        scope: `Flagship expert capstone delivering ${titles[idx]}.`,
        architecture: `Enterprise Monorepo -> Multi-Agent Swarm -> Agent SDK SaaS -> Cloud CI/CD`,
        features: ["End-to-end autonomy", "Enterprise IAM & DLP", "Live panel defense"],
        deliverables: ["Production SaaS / Swarm", "Live Defense Presentation", "Comprehensive Documentation"],
        rubric: [{ category: "Architectural Rigor", points: 35 }, { category: "Production Readiness", points: 35 }, { category: "Defense Quality", points: 30 }]
      };
    })
  ],

  modules8List: [
    {
      id: 1,
      title: "Foundations, CLI Ergonomics & Steering",
      weeks: "Weeks 1–2 (Days 1–15)",
      goals: "Master terminal installation, passive exploration, Plan Mode, and CLAUDE.md steering.",
      lessons: Array.from({ length: 15 }, (_, i) => {
        const day = i + 1;
        const names = [
          "Environment Hardening & Diagnostic Verification",
          "The 5-Step Feedback Loop: Explore, Plan, Code, Verify, Report",
          "Passive Exploration & AST Codebase Navigation",
          "Authoring High-Impact 50-Line CLAUDE.md Steering Files",
          "Plan Mode Navigation & Permission State Machines",
          "Atomic Bugfixing & Interactive Diff Inspection",
          "Fast Interrupts (Esc) & Direction Course-Correction",
          "Terminal Co-Existence with IDEs & tmux Multiplexers",
          "Hierarchical Rule Resolution & Subdirectory Rules",
          "CLI Permission Rings: Allow, Ask, and Deny Rules",
          "Context Gauge & Token Threshold Monitoring",
          "Dynamic File Pinning with @ Syntax",
          "In-Place Context Compaction with /compact",
          "Cache Optimization & Prompt Structure Organization",
          "Module 1 Synthesis & Capstone Checkpoint 1"
        ];
        return {
          day,
          title: names[i] || `Day ${day} Lesson`,
          duration: "1.5h",
          outcomes: `Master day ${day} engineering competencies.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on Day ${day} mechanics`
        };
      })
    },
    {
      id: 2,
      title: "Context Engineering, Memory & Output Personas",
      weeks: "Week 2 (Days 16–22)",
      goals: "Master token economics, prompt caching, persistent squad memory, and custom output styles.",
      lessons: Array.from({ length: 7 }, (_, i) => {
        const day = i + 16;
        return {
          day,
          title: `Day ${day} Context & Memory Engineering`,
          duration: "1.5h",
          outcomes: `Master context budget control and memory systems.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on context budgeting and memory`
        };
      })
    },
    {
      id: 3,
      title: "Deterministic Hooks, Commands & TDD",
      weeks: "Week 3 (Days 23–30)",
      goals: "Master PreToolUse/PostToolUse hooks, custom slash commands, and test-driven agentic loops.",
      lessons: Array.from({ length: 8 }, (_, i) => {
        const day = i + 23;
        return {
          day,
          title: `Day ${day} Deterministic Hooks & TDD`,
          duration: "1.5h",
          outcomes: `Implement programmatic guardrails and automated formatters.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on hook lifecycles and exit codes`
        };
      })
    },
    {
      id: 4,
      title: "Skills, Plugins & Marketplace Packaging",
      weeks: "Week 4 (Days 31–37)",
      goals: "Author auto-activating skills and distribute verified plugin bundles.",
      lessons: Array.from({ length: 7 }, (_, i) => {
        const day = i + 31;
        return {
          day,
          title: `Day ${day} Skills & Plugins`,
          duration: "1.5h",
          outcomes: `Package and test auto-activating agent capabilities.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on skill manifests and progressive disclosure`
        };
      })
    },
    {
      id: 5,
      title: "Model Context Protocol (MCP) Engineering",
      weeks: "Week 5 (Days 38–44)",
      goals: "Build custom MCP servers in Python and TypeScript over stdio and HTTP/SSE transports.",
      lessons: Array.from({ length: 7 }, (_, i) => {
        const day = i + 38;
        return {
          day,
          title: `Day ${day} MCP Engineering`,
          duration: "2.0h",
          outcomes: `Author and debug custom MCP tools and resources.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on MCP JSON-RPC frames and transports`
        };
      })
    },
    {
      id: 6,
      title: "Subagents, Parallel Swarms & Concurrency",
      weeks: "Week 6 (Days 45–50)",
      goals: "Architect context-isolated subagents, model tiering, and concurrent git worktree swarms.",
      lessons: Array.from({ length: 6 }, (_, i) => {
        const day = i + 45;
        return {
          day,
          title: `Day ${day} Subagents & Swarms`,
          duration: "2.0h",
          outcomes: `Coordinate multi-agent worker pipelines without file collisions.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on subagent personas and worktree concurrency`
        };
      })
    },
    {
      id: 7,
      title: "Autonomous CI/CD & Claude Agent SDK",
      weeks: "Week 7 (Days 51–56)",
      goals: "Deploy GitHub Actions bots and embed Claude Agent SDK into production applications.",
      lessons: Array.from({ length: 6 }, (_, i) => {
        const day = i + 51;
        return {
          day,
          title: `Day ${day} CI/CD & Agent SDK`,
          duration: "2.0h",
          outcomes: `Build production CI bots and custom Agent SDK applications.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Quiz on headless -p pipelines and Agent SDK query loops`
        };
      })
    },
    {
      id: 8,
      title: "Enterprise Governance, Evals & Portfolio Defense",
      weeks: "Week 8 (Days 57–60)",
      goals: "Enforce FinOps token governance, automated prompt evals, and defend production capstone.",
      lessons: Array.from({ length: 4 }, (_, i) => {
        const day = i + 57;
        return {
          day,
          title: `Day ${day} Governance & Portfolio Defense`,
          duration: "2.5h",
          outcomes: `Defend production capstone portfolio before review panel.`,
          lab: `Lab ${day}`,
          assignment: `Assignment ${day}`,
          quiz: `Final comprehensive assessment`
        };
      })
    }
  ]
};
