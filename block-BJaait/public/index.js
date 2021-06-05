let input = document.querySelector(".form-control");
let add = document.querySelector(".add");
let dragabbleContainer = document.querySelector(".draggable-container");
let elements = undefined;

add.addEventListener("click", handleClick);

function handleClick(e) {
    let input = e.target.previousElementSibling;
    if(input.value) {
    
    let li = document.createElement("li");
    li.innerText = input.value;
    input.value = "";
    li.draggable = "true";
    dragabbleContainer.append(li);

    let elements = Array.from(dragabbleContainer.children);
    elements.forEach((elem) => {
        
        elem.addEventListener("dragstart", dragStart);
        elem.addEventListener("dragend", dragEnd);
        elem.addEventListener("dragover", dragOver);
        elem.addEventListener("dragleave", dragLeave);
        elem.addEventListener("dragenter", dragEnter);
        elem.addEventListener("drop", dragDrop.bind(elem));
    })
    
}
}

var dragged = undefined;
let replaced = undefined;


function dragStart(e) {
    dragged = this.innerHTML;
    
}

function dragEnd() {
    if(replaced !== dragged && replaced !== undefined) {
    this.innerHTML = replaced;
    replaced = undefined;
    }
}

function dragOver(e) {
    e.preventDefault();
    
}

function dragEnter(e) {
   
}

function dragLeave() {
    
}

function dragDrop() {
    if(dragged !== this.innerHTML) {
    replaced = this.innerHTML;
    this.innerHTML = dragged;
    
}
}