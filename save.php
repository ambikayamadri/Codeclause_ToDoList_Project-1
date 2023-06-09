<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $todoText = $_POST['todoText'];
    $priorityValue = $_POST['priorityValue'];

    // Save the to-do item to a file or database
    saveTodoItem($todoText, $priorityValue);
}

function saveTodoItem($text, $priority) {
    // Implement your saving logic here (e.g., write to a file or database)
    // Example using file storage:
    $data = $text . '|' . $priority . "\n";
    file_put_contents('todos.txt', $data, FILE_APPEND);
}
?>