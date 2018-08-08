//Calling the function choice to start the code.
choice();

//This function will allow the user to make a chose on what to select.
function choice(){
  //This will ask the users a question on what to select. In order to select the choses, users would have to use the letter assossiated with the option.
  var answer = prompt("What would you like to use(type the acronym): Basic calculator(B), Basic Long calculator(BL), Advanced calculator(A), BMI calculator(BMI) or Trip calculator(T)").toLowerCase();
  //If the user enters b, the basic calculator function will be activated.
  if(answer == "b" || answer == "basic calculator"){
    basic();
  }
  //If the user enters bl, the basic long calculator function will be activated.
  else if(answer == "bl" || answer == "basic Long calculator"){
    basicLong();
  }
  //If the user enters a, the advanced calculator function will be activated.
  else if(answer == "a" || answer == "advanced calculator"){
    Advanced();
  }
  //If the user enter bmi, the BMI calculator function will be activated.
  else if(answer == "bmi" || answer == "bmi calculator"){
    BMI();
  }
  //If the user enters t, the travel calculator function will be activated.
  else if(answer == "t" || answer == "trip calculator"){
    Trip_calculator();
  }
  //If the user enters something not on the list, an error message will popup.
  else{
    alert("error.");
    choice()
  }
}

function basic(){
  //Ask the user to type on 2 numbers and a operation.
  var number1 = parseInt(prompt("Enter first number"));
  var operator = prompt("Enter operation");
  var number2 = parseInt(prompt("Enter second number"));
  //Find out if the operation is a +, -, * or divide.
  if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
      number1 = operationSelector(number1, operator, number2);
  }
  //If it is none of the operations above, send error.
  else{
    console.log("Does not compute operator.");
    basic();
  }
  alert(number1);
  //Call the choice function to start again.
  choice();
}

function operationSelector(number1, operator, number2){
  //Find out if the operation is a +, -, * or divide.
  if(operator == "+"){
    console.log(number1 + number2);
    //Display answer.
    return number1 + number2;
  }
  else if(operator == "-"){
    console.log(number1 - number2);
    //Display answer.
    return number1 - number2;
  }
  else if(operator == "*"){
    console.log(number1 * number2);
    //Display answer.
    return number1 * number2;
  }
  else if(operator == "/"){
    console.log(number1 / number2);
    //Display answer.
    return number1 / number2;
  }
}

function basicLong(){
  //Give the computer one operation.
  var number1 = parseInt(prompt("Enter first number"));
  //Below will hold the rest of the numbers/operation.
  //These will be updated until it meets an equals.
  var operator;
  var number2;
  //Variable below holds false to activate the loop.
  var pressedEqual = false;
  //The while loop checks if the boolean variable is still false.
  while(!pressedEqual){
    //Below asks for an operation.
    operator = prompt("Enter an operation");
    //Find out if the operation is a +, -, * or divide.
    if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
        number2 = parseInt(prompt("Enter a number"));
        number1 = operationSelector(number1, operator, number2);
    }
    //If the operation is equals, close the loop and show answer.
    else if(operator == "="){
      //Display answer
      alert(number1);
      pressedEqual = true;
    }
    //If it is none of the operations above, send error.
    else{
      console.log("Does not compute operator.");
      basicLong();
    }
  }
  //Call the choice function to start again.
  choice();
}



function Advanced(){
  //Ask if the user would like to use sqareroot or power.
  var answer = prompt("Which function would you like to us? Square Root(sr) or Power(p).").toLowerCase();
  //If it it square root, do this.
  if(answer == "sr" || answer == "square root"){
    //Ask the user to insert a number and what it will be square root by.
    var number1 = parseInt(prompt("Enter a number"));
    //calculate the square root.
    number1 = Math.sqrt(number1);
    //round it to the nearest decimal place.
    number1 = Math.round( number1 * 10 ) / 10;
    //Display anwser
    alert(number1);
  }
  //If it it power, do this.
  else if(answer == "p" || answer == "power") {
    //Ask the user to insert a number and what it will be powered by.
    var number1 = parseInt(prompt("Enter a number"));
    var power = parseInt(prompt("Enter a power"));
    //calculate the power
    number1 = Math.pow(number1, power);
    //round it to the nearest decimal place.
    number1 = Math.round( number1 * 10 ) / 10;
    //Display answer
    alert(number1);
  }
  //If it is none of the operations above, repeats the function.
  else{
    alert("Error.");
    Advanced()
  }
  //Call the choice function to start again.
  choice();
}

function BMI(){
  //Users are asked to insert weight and hieght.
  var answer = prompt("Would you like to use Imperial(i) or Metric measurements(m)?")

  if(answer == "m" || answer == "metric"){
    var weight = parseFloat(prompt("Type in your weight in kg"));
    var height = parseFloat(prompt("Type in your height in meters"));
    //It will the calculate the BMI
    var result = (weight / height) / height;
    //round it to the nearest decimal place.
    result = Math.round( result * 10 ) / 10;
    //Display answer
    alert(result);
  }
  //If the user enters bl, the basic long calculator function will be activated.
  else if(answer == "i" || answer == "imperial"){
    var weight = parseFloat(prompt("Type in your weight in pounds"));
    var height = parseFloat(prompt("Type in your height in inches"));
    //It will the calculate the BMI
    var result = ((weight * 703) / height) / height;
    //round it to the nearest decimal place.
    result = Math.round( result * 10 ) / 10;
    //Display answer
    alert(result);
  }
  //Call the choice function to start again.
  choice();
}

function Trip_calculator(){
  //Users are asked to insert distance travelled, fuel consumed and cost for fuel.
  var distance = parseFloat(prompt("Type in How far you travelled in kilometers"));
  var fuel_consumption = parseFloat(prompt("Type in your fuel consumption"));
  var cost = parseFloat(prompt("Type in how much per litres fuel costs"));
  var speed = parseInt(prompt("How fast were you travelling (Miles per hour)?"));

  //Below does the calculation for travel costs.
  var result1 = distance/1000;
  result1 = result1 * fuel_consumption;
  result1 = result1 * cost;
  //round it to the nearest decimal place.
  result1 = Math.round( result1 * 100 ) / 100;

  var result2 = distance/speed;
  result2 = Math.round( result2 * 100 ) / 100;
  //Display answer
  alert("The journey will cost £" + result1 + " and will take " + result2 + "hr");
  //Call the choice function to start again.
  choice();
}
