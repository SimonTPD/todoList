import {
    createTodoDiv
} from './dom.js';

function loadAllTasks(user){
    //Type checks
    if((user instanceof Object) === false){
        console.log("User needs to be an object!");
        return undefined;
    }
    if(user.hasOwnProperty("isUser") === false){
        console.log("This function only accepts user objects!");
        return undefined;
    }

    const divMain = document.querySelector("div.main");
    const userProjects = user.getAllProjects();

    for(let i = 0; i < userProjects.length; i++){
            const projectTodos = userProjects[i].getAllTodos();
            for(let j = 0; j < projectTodos.length; j++){
                divMain.appendChild(createTodoDiv(projectTodos[j]));
            }
    }
}

export default loadAllTasks;