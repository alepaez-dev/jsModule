// funciones callback
// programacion funcional
// la programacion fucnional permite el uso de funciones ocmo
// argumentos

// function saludar(name,callback) {

//     callback(name);
// };

// saludar("Alejandra Hernandez",function(name) {
//     console.log(`Hola me llamo ${name}`);
// });

// function saludo(name) {
//     console.log(`Hola me llamo ${name}`);
// };

// const saludo = name => console.log("Hola me llamo", name);
// saludar("Alejandra Paez", saludo);











// const suma = (a,b,callback) => callback(a,b);
// //1
// const sumar = (a,b) => console.log(a+b);
// suma(2,6, sumar)

// //2
// const sumar2 = (a,b) => a + b;
// let resultado = suma(10,10,sumar2);
// console.log(resultado);


// //PALINDROMO CALLBACKS
// const palindromo = (str, fnReverse) => {
//     let reverse_str = fnReverse(str);
//     if (str === reverse_str){
//         return console.log("es palindromo");
//     } else {
//         return console.log("no es palindromo");
//     };
// };

// const fn_reverse_string = (str) => {
//     let reverse_string = ""
//     for(let i = str.length -1; i >= 0; i --){
//         reverse_string += str[i];
//     };
//     return reverse_string;
// };

// palindromo("anna", fn_reverse_string);

/**
 * Sumar 2 numeros
 * El resultado dividirlo entre 2
 * El resultado sustraerle 100
 * El resultado, validar si es mayor a 0
 */

 const suma = (num1,num2) => num1 + num2;
 const dividir = (num1,num2, fnSumar) => fnSumar(num1,num2)/2;
 const restar = (num1,num2, fnSumar, fnDividir) => fnDividir(num1,num2, fnSumar) - 100;
 const validar = (num1,num2, fnSumar, fnDividir, fnRestar) => {
     let res = fnRestar(num1,num2,fnSumar,fnDividir);
     if (res > 0) {
         return true;
     } else{
         return false
     };
 };

 let resultado = validar(200,200, suma, dividir, restar);
 if (resultado){
    console.log("es mayor a 0");
 } else{
     console.log("no es mayor a");
 };




