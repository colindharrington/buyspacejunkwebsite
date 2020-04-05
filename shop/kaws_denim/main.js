document.getElementById("soundclick").onclick = function() {myFunction()};

function myFunction() {
  var x = document.getElementById("sound");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}