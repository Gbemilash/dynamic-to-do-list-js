document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      // Create a new li element and set its textContent to taskText
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a new button element for removing the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';

      // Assign an onclick event to the remove button to remove the li element from taskList
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Append the remove button to the li element
      li.appendChild(removeBtn);

      // Append the li to taskList
      taskList.appendChild(li);

      // Clear the task input field
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  }

  // Attach an event listener to addButton that calls addTask when clicked
  addButton.addEventListener('click', addTask);

  // Attach an event listener to taskInput for the 'keypress' event
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask


