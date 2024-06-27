document.getElementById('addTaskButton').addEventListener('click', function() {
    addTaskFromInput();
  });
  
  document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTaskFromInput();
    }
  });
  
  function addTaskFromInput() {
    const taskInput = document.getElementById('taskInput');
    const spiceLevel = document.getElementById('spiceLevel').value;
    const task = taskInput.value;
    if (task) {
      addTask(task, spiceLevel);
      taskInput.value = '';
    }
  }
  
  function addTask(task, spiceLevel) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = 'task-item';
  
    const taskName = document.createElement('span');
    taskName.className = 'task-name';
    taskName.textContent = task;
  
    const taskControls = document.createElement('div');
    taskControls.className = 'task-controls';
  
    const spiceIndicator = document.createElement('span');
    spiceIndicator.innerHTML = '🌶️'.repeat(spiceLevel);
  
    const magicWandButton = document.createElement('button');
    magicWandButton.innerHTML = '🪄';
  
    taskControls.appendChild(spiceIndicator);
    taskControls.appendChild(magicWandButton);
  
    li.appendChild(taskName);
    li.appendChild(taskControls);
    taskList.appendChild(li);
  }