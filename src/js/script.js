import {
  firstNameValidation,
  surNameValidation,
  identificationNumberValidation,
  ageVerification,
  emailVerification,
} from './utils/validators.js';

// LLAMAMOS LOS ELEMENTOS DEL DOM QUE SON NECESARIOS
document.getElementById('formActualizacion').addEventListener('submit', (e) => {
  e.preventDefault(); // PREVIENE QUE SE ACTUALICE LA PÁGINA
  formValidation();
});

function formValidation() {
  firstNameValidation();
  surNameValidation();
  identificationNumberValidation();
  ageVerification();
  emailVerification();
}
