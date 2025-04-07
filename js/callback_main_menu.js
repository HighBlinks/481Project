
const targets = document.querySelectorAll('main nav button');

document.addEventListener('keydown', e => {
    console.log("key2: " + e.key.toLowerCase())
    targets.forEach(target => {
        console.log("tar2: " + target.textContent[0].toLowerCase())

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