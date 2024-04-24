const inputBox = document.querySelector('#input-box')
const answerBox = document.querySelector('.fortune')

const fortunes = ['It is certain.', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely',
    'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again',
    "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

function fade() {
    let op = 0.1;  // initial opacity
    answerBox.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        answerBox.style.opacity = op;
        answerBox.style.filter = 'alpha(opacity=' + op * 10 + ")";
        op += op * 0.1;
    }, 50);
}

function getFortune() {
    const ballAnswer = fortunes[Math.floor(Math.random() * fortunes.length)]
    answerBox.textContent = `${ballAnswer}`
    answerBox.setAttribute('class', 'fix-font')
    if (inputBox.value === '') {
        answerBox.textContent = 'You have not asked a question.'
    }
}

function callFunctions() {
    fade()
    getFortune()
}