import { champions } from "./arr.js";

const champions = document.querySelector(".champions")

function drawcards(champion){
    champions.innerHTML = ""
    champion.forEach(element => {
        const championsDiv = document.createElement("div")
        const cardsDiv = document.createElement("div")
        
    });
}