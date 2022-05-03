// NAVBAR

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// NAVBAR












// PRELOADER
let loader = document.getElementById("preloader")
window.addEventListener("load", function () {
    loader.style.display = "none"
    loader.style.transition = "3s"
})
// PRELOADER















// MODAL

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// MODAL


// MODAL_2

var modal = document.getElementById('myModal2');

var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// MODAL_2


















// SCROLL

window.onscroll = function() {scrollFunction1()};
let position  = document.getElementById("myTopnav").style.background = "#333333"
function scrollFunction1() {
    if (document.body.scrollTop  > 150 || document.documentElement.scrollTop > 150){
        document.getElementById("myTopnav").style.opacity = "0.8"
        document.getElementById("myTopnav").style.transition = "1s"
        document.getElementsByClassName("red").style.opacity = "1"
    }
    else  {
        document.getElementById("myTopnav").style.background = "#333333"
        document.getElementById("myTopnav").style.transition = "1s"
        document.getElementById("myTopnav").style.opacity = "1"
    }
}

// SCROLL







// LANGUAGE_CHANGE
var language = {
    eng: {
        welcome: "what's the matter"
    },
    ru: {
        welcome: "чо там брат"
    }
};
if (window.location.hash) {
    if (window.location.hash === "#ru"){
        hi.textContent = language.ru.welcome;

    }
}
// LANGUAGE_CHANGE

















// GO TO TOP button

let mybutton = document.getElementById("myBtn")
window.onscroll = function () {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        mybutton.style.display = "block"
    }
    else {
        mybutton.style.display = "none"
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// GO TO TOP button




