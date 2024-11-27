document.addEventListener('DOMContentLoaded', () => {
    // Selección de los campos del formulario
    
    const nombreSuperHeroe = document.getElementById("nombreSuperHeroe");
    const nombreReal = document.getElementById("nombreReal");
    const nombreSociedad = document.getElementById("nombreSociedad");
    const edad = document.getElementById("edad");
    const planetaOrigen = document.getElementById("planetaOrigen");
    const debilidad = document.getElementById("debilidad");
    const poderes = document.getElementById("poderes");
    const habilidadEspecial = document.getElementById("habilidadEspecial");
    const aliados = document.getElementById("aliados");
    const enemigos = document.getElementById("enemigos");    

    // Función para mostrar mensajes de error
    const mostrarError = (campoError, mensaje) => {
        document.getElementById(campoError).textContent = mensaje;
    };

    // Función para eliminar espacios iniciales automáticamente
    const eliminarEspaciosIniciales = (campo) => {
        campo.value = campo.value.replace(/^\s+/, '');
    };

    // Validar nombreSuperHeroe
    nombreSuperHeroe.addEventListener('input', () => {
        eliminarEspaciosIniciales(nombreSuperHeroe);
        const valor = nombreSuperHeroe.value.trim();
        if (valor.length < 3 || valor.length > 60) {
            mostrarError("nombreSuperHeroeError", "Debe tener entre 3 y 60 caracteres.");
        } else {
            mostrarError("nombreSuperHeroeError", ""); // Limpia el error si es válido
        }
    });

    // Validar nombreReal
    nombreReal.addEventListener('input', () => {
        eliminarEspaciosIniciales(nombreReal);
        const valor = nombreReal.value.trim();
        if (valor.length < 3 || valor.length > 60) {
            mostrarError("nombreRealError", "Debe tener entre 3 y 60 caracteres.");
        } else {
            mostrarError("nombreRealError", "");
        }
    });

    // Validar sociedad
    nombreSociedad.addEventListener('input', () => {
        eliminarEspaciosIniciales(nombreSociedad);
        const valor = nombreSociedad.value.trim();
        if (valor.length < 3 || valor.length > 40) {
            mostrarError("nombreSociedadError", "Debe tener entre 3 y 40 caracteres.");
        } else {
            mostrarError("nombreSociedadError", "");
        }
    });

    // Validar edad
    edad.addEventListener('input', () => {
        eliminarEspaciosIniciales(edad);
        const valor = edad.value.trim();
        if (!valor || isNaN(valor) || parseInt(valor) < 1) {
            mostrarError("edadError", "Debe ser un número mayor que 0.");
        } else {
            mostrarError("edadError", "");
        }
    });

    // Validar planetaOrigen
    planetaOrigen.addEventListener('input', () => {
        eliminarEspaciosIniciales(planetaOrigen);
        const valor = planetaOrigen.value.trim();
        if (valor.length < 3 || valor.length > 40) {
            mostrarError("nombrePlanetaError", "Debe tener entre 3 y 40 caracteres.");
        } else {
            mostrarError("nombrePlanetaError", "");
        }
    });

    // Validar debilidad
    debilidad.addEventListener('input', () => {
        eliminarEspaciosIniciales(debilidad);
        const valor = debilidad.value.trim();
        if (valor.length < 3 || valor.length > 60) {
            mostrarError("debilidadError", "Debe tener entre 3 y 60 caracteres.");
        } else {
            mostrarError("debilidadError", "");
        }
    });

    // Validar poderes
    poderes.addEventListener('input', () => {
        eliminarEspaciosIniciales(poderes);
        const valor = poderes.value.trim().split(",");
        const poderesInvalidos = valor.some(poder => poder.trim().length < 3 || poder.trim().length > 60);
        if (valor.length === 0 || poderesInvalidos) {
            mostrarError("poderesError", "Cada poder debe tener entre 3 y 60 caracteres.");
        } else {
            mostrarError("poderesError", "");
        }
    });

    // Validar habilidadEspecial
    habilidadEspecial.addEventListener('input', () => {
        eliminarEspaciosIniciales(habilidadEspecial);
        const valor = habilidadEspecial.value.trim();
        if (valor.length < 3 || valor.length > 40) {
            mostrarError("habilidadEspecialError", "Debe tener entre 3 y 40 caracteres.");
        } else {
            mostrarError("habilidadEspecialError", "");
        }
    });

    // Validar aliados
    // aliados.addEventListener('input', () => {
    //     eliminarEspaciosIniciales(aliados);
    //     const valor = aliados.value.trim();
    //     if (valor.length < 3 || valor.length > 60) {
    //         mostrarError("aliadosError", "Debe tener entre 3 y 60 caracteres.");
    //     } else {
    //         mostrarError("aliadosError", "");
    //     }
    // });

    aliados.addEventListener('input', () => {
        eliminarEspaciosIniciales(aliados);
        const valor = aliados.value.trim().split(",");
        const aliadosInvalidos = valor.some(aliado => aliado.trim().length < 3 || aliado.trim().length > 60);
        if (valor.length === 0 || aliadosInvalidos) {
            mostrarError("aliadosError", "Cada aliado debe tener entre 3 y 60 caracteres.");
        } else {
            mostrarError("aliadosError", "");
        }
    });

    // Validar enemigos
    // enemigos.addEventListener('input', () => {
    //     eliminarEspaciosIniciales(enemigos);
    //     const valor = enemigos.value.trim();
    //     if (valor.length < 3 || valor.length > 60) {
    //         mostrarError("enemigosError", "Debe tener entre 3 y 60 caracteres.");
    //     } else {
    //         mostrarError("enemigosError", "");
    //     }
    // });

    enemigos.addEventListener('input', () => {
        eliminarEspaciosIniciales(enemigos);
        const valor = enemigos.value.trim().split(",");
        const enemigosInvalidos = valor.some(enemigo => enemigo.trim().length < 3 || enemigo.trim().length > 60);
        if (valor.length === 0 || enemigosInvalidos) {
            mostrarError("enemigosError", "Cada aliado debe tener entre 3 y 60 caracteres.");
        } else {
            mostrarError("enemigosError", "");
        }
    });

});
