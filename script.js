document.getElementById('create-task-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-due-date').value;
    const assignee = document.getElementById('task-assignee').value;
    
    const taskList = document.getElementById('taskList');
    const taskCard = document.createElement('div');
    taskCard.className = 'card task-item mb-2';
    
    const today = new Date().toISOString().split('T')[0];
    const isOverdue = dueDate < today;
    
    taskCard.innerHTML = `
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start">
                <div class="task-content">
                    <div class="task-title fw-bold">${title}</div>
                    <div class="task-description">${desc}</div>
                    <div class="task-date ${isOverdue ? 'text-danger fw-bold' : ''}">
                        Due: ${dueDate} ${isOverdue ? '(Overdue!)' : ''}
                    </div>
                    <div class="task-assignee text-muted">Assigned to: ${assignee}</div>
                </div>
                <div class="task-actions">
                    <button class="btn btn-sm btn-success mark-complete-btn">Complete</button>
                </div>
            </div>
        </div>
    `;
    
    taskCard.querySelector('.mark-complete-btn').addEventListener('click', function() {
        taskCard.style.opacity = '0.5';
        this.textContent = 'Done!';
        this.disabled = true;
    });
    
    taskList.appendChild(taskCard);
    this.reset();
});
