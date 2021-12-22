const holes = $(".hole");
const scoreBoard = $('.score');
//const moles = $(".mole");
let finish = 0;
const btnStart = $("#startGame");

btnStart.click(function () {
    finish = 0;
    StartGame();
    time();

    holes.click(function () {
        if (finish !== 1) {
            if ($(this).hasClass("up")) {
                scoreBoard.text(parseFloat(scoreBoard.text()) + 1);
                $(this).removeClass("up");
            }
        }
    })
})

function StartGame() {
    let hole1 = holes[random(6, 0)];
    hole1.classList.add("up");
    time();

    setTimeout(function () {
        if(hole1.classList.contains("up")) {
            hole1.classList.remove("up");
        }

        StartGame();
    }, random(700, 200))}


function random(number, numberTwo) {
    return (Math.trunc(Math.random() * number) + numberTwo);
}

function time() {
    let timer = 0;

    function chrono() {
        let chrono = setTimeout(function () {
            timer++;
            time();
        }, 1000)
        if (timer === 10) {
            clearTimeout(chrono);
            if (holes.hasClass("up")) {
                holes.removeClass("up");
            }
            return finish++;
        }
    }
    chrono()
}

time();





