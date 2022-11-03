export default function createPendingTask(todoPending) {
    const pendingClass = document.querySelector('#pendingClass');

    pendingClass.innerHTML = "";
    todoPending.forEach(item => {
        const pendingTask = document.createElement('div');
        pendingTask.classList.add('pendingTask');

        pendingClass.appendChild(pendingTask);


        const pendingTaskName = document.createElement('h3');
        pendingTaskName.classList.add('pendingNameTask');
        pendingTaskName.innerText = item.name;

        const pendingTaskDescription = document.createElement('h3');
        pendingTaskDescription.classList.add('pendingDescriptionTask');
        pendingTaskDescription.innerText = item.description

        pendingTask.appendChild(pendingTaskName)
        pendingTask.appendChild(pendingTaskDescription)
    })
}