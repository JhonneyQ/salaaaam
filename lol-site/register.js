import { getDataFromLocalStorage, setDataToLocalStorage } from "./helper.js";


const namee = document.querySelector(".name")
const password = document.querySelector(".password")
const submit = document.querySelector(".submit")
const form = document.querySelector("form")

const arr = getDataFromLocalStorage("user") || [];


form.addEventListener("submit", function sub(event) {
    event.preventDefault()

    const user = {
        id: Date.now(),
        name: namee.value,
        password: password.value,
    }

    arr.push(user)

    setDataToLocalStorage("user", arr)
    window.location.replace("./login.html");

    this.reset()
})
