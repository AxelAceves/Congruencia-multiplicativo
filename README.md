# Congruencia-multiplicativo

## como funciona ?
Función generarNumeros():

Esta función se activa cuando se llama desde algún evento en la interfaz de usuario, como hacer clic en un botón.
Obtiene los valores de entrada x0, a, m, y n del HTML, que representan respectivamente el valor inicial, el multiplicador, el módulo y la cantidad de números pseudoaleatorios a generar.
Limpia la tabla de resultados y el registro de números repetidos.
Inicializa variables como numeros (un objeto que actúa como un registro de números generados), numerosRepetidos (un contador para números repetidos) y valoresR (un array para almacenar los valores de R).
Itera n veces para generar los números pseudoaleatorios.
Calcula el valor de R (número pseudoaleatorio entre 0 y 1) utilizando la fórmula xn / (m - 1).
Agrega una fila a la tabla de resultados con el número de iteración, el valor de x y el valor de R.
Almacena el valor de R en valoresR.
Verifica si el número generado ya existe en el registro. Si es así, marca la fila correspondiente en la tabla de resultados.
Si el valor de R es un número entero, aplica un estilo especial a la fila en la tabla.
Calcula el siguiente valor de x utilizando la fórmula xn = (a * xn) % m.
Muestra la cantidad de números repetidos en la consola.
Crea un gráfico utilizando la biblioteca Chart.js, utilizando los valores de valoresR como datos.
Función agregarFilaTabla(iteracion, x, r):

Esta función agrega una fila a la tabla de resultados.
Recibe como parámetros el número de iteración, el valor de x y el valor de R.
Crea una nueva fila en la tabla de resultados y llena las celdas con los valores proporcionados.

![image](https://github.com/AxelAceves/Congruencia-multiplicativo/assets/149019864/2193b5ef-eacf-47b1-8a19-5fa60234bdbb)


## En resumen :
el código genera números pseudoaleatorios, los muestra en una tabla HTML y luego los representa gráficamente utilizando Chart.js
## link de manual :
https://www.file.io/4k5U/download/v0enx9RDcSAI
