document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Mark task as completed
        li.onclick = function() {
            li.classList.toggle("completed");
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }

    // Add task on button click
    addTaskButton.addEventListener("click", addTask);

    // Add task on Enter key press
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});