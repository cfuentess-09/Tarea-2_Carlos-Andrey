//-- Cuando el botón es clickeado, ejecutar la validación -- \\
document.getElementById('btnCrearCuenta').addEventListener('click', function () {

    //-- 1. OBTENER LOS VALORES DE LOS CAMPOS --\\
    const usuario = document.getElementById('txtUsuario2');
    const contrasena = document.getElementById('txtContrasena2');
    const confirmar = document.getElementById('txtConfirmarContrasena2');

    //-- 2. LIMPIAR ERRORES ANTERIORES --\\
    limpiarErrores([usuario, contrasena, confirmar]);

    //-- Variable para saber si el formulario es válido --\\
    let valido = true;

    //-- 3. VALIDAR QUE NINGÚN CAMPO ESTÉ VACÍO --\\
    if (usuario.value.trim() === '') {
        mostrarError(usuario, 'El nombre de usuario no puede estar vacío.');
        valido = false;
    }

    if (contrasena.value.trim() === '') {
        mostrarError(contrasena, 'La contraseña no puede estar vacía.');
        valido = false;
    }

    if (confirmar.value.trim() === '') {
        mostrarError(confirmar, 'Debe confirmar la contraseña.');
        valido = false;
    }

    //-- 4. VALIDAR QUE LAS CONTRASEÑAS COINCIDAN --\\
    // Solo se valida si ambos campos tienen algo escrito
    if (contrasena.value.trim() !== '' && confirmar.value.trim() !== '') {
        if (contrasena.value !== confirmar.value) {
            mostrarError(confirmar, 'Las contraseñas no coinciden.');
            mostrarError(contrasena, '');   // Marca el borde rojo sin mensaje extra
            valido = false;
        }
    }

    //-- 5. SI TODO ESTÁ BIEN, SIMULA EL ENVÍO DEL REGISTRO --\\
    if (valido) {
        alert('¡Cuenta creada correctamente! Bienvenido, ' + usuario.value.trim() + '.');

        //-- Limpiar los campos después del envío --\\
        usuario.value = '';
        contrasena.value = '';
        confirmar.value = '';
    }
});

//-- Muestra un mensaje de error debajo del input y lo marca en rojo --\\
function mostrarError(input, mensaje) {
    input.classList.add('input-error');

    //-- Buscar si ya existe un mensaje de error para no duplicarlo --\\
    let spanError = input.parentElement.querySelector('.mensaje-error');

    //-- Si no existe el span, crearlo --\\
    if (!spanError) {
        spanError = document.createElement('span');
        spanError.classList.add('mensaje-error');
        input.parentElement.appendChild(spanError);
    }

    spanError.textContent = mensaje;
}

//-- Quita el borde rojo y borra los mensajes de error de todos los campos --\\
function limpiarErrores(campos) {
    campos.forEach(function (input) {
        input.classList.remove('input-error');

        const spanError = input.parentElement.querySelector('.mensaje-error');
        if (spanError) {
            spanError.remove();
        }
    });
}