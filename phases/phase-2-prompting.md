# Phase 2: Prompting as a Skill (Week 2)

> **Goal:** Build a repeatable, structured prompting method. Stop guessing. Start engineering.

## Overview

Most people treat prompting like guessing. This week you will build a structured method that removes the guesswork. By the end of Phase 2, you will have a personal prompting framework you can use for any task.

**By the end of Phase 2, you will:**
- Use a structured prompt format (ROLE + TASK + FORMAT) consistently
- Iterate and refine AI outputs through multi-turn conversation
- Build prompt templates for your most-repeated work tasks
- Use AI to critique and improve its own outputs

## Prerequisites

- [ ] Completed all Phase 1 activities and posted all deliverables
- [ ] Can open an AI tool and start a productive conversation
- [ ] Understand that prompt quality determines output quality

**Time Commitment:** 5-7 hours total across the week.

## Required Reading

| Topic | Note |
|-------|------|
| What is a model? | concepts/what-is-a-model.md |
| What is context? | concepts/what-is-context.md |
| Prompt structure reference | templates/prompt-template.md |

## Hands-On Activities

### Activity 2.1: The ROLE + TASK + FORMAT Framework (45 minutes)

**Objective:** Learn and apply a structured prompt format that consistently produces better results.

**The Framework:**

The most reliable prompt structure has three parts:

- ROLE: "You are a [type of expert]..."
- TASK: "Your job is to [specific action] for [specific output]..."
- FORMAT: "Present your response as [format, length, style]."

**Example - Unstructured Prompt:**
"Write me a project summary."

**Example - ROLE + TASK + FORMAT Prompt:**
"You are an experienced project manager communicating to a non-technical executive audience. Your job is to write a one-page project status summary for a technology implementation project that is currently on schedule and under budget. Present your response as short paragraphs with bold section headers: Overview, Progress, Risks, and Next Steps. Keep the total length under 300 words."

**Steps:**

1. Pick a real work task you produce regularly
2. Write a basic unstructured prompt and get the AI response
3. Rewrite it using ROLE + TASK + FORMAT
4. Compare the two outputs side by side
5. Try this with two different tasks to build the habit

**Reflection Questions:**
- What specific part of the structured prompt made the biggest difference?
- Where did you struggle to define the role or format?
- How would you use this framework in your regular work this week?

**Deliverable:** Post in the issue comment: Your ROLE + TASK + FORMAT prompt and a brief assessment of how it compared to the unstructured version.

---

### Activity 2.2: The 5-Iteration Rule (60 minutes)

**Objective:** Learn that the first AI response is a draft, not a final answer.

Professional AI users almost never use the first response. They iterate. Each iteration gets closer to what they actually need.

**Steps:**

1. Choose a real recurring work task
2. Build a strong ROLE + TASK + FORMAT prompt and get the first response
3. Iterate at least 5 times using follow-up prompts like:
   - "Make it shorter - cut it to half the length without losing the key points."
   - "The tone is too formal. Rewrite it to sound more direct and conversational."
   - "Add a section about [missing element]."
   - "The third paragraph is not right. Rewrite it to focus on [what it should say]."
   - "Give me a version that assumes the reader is skeptical and needs to be persuaded."
4. Compare your first response to your final response

**Reflection Questions:**
- At what iteration did the output become actually usable?
- Which type of follow-up instruction produced the most improvement?
- What does this tell you about how to plan your AI workflow?

**Deliverable:** Post in the issue comment: Paste your original prompt, your 5th iteration instruction, and your final output.

---

### Activity 2.3: Build Your Prompt Library (60 minutes)

**Objective:** Create a set of reusable, tested prompt templates for your most common work tasks.

**Steps:**

1. List your 5 most repeated writing or communication tasks at work
2. For each one, build a prompt template using ROLE + TASK + FORMAT
3. Use the templates/prompt-template.md file as your starting format
4. Test each template - run it, evaluate the output, refine it
5. Save your 5 templates in a file called my-prompt-library.md in the notes/ folder

**Template Format:**

## Template Name: [What This Is For]

**When to use:** [Situation]

**Prompt:**
You are a [role]...
Your job is to [task]...
Present your response as [format].

**Notes:** [Any tips for using this template]

**Last tested:** [Date]

**Reflection Questions:**
- Which template took the most work to get right? Why?
- Which one do you think you will use most often?

**Deliverable:** Post in the issue comment: List your 5 template names and paste the one you are most proud of.

---

### Activity 2.4: Ask AI to Critique Itself (45 minutes)

**Objective:** Use AI as a quality reviewer on its own output.

After you get an AI response, ask the AI to evaluate it.

**Steps:**

1. Pick any output from a previous activity this week
2. Paste it back into the AI and say:
   "Review this response as a critical editor. What are its three weakest points? What is missing? What should be changed to make it significantly better?"
3. Read the self-critique carefully
4. Now ask: "Using your own critique, rewrite the response to fix those weaknesses."
5. Compare all three versions: original, critique, revised

**Reflection Questions:**
- Did the AI identify things you did not notice yourself?
- Was the revised version actually better?
- What does this tell you about using AI as a thought partner vs. just a generator?

**Deliverable:** Post in the issue comment: What did the AI identify as its own weakness? Did the revision fix it?

## Self-Assessment

| Skill | Not Yet | Getting There | Got It |
|-------|---------|---------------|--------|
| I use ROLE + TASK + FORMAT consistently | [] | [] | [] |
| I iterate on AI responses instead of accepting the first | [] | [] | [] |
| I have a prompt library with at least 5 templates | [] | [] | [] |
| I can use AI to critique and improve its own output | [] | [] | [] |

**Move to Phase 3 when:** Most items are Got It.

---

**Previous:** phases/phase-1-first-contact.md
**Next:** phases/phase-3-ai-at-work.md
