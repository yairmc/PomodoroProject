import fTask from "./fTask.js";

export default function createFinishTask(finish) {
    const finishClass = document.querySelector('#finishClass');
    finishClass.innerHTML = '';
    finish.forEach(item => {
        fTask(item);
    });
}