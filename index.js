const btnAddModal = document.querySelector("#addButton");
const btnCloseAddModal = document.querySelector('#closeModal');
const modal = document.querySelector('#modal')

const form = document.querySelector('#form');
const inputNameTask = document.querySelector('#inputNameTask');
const inputDescriptionTask = document.querySelector('#inputDescriptionTask');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskName = inputNameTask.value;
    const descriptionTask=inputDescriptionTask.value;

    if (!taskName) return alert("Porfavor ingresa el nombre de la tarea")

    const pendingClass = document.querySelector('#pendingClass');

    const pendingTask = document.createElement('div');
    pendingTask.classList.add('pendingTask');

    pendingClass.appendChild(pendingTask);


    const pendingTaskName = document.createElement('h3');
    pendingTaskName.classList.add('pendingNameTask');
    pendingTaskName.innerText=taskName

    const pendingTaskDescription = document.createElement('h3');
    pendingTaskDescription.classList.add('pendingDescriptionTask');
    pendingTaskDescription.innerText=descriptionTask
    
    pendingTask.appendChild(pendingTaskName)
    pendingTask.appendChild(pendingTaskDescription)
})

btnAddModal.addEventListener("click", () => {
    modal.showModal()
})

btnCloseAddModal.addEventListener("click", () => {
    modal.close()
})
