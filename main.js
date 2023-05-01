/*******Nav*******/
var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

/**** Progress indicator****/
window.onscroll = function () { myFunction() };

function myFunction() {
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;
   document.getElementById("myBar").style.width = scrolled + "%";
}

/** DARKMODE*/
/**function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}*/


/* const links = document.querySelectorAll('a');
const slide = document.querySelector('span');
links.forEach((ele, index) => {
   ele.addE
}) */

/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "10px";
  } else {
    document.getElementById("header").style.fontSize = "1em";
  }
} */





/********* modal 1 ************/
let modal_1 = document.getElementById("myModal_1");
let btn_1 = document.getElementById("myBtn_1");
let span_1 = document.getElementsByClassName("close_1")[0];


btn_1.onclick = function() {
  modal_1.style.display = "block";
}

span_1.onclick = function() {
  modal_1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_1) {
    modal_1.style.display = "none";
  }
}

/********* modal 2 ************/
let modal_2 = document.getElementById("myModal_2");
let btn_2 = document.getElementById("myBtn_2");
let span_2 = document.getElementsByClassName("close_2")[0];


btn_2.onclick = function() {
  modal_2.style.display = "block";
}

span_2.onclick = function() {
  modal_2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
}

/****** ADDtoCART ******/
const button = document.querySelector(".addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener('click',()=>{
  if(added){
    done.style.transform = "translate(-110%) skew(-40deg)";
    added = false;
  }
  else{
    done.style.transform = "translate(0px)";
    added = true;
  }
    
});
