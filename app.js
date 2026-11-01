// ====================== STATE ======================
let completed = JSON.parse(localStorage.getItem('mmst_completed')) || [];
let currentSubject = "All";
let currentNoteSubject = "All";
let currentQuizSubject = "All";
let currentQuiz = null;
let userAnswers = [];
let currentDeck = "math";
let currentCardIndex = 0;
let isFlipped = false;

// ====================== FLASHCARD DATA ======================
const flashcards = {
  math: [
    {front: "Linear function formula?", back: "y = mx + c"},
    {front: "Turning point of a parabola?", back: "x = −b / (2a)"},
    {front: "Derivative of xⁿ?", back: "n xⁿ⁻¹"},
    {front: "Product rule?", back: "(uv)′ = u′v + uv′"},
    {front: "Arithmetic sequence nth term?", back: "Tₙ = a + (n−1)d"},
    {front: "Geometric sequence nth term?", back: "Tₙ = arⁿ⁻¹"},
    {front: "Sum to infinity (geometric)?", back: "S∞ = a / (1 − r) when |r| < 1"},
    {front: "Compound interest formula?", back: "A = P(1 + i)ⁿ"}
  ],
  physics: [
    {front: "Newton’s Second Law?", back: "F_net = ma"},
    {front: "Momentum formula?", back: "p = mv"},
    {front: "Impulse equals?", back: "Change in momentum (Δp)"},
    {front: "Kinetic energy formula?", back: "Eₖ = ½mv²"},
    {front: "Potential energy formula?", back: "Eₚ = mgh"},
    {front: "Ohm’s Law?", back: "V = IR"},
    {front: "Wave equation?", back: "v = fλ"},
    {front: "Power formulas?", back: "P = VI = I²R = V²/R"}
  ],
  life: [
    {front: "Purpose of mitosis?", back: "Growth and repair (2 identical diploid cells)"},
    {front: "Purpose of meiosis?", back: "Produce gametes (4 different haploid cells)"},
    {front: "What is a gene?", back: "A section of DNA that codes for a characteristic"},
    {front: "Heterozygous means?", back: "Two different alleles (e.g. Bb)"},
    {front: "Where does fertilisation usually occur?", back: "Fallopian tube (oviduct)"},
    {front: "When does ovulation usually occur?", back: "Around day 14 of the menstrual cycle"},
    {front: "Hormone that maintains uterine lining?", back: "Progesterone"}
  ],
  geo: [
    {front: "How is bearing measured?", back: "Clockwise from True North (3 digits)"},
    {front: "Close contour lines mean?", back: "Steep slope"},
    {front: "Wide contour lines mean?", back: "Gentle slope"},
    {front: "Formula for real distance?", back: "Map distance × Scale factor"},
    {front: "Western Cape rainfall season?", back: "Winter (Mediterranean climate)"},
    {front: "Dominant process in upper course of a river?", back: "Vertical erosion"},
    {front: "Dendritic drainage pattern looks like?", back: "A tree"}
  ]
};

// ====================== HELPERS ======================
function saveCompleted() {
  localStorage.setItem('mmst_completed', JSON.stringify(completed));
}

function toggleComplete(id) {
  if (completed.includes(id)) {
    completed = completed.filter(x => x !== id);
  } else {
    completed.push(id);
  }
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

// ====================== THEME ======================
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

// ====================== NAVIGATION ======================
document.querySelectorAll('nav button[data-section]').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.section));
});

// ====================== TABS ======================
function setupTabs(containerId, callback) {
  document.querySelectorAll('#' + containerId + ' button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#' + containerId + ' button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      callback(btn.dataset.subject || btn.dataset.formula || btn.dataset.deck);
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
    const type = btn.dataset.formula;
    document.getElementById('mathFormulas').style.display = type === 'math' ? 'block' : 'none';
    document.getElementById('physicsFormulas').style.display = type === 'physics' ? 'block' : 'none';
  });
});

// Flashcard tabs
document.querySelectorAll('#flashTabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#flashTabs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDeck = btn.dataset.deck;
    currentCardIndex = 0;
    isFlipped = false;
    showCard();
  });
});

// ====================== FLASHCARDS ======================
function showCard() {
  const deck = flashcards[currentDeck];
  if (!deck || deck.length === 0) return;
  const card = deck[currentCardIndex];
  document.getElementById('flashFront').textContent = card.front;
  document.getElementById('flashBack').textContent = card.back;
  document.getElementById('flashcard').classList.remove('flipped');
  isFlipped = false;
  document.getElementById('flashCounter').textContent = `${currentCardIndex + 1} / ${deck.length}`;
}

function flipCard() {
  const card = document.getElementById('flashcard');
  card.classList.toggle('flipped');
  isFlipped = !isFlipped;
}

function nextCard() {
  const deck = flashcards[currentDeck];
  currentCardIndex = (currentCardIndex + 1) % deck.length;
  isFlipped = false;
  showCard();
}

function prevCard() {
  const deck = flashcards[currentDeck];
  currentCardIndex = (currentCardIndex - 1 + deck.length) % deck.length;
  isFlipped = false;
  showCard();
}

// ====================== PROGRESS ======================
function updateProgress() {
  const papersDone = completed.length;
  document.getElementById('papersDoneCircle').textContent = papersDone;
  document.getElementById('papersDoneText').textContent = `${papersDone} of ${papers.length} papers marked as done`;
  document.getElementById('quizTotalCircle').textContent = quizzes.length;
  document.getElementById('notesTotalCircle').textContent = notes.length;
}

// ====================== RENDER PAPERS ======================
function renderPapers() {
  const container = document.getElementById('papersGrid');
  let list = papers;
  if (currentSubject !== "All") list = list.filter(p => p.subject === currentSubject);
  const search = document.getElementById('paperSearch').value.toLowerCase();
  if (search) {
    list = list.filter(p => p.title.toLowerCase().includes(search) || p.type.toLowerCase().includes(search) || String(p.year).includes(search));
  }
  document.getElementById('paperCount').textContent = papers.length;
  document.getElementById('noteCount').textContent = notes.length;
  document.getElementById('quizCount').textContent = quizzes.length;

  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No papers found.</p></div>';
    return;
  }
  let html = '';
  list.forEach(p => {
    const done = completed.includes(p.id);
    const typeClass = p.type === 'Memo' ? 'badge-memo' : 'badge-paper';
    html += `
      <div class="card${done ? ' done' : ''}">
        <h3>${p.title}</h3>
        <div class="meta">
          <span class="badge badge-grade">Grade ${p.grade}</span>
          <span class="badge ${typeClass}">${p.type}</span>
          ${done ? '<span class="badge badge-done">Completed</span>' : ''}
        </div>
        <p>${p.subject} • ${p.year}</p>
        <button class="btn" onclick="event.stopPropagation(); window.open('${p.link}', '_blank')">View Paper</button>
        <button class="btn btn-outline" onclick="event.stopPropagation(); toggleComplete('${p.id}')">${done ? 'Undo' : 'Mark as Done'}</button>
      </div>`;
  });
  container.innerHTML = html;
}

// ====================== RENDER NOTES ======================
function renderNotes() {
  const container = document.getElementById('notesGrid');
  let list = notes;
  if (currentNoteSubject !== "All") list = list.filter(n => n.subject === currentNoteSubject);
  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No notes for this subject yet.</p></div>';
    return;
  }
  let html = '';
  list.forEach(n => {
    html += `
      <div class="card" onclick="openNote('${n.id}')">
        <h3>${n.title}</h3>
        <div class="meta">
          <span class="badge badge-grade">Grade ${n.grade}</span>
          <span class="badge badge-note">${n.subject}</span>
        </div>
        <p>Tap to study</p>
      </div>`;
  });
  container.innerHTML = html;
}

function openNote(id) {
  const n = notes.find(x => x.id === id);
  if (!n) return;
  document.getElementById('notesGrid').style.display = 'none';
  document.getElementById('noteTabs').style.display = 'none';
  document.getElementById('noteTitle').textContent = n.title;
  document.getElementById('noteMeta').innerHTML = `<span class="badge badge-grade">Grade ${n.grade}</span><span class="badge badge-note">${n.subject}</span>`;
  document.getElementById('noteContent').innerHTML = n.content;
  document.getElementById('noteDetail').classList.add('active');
}

function closeNote() {
  document.getElementById('noteDetail').classList.remove('active');
  document.getElementById('notesGrid').style.display = 'grid';
  document.getElementById('noteTabs').style.display = 'flex';
}

// ====================== RENDER QUIZZES ======================
function renderQuizzes() {
  const container = document.getElementById('quizGrid');
  let list = quizzes;
  if (currentQuizSubject !== "All") list = list.filter(q => q.subject === currentQuizSubject);
  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No quizzes for this subject yet.</p></div>';
    return;
  }
  let html = '';
  list.forEach(q => {
    html += `
      <div class="card" onclick="startQuiz('${q.id}')">
        <h3>${q.title}</h3>
        <div class="meta">
          <span class="badge badge-grade">Grade ${q.grade}</span>
          <span class="badge badge-quiz">${q.subject}</span>
        </div>
        <p>${q.questions.length} questions • Tap to start</p>
      </div>`;
  });
  container.innerHTML = html;
}

function startQuiz(id) {
  currentQuiz = quizzes.find(q => q.id === id);
  if (!currentQuiz) return;
  userAnswers = new Array(currentQuiz.questions.length).fill(null);
  document.getElementById('quizGrid').style.display = 'none';
  document.getElementById('quizTabs').style.display = 'none';
  document.getElementById('quizTitle').textContent = currentQuiz.title;
  let html = '';
  currentQuiz.questions.forEach((ques, i) => {
    html += `<div class="quiz-question"><p>Question ${i + 1}: ${ques.q}</p>`;
    ques.options.forEach((opt, j) => {
      html += `<button class="quiz-option" onclick="selectAnswer(${i},${j})" id="opt-${i}-${j}">${String.fromCharCode(65 + j)}. ${opt}</button>`;
    });
    html += `</div>`;
  });
  html += `<button class="btn btn-accent" style="width:100%;margin-top:1rem" onclick="submitQuiz()">Submit Quiz</button>`;
  document.getElementById('quizBody').innerHTML = html;
  document.getElementById('quizDetail').classList.add('active');
}

function selectAnswer(qi, oi) {
  userAnswers[qi] = oi;
  currentQuiz.questions[qi].options.forEach((_, j) => {
    const btn = document.getElementById(`opt-${qi}-${j}`);
    btn.classList.remove('selected');
    if (j === oi) btn.classList.add('selected');
  });
}

function submitQuiz() {
  let score = 0;
  const total = currentQuiz.questions.length;
  currentQuiz.questions.forEach((ques, i) => {
    const selected = userAnswers[i];
    const correct = ques.answer;
    ques.options.forEach((_, j) => {
      const btn = document.getElementById(`opt-${i}-${j}`);
      btn.disabled = true;
      btn.classList.remove('selected');
      if (j === correct) btn.classList.add('correct');
      if (j === selected && selected !== correct) btn.classList.add('wrong');
    });
    if (selected === correct) score++;
  });
  const pct = Math.round((score / total) * 100);
  let msg = pct >= 80 ? "Excellent work!" : pct >= 50 ? "Good effort! Keep practising." : "Keep studying – you can improve!";
  document.getElementById('quizBody').innerHTML = `
    <div class="quiz-result">
      <h3>Quiz Complete!</h3>
      <div class="score-circle">${score}/${total}</div>
      <p style="font-size:1.2rem;margin-bottom:.5rem">${pct}%</p>
      <p>${msg}</p>
      <button class="btn btn-accent" style="margin-top:1.2rem" onclick="startQuiz('${currentQuiz.id}')">Try Again</button>
      <button class="btn btn-outline" style="margin-top:.6rem" onclick="closeQuiz()">Back to Quizzes</button>
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
renderPapers();
renderNotes();
renderQuizzes();
updateProgress();
