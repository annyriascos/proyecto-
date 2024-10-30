
let num = parseInt(prompt("Ingresa un número entero de tres dígitos: "));

let numStr = num.toString();


if (numStr[0] === numStr[2]) {
    console.log("El primer dígito es igual al último.");
} else {
    console.log("El primer dígito no es igual al último.");
}


