
    function calculate(operator) {
     var firstNumber = parseInt(document.getElementById("firstNumber").value);
     var secondNumber = parseInt(document.getElementById("secondNumber").value);
     var result;
     switch(operator) {
          case 1:
               result = firstNumber + secondNumber;
               break;
          case 2:
               result = firstNumber - secondNumber;
               break;
          case 3:
               result = firstNumber * secondNumber;
               break;
          case 4:
               if (secondNumber === 0) {
                    result = "Cannot divide by 0";
               } else {
                    result = firstNumber / secondNumber;
               }
               break;
          default:
               result = "Invalid operator";
     }
     document.getElementById("resultValue").value = result;
}
    