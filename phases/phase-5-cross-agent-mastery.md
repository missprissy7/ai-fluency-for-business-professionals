# Phase 5: Cross-Agent Mastery (Week 5)

> **Goal:** Move from being fluent in AI to being strategic about it. Know which of the four tools to use, when, and why — and build workflows that combine them deliberately.

## Overview

Phases 1–4 taught you to use AI well. Phase 5 is about using the right AI for the right job.

Most professionals pick one tool and use it for everything. That is like using a hammer for every home repair task. By the end of Phase 5, you will have a working decision framework — one you built from your own experience — that tells you when to reach for ChatGPT, Claude, Gemini, or Perplexity.

**By the end of Phase 5, you will:**
- Make deliberate, reasoned tool choices for specific task types
- Run multi-tool workflows where each agent handles its strongest role
- Update your prompt library to specify which tool each template performs best on
- Complete a cross-agent capstone that combines at least three of the four tools
- Articulate your AI approach clearly enough to teach it to someone else

## Prerequisites

- [ ] Completed all Phase 4 activities including the capstone
- [ ] Have a working prompt library from Phase 2 (updated in Activity 4.3)
- [ ] Comfortable switching between at least two tools
- [ ] Have a documented workflow from Activity 3.4

**Time Commitment:** 7–10 hours total across the week.

## Required Reading

| Topic | Note |
|-------|------|
| Multi-model thinking | concepts/multi-model-thinking.md |
| What is an AI agent? | concepts/what-is-an-agent.md |
| What is tool calling? | concepts/what-is-tool-calling.md |

---

## The Four Agents: Your Decision Framework

Use this as your starting point. You will test and refine it this week based on your own experience.

### ChatGPT (OpenAI)
**Reach for it when:**
- You need the broadest general-purpose assistance
- You want to use plugins, custom GPTs, or specialized add-ons
- You are doing creative work — brainstorming, ideation, drafts with personality
- You need voice mode for hands-free AI interaction
- Your task does not have a clearly "best" tool

**Watch out for:**
- Higher hallucination rate than Claude on factual claims
- Responses that are confident but have not been verified

---

### Claude (Anthropic)
**Reach for it when:**
- Accuracy matters — you need the most reliable factual output
- You are working with long documents (contracts, reports, research)
- You need careful, nuanced analysis or writing
- You are asking it to review, critique, or improve a draft
- You want it to say "I don't know" instead of guessing

**Watch out for:**
- No built-in web browsing or real-time search on free tier
- Can be more cautious than other tools on sensitive topics

---

### Gemini (Google)
**Reach for it when:**
- You are working inside Google Workspace (Gmail, Docs, Slides, Sheets)
- You need real-time information and current events
- You are working with images, PDFs, or multimedia alongside text
- You want AI that integrates directly with your existing Google tools
- You need to summarize or analyze YouTube videos

**Watch out for:**
- Quality can vary on very long context tasks
- Less specialized for technical writing or coding than Claude

---

### Perplexity
**Reach for it when:**
- You need research with cited, verifiable sources
- You want to fact-check something before using it
- You are exploring a new topic and need reliable starting points
- You need current information with links you can follow up on
- You are preparing for a meeting and need credible data points quickly

**Watch out for:**
- Less useful for creative or generative writing tasks
- Answer format is optimized for research, not drafting

---

## Hands-On Activities

### Activity 5.1: The Tool Decision Audit (60 minutes)

**Objective:** Map your work tasks to the right tool using a deliberate decision process.

**Steps:**

1. Open your prompt library from Phase 2 (notes/my-prompt-library.md)
2. For each prompt template, answer these three questions:
   - Does this task require real-time or cited information? → **Perplexity**
   - Does this task require maximum accuracy on a long document? → **Claude**
   - Does this task live inside Google Workspace? → **Gemini**
   - Everything else → **ChatGPT or Claude** (test both)
3. Add a "Best Tool" column to each template in your library
4. Test at least 3 templates on two different tools and record which produced better output

**Reflection Questions:**
- Were your assumptions about which tool was best confirmed or challenged by the test?
- Did any task produce surprisingly similar results on both tools?
- Are there tasks where you still cannot decide? What would help you decide?

**Deliverable:** Post in the issue comment: List 3 templates from your library and which tool you assigned to each, with one sentence explaining why.

---

### Activity 5.2: The Multi-Tool Workflow (90 minutes)

**Objective:** Build and run a workflow where two or more tools each handle a step they are best at.

This is how professional AI users actually work. Not one tool for everything — a deliberate handoff between tools.

**Example workflow:**

> Research a client's industry → **Perplexity** (cited sources, current data)
> Analyze the research and identify key themes → **Claude** (accuracy, long context)
> Draft a client brief from the themes → **ChatGPT** (creative, polished prose)

**Steps:**

1. Choose a real work task that involves at least two distinct stages:
   - Research → then writing
   - Analysis → then communication
   - Data gathering → then planning

2. Design a 2–3 step workflow where each step uses a different tool chosen deliberately

3. Run the full workflow:
   - Complete Step 1 on Tool A
   - Copy the output and use it as input for Step 2 on Tool B
   - If Step 3 exists, repeat

4. Document the handoff — what did you copy from one tool into the next?

5. Evaluate: Was the final output better than if you had done all steps on one tool?

**Reflection Questions:**
- Where was the handoff awkward? What would make it smoother?
- Was the improvement worth the extra time of switching tools?
- What other workflows in your job could benefit from this approach?

**Deliverable:** Post in the issue comment: Describe your 2–3 step workflow, which tools you used at each step, and whether the result was better than single-tool output.

---

### Activity 5.3: Stress-Test the Decision Framework (60 minutes)

**Objective:** Find the edge cases where the framework breaks down.

No framework survives contact with reality perfectly. This activity is about honest testing.

**Steps:**

1. Take three tasks where your decision framework gives a clear answer (you know which tool to use)
2. Run each task on the "wrong" tool — the one your framework says is NOT the best choice
3. Compare results honestly

4. Now try two tasks that your framework does NOT clearly resolve — tasks where you genuinely are not sure which tool to use
5. Run them on two tools and document what you find

**Reflection Questions:**
- Was the "wrong" tool actually worse? By how much?
- Did testing the edge cases change your framework at all?
- Are there tasks where the answer genuinely does not matter — where any tool will do?

**Deliverable:** Post in the issue comment: One case where the "wrong" tool surprised you by performing well, and one case where your framework held up perfectly.

---

### Activity 5.4: Cross-Agent Capstone (2–3 hours)

**Objective:** Complete a substantial professional deliverable using at least three of the four tools, with a documented rationale for every tool choice.

This is your Phase 5 proof of mastery. The deliverable itself matters. But the rationale document matters equally — it shows that your tool choices were intentional, not random.

**Steps:**

1. Choose a capstone deliverable that has at least three distinct phases:
   - Examples:
     - Research brief + analysis memo + executive presentation outline
     - Competitive landscape research + strategic recommendation + stakeholder email
     - Process audit + improvement proposal + implementation checklist

2. Before you start, write your tool plan in notes/cross-agent-capstone-plan.md:
   - Step 1: [Task] → Tool: [Tool] → Reason: [Why this tool]
   - Step 2: [Task] → Tool: [Tool] → Reason: [Why this tool]
   - Step 3: [Task] → Tool: [Tool] → Reason: [Why this tool]

3. Execute the plan. As you work, note:
   - Any point where a tool did not perform as expected
   - Any point where you switched tools mid-step and why

4. Complete your process document in notes/cross-agent-capstone-plan.md with actual results added alongside your plan:
   - What actually happened vs. what you planned
   - Key prompts used at each step
   - What you would do differently

5. Final quality check on the deliverable:
   - Is the output professional enough to share?
   - Is every factual claim verified?
   - Does the whole thing hang together as a coherent document?

**Deliverable:** Post in the issue comment:
1. Your final deliverable (or meaningful excerpt)
2. Your completed tool plan document showing what you planned vs. what actually happened
3. One sentence: What is the most important thing you learned from this program?

---

## The Graduate Standard

A learner who completes Phase 5 can:

- Open any of the four tools and start a productive conversation immediately
- Structure prompts that work across all four agents
- Evaluate output critically and catch errors before they cause problems
- Make deliberate tool choices based on task type
- Design multi-tool workflows for complex work
- Explain their AI approach to a colleague clearly and concisely

This is the standard. Not "I know what AI is." But: "I use AI deliberately, I know when it helps and when it does not, and I can show you my work."

---

## Updating Your Prompt Library — Final Version

Before you close your Phase 5 issue, do one final update to your prompt library:

1. Every template now has a "Best Tool" annotation
2. You have added any new templates discovered during Phase 5
3. You have removed or revised any templates that did not survive testing
4. The Quick Reference table at the top is current

This library is your most durable artifact from the program. Tools will change. The habit of building and maintaining a personal AI toolkit will not.

---

## Self-Assessment

| Skill | Not Yet | Getting There | Got It |
|-------|---------|---------------|--------|
| I can explain when to use each of the four tools | [] | [] | [] |
| I have run a multi-tool workflow and evaluated it | [] | [] | [] |
| I have stress-tested my decision framework honestly | [] | [] | [] |
| I completed the cross-agent capstone | [] | [] | [] |
| My prompt library has tool annotations on every template | [] | [] | [] |

**Program complete when:** All five items are Got It.

---

**Previous:** phases/phase-4-mastery.md

---

> *This curriculum was built for business professionals who learn by doing. If you have feedback on this phase — what worked, what confused you, what was missing — post it in your Phase 5 issue comment. Teacher Scott reads every one.*
