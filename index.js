import { openModal, closeModal } from './scripts/PendingList/modal.js';
import createPendingTask from './scripts//PendingList/pendingTask.js'

let listItems = localStorage.getItem('myTodoList') ? JSON.parse(localStorage.getItem('myTodoList')) : [];

const form = document.querySelector('#form');
const inputNameTask = document.querySelector('#inputNameTask');
const inputDescriptionTask = document.querySelector('#inputDescriptionTask');

window.addEventListener('load', () => {
    createPendingTask(listItems)

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameTask = inputNameTask.value;
        const descriptionTask = inputDescriptionTask.value;

        for (let i = 0; listItems.length > i; i++) {
            if (nameTask === listItems[i].name) return alert('El nombre ya esta en la lista: ' + listItems[i].name);
            else if (descriptionTask === listItems[i].description) return alert(' La descripcion ya esta en la lista: ' + listItems[i].description)
        }
        if (nameTask == null || descriptionTask == null) return
        openModal();
        listItems.push({ name: nameTask, description: descriptionTask, id: `task-${Math.floor(Math.random() * 300)}` });
        localStorage.setItem('myTodoList', JSON.stringify(listItems));
        createPendingTask(listItems)
        inputNameTask.value = '';
        inputDescriptionTask.value = '';
        closeModal()
    })
})


