import { showError, hideError } from './showError.js';
import { regexValidation } from './regexValidator.js';

function firstNameValidation() {
  const firstName = document.getElementById('firstName');
  if (firstName.value === '') {
    showError(firstName, 'Este campo es requerido');
  } else if (firstName.value.length > 0 && firstName.value.length <= 3) {
    showError(firstName, 'El nombre debe contener más de 3 caracteres');
  } else {
    hideError(firstName);
  }
}
function surNameValidation() {
  const surName = document.getElementById('surName');
  if (surName.value === '') {
    showError(surName, 'Este campo es requerido');
  } else if (surName.value.length > 0 && surName.value.length <= 3) {
    showError(surName, 'El nombre debe contener al menos 3 caracteres');
  } else {
    hideError(surName);
  }
}

function identificationNumberValidation() {
  const idNumber = document.getElementById('idNumber');
  if (idNumber.value === '') {
    showError(idNumber, 'Este campo es requerido');
  } else if (idNumber.value.length > 0 && idNumber.value.length < 10) {
    showError(
      idNumber,
      'Tu identificación debe contener al menos 10 caracteres'
    );
  } else if (idNumber.value.length > 10) {
    showError(
      idNumber,
      'Tu identificación no puede contener más de 10 caracteres'
    );
  } else {
    hideError(idNumber);
  }
}

function ageVerification() {
  const age = document.getElementById('age');
  if (age.value > 0 && age.value < 18) {
    showError(
      age,
      'Debes tener al menos 18 años para ser parte de la comunidad'
    );
  } else if (age.value === '') {
    showError(age, 'Este campo es requerido');
  } else {
    hideError(age);
  }
}

function emailVerification() {
  const email = document.getElementById('email');
  const isStringValid = regexValidation(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    email.value
  );
  if (email.value === '') {
    showError(email, 'Este campo es requerido');
  } else if (!isStringValid) {
    showError(
      email,
      'La dirección de correo electrónico ingresada no es válida'
    );
  } else {
    hideError(email);
  }
}

export {
  firstNameValidation,
  surNameValidation,
  identificationNumberValidation,
  ageVerification,
  emailVerification,
};
