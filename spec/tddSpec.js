describe("Intro to do TDD in javaScript", function(){

  var calculator = require("../lib/Test_TDD");
  //function 1
  it("should access the basic string", function(){
    expect(calculator.choice("b")).toEqual("basic");
  })

  it("should access the basic string", function(){
    expect(calculator.choice("basic calculator")).toEqual("basic");
  })

  it("should access the basic long string", function(){
    expect(calculator.choice("bl")).toEqual("basicLong");
  })

  it("should access the basic long string", function(){
    expect(calculator.choice("basic Long calculator")).toEqual("basicLong");
  })

  it("should access the advanced string", function(){
    expect(calculator.choice("a")).toEqual("Advanced");
  })

  it("should access the advanced string", function(){
    expect(calculator.choice("advanced calculator")).toEqual("Advanced");
  })

  it("should access the BMI string", function(){
    expect(calculator.choice("bmi")).toEqual("BMI");
  })

  it("should access the BMI string", function(){
    expect(calculator.choice("bmi calculator")).toEqual("BMI");
  })

  it("should access the Trip_calculator string", function(){
    expect(calculator.choice("t")).toEqual("Trip_calculator");
  })

  it("should access the Trip_calculator string", function(){
    expect(calculator.choice("trip calculator")).toEqual("Trip_calculator");
  })

  it("should access the error string", function(){
    expect(calculator.choice("g")).toEqual("error");
  })

  //function 2
  it("should add two numbers together", function(){
    expect(calculator.operationSelector(10, "+", 5)).toEqual(15);
  })

  it("should minus two numbers together", function(){
    expect(calculator.operationSelector(10, "-", 5)).toEqual(5);
  })

  it("should multiple two numbers together", function(){
    expect(calculator.operationSelector(10, "*", 5)).toEqual(50);
  })

  it("should divide two numbers together", function(){
    expect(calculator.operationSelector(10, "/", 5)).toEqual(2);
  })
  //function 3
  it("should return the string squareRoot", function(){
    expect(calculator.MorI("sr")).toEqual("squareRoot");
  })

  it("should return the string squareRoot", function(){
    expect(calculator.MorI("square root")).toEqual("squareRoot");
  })

  it("should return the string power", function(){
    expect(calculator.MorI("p")).toEqual("power");
  })

  it("should return the string power", function(){
    expect(calculator.MorI("power")).toEqual("power");
  })

  it("should return the string Error.", function(){
    expect(calculator.MorI("d")).toEqual("Error.");
  })

  //function 4
  it("should squareRoot a number", function(){
    expect(calculator.squareRoot(9)).toEqual(3);
  })
  //function 5
  it("should do a number by the power of the number", function(){
    expect(calculator.power(9, 2)).toEqual(81);
  })
  //function 6


})
//1)split code in to two files.
//2)include new file above calculator file.
//3)export and create functions.
//4)require function
