/**
 * Back button functionality for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Back button functionality
    $('.back-button').on('click', function(e) {
        e.preventDefault();
        
        // For demo, show a message instead of actual navigation
        Swal.fire({
            title: 'Demo Mode',
            text: 'In a live environment, this would navigate back to the previous page.',
            type: 'info',
            confirmButtonText: 'Got it'
        });
    });
});
