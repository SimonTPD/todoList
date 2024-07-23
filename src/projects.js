import {
    createTodoDiv,
    createSidebarProjectLi,
    appendDOMElementToMainPage,
    appendDOMElementToProjectSidebar,
    clearMainDiv,
    createAddTodoDiv,
} 
from './dom.js';
import{
    testUser,
}
from './index.js';

function loadAllProjectLisOnSidebar(){
    const projectList = testUser.getAllProjects();
    const sidebarProjectLis = []

    for(let i = 0; i < projectList.length; i++){
        sidebarProjectLis.push(addProjectLiToSidebar(projectList[i]));
    }

    return sidebarProjectLis;
}

function addProjectLiToSidebar(project){
    //Type checks
    if((project instanceof Object) === false){
        console.log("Project needs to be an object!");
        return undefined;
    }
    if(project.hasOwnProperty("isProject") === false){
        console.log("This function only accepts project objects!");
        return undefined;
    }

    const sidebarProjectLi = createSidebarProjectLi(project.getTitle());
    appendDOMElementToProjectSidebar(sidebarProjectLi);

    return sidebarProjectLi;
}

function loadProject(project){
    //Type checks
    if((project instanceof Object) === false){
        console.log("Project needs to be an object!");
        return undefined;
    }
    if(project.hasOwnProperty("isProject") === false){
        console.log("This function only accepts project objects!");
        return undefined;
    }
    
    clearMainDiv();
    const projectTodos = project.getAllTodos();
    for(let i = 0; i < projectTodos.length; i++){
        appendDOMElementToMainPage(createTodoDiv(projectTodos[i]));
    }
    appendDOMElementToMainPage(createAddTodoDiv());
}

export {
    loadAllProjectLisOnSidebar,
    addProjectLiToSidebar,
    loadProject,
};