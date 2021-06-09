document.getElementById("red-btn").onclick = backgroundRed;
document.getElementById("green-btn").onclick = backgroundGreen;
document.getElementById("blue-btn").onclick = backgroundBlue;
document.getElementById("reset-btn").onclick = backgroundReset;


function backgroundRed() {
    document.getElementById("change-color").style.background = "red";
}

function backgroundGreen() {
    document.getElementById("change-color").style.background = "green";
}

function backgroundBlue() {
    document.getElementById("change-color").style.background = "blue";
}

function backgroundReset() {
    document.getElementById("change-color").style.background = "none";
}