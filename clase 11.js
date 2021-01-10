console.log("hola k ace");

var dvd = {
    nombre: "david",

}

var otrapersona = {
    nombre: "david",
}

var personas = dvd;

var unaPersonaMas = {
    ...dvd
}

var david = {
    edad: 14,
    nombre: "David"
}

/*function imprimirSiMayor(persona){
    if (persona.edad <= 18){
        console.log(`${persona.nombre} es menor de edad`)
    } else {
        console.log(`${persona.nombre} es mayor de edad`)
    }
}*/

/*function esMayorDeEdad(personas){
    return persona.edad <= MAYORIA_DE_EDAD;
}

/*const esMayorDeEdad = function (persona) {
    return persona.edad <= MAYORIA_DE_EDAD;
}*/


/*const esMayorDeEdad = persona => {
    return persona.edad <= MAYORIA_DE_EDAD;
}*/

//const esMayorDeEdad = persona => persona.edad <= MAYORIA_DE_EDAD;

const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad = ({edad}) => edad <= MAYORIA_DE_EDAD;

const esMenorDeEdad = ({ edad }) => esMayorDeEdad({edad});

function imprimirSiMayor(persona){
    if (esMenorDeEdad(persona)){
        console.log(`${persona.nombre} es menor de edad`)
    } else {
        console.log(`${persona.nombre} es mayor de edad`)
    }
}

imprimirSiMayor(david);




