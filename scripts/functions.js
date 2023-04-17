import { saveTask, loadTasks, deleteTask, updateTask } from "./api.js";

const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");

function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function addNewTask() {
  const task = myInput.value.trim();
  myInput.value = "";
  if (task === "") {
    alert("Введіть текст!");
    return;
  }
  addTaskToDB(task);
}

function createLi({ text, isDone = false, id }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.dataset.id = id;
  if (isDone) liEl.classList.add("checked");
  myUL.appendChild(liEl);
  addCloseButton(liEl);
}

function handleTaskBehaviour({ target }) {
  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
    updateTask(target.dataset.id, target.classList.contains("checked"));
  } else if (target.classList.contains("close")) {
    target.parentNode.remove();
    deleteTask(target.parentNode.dataset.id);
  }
}

function addTaskToDB(text) {
  saveTask({ text })
    // .then((res) => res.json())
    .then(({ data }) => {
      createLi(data);
    });
}

function fillTasksList() {
  loadTasks().then((tasks) => {
    tasks.forEach((task) => {
      createLi(task);
    });
  });
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
