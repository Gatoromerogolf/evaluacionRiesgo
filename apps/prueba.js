
let respuestas = [];
let valores = 0;
let maximo = 0;

function obtenerValoresSeleccionados() {

    const grupos = [
        'A-I-1',
        'A-I-2',
        'A-I-3',
        'A-I-4',
        'A-I-5',
        'A-I-6',
        'A-I-8',
        'A-I-9',
        'A-I-10',
        'A-I-12',
        'A-I-13',
        'A-I-14',
        'A-I-15',
        'A-I-16'
    ]

    var indiceFilas = 0;
    grupos.forEach((nombreGrupo) => {
        indiceFilas ++;
        const grupo = document.querySelector(`input[name="${nombreGrupo}"]:checked`);
        if (grupo) {
            respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
        } else {
            respuestas.push(null); // Agrega null si no hay selección
            alert(`Por favor seleccionar una opción en la fila ${indiceFilas}`);
            // throw new Error('Selección de opción faltante')}
        }}
    )

    return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
}


function validarSeleccionGrupos() {
    var grupos = ["A-I-1", "A-I-2", "A-I-3",
    "A-I-4", "A-I-5", "A-I-6", "A-I-8", "A-I-9", "A-I-10", "A-I-12", "A-I-13", "A-I-14",
    "A-I-15", "A-I-16"
    ]; 

    var indiceFilas = 0;
    var respuestas = [];
    var completado = true;

    grupos.forEach((nombreGrupo) => {
        indiceFilas++;
        const grupo = document.querySelector(`input[name="${nombreGrupo}"]:checked`);
        if (!grupo) {
            alert(`Por favor seleccionar una opción en la fila ${indiceFilas}`);
            completado = false;
        } else {
            respuestas.push(grupo.value);
        }
    });

    if (completado) {
        console.log('Todas las selecciones completadas:', respuestas);
        // Aquí puedes proceder con la siguiente parte de tu lógica de aplicación, como enviar el formulario, etc.
    } else {
        console.log('No todas las selecciones fueron completadas');
        // Puedes decidir dejar que el usuario corrija o hacer alguna otra acción aquí.
    }
}



function obtenerCheckboxSeleccionados() {
    // Obtener todos los elementos checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var ultimoCheckbox = checkboxes[checkboxes.length - 1]; // El último checkbox es especial

    // Crear un array para almacenar los IDs de los checkboxes seleccionados
    var checkboxesSeleccionados = [];

    // Verificar si el último checkbox está seleccionado y alguno de los anteriores también
    var ultimoSeleccionado = ultimoCheckbox.checked;
    var otrosSeleccionados = Array.from(checkboxes).slice(0, -1).some(checkbox => checkbox.checked);

    // Si el último está seleccionado y también otro, mostrar alerta y retornar
    if (ultimoSeleccionado && otrosSeleccionados) {
        alert("No es posible seleccionar 'Ningún Director' junto con otras opciones en fila 7.");
        return;
    }

    // Si solo el último está seleccionado o algunos de los otros, pero no ambos
    if (ultimoSeleccionado || otrosSeleccionados) {
        // Agregar los seleccionados al array
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkboxesSeleccionados.push(checkbox.id);
            }
        });

        console.log('Checkboxes seleccionados:', checkboxesSeleccionados);
    } else {
        // Si no se seleccionó ninguno, mostrar alerta
        alert("Por favor seleccionar al menos una opción en experiencia (fila 7).");
    }
}

function limpiarSelecciones() {
    // Obtener todos los inputs tipo radio y checkbox
    var radios = document.querySelectorAll('input[type="radio"]');
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Desmarcar todos los radios
    radios.forEach(function(radio) {
        radio.checked = false;
    });

    // Desmarcar todos los checkboxes
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
}


document.getElementById('formulario').addEventListener('submit', function(event) {
    valores=0;
    event.preventDefault(); // Prevenir el envío del formulario
    obtenerValoresSeleccionados(); // Llamar a la función al enviar el formulario
    obtenerCheckboxSeleccionados();
    calculaResultados();
    alert (`Seleccion: ${respuestas} \n valores: ${valores} \n máximo: ${maximo} \n porcentaje: ${porcientoFormateado}%`)
  })


function calculaResultados(){
  let tabla = (respuestas[0] == 1) ? tabla01 : tabla02;
  maximo = (respuestas[0] == 1) ? tabla01[0][2] : tabla02[0][2];
  console.log (respuestas[0], maximo,  tabla01[0][2],  tabla02[0][2]);

  for (let i=0; i<respuestas.length; i++){
    console.log (`i= ${i} ,
     valores ${valores} ,
     tabla: ${tabla[i]}.
     respuestas: ${respuestas[i]}
     tablarespuesta: ${tabla[i][respuestas[i]-1]}`)
    valores += tabla[i][respuestas[i]-1];
    console.log (`valor despues calculo: ${valores}`)
}
  
  return [porcientoFormateado = (valores / maximo * 100).toFixed(2), maximo];
    // return maximo;
}


// function mostrarOcultarLineas(idLinea, valor) {
//   const linea = document.getElementById(idLinea);
//   if (valor === "1") {
//       linea.style.display = "block"; // Mostrar la línea si el valor es "1"
//   } else {
//       linea.style.display = "none"; // Ocultar la línea si el valor es diferente de "1"
//   }
// }