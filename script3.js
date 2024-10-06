function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
  }
  
  function appendNumber(number) {
    document.getElementById('result').value += number;
  }
  
  function appendOperator(operator) {
    const display = document.getElementById('result');
    if (display.value && !isNaN(display.value.slice(-1))) {
      display.value += operator;
    }
  }
  
  function calculate() {
    const display = document.getElementById('result');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  
