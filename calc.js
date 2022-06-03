num1=Number(document.getElementById("number1").textContent)
num2=Number(document.getElementById("number2").textContent)
function sum(){
    result=(num1+num2)
    document.getElementById("result").textContent="Summation Result: "+result
}
function subtract(){
    result=(num1-num2)
    document.getElementById("result").textContent="Subtraction Result: "+result
}
function divide(){
    result=(num1/num2) 
    document.getElementById("result").textContent="Division Result: "+result
}
function multiply(){
    result=(num1*num2) 
    document.getElementById("result").textContent= "Multiplicaton Result: "+result
}