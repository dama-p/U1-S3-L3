const form = document.querySelector("form");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList")

form.addEventListener("submit", function (e) {
    e.preventDefault();
})



function addTask() {
    const taskText = taskInput.value
    const li = document.createElement("li");
    taskList.appendChild(li);
    li.innerText = taskText;
}


