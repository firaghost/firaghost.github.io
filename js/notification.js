/**
 * Notification handling for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Demo notifications
    var demoNotifications = [
        {
            id: 1,
            title: 'New Case Assigned',
            message: 'You have been assigned to Case #LC-2023-0045',
            time: '5 minutes ago',
            icon: 'fa fa-gavel text-info'
        },
        {
            id: 2,
            title: 'Hearing Date Updated',
            message: 'Hearing date for Case #LC-2023-0032 has been updated',
            time: '1 hour ago',
            icon: 'fa fa-calendar text-warning'
        },
        {
            id: 3,
            title: 'Document Uploaded',
            message: 'New document uploaded to Case #LC-2023-0028',
            time: '3 hours ago',
            icon: 'fa fa-file-pdf-o text-danger'
        }
    ];
    
    // Populate notifications dropdown
    var notificationsList = $('.notifications-list');
    if (notificationsList.length) {
        // Clear existing notifications
        notificationsList.empty();
        
        // Add demo notifications
        $.each(demoNotifications, function(index, notification) {
            var notificationItem = $('<li class="notification-item"></li>');
            notificationItem.html(
                '<a href="javascript:void(0);">' +
                '<div class="notification-icon"><i class="' + notification.icon + '"></i></div>' +
                '<div class="notification-content">' +
                '<div class="notification-title">' + notification.title + '</div>' +
                '<div class="notification-message">' + notification.message + '</div>' +
                '<div class="notification-time">' + notification.time + '</div>' +
                '</div>' +
                '</a>'
            );
            notificationsList.append(notificationItem);
        });
        
        // Update notification count
        $('#notificationCount').text(demoNotifications.length);
    }
    
    // Handle notification click
    $(document).on('click', '.notification-item a', function(e) {
        e.preventDefault();
        
        // Show demo message
        Swal.fire({
            title: 'Demo Mode',
            text: 'This is a static demo. Notification actions are not processed in this environment.',
            type: 'info',
            confirmButtonText: 'Got it'
        });
    });
});
