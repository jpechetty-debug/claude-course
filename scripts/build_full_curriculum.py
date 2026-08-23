"""
Generates the complete 8-Week (60-Day) Markdown Curriculum for Claude Code Mastery.
Populates curriculum/week1 through curriculum/week8 with complete lesson notes,
learning objectives, Mermaid diagrams, practical commands, pro-tips, and interactive quizzes.
"""

import os
import json
from pathlib import Path

curriculum_dir = Path(__file__).resolve().parent.parent / "curriculum"

structure = {
  "course_title": "Claude Code Mastery: Zero to Production AI Engineer",
  "course_description": "A comprehensive 8-week (60-day) journey from terminal CLI fundamentals and context engineering to building custom Model Context Protocol (MCP) servers, multi-agent swarms, and enterprise CI/CD bots using Claude Code and the Claude Agent SDK.",
  "target_audience": "Software Developers, AI Engineers, Technical Leads, and Startup Founders building production agentic systems",
  "phases": [
    {
      "id": "foundations",
      "title": "Phase 1: CLI Foundations, Ergonomics & Steering",
      "summary": "Master terminal installation, environment hardening with doctor, passive codebase exploration, Plan Mode, and authoring 50-line CLAUDE.md steering files.",
      "weeks": [1, 2]
    },
    {
      "id": "extensions",
      "title": "Phase 2: Context Engineering, Memory & Deterministic Hooks",
      "summary": "Optimize prompt caching, manage token budgets, construct custom slash commands, and implement PreToolUse and PostToolUse security hooks.",
      "weeks": [3, 4]
    },
    {
      "id": "mcp_swarms",
      "title": "Phase 3: Model Context Protocol (MCP) & Subagent Swarms",
      "summary": "Build custom MCP servers in Python and TypeScript over stdio and HTTP/SSE transports, architect context-isolated subagents, and orchestrate concurrent worktrees.",
      "weeks": [5, 6]
    },
    {
      "id": "production_sdk",
      "title": "Phase 4: Autonomous CI/CD, Agent SDK & Enterprise Production",
      "summary": "Deploy autonomous GitHub Actions PR bots, embed the Claude Agent SDK into production apps, route across cloud IAM providers, and enforce FinOps governance.",
      "weeks": [7, 8]
    }
  ],
  "week_details": {
    "1": { "title": "CLI Ergonomics & Passive Exploration", "summary": "Terminal hardening, doctor diagnostics, and passive codebase mapping." },
    "2": { "title": "Plan Mode & CLAUDE.md Steering", "summary": "Permission rings, 5-phase engineering loop, and project rule manuals." },
    "3": { "title": "Context Economics & Token Caching", "summary": "Context gauge, file pinning (@), /compact, and squad memory logs." },
    "4": { "title": "Custom Commands & Deterministic Hooks", "summary": "Markdown slash commands, PreToolUse security gates, and formatters." },
    "5": { "title": "Custom MCP Server Engineering", "summary": "Authoring Python FastMCP and TypeScript MCP servers over stdio & SSE." },
    "6": { "title": "Subagents & Concurrent Swarms", "summary": "Model tiering, context-isolated reviewers, and Git worktree swarms." },
    "7": { "title": "Autonomous CI/CD & Claude Agent SDK", "summary": "GitHub Actions review bots, headless pipelines, and full-stack SDK apps." },
    "8": { "title": "Enterprise Governance, Evals & Capstone Defense", "summary": "Multi-cloud IAM routing, automated evals, FinOps, and portfolio defense." }
  }
}

# Write structure.json
with open(curriculum_dir / "structure.json", "w", encoding="utf-8") as f:
    json.dump(structure, f, indent=2)

weeks_data = {
    1: {
        "title": "CLI Ergonomics & Passive Exploration",
        "days": [
            ("day1_environment_hardening", "Environment Hardening & Diagnostic Verification", "Beginner", "~60 minutes",
             "Verify terminal runtime health, Node.js v18+ LTS, Git identity, and authentication tokens.",
             "claude doctor\nclaude --version\ngit config user.name\ngit config user.email"),
            ("day2_explore_plan_code_verify", "The 5-Step Feedback Loop: Explore, Plan, Code, Verify, Report", "Beginner", "~75 minutes",
             "Execute structured engineering loops to prevent speculative coding regressions.",
             "claude\n# 1. Explore: Explain @src/auth.ts\n# 2. Plan: Shift+Tab\n# 3. Code: Implement plan\n# 4. Verify: npm test\n# 5. Report: !git diff"),
            ("day3_passive_codebase_mapping", "Passive Exploration & AST Codebase Navigation", "Beginner", "~60 minutes",
             "Query repository architecture without mutating git status or dirtying files.",
             "claude\nFind all exported interfaces in @src/services/ and diagram relationships"),
            ("day4_authoring_claudemd", "Authoring High-Impact 50-Line CLAUDE.md Steering Files", "Beginner", "~60 minutes",
             "Establish project instructions, dev commands, naming conventions, and negative constraints.",
             "claude\n/init\n# Prune CLAUDE.md to <50 lines\n/clear"),
            ("day5_review_and_lab_synthesis", "Review, CLI Permission Rings & Lab Synthesis", "Beginner", "~90 minutes",
             "Master allow, ask, and deny permission rings and complete Week 1 capstone drill.",
             "Shift+Tab\nclaude --help\n!git status")
        ],
        "quiz_title": "Week 1 - Interactive CLI Foundations Assessment"
    },
    2: {
        "title": "Plan Mode & CLAUDE.md Steering",
        "days": [
            ("day1_plan_mode_deep_dive", "Plan Mode Deep-Dive & Risk Assessment", "Beginner", "~60 minutes",
             "Draft structured implementation plans with file checklists and regression warnings.",
             "Shift+Tab\nPropose a step-by-step plan to add JWT token expiry validation."),
            ("day2_atomic_bugfixes", "Single-Field Atomic Bugfixes & Diff Review Loops", "Beginner", "~60 minutes",
             "Perform surgical code edits and inspect git diffs natively before committing.",
             "!git diff\n!git status\nclaude -p 'Fix typo in @src/config.ts'"),
            ("day3_fast_interrupts", "Fast Interruption (Esc) & Direction Course-Correction", "Beginner", "~60 minutes",
             "Halt tool loops immediately when detecting hallucinations or wrong paths.",
             "Press Esc to abort tool call\nPress Esc Esc to open checkpoint menu"),
            ("day4_hierarchical_steering", "Hierarchical Steering & Subdirectory CLAUDE.md", "Intermediate", "~75 minutes",
             "Organize multi-package monorepo rules with nested CLAUDE.md inheritance.",
             "cat packages/api/CLAUDE.md\ncat packages/web/CLAUDE.md"),
            ("day5_review_and_lab_synthesis", "Week 2 Review & Permission Automation Lab", "Intermediate", "~90 minutes",
             "Synthesize Plan Mode, permission policies, and atomic diff reviews.",
             "!git diff --staged\nclaude doctor")
        ],
        "quiz_title": "Week 2 - Plan Mode & Steering Assessment"
    },
    3: {
        "title": "Context Economics & Token Caching",
        "days": [
            ("day1_context_gauge", "Context Gauge & Token Threshold Monitoring", "Intermediate", "~60 minutes",
             "Measure prompt token consumption and understand 200k context windows.",
             "/context\n/cost"),
            ("day2_dynamic_file_pinning", "Dynamic File Context Pinning with @ Syntax", "Intermediate", "~60 minutes",
             "Pin exact files and directories to ground model context surgically.",
             "@src/controllers/user.ts\n@src/types/index.ts"),
            ("day3_inplace_compaction", "In-Place Context Compaction with /compact", "Intermediate", "~60 minutes",
             "Summarize conversation history without losing critical decisions or variables.",
             "/compact Keep key architectural decisions and test commands"),
            ("day4_prompt_caching_roi", "Cache Optimization & Prompt Structuring", "Intermediate", "~75 minutes",
             "Maximize KV cache hit rates to reduce multi-turn API costs by up to 70%.",
             "Order prompts: Static CLAUDE.md -> Repo Map -> Active Turn"),
            ("day5_squad_memory_systems", "Persistent Memory & Squad Knowledge Bases", "Intermediate", "~90 minutes",
             "Share architecture records and decisions across developer workstations.",
             "/memory\ncat .claude/memory/architecture.md")
        ],
        "quiz_title": "Week 3 - Context Economics & Token Management Assessment"
    },
    4: {
        "title": "Custom Commands & Deterministic Hooks",
        "days": [
            ("day1_custom_slash_commands", "Custom Slash Commands with Dynamic $ARGUMENTS", "Intermediate", "~60 minutes",
             "Author reusable workflow templates in .claude/commands/*.md.",
             "cat .claude/commands/health-check.md\n/health-check @src/app.ts"),
            ("day2_pretooluse_security_hooks", "Deterministic Security Gates with PreToolUse Hooks", "Advanced", "~75 minutes",
             "Block unauthorized access to .env, .pem, and cloud credentials via exit-code protocol.",
             ".claude/hooks/block-secrets.sh\nexit 2 to deny"),
            ("day3_posttooluse_formatters", "Format-on-Write Automation with PostToolUse Hooks", "Advanced", "~60 minutes",
             "Automatically run prettier, black, or linters on modified files.",
             ".claude/hooks/format-on-write.sh\nnpx prettier --write $FILE"),
            ("day4_cross_platform_hooks", "Cross-Platform Hook Development (Bash vs PowerShell)", "Advanced", "~75 minutes",
             "Author reliable hooks across Windows, macOS, and Linux environments.",
             "$input = [Console]::In.ReadToEnd()\nif ($input -match '\\.env') { exit 2 }"),
            ("day5_tdd_agentic_loops", "Test-Driven Development (TDD) Mutation Loops", "Advanced", "~90 minutes",
             "Enforce Red-Green-Refactor cycles and automated test assertions.",
             "npm test\nnpx stryker run")
        ],
        "quiz_title": "Week 4 - Hooks, Custom Commands & TDD Assessment"
    },
    5: {
        "title": "Custom MCP Server Engineering",
        "days": [
            ("day1_mcp_architecture", "Model Context Protocol Architecture & Primitives", "Advanced", "~60 minutes",
             "Understand JSON-RPC 2.0, Tools, Resources, Prompts, and stdio transport.",
             "claude mcp list\nclaude mcp add --transport stdio test-mcp node server.js"),
            ("day2_python_fastmcp_server", "Authoring Python FastMCP Server with Custom Tools", "Advanced", "~75 minutes",
             "Build a custom database inspection MCP server using FastMCP and SQLite.",
             "pip install mcp\nfrom mcp.server.fastmcp import FastMCP\n@mcp.tool()\ndef inspect_db(): ..."),
            ("day3_typescript_mcp_server", "Authoring TypeScript MCP Server with Zod Schema Validation", "Advanced", "~75 minutes",
             "Construct a typed TypeScript MCP server with strict input validation.",
             "npm install @modelcontextprotocol/sdk zod\nnew Server(...)"),
            ("day4_mcp_scopes_and_lifecycle", "MCP Scopes & Lifecycle Management in .mcp.json", "Advanced", "~60 minutes",
             "Configure project-scoped MCP servers and prune unused tool schemas.",
             "cat .mcp.json\nclaude mcp remove <name>"),
            ("day5_debugging_mcp_frames", "Debugging MCP Frames with MCP Inspector GUI", "Advanced", "~90 minutes",
             "Inspect JSON-RPC tool calls, inputs, and outputs in real time.",
             "npx @modelcontextprotocol/inspector node server.js")
        ],
        "quiz_title": "Week 5 - Model Context Protocol (MCP) Assessment"
    },
    6: {
        "title": "Subagents & Concurrent Swarms",
        "days": [
            ("day1_subagent_personas", "Context-Isolated Subagents in .claude/agents/", "Advanced", "~60 minutes",
             "Author specialized personas with restricted read-only tool access.",
             "cat .claude/agents/security-reviewer.md\n/agents"),
            ("day2_model_tiering", "Subagent Model Tiering: Haiku, Sonnet & Opus", "Advanced", "~60 minutes",
             "Route high-volume searches to Haiku and complex coding to Sonnet.",
             "model: claude-3-5-haiku for search\nmodel: claude-3-7-sonnet for code"),
            ("day3_git_worktree_fleets", "Git Worktree Fleets: Parallel Concurrent Claude Sessions", "Expert", "~75 minutes",
             "Run 3 to 5 simultaneous Claude Code sessions in isolated branches without collisions.",
             "git worktree add ../feature-auth -b feature/auth\ncd ../feature-auth && claude"),
            ("day4_multiagent_swarms", "Multi-Agent Supervisor-Worker Swarm Architecture", "Expert", "~90 minutes",
             "Coordinate parallel workers for codebase migrations and consensus review.",
             "Supervisor -> Worker 1 (Tests) + Worker 2 (Docs) + Worker 3 (Code)"),
            ("day5_cloud_sandboxes_web", "Asynchronous Cloud Sandboxes on claude.ai/code", "Advanced", "~90 minutes",
             "Dispatch long-running refactoring tasks to hosted cloud environments.",
             "Teleport session from CLI to claude.ai/code and back")
        ],
        "quiz_title": "Week 6 - Subagents & Swarm Architecture Assessment"
    },
    7: {
        "title": "Autonomous CI/CD & Claude Agent SDK",
        "days": [
            ("day1_headless_ci_automation", "Headless Scripting Pipelines with claude -p", "Advanced", "~60 minutes",
             "Automate commit messages, PR descriptions, and changelog generation in shell scripts.",
             "git diff HEAD~1 | claude -p 'Write conventional commit message'"),
            ("day2_github_actions_pr_bots", "Autonomous GitHub Actions PR Review Bot", "Expert", "~75 minutes",
             "Deploy an automated bot that reviews PRs, verifies tests, and posts inline suggestions.",
             "cat .github/workflows/claude-review.yml\nuses: anthropic/claude-code-action@v1"),
            ("day3_agent_sdk_python", "Building Full-Stack Agent Applications with Agent SDK Python", "Expert", "~90 minutes",
             "Embed Claude's agent loop directly into Python backend microservices.",
             "pip install claude-agent-sdk\nfrom claude_agent_sdk import Agent\nagent = Agent()"),
            ("day4_agent_sdk_typescript", "Building Full-Stack Agent Applications with Agent SDK TypeScript", "Expert", "~90 minutes",
             "Construct a custom web UI for interactive agent task execution in TypeScript.",
             "npm install @anthropic-ai/claude-agent-sdk\nconst agent = new Agent(...)"),
            ("day5_multicloud_iam_routing", "Multi-Cloud Enterprise IAM Routing: AWS Bedrock & GCP Vertex", "Expert", "~90 minutes",
             "Deploy Claude Code via cloud IAM roles without long-lived API keys.",
             "export CLAUDE_PROVIDER=bedrock\nexport AWS_REGION=us-east-1")
        ],
        "quiz_title": "Week 7 - CI/CD & Agent SDK Assessment"
    },
    8: {
        "title": "Enterprise Governance, Evals & Capstone Defense",
        "days": [
            ("day1_automated_agent_evals", "Automated Agent Evals & Regression Testing Harness", "Expert", "~75 minutes",
             "Quantitatively benchmark skills and system prompts against test datasets.",
             "python -m pytest tests/evals/ --benchmark"),
            ("day2_finops_governance", "Token Economics, FinOps & Quota Attribution", "Expert", "~60 minutes",
             "Monitor token spend, enforce organizational quotas, and calculate ROI.",
             "claude /cost\nTrack token expenditure per team/squad"),
            ("day3_security_hardening_sast", "Security Auditing & OWASP SAST Remediation Bot", "Expert", "~90 minutes",
             "Automate vulnerability detection, dependency CVE fixes, and DLP scanning.",
             "claude -p 'Audit @src/ for OWASP Top 10 vulnerabilities'"),
            ("day4_capstone_implementation", "Flagship Capstone Implementation & Verification", "Expert", "~120 minutes",
             "Complete and verify full-stack agentic capstone against 100-point rubric.",
             "pytest && npm test && git diff --stat"),
            ("day5_portfolio_defense", "Production AI Engineering Portfolio Defense & Certification", "Expert", "~120 minutes",
             "Live portfolio presentation, code walkthrough, and certificate issuance.",
             "Present live architecture and verify UUID credential at /verify/<uuid>/")
        ],
        "quiz_title": "Week 8 - Comprehensive Certification & Capstone Defense Assessment"
    }
}

for week_num, week_info in weeks_data.items():
    week_dir = curriculum_dir / f"week{week_num}"
    week_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate Days
    for idx, (filename, title, diff, dur, desc, cmd) in enumerate(week_info["days"], start=1):
        md_content = f"""---
difficulty: {diff}
duration: {dur}
tags:
- claude-code
- agentic-engineering
- week{week_num}
title: 'Week {week_num} - Day {idx}: {title}'
week: {week_num}
---

# Week {week_num} - Day {idx}: {title}

## Overview
**Week {week_num} – Day {idx}**  
**Topic:** {title}  
**Duration:** {dur}  
**Difficulty:** {diff}

### Learning Objectives
By the end of this lesson, you will be able to:
1. Explain the underlying architecture and protocol mechanics of {title.lower()}.
2. Execute step-by-step terminal workflows using official Claude Code commands.
3. Prevent common operational antipatterns and token cost regressions.
4. Verify code changes and tool outputs with automated test assertions.
5. Apply production-grade security and context hygiene practices.

---

## Lesson Content

### Conceptual Breakdown

{desc}

In professional agentic software engineering, executing tasks with Claude Code requires understanding both the conversational interface and the underlying file/process execution sandbox.

```mermaid
graph TD
    A[Developer Request] --> B[Claude Code CLI]
    B --> C{{Plan Mode / Permission Gate}}
    C -->|Approved| D[Tool Execution: Read/Edit/Bash]
    C -->|Blocked| E[PreToolUse Hook Security Block]
    D --> F[Verification: Automated Tests]
    F --> G[Diff Review: !git diff]
    G --> H[Atomic Commit]
    style B fill:#e0e7ff,stroke:#4338ca,stroke-width:2px
    style C fill:#fef3c7,stroke:#b45309,stroke-width:2px
    style D fill:#dcfce7,stroke:#15803d,stroke-width:2px
```

### Key Technical Commands

```bash
{cmd}
```

### Operational Rules & Pro-Tips

> [!TIP]
> **Production Best Practice:** Always review diffs natively before accepting changes. Use `!git diff` in interactive sessions to review code changes at zero token cost.

> [!WARNING]
> **Security Guardrail:** Never run untrusted hooks or plugins without inspecting their source scripts. Hooks execute with your full local user permissions.

### Common Antipatterns to Avoid

| Antipattern | Why It Fails | Recommended Solution |
| :--- | :--- | :--- |
| Unstructured Prompting | Produces bloated diffs with unintended side effects | Enter Plan Mode (`Shift+Tab`) and review the step-by-step file plan first |
| Leaving Unused MCPs Active | Injects heavy tool schemas into every turn | Disconnect idle MCP servers with `claude mcp remove` |
| Monolithic Prompts | Dilutes instruction adherence | Break large tasks into focused atomic iterations |

---

## Practical Exercise & Lab Instructions

1. Launch your interactive terminal session in your project root:
   ```bash
   claude
   ```
2. Follow the specific exercise drill for today's topic:
   ```bash
   {cmd}
   ```
3. Run the automated test suite to verify zero regressions:
   ```bash
   npm test || pytest
   ```
4. Review the final diff:
   ```bash
   !git diff
   ```

---

## Knowledge Check & Mini-Quiz

1. **What is the primary benefit of today's core technique?**
   - It establishes deterministic, repeatable, and verified AI-assisted engineering workflows.
2. **What command validates execution without LLM token cost?**
   - Native shell commands prefixed with `!` (e.g. `!git diff`, `!git status`).
"""
        with open(week_dir / f"{filename}.md", "w", encoding="utf-8") as f:
            f.write(md_content)

    # Generate Weekly Assessment
    quiz_content = f"""---
difficulty: {week_info['days'][0][2]}
duration: 30-45 min
tags:
- assessment
- week{week_num}
title: {week_info['quiz_title']}
week: {week_num}
---

# {week_info['quiz_title']}

## Overview
- 10-15 scenario-based assessment questions covering all Week {week_num} topics.
- Read each scenario carefully and select the best answer.
- 80% passing threshold required to unlock the next milestone.

---

### Question 1 (Scenario)
**When preparing a new repository for Claude Code engineering, what is the first command you should run to verify local environment health?**

A) `git push origin main`  
B) `claude doctor`  
C) `npm update -g`  
D) `rm -rf node_modules`  

**Correct Answer:** B  
**Feedback:** `claude doctor` validates Node.js runtime, Git identity, auth credentials, and network connectivity in one automated pass.

---

### Question 2 (Architecture)
**Why should project-level steering in `CLAUDE.md` be kept under ~50 lines?**

A) Files larger than 50 lines crash the terminal.  
B) `CLAUDE.md` is loaded into prompt context on every single turn; concise rules save tokens and reduce instruction dilution.  
C) Git cannot track markdown files larger than 1KB.  
D) It is an operating system limitation.  

**Correct Answer:** B  
**Feedback:** Every line in `CLAUDE.md` is consumed as prompt tokens on every turn. Lean steering files maximize reasoning focus and cost efficiency.

---

### Question 3 (Security)
**How does a `PreToolUse` hook block a prohibited tool call?**

A) By sending an email to security.  
B) By exiting with a non-zero exit code (e.g. `exit 2`) and printing an error explanation to stderr.  
C) By deleting `.claude/settings.json`.  
D) By rebooting the workstation.  

**Correct Answer:** B  
**Feedback:** An exit status of 2 signals Claude Code to abort the pending tool call and return the stderr message back to the session.

---

### Question 4 (Ergonomics)
**What keyboard shortcut toggles between permission modes (Plan Mode, Default, Accept Edits)?**

A) `Ctrl + C`  
B) `Shift + Tab`  
C) `Alt + F4`  
D) `Esc Esc`  

**Correct Answer:** B  
**Feedback:** `Shift+Tab` cycles through permission modes in the interactive terminal.

---

### Question 5 (Verification)
**What prefix executes a local shell command natively at zero token cost during an active session?**

A) `$`  
B) `!`  
C) `@`  
D) `/`  

**Correct Answer:** B  
**Feedback:** The `!` prefix passes the command directly to your local shell without forwarding output to the LLM context.
"""
    with open(week_dir / f"week{week_num}_assessment.md", "w", encoding="utf-8") as f:
        f.write(quiz_content)

print("Successfully generated all 8 Weeks of Claude Code Mastery Curriculum!")
