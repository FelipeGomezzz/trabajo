console.log("Array Asociativo")
// Array Asociativo

let objeto = {
    "nombre":"Sebastian",
    "apellido":"Perdomo",
    "edad": 18,
}

for (let clave in objeto){
    console.log(clave+ " :"+ objeto[clave]);
    
}

// array map

console.log("\n")
console.log("array map")
let mapa = new Map();

mapa.set("nombre","Sebastian")
mapa.set("apellido","Perdomo")
mapa.set("edad",18)

for(let [clave,valor] of mapa){
    console.log(clave+ " :"+ valor);
}







// array clave-valor

console.log("\n")
console.log("array clave-valor")
let arreglos = [
    {clave:"nombre",valor:"Sebastian"},
    {clave:"nombre",valor:"Pipe"}
]

for(let elemento of arreglos){
    console.log(elemento.clave+ " :"+ elemento.valor);
}







// array matricez
console.log("\n")

console.log("array matricez")
let arreglosDobles =[
    ["nombre","Sebastian"],
    ["edad",3]
]

for(let [clave,valor] of arreglosDobles){
    console.log(clave+ " :"+ valor);
}