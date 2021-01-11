const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const opts = {crossDomain: true}
const onResponse = function(luke){
    console.log(`Hola soy ${luke.name}`)
}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
    $.get(url, opts, onResponse).fail(function({
        console.log("Sucedio un error y no se pudo conseguir el personaje")
    }))

    if(callback){
        callback()
    }
}


obtenerPersonaje(1, function(personaje) {
    console.log(`Hola soy ${personaje.name}`)

    obtenerPersonaje(2, function(personaje) {
        console.log(`Hola soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`Hola soy ${personaje.name}`)

        })
    })
})
