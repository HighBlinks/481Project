console.log('connected!');


function loginUser(){
    const uname = document.getElementById('username').value || "Guest";
    const pword = document.getElementById('password').value;


    sessionStorage.setItem("username", uname);
    if(uname == 'Plebian Dunce' && pword == 'password'){
        sessionStorage.setItem("profileImg", "img/HmphJud.webp");
        document.location.href = "mainMenu.html";
    }
    else if (uname == 'Vance' && pword == 'password'){  // this is a different user
        sessionStorage.setItem("profileImg", "img/vincnt.png");     // can have a separate pic
        document.location.href = "mainMenu.html";                   // can go to separate place (if we hardcode a landing for them)
    }
    else {   // default to avatar/ main menu 
        sessionStorage.setItem("profileImg", "img/avatar.png");
        document.location.href = "mainMenu.html";
    }
}