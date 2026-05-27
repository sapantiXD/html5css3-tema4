/*
 * contacto.js
 * Validaciones del formulario de contacto (Ejercicio 2)
 */

var nombre, correo, formulario;
var nombresValidos = ['alex', 'juan', 'ana', 'pedro'];

/* -------------------------------------------------------
   Valida que el nombre sea uno de los permitidos
   ------------------------------------------------------- */
function validarNombre() {
  var valor = nombre.value.trim().toLowerCase();

  if (valor === '' || nombresValidos.indexOf(valor) !== -1) {
    /* Campo vacío (el required lo gestionará) o nombre válido */
    nombre.setCustomValidity('');
  } else {
    nombre.setCustomValidity('El usuario introducido no existe');
  }
}

/* -------------------------------------------------------
   Valida que el correo sea de dominio español (.es)
   ------------------------------------------------------- */
function validarCorreo() {
  var valor = correo.value.trim().toLowerCase();

  if (valor === '') {
    /* Campo vacío: el required lo gestionará */
    correo.setCustomValidity('');
  } else if (!valor.endsWith('.es')) {
    correo.setCustomValidity(
      'Debes introducir una dirección de correo española (acabada en .es)'
    );
  } else {
    correo.setCustomValidity('');
  }
}

/* -------------------------------------------------------
   Inicialización: asociar eventos
   ------------------------------------------------------- */
function iniciar() {
  nombre    = document.getElementById('nombre');
  correo    = document.getElementById('correo');
  formulario = document.getElementById('contacto');

  /* Validación en tiempo real mientras el usuario escribe */
  nombre.addEventListener('input', validarNombre, false);
  correo.addEventListener('input', validarCorreo, false);

  /* También validar al enviar por si el usuario no ha tocado los campos */
  formulario.addEventListener('submit', function (e) {
    validarNombre();
    validarCorreo();
    if (!formulario.checkValidity()) {
      e.preventDefault();
    }
  }, false);
}

window.addEventListener('load', iniciar, false);
