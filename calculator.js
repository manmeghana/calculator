let currentExpression = '';

function append(value) {
  currentExpression += value;
  updateInput();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateInput();
  } catch (error) {
    currentExpression = 'Error';
    updateInput();
  }
}

function clearAll() {
  currentExpression = '';
  updateInput();
}

function updateInput() {
  document.getElementById('input').value = currentExpression;
}
