
const sidebar_radio_inputs = document.querySelectorAll('.target_label')
const sidebar_radio_labels = document.querySelectorAll('.target_label')

sidebar_radio_inputs.forEach(element => {
    element.addEventListener('click', reselect)
});

function reselect(e){
    sidebar_radio_labels.forEach(label => label.classList.remove('label_checked'))
    e.target.classList.add('label_checked')
}