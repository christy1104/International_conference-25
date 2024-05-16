$(document).ready(function() {
    $('#navbar-toggler').click(function() {
        $('#navbarNavbar').collapse('toggle');
    });
});

function gotoContact() {
    // Navigate to contact_us.ejs page
    window.location.href = "/contact_us"; // Replace "/contact_us" with the actual URL of your contact_us.ejs page
}

function gotoRegistration(){
        // Navigate to registration.ejs page
        window.location.href = "/registration"; // Replace "/registration" with the actual URL of your registration.ejs page
}