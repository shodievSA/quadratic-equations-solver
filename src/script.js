var inputClicked = document.querySelector(".inputA");

document.querySelector(".inputA").onclick = () => inputClicked = document.querySelector(".inputA");

document.querySelector(".inputB").onclick = () => inputClicked = document.querySelector(".inputB");
    
document.querySelector(".inputC").onclick = () => inputClicked = document.querySelector(".inputC");

document.querySelector(".inputD").onclick = () => inputClicked = document.querySelector(".inputD");
    
document.querySelector(".inputE").onclick = () => inputClicked = document.querySelector(".inputE");

document.querySelector(".inputF").onclick = () => inputClicked = document.querySelector(".inputF");

document.onkeyup = function() {

    switch(true) {

        case event.keyCode === 13 && inputClicked == document.querySelector(".inputA"):
        inputClicked = document.querySelector(".inputB");
        inputClicked.focus();
        break;

        case event.keyCode === 13 && inputClicked == document.querySelector(".inputB"):
        inputClicked = document.querySelector(".inputC");
        inputClicked.focus();
        break;

        case event.keyCode === 13 && inputClicked == document.querySelector(".inputC"):
        inputClicked = document.querySelector(".inputD");
        inputClicked.focus();
        break;

        case event.keyCode === 13 && inputClicked == document.querySelector(".inputD"):
        inputClicked = document.querySelector(".inputE");
        inputClicked.focus();
        break;

        case event.keyCode === 13 && inputClicked == document.querySelector(".inputE"):
        inputClicked = document.querySelector(".inputF");
        inputClicked.focus();
        break;

        case event.keyCode === 13 && inputClicked == document.querySelector(".inputF"):
        inputClicked = document.querySelector(".inputA");
        inputClicked.focus();
        break;
    } 
}

document.querySelector(".key1").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
    (inputClicked.value.length < 2) ? inputClicked.value += 1:inputClicked.value += "";
    }

    else {
    inputClicked.value += "";
    }
    }

document.querySelector(".key2").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 2:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
    }

document.querySelector(".key3").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 3:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
    }

document.querySelector(".key4").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 4:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
    }

document.querySelector(".key5").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 5:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
    }

document.querySelector(".key6").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 6:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
    }

document.querySelector(".key7").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 7:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
    }

document.querySelector(".key8").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 8:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
}

document.querySelector(".key9").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 9:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
}

document.querySelector("#key0").onclick = function() {
    if(inputClicked == document.querySelector(".inputB") || inputClicked == document.querySelector(".inputD") || inputClicked == document.querySelector(".inputF")) {
        (inputClicked.value.length < 2) ? inputClicked.value += 0:inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
}

document.querySelector(".minusKey").onclick = function() {
     if(inputClicked == document.querySelector(".inputA") || inputClicked == document.querySelector(".inputC") || inputClicked == document.querySelector(".inputE")) {
        (inputClicked.value.length < 1) ? inputClicked.value += "-":inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
}

document.querySelector(".plusKey").onclick = function() {
    if(inputClicked == document.querySelector(".inputA") || inputClicked == document.querySelector(".inputC") || inputClicked == document.querySelector(".inputE")) {
        (inputClicked.value.length < 1) ? inputClicked.value += "+":inputClicked.value += "";
    }

    else {
        inputClicked.value += "";
    }
}

document.querySelector(".backspaceKey").onclick = function() {
    var toArray = Array.from(inputClicked.value);
    toArray.pop();
    inputClicked.value = toArray.join();
}

document.querySelector(".removeKey").onclick = function() {

    var inputs = [];
    inputs[0] = document.querySelector(".inputA");
    inputs[1] = document.querySelector(".inputB");
    inputs[2] = document.querySelector(".inputC");
    inputs[3] = document.querySelector(".inputD");
    inputs[4] = document.querySelector(".inputE");
    inputs[5] = document.querySelector(".inputF");

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

document.querySelector("#solveButton").onclick = function() {

if(document.querySelector(".inputC" ).value == "" || document.querySelector(".inputE").value == "" || document.querySelector(".inputF").value == ""){
    alert("Error occured! You haven't fulfilled all the blanks!");
}

else {

var input1 = document.querySelector(".inputA").value;
var input2 = document.querySelector(".inputB").value;

if(input2 == "") {
    input2 = 1;
}

var input3 = document.querySelector(".inputC").value;
var input4 = document.querySelector(".inputD").value;

if(input4 == "") {
    input4 = 1;
}

var input5 = document.querySelector(".inputE").value;
var input6 = document.querySelector(".inputF").value;

var a = input1 + input2;
var b = input3 + input4;
var c = input5 + input6;

var equation = document.querySelector("#equation");
    equation.style.display = "none";

var results = document.querySelector("#results");
    results.style.display = "flex";
    results.style.justifyContent = "space-around";
    results.style.alignItems = "center";
    results.style.height = "100px";
    results.style.userSelect = "none";
    results.style.marginLeft = "10px";
    results.style.marginRight = "10px";

function solution(coef1, coef2, coef3) {

    var discriminant = (coef2 * coef2) - (4 * coef1 * coef3);

    var x1 = (-coef2 + Math.sqrt(discriminant)) / (2 * coef1);

    var x2 = (-coef2 - Math.sqrt(discriminant)) / (2 * coef1);

    if(discriminant > 0) {

    document.querySelector("#p1").innerText = (`D=${discriminant}`);

    (x1.toString().length > 5) ? document.querySelector("#p2").innerText = (`x1≈${x1.toFixed(1)}`):document.querySelector("#p2").innerText = (`x1=${x1}`);

    (x2.toString().length > 5) ? document.querySelector("#p3").innerText = (`x2≈${x2.toFixed(1)}`):document.querySelector("#p3").innerText = (`x2=${x2}`);
    
    }

    else if(discriminant == 0) {

    document.querySelector("#p3").innerText = "";

    document.querySelector("#p1").innerText = (`D = ${discriminant}`);
    
    (x1.toString().length > 5) ? document.querySelector("#p2").innerText = (`x1/x2 ≈ ${x1.toFixed(1)}`):document.querySelector("#p2").innerText = (`x1/x2 = ${x1}`);

    }

    else {

    document.querySelector("#p3").innerText = "";

    document.querySelector("#p1").innerText = (`D=${discriminant}`);

    document.querySelector("#p2").innerText = (`No real roots!`);

    }

    }

solution(a, b, c);

document.querySelector(".removeKey").onclick = function() {

    var inputs = [];
    inputs[0] = document.querySelector(".inputA");
    inputs[1] = document.querySelector(".inputB");
    inputs[2] = document.querySelector(".inputC");
    inputs[3] = document.querySelector(".inputD");
    inputs[4] = document.querySelector(".inputE");
    inputs[5] = document.querySelector(".inputF");

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    
    results.style.display = "none";
    equation.style.display = "flex"; 

    inputClicked = document.querySelector(".inputA");
    inputClicked.focus();

  }
 }
}




















