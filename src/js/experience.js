
document.addEventListener('DOMContentLoaded', function() {
    // Obtén el parámetro 'category' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Verifica si se proporcionó un parámetro 'category' válido
    if (category && category in datosPorCategoria) {
        // Obtén los datos correspondientes a la categoría seleccionada
        let datosCategoria = datosPorCategoria[category];

        // Obtén referencias a los elementos HTML existentes donde deseas insertar los datos
        let areaElement = document.getElementById('area');
        let rolElement = document.getElementById('rol');
        let periodoElement = document.getElementById('periodo');
        let tareasList = document.getElementById('tareas');

        // Asigna los datos a las propiedades de los elementos HTML existentes
        areaElement.textContent = datosCategoria.area;
        rolElement.textContent = datosCategoria.rol;
        periodoElement.textContent = datosCategoria.periodo;

        // Borra el contenido anterior de la lista de tareas
        tareasList.innerHTML = '';

        // Itera sobre las tareas y crea elementos li para cada una
        datosCategoria.tareas.forEach(function(tarea) {
            let tareaElement = document.createElement('li');
            tareaElement.textContent = tarea;
            tareasList.appendChild(tareaElement);
        });
    } else {
        // Si no se proporciona un parámetro 'category' válido, muestra un mensaje de error o realiza alguna acción predeterminada
        console.error('Categoría no válida o no especificada en la URL.');
    }
});

let datosPorCategoria = {
        testing: {
            area: "Testing",
            rol: "Testing Specialist",
            periodo: "Nov 2023 - Actualidad",
            tareas: ["Analisis de requerimientos, diseño de casos y estimación", "Consultas SQL, SOAP UI, Postman y Jira", "Ejecución de casos, evidencia de los mismos y reporte de errores"]
        },
        diseño: {
            area: "Diseño",
            rol: "Diseño UI/UX",
            periodo: "Ene 2023- Set 2023",
            tareas: ["Entrevistas con usuarios", "Storyboards", "Prototipado, diseño de componentes"]
        },
        desarrollo: {
            area: "Desarrollo",
            rol: "Desarrollo Frontend",
            periodo: "Set 2022 - Set 2023 ",
            tareas: ["HTML/CSS", "JavaScript", "React"]
        }
    };
    
    