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
    li.style = "cursor: pointer";

    li.onclick = function () {
        li.classList.toggle("strike")
        
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);
    deleteBtn.classList.add("delete")
}

function deleteTask(e) {
    const task = e.currentTarget.parentElement;
    taskList.removeChild(task);
}



