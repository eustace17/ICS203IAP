

document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.querySelector('form');
    const input = document.querySelector('input[name="newtask"]');
    const submitButton = document.querySelector('button[type="submit"]');
    const taskList = document.getElementById('taskList');

   
    submitButton.disabled = true;

   
    input.addEventListener('input', function() {
        submitButton.disabled = !this.value.trim();
    });

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        
        if (taskText) {
           
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            
            
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;
            
            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });
            
           
            taskItem.appendChild(taskTextSpan);
            taskItem.appendChild(deleteButton);
            
           
            taskList.appendChild(taskItem);
            
            
            input.value = '';
            submitButton.disabled = true;
        }
    });
});
