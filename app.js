// ====================== STATE ======================
let completed = JSON.parse(localStorage.getItem('mmst_completed')) || [];
let currentSubject = "All";
let currentNoteSubject = "All";
let currentQuizSubject = "All";
let currentQuiz = null;
let userAnswers = [];
let currentDeck = "math";
let currentCardIndex = 0;

// ====================== FLASHCARDS ======================
const flashcards = {
  math: [
    {front:"Linear function?",back:"y = mx + c"},
    {front:"Turning point of parabola?",back:"x = −b/(2a)"},
    {front:"Derivative of xⁿ?",back:"n xⁿ⁻¹"},
    {front:"Product rule?",back:"(uv)′ = u′v + uv′"},
    {front:"Arithmetic nth term?",back:"Tₙ = a+(n−1)d"},
    {front:"Geometric nth term?",back:"Tₙ = arⁿ⁻¹"},
    {front:"Sum to infinity?",back:"S∞ = a/(1−r) when |r|<1"},
    {front:"Compound interest?",back:"A = P(1+i)ⁿ"}
  ],
  physics: [
    {front:"Newton’s 2nd Law?",back:"F_net = ma"},
    {front:"Momentum?",back:"p = mv"},
    {front:"Impulse equals?",back:"Change in momentum (Δp)"},
    {front:"Kinetic energy?",back:"Eₖ = ½mv²"},
    {front:"Potential energy?",back:"Eₚ = mgh"},
    {front:"Ohm’s Law?",back:"V = IR"},
    {front:"Wave equation?",back:"v = fλ"},
    {front:"Power formulas?",back:"P = VI = I²R = V²/R"}
  ],
  life: [
    {front:"Purpose of mitosis?",back:"Growth & repair (2 identical diploid cells)"},
    {front:"Purpose of meiosis?",back:"Produce gametes (4 different haploid cells)"},
    {front:"What is a gene?",back:"Section of DNA coding for a characteristic"},
    {front:"Heterozygous means?",back:"Two different alleles (e.g. Bb)"},
    {front:"Where does fertilisation occur?",back:"Fallopian tube"},
    {front:"When is ovulation?",back:"Around day 14"},
    {front:"Hormone for uterine lining?",back:"Progesterone"}
  ],
  geo: [
    {front:"How is bearing measured?",back:"Clockwise from True North (3 digits)"},
    {front:"Close contour lines?",back:"Steep slope"},
    {front:"Wide contour lines?",back:"Gentle slope"},
    {front:"Real distance formula?",back:"Map distance × Scale"},
    {front:"Western Cape rainfall?",back:"Winter (Mediterranean)"},
    {front:"Upper course process?",back:"Vertical erosion"},
    {front:"Dendritic pattern looks like?",back:"A tree"}
  ]
};

// ====================== HELPERS ======================
function saveCompleted() {
  localStorage.setItem('mmst_completed', JSON.stringify(completed));
}
function toggleComplete(id) {
  if (completed.includes(id)) completed = completed.filter(x => x !== id);
  else completed.push(id);
  saveCompleted();
  renderPapers();
  updateProgress();
}
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('nav button[data-section]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });
  if (id !== 'notes') closeNote();
  if (id !== 'practice') closeQuiz();
  if (id === 'progress') updateProgress();
  if (id === 'flashcards') showCard();
}

// Theme
document.getElementById('themeBtn').addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('mmst_theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('mmst_theme', 'dark');
  }
});
if (localStorage.getItem('mmst_theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Navigation
document.querySelectorAll('nav button[data-section]').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

// Tabs helper
function setupTabs(id, cb) {
  document.querySelectorAll('#' + id + ' button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#' + id + ' button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cb(btn.dataset.subject || btn.dataset.formula || btn.dataset.deck);
    });
  });
}
setupTabs('subjectTabs', s => { currentSubject = s; renderPapers(); });
setupTabs('noteTabs', s => { currentNoteSubject = s; closeNote(); renderNotes(); });
setupTabs('quizTabs', s => { currentQuizSubject = s; closeQuiz(); renderQuizzes(); });

// Formula tabs
document.querySelectorAll('#formulaTabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#formulaTabs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('mathFormulas').style.display = btn.dataset.formula === 'math' ? 'block' : 'none';
    document.getElementById('physicsFormulas').style.display = btn.dataset.formula === 'physics' ? 'block' : 'none';
  });
});

// Flash tabs
document.querySelectorAll('#flashTabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#flashTabs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDeck = btn.dataset.deck;
    currentCardIndex = 0;
    showCard();
  });
});

// ====================== FLASHCARDS ======================
function showCard() {
  const deck = flashcards[currentDeck];
  if (!deck) return;
  const card = deck[currentCardIndex];
  document.getElementById('flashFront').textContent = card.front;
  document.getElementById('flashBack').textContent = card.back;
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('flashCounter').textContent = `${currentCardIndex+1} / ${deck.length}`;
}
function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard() {
  const deck = flashcards[currentDeck];
  currentCardIndex = (currentCardIndex + 1) % deck.length;
  showCard();
}
function prevCard() {
  const deck = flashcards[currentDeck];
  currentCardIndex = (currentCardIndex - 1 + deck.length) % deck.length;
  showCard();
}

// ====================== PROGRESS ======================
function updateProgress() {
  document.getElementById('papersDoneCircle').textContent = completed.length;
  document.getElementById('papersDoneText').textContent = `${completed.length} of ${papers.length}`;
  document.getElementById('quizTotalCircle').textContent = quizzes.length;
  document.getElementById('notesTotalCircle').textContent = notes.length;
}

// ====================== PAPERS ======================
function renderPapers() {
  let list = papers;
  if (currentSubject !== "All") list = list.filter(p => p.subject === currentSubject);
  const search = document.getElementById('paperSearch').value.toLowerCase();
  if (search) list = list.filter(p => p.title.toLowerCase().includes(search) || p.type.toLowerCase().includes(search) || String(p.year).includes(search));
  document.getElementById('paperCount').textContent = papers.length;
  document.getElementById('noteCount').textContent = notes.length;
  document.getElementById('quizCount').textContent = quizzes.length;

  const container = document.getElementById('papersGrid');
  if (!list.length) { container.innerHTML = '<div class="empty-state"><p>No papers found</p></div>'; return; }
  container.innerHTML = list.map(p => {
    const done = completed.includes(p.id);
    return `<div class="card${done?' done':''}">
      <h3>${p.title}</h3>
      <div class="meta">
        <span class="badge badge-grade">Gr ${p.grade}</span>
        <span class="badge ${p.type==='Memo'?'badge-memo':'badge-paper'}">${p.type}</span>
        ${done?'<span class="badge badge-done">Done</span>':''}
      </div>
      <p>${p.subject} • ${p.year}</p>
      <button class="btn" onclick="event.stopPropagation();window.open('${p.link}','_blank')">View</button>
      <button class="btn btn-outline" onclick="event.stopPropagation();toggleComplete('${p.id}')">${done?'Undo':'Mark Done'}</button>
    </div>`;
  }).join('');
}

// ====================== NOTES ======================
function renderNotes() {
  let list = notes;
  if (currentNoteSubject !== "All") list = list.filter(n => n.subject === currentNoteSubject);
  const search = document.getElementById('noteSearch').value.toLowerCase();
  if (search) list = list.filter(n => n.title.toLowerCase().includes(search) || n.subject.toLowerCase().includes(search));

  const container = document.getElementById('notesGrid');
  if (!list.length) { container.innerHTML = '<div class="empty-state"><p>No notes found</p></div>'; return; }
  container.innerHTML = list.map(n => `
    <div class="card" onclick="openNote('${n.id}')">
      <h3>${n.title}</h3>
      <div class="meta">
        <span class="badge badge-grade">Gr ${n.grade}</span>
        <span class="badge badge-note">${n.subject}</span>
      </div>
      <p>Tap to study</p>
    </div>`).join('');
}

function openNote(id) {
  const n = notes.find(x => x.id === id);
  if (!n) return;
  document.getElementById('notesGrid').style.display = 'none';
  document.getElementById('noteTabs').style.display = 'none';
  document.getElementById('noteSearch').parentElement.style.display = 'none';
  document.getElementById('noteTitle').textContent = n.title;
  document.getElementById('noteMeta').innerHTML = `<span class="badge badge-grade">Gr ${n.grade}</span><span class="badge badge-note">${n.subject}</span>`;
  document.getElementById('noteContent').innerHTML = n.content;
  document.getElementById('noteDetail').classList.add('active');
}
function closeNote() {
  document.getElementById('noteDetail').classList.remove('active');
  document.getElementById('notesGrid').style.display = 'grid';
  document.getElementById('noteTabs').style.display = 'flex';
  document.getElementById('noteSearch').parentElement.style.display = 'block';
}

// ====================== QUIZZES ======================
function renderQuizzes() {
  let list = quizzes;
  if (currentQuizSubject !== "All") list = list.filter(q => q.subject === currentQuizSubject);
  const container = document.getElementById('quizGrid');
  if (!list.length) { container.innerHTML = '<div class="empty-state"><p>No quizzes found</p></div>'; return; }
  container.innerHTML = list.map(q => `
    <div class="card" onclick="startQuiz('${q.id}')">
      <h3>${q.title}</h3>
      <div class="meta">
        <span class="badge badge-grade">Gr ${q.grade}</span>
        <span class="badge badge-quiz">${q.subject}</span>
      </div>
      <p>${q.questions.length} questions</p>
    </div>`).join('');
}

function startQuiz(id) {
  currentQuiz = quizzes.find(q => q.id === id);
  if (!currentQuiz) return;
  userAnswers = new Array(currentQuiz.questions.length).fill(null);
  document.getElementById('quizGrid').style.display = 'none';
  document.getElementById('quizTabs').style.display = 'none';
  document.getElementById('quizTitle').textContent = currentQuiz.title;
  let html = currentQuiz.questions.map((ques,i) => {
    let opts = ques.options.map((opt,j) => 
      `<button class="quiz-option" onclick="selectAnswer(${i},${j})" id="opt-${i}-${j}">${String.fromCharCode(65+j)}. ${opt}</button>`
    ).join('');
    return `<div class="quiz-question"><p>Q${i+1}. ${ques.q}</p>${opts}</div>`;
  }).join('');
  html += `<button class="btn btn-accent" style="width:100%;margin-top:1rem" onclick="submitQuiz()">Submit</button>`;
  document.getElementById('quizBody').innerHTML = html;
  document.getElementById('quizDetail').classList.add('active');
}

function selectAnswer(qi, oi) {
  userAnswers[qi] = oi;
  currentQuiz.questions[qi].options.forEach((_,j) => {
    document.getElementById(`opt-${qi}-${j}`).classList.toggle('selected', j === oi);
  });
}

function submitQuiz() {
  let score = 0;
  currentQuiz.questions.forEach((ques,i) => {
    const selected = userAnswers[i];
    const correct = ques.answer;
    ques.options.forEach((_,j) => {
      const btn = document.getElementById(`opt-${i}-${j}`);
      btn.disabled = true;
      btn.classList.remove('selected');
      if (j === correct) btn.classList.add('correct');
      if (j === selected && selected !== correct) btn.classList.add('wrong');
    });
    if (selected === correct) score++;
  });
  const total = currentQuiz.questions.length;
  const pct = Math.round((score/total)*100);
  const msg = pct >= 80 ? "Excellent!" : pct >= 50 ? "Good effort!" : "Keep practising!";
  document.getElementById('quizBody').innerHTML = `
    <div class="quiz-result">
      <h3>Quiz Complete</h3>
      <div class="score-circle">${score}/${total}</div>
      <p style="font-size:1.2rem">${pct}%</p>
      <p>${msg}</p>
      <button class="btn btn-accent" style="margin-top:1rem" onclick="startQuiz('${currentQuiz.id}')">Try Again</button>
      <button class="btn btn-outline" style="margin-top:0.5rem" onclick="closeQuiz()">Back</button>
    </div>`;
}

function closeQuiz() {
  document.getElementById('quizDetail').classList.remove('active');
  document.getElementById('quizGrid').style.display = 'grid';
  document.getElementById('quizTabs').style.display = 'flex';
  currentQuiz = null;
}

// ====================== INIT ======================
document.getElementById('paperSearch').addEventListener('input', renderPapers);
document.getElementById('noteSearch').addEventListener('input', renderNotes);
renderPapers();
renderNotes();
renderQuizzes();
updateProgress();
