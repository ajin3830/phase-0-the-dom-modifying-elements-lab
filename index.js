// Write your code here!
main.remove();
const newHeader = document.createElement("h1");
newHeader.id="victory";
newHeader.textContent ="<h1>AJ is the champion</h1>";
newHeader.style.textAlign = "center";

document.querySelector('#something').appendChild(newHeader)

const element = document.createElement("div")
document.body.append(element)

const ul = document.createElement("ul")
for (let i = 0; i < 5; i++) {
    const li = document.createElement("li")
    li.textContent = (i + 1).toString()
    ul.append(li)
}    
element.append(ul)

element.style.backgroundColor = "#FFA500"
element.className = "pet-listing dog";
element.classList.remove("dog")
element.classList.add("cat", "sale")

document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li`:nth-child(2)");
ul.removeChild(secondChild);
// even if there's only one ul, not specifing [0] will log 
// htmlcollection which in this case dont matter but will when
// theres multiple uls
// document.getElementsByTagName("ul")
// HTMLCollection [ul]
// 0: ul
// length: 1
// [[Prototype]]: HTMLCollection



const elementH1 = document.querySelector("h1")
elementH1.style.height = "300px";
elementH1.style.backgroundColor = "#27647B"
elementH1.style.fontSize = "34px"