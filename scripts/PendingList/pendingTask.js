// Crea el contenedor de la tarea pendiente 
import pTask from './task.js'

export default function createPendingTask(todoPending) {
    const pendingTask=document.querySelector('#pendingClass');
    pendingTask.innerHTML="";
    
    todoPending.forEach(item => {
        pTask(item);
    })
}