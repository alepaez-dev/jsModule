function tablas(str = "987") {
    // para moverme por el string
    for(let i = 0; i < str.length; i++) {
        console.log("tabla del ", str[i]);
        // para moverme por las multiplicaciones
        for(let j = 1; j <= 10; j ++){
            let res = parseInt(str[i]) * j;
            console.log(`${str[i]} x ${j} = ${str[i]*j}`);
        };
    };
};
tablas("321");

function palindromo(str = "emme") {
    let reverse_string = "";
    for(let i = str.length -1; i >= 0; i --){
        reverse_string += str[i];
    };
    console.log(reverse_string);
    if(reverse_string === str) {
        console.log("es palindromo");
    }else {
        console.log("no es palindromo");
    };
};
palindromo();

function dataType(data1 = "data1", data2 = 2){
    console.log("el dato 1 es un tipo de dato: ", typeof data1);
    console.log("el dato 2 es un tipo de dato: ", typeof data2);
};
dataType();

