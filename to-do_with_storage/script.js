const input = document.getElementById("list");

const list = document.getElementById("taskList");

const button = document.getElementById("addTask");
const deleteBtn = document.getElementById("removeTask");

// Load saved tasks

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach(addTaskToUI);

button.addEventListener("click", () => {
  const task = input.value;

  if (!task) return;

  savedTasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(savedTasks));

  addTaskToUI(task);

  input.value = "";
});

function addTaskToUI(task) {
  const li = document.createElement("li");

  li.textContent = task;

  list.appendChild(li);
}

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("task"); // clear from localStorage
  list.innerHTML = ""; // clear
});
