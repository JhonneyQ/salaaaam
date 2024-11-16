import products from "./data.js";
const btn = document.querySelector(".sort")




const table = document.querySelector(".table")
const tBody = document.querySelector(".tbody")

function drawTable(array) {
    tBody.innerHTML = "";
    array.forEach((product) => {
      const trElem = document.createElement("tr");
      trElem.innerHTML = `
              <td><img src="${product.image}" width="100"/></td>
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.rating.rate}</td>
              <td>${product.rating.count}</td>
              <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
          `;
  
      tBody.appendChild(trElem);
    });

    
  }
  drawTable(products);


