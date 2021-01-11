const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const opts = {crossDomain: true}
const onResponse = function(luke){
    console.log(`Hola soy ${luke.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
    $.get(url, opts, onResponse)
}


obtenerPersonaje(2)
