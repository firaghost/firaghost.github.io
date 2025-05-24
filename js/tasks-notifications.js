/**
 * Tasks and Notifications functionality for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Task checkbox functionality
    $('.task-check').on('change', function() {
        const $taskItem = $(this).closest('.task-item');
        
        if ($(this).is(':checked')) {
            $taskItem.find('.task-title').css('text-decoration', 'line-through');
            $taskItem.css('opacity', '0.6');
            
            // Show completion message
            showToast('Task marked as completed', 'success');
            
            // In a real application, this would send an AJAX request to update the task status
            // For demo purposes, we'll just add a timeout to reset the checkbox after 3 seconds
            setTimeout(function() {
                $taskItem.find('.task-title').css('text-decoration', 'none');
                $taskItem.css('opacity', '1');
                $taskItem.find('.task-check').prop('checked', false);
            }, 3000);
        } else {
            $taskItem.find('.task-title').css('text-decoration', 'none');
            $taskItem.css('opacity', '1');
        }
    });
    
    // Mark all notifications as read
    $('.card-actions button[title="Mark all as read"]').on('click', function() {
        $('.notification-item.unread').removeClass('unread');
        updateNotificationCount();
        showToast('All notifications marked as read', 'success');
    });
    
    // Add new task button
    $('.card-actions button[title="Add new task"]').on('click', function() {
        Swal.fire({
            title: 'Add New Task',
            html: `
                <form id="new-task-form" class="text-left">
                    <div class="form-group">
                        <label for="task-title">Task Title</label>
                        <input type="text" class="form-control" id="task-title" placeholder="Enter task title">
                    </div>
                    <div class="form-group">
                        <label for="task-due-date">Due Date</label>
                        <input type="date" class="form-control" id="task-due-date">
                    </div>
                    <div class="form-group">
                        <label for="task-priority">Priority</label>
                        <select class="form-control" id="task-priority">
                            <option value="high">High</option>
                            <option value="medium" selected>Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="task-case">Related Case</label>
                        <select class="form-control" id="task-case">
                            <option value="">Select a case</option>
                            <option value="1">Smith Enterprises Acquisition</option>
                            <option value="2">Williams Property Dispute</option>
                            <option value="3">Tech Solutions Patent Dispute</option>
                            <option value="4">State vs. Miller</option>
                        </select>
                    </div>
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: 'Add Task',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#26B99A',
            cancelButtonColor: '#6c757d',
            preConfirm: () => {
                const title = document.getElementById('task-title').value;
                if (!title) {
                    Swal.showValidationMessage('Task title is required');
                }
                return { 
                    title: title,
                    dueDate: document.getElementById('task-due-date').value,
                    priority: document.getElementById('task-priority').value,
                    case: document.getElementById('task-case').value
                };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // In a real application, this would send an AJAX request to create the task
                // For demo purposes, we'll just show a success message
                showToast('New task added successfully', 'success');
                
                // Add the new task to the UI (demo only)
                addDemoTask(result.value);
            }
        });
    });
    
    // View all tasks button
    $('.task-list').closest('.card-body').find('.btn-default').on('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'All Tasks',
            html: `
                <div class="text-left">
                    <p>In the live version, this would show all tasks with filtering and sorting options.</p>
                    <p>Tasks would be loaded from the database with pagination.</p>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Close',
            confirmButtonColor: '#26B99A'
        });
    });
    
    // View all notifications button
    $('.notification-list').closest('.card-body').find('.btn-default').on('click', function(e) {
        e.preventDefault();
        
        Swal.fire({
            title: 'All Notifications',
            html: `
                <div class="text-left">
                    <p>In the live version, this would show all notifications with filtering options.</p>
                    <p>Notifications would be loaded from the database with pagination.</p>
                </div>
            `,
            icon: 'info',
            confirmButtonText: 'Close',
            confirmButtonColor: '#26B99A'
        });
    });
    
    // Notification settings button
    $('.card-actions button[title="Notification settings"]').on('click', function() {
        Swal.fire({
            title: 'Notification Settings',
            html: `
                <form id="notification-settings-form" class="text-left">
                    <div class="form-group">
                        <label>Email Notifications</label>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="email-hearings" checked>
                            <label class="custom-control-label" for="email-hearings">Hearing Reminders</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="email-documents" checked>
                            <label class="custom-control-label" for="email-documents">Document Updates</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="email-deadlines" checked>
                            <label class="custom-control-label" for="email-deadlines">Deadline Alerts</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Push Notifications</label>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="push-hearings" checked>
                            <label class="custom-control-label" for="push-hearings">Hearing Reminders</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="push-documents" checked>
                            <label class="custom-control-label" for="push-documents">Document Updates</label>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" class="custom-control-input" id="push-deadlines" checked>
                            <label class="custom-control-label" for="push-deadlines">Deadline Alerts</label>
                        </div>
                    </div>
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: 'Save Settings',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#26B99A',
            cancelButtonColor: '#6c757d'
        }).then((result) => {
            if (result.isConfirmed) {
                showToast('Notification settings saved', 'success');
            }
        });
    });
    
    // Helper function to show toast notifications
    function showToast(message, type = 'info') {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        
        Toast.fire({
            icon: type,
            title: message
        });
    }
    
    // Helper function to add a demo task to the UI
    function addDemoTask(taskData) {
        // Format the due date
        let dueDate = 'No due date';
        if (taskData.dueDate) {
            const date = new Date(taskData.dueDate);
            dueDate = `Due: ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
        }
        
        // Get priority class
        const priorityClass = `${taskData.priority}-priority`;
        const priorityText = taskData.priority.charAt(0).toUpperCase() + taskData.priority.slice(1) + ' Priority';
        
        // Create a unique ID for the task
        const taskId = 'task-' + Date.now();
        
        // Create the task HTML
        const taskHtml = `
            <li class="task-item">
                <div class="task-checkbox">
                    <input type="checkbox" id="${taskId}" class="task-check">
                    <label for="${taskId}"></label>
                </div>
                <div class="task-content">
                    <h4 class="task-title">${taskData.title}</h4>
                    <div class="task-meta">
                        <span class="task-due"><i class="fa fa-calendar"></i> ${dueDate}</span>
                        <span class="task-priority ${priorityClass}">${priorityText}</span>
                    </div>
                </div>
            </li>
        `;
        
        // Add the task to the beginning of the list
        $('.task-list').prepend(taskHtml);
        
        // Attach event handler to the new checkbox
        $(`#${taskId}`).on('change', function() {
            const $taskItem = $(this).closest('.task-item');
            
            if ($(this).is(':checked')) {
                $taskItem.find('.task-title').css('text-decoration', 'line-through');
                $taskItem.css('opacity', '0.6');
                
                // Show completion message
                showToast('Task marked as completed', 'success');
                
                // Reset after 3 seconds
                setTimeout(function() {
                    $taskItem.find('.task-title').css('text-decoration', 'none');
                    $taskItem.css('opacity', '1');
                    $taskItem.find('.task-check').prop('checked', false);
                }, 3000);
            } else {
                $taskItem.find('.task-title').css('text-decoration', 'none');
                $taskItem.css('opacity', '1');
            }
        });
    }
});
