document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const searchInput = document.getElementById("course-search");
    const filterForm = document.getElementById("filter-form");
    const courseList = document.getElementById("course-list");

    // Static list of courses (simulating database without backend)
    const courses = [
        { code: "CPSC 217", level: 100, term: "Fall", difficulty: "1" },
        { code: "CPSC 219", level: 100, term: "Winter", difficulty: "1" },
        { code: "CPSC 231", level: 200, term: "Fall", difficulty: "2" },
        { code: "CPSC 233", level: 200, term: "Winter", difficulty: "3" },
        { code: "CPSC 235", level: 200, term: "Spring", difficulty: "3" },
        { code: "CPSC 251", level: 200, term: "Summer", difficulty: "2" },
        { code: "CPSC 304", level: 300, term: "Fall", difficulty: "4" },
        { code: "CPSC 313", level: 300, term: "Winter", difficulty: "4" },
        { code: "CPSC 319", level: 300, term: "Spring", difficulty: "4" },
        { code: "CPSC 329", level: 300, term: "Summer", difficulty: "4" },
        { code: "CPSC 331", level: 300, term: "Fall", difficulty: "4" },
        { code: "CPSC 335", level: 300, term: "Winter", difficulty: "4" },
        { code: "CPSC 351", level: 400, term: "Spring", difficulty: "5" },
        { code: "CPSC 355", level: 400, term: "Summer", difficulty: "5" },
        { code: "CPSC 359", level: 400, term: "Fall", difficulty: "5" },
        { code: "CPSC 383", level: 400, term: "Winter", difficulty: "5" },
        { code: "CPSC 393", level: 400, term: "Spring", difficulty: "5" },
        { code: "CPSC 409", level: 400, term: "Summer", difficulty: "5" },
        { code: "CPSC 413", level: 400, term: "Fall", difficulty: "5" },
        { code: "CPSC 433", level: 400, term: "Winter", difficulty: "5" },
        { code: "CPSC 441", level: 400, term: "Spring", difficulty: "5" },
        { code: "CPSC 449", level: 400, term: "Summer", difficulty: "5" },
        { code: "CPSC 453", level: 400, term: "Fall", difficulty: "5" },
        { code: "CPSC 457", level: 400, term: "Winter", difficulty: "5" },
        { code: "CPSC 461", level: 400, term: "Spring", difficulty: "5" },
        { code: "CPSC 471", level: 400, term: "Summer", difficulty: "5" },
        { code: "CPSC 481", level: 400, term: "Fall", difficulty: "5" },
        { code: "CPSC 491", level: 400, term: "Winter", difficulty: "5" },
        { code: "CPSC 499", level: 400, term: "Spring", difficulty: "5" },
        { code: "CPSC 501", level: 500, term: "Summer", difficulty: "5" },
        { code: "CPSC 502", level: 500, term: "Fall", difficulty: "5" },
        { code: "CPSC 503", level: 500, term: "Winter", difficulty: "5" },
        { code: "CPSC 505", level: 500, term: "Spring", difficulty: "5" },
        { code: "CPSC 511", level: 500, term: "Summer", difficulty: "5" },
        { code: "CPSC 513", level: 500, term: "Fall", difficulty: "5" },
        { code: "CPSC 517", level: 500, term: "Winter", difficulty: "5" },
        { code: "CPSC 518", level: 500, term: "Spring", difficulty: "5" },
        { code: "CPSC 519", level: 500, term: "Summer", difficulty: "5" },
        { code: "CPSC 521", level: 500, term: "Fall", difficulty: "5" },
        { code: "CPSC 522", level: 500, term: "Winter", difficulty: "5" },
        { code: "CPSC 525", level: 500, term: "Spring", difficulty: "5" },
        { code: "CPSC 526", level: 500, term: "Summer", difficulty: "5" },
        { code: "CPSC 527", level: 500, term: "Fall", difficulty: "5" },
        { code: "CPSC 528", level: 500, term: "Winter", difficulty: "5" },
        { code: "ARKY 201", level: 200, term: "Fall", difficulty: "2" },
        { code: "ARKY 325", level: 300, term: "Winter", difficulty: "3" },
        { code: "ARKY 415", level: 400, term: "Spring", difficulty: "4" },
    
        // BIOL
        { code: "BIOL 205", level: 200, term: "Summer", difficulty: "2" },
        { code: "BIOL 311", level: 300, term: "Fall", difficulty: "3" },
        { code: "BIOL 411", level: 400, term: "Winter", difficulty: "4" },
    
        // CHEM
        { code: "CHEM 201", level: 200, term: "Fall", difficulty: "3" },
        { code: "CHEM 351", level: 300, term: "Winter", difficulty: "4" },
        { code: "CHEM 471", level: 400, term: "Spring", difficulty: "5" },
    
        // ENGL
        { code: "ENGL 205", level: 200, term: "Summer", difficulty: "2" },
        { code: "ENGL 339", level: 300, term: "Fall", difficulty: "3" },
        { code: "ENGL 401", level: 400, term: "Winter", difficulty: "4" }
    ];


    // Function to filter and display courses
    function filterCourses() {
        const searchValue = searchInput.value.toUpperCase();
        const formData = new FormData(filterForm);
        const selectedLevel = formData.get("level");
        const selectedTerm = formData.get("term");
        const selectedDiff = formData.get("diff");
        // Clear previous list
        courseList.innerHTML = "";

        // Filter courses
        const filteredCourses = courses.filter(course => {
            return (
                ((searchValue === "" || course.code.includes(searchValue)) ||
                (searchValue === "" || course.code.replace(" ", "").includes(searchValue))) &&
                (!selectedLevel || course.level == selectedLevel) &&
                (!selectedTerm || course.term === selectedTerm) && (!selectedDiff || course.difficulty === selectedDiff)
            );
        });

        // Display filtered courses
        filteredCourses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = `${course.code} - ${course.term}`;
            courseList.appendChild(li);
        });
    }

    // Event listeners for search and filters
    searchInput.addEventListener("input", filterCourses);
    filterForm.addEventListener("change", filterCourses);
});
