//invoking moment.js and displaying it in the header of the planner
const presentTime = moment().format("LLL");
const currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = presentTime;

const inputElement0 = document.getElementById("eventTextArea0");
const inputElement1 = document.getElementById("eventTextArea1");
const inputElement2 = document.getElementById("eventTextArea2");
const inputElement3 = document.getElementById("eventTextArea3");
const inputElement4 = document.getElementById("eventTextArea4");
const inputElement5 = document.getElementById("eventTextArea5");
const inputElement6 = document.getElementById("eventTextArea6");
const inputElement7 = document.getElementById("eventTextArea7");
const inputElement8 = document.getElementById("eventTextArea8");
inputElement0.innerText = localStorage.getItem("userEvent0");
inputElement1.innerText = localStorage.getItem("userEvent1");
inputElement2.innerText = localStorage.getItem("userEvent2");
inputElement3.innerText = localStorage.getItem("userEvent3");
inputElement4.innerText = localStorage.getItem("userEvent4");
inputElement5.innerText = localStorage.getItem("userEvent5");
inputElement6.innerText = localStorage.getItem("userEvent6");
inputElement7.innerText = localStorage.getItem("userEvent7");
inputElement8.innerText = localStorage.getItem("userEvent8");

$(".saveBtn0").on("click", function () {
  const userEvent = $("#eventTextArea0").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent0", userEvent);
  }
});
$(".saveBtn1").on("click", function () {
  const userEvent = $("#eventTextArea1").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent1", userEvent);
  }
});
$(".saveBtn2").on("click", function () {
  const userEvent = $("#eventTextArea2").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent2", userEvent);
  }
});
$(".saveBtn3").on("click", function () {
  const userEvent = $("#eventTextArea3").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent3", userEvent);
  }
});
$(".saveBtn4").on("click", function () {
  const userEvent = $("#eventTextArea4").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent4", userEvent);
  }
});
$(".saveBtn5").on("click", function () {
  const userEvent = $("#eventTextArea5").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent5", userEvent);
  }
});
$(".saveBtn6").on("click", function () {
  const userEvent = $("#eventTextArea6").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent6", userEvent);
  }
});
$(".saveBtn7").on("click", function () {
  const userEvent = $("#eventTextArea7").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent7", userEvent);
  }
});
$(".saveBtn8").on("click", function () {
  const userEvent = $("#eventTextArea8").val();

  if (userEvent === "") {
    alert("please provide an event in order to save");
  } else {
    localStorage.setItem("userEvent8", userEvent);
  }
});
