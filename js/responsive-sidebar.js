/**
 * Responsive Sidebar Functionality for Legal Case Management System
 * Handles sidebar toggle and responsive behavior on mobile devices
 */

$(document).ready(function() {
    // Handle sidebar toggle on mobile
    $('.menu_toggle').on('click', function() {
        $('body').toggleClass('nav-sm');
        
        // Add/remove overlay when sidebar is expanded/collapsed on mobile
        if ($('body').hasClass('nav-sm')) {
            // Add overlay when sidebar is expanded
            $('<div class="sidebar-overlay"></div>').appendTo('body');
            
            // Close sidebar when overlay is clicked
            $('.sidebar-overlay').on('click', function() {
                $('body').removeClass('nav-sm');
                $(this).remove();
            });
        } else {
            // Remove overlay when sidebar is collapsed
            $('.sidebar-overlay').remove();
        }
    });
    
    // Handle window resize to ensure proper layout
    $(window).on('resize', function() {
        handleResponsiveLayout();
    });
    
    // Initial check for responsive layout
    handleResponsiveLayout();
    
    // Function to handle responsive layout changes
    function handleResponsiveLayout() {
        const windowWidth = $(window).width();
        
        // Automatically collapse sidebar on small screens
        if (windowWidth <= 991) {
            $('body').removeClass('nav-sm');
            $('.sidebar-overlay').remove();
        }
        
        // Adjust table responsive behavior
        if (windowWidth <= 767) {
            $('.table-container').addClass('table-responsive');
        } else {
            $('.table-container').removeClass('table-responsive');
        }
    }
    
    // Handle submenu toggle on mobile
    $('.nav.side-menu > li > a').on('click', function(e) {
        const windowWidth = $(window).width();
        
        // Only apply special handling on mobile
        if (windowWidth <= 991) {
            const $parentLi = $(this).parent('li');
            
            // Check if this menu item has a submenu
            if ($parentLi.find('ul.nav.child_menu').length > 0) {
                e.preventDefault();
                
                // Toggle the active class
                $parentLi.toggleClass('active');
                
                // Toggle the child menu visibility
                $parentLi.find('ul.nav.child_menu').slideToggle(200);
                
                // Close other open submenus
                $('.nav.side-menu > li').not($parentLi).removeClass('active');
                $('.nav.side-menu > li').not($parentLi).find('ul.nav.child_menu').slideUp(200);
            }
        }
    });
});
