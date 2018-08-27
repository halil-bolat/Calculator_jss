var exit = false;
while (exit == false) {
  var asdf = prompt('Which function: ');
  if (asdf == 'percent' || asdf == 'add' || asdf == 'minus' || asdf == 'divide' || asdf == 'multiply') {
      var num1 = parseInt(prompt('Enter first number: '));
      var num2 = parseInt(prompt('Enter second number: '));
      switch (asdf) {
        case 'add':
          alert(add(num1,num2));
          break;
        case 'divide':
          alert(divide(num1,num2));
          break;
        case 'minus':
          alert(minus(num1,num2));
          break;
          case 'percent':
            alert(percent(num1,num2) + '%');
            break;
        case 'multiply':
          alert(multiply(num1,num2));
          break;
        default:
          alert('ERROR');
      }
  }
  else if (asdf == 'help') {
    alert('You can use functions like add, minus, divide, percent, multiply or exit to exit out')
  }
  else if (asdf == 'exit') {
    exit = true;
  }
  else {
    alert('ERROR404 - Type in "help" for more information.');
  }
}
function add(num1,num2) {
  return num1 + num2;
}
function minus(num1,num2) {
  return num1 - num2;
}
function divide(num1,num2) {
  return num1 / num2;
}
function multiply(num1,num2) {
  return num1 * num2;
}
function percent(num1,num2) {
  return (num1/num2) * 100;
}
