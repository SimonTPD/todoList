import {
    createProject,
    MAX_USERNAME_LENGTH,
}
from './todo.js';
import {
    loadProject,
}
from './projects.js';
import{
    testUser,
}
from './index.js'
const DIV_MAIN = "div.main";
const PROJECT_SIDEBAR_UL = "div.sidebar > ul#projects";

function createTodoDiv(todo){
    //Type check
    if((todo instanceof Object) === false){
        console.log("Todo item must be an object!");
        return undefined;
    }
    if(todo.hasOwnProperty("isTodoItem") === false){
        console.log("This function only accepts todo items objects!");
        return undefined;
    }

    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h1");
    const todoDesc = document.createElement("p");
    const todoDueDate = document.createElement("p");
    const todoPriority = document.createElement("p");
    const todoStatus = document.createElement("p");
    const todoNotes = document.createElement("p");

    todoDiv.appendChild(todoTitle);
    todoDiv.appendChild(todoDesc);
    todoDiv.appendChild(todoDueDate);
    todoDiv.appendChild(todoPriority);
    todoDiv.appendChild(todoStatus);
    todoDiv.appendChild(todoNotes);

    todoTitle.textContent = todo.getTitle();
    todoDesc.textContent = todo.getDesc();
    todoDueDate.textContent = todo.getDueDate();
    todoPriority.textContent = todo.getPriority();
    todoPriority.textContent = todo.getStatus() ? "Done" : "Not done";
    todoNotes.textContent = todo.getNotes();

    todoDiv.classList.add("todo");

    return todoDiv;
}

function createSidebarProjectLi(projectName){
    //Type check
    if(typeof projectName !== "string"){
        console.log("Project name must be a string!");
        return undefined;
    }

    //Create project li
    const projectLi = document.createElement("li");
    projectLi.textContent = projectName;

    //Event listener
    projectLi.addEventListener("click", 
        (event) => {
            loadProject(
                testUser.getProject(
                    testUser.hasProject(event.target.textContent)
                )
            );
        }
    );
    return projectLi;
}

//element is the actual DOM element (Node)
//newParent is the CSS selector of the parent to which the element will be aded
function appendDOMElementToNewParent(element, newParent){
    //Type check
    if(Node.prototype.isPrototypeOf(element) === false){
        console.log("Element must be a node!");
        return undefined;
    }
    if(typeof newParent !== "string"){
        console.log("New parent must be a string!");
        return undefined;
    }
    if(newParent.length === 0){
        console.log("New parent must not be empty");
        return undefined;
    }

    const newParentDOMElement = document.querySelector(newParent);
    if (newParentDOMElement === null){
        console.log("No parent element with this CSS selector was found!");
        return undefined;
    }

    newParentDOMElement.appendChild(element);
    return 0;
}

function appendDOMElementToMainPage(element){
    if(appendDOMElementToNewParent(element, DIV_MAIN) === undefined){
        console.log("Error appending element to main page, check the console!");
        return undefined;
    }
}

function appendDOMElementToProjectSidebar(element){
    if(appendDOMElementToNewParent(element, PROJECT_SIDEBAR_UL) === undefined){
        console.log("Error appending element to main page, check the console!");
        return undefined;
    }
}

function clearMainDiv(){
    const mainDiv = document.querySelector(DIV_MAIN);
    for(let i = 0; i < mainDiv.children.length; i++){
        mainDiv.removeChild(mainDiv.children[i]);
        i--;
    }
}

function createSidebarProjectForm(){
    const sidebar = document.querySelector(PROJECT_SIDEBAR_UL);

    //Create form
    const projectForm = document.createElement("form");
    projectForm.classList.add("project-form");
    const formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "name");
    formInput.setAttribute("name", "name");
    formInput.setAttribute("placeholder", "Enter project name");
    formInput.setAttribute("maxlength", MAX_USERNAME_LENGTH);
    const formAdd = document.createElement("button");
    formAdd.setAttribute("type", "button");
    formAdd.textContent = "Add";
    const formCancel = document.createElement("button");
    formAdd.setAttribute("type", "button");
    formCancel.textContent = "Cancel";

    //Button event listeners
    formAdd.addEventListener("click", 
    (event) => {
        const formInput = document.querySelector("form.project-form > input");
        const projectName = formInput.value;
        testUser.appendProject(createProject(projectName));
        sidebar.removeChild(projectForm);
        appendDOMElementToProjectSidebar(createSidebarProjectLi(projectName));
    }
    );

    formCancel.addEventListener("click",
    (event) => {
        sidebar.removeChild(projectForm);
    }
    );

    //Link DOM elements to one another
    projectForm.appendChild(formInput);
    projectForm.append(formAdd);
    projectForm.append(formCancel);
    sidebar.appendChild(projectForm);
}

function createAddTodoDiv(){
    //Create elements
    const addTodoDiv = document.createElement("div");
    const addTodoP = document.createElement("p");
    addTodoP.textContent = "Add new task";
    const addTodoButton = document.createElement("button");
    addTodoButton.setAttribute("type", "button");
    addTodoButton.textContent = "X";

    //Event listener
    addTodoButton.addEventListener("click",
    (event) => {
        createAddTodoForm();
    }
    );

    //Link DOM elements to one another
    addTodoDiv.appendChild(addTodoP);
    addTodoDiv.appendChild(addTodoButton);

    return addTodoDiv;
}

function createAddTodoForm(){
    
}

export {
    createTodoDiv,
    createSidebarProjectLi,
    appendDOMElementToMainPage,
    appendDOMElementToProjectSidebar,
    clearMainDiv,
    createSidebarProjectForm,
    createAddTodoDiv,
}