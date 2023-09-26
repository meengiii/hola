document.addEventListener("DOMContentLoaded", function () {
    //evento boton guardar
    const boton = document.getElementById("bGuardar");
    boton.addEventListener("click", guardar);
    //body
    tbody = document.getElementById("tBody");
    //header
    hnombre = document.getElementById("hNombre");
    hdni = document.getElementById("hDni");
    hapellido = document.getElementById("hApellido");

    hnombre.addEventListener("click", ordenarNombre);
    hdni.addEventListener("click", ordenarDni);
    hapellido.addEventListener("click", ordenarApellido);
    //Ordenar
    let ordenAscApellido = true;
    let ordenAscDni = true;
    let ordenAscNombre = true;

    //crear array personas
    const personas = [];

    //funcion que guarda lo que hay en las cajas de texto
    function guardar() {
        const dni = document.getElementById("tDni").value;
        const nombre = document.getElementById("tNombre").value;
        const apellido = document.getElementById("tApellido").value;

        personas.push({ DNI: dni, NOMBRE: nombre, APELLIDO: apellido });

        document.getElementById("tDni").value = "";
        document.getElementById("tNombre").value = "";
        document.getElementById("tApellido").value = "";

        actualizarTabla();
    }

    //funcion que actualiza la tabla y rellena
    function actualizarTabla() {
        tbody.innerHTML = "";

        personas.forEach((persona) => {
            const newRow = document.createElement("tr");

            const cellDNI = document.createElement("td");
            cellDNI.textContent = persona.DNI;
            const cellNombre = document.createElement("td");
            cellNombre.textContent = persona.NOMBRE;
            const cellApellido = document.createElement("td");
            cellApellido.textContent = persona.APELLIDO;

            newRow.appendChild(cellDNI);
            newRow.appendChild(cellNombre);
            newRow.appendChild(cellApellido);

            tbody.appendChild(newRow);
        });
    }

    //funciones que ordenan

    function ordenarNombre() {
        if (ordenAscNombre) {
            personas.sort((a, b) => {
                return a.NOMBRE.localeCompare(b.NOMBRE);
            });
        } else {
            personas.sort((a, b) => {
                return b.NOMBRE.localeCompare(a.NOMBRE);
            });
        }
        ordenAscNombre = !ordenAscNombre;
        actualizarTabla();
    }


    function ordenarDni() {
        if (ordenAscDni) {
            personas.sort((a, b) => {
                return a.DNI.localeCompare(b.DNI);
            });
        } else {
            personas.sort((a, b) => {
                return b.DNI.localeCompare(a.DNI);
            });
        }
        ordenAscDni = !ordenAscDni;
        actualizarTabla();
    }


    function ordenarApellido() {
        if (ordenAscApellido) {
            personas.sort((a, b) => {
                return a.APELLIDO.localeCompare(b.APELLIDO);
            });
        } else {
            personas.sort((a, b) => {
                return b.APELLIDO.localeCompare(a.APELLIDO);
            });
        }
        ordenAscApellido = !ordenAscApellido;
        actualizarTabla();
    }

    // function ordenarNombre() {
    //     personas.sort((a, b) => {
    //         return a.NOMBRE.localeCompare(b.NOMBRE);
    //     });
    //     actualizarTabla();
    // }

    // function ordenarDni() {
    //     personas.sort((a, b) => {
    //         return a.DNI.localeCompare(b.DNI);
    //     });
    //     actualizarTabla();
    // }

    // function ordenarApellido() {
    //     personas.sort((a, b) => {
    //         return a.APELLIDO.localeCompare(b.APELLIDO);
    //     });
    //     actualizarTabla();
    // }



});

