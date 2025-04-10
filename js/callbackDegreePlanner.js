// track control key state with a boolean
let controlKeyDown = false;
const CONTROL_KEY = ',';

document.addEventListener('keydown', e =>{
    if (e.key == CONTROL_KEY){
        controlKeyDown = true;
    }
});
document.addEventListener('keyup', e =>{
    if (e.key == CONTROL_KEY){
        controlKeyDown = false;
    }
});


const targets = document.querySelectorAll('.sidebar label');

document.addEventListener('keydown', e => {
    targets.forEach(target => {
        if (!controlKeyDown){
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