
let num = parseInt(prompt("Ingresa un número entero de cinco dígitos: "));

let numStr = num.toString();

let numInvertido = numStr.split('').reverse().join('');

if (numStr === numInvertido) {
    console.log("El número " + num + " es capicúo.");
} else {
    console.log("El número " + num + " no es capicúo.");
}
