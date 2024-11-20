const namee = document.querySelector(".name")
const password = document.querySelector(".password")
const submit = document.querySelector(".submit")
const form = document.querySelector("form")

const arr = JSON.parse(localStorage.getItem("user")) || [];


form.addEventListener("submit", function sub(event) {
    event.preventDefault()

    const user = {
        id: Date.now(),
        name: namee.value,
        password: password.value
        
    }

    arr.push(user)

    localStorage.setItem("user", JSON.stringify(arr));
    window.location.replace("./login.html");

    this.reset()
})
