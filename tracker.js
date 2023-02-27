let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText.length === 0) {
    return;
  }

  const newTask = {
    text: newTaskText,
    completed: false,
  };

  tasks.push(newTask);
  newTaskInput.value = '';

  renderTaskList();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

function toggleTaskCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTaskList();
}

let sortAscending = true;
const filterButton = document.querySelector('.filtr1');
function sortTasks() {
  tasks.sort((a, b) =>
    sortAscending ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text),
  );
  sortAscending = !sortAscending;
  renderTaskList();

  const sortButton = document.getElementById('sort-button');
  // sortButton.textContent = sortAscending
  //   ? 'Сортировать по алфавиту (A-Z)'
  //   : 'Сортировать по алфавиту (Z-A)';
  console.log(filterButton);
  filterButton.classList.toggle('filtered');
}

function renderTaskList() {
  const taskList = document.getElementById('task-list');

  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input class='checkbox' type="checkbox" ${
          task.completed ? 'checked' : ''
        } onclick="toggleTaskCompleted(${i})">
        ${task.text}
      </label>
      <button class='delete' onclick="removeTask(${i})"><img class='filter-img' src='./IMG/ik3.svg'/></button>
    `;

    if (task.completed) {
      li.classList.add('completed');
    }

    taskList.appendChild(li);
  }
}

renderTaskList();
