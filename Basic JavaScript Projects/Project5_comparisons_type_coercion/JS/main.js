document.write(typeof "Hello");
document.write("<br>"); 

document.write(typeof 3.6);
document.write("<br>");

var Employee = {    
    Name:"Michael",
    LastName:"Jackson",
    Salary: 270000
}; 

document.write(typeof Employee);
document.write("<br>");

function nan_func() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function true_func (){
    document.getElementById("true").innerHTML = isNaN(Employee.LastName);
}

function false_func (){
    document.getElementById("false").innerHTML = isNaN(Employee.Salary);
}

var a = 3E21000;
function infinity_func (){
    document.getElementById("infinity").innerHTML = a;
}

function neg_infinity_func (){
    document.getElementById("neg_infinity").innerHTML = -a;
}

function bool_func (){
    document.getElementById("bool").innerHTML = (3%5)>(5%3);
}

console.log(2==5 && 4>2);

document.write (10===10);
document.write("<br>");

document.write (Employee.LastName===Employee.Salary);
document.write("<br>");

document.write(10==="10");
document.write("<br>");

document.write("What a wonderful day"==="What a wonderful day!")
document.write("<br>");

document.write(!isNaN("30") || isNaN(Employee.Name));
document.write("<br>");


