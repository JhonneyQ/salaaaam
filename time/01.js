const cop = document.querySelector(".count")
const cop1 = document.querySelector(".count1")
const btn = document.querySelector(".btn")
let count = cop1.value

btn.addEventListener("click", ()=> {
    let count = cop1.value
    const intervalId = setInterval(() => {
        cop.textContent = --count
        if (count === 0) {
          clearInterval(intervalId);
        }else if(count <= 0){
          clearInterval(intervalId);
        }
      }, 1000);
})

