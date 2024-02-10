let displayValue = "";
var appendToDisplay;
var clearDisplay;
var calculate;
function appendToDisplay(value){
	displayValue += value;
	document.getElementById("display").value = displayValue;
}
function clearDisplay() {
		displayValue = '';
		document.getElementById('display').value = displayValue;
}
function calculate() {
	displayValue = eval(displayValue);
	document.getElementById('display').value = displayValue;
}