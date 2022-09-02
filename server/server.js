const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let calculations = [];



// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/calculations', (req,res) => {
  mathObject = req.body;
  mathObject.answer = doCalculations(mathObject);
  console.log(mathObject);
  doCalculations(mathObject);
  calculations.push(mathObject);
  res.sendStatus(200);
})


//struggling to add mathObject.answer permanently



//calculation function below

function doCalculations (){
  if(mathObject.operator === '+'){
  return Number(mathObject.input1) + Number(mathObject.input2);
  } else if (mathObject.operator === '-') {
    return Number(mathObject.input1) - Number(mathObject.input2);
  } else if (mathObject.operator === 'x') {
    return Number(mathObject.input1) * Number(mathObject.input2);
  } else {
    return Number(mathObject.input1) / Number(mathObject.input2);
  }
  // console.log(mathObject);
}

console.log(calculations);


app.listen(PORT, () => {
  console.log ('Knock Knock!', PORT)
})