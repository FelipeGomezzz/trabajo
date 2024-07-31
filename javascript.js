document.addEventListener("DOMContentLoaded", function() {
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function crearBingo(colorearPrimeraColumna = false, colorearX = false) {
        let iteracionFilas = 0;
        let iteracionColumnas = 0;
        let total = [];
        let bingo = [];
        let text = "";

        // Crear una cuadrícula de 5x5 con números aleatorios
        for (iteracionFilas = 0; iteracionFilas < 5; iteracionFilas++) {
            total = [];
            for (iteracionColumnas = 0; iteracionColumnas < 5; iteracionColumnas++) {
                total.push(generarNumeroAleatorio(1, 75));
            }
            bingo.push(total);
        }

        // Construir la tabla HTML
        text += "<table class='bingo-table'>";
        text += "<thead>";
        text += "<tr class='agrupacion'>";
        text += "<td class='header'>B</td>";
        text += "<td class='header'>I</td>";
        text += "<td class='header'>N</td>";
        text += "<td class='header'>G</td>";
        text += "<td class='header'>O</td>";
        text += "</tr>";
        text += "</thead>";
        text += "<tbody>";

        for (iteracionFilas = 0; iteracionFilas < 5; iteracionFilas++) {
            text += "<tr class='agrupacion'>";
            for (iteracionColumnas = 0; iteracionColumnas < 5; iteracionColumnas++) {
                const numeroCelda = bingo[iteracionFilas][iteracionColumnas];
                
                // Verificar si la celda pertenece a una de las dos diagonales para formar una "X"
                const esDiagonalPrincipal = iteracionFilas === iteracionColumnas;
                const esDiagonalSecundaria = iteracionFilas + iteracionColumnas === 4;
                
                // Determinar la clase de la celda
                let clase = "boton";
                if (colorearPrimeraColumna && iteracionColumnas === 0) {
                    clase += " highlight-columna";
                } else if (colorearX && (esDiagonalPrincipal || esDiagonalSecundaria)) {
                    clase += " highlight-x";
                }
                
                text += "<td class='" + clase + "'>" + numeroCelda + "</td>";
            }
            text += "</tr>";
        }

        text += "</tbody>";
        text += "</table>";
        return text;
    }

    // Crear los dos Bingos
    let bingo1 = crearBingo(false, true); // Primer bingo con la forma de X coloreada en amarillo
    let bingo2 = crearBingo(true); // Segundo bingo con la primera columna en amarillo
    
    // Mostrar ambos Bingos uno al lado del otro
    let contenedor = document.getElementById("contenido");
    contenedor.innerHTML = "<div class='bingo-container'>" +
                           "<div class='bingo'>" + bingo1 + "</div>" +
                           "<div class='bingo'>" + bingo2 + "</div>" +
                           "</div>";
});
