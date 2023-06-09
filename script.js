document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var todoInput = document.getElementById('todo-input');
    var prioritySelect = document.getElementById('priority-select');
    var todoList = document.getElementById('todo-list');

    var todoText = todoInput.value;
    var priorityValue = prioritySelect.value;

    if (todoText !== '') {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<span>' + todoText + '</span><button class="delete">Delete</button>';
        todoList.appendChild(listItem);
        todoInput.value = '';

        // Save the to-do item
        saveTodoItem(todoText, priorityValue);
    }
});

document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        var listItem = e.target.parentNode;
        var todoText = listItem.firstChild.textContent;

        // Remove the to-do item
        listItem.remove();

        // Delete the to-do item from storage
        deleteTodoItem(todoText);
    }
});

// Retrieve and display stored to-do items on page load
window.addEventListener('load', function() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    var todoList = document.getElementById('todo-list');

    todos.forEach(function(todo) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<span>' + todo.text + '</span><button class="delete">Delete</button>';
        todoList.appendChild(listItem);
    });
});

function saveTodoItem(text, priority) {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    var todo = { text: text, priority: priority };
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodoItem(text) {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(function(todo) {
        return todo.text !== text;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}