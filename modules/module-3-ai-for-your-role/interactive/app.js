const TOTAL_SLIDES = 27;
let current = 1;
let isAnimating = false;

const TRACK_LABELS = {
  A: 'Track A · Healthcare Ops',
  B: 'Track B · Staffing',
  C: 'Track C · Compliance',
  D: 'Track D · Leadership',
};

const facilitatorNotes = {
  1: `<strong>Opening:</strong> Before clicking Begin, ask the room: "Which of the four tracks on the next slide is most relevant to your daily work?" Let a few people answer. This primes them to pay attention to their specific track and signals that this module is personal, not generic. Module 3 works because the examples are real work they actually do.`,

  2: `<strong>Track map:</strong> Spend 2–3 minutes here. Point out that all four tracks use the exact same framework from Modules 1 and 2 — they're just applying it to domain-specific work. If the room is homogeneous (all compliance, all staffing, etc.), tell them you'll run their track in depth and come back to the others if time allows. If the room is mixed, run all four and encourage people to pay close attention across tracks — cross-functional teams share use cases more than they realize.`,

  3: `<strong>Track A divider:</strong> Brief pause. Ask: "How much of your week is information handling vs. actual judgment work?" Most ops professionals will say 60–80% is handling. That's the point — almost none of that is work only a human can do. AI's clearest wins in healthcare ops are the information-handling tasks that dominate the calendar.`,

  4: `<strong>A1 — Patient Flow & No-Show Reduction:</strong> This one lands hardest with practice managers and clinic ops leads. The $200K–$400K revenue figure is realistic for a 12-provider practice at an 18% no-show rate. Run the prompt live. The reminder templates that come out are ready to deploy — you'll spend more time editing the templates than writing them. Ask: "Who's currently sending automated reminders?" Follow up: "Who wrote the copy for those reminders, and when did you last update it?"`,

  5: `<strong>A2 — Department Reporting:</strong> Every ops leader in the room has written this report. Point out that the hard part isn't knowing the numbers — they already know them. The hard part is writing the narrative around the numbers in a way that doesn't sound defensive. Run the prompt with the exact metrics shown. Then show the follow-up prompt — watch how one sentence transforms the supply cost section. The key insight: AI doesn't replace your judgment about what happened. It replaces the 45 minutes of writing that judgment down.`,

  6: `<strong>A3 — Vendor Communication:</strong> The strategic insight here is one most ops professionals haven't articulated yet: AI eliminates the drafting time so that legal only reviews, not writes. That changes the per-letter legal cost from $400–$800 (1–2 hours of attorney time writing + reviewing) to $100–$150 (30 min reviewing a draft). Run this one live. The output is almost always better than what most people would write under time pressure.`,

  7: `<strong>A4 — SOP via AI Interview:</strong> This is the most novel use case in Track A. Most people come in expecting AI to write from a template. The AI-as-interviewer model is different — and more powerful. Demonstrate it live. Open a chat window and say: "Interview me about our patient check-in process." Let the AI ask the first question. Answer it briefly. Ask the room: "What just happened?" The answer: AI extracted structured knowledge from an unstructured conversation. The person being interviewed doesn't need to be a writer. This is how you capture institutional knowledge before it walks out the door.`,

  8: `<strong>A5 — Quality Documentation:</strong> Incident reports written under pressure are one of the highest-risk documents in healthcare operations. They have legal exposure, regulatory exposure, and they're written by people who are still processing a stressful event. The SBAR prompt gives structure to that chaos. Important caveat: AI generates the draft. A clinician and/or risk management reviews and signs off. AI doesn't replace the accountability — it eliminates the time pressure that causes documentation errors.`,

  9: `<strong>Track B divider:</strong> Brief pause. Ask staffing professionals in the room: "How many job descriptions did you write or update in the last 60 days?" Follow up: "How long did each one take?" The answer is always longer than it should be. The entire Track B is about eliminating the templated administrative overhead that dominates staffing work — so the actual relationship-building and placement work gets more attention.`,

  10: `<strong>B1 — Recruitment Content:</strong> The math here is the show-stopper. 20 open roles × 2+ hours per role = 40+ hours/month on content that follows the same structure every time. Run the Travel ICU RN prompt live. The output — job description, Indeed post, LinkedIn outreach, two social captions — takes about 90 seconds. Ask: "How long would it have taken you to write all four of those?" Let them do the math. Then ask: "What would you do with those 40 hours?" This is the 3P framework in action: Product (AI) frees People time (recruiter) to focus on Process (placements, relationships, retention).`,

  11: `<strong>B2 — Screening & Interview Guides:</strong> The consistency argument is the most compelling here. When every manager uses a different screening process and different interview questions, you can't learn what works. The legal exposure from inconsistent interview processes is also real. Run the DON hiring prompt. The behavioral question bank that comes out of it is something most organizations have never built from scratch — and AI builds it in 2 minutes. Ask: "Who has a structured scoring rubric for your most common hire?" Almost no hands. This is the gap.`,

  12: `<strong>B3 — Onboarding Plans:</strong> The hidden cost of bad onboarding is turnover in the first 90 days — which in healthcare averages $12,000–$18,000 per RN replacement. This isn't a nice-to-have. Consistent, high-quality onboarding that actually prepares people for the role they accepted directly affects 90-day retention. Run the Clinical Nurse Manager prompt. The 30-60-90 day plan that comes out is immediately more structured than most organizations' actual onboarding. Then show the welcome letter: "This is what we send before day one. Do you want to send this, or the one you're currently sending?"`,

  13: `<strong>B4 — Credentialing Communications:</strong> Credentialing compliance failures are career-ending events for compliance and HR leaders. They're also almost entirely preventable. The case study here is a home health agency because credentialing risk is highest in field-based clinical environments. Run the four-piece system prompt. Point out: this is not just communication templates — it's a compliance architecture. The acknowledgment form creates a documented record that staff received notice. The manager notification creates an escalation path. The whole system took 10 minutes to build and costs $0 to implement.`,

  14: `<strong>B5 — Stay Interviews:</strong> The retention conversation is the one most managers avoid because they don't know how to structure it. The fear is: "What if they tell me they're leaving?" The answer: you want to know that before they give notice, not the day they do. Run the stay interview guide prompt. The 8 questions that come out are genuine — not HR-speak. The manager prep sheet ("what to do before, during, and after") is the piece managers most often skip, which is why the conversation doesn't go anywhere. The follow-up action template creates accountability on the manager's side — not just documentation of what the employee said.`,

  15: `<strong>Track C divider:</strong> Ask: "Who here has an AI governance policy in place right now?" In most rooms in 2026, the answer is zero or one hand. That's the opening. The first use case in Track C writes that policy. The entire track is about using AI to address the administrative burden of compliance — which is exactly the kind of work that eats compliance professionals alive and prevents them from doing the deeper regulatory analysis that actually requires their expertise.`,

  16: `<strong>C1 — AI Governance Policy:</strong> This is the most urgently needed document in healthcare compliance right now. Staff are already using ChatGPT free tier. PHI is being entered into consumer tools without organizational approval or BAAs. OCR is watching. Run this prompt live. The P&P that comes out addresses tool tiers (consumer vs. enterprise vs. HIPAA-eligible), data classification, training requirements, incident reporting, and governance. It's review-ready in 15 minutes. Ask the room: "What would it cost to have outside counsel write this from scratch?" $5,000–$15,000. What did this just cost? 15 minutes.`,

  17: `<strong>C2 — Audit Preparation:</strong> The fire drill metaphor is one every compliance professional in the room will recognize. Survey readiness as a continuous practice instead of a sprint before the surveyors arrive is the behavioral shift this use case is trying to drive. Run the Joint Commission prep prompt. The 30-item checklist organized by finding category is the kind of document that takes a compliance team 2–3 days to build manually. Ask: "How many of you have this checklist ready right now?" Then: "How many will have it ready the next time the survey window opens?"`,

  18: `<strong>C3 — HIPAA Breach Documentation:</strong> Important caveat for this slide: AI drafts, counsel decides. Make that explicit. The 4-factor risk assessment framework is HIPAA-specified (45 CFR 164.402). AI can apply it to a specific fact pattern — but the determination of whether notification is required involves legal judgment, not just fact pattern matching. What AI eliminates is the 2–3 hours it takes to document the incident and draft the initial response under pressure. That documentation quality directly affects how the organization looks in an OCR investigation.`,

  19: `<strong>C4 — Training Content:</strong> The scenario-based vs. lecture-based training distinction is worth dwelling on. Every compliance professional in the room has sat through — or delivered — the annual HIPAA training that everyone clicks through without reading. The prompt specifically asks for real-world scenarios that feel real, not textbook examples. The "awkward moments" framing (family in the room, calls claiming to be the patient's doctor, wrong fax) is what makes training sticky. People remember scenarios that match what they actually experience. Run this prompt and let the output speak for itself — it's usually dramatically better than the vendor training they're currently paying for.`,

  20: `<strong>C5 — BAA Pre-Review:</strong> The math on this one is the hook: outside counsel reviewing a BAA costs $600–$1,500 (2–4 hours × $300–$500/hr). With AI doing the pre-review, attorney time drops to 30 minutes for substantive review of flagged issues. That's $150–$250 per BAA. At 20 vendor agreements per year, the savings are $9,000–$25,000 annually — and every agreement actually gets reviewed before signing. Important training note: AI pre-review identifies issues; attorney judgment decides what to do about them.`,

  21: `<strong>Track D divider:</strong> Ask the leaders in the room: "What percentage of your time do you spend on work that only you can do — strategic thinking, relationship management, high-stakes decisions — versus work that someone else could do if they had time?" Most senior leaders will say less than 30% of their time is truly irreplaceable work. The rest is information handling, communication production, and documentation. Track D is about reclaiming that 70% so leaders can actually lead.`,

  22: `<strong>D1 — Multi-Audience Strategic Communication:</strong> The core insight here is that the message doesn't change — the frame does. Board members need financial and strategic framing. Staff need honesty and reassurance. The community needs patient-care language. Department heads need talking points they can actually use in a difficult conversation. Run the ED consolidation prompt live. The four documents that come out in 90 seconds are remarkably well-differentiated. Ask: "How long would it have taken you to write these four separately?" The answer is always half a day or more. Ask: "What are you not doing during that half day?"`,

  23: `<strong>D2 — Board Meeting Prep:</strong> The shift this use case drives is from "I need to prepare a data package" to "I need to prepare a decision recommendation." Most board meetings are too information-heavy and not decision-focused enough. The prompt forces that discipline: the fourth output is the single most important decision you need from the board, framed as a clear decision question. Run this prompt and pay attention to what it does with the 5-bullet executive summary — it organizes the data into a narrative of what's working, what isn't, and why. That's board communication done right.`,

  24: `<strong>D3 — Competitive Intelligence:</strong> This is the slide where Perplexity gets introduced to the leadership track. The distinction from ChatGPT is citation and currency. Strategic decisions need current, verifiable market data — not LLM recall of 18-month-old training data. Run the Atlanta behavioral health market prompt live in Perplexity. Show the sources. Click one of them. The combination of synthesis + verifiable sourcing is what makes this usable for board-level strategy discussions. Important reminder: verify the sources before presenting. Perplexity's citations are generally solid, but they're not infallible.`,

  25: `<strong>D4 — EHR Change Communication:</strong> Use this as your "change management is communication management" moment. Every major technology implementation in healthcare that fails does so because of adoption, not technology. And adoption fails because communication was absent or inconsistent. The 18-month communication backbone that comes out of this prompt is the kind of document no one builds in advance because they're focused on the technology implementation itself. Ask the room: "How many of you have been through an EHR implementation?" Then: "Was there a communication plan?" Usually, technically yes. "Was it executed?" Usually, no.`,

  26: `<strong>D5 — Strategic Decision Framing:</strong> The urgent care acquisition scenario is intentionally familiar — consolidation and urgent care market moves are constant in healthcare right now. The value of this use case is that AI forces structured thinking. Most leaders have strong intuitions about strategic decisions but struggle to externalize the reasoning in a way that can be debated. The decision framework, options analysis, failure mode awareness, and board memo together create what good strategy consultants charge $50,000–$100,000 to produce. Run this prompt. Let the structured output land. Then ask: "What decisions do you have coming up in the next 90 days where you'd want this kind of structured framing?"`,

  27: `<strong>Close — Personal Use Case Map:</strong> Don't rush this. Give the room 3–5 minutes of quiet time to actually think through the four cards. The question for each card is designed to surface a real, immediate pain point — not a hypothetical. When people share their answers: write them on a whiteboard or note them, because those answers are your proof of concept for this training. They're also the starting point for the individual follow-up that drives adoption. The Module 4 teaser: Building the AI-Ready Organization is where the curriculum shifts from individual productivity to organizational change. That's where the 3P framework — Products, People, Process — gets built into systems, governance, and culture.`
};

document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  updateUI();
  setupKeyboard();
  setupThemeToggle();
});

function buildDotNav() {
  const nav = document.getElementById('dotNav');
  nav.innerHTML = '';
  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const btn = document.createElement('button');
    btn.className = 'dot-btn' + (i === 1 ? ' active' : '');
    btn.setAttribute('aria-label', `Go to slide ${i}`);
    btn.addEventListener('click', () => goToSlide(i));
    nav.appendChild(btn);
  }
}

function nextSlide() { if (current < TOTAL_SLIDES && !isAnimating) goToSlide(current + 1); }
function prevSlide() { if (current > 1 && !isAnimating) goToSlide(current - 1); }

function goToSlide(target) {
  if (target === current || isAnimating) return;
  isAnimating = true;
  const currentSlide = document.querySelector(`.slide[data-slide="${current}"]`);
  const targetSlide = document.querySelector(`.slide[data-slide="${target}"]`);
  if (!currentSlide || !targetSlide) { isAnimating = false; return; }
  const dir = target > current ? 1 : -1;
  targetSlide.style.transform = `translateX(${dir * 60}px)`;
  targetSlide.style.opacity = '0';
  targetSlide.style.transition = 'none';
  targetSlide.getBoundingClientRect();
  currentSlide.style.transition = 'opacity 320ms ease,transform 320ms cubic-bezier(0.16,1,0.3,1)';
  currentSlide.style.transform = `translateX(${-dir * 60}px)`;
  currentSlide.style.opacity = '0';
  currentSlide.style.pointerEvents = 'none';
  currentSlide.classList.remove('active');
  targetSlide.style.transition = 'opacity 380ms ease,transform 380ms cubic-bezier(0.16,1,0.3,1)';
  requestAnimationFrame(() => {
    targetSlide.style.transform = 'translateX(0)';
    targetSlide.style.opacity = '1';
    targetSlide.classList.add('active');
    targetSlide.style.pointerEvents = 'all';
  });
  setTimeout(() => {
    currentSlide.style.transform = '';
    currentSlide.style.opacity = '';
    currentSlide.style.transition = '';
    currentSlide.style.pointerEvents = '';
    isAnimating = false;
  }, 400);
  current = target;
  updateUI();
}

function updateUI() {
  document.getElementById('slideCounter').textContent = `${current} / ${TOTAL_SLIDES}`;
  const pct = ((current - 1) / (TOTAL_SLIDES - 1)) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = current === 1;
  if (nextBtn) nextBtn.disabled = current === TOTAL_SLIDES;
  document.querySelectorAll('.dot-btn').forEach((dot, i) => {
    dot.classList.toggle('active', i + 1 === current);
  });
  updateTrackIndicator();
  const panel = document.getElementById('facPanel');
  if (panel && panel.classList.contains('open')) updateFacPanel();
}

function updateTrackIndicator() {
  const indicator = document.getElementById('trackIndicator');
  if (!indicator) return;
  const slide = document.querySelector(`.slide[data-slide="${current}"]`);
  const track = slide ? slide.getAttribute('data-track') : null;
  if (track === 'A' || track === 'B' || track === 'C' || track === 'D') {
    indicator.setAttribute('data-track', track);
    indicator.textContent = TRACK_LABELS[track];
  } else {
    indicator.removeAttribute('data-track');
    indicator.textContent = '';
  }
}

function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case ' ': e.preventDefault(); nextSlide(); break;
      case 'ArrowLeft': case 'ArrowUp': e.preventDefault(); prevSlide(); break;
      case 'Home': e.preventDefault(); goToSlide(1); break;
      case 'End': e.preventDefault(); goToSlide(TOTAL_SLIDES); break;
      case 'f': case 'F': toggleFacPanel(); break;
    }
  });
}

function setupThemeToggle() {
  const btn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = 'dark';
  root.setAttribute('data-theme', theme);
  updateThemeIcon(btn, theme);
  btn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    updateThemeIcon(btn, theme);
  });
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

function toggleFacPanel() {
  const panel = document.getElementById('facPanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) updateFacPanel();
}

function updateFacPanel() {
  document.getElementById('facPanelBody').innerHTML = facilitatorNotes[current] || '<em>No notes for this slide.</em>';
}
