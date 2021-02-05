const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const opts = {crossDomain: true}

function obtenerPersonaje(id,){
    return new Promise(function(resolve, reject) {
        const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`
        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))

    })
}


function onError(id){
    console.log(`sucedio un error al obtner el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6]
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
.all(promesas)
.then(personajes => console.log(personajes)
.catch(onError)

/*obtenerPersonaje(1)
 .then(function(personaje) {
     console.log(`El personaje ${id} es ${personaje.name}`)
     return obtenerPersonaje(2)
 })
 .then(personaje => {
     console.log(`El personaje ${id} es ${personaje.name}`)
     return obtenerPersonaje(3)
 })
 .catch(onError)*/
