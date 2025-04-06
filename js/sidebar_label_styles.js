
const sidebar_radio_inputs = document.querySelectorAll('.sidebar_labels > label')
const sidebar_radio_labels = document.querySelectorAll('.sidebar_labels > label')

sidebar_radio_inputs.forEach(element => {
    element.addEventListener('click', reselect)
});

function reselect(e){
    sidebar_radio_labels.forEach(label => label.classList.remove('label_checked'))
    e.target.classList.add('label_checked')
}