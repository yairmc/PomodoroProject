import createDoingTask from "../doignList/doingTask.js";
import createPendingTask from "./pendingTask.js";

let listItems = localStorage.getItem('myTodoList') ? JSON.parse(localStorage.getItem('myTodoList')) : [];
let listDoingItems = localStorage.getItem('myDoingList') ? JSON.parse(localStorage.getItem('myDoingList')) : [];
const pendingClass = document.querySelector('#pendingClass');

// Funcion que crea las tareas pendientes individualmente 
export default function pTask(item) {
    createDoingTask(listDoingItems);
    let node;

    // Creando la tarea pendinete 
    const pendingTask = document.createElement('div');
    pendingTask.classList.add('pendingTask');
    pendingTask.setAttribute('id', Math.floor(Math.random() * 300));
    pendingTask.draggable = true;
    pendingClass.appendChild(pendingTask);

    // Creando el contenido 
    // Nombre
    const pendingTaskName = document.createElement('h3');
    pendingTaskName.classList.add('pendingNameTask');
    pendingTaskName.innerText = item.name;
    // Descripcion 
    const pendingTaskDescription = document.createElement('h3');
    pendingTaskDescription.classList.add('pendingDescriptionTask');
    pendingTaskDescription.innerText = item.description

    const options = document.createElement('div');
    options.classList.add('options');

    //Boton
    const buttonAddPendingTask = document.createElement('div');
    buttonAddPendingTask.classList.add('addPendingTask');
    buttonAddPendingTask.innerText = 'Do Task'

    const buttonEditPendingTask = document.createElement('div');
    buttonEditPendingTask.classList.add('editPendingTask');
    buttonEditPendingTask.innerText = 'Edit';


    const buttonEliminarTarea = document.createElement('div');
    buttonEliminarTarea.classList.add('eliminarPendingTask');
    buttonEliminarTarea.innerText = 'Delete';


    // Editt task 
    const inputName = document.createElement('input')
    inputName.classList.add('inputName')
    const inputDescription = document.createElement('input')
    inputDescription.classList.add('inputDescription')

    const saveEdit = document.createElement('div');
    saveEdit.classList.add('editPendingTask')
    saveEdit.innerText = 'Save'

    const cancelEdit = document.createElement('div');
    cancelEdit.classList.add('eliminarPendingTask')
    cancelEdit.innerText = 'Cancel'

    pendingTask.appendChild(pendingTaskName)
    pendingTask.appendChild(pendingTaskDescription);
    pendingTask.appendChild(options);
    options.appendChild(buttonAddPendingTask);
    options.appendChild(buttonEditPendingTask)
    options.appendChild(buttonEliminarTarea);

    // agregando la pending Task al nodo
    node = pendingClass.childNodes;

    pendingTask.addEventListener('dragstart', e => e.dataTransfer.setData('id', e.target.id))

    pendingTask.addEventListener('dragover', e => e.preventDefault())


    pendingTask.addEventListener('drop', e => {
        let newTask, oldTask, newTaskPosition, oldTaskPosition;

        for (let i = 0; i < node.length; i++) {
            if (e.dataTransfer.getData('id') === node[i].id) {
                newTask = node[i];
                newTaskPosition = i;
            }
        }
        for (let i = 0; i < node.length; i++) {
            if (e.target.id === node[i].id) {
                oldTask = node[i];
                oldTaskPosition = i
            }
        }
        if (newTaskPosition > oldTaskPosition) pendingClass.insertBefore(newTask, oldTask);
        else pendingClass.insertBefore(newTask, oldTask.nextSibling)
    })

    buttonAddPendingTask.addEventListener('click', (e) => {
        e.preventDefault();
        let doingClick = listItems.find(task => task.name === e.path[2].firstChild.textContent)

        listDoingItems.push({ name: doingClick.name, description: doingClick.description, id: `task-${Math.floor(Math.random() * 300)}` });
        localStorage.setItem('myDoingList', JSON.stringify(listDoingItems));
        createDoingTask(listDoingItems)
        pendingClass.removeChild(pendingTask)
        deletePendingTask(doingClick.id);
        location.reload();
    })

    buttonEditPendingTask.addEventListener('click', (e) => {

        e.preventDefault();
        const task = e.path[2]
        const name = e.path[2].childNodes[0];
        const description = e.path[2].childNodes[1];
        const buttons = e.path[2].childNodes[2];
        task.removeChild(name)
        task.removeChild(description)
        task.removeChild(buttons)

        inputName.value = name.textContent;
        inputDescription.value = description.textContent;
        task.appendChild(inputName);
        task.appendChild(inputDescription);
        task.appendChild(saveEdit);
        task.appendChild(cancelEdit)

        saveEdit.addEventListener('click', (e) => {
            console.log('Editando...');
        })
        cancelEdit.addEventListener('click', (e) => {
            location.reload();
        })
    })

    buttonEliminarTarea.addEventListener('click', (e) => {

        let doingClick = listItems.find(task => task.name === e.path[2].firstChild.textContent);
        pendingClass.removeChild(pendingTask);
        deletePendingTask(doingClick.id);
        location.reload();

    })

    const deletePendingTask = (id) => {
        const newListItems = listItems.filter(task => task.id != id);
        listItems = [...newListItems];
        localStorage.setItem('myTodoList', JSON.stringify(listItems));
    }



}