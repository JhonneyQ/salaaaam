const BASE_URL = "https://northwind.vercel.app/api"

function getdata(endpoint) {
    fetch(`${BASE_URL}/${endpoint}`)
        .then((res) => res.json())

        .then((data) => {
            drawtable(data)
        })
}

const tbody = document.querySelector("tbody")
console.log(tbody);

function drawtable(arr) {
    tbody.innerHTML = ""
    arr.forEach(element => {
        tbody.innerHTML = `
        <tr>
        <td>${element.id}</td>
        <td>${element.companyName}</td>
        <td>${element.contactTitle}</td>
        <td><button class="delete btn btn-outline-danger"data-id=${element.id}>delete</button></td>
        </tr>`
    });

    const deletee = document.querySelectorAll("delete")

    deletee.forEach((btn) => {
        btn.addEventListener("click", function(){})
      
    })

}


function deletebtn(endpoint, id, btn) {
    fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "DELETE" })
        .then((res) => {
            if (res.ok) {
                btn.closest("tr").remove();
            }
        })
}

getdata("customers")

