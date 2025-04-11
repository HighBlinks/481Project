
const popup = document.getElementById("popupBackdrop");
const popupTrigger = document.getElementById("triggerPopup");

popupTrigger.addEventListener('click', displayPopup);

function displayPopup(){
    popup.style.display = 'block';
}

function hidePopup(){
    popup.style.display = 'none';
}

