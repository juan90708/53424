# Analizador Sintáctico - Tema 39568_3

Este proyecto es un analizador léxico y sintáctico construido con ANTLR4 y Node.js para un lenguaje iterativo simple.

## Requisitos previos
Para ejecutar este proyecto necesitas tener instalado:
* Node.js
* Java (para la generación de ANTLR, aunque los archivos ya están generados).

## Cómo ejecutar el proyecto

1. Clona este repositorio o descarga los archivos.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias ejecutando el siguiente comando:
   `npm install`
4. Para correr el analizador, ejecuta:
   `node index.js`

## Archivos de prueba
Para cambiar el archivo que se está analizando, abre `index.js` y modifica la línea 14 con alguno de los archivos de prueba incluidos:
* `ejemplo_correcto_1.txt` : Demuestra una iteración válida.
* `ejemplo_correcto_2.txt` : Demuestra múltiples impresiones.
* `ejemplo_incorrecto_1.txt` : Demuestra error por falta de punto y coma.
* `ejemplo_incorrecto_2.txt` : Demuestra error léxico por palabra no reconocida.
