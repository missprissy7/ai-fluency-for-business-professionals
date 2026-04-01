# AI Business Training — Module 2 Knowledge Base
## "Using the Tools: How to Talk to AI and Get What You Actually Need"
### Teacher Scott | KEDAL Solutions

---

## MODULE OVERVIEW

Module 1 established *why* AI changes everything. Module 2 is about *how* to use it. This is the hands-on session. Every concept is immediately followed by a task. Learners leave with outputs they actually made — not just understanding they accumulated.

**Core premise:** Most people who try AI and walk away frustrated made one of three mistakes:
1. They gave it too little context
2. They accepted the first output without iterating
3. They used the wrong tool for the task

This module fixes all three.

---

## PART 1 — HOW AI ACTUALLY WORKS (JUST ENOUGH THEORY)

### What learners need to know (and nothing more)

AI language models don't "know" things the way people do. They predict the most likely next word based on patterns learned from enormous amounts of text. This means:

- They are excellent at tasks that involve language: drafting, summarizing, restructuring, explaining, translating tone
- They are unreliable for tasks that require current facts, precise numbers, or specialized real-time data (unless paired with search tools like Perplexity)
- The quality of what they produce is directly tied to the quality of what you give them

**The garbage-in / garbage-out principle:** If you give AI vague input, you get vague output. If you give it specific, structured input, you get specific, usable output.

**The autocomplete mental model:** Think of AI as the most sophisticated autocomplete ever built. It is trying to continue your thought in the most useful direction possible. Your job is to give it enough of a starting point that "continuing your thought" produces what you actually need.

---

## PART 2 — ANATOMY OF A GOOD PROMPT

### The 5 Elements of a Strong Prompt

Every effective prompt contains some combination of these five elements. Not all five are always needed — but knowing them lets you diagnose why a prompt failed.

| Element | What it is | Example |
|---|---|---|
| **Role** | Who should AI be in this conversation? | "You are a healthcare compliance officer with 15 years of experience..." |
| **Task** | What specific action do you want? | "Write a 3-paragraph summary of..." / "Generate a list of..." / "Review this and flag..." |
| **Context** | Background information AI needs to do the task well | "This is for a 450-bed regional hospital preparing for a Joint Commission audit..." |
| **Format** | How should the output be structured? | "Use bullet points." / "Write this as a professional email." / "Organize by priority." |
| **Constraints** | What should AI NOT do? What limits apply? | "Keep it under 200 words." / "Do not include legal advice." / "Avoid jargon." |

**The minimum viable prompt** for most business tasks: Task + Context. Add Role when the output needs a specific expertise lens. Add Format when structure matters. Add Constraints when you know what went wrong the last time.

---

### Prompt Levels: Before, Basic, Better, Best

The best way to teach prompting is to show the same task at different quality levels.

**Example task: Write a prior authorization appeal letter**

**Level 1 — No context (what most people start with):**
```
Write a prior authorization appeal letter.
```
*Result: Generic template. Usable as a starting point, but requires significant rewriting.*

**Level 2 — Task + basic context:**
```
Write a prior authorization appeal letter for a patient denied coverage for a continuous glucose monitor.
```
*Result: Better. Still generic. Lacks clinical specifics that make appeals win.*

**Level 3 — Task + full context + format:**
```
Write a prior authorization appeal letter for a 58-year-old patient with Type 2 diabetes and peripheral neuropathy who was denied coverage for a continuous glucose monitor. The denial reason was "not medically necessary." Include: clinical criteria from ADA 2024 standards, patient's documented hypoglycemic episodes (3 ER visits in the past 12 months), and a cost-effectiveness argument. Format as a professional letter from the treating physician. Keep it under one page.
```
*Result: Clinically specific, structured, ready for physician review with minor edits.*

**Level 4 — Role + Task + full context + format + constraints:**
```
You are a medical appeals specialist with expertise in diabetes care coverage. Write a prior authorization appeal letter for a 58-year-old patient with Type 2 diabetes and peripheral neuropathy denied coverage for a continuous glucose monitor. Denial reason: "not medically necessary." 

Include:
- Clinical justification citing ADA 2024 Standards of Medical Care in Diabetes (Section 7 on CGM)
- Documentation of 3 ER visits in the past 12 months due to hypoglycemic episodes
- Cost-effectiveness argument: CGM vs. ongoing ER costs
- A specific request for peer-to-peer review

Format: Professional letter from treating physician. Under one page. No legal claims. No guarantees of coverage.
```
*Result: Ready to submit with minimal physician review. Structured, credible, specific.*

---

### The Iteration Principle

The first output is almost never the final output. AI is a conversation, not a vending machine. The fastest path to a great output is:

1. Give a solid Level 3 prompt
2. Read the output critically — what's missing? What's wrong? What's the wrong tone?
3. Follow up with specific corrections: "Make it shorter." / "The third paragraph is too technical — simplify it for a non-clinical reviewer." / "Add a section on patient quality of life impact."
4. Repeat until it's right

**The three most useful follow-up prompts:**
- "Make it [shorter / longer / more formal / more conversational]."
- "The [section / paragraph / tone] isn't right because [reason]. Rewrite it."
- "Give me three alternative versions of this, each with a different approach."

---

## PART 3 — OUTPUT EVALUATION

### How to know if AI output is trustworthy

This is the skill most courses skip. It is the most important skill for business professionals.

**The four-question review:**

1. **Is it factually accurate?** For any claim that matters — clinical standards, legal requirements, financial figures — verify against a primary source. Don't assume. Especially for anything regulatory.

2. **Is it complete?** AI often produces outputs that look complete but are missing a critical piece. Does the appeal letter include the specific clinical criteria? Does the policy summary cover the enforcement section?

3. **Is the tone right?** AI defaults to a professional but generic tone. Does this need to sound like your organization? Like your physician? Like your leadership? Adjust accordingly.

4. **Is there anything you didn't ask for that shouldn't be there?** AI sometimes adds caveats, disclaimers, or sections you didn't request. Review and remove anything that doesn't belong.

---

### The Red Flag List: When to verify before using

Always verify AI output before using it when:
- The output contains specific statistics, percentages, or dollar figures
- It references a specific regulation, law, or accreditation standard by name or number
- It makes clinical recommendations or references clinical guidelines
- It includes a name, title, or contact information
- It claims something is "current" or "as of [year]"

For healthcare specifically: any clinical content that will be reviewed by or presented to a patient, payer, or regulator must be reviewed by a qualified clinician or compliance professional before use.

---

## PART 4 — TASK LIBRARY

### 12 Hands-On Tasks for Module 2

Each task below is a complete practice unit. It includes the scenario, the learning goal, the starter prompt, what good output looks like, and the follow-up challenge.

---

#### TASK 1: The Bad Prompt Fix
**Learning goal:** Understand why vague prompts fail and how to fix them
**Scenario:** Universal business task
**Instructions:** Start with the bad prompt. Observe the output. Then rewrite it using the 5-element framework.

*Bad prompt:*
```
Help me with my email.
```
*Rewritten prompt (learner builds this):*
```
You are a professional business writer. Draft a follow-up email to a hospital department head who attended our AI readiness presentation last week but hasn't responded to our proposal. The tone should be warm but confident. Keep it under 150 words. Include a specific call to action: schedule a 30-minute call this week.
```
**Follow-up challenge:** Ask AI to write three versions — formal, conversational, and urgent.

---

#### TASK 2: The Summarizer
**Learning goal:** Use AI to process long documents quickly
**Scenario:** Healthcare compliance
**Starter prompt:**
```
Summarize the following document in 5 bullet points. For each bullet, note whether it requires action from our team. Flag any deadlines mentioned.

[Paste document or describe: "a 12-page CMS update on prior authorization requirements for Medicare Advantage plans"]
```
**What good output looks like:** 5 crisp bullets, each with an action tag (Action required / No action / Review needed) and any dates extracted.
**Follow-up challenge:** "Now write a 3-sentence executive summary I can send to my COO."

---

#### TASK 3: The Job Description Machine
**Learning goal:** Generate high-quality, role-specific content fast
**Scenario:** Healthcare staffing
**Starter prompt:**
```
Write a job description for a Certified Nursing Assistant (CNA) at a long-term care facility in Georgia. Requirements: Georgia CNA certification, BLS, 1+ year experience preferred. Include: key duties, physical requirements, what makes this facility a great place to work (collaborative culture, growth opportunities, consistent scheduling). Tone: professional but welcoming to new CNAs.
```
**Follow-up challenge:** "Rewrite this for a travel CNA posting — someone doing a 13-week contract, not a permanent hire."

---

#### TASK 4: The Meeting Notes Transformer
**Learning goal:** Turn raw notes into structured, actionable output
**Scenario:** Universal business task
**Starter prompt:**
```
Turn these rough meeting notes into a structured meeting summary with: attendees, decisions made, action items with owners and due dates, and open questions that need follow-up.

[Paste rough notes]
```
**What good output looks like:** Clean, scannable, immediately sendable as a follow-up email.
**Follow-up challenge:** "Now write the follow-up email I'd send to all attendees."

---

#### TASK 5: The Policy Plain-Language Converter
**Learning goal:** Make complex documents accessible to a non-specialist audience
**Scenario:** Healthcare compliance / HR
**Starter prompt:**
```
Rewrite the following HIPAA minimum necessary standard policy in plain language that a front-desk administrative assistant with no compliance background can understand. Use short sentences. Avoid acronyms unless you explain them. Add 2 real-world examples of what this means in their daily work.

[Paste policy section]
```
**Follow-up challenge:** "Now turn this into 5 quiz questions I can use in a training assessment."

---

#### TASK 6: The Proposal Skeleton
**Learning goal:** Use AI to structure complex documents quickly
**Scenario:** Healthcare consulting / business development
**Starter prompt:**
```
Create a proposal outline for an AI readiness assessment engagement for a 200-bed regional hospital. The engagement is 8 weeks. Include: executive summary, problem statement, scope of work (with 4 phases), deliverables, team roles, timeline, and investment range ($15,000–$25,000). Format as a professional consulting proposal outline with section headers and brief descriptions of what each section will contain.
```
**Follow-up challenge:** "Write the executive summary section in full, approximately 3 paragraphs."

---

#### TASK 7: The Objection Handler
**Learning goal:** Use AI for communication prep and role-play
**Scenario:** Universal business task
**Starter prompt:**
```
I'm presenting an AI adoption proposal to a hospital CFO who is skeptical about ROI and worried about data security. Generate 5 likely objections they will raise, and for each objection, write a confident, evidence-based response I can use. Keep each response under 100 words.
```
**Follow-up challenge:** "Now role-play as the skeptical CFO and push back on my responses. I'll respond and you keep challenging me."

---

#### TASK 8: The Research Brief
**Learning goal:** Use AI (with search) to gather intelligence fast
**Scenario:** Healthcare operations / business strategy
**Tool:** Perplexity (for sourced results)
**Starter prompt:**
```
Research the current state of AI adoption in healthcare staffing in the United States as of 2025-2026. Summarize: the top 3 use cases, key vendors in this space, any data on adoption rates or ROI, and one real-world example of a healthcare organization that has implemented AI staffing tools successfully. Cite your sources.
```
**What good output looks like:** A sourced summary you can use in a client presentation or proposal without doing additional research.

---

#### TASK 9: The SOP Builder
**Learning goal:** Capture institutional knowledge in a structured format
**Scenario:** Healthcare operations
**Starter prompt:**
```
Write a standard operating procedure (SOP) for the prior authorization process at a home health agency. Include: trigger conditions, step-by-step process with responsible party for each step, turnaround time expectations, escalation path if denied, and documentation requirements. Format as a numbered SOP with a title, effective date placeholder, and version number.
```
**Follow-up challenge:** "Now identify 3 steps in this SOP where AI could reduce time or error."

---

#### TASK 10: The Tone Shifter
**Learning goal:** Understand how to control voice and tone in AI output
**Scenario:** Universal business task
**Instructions:** Take one piece of existing writing (an email, a policy section, a proposal paragraph). Ask AI to rewrite it in three different tones.
**Starter prompt:**
```
Rewrite the following paragraph in three versions:
1. Executive-level: formal, concise, focused on ROI and risk
2. Staff-level: plain language, encouraging, practical
3. External/client-facing: professional, confident, focused on outcomes

[Paste paragraph]
```
**Learning outcome:** Learners see that the same content can serve different audiences without being rewritten from scratch each time.

---

#### TASK 11: The Fact-Check Exercise
**Learning goal:** Build the habit of verifying AI output
**Scenario:** Healthcare compliance
**Instructions:** Give learners an AI-generated paragraph about a specific regulation (pre-generated by Teacher Scott with 2–3 planted errors). Ask them to fact-check it.
**What to look for:**
- Incorrect section numbers or regulation names
- Outdated figures or deadlines
- Plausible-sounding but inaccurate clinical claims
**Teaching outcome:** The "it looks right" problem. AI output is formatted like truth. Learners need to develop the habit of questioning confident-sounding claims, especially in regulated contexts.

---

#### TASK 12: The Full Workflow
**Learning goal:** String multiple AI tasks into a real workflow
**Scenario:** Healthcare consulting / staffing
**Task sequence:**
1. Use AI to draft a client-facing email introducing your AI readiness assessment service (Task 1 skills)
2. Use AI to build a one-page proposal outline for that service (Task 6 skills)
3. Use AI to anticipate the client's top 3 objections and prepare responses (Task 7 skills)
4. Use AI to summarize the whole package into a 5-bullet executive summary (Task 2 skills)

**This is the capstone task of Module 2.** Learners who complete it have produced a real, usable business development asset using AI as their thought partner throughout.

---

## CURRICULUM STRUCTURE — MODULE 2

### Session Flow (3 hours)
- **Part 1 (30 min):** How AI works + the 5-element prompt framework
- **Part 2 (60 min):** Tasks 1–5 (guided, Teacher Scott models first)
- **Break (15 min)**
- **Part 3 (45 min):** Tasks 6–11 (pairs or small groups)
- **Part 4 (30 min):** Task 12 — The Full Workflow (individual capstone)

### Delivery Notes
- Tasks 1–5 are guided: Teacher Scott does the task live, then learners repeat it
- Tasks 6–11 are semi-independent: learners get the prompt, run it, share results
- Task 12 is fully independent: learners apply the full session to a real work scenario

### Tools Needed
- ChatGPT (free tier works for most tasks)
- Perplexity (for Task 8)
- Optionally: Claude for long-document tasks (Tasks 2, 5, 9)

---

## KEY TERMS — MODULE 2

**Prompt:** The instruction you give to an AI tool. Quality of prompt = quality of output.

**Context window:** The amount of text an AI can "see" at once. Modern models have large context windows — you can paste long documents and ask AI to work with them.

**Iteration:** The process of refining AI output through follow-up prompts. The first output is the starting point, not the final product.

**Role prompting:** Assigning AI a specific persona or expertise level to shape the lens through which it generates output ("You are a healthcare compliance officer...").

**Zero-shot prompt:** A prompt with no examples. Most business prompts are zero-shot.

**Few-shot prompt:** A prompt that includes examples of what good output looks like. Dramatically improves output quality for specialized tasks.

**Hallucination:** AI generating content that sounds plausible but is factually incorrect. Most common with specific numbers, dates, citations, and named regulations.

**Temperature (conceptual):** How "creative" vs. "precise" an AI's responses are. Most business tools let you adjust this — lower temperature = more predictable, higher = more varied. Not all tools expose this setting directly.

---

*End of Module 2 Knowledge Base — Version 1.0 | April 2026*
