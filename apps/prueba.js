let respuestas = [];
let tabla = [];
let valores = 0;
let maximo = 0;
let porcientoFormateado = 0;
let puntajesIndividuales = [];

function obtenerValoresSeleccionados() {
  const grupos = [
    "A-I-1",
    "A-I-2",
    "A-I-3",
    "A-I-4",
    "A-I-5",
    "A-I-6",
    "A-I-8",
    "A-I-9",
    "A-I-10",
    "A-I-12",
    "A-I-13",
    "A-I-14",
    "A-I-15",
    "A-I-16",
    "A-I-17"
  ];

  var indiceFilas = 0;
  grupos.forEach((nombreGrupo) => {
    indiceFilas++;
    const grupo = document.querySelector(
      `input[name="${nombreGrupo}"]:checked`
    );
    if (grupo) {
      respuestas.push(grupo.value); // Agrega el valor del radio seleccionado al arreglo
    } else {
      respuestas.push(null); // Agrega null si no hay selección
      alert(`Por favor seleccionar una opción en la fila ${indiceFilas}`);
    }
  });
  //  inserta con 6 el valor de los checkbox para que se posicione en la ultima = 0
  respuestas.splice(6, 0, 6);

  const advisoryBoard = document.querySelector(`input[name="A-I-10"]:checked`);
  if (advisoryBoard.value == 1) {
    // indica que se informó que tiene AB
    const respuestaAB = document.querySelector(`input[name="A-I-11"]:checked`);
    // si puso que tiene AB tiene que informar el campo 11
    if (respuestaAB) {
      console.log("entro por aca: " + respuestaAB.value);
      //si respondio hay que insertar el valor en el arreglo
      respuestas.splice(10, 0, respuestaAB.value);
    } else {
      alert(`No selecciono lo del AB en la fila 11`);
    }
  }
  return respuestas; // Devuelve el arreglo si necesitas hacer algo más con él
}

function validarSeleccionGrupos() {
  var grupos = [
    "A-I-1",
    "A-I-2",
    "A-I-3",
    "A-I-4",
    "A-I-5",
    "A-I-6",
    "A-I-8",
    "A-I-9",
    "A-I-10",
    "A-I-12",
    "A-I-13",
    "A-I-14",
    "A-I-15",
    "A-I-16",
    "A-I-17"
  ];

  var indiceFilas = 0;
  var respuestas = [];
  var completado = true;

  grupos.forEach((nombreGrupo) => {
    indiceFilas++;
    const grupo = document.querySelector(
      `input[name="${nombreGrupo}"]:checked`
    );
    if (!grupo) {
      alert(`Por favor seleccionar una opción en la fila ${indiceFilas}`);
      completado = false;
    } else {
      respuestas.push(grupo.value);
    }
  });

  if (completado) {
    console.log("Todas las selecciones completadas:", respuestas);
    // Aquí puedes proceder con la siguiente parte de tu lógica de aplicación, como enviar el formulario, etc.
  } else {
    console.log("No todas las selecciones fueron completadas");
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
  var otrosSeleccionados = Array.from(checkboxes)
    .slice(0, -1)
    .some((checkbox) => checkbox.checked);

  // Si el último está seleccionado y también otro, mostrar alerta y retornar
  if (ultimoSeleccionado && otrosSeleccionados) {
    alert(
      "No es posible seleccionar 'Ningún Director' junto con otras opciones en fila 7."
    );
    return;
  }

  // Si solo el último está seleccionado o algunos de los otros, pero no ambos
  if (ultimoSeleccionado || otrosSeleccionados) {
    // Agregar los seleccionados al array
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkboxesSeleccionados.push(checkbox.value);
      }
    });
    console.log("Checkboxes seleccionados:", checkboxesSeleccionados);
  } else {
    // Si no se seleccionó ninguno, mostrar alerta
    alert("Por favor seleccionar al menos una opción en experiencia (fila 7).");
  }

  // acumula los puntos por los checkbox seleccionados
  for (i = 0; i < checkboxesSeleccionados.length; i++) {
    let indicejota = checkboxesSeleccionados[i] - 1;
    console.log(`indicejota ${indicejota} check ${checkboxesSeleccionados[i]}`);
    console.log(valores);
    // console.log (`check selec ${checkboxesSeleccionados[i] -1}`);
    // console.log (`tabla ${tabla[6][0]}`)
    valores += tabla[6][checkboxesSeleccionados[i] - 1];

      puntajesIndividuales[6][0] = 6;
      puntajesIndividuales[6][2] += tabla[6][checkboxesSeleccionados[i] - 1];
      console.log(
        `valor despues calculo: ${valores} , ${checkboxesSeleccionados[i]}`)
    ;
  }
}

function limpiarSelecciones() {
  // Obtener todos los inputs tipo radio y checkbox
  var radios = document.querySelectorAll('input[type="radio"]');
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Desmarcar todos los radios
  radios.forEach(function (radio) {
    radio.checked = false;
  });

  // Desmarcar todos los checkboxes
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    valores = 0;
    event.preventDefault(); // Prevenir el envío del formulario
    obtenerValoresSeleccionados(); // Llamar a la función al enviar el formulario
    // obtenerCheckboxSeleccionados();
    porcientoFormateado = calculaResultados();
    obtenerCheckboxSeleccionados();
    alert(
      `Seleccion: ${respuestas} \n valores: ${valores} \n máximo: ${maximo} \n porcentaje: ${porcientoFormateado}%`
    );

    console.table(puntajesIndividuales);
  });

function calculaResultados() {
  tabla = respuestas[0] == 1 ? tabla01 : tabla02;
  maximo = respuestas[0] == 1 ? tabla01[0][2] : tabla02[0][2];
  console.log(respuestas[0], maximo, tabla01[0][2], tabla02[0][2]);

  for (let i = 0; i < respuestas.length; i++) {
    // if(i===6) {i++};
    if (i === 6) continue;
    if (!puntajesIndividuales[i]) puntajesIndividuales[i] = []; // Asegurar que existe el arreglo antes de asignar valores
    console.log(`i= ${i} ,
         valores ${valores} ,
         tabla: ${tabla[i]},
         respuestas: ${respuestas[i]},
         tablarespuesta: ${tabla[i][respuestas[i] - 1]}`);
    valores += tabla[i][respuestas[i] - 1];
    console.log(`valor despues calculo: ${valores}`);

    puntajesIndividuales[i][0] = i + 1;
    puntajesIndividuales[i][1] = respuestas[i];
    puntajesIndividuales[i][2] = tabla[i][respuestas[i] - 1];
  }
  const porcientoFormateado = ((valores / maximo) * 100).toFixed(2);
  return porcientoFormateado;
}
