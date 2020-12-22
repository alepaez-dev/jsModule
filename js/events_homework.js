const koders = [
  "oscar",
  "alex",
  "ruben",
  "brian",
  "omar",
  "ale",
  "omnaldip",
  "raul"
];

const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(selector).innerHTML = listKoders
    return listKoders;
}

addElements('#container', 10 , koders);

const sortList = () => {
    let list, switching, listitems, i, shouldSwitch;
    let valor = document.getElementById("order").value;
    console.log("SI JALA!!!");
    
    list = document.getElementById("container"); //list va a ser el papa
    switching = true; //para que empiece

    while(switching){
        switching = false; //falso para que no lo haga siempre
        listitems = list.getElementsByTagName("li"); //todas las LIS
        console.log("listitems: ", listitems);
        for(i = 0; i < (listitems.length -1); i++) {
            shouldSwitch = false; //no se hace el cambio
            let charaver = listitems[i].innerHTML.charAt(9);
            let charaver_next = listitems[i+1].innerHTML.charAt(9);
            if(valor === "ascend")
            //comprobar si es mayor o no con lowercase para no tener errores de asci
            if(charaver.toLowerCase() > charaver_next.toLowerCase()){
                shouldSwitch = true; //para hacer el cambio
                console.log("si entra al if");
                break; //rompemos el ciclo
            }
        };
        //si es true hacer el cambio, ya lo modificamos en el for con la comparacion de si esta ordenado o no
        if(shouldSwitch) {
            //parentNode es para agarrar el papa que en este caso es la UL
            //insertBefore es para agregar un elemento antes de otro, primer parametro lo que agregas, segundo es el antes de
            listitems[i].parentNode.insertBefore(listitems[i+1],listitems[i]);
            switching = true; //para seguir corriendo el ciclo, cuando ya no se cumpla esta condicion es que ya esta todo ordenado y debe mantenerse false
        };
    };

};
// newArrayKoders = addElements('#container', 10 , koders);
// console.log("aaa", newArrayKoders);
// console.log("elementos: ", addElements('#container', 10 , koders));
// console.log("ordenados asc: ", orderAsc);

// const getValue = () => {
//     let valor = document.getElementById("order").value;
//     console.log("value: ", valor);
// }