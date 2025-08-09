document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false to avoid saving again
  }

  // Add task function with optional save parameter
  function addTask(taskText, save = true) {
    taskText = taskText.trim();
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    removeBtn.onclick = function () {
      taskList.removeChild(li);
      if (save) {
        removeTaskFromStorage(taskText);
      }
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      saveTaskToStorage(taskText);
    }

    taskInput.value = '';
  }

  // Save a task to Local Storage
  function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Event listeners
  addButton.addEventListener('click', function () {
    addTask(taskInput.value);
  });

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
    }
  });

  // Load existing tasks on DOM load
  loadTasks();
});


