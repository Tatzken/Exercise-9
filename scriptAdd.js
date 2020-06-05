// Get and declare variables

const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const content = document.getElementById("content");


function addParagraph() {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = myText.value;
    newParagraph.className = "beautiful";
    content.appendChild(newParagraph);
}

myButton.addEventListener("click", addParagraph);