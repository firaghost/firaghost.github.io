/**
 * Theme fixing functionality for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Apply theme fixes for specific elements
    
    // Fix for tables in dark mode
    function applyTableThemeFixes() {
        if ($('body').hasClass('dark-theme')) {
            $('.table').addClass('table-dark');
            $('.dataTables_wrapper').addClass('dark-theme-datatables');
        } else {
            $('.table').removeClass('table-dark');
            $('.dataTables_wrapper').removeClass('dark-theme-datatables');
        }
    }
    
    // Fix for cards in dark mode
    function applyCardThemeFixes() {
        if ($('body').hasClass('dark-theme')) {
            $('.card, .tile').addClass('dark-card');
        } else {
            $('.card, .tile').removeClass('dark-card');
        }
    }
    
    // Fix for forms in dark mode
    function applyFormThemeFixes() {
        if ($('body').hasClass('dark-theme')) {
            $('.form-control').addClass('dark-input');
        } else {
            $('.form-control').removeClass('dark-input');
        }
    }
    
    // Initial application of fixes
    applyTableThemeFixes();
    applyCardThemeFixes();
    applyFormThemeFixes();
    
    // Apply fixes when theme changes
    $('.theme-toggle').on('click', function() {
        setTimeout(function() {
            applyTableThemeFixes();
            applyCardThemeFixes();
            applyFormThemeFixes();
        }, 100);
    });
});
