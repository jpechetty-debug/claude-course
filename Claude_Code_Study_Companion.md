# Claude Code: The Complete Study Companion

> **What this is:** A companion that sits on top of your detailed notes. The notes explain the concepts; this gives you the *practice, references, advanced internals, and answers* to actually become confident.
>
> **Four parts:**
> 1. **Hands-on Practice Workbook** — 11 labs plus a capstone, runnable in a safe repo
> 2. **Quick-Reference Cheat Sheets** — 11 cards to keep open while you work
> 3. **Advanced Deep-Dives** — hooks internals, MCP design, subagent orchestration, CI/CD, the Agent SDK
> 4. **Glossary and FAQ** — terms defined, common questions, error scenarios, a self-check quiz
>
> **One rule for the whole document:** Claude Code ships fast. Commands, model names, pricing, hook events, and integration URLs change. Treat every command as current-as-of-writing and verify against the official docs ([code.claude.com/docs](https://code.claude.com/docs)) before production or team rollout.

---

# PART 1 — HANDS-ON PRACTICE WORKBOOK

## How to use this workbook

Each lab is self-contained and builds on the last. Do them in order the first time. After that, jump to any lab to rehearse a specific skill.

**You need:**
- A terminal
- A code editor
- Claude Code installed and signed in
- A **safe, non-production repository** (your own toy project, or a clone of an open-source repo you do not mind changing)

> IT-admin tip: If you manage shared machines, do these labs in a throwaway directory under your own user. Never practice on a production checkout, a home directory, or a repo that contains real secrets.

### Lab difficulty markers

- 🟢 Beginner — safe, read-only or trivially reversible
- 🟡 Intermediate — makes changes; review the diff
- 🔴 Advanced — touches automation, permissions, or external services; sandbox first

---

## Lab 0 — Setup verification (🟢)

**Goal:** Confirm Claude Code is healthy before you rely on it.

```bash
claude --version
claude doctor
```

**Checklist:**
- [ ] Version prints without error
- [ ] `claude doctor` reports no critical issues
- [ ] Node.js version is 18+ (if you installed via npm)
- [ ] Git is configured (`git config user.name` and `user.email` return values)
- [ ] You are signed in to the intended account

**Pass condition:** All boxes ticked. If `claude doctor` flags something, fix it before Lab 1.

**If something is wrong:**
- PATH issue → restart your terminal, or re-run the installer
- Auth issue → start `claude` inside a project and complete browser sign-in
- Network/firewall → check your proxy or egress rules

---

## Lab 1 — Repository orientation, read-only (🟢)

**Goal:** Learn a codebase without changing it.

```bash
cd your-safe-project
claude
```

Then type:

```text
Explain what this project does. Identify the entry points, the main directories,
how to run it, and how to test it. Do not edit anything.
```

**Tasks:**
1. Ask Claude to name the three most important files and why.
2. Ask it to draw (in text) the request flow for one feature.
3. Ask it to list any TODO/FIXME comments it finds.
4. Run `!git status` and `!git log --oneline -10` to see current state and history.

**Pass condition:** You can describe the project in two sentences to a colleague, name the entry point, and state the test command, all from memory after closing Claude.

**Reflection prompt (write your answer):**
> What surprised you about the codebase that you did not know before?

---

## Lab 2 — The explore → plan → code → verify loop (🟡)

**Goal:** Make one small, safe change end to end, with a reviewed plan.

**Step 1 — Explore (read-only):**
```text
Find where input validation happens for [a specific form/endpoint]. Explain the
current behavior. Do not edit anything.
```

**Step 2 — Plan:**
Switch to **Plan Mode** (`Shift+Tab` until you see Plan Mode). Then:
```text
Propose a step-by-step plan to add validation for [one specific field]. Include
which files change, which test to add, and any risks. Do not make changes.
```

**Step 3 — Review the plan critically.** Ask yourself:
- Is the scope narrow? (one field, not "all validation")
- Does it touch only the necessary files?
- Is there a test in the plan?
- Are there migration or compatibility risks?

**Step 4 — Code:**
Approve the plan. Switch to **Default** or **Accept Edits** mode. Let Claude implement.

**Step 5 — Verify:**
```text
Run the test suite and fix any failures caused by this change. Show me the diff.
```
Then independently: `!git diff`

**Pass condition:**
- [ ] Plan was reviewed before coding
- [ ] Diff is small and on-topic
- [ ] Tests pass
- [ ] You understand every line of the diff

---

## Lab 3 — Author CLAUDE.md (🟡)

**Goal:** Give Claude a project operating manual so you stop repeating yourself.

```text
/init
```

This generates a first draft. Then **edit it by hand**.

**Add at least these sections** (keep the whole file under ~50 lines):

```markdown
# Project: [name]

## Purpose
One sentence.

## Tech stack
- Language, framework, database, etc.

## Commands
- Run dev server: `npm run dev`
- Run tests: `npm test`
- Lint: `npm run lint`

## Conventions
- Naming, file structure, branch naming

## Do not
- Never edit files under `src/generated`
- Never commit `.env`
```

**Tasks:**
1. Run `/init`, then trim the draft to the essentials.
2. Add one "Do not" rule that would actually cause harm if violated.
3. Commit `CLAUDE.md` to git.
4. Start a new session (`/clear`), then ask Claude a question it should answer using only CLAUDE.md (e.g., "how do I run the tests?"). Confirm it uses your instructions.

**Pass condition:** Claude follows your committed rules in a fresh session without you re-explaining them.

---

## Lab 4 — Context management drills (🟢)

**Goal:** Feel the difference between a focused and a bloated session.

**Drill A — Pin a file:**
```text
Review @src/auth.ts and explain its public API. Do not edit.
```
Notice how Claude does not search the whole repo.

**Drill B — Watch the gauge:**
```text
/context
```
Read what it reports about current context usage.

**Drill C — Compact mid-task:**
Have a long conversation about two different features, then:
```text
/compact
```
Continue the second feature. Confirm Claude retained the important summary.

**Drill D — Clear between tasks:**
```text
/clear
```
Start a brand new, unrelated question. Notice the focus improvement.

**Pass condition:** You can explain, in one sentence each, when to use `@`, `/context`, `/compact`, and `/clear`.

---

## Lab 5 — Custom slash commands (🟡)

**Goal:** Turn a repeated routine into one command.

Create `.claude/commands/health-check.md`:

```markdown
---
allowed-tools: [Read, Grep, Bash]
---
1. Run `git status` and report the working-tree state.
2. Run the project test command from CLAUDE.md.
3. Run the project lint command from CLAUDE.md.
4. Report any failures. Do not fix anything. Do not edit files.
```

**Tasks:**
1. Create the file above.
2. Invoke it: `/health-check`
3. Create a second command, `/explain-issue`, that takes `$ARGUMENTS` as an issue/bug ID and explains where the relevant code likely lives (read-only).

**Test it:**
```text
/explain-issue 42
```

**Pass condition:** Both commands run and return a structured report without you typing the steps manually.

---

## Lab 6 — Hooks: format-on-write and secret blocking (🔴)

**Goal:** Make safe behavior automatic instead of hoped-for.

> ⚠️ Hooks run shell commands with your permissions. Do this in a sandbox repo first.

**Hook A — Format after edit.** Add to `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "npx prettier --write $FILE" }
        ]
      }
    ]
  }
}
```

**Hook B — Block secret reads.** Add a deny rule and a PreToolUse guard:

```json
{
  "permissions": {
    "deny": ["Read(./.env)", "Read(**/*.pem)"]
  },
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Read",
        "hooks": [
          { "type": "command", "command": ".claude/hooks/block-secrets.sh" }
        ]
      }
    ]
  }
}
```

Create `.claude/hooks/block-secrets.sh` (make it executable):

```bash
#!/usr/bin/env bash
# Reads tool input JSON on stdin; exits non-zero to block if a secret path is targeted.
set -euo pipefail
input="$(cat)"
if echo "$input" | grep -qiE '\.env|\.pem|\.key|id_rsa'; then
  echo "Blocked: refusing to read a secret file." >&2
  exit 2   # non-zero exit blocks the tool call
fi
exit 0
```

```bash
chmod +x .claude/hooks/block-secrets.sh
```

**Tasks:**
1. Add Hook A. Make an edit and confirm the file is formatted automatically.
2. Add Hook B. Ask Claude to read `.env` and confirm it is blocked.
3. Inspect the hook config in a cloned repo before trusting it (the golden rule).

**Pass condition:**
- [ ] Edits auto-format
- [ ] Secret reads are blocked
- [ ] You understand that hooks execute with your privileges

---

## Lab 7 — Add an MCP server (🔴)

**Goal:** Connect Claude to an external tool so it can act, not just read.

> Only do this if you have a real use case. Each active server adds tools and context to every prompt.

```bash
claude mcp add --transport http github https://api.githubcopilot.com/mcp/
claude mcp list
```

In a session:
```text
/mcp
```

**Tasks:**
1. Add one server.
2. Confirm it appears in `/mcp`.
3. Ask Claude to do a small task that uses the server (e.g., list open issues in a repo you own).
4. **Disconnect it when done** to keep sessions lean:
```bash
claude mcp remove github
```

**Pass condition:** Claude successfully calls the external service, then you remove the server to reduce context load.

**Security check:**
- [ ] You know what data the server can read
- [ ] You used the narrowest scope (local, not user)
- [ ] You removed it when the task was done

---

## Lab 8 — Subagents for independent review (🟡)

**Goal:** Get a second, independent opinion in an isolated context.

Create `.claude/agents/code-reviewer.md`:

```markdown
---
name: code-reviewer
tools: [Read, Grep, Glob, Bash]
---
You are a senior code reviewer. Your job is to report, not to edit.

1. Run `git diff` for the current uncommitted changes (or a named branch).
2. Review for: correctness, security, missing tests, unrelated changes, and secret exposure.
3. Report findings as a numbered list with severity (blocker / warning / nit).
4. Do not modify any files.
```

**Tasks:**
1. Make a small change and commit it.
2. Ask Claude: `Use the code-reviewer subagent to review my last commit.`
3. Read the report. Address any blockers.

**Bonus — parallel review:**
```text
Use two subagents: one to review the frontend changes, one to review the backend changes, in parallel.
```

**Pass condition:** A read-only subagent returns an independent review without write access, and you acted on at least one finding.

---

## Lab 9 — Headless mode and piping (🟡)

**Goal:** Use Claude as a pipeline step, not just a chat.

```bash
# One-shot print mode
claude -p "list all TODO comments with file and line"

# Structured output for scripts
claude -p "summarize the recent changes" --output-format json

# Pipe data in, get a result out
git diff main | claude -p "write a concise commit message"
```

**Tasks:**
1. Run the print-mode command and read the output.
2. Run the JSON command and pipe it to a file: `> out.json`. Inspect the structure.
3. Pipe a `git log` into Claude and ask for a release-notes draft.

**Pass condition:** You can produce a useful result from Claude without an interactive session, and you know how to capture JSON for a downstream script.

---

## Lab 10 — Skills and plugins (🟡)

**Goal:** Package know-how so it activates on its own, then install a bundle someone else built.

**Part A — create a skill:**

Create `.claude/skills/api-error-handling/SKILL.md`:

```markdown
---
name: api-error-handling
description: Use when writing or reviewing API route handlers, so errors
  follow this project's response shape and status-code conventions.
---
Every API handler must:
1. Catch errors and return { error: { code, message } }, never a raw stack trace.
2. Use 400 for validation, 401/403 for auth, 404 for missing resources, 500 for
   unexpected failures.
3. Log the original error server-side before returning the sanitized response.
```

**Tasks:**
1. Write a new route handler in your sandbox project without mentioning the skill.
2. Confirm Claude follows the convention unprompted — that is what "activates automatically" means.
3. Ask Claude directly: `What skills are currently available?` and confirm yours is listed.

**Part B — install a plugin:**

```bash
/plugin marketplace add anthropics/claude-code
/plugin install code-review@claude-code
```

**Tasks:**
4. Before installing anything for real, review it like a dependency: what commands does it add, what files or hooks does it touch, does it call any external service?
5. List the commands, skills, or agents the plugin added.
6. Run whatever it added once, on a small, safe change.

**Pass condition:** A skill you wrote changes Claude's behavior without being asked for by name, and you can explain exactly what a plugin you installed is allowed to do before running it.

---

## Lab 11 — Capstone: a full professional workflow (🔴)

**Goal:** Chain everything into one safe, reviewable flow.

Do this on a feature branch in your sandbox repo:

```text
1. EXPLORE: Ask Claude to explain the area you will change. (read-only)
2. PLAN: Switch to Plan Mode. Ask for a concrete plan with tests. Review it.
3. CODE: Approve. Let Claude implement in Accept Edits mode.
4. VERIFY: Ask Claude to run tests and fix failures. Review the diff with !git diff.
5. REVIEW: Use the code-reviewer subagent for an independent check.
6. COMMIT: !git add -A && git commit -m "fix: [focused description]"
7. DOCUMENT: claude -p "write release notes for this branch" > release-notes.md
8. CLEAN: /clear
```

**Pass condition:**
- [ ] You explored before editing
- [ ] You reviewed a plan before coding
- [ ] Tests pass and you reviewed the diff
- [ ] An independent subagent reviewed the change
- [ ] You committed a focused, understandable change
- [ ] You generated release notes headlessly
- [ ] You cleared context between tasks

---

# PART 2 — QUICK-REFERENCE CHEAT SHEETS

## Sheet A — Session and CLI commands

| Command | What it does |
|---|---|
| `claude` | Start an interactive session in the current directory |
| `claude "..."` | Start with an initial prompt |
| `claude --continue` | Resume the most recent session |
| `claude --resume <id>` | Resume a specific session by ID |
| `claude -p "..."` | Headless one-shot, no UI |
| `claude -p "..." --output-format json` | Headless with JSON output |
| `claude --version` | Print version |
| `claude doctor` | Diagnose environment and setup |
| `claude update` | Update Claude Code |
| `claude mcp add/list/remove` | Manage MCP servers |
| `cd project && claude` | Always start from the project root |

## Sheet B — Keyboard shortcuts

| Shortcut | Meaning |
|---|---|
| `Esc` | Interrupt Claude now; session stays intact |
| `Esc Esc` | Rewind to a point and rewrite history |
| `Up Arrow` | Recall a previous prompt |
| `Shift+Tab` | Cycle permission modes |
| `Ctrl+C` | Stop the current shell command or session |

## Sheet C — Permission modes and rules

**Modes (cycle with `Shift+Tab`):**

| Mode | Behavior | Use when |
|---|---|---|
| Plan Mode | Read-only; plan before change | Unfamiliar or risky work (recommended default) |
| Default | Asks before risky actions | Learning; new repos |
| Auto | A classifier auto-approves low-risk actions, blocks/escalates risky ones | Longer sessions where you want fewer interruptions but still want a safety layer |
| Accept Edits | Edits auto-approved; commands still ask | Trusted, repetitive edits |
| Bypass | No approval gates | Isolated sandboxes only |

> **Auto mode note:** rolled out through 2026 starting as a research preview on Team plans, expanding from there. It sits between Default and Accept Edits — safer than skipping permissions, faster than approving everything by hand. Confirm current availability and defaults for your plan before relying on it. There is also a `dontAsk` mode, which converts anything that would normally prompt ("ask") straight into a denial — useful for headless agents that must never block waiting for a human.

**Rules (`deny` always wins):**
```text
allow "Bash(npm run test:*)"
deny  "Read(./.env)"
deny  "Read(**/*.pem)"
```

**Settings hierarchy (later wins):**
1. `~/.claude/settings.json` — personal global defaults
2. `.claude/settings.json` — team-shared, committed to git
3. `.claude/settings.local.json` — personal override, gitignored

## Sheet D — Slash command catalog

**Session and context:**
```text
/clear       /compact      /rewind      /context
/init        /model        /usage       /cost
/login       /permissions  /memory      /config
```

**Extensions:**
```text
/hooks   /mcp   /agents   /plugin
```

**Inline shortcuts:**
```text
!command    run a shell command natively (zero tokens)
@file       load exact file contents into context
```

## Sheet E — Prompt templates

**Exploration (read-only):**
```text
Explain [area]. Identify entry points, important files, how to run it,
and how to test it. Do not edit anything.
```

**Planning:**
```text
Propose a step-by-step plan for [task]. List files that change, the test to add,
and risks. Do not make changes.
```

**Implementation (specific):**
```text
Goal: [what]
Scope: [file/module]
Behavior: [success + failure cases]
Constraints: [what must not change]
Reference: [existing file/pattern to follow]
Validation: [test/lint command]
Report: [what to summarize]
```

**Verification:**
```text
Run [test command]. Fix any failures caused by this change. Show the diff.
```

## Sheet F — Hook events quick reference

> The full catalog is large (the reference documents ~31 events). You will mostly use these:

| Event | Fires | Typical use |
|---|---|---|
| `PreToolUse` | Before a tool runs; can block | Security gate, block secrets/dangerous commands |
| `PostToolUse` | After a tool succeeds | Auto-format, lint after edit |
| `UserPromptSubmit` | Before the model sees your message | Inject context, validate input |
| `Stop` | When Claude finishes responding | Audit log, notification |
| `SessionStart` | When a session begins | Environment setup, reminders |
| `SubagentStop` | When a subagent finishes | Collect subagent results |

**Handler types:** `command` (shell), `http` (POST endpoint), `mcp_tool`, `prompt` (single-turn model check), `agent` (a subagent; experimental).

**Exit-code protocol (for command hooks):**
- Exit `0` → allow / continue
- Exit non-zero → block the tool call (for PreToolUse) or report an error
- Some events also support JSON output with explicit `allow` / `deny` / `ask` decisions

> Note: `PermissionRequest` hooks skip plain headless (`-p`) runs. For automated permission decisions in headless mode, use `PreToolUse` instead.

## Sheet G — MCP cheat sheet

```bash
# Add a server (http or stdio)
claude mcp add --transport http github https://api.githubcopilot.com/mcp/
claude mcp add --scope project --transport stdio my-server ./server.sh

# Inspect and manage
claude mcp list
/mcp                 # in-session status
claude mcp remove github
```

**Scopes:**
- `local` — just you
- `project` — team, stored in `.mcp.json`
- `user` — available everywhere

**Rules:**
- Enable only what the task needs
- Each active server adds tools to every prompt
- Remove unused servers to keep sessions fast
- Review what data a server can read/write before connecting

## Sheet H — Subagent cheat sheet

**File:** `.claude/agents/<name>.md`
```markdown
---
name: code-reviewer
tools: [Read, Grep, Glob, Bash]
---
You are a senior code reviewer. Report, do not edit.
1. Run git diff for recent changes.
2. Review correctness, security, tests, unrelated changes.
3. Report findings with severity.
```

**When to use:**
- Independent review (read-only tools only)
- Specialized role with its own persona
- Parallel work (frontend + backend reviews)

**When NOT to use:**
- Tiny tasks with context already loaded (subagents start fresh and cost time/tokens)

**Model tiering tip:** Route exploration subagents to a cheaper model (Haiku) and reserve the strongest model for architecture or hard debugging.

## Sheet I — Headless and CI/CD

```bash
# One-shot
claude -p "list all TODO comments with file and line"

# JSON for scripts
claude -p "..." --output-format json

# Pipe in / out
git diff main | claude -p "write a commit message"
claude -p "write release notes" | gh pr create --body-file -
```

**CI safety checklist:**
- [ ] Restricted, preferably read-only runner
- [ ] Minimum necessary credentials
- [ ] Limited write scope (temp branch or workspace)
- [ ] Human approval before merge/deploy
- [ ] Logs and outputs captured
- [ ] Tested on a non-production branch first

## Sheet J — Model selection

| Model | Best for | Cost |
|---|---|---|
| Haiku | Formatting, simple edits, quick lookups | Lowest |
| Sonnet | Everyday development, typical default | Medium |
| Opus | Hard architecture, complex debugging | Highest |

```text
/model haiku   /model sonnet   /model opus
```

**Rule:** Start with the cheapest model likely to solve the task. Escalate only when the task genuinely needs deeper reasoning.

## Sheet K — Statusline and output styles

**Statusline** — a custom line at the bottom of the CLI, like a shell prompt (PS1):

```text
/statusline show the model name in orange, current git branch, and % of context used
```

Or set it directly in `.claude/settings.json`:
```json
{ "statusLine": { "type": "command", "command": "~/.claude/statusline.sh" } }
```
Your script receives session JSON on stdin (model, cwd, cost, output style) and its first line of stdout becomes the statusline. Updates run at most every ~300ms.

**Output styles** — swap Claude's system prompt for a different persona while keeping its tools (file edits, bash, TODO tracking):

| Style | What changes |
|---|---|
| Default | Standard efficient coding behavior |
| Explanatory | Adds "Insights" explaining implementation choices as it works |
| Learning | Adds Insights *and* leaves `TODO(human)` markers for you to fill in yourself |
| Custom | Your own persona, saved as a markdown file |

```text
/output-style explanatory
/output-style:new I want an output style that ...
```
Custom styles save to `~/.claude/output-styles/` (reusable across projects) and switches apply at the project level.

## Sheet L — Parallel sessions and worktrees

Run more than one Claude session on the same repo without them stepping on each other's files:

```bash
git worktree add ../myproject-feature-x -b feature-x
cd ../myproject-feature-x && claude
```
Each worktree is a separate working directory on its own branch, sharing one `.git` history — so two full sessions can run at once with zero file collisions.

**Claude Code on the web** (`claude.ai/code`) extends this further: tasks run in Anthropic-hosted, isolated cloud sandboxes connected to GitHub, so you can kick off several tasks across different repos without keeping a terminal open for each one. A `&` prefix on a prompt sends that task to the cloud from your local CLI; matching commands move a session's full context back and forth between web and terminal. Treat this as an evolving feature — confirm current commands against the docs.

**Rule of thumb:** worktrees for same-machine parallelism you want to watch closely; Claude Code on the web for tasks you want to kick off and check on later.

## Sheet E2 — Cost control checklist

- [ ] One task per session; `/clear` between tasks
- [ ] Use `@file` to avoid broad, costly searches
- [ ] `/compact` at natural boundaries
- [ ] Cap or lower extended thinking for routine work (`MAX_THINKING_TOKENS`, `/effort low`)
- [ ] Disconnect idle MCP servers
- [ ] Use parallel subagents intentionally (each makes its own calls)
- [ ] Check `/cost` and `/usage` regularly
- [ ] Use a lighter model for routine work

---

# PART 3 — ADVANCED DEEP-DIVES

> These sections go past the beginner material. They reflect the layered architecture Claude Code actually uses: separate memory, hooks, skills, subagents, plugins, and MCP, each with its own role. Sources are cited inline; verify against the official docs before relying on anything in production.

## A1 — Hooks internals

Hooks are the deterministic layer around the model. Where `CLAUDE.md` is a suggestion the model usually follows, a hook is code that runs regardless of what the model wants. That makes hooks your enforcement layer for formatting, security, auditing, and guardrails ([Claude Code Hooks Explained](https://blakecrosley.com/blog/claude-code-hooks-explained), [Hooks Complete Guide](https://hidekazu-konishi.com/entry/claude_code_hooks_complete_guide.html)).

### The three cadences

Hook events fire on three different rhythms:

1. **Once per session** — `SessionStart`, `SessionEnd` (and `SessionStart` knows whether it was a startup, resume, clear, or compact)
2. **Once per turn** — `UserPromptSubmit`, `Stop`, `StopFailure`
3. **On every tool call** — `PreToolUse`, `PostToolUse` (and `PostToolUseFailure`)

The rest fire on specific conditions: config changes, compaction (`PreCompact`/`PostCompact`), subagents (`SubagentStart`/`SubagentStop`), MCP interactions, file watching (`FileChanged`), worktree lifecycle, and elicitation (an MCP server asking the user for structured input). The reference catalog documents roughly 31 events as of mid-2026 ([Hooks Explained](https://blakecrosley.com/blog/claude-code-hooks-explained)).

### Handler types

There are five ways a hook can respond:

- **`command`** — runs a shell command (the most common type)
- **`http`** — POSTs to an endpoint
- **`mcp_tool`** — calls an MCP tool
- **`prompt`** — a single-turn model evaluation
- **`agent`** — spawns a subagent with Read/Grep/Glob access (experimental)

### The matcher

A hook's `matcher` selects which tool calls trigger it. Examples:

```json
"matcher": "Edit|Write"     // only edits and writes
"matcher": "Bash"           // only shell commands
"matcher": "mcp__.*"        // any MCP tool call
"matcher": "Read"           // only reads
```

### The exit-code / JSON protocol

For `command` hooks, communication happens through exit codes and optionally JSON:

- **Exit `0`** — allow the action / continue
- **Exit non-zero** — block the tool call (for `PreToolUse`) or surface an error
- **JSON output** — some events accept a richer response with explicit `allow` / `deny` / `ask` decisions and messages shown to the user

This is what makes `PreToolUse` the primary security checkpoint: a non-zero exit stops the tool before it runs ([MarkTechPost Guide](https://www.marktechpost.com/2026/06/14/claude-code-guide-2026-25-features-with-examples-demo/)).

### Headless nuance

`PermissionRequest` hooks skip plain headless (`-p`) runs because nothing supplies a permission prompt there. They do fire when an Agent SDK `canUseTool` callback provides one, and for background-subagent tool calls. For automated permission decisions in plain headless mode, use `PreToolUse`. Headless mode also unlocks `permissionDecision: "defer"`, which pauses a tool call so a wrapping process (an Agent SDK app or custom UI) can collect input and resume the session later ([Hooks Explained](https://blakecrosley.com/blog/claude-code-hooks-explained)).

### Worked patterns

**Pattern 1 — Format on write:**
```json
{
  "hooks": {
    "PostToolUse": [
      { "matcher": "Edit|Write",
        "hooks": [{ "type": "command", "command": "npx prettier --write $FILE" }] }
    ]
  }
}
```

**Pattern 2 — Block secrets and dangerous commands (PreToolUse):**
A script reads the tool input JSON on stdin, inspects the target path or command, and exits non-zero to block if it matches `.env`, `*.pem`, `id_rsa`, or a destructive command like `rm -rf`.

**Pattern 3 — Audit log (Stop):**
Append every turn (prompt + tool calls + result) to an append-only log file so you have a record of what the agent did.

**Pattern 4 — Turn guard:**
A `UserPromptSubmit` hook can count turns in a session and refuse to continue past a budget, preventing runaway costs.

### Security model (read this twice)

Hooks run arbitrary shell commands **with your permissions**. Before trusting a cloned repository:
1. Inspect every hook definition and every script it calls.
2. Look for network access, secret access, file deletion, and privilege changes.
3. Run unfamiliar hooks in a sandbox first.
This is the single most important safety habit in the whole tool.

---

## A2 — MCP design

The Model Context Protocol connects Claude to everything else: databases, issue trackers, browsers, cloud providers, and internal tools. The ecosystem has grown to 300+ integrations ([Introl Blog](https://introl.com/blog/claude-code-cli-comprehensive-guide-2025)).

### Transport

- **`stdio`** — the server runs as a local subprocess Claude spawns and talks to over stdin/stdout
- **`http`** — the server is remote; Claude talks to it over HTTP (some need `/mcp login`)

```bash
claude mcp add --transport http github https://api.githubcopilot.com/mcp/
claude mcp add --transport stdio my-server ./server.sh
```

### Scopes

| Scope | Stored | Shared |
|---|---|---|
| `local` | Locally for you | No |
| `project` | `.mcp.json` in the repo | Yes, via git |
| `user` | Your profile | Across your projects |

Use `project` scope only for integrations the whole team should share deliberately. Use `local` for experiments.

### The cost tradeoff

Every active MCP server adds its tool schemas to the model's context on every prompt. Too many active servers make sessions slower, noisier, and more expensive. The discipline is: **enable only what the current task needs, then disconnect.**

```bash
claude mcp list        # see what is active
claude mcp remove X    # disconnect when done
```

### When to use MCP (and when not to)

**Use MCP when:**
- Claude needs to read or act in a system it cannot reach from the filesystem (a ticket tracker, a database, a cloud API)
- The integration is worth the per-prompt context cost because you use it constantly

**Do not use MCP when:**
- A one-off `!curl` or pasted data would do the job
- The server would sit idle most of the time (its tools still load every prompt)

### Security

- Know what data a server can read and write before connecting it
- Prefer the narrowest scope
- For sensitive internal services, prefer a server you control over a third-party one
- Never connect a production system without understanding its permissions and your org's policy

---

## A3 — Subagent orchestration

A subagent is a separate Claude instance with its own context window, system prompt, and tool permissions. The key property: **only the conclusions come back** to your main session. The verbose exploration stays isolated and is discarded, so your main conversation stays focused ([Complete Claude Code Guide](https://blakecrosley.com/guides/claude-code), [Introl Blog](https://introl.com/blog/claude-code-cli-comprehensive-guide-2025)).

### Why that matters

Without subagents, a broad task (e.g., "audit every API endpoint") dumps huge amounts of exploration into your main context, crowding out everything else. A subagent does the exploration in its own context and returns a compact summary.

### Model tiering

A powerful cost-control pattern: route subagent exploration to a cheaper model and reserve the strongest model for genuine architectural reasoning.

- **Haiku subagents** for exploration, search, and classification (cheap, fast)
- **Sonnet** for implementation
- **Opus** for hard architecture and debugging

Or standardize on one model if quality is your only variable and cost is secondary ([Complete Claude Code Guide](https://blakecrosley.com/guides/claude-code), [Introl Blog](https://introl.com/blog/claude-code-cli-comprehensive-guide-2025)).

### Parallelism

You can run two subagents at once, e.g., "review the frontend and backend changes in parallel using two subagents." This speeds up broad tasks. The tradeoff: each subagent makes its own model calls, so parallelism increases token usage and cost. Use it when the time saved is worth the spend.

### Anti-patterns

- **Subagent for tiny tasks** — if the context is already loaded in your main session, a subagent starts fresh and wastes time and tokens re-establishing it
- **Write access on a review agent** — a reviewer's job is to report; give it only Read/Grep/Glob/Bash (read-only)
- **Too many parallel agents** — unbounded parallel subagents each make their own calls and can blow through rate limits and budgets

### File format

```markdown
---
name: code-reviewer
tools: [Read, Grep, Glob, Bash]
---
You are a senior code reviewer. Report, do not edit.
1. Run git diff for recent changes.
2. Review correctness, security, tests, unrelated changes.
3. Report findings with severity (blocker / warning / nit).
```

Create interactively with `/agents`. Subagents compose with the rest of the system: a slash command can trigger a subagent that uses a skill.

---

## A4 — CI/CD patterns

Headless mode is what makes Claude Code automatable: it runs as a one-shot CLI process without a TTY, and it reuses the same settings, hooks, and permission rules as the interactive CLI ([Features and Settings Reference 2026](https://hidekazu-konishi.com/entry/claude_code_features_settings_reference_2026.html)).

### The building blocks

```bash
# One-shot with text output
claude -p "list all TODO comments with file and line"

# Structured output for downstream parsing
claude -p "..." --output-format json

# Unix pipe: data in, result out
git diff main | claude -p "write a commit message"
```

From any language that is not Python or TypeScript, drive the same agent loop by running the CLI as a subprocess with `-p` and `--output-format json` ([Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)).

### GitHub Actions patterns

Common automations:
- **Automated review** — on a PR, Claude inspects the diff and posts review comments
- **Fix failing tests** — mention `@claude fix the failing integration test in this PR`; the runner checks out, edits, verifies, and pushes
- **Draft PR descriptions** — generate the description from the diff headlessly

### The safe pipeline shape

1. Runner checks out a branch or PR (read-only where possible)
2. Claude inspects relevant code and failures
3. Claude makes a **constrained** change (limited write scope)
4. Pipeline runs tests and static checks
5. Results are reported for human review
6. A **human approves** merge or deploy

### Hardening checklist

- [ ] Isolated, restricted runner (not your production host)
- [ ] Read-only checkout of production code; writes only to a temp workspace or branch
- [ ] Minimum credentials; no long-lived production secrets on the runner
- [ ] `PreToolUse` hooks for automated permission decisions (not `PermissionRequest`, which skips plain `-p`)
- [ ] Destructive operations impossible or separately approved
- [ ] Logs and outputs captured for audit
- [ ] Tested on a non-production branch first
- [ ] Rate-limit and cost caps in place for unattended runs

> Reserve Bypass mode strictly for disposable, sandboxed containers. Never use it around production code.

---

## A5 — The Agent SDK

The Agent SDK (formerly the Claude Code SDK) exposes the same tools, agent loop, and context management that power Claude Code, programmable in **Python and TypeScript**. It runs the agent loop in your own process ([Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)).

### When to use which

| If you're... | Use | Why |
|---|---|---|
| Building an agent without writing the tool loop yourself | **Agent SDK** | Library runs the loop in your process, Python or TypeScript |
| Interactive development or one-off terminal tasks | **Claude Code CLI** | The terminal interface for daily use |
| Calling the API directly and implementing the loop yourself | **Client SDK** | Direct Anthropic API access; you build the loop |
| Running long-lived async agents without your own sandbox | **Managed Agents** | Hosted REST API; Anthropic runs the agent and sandbox |

### Capabilities available in the SDK

The SDK gives you the same power as the CLI: built-in tools (read/write/edit, run commands, search the web), hooks, subagents, MCP, permissions, sessions, skills/commands/memory loaded from `.claude/` and `~/.claude/`, and plugins ([Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)).

### Provider routing

You can route the SDK through different providers for billing and compliance:
- Anthropic API directly
- Amazon Bedrock
- Google Cloud Vertex AI

This matters for enterprises that need data residency or to use existing cloud commitments.

### The shape of an SDK agent

Conceptually:

```python
# Python (illustrative — confirm exact API in the current quickstart)
from claude_agent_sdk import query

async for message in query(
    prompt="Find and fix the bug in auth.py",
    options={
        "tools": [...],            # which tools the agent may use
        "permission_mode": "default",
        "mcp_servers": [...],       # external integrations
        "allowed_tools": [...],
        "max_turns": 20,
    },
):
    # each message is a step: a tool call, its result, or assistant text
    print(message)
```

```typescript
// TypeScript (illustrative — confirm exact API in the current reference)
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Find and fix the bug in auth.ts",
  options: {
    permissionMode: "default",
    maxTurns: 20,
  },
})) {
  // handle each agent-loop step
  console.log(message);
}
```

> The exact import paths and option names change between SDK versions. Treat the above as the shape, then copy the real snippet from the [Quickstart](https://code.claude.com/docs/en/agent-sdk/quickstart) and [TypeScript](https://code.claude.com/docs/en/agent-sdk/typescript) / [Python](https://code.claude.com/docs/en/agent-sdk/python) references.

### Auth note

Unless previously approved, Anthropic does not allow third-party developers to offer claude.ai login or rate limits for products built on the Agent SDK. Use API-key authentication as described in the Quickstart ([Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)).

### What this unlocks

- A custom agent for your own stack (e.g., a security-scanning agent, an incident-triage agent)
- Programmatic control over tools and permissions
- Running agents inside secure sandboxes like Docker
- Long-running or scheduled agents that report back

For how the Claude Code team itself orchestrates subagents at scale, see the [Agent harness design](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code) post.

---

## A6 — Plugins, skills, commands, and subagents: the architecture

Claude Code separates its extension primitives into distinct layers ([MarkTechPost Guide](https://www.marktechpost.com/2026/06/14/claude-code-guide-2026-25-features-with-examples-demo/)):

| Primitive | Trigger | Best for |
|---|---|---|
| Slash command | You invoke it explicitly | Manual, repeatable workflows |
| Skill | Claude invokes it automatically when relevant | Specialized know-how that should not live in every prompt |
| Subagent | Separate context and persona | Isolation, specialization, parallelism |
| Hook | Lifecycle event (deterministic) | Enforcement: formatting, security, audit |
| MCP server | External protocol | Connecting external tools and data |
| Plugin | One install | Bundling any combination of the above |

### Plugins

A plugin is a versioned bundle that can ship one or more of: skills, subagents, slash commands, hooks, output styles, and MCP server definitions, all installed together ([Features and Settings Reference 2026](https://hidekazu-konshi.com/entry/claude_code_features_settings_reference_2026.html)).

```text
/plugin marketplace add anthropics/claude-code
/plugin install code-review@claude-code
```

**Why teams use them:** update a plugin once and the whole team gets the same review workflow, formatter, and integrations with no manual per-developer config.

**Review a plugin before installing** exactly like you would a dependency: what commands, files, hooks, MCP servers, and external data does it touch?

### They compose

A slash command can trigger a subagent that uses a skill, inside a plugin that also ships a hook and an MCP server. That composability is the real power once you understand each layer's job.

---

## A7 — Settings hierarchy deep-dive

Three files layer, with later winning over earlier:

1. **`~/.claude/settings.json`** — your personal defaults across every project (lowest priority)
2. **`.claude/settings.json`** — team-shared, committed to git (middle)
3. **`.claude/settings.local.json`** — personal overrides, gitignored (highest)

Plus, in managed/enterprise setups, admins can push **managed settings** that enforce allow/ask/deny rules org-wide and cannot be overridden by the lower layers. The Analytics API gives admins usage data.

### Permission rule semantics

- **`allow`** — the matching operation runs without asking
- **`ask`** — require confirmation
- **`deny`** — never permit; **deny always wins** over any conflicting allow

### Design principle

Make permissions narrow and explicit. A rule that allows one specific test command is far safer than a broad rule that allows every shell command. Deny your secrets by default; allow only the harmless, repeatable commands you actually run often.

## A8 — Claude Code on the web

A cloud-hosted way to run Claude Code without keeping a terminal session open, at `claude.ai/code`.

### How it differs from the local CLI

The local CLI runs one session at a time in your terminal, tied to your machine's filesystem. Claude Code on the web runs each task in its own isolated, Anthropic-managed sandbox connected to your GitHub repository — so you can have several tasks going in parallel, across different repos, and check on them later instead of watching one at a time.

### The mental model

Think of it as the same agent loop (explore, plan, edit, verify, report) you already know, relocated to infrastructure you don't have to babysit. It reports progress in real time and still supports mid-task guidance — it is not a fire-and-forget black box.

### Moving a session between web and terminal

Two mechanics worth knowing, both still evolving — verify exact syntax against current docs before depending on them in a workflow:

- **Send local work to the cloud:** prefixing a prompt (reported as `&`) hands that task off to run on cloud infrastructure instead of your machine.
- **Bring a session back:** a "teleport"-style command pulls a session's context, history, and branch back to your local terminal, so you can finish somewhere else without losing the thread.

### When this is worth it

- You want to kick off a task from your phone and check the result later.
- You're running several independent tasks (different repos, or unrelated areas of one repo) and don't want to babysit each one sequentially.
- You want a task to keep running without your laptop staying open.

### When it isn't

- The task needs your local environment specifically (a device, a local service only reachable from your machine, credentials you deliberately keep off shared infrastructure).
- You want to review every step closely as it happens — a tight local loop still gives you the fastest feedback cycle.

### Security note

The same rule as everything else in this document applies: know what a hosted sandbox can reach (which repos, which secrets, which network) before you hand it a task, and prefer the narrowest GitHub permissions that let the work get done.

---

# PART 4 — GLOSSARY AND FAQ

## Glossary

**Agent** — an application that completes a task by planning its own steps and calling tools (read files, run commands, edit code). Claude Code is an agent; the Agent SDK lets you build your own.

**Agent loop** — the cycle Claude runs: plan a step, call a tool, observe the result, decide whether the task is done or continue. The same loop powers the CLI and the SDK.

**Agent SDK** — (formerly Claude Code SDK) a Python/TypeScript library that runs the Claude Code agent loop in your own process.

**Atomic task** — a task with a clear outcome and a small surface area, easy to review and undo. "Add validation for one field" is atomic; "clean up the backend" is not.

**Auto mode** — a permission mode where a built-in classifier auto-approves low-risk actions and blocks or escalates risky ones, instead of asking before every action. Rolling out through 2026, starting with Team plans; verify current availability.

**Bypass mode** — a permission mode with no approval gates. Use only in disposable, isolated sandboxes.

**CLAUDE.md** — a project instruction file loaded automatically into every session so you stop repeating yourself.

**Client SDK** — direct access to the Anthropic API where you implement the tool loop yourself (distinct from the Agent SDK).

**Context** — the information the model can use for the current request: the conversation, referenced files, tool schemas, and memory. Managing it well is the biggest skill gap between beginners and pros.

**`/compact`** — summarize the current conversation and continue, keeping the useful summary while dropping detail.

**`/clear`** — wipe conversation history and start fresh. Use between unrelated tasks.

**Diff** — the before/after view of a file change. Reviewing every diff is non-negotiable for safe use.

**`dontAsk` mode** — converts any action that would normally prompt for confirmation into an automatic denial instead. Useful for headless agents that must never sit blocked waiting for a human.

**Headless mode** — running Claude Code with `-p` as a one-shot command with no UI, for scripts and CI.

**Hook** — a command that runs at a lifecycle event, deterministically, regardless of what the model wants. Enforcement layer.

**ITPM / OTPM** — input/output tokens per minute: separate rate-limit ceilings on how fast you can send and generate.

**Managed Agents** — Anthropic's hosted REST API that runs long-lived agents and the sandbox for you (separate product from the Agent SDK).

**Matcher** — the field on a hook that selects which tool calls trigger it (e.g., `"Edit|Write"`).

**MCP (Model Context Protocol)** — the protocol that connects Claude to external tools and data sources (databases, issue trackers, browsers, cloud APIs).

**`.mcp.json`** — the file that stores project-scoped MCP server definitions, shared via git.

**Output style** — a saved, reusable configuration that swaps Claude's system prompt/persona (e.g. Explanatory, Learning, or a custom one) while keeping its underlying tools. Set with `/output-style`.

**Permission mode** — how much approval Claude needs: Plan, Default, Accept Edits, or Bypass. Cycle with `Shift+Tab`.

**Plan Mode** — read-only mode; Claude inspects and plans but does not change files. Best for unfamiliar or risky work.

**Plugin** — a versioned bundle of skills, subagents, slash commands, hooks, output styles, and MCP server definitions, installed together.

**Prompt caching** — reusing previously computed context to reduce input cost. Focused sessions maximize it; long idle periods let the cache go cold.

**`/rewind`** — restore an earlier checkpoint instead of manually undoing every step.

**Session teleportation** — moving a session's full context, history, and branch between Claude Code on the web and your local terminal, so you can pick work back up wherever is convenient.

**Skill** — specialized know-how Claude invokes automatically when relevant, kept out of every prompt (progressive disclosure).

**Slash command** — a `/`-prefixed instruction interpreted by the CLI itself, not sent as model text.

**Statusline** — a customizable line at the bottom of the CLI showing session info (model, branch, cost, context used), similar to a shell prompt.

**Subagent** — a separate Claude instance with its own context, system prompt, and tools. Only its conclusions return to your main session.

**`/usage`, `/cost`** — in-session commands to inspect token spend.

**Worktree** — a git feature that checks out a second branch into its own directory while sharing one repository history. Lets you run two Claude sessions on the same project, on different branches, with zero file collisions.

## FAQ

### Getting started

**Q: Do I need an IDE plugin?**
No. Claude Code lives in the terminal and is editor-agnostic. It works alongside VS Code, JetBrains, Vim, Emacs, or Cursor without a plugin.

**Q: Subscription or API — which should I use?**
For interactive personal development, a Pro/Max subscription usually fits. For scripts, pipelines, and CI/CD, API pay-as-you-go usually fits. The Agent SDK requires API-key auth (claude.ai login is not permitted for third-party SDK apps unless approved).

**Q: Where are my credentials stored?**
Locally in `~/.claude/`. Treat that directory as sensitive. Do not commit it or paste its contents anywhere.

**Q: What is the safest first prompt?**
A read-only one: `Explain what this project does, how to run it, how to test it. Do not edit anything.`

### Workflow

**Q: When should I interrupt Claude?**
Immediately, whenever the direction is wrong. Pressing `Esc` early is good judgment, not failure. Correcting a plan costs one message; correcting bad code costs many.

**Q: One session for everything, or many sessions?**
One task per session. Use `/clear` between unrelated tasks. Long, mixed sessions resend the whole conversation each turn and lose focus.

**Q: How do I stop Claude from repeating a mistake?**
Add a precise, testable rule to `CLAUDE.md` instead of retyping the correction every time. Example: `Never edit files under src/generated; update the template and run npm run generate.`

**Q: What is the explore-plan-code-verify loop?**
The core professional workflow: explore read-only, plan in Plan Mode, code after approval, then verify with tests and a diff review. The plan step is the highest-leverage moment.

**Q: Can I run more than one Claude session on the same project at once?**
Yes, with `git worktree add ../project-branch-name -b branch-name`, then run `claude` inside that new directory. Each worktree is its own checkout on its own branch, sharing one `.git` history, so parallel sessions cannot collide on files.

### Permissions and security

**Q: Which permission mode should I start in?**
Plan Mode or Default. Never start an unfamiliar repo in Bypass.

**Q: How do I protect secrets?**
Use deny rules: `deny "Read(./.env)"`, `deny "Read(**/*.pem)"`. Deny always wins. Extend to keys, certificates, customer data, and production config.

**Q: Are hooks safe?**
Hooks run shell commands with your permissions. Inspect every hook in a cloned repo before trusting it. Run unfamiliar hooks in a sandbox first.

**Q: Is Bypass mode ever OK?**
Only in disposable, isolated sandboxes where a mistake cannot affect anything important. Never around production code.

**Q: What is Auto mode, and is it safe?**
It's a middle path: a classifier auto-approves low-risk actions and blocks or escalates risky ones, instead of asking before everything (Default) or nothing (Bypass). It rolled out through 2026 starting on Team plans. Safer than Bypass, but confirm current behavior and availability against the docs before trusting it on sensitive work.

### Context and cost

**Q: Why are my costs climbing?**
Common drivers: long uncleared sessions, idle MCP servers loading tools every prompt, uncapped extended thinking, cold prompt cache, and unbounded parallel subagents. Use `/cost` and `/usage` to find the cause.

**Q: How do I cap extended thinking?**
Set `MAX_THINKING_TOKENS` as an environment ceiling, or lower effort per turn with `/effort low` for routine work.

**Q: How do I choose a model?**
Start with the cheapest model likely to solve the task (Haiku for formatting/lookups, Sonnet for everyday work). Escalate to Opus only for hard architecture or complex debugging. Switch anytime with `/model`; no restart, no lost context.

**Q: What are ITPM and OTPM?**
Separate per-minute ceilings on input tokens (how fast you can send) and output tokens (how fast Claude can generate). Hitting either limits you, not just your monthly quota. Space out large requests and use a lighter model to stay under.

### MCP and subagents

**Q: Should I connect a lot of MCP servers?**
No. Each active server adds tools to every prompt, making sessions slower and costlier. Enable only what the task needs, then disconnect.

**Q: When should I use a subagent?**
For independent review, a specialized role, or parallel work. Do not use one for tiny tasks where the context is already loaded; subagents start fresh and cost time and tokens.

**Q: Can I give a review subagent write access?**
You can, but you should not. A reviewer's job is to report. Give it only Read/Grep/Glob/Bash (read-only).

**Q: How do I save money with subagents?**
Route exploration subagents to a cheaper model (Haiku) and reserve the strongest model for genuine architectural reasoning.

### Automation

**Q: Can Claude Code run in CI?**
Yes. Headless mode (`-p`) runs as a one-shot with no UI and reuses the same settings, hooks, and permissions as the interactive CLI. Use restricted runners, minimum credentials, limited write scope, and human approval before merge.

**Q: For automated permission decisions in headless mode, which hook do I use?**
`PreToolUse`. `PermissionRequest` skips plain `-p` runs. (`PermissionRequest` does fire when an Agent SDK `canUseTool` callback supplies a prompt, and for background-subagent tool calls.)

**Q: What is the Agent SDK for?**
Building your own agents with the same tools and agent loop as Claude Code, programmable in Python or TypeScript, running in your own process, with provider routing across Anthropic API, Bedrock, and Vertex AI.

**Q: How do I drive the agent loop from a language that isn't Python or TypeScript?**
Run the CLI as a subprocess with `-p` and `--output-format json`.

**Q: How is Claude Code on the web different from running the CLI locally?**
It runs each task in its own isolated, Anthropic-hosted sandbox connected to GitHub, so several tasks across different repos can run in parallel without you keeping a terminal open. Local CLI is one session, one machine, tightest feedback loop.

### Team rollout

**Q: How do I share setup across a team?**
Commit `CLAUDE.md`, `.claude/settings.json`, custom commands, agents, and approved MCP config (`.mcp.json`) to git. Admins can push managed settings that enforce rules org-wide.

**Q: What should admins control centrally?**
Allowed tools, denied paths, secret-handling rules, approved integrations, logging/audit requirements, CI runner isolation, and update/version policy. Use the Analytics API for usage visibility.

## Common error scenarios and fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| `claude` not found | Not on PATH | Restart terminal; re-run installer; check PATH |
| Auth fails on start | Not signed in, or wrong account | Run `claude` inside a project and complete browser sign-in |
| Session feels slow/unfocused | Bloated context, mixed tasks | `/clear`, one task per session, use `@file` |
| Costs climbing | Long sessions, idle MCP, uncapped thinking | `/cost`, cap thinking, disconnect MCP, lighter model |
| Claude repeats a mistake | No persistent rule | Add a precise rule to `CLAUDE.md` |
| Plan goes wrong | Did not interrupt early | Press `Esc` immediately, then clarify |
| Hook blocked a safe action | Overly broad matcher or script | Narrow the matcher; inspect the hook script |
| MCP server slows everything | Too many active servers | `claude mcp list`, remove unused servers |
| Tests fail after an edit | Change broke something | Ask Claude to run tests and fix failures; review the diff |
| Headless run hits rate limit | Bursting large requests | Space out requests; use a lighter model; reduce parallel agents |

## Self-assessment quiz

Answer these without looking. Then check the notes/companion to verify.

**Beginner**
1. Name the five steps of the agent loop.
2. What does `Esc` do? What does `Esc Esc` do?
3. Which permission mode is best for unfamiliar repos, and why?
4. What is the safest first prompt in a new repo?
5. Name three things that belong in `CLAUDE.md`.

**Intermediate**
6. When do you use `/clear` versus `/compact`?
7. How do `@`, `!`, and `/` differ?
8. What is the settings hierarchy, and which file wins?
9. Write a deny rule that protects `.env` and private keys.
10. What makes a prompt "specific" rather than "vague"?

**Advanced**
11. Name the three hook cadences and one event in each.
12. Why does a subagent keep your main context clean?
13. What is model tiering for subagents, and why does it save money?
14. For automated permission decisions in plain headless mode, which hook do you use and why?
15. What does the Agent SDK give you that the CLI does not?
16. Name the six extension primitives and one job for each.
17. Why does each active MCP server increase per-prompt cost?
18. What is `permissionDecision: "defer"` and when is it useful?
19. How does Auto mode differ from both Default and Bypass?
20. What command lets you run two Claude sessions on the same repo without file collisions?
21. Name one thing Claude Code on the web can do that the local CLI alone cannot.

**Answers (briefly):**
1. Task, explore, plan/edit, verify, report. 2. `Esc` interrupts (session intact); `Esc Esc` rewinds/rewrites from a point. 3. Plan Mode — read-only, plan before change. 4. A read-only "explain this project" prompt. 5. Architecture, build/test/lint commands, style, "do not" rules. 6. `/clear` between unrelated tasks; `/compact` mid-task to summarize and continue. 7. `@` loads a file into context; `!` runs a shell command natively; `/` is a CLI command. 8. Global → project → local override; local wins (managed settings win over all in enterprises). 9. `deny "Read(./.env)"`, `deny "Read(**/*.pem)"`. 10. It names goal, scope, behavior, constraints, reference, and validation. 11. Per session (SessionStart), per turn (UserPromptSubmit/Stop), per tool call (PreToolUse/PostToolUse). 12. Only its conclusions return; the verbose exploration stays isolated and is discarded. 13. Route exploration to Haiku (cheap), reserve Opus for hard reasoning. 14. `PreToolUse` — `PermissionRequest` skips plain `-p` runs. 15. The agent loop as a library in your own process, with programmatic tool/permission control and provider routing. 16. Slash command (manual workflow), skill (auto know-how), subagent (isolation/parallel), hook (enforcement), MCP (external tools), plugin (bundle). 17. Its tool schemas load into context on every prompt. 18. It pauses a headless tool call so a wrapping process can collect input and resume later. 19. Default asks before every risky action; Bypass asks before nothing; Auto uses a classifier to auto-approve low-risk actions while still blocking or escalating risky ones. 20. `git worktree add ../project-branch -b branch`, then run `claude` inside it. 21. Run several tasks in parallel across different repos in hosted cloud sandboxes without keeping a terminal open for each one.

---

## How this companion fits with your other materials

- **Detailed Notes** (`Claude_Code_Zero_to_Hero_Detailed_Notes.md`) — the concepts, explained.
- **Improved Slides** (`Claude_Code_Crash_Course_Improved.pptx`) — the visual overview.
- **This Companion** (`Claude_Code_Study_Companion.md`) — the practice, references, internals, and answers.

Use them together: read the notes for understanding, run the workbook labs for skill, keep the cheat sheets open while you work, dive into Part 3 when you want to go past beginner, and check the FAQ when something confuses you.

> Final reminder: Claude Code ships fast. Commands, model names, pricing, hook events, and integration URLs change. Verify anything you rely on against the official documentation at [code.claude.com/docs](https://code.claude.com/docs) before production or team use.

---

*Companion built by Ziggy for Jagz P. Updated August 2026.*
