// main-content.js

// Collapsible accordion logic
document.querySelectorAll(".year-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Drag and Drop logic
const courses = document.querySelectorAll(".course");
const terms = document.querySelectorAll(".term");

courses.forEach(course => {
    course.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", course.id);
        setTimeout(() => {
            course.style.display = "none";
        }, 0);
    });

    course.addEventListener("dragend", () => {
        course.style.display = "inline-block";
    });
});

terms.forEach(term => {
    term.addEventListener("dragover", (e) => {
        e.preventDefault();
        term.classList.add("drag-over");
    });

    term.addEventListener("dragleave", () => {
        term.classList.remove("drag-over");
    });

    term.addEventListener("drop", (e) => {
        e.preventDefault();
        const courseId = e.dataTransfer.getData("text/plain");
        const course = document.getElementById(courseId);
        term.appendChild(course);
        term.classList.remove("drag-over");
    });
});
