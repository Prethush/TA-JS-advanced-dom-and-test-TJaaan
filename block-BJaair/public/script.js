let form = document.querySelector("form");
let inputElm = document.querySelector(".input");
let option = document.querySelector(".select");
let container = document.querySelector(".container");

let obj = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let div = document.createElement("div");
        div.classList.add("flexItem");
        let h3 = document.createElement("h3");
        let h1 = document.createElement("h1");
    
        h3.innerText = inputElm.value;
        h1.innerText = option.value;
        obj[h3.innerText] = h1.innerText;
        localStorage.values = obj;
        div.append(h3, h1);
    
        container.append(div);
  
})


function createCards() {
    
        for(let key in localStorage.obj) {
        
        let div = document.createElement("div");
        div.classList.add("flexItem");
        let h3 = document.createElement("h3");
        let h1 = document.createElement("h1");
    
        h3.innerText = key;
        h1.innerText = localStorage.obj[key];
        localStorage.setItem(h3.innerText, h1.innerText);
        div.append(h3, h1);
    
        container.append(div);
        }
    
}

window.addEventListener("DOMContentLoaded", createCards);