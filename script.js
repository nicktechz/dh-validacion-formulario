// LLAMAMOS LOS ELEMENTOS DEL DOM QUE SON NECESARIOS
const form = document.getElementById('formActualizacion');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // PREVIENE QUE SE ACTUALICE LA PÁGINA
});

function formValidation() {
  const firstName = document.getElementById('firstName');
  const surName = document.getElementById('surName');
  const numeroDocumento = document.getElementById('numeroDocumento');
}
formValidation();
