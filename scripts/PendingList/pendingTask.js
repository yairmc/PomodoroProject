// Crea el contenedor de la tarea pendiente 

export default function createPendingTask(todoPending) {
    const pendingClass = document.querySelector('#pendingClass');

    pendingClass.innerHTML = "";
    todoPending.forEach(item => {

        const pendingPosition = document.createElement('div');
        pendingPosition.classList.add('pendingPosition')
        pendingPosition.setAttribute('id', Math.floor(Math.random() * 30));
        pendingClass.appendChild(pendingPosition);

        const pendingTask = document.createElement('div');
        pendingTask.classList.add('pendingTask');
        pendingTask.setAttribute('id', Math.floor(Math.random() * 300))
        pendingTask.draggable = true;

        pendingClass.appendChild(pendingTask);


        const pendingTaskName = document.createElement('h3');
        pendingTaskName.classList.add('pendingNameTask');
        pendingTaskName.innerText = item.name;

        const pendingTaskDescription = document.createElement('h3');
        pendingTaskDescription.classList.add('pendingDescriptionTask');
        pendingTaskDescription.innerText = item.description

        pendingTask.appendChild(pendingTaskName)
        pendingTask.appendChild(pendingTaskDescription)
        pendingPosition.appendChild(pendingTask)

        pendingTask.addEventListener('dragstart', e => {

            e.dataTransfer.setData('id', e.target.id)
        })
        pendingPosition.addEventListener('dragover', e => {
            e.preventDefault();
        })

        pendingPosition.addEventListener('drop', e => {
            // data de la position 
            const taskPosition = pendingPosition.childNodes;
            console.log(taskPosition[0]);

            pendingPosition.removeChild(taskPosition[0]);
            // data de la pendingTask
            const idTask = e.dataTransfer.getData('id');
            e.target.appendChild(document.getElementById(idTask))



        })
    })

}