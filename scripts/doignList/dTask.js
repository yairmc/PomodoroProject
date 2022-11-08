
export default function dTask(item) {
    const doingClass = document.querySelector('#doingClass');

    doingClass.innerHTML += "";
    const doingTask = document.createElement('div');
    doingTask.classList.add('doingTask');
    doingTask.setAttribute('draggable', true)

    doingClass.appendChild(doingTask);


    const doingTaskName = document.createElement('h3');
    doingTaskName.classList.add('doingNameTask');
    doingTaskName.innerText = item.name;

    const doingTaskDescription = document.createElement('h3');
    doingTaskDescription.classList.add('doingDescriptionTask');
    doingTaskDescription.innerText = item.description

    // timer 
    const panel = document.createElement('div')
    panel.classList.add('timeContainer')

    const start = document.createElement('p');
    start.classList.add('start');
    start.innerText = "Empezar"

    const stop = document.createElement('p')
    stop.classList.add('stop');
    stop.innerText = "detenerse"

    const timer = document.createElement('div');
    timer.classList.add('timer');

    const minutes = document.createElement('p');
    minutes.setAttribute('id', 'minutes');

    const seconds = document.createElement('p')
    seconds.setAttribute('id', 'seconds')

    doingTask.appendChild(doingTaskName)
    doingTask.appendChild(doingTaskDescription)

    doingTask.appendChild(panel)
    panel.appendChild(start)
    panel.appendChild(stop)

    doingTask.appendChild(timer)
    timer.appendChild(minutes);
    timer.appendChild(seconds);

    let workTime = 1;
    let restTime = 5;
    let secondsTime = '00';

    minutes.innerHTML = workTime
    seconds.innerHTML = secondsTime

    start.addEventListener('click', (e) => {
        console.log('hiciste click');
        startTimer();
    })

    function startTimer(){
        secondsTime = 59;
        let workMinutes = workTime - 1;
        let restMinutes = restTime - 1;

        let breakCount = 0;

        let timeFunction = () => {
            minutes.innerHTML = workMinutes;
            seconds.innerHTML = secondsTime;

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

}


