import './style.css';
import {
    createProject,
    createTodoItem,
} 
from './todo.js';
import createTodoItemDiv from './dom.js'

let testItem = createTodoItem("Finish this website",
"Lots of things to do here, no time to rest. Go!",
"05/24/2025",
4,
false,
"Interesting notes"
);
const testItemDiv = createTodoItemDiv(testItem);
document.querySelector("div.main").appendChild(testItemDiv);

let testItem2 = createTodoItem("Relax",
    "You deserve it, just take a break",
    "07/15/2025",
    1,
    false,
    ""
);
const testItem2Div = createTodoItemDiv(testItem2);
document.querySelector("div.main").appendChild(testItem2Div);

let testProject = createProject("New Project");
testProject.setTitle("Project 1");
console.log(testProject.getTitle());
testProject.addTodo(testItem2, 0);
testProject.addTodo(testItem, 1);
testProject.removeTodo(0);
testProject.getAllTodos()[0].displayItemInfo();
