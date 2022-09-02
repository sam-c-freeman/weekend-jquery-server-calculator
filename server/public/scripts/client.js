$(document).ready(handleReady);

function handleReady() {
 $('#submitButton').on('click', sendNumbersToServer);
 $('#clearButton').on('click', clearInputs);
 $('#plusButton').on('click', plusSelected);
 $('#minusButton').on('click', minusSelected);
 $('#multiplyButton').on('click', multiplySelected);
 $('#divideButton').on('click', divideSelected);
}

let operator;

function sendNumbersToServer (){
    let mathObject = {
        input1: $('#num1').val(), //currently strings
        operator: operator,
        input2: $('#num2').val(),
        
    }
    console.log(mathObject);
    $('#num1').val('');
    $('#num2').val('');
    resetCalculator(); 
}

function plusSelected (){
    operator = '+';
    $('#minusButton').prop('disabled', true);
    $('#multiplyButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    console.log(operator);
}


function minusSelected (){
    operator = '-';
    $('#plusButton').prop('disabled', true);
    $('#multiplyButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    console.log(operator);
}

function multiplySelected (){
    operator = 'x';
    $('#plusButton').prop('disabled', true);
    $('#minusButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    console.log(operator);
}

function divideSelected (){
    operator = '/';
    $('#plusButton').prop('disabled', true);
    $('#minusButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    console.log(operator);
}


function resetCalculator (){
    $('#plusButton').prop('disabled', false);
    $('#minusButton').prop('disabled', false);
    $('#multiplyButton').prop('disabled', false);
    $('#divideButton').prop('disabled', false);
}

function clearInputs (){
    $('#num1').val('');
    $('#num2').val('');
    $('#plusButton').prop('disabled', false);
    $('#minusButton').prop('disabled', false);
    $('#multiplyButton').prop('disabled', false);
    $('#divideButton').prop('disabled', false);
}

//do I need to reset operator between calculations?