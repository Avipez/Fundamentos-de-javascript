class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn){
            fn (nombre, apellido, true)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class desarrollador extends Persona {
    constructor(nombre, apellido, altura){
         super(nombre, apellido, altura)
        }
    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn){
            fn (nombre, apellido, true)
        }
    }    
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log("ah mirá, no sabia que eras desarrollador")
    }
}

var franco = new Persona("Franco", "Figueroa", 1.5)

var david = new Persona("David", "Lopez")

var volta = new desarrollador("Robin", "Lopez")

david.saludar()
franco.saludar(responderSaludo)
volta.saludar(responderSaludo)

