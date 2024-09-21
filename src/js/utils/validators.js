import { showError, hideError } from './showError.js';
import { regexValidation } from './regexValidator.js';
import { firstName, surName, idNumber, age, email } from './DOM.js';

function firstNameValidation() {
  if (firstName.value === '') {
    showError(firstName, 'Este campo es requerido');
    return false;
  } else if (firstName.value.length > 0 && firstName.value.length <= 3) {
    showError(firstName, 'El nombre debe contener más de 3 caracteres');
    return false;
  } else {
    hideError(firstName);
    return true;
  }
}
function surNameValidation() {
  if (surName.value === '') {
    showError(surName, 'Este campo es requerido');
    return false;
  } else if (surName.value.length > 0 && surName.value.length <= 3) {
    showError(surName, 'El nombre debe contener al menos 3 caracteres');
    return false;
  } else {
    hideError(surName);
    return true;
  }
}

function identificationNumberValidation() {
  if (idNumber.value === '') {
    showError(idNumber, 'Este campo es requerido');
    return false;
  } else if (idNumber.value.length > 0 && idNumber.value.length < 10) {
    showError(
      idNumber,
      'Tu identificación debe contener al menos 10 caracteres'
    );
    return false;
  } else if (idNumber.value.length > 10) {
    showError(
      idNumber,
      'Tu identificación no puede contener más de 10 caracteres'
    );
    return false;
  } else {
    hideError(idNumber);
    return true;
  }
}

function ageVerification() {
  if (age.value > 0 && age.value < 18) {
    showError(
      age,
      'Debes tener al menos 18 años para ser parte de la comunidad'
    );
    return false;
  } else if (age.value === '') {
    showError(age, 'Este campo es requerido');
    return false;
  } else if (age.value >= 120) {
    showError(age, 'Ingresa una edad válida');
    return false;
  } else {
    hideError(age);
    return true;
  }
}

function emailVerification() {
  const isStringValid = regexValidation(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    email.value
  );
  if (email.value === '') {
    showError(email, 'Este campo es requerido');
    return false;
  } else if (!isStringValid) {
    showError(
      email,
      'La dirección de correo electrónico ingresada no es válida'
    );
    return false;
  } else {
    hideError(email);
    return true;
  }
}

function termsValidation() {
  if (!terms.checked) {
    showError(terms, 'Debes aceptar los términos y condiciones');
    return false;
  } else {
    hideError(terms);
    return true;
  }
}

function isFormValid() {
  const functionsValidation =
    firstNameValidation() &&
    surNameValidation() &&
    identificationNumberValidation() &&
    ageVerification() &&
    emailVerification() &&
    termsValidation();
  if (functionsValidation) {
    return true;
  } else {
    return false;
  }
}

export {
  firstNameValidation,
  surNameValidation,
  identificationNumberValidation,
  ageVerification,
  emailVerification,
  termsValidation,
  isFormValid,
};
