
let tabla01
alert ("va el valor" + tabla01 [1][2]);

function obtenerValoresSeleccionados() {
    // Arreglo para almacenar los valores seleccionados de cada grupo
    const respuestas = [];

    // Seleccionar cada grupo de radios por su atributo 'name'
    const grupos = [
        'gp-1-1',
        'gp-1-2',
        'gp-1-3',
        'gp-1-4',
        'gp-1-5',
        'gp-1-6'
    ]; // Agregar más nombres de grupo si hay más preguntas

    grupos.forEach((nombreGrupo) => {
        const grupo = document.querySelector(`input[name="${nombreGrupo}"]:checked`);
        if (grupo) {
            respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
        } else {
            respuestas.push(null); // Agrega null si no hay selección
        }
    });

    alert(respuestas); // Mostrar el arreglo de respuestas en la consola
    return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    obtenerValoresSeleccionados(); // Llamar a la función al enviar el formulario
});
