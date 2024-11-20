import { champions } from "./arr.js";

const championss = document.querySelector(".champions")
window.addEventListener("DOMContentLoaded", function () {
    const sub = document.querySelector(".sub")
    sub.textContent = count;
  });
  let count = 0
function drawcards(champion){
    championss.innerHTML = ""
    champion.forEach(element => {
        const championsDiv = document.createElement("div")
        const cardsDiv = document.createElement("div")
        const cardDiv = document.createElement("div")
        const img = document.createElement("img")
        const par = document.createElement("div")
        const pname = document.createElement("p")
        const ptitle = document.createElement("p")
        const plus = document.createElement("button")
        const minus = document.createElement("button")
        const basket = document.querySelector(".basket")
        const sub = document.querySelector(".sub")


        championsDiv.className="champions"
        cardsDiv.className="cards"
        cardDiv.className="card"
        par.className="par"
        pname.className="name"
        ptitle.className="title"
        plus.className="plus"
        minus.className="minus"

        img.setAttribute("src" , element.icon)
        pname.textContent = element.name
        ptitle.textContent = element.title
        plus.textContent = "+";
        minus.textContent = "-";

        par.append(pname, ptitle,minus,plus)
        cardDiv.append(img,par)
        cardsDiv.append(cardDiv)
        championss.append(cardsDiv)

        
        plus.addEventListener("click", () => {
            count++;
            sub.textContent = count;
        });

        minus.addEventListener("click", () => {
            if(count !== 0 ){
                count--
            }
            sub.textContent = count;
        });
        
    });

}

drawcards(champions)