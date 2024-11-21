export function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
export function setDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }


    export function calcBasketCount(user) {
    console.log(user);
  
    const basketCount = document.querySelector(".sub");
  
    let count = user.basket.reduce((sum, item) => sum + item.count, 0);
    basketCount.textContent = count;
  }
//   export function calcFavsCount(user) {
//     const favsCount = document.querySelector(".favs-count");
  
//     let count = user.favorites.length;
//     favsCount.textContent = count;
//   }