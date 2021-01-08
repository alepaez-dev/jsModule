const kodersArr = [
  "miguel",
  "ale3",
  "ale2",
  "alejandra",
  "oscar",
  "ruben",
  "brian",
  "jose",
];

// Exercise
const addElements = (selector, numberElements, arrNames) => {
  let listKoders = "";
  arrNames.forEach((koder, index) => {
    if (index < numberElements) {
      listKoders += `<li>Koder ${index + 1}: ${koder}</li>`;
    }
  });
  document.querySelector("" + selector).innerHTML = listKoders;
};

// // Exercise filter
// const filterKoders = letter => {
//   let filtrados = kodersArr.filter(koder => {
//     return koder.toLowerCase().startsWith(letter.toLowerCase());
//   });
//   addElements("#lista", filtrados.length, filtrados);
// };

const filterKodersSelectAD = arr => {
  let order = document.getElementById("orden").value;
  let fakeArr = [...arr];
  console.log("fakeArr:", fakeArr);
  let orderArray = fakeArr.sort();
  if (order === "a") {
    return orderArray;
  } else if (order === "d") {
    return orderArray.reverse();
  } else {
    return fakeArr;
  }
};

const filterKodersSelectAZ = letter => {
  console.log("resultadoooooo koders:", kodersArr);
  let filtrados = resultadoKoders.filter(koder => {
    return koder.toLowerCase().startsWith(letter.toLowerCase());
  });
  //   addElements("#container", 10, filtrados);
  return filtrados;
};

const filterSearch = word => {
  console.log("word: ", word);
  console.log("si anda entrando al filterSearch");
  let buscados = resultadoKoders.filter(koder => {
    return koder.toLowerCase().includes(word.toLowerCase());
  });
  console.log("buscados arreglo", buscados);
  addElements("#container", buscados.length, buscados);
};

idvalue = "";
console.log("id search: ", document.getElementById("search").value);
const filterAZ = () => {
  //   let valorderad = document.getElementById("orden").value;
  //   let valorderaz = document.getElementsByClassName("botones").value;
  //   console.log("idvalue:", idvalue);

  resultadoKoders = filterKodersSelectAD(kodersArr);
  console.log("idvalue: ", idvalue);
  console.log("resultadokoders1: ", resultadoKoders);
  if (idvalue !== "") {
    arraykod = filterKodersSelectAZ(idvalue);
    addElements("#container", resultadoKoders.length, arraykod);
    return;
  } else {
    console.log("idvalueaaaaa:", idvalue);
    addElements("#container", resultadoKoders.length, resultadoKoders);
  }
};
