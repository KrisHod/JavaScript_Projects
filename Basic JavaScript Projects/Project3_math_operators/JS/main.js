function add_function (a, b) {
    res = a + b;
    document.getElementById("Addition").innerHTML = a + " + " + b + " = " + res;  //putting the value of the variable res into HTML element 
} 

function subst_function (a, b) {
    res = a - b;
    document.getElementById("Subctriction").innerHTML = a + " - " + b + " = " + res; //putting the value of the variable res into HTML element 
}

function mult_function (a, b) {
    res = a * b;
    document.getElementById("Multiplication").innerHTML = a + " * " + b + " = " + res; //putting the value of the variable res into HTML element 
}

function mod_function (a, b) {
    res = a % b;
    document.getElementById("Remainder").innerHTML = "When you divide " + a + " by " + b + " you have a remainder of " + res; //putting the value of the variable res into HTML element 
}

function increment_function (a) {
    a++;
    document.getElementById("Increment").innerHTML = a; //putting the value of the variable a into HTML element 
}

function decrement_function (a) {
    a--;
    document.getElementById("Decrement").innerHTML = a; //putting the value of the variable a into HTML element
}

window.alert(Math.random() * 12); //show random number from 0 to 12