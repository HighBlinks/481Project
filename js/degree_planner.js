
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
document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");

    const yearMapping = {
        200: "fall1", // Year 1
        300: "fall2", // Year 2
        400: "fall3", // Year 3
    };

    // Add click handler for each course in sidebar
    courseList.addEventListener("click", function (event) {
        const item = event.target;
        if (item.tagName.toLowerCase() === "li") {
            const courseCode = item.textContent.split(" - ")[0].trim();
            const level = parseInt(courseCode.match(/\d+/)[0]);

            // Where the course should initially appear 
            let targetId = "fall4"; // Default to Year 4
            if (level >= 200 && level < 300) {
                targetId = "fall1";
            } else if (level >= 300 && level < 400) {
                targetId = "fall2";
            } else if (level >= 400 && level < 500) {
                targetId = "fall3";
            }

            // Create draggable course div
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("course");
            courseDiv.setAttribute("draggable", "true");
            courseDiv.textContent = courseCode;

            // Add unique ID so drag works properly
            const uniqueId = `${courseCode.replace(/\s/g, "")}-${Date.now()}`;
            courseDiv.id = uniqueId;

            // Add drag event listeners to added course
            courseDiv.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", courseDiv.id);
                setTimeout(() => {
                    courseDiv.style.display = "none";
                }, 0);
            });

            courseDiv.addEventListener("dragend", () => {
                courseDiv.style.display = "inline-block";
            });

    
            const termDiv = document.getElementById(targetId);
            termDiv.appendChild(courseDiv); 

        }
    });
});



