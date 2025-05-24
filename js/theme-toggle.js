/**
 * Theme toggle functionality for Legal Case Management System
 * Static version for GitHub Pages
 */

$(document).ready(function() {
    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem('lcms-theme-preference') || 'light';
    
    // Apply the saved theme
    applyTheme(currentTheme);
    
    // Toggle theme when the theme toggle button is clicked
    $('.theme-toggle').on('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Save theme preference
        localStorage.setItem('lcms-theme-preference', newTheme);
        
        // Apply the new theme
        applyTheme(newTheme);
    });
    
    // Function to apply theme
    function applyTheme(theme) {
        // Set the data-theme attribute on the document element
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
        
        // Update the icon
        if (theme === 'dark') {
            $('.theme-toggle i').removeClass('fa-moon-o').addClass('fa-sun-o');
        } else {
            $('.theme-toggle i').removeClass('fa-sun-o').addClass('fa-moon-o');
        }
        
        // Announce theme change for screen readers
        const themeAnnouncement = `Switched to ${theme} theme`;
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('class', 'sr-only');
        announcer.textContent = themeAnnouncement;
        document.body.appendChild(announcer);
        
        // Remove the announcer after it's been read
        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 1000);
    }
});
