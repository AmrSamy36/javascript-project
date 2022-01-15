let timer;
function startTimer(duration, display) {
    timer = duration
    var minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            finishExam();
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 30,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};

let quiz = {
    quizName: "javaScript",
    quizTime: 30,
    totalDegree: 100,
    Questions: [
        {
            Id: 1,
            Header: "what is 2*5",
            Answers: ["2", "5", "10", "15"],
            CorrectAnswer: "10",
            Degree: 10
        },
        {
            Id: 2,
            Header: "what is 4*5",
            Answers: ["4", "5", "16", "20"],
            CorrectAnswer: "20",
            Degree: 10
        },
        {
            Id: 3,
            Header: "what is 2*9",
            Answers: ["2", "5", "18", "15"],
            CorrectAnswer: "18",
            Degree: 10
        },
        {
            Id: 4,
            Header: "what is 20/5",
            Answers: ["5", "10", "4", "15"],
            CorrectAnswer: "4",
            Degree: 10
        },
        {
            Id: 5,
            Header: "what is 100/20",
            Answers: ["2", "5", "20", "30"],
            CorrectAnswer: "5",
            Degree: 10
        },
        {
            Id: 6,
            Header: "what is 6*6",
            Answers: ["36", "38", "42", "34"],
            CorrectAnswer: "36",
            Degree: 10
        },
        {
            Id: 7,
            Header: "what is 100-24",
            Answers: ["56", "74", "76", "70"],
            CorrectAnswer: "76",
            Degree: 10
        },
        {
            Id: 8,
            Header: "what is 3*9",
            Answers: ["18", "28", "27", "30"],
            CorrectAnswer: "27",
            Degree: 10
        },
        {
            Id: 9,
            Header: "what is 81/9",
            Answers: ["18", "7", "9", "10"],
            CorrectAnswer: "9",
            Degree: 10
        },
        {
            Id: 10,
            Header: "what is 7*6",
            Answers: ["47", "49", "42", "46"],
            CorrectAnswer: "42",
            Degree: 10
        }

    ]
}

let quistObj = quiz.Questions;
let index = 0;
let score = 0;
document.getElementById("examName").innerText = quiz.quizName;
function displayQuestionNum(index) {
    let quistionId = quistObj[index].Id;
    let quistioEleId = document.getElementById("quistionId");
    quistioEleId.innerText = "Question :" + quistionId;
    quistioEleId.value = quistionId;
    let qustion = quistObj[index].Header;
    let qusetionEle = document.getElementById("questionLabel");
    qusetionEle.innerText = qustion;
    quistObj[index].Header;
    let answers = quistObj[index].Answers;
    let radio1 = document.getElementById("labelradio1");
    radio1.innerText = answers[0];
    let radio2 = document.getElementById("labelradio2");
    radio2.innerText = answers[1];
    let radio3 = document.getElementById("labelradio3");
    radio3.innerText = answers[2];
    let radio4 = document.getElementById("labelradio4");
    radio4.innerText = answers[3];
}

displayQuestionNum(index);

function calculateScore(questionAnswer, questionNumber) {
    let q = quiz.Questions[questionNumber];
    console.log(questionAnswer);
    console.log(questionNumber);

    if (questionAnswer === q.CorrectAnswer) {
        score += q.Degree;
    }
    console.log(score);

};

function nextQuestions() {
    let radioIsChecked = document.querySelector("input[name=flexRadioDefault]:checked");

    if (radioIsChecked) {
        let questionAnswer = document.querySelector("label[for=" + radioIsChecked.id + "]").innerText
        calculateScore(questionAnswer, index);
        radioIsChecked.checked = false
        index++
        displayQuestionNum(index); console.log("\n\n");
    }


    if (index === 9) {
        document.getElementById("Nextbtn").style.display = "none"
        document.getElementById("Finishbtn").style.display = "block"
    }
    console.log("\n\n");
}

function finishExam() {
    let radioIsChecked = document.querySelector("input[name=flexRadioDefault]:checked");

    if (radioIsChecked) {
        let questionAnswer = document.querySelector("label[for=" + radioIsChecked.id + "]").innerText
        calculateScore(questionAnswer, index);

        setCookie("score", score)

        window.location.href = ("../examScore/examScore.html");
    }
    if (timer <= 0) {
        setCookie("score", score)
        console.log(score ? score : 0);
        window.location.href = ("../examScore/examScore.html");
    }
}
function setCookie(name, value) {
    document.cookie = name + "=" + (value || "") + ";";
}
