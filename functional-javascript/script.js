function calc(operator, num1, num2) {
  switch (operator) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "divide":
      return num1 / num2;
    case "multiply":
      return num1 * num2;
  }
}

