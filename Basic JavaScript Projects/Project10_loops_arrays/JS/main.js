function While_loop_func() {
  var count = 0;
  let rands = [];
  while(count<5) {
    rands.push ((Math.random() * 5).toPrecision(4));
    count++;
  }
  document.getElementById("Loop").innerHTML=rands;
}


var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet"];
var res = "";
//var count;

function For_loop_func() {
  for(var count=0; count<instruments.length; count++) {
    res += instruments[count] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = res;
}

function Car_func(){
  let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function(){
      return "The car is a " + this.year + this.color + this.make + this.model;
    }
  };
  document.getElementById("Car").innerHTML = car.description();

}