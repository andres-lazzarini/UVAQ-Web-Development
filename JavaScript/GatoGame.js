const audio = new Audio("../Music/Battle Crowd Celebrate Stutter.mp3");
const audioCat1 = new Audio("../Music/cat1.mp3");
const audioCat2 = new Audio("../Music/cat2.mp3");
const audiocanca = new Audio("../Music/canaca.mp3");

var cells = ["y", "y", "y", "y", "y", "y", "y", "y", "y"];
var flag = true;
var namep1;
var namep2;
var moves = 0;

window.addEventListener('load', function () {
    // audiocanca.play();

    const startbtn = document.querySelector(".start-btn");

    startbtn.addEventListener("click", function () {
        document.querySelector(".start-content").style.setProperty("opacity", "0");
        setTimeout(() => {
            document.querySelector(".start-content").style.setProperty("display", "none");
            document.querySelector(".game-container").style.display = "block";
            document.querySelector(".game-content").style.display = "flex";
            document.querySelector(".game-content").style.opacity = "1";
        }, 500);

        namep1 = document.querySelector("#player1name").value;
        namep2 = document.querySelector("#player2name").value;
        document.querySelector(".namep1 span").textContent = `${namep1}'s Turn`;
        document.querySelector(".namep2 span").textContent = `${namep2}'s Turn`;

        if (flag) {
            setTimeout(() => {
                document.querySelector(".namep1 span").style.fontSize = "38px";
                setTimeout(() => {
                    document.querySelector(".namep1 span").style.fontSize = "35px";
                }, 250);
            }, 500);
        }
    });

    let celds = document.querySelectorAll(".celda").forEach(function (element) {
        element.addEventListener("click", addCrossCircle);
    });

    const restarttbtn = document.querySelector(".end-btn");

    restarttbtn.addEventListener("click", () => {
        restartGame();
        audio.pause();
    });

});

function addCrossCircle() {
    if (flag) {
        audioCat1.play();
        this.querySelector("img.cross").style.display = "initial";
        this.removeEventListener("click", addCrossCircle);
        this.style.cursor = "initial";
        this.classList.remove("active");
        let cellnum = this.getAttribute("data-cell") / 1;
        cells[cellnum - 1] = "x";
        flag = false;

        document.querySelector(":root").style.setProperty("--winlinecolor", "orange");
        document.querySelector(":root").style.setProperty("--blurwinline", "orange");
        document.querySelector(":root").style.setProperty("--hovcolor", "#E4DCCF");
        document.querySelector(".namep1 span").style.fontSize = "0";
        document.querySelector(".namep2 span").style.fontSize = "38px";
        setTimeout(() => {
            document.querySelector(".namep2 span").style.fontSize = "35px";
        }, 250);

        moves += 1;
    } else {
        audioCat2.play();
        this.querySelector("img.circle").style.display = "initial";
        this.removeEventListener("click", addCrossCircle);
        this.style.cursor = "initial";
        this.classList.remove("active");
        let cellnum = this.getAttribute("data-cell") / 1;
        cells[cellnum - 1] = "o";
        flag = true;

        document.querySelector(":root").style.setProperty("--winlinecolor", "cyan");
        document.querySelector(":root").style.setProperty("--blurwinline", "cyan");
        document.querySelector(":root").style.setProperty("--hovcolor", "#00ffff");
        document.querySelector(".namep2 span").style.fontSize = "0";
        document.querySelector(".namep1 span").style.fontSize = "38px";
        setTimeout(() => {
            document.querySelector(".namep1 span").style.fontSize = "35px";
        }, 250);

        moves += 1;
    }

    gg();
}

function gg() {
    if (((cells[0]) == "x" && (cells[1]) == "x" && (cells[2]) == "x") || ((cells[0]) == "o" && (cells[1]) == "o" && (cells[2]) == "o")) {
        doWin(1, 0);
    } else if (((cells[3]) == "x" && (cells[4]) == "x" && (cells[5]) == "x") || ((cells[3]) == "o" && (cells[4]) == "o" && (cells[5]) == "o")) {
        doWin(2, 3);
    } else if (((cells[6]) == "x" && (cells[7]) == "x" && (cells[8]) == "x") || ((cells[6]) == "o" && (cells[7]) == "o" && (cells[8]) == "o")) {
        doWin(3, 6);
    } else if (((cells[0]) == "x" && (cells[3]) == "x" && (cells[6]) == "x") || ((cells[0]) == "o" && (cells[3]) == "o" && (cells[6]) == "o")) {
        doWin(4, 0);
    } else if (((cells[1]) == "x" && (cells[4]) == "x" && (cells[7]) == "x") || ((cells[1]) == "o" && (cells[4]) == "o" && (cells[7]) == "o")) {
        doWin(5, 1);
    } else if (((cells[2]) == "x" && (cells[5]) == "x" && (cells[8]) == "x") || ((cells[2]) == "o" && (cells[5]) == "o" && (cells[8]) == "o")) {
        doWin(6, 2);
    } else if (((cells[0]) == "x" && (cells[4]) == "x" && (cells[8]) == "x") || ((cells[0]) == "o" && (cells[4]) == "o" && (cells[8]) == "o")) {
        doWin(7, 0);
    } else if (((cells[2]) == "x" && (cells[4]) == "x" && (cells[6]) == "x") || ((cells[2]) == "o" && (cells[4]) == "o" && (cells[6]) == "o")) {
        doWin(8, 2);
    } else if (moves == 9) {
        doWin(0, 9);
    }
}

function doWin(numwin, lineval) {
    let celds = document.querySelectorAll(".celda").forEach(function (element) {
        element.removeEventListener("click", addCrossCircle);
        element.style.cursor = "initial";
    });

    if (numwin != 0) {
        document.querySelector(`.winline${numwin}`).style.display = "block";
        setTimeout(() => {
            if (numwin < 4) {
                document.querySelector(`.winline${numwin}`).style.width = "90%";
            } else if (numwin > 6) {
                document.querySelector(`.winline${numwin}1`).style.width = "90%";
            } else {
                document.querySelector(`.winline${numwin}1`).style.width = "100%";
            }
        }, 10);

        if (cells[lineval] == "x") {
            document.querySelector(".win-message").textContent = `${namep1} Wins!`;
        } else {
            document.querySelector(".win-message").textContent = `${namep2} Wins!`;
        }

        setTimeout(() => {
            document.querySelector(".game-content").style.opacity = "0";
            document.querySelector(`.winline${numwin}`).style.opacity = "0";
            document.querySelectorAll(".namep").forEach(function (element) {
                element.style.opacity = "0";
            });
            setTimeout(() => {
                document.querySelector(".game-container").style.display = "none";
            }, 250);
        }, 750);

        setTimeout(() => {
            document.querySelector(".end-content").style.display = "block";
            setTimeout(() => {
                document.querySelector(".end-content").style.opacity = "1";
                document.querySelector(".wingg").style.display="initial";
            }, 250);
        }, 1000);

        audio.play();
    } else {
        document.querySelector(".win-message").textContent = "It's a Draw";

        setTimeout(() => {
            document.querySelector(".game-content").style.opacity = "0";
            document.querySelectorAll(".namep").forEach(function (element) {
                element.style.opacity = "0";
            });
            setTimeout(() => {
                document.querySelector(".game-container").style.display = "none";
            }, 250);
        }, 500);

        setTimeout(() => {
            document.querySelector(".end-content").style.display = "block";
            setTimeout(() => {
                document.querySelector(".end-content").style.opacity = "1";
            }, 250);
        }, 750);
    }
}

function restartGame() {
    document.querySelector(".end-content").style.opacity="0";
    setTimeout(() => {
        document.querySelector(".end-content").style.display="none";
    }, 250);

    document.querySelectorAll(".celda").forEach(function (element) {
        element.classList.remove("active");
        element.querySelectorAll("img").forEach( (eleimg) => {
            eleimg.style.display="none";
        });
        element.style.cursor = "pointer";
        element.classList.add("active");
        element.addEventListener("click", addCrossCircle);
    });

    setTimeout(() => {
        document.querySelector(".game-container").style.display="block";
    }, 250);
    setTimeout(() => {
        document.querySelector(".game-content").style.display="flex";
        document.querySelector(".game-content").style.opacity="1";
        document.querySelectorAll(".namep").forEach( (elename) => {
            elename.style.opacity="1";
        });
    }, 250);

    restWinLines();
    document.querySelector(".wingg").style.display="none";

    cells = ["y", "y", "y", "y", "y", "y", "y", "y", "y"];
    moves = 0;
}


function restWinLines() {
    document.querySelectorAll(".winline").forEach( (elewin) => {
        
        elewin.style.display="none";
        elewin.style.opacity="1";

    });

    for (let i = 1; i < 9; i++) {
        if (i < 4) {
            document.querySelector(`.winline${i}`).style.width="0";
        } else {
            document.querySelector(`.winline${i}1`).style.width="0";
        }
    }
}