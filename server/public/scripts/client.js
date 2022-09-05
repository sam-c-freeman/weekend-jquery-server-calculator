$(document).ready(handleReady);


function handleReady (){
    $('.button').on('click', getCaculationData);
    $('#ac-button').on('click', clearAll);
    $('#del').on('click', deleteOne);
    $('#equals-button').on('click', sendToSever);
    // $('#equals-button').on('click', checkForEquation);
}

let digits = [];
let firstOperator;
let secondOperator;
let mathObject;

function clearAll () {
    digits = [];
    $('.previous-calculation').text('');
    $('.current-calculation').text('');
}

function deleteOne (){
    digits.pop();
    let joinedDigits = digits.join('');
    $('.previous-calculation').text(joinedDigits);
    
}

function getCaculationData (){
    // let firstOperator;
    // let secondOperator;
    // let mathObject;
    let buttonClicked = $(this).attr('id');
    digits.push(buttonClicked);
    let joinedDigits = digits.join('');
    $('.previous-calculation').text(joinedDigits);
    if(joinedDigits.includes('+')){
        firstOperator = joinedDigits.split('+')[0];
        secondOperator = joinedDigits.split('+')[1];
        mathObject = {
            firstOperator: firstOperator,
            operation: '+',
            secondOperator: secondOperator,
        }
        console.log(mathObject);
    }
    if(joinedDigits.includes('-')){
        firstOperator = joinedDigits.split('-')[0];
        secondOperator = joinedDigits.split('-')[1];
        mathObject = {
            firstOperator: firstOperator,
            operation: '-',
            secondOperator: secondOperator,
        }
        console.log(mathObject);
    }

    if(joinedDigits.includes('*')){
        firstOperator = joinedDigits.split('*')[0];
        secondOperator = joinedDigits.split('*')[1];
        mathObject = {
            firstOperator: firstOperator,
            operation: '*',
            secondOperator: secondOperator,
        }
        console.log(mathObject);
    }
    if(joinedDigits.includes('/')){
        firstOperator = joinedDigits.split('/')[0];
        secondOperator = joinedDigits.split('/')[1];
        mathObject = {
            firstOperator: firstOperator,
            operation: '/',
            secondOperator: secondOperator,
        }
        console.log(mathObject);
    }
    
   
}

function sendToSever () {
    digits = [];
    $('.previous-calculation').text('');
    $.ajax({
                method: 'POST',
                url: '/calculations',
                data: mathObject,
              }).then(function (response){
                console.log(response);
                getCalculations();
              }) 
}


function getCalculations (){
        $.ajax({
            method: 'GET',
            url: '/calculations'
          }).then(function(calculations){
            $('.current-calculation').empty();
            $('.current-calculation').text(calculations[calculations.length-1].answer);
            $('#history').empty();
            for(let i =0; i<calculations.length; i++){
                $('#history').append(`<li>${calculations[i].firstOperator} ${calculations[i].operation} ${calculations[i].secondOperator} = ${calculations[i].answer}`)
            }
          })
        }

//below is not working for checking for all inputs (stretch)
//if the user enters a number, an operation and then equals is does work
//I took this back out because it was not working as expected when I put the code 
//into the flow of functions
function checkForEquation (){
    if(mathObject.firstOperator === '' || mathObject.secondOperator === '' || mathObject.operation === undefined || mathObject === undefined){
        $('.previous-calculation').text('Please start over and enter two numbers!');
    }
}


//original base made below

// function handleReady() {
//  $('#submitButton').on('click', sendNumbersToServer);
//  $('#clearButton').on('click', clearInputs);
//  $('#plusButton').on('click', plusSelected);
//  $('#minusButton').on('click', minusSelected);
//  $('#multiplyButton').on('click', multiplySelected);
//  $('#divideButton').on('click', divideSelected);
// }

// let operator;
// // let clientSideCalculations = [];

// function sendNumbersToServer (){
//     let mathObject = {
//         input1: $('#num1').val(), //currently strings
//         operator: operator,
//         input2: $('#num2').val(),
        
//     }
//     console.log('original object sent to server',mathObject);
//     $('#num1').val('');
//     $('#num2').val('');
//     resetCalculator();
//     //POST route to server below
//     $.ajax({
//         method: 'POST',
//         url: '/calculations',
//         data: mathObject,
//       }).then(function (response){
//         console.log(response);
//         getCalculations();
//       }) 
// }

// function plusSelected (){
//     operator = '+';
//     $('#minusButton').prop('disabled', true);
//     $('#multiplyButton').prop('disabled', true);
//     $('#divideButton').prop('disabled', true);
//     // console.log(operator);
// }


// function minusSelected (){
//     operator = '-';
//     $('#plusButton').prop('disabled', true);
//     $('#multiplyButton').prop('disabled', true);
//     $('#divideButton').prop('disabled', true);
//     // console.log(operator);
// }

// function multiplySelected (){
//     operator = 'x';
//     $('#plusButton').prop('disabled', true);
//     $('#minusButton').prop('disabled', true);
//     $('#divideButton').prop('disabled', true);
// //     console.log(operator);
// }

// function divideSelected (){
//     operator = '/';
//     $('#plusButton').prop('disabled', true);
//     $('#minusButton').prop('disabled', true);
//     $('#divideButton').prop('disabled', true);
//     // console.log(operator);
// }


// function resetCalculator (){
//     $('#plusButton').prop('disabled', false);
//     $('#minusButton').prop('disabled', false);
//     $('#multiplyButton').prop('disabled', false);
//     $('#divideButton').prop('disabled', false);
// }

// function clearInputs (){
//     $('#num1').val('');
//     $('#num2').val('');
//     $('#plusButton').prop('disabled', false);
//     $('#minusButton').prop('disabled', false);
//     $('#multiplyButton').prop('disabled', false);
//     $('#divideButton').prop('disabled', false);
// }

// function getCalculations (){
//     $.ajax({
//         method: 'GET',
//         url: '/calculations'
//       }).then(function(calculations){
//         $('#answerOutput').empty();
//         $('#answerOutput').text(calculations[calculations.length-1].answer);
//         $('#history').empty();
//         for(let i =0; i<calculations.length; i++){
//             $('#history').append(`<li>${calculations[i].input1} ${calculations[i].operator} ${calculations[i].input2} = ${calculations[i].answer}`)
//         }
//       })
//     }

//why can't I access what is sent back?

//do I need to reset operator between calculations?