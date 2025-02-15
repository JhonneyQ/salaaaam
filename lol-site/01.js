import { champions } from "./arr.js";
import { setDataToLocalStorage , getDataFromLocalStorage, calcBasketCount} from "./helper.js";

const championss = document.querySelector(".champions")
const users = getDataFromLocalStorage("user") || [];
const user = users.find((u) => u.isLogged);
window.addEventListener("DOMContentLoaded", function () {
    const sub = document.querySelector(".sub")
    sub.textContent = count;
  });
  let count = 0
function drawcards(champion){
    championss.innerHTML = ""
    champion.forEach(element => {
        const championsDiv = document.createElement("div")
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
        championss.append(cardDiv)

        
        plus.addEventListener("click", () => {
            console.log(user)
            count++;
            sub.textContent = count;
            calcBasketCount(user)
        });

        minus.addEventListener("click", () => {
            if(count !== 0 ){
                count--
            }
            sub.textContent = count;
            calcBasketCount(user)
        });
        
    });

}

drawcards(champions)