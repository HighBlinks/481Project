document.addEventListener("DOMContentLoaded", () => {
    const springSummerValue = sessionStorage.getItem("springSummer");

    if (springSummerValue) {
       
        // Helper to unhide an element by id
        const showElement = (id) => {
            const el = document.getElementById(id);
            if (el) el.style.display = "block";
        };

        // Unhide based on selection
        if (springSummerValue === "spring" || springSummerValue === "both") {
            for (let i = 1; i <= 4; i++) {
                showElement(`spring${i}`);
            }
        }

        if (springSummerValue === "summer" || springSummerValue === "both") {
            for (let i = 1; i <= 4; i++) {
                showElement(`summer${i}`);
            }
        }
    } else {
        alert("No spring/summer selection was found in session storage.");
    }
});
