
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            style_current_page_btn();
            set_body_visible();
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
    
    fetch("login_header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-login-placeholder").innerHTML = data;
            set_body_visible();
        });

});

function style_current_page_btn(){
    const body = document.querySelector("body");
    const page = body.dataset.page;
    const nav_a = document.querySelectorAll('header nav a');
    nav_a.forEach(a => {
        if(a.textContent == page){
            a.classList.add("current_page")
        }
    })
}

function set_body_visible(){
    document.querySelector('body').classList.remove('loading');
}