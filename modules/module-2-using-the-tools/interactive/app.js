const TOTAL_SLIDES = 18;
let current = 1;
let isAnimating = false;

const facilitatorNotes = {
  1: `<strong>Opening:</strong> Before clicking Begin, ask: "Who tried an AI tool in the last week and got an output they actually used?" Then: "Who tried one and got garbage?" Both reactions are valid — and both are what we're going to fix today. This session is entirely hands-on. Every concept is immediately followed by a task.`,
  2: `<strong>The three failure modes:</strong> Read each one out loud and ask for a show of hands. Almost every room has experienced all three. The goal here is recognition — "yes, that's exactly what happened to me" — because that creates buy-in for the framework you're about to teach.`,
  3: `<strong>The mental model:</strong> Don't get technical. The autocomplete analogy is all they need. The key insight is: if you give it a vague starting point, it will complete your thought in the most average, generic way possible. If you give it a rich, specific starting point, it will continue that richness. This is why context is everything.`,
  4: `<strong>5 elements:</strong> Walk through each element with the examples on screen. Then do a live demonstration: open a blank prompt and build it live in front of the room, adding one element at a time. Let them see the output change as the prompt gets richer. Minimum viable: Task + Context. Everything else is precision.`,
  5: `<strong>Prompt levels — this is your core demo:</strong> Run all four levels live in the room. Use the prior auth letter — it's the most universally recognizable healthcare task. Let the room see the output quality jump dramatically from Level 1 to Level 4. Don't explain the difference — let them see it. Then ask: "Which one would you actually use?"`,
  6: `<strong>Iteration:</strong> The biggest mindset shift in this module. Most people think: prompt → output → done. Show them the real flow. Take the Level 3 output from the last demo and do a live iteration: "That third paragraph is too clinical for a non-physician reviewer — simplify it." Show the improved output. Do one more iteration. They'll get it.`,
  7: `<strong>Output evaluation — the skill most courses skip:</strong> This is where you earn trust with the room. Acknowledge it directly: "Most AI courses skip this. We're not." Walk through the four questions slowly. The red flag list is a concrete takeaway — some people will photograph it. For healthcare specifically: any clinical content that goes to a patient, payer, or regulator needs a clinician review before it goes out.`,
  8: `<strong>Task 1 — The Bad Prompt Fix:</strong> Have everyone run the bad prompt first. Let the mediocre output land. Then ask them to diagnose it using the 5 elements before you show them the solution. This activates their thinking instead of passive reception. The challenge (three versions) usually generates a fun comparison — let people share their favorites.`,
  9: `<strong>Tasks 2 & 3:</strong> For Task 2, have participants bring a real document — a CMS update, a payer policy, an internal policy. Using their actual content dramatically increases engagement. For Task 3, the travel CNA challenge is always popular with staffing professionals — it's a real business need they've probably done manually dozens of times.`,
  10: `<strong>Tasks 4 & 5:</strong> Task 4 works best if participants can use real meeting notes from a meeting they actually attended. Encourage it. For Task 5, pick a HIPAA policy section that everyone in the room has seen but half of them can't actually explain. The plain-language conversion usually gets laughs — and the quiz question challenge is immediately useful for anyone doing compliance training.`,
  11: `<strong>Task 6 — The Proposal Skeleton:</strong> This one has the highest "wow" moment for business development professionals. Running the prompt takes 90 seconds. Having a structured 8-week engagement proposal outline appear — with phases, deliverables, team roles, and investment range — in under 2 minutes is genuinely dramatic. Let the silence after the output land before you speak.`,
  12: `<strong>Task 7 — The Objection Handler:</strong> The role-play step is the one people will talk about after the session. Encourage them to actually go back and forth in the chat with the AI CFO. It's uncomfortable at first and then strangely useful. A good variation: ask them to role-play a specific real conversation they have coming up in the next two weeks.`,
  13: `<strong>Task 8 — Right tool for the task:</strong> This is where you explicitly introduce Perplexity as distinct from ChatGPT. Show both running the same research prompt side by side. The difference in citability is immediately visible. The verification step (clicking a cited source and checking if it says what the summary says) is the most important habit you can build in this session.`,
  14: `<strong>Tasks 9 & 10:</strong> Task 9 (SOP builder) is extremely high-value for ops-focused rooms. The challenge (find 3 AI insertion points in the SOP you just built) creates an immediate feedback loop. Task 10 (tone shifter) is often the one people screenshot and share with their teams. The insight that one piece of content can serve three audiences without full rewrites is transformative for communications-heavy roles.`,
  15: `<strong>Task 11 — Fact Check:</strong> Prepare this slide carefully before the session. Generate a paragraph with 2–3 planted errors — a wrong regulation section number, an outdated penalty figure, and one plausible clinical claim that's slightly off. Let the room work in pairs. When they find an error, ask: "How would you have caught that if you hadn't been looking?" The answer is: you wouldn't have. That's the point.`,
  16: `<strong>Capstone setup:</strong> Give the room 20–25 minutes for this. The goal is that every person walks out with a real business development asset they built themselves. Emphasize: use a real client or prospective client in your head as the audience for everything you build. It will make the output 10x more useful than a generic example.`,
  17: `<strong>What you built:</strong> Read through this list with energy. Let people feel the weight of what they produced in 3 hours. Ask: "Which of these outputs are you going to actually use this week?" Get a few answers. This creates accountability and reinforces that today was work, not training.`,
  18: `<strong>Close:</strong> The habit-building framing is critical. This doesn't stick unless they use it in the next 48 hours. The "share with someone on your team" step is deliberate — peer teaching is the fastest way to spread adoption. For Module 3 setup: tell them what domain-specific tracks will be available and let them choose which track they want to be in.`
};

document.addEventListener('DOMContentLoaded', () => {
  buildDotNav();
  updateUI();
  setupKeyboard();
  setupThemeToggle();
  const hint = document.createElement('div');
  hint.className = 'kbd-hint';
  hint.innerHTML = '<span class="kbd">←</span><span class="kbd">→</span> navigate &nbsp;|&nbsp; <span class="kbd">F</span> notes';
  document.body.appendChild(hint);
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
