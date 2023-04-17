













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
    if (document.body.scrollTop  > 150 || document.documentElement.scrollTop > 200){
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







// LANGUAGE CHANGER

const languageSelect = document.getElementById("language-select");

languageSelect.addEventListener("change", function() {
    const language = languageSelect.value;

    const text1 = document.getElementById("text-1");
    const text1Content = text1.querySelector("text");

    const text2 = document.getElementById("text-2");
    const text2Content = text2.querySelector("text");

    const text3 = document.getElementById("text-3");
    const text3Content = text3.querySelector("text");

    const text4 = document.getElementById("text-4");
    const text4Content = text4.querySelector("text");

    const text5 = document.getElementById("text-5");
    const text5Content = text5.querySelector("b");

    const text6 = document.getElementById("text-6");
    const text6Content = text6.querySelector("text");

    const text7 = document.getElementById("text-7");
    const text7Content = text7.querySelector("span");

    const text8 = document.getElementById("text-8");
    const text8Content = text8.querySelector("b");

    const text9 = document.getElementById("text-9");
    const text9Content = text9.querySelector("text");

    const text10 = document.getElementById("text-10");
    const text10Content = text10.querySelector("span");

    const text11 = document.getElementById("text-11");
    const text11Content = text11.querySelector("b");

    const text12 = document.getElementById("text-12");
    const text12Content = text12.querySelector("text");

    const text13 = document.getElementById("text-13");
    const text13Content = text13.querySelector("span");

    const text14 = document.getElementById("text-14");
    const text14Content = text14.querySelector("text");

    const text15 = document.getElementById("text-15");
    const text15Content = text15.querySelector("text");



    text1Content.textContent = text1Content.getAttribute(`data-${language}`);
    text2Content.textContent = text2Content.getAttribute(`data-${language}`);
    text3Content.textContent = text3Content.getAttribute(`data-${language}`);
    text4Content.textContent = text4Content.getAttribute(`data-${language}`);
    text5Content.textContent = text5Content.getAttribute(`data-${language}`);
    text6Content.textContent = text6Content.getAttribute(`data-${language}`);
    text7Content.textContent = text7Content.getAttribute(`data-${language}`);
    text8Content.textContent = text8Content.getAttribute(`data-${language}`);
    text9Content.textContent = text9Content.getAttribute(`data-${language}`);
    text10Content.textContent = text10Content.getAttribute(`data-${language}`);
    text11Content.textContent = text11Content.getAttribute(`data-${language}`);
    text12Content.textContent = text12Content.getAttribute(`data-${language}`);
    text13Content.textContent = text13Content.getAttribute(`data-${language}`);
    text14Content.textContent = text14Content.getAttribute(`data-${language}`);
    text15Content.textContent = text15Content.getAttribute(`data-${language}`);
});


// LANGUAGE CHANGER













// BACKGROUND ANIMATION

const bg = document.createElement('div');
bg.classList.add('bg');

for (let i = 1; i <= 75; i++) {
    const dotWrapper = document.createElement('div');
    dotWrapper.classList.add(`dotWrapper`, `dotWrapper-${i}`);
    dotWrapper.style.top = `${Math.floor(Math.random() * 100)}%`;
    dotWrapper.style.left = `${Math.floor(Math.random() * 100)}%`;
    dotWrapper.style.animation = `flying ${Math.floor(Math.random() * 50) + 20}s ease-in-out ${Math.floor(Math.random() * -10)}s infinite alternate`;

    for (let j = 1; j <= 50; j++) {
        const dot = document.createElement('div');
        dot.classList.add(`dot`, `dot-${j}`);
        dot.style.transformOrigin = `${Math.floor(Math.random() * 30) - 15}px ${Math.floor(Math.random() * 30) - 15}px`;
        dot.style.animation = `rotating ${Math.floor(Math.random() * 20) + 10}s ease-in-out ${Math.floor(Math.random() * -10)}s infinite`;
        dotWrapper.appendChild(dot);
    }

    bg.appendChild(dotWrapper);
}

document.querySelectorAll('section:not(:last-of-type)').forEach(section => {
    section.appendChild(bg.cloneNode(true));
});


// BACKGROUND ANIMATION









