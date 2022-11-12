import pTask from './task.js'

// Funcion que crea genera la lista de tareas pendientes
export default function createPendingTask(todoPending) {
    const pendingClass=document.querySelector('#pendingClass');
    pendingClass.innerHTML="";
    
    todoPending.forEach(item => {
        pTask(item);
    })
}