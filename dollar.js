let exchangeRate = 4000;

let salaryInput = document.getElementById("salary");
let yesRadio = document.getElementById("yes");
let childrenInput = document.getElementById("number-of-children");
let calculateBtn = document.getElementById("calculate-btn");

let taxResult = document.getElementById("tax-result");
let rateResult = document.getElementById("rate-result");
let netResult = document.getElementById("net-result");

calculateBtn.addEventListener("click", function () {
  let salaryInDollar = Number(salaryInput.value);
  let grossSalary = salaryInDollar * exchangeRate
  let isMarried = yesRadio.checked;
  let numberOfChild = Number(childrenInput.value);

  if (grossSalary <= 0) {
    alert("Salary cannot be less or equal to 0");
    return;
  }

  if (numberOfChild < 0 || numberOfChild > 9) {
    alert("Number of children cannot be less than 0 or more than 9");
    return;
  }

  if (childrenInput.value === "") {
    alert("Please enter the number of children (0 if none)");
    return;
  }

  let baseSalary = grossSalary;
  let taxReduction = 0;
  let taxRate = 0;

  if (isMarried) {
    baseSalary -= 150000;
  }

  if (numberOfChild > 9) {
    numberOfChild = 9;
  }

  if (numberOfChild > 0) {
    baseSalary -= numberOfChild * 150000;
  }

  if (baseSalary > 1500000 && baseSalary <= 2000000) {
    taxRate = 5;
    taxReduction = baseSalary * (5 / 100) - 75000;
  } else if (baseSalary > 2000000 && baseSalary <= 8500000) {
    taxRate = 10;
    taxReduction = baseSalary * (10 / 100) - 175000;
  } else if (baseSalary > 8500000 && baseSalary <= 12500000) {
    taxRate = 15;
    taxReduction = baseSalary * (15 / 100) - 600000;
  } else if (baseSalary > 12500000) {
    taxRate = 20;
    taxReduction = baseSalary * (20 / 100) - 1225000;
  }

  let netSalary = grossSalary - taxReduction;

  taxResult.innerText = (taxReduction/exchangeRate) + " USD";
  rateResult.innerText = taxRate + " %";
  netResult.innerText = (netSalary/exchangeRate) + " USD";
});
