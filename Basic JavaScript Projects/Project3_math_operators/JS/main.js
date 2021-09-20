function add_function (a, b) {
    res = a + b;
    document.getElementById("Addition").innerHTML = a + " + " + b + " = " + res;
}

function subst_function (a, b) {
    res = a - b;
    document.getElementById("Subctriction").innerHTML = a + " - " + b + " = " + res;
}

function mult_function (a, b) {
    res = a * b;
    document.getElementById("Multiplication").innerHTML = a + " * " + b + " = " + res;
}

function mod_function (a, b) {
    res = a % b;
    document.getElementById("Remainder").innerHTML = "When you divide " + a + " by " + b + " you have a remainder of " + res;
}

function increment_function (a) {
    a++;
    document.getElementById("Increment").innerHTML = a;
}

function decrement_function (a) {
    a--;
    document.getElementById("Decrement").innerHTML = a;
}

window.alert(Math.random() * 12);