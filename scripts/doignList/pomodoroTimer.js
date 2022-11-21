let workTime = 2; //Tiempo de trabajo
let restTime = 3; //Tiempo dedescanzo
let longRestTime = 4; //Tiempo de descanzo largo

let secondsTime = 6; // Segundos del minuto
let workMinutes;
let timerCount;
let breakCountLess = 4;

let advicedRest = false;

const startTimer = (dtask) => {

    workMinutes = workTime - 1; // auxiliar minutos detrabajo en cambios
    let restMinutes = restTime - 1; //Auxiliar minutos de descanzo en cambios

    let breakCount = 0;  // +1 si termino el tiempo de trabajo, +1 si paso el tiempo de descanzo


    let timeFunction = () => {
        // agregando datos  a los elementos dtask  
        dtask.children[3].children[0].innerHTML = workMinutes;
        dtask.children[3].children[2].innerHTML = secondsTime;
        dtask.children[5].innerHTML = `Pomodoros restantes: ${breakCountLess}`

        secondsTime = secondsTime - 1;

        if (secondsTime === 0) {  //si los segundos marcan 0
            workMinutes = workMinutes - 1; //minutos actuales - 1
            if (workMinutes === -1) {
                advicedRest = confirm('Omitir Descanzo?')
                if (breakCount % 2 === 0 && advicedRest === false) {
                    if (breakCount < 4) {
                        workMinutes = restMinutes;
                        console.log('descanzo');
                        breakCount++;
                        console.log(breakCount);
                    }
                    else {
                        workMinutes = longRestTime;
                        breakCount = 0;
                        console.log('descanzo largo')
                        console.log(breakCount);
                        breakCount++;
                        breakCountLess = 4;
                    }

                } else {
                    workMinutes = workTime - 1;
                    breakCount++;
                    breakCountLess--;
                    console.log("trabajo")
                    console.log(breakCount);
                    console.log(breakCountLess);
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
        dtask.children[5].innerHTML = `Pomodoros restantes: ${breakCountLess}`

        secondsTime = secondsTime - 1;

        if (secondsTime === 0) {  //si los segundos marcan 0
            workMinutes = workMinutes - 1; //minutos actuales - 1
            if (workMinutes === -1) {
                advicedRest = confirm('Omitir Descanzo?')
                if (breakCount % 2 === 0 && advicedRest === false) {
                    if (breakCount < 4) {
                        workMinutes = restMinutes;
                        console.log('descanzo');
                        breakCount++;
                        console.log(breakCount);
                    }
                    else {
                        workMinutes = longRestTime;
                        breakCount = 0;
                        console.log('descanzo largo')
                        console.log(breakCount);
                        breakCount++;
                        breakCountLess = 4;
                    }

                } else {
                    workMinutes = workTime - 1;
                    breakCount++;
                    breakCountLess--;
                    console.log("trabajo")
                    console.log(breakCount);
                    console.log(breakCountLess);
                }
            }
            secondsTime = 6;
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