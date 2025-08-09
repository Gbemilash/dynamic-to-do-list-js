document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new li and set textContent
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button and set properties
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Assign onclick event to remove task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to li and li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add event listener to addButton on 'click'
  addButton.addEventListener('click', addTask);

  // Add event listener to taskInput on 'keypress' for Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
