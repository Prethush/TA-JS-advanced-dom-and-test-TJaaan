let ul = document.querySelector("ul");

let max = 3;
let index = 0;

function findQuotes() {
for(let i = 0; i < max; i++) {
    let li = document.createElement("li");
    li.style.textAlign = "center";
    let quote = document.createElement("blockquote");
    let author = document.createElement("cite");
    quote.innerText = quotes[index].quoteText;
    author.innerText = quotes[index].quoteAuthor;
    li.append(quote, author);
    ul.append(li);
    index++;
}
}



document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop, "scrollTop");
    let clientHeight = document.documentElement.clientHeight;
    console.log(clientHeight, "clientHeight");
    let scrollHeight = document.documentElement.scrollHeight;
    console.log(scrollHeight, "scrollHeight");
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
        findQuotes();
    }
})

document.addEventListener("DOMContentLoaded", () => {
    alert(`The content of the DOM is loaded`);
    findQuotes();
})