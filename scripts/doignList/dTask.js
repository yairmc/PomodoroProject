import startTimer from "./pomodoroTimer.js";
import createFinishTask from "../finishList/finishTask.js";
import { closeModalDoing, openModalDoing } from "./modal.js"

let listDoingItems = localStorage.getItem('myDoingList') ? JSON.parse(localStorage.getItem('myDoingList')) : [];
let finishListItems = localStorage.getItem('myFinishList') ? JSON.parse(localStorage.getItem('myFinishList')) : [];

export default function dTask(item) {
    createFinishTask(finishListItems)

    const doingTask = document.createElement('div');
    doingTask.classList.add('doingTask');
    doingClass.appendChild(doingTask);


    const doingTaskName = document.createElement('h3');
    doingTaskName.classList.add('doingNameTask');
    doingTaskName.innerText = item.name;

    const doingTaskDescription = document.createElement('h3');
    doingTaskDescription.classList.add('doingDescriptionTask');
    doingTaskDescription.innerText = item.description

    doingTask.appendChild(doingTaskName)
    doingTask.appendChild(doingTaskDescription)
    // timer 
    const panel = document.createElement('div')
    panel.classList.add('timeContainer')

    const start = document.createElement('p');
    start.classList.add('start');
    start.innerText = "start"

    const stop = document.createElement('a')
    stop.classList.add('stop');
    stop.href = '/'
    stop.innerText = "stop"

    const finishTask = document.createElement('div');
    finishTask.classList.add('finishTaskButton')
    finishTask.innerText = 'Finish Task';

    const pause = document.createElement('p');
    pause.classList.add('pause');
    pause.innerText = 'pausa';

    const timer = document.createElement('div');
    timer.classList.add('timer');

    const minutes = document.createElement('p');
    minutes.setAttribute('id', 'minutes');
    minutes.innerText = "00"

    const seconds = document.createElement('p')
    seconds.setAttribute('id', 'seconds')
    seconds.innerText = "00"

    doingTask.appendChild(panel)
    panel.appendChild(start)
    panel.appendChild(stop)

    doingTask.appendChild(finishTask)
    doingTask.appendChild(timer)
    doingTask.appendChild(finishTask)
    timer.appendChild(minutes);
    timer.appendChild(seconds);



    start.addEventListener('click', (e) => {
        startTimer(doingTask);
        panel.removeChild(stop);
        panel.removeChild(start);
        panel.appendChild(pause);
        panel.appendChild(stop);
    })

    pause.addEventListener('click', (e) => {
        panel.removeChild(pause);
        panel.removeChild(stop);
        panel.appendChild(start);
        panel.appendChild(stop);
    })
    finishTask.addEventListener('click', (e) => {
        e.preventDefault();
        let acept = confirm("Enserio Terminaste tu tarea?");
        if (acept === true) {
            openModalDoing();
            let finishClick = listDoingItems.find(task => task.name === e.path[1].firstChild.textContent)
            finishListItems.push({ name: finishClick.name, description: finishClick.description, id: `task-${Math.floor(Math.random() * 300)}` });
            localStorage.setItem('myFinishList', JSON.stringify(finishListItems));
            createFinishTask(finishListItems);
            doingClass.removeChild(doingTask);
            deleteDoingTask(finishClick.id);
            closeModalDoing()
        } else {
            return;
        }


    })

    const deleteDoingTask = (id) => {
        const newList = listDoingItems.filter(task => task.id != id);
        listDoingItems = [...newList];
        localStorage.setItem('myDoingList', JSON.stringify(listDoingItems))
    }


}


