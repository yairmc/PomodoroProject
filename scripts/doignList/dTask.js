import { startTimer, pausarTimer, reanudarTimer, restoreTimer } from "./pomodoroTimer.js";
import createFinishTask from "../finishList/finishTask.js";
import { closeModalDoing, openModalDoing } from "./modal.js"
import createPendingTask from "../PendingList/pendingTask.js"
import { closeModalDoing2, openModalDoing2 } from "./modal2.js";
import createDoingTask from "./doingTask.js";


let listItems = localStorage.getItem('myTodoList') ? JSON.parse(localStorage.getItem('myTodoList')) : [];
let listDoingItems = localStorage.getItem('myDoingList') ? JSON.parse(localStorage.getItem('myDoingList')) : [];
let finishListItems = localStorage.getItem('myFinishList') ? JSON.parse(localStorage.getItem('myFinishList')) : [];
createDoingTask(listDoingItems)

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

    const cancel = document.createElement('a')
    cancel.classList.add('cancel');
    cancel.href = '/'
    cancel.innerText = "cancel"

    const pause = document.createElement('p');
    pause.classList.add('pause');
    pause.innerText = 'pausa';

    const reanudar = document.createElement('p');
    reanudar.classList.add('reanudar');
    reanudar.innerText = 'reanudar';

    const restore = document.createElement('p');
    restore.classList.add('restore');
    restore.innerText = 'restore';


    const finishTask = document.createElement('div');
    finishTask.classList.add('finishTaskButton')
    finishTask.innerText = 'Finish Task';

    //boton para eliminar
    const buttonEliminarTarea = document.createElement('div');
    buttonEliminarTarea.classList.add('eliminarDoingTask');
    buttonEliminarTarea.innerText = 'Eliminar';

    const toPendingTask = document.createElement('div');
    toPendingTask.classList.add('toPendingTask')
    toPendingTask.innerText = 'Regresar Tarea';

    const lessPomodoro = document.createElement('p');
    lessPomodoro.classList.add('lessPomodoro');

    const timer = document.createElement('div');
    timer.classList.add('timer');

    const minutes = document.createElement('p');
    minutes.setAttribute('id', 'minutes');
    minutes.innerText = "00"

    const seconds = document.createElement('p')
    seconds.setAttribute('id', 'seconds')
    seconds.innerText = "00"

    const points = document.createElement('p');
    points.innerText = ':';

    doingTask.appendChild(panel);

    panel.appendChild(start);

    doingTask.appendChild(timer);
    doingTask.appendChild(finishTask);
    doingTask.appendChild(toPendingTask);
    doingTask.appendChild(buttonEliminarTarea);

    start.addEventListener('click', (e) => {
        startTimer(doingTask);
        doingTask.removeChild(toPendingTask)
        panel.removeChild(start);
        panel.appendChild(pause);
        panel.appendChild(restore);
        panel.appendChild(cancel);
        timer.appendChild(minutes);
        timer.appendChild(points);
        timer.appendChild(seconds);
        doingTask.appendChild(lessPomodoro);
        doingClass.replaceChildren(doingTask)
    })

    pause.addEventListener('click', (e) => {
        pausarTimer();
        panel.removeChild(pause);
        panel.removeChild(cancel);
        panel.removeChild(restore)
        panel.appendChild(reanudar);
    })

    reanudar.addEventListener('click', (e) => {
        reanudarTimer(doingTask);
        panel.removeChild(reanudar);
        panel.appendChild(pause);
        panel.appendChild(restore);
        panel.appendChild(cancel);
    })

    restore.addEventListener('click', (e) => restoreTimer(doingTask))



    //Regresar la lista a pendientes
    toPendingTask.addEventListener('click', (e) => {
        e.preventDefault();


        let acept = confirm("Quieres regresar la tarea a pendientes?");
        if (acept === true) {
            openModalDoing2();
            let finishClick = listDoingItems.find(task => task.name === e.path[1].firstChild.textContent)
            const Task = {
                name: finishClick.name,
                description: finishClick.description,
                id: `task-${Math.floor(Math.random() * 300)}`,
            }
            listItems.push(Task);
            localStorage.setItem('myTodoList', JSON.stringify(listItems));
            closeModalDoing2()
            createPendingTask(listItems);
            deleteDoingTask(finishClick.id);
        } else {
            return;
        }
    })

    finishTask.addEventListener('click', (e) => {
        e.preventDefault();

        let acept = confirm("Enserio Terminaste tu tarea?");
        if (acept === true) {
            openModalDoing();
            let finishClick = listDoingItems.find(task => task.name === e.path[1].firstChild.textContent)
            const Task = {
                name: finishClick.name,
                description: finishClick.description,
                id: `task-${Math.floor(Math.random() * 300)}`,
                fechaT: Date.now()
            }
            finishListItems.push(Task);
            localStorage.setItem('myFinishList', JSON.stringify(finishListItems));
            closeModalDoing()
            createFinishTask(finishListItems);
            deleteDoingTask(finishClick.id);

        } else {
            return;
        }
    })

    const deleteDoingTask = (id) => {
        const newList = listDoingItems.filter(task => task.id != id);
        listDoingItems = [...newList];
        localStorage.setItem('myDoingList', JSON.stringify(listDoingItems))
    }

    buttonEliminarTarea.addEventListener('click', (e) => {

        let doingClick = listDoingItems.find(task => task.name === e.path[1].firstChild.textContent);
        doingClass.removeChild(doingTask);
        deleteDoingTask(doingClick.id);
        location.reload();

    })


}


