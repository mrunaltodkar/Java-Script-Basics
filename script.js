let num1;
let num2;
let result;

function readInputs(){
    num1=Number(document.getElementById("num1").value);
    num2=Number(document.getElementById("num2").value);
}

function printResult(result){
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Answer=" + result;
}

function addition(){
    readInputs();
    result =  num1 + num2;
    printResult(result);
}

function subtraction(){
    readInputs();
    result = num1 - num2;
    printResult(result);
}

function multiplication(){
    readInputs();
    result = num1 * num2;
    printResult(result);
}

function division(){
    readInputs();
    result = num1/num2;
    printResult(result);

}