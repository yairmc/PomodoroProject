
export default function dTask(item){
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

    const doButtonTaskDescription = document.createElement('div');
    doButtonTaskDescription.classList.add('doButton');
    doButtonTaskDescription.innerText = "Temporisador"

    doingTask.appendChild(doingTaskName)
    doingTask.appendChild(doingTaskDescription)
    doingTask.appendChild(doButtonTaskDescription)
}