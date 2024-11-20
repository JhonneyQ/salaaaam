const namee = document.querySelector(".name")
const password = document.querySelector(".password")
const submit = document.querySelector(".submit")
const form = document.querySelector("form")

const arr = [];


form.addEventListener("submit", function sub(event) {
    event.preventDefault()

    const student = {
        id: Date.now(),
        name: namee.value,
        password: password.value
        
    }

    arr.push(student)

    localStorage.setItem("students", JSON.stringify(arr));

    this.reset()
})