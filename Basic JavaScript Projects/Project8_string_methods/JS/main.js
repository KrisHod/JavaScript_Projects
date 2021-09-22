function Concat_Function() {
    var beginning = document.getElementById("Beginning").value;
    var end = document.getElementById("End").value;
    document.getElementById("Full").innerHTML = beginning.concat(end);
}

function slice_func () {
    var sentence = "You are my world!";
    var slice = sentence.slice(11, 16);
    document.getElementById("slice").innerHTML = slice;
}

var str = "I'm learning js";
document.write (str.toUpperCase().search("JS"));

function Cut_Function() {
    var num = document.getElementById("number").value;
    console.log(typeof num);
    var strToNum = parseInt(num, 10);
    var res = strToNum.toPrecision(4);
    document.getElementById("Result").innerHTML = res.toString();
}
