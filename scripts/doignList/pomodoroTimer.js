let workTime = 2; //Tiempo de trabajo
let restTime = 3; //Tiempo dedescanzo
let longRestTime = 4; //Tiempo de descanzo largo

let secondsTime = 6; // Segundos del minuto
let workMinutes;
let timerCount;





const startTimer = (dtask) => {




    workMinutes = workTime - 1; // auxiliar minutos detrabajo en cambios
    let restMinutes = restTime - 1; //Auxiliar minutos de descanzo en cambios

    let breakCount = 0;  // +1 si termino el tiempo de trabajo, +1 si paso el tiempo de descanzo

    let breakCountLess=4;
    
   
    let timeFunction = () => {
        dtask.children[3].children[0].innerHTML = workMinutes;
        dtask.children[3].children[2].innerHTML = secondsTime;
        dtask.children[5].innerHTML=`Pomodoros restantes: ${breakCountLess}`

        secondsTime = secondsTime - 1;

        if (secondsTime === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {

                    if (breakCount < 8) {
                        workMinutes = restMinutes;
                        console.log('descanzo');
                        breakCount++;
                        console.log(breakCount);
                    } else {
                        workMinutes = longRestTime;
                        breakCount = 0;
                        console.log('descanzo largo')
                        console.log(breakCount);
                        breakCount++;
                        breakCountLess=4;
                    }
                } else {
                    workMinutes = workTime;
                    breakCount++;
                    breakCountLess--;
                    console.log("trabajo")
                    console.log(breakCount);
                }
            }

            secondsTime = 6;
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
        workTime = 1;
        restTime = 2;
        secondsTime = 10;
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