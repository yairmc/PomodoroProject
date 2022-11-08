

let workTime = 25;
let restTime = 5;
let secondsTime = '00';

export default function startTimer(dtask){
    
    secondsTime = 59;
    let workMinutes = workTime - 1;
    let restMinutes = restTime - 1;

    let breakCount = 0;

    let timeFunction = () => {
        dtask.children[3].children[0].innerHTML = workMinutes;
        dtask.children[3].children[1].innerHTML = secondsTime;

        secondsTime=secondsTime-1;

        if(secondsTime===0){
            workMinutes=workMinutes-1;
            if(workMinutes===-1){
                if(breakCount%2===0){
                    workMinutes=restMinutes;
                    breakCount++;
                }else{
                    workMinutes=workTime;
                    breakCount++;
                }
            }
            secondsTime=59;
        }
    }
    setInterval(timeFunction, 1000)

}

function pausarTimer(minutes, seconds){
    
}