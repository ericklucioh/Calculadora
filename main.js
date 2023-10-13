
function insert(num) {
    var input = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = input + num;
}
function view(num) {
    var number = document.getElementById('result1').innerHTML;
    document.getElementById('result1').innerHTML = number + num;
}
function clean(){
    document.getElementById(`result`).innerHTML =""
    document.getElementById('result1').innerHTML =""
}
function back () {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
    var result = document.getElementById('result1').innerHTML;
    document.getElementById('result1').innerHTML = result.substring(0, result.length - 1);
}
function calculate() {
    var result = document.getElementById('result').innerHTML;
    var result1 = document.getElementById('result1').innerHTML;
    if (result) {
        document.getElementById('count').innerHTML = result1;
        document.getElementById('result1').innerHTML = eval(result);
    }
}
var dark = true;
function setTheme() {
    document.documentElement.className = 'light';
    if (this.dark !== true) {
        document.documentElement.className = 'dark';
    }
    dark = !dark;
}
