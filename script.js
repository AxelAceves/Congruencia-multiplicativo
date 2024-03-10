 function generarNumeros() {
    // Obtener los valores de entrada
    const x0 = parseInt(document.getElementById('xInput').value); // Valor inicial (X)
    const a = parseInt(document.getElementById('aInput').value); // Valor de A
    const m = parseInt(document.getElementById('mInput').value); // Valor de M
    const n = parseInt(document.getElementById('nInput').value); // Cantidad de números a generar

    // Limpiar la tabla de resultados y el registro de números repetidos
    document.getElementById('tablaResultados').innerHTML = "";
    let numeros = {};
    let numerosRepetidos = 0;
    let valoresR = [];

    let xn = x0; // Inicializar xn con el valor inicial

    // Generar números pseudoaleatorios y mostrar en la tabla
    for (let i = 1; i <= n; i++) {
        const rn = xn / (m - 1); // Calcular el valor de R
        agregarFilaTabla(i, xn, rn.toFixed(4)); // Agregar fila a la tabla con los resultados

        valoresR.push(rn); // Almacenar el valor de R en un array

        // Verificar si el número ya existe en el registro
        if (numeros[xn]) {
            numerosRepetidos++;
            document.getElementById('tablaResultados').lastChild.lastChild.previousSibling.classList.add('resaltado');
        } else {
            numeros[xn] = true;
        }

        // Verificar si el número es entero y aplicar el color verde si es el caso
        if (Number.isInteger(rn)) {
            document.getElementById('tablaResultados').lastChild.lastChild.classList.add('entero');
        }

        xn = (a * xn) % m; // Calcular el siguiente valor de xn
    }

    console.log("Números repetidos:", numerosRepetidos);

    // Crear el gráfico
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from(Array(n).keys()), // Etiquetas para el eje X
            datasets: [{
                label: 'Valores de R',
                data: valoresR, // Valores de R
                borderColor: 'blue',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function agregarFilaTabla(iteracion, x, r) {
    // Agregar una fila a la tabla de resultados
    const tabla = document.getElementById('tablaResultados');
    const fila = tabla.insertRow();
    const celdaIteracion = fila.insertCell(0);
    const celdaX = fila.insertCell(1);
    const celdaR = fila.insertCell(2);

    // Llenar las celdas con los valores correspondientes
    celdaIteracion.textContent = iteracion;
    celdaX.textContent = x;
    celdaR.textContent = r;
}
