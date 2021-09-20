function Change_Color(){
    var str = "This text can change color and size :-)".fontcolor("red").fontsize(14);
    document.getElementById("changing_text").innerHTML = str;
}

function concat_function() {
    var sentence = "I'm learning ";
    sentence += "a lot from StackOverFlow!";
    document.getElementById("Concat").innerHTML = sentence;
}