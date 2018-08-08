//function 1
function choice(answer){
  //This will ask the users a question on what to select. In order to select the choses, users would have to use the letter assossiated with the option.
  //If the user enters b, the basic calculator function will be activated.
  if(answer == "b" || answer == "basic calculator"){
    return "basic"
  }
  //If the user enters bl, the basic long calculator function will be activated.
  else if(answer == "bl" || answer == "basic Long calculator"){
    return "basicLong";
  }
  //If the user enters a, the advanced calculator function will be activated.
  else if(answer == "a" || answer == "advanced calculator"){
    return "Advanced";
  }
  //If the user enter bmi, the BMI calculator function will be activated.
  else if(answer == "bmi" || answer == "bmi calculator"){
    return "BMI";
  }
  //If the user enters t, the travel calculator function will be activated.
  else if(answer == "t" || answer == "trip calculator"){
    return "Trip_calculator";
  }
  //If the user enters something not on the list, an error message will popup.
  else{
    return "error"
  }
}
//function 2
function operationSelector(number1, operator, number2){
  //Find out if the operation is a +, -, * or divide.
  if(operator == "+"){
    //Display answer.
    return number1 + number2;
  }
  else if(operator == "-"){
    //Display answer.
    return number1 - number2;
  }
  else if(operator == "*"){
    //Display answer.
    return number1 * number2;
  }
  else if(operator == "/"){
    //Display answer.
    return number1 / number2;
  }
}
//function 3
function MorI(answer){
  if(answer == "sr" || answer == "square root"){
    return "squareRoot";
  }
  //If it it power, do this.
  else if(answer == "p" || answer == "power") {
    return "power";
  }
  //If it is none of the operations above, repeats the function.
  else{
    return "Error.";
  }

}
//function 4
function squareRoot(number1){
  number1 = Math.sqrt(number1);
  //round it to the nearest decimal place.
  number1 = Math.round( number1 * 10 ) / 10;
  //Display anwser
  return number1;
}
//function 5
function power(number1, power){
  //calculate the power
  number1 = Math.pow(number1, power);
  //round it to the nearest decimal place.
  number1 = Math.round( number1 * 10 ) / 10;
  //Display answer
  return number1;
}


module.exports = {
  choice: choice,
  operationSelector:operationSelector,
  squareRoot: squareRoot,
  power: power,
  MorI: MorI,

}
