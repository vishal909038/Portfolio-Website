// typing animation

const text = "Frontend Web Developer | HTML | CSS | JavaScript";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();


// mobile menu

const menu = document.getElementById("menu");

const navLinks = document.getElementById("nav-links");

menu.onclick = function(){

navLinks.classList.toggle("active");

};