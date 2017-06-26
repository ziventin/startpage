var dest = ""
var search_dest = "https://duckduckgo.com/?q="
function getletter() {
	var x = document.querySelectorAll(".all");
	var x_len = x.length;
	for (i=0;i < x_len;i++) { x[i].style.visibility="hidden";x[i].style.display="none" }
	var letter = document.getElementById('input').value;
	dest = ""
    document.getElementById("input").value = "";
	if (letter.toLowerCase() == letter) {
    changeDest(letter);
	colorSwitch(letter)
	}else{
	changeSearch(letter);
	colorSwitch(letter)
	}
}

function changeDest(a) {
	document.getElementById(a).style.display = "inline";
	document.getElementById(a).style.visibility = "visible";
	dest = document.getElementById(a).title;
}

function changeSearch(a) {
	search_dest = document.getElementById(a).title;
	document.getElementById("search_but").innerHTML = document.getElementById(a).innerHTML
}



function search_func() {
	window.location.href = search_dest + document.getElementById('search_inp').value;
}

function colorSwitch(a){
var color = document.getElementById(a).style.color;
var back = document.getElementById(a).style.backgroundColor;
document.getElementById("welcome").style.color = color;
document.getElementById("search_but").style.color = color;
document.getElementById("search_but").style.backgroundColor = back;
document.getElementById("search_inp").style.borderColor = color;
document.getElementById("search_but").style.borderColor = color;
if (color == "black") document.getElementById("welcome").style.color = "gray";
}