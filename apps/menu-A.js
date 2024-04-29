let tablaMenuA = [
  ["I.",
    "MA-1.html",
    "La composición y responsabilidad del Directorio",
    ,
    ,
    ],
  ["II.",
    "MA-2.html",
    "Estructura organizacional",
    ,
    ,
    ],
  ["III.",
    "MA-3.html",
    "El Directorio y su articulación con las Gerencias",
    ,
    ,
    ],
  ["IV.",
    "MA-4.html",
    "Comités del Directorio",
    ,
    ,
    ],
  ["V.",
    "MA-5.html",
    "Comité de Auditoría",
    ,
    ,
    ],
  ["VI.",
    "MA-6.html",
    "Información para el Directorio",
    ,
    ,
    ],
  ["VII.",
    "MA-7.html",
    "Estrategia",
    ,
    ,
    ],
  ["VIII.",
    "MA-8.html",
    "Gestión de Riesgos",
    ,
    ,
    ],
  ["IX.",
    "MA-9.html",
    "Cumplimiento y control",
    ,
    ,
    ],
  ["X.",
    "MA-10.html",
    "Funcionamiento",
    ,
    ,
    ],
  ["XI.",
    "MA-11.html",
    "El Directorio y las Gerencias",
    ,
    ,
    ],
  ["XII.",
    "MA-12.html",
    "Cultura y conducta empresarial",
    ,
    ,
    ],
  ["XIII.",
    "MA-13.html",
    "Sucesiones",
    ,
    ,
    ],
  ["XIV.",
    "MA-14.html",
    "Presidente del Directorio",
    ,
    ,
    ],
  ["XV.",
    "MA-15.html",
    "Secretaría del Directorio",
    ,
    ,
    ],  
]

// Recuperar el valor de LocalStorage
// let valorMaximo = JSON.parse(localStorage.getItem('maximo'));
// let valores = JSON.parse(localStorage.getItem('valores'));
// let valorPuntos = JSON.parse(localStorage.getItem('nuevoValor'));

tablaMenuA [0][3] = JSON.parse(localStorage.getItem('maximo'));
tablaMenuA [0][4] = JSON.parse(localStorage.getItem('valores'));
tablaMenuA [0][5] = JSON.parse(localStorage.getItem('porciento'));


// console.log(`puntos: ${valorRecuperado} y el maximo: ${valorMaximo} y el de funcion 2 ${valorFuncion2}`);

let lineaDatosFd = document.getElementById("lineaMenu");

for (i = 0; i < tablaMenuA.length; i++) {
  lineaDatosFd = tablaIndice.insertRow();

  let celdaNombre = lineaDatosFd.insertCell(-1);
  celdaNombre.textContent = tablaMenuA[i][0];

  // Crear la segunda celda (columna) como un enlace

  // Para la segunda celda de cada fila, creamos un elemento <a> con el valor de tablaMenuA[i][1] como su atributo href, y luego lo agregamos como hijo de la celda de enlace (celdaEnlace). 

  const celdaEnlace = lineaDatosFd.insertCell(-1);
  const enlace = document.createElement('a'); // Crear un elemento <a>
  enlace.href = tablaMenuA[i][1]; // Establecer el atributo href con el valor correspondiente
  enlace.textContent = tablaMenuA[i][2]; // Establecer el texto del enlace con el tercer elemento de la tabla
  celdaEnlace.appendChild(enlace); // Agregar el enlace como hijo de la celda

  celdaMaximo = lineaDatosFd.insertCell(-1);
  celdaMaximo.textContent = tablaMenuA[i][3];

  celdaPuntos = lineaDatosFd.insertCell(-1);
  celdaPuntos.textContent = tablaMenuA[i][4];

  celdaPorciento = lineaDatosFd.insertCell(-1);
  celdaPorciento.textContent = tablaMenuA[i][5];


}