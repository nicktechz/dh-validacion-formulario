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

export { showError, hideError };
