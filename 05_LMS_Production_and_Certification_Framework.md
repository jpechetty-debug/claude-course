# Phase 8 & 9: LMS Content Production, Flagship Lesson Packages & Career Framework

**Program:** Claude Code Mastery: Zero to Production AI Engineer  
**Coverage:** Production Schema, Fully Authored Flagship Lesson Packages, Assessment System, and Career Roadmaps

---

# PART 1: LMS Content Production Blueprint

Every lesson in the curriculum is produced using a standardized, 7-part content kit. Below is the master schema, followed by **5 complete, fully authored flagship lesson packages** demonstrating the production standard across all 4 skill tiers.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          7-PART LESSON PRODUCTION COMPONENT KIT                         │
├───────────────────────────────┬────────────────────────────────────────────────────────┤
│ COMPONENT                     │ PRIMARY TARGET & FORMAT                                │
├───────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1. Core Lesson Notes          │ Full conceptual & engine mechanics textbook content    │
│ 2. Instructor Lecture Guide   │ Timed 45-min delivery script, live demos & gotchas     │
│ 3. Student Quick-Reference    │ 1-page summary card (commands, rules, key takeaways)   │
│ 4. Slide Deck Blueprint       │ 10–12 slide complete narrative outline with slide text │
│ 5. Autograded Quiz Bank       │ 5 scenario questions with multiple choices & rationale │
│ 6. Practical Coding Assignment│ Graded repository exercise with automated CI tests     │
│ 7. Step-by-Step Lab Guide     │ Command-by-command hands-on terminal drill             │
└───────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

# PART 2: Fully Authored Flagship Lesson Packages

---

## Flagship Package 1 (Day 1): Environment Hardening & Diagnostics

### 1. Core Lesson Notes
- **Concept:** Claude Code is an agentic coding assistant that executes directly inside your terminal, interfacing with the local file system, Git repository, and shell environment. Unlike passive autocomplete extensions, Claude Code plans actions, runs commands, and inspects diffs.
- **Engine Mechanics:** When `claude` launches, it checks the local directory hierarchy for `.claude/settings.json`, `.claude/commands/`, `.claude/agents/`, and `CLAUDE.md`. The `claude doctor` command validates Node.js runtime version (v18+ required, v20+ LTS recommended), Git identity (`user.name`, `user.email`), authentication tokens stored under `~/.claude/`, and egress reachability to `code.claude.com`.
- **Best Practice:** Always run `claude doctor` after tool updates or machine restarts before initiating multi-file refactoring sessions.
- **Antipattern:** Launching Claude Code from root or home directories (`~`) rather than a specific Git project root, which pollutes context with global directory listings.

### 2. Instructor Lecture Guide (45 Minutes)
- **00:00–08:00 (Hook):** Why terminal-native agentic development outperforms web chat copy-pasting.
- **08:00–20:00 (Architecture):** Terminal mechanics, permission security rings, authentication token lifecycle in `~/.claude/`.
- **20:00–32:00 (Live Demo):**
  ```bash
  # Step 1: Check version and run diagnostics
  claude --version
  claude doctor

  # Step 2: Confirm git identity
  git config user.name
  git config user.email

  # Step 3: Launch in safe directory
  cd /path/to/safe-project && claude
  ```
- **32:00–40:00 (Student Drill):** Students run `claude doctor` and fix any missing PATH or Git configuration warnings.
- **40:00–45:00 (Gotchas):** Handling corporate proxies, WSL2 network bridging on Windows, and permissions issues with global npm packages.

### 3. Student Quick-Reference
| Command | Action | Key Flags / Context |
| :--- | :--- | :--- |
| `claude` | Start interactive CLI session | Run from Git repository root |
| `claude doctor` | Diagnose environment & auth health | Checks Node, Git, API keys, and network |
| `claude --version` | Output installed version | Verifies active build |
| `claude update` | Update CLI to latest release | Keeps local engine current |

*Rule:* Never start an agent session in an un-configured Git repository without valid user credentials.

### 4. Slide Deck Outline (10 Slides)
- **Slide 1:** Title: *Mastering the Terminal AI Workspace*.
- **Slide 2:** *From Autocomplete to Agency* – Why terminal execution changes developer throughput.
- **Slide 3:** *System Prerequisites* – Node.js 18+, Git, ripgrep, and supported shells (bash, zsh, fish, PowerShell).
- **Slide 4:** *Under the Hood: `claude doctor`* – The 5 system health checks.
- **Slide 5:** *Security Boundaries* – Local execution, file permissions, and credential storage in `~/.claude/`.
- **Slide 6:** *Interactive vs Non-Interactive Sessions* – When to use `claude` vs `claude -p`.
- **Slide 7:** *Terminal Multiplexing* – Pairing Claude Code with tmux or IDE integrated terminals.
- **Slide 8:** *Common Setup Pitfalls* – PATH misconfigurations and proxy egress blocks.
- **Slide 9:** *Lab Overview* – Completing Lab 1 setup validation.
- **Slide 10:** *Summary & Day 2 Preview* – The 5-Phase Agentic Loop.

### 5. Autograded Quiz Bank (5 Questions with Rationales)
1. **Where does Claude Code store its persistent user credentials and global configurations?**
   - A) `/tmp/.claude_session`
   - B) `~/.claude/`
   - C) Inside the project `.git/` folder
   - D) In browser cookies
   - **Correct:** B  
   - **Rationale:** User-level configuration and session tokens are saved securely in the user home directory under `~/.claude/`.

2. **What is the primary function of `claude doctor`?**
   - A) It formats all dirty files in the git repository.
   - B) It diagnoses system runtime health, Node version, Git config, and auth status.
   - C) It updates all installed npm packages.
   - D) It compiles TypeScript files in the background.
   - **Correct:** B  
   - **Rationale:** `claude doctor` runs automated diagnostic checks against your local runtime and connectivity.

3. **Why should Claude Code always be launched from a project root directory rather than `~` or `/`?**
   - A) Claude Code will crash if launched from home.
   - B) It prevents unbounded workspace file searches and grounds tool context in the active repository.
   - C) Git commands are disabled outside the project root.
   - D) It is required by npm permissions.
   - **Correct:** B  
   - **Rationale:** Launching from the project root constrains the agent's file search space, keeping prompt context clean and token costs low.

4. **If `claude doctor` flags an issue with Git user configuration, what command fixes it?**
   - A) `npm install git`
   - B) `git config --global user.name "Your Name" && git config --global user.email "you@example.com"`
   - C) `claude --fix-git`
   - D) `chmod 777 .git`
   - **Correct:** B  
   - **Rationale:** Setting global git identity ensures Claude Code commits have valid authorship metadata.

5. **Which command updates Claude Code to the newest published release?**
   - A) `claude --upgrade-all`
   - B) `claude update`
   - C) `npm refresh claude`
   - D) `git pull claude`
   - **Correct:** B  
   - **Rationale:** `claude update` is the built-in CLI utility for updating the package.

### 6. Practical Coding Assignment
- **Goal:** Verify and harden your local workstation for Claude Code engineering.
- **Input:** Blank terminal on local machine.
- **Acceptance Criteria:**
  - [ ] `claude --version` prints a valid build string without errors.
  - [ ] `claude doctor` outputs green checkmarks across Node.js, Git, Auth, and Network.
  - [ ] Git repository initialized with valid `user.name` and `user.email`.
- **Submission:** Submit raw terminal output of `claude doctor` via LMS.

### 7. Step-by-Step Lab Guide
- **Lab ID:** Lab 1 (Terminal Hardening & Diagnostic Verification)
- **Instructions:**
  1. Open terminal and run: `claude --version`
  2. Run: `claude doctor`
  3. If warnings appear on Git, run: `git config --global user.name "<Name>"` and `git config --global user.email "<Email>"`
  4. Test interactive session launch: `claude` and confirm greeting prompt.
- **Validation:** Clean exit status `0` with zero diagnostic errors.

---

## Flagship Package 2 (Day 2): The Explore-Plan-Code-Verify Loop

### 1. Core Lesson Notes
- **Concept:** Unstructured AI prompting produces messy, unreviewed code diffs. Professional agentic engineering follows a deterministic 5-step lifecycle: *Explore → Plan → Code → Verify → Report*.
- **Engine Mechanics:** In the Exploration phase, the model queries files using read-only operations. In Plan Mode (`Shift+Tab`), write operations are gated. During the Verification phase, automated test commands confirm that modifications satisfy requirements without introducing regressions.
- **Best Practice:** Never accept code modifications without reviewing the exact git diff natively (`!git diff`).
- **Antipattern:** Asking the model to "fix all bugs across the project" in a single turn without exploring or reviewing intermediate plans.

### 2. Instructor Lecture Guide (45 Minutes)
- **00:00–10:00:** The psychology of developer trust: Why speculative one-shot edits fail in production.
- **10:00–22:00:** Deconstructing the 5 steps:
  1. *Explore (Read-Only):* Map target controllers, interfaces, and test fixtures.
  2. *Plan (Plan Mode):* Define exact files to touch, dependencies, and assertions.
  3. *Code (Accept Edits):* Author surgical, focused modifications.
  4. *Verify (Test Runner):* Execute test commands to prove correctness.
  5. *Report (Diff Review):* Inspect diffs before committing.
- **22:00–35:00 (Live Demo):** Executing an atomic bugfix in an Express/TypeScript codebase following all 5 phases.
- **35:00–45:00 (Student Drill):** Students practice toggling into Plan Mode (`Shift+Tab`) and drafting a risk-assessed plan for an open-source repo bug.

### 3. Student Quick-Reference
| Loop Phase | Recommended Mode | Typical Command / Prompt |
| :--- | :--- | :--- |
| **1. Explore** | Default / Plan Mode | `Explain how authentication tokens are parsed in @src/auth.ts. Do not edit.` |
| **2. Plan** | Plan Mode (`Shift+Tab`) | `Propose a step-by-step plan to add expiration checks. Do not make changes.` |
| **3. Code** | Accept Edits | `Implement step 1 and step 2 from the approved plan.` |
| **4. Verify** | Default / Shell | `Run npm test and fix any failing assertions.` |
| **5. Report** | Native Shell (`!`) | `!git diff` |

*Rule:* A plan must name the specific files that change and the test command that verifies the fix.

### 4. Slide Deck Outline (10 Slides)
- **Slide 1:** Title: *The 5-Step Agentic Feedback Loop*.
- **Slide 2:** *The Pitfall of Speculative Coding* – Why unstructured prompting creates technical debt.
- **Slide 3:** *Phase 1: Explore* – Using passive read commands and AST symbol discovery.
- **Slide 4:** *Phase 2: Plan* – Plan Mode mechanics, file lists, and risk enumeration.
- **Slide 5:** *Phase 3: Code* – Surgical edits vs full-file rewrites.
- **Slide 6:** *Phase 4: Verify* – Test-driven validation and self-healing test loops.
- **Slide 7:** *Phase 5: Report* – Reviewing diffs natively with `!git diff`.
- **Slide 8:** *The Cost of Fast Interrupts* – Using `Esc` early to correct direction.
- **Slide 9:** *Lab Walkthrough* – Overview of Lab 2 & Lab 5.
- **Slide 10:** *Key Takeaways & Day 3 Preview* – Plan Mode Deep-Dive.

### 5. Autograded Quiz Bank (5 Questions with Rationales)
1. **What is the primary benefit of exploring read-only before making code edits?**
   - A) It consumes zero API tokens.
   - B) It prevents unintended file modifications and grounds the model in existing project patterns.
   - C) It bypasses Git permissions.
   - D) It automatically writes unit tests.
   - **Correct:** B  
   - **Rationale:** Passive exploration allows the model to inspect architecture and conventions before touching code, preventing speculative mistakes.

2. **How do you toggle into Plan Mode in the Claude Code interactive CLI?**
   - A) Type `/plan-mode on`
   - B) Press `Shift+Tab` until `[Plan Mode]` is displayed
   - C) Pass `--plan` to the terminal command
   - D) Press `Ctrl+P`
   - **Correct:** B  
   - **Rationale:** `Shift+Tab` cycles through permission modes, including Plan Mode.

3. **What is the recommended action immediately after Claude completes a code edit?**
   - A) Commit and push immediately to `main`.
   - B) Run the project test suite and inspect the diff using `!git diff`.
   - C) Restart the computer.
   - D) Clear the session history.
   - **Correct:** B  
   - **Rationale:** Verification with tests and manual diff review ensures the change is atomic, correct, and free of side effects.

4. **What does typing `!git diff` inside an active Claude session do?**
   - A) Sends the diff to the model for explanation.
   - B) Executes `git diff` natively on your local shell at zero LLM token cost.
   - C) Clears the current git staging area.
   - D) Deletes uncommitted files.
   - **Correct:** B  
   - **Rationale:** The `!` prefix executes shell commands locally without passing data to the LLM context.

5. **When should you press `Esc` during a generation turn?**
   - A) Only after the full response is finished.
   - B) Immediately, as soon as you notice the model taking an incorrect direction.
   - C) Never, because it corrupts git history.
   - D) Only when your internet connection drops.
   - **Correct:** B  
   - **Rationale:** Pressing `Esc` immediately halts tool calls and generation, saving tokens and preventing unwanted edits.

### 6. Practical Coding Assignment
- **Goal:** Execute a full 5-step loop to resolve an open issue in a provided starter repository.
- **Input:** Starter repo containing an API route with missing input sanitization.
- **Acceptance Criteria:**
  - [ ] Explore the codebase without creating uncommitted file changes.
  - [ ] Generate an approved plan specifying target files and test assertions.
  - [ ] Author input validation and passing unit tests.
  - [ ] Validate 100% green test suite status and clean `!git diff`.
- **Submission:** Link to pull request with passing automated tests.

### 7. Step-by-Step Lab Guide
- **Lab ID:** Lab 2 & Lab 5 (The Single-Field Validation Loop)
- **Instructions:**
  1. Launch Claude in the target project: `claude`
  2. Explore: `Locate the validation middleware for user signup. Explain current behavior without editing.`
  3. Plan: Press `Shift+Tab` to enter Plan Mode. Prompt: `Propose a plan to validate username length (3-20 chars). Include unit test file.`
  4. Code: Switch to Accept Edits. Prompt: `Implement the approved plan.`
  5. Verify: Prompt: `Run npm test to verify.`
  6. Review: Type `!git diff` and review every line.
- **Validation:** Test suite passes; diff is strictly confined to validator and test files.

---

## Flagship Package 3 (Day 4): Authoring High-Impact `CLAUDE.md` Steering Files

### 1. Core Lesson Notes
- **Concept:** `CLAUDE.md` is a persistent project steering document loaded into the system context of every session in that repository. It eliminates the need to repeat architecture context, test commands, code style, and critical constraints.
- **Engine Mechanics:** When a session starts, Claude Code reads `CLAUDE.md` from the project root (and optionally subdirectories). Because its contents consume prompt context on every single turn, it must be kept concise (ideally under 50 lines).
- **Best Practice:** Include explicit "Do Not" negative rules that prevent costly mistakes (e.g., "Never edit files under `src/generated/` directly").
- **Antipattern:** Dumping 500-line documentation manuals into `CLAUDE.md`, which inflates context costs and causes prompt instruction dilution.

### 2. Instructor Lecture Guide (45 Minutes)
- **00:00–10:00:** The cost of repeating yourself: Why team onboarding friction disappears with `CLAUDE.md`.
- **10:00–22:00:** Anatomical breakdown of a 50-line `CLAUDE.md`:
  1. *Project Purpose:* One clear summary sentence.
  2. *Tech Stack:* Language, framework, database, package manager.
  3. *Commands:* Dev server, test runner, linter, typecheck, build.
  4. *Conventions:* Naming patterns, folder structure, error handling standards.
  5. *Do Not Rules:* Hard negative constraints.
- **22:00–35:00 (Live Demo):** Running `/init`, pruning the output from 120 lines to 42 lines, and testing constraint enforcement.
- **35:00–45:00 (Student Drill):** Students draft `CLAUDE.md` for their own projects and test negative rule adherence in a `/clear` session.

### 3. Student Quick-Reference
```markdown
# Project: [Name]

## Purpose
[One clear sentence explaining the application's core responsibility.]

## Tech Stack
- TypeScript (ESM), Next.js 15 (App Router), PostgreSQL (Prisma), TailwindCSS

## Commands
- Dev Server: `npm run dev`
- Test Suite: `npm test`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`

## Conventions
- Use async/await for data fetching; avoid raw promises.
- Return structured error envelopes: `{ error: { code, message } }`.

## Do Not
- Never edit files in `src/generated/`; edit `schema.prisma` and run `npm run db:generate`.
- Never commit `.env` or hardcode API keys.
```

### 4. Slide Deck Outline (10 Slides)
- **Slide 1:** Title: *Project Steering with `CLAUDE.md`*.
- **Slide 2:** *Context Injection Mechanics* – How and when `CLAUDE.md` is loaded.
- **Slide 3:** *The 50-Line Golden Rule* – Balancing instruction depth against token overhead.
- **Slide 4:** *Generating Baseline Drafts with `/init`*.
- **Slide 5:** *Anatomy: Purpose & Stack Declarations*.
- **Slide 6:** *Anatomy: Essential Command Mappings*.
- **Slide 7:** *The Power of Negative Constraints ("Do Not" Rules)*.
- **Slide 8:** *Testing Rule Adherence in Clean Sessions (`/clear`)*.
- **Slide 9:** *Hierarchical Rules* – Root vs Subdirectory `CLAUDE.md` resolution.
- **Slide 10:** *Lab Overview* – Authoring and verifying your project steering manual.

### 5. Autograded Quiz Bank (5 Questions with Rationales)
1. **What command automatically analyzes a repository and generates a draft `CLAUDE.md`?**
   - A) `/generate-rules`
   - B) `/init`
   - C) `claude --bootstrap`
   - D) `npm run init-claude`
   - **Correct:** B  
   - **Rationale:** `/init` inspects package files and repository layout to generate an initial `CLAUDE.md` draft.

2. **Why is it recommended to keep `CLAUDE.md` under ~50 lines?**
   - A) Files larger than 50 lines fail to parse.
   - B) `CLAUDE.md` is loaded into context on every turn; keeping it lean minimizes per-prompt token costs and instruction dilution.
   - C) Git cannot diff markdown files over 50 lines.
   - D) The terminal window will overflow.
   - **Correct:** B  
   - **Rationale:** Every line in `CLAUDE.md` adds to the input prompt token count on every interaction.

3. **How does Claude Code prioritize a "Do Not" rule compared to general styling guidelines?**
   - A) "Do Not" rules are ignored unless accompanied by a hook.
   - B) Explicit negative constraints provide clear boundaries that override default generative suggestions.
   - C) It randomly selects which rule to follow.
   - D) It only enforces rules written in uppercase.
   - **Correct:** B  
   - **Rationale:** Clear negative constraints narrow the action space and prevent prohibited modifications.

4. **After editing `CLAUDE.md`, what is the best way to verify that Claude uses the updated rules?**
   - A) Restart the computer.
   - B) Run `/clear` to start a fresh turn and ask Claude how to run tests or perform a constrained action.
   - C) Delete `.git`.
   - D) Reinstall Node.js.
   - **Correct:** B  
   - **Rationale:** `/clear` wipes previous session history, proving that Claude grounds its answer in the committed `CLAUDE.md` rather than conversational memory.

5. **Where should `CLAUDE.md` be stored so that the whole development team shares the same rules?**
   - A) In `~/.claude/CLAUDE.md`
   - B) In the project root, committed to Git.
   - C) In `/tmp/`
   - D) In `node_modules/`
   - **Correct:** B  
   - **Rationale:** Committing `CLAUDE.md` to the Git root ensures all team members and CI runners share identical project instructions.

### 6. Practical Coding Assignment
- **Goal:** Author and test a production `CLAUDE.md` for a full-stack web repository.
- **Input:** Cloned full-stack starter repository.
- **Acceptance Criteria:**
  - [ ] Contains Purpose, Tech Stack, Commands, Conventions, and Do Not sections.
  - [ ] Total line count strictly under 55 lines.
  - [ ] Tested with `/clear`: Claude correctly cites project commands and refuses prohibited edits.
- **Submission:** Commit `CLAUDE.md` to repository branch.

### 7. Step-by-Step Lab Guide
- **Lab ID:** Lab 4 (Authoring High-Impact `CLAUDE.md` Steering Files)
- **Instructions:**
  1. In project root, launch: `claude`
  2. Type: `/init` to generate baseline draft.
  3. Open `CLAUDE.md` in editor and prune unnecessary boilerplate.
  4. Add a negative rule: `Never edit files in src/generated/ directly.`
  5. Run `/clear`. Prompt: `Add a helper function directly into src/generated/types.ts`.
  6. Confirm Claude refuses the edit and suggests the proper alternative.
- **Validation:** Claude adheres to the negative rule unprompted in a clean session.

---

## Flagship Package 4 (Day 20): Hardening Security with `PreToolUse` Hooks

### 1. Core Lesson Notes
- **Concept:** While `CLAUDE.md` provides guidance the model usually follows, **Hooks** are deterministic code that runs on lifecycle events regardless of what the model intends. `PreToolUse` hooks execute *before* a tool runs and can block execution.
- **Engine Mechanics:** When a tool call is initiated (e.g., `Read`, `Edit`, `Bash`), Claude Code passes the tool invocation payload as JSON via standard input to the configured hook command. If the hook script exits with status `0`, the tool proceeds. If the script exits with a non-zero status (e.g., `exit 2`), the tool call is blocked and the error message on `stderr` is returned to the model.
- **Best Practice:** Implement `PreToolUse` hooks to deterministically block read attempts targeting `.env`, `.pem`, `.key`, and cloud credentials.
- **Antipattern:** Relying purely on natural language prompts to protect secrets, which can fail under prompt injection or hallucination.

### 2. Instructor Lecture Guide (45 Minutes)
- **00:00–10:00:** The limits of probabilistic safety: Why enterprise security requires deterministic enforcement.
- **10:00–22:00:** Hook Architecture & Protocols:
  - The 3 Cadences: Per-Session (`SessionStart`), Per-Turn (`UserPromptSubmit`, `Stop`), Per-Tool (`PreToolUse`, `PostToolUse`).
  - The Exit Code Protocol: `exit 0` (allow), `exit 2` (block tool call with message).
  - Inspecting tool JSON payloads on stdin.
- **22:00–35:00 (Live Demo):** Writing a cross-platform bash script `.claude/hooks/block-secrets.sh`, registering it in `.claude/settings.json`, and verifying that a prompt asking Claude to `read .env` is physically blocked.
- **35:00–45:00 (Student Drill):** Students implement and test the secret blocker on both POSIX shells and PowerShell.

### 3. Student Quick-Reference
**Configuration in `.claude/settings.json`:**
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

**Hook Script (`.claude/hooks/block-secrets.sh`):**
```bash
#!/usr/bin/env bash
set -euo pipefail

# Read tool input JSON from stdin
input="$(cat)"

# Check if target file matches sensitive secret patterns
if echo "$input" | grep -qiE '\.env|\.pem|\.key|id_rsa|credentials'; then
  echo "SECURITY BLOCK: Access to sensitive credentials file is prohibited." >&2
  exit 2
fi

exit 0
```

### 4. Slide Deck Outline (10 Slides)
- **Slide 1:** Title: *Deterministic Guardrails with Hooks*.
- **Slide 2:** *Probabilistic vs Deterministic Safety* – Why instructions aren't enough for secrets.
- **Slide 3:** *Hook Cadences & Lifecycle Events*.
- **Slide 4:** *`PreToolUse` Deep-Dive* – The interception checkpoint.
- **Slide 5:** *The Exit-Code Protocol* – `0` vs non-zero exit behavior.
- **Slide 6:** *Parsing Tool Payloads via stdin*.
- **Slide 7:** *Writing `.claude/hooks/block-secrets.sh`*.
- **Slide 8:** *Cross-Platform Considerations (Bash vs PowerShell)*.
- **Slide 9:** *Auditing Cloned Hooks* – Why you must inspect unfamiliar hook scripts.
- **Slide 10:** *Lab Overview & Day 21 Preview* – `PostToolUse` Formatters.

### 5. Autograded Quiz Bank (5 Questions with Rationales)
1. **What is the primary difference between a rule in `CLAUDE.md` and a `PreToolUse` hook?**
   - A) `CLAUDE.md` executes faster.
   - B) `CLAUDE.md` is a prompt suggestion the model aims to follow; a hook is deterministic code that runs and can enforce execution blocks regardless of model intent.
   - C) Hooks cannot run shell scripts.
   - D) `CLAUDE.md` only works in Plan Mode.
   - **Correct:** B  
   - **Rationale:** Hooks provide programmatic, deterministic security enforcement that does not depend on model compliance.

2. **How does a `PreToolUse` command hook signal to Claude Code that a tool call should be blocked?**
   - A) By writing `"deny"` to stdout.
   - B) By exiting with a non-zero exit code (e.g., `exit 2`) and printing an explanation to stderr.
   - C) By terminating the parent terminal process.
   - D) By deleting `.claude/settings.json`.
   - **Correct:** B  
   - **Rationale:** A non-zero exit code halts tool execution and forwards the stderr message back into the session.

3. **Where are project-level hooks configured so that they are committed and shared with the team?**
   - A) `~/.claude/settings.json`
   - B) `.claude/settings.json` in the project root.
   - C) `.git/hooks/claude`
   - D) `package.json`
   - **Correct:** B  
   - **Rationale:** `.claude/settings.json` is the repository-scoped settings file tracked in Git.

4. **Why is it essential to inspect hook scripts when cloning an unfamiliar repository?**
   - A) Hooks run shell commands with your local user permissions.
   - B) Hooks take up 50% of your disk space.
   - C) Untrusted hooks automatically delete node_modules.
   - D) Hooks overwrite your Git username.
   - **Correct:** A  
   - **Rationale:** Because hooks execute shell commands under your user identity, malicious hooks in untrusted repos could compromise your machine.

5. **Which tool matcher string triggers a hook only on file modification tools?**
   - A) `"all"`
   - B) `"Edit|Write"`
   - C) `"Bash"`
   - D) `"Read"`
   - **Correct:** B  
   - **Rationale:** `"Edit|Write"` is a regex matcher targeting only file edit and file write tool invocations.

### 6. Practical Coding Assignment
- **Goal:** Implement and test a deterministic security hook that blocks reads to `.env` and `id_rsa`.
- **Input:** Test repository with sample `.env.example` and dummy `.env` file.
- **Acceptance Criteria:**
  - [ ] `.claude/hooks/block-secrets.sh` created, made executable (`chmod +x`).
  - [ ] `.claude/settings.json` registers hook under `PreToolUse` on matcher `"Read"`.
  - [ ] Tested: Prompting Claude to `Read .env` results in an explicit security block message.
  - [ ] Tested: Prompting Claude to `Read package.json` succeeds normally.
- **Submission:** Commit hook script and settings file with test execution transcript.

### 7. Step-by-Step Lab Guide
- **Lab ID:** Lab 22 (Hardening Secret Protection with `PreToolUse` Hooks)
- **Instructions:**
  1. Create `.claude/hooks/block-secrets.sh` with exit code `2` on regex match.
  2. Make executable: `chmod +x .claude/hooks/block-secrets.sh`
  3. Add `PreToolUse` hook definition into `.claude/settings.json`.
  4. Launch session: `claude`
  5. Test command: `Read the contents of .env`
  6. Verify terminal output shows: `[PreToolUse Hook Blocked] Access to sensitive credentials file is prohibited.`
- **Validation:** Tool call is physically intercepted and blocked prior to file system access.

---

## Flagship Package 5 (Day 33): Building a Custom Python MCP Server from Scratch

### 1. Core Lesson Notes
- **Concept:** The Model Context Protocol (MCP) is an open standard that connects Claude Code to external tools, databases, and APIs. Instead of relying only on default filesystem tools, you can author custom MCP servers exposing specialized business logic and database queries.
- **Engine Mechanics:** Claude Code launches local MCP servers as subprocesses using the `stdio` transport, communicating via JSON-RPC 2.0. When Claude decides to call an MCP tool, it serializes parameters into a JSON-RPC `tools/call` message and waits for the server's structured response.
- **Best Practice:** Author lightweight Python MCP servers using the official `mcp` FastMCP library with explicit docstrings and type annotations, which Claude uses to understand tool schemas.
- **Antipattern:** Leaving heavy, idle MCP servers connected indefinitely, which bloats the system prompt with tool definitions on every single turn.

### 2. Instructor Lecture Guide (45 Minutes)
- **00:00–10:00:** The MCP revolution: Moving beyond file editing to database queries, cloud telemetry, and API actions.
- **10:00–22:00:** MCP Protocol Architecture:
  - The 3 Primitives: Tools (actions), Resources (data streams), Prompts (templates).
  - `stdio` vs `http/sse` transports.
  - Type inference from Python type hints and Pydantic models.
- **22:00–35:00 (Live Demo):**
  1. Authoring `db_inspector.py` with `FastMCP`.
  2. Exposing `@mcp.tool()` `get_table_schema(table_name: str) -> str`.
  3. Registering with Claude Code: `claude mcp add --transport stdio db-tool python db_inspector.py`.
  4. Asking Claude to inspect table structure and generate an optimized index.
- **35:00–45:00 (Student Drill):** Students build a Python MCP tool that queries SQLite database metrics and test it from the CLI.

### 3. Student Quick-Reference
**Python Server Code (`server.py`):**
```python
#!/usr/bin/env python3
"""Custom Database Inspector MCP Server."""

from mcp.server.fastmcp import FastMCP
import sqlite3

mcp = FastMCP("db-inspector")

@mcp.tool()
def get_table_schema(table_name: str) -> str:
    """Returns the CREATE TABLE schema for a given database table."""
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    cursor.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name=?", (table_name,))
    row = cursor.fetchone()
    conn.close()
    return row[0] if row else f"Table '{table_name}' not found."

@mcp.tool()
def count_rows(table_name: str) -> int:
    """Returns the total number of rows in a table."""
    conn = sqlite3.connect("app.db")
    cursor = conn.cursor()
    cursor.execute(f"SELECT COUNT(*) FROM {table_name}")
    count = cursor.fetchone()[0]
    conn.close()
    return count

if __name__ == "__main__":
    mcp.run()
```

**CLI Registration:**
```bash
claude mcp add --transport stdio db-inspector python server.py
claude mcp list
```

### 4. Slide Deck Outline (10 Slides)
- **Slide 1:** Title: *Building Custom Model Context Protocol (MCP) Servers*.
- **Slide 2:** *Why MCP Matters* – Connecting Claude to the broader software ecosystem.
- **Slide 3:** *MCP Architecture* – JSON-RPC 2.0, stdio, and client-server topology.
- **Slide 4:** *The 3 MCP Primitives: Tools, Resources, Prompts*.
- **Slide 5:** *The FastMCP Python SDK* – Decorators, docstrings, and type inference.
- **Slide 6:** *Building Database & API Tools*.
- **Slide 7:** *Registering MCP Servers in Claude Code (`claude mcp add`)*.
- **Slide 8:** *Inspecting & Testing with the MCP Inspector GUI*.
- **Slide 9:** *Context Economics* – Why you must disconnect idle servers (`claude mcp remove`).
- **Slide 10:** *Lab Overview & Capstone A1 Preview*.

### 5. Autograded Quiz Bank (5 Questions with Rationales)
1. **Which communication transport is standard for local MCP servers spawned by Claude Code?**
   - A) WebSockets
   - B) `stdio` (Standard Input / Standard Output via JSON-RPC 2.0)
   - C) FTP
   - D) gRPC
   - **Correct:** B  
   - **Rationale:** Local MCP servers run as child subprocesses communicating over `stdio` using JSON-RPC 2.0.

2. **How does Claude Code determine the purpose and parameter requirements of a FastMCP Python tool?**
   - A) By inspecting the Python function's name, type annotations, and docstring.
   - B) By running the code 10 times in a test sandbox.
   - C) It requires a separate XML configuration file.
   - D) By decompiling the Python bytecode.
   - **Correct:** A  
   - **Rationale:** FastMCP automatically reflects Python type hints and docstrings into standard JSON Schema definitions.

3. **What is the command to register a local Python MCP server with Claude Code?**
   - A) `claude plugin add python server.py`
   - B) `claude mcp add --transport stdio <server-name> python <path/to/server.py>`
   - C) `npm run mcp-install`
   - D) `claude --connect-db`
   - **Correct:** B  
   - **Rationale:** `claude mcp add` with `--transport stdio` registers local executable MCP servers.

4. **Why is it important to disconnect or remove MCP servers when they are no longer needed for a task?**
   - A) MCP servers consume 100% of CPU when idle.
   - B) Every active server adds its tool schemas to the model's context on every turn, increasing token costs and latency.
   - C) Git cannot commit while an MCP server is active.
   - D) The terminal will lose colors.
   - **Correct:** B  
   - **Rationale:** Tool definitions load into prompt context; keeping unused servers active inflates costs and dilutes model focus.

5. **Where is project-scoped MCP server configuration saved so it can be shared with team members?**
   - A) `~/.claude/mcp.json`
   - B) `.mcp.json` in the project root directory.
   - C) `.git/config`
   - D) `setup.cfg`
   - **Correct:** B  
   - **Rationale:** `.mcp.json` in the project root holds project-scoped MCP server definitions intended for Git tracking.

### 6. Practical Coding Assignment
- **Goal:** Build and register a custom Python MCP server exposing database querying and schema inspection tools.
- **Input:** Sample SQLite database (`app.db`) containing users and orders tables.
- **Acceptance Criteria:**
  - [ ] Python FastMCP server authored with `get_table_schema` and `count_rows` tools.
  - [ ] Server registered with Claude Code via `claude mcp add`.
  - [ ] Claude successfully calls the tools in session and outputs accurate schema and row count data.
- **Submission:** Python script, `.mcp.json`, and sample session transcript.

### 7. Step-by-Step Lab Guide
- **Lab ID:** Lab 30 (Building a Python FastMCP Server from Scratch)
- **Instructions:**
  1. Install SDK: `pip install mcp`
  2. Author `server.py` implementing FastMCP tools.
  3. Register server: `claude mcp add --transport stdio db-inspector python server.py`
  4. Verify registration: `claude mcp list`
  5. Launch session: `claude`
  6. Prompt: `Use db-inspector to tell me the schema and row count of the users table.`
  7. Confirm Claude invokes tools and displays formatted results.
- **Validation:** Tool call executes over stdio and returns valid SQL schema information.

---

# PART 3: Practical Certification & Career Framework (Phase 9)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        3-TIER PRACTICAL CERTIFICATION SYSTEM                           │
├────────────────────────┬───────────────────────────────┬───────────────────────────────┤
│ CREDENTIAL             │ PREREQUISITES & SCOPE         │ PRACTICAL EXAM FORMAT         │
├────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ **1. Certified Claude**│ Days 1–15 (Beginner Track)    │ 60-Minute Hands-On Lab        │
│ **Associate (CC-A)**   │ • CLI navigation & Doctor     │ • 5 atomic bugfixes in Plan   │
│                        │ • Plan Mode & CLAUDE.md       │   Mode with passing tests     │
│                        │ • Context budgeting & `@`     │ • 80% passing threshold       │
├────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ **2. Certified Claude**│ Days 16–45 (Intermediate/Adv) │ 120-Minute Practical Sandbox  │
│ **Professional (CC-P)**│ • Hooks (Pre/PostToolUse)     │ • Author PreToolUse hook      │
│                        │ • Skills & Plugin Packaging   │ • Build custom Python MCP     │
│                        │ • Custom MCP Server Coding    │   server to pass test suite   │
│                        │ • Subagents & Worktrees       │ • 85% passing threshold       │
├────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ **3. Certified Claude**│ Days 46–60 (Expert Track)     │ 180-Min Live Scenario Defense │
│ **Enterprise**         │ • Agent SDK full applications │ • Deploy GitHub Actions PR bot│
│ **Architect (CC-EA)**  │ • Multi-Agent Swarms in Prod  │ • Build full Agent SDK SaaS   │
│                        │ • Headless CI/CD Automation   │ • Live Capstone Defense before│
│                        │ • Evals, FinOps & Governance  │   Senior Review Panel         │
└────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

---

## Career & Business Roadmaps

### 1. AI Software Engineer ($140k–$220k USD)
- Embed Claude Code, custom skills, and the Agent SDK into core engineering squads.
- Drive 4x feature delivery velocity by automating PR triage, unit test generation, and migration scripts.

### 2. High-Ticket Freelancing ($150–$250/hr USD)
- Package and sell custom MCP servers ($4,000–$8,500/server) and autonomous GitHub Actions review bots ($3,500–$7,000/repo) on Upwork and Toptal.

### 3. Enterprise AI Consulting Engagements ($10,000–$50,000+)
- Deliver 4-phase enterprise rollouts:
  1. *Codebase AI Readiness Audit* ($7,500)
  2. *Security Guardrails & Hook Implementation* ($15,000)
  3. *Proprietary MCP Gateway & CI/CD Bot Build* ($20,000)
  4. *Team Enablement & FinOps Governance* ($10,000)

### 4. 30-Day AI SaaS Startup MVP Launch
- Use Claude Code and Git Worktrees as a 10x technical co-founder to design, build, test, and deploy production SaaS products with embedded Agent SDK backends.
