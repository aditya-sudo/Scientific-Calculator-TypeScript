var memoryRegister = [];
var display = document.getElementById("display");
function show(x) {
    var y = document.getElementById(x).innerText;
    display.innerText += y;
}
function answer(x) {
    var y = document.getElementById(x).innerText.toString();
    y = y.replace("^", "**");
    y = y.replace("×", "*");
    y = y.replace("÷", "/");
    document.getElementById("display").innerText = eval(y);
}
function clearscreen() {
    document.getElementById("display").innerHTML = "";
}
function square() {
    var a = Number(display.innerText);
    display.innerText = String(a * a);
}
function absolute() {
    display.innerText = String(Math.abs(Number(display.innerText)));
}
function expo() {
    display.innerText = String(Math.exp(Number(display.innerText)));
}
function naturallog() {
    display.innerText = String(Math.log(Number(display.innerText)));
}
function log() {
    display.innerText = String(Math.log(Number(display.innerText)));
}
function pi() {
    display.innerText = String(Math.PI);
}
function root() {
    display.innerText = String(Math.sqrt(Number(display.innerText)));
}
function power10() {
    show("ten");
    show("upon");
}
function power() {
    show("upon");
}
function fact() {
    var i;
    var num;
    var f = 1;
    num = Number(display.innerText);
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    display.innerText = String(f);
}
function del(x) {
    var a = document.getElementById(x).innerText;
    var b = a.slice(0, -1);
    document.getElementById("display").textContent = b;
}
function signchange() {
    display.innerText = String(Number(display.innerText) * -1);
}
function inverse() {
    display.innerText = String(1 / Number(display.innerText));
}
function radtodeg() {
    display.innerText = String(Number(display.innerText) * (180 / 3.14159));
}
function cosine() {
    display.innerText = String(Math.cos(Number(display.innerText)));
}
function sin() {
    display.innerText = String(Math.sin(Number(display.innerText)));
}
function tan() {
    display.innerText = String(Math.tan(Number(display.innerText)));
}
function ceil() {
    display.innerText = String(Math.ceil(Number(display.innerText)));
}
function floor() {
    display.innerText = String(Math.floor(Number(display.innerText)));
}
function round() {
    display.innerText = String(Math.round(Number(display.innerText)));
}
function exp() {
    display.innerText = String(parseFloat(display.innerText).toExponential(3));
}
function memorysave() {
    var num = Number(display.innerText);
    if (Number(isNaN(num)))
        return;
    memoryRegister.push(num);
}
function memoryclear() {
    memoryRegister = [];
}
function memory() {
    for (var i = 0; i < memoryRegister.length; i++) {
        display.innerText = display.innerText + " , " + memoryRegister.pop();
    }
}
function memoryminus() {
    memoryRegister.pop();
}
