const sections = document.querySelectorAll("section");
for(const section of sections){
  section.style.border = "2px solid skyblue"
  section.style.marginBottom = "5px"
  section.style.borderRadius = "15px"
  section.style.padding = "15px"
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = "yellow"

const placesList = document.getElementById("places-list");
const li = document.createElement("li");
li.innerText = "Kata Bon"
placesList.appendChild(li);

const mainContainer = document.getElementById("main-content");
const section = document.createElement("section");
mainContainer.appendChild(section);
const h1 = document.createElement("h1");
h1.innerText = "My Food List"
section.appendChild(h1);
const ul = document.createElement("ul")
section.appendChild(ul)
const li1 = document.createElement("li");
li1.innerText = "Fried Rice"
ul.appendChild(li1)
const li2 = document.createElement("li");
li2.innerText = "Mutton Kacchi"
ul.appendChild(li2)
const li3 = document.createElement("li");
li3.innerText = "Meat Box"
ul.appendChild(li3)


const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
  <li>Drop Shoulder T shirt</li>
  <li>Polo T Shirt</li>
  <li>Shirt</li>
  <li>Panjabi</li>
</ul>
`
mainContainer.appendChild(sectionDress)

