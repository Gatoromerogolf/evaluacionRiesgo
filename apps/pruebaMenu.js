let seccionPuntos = [
    ["I", 120, 0, "-"],
    ["II", 100, 0, "-"],
    ["III", 80, 0, "-"]
]

console.log (seccionPuntos [0][3]);

// Recuperar el valor de LocalStorage
let valorRecuperado = JSON.parse(localStorage.getItem('miValor'));

// Si necesitas actualizar la matriz con este valor
seccionPuntos[0][3] = valorRecuperado; // Suponiendo que quieres asignar este valor a una posición específica

console.log (seccionPuntos [0][3]);