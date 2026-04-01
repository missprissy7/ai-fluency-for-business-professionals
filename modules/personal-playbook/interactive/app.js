const TOTAL_SLIDES = 22;
let current = 1;
let isAnimating = false;

const facilitatorNotes = {
  1: `<strong>Opening — Set the tone:</strong> This is not a business training. Say that out loud. "Everything you're about to see is about your life — your time, your career, your money, your family." The shift in posture is immediate. People sit up differently when they realize this isn't about their employer. The "Personal Playbook" framing is intentional — this is something you own, not something you do for work. Start by asking: "What's one thing in your personal life that you keep putting off because it feels overwhelming or time-consuming?" Let 2–3 people answer. Almost every answer will map to a use case in this module. Use that.`,

  2: `<strong>The big picture — One tool, every area:</strong> The key insight here is the breadth. Most people think AI is for work tasks — writing reports, answering emails. The three columns reframe that completely: Time, Career, Life. Walk through one example from each column briefly — brain dump, resume, lease agreement — and let the recognition land. "You've probably been using AI for maybe one of these. By the end of today, you'll have 15." The stat about 2–4 hours on non-thinking tasks is powerful — ask them where they feel that in their own life. Common answers: emails, scheduling, research rabbit holes, filling out forms. All of those have a use case in this module.`,

  3: `<strong>The three guardrails — Establish these before anything else:</strong> These three rules govern everything that follows, especially Part 3 (Life & Big Decisions). Go slowly on each. Guardrail 1 — "AI drafts, you decide" — is the mindset shift that makes the whole thing work. People either over-trust AI or under-use it because they don't trust it at all. The middle path is: use it to create the starting point, then apply your own judgment. Guardrail 2 — specific beats vague — is the single most important prompting skill. Demonstrate right now: show what happens when you ask a vague question vs. a specific one. The difference in output quality is immediately convincing. Guardrail 3 — verify anything important — is especially critical for legal, health, and financial content. Don't wait until those slides to say this. Say it here.`,

  4: `<strong>Part 1 Divider — Your Time:</strong> Brief reset. "The first part is pure productivity. Five things you can do with AI this week that will give you back hours you didn't know you could get back." The energy here should be high — these are the most immediately applicable use cases. Most audiences will want to pull out their phones and try the prompts as you go. That's good. Encourage it. For live demos, P1 (brain dump) and P2 (email) are the strongest openers because the before/after is immediately visible.`,

  5: `<strong>P1 — The Weekly Brain Dump:</strong> This use case resonates most on Sunday afternoons and Monday mornings. Ask: "How many of you start the week already feeling behind?" Most hands go up. The pain isn't that the tasks are too many — it's that they're unorganized and have no clear starting point. The prompt is designed to produce three specific outputs: prioritized groupings, day-by-day suggestions, and a single "start here" task. That last piece — one clear starting point — is what dissolves Sunday anxiety. Run this live if possible: have someone in the room quickly list 8–10 things on their plate this week. Run the brain dump prompt in real time. The result lands every time. Time saved: 30–45 minutes of mental overhead per week.`,

  6: `<strong>P2 — Email That Writes Itself:</strong> The "staring at a blank reply" pain is universal. What makes this prompt work is the context it collects: situation, recipient relationship, what to communicate, and tone. Point out the tone field specifically — "polite but firm" vs. "warm and personal" produces dramatically different outputs. The follow-up prompts ("make it shorter," "make it warmer") are where most people start using AI conversationally instead of transactionally. That's the habit you're trying to build. Live demo option: ask someone in the room to describe an email they've been putting off. Build the prompt with their real scenario. Time saved: 15–20 minutes per difficult email, multiple emails per week.`,

  7: `<strong>P3 — Research Without the Rabbit Hole:</strong> Recommend Perplexity specifically here for current/factual information — it searches the web and cites sources. The use cases for this slide are intentionally personal: appliance research, medical symptoms, neighborhoods, car repair. The goal is to teach people that AI is a better first step than Google for almost any research question, because it synthesizes instead of just listing. The three-part prompt structure (key facts / what people miss / what to do next) is the key differentiator from just Googling. It forces AI to be practical, not encyclopedic. Ask: "What have you Googled recently where you spent way too long and still weren't sure what to do?" Use their answer as the live demo.`,

  8: `<strong>P4 — The Hard Conversation — Prepared:</strong> This is often the use case that surprises people most. They don't expect AI to help with emotional or interpersonal situations. The key framing: AI isn't having the conversation. It's helping you prepare for it — the same way a good friend or coach would. The prompt asks AI to (1) draft the opening, (2) anticipate pushback, and (3) flag what to avoid. Point out the role-play offer in the prompt — this is where the real preparation happens. People who role-play hard conversations before having them perform dramatically better in them. Use cases that resonate: asking for a raise, talking to a difficult parent or sibling, confronting a friend, a challenging conversation at school. This slide often generates the most engagement in the room.`,

  9: `<strong>P5 — Summarize Anything:</strong> This is the "time saver" most people start using immediately after the session. The use cases are endless: terms and conditions, HOA documents, long email threads, article summaries, meeting notes. The three-part prompt structure (key points / anything requiring my decision / red flags) is critical — without the "requires my attention" prompt, AI will just summarize. Adding that question forces it to flag the things that actually matter. Note for healthcare professionals in the room: this works for policy documents, clinical guidelines, insurance coverage summaries, prior auth guidelines. They often light up at that application. The 5-minute-to-45-second framing is accurate and immediately compelling.`,

  10: `<strong>Part 2 Divider — Your Career:</strong> "Part 2 is about your career. Not your employer's career strategy — yours. Your resume, your interviews, your salary, your brand, your skills." This framing matters: career advancement tools are often taught in corporate training as organizational assets. Reframe them as personal assets. "The most valuable thing AI can do for your career is level the playing field — you now have access to the same quality of career prep that previously cost $200/hour with a career coach." For employed audiences: "These aren't just for job searching. Build your personal brand while you have a job. Negotiate your next raise, not just your next offer."`,

  11: `<strong>C1 — Resume That Gets Read:</strong> The pain here is the tailoring problem. Most people send the same resume to every job because customizing it takes 2–3 hours per application. AI reduces that to 10 minutes. The prompt collects three things: your current resume, the job description, and the instruction to match language and quantify accomplishments. The "ask me for numbers" line in the prompt is important — flag it explicitly. AI will ask "how many people did you manage?" and the answer makes the resume dramatically stronger. Live demo if possible: bring a job description from the web and a generic resume. Show the transformation. For job seekers in the room, this is often the use case that creates an immediate commitment to try it today.`,

  12: `<strong>C2 — Interview Prep That Actually Works:</strong> The "tell me about yourself" freeze is universal. The prompt builds three things: a structured 90-second answer, likely interview questions, and STAR-format behavioral answers using their actual experience. The mock interview offer is the most powerful part — AI will ask the question, you answer, AI gives feedback on the answer. That feedback loop is what traditional interview prep is missing. Point out the STAR format for behavioral questions (Situation, Task, Action, Result) — it's a simple structure that makes every answer more compelling. For career changers in the room, the "tailored to this role" framing is especially important — "tell me about yourself" needs a different answer when you're explaining a career pivot.`,

  13: `<strong>C3 — Negotiate What You're Worth:</strong> The stat is real: most people who negotiate salary get 5–15% more. Most people don't negotiate at all. The reason is almost always the same: they don't have data and they don't have words. This prompt gives them both. Recommend Perplexity first for the market rate research (it can pull current salary data with citations). Then use ChatGPT or Claude to build the actual negotiation script and counter-response. The two-step workflow — research first, then script — is the professional approach. The stat cards on this slide land hard. "An extra 10% at $70K is $7K per year — over a 10-year career, that's $100K+ difference." Ask the room: "Has anyone negotiated in the last 3 years?" For those who haven't, this is the slide that often generates the most immediate motivation to act.`,

  14: `<strong>C4 — Build Your Personal Brand:</strong> This use case meets people where they are with LinkedIn anxiety. Most professionals know they should be more active on LinkedIn and have no idea what to say. The prompt collects their role, passions, and goals, and produces a headline, summary, three post drafts, and a professional bio. Point out the "3 options with different angles" instruction — this teaches people to ask for alternatives, not just one answer. The "without the cringe of writing about yourself" framing is intentional — personal brand content feels performative to a lot of people. Reframe it: "LinkedIn isn't bragging. It's making yourself findable by people who would benefit from knowing you." For anyone in career transition, this use case is especially powerful — building visibility before the job search, not during it.`,

  15: `<strong>C5 — Learn Anything Faster:</strong> This is the use case that democratizes professional development. The prompt designs a personalized curriculum and delivers the first lesson in the same conversation. Most people have something they've wanted to learn for years but haven't started because they didn't know where to begin. "AI replaces the 'I don't know where to start' barrier entirely." Examples to offer: data analysis in Excel, basic coding, project management, a second language, personal finance basics, public speaking. The "teach me the first concept right now" line in the prompt is the key — it prevents the common AI behavior of just giving you a reading list. Ask: "What's one skill you've been meaning to develop for the last year?" Their answer is the live demo.`,

  16: `<strong>Part 3 Divider — Your Life:</strong> This section requires a brief but important reframe. "The next five use cases are different. They're about the big decisions in life — health, legal, money, home, family. These are also the areas where AI has the most potential to help people and the most potential to cause harm if used carelessly. The guardrails we set up at the beginning matter most in this section. AI doesn't replace your doctor, lawyer, or financial advisor. It makes you a much better-informed person when you talk to them — and it makes those conversations more productive." The framing: AI as the preparation tool, not the expert. That distinction protects participants and keeps the use cases high-value.`,

  17: `<strong>L1 — Understand Any Legal Document:</strong> This use case has an immediate, visceral resonance for almost everyone. Everyone has signed something they didn't fully understand. The prompt asks for plain language, obligations, unusual clauses, and the three most important things to know. Emphasize the guardrail note on this slide: "This is not legal advice. If something looks risky, talk to a lawyer." But also: "You'll walk into that lawyer's office knowing exactly what to ask, instead of paying $300/hour to have them explain basic terms." Practical examples to offer: apartment leases, employment agreements, freelance contracts, home purchase documents, insurance policies, car financing terms. This is a use case where even people who are skeptical about AI often say "I would have used that."`,

  18: `<strong>L2 — Health Research You Can Use:</strong> This slide requires care in delivery. Start with the guardrail: "AI is not your doctor. Full stop." Then reframe: "But most people walk out of appointments confused, or they Google symptoms and end up on WebMD reading worst-case scenarios at 11pm." The prompt is designed to produce useful, specific information without catastrophizing — because you're asking for treatment approaches, questions for your doctor, and warning signs, not just a list of possibilities. For healthcare professionals in the room: "Your patients are already using this. They're coming in with AI-generated research that ranges from excellent to completely wrong. Part of your job is now helping them interpret what they've found." This often lands hard with clinical staff and creates an important conversation about AI in patient communication.`,

  19: `<strong>L3 — Home Buying & Renting — Navigate the Process:</strong> Buying or renting a home is the most expensive, most confusing transaction most adults go through — and most people do it with very little preparation. The prompt covers the full spectrum: lease terms, closing costs, inspection red flags, neighborhood research, landlord questions. Examples to make concrete: "You're about to sign a 12-month lease. You don't understand the early termination clause. You paste it in and ask: what does this actually mean?" Or: "You're buying your first home and you don't know what's negotiable in closing costs." The "5 most important things most people miss" framing consistently produces genuinely useful information. This use case is especially powerful for first-time homebuyers who have been intimidated out of asking questions.`,

  20: `<strong>L4 — Personal Finance — Understand and Plan:</strong> Personal finance is the area where most adults feel most inadequate and least comfortable asking questions. The shame component is real — people don't want to reveal what they don't know. AI is the first truly judgment-free financial sounding board. The prompt covers prioritization (debt vs. savings vs. retirement), specific financial concepts, and a 30-day action plan. Emphasize: "You're not asking AI to manage your money. You're asking it to explain things in plain language and give you a starting framework." For the guardrail note: "A certified financial planner gives you personalized advice. AI makes that conversation more productive because you walk in already understanding the concepts." Examples to offer: understanding 401k contribution matching, Roth vs. traditional IRA, building an emergency fund while paying down debt, understanding your credit score.`,

  21: `<strong>L5 — Family & Hard Conversations:</strong> This use case brings the whole module full circle — it's P4 (hard conversation prep) applied to the most personal relationships. Parents especially respond to this one. The prompt asks AI to help understand the situation from the other person's perspective — especially a child's — before recommending what to say. The "practical and warm, not clinical" instruction in the prompt is critical. Without it, AI sometimes produces responses that sound like a therapist's script rather than how a real parent would talk. Examples that land: talking to a teenager about social media and mental health, navigating a difficult situation with an aging parent, a blended family conflict, supporting a child through anxiety or school struggles. End this slide with: "You know your family. AI gives you the words when you're too stressed to find them yourself."`,

  22: `<strong>Close — Your Personal AI Toolkit:</strong> This is the capstone. Give participants 3–4 minutes to actually identify: one use case from each part they're starting with. The toolkit grid is the takeaway. The "one prompt to start anywhere" at the bottom is intentional — the biggest barrier to starting is not knowing which use case to begin with. That prompt removes the barrier: just describe what you need and let AI suggest the starting point. Close with this: "You don't need to use all 15 use cases. You need to use one consistently until it becomes a habit. Then add another. The people who change their lives with AI aren't the most technical. They're the most consistent." For groups: ask 3–4 people to share which use case they're starting with. Public commitment dramatically increases follow-through.`
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
