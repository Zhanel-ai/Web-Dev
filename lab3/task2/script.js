const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    // create li
    const li = document.createElement("li");

    // create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("done");
        } else {
            li.classList.remove("done");
        }
    });

    // create span for text
    const span = document.createElement("span");
    span.textContent = taskText;

    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // append elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});