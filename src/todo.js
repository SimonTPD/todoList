const MAX_TITLE_LENGTH = 60;
const MAX_DESC_LENGTH = 500;
const MAX_NOTES_LENGTH = 500;
const MAX_PRIORITY = 4;
const MIN_ARGUMENTS_CREATETODOITEM = 5;
const MAX_USERNAME_LENGTH = 20;

function createTodoItem(title, desc, dueDate, priority, status, notes = ""){
    //Number of arguments check
    if(arguments.length < MIN_ARGUMENTS_CREATETODOITEM){
        console.log(`This function needs at least ${MIN_ARGUMENTS_CREATETODOITEM} arguments!`);
        return undefined;
    }
    
    //Type checks
    if(typeof title !== "string"){
        console.log("Title must be a string!");
        return undefined;
    }
    if(typeof desc !== "string"){
        console.log("Description must be a string!");
        return undefined;
    }
    if(typeof dueDate !== "string"){
        console.log("Due date must be a string!");
        return undefined;
    }
    if(typeof priority !== "number"){
        console.log("Priority must be a number!");
        return undefined;
    }
    if(typeof status !== "boolean"){
        console.log("Status must be a boolean!");
        return undefined;
    }
    if(typeof notes !== "string"){
        console.log("Notes must be a string!");
        return undefined;
    }

    //Data checks
    if(title.length === 0){
        console.log("Title must not be empty!");
        return undefined;
    }
    if(title.length > MAX_TITLE_LENGTH){
        console.log("Title is too long!");
        return undefined;
    }
    if(desc.length > MAX_DESC_LENGTH){
        console.log("Description is too long!");
        return undefined;
    }
    if(dueDate.length === 0){
        console.log("Due date must not be empty");
        return undefined;
    }
    if(dueDate.split("/").length !== 3){
        console.log("Invalid date! Format: \"mm/dd/yyyy\"");
        return undefined;
    }
    if(priority < 1){
        console.log("Priorirty is too low!");
        return undefined;
    }
    if(priority > MAX_PRIORITY){
        console.log("Priorirty is too high!");
        return undefined;
    }
    if(notes.length > MAX_NOTES_LENGTH){
        console.log("Notes are too long!");
        return undefined;
    }
    
    //Private variables
    let itemTitle = title;
    let itemDesc = desc;
    let itemDueDate = dueDate;
    let itemPriority = priority;
    let itemStatus = status;
    let itemNotes = notes;

    //Methods
    const isTodoItem = () => true;

    function displayItemInfo(){
        console.log(`Title: ${itemTitle}`);
        console.log(`Description: ${itemDesc}`);
        console.log(`Due Date: ${itemDueDate}`);
        console.log(`Priority: ${itemPriority}`);
        console.log(`Status: ${itemStatus ? "Done": "Not done"}`);
        console.log(`Notes: ${itemNotes}`);                        
    }

    const getTitle = () => itemTitle;

    const getDesc = () => itemDesc;

    const getDueDate = () => itemDueDate;

    const getPriority = () => itemPriority;

    const getStatus = () => itemStatus;

    const getNotes = () => itemNotes;

    const setTitle = 
    (newTitle) => {
        if(typeof newTitle !== "string"){
            console.log("Title must be a string!");
            return undefined;
        }
        if(newTitle.length === 0){
            console.log("Title must not be empty!");
            return undefined;
        }
        if(newTitle.length > MAX_TITLE_LENGTH){
            console.log("Title is too long!");
            return undefined;
        }        
        itemTitle = newTitle;
    };

    const setDesc = 
    (newDesc) => {
        if(typeof newDesc !== "string"){
            console.log("Description must be a string!");
            return undefined;
        }
        if(newDesc.length > MAX_DESC_LENGTH){
            console.log("Description is too long!");
            return undefined;
        }
        itemDesc = newDesc;
    };
    
    const setDueDate = 
    (newDueDate) => {
        if(typeof newDueDate !== "string"){
            console.log("Due date must be a string!");
            return undefined;
        }
        if(newDueDate.length === 0){
            console.log("Due date must not be empty");
            return undefined;
        }
        if(newDueDate.split("/").length !== 3){
            console.log("Invalid date! Format: \"mm/dd/yyyy\"");
            return undefined;
        }
        itemDueDate = newDueDate;
    };
    
    const setPriority = 
    (newPriority) => {
        if(typeof newPriority !== "number"){
            console.log("Priority must be a number!");
            return undefined;
        }
        if(newPriority < 1){
            console.log("Priorirty is too low!");
            return undefined;
        }
        if(newPriority > MAX_PRIORITY){
            console.log("Priorirty is too high!");
            return undefined;
        }
        itemPriority = newPriority;
    };
    
    const setStatus = 
    (newStatus) => {
        if(typeof newStatus !== "boolean"){
            console.log("Status must be a boolean!");
            return undefined;
        }
        itemStatus = newStatus;
    }

    const setNotes = 
    (newNotes) => {
        if(typeof newNotes !== "string"){
            console.log("Notes must be a string!");
            return undefined;
        }
        if(newNotes.length > MAX_NOTES_LENGTH){
            console.log("Notes are too long!");
            return undefined;
        }

        itemNotes = newNotes;
    }

    return {
        isTodoItem,
        displayItemInfo,
        getTitle,
        getDesc,
        getDueDate,
        getPriority,
        getStatus,
        getNotes,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        setStatus,
        setNotes,
    };
}

function createProject(title){
    //Type check
    if(typeof title !== "string"){
        console.log("Title must be a string!");
        return undefined;
    }

    //Data check
    if(title.length === 0){
        console.log("Title must not be empty!");
        return undefined;
    }
    if(title.length > MAX_TITLE_LENGTH){
        console.log("Title is too long!");
        return undefined;
    }

    //Private variables
    let projectTitle = title;
    let projectTodos = [];

    //Methods
    const isProject = () => true;

    const getTitle = () => projectTitle;

    const setTitle = (newTitle) => {
        if(typeof newTitle !== "string"){
            console.log("Title must be a string!");
            return undefined;
        }
        if(newTitle.length === 0){
            console.log("Title must not be empty!");
            return undefined;
        }
        if(newTitle.length > MAX_TITLE_LENGTH){
            console.log("Title is too long!");
            return undefined;
        }
        
        projectTitle = newTitle;
    };

    const addTodo = (todo, index) => {
        if((todo instanceof Object) === false){
            console.log("Todo item must be an object!");
            return undefined;
        }
        if((todo.hasOwnProperty("isTodoItem")) === false){
            console.log("This function only accepts todo item objects!");
            return undefined;
        }
        if(typeof index !== "number"){
            console.log("Index must be a number!");
            return undefined;
        }
        if(index < 0){
            console.log("Index must be > 0!");
            return undefined;
        }
        if(index > projectTodos.length){
            console.log("Index must not be greater than number of todos in project!");
            return undefined;
        }
        projectTodos.splice(index, 0, todo);
    }

    const removeTodo = (index) => {
        if(typeof index !== "number"){
            console.log("Index must be a number!");
            return undefined;
        }
        if(index < 0){
            console.log("Index must be > 0!");
            return undefined;
        }
        if(index > projectTodos.length - 1){
            console.log("Index must not be greater than number of todos in project - 1!");
            return undefined;
        }
        projectTodos.splice(index, 1);
    }

    const getTodo = (index) => {
        if(typeof index !== "number"){
            console.log("Index must be a number!");
            return undefined;
        }
        if(index < 0){
            console.log("Index must be > 0!");
            return undefined;
        }
        if(index > projectTodos.length - 1){
            console.log("Index must not be greater than number of todos in project - 1!");
            return undefined;
        }
        return projectTodos[index]; 
    }

    const getAllTodos = () => projectTodos;

    //If more arguments than the title, add them as todos to the project
    if(arguments.length > 1){
        for(let i = 1; i < arguments.length; i++){
            addTodo(arguments[i], projectTodos.length);
        }
    }

    return {
        isProject,
        getTitle,
        setTitle,
        addTodo,
        removeTodo,
        getTodo,
        getAllTodos,
    }
}

function createUser(name){
    //Type check
    if(typeof name !== "string"){
        console.log("Name must be a string!");
        return undefined;
    }

    //Data check
    if(name.length === 0){
        console.log("Name must not be empty!");
        return undefined;
    }
    if(name.length > MAX_USERNAME_LENGTH){
        console.log("Name is too long!");
        return undefined;
    }

    //Private variables
    let userName = name;
    let userProjects = [];


    //Methods
    const isUser = () => true;

    const getName = () => userName;

    const setName = (newName) => {
        if(typeof newName !== "string"){
            console.log("Name must be a string!");
            return undefined;
        }
        if(newName.length === 0){
            console.log("Name must not be empty!");
            return undefined;
        }
        if(newName.length > MAX_USERNAME_LENGTH){
            console.log("Name is too long!");
            return undefined;
        }
        
        userName = newName;
    };

    const hasProject = (projectTitle) => {
        if(typeof projectTitle !== "string"){
            console.log("Project title must be a string!");
            return undefined;
        }
        if(projectTitle.length === 0){
            console.log("Project title must not be empty!");
            return undefined;
        }
        if(projectTitle.length > MAX_TITLE_LENGTH){
            console.log("Project title is too long");
            return undefined;
        }

        let foundProject = false;
        let i = 0;
        while(i < userProjects.length && !foundProject){
            if(userProjects[i].getTitle() === projectTitle) foundProject = true;
            i++;
        }

        if(foundProject) return i - 1;
        else return -1;
    }

    const addProject = (project, index) => {
        if((project instanceof Object) === false){
            console.log("Project must be an object!");
            return undefined;
        }
        if((project.hasOwnProperty("isProject")) === false){
            console.log("This function only accepts project objects!");
            return undefined;
        }
        if(typeof index !== "number"){
            console.log("Index must be a number!");
            return undefined;
        }
        if(index < 0){
            console.log("Index must be > 0!");
            return undefined;
        }
        if(index > userProjects.length){
            console.log("Index must not be greater than number of projects!");
            return undefined;
        }
        if(hasProject(project.getTitle()) > -1){
            console.log("Project already exists!");
            return undefined;
        }

        userProjects.splice(index, 0, project);
        return 0;        
    }

    const appendProject = (project) => {
        addProject(project, userProjects.length);
    }

    const removeProject = (index) => {
        if(typeof index !== "number"){
            console.log("Index must be a number!");
            return undefined;
        }
        if(index < 0){
            console.log("Index must be > 0!");
            return undefined;
        }
        if(index > userProjects.length - 1){
            console.log("Index must not be greater than number of projects - 1!");
            return undefined;
        }
        userProjects.splice(index, 1);
    }

    const getProject = (index) => {
        if(typeof index !== "number"){
            console.log("Index must be a number!");
            return undefined;
        }
        if(index < 0){
            console.log("Index must be > 0!");
            return undefined;
        }
        if(index > userProjects.length - 1){
            console.log("Index must not be greater than number of projects - 1!");
            return undefined;
        }
        return userProjects[index]; 
    }

    const getProjectByTitle = (projectTitle) => {
        if(typeof projectTitle !== "string"){
            console.log("Project title must be a string!");
            return undefined;
        }
        if(projectTitle.length === 0){
            console.log("Project title must not be empty!");
            return undefined;
        }
        if(projectTitle.length > MAX_TITLE_LENGTH){
            console.log("Project title is too long");
            return undefined;
        }
        
        for(let i = 0; i < userProjects.length; i++){
            if(userProjects[i].getTitle() === projectTitle){
                return userProjects[i];
            }
        }
    }

    const getAllProjects = () => userProjects;

    return {
        isUser,
        getName,
        setName,
        hasProject,
        addProject,
        appendProject,
        removeProject,
        getProject,
        getProjectByTitle,
        getAllProjects,
    }
}

export{
    createTodoItem,
    createProject,
    createUser,
    MAX_USERNAME_LENGTH,
};