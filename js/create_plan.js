// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector(".regular_button");
    const springSummerSelect = document.getElementById("spring-summer");

    submitButton.addEventListener("click", () => {
        const springSummerValue = springSummerSelect.value;
        sessionStorage.setItem("springSummer", springSummerValue);
    });
});
