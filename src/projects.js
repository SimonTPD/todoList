import {
    createTodoDiv,
    createSidebarProjectLi,
    appendDOMElementToMainPage,
    appendDOMElementToProjectSidebar,
    clearMainDiv,
} from './dom.js'

function loadAllProjectLisOnSidebar(user){
    //Type checks
    if((user instanceof Object) === false){
        console.log("User needs to be an object!");
        return undefined;
    }
    if(user.hasOwnProperty("isUser") === false){
        console.log("This function only accepts user objects!");
        return undefined;
    }

    const projectList = user.getAllProjects();
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
}

export {
    loadAllProjectLisOnSidebar,
    addProjectLiToSidebar,
    loadProject,
};