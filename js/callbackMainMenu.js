
const targets = document.querySelectorAll('main nav button');

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

// When question mark is clicked display help info
    // Toggle dialog visibility
    const helpIcon = document.querySelector('.help-icon');
    const helpDialog = document.getElementById('help-dialog');
    const dialogClose = document.querySelector('.dialog-close');

    helpIcon.addEventListener('click', () => {
        helpDialog.classList.toggle('visible');
    });

    dialogClose.addEventListener('click', () => {
        helpDialog.classList.remove('visible');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!helpDialog.contains(e.target) && e.target !== helpIcon) {
            helpDialog.classList.remove('visible');
        }
    });