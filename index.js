// script.js
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home");
    const dashboardLink = document.getElementById("dashboard");
    const logoutLink = document.getElementById("logout");

    // Event listeners
    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Handle logic for showing home page
    });

    dashboardLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Handle logic for showing dashboard
    });

    logoutLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Handle logout logic
    });
});
