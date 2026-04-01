// ===================================
// SLIDE DATA
// ===================================
const TOTAL_SLIDES = 18;
let current = 1;
let isAnimating = false;

const facilitatorNotes = {
  1: `<strong>Opening:</strong> Set the tone before any slides. Ask the room: "When was the last time you did something at work that you thought 'I can't believe we still do this manually?'" Let two or three people answer. That's your on-ramp into the diamond analogy.`,
  2: `<strong>Agenda:</strong> Give them the roadmap upfront. Tell them the first half will challenge how they think, and the second half will give them a framework to act. Let them know questions are welcome throughout — especially the tough ones about hallucinations and security.`,
  3: `<strong>Diamond analogy:</strong> Spend 10–15 minutes here. This is the conceptual core. Don't rush it. Ask: "What in your organization right now is something you pay a lot for because it's hard to produce?" Pause and let them answer. Then show them AI doing that thing. The moment of recognition is the whole point of this slide.`,
  4: `<strong>Implications:</strong> The goal here is productive discomfort. You're not trying to scare them — you're trying to make them realize their current business assumptions were built on a cost structure that no longer exists. "Not eventually — now" is the most important phrase on this slide.`,
  5: `<strong>Clinical examples:</strong> THIS is where you demo. Pull up Nuance DAX or Ambience and show a clinical note being drafted in real-time. If you don't have live access, show a video demo. The room needs to SEE it, not just hear about it. Ask: "Who has a prior auth coordinator on your team? What does their week look like?" Then show the after.`,
  6: `<strong>Staffing examples:</strong> Your wheelhouse. You can speak to this from direct experience. A good live demo here: open ChatGPT and draft a specialty nursing job description for an ICU RN in 90 seconds. Compare it to what normally takes 1–2 hours. Let them react.`,
  7: `<strong>Compliance examples:</strong> This is where legal and compliance leads in the room will lean in or get defensive. Validate the concern before showing the example: "I know what you're thinking — 'we can't put our policies through some chatbot.' Let me show you what the tool tier question actually looks like." Then transition to the security slide.`,
  8: `<strong>Pharma/adjacent:</strong> Good for mixed-industry rooms. Reinforce the theme: this isn't a healthcare-only phenomenon. Every adjacent industry — pharma, health tech, payers — is experiencing the same cost collapse on knowledge work.`,
  9: `<strong>Hallucination objection:</strong> VALIDATE FIRST before answering. Say: "That's exactly the right question — I'd be worried about anyone who didn't ask it." Then work through the four points. The key insight is that hallucinations are a workflow design problem, not a reason to avoid the tool. Use the human-reviewer analogy hard here.`,
  10: `<strong>Security objection:</strong> Don't minimize. Walk through the tier table slowly. The HIPAA-eligible tier is the one healthcare professionals need to see. If you have time, show them exactly where to find Microsoft's BAA for Azure OpenAI. This makes it concrete and credible. Remind them: their employees are likely already using consumer free-tier tools. The question isn't "will AI be used" — it's "will it be used correctly."`,
  11: `<strong>3P intro:</strong> Transition energy. You've shown them the problem; now show them the path. Read the three "wrong ways" out loud and ask "raise your hand if you've seen your organization do one of these." Almost everyone will. Then reveal the 3P framework as the alternative.`,
  12: `<strong>Products:</strong> Live demo moment. Pick ONE tool relevant to this audience's actual work. Don't show five things — show one thing done really well. Ask the room: "What's a task you did this week that was repetitive and felt like a chore?" Then do that task with AI, live, in the room.`,
  13: `<strong>People / bandwidth:</strong> This is the emotional center of the whole training. The bandwidth ladder will resonate because most rooms know exactly which rung they're stuck at. Call it out directly: "Most of you are at Access. You have the login. You haven't had the time." Let that land.`,
  14: `<strong>ROI calc:</strong> For the skeptical exec in the room. These numbers are conservative — use your own client's salary data if you have it. The core point: the cost of learning time is trivially small compared to the return. Frame it as: "You wouldn't buy equipment and not train people to use it."`,
  15: `<strong>Process:</strong> Emphasize the sequence. Tools first, fluency second, workflow redesign third. If you skip People and go straight from Products to Process, you'll mandate a redesign that no one has the skills to execute. The sequence matters.`,
  16: `<strong>Prior auth example:</strong> Walk through this slowly. It's a workflow most healthcare ops people recognize immediately. The key insight: AI doesn't replace the coordinator — it eliminates the 45-minute writing task so the coordinator can handle 4x the volume. The role survives; the chore doesn't.`,
  17: `<strong>Change management:</strong> This is where you address the human side. Read the pushbacks out loud and ask if the room has heard them. Almost everyone has. Work through each one. The "this will eliminate jobs" objection needs the most time — be direct and specific. It eliminates tasks, not jobs. The risk is in not adapting.`,
  18: `<strong>Close / 30-day plan:</strong> Leave them with something actionable they can do Monday morning. The four-week plan is intentionally simple. Don't overwhelm. Ask: "Which of these four things can you commit to doing this week?" Get a show of hands. End with the tagline — and mean it.`
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  updateUI();
  setupKeyboard();
  setupThemeToggle();
  // Add keyboard hint
  const hint = document.createElement('div');
  hint.className = 'kbd-hint';
  hint.innerHTML = '<span class="kbd">←</span> <span class="kbd">→</span> navigate';
  document.body.appendChild(hint);
});

// ===================================
// DOT NAV
// ===================================
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

// ===================================
// NAVIGATION
// ===================================
function nextSlide() {
  if (current < TOTAL_SLIDES && !isAnimating) goToSlide(current + 1);
}

function prevSlide() {
  if (current > 1 && !isAnimating) goToSlide(current - 1);
}

function goToSlide(target) {
  if (target === current || isAnimating) return;
  isAnimating = true;

  const slides = document.querySelectorAll('.slide');
  const currentSlide = document.querySelector(`.slide[data-slide="${current}"]`);
  const targetSlide = document.querySelector(`.slide[data-slide="${target}"]`);

  if (!currentSlide || !targetSlide) { isAnimating = false; return; }

  const direction = target > current ? 1 : -1;

  // Set up incoming slide
  targetSlide.style.transform = `translateX(${direction * 60}px)`;
  targetSlide.style.opacity = '0';
  targetSlide.style.transition = 'none';
  targetSlide.classList.remove('exit');

  // Force reflow
  targetSlide.getBoundingClientRect();

  // Animate out current
  currentSlide.style.transition = 'opacity 320ms ease, transform 320ms cubic-bezier(0.16,1,0.3,1)';
  currentSlide.style.transform = `translateX(${-direction * 60}px)`;
  currentSlide.style.opacity = '0';
  currentSlide.style.pointerEvents = 'none';
  currentSlide.classList.remove('active');

  // Animate in target
  targetSlide.style.transition = 'opacity 380ms ease, transform 380ms cubic-bezier(0.16,1,0.3,1)';
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

// ===================================
// UI UPDATES
// ===================================
function updateUI() {
  // Counter
  document.getElementById('slideCounter').textContent = `${current} / ${TOTAL_SLIDES}`;

  // Progress
  const pct = ((current - 1) / (TOTAL_SLIDES - 1)) * 100;
  document.getElementById('progressFill').style.width = pct + '%';

  // Prev/next buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.disabled = current === 1;
  if (nextBtn) nextBtn.disabled = current === TOTAL_SLIDES;

  // Dot nav
  document.querySelectorAll('.dot-btn').forEach((dot, i) => {
    dot.classList.toggle('active', i + 1 === current);
  });

  // Update facilitator panel if open
  const panel = document.getElementById('facPanel');
  if (panel && panel.classList.contains('open')) {
    updateFacPanel();
  }
}

// ===================================
// KEYBOARD
// ===================================
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(1);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(TOTAL_SLIDES);
        break;
      case 'f':
      case 'F':
        toggleFacPanel();
        break;
    }
  });
}

// ===================================
// THEME TOGGLE
// ===================================
function setupThemeToggle() {
  const btn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;

  // Default to dark
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
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

// ===================================
// FACILITATOR PANEL
// ===================================
function toggleFacPanel() {
  const panel = document.getElementById('facPanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) updateFacPanel();
}

function updateFacPanel() {
  const body = document.getElementById('facPanelBody');
  body.innerHTML = facilitatorNotes[current] || '<em>No notes for this slide.</em>';
}
