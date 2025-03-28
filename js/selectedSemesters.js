document.addEventListener("DOMContentLoaded", () => {
    const springSummerValue = sessionStorage.getItem("springSummer");
    const numYearsValue = sessionStorage.getItem("years");

    // Helper to unhide an element by ID
    const showElement = (id) => {
        const el = document.getElementById(id);
        if (el) el.style.display = "block";
    };

    // Unhide additional years if needed
    if (numYearsValue) {
        const yearsToShow = parseInt(numYearsValue, 10);
        for (let i = 5; i <= yearsToShow; i++) {
            // You can give each year wrapper a unique ID in your HTML like id="year5", id="year6", etc.
            showElement(`year${i}`);
        }
    }

    if (springSummerValue) {
        if (springSummerValue === "spring" || springSummerValue === "both") {
            for (let i = 1; i <= 6; i++) {
                showElement(`spring${i}`);
            }
        }

        if (springSummerValue === "summer" || springSummerValue === "both") {
            for (let i = 1; i <= 6; i++) {
                showElement(`summer${i}`);
            }
        }
    }
});
