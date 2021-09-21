function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";    
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");

function createObj() {
    document.getElementById("Constructors").innerHTML=
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
    " manufactured in " + Emily.Vehicle_Year;
}

function count_func () {
    document.getElementById("Nested function").innerHTML = isEvenNumber();
        function isEvenNumber () {
            var num = document.getElementById("Number").value;
            var res = (num%2==0)?true:false;
            return res;
        }

}