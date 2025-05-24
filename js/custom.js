/**
 * Custom JavaScript for Legal Case Management System Dashboard
 * Static version for GitHub Pages
 */

// Sidebar toggle functionality
$(document).ready(function() {
    // Sidebar toggle
    $('.sidebar-toggle').on('click', function() {
        $('.sidebar').toggleClass('toggled');
    });

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize popovers
    $('[data-toggle="popover"]').popover();

    // Close alerts
    $('.alert .close').on('click', function() {
        $(this).parent().fadeOut();
    });

    // Panel collapse functionality
    $('.panel-heading .collapse-icon').on('click', function() {
        $(this).closest('.panel').find('.panel-body').slideToggle();
        $(this).find('i').toggleClass('fa-chevron-up fa-chevron-down');
    });

    // Panel remove functionality
    $('.panel-heading .remove-icon').on('click', function() {
        $(this).closest('.panel').fadeOut();
    });

    // Panel refresh functionality
    $('.panel-heading .refresh-icon').on('click', function() {
        var panel = $(this).closest('.panel');
        panel.find('.panel-body').addClass('panel-loading');
        setTimeout(function() {
            panel.find('.panel-body').removeClass('panel-loading');
        }, 1500);
    });

    // Sidebar menu active state
    $('#sidebar-menu a').each(function() {
        var pageUrl = window.location.href.split(/[?#]/)[0];
        if (this.href == pageUrl) {
            $(this).addClass('active');
            $(this).parent().addClass('active');
            $(this).parent().parent().prev().addClass('active');
            $(this).parent().parent().prev().click();
        }
    });
});

// Resize function
$(window).on('resize', function() {
    if ($(window).width() < 768) {
        $('.sidebar').addClass('toggled');
    }
});

// NProgress configuration
NProgress.configure({ showSpinner: false });
$(document).ready(function() {
    NProgress.start();
});
$(window).on('load', function() {
    NProgress.done();
});
