const nam = document.querySelector(".name")
const score = document.querySelector(".score")
const submit = document.querySelector(".submit")
const sum = document.querySelector(".sub")
const arr = []

nam.addEventListener("input", () => {
    if (nam.value.trim() === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
});

  
submit.addEventListener("click", ()=>{
    arr.push({name :nam.value , score:  score.value})
    localStorage.setItem("student" , JSON.stringify(arr))

})

sum.a("click", () => {
    const totalScore = arr.reduce((acc, student) => acc + student.score, 0);
    console.log("Total Score: " + totalScore);
});

