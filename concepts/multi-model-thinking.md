# Multi-Model Thinking

**The short answer:** Multi-model thinking means deliberately choosing which AI tool to use for which task, rather than using the same tool for everything.

## Why It Matters

Different AI models have different strengths. Using the right model for the right task is like knowing when to use a spreadsheet vs. a word processor — they can both handle numbers and text, but each has a lane where it performs best.

The goal is not to memorize which tool is best today. Tools change. The goal is to develop the habit of asking: *Is this the right tool for this job?* That habit will serve you regardless of which tools exist in the future.

---

## The Four Core Agents

### ChatGPT (OpenAI)
**Reach for it when:** You need broad general-purpose assistance, creative writing, brainstorming, or want to use specialized add-ons (GPTs). Best ecosystem, most widely adopted. Voice mode available.

**Watch out for:** Higher hallucination rate than Claude on factual claims. Verify before using.

### Claude (Anthropic)
**Reach for it when:** Accuracy matters. You are working with long documents, need careful analysis, want to fact-check AI's own output, or need the AI to say "I don't know" instead of guessing. Lowest hallucination rate of the four.

**Watch out for:** No real-time web search on the free tier. Does not know about recent events without being told.

### Gemini (Google)
**Reach for it when:** You work inside Google Workspace (Gmail, Docs, Drive, Slides). Built-in real-time search. Strong with multimedia — images, PDFs, YouTube video summaries. Native integration with Google tools.

**Watch out for:** Quality can vary on very long context tasks. Less specialized for technical or long-form writing than Claude.

### Perplexity
**Reach for it when:** You need research with cited, verifiable sources. Fact-checking. Exploring a new topic. Finding credible data points before a meeting. Current information with links you can actually follow.

**Watch out for:** Less useful for creative drafting or generative writing tasks. Optimized for research, not for content creation.

---

## Quick Decision Framework

| Task Type | Best Starting Point |
|-----------|---------------------|
| Research with sources needed | Perplexity |
| Long document analysis | Claude |
| Accuracy-critical writing | Claude |
| Brainstorming and creative drafts | ChatGPT or Claude |
| Google Workspace tasks | Gemini |
| Real-time or current information | Gemini or Perplexity |
| Voice mode interaction | ChatGPT |
| Chatting with your own documents | NotebookLM |
| Turning text into a presentation | Gamma |
| General tasks with no clear best tool | ChatGPT or Claude |

---

## What They All Have in Common

All four tools share these five core behaviors. This is why the skills you build on one transfer to the others:

1. **They respond to how you ask.** Structured prompts produce better results on every tool.
2. **They can be steered mid-conversation.** You can redirect, refine, and correct within the same conversation on every tool.
3. **They can be wrong.** Hallucination happens on all four. Verification is always required.
4. **They improve through iteration.** The first response is a draft. Iterate.
5. **They have no memory by default.** Each new conversation starts fresh unless you provide context.

---

## Multi-Tool Workflows

The most sophisticated AI users do not pick one tool and use it for everything. They design handoffs:

**Example:**
- Use **Perplexity** to research a topic (cited sources, current data)
- Use **Claude** to analyze the research and identify key themes (accuracy, long context)
- Use **ChatGPT** to draft the final client communication (creative, polished prose)

The handoff is simple: copy the output from one tool and paste it as context into the next.

---

## For New Learners

Do not overwhelm yourself by trying every tool at once. Start with one tool, get comfortable, then explore others. The skills you build on one tool transfer directly to others. See phases/phase-0-the-four-agents.md for a guided first comparison.

---

*See also: concepts/what-is-a-model.md | concepts/what-is-an-llm.md | concepts/what-is-an-agent.md*
