function mute(){
  if(myVideo.muted == false){
    myVideo.muted = true;
    var element = document.getElementById("fa-volume")
    element.classList.remove("fa-volume-high")
    element.classList.add("fa-volume-xmark")
  } else {
    myVideo.muted = false;
    var element = document.getElementById("fa-volume")
    element.classList.remove("fa-volume-xmark")
    element.classList.add("fa-volume-high")
  }
}

function burger(){
  var element = document.getElementById("nav-resp");
  element.classList.toggle("opac");
}

function cont(){
  var element = document.getElementById('nav-resp');
  element.classList.remove('opac');
}

topAR = document.getElementById("topAR");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 100) {
        topAR.className = "topArrow show"
    } else {
        topAR.className = "topArrow hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

sCR = document.getElementById("nav-resp")

var scrollFunc = function () {
  var y = window.scrollY;
  if (y >= 10) {
      sCR.classList.remove("opac");
  } else {
      sCR.classList.remove("opac")
  }
};

window.addEventListener("scroll", scrollFunc);


