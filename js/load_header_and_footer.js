// track control key state with a boolean
const CONTROL_KEY_ = 'a';
if(typeof(localStorage.getItem("username"))=='undefined'){
    sessionStorage.setItem("controlCharDown", "false");
}

document.addEventListener('keydown', e =>{
    if (e.key == CONTROL_KEY_){
        sessionStorage.setItem("controlCharDown", "true");
    }
});
document.addEventListener('keyup', e =>{
    if (e.key == CONTROL_KEY_){
        sessionStorage.setItem("controlCharDown", "false");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            style_current_page_btn();
            set_body_visible();
            set_header_callbacks();
        })
        .then(()=>{
            const welcomeMsg = document.getElementById('headerWelcome');
            welcomeMsg.textContent = "Welcome, " + (sessionStorage.getItem("username") || "Guest");
            const profileImg = document.getElementById('profileImg');
            profileImg.src = sessionStorage.getItem("profileImg") || "img/avatar.png";

            const profileImg2 = document.getElementById('subProfileImg'); // just for settings
            if(profileImg2){
                profileImg2.src = sessionStorage.getItem("profileImg") || "img/avatar.png";
            }

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
            a.classList.add("current_page");
        }
    })
}

function set_body_visible(){
    document.querySelector('body').classList.remove('loading');
}

function set_header_callbacks(){
    const headerNavAnchors = document.querySelectorAll('header nav a');

    document.addEventListener('keydown', e => {
        if(sessionStorage.getItem("controlCharDown") == "false"){
            console.log("aborted!")
            return;
        }
        if(e.key >= '1' && e.key <= headerNavAnchors.length){
            headerNavAnchors[e.key-1].click();
        } 
    })
}