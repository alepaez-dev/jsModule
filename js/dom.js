console.log("dom");

let ul = document.createElement("ul");
let ul2 = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
let an = document.createElement("a");
let an2 = document.createElement("a");
let texto_an = document.createTextNode("item 1");
let texto_an2 = document.createTextNode("item 2");

an.appendChild(texto_an);
an2.appendChild(texto_an2);
li.appendChild(an);
li2.appendChild(an2);
ul.appendChild(li);
ul2.appendChild(li2);

document.getElementById("container").appendChild(ul);
document.getElementById("container").appendChild(ul2);
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
