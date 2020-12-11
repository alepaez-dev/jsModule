// imprimir la tabla del 8 en reversa
// for(let i = 10 ; i >= 0; i --) {
//     console.log(`8 x ${i} = ${8*i}`);
// };

console.log("tabal del 8");
i = 10
do {
    console.log(`8 x ${i} = ${8*i}`);
    i--;
} while( i >= 0);

//imprimir los numeros pares entre 1 y 100
console.log("numeros pares");
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`${i} es par`);
    };
};

// dado un string reverse

// for (i = str.length - 1; i >=0; i --) {
//     reverse_string += str[i];
// };

let str = "reverse";
let reverse_string = "";
i = str.length - 1;
while(i >= 0) {
    reverse_string += str[i];
    i--;
};
console.log(reverse_string);

// tabla del 7 do while
console.log("tabla de 7 con while");
i = 1;
while(i <= 10) {
    console.log(`7 x ${i} = ${7*i}`);
    i++;
};