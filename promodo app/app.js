      let timerDisplay = document.getElementById("timer");
        let timer;
        let timeLeft = 25 * 60;

        function updateDisplay() {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerDisplay.textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        function startTimer() {
            if (!timer) {
                timer = setInterval(() => {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateDisplay();
                    } else {
                        clearInterval(timer);
                        timer = null;
                    }
                }, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;
        }

        function resetTimer() {
            stopTimer();
            timeLeft = 25 * 60;
            updateDisplay();
        }

        function setShortBreak() {
            stopTimer();
            timeLeft = 5 * 60;
            updateDisplay();
        }

        function setLongBreak() {
            stopTimer();
            timeLeft = 15 * 60;
            updateDisplay();
        }

        updateDisplay();