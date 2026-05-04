const fuente = "confiable";
let informacionVerificada = true; 
if (fuente != "confiable") {
    console.log ("La información NO puede compartirse.");
} else {
    console.log ("La información puede compartirse.");
}

let color_cielo = "rojo";

if (color_cielo === "rojo") {
    console.log ("El cielo es rojo.");
} else {
    console.log ("El cielo NO es rojo.");
}



function esMayorDeEdad(edad) {
    if(edad >= 18){
        return true;
    } else {
        return false;
    }
}

if (esMayorDeEdad(40)) {
    console.log("La persona es mayor de edad.");
} else {
    console.log("La persona es menor de edad.");
}

function ladrar() {
    console.log ("!Guau!");
}

function maullar () {
    console.log ("¡Miau!");
}

ladrar();
maullar();
ladrar();
maullar();
ladrar();
maullar();
let resultado = esMayorDeEdad(15);
console.log("¿Es mayor de edad? "  +  resultado);