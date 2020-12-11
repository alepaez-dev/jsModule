// Imprimir en consola la tabla del 7
for (let i = 1; i <= 10; i ++) {
    console.log(`7 x ${i} = ${7*i}`);
};

// imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....
for(i = 0; i < 99; i ++) {
    if(i % 3 === 0 && i % 7 === 0) {
        console.log(i);
    }
};

// imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5
let str = "En un lugar de la mancha entonces fue ayer en mazatlan";
let count= 0;
for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        count ++;
    };
};
console.log(`Hay ${count} cantidad de espacios en el string "${str}"`);

// imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4
str = "hola mundoooaa";
count = 0;
array_vocals = ["a","o","u","i","e"];
for (i = 0; i < str.length; i ++) {
   for(let j = 0; j < array_vocals.length ; j ++) {
       if(str[i].includes(array_vocals[j])) {
           count ++ ;
       };
   };
};
console.log(`hay ${count} cantidad de vocales en el string "${str}"`);


