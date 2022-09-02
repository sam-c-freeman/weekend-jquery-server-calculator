$(document).ready(handleReady);

function handleReady() {
 $('#submitButton').on('click', sendNumbersToServer)
 $('#clearButton').on('click', clearInputs)
}

function sendNumbersToServer (){
    console.log('click me');
}

function clearInputs (){
    $('#num1').val('');
    $('#num2').val('');
}