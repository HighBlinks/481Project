
const targets = document.querySelectorAll('.sidebar label');

document.addEventListener('keydown', e => {
    targets.forEach(target => {

        // avoid empty indexing errors
        if (! target.textContent.trim()) {
            return;
        }

        // match the first letter of the target's text content
        // click on match
        if (e.key.toLowerCase() == target.textContent.trim()[0].toLowerCase()){
            target.click();
        }
    })
})


// all year-headers click when focused and Enter is pressed
const year_headers = document.querySelectorAll('.year-header');

year_headers.forEach(year_header =>{
    year_header.addEventListener('keydown', click_on_enter)
})

function click_on_enter(k){
    if (k.key=='Enter'){
        this.click();
    }
}