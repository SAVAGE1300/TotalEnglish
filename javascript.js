// NAVBAR

// function myFunction() {
//     let x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }

// NAVBAR














// PRELOADER
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
// PRELOADER














// [ALL MODAL]


// MODAL1

// Get the modal
let modal1 = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById('myImg');
let modalImg1 = document.getElementById("img01");
let captionText1 = document.getElementById("caption");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// MODAL1




// MODAL_2

let modal2 = document.getElementById('myModal2');

let img2 = document.getElementById('myImg2');
let modalImg2 = document.getElementById("img02");
let captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// MODAL_2







//MODAL 3


let modal3 = document.getElementById('myModal3');

let img3 = document.getElementById('myImg3');
let modalImg3 = document.getElementById("img03");
let captionText3 = document.getElementById("caption3");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// MODAL 3

// [ALL MODAL]










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







// // LANGUAGE_CHANGE
// let language = {
//     eng: {
//         welcome: "what's the matter"
//     },
//     ru: {
//         welcome: "чо там брат"
//     }
// };
// if (window.location.hash) {
//     if (window.location.hash === "#ru"){
//         hi.textContent = language.ru.welcome;
//
//     }
// }
// // LANGUAGE_CHANGE
//
















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





// CALL ICON

document.querySelector('.topcall a').addEventListener('click', function(event) {

    event.preventDefault();

    window.location.href = this.href;

});

// CALL ICON

