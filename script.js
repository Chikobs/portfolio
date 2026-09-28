document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const themeButton = document.getElementById('themeButton');

    // Function to change button styles dynamically based on active theme
    const updateButtonUI = (theme) => {
        if (theme === 'dark') {
            // Dark Mode Active: Make moon button glow gold/yellow
            themeButton.className = 'btn btn-outline-warning p-3 rounded-circle fs-3';
        } else {
            // Light Mode Active: Keep moon button dark gray/slate
            themeButton.className = 'btn btn-outline-dark p-3 rounded-circle fs-3';
        }
    };

    // 1. Initialize interface using saved local storage theme state
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', currentTheme);
    updateButtonUI(currentTheme);

    // 2. Add click event to toggle theme state on demand
    themeButton.addEventListener('click', () => {
        const activeTheme = htmlElement.getAttribute('data-bs-theme');
        const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        
        // Apply theme changes to DOM and save choice
        htmlElement.setAttribute('data-bs-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        
        // Visual refresh for the button
        updateButtonUI(nextTheme);
    });
});







