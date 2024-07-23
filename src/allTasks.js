import {
    createTodoDiv,
    appendDOMElementToMainPage,
    clearMainDiv,
} 
from './dom.js';
import {
    testUser,
}
from './index.js'

function loadAllTasks(){
    clearMainDiv();

    const userProjects = testUser.getAllProjects();

    for(let i = 0; i < userProjects.length; i++){
            const projectTodos = userProjects[i].getAllTodos();
            for(let j = 0; j < projectTodos.length; j++){
                appendDOMElementToMainPage(createTodoDiv(projectTodos[j]));
            }
    }
}

export default loadAllTasks;