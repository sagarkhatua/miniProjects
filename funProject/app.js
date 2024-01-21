const yesBtn = document.querySelector(".yesMsg button");
const yesMsgBtn = document.querySelector(".yes");
const noMsgBtn = document.querySelector(".no");
const note = document.querySelector(".note p");
const h = document.querySelector(".box h1");
const noBtn = document.querySelector(".noMsg button");

yesBtn.addEventListener("click", () => {
  yesMsgBtn.style.display = "block";
  noMsgBtn.style.display = "none";
  note.style.display = "block";
  h.style.display = "none";
  noBtn.style.display = "none";
});
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.floor(Math.random() * 45) + "vh";
  noBtn.style.top = Math.floor(Math.random() * 45) + "vw";
});

noBtn.addEventListener("click", () => {
  h.innerText = "ok i will wait !";
  noBtn.style.display = "none";
});
