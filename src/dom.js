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

export default createTodoDiv;