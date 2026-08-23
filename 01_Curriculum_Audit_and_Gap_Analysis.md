# Phase 1 & Phase 2: Curriculum Audit & Gap Analysis

**Author:** Technical Educator & AI Systems Architect  
**Target Program:** Claude Code Mastery: Zero to Production AI Engineer  
**Baseline Source:** `Claude_Code_Study_Companion.md`

---

# PART 1: Comprehensive Curriculum Audit

This audit evaluates the baseline companion document (`Claude_Code_Study_Companion.md`), assessing its instructional architecture, concept coverage, practical exercises, and pedagogical efficacy.

---

## 1. 4-Dimension Quality Scoring Rubric

To avoid arbitrary ratings, every section is evaluated against this explicit 4-criteria rubric:

| Score | Clarity (Structure & Explanations) | Depth (Technical Rigor & Internals) | Engagement (Interactive Learning) | Practicality (Real-World Reusability) |
| :--- | :--- | :--- | :--- | :--- |
| **9–10** | Crystal-clear instructions, zero ambiguity, precise commands | Explains protocol frames, engine mechanics, edge cases | Hands-on drills, actionable reflection prompts | Immediately runnable in production repositories |
| **7–8** | Clear workflow, minimal ambiguities | Solid conceptual coverage, minor gaps in edge cases | Good procedural instructions, standard tasks | High utility for common development tasks |
| **5–6** | Understandable but requires prior context | Surface-level explanations, missing failure modes | Passive reading, minimal interactive prompts | Generic examples requiring user adaptation |
| **1–4** | Confusing, vague, or outdated instructions | Hand-wavy explanations, technically inaccurate | Pure text dump with zero exercises | Broken commands or unusable snippets |

---

## 2. Audit Summary Matrix

| Section / Lab | Metadata | Primary Objective | Concept Tier | Practicality Type | Quality Scores (C / D / E / P) | Overall Rating |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Lab 0: Setup Verification** | W1D1 · 15m · 🟢 | Verify CLI health, Node.js, git, & auth | Fundamental | Diagnostic commands (`claude doctor`) | 9 / 7 / 7 / 10 | **8/10** |
| **Lab 1: Repo Orientation** | W1D2 · 30m · 🟢 | Explore codebases read-only | Fundamental | Read-only CLI queries & bash passthroughs | 9 / 7 / 8 / 9 | **8/10** |
| **Lab 2: Explore-Plan-Code-Verify** | W1D3 · 45m · 🟡 | Execute first atomic code modification | Fundamental | 5-step engineering feedback loop | 10 / 8 / 9 / 10 | **9/10** |
| **Lab 3: Author CLAUDE.md** | W1D4 · 45m · 🟡 | Establish persistent repo instructions | Fundamental | Rule specification & prompt grounding | 9 / 8 / 8 / 9 | **9/10** |
| **Lab 4: Context Drills** | W2D1 · 45m · 🟢 | Context hygiene & budget control | Intermediate | `@`, `/context`, `/compact`, `/clear` drills | 9 / 8 / 8 / 9 | **9/10** |
| **Lab 5: Custom Slash Commands** | W2D2 · 45m · 🟡 | Automate repeatable workflows | Intermediate | Markdown command templates (`$ARGUMENTS`) | 8 / 7 / 8 / 9 | **8/10** |
| **Lab 6: Deterministic Hooks** | W2D3 · 60m · 🔴 | Hard guardrails & format-on-write | Advanced | Shell scripts, exit codes, Pre/PostToolUse | 8 / 9 / 8 / 9 | **9/10** |
| **Lab 7: MCP Integrations** | W3D1 · 60m · 🔴 | Connect external tools & data sources | Advanced | `claude mcp add/list/remove` (stdio/http) | 8 / 8 / 8 / 8 | **8/10** |
| **Lab 8: Subagent Reviews** | W3D2 · 60m · 🟡 | Context-isolated code audit & critique | Advanced | Specialized personas (`.claude/agents/`) | 9 / 8 / 9 / 9 | **9/10** |
| **Lab 9: Headless Mode & Pipes** | W3D3 · 45m · 🟡 | Automate CLI pipelines & scripts | Intermediate | `claude -p`, JSON parsing, Unix piping | 9 / 8 / 8 / 10 | **9/10** |
| **Lab 10: Skills & Plugins** | W4D1 · 60m · 🟡 | Auto-activating capabilities & bundles | Advanced | Agent Skills spec, plugin marketplaces | 8 / 8 / 8 / 9 | **8/10** |
| **Lab 11: Professional Capstone** | W4D2 · 90m · 🔴 | End-to-end atomic engineering pipeline | Comprehensive | Full chained exploration → commit workflow | 9 / 9 / 9 / 10 | **9/10** |
| **Deep Dive A1: Hooks Internals** | Reference · 🔴 | Master lifecycle events & JSON APIs | Advanced | Security gates, token budgeting | 9 / 9 / 7 / 9 | **9/10** |
| **Deep Dive A2: MCP Design** | Reference · 🔴 | Protocol architecture & context costs | Advanced | Scopes (local/project/user), transports | 9 / 8 / 7 / 8 | **8/10** |
| **Deep Dive A3: Subagents** | Reference · 🟡 | Subagent orchestration & model tiering | Advanced | Haiku routing, context isolation | 9 / 9 / 8 / 9 | **9/10** |
| **Deep Dive A4: CI/CD Pipelines** | Reference · 🔴 | Automated GitHub Actions & PR bots | Advanced | Headless automation, permission hardening | 8 / 9 / 8 / 9 | **9/10** |
| **Deep Dive A5: Agent SDK** | Reference · 🔴 | Python & TypeScript agent development | Expert | `query()` loop, custom harnesses | 8 / 8 / 8 / 9 | **8/10** |
| **Deep Dive A6: Architecture** | Reference · 🟡 | Primitive taxonomy & composition | Intermediate | Hooks vs Skills vs Commands vs Subagents | 10 / 9 / 8 / 9 | **9/10** |
| **Deep Dive A7: Settings & Perms** | Reference · 🟡 | 3-tier config hierarchy & deny rules | Intermediate | Org-wide governance, managed settings | 9 / 8 / 7 / 9 | **8/10** |
| **Deep Dive A8: Web & Sandboxes** | Reference · 🟡 | Cloud sandboxes & session teleportation | Intermediate | `claude.ai/code`, remote handoff | 9 / 7 / 8 / 8 | **8/10** |

---

## 3. Detailed Module-by-Module Audit

### Module 1: Core Fundamentals (Labs 0, 1, 2, 3)
- **Metadata:** Week 1 | Duration: 2.5 hours | Difficulty: Beginner to Intermediate (🟢 to 🟡)
- **Learning Objectives:**
  1. Validate local development environment and CLI installation health using `claude doctor`.
  2. Perform passive repository exploration without polluting git status or making unauthorized edits.
  3. Master the 5-phase engineering loop: *Explore → Plan → Code → Verify → Report*.
  4. Author concise, high-impact `CLAUDE.md` steering files to eliminate repeated user instructions.
- **Core Concepts:**
  - *Fundamental:* CLI invocation, terminal flags, git status verification, read-only prompting.
  - *Intermediate:* Permission mode transitions (`Shift+Tab`), Plan Mode, diff reviews (`!git diff`).
  - *Advanced:* System instructions hierarchy, negative constraints ("Do Not" rules) in `CLAUDE.md`.
- **Practical Exercises:**
  - Lab 0: `claude doctor` environment validation checklist.
  - Lab 1: Interactive architectural extraction of an unfamiliar repository.
  - Lab 2: Atomic field validation patch developed in Plan Mode with unit test verification.
  - Lab 3: Generating and hand-pruning a 50-line `CLAUDE.md` file.
- **Teaching Patterns:** Step-by-step procedural instruction, structured reflection prompts, safe sandboxing advice.
- **Quality Score:** Clarity: 9/10 | Depth: 8/10 | Engagement: 8/10 | Practicality: 10/10 (Overall: **9/10**)
- **Findings:** Strong safety foundation and clear emphasis on Plan Mode. Needs extension for large monorepos.

---

### Module 2: Context Engineering & Extension Primitives (Labs 4, 5, 6)
- **Metadata:** Week 2 | Duration: 2.5 hours | Difficulty: Intermediate to Advanced (🟢 to 🔴)
- **Learning Objectives:**
  1. Measure, manage, and compact token context across extended multi-turn engineering tasks.
  2. Implement reusable custom slash commands with dynamic `$ARGUMENTS` injection.
  3. Construct deterministic hook scripts for automated code formatting and sensitive secret protection.
- **Core Concepts:**
  - *Fundamental:* Context gauge (`/context`), file pinning with `@`, conversation clearing (`/clear`).
  - *Intermediate:* In-place summarization (`/compact`), slash command frontmatter (`allowed-tools`).
  - *Advanced:* `PreToolUse` and `PostToolUse` lifecycle intercepts, stdin JSON parsing in bash, exit-code protocol (`exit 2` blocking).
- **Practical Exercises:**
  - Lab 4: Pinning, measuring, compacting, and clearing active session memory.
  - Lab 5: Building `/health-check` and `/explain-issue <id>` custom commands.
  - Lab 6: Writing `PreToolUse` bash guards to block `.env`/`.pem` read attempts and `PostToolUse` prettier formatters.
- **Teaching Patterns:** Concrete code examples, dangerous security warnings, operational guardrails.
- **Quality Score:** Clarity: 8/10 | Depth: 9/10 | Engagement: 8/10 | Practicality: 9/10 (Overall: **9/10**)
- **Findings:** Introduces hooks clearly; needs cross-platform PowerShell and JSON decision protocol coverage.

---

### Module 3: Advanced Ecosystem – MCP, Subagents & Automation (Labs 7, 8, 9, 10, 11)
- **Metadata:** Weeks 3–4 | Duration: 5.0 hours | Difficulty: Intermediate to Advanced (🟡 to 🔴)
- **Learning Objectives:**
  1. Mount and decommission Model Context Protocol (MCP) servers with minimal context pollution.
  2. Architect context-isolated subagents for read-only peer code reviews and specialized domain tasks.
  3. Execute headless one-shot prompts (`-p`) with JSON parsing for CI/CD scripting pipelines.
  4. Author auto-activating skills conforming to the Agent Skills standard and install curated plugins.
  5. Complete an end-to-end atomic engineering lifecycle from feature exploration to headless documentation.
- **Core Concepts:**
  - *Fundamental:* CLI flags (`-p`, `--output-format json`), Unix redirection pipes.
  - *Intermediate:* MCP transport layers (`stdio`, `http`), scope isolation (`local`, `project`, `user`).
  - *Advanced:* Subagent model tiering (Haiku for search, Sonnet for code, Opus for architecture), progressive disclosure in skills, lifecycle composition.
- **Practical Exercises:**
  - Lab 7: Connecting and testing GitHub MCP tool calling.
  - Lab 8: Writing `.claude/agents/code-reviewer.md` with read-only tool restrictions.
  - Lab 9: Headless commit message generation and JSON pipeline scripting.
  - Lab 10: Creating an auto-activating API error handling skill and plugin marketplace installation.
  - Lab 11: Capstone orchestrating exploration, planning, subagent review, and automated release note generation.
- **Teaching Patterns:** Hands-on drill cards, comparative tables, anti-pattern callouts, end-to-end workflow synthesis.
- **Quality Score:** Clarity: 9/10 | Depth: 8/10 | Engagement: 9/10 | Practicality: 9/10 (Overall: **9/10**)
- **Findings:** High practical utility. The primary gap is building custom MCP servers from scratch in Python and TypeScript.

---

# PART 2: Comprehensive Gap Analysis

The following 20 areas represent critical practical capabilities required for professional agentic engineering:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        COMPREHENSIVE GAP IDENTIFICATION MATRIX                         │
├──────────────────────────────┬─────────────────────────────┬───────────────────────────┤
│ BASELINE COVERAGE            │ CRITICAL ADDITIONS          │ CURRICULUM LEVEL          │
├──────────────────────────────┼─────────────────────────────┼───────────────────────────┤
│ • Basic CLI commands         │ • Custom MCP Server Coding  │ Advanced / Expert         │
│ • Local Subagents            │ • Multi-Agent Swarms        │ Advanced / Expert         │
│ • Single-repo exploration    │ • Monorepos & Large Codebase│ Intermediate              │
│ • Basic Headless -p          │ • Complete GitHub Actions   │ Advanced / Expert         │
│ • Illustrative SDK snippets  │ • Full Python/TS Agent SDK  │ Expert                    │
│ • Passive Context Management │ • Active Memory & Caching   │ Intermediate              │
│ • Manual Review Process      │ • Automated Eval Frameworks │ Expert                    │
└──────────────────────────────┴─────────────────────────────┴───────────────────────────┘
```

---

## 20 Critical Missing Topics & Curriculum Placements

1. **Building Custom MCP Servers (stdio & SSE)**
   - *Why It Matters:* Connects Claude to proprietary internal APIs, databases, and microservices.
   - *Placement:* Week 5: Module 5 (MCP Server Engineering) · *Duration:* 4.5 Hours

2. **Deep Context Engineering & Prompt Caching**
   - *Why It Matters:* Maximizes cache hit rates, saving 70%+ of API token costs on multi-turn sessions.
   - *Placement:* Week 2: Module 2 (Context Engineering & Token Economics) · *Duration:* 3.0 Hours

3. **Full-Scale Claude Agent SDK Applications**
   - *Why It Matters:* Enables developers to embed Claude's agent loop directly into custom SaaS and internal tools.
   - *Placement:* Week 7: Module 7 (Autonomous CI/CD & Agent SDK) · *Duration:* 6.0 Hours

4. **Multi-Agent Swarm Architectures & Consensus**
   - *Why It Matters:* Coordinates supervisor-worker pipelines for large refactoring tasks.
   - *Placement:* Week 6: Module 6 (Subagents & Parallel Swarms) · *Duration:* 4.5 Hours

5. **Production CI/CD Automation & GitHub Action Bots**
   - *Why It Matters:* Deploys autonomous PR review and auto-bugfixing bots in production pipelines.
   - *Placement:* Week 7: Module 7 (Autonomous CI/CD & GitHub Actions) · *Duration:* 4.0 Hours

6. **IDE Co-Existence (Cursor, VS Code, JetBrains)**
   - *Why It Matters:* Teaches developers to pair terminal Claude Code with their primary editor for maximum speed.
   - *Placement:* Week 1: Module 1 (Foundations & Setup) · *Duration:* 2.5 Hours

7. **Large Monorepo Navigation & Code Graphs**
   - *Why It Matters:* Teaches AST and symbol-based navigation in 1,000,000+ line repositories.
   - *Placement:* Week 3: Module 3 (Commands, Output Styles & Hooks) · *Duration:* 3.5 Hours

8. **Enterprise Security, Managed Settings & DLP**
   - *Why It Matters:* Enables security teams to deploy organization-wide allow/ask/deny policies.
   - *Placement:* Week 8: Module 8 (Enterprise Governance & FinOps) · *Duration:* 3.5 Hours

9. **Multi-Cloud Provider Routing (AWS Bedrock / GCP Vertex AI)**
   - *Why It Matters:* Regulated organizations deploy Claude Code via existing cloud IAM roles.
   - *Placement:* Week 7: Module 7 (Multi-Cloud Enterprise Deployment) · *Duration:* 3.0 Hours

10. **Automated Agent Evals & Regression Testing**
    - *Why It Matters:* Quantitatively benchmarks skills and system prompts against test datasets.
    - *Placement:* Week 8: Module 8 (Agent Evals & Regression Testing) · *Duration:* 3.5 Hours

11. **Claude Code on the Web (`claude.ai/code`) Cloud Sandboxing**
    - *Why It Matters:* Dispatches asynchronous background refactoring tasks to hosted cloud sandboxes.
    - *Placement:* Week 6: Module 6 (Cloud Sandboxes & Web Teleportation) · *Duration:* 2.5 Hours

12. **Persistent Memory & Squad Knowledge Bases**
    - *Why It Matters:* Keeps architectural decisions synchronized across squad checkouts.
    - *Placement:* Week 2: Module 2 (Memory Architecture & Squad Sharing) · *Duration:* 2.5 Hours

13. **Rich JSON Hook Decisions & Slack Webhooks**
    - *Why It Matters:* Integrates hook pipelines with corporate security alerting and ticketing.
    - *Placement:* Week 3: Module 3 (Advanced Hook Systems & Auditing) · *Duration:* 3.5 Hours

14. **Test-Driven Development (TDD) & Mutation Testing**
    - *Why It Matters:* Achieves high accuracy through strict Red-Green-Refactor cycles.
    - *Placement:* Week 3: Module 3 (Test-Driven Agentic Engineering) · *Duration:* 3.0 Hours

15. **Custom Output Styles & Developer Personas**
    - *Why It Matters:* Adapts response communication density for different engineering roles.
    - *Placement:* Week 2: Module 2 (Personas & Custom Output Styles) · *Duration:* 2.0 Hours

16. **Git Worktree Fleets & Concurrent Local Sessions**
    - *Why It Matters:* Enables running 3 to 5 simultaneous Claude Code sessions without file collisions.
    - *Placement:* Week 6: Module 6 (Concurrent Worktree Engineering) · *Duration:* 2.5 Hours

17. **Security Auditing & OWASP SAST Bot Workflows**
    - *Why It Matters:* Employs Claude Code to actively detect and remediate security vulnerabilities.
    - *Placement:* Week 6: Module 6 (Security Auditing & Remediation) · *Duration:* 3.5 Hours

18. **Token Economics, FinOps & Quota Attribution**
    - *Why It Matters:* Tracks and forecasts token spend and cache ROI across developer teams.
    - *Placement:* Week 8: Module 8 (AI FinOps & Quota Governance) · *Duration:* 2.5 Hours

19. **Authoring & Publishing Marketplace Plugins**
    - *Why It Matters:* Packages and distributes verified plugin bundles across organizations.
    - *Placement:* Week 4: Module 4 (Plugin Authoring & Distribution) · *Duration:* 3.5 Hours

20. **Production AI Engineering Portfolio Defense**
    - *Why It Matters:* Evaluates students against a 100-point rubric for production readiness.
    - *Placement:* Week 8: Module 8 (Portfolio Defense & Career Launch) · *Duration:* 5.0 Hours
