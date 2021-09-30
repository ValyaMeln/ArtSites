let link = document.querySelector('.login');
let popup = document.querySelector(".modal-content");
let close = document.querySelector(".modal-content-close");
let login = popup.querySelector("[name=login]");
let form = popup.querySelector("form");
let password = popup.querySelector("[name=password]");
let storage = localStorage.getItem("login");

let mapOpen = document.querySelector('.js-open-map');
let mapPopup = document.querySelector(".modal-content-map");
let mapClose = document.querySelector(".modal-content-close");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
    console.log("Клік по силці");
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
    console.log("Нажали хрестик");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error")
    } else {
        localStorage.setItem("login", login.value);
    }
    console.log("нажавши Війти Перевірили чи заповнені значення форми");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
    console.log("??????????");
})


mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    console.log("Клік по силці2222222");
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-content-show');
    console.log("Клік по силці33333");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {

        mapPopup.classList.remove("modal-content-show");

    }
    console.log("Клік по силці4444");
})