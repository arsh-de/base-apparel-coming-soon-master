const button = document.querySelector("button");
const email = document.querySelector(".email");
const invalidIcon = document.querySelector(".error");
const validText = document.querySelector(".confirm");

button.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    invalidIcon.classList.add("none");
    validText.classList.add("none");

    if (!emailValue) {
        invalidIcon.classList.remove("none");
        validText.textContent = "Please enter an email!";
        validText.classList.remove("none");
        validText.style.color = "red"
    } else if (!isValidEmail) {
        invalidIcon.classList.remove("none");
        validText.classList.remove("none");
        validText.textContent = "Please enter a valid email!";
        validText.style.color = "red"
    } else {
        validText.classList.remove("none");
        validText.textContent = "Email sent!";
        invalidIcon.classList.add("none");
        email.value = "";
        validText.style.color = "green"
    }
});
