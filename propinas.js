// Obtener el formulario y el resultado en el DOM
const form = document.getElementById('tipForm');

const resultDiv = document.getElementById('result');
// resultDiv.innerHTML = "Hola soy un div";
// resultDiv.style.backgroundColor = 'red';
// console.log(resultDiv)

// Agregar un evento de escucha al formulario
form.addEventListener('submit', calculateTip);

// Función para calcular la propina
function calculateTip(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener el valor del total de la cuenta y el porcentaje de propina
  const total = parseFloat(document.getElementById('total').value);
  const percentage = parseInt(document.getElementById('percentage').value);

  // Calcular la propina
  const tipAmount = (total * percentage) / 100;

  // Mostrar el resultado en el DOM
  resultDiv.innerHTML = `<p>Propina: $${tipAmount.toFixed(2)}</p>`;
}
