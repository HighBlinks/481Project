document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const searchInput = document.getElementById("course-search");
    const filterForm = document.getElementById("filter-form");
    const courseList = document.getElementById("course-list");

    // Static list of courses (simulating database without backend)
    const courses = [
        { code: "CPSC 231", level: 200, term: "Fall", difficulty: 3 },
        { code: "CPSC 251", level: 200, term: "Winter", difficulty: 2 },
        { code: "CPSC 331", level: 300, term: "Fall", difficulty: 4 },
        { code: "CPSC 351", level: 300, term: "Winter", difficulty: 3 }
    ];


    // Function to filter and display courses
    function filterCourses() {
        const searchValue = searchInput.value.toUpperCase();
        const formData = new FormData(filterForm);
        const selectedLevel = formData.get("level");
        const selectedTerm = formData.get("term");

        // Clear previous list
        courseList.innerHTML = "";

        // Filter courses
        const filteredCourses = courses.filter(course => {
            return (
                (searchValue === "" || course.code.includes(searchValue)) &&
                (!selectedLevel || course.level == selectedLevel) &&
                (!selectedTerm || course.term === selectedTerm)
            );
        });

        // Display filtered courses
        filteredCourses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = `${course.code} - ${course.term} (Lvl ${course.level})`;
            courseList.appendChild(li);
        });
    }

    // Event listeners for search and filters
    searchInput.addEventListener("input", filterCourses);
    filterForm.addEventListener("change", filterCourses);
});
