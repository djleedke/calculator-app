

var output = document.getElementById('output-text');
var operatorToggle = false;
var numberStorage = 0;
var currentOperator = "";
var lastOperator = "";
var decimal = false;

function UpdateNumber(entry){

    if(output.innerHTML === "0"){
            output.innerHTML = entry;
    } else {

        //User entered an operator need to start a new number
        if(operatorToggle){     
            output.innerHTML = "";
            operatorToggle = false;
            decimal = false;
            ResetOperators();
        }
    
        //Appending the number that was entered
        if(entry === "." && decimal === true){
            console.log("decimal exists");
        } else {
            output.innerHTML += entry;
        }

    }

    if(entry === "." && decimal === false){
        if(output.innerHTML === "."){
            output.innerHTML = "0.";
        }
        decimal = true;
    }
}

function OperatorToggle(operator){

    ResetOperators();
    operatorToggle = true;

    //If we are clicking the same operator as before, performing calculation
    //based on the last number we stored.
    if(lastOperator === currentOperator && lastOperator !== ""){
        console.log('here');
        output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
    }

    //Adding CSS to whichever button was pressed
    switch(operator){
        case "+":
            //console.log("Adding");
            document.getElementById('add').classList.add("is-pressed");
            currentOperator = "+";
            break;
        case "-":
            //console.log("Subtracting");
            document.getElementById('subtract').classList.add("is-pressed");
            currentOperator = "-";
            break;
        case "*":
            //console.log("Multiplying");
            document.getElementById('multiply').classList.add("is-pressed");
            currentOperator = "*";
            break;
        case "/":
            //console.log("Dividing");
            document.getElementById('divide').classList.add("is-pressed");
            currentOperator = "/";
            break;
    }

    numberStorage = output.innerHTML;
    lastOperator = currentOperator;
}

function Equals(){
    //console.log("Equals");
    ResetOperators();

    operatorToggle = true;

    var lastStorage = output.innerHTML;

    switch(currentOperator) {
        case "+":
            output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            break;
        case "-":
            if(lastOperator === "="){   //If the user continues to hit the "=" button more than once we need to flip the equation to calculate correctly.
                
                output.innerHTML = eval(output.innerHTML + currentOperator + numberStorage);
            } else {
                output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            }
            break;
        case "*":
            output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            break;
        case "/":
            if(lastOperator === "="){   //If the user continues to hit the "=" button more than once we need to flip the equation to calculate correctly.
                output.innerHTML = eval(output.innerHTML + currentOperator + numberStorage);
            } else {
                output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            }
        default:
            break;
    }

    if(lastOperator !== "="){
        numberStorage = lastStorage;
    }

    lastOperator = "=";
}

//Resets the CSS operator buttons color back to normal
function ResetOperators(){
    document.getElementById('add').classList.remove("is-pressed");
    document.getElementById('subtract').classList.remove("is-pressed");
    document.getElementById('divide').classList.remove("is-pressed");
    document.getElementById('multiply').classList.remove("is-pressed");
}

//Clears output back to 0 and resets the operator CSS
function Clear(){
    console.log("Clearing");
    ResetOperators();
    output.innerHTML = 0;
    operatorToggle= false;
    decimal = false;
    lastOperator = "";
    numberStorage = 0;
}