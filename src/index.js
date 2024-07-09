/*Imports*/
import './style.css';
import {
    createProject,
    createTodoItem,
    createUser,
} 
from './todo.js';
import loadAllTasks from './allTasks.js';
import {
    loadAllProjectLisOnSidebar,
    addProjectLiToSidebar,
    loadProject,
} 
from './projects.js'

/*Test items and project*/
let testItem = createTodoItem("Finish this website",
"Lots of things to do here, no time to rest. Go!",
"07/14/2024",
4,
false,
"Interesting notes"
);

let testItem2 = createTodoItem("Relax",
    "You deserve it, just take a break",
    "07/15/2024",
    1,
    false,
    ""
);

let testItem3 = createTodoItem("Exercise",
    "Exercise daily to stay in shape",
    "07/07/2025",
    2,
    true,
    "Walk twice, cycle three times, calisthenics three times, PT and stretch 3 times"
    );
    
let testItem4 = createTodoItem("Go to France",
    "Time for a visit to enjoy the summer in Hyeres",
    "08/01/2025",
    3,
    false,
    "Book plane ticket, talk to mom."
);

let testProject = createProject("New Project");
testProject.setTitle("Website");
testProject.addTodo(testItem2, 0);
testProject.addTodo(testItem, 1);

let testProject2 = createProject("Personal");
testProject2.addTodo(testItem3, 0);
testProject2.addTodo(testItem4, 1);

let testUser = createUser("Simon");
testUser.addProject(testProject2, 0);
testUser.addProject(testProject, 1);

/*Main*/
loadAllTasks(testUser);
const projectSidebarLis = loadAllProjectLisOnSidebar(testUser);

/*Event listeners*/
const allTasksButton = document.querySelector("div.sidebar > ul > li#all-tasks");
allTasksButton.addEventListener("click", 
() => {
    loadAllTasks(testUser);
}
);

const addProjectButton = document.querySelector("div.sidebar > ul > li#add-project");
addProjectButton.addEventListener("click",
(event) => {
    let newProject = createProject("New Project");
    const addProjectReturn = 
    testUser.addProject(newProject, testUser.getAllProjects().length);
    if(addProjectReturn === undefined){
        console.log(`Problem adding a new project in the sidebar (add project to the user). Check console log for error message.`);
        return undefined;
    }

    const newProjectLi = addProjectLiToSidebar(newProject);
    if(newProjectLi === undefined){
        console.log(`Problem adding a new project in the sidebar (add project to the sidebar). Check console log for error message.`);
        return undefined;
    }

    newProjectLi.addEventListener("click", 
    (event) => {
        loadProject(
            testUser.getProject(
                testUser.hasProject(event.target.textContent)
            )
        );
    }
    );
}
);

for(let i = 0; i < projectSidebarLis.length; i++){
    console.log(testUser.getProject(testUser.hasProject(projectSidebarLis[i].textContent)).getTitle());
    projectSidebarLis[i].addEventListener("click",
        (event) => {
            loadProject(
                testUser.getProject(
                    testUser.hasProject(event.target.textContent)
                )
            );          
        }
    );
}