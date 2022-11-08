

let workTime = 1;
let restTime = 2;
let secondsTime = '00';
let finishWorkTime;
let finishRestTime;

export default function startTimer(dtask) {
    secondsTime = 10;
    let workMinutes = workTime - 1;
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
                    finishWorkTime = confirm("Termino tu sesion de pomodoro, descanza");
                } else {
                    workMinutes = workTime;
                    breakCount++;
                    finishRestTime = confirm("Termino tu descanzo, sigue")
                }
            }
            secondsTime = 10;
        }
    }
    setInterval(timeFunction, 1000)

}

function pausarTimer(minutes, seconds) {

}