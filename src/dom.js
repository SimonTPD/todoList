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

    return todoDiv;
}

function createSidebarProjectLi(projectName){
    //Type check
    if(typeof projectName !== "string"){
        console.log("Project name must be a string!");
        return undefined;
    }

    const projectLi = document.createElement("li");
    projectLi.textContent = projectName;

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


export {
    createTodoDiv,
    createSidebarProjectLi,
    appendDOMElementToMainPage,
    appendDOMElementToProjectSidebar,
    clearMainDiv,
}