var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    libros: 25
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 5
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 187
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 83
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 9
}

var personas = [paula, vicky, dario, martin, alan, sacha]


/*const esPequeño = (persona) => {
    return persona.altura > 1.8
}*/

//const esPequeño = persona => persona.altura > 1.8
 
const esPequeño = ({ altura }) => altura < 1.8

var personasBajas = personas.filter(esPequeño); 

console.log(personasBajas)

const PasarAlturaACms = ({ altura }) => altura*100;

var personasCms = personas.map(PasarAlturaACms)

console.log(personasCms);

// clase 22

const reducer = (acum, {libros}) => acum + libros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(totalDeLibros)

//clase 23-26

function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn 
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.alruta = altura;
    //console.log ("Me ejecutaron")
}

var sacha = new Persona()

Persona.prototype.saludar = function(){
 console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
} 

function desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
heredaDe(desarrollador, Persona)

desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var david = new Persona("David", "Lopez")

var volta = new desarrollador("Robin", "Lopez")