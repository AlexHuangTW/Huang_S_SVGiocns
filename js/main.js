console.log('Javascript is running');

/*
this is a js block comment

the let statment creates a variable - a chunk of computer memory that 
can hold references to data that you want to save. we're storing a
reference to an element on the page with this line - we're telling
JavaScript to look for the element with the ID we specify inside of the
round brackets (the image tag with the ID of bitmapGraphic)

document refers to the imdex.html page; querySelector

*/

// step 1 - select the elements you want the user to interact with
// let bitmapGraphic = document.querySelector("#bitmapGraphic");
let vectorGraphic = document.querySelector("#vectorGraphic");
let vectorGraphic2 = document.querySelector("#vectorGraphic2");
let vectorGraphic3 = document.querySelector("#vectorGraphic3");
let vectorGraphic4 = document.querySelector("#vectorGraphic4");
let vectorGraphic5 = document.querySelector("#vectorGraphic5");
let vectorGraphic6 = document.querySelector("#vectorGraphic6");
let vectorGraphic7 = document.querySelector("#vectorGraphic7");
let vectorGraphic8 = document.querySelector("#vectorGraphic8");
let vectorGraphic9 = document.querySelector("#vectorGraphic9");
let vectorGraphic10 = document.querySelector("#vectorGraphic10");
let vectorGraphic11 = document.querySelector("#vectorGraphic11");
let vectorGraphic12 = document.querySelector("#vectorGraphic12");

// step 3 - what happens when events are triggered?
function logID() {
    console.log(this.id);
}

// step #2 - how do you want the user to interact with the element
// bitmapGraphic.addEventListener('click', logID);
vectorGraphic.addEventListener('click', logID);
vectorGraphic2.addEventListener('click', logID);
vectorGraphic3.addEventListener('click', logID);
vectorGraphic4.addEventListener('click', logID);
vectorGraphic5.addEventListener('click', logID);
vectorGraphic6.addEventListener('click', logID);
vectorGraphic7.addEventListener('click', logID);
vectorGraphic8.addEventListener('click', logID);
vectorGraphic9.addEventListener('click', logID);
vectorGraphic10.addEventListener('click', logID);
vectorGraphic11.addEventListener('click', logID);
vectorGraphic12.addEventListener('click', logID);