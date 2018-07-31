/**\
 * 1. create a html page to show the chat (window).
 *      1.1 It has below elements
 *             1. h1 - Heading
 *             2. div - message area 
 *             3. form - to type chat messages
 * 2. CSS Style for the page.
 * 3. Client side script.
 *      1.  create a socket (event object) using socket.io.min.js file.
 *      2.  on ("disconnect") - change page heading
 *      3.  on ("connect") - update page heading.
 *      4.  on ("message") - update  message area.
 * 
 */



var socket = io("http://localhost:3000");

socket.on("disconnect", function() {
	setTitle("Disconnected");
});

socket.on("connect", function() {
	setTitle("Connected to Cyber Chat");
});

socket.on("message", function(message) {
	printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
