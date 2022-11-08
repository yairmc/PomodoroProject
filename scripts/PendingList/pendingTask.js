// Crea el contenedor de la tarea pendiente 
import pTask from './task.js'

export default function createPendingTask(todoPending) {
    const pendingClass = document.querySelector('#pendingClass');
    pendingClass.innerHTML = "";
    todoPending.forEach(item => {
        pTask(item);
    })
}