$(document.body).on('touchmove', onScroll); // for mobile
$(window).on('scroll', onScroll); 


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
// video.playbackRate = .8;

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "P<br>A<br>U<br>S<br>E<br>";
  } else {
    video.pause();
    btn.innerHTML = "P<br>L<br>A<br>Y";
  }
}

 $(function changevid1(){
    $('#myBtn2').click(function() {
      var src = "assets/spacewalk.mp4";
       $("#myVideo").attr("src", "../../assets/this.mp4");;
    });

});


  $(function changevid1(){
    $('#myBtn4').click(function() {
       $("#myVideo").attr("src", "../../assets/spacewalk.mp4");;
    });

});


  $(function changevid1(){
    $('#myBtn3').click(function() {
       $("#myVideo").attr("src", "../../assets/timelapse.mp4");;
    });

});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-22vmin";
  }
  prevScrollpos = currentScrollPos;
}


