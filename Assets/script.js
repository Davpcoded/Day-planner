//invoking moment.js and displaying it in the header of the planner
const presentTime = moment();
const currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = presentTime;
