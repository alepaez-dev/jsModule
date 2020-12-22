console.log("dom");

let ul = document.createElement("ul");
let ul2 = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
let an = document.createElement("a");
let an2 = document.createElement("a");
let texto_an = document.createTextNode("item 1");
let texto_an2 = document.createTextNode("item 2");
// let att = document.createAttribute("href");
// att.value = "#";
// let att2 = document.createAttribute("href");
// att2.value = "#";

an.setAttribute("href", "#");
// an2.setAttributeNode(att2);
an.setAttribute("href", "#");
an.appendChild(texto_an);
an2.appendChild(texto_an2);
li.appendChild(an);
li2.appendChild(an2);
ul.appendChild(li);
ul2.appendChild(li2);
document.getElementById("container").appendChild(ul);
document.getElementById("container").appendChild(ul2);

//INNERHTML
let elementUL = "";
let elementLI = "";
for (let i = 0; i < 2; i++) {
  elementLI += `<li><a href="#">anchor ${i}</a></li>`;
}
elementUL += `<ul>${elementLI}</ul>`;
document.getElementById("container_2").innerHTML = elementUL;

const koders = [
  "ale",
  "oscar",
  "ruben",
  "brian",
  "alex",
  "omar",
  "omnaldip",
  "raul"
];

const addElements = (selector, arrNames, numberElements = arrNames.length) => {
  numberElements > arrNames.length ? numberElements = arrNames.length : numberElements;
  for (let i = 0; i < numberElements; i++) {
    document.querySelector(selector).innerHTML += `<li>Koder ${i + 1}: ${arrNames[i]}</li>`;
  };
};
filterKoders = letter => {
  let filtrados = koders.filter(element => element.startsWith(letter));
  // return filtrados;
  addElements("#container_3", filtrados,filtrados.length);
};


// addElements("#container_3", koders,15);

/**
 * const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}
const kodersArr = ['ale','oscar','ruben', 'brian']
addElements('#lista', 1, kodersArr)
 */


// const addElements = (selector, numberElements, arrNames) => {
//   numberElements > arrNames.length ? (numberElements = arrNames.length) : numberElements;
//   for (let i = 0; i < numberElements; i++) {
//     document.getElementById(selector).innerHTML += `<li>Koder ${i + 1}: ${arrNames[i]}</li>`;
//   };
// };

//AGREGAR CLASES A LA YA LISTA DE CLASES
// secondElenebt.classList.add("active")
// document.querySelector(".clase")
// document.querySelector("#clase")
// document.querySelector(".clase")
// document.querySelectorAll(".clase")

// let texto_title = document.createTextNode("soy un titulo");
// let div = document.createElement("div");
// let texto_div = document.createTextNode("aqui esta el div creado");

// div.appendChild(texto_div);
// document
//   .getElementById("container")
//   .appendChild(title)
//   .appendChild(texto_title);
// document.getElementById("container").appendChild(div).appendChild(texto_div);

// <!-- <ul>
//             <li>
//                 <a href=""></a>
//             </li>
//             <li>
//                 <a href=""></a>
//             </li>
//  </ul> -->
