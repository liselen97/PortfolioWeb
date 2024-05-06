document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('theme-selector');
    const closeButton = document.getElementById('close-button');
    const themeSelector = document.getElementById('theme-options');
    const themeCoffee = document.getElementById('coffee-theme');
    const themeSpoty = document.getElementById('spoty-theme');
    const themeDark = document.getElementById('dark-theme');

    // // Función para alternar el estado del aside (abrir/cerrar)
    function toggleAside() {
        if (themeSelector.classList.contains('hidden')) {
            themeSelector.classList.remove('hidden');
            themeSelector.classList.remove('slide-out');
            themeSelector.classList.add('slide-in'); // Agrega la clase de animación de styles.css al clickear el icono de temas para aplicar
            document.body.classList.add('close-themes-selector');
        } else {
            themeSelector.classList.add('slide-out');
            themeSelector.classList.remove('slide-in');
            // Espera a que termine la animación para ocultar el bloque de temas que se abren
            setTimeout(function() {
                themeSelector.classList.add('hidden');
                document.body.classList.remove('close-themes-selector')
            }, 500); // 500 milisegundos, debe coincidir con la duración de la animación en CSS
        }
    }


    // Evento de clic para abrir/cerrar el aside
    openButton.addEventListener('click', function() {
        toggleAside();
    });

    closeButton.addEventListener('click', function() {
        toggleAside();
    });
    

    // Agregar eventos de clic para cambiar el tema
    themeCoffee.addEventListener('click', function() {
        saveTheme('coffee');
        applyTheme('coffee');
    });

    themeSpoty.addEventListener('click', function() {
        saveTheme('spoty');
        applyTheme('spoty');
    });

    themeDark.addEventListener('click', function() {
        saveTheme('dark');
        applyTheme('dark');
    });


     // Al cargar la página, verifica si hay un tema almacenado y lo aplica si está presente
     const storageTheme = localStorage.getItem('tema');
     if (storageTheme) {
         applyTheme(storageTheme);
     }


    // Función para guardar el tema seleccionado
    function saveTheme(tema) {
        localStorage.setItem('tema', tema);
    }

    // Función para aplicar el tema seleccionado
    function applyTheme(tema) {
        switch (tema) {
            case 'coffee':
                changeColors('#493115', '#FCF3A9', '#FCF3A9');
                break;
            case 'spoty':
                changeColors('#223110', '#7AF8AC', '#7AF8AC');
                break;
            case 'dark':
                changeColors('#0B0B0B', '#F0EFEF', '#F0EFEF');
                break;
            default:
                break;
        }
    }

    // Función para cambiar los colores de fondo y texto según el tema seleccionado
    function changeColors(darkColor, lightColor, bgColorElement) {
        // Cambiar el color de fondo de la página
        document.body.style.backgroundColor = darkColor;

        // Cambiar el color de texto de la página
        const texts = document.querySelectorAll('.lightColor');
        texts.forEach(elemento => {
            elemento.style.color = lightColor;
        });

        // Cambiar el color de fondo de algunos elementos
        const bgColor = document.querySelectorAll('.bgColor');
        bgColor.forEach(elemento => {
            elemento.style.backgroundColor = bgColorElement;
        });
    }
});