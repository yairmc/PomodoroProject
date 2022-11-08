// Crea el contenedor de la tarea realizando

export default function createDoingTask(todoDoing) {
    const doingClass = document.querySelector('#doingClass');

    doingClass.innerHTML += "";
        const doingTask = document.createElement('div');
        doingTask.classList.add('doingTask');
        doingTask.setAttribute('draggable', true)

        doingClass.appendChild(doingTask);


        const doingTaskName = document.createElement('h3');
        doingTaskName.classList.add('doingNameTask');
        doingTaskName.innerText = todoDoing.name;

        const doingTaskDescription = document.createElement('h3');
        doingTaskDescription.classList.add('doingDescriptionTask');
        doingTaskDescription.innerText = todoDoing.description

        const doButtonTaskDescription = document.createElement('input');
        doButtonTaskDescription.classList.add('doButton');
        doButtonTaskDescription.value = "Inicia Tarea"
        doButtonTaskDescription.type = "button"

        doingTask.appendChild(doingTaskName)
        doingTask.appendChild(doingTaskDescription)
        doingTask.appendChild(doButtonTaskDescription)
        
        
}