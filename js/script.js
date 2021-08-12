const form = document.getElementById("subscribe");
const email = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let validEmail = email.value.indexOf('@');
    
    if (email.value == "") {
        error.removeAttribute("hidden");
        email.style.cssText = "border-color: var(--rose);";
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        location.href = 'index.html?email=' + email.value;
    } else {
        error.removeAttribute("hidden");
        email.style.cssText = "border-color: var(--rose);";
    }
})
