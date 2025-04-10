// Collapsible accordion logic
document.querySelectorAll(".year-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Handle course completion toggle & delete button clicks using event delegation
    document.body.addEventListener("click", (event) => {
        const target = event.target;

        // Toggle "completed" class when clicking on a course
        if (target.classList.contains("course")) {
            target.classList.toggle("completed");
        }

        // Remove course when clicking the delete button
        if (target.classList.contains("delete-btn")) {
            event.stopPropagation(); // Prevent it from triggering the course click event
            target.parentElement.remove();
        }
    });

    // Attach delete button dynamically to new courses
    function addDeleteButtonToCourse(course) {
        if (!course.querySelector(".delete-btn")) {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "x";
            deleteButton.classList.add("delete-btn");
            course.appendChild(deleteButton);
        }
    }

// degree_planner.js

// Modified addInfoButtonToCourse function
function addInfoButtonToCourse(course) {
    if (!course.querySelector(".info-btn")) {
        const infoButton = document.createElement("button");
        infoButton.textContent = "i";
        infoButton.classList.add("info-btn");
        infoButton.addEventListener("click", (e) => {
            e.stopPropagation();
            const courseCode = course.dataset.courseCode || course.textContent.trim();
            showCourseInfo(courseCode);
        });
        course.appendChild(infoButton);
    }
}

// Enhanced showCourseInfo function
function showCourseInfo(courseCode) {

    // Find the course (case insensitive and space insensitive)
    const courseData = window.courseDatabase.find(course => 
        course.code.toUpperCase().replace(/\s/g, "") === 
        courseCode.toUpperCase().replace(/\s/g, "")
    );

    // Get Course Info sidebar elements
    const courseInfoRadio = document.getElementById("course_info");
    const courseInfoBox = courseInfoRadio.nextElementSibling;
    
    // Activate the Course Info tab
    courseInfoRadio.checked = true;
    
    // Update active tab styling
    document.querySelectorAll('.sidebar_labels label').forEach(label => {
        label.classList.remove('label_checked');
    });
    document.querySelector('label[for="course_info"]').classList.add('label_checked');
    
    // Populate the course info
    const items = courseInfoBox.querySelectorAll('li');
    if (courseData) {
        items[0].innerHTML = `<strong>COURSE:</strong> ${courseData.code || "None"}`;
        items[1].innerHTML = `<strong>Prerequisites:</strong> ${courseData.Preq || "None"}`;
        items[2].innerHTML = `<strong>Antirequisites:</strong> ${courseData.AntiReq || "None"}`;
        items[3].innerHTML = `<strong>Difficulty:</strong> ${"💀".repeat(parseInt(courseData.difficulty)) || "Not rated"}`;
        items[4].innerHTML = `<strong>Offered:</strong> ${courseData.term || "Unknown"}`;
    } else {
        items[1].innerHTML = "<strong>Prerequisites:</strong> Data not available";
        items[2].innerHTML = "<strong>Antirequisites:</strong> Data not available";
        items[3].innerHTML = "<strong>Difficulty:</strong> Data not available";
        items[4].innerHTML = "<strong>Offered:</strong> Data not available";
    }
}


    // Observe dynamically added courses and add delete buttons
    const observer = new MutationObserver(() => {
        document.querySelectorAll(".course").forEach(course => {
            addDeleteButtonToCourse(course);
            addInfoButtonToCourse(course);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 3000); // hide after 3 seconds
}

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

    courseList.addEventListener("click", function (event) {
        const item = event.target;
        if (item.tagName.toLowerCase() === "li") {
            const courseCode = item.textContent.split(" - ")[0].trim();
            const level = parseInt(courseCode.match(/\d+/)[0]);
            const term = item.textContent.match(/(Fall|Winter|Spring|Summer)/i);

            let targetId = "fall4"; // Default to Year 4

            if (level >= 200 && level < 300) {
                if (term[0] === "Fall") targetId = "fall1";
                else if (term[0] === "Winter") targetId = "winter1";
                else if (term[0] === "Spring") targetId = "spring1";
                else if (term[0] === "Summer") targetId = "summer1";
            } else if (level >= 300 && level < 400) {
                if (term[0] === "Fall") targetId = "fall2";
                else if (term[0] === "Winter") targetId = "winter2";
                else if (term[0] === "Spring") targetId = "spring2";
                else if (term[0] === "Summer") targetId = "summer2";
            } else if (level >= 400 && level < 500) {
                if (term[0] === "Fall") targetId = "fall3";
                else if (term[0] === "Winter") targetId = "winter3";
                else if (term[0] === "Spring") targetId = "spring3";
                else if (term[0] === "Summer") targetId = "summer3";
            } else if (level >= 500) {
                if (term[0] === "Fall") targetId = "fall4";
                else if (term[0] === "Winter") targetId = "winter4";
                else if (term[0] === "Spring") targetId = "spring4";
                else if (term[0] === "Summer") targetId = "summer4";
            }

            // Check if course is already added anywhere
            const isAlreadyAdded = Array.from(document.querySelectorAll(".course"))
                .some(course => course.dataset.courseCode === courseCode);

            if (isAlreadyAdded) {
                showPopup("Error: Course already added. Please select another course.");
                return;
            }

            // Create draggable course div
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("course");
            courseDiv.setAttribute("draggable", "true");
            courseDiv.setAttribute("data-course-code", courseCode);
            courseDiv.textContent = courseCode;

            const uniqueId = `${courseCode.replace(/\s/g, "")}-${Date.now()}`;
            courseDiv.id = uniqueId;

            courseDiv.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", courseDiv.id);
                setTimeout(() => {
                    courseDiv.style.display = "none";
                }, 0);
            });

            courseDiv.addEventListener("dragend", () => {
                courseDiv.style.display = "inline-block";
            });

            const targetTerm = document.getElementById(targetId);
            targetTerm.appendChild(courseDiv);
        }
    });

        // Default compsci prereqs courses to populate on page load, 
        const defaultCourses = [
            { code: "CPSC 231", termId: "fall1" },
            { code: "MATH 249", termId: "fall1" },
            { code: "PHIL 279", termId: "fall1" },
            { code: "CPSC 233", termId: "winter1" },
            { code: "CPSC 251", termId: "winter1" },
            { code: "MATH 211", termId: "winter1" },
            { code: "CPSC 331", termId: "fall2" },
            { code: "SENG 300", termId: "fall2" },
            { code: "PHIL 314", termId: "fall2" },
            { code: "CPSC 351", termId: "winter2" },
            { code: "CPSC 355", termId: "winter2" },
            { code: "CPSC 413", termId: "fall3" },
            { code: "CPSC 449", termId: "fall3" },
            { code: "CPSC 457", termId: "winter3" },
        ];
    
        defaultCourses.forEach(({ code, termId }) => {
            // Skip if course is already added
            const isAlreadyAdded = Array.from(document.querySelectorAll(".course"))
                .some(course => course.dataset.courseCode === code);
            if (isAlreadyAdded) return;
    
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("course");
            courseDiv.setAttribute("draggable", "true");
            courseDiv.setAttribute("data-course-code", code);
            courseDiv.textContent = code;
    
            const uniqueId = `${code.replace(/\s/g, "")}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
            courseDiv.id = uniqueId;
    
            courseDiv.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", courseDiv.id);
                setTimeout(() => {
                    courseDiv.style.display = "none";
                }, 0);
            });
    
            courseDiv.addEventListener("dragend", () => {
                courseDiv.style.display = "inline-block";
            });
    
            const targetTerm = document.getElementById(termId);
            if (targetTerm) targetTerm.appendChild(courseDiv);
        });
    
});
