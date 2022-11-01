const btnAddModal = document.querySelector("#addButton");
const btnCloseAddModal = document.querySelector('#closeModal');
const modal = document.querySelector('#modal')

let listItems = localStorage.getItem('myTodoList') ? JSON.parse(localStorage.getItem('myTodoList')) : [];

const form = document.querySelector('#form');
const inputNameTask = document.querySelector('#inputNameTask');
const inputDescriptionTask = document.querySelector('#inputDescriptionTask');

window.addEventListener('load', () => {
    loadPendingTask(listItems)

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameTask = inputNameTask.value;
        const descriptionTask = inputDescriptionTask.value;

        listItems.push({ name: nameTask, description: descriptionTask, id: `task-${Math.floor(Math.random() * 300)}` });
        localStorage.setItem('myTodoList', JSON.stringify(listItems));

        if (!nameTask) return alert("Porfavor ingresa el nombre de la tarea")
        loadPendingTask(listItems)
        inputNameTask.value = '';
        inputDescriptionTask.value = '';
    })
})


btnAddModal.addEventListener("click", () => {
    modal.showModal()
})

btnCloseAddModal.addEventListener("click", () => {
    modal.close()
})

const loadPendingTask = (todoPending) => {
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