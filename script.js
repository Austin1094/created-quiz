const quizData = [
	//Question 1
	{
		question: "Who holds the record for the most points scored in an NBA game?",
		a: "Kobe Bryant",
		b: "Michael Jordan",
		c: "Wilt Chamberlain",
		d: "Larry Bird",
		correct: "c",
	},
//Question 2
	{
		question: "Which NBA player holds the record for most points as a Philadelphia 76er?",
		a: "Allen Iverson",
		b: "Joel Embiid",
		c: "Julius Erving",
		d: "Hal Greer",
		correct: "d",
	},
//Question 3
	{
		question: "Which NBA player holds the record for the most amount of 3-pointers in a single game?",
		a: "Steph Curry",
		b: "Damian Lillard",
		c: "Larry Bird",
		d: "Klay Thompson",
		correct: "d",
	},
//Question 4
	{
		question: "Which NBA player has won the most amount of championship titles?",
		a: "Sam Jones",
		b: "Bill Russell",
		c: "Shaquille O'Neal",
		d: "LeBron James",
		correct: "b",
	},
//Question 5
	{
		question: "Which NBA team has the most wins in a regular season?",
		a: "Golden State Warriors",
		b: "Boston Celtics",
		c: "Los Angeles Lakers",
		d: "Miami Heat",
		correct: "a",
	}
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEls = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

	deselectAnswers()

	const currentQuizData = quizData[currentQuiz]

	questionEls.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
	answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
	let answer
	answerEls.forEach(answerEl => {
		if(answerEl.checked) {
			answer = answerEl.id
		}
	})
	return answer
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected()
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}

		currentQuiz++

		if(currentQuiz < quizData.length) {
			loadQuiz()
		} else {
			quiz.innerHTML = `
			<h2>You answered ${score}/${quizData.length} questions correctly</h2>
			
			<button onclick="location.reload()">Reload</button>
			`
		}
	}
});
