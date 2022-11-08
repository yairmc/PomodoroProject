export default function fTask(item){
    const finishClass= document.querySelector('#finishClass');

    finishClass.innerHTML+='';

    const finishTask=document.createElement('div');
    finishTask.classList.add('finishTask');

    finishClass.appendChild(finishTask);

    const finishTaskName=document.createElement('h3');
    finishTaskName.classList.add('finishNameTask');
    finishTaskName.innerText=item.name;
    
    const finishTaskDescription=document.createElement('h3');
    finishTaskDescription.classList.add('finishDescriptionTask');
    finishTaskDescription.innerText=item.description;

    finishTask.appendChild(finishTaskName);
    finishTask.appendChild(finishTaskDescription);

}