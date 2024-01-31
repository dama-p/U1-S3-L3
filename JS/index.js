const form = document.querySelector("form");
const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList")


const addTask = function () {
    const taskText = newTask.value
    const li = document.createElement("li");
    li.innerText = taskText;
    taskList.appendChild(li);
}

newTask.onclick = addTask()