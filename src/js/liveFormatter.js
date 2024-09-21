import { age, email, firstName, idNumber, surName } from './utils/DOM.js';

firstName.addEventListener('input', (e) => {
  const updatedValue = formatText(firstName);
  e.value = updatedValue;
  firstName.value = e.value;
});
surName.addEventListener('input', (e) => {
  const updatedValue = formatText(surName);
  e.value = updatedValue;
  surName.value = e.value;
});
idNumber.addEventListener('input', (e) => {
  const updatedValue = formatText(idNumber);
  e.value = updatedValue;
  idNumber.value = e.value;
});
age.addEventListener('input', (e) => {
  const updatedValue = formatText(age);
  e.value = updatedValue;
  age.value = e.value;
});
email.addEventListener('input', (e) => {
  const updatedValue = formatText(email);
  e.value = updatedValue;
  email.value = e.value;
});

function formatText(elemento) {
  const formatedValue = elemento.value.replace(/\s/g, '');
  return formatedValue;
}
