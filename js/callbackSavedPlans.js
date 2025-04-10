// all year-headers click when focused and Enter is pressed
const target_labels = document.querySelectorAll('.target_label');

target_labels.forEach(target_labels =>{
    target_labels.addEventListener('keydown', click_on_enter);
});

function click_on_enter(k){
    if (k.key=='Enter'){
        this.click();
    }
}