let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector("#msg");
let wincont = document.querySelector(".msg-container");

//turn
let turnO = true; //pleyar x , player O
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box are clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";

      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
      gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = "Game was a Draw. ";
  wincont.classList.remove("hide");
  boxDec();
};
const showWinner = (winner) => {
  msg.innerText = "Congratulations, Winner is " + winner;
  wincont.classList.remove("hide");
  boxDec();
};
const resetGame = () => {
  turnO = true;
  count = 0;
  boxEneble();
  wincont.classList.add("hide");
};

const boxDec = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const boxEneble = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
        return true;
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
