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
// let clientSideCalculations = [];

function sendNumbersToServer (){
    let mathObject = {
        input1: $('#num1').val(), //currently strings
        operator: operator,
        input2: $('#num2').val(),
        
    }
    console.log('original object sent to server',mathObject);
    $('#num1').val('');
    $('#num2').val('');
    resetCalculator();
    //POST route to server below
    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: mathObject,
      }).then(function (response){
        console.log(response);
        getCalculations();
      }) 
}

function plusSelected (){
    operator = '+';
    $('#minusButton').prop('disabled', true);
    $('#multiplyButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    // console.log(operator);
}


function minusSelected (){
    operator = '-';
    $('#plusButton').prop('disabled', true);
    $('#multiplyButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    // console.log(operator);
}

function multiplySelected (){
    operator = 'x';
    $('#plusButton').prop('disabled', true);
    $('#minusButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
//     console.log(operator);
}

function divideSelected (){
    operator = '/';
    $('#plusButton').prop('disabled', true);
    $('#minusButton').prop('disabled', true);
    $('#divideButton').prop('disabled', true);
    // console.log(operator);
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

function getCalculations (){
    $.ajax({
        method: 'GET',
        url: '/calculations'
      }).then(function(calculations){
        
        // $('#answerOutput').empty();
        // $('#answerOutput').text(calculations[0][answer]);
        
        console.log(calculations.values());
      })
    }

//why can't I access what is sent back?

//do I need to reset operator between calculations?