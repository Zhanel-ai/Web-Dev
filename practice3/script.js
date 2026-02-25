const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const todoList = document.querySelector("#task-list");
const filterButtons = document.querySelectorAll(".filters button");

let currentFilter = "all";

function createTask(text) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function applyFilter() {
    const tasks = todoList.querySelectorAll("li");

    tasks.forEach(task => {
        const isCompleted = task.classList.contains("is-completed");

        let shouldShow = true;

        if (currentFilter === "active") {
            shouldShow = !isCompleted;
        }

        if (currentFilter === "completed") {
            shouldShow = isCompleted;
        }

        task.classList.toggle("is-hidden", !shouldShow);
    });
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = createTask(text);
    todoList.appendChild(newTask);

    taskInput.value = "";

    applyFilter();
});

todoList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.tagName === "BUTTON") {
        todoList.removeChild(li);
        applyFilter();
    }
});

todoList.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const li = e.target.closest("li");

        li.classList.toggle("is-completed", e.target.checked);

        applyFilter();
    }
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter;

        applyFilter();
    });
});