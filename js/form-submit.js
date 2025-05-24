/**
 * Form submission handling for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Handle form submissions for demo
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        // Show demo message
        Swal.fire({
            title: 'Demo Mode',
            text: 'This is a static demo. Form submissions are not processed in this environment.',
            type: 'info',
            confirmButtonText: 'Got it'
        });
    });
    
    // Initialize form validation for demo
    if($.fn.validate) {
        $('form').validate({
            errorElement: 'span',
            errorClass: 'help-block',
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
    }
});
