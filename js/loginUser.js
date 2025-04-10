console.log('connected!');


function loginUser(){
    const uname = document.getElementById('username').value;
    const pword = document.getElementById('password').value;
    console.log('ran')

    if(uname == 'Plebian Dunce' && pword == 'password'){
        document.location.href = "mainMenu.html";
    }
    else if (uname == 'not Plebian Dunce' && pword == 'password'){
        document.location.href = "mainMenu.html";  // can go to separate place
    }
    else if (uname == 'probably not Plebian Dunce' && pword == 'password'){
        document.location.href = "mainMenu.html";  // can go to separate place
    }
}