
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
    
    fetch("login_header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-login-placeholder").innerHTML = data);
    fetch("header_main_menu.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-main-menu-placeholder").innerHTML = data);
});