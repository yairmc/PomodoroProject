// Crea el contenedor de la tarea pendiente 
let listItems = localStorage.getItem('myTodoList') ? JSON.parse(localStorage.getItem('myTodoList')) : [];


export default function createPendingTask(todoPending) {
    const pendingClass = document.querySelector('#pendingClass');


    pendingClass.innerHTML = "";
    todoPending.forEach(item => {

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
        pendingTask.appendChild(pendingTaskDescription);

        let node = pendingClass.childNodes;

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
            let auxNewTask = newTask;

            let auxOldTask = oldTask;

            pendingClass.replaceChild(newTask, oldTask)
            pendingClass.insertBefore(auxOldTask, newTask);


            // const oldListItems=listItems;
            // const newListItems=

            // console.log(listItems);

        })
    })

}