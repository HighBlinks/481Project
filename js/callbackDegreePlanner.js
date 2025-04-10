// track control key state with a boolean
const CONTROL_KEY = 'a';

document.addEventListener('keydown', e =>{
    if (e.key == CONTROL_KEY){
        sessionStorage.setItem("controlCharDown", "true");
    }
});
document.addEventListener('keyup', e =>{
    if (e.key == CONTROL_KEY){
        sessionStorage.setItem("controlCharDown", "false");
    }
});


const targets = document.querySelectorAll('.sidebar label');

document.addEventListener('keydown', e => {
    targets.forEach(target => {
        if (sessionStorage.getItem("controlCharDown" == "false")){
            console.log("hhhhhhhhh")
            return;
        }
        // avoid empty indexing errors
        if (! target.textContent.trim()) {
            return;
        }

        // match the first letter of the target's text content
        // if control char is down, click on match
        if (e.key.toLowerCase() == target.textContent.trim()[0].toLowerCase()){
            target.click();
        }
    });
});


// all year-headers click when focused and Enter is pressed
const year_headers = document.querySelectorAll('.year-header');

year_headers.forEach(year_header =>{
    year_header.addEventListener('keydown', clickOnEnter);
});

function clickOnEnter(k){
    if (k.key=='Enter'){
        this.click();
    }
}