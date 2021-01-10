/*var nombre;

nombre = "David";

var apellido = "Lopez";

console.log("hola " + nombre + " " + apellido);

var apellidoenMinuscula = apellido.toLowerCase();

apellidoenMinuscula


var primerLetraDelNombre = nombre.charAt(0);
primerLetraDelNombre

var cantidadDeLetras = apellido.length;

var nombreCompleto = `${nombre.toUpperCase()} ${apellido}`;

var str = nombre.substr(1, 2);


var edad = 24

edad += 1 //lo que ya tenia edad mas 1 (edad vale 25)
edad ++ //lo que vale edad mas 1 (edad vale 26)
edad -= 1 //lo que ya tenia edad menos 1 (edad vale 25)
edad -- //lo que ya tenia edad menos 1 (edad vale 24)*/

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //redondear una cantidad con Math.round()
var totalStr = total.toFixed(2) //toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var total2 = parseFloat(totalStr) //parsear de un string a un float (convertir de texto a numero decimal)


var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / persona

function imprimirNombreEnMayusculas1(n) {
    n = n.toUpperCase()
    console.log(n)
}

function imprimirNombreNuevo({ nombre }){
    console.log(nombre.toUpperCase())
}

var david = {
    nombre: "David",
    apellido: "Lopez",
    edad: 20,
    ingeniero: false,
    guitarrista: true,
    cantante: true,
    dj: false,
    drone: false,
    cocinero: true
}

function imprimirDesestructurado(persona){
    //var nombre = persona.nombre //esta y la linea siguiente son equivalentes
    var { nombre } = persona;
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas1(david.nombre)

imprimirNombreNuevo(david)

imprimirDesestructurado(david)

// imprimirNombreNuevo({ nombre: "pepito"})

//imprimirNombreNuevo()

function imprimirNombreyApellido( persona){
    iNombre = persona.nombre.toUpperCase()
    iEdad = persona.edad
    console.log(  iNombre + " tiene " + iEdad + " años")
}

imprimirNombreyApellido(david);

//mas fácil :v

function saludar( {nombre , edad} ){
    console.log(`Hola me llamo ${nombre.toUpperCase()} y tengo ${edad} años.`)
}

saludar(david)

function cumpleanios(persona){
    persona.edad ++
}

function cumpleanos (persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

/*function imprimirProdfesiones(persona){
    console.log(`${persona.nombre}`)
    if(persona.ingeniero === true){
        console.log("Es ")
    }
}*/

function imprimirProdfesiones(persona){
    console.log(`${persona.nombre}`)
    if(persona.ingeniero){
        console.log("Es ingeniero ")
    }
    if(persona.dj){
        console.log("Es dj ")
    }
    if(persona.cocinero){
        console.log("Es cocinero ")
    }
    if(persona.cantante){
        console.log("Es cantante ")
    }
    if(persona.drone){
        console.log("vuela drone ")
    } else {
        console.log("no vuela dornes")
    }
    if(persona.guitarrista){
        console.log("Es guitarrista ")
    }
}

imprimirProdfesiones(david)

