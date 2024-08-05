/*
 ejercicio: Numero del 1 hasta el 10
 autor: Duvan Felipe Gomez Delgado
 fecha: 8/07/2024
*/ 


let arreglo =[1,2,3,4,5,6,7,8,9,,10]
let resultado = ''

for(let iteracion =0;  iteracion< arreglo.length; iteracion++){
 resultado += `<option>`+arreglo[iteracion]+`</option>`
}
document.getElementById('lista-uno').innerHTML = resultado



let numero = parseInt(prompt("Escriba el numero para hacer el factorial","numero"))
let resultado2 = ''
let sumatoria = 1
let factorial = 0
let resul
for(let iteracion = 1; iteracion<=numero;iteracion++){
    factorial = iteracion
    sumatoria = factorial *sumatoria

    resultado2 +=  `<option>`+sumatoria+`</option>`
}



document.getElementById('lista-dos').innerHTML = resultado2



let numeroUsuario = parseInt(prompt("Escriba el numero para hacer el factorial","numero"))
let resultado3 = ''
let sumatoria2 = 1
let factorial2 = 0
let resul2
for(let iteracion = 1; iteracion<=numeroUsuario;iteracion++){
    factorial2 = iteracion
    sumatoria2 = factorial2 *sumatoria2
    resultado3 +=  `<tr><td>`+sumatoria2+`</td><td>`+iteracion+`</td><tr>`
}
document.getElementById('tabla').innerHTML = `<th>Resultado:${resultado3}</th>`+ `<tr><th>El numero factorial:<td>${numeroUsuario}</td></th></tr>`;