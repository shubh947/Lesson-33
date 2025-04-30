function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
 document.getElementById("history-value").innerText=num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
if(num==""){
    document.getElementById("output-value").innerText=num;
}
else{
    document.getElementById("output-value").innerText=getFormattednumber(num);
}
}
function getFormattednumber (num) {
if(num==''){
    return "";
}
var n = Number(num);
var value=ToLocalestring("en");
return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(i =0;i<operator.length;i++) {
    operator[i].addEventListener('click',function() {
        if(this.id=="clear"){
            printHistory("")
            printOutput("")
        }
        else if(this.id="backspace") {
            var output=reverseNumberFormat(getOutput()).toString()

        }
    }
}
