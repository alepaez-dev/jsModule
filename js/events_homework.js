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
            listKoders += `<li>${koder}</li>`
        }
    })
    document.querySelector(selector).innerHTML = listKoders
    return listKoders;
}



const sortList = () => {
    let list, switching, listitems, i, shouldSwitch, valor, charaver;
    valor = document.getElementById("order").value;
    list = document.getElementById("container"); //list va a ser el papa
    switching = true; //para que empiece

    while(switching){
        switching = false; //falso para que no lo haga siempre
        listitems = list.getElementsByTagName("li"); //todas las LIS
        for(i = 0; i < (listitems.length -1); i++) {
            shouldSwitch = false; //no se hace el cambio

            //caracters con los que empiece el nombre porque sino siempre comparara la palabra "Koder"
            charaver = listitems[i].innerHTML.charAt(0);
            charaver_next = listitems[i+1].innerHTML.charAt(0);

            //ver si es ascendiente o descendiente
            if(valor === "ascend") {
                //comprobar si es mayor o no con lowercase para no tener errores de asci
                if(charaver.toLowerCase() > charaver_next.toLowerCase()){
                    shouldSwitch = true; //para hacer el cambio a asc
                    break; //rompemos el ciclo

                };
            }   else if(valor === "descend") {
                //comprobar si es mayor o no con lowercase para no tener errores de asci
                    if(charaver.toLowerCase() < charaver_next.toLowerCase()){
                    shouldSwitch = true; //para hacer el cambio a desc
                    break; //rompemos el ciclo
                    };
            }   else {
                //dejar como estaba
                addElements('#container', 10 , koders);
            };
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
