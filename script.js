
let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}

/*var btn = document.getElementById("btn");
var display = document.getElementById('screen');
function show() {
    display.value += btn.value;
}
btn.addEventListener('click',show);
*/