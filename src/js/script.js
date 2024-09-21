import {
  actividadLaboral,
  age,
  email,
  firstName,
  formacionAcademica,
  idNumber,
  surName,
  terms,
  tipoDocumento,
} from './utils/DOM.js';
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
    console.log('Listo para ser enviado' + '\n');
    console.log(`Nombre: ${firstName.value}` + '\n');
    console.log(`Apellido: ${surName.value}` + '\n');
    console.log(`Tipo de documento: ${tipoDocumento.value}` + '\n');
    console.log(`Número Documento: ${idNumber.value}` + '\n');
    console.log(`Edad: ${age.value}` + '\n');
    console.log(`Correo electrónico: ${email.value}` + '\n');
    console.log(`Actividad Laboral: ${actividadLaboral.value}` + '\n');
    console.log(`Formacion Academica: ${formacionAcademica.value}` + '\n');
    console.log(`Terminos: ${terms.value}` + '\n');
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
  return formValidation;
}
