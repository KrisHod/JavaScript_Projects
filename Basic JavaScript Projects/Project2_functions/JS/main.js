function Change_Color(){
    var str = "This text can change color and size :-)".fontcolor("red").fontsize(14);
    document.getElementById("changing_text").innerHTML = str;
}

function concat_function() {
    var sentence = "I'm learning "; //assigning variable
    sentence += "a lot from StackOverFlow!"; //concatenating two part of sentence
    document.getElementById("Concat").innerHTML = sentence; //putting the value of the variable sentence into HTML element with "Concat" id
}