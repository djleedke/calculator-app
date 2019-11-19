

var output = document.getElementById('output-text');
var operatorToggle = false;
var numberStorage = 0;
var currentOperator = "";
var lastOperator = "";

function UpdateNumber(entry){

    if(output.innerHTML === "0"){
        output.innerHTML = entry;
    } else {
        //User entered an operator need to start a new number
        if(operatorToggle){     
            output.innerHTML = "";
            operatorToggle = false;
            ResetSymbols();
        }
    
        //Appending the number that was entered
        output.innerHTML += entry;
    }
}

function OperatorToggle(operator){

    ResetSymbols();
    operatorToggle = true;

    switch(operator){
        case "+":
            console.log("Adding");
            if(lastOperator === currentOperator){
                output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            }
            document.getElementById('add').classList.add("is-pressed");
            currentOperator = "+";
            break;
        case "-":
            console.log("Subtracting");
            if(lastOperator === currentOperator){
                output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            }
            document.getElementById('subtract').classList.add("is-pressed");
            currentOperator = "-";
            break;
        case "*":
            console.log("Multiplying");
            document.getElementById('multiply').classList.add("is-pressed");
            currentOperator = "*";
            break;
        case "/":
            console.log("Dividing");
            document.getElementById('divide').classList.add("is-pressed");
            currentOperator = "/";
            break;
    }
    numberStorage = output.innerHTML;
    lastOperator = currentOperator;
    DebugReport();
}

function Equals(){
    console.log("Equals");
    ResetSymbols();

    operatorToggle = true;

    var lastStorage = output.innerHTML;

    switch(currentOperator) {
        case "+":
            output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            break;
        case "-":
            if(lastOperator === "="){
                output.innerHTML = eval(output.innerHTML + currentOperator + numberStorage);
            } else {
                output.innerHTML = eval(numberStorage + currentOperator + output.innerHTML);
            }
            break;
        case "*":
        case "/":
        default:
            break;
    }

    if(lastOperator !== "="){
        numberStorage = lastStorage;
    }

    lastOperator = "=";
    DebugReport();
}

//Resets our symbol button color back to normal
function ResetSymbols(){
    document.getElementById('add').classList.remove("is-pressed");
    document.getElementById('subtract').classList.remove("is-pressed");
    document.getElementById('divide').classList.remove("is-pressed");
    document.getElementById('multiply').classList.remove("is-pressed");
}

//Clears output back to 0
function Clear(){
    console.log("Clearing");
    ResetSymbols();
    output.innerHTML = 0;
    operatorToggle= false;
    lastOperator = "";
    numberStorage = 0;
}

function DebugReport(){
    console.log("NumberStorage: " + numberStorage);
    console.log("CurrentOperator: " + currentOperator);
    console.log("---------");
}