function getInput(){
var text =$("table.inputPanel > tbody").innerText
text = text.split("change display format");
return text[0];
}

$(".txtInput").value = "$" + getInput(); // after deleting the $ you win the race
