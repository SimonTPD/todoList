import {
    createSidebarProjectLi,
} from './dom.js'

function loadAllProjects(user){
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
    const sidebarProjectsUl = document.querySelector("div.sidebar > ul#projects");

    for(let i = 0; i < projectList.length; i++){
        const projectLi = createSidebarProjectLi(projectList[i].getTitle());
        sidebarProjectsUl.appendChild(projectLi);
    }
}

export default loadAllProjects;