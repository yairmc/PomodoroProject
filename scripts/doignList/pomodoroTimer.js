let workTime = 1;
let restTime = 2;
let secondsTime = '00';
let workMinutes;
let timerCount;

const startTimer = (dtask) => {
    secondsTime = 10;
    workMinutes = workTime - 1;
    let restMinutes = restTime - 1;

    let breakCount = 0;

    let timeFunction = () => {
        dtask.children[3].children[0].innerHTML = workMinutes;
        dtask.children[3].children[2].innerHTML = secondsTime;

        secondsTime = secondsTime - 1;

        if (secondsTime === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    workMinutes = restMinutes;
                    breakCount++;
                    confirm("Termino tu sesion de pomodoro, descanza");
                } else {
                    workMinutes = workTime;
                    breakCount++;
                    confirm("Termino tu descanzo, sigue")
                }
            }
            secondsTime = 10;
        }
    }
    timerCount = setInterval(timeFunction, 1000)
}

function pausarTimer() {
    alert('has pausado el temporizador')
    clearInterval(timerCount)
}

function reanudarTimer(dtask) {
    let restMinutes = restTime - 1;

    let breakCount = 0;

    let timeFunction = () => {
        dtask.children[3].children[0].innerHTML = workMinutes;
        dtask.children[3].children[2].innerHTML = secondsTime;

        secondsTime = secondsTime - 1;

        if (secondsTime === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    workMinutes = restMinutes;
                    breakCount++;
                    confirm("Termino tu sesion de pomodoro, descanza");
                } else {
                    workMinutes = workTime;
                    breakCount++;
                    confirm("Termino tu descanzo, sigue")
                }
            }
            secondsTime = 10;
        }
    }
    timerCount = setInterval(timeFunction, 1000)
}

function restoreTimer(dtask) {
    let confirmacion = confirm("Seguro quieres restablecer el pomodoro?")
    if (confirmacion) {
        clearInterval(timerCount);
        startTimer(dtask)
    }
    else {
        return
    }

}
export {
    startTimer,
    pausarTimer,
    reanudarTimer,
    restoreTimer
}