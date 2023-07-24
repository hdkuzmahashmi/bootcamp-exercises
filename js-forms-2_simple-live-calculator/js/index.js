console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  multiplyValues();
});

secondInput.addEventListener("input", () => {
  multiplyValues();
});

function multiplyValues() {
  const num1 = Number.parseInt(firstInput.value);
  const num2 = Number.parseInt(secondInput.value);
  const resultvalue = num1 * num2;
  result.textContent = resultvalue;
}
