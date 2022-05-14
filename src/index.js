import "./styles.css";

document.getElementById("app");
const billAmount = document.querySelector("#bill");
const cashGiven = document.querySelector("#cash");
const cashBlock = document.querySelector(".cash");
const check = document.querySelector(".check");
const next = document.querySelector(".next");
const returnTable = document.querySelector(".return-table");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector("#error-msg");

next.addEventListener("click", function validateBill() {
  hideMessage();
  hideTable();
  cashBlock.style.display = "none";
  check.style.display = "none";
  if (billAmount.value > 0) {
    cashBlock.style.display = "flex";
    check.style.display = "flex";
  } else {
    showMessage("Invalid Bill Amount");
  }
});
const notes = [2000, 500, 100, 20, 10, 5, 1];

check.addEventListener("click", function validateCash() {
  hideMessage();
  hideTable();
  let billAm = Number(billAmount.value);
  let cashAm = Number(cashGiven.value);
  // console.log("bill amount: " + billAm);
  // console.log("cash given: " + cashAm);
  // console.log(billAm <= cashAm);
  if (Number(billAm) <= cashAm) {
    console.log(typeof billAm);
    console.log(typeof cashAm);
    returnTable.style.display = "inline";
    let remAmount = cashAm - billAm;
    calcRemAmount(remAmount);
  } else {
    showMessage("The cash is too low");
  }
});

function calcRemAmount(remAmount) {
  for (let i = 0; i < notes.length; i++) {
    const noOfNote = Math.trunc(remAmount / notes[i]);
    remAmount %= notes[i];
    noOfNotes[i].innerHTML = noOfNote;
  }
}

function hideTable() {
  returnTable.style.display = "none";
}
function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "flex";
  message.innerHTML = msg;
}
