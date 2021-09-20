alert("CouCou!");

document.write('Salut');
var A = "\"This is a String\"";
document.write(A);
window.alert(A);
 
var LastName = "Jackson", Name = "Michael";
document.write(Name + LastName);

var blue = "Kris".fontcolor("blue");
document.write(blue);
 
var Expression = 3+3;
document.write(Expression);

function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result; //putting the value of the result into HTML element with "Green_Text" id
}