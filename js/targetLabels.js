// gather target labels to add listeners
const sidebarRadioLabels = document.querySelectorAll('.target_label');

// each click runs reselect
sidebarRadioLabels.forEach(element => {
    element.addEventListener('click', reselect);
});

// reselect removes labels from whole list, then adds it to the target
function reselect(e){
    sidebarRadioLabels.forEach(label => label.classList.remove('label_checked'));
    e.target.classList.add('label_checked');
}