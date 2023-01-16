"use strict";
const clockEl = document.getElementById('clock');
let x = 0;
// Method 1

const displayDate = function () {
    let date = new Date();
    clockEl.textContent = date;
    console.log(x++);
}
//setInterval call displayDate every second.
setInterval(displayDate, 1000);

// Method 2
function display_c() {
    // var refresh = 1000; // Refresh rate in milli seconds
    setTimeout('display_ct()', 1000)
}

function display_ct() {
    var x = new Date()
    document.getElementById('clock2').innerHTML = x;
    display_c();
}
// display_ct display Date and call display_c. display_c waite 1s and call again display_ct 
display_ct();


