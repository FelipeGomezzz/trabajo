
// array interactions con ciclos

// let arreglo =[];
// for(var i=0; i<=8; i++){
//     arreglo[i]= prompt("señor usuario ingrese un numero...");
//     document.write(`el numero que elegiste fue: ${arreglo[i]}\n\n`+ "<br/>");
// };

// document.write(`cantidad de numero que fueron: ${arreglo.length}\n\n`+ "<br/>")

// const repeticion = ()=> {

//     let desiciones = prompt("quiere agregar mas numeros (si) o (no)");
    
//     if (desiciones=="si"){
//         let cantidad = prompt("cuantos datos quieres agregar")
//         for(var i=0; i<=cantidad; i++){
//             arreglo.push = prompt("señor usuario ingrese un numero..."+ "<br/>");
//         };
//         document.write(`el numero que elegiste fueron: ${arreglo}\n\n`+ "<br/>");
//         document.write(`cantidad de numero que fueron: ${arreglo.length}\n\n`+ "<br/>")
//     }else if(desiciones=="no"){
//         alert("hasta luego señor usuario")
//     }else{
//         alert("ingrese un dato valido");
//         alert("intente de nuevo")
//         repeticion();
//     }
// }
// repeticion();


// mostrar arreglos

// let datosarreglo="";
// let arreglo =[1,3,57,2,19,15,1,]
// for(let i=0; i<arreglo.length; i++){
//     // console.log("datos: " + i +" " + arreglo[i]);
//     datosarreglo += `datos: ${i} : ${arreglo[i]}\n`;
// }
// alert(datosarreglo);


// bingo
let bingo2=[]
let bingo = [];
let palabra = ["B", "I", "N", "G", "O"];
let datosletras =[]
let interacion1;
let interacion2;
let contador= 0;
let tabla = 0;
for( interacion1 = 0; interacion1 <5; interacion1++) {
    let interno= []
    for( interacion2 = 0; interacion2 <5; interacion2++){
        contador = contador + 1
        tabla = contador *3; 
        interno.push(tabla);

    }
    datosletras.push(palabra[interacion1]);     
    bingo.push(interno);
    bingo2.push(interno + "<br/>");
}   
document.write(datosletras + `<br>`);
document.write(bingo2 + "</br>");

document.write("Primera x "+"<br><br>"); 


let numeroB = []
let numeroI = []
let numeroN = []
let numeroG = []
let numeroO = []

let bingoTotal = [
    numeroB = [],
    numeroI = [],
    numeroN = [],
    numeroG = [],
    numeroO = [],
]


for(interacion1=0;interacion1< 5; interacion1++){
    for(interacion2=0;interacion2<5;interacion2++){
        bingoTotal[interacion1][interacion2] = bingo[interacion2][interacion1]
    }
    document.write(palabra[interacion1]+":[ "+bingoTotal[interacion1]+" ]<br>")
}

document.write("<br><br><br>")

document.write("Segunda x: "+"<br><br>");




let dobleX = []
let suma = 0;
let cantidad = bingo.length-1

for( interacion1 = 0; interacion1 <5; interacion1++) {
    for( interacion2 = 0; interacion2 <5; interacion2++){
        dobleX[interacion2] = bingo[interacion2][interacion1]  +" ,"+bingo[interacion1][cantidad-interacion2]+","
    }
    document.write(dobleX[interacion1])
}   
document.write("<br><br><br>")

document.write("Tercera x: "+"<br><br>");

let x1 = []
let x2 = []
let x3 = []
let impar = 0;
let par = 0;
for( interacion1 = 0; interacion1 <3; interacion1++) {
    for( interacion2 = 1; interacion2 <=2; interacion2++){
        
        if(bingo[interacion1][interacion2]%2==0){
            par = par +1
            x1[interacion1]=bingo[interacion1][par]+","+bingo[interacion1][4-par]
            
        }else{
            impar = impar + 1
            x2[interacion1] = bingo[impar+1][interacion1] +","+ bingo[impar+1][2-interacion1]
            x3[interacion1] = bingo[impar+1][impar+1]+","+bingo[impar+1][4-impar+1]
        }
        
    }
}
document.write("X1[ "+x1+" ]"+"<br>")
document.write("X2[ "+x2+" ]"+"<br>")
document.write("X3[ "+x3+" ]")






// let pares = 0;
// let impares =0;
// for( interacion1 = 0; interacion1 <5; interacion1++) {
//     for( interacion2 = 0; interacion2 <5; interacion2++){
//       if(bingo[interacion1][interacion2]%2 == 0){
//         pares = pares + 1;
//       }else{
//         impares = impares + 1;
//       }
//     }
// }   

// document.write(`pares: ${pares} <br>`);
// document.write(`impares: ${impares} <br>`);










// edadPersonal =[{
//     nombre: "Sebastian",
//     edad: 20
// },{
//     nombre: "Yeison",
//     edad: 25
// },{
//     nombre: "Julieth",
//     edad: 18
// }
// ]

// for (var i = 0; i <edadPersonal.length; i++){
//     console.log(edadPersonal[i]);
//     console.log(edadPersonal[i]);
// }