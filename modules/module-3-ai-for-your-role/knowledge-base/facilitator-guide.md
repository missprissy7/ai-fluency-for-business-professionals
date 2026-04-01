# FACILITATOR GUIDE
## "AI for Your Role: Domain-Specific Use Cases"
### Teacher Scott | KEDAL Solutions | Module 3

---

## HOW TO USE THIS GUIDE

This guide is for Teacher Scott's eyes only. It maps directly to the 27-slide Module 3 deck, organized across four tracks: Healthcare Operations (Track A), Staffing & Workforce (Track B), Compliance & Risk (Track C), and Leadership & Strategy (Track D).

Module 3 is different from Modules 1 and 2. The foundation has been laid. Everyone in the room now knows what AI is and how to prompt it. This session is where the work gets personal — where participants stop thinking about AI in the abstract and start seeing it in their actual job. Your job is to make that click happen, use case by use case.

**How this guide is organized:**
- Pre-session prep comes first — read it before you leave the house
- The Hands-On Delivery Setup section is long and critical — don't skip it
- The Track Selector helps you decide what to run for which client
- Session flow tables give you the clock at a glance
- Slide-by-slide notes have everything you need for each moment — what to say, when to pause, when to demo, and what questions to ask
- The Demo Prompts Library is your backup if your internet goes out mid-session (it won't, but know it anyway)

Keep this open on a second screen or printed. You will reference it during the session.

---

## PRE-SESSION CHECKLIST

### Technology
- [ ] All four track slides loaded and tested on the presentation device
- [ ] AI tools open in browser tabs before you walk in the room: ChatGPT GPT-4o, Claude, and Perplexity (at minimum)
- [ ] If running enterprise clients: Shared Perplexity Space configured and tested (see Hands-On Delivery Setup)
- [ ] Demo prompts pre-loaded in a scratch doc — don't type them live
- [ ] Backup hotspot available — hospital and clinic networks often block cloud tools unexpectedly
- [ ] Know the client's network environment: will participants be on the same WiFi? Can they access ChatGPT from their devices?
- [ ] If participants will use their own tools: confirm tool access in advance. Ask the client liaison 48 hours before.

### Room
- [ ] **Know which tracks you are running before you walk in.** This is the non-negotiable pre-session task for Module 3. A mixed executive/ops/compliance audience is a very different room than a room of all HR directors. Check the Track Selector section and confirm with your client contact.
- [ ] Know the audience's specific operational context: What EHR do they use? What's their current no-show rate? What compliance challenges are they navigating? These details make your demos feel like you've been working there.
- [ ] Know whether any participants have clinical roles — PHI sensitivity is different in that room than in an admin-only room.
- [ ] Confirm whether this is a 3-hour full session or a 90-minute single-track deep dive — and whether there's a hard stop.
- [ ] Identify the skeptic in the room in the first 10 minutes. They usually announce themselves. Engage them early; they often become the best participants by the end.
- [ ] Have water. Module 3 is longer and more complex than Module 1. You are running four mini-sessions inside one session.

### Mindset
- Module 3 is where the curriculum earns its money. Modules 1 and 2 were credibility-building. This one is change-making.
- Your participants are smart, busy professionals who have heard AI hype before. What cuts through is specificity. The moment the example sounds exactly like their Tuesday morning, you have them.
- The hands-on moments are the session. The slides are the frame. Don't let the slides do the work.
- You will get objections in this module that you didn't get in Modules 1 and 2 — because now participants are thinking about their specific data, their specific systems, and their specific risks. That's a good sign. The objections in Module 3 mean the room is engaged.

---

## HANDS-ON DELIVERY SETUP

> **This is a critical section. Read it fully before every Module 3 session.**

### Three Delivery Options

**Option 1: Participants use their own tools**
Participants open their own ChatGPT, Claude, or Perplexity account on their own device and run the prompt themselves after you demo it. This is the most powerful option — they see the output from their own hands, on their own screen, which removes the "but that was your demo" skepticism entirely.

*When to use:* When participants have devices, tool access is confirmed in advance, and the audience has enough familiarity with AI tools from Module 1 and 2 to not get lost in setup during Module 3.

*Watch for:* Tool access issues — blocked network, no account, expired trial. Have a fallback ready (see Option 2).

**Option 2: Teacher Scott demos, participants replicate**
You run the prompt live on your screen. Participants watch, react, and then (if time and access allow) try a variation with their own context inserted. Safer for mixed-access rooms, and still effective because the live demo is high-value on its own.

*When to use:* When participant device access is uncertain, or when the group is larger (20+) and individual tool use would take too long.

**Option 3: Shared Perplexity Space (enterprise clients)**
For enterprise clients with a Perplexity Teams or Enterprise license, you can set up a shared Space pre-loaded with the Module 3 prompts and context. Participants access it from their own devices through the shared link. This is the most polished option and the easiest for participants.

*When to use:* Enterprise clients who already have or are evaluating Perplexity. Flag this option during the pre-session client call — it takes 30 minutes to set up but dramatically improves the hands-on experience.

---

### For Module 3 Specifically: Use Real Operational Data

Here is the thing that separates a good Module 3 session from a transformational one.

Module 3's examples are domain-specific. That means the best hands-on approach is not to run a generic demo prompt — it's to have participants insert **their actual operational reality** into the prompt.

> Your actual no-show rate. Your actual report variances. Your actual open roles. Your actual compliance challenge.

When a clinic manager sees an executive summary generated from *her* 47-minute ED wait time and *her* $100K supply overage — not a made-up example — she doesn't just understand the tool. She's already used it. She's already gotten ROI from today.

**How to execute this:**
- Before the session, ask the client point person for 2–3 pieces of real operational data participants could bring to the session: a recent metrics report, a real open role, a real policy document.
- Brief participants at the top of the session: "Before we run each demo together, I'm going to ask you to pull up one real thing from your work. A number, a name, a situation. We're going to use it."
- Remind them of the PHI protocol every time (see below) before they start typing.

This approach works best with Option 1 (own tools) or Option 3 (Shared Space), but even with Option 2 you can collect real data from the room verbally and build it into your demo in real time.

---

### Pre-Session Client Prep: What You Need to Know Before Walking In

Run through this with your client contact in the pre-session call (aim for 48–72 hours before):

1. **Which tracks are relevant?** Get confirmation. A room of HR directors doesn't need Track D. A C-suite lunch session doesn't need all five use cases from Track B. Confirm before you build your run order.
2. **What's the biggest current pain point?** Ask the contact: "If I could solve one operational problem with AI in this room today, what would it be?" Match that to a use case in the relevant track. Open with it.
3. **What EHR / HRIS / workforce platform are they using?** Epic, Cerner, ADP, Workday — knowing the stack lets you make examples land harder ("This works alongside your Epic scheduling module, not instead of it").
4. **Any PHI or data sensitivity concerns?** Some clients will have compliance or legal officers in the room. Some will have IT present. Know this in advance so you can address data practices proactively rather than reactively.
5. **Are there any active compliance issues or audits?** If a client is mid-Joint Commission survey or dealing with a recent OCR complaint, acknowledge it directly and carefully. Don't demo Compliance use cases in a way that feels like you're poking at an open wound.
6. **What's the decision-maker hoping to get out of today?** Is this a "prove it to my skeptical leadership team" session, a "train my staff" session, or a "help me build a proposal for expanding AI adoption" session? Calibrate your energy and close accordingly.

---

### Live Demo Protocol

Follow this sequence for every live demo in Module 3:

1. **Name the pain first.** Before touching the screen, spend 60–90 seconds on the specific problem this use case solves. Let the room recognize themselves.
2. **Show the prompt before you run it.** Display it on screen. Ask: "Does this prompt make sense to you? What would you change to make it yours?"
3. **Run it.** Don't narrate while it generates — let the silence work. The room watches the output appear in real time and that's the demo.
4. **Ask, don't explain.** After the output appears: "What do you notice?" Not "Here's what it did." Let the room tell you what they see.
5. **Do one follow-up.** Show them the refinement loop — "Now watch what happens when I add one more constraint" or "Ask me what I'd change about this output and I'll show you how to fix it in 10 seconds."
6. **Connect to ROI.** Before moving on: "How long would that have taken your team to do manually?" Get the number from the room. Write it down. You'll use it in the close.

---

### PHI Protocol: Read This Out Loud at the Start of Every Session

> **Required disclosure — say this verbatim or in your own words before any hands-on exercise:**

"Before we do any hands-on work today, I need to say something clearly: **do not enter real patient information into any AI tool during this session.** That means no real patient names, no medical record numbers, no dates of birth, no diagnosis codes tied to a real person, no claim data — nothing that would constitute PHI under HIPAA.

If we're building an example with your real data, use de-identified or realistic fictional numbers. Use your actual no-show rate — that's an aggregate operational metric, not PHI. Use your actual procedure volume, your actual supply costs. But if the example involves a patient scenario, we create a fictional patient together.

The reason I'm saying this out loud is that the examples in this module will feel very real and very specific — and when something feels real, it's easy to just paste in what you have. Don't. Make it fictional. Realistic, but fictional.

This is exactly the same data classification discipline you'd apply to email. You wouldn't send a patient's chart in a personal Gmail. Same logic applies here."

**PHI warning markers are included in the slide-by-slide notes.** Every use case that could elicit real patient data has a [PHI WARNING] marker in the delivery notes below.

---

## CHOOSING YOUR TRACK(S)

Use this decision guide before every Module 3 engagement. Confirm with your client contact.

| If your audience is... | Run these tracks | Skip or compress |
|---|---|---|
| All healthcare operations staff (practice managers, clinic managers, care coordinators) | Track A (full) | B, C, D can be 5-min overview only |
| All HR / talent acquisition / workforce | Track B (full) | A, C, D overview only |
| All compliance, risk, privacy, or legal staff | Track C (full) | A, B, D overview only |
| All leadership / C-suite / board | Track D (full) | A, B, C overview only |
| Mixed healthcare ops + staffing | Tracks A + B | C and D as 5-min teaser |
| Mixed compliance + leadership | Tracks C + D | A and B as context only |
| Mixed all four (common in multi-department trainings) | All four tracks — 3-hour session | Nothing; this is the full module |
| Homogeneous executive audience with clinical ops responsibility | Tracks A + D | B, C can be referenced in passing |
| HR + compliance (common in SNF / post-acute settings) | Tracks B + C | A and D as needed |

**On sequencing when running multiple tracks:**
- Always start with the track most relevant to the majority of the room.
- If you have exactly two tracks, run the more operational one first (it warms up the room) and the more strategic one second.
- If running all four: A → B → Break → C → D. This order moves from daily operational grind (highest relatability) to strategic decision-making (highest aspiration), which builds energy through the day.
- Never open with Track D (Leadership) in a mixed room — it signals that executive concerns are the priority, and non-executive participants will disengage.

---

## SESSION FLOW AT A GLANCE

### Full 3-Hour Session — All Four Tracks

| Time | Slides | Section | Notes |
|---|---|---|---|
| 0:00–0:15 | 1–2 | Welcome, agenda, opening question | Get names, roles, and the "one chore you'd love to eliminate" |
| 0:15–0:55 | 3–8 | Track A — Healthcare Operations | 5 use cases, 2 demos; [HANDS-ON] at A1 and A3 |
| 0:55–1:35 | 9–14 | Track B — Staffing & Workforce | 5 use cases, 2 demos; [HANDS-ON] at B1 and B3 |
| 1:35–1:45 | — | Break | |
| 1:45–2:25 | 15–20 | Track C — Compliance & Risk | 5 use cases, 2 demos; [HANDS-ON] at C1 and C3 |
| 2:25–3:00 | 21–26 | Track D — Leadership & Strategy | 5 use cases, 2 demos; [HANDS-ON] at D1 and D4 |
| 3:00–3:10 | 27 | Close — Personal Use Case Map | Each participant writes their top 3 use cases |
| 3:10–3:25 | — | Q&A / debrief buffer | Keep it open |

**If you need to compress:** Cut one use case per track (skip the least relevant to this specific client) and reduce each track to 30 minutes. You can run the full module in 2.5 hours without losing the demos.

---

### Single-Track Deep Dive — 90-Minute Session

| Time | Slides | Section | Notes |
|---|---|---|---|
| 0:00–0:10 | 1–2 | Welcome, agenda, opening question | More intimate — let the room drive the opening conversation |
| 0:10–0:50 | Track slides 1–5 | All 5 use cases, back to back | Run all five; both demos at full length |
| 0:50–1:05 | Demo slide | Workflow redesign example | Full walk-through of the track's workflow redesign |
| 1:05–1:20 | — | Hands-on practice | Participants run one use case with their own real data |
| 1:20–1:30 | 27 | Close + personal use case map | Commit to one use case to try this week |
| 1:30–1:45 | — | Q&A and next steps | |

**For the 90-minute single-track:** This format is often where the best participant transformations happen. The room is smaller, more homogeneous, and the examples land harder. Let the debrief conversations go longer. Don't rush the close.

---

## SLIDE-BY-SLIDE NOTES

### Slides 1–2 — Welcome & Agenda

**Before you click Begin:**
Same opening move as Module 1 — start with a question before the first slide.

> "You've been through Modules 1 and 2. You know the framework. Today I want to know: what specific task came to mind that you kept thinking 'I need to try that'? What was the thing that you went back to your desk and didn't quite get to?"

Let three to four people answer. Write the tasks down. You are going to return to them at the close.

Then: "Every one of those is in what we're covering today. Let's go."

**On the agenda slide:**
Name the tracks that are relevant to this audience. If you're only running two tracks, say so. Don't pretend the session is bigger or smaller than it is.

---

### Slide 3 — Track A Introduction: Healthcare Operations

**What to say:**
"Healthcare ops is where the machine meets the mission. Everything that makes care happen — scheduling, reporting, vendor management, documentation, quality review — runs through this function. And almost all of it is information work. Gathering it, reformatting it, communicating it. AI's clearest wins are in this room."

**Debrief question for the room:**
"Before we go into the use cases — how many hours a week does your team spend on reporting, documentation, and communication? Not care delivery. Just the paperwork and writing around it." Let them answer. The number is always bigger than anyone says out loud.

---

### Slide 4 — Use Case A1: Patient Flow & Scheduling Optimization

**[HANDS-ON]** **[PHI WARNING: no-show rate is an operational metric, not PHI — safe to use real numbers. Do not use real patient names or identifiers in the reminder template customization.]**

**What to say:**
"No-shows cost healthcare organizations 15 to 20 percent of potential revenue. That's a scheduling problem and a communication problem — and both are things AI can directly touch."

"The first use case is: write the patient reminder sequence you should already have, and design the scheduling policy changes to go with it. In four minutes, you have a deployable reminder system that would have taken your ops team days to build from scratch."

**Demo here (Live Demo 1 for Track A):**
Show the A1 prompt on screen. Before running it, ask: "What's your actual no-show rate? And when does it spike?" Take real numbers from the room and insert them into the prompt. Run it live.

```
I run a 12-provider outpatient family medicine practice. Our no-show rate is 18%, highest on Monday mornings and Friday afternoons. Draft a 3-part patient reminder sequence (72 hours, 24 hours, 2 hours before appointment) that is warm, specific, and includes an easy reschedule path. Also suggest 3 scheduling policy changes we could implement to reduce no-shows based on best practices.
```

**After the demo:**
"What do you notice about the reminder sequence? What would you change?" Then: "If you want to try it with your actual numbers, update the no-show rate and the peak times. It takes 90 seconds."

**Debrief question:**
"If you deployed just the 24-hour reminder step, what would your no-show rate change look like in 90 days?"

---

### Slide 5 — Use Case A2: Department Reporting & Communication

**What to say:**
"The monthly ops report. The weekly dashboard email. The variance explanation. You write the same structure every month — only the numbers change. AI owns this task."

"The prompt here does something important: it asks AI to explain the variances for you, but only where *you* give it the root cause. You're still the subject matter expert. You're just not the typist anymore."

**Prompt to show (not necessarily run live — show as example):**
```
I need to write a monthly operations report for hospital leadership. Here are this month's key metrics: ED wait time average 47 minutes (target 40), patient satisfaction scores 82% (target 85%), supply costs $1.2M (budget $1.1M), staff overtime 12% (target 8%). Write a 3-paragraph executive summary that explains the variances, identifies root causes where I specify them, and outlines 2-3 corrective actions. Tone: direct, data-driven, not defensive.
```

**Show the follow-up prompt:**
"And here's the move that makes this even more powerful — the refinement loop: 'Now rewrite the supply cost section with the explanation that Q1 had an unplanned sterile supply backorder that required spot purchases.' Watch how the paragraph changes." Run this follow-up live.

**[HANDS-ON] option:** If participants brought this month's metrics, have them insert their own numbers and run it themselves.

**Debrief question:**
"How long does this report currently take to write? Who writes it?" Get specific numbers. "So if this takes 5 minutes instead of 45, what does your ops director do with those 40 minutes back?"

---

### Slide 6 — Use Case A3: Vendor & Contract Communication

**[HANDS-ON]**

**What to say:**
"Vendor performance issues happen constantly in healthcare operations. The vendor is late, the supplies are wrong, the invoices don't match the contract. And every time, somebody has to write the letter. AI writes the letter. You review it and send it."

**Prompt:**
```
Draft a professional letter to our medical supply vendor notifying them that their on-time delivery rate has dropped to 71% over the past quarter (contract requires 95%). Include: specific data points, the operational impact (2 procedure delays, 1 supply substitution incident), a formal cure period request of 30 days, and the consequences if performance doesn't improve. Tone: firm but professional, not adversarial.
```

**After the demo:**
"Notice the tone calibration in that prompt — 'firm but professional, not adversarial.' That's prompting for emotional register, not just content. That's a skill."

**[HANDS-ON]:** "If you have a vendor situation right now — don't name the vendor publicly if you don't want to — just tell me the issue and I'll show you how to structure the prompt." This almost always gets a participant to share a real scenario. Let it happen. It's the best demo you can do.

**Debrief question:**
"Who in your organization currently owns vendor communications? How much of their week is this?"

---

### Slide 7 — Use Case A4: Process Documentation & SOPs

**What to say:**
"SOPs are the institutional knowledge problem in every healthcare organization I have ever worked with. They get written once, then they live in a binder no one opens, and the actual procedure lives in the head of whoever has been there the longest."

"This use case flips the SOP creation model. Instead of starting with a blank document, AI interviews you. It asks you the questions. You answer them. It writes the SOP. You've now captured institutional knowledge from the person who actually does the work, not from a generic template."

**Show the prompt:**
```
Interview me and create a standard operating procedure for our patient discharge process. Ask me questions one at a time about each step, who is responsible, what documentation is required, and what can go wrong. After I answer all your questions, write the full SOP in our format: title, purpose, scope, responsible parties, step-by-step procedure, documentation requirements, and revision history.
```

**Note:** This is a longer demo if you run it interactively. You have two options:
- Run just the first two or three interview questions live to show the interaction model, then show the finished output you generated pre-session.
- If time allows in a single-track deep dive, run it fully with a participant describing their actual discharge or intake process.

**Debrief question:**
"What's the SOP in your organization that exists only in someone's head right now? What happens when that person leaves?"

---

### Slide 8 — Use Case A5: Quality & Patient Safety Reporting

**[PHI WARNING: The incident report example uses a fictional clinical scenario. Instruct participants to use fictional patient details if they try this. Emphasize that real incident data must use de-identified or fictional patient information before being entered into any AI tool.]**

**What to say:**
"Incident reports and quality narratives get written under pressure, by people who are already upset about what happened, who weren't trained as writers, and who know legal might read it. That is the worst possible condition for clear documentation."

"AI doesn't document the incident. You still do that. But AI gives you the structure so that what you write is complete, appropriately framed, and includes the corrective action thinking that makes it useful — not just a record of what went wrong."

**Show the prompt:**
```
Help me write a structured incident report for a medication near-miss event. The details: a nurse prepared a heparin dose of 10,000 units instead of 1,000 units due to look-alike packaging. The error was caught by the second nurse during the two-person verification check before administration. No patient harm occurred. Write the incident report in SBAR format (Situation, Background, Assessment, Recommendation) and include 3 immediate corrective actions and 2 systemic recommendations.
```

**After showing output:**
"SBAR is the format. The corrective actions are grounded in the scenario. A quality committee could receive this today. And the nurse who documented this spent 8 minutes instead of 45."

**Debrief question:**
"What typically happens to incident report quality when the person writing it is stressed, rushed, or worried about how it will look? What does better documentation do for your quality improvement process?"

---

### Slides 9–10 — Track B Introduction & Use Case B1: Job Postings & Recruitment Content

**[HANDS-ON] — Use Case B1**

**Track B introduction (30 seconds):**
"Healthcare staffing is the most document-intensive function in any healthcare organization that isn't clinical care itself. Job postings. Screening guides. Onboarding plans. Credentialing notices. Stay interview guides. Every one of these is templated, repetitive, and can be generated in minutes. Let's prove it."

**On Use Case B1:**
"The recruitment content package. One prompt, four pieces of content: job description, condensed posting, recruiter outreach message, and two social media captions. What used to take two hours takes four minutes."

**Demo here (Live Demo 1 for Track B):**
```
Create a complete recruitment content package for a Travel ICU RN opening at a Level II Trauma Center in Atlanta, GA. Include:
1. A detailed job description (requirements, responsibilities, physical demands)
2. A condensed 150-word Indeed/LinkedIn posting
3. A 3-sentence recruiter outreach message for cold LinkedIn reach
4. Two social media captions (one professional/LinkedIn, one casual/Facebook)
Contract: 13 weeks, $2,800/week all-in, housing stipend included. Start: May 1.
```

**[HANDS-ON]:** "If you have an open role right now — or one you're anticipating — swap out the details. ICU RN, dietary aide, compliance officer, it doesn't matter. The structure is the same." Let participants run this one themselves if they're using their own tools.

**Debrief question:**
"How many open roles are you recruiting for right now? Multiply that by two hours per posting. What did AI just give back to your recruitment team this month?"

---

### Slide 11 — Use Case B2: Candidate Screening & Interview Prep

**What to say:**
"Hiring in healthcare is high-stakes and high-volume at the same time. The cost of a bad hire in a clinical or clinical-adjacent role is significant — not just in turnover cost but in patient care and team morale. And yet most hiring managers are developing interview questions from memory, five minutes before the candidate walks in."

"AI builds you a consistent, structured hiring process. Screening criteria, behavioral interview questions tied to each competency, and a scoring rubric. Every manager using the same tool. Bias reduced. Quality improved."

**Show the prompt:**
```
I'm hiring for a Director of Nursing at a 120-bed skilled nursing facility. The ideal candidate has: 5+ years in SNF leadership, strong survey readiness experience, proven staff retention record, and MDS knowledge. Create:
1. A 10-question resume screening checklist with red flags and green flags for each criterion
2. A structured interview guide with 8 behavioral questions tied to each key competency
3. A 1-5 scoring rubric for each question
Format as a hiring manager's tool they can use during the interview.
```

**Debrief question:**
"Is your current interview process consistent across hiring managers? What does inconsistency cost you in quality of hire?"

---

### Slide 12 — Use Case B3: Onboarding Documentation

**[HANDS-ON] — Demo 2 for Track B**

**What to say:**
"Inconsistent onboarding is one of the fastest predictors of early turnover. New hire experience in week one and week four predicts whether they're still there in month six. And yet most organizations' onboarding process depends entirely on who's doing the onboarding that week."

"AI creates consistency. Same 30-60-90 plan, same welcome letter, same structured milestones — customized per role, ready to personalize per hire."

**Demo:**
```
Create a 30-60-90 day onboarding plan for a newly hired Clinical Nurse Manager overseeing a 28-bed medical-surgical unit at a community hospital. For each phase, include: learning objectives, key relationships to build, operational responsibilities to assume, and a success metric. Also write the welcome letter I'll send them before their first day — warm, specific to the role, and focused on setting them up for success.
```

**[HANDS-ON]:** "Think of a role you're about to hire for, or one where your onboarding is the weakest. Let's build it. Swap out the role and the unit — run it yourself."

**Debrief question:**
"What's your current new hire turnover rate in the first 90 days? What would it mean for that number if every new hire got a consistent, well-structured onboarding experience?"

---

### Slide 13 — Use Case B4: Credentialing & Compliance Tracking

**What to say:**
"Credentialing is a compliance landmine in healthcare. An expired RN license you missed. A DEA certificate that lapsed. A TB test that wasn't renewed. The consequences — from a regulatory standpoint and from a patient safety standpoint — are serious. And the communication system that prevents it is completely templatable."

"This prompt builds a four-stage credentialing communication system: 90-day notice, 30-day final notice, 14-day manager escalation, and staff acknowledgment form. Deployable today."

**Show the prompt:**
```
Create a credentialing compliance communication system for a home health agency with 45 clinical staff. Design:
1. An email template for 90-day advance notice of expiring credentials (RN license, BLS, CPR, TB test)
2. A 30-day final notice template with urgency escalation
3. A manager notification template for credentials expiring within 14 days
4. A staff acknowledgment form they sign confirming they've received the notice
Keep all communications professional, clear, and include specific deadline dates as placeholders.
```

**Debrief question:**
"How are you currently tracking credential expiration? What's the closest call you've had — or the closest call you know about?" Almost every workforce manager has a story here. Let it surface.

---

### Slide 14 — Use Case B5: Retention & Employee Engagement

**What to say:**
"Healthcare turnover is running 19 to 26 percent annually. You know the number — it might be higher in your organization right now. Exit interviews happen too late. Stay interviews almost never happen at all. Because managers don't have time to plan them, and don't have the tools to run them well."

"This prompt builds the stay interview system. The questions, the prep sheet, and the follow-up action template. The conversation still has to happen — AI just makes sure managers are prepared for it."

**Show the prompt:**
```
I'm a nursing unit manager preparing for stay interviews with 6 nurses on my team who are at varying levels of flight risk. Create:
1. A stay interview guide with 8 open-ended questions that uncover what's keeping them and what might make them leave
2. A one-page manager prep sheet: what to do before, during, and after the conversation
3. A follow-up action template to document commitments made during the interview
Tone: genuinely caring, not corporate HR-speak.
```

**Debrief question:**
"When did you last have a stay conversation with someone on your team — not an annual review, but a real conversation about what would make them leave and what would make them stay? If it wasn't in the last 90 days, what got in the way?"

---

### Slides 15–16 — Track C Introduction & Use Case C1: Policy & Procedure Development

**[HANDS-ON] — Demo 1 for Track C**

**Track C introduction (30 seconds):**
"Compliance professionals are perpetually behind. The regulations move faster than the policies. The audits land on short notice. The training content goes stale. And almost all of the documentation that compliance teams are responsible for is templated work — it just requires deep regulatory knowledge to do correctly. That's where AI earns its place in this room."

**On Use Case C1:**
"Policy and procedure development is the most time-consuming templated task in compliance. And right now, the most needed P&P in every healthcare organization is an AI governance policy. You need one. Here's how to build it in under 15 minutes."

**Demo:**
```
Draft a new policy and procedure for the use of AI tools by clinical and administrative staff in a HIPAA-covered healthcare organization. The policy must address:
1. Approved tool tiers (consumer free tier, enterprise, HIPAA-eligible)
2. Data classification — what can and cannot be entered into each tier
3. Staff training requirements before use
4. Incident reporting for AI-related privacy events
5. Governance and annual review process
Format: standard P&P format with purpose, scope, policy statement, procedures, definitions, references, and effective date placeholder. Tone: clear enough for a front-line staff member to understand.
```

**[HANDS-ON]:** "If you don't have an AI governance policy yet, run this prompt with your organization's name and your policy format. You have the first draft of one of the most important documents you'll need this year."

**Debrief question:**
"Does your organization currently have a policy for AI tool use? If not — what's the risk if a staff member is using consumer ChatGPT with PHI right now, and there's no policy saying they shouldn't?"

---

### Slide 17 — Use Case C2: Audit Preparation & Response

**What to say:**
"Audit prep is a fire drill in every organization I've worked with. The survey is in six weeks and suddenly everyone is pulling documents, coaching staff, and trying to recreate a year of compliance activity. This doesn't have to be that."

"AI builds the prep checklist. Not a generic one — one organized by the top 10 most common Joint Commission findings in your function, with the documentation you need for each one. And a staff briefing document so front-line staff know what to expect."

**[PHI WARNING: Audit prep examples should use generic or de-identified scenarios. If participants want to use real deficiency data, they must ensure it's de-identified.]**

**Show the prompt:**
```
We have a Joint Commission survey coming in 6 weeks. I manage infection prevention. Create:
1. A 30-item pre-survey readiness checklist organized by the top 10 most common Joint Commission infection prevention findings
2. For each finding category, list the documentation we need to have available
3. A one-page staff briefing document explaining what to expect during the survey and how to respond to surveyor questions
Keep it practical — this is going to front-line nursing staff, not compliance experts.
```

**Debrief question:**
"If your Joint Commission survey were announced today, how long would it take your team to feel ready? What would this checklist change about that timeline?"

---

### Slide 18 — Use Case C3: Incident Response Documentation

**[HANDS-ON] — Demo 2 for Track C**

**[PHI WARNING: This use case involves clinical incident scenarios. The demo prompt uses a fictional scenario — the heparin near-miss. Instruct participants explicitly: if they want to try this with a real incident, they must change all patient-identifying details to fictional before entering anything. No real patient names, MRNs, or specific dates tied to a real event.]**

**What to say:**
"Breach documentation and incident response happen under the worst possible conditions — urgency, legal exposure, and stress. The documentation has to be complete, structured, and defensible. AI provides the structure so nothing gets missed."

**Demo:**
```
Help me document a potential HIPAA breach incident. A staff member sent a patient's lab results to the wrong patient's MyChart account. The error was discovered 4 hours later when the correct patient called asking about their results. No highly sensitive information (mental health, substance abuse, HIV) was involved. Draft:
1. The initial incident documentation using the required 4-factor risk assessment (nature of PHI, unauthorized recipient, whether PHI was acquired/viewed, mitigation)
2. A determination memo for whether this meets the breach notification threshold
3. A patient notification letter if notification is required
```

**After the demo:**
"The 4-factor risk assessment is legally required under the Breach Notification Rule. AI doesn't skip it. A stressed compliance officer writing in a crisis might. This is what structured prompting does for high-stakes documentation."

**[HANDS-ON]:** "You can build a fictional version of an incident type you've actually handled and run it through this framework. Use a fictional patient. The process output is real."

**Debrief question:**
"How long does your current breach documentation process take from incident discovery to draft report? What does compressing that timeline mean for your OCR reporting obligations?"

---

### Slide 19 — Use Case C4: Training Content Development

**What to say:**
"Compliance training content is expensive to buy from vendors, immediately goes stale, and is almost never specific to your organization's real scenarios. Internal development takes weeks. AI builds it in 15 minutes — and the scenarios can be pulled directly from your actual incident history."

**Show the prompt:**
```
Create a 20-minute HIPAA refresher training module for healthcare front-desk staff. Include:
1. 3 real-world scenarios showing correct vs. incorrect handling of patient information at check-in
2. A 10-question quiz with answer key and rationale for each answer
3. 5 key takeaways formatted as a wallet card staff can keep at their workstation
4. A sign-off sheet documenting completion
Make the scenarios feel real — not generic textbook examples. Include the awkward moments staff actually face (patient with family member present, phone calls from people claiming to be the patient's doctor, faxes to wrong numbers).
```

**Debrief question:**
"What does your current compliance training cost per staff member per year? And when did you last update it to reflect your actual incident patterns?"

---

### Slide 20 — Use Case C5: Contract & Vendor Risk Review

**What to say:**
"Every BAA and vendor contract needs a compliance review. But outside legal at $300 to $500 an hour makes thorough review cost-prohibitive. So things get signed without the review they deserve."

"AI doesn't replace your attorney. But AI can do the pre-review — identify what's missing, flag the risk provisions, and prepare specific questions for legal. You're now using your legal spend on actual legal judgment, not on reading clause by clause."

**Show the prompt:**
```
Review the following Business Associate Agreement and identify:
1. Any provisions that are missing that are required under HIPAA (45 CFR 164.504(e))
2. Any provisions that create unusual risk for our organization as the covered entity
3. The data breach notification timeline specified (HIPAA requires 60 days — is this BAA compliant?)
4. Any indemnification gaps or limitations that we should push back on
5. 5 specific questions I should ask our legal counsel before signing

[Paste BAA text]
```

**[HANDS-ON] option:** If participants have a BAA or vendor contract to review (with proprietary information redacted), this is a powerful real-time demo. Ask the group in advance.

**Debrief question:**
"How many vendor contracts did your organization sign last year? How many got a full compliance review before signature?"

---

### Slides 21–22 — Track D Introduction & Use Case D1: Strategic Communication

**[HANDS-ON] — Demo 1 for Track D**

**Track D introduction (30 seconds):**
"Leaders don't have time for detail work — but they're doing it anyway. Writing town halls, board updates, strategic communications, change announcements — it all lands on the leader's desk, and it never gets written as well or as quickly as it should. AI gives you your thinking time back."

**On Use Case D1:**
"Four audience-specific communications from one prompt. Same facts, different framing for each room. Board memo. Staff email. Community statement. Manager talking points. You've already tried to do this and it took half a day. Watch what four minutes looks like."

**Demo:**
```
I'm the CEO of a 3-hospital health system. We are announcing the consolidation of two of our three emergency departments into a new regional emergency center. This is a cost-driven decision but also improves clinical outcomes through volume concentration. Draft:
1. A board memo (formal, financial and strategic framing, 1 page)
2. An all-staff email (honest, empathetic, addresses job security concerns directly)
3. A community statement for local media (accessible, focused on improved patient care)
4. Talking points for department heads to use in team conversations
Keep all four consistent in facts but differentiated in tone and emphasis for each audience.
```

**After the demo:**
"Notice how the framing for the board memo and the framing for the all-staff email are completely different — and both are appropriate for their audience. That code-switching is usually a skill that takes years to develop. Now it's a prompting skill."

**[HANDS-ON]:** "If you have a communication on your desk right now that you haven't written yet — a policy change, a restructure, a new initiative — let's build it. What's the situation and who are the audiences?"

**Debrief question:**
"What's the organizational communication you've been delaying because you didn't have time to write it well? How much longer can you wait on it?"

---

### Slide 23 — Use Case D2: Board & Leadership Meeting Prep

**What to say:**
"The board meeting is in 48 hours. The Q1 financial report is 40 pages. You need a five-bullet executive summary, three questions the board will ask with your prepared answers, and a single clear decision question for the agenda. This is a 20-minute job with AI. Without it, it's a two-hour job that often doesn't get done at all."

**Show the prompt:**
```
I have a board meeting in 48 hours. Attached is our Q1 financial report [paste summary data]. Create:
1. A 5-bullet executive summary of our financial position — what's working, what isn't, and why
2. Three questions the board is likely to ask and my recommended responses
3. A one-page visual narrative I can walk through in 10 minutes
4. The single most important thing I need the board to decide today, framed as a clear decision question
```

**Note:** This works especially well if you ask a participant to share three or four real metrics from their current financial situation (non-sensitive summary level) and build it live.

**Debrief question:**
"When did you last walk into a board meeting feeling fully prepared? What typically gets compressed when you're short on prep time?"

---

### Slide 24 — Use Case D3: Competitive Intelligence & Market Positioning

**Tool note:** Use Perplexity for this demo — it sources current market data and cites it, which is critical for competitive intelligence.

**What to say:**
"Decisions about service line expansion, market entry, and competitive positioning are being made on intuition in most healthcare organizations because real competitive research takes weeks. Perplexity can build a competitive brief in minutes — with sources."

**Show the prompt (run in Perplexity):**
```
Research the competitive landscape for outpatient behavioral health services in the Atlanta, Georgia metro area. I want to understand:
1. The top 5 providers by market presence and what differentiates them
2. Any recent market entries, closures, or major expansions in the past 12 months
3. The most common gaps or unmet needs patients report in this market
4. Where a new entrant with strong clinical quality and technology-enabled care management could differentiate
Synthesize this into a 1-page competitive brief I can use for a board strategy discussion.
```

**After the demo:**
"Notice that Perplexity cites its sources. Every claim is traceable. For a leadership brief, that's not just convenient — it's defensible."

**If you're not in Atlanta:** Swap the geography for the client's actual market. Run it with their real service line. This is the one demo that benefits most from client-specific customization.

**Debrief question:**
"What market decision do you have sitting on your desk right now where better competitive data would change the conversation? What would it cost to get that data through a consultant versus through this tool in 10 minutes?"

---

### Slide 25 — Use Case D4: Change Management Communication

**[HANDS-ON] — Demo 2 for Track D**

**What to say:**
"EHR implementations. Service line consolidations. Leadership restructures. Every major change initiative fails or succeeds largely on communication — and the communication almost never gets built as well or as consistently as the change plan itself. AI builds the communication infrastructure."

**Demo:**
```
We are implementing a new EHR system over the next 18 months. This is a major change for 800 clinical and administrative staff. Create a change communication plan that includes:
1. A phased communication calendar (announcement → training → go-live → post-go-live) with recommended channels for each phase
2. The announcement message for all staff — honest about the difficulty, clear about the support
3. A manager FAQ document with the 10 hardest questions managers will get and how to answer them
4. A 30-day post go-live pulse check email to assess adoption and surface problems early
```

**[HANDS-ON]:** "What's the next major change initiative in your organization? Swap the EHR for your actual change — a merger, a rebranding, a new system, a staffing restructure. The communication structure is universal."

**Debrief question:**
"Think about the last major change initiative in your organization. Where did the communication break down? Was it the announcement, the middle months, or the go-live period? Which of those would this tool have fixed?"

---

### Slide 26 — Use Case D5: Strategic Planning & Decision Framing

**What to say:**
"This last use case is the most strategic thing AI can do for a leader: pressure-test your own thinking. You're considering an acquisition, a partnership, a new service line. You have the instinct. AI helps you structure the decision clearly enough to align a board, challenge your assumptions, and see the blind spots."

**Show the prompt:**
```
I'm considering acquiring a 3-location urgent care chain in our market. Help me think through this decision rigorously. Create:
1. A structured decision framework: key strategic questions I need to answer before proceeding
2. A pro/con analysis of acquisition vs. organic growth vs. partnership
3. The 5 most important due diligence questions I should be asking
4. The most common reasons healthcare acquisitions of this type fail — and how I'd mitigate each
5. A one-page decision memo I could take to my board summarizing the opportunity and recommended next step
```

**After the demo:**
"Notice that this prompt doesn't ask AI to make the decision. It asks AI to structure the decision so that you can make it better. That's the leadership use case: AI as a thinking partner, not a replacement for judgment."

**Debrief question:**
"What's the hardest decision on your leadership agenda right now? What would it mean to walk into that conversation with this level of structured preparation?"

---

### Slide 27 — Close: Build Your Personal Use Case Map

**This is the most important 10 minutes of the session. Don't rush it.**

**Return to the opening exercise:**
Go back to the list you wrote at the beginning — the specific tasks people named. Map each one to the track and use case that addresses it. Show them explicitly: "You said prior auth documentation — that's a Healthcare Ops workflow. You said recruiting for hard-to-fill roles — that's Staffing, Use Case B1. You said the board meeting you're dreading — that's Track D."

**Personal Use Case Map exercise:**
Give participants 3 minutes to write down:
1. The one use case from today they're doing this week
2. The one use case they want to build out into a full workflow over the next 30 days
3. The one use case they need to bring to a colleague or their team

**Close:**
"Every one of you walked in here today with a list of tasks that drain your time, your energy, and frankly your capacity to do the work that actually requires your expertise. Most of those tasks are on the slides we just went through. The only thing standing between you and getting that time back is the first prompt."

"Start there. One thing. This week."

---

## DEMO PROMPTS LIBRARY

These are the 8 strongest live demo prompts for Module 3 — 2 per track. Pre-load all 8 in a scratch doc before every session. Customize the geography and operational details for the specific client.

---

### Track A — Healthcare Operations

**A-Demo 1: Patient Reminder Sequence (Use Case A1)**
*Strongest for: Clinic managers, practice administrators, care coordination leads*
```
I run a 12-provider outpatient family medicine practice. Our no-show rate is 18%, highest on Monday mornings and Friday afternoons. Draft a 3-part patient reminder sequence (72 hours, 24 hours, 2 hours before appointment) that is warm, specific, and includes an easy reschedule path. Also suggest 3 scheduling policy changes we could implement to reduce no-shows based on best practices.
```

**A-Demo 2: Executive Operations Summary (Use Case A2)**
*Strongest for: Operations managers, department heads, anyone who writes recurring leadership reports*
```
I need to write a monthly operations report for hospital leadership. Here are this month's key metrics: ED wait time average 47 minutes (target 40), patient satisfaction scores 82% (target 85%), supply costs $1.2M (budget $1.1M), staff overtime 12% (target 8%). Write a 3-paragraph executive summary that explains the variances, identifies root causes where I specify them, and outlines 2-3 corrective actions. Tone: direct, data-driven, not defensive.
```

---

### Track B — Staffing & Workforce

**B-Demo 1: Recruitment Content Package (Use Case B1)**
*Strongest for: Talent acquisition, HR directors, staffing coordinators*
```
Create a complete recruitment content package for a Travel ICU RN opening at a Level II Trauma Center in Atlanta, GA. Include:
1. A detailed job description (requirements, responsibilities, physical demands)
2. A condensed 150-word Indeed/LinkedIn posting
3. A 3-sentence recruiter outreach message for cold LinkedIn reach
4. Two social media captions (one professional/LinkedIn, one casual/Facebook)
Contract: 13 weeks, $2,800/week all-in, housing stipend included. Start: May 1.
```

**B-Demo 2: 30-60-90 Onboarding Plan (Use Case B3)**
*Strongest for: HR leaders, nurse managers, department directors with active new hires*
```
Create a 30-60-90 day onboarding plan for a newly hired Clinical Nurse Manager overseeing a 28-bed medical-surgical unit at a community hospital. For each phase, include: learning objectives, key relationships to build, operational responsibilities to assume, and a success metric. Also write the welcome letter I'll send them before their first day — warm, specific to the role, and focused on setting them up for success.
```

---

### Track C — Compliance & Risk

**C-Demo 1: AI Governance Policy (Use Case C1)**
*Strongest for: Compliance officers, privacy officers, risk managers, CIOs*
```
Draft a new policy and procedure for the use of AI tools by clinical and administrative staff in a HIPAA-covered healthcare organization. The policy must address:
1. Approved tool tiers (consumer free tier, enterprise, HIPAA-eligible)
2. Data classification — what can and cannot be entered into each tier
3. Staff training requirements before use
4. Incident reporting for AI-related privacy events
5. Governance and annual review process
Format: standard P&P format with purpose, scope, policy statement, procedures, definitions, references, and effective date placeholder. Tone: clear enough for a front-line staff member to understand.
```

**C-Demo 2: HIPAA Breach Documentation (Use Case C3)**
*Strongest for: Privacy officers, compliance managers, risk management staff*
*[PHI WARNING: Use fictional scenario only. Never run with real patient data.]*
```
Help me document a potential HIPAA breach incident. A staff member sent a patient's lab results to the wrong patient's MyChart account. The error was discovered 4 hours later when the correct patient called asking about their results. No highly sensitive information (mental health, substance abuse, HIV) was involved. Draft:
1. The initial incident documentation using the required 4-factor risk assessment (nature of PHI, unauthorized recipient, whether PHI was acquired/viewed, mitigation)
2. A determination memo for whether this meets the breach notification threshold
3. A patient notification letter if notification is required
```

---

### Track D — Leadership & Strategy

**D-Demo 1: Multi-Audience Communication Package (Use Case D1)**
*Strongest for: C-suite, VPs, medical directors, anyone facing a major organizational announcement*
```
I'm the CEO of a 3-hospital health system. We are announcing the consolidation of two of our three emergency departments into a new regional emergency center. This is a cost-driven decision but also improves clinical outcomes through volume concentration. Draft:
1. A board memo (formal, financial and strategic framing, 1 page)
2. An all-staff email (honest, empathetic, addresses job security concerns directly)
3. A community statement for local media (accessible, focused on improved patient care)
4. Talking points for department heads to use in team conversations
Keep all four consistent in facts but differentiated in tone and emphasis for each audience.
```

**D-Demo 2: Change Management Communication Plan (Use Case D4)**
*Strongest for: Leaders managing any active or upcoming major change initiative*
```
We are implementing a new EHR system over the next 18 months. This is a major change for 800 clinical and administrative staff. Create a change communication plan that includes:
1. A phased communication calendar (announcement → training → go-live → post-go-live) with recommended channels for each phase
2. The announcement message for all staff — honest about the difficulty, clear about the support
3. A manager FAQ document with the 10 hardest questions managers will get and how to answer them
4. A 30-day post go-live pulse check email to assess adoption and surface problems early
```

---

## HANDLING COMMON OBJECTIONS

Module 3 generates objections that are different in character from Modules 1 and 2. Here, participants are thinking about their specific systems, their specific data, and their specific risk exposure — and that's a good thing. Engage these objections directly. They signal that participants are taking the material seriously.

---

### "This wouldn't work in our specific system."

**What they mean:** "Our EHR / HRIS / credentialing platform is so specialized that general AI tools won't interface with it."

**What to say:**
"You're right that AI doesn't connect to your Epic or your ADP directly — at least not through the general tools we're working with today. But notice what we just built: reports, communications, SOPs, interview guides, training content, breach documentation. None of those outputs require a system integration. They require your knowledge of what's happening in your system — which you have — and an AI tool to turn that knowledge into structured documents. The system doesn't change. The writing overhead does.

If you want AI that actually integrates into your specific platform, that's a procurement conversation — Epic has AI modules, Workday has it, ADP has it. Those are the Products layer from Module 1. What we're doing today is the layer on top of that — the general intelligence layer that works regardless of your stack."

---

### "Our data is too sensitive to use with these tools."

**What they mean:** "We have PHI, proprietary operational data, or competitive information that we cannot share with a third-party AI tool."

**What to say:**
"That's exactly the right instinct — and I want to be clear that I'm not asking you to change it. Go back to what we talked about at the top of today: the no-show rate prompt, the ops report prompt, the job description prompt. None of those required entering patient data. They required entering operational metrics, structural information, and role parameters — the kind of information you'd put in a presentation or a job posting.

For the use cases that do involve more sensitive data — incident documentation, breach response, contract review — there are two paths. One: use fictional or de-identified examples to build the template, then customize it manually with the real data before it leaves your system. Two: if your organization has an enterprise or HIPAA-eligible AI environment, that's the right tier for sensitive work. The tool selection matches the data classification. Same policy you have for email."

---

### "We already have tools for this."

**What they mean:** "Our EHR has a reporting module. Our HRIS has job description templates. Our LMS has compliance training. Why do I need this on top of everything else?"

**What to say:**
"I want to be specific about what I'm hearing, because it matters. The tools you have are great for structured data — reports that pull from the database, templates that follow a fixed format. What they don't do is generate original language, adapt tone for different audiences, interview you to capture institutional knowledge, or synthesize unstructured data into a narrative. Those are AI's lane.

Here's the test: can your existing tools write the vendor performance letter from bullet points? Can they generate a stay interview guide that sounds human instead of like an HR document? Can they build the breach notification letter in the 30 minutes after an incident while your team is still in crisis mode? If yes, don't change a thing. If no, that's the gap AI fills."

---

### "What if the AI gets the regulatory details wrong?"

**What they mean (often in compliance/legal rooms):** "HIPAA specifics, Joint Commission standards, credentialing rules — if AI hallucinates something here, the consequences are serious."

**What to say:**
"This is the right question in compliance rooms, and I take it seriously. Here's how I think about it: AI is drafting the structure. You're still doing the professional review.

In the breach documentation example — AI generated the 4-factor risk assessment framework correctly because that framework is in the public record. But your compliance officer still reads it, validates the facts against what actually happened, and signs off on it. That hasn't changed. What has changed is that your compliance officer is starting from a complete draft instead of a blank document under pressure.

The rule is simple: AI output in compliance contexts is always a first draft, never a final decision. You verify before it leaves the building. Same thing you'd do with a paralegal's work, a contractor's analysis, or a junior staff member's first attempt."

---

### "My staff will use this as a shortcut and stop thinking."

**What they mean (common from clinical managers and executives):** "If AI writes everything, my team won't develop the skills they need."

**What to say:**
"I understand the instinct — and I'd push back on the framing. The SOP writing task doesn't develop clinical judgment. The vendor letter doesn't develop compliance expertise. The recruitment posting doesn't develop talent assessment skills. Those are production tasks, not thinking tasks.

The skills you actually want your team developing — clinical reasoning, regulatory interpretation, candidate evaluation, strategic communication — those require time, attention, and practice. Right now, they're crowded out by the production overhead. AI clearing the production overhead is what creates the space for the real skill development.

That said — the habit you want to build in your team is not 'accept the output.' It's 'review and refine the output.' That's a different muscle than writing from scratch, but it's a professional skill in its own right. Teaching your team to critically evaluate AI output is the new version of teaching them to write."

---

## POST-SESSION FOLLOW-UP

Send within 48 hours of session completion:

1. **Personal Use Case Map reminder.** Email participants with the three use cases they committed to at the close of the session. "You said you were going to try [Use Case X] this week. Here's the prompt again — copy it and go."

2. **Track-specific prompt pack.** Send each participant the demo prompts from the track(s) most relevant to their role. Don't send all 8 prompts to everyone — send the 2 that are closest to their actual daily work. Targeted prompts get tried. Complete libraries sit in inboxes.

3. **PHI guidance reminder.** A brief, plain-language reminder of the data tiers and what can and cannot be entered into each. Reference the AI governance policy draft from C1 if you ran Track C — or offer to build one if you didn't.

4. **Tool recommendations by role.** A short list (3–5 tools) matched to their specific track:
   - Healthcare Ops: ChatGPT GPT-4o, Claude, Nuance DAX (if clinical)
   - Staffing & Workforce: ChatGPT GPT-4o, LinkedIn AI features, Workday AI (if applicable)
   - Compliance & Risk: Claude (long document review), Perplexity (regulatory research), ChatGPT Enterprise
   - Leadership: Perplexity (competitive research), Claude (synthesis and analysis), ChatGPT GPT-4o (communications)

5. **30-day check-in offer.** Offer a 30-minute group or individual follow-up at the end of Week 4. Ask two questions: "What did you try?" and "What happened?" Those two questions reveal more about real adoption than any survey.

6. **Module 4 preview (if applicable).** If the client is on track for the full KEDAL curriculum, include a brief note on what Module 4 covers and when to expect it.

---

*End of Facilitator Guide — Module 3 | Teacher Scott | KEDAL Solutions | April 2026*
