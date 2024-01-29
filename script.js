// function tap() {
//     var inputnum = document.getElementById("seven-da").value
//     document.getElementById("screen").innerHTML = inputnum
  
// }

function tapClik(val) {
    console.log(val);
    document.getElementById("screen").value = document.getElementById("screen").value + val;
}
function clearDisplay(){
    document.getElementById("screen").value = ""
}

function equaldisplay(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}