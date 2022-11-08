// Crea el contenedor de la tarea realizando
import dTask from './dTask.js'

export default function createDoingTask(todoDoing) {
    const doingClass = document.querySelector('#doingClass');
    doingClass.innerHTML = "";
    todoDoing.forEach(item => {
        dTask(item);
    });
}