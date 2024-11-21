import { getDataFromLocalStorage } from "./helper.js"

const namee = document.querySelector(".name")
const password = document.querySelector(".password")
const submit = document.querySelector(".submit")
const form = document.querySelector("form")

form.addEventListener("submit", function sub(event) {
    event.preventDefault()

    const all = getDataFromLocalStorage("user") || []

    let isUserValid = false;

    all.forEach(element => {
        if(namee.value === element.name && password.value === element.password) {
            isUserValid = true;
        }
    });

    if (isUserValid) {
        window.location.replace("./01.html");
    } else {
        alert("Invalid username or password");
    }

    this.reset()
})