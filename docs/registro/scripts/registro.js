/*
 * registro.js
 * Validaciones del formulario de registro (Ejercicio 1)
 */

var registro, password1, password2, fechaInicio, registroSubmit;

/* Comprueba que ambas contraseñas coinciden en tiempo real */
function validarPasswords() {
  if (password1.value !== password2.value) {
    password2.setCustomValidity('Las passwords deben coincidir');
  } else {
    password2.setCustomValidity('');
  }
}

/* Se ejecuta al pulsar el botón Envíame */
function enviar() {
  /* Validar que la fecha de inicio no es anterior a hoy */
  if (fechaInicio.value) {
    var fechaActual = new Date();
    /* Ajustamos a medianoche para comparar solo la fecha */
    fechaActual.setHours(0, 0, 0, 0);
    var fechaIni = new Date(fechaInicio.value);

    if (fechaIni < fechaActual) {
      fechaInicio.setCustomValidity(
        'La fecha de inicio debe ser mayor o igual que la fecha actual'
      );
    } else {
      fechaInicio.setCustomValidity('');
    }
  }

  /* Enviar solo si todo es válido */
  if (registro.checkValidity()) {
    registro.submit();
  }
}

function iniciar() {
  registro       = document.getElementById('registro');
  password1      = document.getElementById('password1');
  password2      = document.getElementById('password2');
  fechaInicio    = document.getElementById('fechaInicio');
  registroSubmit = document.getElementById('registro-submit');

  /* Validación en tiempo real de contraseñas */
  password1.addEventListener('input', validarPasswords, false);
  password2.addEventListener('input', validarPasswords, false);

  /* Validación al pulsar enviar */
  registroSubmit.addEventListener('click', enviar, false);
}

window.addEventListener('load', iniciar, false);
