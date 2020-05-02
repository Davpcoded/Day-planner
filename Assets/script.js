//invoking moment.js and displaying it in the header of the planner
const presentTime = moment().format("LLL");
const currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = presentTime;

const textAreaInputEl = document.querySelector(".eventTextArea");
const userEventText = document.querySelector("#userEventText");
// renders the user event in the text area
renderLastRegistered();

function renderLastRegistered() {
  const textAreaInput = localStorage.getItem("userEvent");
  if (textAreaInput === null) {
    return;
  } else {
    textAreaInputEl.textContent = textAreaInput;
  }
}
// Created event listener for all saveBtn that saves the user event and calls renderLastRegistered
$(".saveBtn").on("click", function () {
  const textAreaInput = document.querySelector(".eventTextArea").value;
  if (textAreaInput === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent", textAreaInput);
    renderLastRegistered();
  }
});
