const TOTAL_SLIDES = 20;
let current = 1;
let isAnimating = false;

const facilitatorNotes = {
  1: `<strong>Opening:</strong> Start with this question: "Think about the best professional development training you've ever done. Now think about whether anything actually changed in how you worked afterward." Let a few people answer. Most training — even good training — doesn't change behavior at scale because the organization doesn't change with it. That's what this module addresses. Modules 1–3 gave everyone personal skills. Module 4 is about what happens when you go back to work Monday morning and try to make those skills stick.`,

  2: `<strong>The gap:</strong> The visual here is intentional — the chasm between individual skill and organizational capability. Most AI initiatives live and die in that chasm. Point out the two sides: "You have the left side. You've spent three modules building it. The right side is what an organization looks like when AI is embedded, governed, and measured." The question isn't whether to bridge it — it's how. This module is the bridge-building session.`,

  3: `<strong>Why initiatives fail:</strong> Ask for a show of hands on each failure mode: "Who has seen this happen?" In most rooms, every hand goes up for at least one. The goal of this slide is recognition — "yes, that's exactly what happened when we tried this." Recognition creates motivation to do it differently. Don't linger — spend 3–4 minutes here and move on. The solutions come in the next 16 slides.`,

  4: `<strong>The adoption curve:</strong> The stall at Stage 2 is the most important insight on this slide. Almost every organization has reached Experimentation. Almost none have reached Workflow Integration systematically. Ask: "Where would you say your organization is right now?" This is usually a revealing conversation — different people in the same organization often have wildly different answers, which itself illustrates the problem. Peer adoption is uneven. Some departments are at Stage 3; others are still at Stage 1. The goal of Module 4 is to create the structural conditions for the whole organization to move forward together.`,

  5: `<strong>The champion model:</strong> This is the most actionable slide in the change management section. The identification method is deliberate: you're not asking people to volunteer, you're identifying them based on their demonstrated enthusiasm during training. The math at the bottom is what converts skeptical leaders: one training session seeds 100+ people through champions. That's a multiplier no additional training budget can match. Ask: "Who in this room already knows someone on their team they'd want to champion this?" Usually multiple hands. Those are your champions.`,

  6: `<strong>Champion prompt — run this live:</strong> Have someone in the room describe their team and function. Build the prompt in real time with their specific information. Let the 20-minute peer session structure that comes out of it land. Then ask: "Would you be comfortable running this session with your team next week?" For champions who say yes — that's a commitment you can hold them to. The peer session is the activation mechanism. Without it, champions stay enthusiastic but passive.`,

  7: `<strong>30-60-90 plan:</strong> The key point on each phase: 30 days is about repetition, not perfection. The habit has to form before the workflow can change. 60 days is about community — moving from individual practice to shared practice. The show-and-tell is the most important event in the 60-day phase. 90 days is where the real ROI gets created — workflow redesign, not just task acceleration. Ask participants: "What task are you going to pick for your first 30 days?" Having them name it in the room creates accountability.`,

  8: `<strong>The 4 objections:</strong> Practice these out loud. The job security objection needs to be handled with empathy first — "that's a reasonable fear" — before the reframe. Don't dismiss it. The "we already tried it" objection is the most important one in organizations with failed previous attempts. Slow down on that one. Ask: "What specifically didn't work?" The answer almost always points to prompting quality, wrong tool selection, or no workflow integration — all solvable. This is where you earn trust with the skeptics in the room.`,

  9: `<strong>Governance divider:</strong> Brief reset. "The second reason AI initiatives fail is that organizations scale usage before they scale governance. Staff are using tools with PHI before policies exist. The next section fixes that — and it doesn't require months of committee meetings. It requires 60 days and one person with clear ownership." Frame governance as enabling, not restricting. The goal is a policy that makes AI safe to expand — not one that shuts it down.`,

  10: `<strong>Three-tier model:</strong> Walk through each tier slowly. The critical insight is in the bottom row: most organizations have no policy, which means staff default to whatever tool they've heard of — usually the free tier — with whatever data they have, including PHI. The three-tier model doesn't create restrictions that don't already exist in HIPAA. It makes those restrictions explicit and gives staff a clear decision framework. Ask: "Does anyone know what tools their team is currently using?" Usually people can't answer confidently. That uncertainty is the governance gap.`,

  11: `<strong>HIPAA + AI:</strong> Each of the four cards deserves a brief story. The BAA card is the most urgent — tell the story of a real scenario: "A nurse uses ChatGPT free to summarize a patient's recent hospitalization for a transition of care note. She enters the patient's name, DOB, diagnosis, and medication list. That's a BAA violation. The tool she used isn't covered by a BAA. That's potentially a reportable incident." Then: "Does your organization have a policy preventing this?" The answer is almost always no. That's what Slide 12 fixes.`,

  12: `<strong>5 governance steps:</strong> The point here is speed. This is a 60-day sprint, not a 6-month project. The most common objection: "We'll need to go through committee." Response: "The committee can review the draft the AI writes in 15 minutes. That's different from the committee writing it from scratch. Let's show you that on the next slide." The five steps are sequential but the total calendar time is 2 months. Step 5 — the quarterly review — is what most organizations skip, which is why their AI governance policy is already obsolete 6 months after they write it.`,

  13: `<strong>Governance policy prompt — run this live:</strong> This is the C1 use case from Module 3 in its organizational context. Run it. The P&P that comes out addresses all five required components. Point out the data classification table specifically — it's the piece organizations most often skip, and it's the piece staff most need. "What data can I put in ChatGPT?" is the #1 AI governance question in every healthcare organization right now. This policy answers it explicitly. Estimated review/customize time after AI generates the draft: 2–3 hours for a compliance officer. Total time to policy: less than a day.`,

  14: `<strong>ROI divider:</strong> "The third thing that kills AI initiatives is that they can't prove their value. Training gets approved, adoption happens, and then next budget cycle, someone asks: 'What did we get for that?' If you can't answer with numbers, the budget gets cut. The organizations that keep investing in AI are the ones that measure. The next section gives you the measurement framework." ROI is not just about justifying past investment — it's about funding future investment.`,

  15: `<strong>Three types of ROI:</strong> The difficulty gradient is intentional. Start with time savings because it's the most credible and easiest to measure. Build from there. For the revenue protection category, the no-show example is the most immediately compelling for healthcare: 18% no-show rate → 12% = $200K–$400K in recovered revenue for a 12-provider practice. That's not AI productivity — that's AI-enabled revenue recovery. For leadership audiences, start with revenue. For operations audiences, start with time.`,

  16: `<strong>The time savings calculator:</strong> Have participants calculate one use case from their own work right now. Ask: "What task did you identify in Module 3? How long does it take? How often do you do it? What's your rough hourly rate?" Walk them through the formula. The exercise usually produces numbers that surprise people — $15K–$50K per person per year from a single use case is common. Then: "That's one use case, one person. What happens when you replicate that across your department? Your organization?" This is the ROI story that boards fund.`,

  17: `<strong>Business case prompt:</strong> This is the prompt that converts AI from a cost to an investment in your leadership team's mind. Run it live using data from the room if possible. The output — a complete business case with executive summary, cost analysis, projected ROI, and risk analysis — is exactly what a CFO or board needs to see. The insight at the bottom of the slide is the strategic one: the organizations that can quantify AI value will keep investing. The ones that can't will treat it as a discretionary expense and cut it in the next downturn.`,

  18: `<strong>The 90-day story prompt:</strong> This slide is about creating momentum, not just measurement. Numbers without narrative don't change minds. The "human impact" framing — what are your people doing with the time they've recovered? — is often more compelling than the dollar figures. Ask the room: "If you saved 3 hours a week in reporting, what would you actually do with that time?" Their answers are your narrative. The four metrics to track are the minimum viable measurement system. Track them monthly. The quarterly business review format creates the reporting cadence that keeps leadership engaged.`,

  19: `<strong>Capstone — 90-Day Readiness Blueprint:</strong> Give the room 5–10 minutes to actually fill this out. The four questions are designed to be immediately actionable: specific use cases (not general areas), one governance action (not a full program), one named champion (not "someone in my department"), one metric (not "ROI in general"). The blueprint prompt at the bottom is the bridge between this session and real deployment — encourage participants to run it before they leave the building. The goal: every participant leaves with a piece of paper that describes their first 90 days. That's what changes the conversion rate from "interesting training" to "organizational transformation."`,

  20: `<strong>Close — the 3P framework complete:</strong> This is the curriculum's close. Take a moment. "We've been in this room for four modules. You started not knowing what AI could do for your specific work. You now have personal skills, domain-specific use cases, a governance framework, and a 90-day plan. That's not a training certificate. That's a business strategy." The 3P framework visual ties the whole curriculum together: Products → People → Process. Each module built one layer. Module 4 is the process layer — the one that makes everything else durable. Finish with: "The organizations that win with AI aren't the most sophisticated. They're the most consistent. Go be consistent."`
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
  const panel = document.getElementById('facPanel');
  if (panel && panel.classList.contains('open')) updateFacPanel();
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
