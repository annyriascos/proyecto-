function obtenerMayorDigito(num) {
    let digitos = num.toString().split('');  
    let mayorDigito = Math.max(...digitos.map(Number));  
    return mayorDigito;
}


let num1 = parseInt(prompt("Ingresa el primer número de dos dígitos: "));
let num2 = parseInt(prompt("Ingresa el segundo número de dos dígitos: "));
let num3 = parseInt(prompt("Ingresa el tercer número de dos dígitos: "));


let mayorDigitoNum1 = obtenerMayorDigito(num1);
let mayorDigitoNum2 = obtenerMayorDigito(num2);
let mayorDigitoNum3 = obtenerMayorDigito(num3);


let mayorDigito = Math.max(mayorDigitoNum1, mayorDigitoNum2, mayorDigitoNum3);


console.log("El mayor dígito es: " + mayorDigito);
