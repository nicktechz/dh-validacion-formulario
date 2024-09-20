// LLAMAMOS LOS ELEMENTOS DEL DOM QUE SON NECESARIOS
document.getElementById('formActualizacion').addEventListener('submit', (e) => {
  e.preventDefault(); // PREVIENE QUE SE ACTUALICE LA PÁGINA
  formValidation();
});

function showError(elemento, mensaje) {
  const elementoError = document.getElementById(`error${elemento.id}`);
  elementoError.innerHTML = mensaje;
  elementoError.style.display = 'block';
}

function hideError(elemento) {
  const elementoError = document.getElementById(`error${elemento.id}`);
  elementoError.innerHTML = '';
  elementoError.style.display = 'none';
}

function formValidation() {
  firstNameValidation();
}

function firstNameValidation() {
  const firstName = document.getElementById('firstName');
  if (firstName.value === '') {
    showError(firstName, 'Este campo es requerido');
  } else if (firstName.value.length > 0 && firstName.value.length < 3) {
    showError(firstName, 'El nombre debe contener al menos 3 caracteres');
  } else {
    hideError(firstName);
  }
}
