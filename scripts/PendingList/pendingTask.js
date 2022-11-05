// Crea el contenedor de la tarea pendiente 

// lista del local storage
let listItems = localStorage.getItem('myTodoList') ? JSON.parse(localStorage.getItem('myTodoList')) : [];
let node;

export default function createPendingTask(todoPending) {
    const pendingClass = document.querySelector('#pendingClass');


    pendingClass.innerHTML = "";
    todoPending.forEach(item => {

        // Creando la tarea pendinete 
        const pendingTask = document.createElement('div');
        pendingTask.classList.add('pendingTask');
        pendingTask.setAttribute('id', Math.floor(Math.random() * 300))
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
        pendingTask.appendChild(pendingTaskName)
        pendingTask.appendChild(pendingTaskDescription);

        // agregando la pending Task al nodo
        node = pendingClass.childNodes;

        pendingTask.addEventListener('dragstart', e => {
            e.dataTransfer.setData('id', e.target.id)
        })

        pendingTask.addEventListener('dragover', e => {
            e.preventDefault();
        })

        pendingTask.addEventListener('drop', e => {
            // data de la Actual 
            let newTask;
            let oldTask;
            let newTaskPosition;
            let oldTaskPosition;

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
            if (newTaskPosition > oldTaskPosition) {
                console.log('mas');
                pendingClass.insertBefore(newTask, oldTask);
            }
            else {
                console.log('menos');
                pendingClass.insertBefore(newTask, oldTask.nextSibling)
            }

        })


    })
}