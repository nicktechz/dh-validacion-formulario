import {
  firstNameValidation,
  surNameValidation,
  identificationNumberValidation,
  ageVerification,
  emailVerification,
  termsValidation,
  isFormValid,
} from './utils/validators.js';

// LLAMAMOS LOS ELEMENTOS DEL DOM QUE SON NECESARIOS
document.getElementById('formActualizacion').addEventListener('submit', (e) => {
  e.preventDefault(); // PREVIENE QUE SE ACTUALICE LA PÁGINA
  const isValid = formValidation();
  if (isValid) {
    console.log('Listo para ser enviado');
  } else {
    console.warn('El formulario contiene algunos errores');
  }
});

function formValidation() {
  firstNameValidation();
  surNameValidation();
  identificationNumberValidation();
  ageVerification();
  emailVerification();
  termsValidation();
  const formValidation = isFormValid();
  console.log();
  return formValidation;
}
