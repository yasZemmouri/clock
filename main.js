"use strict";
const clockEl = document.getElementById('clock');

const displayHour = function () {
    let date = new Date();
    clockEl.textContent = date;
}
displayHour();

