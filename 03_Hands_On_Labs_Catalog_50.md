# Phase 6: Complete Catalog of 50 Hands-On Labs

**Program:** Claude Code Mastery: Zero to Production AI Engineer  
**Coverage:** 50 Practical, Industry-Calibrated Labs across All 4 Competency Tiers

---

## Table of Contents

- **Section 1: CLI Fundamentals & Steering (Labs 1–10)**
- **Section 2: Context Engineering, Memory & Commands (Labs 11–20)**
- **Section 3: Deterministic Hooks, Skills & Plugins (Labs 21–28)**
- **Section 4: Model Context Protocol (MCP) Engineering (Labs 29–37)**
- **Section 5: Subagents, Parallel Swarms & Concurrency (Labs 38–44)**
- **Section 6: Headless CI/CD, Agent SDK & Enterprise Evals (Labs 45–50)**

---

# SECTION 1: CLI Fundamentals & Steering (Labs 1–10)

### Lab 1: Terminal Hardening & Diagnostic Verification (🟢)
- **Objective:** Verify terminal environment, PATH resolution, Node.js 20+ runtime, Git configuration, and authentication status before initiating agent sessions.
- **Inputs:** Terminal window, Internet connection, Git installed.
- **Instructions:**
  1. Open terminal and run `claude --version`.
  2. Run `claude doctor` to execute complete environment health check.
  3. Validate Git configuration: `git config user.name` and `git config user.email`.
  4. Authenticate session: `claude` and complete browser sign-in verification.
- **Expected Output:**
  ```text
  claude-code/v2026.x.x darwin-arm64 node-v20.12.0
  ✔ Node.js runtime (v20.12.0)
  ✔ Git configuration (User: Jane Doe <jane@enterprise.com>)
  ✔ Authentication valid (Logged in as jane@enterprise.com)
  ✔ Network reachability to code.claude.com: OK
  All diagnostic checks passed. System ready.
  ```
- **Success Criteria:** Zero critical warnings in `claude doctor`; clean exit code `0`.

---

### Lab 2: Passive Codebase Deconstruction (🟢)
- **Objective:** Map architecture, entry points, dependencies, and test commands of an unfamiliar repository without creating or modifying files.
- **Inputs:** A cloned open-source repository (e.g., Express/FastAPI sample).
- **Instructions:**
  1. Navigate to project root: `cd sample-project && claude`.
  2. Prompt: `Explain what this project does. Identify the top 3 entry points, key architectural layers, how to build, run, and test it. Do not create or edit any files.`
  3. Query: `Draw a text-based ASCII flow diagram of a request moving through this application.`
  4. Inspect git status natively: `!git status`.
- **Expected Output:**
  Detailed architectural summary, 3 entry points identified with exact line references, ASCII request diagram, and confirmation that working tree remains completely clean (`nothing to commit, working tree clean`).
- **Success Criteria:** Student can explain the system architecture in 2 sentences; `git status` reports 0 modified files.

---

### Lab 3: Zero-Risk Feature Planning in Plan Mode (🟡)
- **Objective:** Generate a structured, atomic, risk-assessed implementation plan using Plan Mode before authorizing code edits.
- **Inputs:** Cloned repository with an active issue/feature request.
- **Instructions:**
  1. Switch to Plan Mode using `Shift+Tab` until `[Plan Mode]` appears.
  2. Prompt: `We need to add email format validation to the user registration endpoint. Explore the codebase and propose a step-by-step implementation plan including: exact files to touch, code modifications, unit tests to add, and potential regression risks. Do not edit files.`
  3. Review the proposed plan for scope boundary, test coverage, and side effects.
- **Expected Output:**
  A 5-step implementation plan specifying target files, proposed helper functions, testing framework command, and regression warnings with zero files modified on disk.
- **Success Criteria:** Plan approved without modifying any disk assets during the planning turn.

---

### Lab 4: Authoring High-Impact `CLAUDE.md` (🟡)
- **Objective:** Author a concise, high-leverage project steering file (`CLAUDE.md`) containing architectural summaries, commands, style guidelines, and strict negative constraints.
- **Inputs:** Workspace root with no existing `CLAUDE.md`.
- **Instructions:**
  1. Run `/init` to generate a baseline steering draft.
  2. Manually edit and prune `CLAUDE.md` to under 50 lines.
  3. Add a strict negative rule: `Never edit files under src/generated/ directly; modify schema.prisma and run npm run db:generate`.
  4. Test rule enforcement: Run `/clear`, then prompt: `Add a new field 'phone' directly into src/generated/types.ts`.
- **Expected Output:**
  Claude refuses the direct edit and instead states: `Per project guidelines in CLAUDE.md, I cannot edit src/generated/types.ts directly. I will modify schema.prisma and execute npm run db:generate.`
- **Success Criteria:** Claude follows negative constraint autonomously in a fresh session.

---

### Lab 5: The Single-Field Validation Loop (🟡)
- **Objective:** Execute the complete 5-phase engineering loop (*Explore → Plan → Code → Verify → Report*) on an atomic code modification.
- **Inputs:** A backend repository with an existing test runner.
- **Instructions:**
  1. Explore: Locate user registration validation handler.
  2. Plan: Switch to Plan Mode (`Shift+Tab`), outline phone number regex validation and unit test.
  3. Code: Switch to Accept Edits mode; authorize Claude to write the code and test.
  4. Verify: Run `npm test` or `pytest` to confirm passing status.
  5. Diff Check: Execute `!git diff` and verify every changed line.
- **Expected Output:**
  Clean diff modifying only 2 files (validator and test file), with 100% passing test assertions.
- **Success Criteria:** Diff contains zero unrelated whitespace or syntax changes; all unit tests green.

---

### Lab 6: Fast Interrupts & Checkpoint Rewind Drills (🟡)
- **Objective:** Master `Esc` interrupt and `Esc Esc` history rewind mechanics to abort erroneous agent directions and restore clean checkpoints.
- **Inputs:** Active Claude Code interactive session.
- **Instructions:**
  1. Submit prompt: `Refactor the entire database access layer from Prisma to raw SQL queries across all controllers.`
  2. Within 3 seconds, press `Esc` to immediately interrupt the generation.
  3. Double-tap `Esc Esc` to open the history rewind menu.
  4. Select the checkpoint prior to the refactor prompt and submit a corrected prompt: `Only optimize the query in getUserById()`.
- **Expected Output:**
  Immediate cessation of tool calls upon `Esc`; history menu appears; conversation successfully rewound with zero orphaned edits.
- **Success Criteria:** Successful checkpoint restoration within 15 seconds without leaving uncommitted dirty state.

---

### Lab 7: Permission Mode Cycling & Boundary Auditing (🟢)
- **Objective:** Understand operational differences and safety boundaries between Plan Mode, Default Mode, Auto Mode, Accept Edits, and Bypass Mode.
- **Inputs:** Active sandbox repository.
- **Instructions:**
  1. Cycle through all 5 permission modes using `Shift+Tab` and observe UI indicators.
  2. In Default Mode, request a file edit and observe the explicit approval prompt `[y/n]`.
  3. In Accept Edits mode, perform a multi-file edit and verify file changes auto-apply while shell commands still request confirmation.
  4. Verify that Bypass mode is restricted to isolated sandbox containers.
- **Expected Output:**
  Clear understanding of permission states; observation of approval prompts under each mode.
- **Success Criteria:** Ability to select the appropriate mode based on project risk classification.

---

### Lab 8: Shell Passthrough Execution with `!` (🟢)
- **Objective:** Execute native operating system shell commands with zero token cost using the `!` prefix.
- **Inputs:** Git repository with active commit history.
- **Instructions:**
  1. In Claude Code CLI, type `!git status` and press Enter.
  2. Type `!git log --oneline -5` to inspect recent commit history.
  3. Type `!npm test -- --coverage` or `!pytest -q`.
  4. Compare token usage of `!git status` vs asking `What is the git status?`.
- **Expected Output:**
  Instant terminal command output without sending tokens to the LLM context or consuming API quotas.
- **Success Criteria:** Native shell execution completed instantly at 0 prompt token cost.

---

### Lab 9: Interactive Navigation & Prompt History Recall (🟢)
- **Objective:** Utilize terminal navigation shortcuts (`Up/Down Arrow`, `Ctrl+C`, `Ctrl+L`) to manage multi-turn session history efficiently.
- **Inputs:** Multi-turn Claude Code session.
- **Instructions:**
  1. Send 3 distinct queries in a session.
  2. Use `Up Arrow` to scroll back through previous prompts, edit prompt text, and re-submit.
  3. Test `Ctrl+C` to cancel a long-running bash execution without killing the Claude session.
- **Expected Output:**
  Fast navigation across previous commands and graceful subprocess termination.
- **Success Criteria:** Rapid command modification without re-typing lengthy prompt strings.

---

### Lab 10: Model Switching & Cost-Tier Matching (🟢)
- **Objective:** Switch active LLM models on-the-fly (`/model haiku`, `/model sonnet`, `/model opus`) without restarting the session or losing context.
- **Inputs:** Active multi-turn session with open context.
- **Instructions:**
  1. Type `/model` to view current model configuration.
  2. Switch to Haiku: `/model haiku` for simple file formatting.
  3. Switch to Opus: `/model opus` for complex concurrency debugging.
  4. Switch back to Sonnet: `/model sonnet` for standard coding.
- **Expected Output:**
  ```text
  Model switched to Claude 3.5 Haiku (claude-3-5-haiku-20241022).
  Context preserved (14,210 tokens active).
  ```
- **Success Criteria:** Seamless model transitions without session restarts or lost conversation state.

---

# SECTION 2: Context Engineering, Memory & Commands (Labs 11–20)

### Lab 11: Real-Time Context Inspection with `/context` (🟢)
- **Objective:** Profile token distribution across system instructions, conversation history, tool schemas, and loaded files.
- **Inputs:** Active multi-file development session.
- **Instructions:**
  1. Open 3 files and ask 4 coding questions.
  2. Run `/context`.
  3. Analyze the breakdown: System Prompt vs Tools vs History vs Free Context Remaining.
- **Expected Output:**
  Visual gauge showing total tokens used (e.g., `42,500 / 200,000 tokens (21%)`) with detailed category breakdown.
- **Success Criteria:** Accurate identification of the largest token consumer in the active session.

---

### Lab 12: Prompt Caching Maximization & Cache TTL Drills (🟡)
- **Objective:** Structure multi-turn prompts to maximize prompt cache hit rates and reduce API costs by up to 90%.
- **Inputs:** Codebase with 500+ lines of code across 3 files.
- **Instructions:**
  1. Pin baseline files using `@src/types.ts` and `@src/services/auth.ts`.
  2. Execute 3 consecutive queries within 2 minutes.
  3. Run `/cost` and `/usage` to inspect `cache_read_input_tokens` vs `cache_creation_input_tokens`.
  4. Calculate cost savings achieved through cache hits.
- **Expected Output:**
  Cache read tokens accounting for >80% of total input tokens across turns 2 and 3.
- **Success Criteria:** Cache hit rate exceeds 75% on subsequent turns within the 5-minute cache TTL.

---

### Lab 13: Surgical File Pinning with `@` vs Unbounded Globbing (🟡)
- **Objective:** Contrast token consumption between explicit file pinning (`@path/to/file.ts`) and broad workspace globbing queries.
- **Inputs:** Repository with 50+ source files.
- **Instructions:**
  1. Task A (Broad): In fresh session, ask: `How does user password hashing work across the whole project?`. Note token count via `/context`.
  2. Task B (Surgical): Run `/clear`. Prompt: `Review @src/utils/security.ts and explain password hashing. Do not search other files.`. Note token count.
  3. Compare total tokens consumed between Task A and Task B.
- **Expected Output:**
  Task B uses <25% of the tokens consumed by Task A while providing faster, more precise answers.
- **Success Criteria:** Documented 70%+ token reduction using surgical `@` references.

---

### Lab 14: Mid-Task In-Place Compaction with `/compact` (🟡)
- **Objective:** Reclaim active context space during extensive refactoring tasks using `/compact` without discarding key project context.
- **Inputs:** A 25-turn conversation approaching 100k tokens.
- **Instructions:**
  1. Execute a lengthy multi-step refactoring discussion across several modules.
  2. Type `/compact` or provide a custom focus: `/compact focus on remaining database schema changes`.
  3. Run `/context` to measure reclaimed space.
  4. Verify that Claude retains awareness of approved architecture decisions.
- **Expected Output:**
  Context reduced by 50–70%, with a structured markdown summary embedded in the active turn.
- **Success Criteria:** Conversation continues smoothly on subsequent prompts with zero amnesia regarding core constraints.

---

### Lab 15: Session Segregation & Context Contamination Testing with `/clear` (🟢)
- **Objective:** Eliminate cross-task hallucination by enforcing strict session boundaries using `/clear`.
- **Inputs:** Sandbox repository with two unrelated modules (e.g., Billing and Auth).
- **Instructions:**
  1. Perform a complex refactoring on Billing module.
  2. Immediately prompt: `Now implement a new feature in Auth` without clearing. Observe if Claude references billing variables.
  3. Type `/clear`. Repeat the Auth prompt.
  4. Compare purity and focus between the two responses.
- **Expected Output:**
  Un-cleared session suffers from cross-module token bleed; cleared session produces concise, dedicated auth code.
- **Success Criteria:** Fresh session initialized with zero remnant memory of previous unrelated modules.

---

### Lab 16: Squad Architecture Memory Configuration (`.claude/memory/`) (🟡)
- **Objective:** Set up project-level and user-level persistent memory stores to preserve architectural decisions across squad checkouts.
- **Inputs:** Project repository.
- **Instructions:**
  1. Type `/memory` to view current persistent memory state.
  2. Add persistent rule: `/memory add "All database timestamps must be stored in UTC ISO-8601 format"`.
  3. Inspect the created memory file in `.claude/memory/`.
  4. Run `/clear` and prompt Claude to write a database migration; verify timestamp adherence.
- **Expected Output:**
  Migration generated using UTC ISO-8601 timestamps without explicit user prompting in the new session.
- **Success Criteria:** Memory item successfully saved, indexed, and retrieved across distinct sessions.

---

### Lab 17: Thinking Token Ceiling & Effort Tuning (🟡)
- **Objective:** Optimize latency and cost by adjusting `MAX_THINKING_TOKENS` and `/effort` levels based on task complexity.
- **Inputs:** Complex logic problem and simple syntax formatting task.
- **Instructions:**
  1. Run `/effort low` and request a simple CSS flexbox adjustment. Note response latency.
  2. Run `/effort high` and request a deadlock-free concurrent lock algorithm in Go/Rust.
  3. Inspect thinking token generation logs.
- **Expected Output:**
  Low effort produces instant responses with minimal thinking overhead; high effort produces deep multi-step verification traces before code emission.
- **Success Criteria:** Successful calibration of thinking effort according to task difficulty.

---

### Lab 18: Authoring Custom Slash Commands with Frontmatter (🟡)
- **Objective:** Build and test `.claude/commands/pr-ready.md` to automate pre-commit verification workflows.
- **Inputs:** Project root.
- **Instructions:**
  1. Create `.claude/commands/pr-ready.md`.
  2. Add YAML frontmatter restricting tools to `[Read, Grep, Bash]`.
  3. Define steps: 1. Run git diff; 2. Run test suite; 3. Run linter; 4. Output PR checklist.
  4. Invoke in session: `/pr-ready`.
- **Expected Output:**
  Automated execution of tests and linting followed by a structured PR readiness summary.
- **Success Criteria:** Slash command executes all steps without manual user intervention.

---

### Lab 19: Dynamic Slash Commands with `$ARGUMENTS` Injection (🟡)
- **Objective:** Create a parameterized command `.claude/commands/explain-bug.md` that accepts an issue ID and dynamically investigates relevant files.
- **Inputs:** Issue tracker or sample issue IDs.
- **Instructions:**
  1. Create `.claude/commands/explain-bug.md` with:
     ```markdown
     ---
     allowed-tools: [Read, Grep, Glob]
     ---
     Locate files related to issue #$ARGUMENTS. Explain likely root causes. Do not edit files.
     ```
  2. Invoke command: `/explain-bug 104`.
- **Expected Output:**
  Claude parses argument `104`, searches for issue references, and outputs a targeted explanation report.
- **Success Criteria:** `$ARGUMENTS` properly interpolated into command execution context.

---

### Lab 20: Crafting Reusable Output Styles & Developer Personas (🟡)
- **Objective:** Build custom output styles (`/output-style:new`) to adapt Claude's communication density for different stakeholders.
- **Inputs:** Active workspace.
- **Instructions:**
  1. Create a "Security Auditor" output style: `/output-style:new security-auditor`.
  2. Define behavior: "Every response must begin with a Threat Model section (STRIDE), followed by code diffs, and end with an OWASP compliance checklist."
  3. Switch to style: `/output-style security-auditor`.
  4. Request an API endpoint implementation and verify response formatting.
- **Expected Output:**
  Response strictly follows the STRIDE threat model and OWASP checklist structure.
- **Success Criteria:** Custom output style persisted to `~/.claude/output-styles/` and active.

---

# SECTION 3: Deterministic Hooks, Skills & Plugins (Labs 21–28)

### Lab 21: Hook Lifecycle Event Logging (🟡)
- **Objective:** Implement an append-only audit logger capturing `SessionStart`, `PreToolUse`, `PostToolUse`, and `Stop` events.
- **Inputs:** Workspace `.claude/settings.json`.
- **Instructions:**
  1. Configure hooks in `.claude/settings.json` for `SessionStart`, `PostToolUse`, and `Stop`.
  2. Direct events to a logging script `.claude/hooks/audit-logger.sh`.
  3. Perform 3 file edits and run tests.
  4. Inspect `.claude/audit.log`.
- **Expected Output:**
  ```text
  [2026-08-23T08:00:00Z] EVENT=SessionStart SESSION_ID=sess_0192a
  [2026-08-23T08:00:15Z] EVENT=PostToolUse TOOL=Edit FILE=src/auth.ts STATUS=success
  [2026-08-23T08:00:30Z] EVENT=Stop DURATION_MS=1250 TOTAL_TOKENS=3420
  ```
- **Success Criteria:** Complete, timestamped audit trail generated automatically.

---

### Lab 22: Hardening Secret Protection with `PreToolUse` Hooks (🔴)
- **Objective:** Write a deterministic `PreToolUse` hook script that blocks all attempts to read `.env`, `.pem`, `.key`, or AWS credentials.
- **Inputs:** POSIX bash or Windows PowerShell script `.claude/hooks/block-secrets.sh`.
- **Instructions:**
  1. Write `.claude/hooks/block-secrets.sh` reading stdin JSON.
  2. Parse tool input for target file paths matching sensitive patterns.
  3. If match found, emit error to stderr and `exit 2`.
  4. Register hook under `PreToolUse` for matcher `"Read"`.
  5. Test: Prompt Claude to `Read .env`.
- **Expected Output:**
  ```text
  [PreToolUse Hook Blocked] Refusing to read protected secret file: .env
  Claude response: "I cannot read .env because the operation was blocked by the security hook."
  ```
- **Success Criteria:** Tool call physically intercepted and blocked prior to file system access.

---

### Lab 23: Format-on-Write & Instant Lint Auto-Fixing (🟡)
- **Objective:** Automatically run Prettier / Black and ESLint / Flake8 after every file edit via `PostToolUse` hooks.
- **Inputs:** Node.js or Python project with formatting tools installed.
- **Instructions:**
  1. Add `PostToolUse` hook in `.claude/settings.json` matching `"Edit|Write"`.
  2. Hook command: `npx prettier --write "$FILE" && npx eslint --fix "$FILE"`.
  3. Ask Claude to edit a TypeScript file with irregular indentation.
  4. Inspect file formatting on disk.
- **Expected Output:**
  File saved and formatted to exact repository standards automatically without extra user prompts.
- **Success Criteria:** All modified files pass linter and formatter checks immediately.

---

### Lab 24: JSON Decision Protocol & Webhook Alerting (🔴)
- **Objective:** Implement advanced JSON-based hook decisions (`allow`, `deny`, `ask`) and send Slack webhook alerts for high-risk commands.
- **Inputs:** Slack incoming webhook URL or local HTTP mock server.
- **Instructions:**
  1. Write a Python hook `.claude/hooks/command_guard.py`.
  2. Intercept `PreToolUse` on matcher `"Bash"`.
  3. If command matches `drop database` or `rm -rf`, post alert to Slack and return JSON `{"action": "ask", "message": "High-risk command detected. Please confirm."}`.
  4. Trigger and verify interactive confirmation prompt.
- **Expected Output:**
  Real-time Slack alert dispatched; Claude CLI displays formatted confirmation prompt.
- **Success Criteria:** Structured JSON decision received and respected by Claude Code engine.

---

### Lab 25: Authoring Auto-Activating Agent Skills (🟡)
- **Objective:** Author an auto-activating skill `.claude/skills/error-handling/SKILL.md` that enforces standard API error envelopes.
- **Inputs:** Workspace directory.
- **Instructions:**
  1. Create `.claude/skills/error-handling/SKILL.md`.
  2. Add YAML frontmatter with precise `name` and `description`.
  3. Detail standard JSON error response schema: `{ error: { code, message, requestId } }`.
  4. Ask Claude to write an Express/FastAPI route handler without mentioning the skill.
- **Expected Output:**
  Claude writes the handler using the exact error envelope specified in the skill unprompted.
- **Success Criteria:** Skill auto-activates purely based on semantic context match.

---

### Lab 26: Progressive Disclosure in Multi-File Skills (🟡)
- **Objective:** Build a complex skill utilizing `scripts/`, `examples/`, and `references/` subdirectories loaded on-demand.
- **Inputs:** Database optimization workflow.
- **Instructions:**
  1. Create skill `.claude/skills/db-optimizer/` with `SKILL.md`, `scripts/analyze_indexes.py`, and `examples/pg_stat_plans.sql`.
  2. Reference scripts inside `SKILL.md` using progressive disclosure instructions.
  3. Request database performance analysis in session.
- **Expected Output:**
  Claude inspects `SKILL.md` first, then selectively executes `analyze_indexes.py` only when deep index analysis is required.
- **Success Criteria:** Helper scripts loaded and executed on-demand without bloating initial context.

---

### Lab 27: Auditing & Sandboxing Marketplace Plugins (🟡)
- **Objective:** Install, audit, and safely test a third-party plugin from the community marketplace.
- **Inputs:** Marketplace plugin identifier (e.g., `code-review@claude-code`).
- **Instructions:**
  1. Run `/plugin marketplace list`.
  2. Install plugin: `/plugin install code-review@claude-code`.
  3. Inspect installed files under `~/.claude/plugins/` for security, tools, hooks, and permissions.
  4. Test plugin commands on a sample commit.
- **Expected Output:**
  Plugin installed cleanly; inspection confirms safe tool permissions and zero unauthorized network egress.
- **Success Criteria:** Complete security assessment documented prior to production usage.

---

### Lab 28: Packaging & Publishing Custom Enterprise Plugins (🔴)
- **Objective:** Package commands, skills, subagents, and hooks into a redistributable enterprise plugin repository.
- **Inputs:** Custom development utilities created in earlier labs.
- **Instructions:**
  1. Structure directory: `plugin-enterprise-security/` with `plugin.json`, `skills/`, `commands/`, `hooks/`, and `agents/`.
  2. Author `plugin.json` manifest with version, author, and description.
  3. Test local plugin installation: `/plugin install ./plugin-enterprise-security`.
  4. Verify all included commands and hooks function correctly.
- **Expected Output:**
  ```text
  ✔ Installed plugin 'enterprise-security' (v1.0.0)
  Loaded: 2 skills, 3 commands, 2 hooks, 1 subagent.
  ```
- **Success Criteria:** One-command installation successfully equips a clean workstation with the full toolset.

---

# SECTION 4: Model Context Protocol (MCP) Engineering (Labs 29–37)

### Lab 29: MCP Client Scoping & Tool Impact Profiling (🟡)
- **Objective:** Connect external MCP servers across `local`, `project`, and `user` scopes and measure per-prompt context overhead.
- **Inputs:** GitHub / SQLite MCP servers.
- **Instructions:**
  1. Add project-scoped MCP server: `claude mcp add --scope project --transport stdio sqlite npx -y @modelcontextprotocol/server-sqlite --db-path ./app.db`.
  2. Inspect `.mcp.json` generated in project root.
  3. Run `/mcp` in session to verify active tool schemas.
  4. Measure token increase via `/context`.
  5. Remove server when done: `claude mcp remove sqlite`.
- **Expected Output:**
  `.mcp.json` committed to git; tools dynamically registered in active session; clean removal reduces prompt size.
- **Success Criteria:** Scoped MCP configuration operational with zero orphaned context.

---

### Lab 30: Building a Python FastMCP Server from Scratch (stdio) (🔴)
- **Objective:** Build and test a standalone Python MCP server exposing custom database metrics using the official `mcp` FastMCP SDK.
- **Inputs:** Python 3.10+, `pip install mcp`.
- **Instructions:**
  1. Write `server.py` using `from mcp.server.fastmcp import FastMCP`.
  2. Define tool `@mcp.tool()` `get_table_row_count(table_name: str) -> int`.
  3. Define tool `@mcp.tool()` `explain_slow_queries(threshold_ms: int) -> list[str]`.
  4. Run `server.py` over stdio transport.
  5. Register with Claude Code: `claude mcp add --transport stdio db-monitor python server.py`.
  6. Prompt Claude: `Use db-monitor to check row count in users table`.
- **Expected Output:**
  Claude invokes `db-monitor:get_table_row_count(table_name='users')` and reports the exact count.
- **Success Criteria:** Custom Python tool called successfully over stdio JSON-RPC.

---

### Lab 31: Building a TypeScript MCP Server with Zod Validation (stdio) (🔴)
- **Objective:** Construct a production-grade TypeScript MCP server using `@modelcontextprotocol/sdk` and `zod` schema validation.
- **Inputs:** Node.js 20+, TypeScript, `@modelcontextprotocol/sdk`, `zod`.
- **Instructions:**
  1. Initialize TypeScript project; define MCP server instance.
  2. Create tool `inspect_jwt_token` validating inputs with `z.object({ token: z.string().min(10) })`.
  3. Implement handler returning decoded payload and expiration status.
  4. Build to `dist/server.js`.
  5. Connect to Claude Code and verify tool invocation.
- **Expected Output:**
  Claude calls `inspect_jwt_token` with provided token string and formats the decoded claims.
- **Success Criteria:** Zod validation rejects malformed inputs; valid tokens decoded cleanly.

---

### Lab 32: Implementing Dynamic MCP URI Resources (🔴)
- **Objective:** Expose real-time dynamic application data feeds using MCP Resources (`logs://realtime`, `metrics://system`).
- **Inputs:** Custom Python/TypeScript MCP server.
- **Instructions:**
  1. Define resource template in MCP server: `@mcp.resource("metrics://cpu-memory")`.
  2. Implement handler returning current system CPU load and RAM usage as JSON.
  3. Connect server to Claude Code.
  4. In session, prompt: `Read resource metrics://cpu-memory and assess system health`.
- **Expected Output:**
  Claude reads the dynamic resource directly without tool-call execution and summarizes live system metrics.
- **Success Criteria:** Dynamic resource URI read cleanly and rendered in context.

---

### Lab 33: Remote MCP Server Deployment over HTTP/SSE (🔴)
- **Objective:** Deploy an MCP server over Server-Sent Events (SSE) to a cloud provider with Bearer token authentication.
- **Inputs:** Cloud hosting environment (Fly.io/Render) or local HTTP mock.
- **Instructions:**
  1. Build FastAPI/Express app exposing `/sse` and `/messages` endpoints.
  2. Implement Bearer token authorization middleware.
  3. Deploy service and obtain public HTTPS URL.
  4. Register with Claude Code: `claude mcp add --transport http cloud-infra https://api.enterprise.com/mcp --header "Authorization: Bearer SECRET_KEY"`.
  5. Test remote tool calls from Claude Code CLI.
- **Expected Output:**
  Successful SSE handshake; remote tools listed in `/mcp` and executable from local CLI.
- **Success Criteria:** End-to-end remote tool execution over authenticated HTTPS/SSE stream.

---

### Lab 34: Interactive MCP Elicitation Workflows (🔴)
- **Objective:** Implement MCP tools that trigger interactive user confirmation prompts before executing destructive operations.
- **Inputs:** Custom MCP server with database dropping capabilities.
- **Instructions:**
  1. Author an MCP tool `execute_raw_ddl(sql: str)`.
  2. Enable elicitation flag requiring explicit interactive confirmation with parameter review.
  3. Trigger tool in Claude Code session.
  4. Review and approve the interactive prompt in terminal.
- **Expected Output:**
  CLI halts execution, presents interactive prompt: `Allow db-tool to execute 'DROP TABLE temp_logs'? [y/N]`.
- **Success Criteria:** Action blocked until user types `y`.

---

### Lab 35: MCP Server Debugging & Protocol Packet Sniffing (🟡)
- **Objective:** Debug MCP communication failures using protocol packet logging and the official MCP Inspector utility.
- **Inputs:** `npx @modelcontextprotocol/inspector`.
- **Instructions:**
  1. Launch MCP Inspector: `npx @modelcontextprotocol/inspector node dist/server.js`.
  2. Open browser UI at `http://localhost:5173`.
  3. Test JSON-RPC handshakes, tool executions, and resource listings in GUI.
  4. Identify and fix a simulated schema mismatch error.
- **Expected Output:**
  Detailed JSON-RPC request/response frames visualized in inspector UI.
- **Success Criteria:** Root cause of schema mismatch diagnosed and corrected.

---

### Lab 36: Multi-Server MCP Gateway & Aggregator (🔴)
- **Objective:** Build an MCP Aggregator proxy server that combines multiple microservice MCP endpoints into a single unified client connection.
- **Inputs:** 3 independent microservice MCP servers.
- **Instructions:**
  1. Build Gateway server routing requests to Service A (Auth), Service B (Billing), Service C (Inventory).
  2. Namespace tools: `auth__validate_token`, `billing__charge_card`, `inventory__check_stock`.
  3. Register gateway in `.mcp.json`.
  4. Execute a multi-domain query in Claude Code.
- **Expected Output:**
  Claude Code executes a composite workflow calling tools across all 3 backend services via single gateway connection.
- **Success Criteria:** Seamless multi-server tool federation through one gateway.

---

### Lab 37: Disconnection Discipline & Context Reclamation (🟢)
- **Objective:** Benchmark session latency and token consumption before and after decommissioning idle MCP servers.
- **Inputs:** Session with 4 active MCP servers.
- **Instructions:**
  1. Measure baseline context token count with 4 active servers via `/context`.
  2. Run `claude mcp remove` on 3 unused servers.
  3. Re-run `/context` and compare token footprint.
- **Expected Output:**
  Instant reduction of 4,000–8,000 prompt tokens and noticeable reduction in time-to-first-token.
- **Success Criteria:** Operational habit established: mount only what is needed, disconnect immediately after.

---

# SECTION 5: Subagents, Parallel Swarms & Concurrency (Labs 38–44)

### Lab 38: Authoring Read-Only Code Reviewer Subagent (🟡)
- **Objective:** Build `.claude/agents/code-reviewer.md` with read-only tool restrictions to provide unpolluted, objective PR reviews.
- **Inputs:** Workspace directory.
- **Instructions:**
  1. Create `.claude/agents/code-reviewer.md`.
  2. Restrict tools in frontmatter: `tools: [Read, Grep, Glob, Bash]`.
  3. Instruct persona to audit for security, correctness, and missing tests without making file edits.
  4. Invoke in session: `Use the code-reviewer subagent to audit uncommitted changes`.
- **Expected Output:**
  Subagent executes independently in child context; returns concise markdown report with severity ratings (Blocker/Warning/Nit) to main session.
- **Success Criteria:** Main conversation context remains completely free of verbose search steps.

---

### Lab 39: Model Tiering in Subagent Pipelines (🟡)
- **Objective:** Route initial repository search and classification to Haiku subagents while reserving Sonnet/Opus for implementation.
- **Inputs:** Large codebase with 100+ files.
- **Instructions:**
  1. Create `.claude/agents/repo-indexer.md` configured with `model: claude-3-5-haiku-20241022`.
  2. Create `.claude/agents/architect.md` configured with `model: claude-3-7-sonnet-20250219`.
  3. Run multi-stage refactor: Subagent 1 indexes endpoints; Subagent 2 produces design spec.
  4. Inspect token cost difference.
- **Expected Output:**
  Massive file scanning conducted at Haiku pricing ($0.80/MTok vs $3.00/MTok), saving 70%+ on exploration phase.
- **Success Criteria:** Two-stage model tiered pipeline completes with optimal cost profile.

---

### Lab 40: Parallel Multi-Domain Review Swarm (🔴)
- **Objective:** Dispatch 3 parallel subagents simultaneously (Security Specialist, Performance Engineer, QA Lead) to audit a pull request.
- **Inputs:** Pull request branch with full-stack modifications.
- **Instructions:**
  1. Define 3 specialized subagent configurations under `.claude/agents/`.
  2. Submit prompt: `Run 3 subagents in parallel: 1. security-agent, 2. performance-agent, 3. qa-agent on current git diff. Aggregate findings into a unified matrix.`
  3. Observe parallel execution streams.
- **Expected Output:**
  Concurrent processing in terminal; 3 independent review streams synthesized into one unified risk matrix.
- **Success Criteria:** Total review completed in 1/3 the time of sequential execution.

---

### Lab 41: Supervisor-Worker Hierarchical Decomposition (🔴)
- **Objective:** Build a supervisor agent that decomposes a large user story into 3 atomic work packets and assigns them to worker subagents.
- **Inputs:** Complex user story (e.g., "Add OAuth2 Google Login").
- **Instructions:**
  1. Author supervisor prompt decomposing work into: 1. Schema migration; 2. Backend passport strategy; 3. Frontend login button.
  2. Supervisor triggers worker subagents sequentially, verifying acceptance criteria between steps.
  3. Verify final integration.
- **Expected Output:**
  Structured execution log showing task decomposition, subagent delegation, validation, and final integration.
- **Success Criteria:** All 3 sub-tasks successfully integrated and verified with end-to-end tests.

---

### Lab 42: Concurrent Multi-Branch Development with Git Worktrees (🟡)
- **Objective:** Run two independent Claude Code sessions simultaneously on the same repository using Git Worktrees without file collisions.
- **Inputs:** Git repository.
- **Instructions:**
  1. In terminal 1: `git worktree add ../project-feature-auth -b feature/auth`.
  2. In terminal 2: `git worktree add ../project-feature-billing -b feature/billing`.
  3. Launch `claude` in both directories simultaneously.
  4. Instruct Session 1 to build Auth, Session 2 to build Billing.
  5. Verify that git branches and file edits remain completely isolated.
- **Expected Output:**
  Two parallel Claude Code sessions editing code at the same time with zero lock contention or file overwrite errors.
- **Success Criteria:** Both features committed to their respective branches and cleanly merged to main.

---

### Lab 43: Cloud Sandbox Dispatch on Claude Code on the Web (🟡)
- **Objective:** Dispatch an asynchronous, long-running refactoring task to Claude Code on the web (`claude.ai/code`) using the `&` background operator.
- **Inputs:** GitHub-connected repository.
- **Instructions:**
  1. In local CLI, prefix prompt with `&`: `& Refactor all integration tests from Jest to Vitest across the entire repository`.
  2. Observe task handoff to Anthropic-hosted cloud sandbox.
  3. Open `claude.ai/code` on browser/mobile to inspect live progress.
  4. Review completed cloud PR.
- **Expected Output:**
  Task successfully offloaded to cloud infrastructure; local terminal freed immediately; PR generated on GitHub.
- **Success Criteria:** Remote task executed in isolated cloud sandbox without local terminal dependency.

---

### Lab 44: Bidirectional Session Teleportation (Terminal ↔ Web) (🔴)
- **Objective:** Teleport an active session's conversation context, history, and uncommitted branch between local terminal and cloud web interface.
- **Inputs:** Active session in terminal and web UI.
- **Instructions:**
  1. Start complex task on local terminal: `claude`.
  2. Teleport session to cloud: `/teleport web`.
  3. Continue session on browser at `claude.ai/code`.
  4. Teleport back to local terminal: `claude --resume <session-id>`.
- **Expected Output:**
  Full context window, tool call history, and working tree state restored seamlessly on local machine.
- **Success Criteria:** Zero lost conversation turns or duplicate tool executions during migration.

---

# SECTION 6: Headless CI/CD, Agent SDK & Enterprise Evals (Labs 45–50)

### Lab 45: Headless Scripting & JSON Pipeline Automation (`-p`) (🟡)
- **Objective:** Drive Claude Code headlessly within a shell script and parse structured JSON responses using `jq`.
- **Inputs:** Git repository with unreleased commits.
- **Instructions:**
  1. Write bash script `generate-changelog.sh`.
  2. Execute: `claude -p "Generate a JSON changelog of commits since last tag with fields: version, features, bugfixes, breaking_changes" --output-format json > changelog.json`.
  3. Parse results with `jq '.features[]' changelog.json`.
- **Expected Output:**
  Valid JSON document saved to disk and parsed cleanly with standard Unix CLI tools.
- **Success Criteria:** Zero markdown wrapper artifacts; valid JSON schema guaranteed.

---

### Lab 46: Deploying an Autonomous GitHub Actions PR Review Bot (🔴)
- **Objective:** Construct and deploy a production `.github/workflows/claude-review.yml` workflow that reviews incoming PRs automatically.
- **Inputs:** GitHub repository, `ANTHROPIC_API_KEY` repository secret.
- **Instructions:**
  1. Author `.github/workflows/claude-review.yml` triggered on `pull_request: [opened, synchronize]`.
  2. Configure step to check out repo and run `claude -p "Review this PR diff for security vulnerabilities, bugs, and performance regressions. Post findings as a concise checklist."`.
  3. Use GitHub CLI `gh pr comment` to publish the review.
  4. Open a test PR with an intentional SQL injection flaw and verify bot commentary.
- **Expected Output:**
  Autonomous bot comment posted on PR within 60 seconds identifying the SQL injection with line-specific fix recommendations.
- **Success Criteria:** Automated GitHub Action runs successfully and posts actionable review comments.

---

### Lab 47: Building a Custom Python Agent with the Claude Agent SDK (🔴)
- **Objective:** Build a standalone Python application that runs the Claude Code agent loop using the `claude_agent_sdk` library.
- **Inputs:** Python 3.10+, `pip install claude-agent-sdk`.
- **Instructions:**
  1. Author `agent_runner.py` importing `query` from `claude_agent_sdk`.
  2. Configure allowed tools `["Read", "Edit", "Bash"]` and permission mode `"default"`.
  3. Stream agent loop steps: print tool invocations, stdout observations, and final assistant responses.
  4. Run script against a real bugfix task.
- **Expected Output:**
  ```text
  [Agent Step 1] ToolCall: Read(path="src/main.py")
  [Agent Step 2] ToolResult: (250 lines read)
  [Agent Step 3] ToolCall: Edit(path="src/main.py", ...)
  [Agent Step 4] Assistant: "Bug resolved and validated with test suite."
  ```
- **Success Criteria:** Programmatic agent loop executes in student's own Python process.

---

### Lab 48: Interactive Human-in-the-Loop Web Dashboard for Agent SDK (🔴)
- **Objective:** Build a Next.js / FastAPI web interface that controls an Agent SDK process with interactive human-in-the-loop tool approvals.
- **Inputs:** TypeScript / Next.js starter.
- **Instructions:**
  1. Build backend API exposing WebSocket connection to an Agent SDK query stream.
  2. Implement `canUseTool` callback intercepting risky tool calls.
  3. Render live approval cards in frontend UI with `[Approve]` and `[Reject]` buttons.
  4. Test rejecting a file deletion action from the web UI.
- **Expected Output:**
  Web UI displays real-time agent thoughts; prompts user for confirmation; agent cleanly aborts rejected tool call.
- **Success Criteria:** Full human-in-the-loop web control over headless agent actions.

---

### Lab 49: Automated Skill Evals & Regression Testing Harness (🔴)
- **Objective:** Build an automated evaluation suite to benchmark accuracy, tool precision, and regression resistance of custom skills.
- **Inputs:** Python testing framework (pytest), prompt evaluation dataset.
- **Instructions:**
  1. Create evaluation dataset `evals/skills_test_cases.json` containing 10 input prompts and expected tool calls.
  2. Write `run_evals.py` executing headless Claude runs against all test cases.
  3. Score outputs on: 1. Tool selection accuracy; 2. Negative constraint compliance; 3. Output schema validity.
  4. Generate pass/fail evaluation report with `pass@1` metrics.
- **Expected Output:**
  ```text
  === CLAUDE SKILL EVALUATION REPORT ===
  Total Test Cases: 10
  Passed: 10 / 10 (100%)
  Tool Calling Accuracy: 100%
  Constraint Adherence: 100%
  Average Latency: 1.84s
  Status: PASSED - READY FOR PRODUCTION
  ```
- **Success Criteria:** Automated test harness produces deterministic quantitative benchmark score.

---

### Lab 50: FinOps Token Attribution & Real-Time Cost Dashboard (🔴)
- **Objective:** Instrument Claude Code telemetry with OpenTelemetry/Prometheus to track token consumption, cache hit ratios, and costs across engineering squads.
- **Inputs:** Prometheus & Grafana instances (or local Docker container).
- **Instructions:**
  1. Configure `PostToolUse` and `Stop` hooks to emit OpenTelemetry metric spans on every turn.
  2. Record metrics: `claude_input_tokens_total`, `claude_output_tokens_total`, `claude_cache_read_tokens_total`, `claude_cost_usd_total` tagged by `squad_name`.
  3. Build Grafana dashboard visualizing burn rate, cost per developer, and cache efficiency.
- **Expected Output:**
  Real-time Grafana dashboard displaying active token burn rate, cache savings in USD, and squad quota utilization.
- **Success Criteria:** Live metrics streaming to monitoring dashboard with accurate cost calculations.

---

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               50 LABS COMPLETION MATRIX                                │
├────────────────────────────────┬───────────────────────┬───────────────────────────────┤
│ SECTION                        │ LAB NUMBERS           │ FOCUS AREA                    │
├────────────────────────────────┼───────────────────────┼───────────────────────────────┤
│ 1. CLI Fundamentals & Steering │ Labs 1–10             │ CLI, Doctor, CLAUDE.md, Loop  │
│ 2. Context Engineering & Memory│ Labs 11–20            │ Caching, Compact, Memory, Cmds│
│ 3. Hooks, Skills & Plugins     │ Labs 21–28            │ Pre/PostToolUse, JSON, Plugins│
│ 4. MCP Server Engineering      │ Labs 29–37            │ Python, TS, SSE, Resources    │
│ 5. Subagents & Swarms          │ Labs 38–44            │ Tiering, Swarms, Worktrees,Web│
│ 6. CI/CD, Agent SDK & FinOps   │ Labs 45–50            │ Headless, Actions, SDK, Evals │
└────────────────────────────────┴───────────────────────┴───────────────────────────────┘
```
