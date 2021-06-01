let form = document.querySelector("form");

let container = document.querySelector(".container");


let cardsData = JSON.parse(localStorage.getItem("cards")) || [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    
        let title = event.target.elements.title.value;
        let category = event.target.elements.option.value;
        cardsData.push({title, category});
        localStorage.setItem("cards", JSON.stringify(cardsData));
        console.log(cardsData);
        event.target.elements.title.value = "";
        event.target.elements.option.value = "";
        createUI(cardsData, container);
  
})

function handleDbClick(event, info, id, label) {

    let elm = event.target;
    let input = document.createElement("input");
    let parent = event.target.parentElement;
    input.value = info;
    input.addEventListener("keyup", (e) => {
        if(e.keyCode === 13) {
            let updatedValue = e.target.value;
            console.log(updatedValue);
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
        }
    })

    input.addEventListener("blur", (e) => {
        
            let updatedValue = e.target.value;
            console.log(updatedValue);
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem("cards", JSON.stringify(cardsData));
        
    })
    parent.replaceChild(input, elm);
}

function createUI(data = cardsData, root = container) {
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((elm, index) => {
        
        let div = document.createElement("div");
        div.classList.add("flexItem");
        let category = document.createElement("h1");
        category.innerText = elm.category;
        category.addEventListener("dblclick", (event) => {
            handleDbClick(event, elm.category, index, "category");
        });
        let title = document.createElement("h3");
        title.innerText = elm.title;
        title.addEventListener("dblclick", (event) => {
            handleDbClick(event, elm.title, index, "title");
        });
        div.append(category, title);
        fragment.appendChild(div);
        
    })

    root.append(fragment);
}

createUI(cardsData, container);