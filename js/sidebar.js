document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const searchInput = document.getElementById("course-search");
    const filterForm = document.getElementById("filter-form");
    const courseList = document.getElementById("course-list");

 // Static list of courses (simulating database without backend)
 const courses = [
    { code: "CPSC 217", level: 100, term: "Fall", difficulty: "1", Preq: "", AntiReq: "" },
    { code: "CPSC 219", level: 100, term: "Winter", difficulty: "1", Preq: "", AntiReq: "" },
    { code: "CPSC 231", level: 200, term: "Fall", difficulty: "2", Preq: "", AntiReq: "" },
    { code: "CPSC 233", level: 200, term: "Winter", difficulty: "3", Preq: "CPSC 231", AntiReq: "" },
    { code: "CPSC 235", level: 200, term: "Spring", difficulty: "3", Preq: "", AntiReq: "" },
    { code: "CPSC 251", level: 200, term: "Summer", difficulty: "2", Preq: "CPSC 219 or 233", AntiReq: "Credit for CPSC 251 and either MATH 271 or 273 will not be allowed." },
    { code: "CPSC 304", level: 300, term: "Fall", difficulty: "4", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 313", level: 300, term: "Winter", difficulty: "4", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 319", level: 300, term: "Spring", difficulty: "4", Preq: "CPSC 219 or 233 or 235", AntiReq: "Credit for CPSC 319 and 331 will not be allowed. Computer Science majors are not permitted to register in this course." },
    { code: "CPSC 329", level: 300, term: "Summer", difficulty: "4", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 331", level: 300, term: "Fall", difficulty: "4", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 335", level: 300, term: "Winter", difficulty: "4", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 351", level: 400, term: "Spring", difficulty: "5", Preq: "CPSC 313", AntiReq: "" },
    { code: "CPSC 355", level: 400, term: "Summer", difficulty: "5", Preq: "CPSC 219 or 233 or 235", AntiReq: "Credit for CPSC 355 and Computer Engineering 369 will not be allowed." },
    { code: "CPSC 359", level: 400, term: "Fall", difficulty: "5", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 383", level: 400, term: "Winter", difficulty: "5", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 393", level: 400, term: "Spring", difficulty: "5", Preq: "CPSC 231 and 233", AntiReq: "" },
    { code: "CPSC 409", level: 400, term: "Summer", difficulty: "5", Preq: "CPSC 313", AntiReq: "" },
    { code: "CPSC 413", level: 400, term: "Fall", difficulty: "5", Preq: "CPSC 331 or both CPSC 319 and 105; and one of MATH 211, 213 or 221; and one of MATH 249, 251 or 281", AntiReq: "" },
    { code: "CPSC 433", level: 400, term: "Winter", difficulty: "5", Preq: "CPSC 313; and one of PHIL 279 or 377", AntiReq: "" },
    { code: "CPSC 441", level: 400, term: "Spring", difficulty: "5", Preq: "CPSC 319 or 331; and CPSC 355 or Computer Engineering 369", AntiReq: "Credit for CPSC 441 and Electrical Engineering 573 will not be allowed." },
    { code: "CPSC 449", level: 400, term: "Summer", difficulty: "5", Preq: "CPSC 319 or 331; CPSC 313 or 351; and PHIL 279 or 377", AntiReq: "Credit for CPSC 449 and 349 will not be allowed." },
    { code: "CPSC 453", level: 400, term: "Fall", difficulty: "5", Preq: "CPSC 319 or 331; and MATH 211 or 213; and 3 units from MATH 253, 267, 277, 283 or Applied Mathematics 219", AntiReq: "" },
    { code: "CPSC 457", level: 400, term: "Winter", difficulty: "5", Preq: "CPSC 319 or 331; and CPSC 355 or Computer Engineering 369", AntiReq: "" },
    { code: "CPSC 461", level: 400, term: "Spring", difficulty: "5", Preq: "CPSC 355; and 319 or 331", AntiReq: "" },
    { code: "CPSC 471", level: 400, term: "Summer", difficulty: "5", Preq: "CPSC 355; and 319 or 331", AntiReq: "" },
    { code: "CPSC 481", level: 400, term: "Fall", difficulty: "5", Preq: "One of CPSC 301, 333, Software Engineering 301 or 311", AntiReq: "" },
    { code: "CPSC 491", level: 400, term: "Winter", difficulty: "5", Preq: "CPSC 355; and 319 or 331", AntiReq: "" },
    { code: "CPSC 499", level: 400, term: "Spring", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },  { code: "CPSC 502", level: 500, term: "Fall", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 503", level: 500, term: "Winter", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 505", level: 500, term: "Spring", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 511", level: 500, term: "Summer", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 513", level: 500, term: "Fall", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 517", level: 500, term: "Winter", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 518", level: 500, term: "Spring", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 519", level: 500, term: "Summer", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 521", level: 500, term: "Fall", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 522", level: 500, term: "Winter", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 525", level: 500, term: "Spring", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 526", level: 500, term: "Summer", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 527", level: 500, term: "Fall", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    { code: "CPSC 528", level: 500, term: "Winter", difficulty: "5", Preq: "Consent of the Department", AntiReq: "" },
    
    // ARKY courses
    { code: "ARKY 201", level: 200, term: "Fall", difficulty: "2", Preq: "", AntiReq: "" },
    { code: "ARKY 325", level: 300, term: "Winter", difficulty: "3", Preq: "ARKY 201 or consent of the Department", AntiReq: "" },
    { code: "ARKY 415", level: 400, term: "Spring", difficulty: "4", Preq: "ARKY 325", AntiReq: "" },

    //other courses
    { code: "MATH 249", level: 200, term: "Fall", difficulty: "3", Preq: "Mathematics 30-1 or 30-2", AntiReq: "Credit for both Mathematics 249 and any of 265, 275, 281 or Applied Mathematics 217 will not be allowed." },
    { code: "MATH 211", level: 200, term: "Winter", difficulty: "3", Preq: "One of Mathematics 249, 265, 275 or 281", AntiReq: "Credit for both Mathematics 211 and 213 will not be allowed." },
    { code: "PHIL 279", level: 200, term: "Fall", difficulty: "2", Preq: "", AntiReq: "Credit for both Philosophy 279 and 377 will not be allowed." },
    { code: "PHIL 312", level: 300, term: "Winter", difficulty: "3", Preq: "Philosophy 201 or consent of the Department", AntiReq: "" },
    { code: "PHIL 314", level: 300, term: "Fall", difficulty: "3", Preq: "Philosophy 279 or 377", AntiReq: "Credit for both Philosophy 314 and 415 will not be allowed." },
    { code: "SENG 300", level: 300, term: "Fall", difficulty: "4", Preq: "CPSC 233 and (SENG 201 or 301)", AntiReq: "Credit for both Software Engineering 300 and Computer Science 319 will not be allowed." },
];

window.courseDatabase = courses;
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
