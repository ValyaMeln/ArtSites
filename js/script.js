let link = document.querySelector('.header__contacts-feedback');
let popup = document.querySelector("#login-form");
let popupContent = document.querySelector("#login-form .modal-content");
let close = document.querySelector(".modal-content-close");
let name = popup.querySelector("[name=name]");
let form = popup.querySelector("form");
let email = popup.querySelector("[name=email]");
let storage = localStorage.getItem("name");


link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        name.value = storage;
        name.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    popupContent.classList.remove('modal-error');
});

form.addEventListener("submit", function (event) {
    if (!name.value || !email.value) {
        event.preventDefault();
        popupContent.classList.add("modal-error")
    } else {
        localStorage.setItem("name", name.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
})

