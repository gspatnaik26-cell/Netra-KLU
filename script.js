
// ========================
// LIVE CLOCK
// ========================

function updateClock() {

    const clock = document.getElementById("clock");

    if (clock) {

        clock.textContent = new Date().toLocaleTimeString();

    }

}

updateClock();

setInterval(updateClock, 1000);


// ========================
// DISPATCH BUTTON
// ========================

const dispatchButton = document.getElementById("dispatch-open");

if (dispatchButton) {

    dispatchButton.addEventListener("click", function() {

        alert("Mission Dispatch Module Coming Soon!");

    });

}
