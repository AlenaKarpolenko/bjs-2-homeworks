"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  if (discriminant > 0) {
    arr[0] = parseInt((( -b + Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
    arr[1] = parseInt((( -b - Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  
  if (percentTest != Number(percent)){
	totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount	
  } else if (contributionTest != Number(contribution)){
	totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount  
  } else if (amountTest != Number(amount)){
	totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount  
	}
	  else {
  let credit = amount - contribution;
  let dateMonth = date.getMonth();
  let dateYear = date.getFullYear();
  let dateNow = new Date(Date.now());
  let dateNowMonth = dateNow.getMonth();
  let dateNowYear = dateNow.getFullYear();
  let month = (dateYear-dateNowYear)*12+(dateMonth-dateNowMonth);
  
  let payment = credit * (percent/12/100 + (percent/12/100 / (((1 + percent/12/100)**month - 1))));
  totalAmount = payment * month;

return Number(totalAmount.toFixed(2));
}
}