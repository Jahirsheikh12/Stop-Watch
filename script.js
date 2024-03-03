let displayTimer = document.getElementById('timer');

let [hours, seconds, minutes] = [0, 0, 0];

let playBtn = document.getElementById('play-btn');

let timer = null;

function startTimer() {
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;

    let m = minutes < 10 ? "0" + minutes : minutes;

    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTimer.innerText = h + ':' + m + ':' + s;

    function timerInterval() {
        if (timer !== null) {
            clearInterval(timer);
        }
        timer = setInterval(startTimer, 1000);
    }

    timerInterval();
}

function stopTimer() {
    clearInterval(timer);
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
}

function resetTimer() {
    displayTimer.innerText = '00:00:00';
    [hours, seconds, minutes] = [0, 0, 0];
    timer = null;
}


