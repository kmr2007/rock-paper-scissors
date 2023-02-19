// Rock Paper Scissors

// Variables for html
let rockImgEl = document.getElementById("rock-img");
let paperImgEl = document.getElementById("paper-img");
let scissorsImgEl = document.getElementById("scissors-img");
let winNumEl = document.getElementById("winNum");
let lossNumEl = document.getElementById("lossNum");
let tieNumEl = document.getElementById("tieNum");
let btn = document.getElementById("btn");
let humanImgEl = document.getElementById("human-img");
let computerImgEl = document.getElementById("computer-img");

// Global variables
let selection = "null";
let numWin = "0";
let numLoss = "0";
let numTie ="0";

// Event Listeners
rockImgEl.addEventListener("click", selectRock);
scissorsImgEl.addEventListener("click", selectScissors);
paperImgEl.addEventListener("click", selectPaper);
btn.addEventListener("click", btnClicked)

// Functions
function selectRock() {
   if (selection === "Rock") {
       rockImgEl.classList.remove("active");
       selection = "null"
    } else {
        rockImgEl.classList.add("active");
        paperImgEl.classList.remove("active");
        scissorsImgEl.classList.remove("active");
        selection = "Rock"
    }
}
function selectPaper() {
   if (selection === "Paper") {
       paperImgEl.classList.remove("active");
       selection = "null"
    } else {
        paperImgEl.classList.add("active");
        rockImgEl.classList.remove("active");
        scissorsImgEl.classList.remove("active");
        selection = "Paper"
    }
}
function selectScissors() {
   if (selection === "Scissors") {
        scissorsImgEl.classList.remove("active");
        selection = "null"
   } else {
   
 scissorsImgEl.classList.add("active");
        paperImgEl.classList.remove("active");
        rockImgEl.classList.remove("active");
        selection = "Scissors"
    }
}
function btnClicked() {
    let randNum = Math.random();
    if (selection === "Rock" && randNum < 0.33) {
    humanImgEl.src = "img/rock.jpg";
    computerImgEl.src = "img/rock.jpg";
    numTie++;
    tieNumEl.innerHTML = numTie;
    } else if (selection === "Rock" && randNum < 0.66) {
        humanImgEl.src = "img/rock.jpg";
        computerImgEl.src = "img/paper.png";
        numLoss++;
        lossNumEl.innerHTML = numLoss;
        } else if (selection === "Rock" && randNum < 1) {
            humanImgEl.src = "img/rock.jpg";
            computerImgEl.src = "img/scissors.png";
            numWin++;
            winNumEl.innerHTML = numWin;
            } else if (selection === "Paper" && randNum < 0.33) {
                humanImgEl.src = "img/paper.png";
                computerImgEl.src = "img/rock.jpg";
                numWin++;
                winNumEl.innerHTML = numWin;
                } else if (selection === "Paper" && randNum < 0.66) {
                    humanImgEl.src = "img/paper.png";
                    computerImgEl.src = "img/paper.png";
                    numTie++;
                    tieNumEl.innerHTML = numTie;
                    } else if (selection === "Paper" && randNum < 1) {
                        humanImgEl.src = "img/paper.png";
                        computerImgEl.src = "img/scissors.png";
                        numLoss++;
                        lossNumEl.innerHTML = numLoss;
                        } else if (selection === "Scissors" && randNum < 0.33) {
                            humanImgEl.src = "img/scissors.png";
                            computerImgEl.src = "img/rock.jpg";
                            numLoss++;
                            lossNumEl.innerHTML = numLoss;
                            } else if (selection === "Scissors" && randNum < 0.66) {
                                humanImgEl.src = "img/scissors.png";
                                computerImgEl.src = "img/paper.png";
                                numWin++;
                                winNumEl.innerHTML = numWin;
                                } else if (selection === "Scissors" && randNum < 1) {
                                    humanImgEl.src = "img/scissors.png";
                                    computerImgEl.src = "img/scissors.png";
                                    numTie++;
                                    tieNumEl.innerHTML = numTie;
                                    } else if (selection = "null"){ 
                                        alert("Please make a selection.")
                                    }
}
