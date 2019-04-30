// When the user submits their name change the greeting to include their name

//get access to the button and setup an event handler
var button = document.getElementById("submit");

button.onclick = changeGreeting;

function changeGreeting ()
{
    var greeting = document.getElementsByTagName("h1")[0];
    var input = document.getElementById("name").value;
    greeting.innerHTML = "Hello, " + input;
}