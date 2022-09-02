$(document).ready(handleReady);

function handleReady() {
 $('#submitButton').on('click', sendNumbersToServer)
 $('#clearButton').on('click', clearInputs)
}

function sendNumbersToServer (){
    let mathObject = {
        input1: $('#num1').val(), //currently strings
        input2: $('#num2').val(),
        //how to do operator?
    }
    console.log(mathObject);
    $('#num1').val('');
    $('#num2').val('');
}

function clearInputs (){
    $('#num1').val('');
    $('#num2').val('');
}