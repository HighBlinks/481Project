// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector(".regular_button");
    const springSummerSelect = document.getElementById("spring-summer");
    const numYears = document.getElementById("years");

    submitButton.addEventListener("click", () => {
        const springSummerValue = springSummerSelect.value;
        const numYearsValue = numYears.value;
        sessionStorage.setItem("springSummer", springSummerValue);
        sessionStorage.setItem("years", numYearsValue);
    });
});
