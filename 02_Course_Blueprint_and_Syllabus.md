# Phase 3, 4 & 5: Claude Course V2 Blueprint, Syllabus & Tracks

**Program Title:** Claude Code Mastery: Zero to Production AI Engineer  
**Standard Duration:** 60 Days (8 Weeks · 120 Total Learning & Lab Hours)  
**Credential:** Certified Claude Code & Agent Systems Architect (CC-ASA)

---

# PART 1: Course Brand, Promise & Duration Architecture

## 1. 10 Premium Flagship Program Names

1. **Claude Code Mastery: Zero to Production AI Engineer** *(Recommended Flagship Title)*
2. **Anthropic Claude Code Architect: Enterprise Agentic Systems**
3. **The Complete Claude Engineering Fellowship: CLI, SDK & Multi-Agent Swarms**
4. **Claude Code for High-Velocity Software Engineers & Tech Leaders**
5. **Production AI with Claude: From Terminal Prompts to Autonomous Systems**
6. **Full-Stack Claude Code: MCP, Hooks, Subagents & Custom SDK Harnesses**
7. **Claude Code Immersion: The Enterprise AI Developer Bootcamp**
8. **Autonomous Software Engineering with Claude Code & Agent SDK**
9. **Claude Developer Masterclass: Context, Code & Cloud Sandboxes**
10. **The Claude Code Certification Program: Building Production AI Workflows**

---

## 2. Master Course Promise

> **"Transform from an AI-curious developer into a world-class AI Software Engineer capable of building, securing, automating, and deploying production-grade agentic systems, custom MCP servers, and enterprise CI/CD pipelines using Claude Code and the Agent SDK."**

---

## 3. Course Length Recommendation & Architectural Justification

### Comparative Duration Analysis

| Duration | Coverage Scope | Target Audience Fit | Project Depth | Certification Rigor | Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **30 Days (Fast-Track)** | CLI commands, basic hooks, simple subagents | Junior developers, non-coders | 1 Toy Capstone | Associate only | Too compressed for custom MCP & SDK coding |
| **45 Days (Standard)** | CLI, intermediate MCP, basic CI/CD | Professional developers | 2 Mid-level Capstones | Professional | Good, but rushes enterprise multi-agent swarms |
| **60 Days (Flagship)** | Full CLI, Custom MCP, Agent SDK, Swarms, Cloud Sandboxes, Evals, CI/CD | All tiers (Beginners to Architects) | **4 Tiered Capstones + Portfolio Defense** | **Full Enterprise Architect** | ⭐ **OPTIMAL CHOICE (Selected)** |
| **90 Days (Extended)** | Enterprise governance, deep custom compiler hooks | Corporate enterprise cohorts | Multi-quarter deployments | Master Fellow | High drop-off risk for self-paced learners |

### Why 60 Days is the Optimal Choice:
1. **Cognitive Load Distribution:** Allows 2 weeks for core CLI mastery and context engineering, 2 weeks for MCP and custom extension coding, 2 weeks for Agent SDK and multi-agent systems, and 2 weeks for enterprise CI/CD, governance, and full capstone portfolio defense.
2. **True Production Competence:** 30 days only teaches *using* Claude Code; 60 days teaches *extending and building on top of* Claude Code (custom MCP servers in Python/TS, custom Agent SDK harnesses, and GitHub Actions bots).
3. **Portfolio Quality:** Students graduate with 4 public, production-grade repositories and a verified capstone evaluated against industry rubrics.

---

# PART 2: 4-Tier Progressive Skill Tracks (Phase 5)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              4-TIER SKILL PROGRESSION                                  │
├───────────────────┬───────────────────┬──────────────────────┬─────────────────────────┤
│ TIER 1: BEGINNER  │ TIER 2: INTERMEDIATE│ TIER 3: ADVANCED    │ TIER 4: EXPERT          │
│ (Days 1–15)       │ (Days 16–30)      │ (Days 31–45)         │ (Days 46–60)            │
├───────────────────┼───────────────────┼──────────────────────┼─────────────────────────┤
│ • Terminal Setup  │ • Token Economics │ • Custom MCP Servers │ • Multi-Agent Swarms    │
│ • Doctor & Auth   │ • Cache Mechanics │ • stdio & HTTP/SSE   │ • Agent SDK in Prod     │
│ • Read-Only Study │ • .claude/commands│ • Subagent Pipelines │ • Cloud Sandboxes (Web) │
│ • Plan-Code-Verify│ • Bash & JSON Hook│ • Model Tiering      │ • Autonomous CI/CD Bots │
│ • CLAUDE.md Rules │ • Memory Systems  │ • Monorepo Indexing  │ • Evals, FinOps & Gov   │
│ • Permission Modes│ • Output Styles   │ • TDD & Mutation QA  │ • Portfolio Defense     │
└───────────────────┴───────────────────┴──────────────────────┴─────────────────────────┘
```

---

# PART 3: Complete 8-Week (60-Day) Module Syllabus (Phase 4)

## Module 1: Foundations, Workstation Setup & The Read-Only Explorer (Days 1–7)
*Focus: Environment health, developer ergonomics, navigation without editing, and the core 5-step feedback loop.*

- **Day 1: Welcome & Environment Hardening**
  - *Outcomes:* Install Claude Code, Node.js 20+, Git, ripgrep; configure shell completions, run `claude doctor`.
  - *Lab:* Lab 1 – Terminal Hardening & Diagnostic Verification.
  - *Assignment:* Run diagnostics on 3 operating systems/terminals; submit clean doctor report.
  - *Quiz:* CLI setup flags, PATH resolution, and diagnostic exit codes.
- **Day 2: The Agentic Loop Mental Model**
  - *Outcomes:* Understand the 5-step loop: Task → Explore → Plan → Code/Verify → Report.
  - *Lab:* Lab 2 – Passive Codebase Deconstruction.
  - *Assignment:* Deconstruct a 5,000-line open-source repo into an architectural flowchart without editing code.
  - *Quiz:* Agent loop state transitions and token mechanics.
- **Day 3: Plan Mode vs Default Mode**
  - *Outcomes:* Master `Shift+Tab` permission cycling; enforce zero-write exploration in Plan Mode.
  - *Lab:* Lab 3 – Zero-Risk Feature Planning in Plan Mode.
  - *Assignment:* Create an atomic 6-step implementation plan for a bugfix in an unfamiliar repo.
  - *Quiz:* Permission mode boundaries and ask/allow/deny hierarchy.
- **Day 4: Authoring High-Impact `CLAUDE.md`**
  - *Outcomes:* Generate, edit, and prune project steering instructions; write enforceable "Do Not" rules.
  - *Lab:* Lab 4 – Steering Manual Creation & Negative Constraint Drills.
  - *Assignment:* Author a 45-line production `CLAUDE.md` for a full-stack Next.js/PostgreSQL application.
  - *Quiz:* Instruction hierarchy, token overhead of project rules, and precedence.
- **Day 5: The Atomic Engineering Loop**
  - *Outcomes:* Perform surgical edits; inspect git diffs natively (`!git diff`) before accepting changes.
  - *Lab:* Lab 5 – The Single-Field Validation Loop.
  - *Assignment:* Implement 3 atomic bugfixes, validating every change with isolated test runs.
  - *Quiz:* Diff evaluation standards and avoiding scope creep.
- **Day 6: Keyboard Accelerators & Fast Interrupts**
  - *Outcomes:* Master `Esc` (interrupt), `Esc Esc` (rewind/rewrite), `Up Arrow` (history), and `!` shell shortcuts.
  - *Lab:* Lab 6 – Fast Interrupts & Checkpoint Rewind Drills.
  - *Assignment:* Simulate a runaway agent loop and successfully recover state via rewind in under 15 seconds.
  - *Quiz:* Difference between interrupt, rewind, and abort.
- **Day 7: Weekly Milestone Review & Beginner Capstone 1**
  - *Deliverable:* Complete **Capstone B1 (Legacy CLI Tool Modernizer)**.

---

## Module 2: Context Engineering, Token Economics & Memory (Days 8–15)
*Focus: Mastering prompt caching, KV cache breakpoints, context gauges, `/compact`, and squad memory.*

- **Day 8: The Anatomy of Context & Token Ceilings**
  - *Outcomes:* Deconstruct context composition: system prompts, schemas, conversation history, pinned files.
  - *Lab:* Lab 7 – Real-Time Context Inspection with `/context`.
  - *Assignment:* Profile context growth across a 20-turn session and identify token spikes.
  - *Quiz:* Context window limits, ITPM/OTPM ceilings, and truncation behavior.
- **Day 9: Prompt Caching Mechanics & Cost Optimization**
  - *Outcomes:* Understand KV cache prefix matching, ephemeral 5-minute cache TTLs, and cache-friendly prompt ordering.
  - *Lab:* Lab 8 – Cache Hit Maximization & Cost Benchmarking.
  - *Assignment:* Restructure a prompt workflow to increase prompt cache hit rates from 20% to 85%.
  - *Quiz:* Prompt caching price formulas and cache invalidation causes.
- **Day 10: Surgical File Pinning with `@` vs Global Search**
  - *Outcomes:* Prevent expensive workspace-wide search scans; pin specific file ranges and symbols.
  - *Lab:* Lab 9 – Surgical `@` Pinning vs Globbing Performance Comparison.
  - *Assignment:* Complete 5 codebase tasks comparing token usage of `@path/to/file` vs natural language queries.
  - *Quiz:* Context injection costs of `@` vs Ripgrep/Grep tools.
- **Day 11: Mid-Task Compaction & In-Place Summarization**
  - *Outcomes:* Execute `/compact` at logical boundaries; understand summary loss vs token reclamation.
  - *Lab:* Lab 10 – Deep Compaction Drills on Long Refactors.
  - *Assignment:* Conduct a 40-turn refactor session, compacting at 3 milestone points with zero loss of task context.
  - *Quiz:* Compact algorithm internals and preservation of uncommitted diff context.
- **Day 12: Context Reset Hygiene with `/clear`**
  - *Outcomes:* Establish strict single-task session boundaries; prevent cross-task hallucinations.
  - *Lab:* Lab 11 – Context Contamination Testing & Session Segregation.
  - *Assignment:* Run back-to-back conflicting feature tasks with and without `/clear` to document hallucination rates.
  - *Quiz:* When to `/clear` vs when to `/compact`.
- **Day 13: Persistent Memory Systems (`.claude/memory/`)**
  - *Outcomes:* Configure local and shared memory stores; store architectural decisions across sessions.
  - *Lab:* Lab 12 – Squad Architecture Memory Setup.
  - *Assignment:* Initialize and test team-shared memory that persists coding conventions across new team checkouts.
  - *Quiz:* Global `~/.claude/memory` vs project `.claude/memory` resolution rules.
- **Day 14: Extended Thinking Budgets & Effort Scaling**
  - *Outcomes:* Configure `MAX_THINKING_TOKENS`, `/effort low|medium|high`, and model selection (`/model haiku|sonnet|opus`).
  - *Lab:* Lab 13 – Thinking Token Tuning for Speed vs Reasoning.
  - *Assignment:* Benchmark reasoning accuracy vs token spend across 10 complex algorithmic problems.
  - *Quiz:* Thinking budget flags, temperature constraints, and cost trade-offs.
- **Day 15: Weekly Milestone Review & Beginner Capstone 2**
  - *Deliverable:* Complete **Capstone B2 (Token-Optimized Monorepo Auditing Bot)**.

---

## Module 3: Custom Slash Commands, Output Styles & Deterministic Hooks (Days 16–23)
*Focus: Automating repeatable routines, role-based persona shaping, and hard security guardrails.*

- **Day 16: Custom Slash Command Architecture**
  - *Outcomes:* Author `.claude/commands/<name>.md` with YAML frontmatter, tool restrictions, and prompt templates.
  - *Lab:* Lab 14 – Building Reusable `/pr-ready` and `/code-audit` Commands.
  - *Assignment:* Build a suite of 3 custom slash commands for database migration reviews.
  - *Quiz:* Frontmatter options: `allowed-tools`, `description`, `$ARGUMENTS` interpolation.
- **Day 17: Parameterized Slash Commands with Dynamic Inputs**
  - *Outcomes:* Pass complex arguments, file paths, and issue IDs into slash commands.
  - *Lab:* Lab 15 – Dynamic Command Pipeline with `$ARGUMENTS` & Issue Fetching.
  - *Assignment:* Create `/fix-ticket <id>` that fetches a bug description and prepares a test plan.
  - *Quiz:* Argument escaping and error handling inside custom commands.
- **Day 18: Output Styles & Dynamic Developer Personas**
  - *Outcomes:* Build custom output personas (Exploratory, Strict QA Lead, Security Auditor) via `/output-style:new`.
  - *Lab:* Lab 16 – Persona Crafting & Output Density Control.
  - *Assignment:* Create a "Staff Security Engineer" output style that mandates CVE checks on every suggestion.
  - *Quiz:* Output style storage locations and project-level inheritance.
- **Day 19: The 31 Hook Lifecycle Events & Cadences**
  - *Outcomes:* Master session-level (`SessionStart`), turn-level (`UserPromptSubmit`), and tool-level (`PreToolUse`, `PostToolUse`) events.
  - *Lab:* Lab 17 – Hook Event Mapping & Event Logging.
  - *Assignment:* Construct an append-only audit log hook capturing every tool call and file edit in real time.
  - *Quiz:* The 3 cadences, event execution order, and error handling.
- **Day 20: Security Enforcement with `PreToolUse` Hooks**
  - *Outcomes:* Block sensitive secret access (`.env`, `*.pem`, `id_rsa`) and destructive shell commands (`rm -rf`) deterministically.
  - *Lab:* Lab 18 – Bulletproof Secret Guardrail Hook (POSIX & PowerShell).
  - *Assignment:* Write a cross-platform hook that blocks git pushes to `main` and prevents reading production secrets.
  - *Quiz:* Exit codes (`0` vs `2`), stderr messaging, and bypassing limitations.
- **Day 21: Automated Post-Processing with `PostToolUse` Hooks**
  - *Outcomes:* Trigger automatic code formatters (Prettier, Black, Rustfmt) and linter checks immediately after file edits.
  - *Lab:* Lab 19 – Format-on-Write & Instant Lint Feedback Pipeline.
  - *Assignment:* Build an automated format-and-typecheck hook that auto-repairs TypeScript syntax errors.
  - *Quiz:* `PostToolUse` environment variables (`$FILE`, `$TOOL_NAME`, `$STATUS`).
- **Day 22: Rich JSON Hook Decision Protocol & Webhook Handlers**
  - *Outcomes:* Implement JSON-based decisions (`allow`, `deny`, `ask`) and HTTP webhook integrations (Slack alerts).
  - *Lab:* Lab 20 – JSON Decision Protocol & Real-Time Slack Alerting Hook.
  - *Assignment:* Author a Python HTTP hook that notifies security ops on high-risk shell command executions.
  - *Quiz:* JSON schema for hook responses and timeout thresholds.
- **Day 23: Weekly Milestone Review & Intermediate Capstone 1**
  - *Deliverable:* Complete **Capstone I1 (Enterprise Deterministic Hook & Compliance Suite)**.

---

## Module 4: Agent Skills, Plugins & Marketplaces (Days 24–30)
*Focus: Auto-activating capabilities, progressive disclosure, plugin packaging, and distribution.*

- **Day 24: The Agent Skills Specification**
  - *Outcomes:* Understand skill structure: `SKILL.md`, YAML frontmatter, progressive disclosure, and auto-activation triggers.
  - *Lab:* Lab 21 – Authoring Auto-Activating API Design Skills.
  - *Assignment:* Build a skill that automatically enforces OpenAPI 3.1 standards whenever API routes are modified.
  - *Quiz:* Skill discovery mechanisms, description matching algorithms, and token loading efficiency.
- **Day 25: Progressive Disclosure & Multi-File Skill Architecture**
  - *Outcomes:* Structure complex skills with subdirectories (`scripts/`, `examples/`, `references/`) loaded on demand.
  - *Lab:* Lab 22 – Multi-Tiered Database Migration Skill with Helper Scripts.
  - *Assignment:* Create a database optimization skill that executes local schema profiling scripts on command.
  - *Quiz:* Progressive loading vs monolithic prompts in skills.
- **Day 26: Skill Validation & Linting (`skill-check`)**
  - *Outcomes:* Audit and validate custom skills against the agent skills specification to avoid structural errors.
  - *Lab:* Lab 23 – Skill Validation & Automated Linting.
  - *Assignment:* Run automated validation on a library of 10 custom skills and fix metadata warnings.
  - *Quiz:* Mandatory fields, description word count limits, and risk classifications.
- **Day 27: Installing & Auditing Marketplace Plugins**
  - *Outcomes:* Discover, install, and audit third-party plugins (`/plugin install`); inspect safety and permissions.
  - *Lab:* Lab 24 – Plugin Security Auditing & Sandboxed Execution.
  - *Assignment:* Audit 3 community plugins, evaluating their hooks, commands, and potential security vulnerabilities.
  - *Quiz:* Plugin directory layouts, permission elevation risks, and uninstallation procedures.
- **Day 28: Authoring and Packaging Custom Plugins**
  - *Outcomes:* Bundle commands, skills, subagents, and hooks into a unified, version-controlled plugin package.
  - *Lab:* Lab 25 – Complete Full-Stack Plugin Packaging.
  - *Assignment:* Package a "Next.js Security & Performance Suite" plugin containing 2 skills, 2 commands, and 1 hook.
  - *Quiz:* Plugin manifest specifications and dependency management.
- **Day 29: Plugin Publishing & Enterprise Distribution**
  - *Outcomes:* Set up private organizational plugin marketplaces and distribute approved plugins across developer teams.
  - *Lab:* Lab 26 – Private Team Marketplace Setup on GitHub.
  - *Assignment:* Deploy a private plugin registry on GitHub and configure team auto-sync in `.claude/settings.json`.
  - *Quiz:* Managed settings plugin distribution and version pinning.
- **Day 30: Weekly Milestone Review & Intermediate Capstone 2**
  - *Deliverable:* Complete **Capstone I2 (Production Full-Stack DevSecOps Plugin Suite)**.

---

## Module 5: Model Context Protocol (MCP) – Client Integration & Custom Server Engineering (Days 31–38)
*Focus: Protocol architecture, mounting tools/resources, building stdio & HTTP/SSE servers from scratch in Python/TS.*

- **Day 31: Model Context Protocol (MCP) Architecture**
  - *Outcomes:* Master the 3 MCP primitives: Tools (actions), Resources (data feeds), and Prompts (templates); stdio vs HTTP/SSE.
  - *Lab:* Lab 27 – MCP Transport Profiling & Context Impact Analysis.
  - *Assignment:* Analyze token overhead across 5 active MCP servers and create an automated connection/disconnection strategy.
  - *Quiz:* MCP lifecycle, JSON-RPC 2.0 message frames, and scope inheritance.
- **Day 32: Client Integration & Scoping Rules**
  - *Outcomes:* Manage servers via `claude mcp add/list/remove`; configure `.mcp.json` for team sharing.
  - *Lab:* Lab 28 – Multi-Server Enterprise Tool Orchestration.
  - *Assignment:* Configure a team-shared `.mcp.json` with GitHub, PostgreSQL, and AWS servers using narrow scoping.
  - *Quiz:* `local` vs `project` vs `user` MCP scopes and security isolation.
- **Day 33: Building a Python MCP Server from Scratch (stdio)**
  - *Outcomes:* Implement a custom Python MCP server using the `mcp` library, exposing custom database queries and system tools.
  - *Lab:* Lab 29 – Building an Internal Database Inspector MCP Server (Python).
  - *Assignment:* Build and test a Python MCP server that exposes read-only SQL queries and schema explanations.
  - *Quiz:* FastMCP decorator syntax, type schema generation, and error propagation.
- **Day 34: Building a TypeScript MCP Server from Scratch (stdio)**
  - *Outcomes:* Build a high-performance TypeScript MCP server with `@modelcontextprotocol/sdk` and Zod input validation.
  - *Lab:* Lab 30 – Building a Cloud Infrastructure Monitor MCP Server (TypeScript).
  - *Assignment:* Author a TypeScript MCP server that fetches live metrics from AWS CloudWatch / Datadog.
  - *Quiz:* Zod schema validation in MCP tools and async request handling.
- **Day 35: MCP Dynamic Resources & Structured Data Feeds**
  - *Outcomes:* Expose dynamic URI resources (`db://tables/{name}`, `logs://recent`) for live context ingestion.
  - *Lab:* Lab 31 – Exposing Live Application Logs via MCP Resources.
  - *Assignment:* Implement an MCP resource server that provides real-time access to application error logs.
  - *Quiz:* Resource templates, MIME types, and streaming resource updates.
- **Day 36: Remote MCP Servers over HTTP/SSE & Authentication**
  - *Outcomes:* Deploy and connect remote MCP servers running on cloud infrastructure using Server-Sent Events (SSE) and OAuth/Bearer auth.
  - *Lab:* Lab 32 – Connecting Secure Cloud-Hosted MCP Endpoints.
  - *Assignment:* Deploy a remote FastAPI MCP server to Fly.io/Render with JWT authentication and connect it to Claude Code.
  - *Quiz:* SSE transport handshake, bearer token management, and `/mcp login`.
- **Day 37: MCP Elicitation & Interactive Tool Workflows**
  - *Outcomes:* Build MCP tools that request user confirmation or interactive inputs before performing sensitive operations.
  - *Lab:* Lab 33 – Interactive Elicitation for Production Database Migrations.
  - *Assignment:* Create an MCP tool that requests structured approval parameters before running schema migrations.
  - *Quiz:* Elicitation schemas, timeout boundaries, and fallback actions.
- **Day 38: Weekly Milestone Review & Advanced Capstone 1**
  - *Deliverable:* Complete **Capstone A1 (Enterprise Internal Developer Platform MCP Server)**.

---

## Module 6: Subagents, Parallel Swarms & Concurrent Worktrees (Days 39–45)
*Focus: Context isolation, read-only reviewers, parallel swarms, model tiering, and git worktrees.*

- **Day 39: Subagent Architecture & Context Isolation Mechanics**
  - *Outcomes:* Create `.claude/agents/<name>.md`; understand why subagents keep main sessions lean by discarding verbose exploration.
  - *Lab:* Lab 34 – Independent Security Auditor Subagent.
  - *Assignment:* Author a subagent that audits third-party npm/Python packages for known CVEs and malicious install scripts.
  - *Quiz:* Subagent context boundaries, parent-child result return schemas, and tool scoping.
- **Day 40: Model Tiering & Cost-Optimized Subagent Routing**
  - *Outcomes:* Route low-complexity search/audit tasks to Haiku while preserving Sonnet/Opus for core implementation.
  - *Lab:* Lab 35 – Multi-Model Tiered Exploration Pipeline.
  - *Assignment:* Build a two-stage subagent pipeline: Haiku indexes repository files; Opus writes the refactoring blueprint.
  - *Quiz:* Model selection syntax inside subagent frontmatter and token cost metrics.
- **Day 41: Parallel Subagent Swarms & Multi-Domain Audits**
  - *Outcomes:* Run concurrent subagents (e.g., Frontend Specialist + Backend Specialist + Security Lead) simultaneously.
  - *Lab:* Lab 36 – Parallel 3-Agent Pull Request Review Swarm.
  - *Assignment:* Execute a parallel 3-agent audit on a full-stack pull request and synthesize a unified blocker report.
  - *Quiz:* Concurrency limits, race condition avoidance, and rate-limit backoff.
- **Day 42: Supervisor-Worker Hierarchical Architectures**
  - *Outcomes:* Architect supervisor agents that decompose complex specifications into independent worker subagent tasks.
  - *Lab:* Lab 37 – Hierarchical Codebase Refactoring Coordinator.
  - *Assignment:* Build a supervisor agent that delegates database, API, and UI modernization to separate worker agents.
  - *Quiz:* Task decomposition heuristics, failure recovery, and consensus validation.
- **Day 43: Concurrent Local Development with Git Worktrees**
  - *Outcomes:* Spin up multiple isolated worktrees (`git worktree add`) to run 3+ parallel Claude sessions on one repo without file collisions.
  - *Lab:* Lab 38 – Multi-Worktree Concurrent Feature Engineering.
  - *Assignment:* Implement 2 independent features simultaneously across 2 worktrees using separate Claude Code sessions.
  - *Quiz:* Git worktree branch isolation, shared `.git` history, and safe cleanup commands.
- **Day 44: Claude Code on the Web (`claude.ai/code`) & Session Teleportation**
  - *Outcomes:* Dispatch asynchronous tasks to hosted cloud sandboxes using `&`; teleport sessions between web and terminal.
  - *Lab:* Lab 39 – Cloud Sandbox Task Dispatch & Session Teleportation.
  - *Assignment:* Dispatch a long-running test migration task to Claude Code on the web, inspect progress, and teleport it locally.
  - *Quiz:* Cloud sandbox isolation, GitHub app permissions, and session serialization mechanics.
- **Day 45: Weekly Milestone Review & Advanced Capstone 2**
  - *Deliverable:* Complete **Capstone A2 (Autonomous Multi-Agent Refactoring & Modernization Engine)**.

---

## Module 7: Autonomous CI/CD, GitHub Actions & The Claude Agent SDK (Days 46–53)
*Focus: Headless automation, GitHub Action bots, Python & TypeScript Agent SDK, custom agent harnesses.*

- **Day 46: Headless Automation Masterclass (`claude -p`)**
  - *Outcomes:* Drive Claude Code headlessly in shell scripts; parse structured JSON outputs with `jq`.
  - *Lab:* Lab 40 – Automated Release Notes & Changelog Scripting.
  - *Assignment:* Write a bash pipeline that generates semantic release notes and creates GitHub releases automatically.
  - *Quiz:* `-p` flag nuances, stdout vs stderr separation, and `--output-format json` schema.
- **Day 47: Autonomous GitHub Actions PR Review Bot**
  - *Outcomes:* Build a complete `.github/workflows/review.yml` that comments on PRs, checks for bugs, and flags security issues.
  - *Lab:* Lab 41 – Deploying an Autonomous PR Review Action.
  - *Assignment:* Deploy a production GitHub Action that conducts automated code reviews on all incoming pull requests.
  - *Quiz:* GitHub Action token permissions, rate limit caching, and PR diff piping.
- **Day 48: Autonomous Issue-to-PR Bugfixing Bot**
  - *Outcomes:* Build a GitHub Action triggered by `@claude fix` issue comments that checks out code, writes tests, fixes bugs, and opens a PR.
  - *Lab:* Lab 42 – Autonomous Issue-to-PR Auto-Fixing Pipeline.
  - *Assignment:* Create an end-to-end workflow where tagging an issue with `bug` automatically generates a verified pull request.
  - *Quiz:* Headless permission hardening, `PreToolUse` security in CI, and automated branch creation.
- **Day 49: The Claude Agent SDK Fundamentals (Python & TypeScript)**
  - *Outcomes:* Master the Agent SDK architecture; run the core `query()` loop inside custom Python/TypeScript applications.
  - *Lab:* Lab 43 – First Agent SDK Application (Python & TypeScript).
  - *Assignment:* Build a CLI assistant using the Agent SDK that performs automated database schema analysis.
  - *Quiz:* Agent SDK vs Client SDK vs Managed Agents comparison and runtime environments.
- **Day 50: Custom Tools & Tool Handlers in Agent SDK**
  - *Outcomes:* Register custom business logic tools and external API handlers directly into the Agent SDK runtime.
  - *Lab:* Lab 44 – Building an Agent SDK IT Support Triage System.
  - *Assignment:* Author an Agent SDK bot equipped with custom Jira and PagerDuty integration tools.
  - *Quiz:* Tool definition schemas, argument validation, and return payload structure.
- **Day 51: Human-in-the-Loop Approval Callbacks in SDK**
  - *Outcomes:* Implement `canUseTool` approval callbacks and `permissionDecision: "defer"` for interactive web/chat UIs.
  - *Lab:* Lab 45 – Web-Based Interactive Approval Dashboard for Agent SDK.
  - *Assignment:* Build a Next.js web application that displays live agent actions and prompts the user for approval on sensitive operations.
  - *Quiz:* Deferral state serialization, resume tokens, and webhook polling.
- **Day 52: Enterprise Multi-Cloud Routing (AWS Bedrock & Google Cloud Vertex AI)**
  - *Outcomes:* Route the Agent SDK through AWS Bedrock (IAM roles) and Google Cloud Vertex AI (Workload Identity).
  - *Lab:* Lab 46 – Enterprise AWS Bedrock & GCP Vertex SDK Deployment.
  - *Assignment:* Deploy an Agent SDK service on AWS ECS with Bedrock authentication and strict VPC security.
  - *Quiz:* Cloud provider authentication differences, IAM policy scopes, and regional endpoint latency.
- **Day 53: Weekly Milestone Review & Expert Capstone 1**
  - *Deliverable:* Complete **Capstone E1 (Autonomous Enterprise Code Health & Security Platform)**.

---

## Module 8: Enterprise Governance, Evals, FinOps & Capstone Defense (Days 54–60)
*Focus: Org-wide governance, managed settings, automated evals, token FinOps, and portfolio defense.*

- **Day 54: Enterprise Governance, Managed Settings & DLP**
  - *Outcomes:* Deploy enterprise-wide managed settings via MDM/Group Policy; configure organization-level deny rules and SSO auth.
  - *Lab:* Lab 47 – Enterprise Managed Settings & Data Loss Prevention Setup.
  - *Assignment:* Configure an enterprise policy repo that enforces zero-data-retention and blocks access to sensitive customer databases.
  - *Quiz:* Settings override rules, enterprise lockouts, and Analytics API integration.
- **Day 55: Automated Agent Evals & Regression Testing Harness**
  - *Outcomes:* Build an automated evaluation suite to benchmark skill accuracy, tool-calling precision, and prompt drift over time.
  - *Lab:* Lab 48 – Building an Automated Evals Suite for Custom Skills.
  - *Assignment:* Create an evals harness with 20 test cases verifying that custom skills achieve >90% success rate.
  - *Quiz:* Eval metrics (pass@1, tool precision, semantic drift), test datasets, and regression alerts.
- **Day 56: Token FinOps, Cost Forecasting & Quota Governance**
  - *Outcomes:* Build real-time token tracking dashboards; implement rate limit backoff and squad-level cost attribution.
  - *Lab:* Lab 49 – FinOps Token Attribution & Real-Time Cost Dashboard.
  - *Assignment:* Implement a Prometheus/Grafana dashboard tracking token consumption and cost across 10 engineering squads.
  - *Quiz:* FinOps cost modeling, extended thinking ROI, and quota allocation strategies.
- **Day 57: Building & Publishing a Commercial Claude Plugin**
  - *Outcomes:* Package, document, test, and publish a flagship plugin to the marketplace with automated CI/CD releases.
  - *Lab:* Lab 50 – Publishing a Production-Grade Plugin to the Marketplace.
  - *Assignment:* Publish a tested plugin with documentation, test suites, and GitHub Actions release workflows.
  - *Quiz:* Marketplace submission guidelines, semantic versioning, and open-source licensing.
- **Day 58: Capstone Project Final Sprint & Polish**
  - *Outcomes:* Finalize architectural documentation, complete end-to-end integration tests, and record walkthrough video demos.
  - *Deliverable:* Final code freeze for Expert Capstones E1–E5.
- **Day 59: Formal Portfolio Review & Capstone Defense**
  - *Outcomes:* Present and defend your primary Capstone architecture before an industry review panel (or simulated automated evaluator).
  - *Evaluation:* Scored against the 100-point Enterprise AI Engineering Rubric.
- **Day 60: Graduation, Certification Award & Career/Consulting Launch**
  - *Deliverable:* Award of **Certified Claude Code & Agent Systems Architect (CC-ASA)** credential.
  - *Action:* Onboarding into the Alumni AI Engineering Network, consulting proposal kit distribution, and hiring partner introductions.
