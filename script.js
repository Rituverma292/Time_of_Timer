
/* script.js */
let timer;
let total = 0;

function startTimer() {
    const m = +document.getElementById('minutes').value || 0;
    const s = +document.getElementById('seconds').value || 0;

    total = m * 60 + s;

    timer = setInterval(() => {
        if (total <= 0) {
            clearInterval(timer);
            alert("Done!");
        }
        total--;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    total = 0;
    document.getElementById('time').innerText = "00:00";
}

function updateDisplay() {
    let m = Math.floor(total / 60);
    let s = total % 60;

    document.getElementById('time').innerText =
        `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}