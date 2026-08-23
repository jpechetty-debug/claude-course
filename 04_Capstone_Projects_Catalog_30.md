# Phase 7: Complete Catalog of 30 Capstone Projects

**Program:** Claude Code Mastery: Zero to Production AI Engineer  
**Coverage:** 30 Comprehensive, Industry-Standard Capstone Projects across 4 Competency Tiers  
**Breakdown:** 5 Beginner · 10 Intermediate · 10 Advanced · 5 Expert

---

## Capstone Summary Index

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              30 CAPSTONE PROJECTS INDEX                                │
├──────────────┬───────────────┬─────────────────────────────────────────────────────────┤
│ TIER         │ IDENTIFIER    │ PROJECT TITLE                                           │
├──────────────┼───────────────┼─────────────────────────────────────────────────────────┤
│ **Beginner** │ **Proj B1**   │ Legacy CLI Tool Modernizer & Test Generator             │
│ (5 Projects) │ **Proj B2**   │ Full-Stack Documentation & API Specification Generator  │
│              │ **Proj B3**   │ Monorepo Code Smell & Technical Debt Auditor            │
│              │ **Proj B4**   │ Automated Git Commit & Release Note Pipeline            │
│              │ **Proj B5**   │ Config & Environment Drift Detector                     │
├──────────────┼───────────────┼─────────────────────────────────────────────────────────┤
│ **Interm.**  │ **Proj I1**   │ Enterprise Deterministic Hook & Compliance Suite        │
│ (10 Projects)│ **Proj I2**   │ Production Full-Stack DevSecOps Plugin Suite            │
│              │ **Proj I3**   │ Smart Database Migration & Index Optimization Assistant │
│              │ **Proj I4**   │ Autonomous Next.js / React Refactoring Engine           │
│              │ **Proj I5**   │ API Error Standardization & Telemetry Instrumenter      │
│              │ **Proj I6**   │ Automated OpenAPI 3.1 & SDK Generator Skill             │
│              │ **Proj I7**   │ Squad Architecture Memory & Knowledge Sharing System   │
│              │ **Proj I8**   │ Interactive PR Triage & Semantic Labeling Assistant     │
│              │ **Proj I9**   │ Context-Aware Microservice Scaffolder                   │
│              │ **Proj I10**  │ Test-Driven Development (TDD) Mutation Testing Harness  │
├──────────────┼───────────────┼─────────────────────────────────────────────────────────┤
│ **Advanced** │ **Proj A1**   │ Enterprise Internal Developer Platform MCP Server (TS)  │
│ (10 Projects)│ **Proj A2**   │ Cloud Infrastructure Health & FinOps MCP Server (Python)│
│              │ **Proj A3**   │ Multi-Agent Parallel Code Review Swarm                  │
│              │ **Proj A4**   │ Hierarchical Multi-Agent Monorepo Refactor Coordinator │
│              │ **Proj A5**   │ Remote HTTP/SSE MCP Gateway with OAuth2 Authentication  │
│              │ **Proj A6**   │ Real-Time Log Ingestion & Error Anomaly Detection MCP   │
│              │ **Proj A7**   │ Autonomous Multi-Branch Git Worktree Fleet Engine       │
│              │ **Proj A8**   │ Cloud Sandbox (`claude.ai/code`) Background Task Runner │
│              │ **Proj A9**   │ Autonomous Threat Modeling & OWASP SAST Remediation Bot │
│              │ **Proj A10**  │ Enterprise Plugin Marketplace & Auto-Sync Server       │
├──────────────┼───────────────┼─────────────────────────────────────────────────────────┤
│ **Expert**   │ **Proj E1**   │ Autonomous GitHub Actions PR Fix & Release Platform     │
│ (5 Projects) │ **Proj E2**   │ Full-Stack Agent SDK Application with Human-in-the-Loop │
│              │ **Proj E3**   │ Enterprise Multi-Cloud Agent Platform (Bedrock/Vertex)  │
│              │ **Proj E4**   │ Automated Agent Evals & Regression Testing Framework    │
│              │ **Proj E5**   │ Enterprise Claude Code FinOps & Telemetry Dashboard     │
└──────────────┴───────────────┴─────────────────────────────────────────────────────────┘
```

---

# SECTION 1: 5 Beginner Capstone Projects

---

### Project B1: Legacy CLI Tool Modernizer & Test Generator
- **Scope:** Modernize a legacy Python 2 / Node.js CommonJS utility to modern Python 3.12 / TypeScript ESM with 100% test coverage using Claude Code in Plan Mode.
- **Architecture:**
  ```text
  [Legacy Source Code] ──► [Claude Code Exploration] ──► [Plan Mode Blueprint]
                                                               │
  [Pass: 100% Coverage] ◄── [Automated Test Suite] ◄── [ESM / Type Annotations]
  ```
- **Features:**
  - Automated syntax modernization with ESM import/export conventions.
  - Comprehensive unit test suite with edge-case branch coverage.
  - Zero-change verification preserving identical CLI interface and exit codes.
- **Deliverables:** Modernized repository, comprehensive test suite, updated `CLAUDE.md`, and migration diff report.
- **Evaluation Rubric (100 pts):**
  - Modernization Quality & Type Safety: 30 pts
  - Test Suite Coverage (>95%): 30 pts
  - Preserved CLI Behavior: 20 pts
  - Plan Mode & Diff Discipline: 20 pts

---

### Project B2: Full-Stack Documentation & API Specification Generator
- **Scope:** Automatically analyze a 10,000-line full-stack web application and generate complete OpenAPI 3.1 specs, architecture diagrams, and onboarding guides.
- **Architecture:**
  ```text
  [Backend Routes & Models] ──► [Claude Headless (-p)] ──► [OpenAPI 3.1 Spec (YAML)]
  [Frontend Components]     ──► [Claude Headless (-p)] ──► [Mermaid Architecture Map]
  ```
- **Features:**
  - Extraction of all REST endpoints, request parameters, and response schemas.
  - Interactive Mermaid sequence diagrams showing authentication and data flows.
  - Complete `ARCHITECTURE.md` and developer onboarding playbook.
- **Deliverables:** `openapi.yaml`, `ARCHITECTURE.md`, `CONTRIBUTING.md`, and interactive documentation website.
- **Evaluation Rubric (100 pts):**
  - API Schema Accuracy: 35 pts
  - Architectural Flow Diagrams: 25 pts
  - Readme & Onboarding Clarity: 20 pts
  - Headless Extraction Scripting: 20 pts

---

### Project B3: Monorepo Code Smell & Technical Debt Auditor
- **Scope:** Build a headless auditing workflow that scans a multi-package repository for dead code, circular dependencies, and security antipatterns.
- **Architecture:**
  ```text
  [Monorepo Root] ──► [Claude -p "Audit Script"] ──► [JSON Smell Matrix]
                                                           │
  [Executive PDF Summary] ◄── [Severity Classifier] ◄──────┘
  ```
- **Features:**
  - AST-informed static analysis detecting unused exports and orphaned modules.
  - Circular dependency graph generation.
  - Structured Markdown/JSON debt report with prioritized refactoring tickets.
- **Deliverables:** Headless audit script, `TECH_DEBT_REPORT.md`, and automated GitHub issue backlog.
- **Evaluation Rubric (100 pts):**
  - Detection Accuracy: 35 pts
  - Remediation Actionability: 25 pts
  - JSON Output Parsing: 20 pts
  - Execution Speed & Cost: 20 pts

---

### Project B4: Automated Git Commit & Release Note Pipeline
- **Scope:** Create a terminal toolchain that analyzes uncommitted git diffs, writes Conventional Commits, and produces semantic release notes.
- **Architecture:**
  ```text
  [git diff HEAD] ──► [Unix Pipe] ──► [Claude -p Conventional Commit Engine]
                                              │
  [Changelog.md + GitHub Release] ◄───────────┘
  ```
- **Features:**
  - Automatic conventional commit messages (`feat:`, `fix:`, `refactor:`, `breaking:`).
  - Semantic version bump recommendation (Major/Minor/Patch).
  - Markdown changelog compilation grouped by business capability.
- **Deliverables:** Shell scripts (`git-claude-commit`, `git-claude-release`), `.claude/commands/`, and documentation.
- **Evaluation Rubric (100 pts):**
  - Commit Semantic Accuracy: 30 pts
  - Release Note Quality: 30 pts
  - Shell Integration & Ergonomics: 20 pts
  - Prompt Token Efficiency: 20 pts

---

### Project B5: Config & Environment Drift Detector
- **Scope:** Build an automated system that cross-references `.env.example`, Dockerfiles, Kubernetes manifests, and application configs to flag configuration drift.
- **Architecture:**
  ```text
  [.env.example] + [k8s.yaml] + [Docker] ──► [Claude Code Comparator]
                                                     │
  [Alert Matrix: Missing Keys / Default Secrets] ◄───┘
  ```
- **Features:**
  - Identification of missing environment variables and undeclared defaults.
  - Detection of hardcoded IP addresses, secrets, and insecure ports.
  - Auto-generation of synchronized `.env.template` files.
- **Deliverables:** Audit CLI utility, drift report matrix, and automated remediation command.
- **Evaluation Rubric (100 pts):**
  - Drift Detection Precision: 35 pts
  - Security Risk Flagging: 25 pts
  - Auto-Remediation Correctness: 20 pts
  - Documentation & Ease of Use: 20 pts

---

# SECTION 2: 10 Intermediate Capstone Projects

---

### Project I1: Enterprise Deterministic Hook & Compliance Suite
- **Scope:** Develop an enterprise-grade security and formatting hook package protecting developers against accidental secret commits, destructive commands, and unformatted code.
- **Architecture:**
  ```text
  [Developer Tool Call] ──► [PreToolUse Guard (Bash/PowerShell)]
                                     │
                 ┌───────────────────┴──────────────────┐
                 ▼                                      ▼
        [Safe: Exit Code 0]                   [Secret/Risky: Exit 2]
                 │                                      │
        [Tool Execution]                     [Tool Blocked + Slack Alert]
                 │
        [PostToolUse Formatter]
  ```
- **Features:**
  - `PreToolUse` regex-based secret blocker for `.env`, `.pem`, `.key`, and cloud tokens.
  - Cross-platform support (POSIX Bash and Windows PowerShell).
  - `PostToolUse` automatic code formatting (Prettier, Black, Rustfmt).
  - `Stop` hook emitting structured JSON audit telemetry.
- **Deliverables:** Complete `.claude/settings.json`, shell guard scripts, test suite, and audit documentation.
- **Evaluation Rubric (100 pts):**
  - Secret Interception Reliability: 30 pts
  - Cross-Platform Performance: 25 pts
  - Format-on-Write Seamlessness: 25 pts
  - Telemetry Logging Integrity: 20 pts

---

### Project I2: Production Full-Stack DevSecOps Plugin Suite
- **Scope:** Author, package, and test a complete full-stack Claude Code plugin combining custom skills, slash commands, subagents, and hooks.
- **Architecture:**
  ```text
  [Plugin Manifest: plugin.json]
         ├── [Commands: /audit-security, /deploy-check]
         ├── [Skills: api-validation, docker-optimization]
         ├── [Agents: code-reviewer, test-generator]
         └── [Hooks: block-secrets, auto-format]
  ```
- **Features:**
  - Unified plugin structure installable via `/plugin install`.
  - Auto-activating skills for Dockerfile and Kubernetes optimization.
  - Specialized read-only security reviewer subagent.
- **Deliverables:** Packaged plugin repository, automated install script, and end-to-end demonstration.
- **Evaluation Rubric (100 pts):**
  - Plugin Architecture & Spec Compliance: 30 pts
  - Component Quality (Skills, Commands, Hooks): 30 pts
  - Installation Simplicity: 20 pts
  - Documentation & Test Coverage: 20 pts

---

### Project I3: Smart Database Migration & Index Optimization Assistant
- **Scope:** Create a database performance and migration toolkit that analyzes schema definitions, suggests optimal indexing strategies, and drafts zero-downtime migration scripts.
- **Architecture:**
  ```text
  [Prisma/SQL Schema] ──► [Index Profiler Skill] ──► [Query Plan Analyzer]
                                                            │
  [Zero-Downtime SQL Migration (Expand/Contract)] ◄─────────┘
  ```
- **Features:**
  - Detection of missing foreign key indexes and unindexed filter predicates.
  - Generation of safe multi-stage migrations (Expand/Contract pattern).
  - Validation against PostgreSQL and MySQL performance best practices.
- **Deliverables:** Custom skill `.claude/skills/db-migrate/`, helper Python profiling scripts, and migration test suite.
- **Evaluation Rubric (100 pts):**
  - Indexing Recommendations Quality: 30 pts
  - Migration Safety (Zero Downtime): 30 pts
  - Skill Progressive Disclosure Architecture: 20 pts
  - Test Automation: 20 pts

---

### Project I4: Autonomous Next.js / React Refactoring Engine
- **Scope:** Build an automated refactoring engine that converts legacy React class components or Pages Router code to React Server Components (RSC) and App Router standards.
- **Architecture:**
  ```text
  [Legacy React Component] ──► [Claude Code RSC Skill] ──► [Server/Client Boundary Split]
                                                                   │
  [Passing E2E Playwright Tests] ◄── [Hydration Fixes] ◄───────────┘
  ```
- **Features:**
  - Automatic boundary separation (`'use client'` vs Server Components).
  - Data fetching refactored from `useEffect`/`getServerSideProps` to async server functions.
  - End-to-end verification with Playwright test automation.
- **Deliverables:** Refactoring slash commands, custom React skill, and automated validation suite.
- **Evaluation Rubric (100 pts):**
  - RSC Separation Correctness: 35 pts
  - Data Fetching Modernization: 25 pts
  - E2E Test Passing Rate: 20 pts
  - Zero Hydration Error Rate: 20 pts

---

### Project I5: API Error Standardization & Telemetry Instrumenter
- **Scope:** Instrument a multi-service REST backend with structured error envelopes, RFC 7807 problem details, and OpenTelemetry trace propagation.
- **Architecture:**
  ```text
  [Raw Express/FastAPI Handlers] ──► [Claude Standardization Skill]
                                                │
  [RFC 7807 Error Responses + OpenTelemetry Spans + Correlation IDs]
  ```
- **Features:**
  - Elimination of raw stack trace leaks to HTTP clients.
  - RFC 7807 Problem Details formatting across all endpoints.
  - Automatic injection of distributed tracing spans.
- **Deliverables:** Standardization skill, custom error middleware, and automated integration test suite.
- **Evaluation Rubric (100 pts):**
  - RFC 7807 Compliance: 35 pts
  - OpenTelemetry Trace Consistency: 25 pts
  - Security (Zero Info Leakage): 20 pts
  - Test Verification: 20 pts

---

### Project I6: Automated OpenAPI 3.1 & SDK Generator Skill
- **Scope:** Create a skill that analyzes codebase models and controllers, generates an OpenAPI 3.1 specification, and builds TypeScript and Python client SDKs.
- **Architecture:**
  ```text
  [Backend Codebase] ──► [Claude Extraction Skill] ──► [OpenAPI 3.1 Spec]
                                                             │
  [Generated Python SDK] ◄── [OpenAPI Generator] ◄───────────┴──► [TypeScript SDK]
  ```
- **Features:**
  - Automated extraction of route types, query params, and request bodies.
  - OpenAPI 3.1 YAML generation with full component schemas.
  - Auto-generation of typed TypeScript and Python SDK packages.
- **Deliverables:** Custom skill `.claude/skills/sdk-builder/`, code generation script, and sample client apps.
- **Evaluation Rubric (100 pts):**
  - OpenAPI Spec Validity: 35 pts
  - Generated SDK Type Completeness: 25 pts
  - Progressive Skill Structure: 20 pts
  - Client Application Tests: 20 pts

---

### Project I7: Squad Architecture Memory & Knowledge Sharing System
- **Scope:** Implement a centralized architecture decision repository (ADR) system that syncs architectural decisions to `.claude/memory/` across developer machines.
- **Architecture:**
  ```text
  [ADR Markdown Files] ──► [Sync Script] ──► [.claude/memory/ Records]
                                                    │
  [Claude Sessions in Squad Checkouts: Zero ADR Violations]
  ```
- **Features:**
  - Bi-directional sync between git-committed ADRs and local Claude memory.
  - Real-time linting of code against active architectural decisions.
  - Automated creation of new ADR drafts during planning sessions.
- **Deliverables:** Memory sync CLI utility, ADR template suite, and automated memory verification test.
- **Evaluation Rubric (100 pts):**
  - ADR Synchronization Mechanism: 30 pts
  - Rule Adherence in Clean Sessions: 30 pts
  - Memory Indexing Efficiency: 20 pts
  - Documentation: 20 pts

---

### Project I8: Interactive PR Triage & Semantic Labeling Assistant
- **Scope:** Build a slash command and subagent workflow that triages incoming pull requests, calculates change risk scores, and generates semantic labels.
- **Architecture:**
  ```text
  [PR Diff + Description] ──► [Triage Subagent] ──► [Risk Score: Low/Med/High]
                                                          │
  [GitHub Labels: area/backend, risk/high, needs-tests] ◄─┘
  ```
- **Features:**
  - Multi-dimensional risk scoring (file count, test ratio, sensitive path touches).
  - Semantic categorization (`area/auth`, `area/db`, `type/refactor`).
  - Automated PR summary generation for non-technical product managers.
- **Deliverables:** `/triage-pr` custom command, subagent specification, and GitHub integration script.
- **Evaluation Rubric (100 pts):**
  - Risk Scoring Accuracy: 35 pts
  - Labeling Precision: 25 pts
  - Subagent Isolation Discipline: 20 pts
  - PR Summary Clarity: 20 pts

---

### Project I9: Context-Aware Microservice Scaffolder
- **Scope:** Create a dynamic scaffolding engine that inspects existing microservices in an organization and generates a new, perfectly synchronized microservice skeleton.
- **Architecture:**
  ```text
  [Existing Repo Fleet] ──► [Claude Pattern Learner] ──► [Scaffolder Command]
                                                                │
  [New Microservice: Docker, CI/CD, Auth, Linting, Tests Synced] ◄┘
  ```
- **Features:**
  - Automatic extraction of company-standard logging, auth, and database patterns.
  - Generation of complete boilerplate: Dockerfile, GitHub Actions, health checks, and unit tests.
  - 100% compliance with organization `CLAUDE.md` and style guides.
- **Deliverables:** `/scaffold-service` command, base microservice template, and validation test suite.
- **Evaluation Rubric (100 pts):**
  - Pattern Replication Accuracy: 35 pts
  - Boilerplate Completeness: 25 pts
  - Execution Velocity: 20 pts
  - Documentation & Test Pass Rate: 20 pts

---

### Project I10: Test-Driven Development (TDD) Mutation Testing Harness
- **Scope:** Construct a TDD workflow that writes failing tests first (Red), implements minimal passing code (Green), and executes mutation testing with Stryker/Mutmut to verify test efficacy.
- **Architecture:**
  ```text
  [Spec] ──► [Red: Failing Test] ──► [Green: Minimal Code] ──► [Refactor]
                                                                    │
  [Mutation Testing: 100% Mutant Kill Rate] ◄──────────────────────┘
  ```
- **Features:**
  - Strict TDD enforcement in Claude Code Plan/Default modes.
  - Automated mutation testing to expose weak test assertions.
  - Self-healing test generation loop until mutation score exceeds 90%.
- **Deliverables:** `/tdd` slash command, mutation testing integration script, and audited test suite.
- **Evaluation Rubric (100 pts):**
  - TDD Red-Green-Refactor Flow: 35 pts
  - Mutation Score (>90%): 30 pts
  - Code Quality & Cleanliness: 20 pts
  - Automation Scripting: 15 pts

---

# SECTION 3: 10 Advanced Capstone Projects

---

### Project A1: Enterprise Internal Developer Platform MCP Server (TypeScript)
- **Scope:** Build a high-performance TypeScript Model Context Protocol (MCP) server that connects Claude Code to internal microservices, feature flag engines, and staging databases.
- **Architecture:**
  ```text
  [Claude Code CLI] ──(stdio JSON-RPC)──► [Internal Platform MCP Server (TypeScript)]
                                                   │
         ┌───────────────────┬─────────────────────┼────────────────────┐
         ▼                   ▼                     ▼                    ▼
  [PostgreSQL DB]     [LaunchDarkly API]     [Kubernetes Pods]    [Jira Tickets]
  ```
- **Features:**
  - Tools for querying sanitized read-only database schemas.
  - Feature flag inspection and toggle verification tools.
  - Kubernetes pod log streaming and deployment status inspection.
  - Robust Zod input validation and structured JSON error propagation.
- **Deliverables:** Complete TypeScript MCP server repository, `.mcp.json` configuration, Docker container, and integration test suite.
- **Evaluation Rubric (100 pts):**
  - Protocol Compliance & Zod Validation: 30 pts
  - Security (Data Sanitization & Scoping): 25 pts
  - Multi-System Integration: 25 pts
  - Performance & Latency: 20 pts

---

### Project A2: Cloud Infrastructure Health & FinOps MCP Server (Python)
- **Scope:** Build a Python FastMCP server providing Claude Code with real-time AWS CloudWatch metrics, Cost Explorer telemetry, and Terraform state inspection.
- **Architecture:**
  ```text
  [Claude Code CLI] ──(stdio)──► [Python FastMCP Server] ──► [boto3 / AWS SDK]
                                                                   │
  [Live Cost Anomalies + CPU/Memory Alarms + Drift Reports] ◄──────┘
  ```
- **Features:**
  - `@mcp.tool()` for fetching live CloudWatch metrics and alarm states.
  - `@mcp.tool()` for querying 30-day AWS spend by service and detecting cost spikes.
  - Dynamic MCP Resource `aws://costs/today` providing real-time billing context.
- **Deliverables:** Python MCP package, setup script, security credential guide, and test suite with mocked AWS endpoints.
- **Evaluation Rubric (100 pts):**
  - FastMCP Tool & Resource Architecture: 30 pts
  - Cost Optimization Analytics: 25 pts
  - AWS IAM Security & Least-Privilege: 25 pts
  - Test Suite & Error Resilience: 20 pts

---

### Project A3: Multi-Agent Parallel Code Review Swarm
- **Scope:** Architect a concurrent multi-agent review pipeline deploying 3 specialized subagents simultaneously (Security Lead, Performance Architect, QA Specialist) to review complex PRs.
- **Architecture:**
  ```text
                                [PR Git Diff]
                                      │
            ┌─────────────────────────┼─────────────────────────┐
            ▼                         ▼                         ▼
  [Subagent 1: Security]    [Subagent 2: Perf]        [Subagent 3: QA]
  (OWASP / Secrets)         (Algorithmic / DB)        (Edge Cases / Tests)
            │                         │                         │
            └─────────────────────────┬─────────────────────────┘
                                      ▼
                      [Synthesized Master PR Review]
  ```
- **Features:**
  - Context-isolated subagent definitions under `.claude/agents/`.
  - Parallel execution via bash orchestration and model tiering (Haiku for fast parsing, Sonnet for deep review).
  - Aggregation logic consolidating findings into a unified, actionable markdown table.
- **Deliverables:** Subagent definitions, parallel execution script, synthesis prompt template, and demonstration video.
- **Evaluation Rubric (100 pts):**
  - Concurrency & Context Isolation: 30 pts
  - Multi-Domain Audit Accuracy: 30 pts
  - Report Synthesis Quality: 20 pts
  - Model Tiering Cost Optimization: 20 pts

---

### Project A4: Hierarchical Multi-Agent Monorepo Refactor Coordinator
- **Scope:** Build a supervisor-worker multi-agent system that coordinates large-scale architectural refactors across a 5-package monorepo.
- **Architecture:**
  ```text
                     [Supervisor Agent (Opus)]
                                 │
           ┌─────────────────────┼─────────────────────┐
           ▼                     ▼                     ▼
  [Worker 1: Core Lib]   [Worker 2: API]        [Worker 3: Web App]
  (Haiku / Sonnet)       (Haiku / Sonnet)       (Haiku / Sonnet)
           │                     │                     │
           └─────────────────────┬─────────────────────┘
                                 ▼
                     [Integration Verifier]
  ```
- **Features:**
  - Automated dependency-aware work decomposition.
  - Sequential/parallel subagent task execution with state checkpoints.
  - Automated rollback if downstream integration tests fail.
- **Deliverables:** Supervisor orchestration script, worker agent configurations, rollback handler, and sample refactored monorepo.
- **Evaluation Rubric (100 pts):**
  - Work Decomposition Heuristics: 30 pts
  - Failure Recovery & Rollback Safety: 25 pts
  - Monorepo Integration Integrity: 25 pts
  - Cost & Token Budget Control: 20 pts

---

### Project A5: Remote HTTP/SSE MCP Gateway with OAuth2 Authentication
- **Scope:** Deploy a production-ready remote MCP server using Server-Sent Events (SSE) hosted on cloud infrastructure with full OAuth2 / Bearer token security.
- **Architecture:**
  ```text
  [Claude Code CLI] ──(HTTPS/SSE + Bearer Auth)──► [Cloud MCP Gateway (Fly.io/AWS)]
                                                           │
                                             [Internal Corporate APIs]
  ```
- **Features:**
  - SSE transport handshake with bidirectional message handling.
  - JWT / OAuth2 token verification middleware.
  - Rate-limiting, request logging, and IP allowlist enforcement.
- **Deliverables:** Cloud MCP Gateway server, Dockerfile, Terraform deployment script, and client connection documentation.
- **Evaluation Rubric (100 pts):**
  - SSE Transport Stability: 30 pts
  - Authentication & Security Hardening: 30 pts
  - Cloud Deployment & Infrastructure as Code: 20 pts
  - Documentation & Client Setup: 20 pts

---

### Project A6: Real-Time Log Ingestion & Error Anomaly Detection MCP
- **Scope:** Build an MCP server that connects to Datadog / Elasticsearch / Loki, streams production error logs, and autonomously identifies regression anomalies.
- **Architecture:**
  ```text
  [Datadog / Loki Log Stream] ──► [Log Ingestion MCP Server] ──► [Claude Code CLI]
                                                                        │
  [Root-Cause Analysis + Targeted Codebase Patch] ◄─────────────────────┘
  ```
- **Features:**
  - Dynamic MCP Resource `logs://production/errors` with live tailing.
  - Tool `search_stack_traces(error_signature: str) -> list[LogEntry]`.
  - Autonomous root-cause correlation mapping stack traces to exact repository source files.
- **Deliverables:** Python/TypeScript MCP server, log stream simulator, and automated incident triage demo.
- **Evaluation Rubric (100 pts):**
  - Real-Time Streaming Performance: 30 pts
  - Root-Cause Mapping Precision: 30 pts
  - Resource URI Usability: 20 pts
  - Error Handling: 20 pts

---

### Project A7: Autonomous Multi-Branch Git Worktree Fleet Engine
- **Scope:** Build a CLI tool `claude-fleet` that orchestrates 4 simultaneous Claude Code sessions in isolated git worktrees to complete 4 backlog tickets concurrently.
- **Architecture:**
  ```text
  [Backlog Tickets 1, 2, 3, 4] ──► [claude-fleet CLI Orchestrator]
                                              │
         ┌───────────────────┬────────────────┼──────────────────┐
         ▼                   ▼                ▼                  ▼
  [Worktree A: #101]  [Worktree B: #102] [Worktree C: #103] [Worktree D: #104]
  (Claude Session 1)  (Claude Session 2) (Claude Session 3) (Claude Session 4)
         │                   │                │                  │
         └───────────────────┼────────────────┴──────────────────┘
                             ▼
              [Clean Auto-Merge & PR Creation]
  ```
- **Features:**
  - Automated worktree provisioning and isolated branch naming.
  - Concurrent headless Claude execution (`-p`) with progress monitoring.
  - Conflict detection, merge automation, and worktree cleanup.
- **Deliverables:** `claude-fleet` Python/Node CLI tool, process manager, and end-to-end multi-feature demo.
- **Evaluation Rubric (100 pts):**
  - Worktree Concurrency Management: 35 pts
  - Conflict Resolution Strategy: 25 pts
  - Fleet Monitoring & Error Handling: 20 pts
  - Documentation & CLI Ergonomics: 20 pts

---

### Project A8: Cloud Sandbox (`claude.ai/code`) Background Task Runner
- **Scope:** Architect a workflow system that dispatches heavy computational refactoring tasks to Claude Code on the web cloud sandboxes and teleports completed state back to local environments.
- **Architecture:**
  ```text
  [Local Developer Terminal] ──(& operator)──► [Anthropic Hosted Cloud Sandbox]
                                                         │
  [Local Terminal Resumed] ◄── (/teleport) ◄── [Async Cloud Compilation & Tests]
  ```
- **Features:**
  - Dispatching asynchronous tasks from local CLI to cloud web sandboxes.
  - Monitoring cloud execution status via mobile / browser interface.
  - Bi-directional session teleportation and git branch synchronization.
- **Deliverables:** Workflow playbook, custom integration scripts, and video demonstration.
- **Evaluation Rubric (100 pts):**
  - Cloud Dispatch & Teleportation Mastery: 35 pts
  - State & Branch Synchronization: 25 pts
  - Developer Velocity Metrics: 20 pts
  - Presentation & Documentation: 20 pts

---

### Project A9: Autonomous Threat Modeling & OWASP SAST Remediation Bot
- **Scope:** Create an automated security engineer agent that scans repositories for OWASP Top 10 vulnerabilities, executes STRIDE threat modeling, and creates verified patch PRs.
- **Architecture:**
  ```text
  [Source Code] ──► [Semgrep / Snyk SAST] ──► [Claude Security Agent]
                                                     │
  [STRIDE Threat Model] + [Remediation Diff] + [Regression Security Test]
  ```
- **Features:**
  - Integration with Semgrep JSON output.
  - Automated remediation of SQL injection, XSS, insecure deserialization, and IDOR flaws.
  - Writing explicit security unit tests proving vulnerability mitigation.
- **Deliverables:** Security auditing subagent, automated SAST runner script, and verified vulnerability fix suite.
- **Evaluation Rubric (100 pts):**
  - Vulnerability Remediation Correctness: 35 pts
  - Threat Modeling Quality (STRIDE): 25 pts
  - Security Unit Test Coverage: 20 pts
  - Zero Introduction of Regressions: 20 pts

---

### Project A10: Enterprise Plugin Marketplace & Auto-Sync Server
- **Scope:** Build an internal enterprise plugin registry and distribution server that synchronizes approved skills, hooks, commands, and subagents across 500+ developer workstations.
- **Architecture:**
  ```text
  [Enterprise Central Registry] ──► [Auto-Sync Daemon] ──► [Developer Workstations]
                                                                  │
  [Enforced: .claude/settings.json + Approved Hooks + Scoped MCP Servers]
  ```
- **Features:**
  - Versioned plugin repository with cryptographic signature verification.
  - Automated sync daemon pulling approved updates to local `~/.claude/plugins/`.
  - Admin dashboard tracking plugin versions across developer seats.
- **Deliverables:** Registry backend (FastAPI/Node), client sync utility, admin dashboard, and deployment guide.
- **Evaluation Rubric (100 pts):**
  - Distribution Architecture & Security: 30 pts
  - Workstation Sync Reliability: 25 pts
  - Admin Management Dashboard: 25 pts
  - Production Documentation: 20 pts

---

# SECTION 4: 5 Expert Capstone Projects (Enterprise Flagships)

---

### Project E1: Autonomous GitHub Actions PR Fix & Release Platform
- **Scope:** Build a production-grade enterprise GitHub Actions platform that autonomously conducts deep PR code reviews, responds to `@claude fix <issue>` comments, validates patches against CI test suites, and drafts semantic releases.
- **Architecture:**
  ```text
  [GitHub PR / Issue Event] ──► [GitHub Actions Runner (Ephemeral Docker Sandbox)]
                                               │
                                 [Claude Code Headless (-p)]
                                               │
       ┌───────────────────────────────┬───────┴───────────────────────────────┐
       ▼                               ▼                                       ▼
  [Automated Code Review]     [Issue-to-PR Auto-Fixer]              [Semantic Release Bot]
  (Security / Correctness)    (Checkout → Edit → Verify → PR)       (Changelog / Tags)
       │                               │                                       │
       └───────────────────────────────┼───────────────────────────────────────┘
                                       ▼
                        [GitHub API / PR Comments]
  ```
- **Features:**
  - Fully sandboxed execution with least-privilege token permissions.
  - `PreToolUse` security hooks blocking network egress and sensitive credential reads.
  - Self-healing test loop: Claude runs tests, detects failures, iterates on fixes, and only pushes when tests are green.
  - Automated PR summaries, changelogs, and release tag generation.
- **Deliverables:** Complete `.github/workflows/` suite, hardened Docker runner image, custom CI hooks, and public demo repository.
- **Evaluation Rubric (100 pts):**
  - Autonomous Execution Reliability & Test Self-Healing: 30 pts
  - Security Sandboxing & Least-Privilege Governance: 25 pts
  - GitHub Actions Workflow Completeness: 25 pts
  - Edge-Case Resilience & Error Reporting: 20 pts

---

### Project E2: Full-Stack Agent SDK Application with Human-in-the-Loop Web UI
- **Scope:** Construct a production SaaS application powered by the Claude Agent SDK (Python or TypeScript) featuring real-time streaming thought processes, custom external tools, and an interactive human-in-the-loop web approval dashboard.
- **Architecture:**
  ```text
  [Next.js Web Frontend] ◄──(WebSocket Stream)──► [Backend Agent SDK Service]
            │                                                 │
  [Human Approval UI] ──(Approve/Reject Tool Call)──► [canUseTool Callback]
                                                              │
                                                [Custom Tools: DB, AWS, API]
  ```
- **Features:**
  - Direct embedding of the `query()` agent loop in a custom backend process.
  - Interactive web dashboard displaying live agent tool calls, diffs, and terminal outputs.
  - Human-in-the-loop approval workflow: pauses execution on destructive tools until user clicks `[Approve]`.
  - Session state persistence in PostgreSQL, allowing sessions to pause and resume across days.
- **Deliverables:** Full-stack repository (Next.js + FastAPI/Express + Agent SDK), PostgreSQL schema, WebSocket server, and cloud deployment on AWS/Vercel.
- **Evaluation Rubric (100 pts):**
  - Agent SDK Implementation & Loop Control: 30 pts
  - Human-in-the-Loop Approval Mechanics: 25 pts
  - Full-Stack UI/UX & Real-Time Streaming: 25 pts
  - State Persistence & Production Readiness: 20 pts

---

### Project E3: Enterprise Multi-Cloud Agent Platform (AWS Bedrock & GCP Vertex AI)
- **Scope:** Architect and deploy an enterprise-grade agent orchestration service configured for multi-cloud enterprise routing via AWS Bedrock and Google Cloud Vertex AI with strict VPC security and zero data retention.
- **Architecture:**
  ```text
  [Enterprise API Consumer] ──► [Multi-Cloud Agent Router]
                                           │
                 ┌─────────────────────────┴─────────────────────────┐
                 ▼                                                   ▼
      [AWS Bedrock Gateway]                               [GCP Vertex AI Gateway]
      (IAM Role Assumption / PrivateLink)                 (Workload Identity / PSC)
                 │                                                   │
                 └─────────────────────────┬─────────────────────────┘
                                           ▼
                            [Claude 3.7 Sonnet / Opus]
  ```
- **Features:**
  - Multi-provider fallback: routes requests to Bedrock or Vertex based on regional latency and quota availability.
  - Authentication via IAM roles and GCP Workload Identity Federation (zero hardcoded keys).
  - Private networking deployment via AWS PrivateLink and GCP Private Service Connect.
  - Full compliance with HIPAA / SOC2 zero-data-retention mandates.
- **Deliverables:** Terraform infrastructure modules, multi-cloud routing service, benchmark test harness, and architecture whitepaper.
- **Evaluation Rubric (100 pts):**
  - Multi-Cloud Infrastructure & IAM Architecture: 30 pts
  - Provider Fallback & Latency Optimization: 25 pts
  - Enterprise Security & VPC Isolation: 25 pts
  - Infrastructure as Code (Terraform) Quality: 20 pts

---

### Project E4: Automated Agent Evals & Regression Testing Framework
- **Scope:** Build a comprehensive evaluation and benchmarking platform that continuously tests custom Claude skills, system prompts, and tool-calling accuracy against a standardized dataset of 100+ software engineering challenges.
- **Architecture:**
  ```text
  [Benchmark Dataset (100+ Tasks)] ──► [Distributed Headless Test Runner]
                                                   │
                                     [Claude Code Agent Instances]
                                                   │
  [Pass@1 Score] + [Tool Precision] + [Drift Alerts] ◄── [Automated Evaluation Engine]
  ```
- **Features:**
  - Quantitative scoring across: `pass@1`, execution time, token cost, and tool selection precision.
  - Automated detection of semantic drift and prompt regression when underlying models update.
  - CI/CD integration: blocks merging custom skill PRs if benchmark pass rate drops below 92%.
  - Interactive HTML/JSON reporting dashboard with failure trace playback.
- **Deliverables:** Evaluation framework repository, 100-task benchmark dataset, GitHub Actions eval gate, and reporting dashboard.
- **Evaluation Rubric (100 pts):**
  - Eval Methodology & Statistical Rigor: 30 pts
  - Benchmark Dataset Quality & Breadth: 25 pts
  - CI/CD Gate Integration: 25 pts
  - Reporting Dashboard & Trace Visualization: 20 pts

---

### Project E5: Enterprise Claude Code FinOps, Telemetry & Governance Dashboard
- **Scope:** Develop an end-to-end enterprise observability, cost attribution, and governance platform for Claude Code tracking token spend, cache hit ratios, security violations, and developer productivity across 500+ engineers.
- **Architecture:**
  ```text
  [500+ Developer Workstations] ──(OpenTelemetry Hooks)──► [Telemetry Ingestion Gateway]
                                                                   │
         ┌─────────────────────────┬───────────────────────────────┤
         ▼                         ▼                               ▼
  [Prometheus / TimescaleDB]   [SIEM / Security Ops]      [Grafana FinOps Dashboard]
  (Token & Cache Metrics)      (Secret Violation Alerts)  (Squad Cost Attribution)
  ```
- **Features:**
  - Automated OpenTelemetry instrumentation via deterministic `PostToolUse` and `Stop` hooks.
  - Real-time squad-level cost allocation and budget threshold alerts.
  - Security incident dashboard tracking attempted secret reads and blocked destructive commands.
  - ROI calculator measuring developer velocity and prompt cache savings in USD.
- **Deliverables:** Telemetry ingestion service, Grafana dashboard templates, OpenTelemetry hook package, and enterprise deployment playbook.
- **Evaluation Rubric (100 pts):**
  - Telemetry Pipeline & Metric Accuracy: 30 pts
  - FinOps Attribution & Cost Modeling: 25 pts
  - Security Governance & Incident Auditing: 25 pts
  - Enterprise Scalability & Documentation: 20 pts

---

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              CAPSTONE EVALUATION STANDARD                              │
├───────────────────┬───────────────────┬────────────────────────────────────────────────┤
│ SCORE RANGE       │ RATING            │ CREDENTIAL EQUIVALENT                          │
├───────────────────┼───────────────────┼────────────────────────────────────────────────┤
│ 90 – 100 Points   │ Distinction       │ Certified Claude Enterprise Architect (CC-EA)  │
│ 80 – 89 Points    │ Certified Pass    │ Certified Claude Professional (CC-P)           │
│ 70 – 79 Points    │ Associate Pass    │ Certified Claude Associate (CC-A)              │
│ Below 70 Points   │ Revision Required │ Resubmit following code review feedback        │
└───────────────────┴───────────────────┴────────────────────────────────────────────────┘
```
