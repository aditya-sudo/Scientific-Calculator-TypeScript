var memoryRegister = [];
const display = document.getElementById("display");
function show(x: string): void {
  let y: string = document.getElementById(x).innerText;
  display.innerText += y;
}
function answer(x: string): void {
  let y: string = document.getElementById(x).innerText.toString();
  y = y.replace("^", "**");
  y = y.replace("×", "*");
  y = y.replace("÷", "/");
  document.getElementById("display").innerText = eval(y);
}
function clearscreen(): void {
  document.getElementById("display").innerHTML = "";
}
function square(): void {
  let a: number = Number(display.innerText);
  display.innerText = String(a * a);
}
function absolute(): void {
  display.innerText = String(Math.abs(Number(display.innerText)));
}
function expo(): void {
  display.innerText = String(Math.exp(Number(display.innerText)));
}
function naturallog(): void {
  display.innerText = String(Math.log(Number(display.innerText)));
}
function log(): void {
  display.innerText = String(Math.log(Number(display.innerText)));
}
function pi(): void {
  display.innerText = String(Math.PI);
}
function root(): void {
  display.innerText = String(Math.sqrt(Number(display.innerText)));
}
function power10(): void {
  show("ten");
  show("upon");
}
function power(): void {
  show("upon");
}
function fact(): void {
  let i: number;
  let num: number;
  let f: number = 1;
  num = Number(display.innerText);
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  display.innerText = String(f);
}
function del(x: string): void {
  let a: string = document.getElementById(x).innerText;
  let b: string = a.slice(0, -1);
  document.getElementById("display").textContent = b;
}
function signchange(): void {
  display.innerText = String(Number(display.innerText) * -1);
}
function inverse(): void {
  display.innerText = String(1 / Number(display.innerText));
}
function radtodeg(): void {
  display.innerText = String(Number(display.innerText) * (180 / 3.14159));
}
function cosine(): void {
  display.innerText = String(Math.cos(Number(display.innerText)));
}
function sin(): void {
  display.innerText = String(Math.sin(Number(display.innerText)));
}
function tan(): void {
  display.innerText = String(Math.tan(Number(display.innerText)));
}
function ceil(): void {
  display.innerText = String(Math.ceil(Number(display.innerText)));
}
function floor(): void {
  display.innerText = String(Math.floor(Number(display.innerText)));
}
function round(): void {
  display.innerText = String(Math.round(Number(display.innerText)));
}
function exp(): void {
  display.innerText = String(parseFloat(display.innerText).toExponential(3));
}

function memorysave(): void {
  let num: number = Number(display.innerText);
  if (Number(isNaN(num))) return;
  memoryRegister.push(num);
}
function memoryclear(): void {
  memoryRegister = [];
}
function memory(): void {
  for (let i: number = 0; i < memoryRegister.length; i++) {
    display.innerText = display.innerText + " , " + memoryRegister.pop();
  }
}
function memoryminus(): void {
  memoryRegister.pop();
}
