---
difficulty: Advanced
duration: 30-45 min
tags:
- assessment
- week7
title: Week 7 - CI/CD & Agent SDK Assessment
week: 7
---

# Week 7 - CI/CD & Agent SDK Assessment

## Overview
- 10-15 scenario-based assessment questions covering all Week 7 topics.
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
