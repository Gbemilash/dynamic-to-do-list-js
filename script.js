// Ensure the script runs after the full HTML document is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select relevant DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get trimmed task text from input
        const taskText = taskInput.value.trim();

        // Alert if task is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create new list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Set onclick to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item, then list item to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for add button click
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key in input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
