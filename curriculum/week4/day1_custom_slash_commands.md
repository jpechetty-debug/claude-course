---
difficulty: Intermediate
duration: ~60 minutes
tags:
- claude-code
- agentic-engineering
- week4
title: 'Week 4 - Day 1: Custom Slash Commands with Dynamic $ARGUMENTS'
week: 4
---

# Week 4 - Day 1: Custom Slash Commands with Dynamic $ARGUMENTS

## Overview
**Week 4 – Day 1**  
**Topic:** Custom Slash Commands with Dynamic $ARGUMENTS  
**Duration:** ~60 minutes  
**Difficulty:** Intermediate

### Learning Objectives
By the end of this lesson, you will be able to:
1. Explain the underlying architecture and protocol mechanics of custom slash commands with dynamic $arguments.
2. Execute step-by-step terminal workflows using official Claude Code commands.
3. Prevent common operational antipatterns and token cost regressions.
4. Verify code changes and tool outputs with automated test assertions.
5. Apply production-grade security and context hygiene practices.

---

## Lesson Content

### Conceptual Breakdown

Author reusable workflow templates in .claude/commands/*.md.

In professional agentic software engineering, executing tasks with Claude Code requires understanding both the conversational interface and the underlying file/process execution sandbox.

```mermaid
graph TD
    A[Developer Request] --> B[Claude Code CLI]
    B --> C{Plan Mode / Permission Gate}
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
cat .claude/commands/health-check.md
/health-check @src/app.ts
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
   cat .claude/commands/health-check.md
/health-check @src/app.ts
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
