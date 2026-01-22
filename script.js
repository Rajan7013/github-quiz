const questions = [
    {
        question: "What is the command to create a new Git repository?",
        options: ["git start", "git init", "git new", "git create"],
        answer: 1,
        reason: "git init initializes a new Git repository in the current directory."
    },
    {
        question: "Which command stages changes for commit?",
        options: ["git save", "git stage", "git add", "git push"],
        answer: 2,
        reason: "git add places modified files in the staging area."
    },
    {
        question: "How do you check the status of your repository?",
        options: ["git status", "git check", "git info", "git log"],
        answer: 0,
        reason: "git status shows the working tree status."
    },
    {
        question: "Which command sends your changes to GitHub?",
        options: ["git upload", "git send", "git push", "git commit"],
        answer: 2,
        reason: "git push updates remote refs along with associated objects."
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').innerText = q.question;
    const optsDiv = document.getElementById('options-container');
    optsDiv.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(index, btn);
        optsDiv.appendChild(btn);
    });

    document.getElementById('feedback').innerText = '';
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedIndex, btn) {
    const q = questions[currentQuestion];
    const opts = document.querySelectorAll('.option-btn');

    // Disable all buttons
    opts.forEach(b => b.disabled = true);

    if (selectedIndex === q.answer) {
        score++;
        btn.classList.add('correct');
        document.getElementById('feedback').innerText = "✅ Correct! " + q.reason;
    } else {
        btn.classList.add('wrong');
        opts[q.answer].classList.add('correct'); // Show correct one
        document.getElementById('feedback').innerText = "❌ Wrong. " + q.reason;
    }

    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `<h2>Quiz Completed! 🎉</h2><p>Your Score: ${score} / ${questions.length}</p><button onclick='location.reload()'>Restart</button>`;
    }
}

// Start
loadQuestion();
