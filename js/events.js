const kodersArr = ["Ale", "ale2", "alejandra", "oscar", "ruben", "brian"];

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

const filterKodersSelectAD = kodersArr => {
  let order = document.getElementById("orden").value;
  let fakeArr = [...kodersArr];
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
  let filtrados = kodersArr.filter(koder => {
    return koder.toLowerCase().startsWith(letter.toLowerCase());
  });
  return filtrados;
};

const filterAZ = () => {
  let valorderad = document.getElementById("orden").value;
  let valorderaz = document.getElementById("orderletter").value;
  let resultadoKoders = filterKodersSelectAD(kodersArr);
  console.log(resultadoKoders);
  let arrayKoders = filterKodersSelectAZ(valorderaz);
  console.log(arrayKoders);
  addElements("#lista", resultadoKoders.length, arrayKoders);
};
